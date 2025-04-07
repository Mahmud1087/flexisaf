import { Pencil } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { NoteListType, CategoryType } from '@/types';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Flex } from 'antd';
import { Badge } from '../ui/badge';
import ConfirmDelete from './confirm-delete';
import { useNavigate } from '@/hooks';
import { DASHBOARD_PAGE } from '@/config';

const NoteList = ({ notes }: { notes: NoteListType }) => {
  const [filteredNotes, setFilteredNotes] = useState<NoteListType | null>(null);

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
    setNotesTab(item as CategoryType);
    localStorage.setItem('notesTab', item);
  };

  const { navigate } = useNavigate();

  useEffect(() => {
    localStorage.setItem('notesTab', notesTab as string);

    // Filter notes based on current tab
    let filteredNotes;
    if (notesTab === 'Others') {
      filteredNotes = notes.filter(
        (note) =>
          note.categories !== 'General' &&
          note.categories !== 'School' &&
          note.categories !== 'Work' &&
          note.categories !== 'Business' &&
          note.categories !== 'All' &&
          note.categories !== 'Others'
      );
    } else if (notesTab === 'All') {
      filteredNotes = notes;
    } else {
      filteredNotes = notes.filter((note) => note.categories === notesTab);
    }
    setFilteredNotes(filteredNotes);
  }, [notesTab, notes]);

  return (
    <div className=''>
      <div className='flex flex-col-reverse gap-3.5 mb-6 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-center justify-between'>
          <p className='text-base font-medium text-gray-600 dark:text-slate-300'>
            📅 {dayjs(Date.now()).format('MMMM YYYY')}
          </p>

          <Select onValueChange={(val) => changeNotesTab(val)}>
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

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-4'>
        {filteredNotes?.length === 0 ? (
          <div className='mt-20 text-center text-4xl tertiary-font'>
            No Notes Available
          </div>
        ) : (
          filteredNotes?.map((note) => (
            <Card
              key={note._id}
              className={`${note.bgColor} rounded-xl shadow cursor-pointer transition-all hover:scale-95 active:scale-100`}
              onClick={() => navigate(`${DASHBOARD_PAGE}/${note._id}`)}
            >
              <CardContent className='space-y-2 px-2.5 h-full lg:h-56'>
                <div className='flex justify-between text-sm text-gray-700 dark:text-background font-medium'>
                  <span>{dayjs(note._creationTime).format('YYYY-MM-DD')}</span>
                  <Flex gap={12}>
                    <ConfirmDelete id={note._id} />
                    <div className='h-6 w-6 flex items-center justify-center shadow-lg bg-background rounded-full cursor-pointer text-foreground'>
                      <Pencil size={12} />
                    </div>
                  </Flex>
                </div>
                <h3 className='text-lg font-semibold dark:text-gray-800 capitalize'>
                  {note.title.slice(0, 25)}
                </h3>
                <p className='text-sm text-gray-600 hidden h-32 overflow-y-hidden lg:block'>
                  {note.content}
                </p>
                <p className='text-sm text-gray-800 lg:hidden'>
                  {note.content.slice(0, 30) + '...'}
                </p>
                <div className='mt-5'>
                  <Flex justify='space-between'>
                    <Flex gap={5}>
                      {note.tags
                        .split(' ')
                        .splice(0, 2)
                        .map((tag, i) => {
                          return (
                            <Badge key={i} className='rounded-full text-white'>
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
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
export default NoteList;
