/* eslint-disable react-hooks/exhaustive-deps */
import { Card, CardContent } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { NoteListType, CategoryType } from '@/types';
import { useEffect, useState, useRef } from 'react';
import dayjs from 'dayjs';
import { Flex } from 'antd';
import { Badge } from '../ui/badge';
import ConfirmDelete from './confirm-delete';
import { useNavigate } from '@/hooks';
import { DASHBOARD_PAGE } from '@/config';
import EditNote from './edit-note-modal';
import Markdown from 'react-markdown';
import { useDashboardContext } from '@/store/contexts';
import { Skeleton } from '../ui/skeleton';

import {
  draggable,
  dropTargetForElements,
  monitorForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

const NoteList = ({
  notes: initialNotes,
}: {
  notes: NoteListType | undefined;
}) => {
  const { setFilterInput, setFilterType } = useDashboardContext();
  const [notes, setNotes] = useState<NoteListType | undefined>(initialNotes);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we have a saved order in localStorage
    if (initialNotes && initialNotes.length > 0) {
      const savedOrderString = localStorage.getItem('notesOrder');
      if (savedOrderString) {
        try {
          // Parse the saved order
          const savedOrder = JSON.parse(savedOrderString);

          // Create an ordered array based on saved positions
          const orderedNotes = [...initialNotes];
          orderedNotes.sort((a, b) => {
            const indexA = savedOrder.indexOf(a._id);
            const indexB = savedOrder.indexOf(b._id);

            // If note isn't in saved order, place it at the end
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;

            return indexA - indexB;
          });

          setNotes(orderedNotes);
        } catch (e) {
          // If there's an error parsing, just use the initial notes
          setNotes(initialNotes);
          throw new Error(e instanceof Error ? e.message : 'Error reordering');
        }
      } else {
        setNotes(initialNotes);
      }
    } else {
      setNotes(initialNotes);
    }
  }, [initialNotes]);

  const getInitialNotesTab = (): CategoryType => {
    const stored = localStorage.getItem('notesTab') as CategoryType | null;
    if (
      stored === 'General' ||
      stored === 'Business' ||
      stored === 'School' ||
      stored === 'Work' ||
      stored === 'Others' ||
      stored === 'All'
    ) {
      return stored;
    }
    localStorage.setItem('notesTab', 'All');
    return 'All';
  };

  const [notesTab, setNotesTab] = useState<CategoryType>(() =>
    getInitialNotesTab()
  );

  const changeNotesTab = (item: string) => {
    localStorage.setItem('notesTab', item);
    setFilterType('select');
    setNotesTab(item as CategoryType);
  };

  const { navigate } = useNavigate();

  useEffect(() => {
    localStorage.setItem('notesTab', notesTab as string);
    setFilterInput(notesTab as string);
  }, [notesTab]);

  // Function to save the current note order to localStorage
  const saveNoteOrderToLocalStorage = (orderedNotes: NoteListType) => {
    if (!orderedNotes) return;

    // Extract just the IDs to make storage more efficient
    const orderIds = orderedNotes.map((note) => note._id);
    localStorage.setItem('notesOrder', JSON.stringify(orderIds));
  };

  useEffect(() => {
    if (!containerRef.current || !notes?.length) return;

    const noteElements =
      containerRef.current.querySelectorAll('[data-note-id]');

    const cleanupFunctions: (() => void)[] = [];

    noteElements.forEach((noteElement) => {
      const noteId = noteElement.getAttribute('data-note-id') || '';

      const cleanup = draggable({
        element: noteElement as HTMLElement,
        dragHandle: noteElement.querySelector(
          '[data-drag-handle]'
        ) as HTMLElement,
        getInitialData: () => ({ id: noteId }),
      });

      cleanupFunctions.push(cleanup);
    });

    if (containerRef.current) {
      const dropTargetCleanup = dropTargetForElements({
        element: containerRef.current,
      });
      cleanupFunctions.push(dropTargetCleanup);
    }

    const monitorCleanup = monitorForElements({
      onDrop: ({ source, location }) => {
        if (!source.data.id || !location.current.dropTargets.length || !notes) {
          return;
        }

        const containerElement = location.current.dropTargets[0].element;
        const sourceIndex = notes.findIndex(
          (note) => note._id === source.data.id
        );

        if (sourceIndex === -1) return;

        const closestNoteElement = findClosestNoteElement(
          containerElement as HTMLElement,
          location.current.input.clientX,
          location.current.input.clientY
        );

        if (!closestNoteElement) return;

        const destinationNoteId =
          closestNoteElement.getAttribute('data-note-id');
        const destinationIndex = notes.findIndex(
          (note) => note._id === destinationNoteId
        );

        if (destinationIndex === -1) return;

        const reorderedNotes = [...notes];
        const [removed] = reorderedNotes.splice(sourceIndex, 1);
        reorderedNotes.splice(destinationIndex, 0, removed);

        setNotes(reorderedNotes);

        // Save the new order to localStorage
        saveNoteOrderToLocalStorage(reorderedNotes);
      },
    });

    cleanupFunctions.push(monitorCleanup);

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [notes]);

  const findClosestNoteElement = (
    container: HTMLElement,
    x: number,
    y: number
  ): HTMLElement | null => {
    const noteElements = Array.from(
      container.querySelectorAll('[data-note-id]')
    ) as HTMLElement[];

    if (!noteElements.length) return null;

    let closestElement = noteElements[0];
    let closestDistance = Number.MAX_VALUE;

    noteElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2)
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestElement = element;
      }
    });

    return closestElement;
  };

  return (
    <div className=''>
      <div className='flex flex-col-reverse gap-3.5 mb-6 md:flex-row md:items-center md:justify-between'>
        <div className='w-full flex flex-row-reverse items-center justify-between'>
          <p className='text-base font-medium text-gray-600 dark:text-slate-300'>
            📅 {dayjs(Date.now()).format('MMMM YYYY')}
          </p>

          <Select
            defaultValue={notesTab as string}
            onValueChange={(val) => changeNotesTab(val)}
          >
            <SelectTrigger className='w-[120px]'>
              <SelectValue placeholder={notesTab} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='All'>All</SelectItem>
              <SelectItem value='General'>General</SelectItem>
              <SelectItem value='Business'>Business</SelectItem>
              <SelectItem value='Work'>Work</SelectItem>
              <SelectItem value='School'>School</SelectItem>
              <SelectItem value='Others'>Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div ref={containerRef}>
        {notes?.length === 0 ? (
          <div className='mt-20 text-center text-4xl tertiary-font'>
            No Notes Available
          </div>
        ) : notes === undefined ? (
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-4'>
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <Skeleton className='space-y-2 px-2.5 h-32 lg:h-56 bg-gray-400' />
              </div>
            ))}
          </div>
        ) : (
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-4'>
            {notes?.map((note) => (
              <Card
                key={note._id}
                data-note-id={note._id}
                className={`${note.bgColor} rounded-xl shadow cursor-pointer transition-all hover:scale-95 active:scale-100`}
              >
                <CardContent
                  className='space-y-2 px-2.5 h-full lg:h-56 active:cursor-grabbing'
                  data-drag-handle
                >
                  <div className='flex justify-between text-sm text-gray-700 dark:text-background font-medium'>
                    <span>
                      {dayjs(note._creationTime).format('YYYY-MM-DD')}
                    </span>
                    <Flex gap={12} align='center'>
                      <div className='cursor-grab'></div>
                      <ConfirmDelete id={note._id} />
                      <EditNote {...note} />
                    </Flex>
                  </div>
                  <section
                    onClick={() => navigate(`${DASHBOARD_PAGE}/${note._id}`)}
                  >
                    <h3 className='text-lg font-semibold dark:text-gray-800 capitalize'>
                      {note.title.slice(0, 30)}
                    </h3>
                    <p className='text-sm text-gray-600 hidden h-32 overflow-y-hidden lg:block'>
                      <Markdown>{note.content}</Markdown>
                    </p>
                    <p className='text-sm text-gray-800 lg:hidden'>
                      <Markdown>
                        {note.content.length >= 45
                          ? note.content.slice(0, 45) + '...'
                          : note.content}
                      </Markdown>
                    </p>
                    <div className='mt-5'>
                      <Flex justify='space-between'>
                        <Flex gap={5}>
                          {note.tags
                            .split(' ')
                            .splice(0, 2)
                            .map((tag, i) => {
                              return (
                                <Badge
                                  key={i}
                                  className='rounded-full text-white'
                                >
                                  {tag.slice(1)}
                                </Badge>
                              );
                            })}
                        </Flex>
                        <p className='text-sm text-blue-900 text-end secondary-font font-semibold'>
                          {dayjs(note._creationTime).format('hh:mm A dddd')}
                        </p>
                      </Flex>
                    </div>
                  </section>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteList;
