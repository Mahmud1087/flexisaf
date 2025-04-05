import { Pencil } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { NotesTabListType } from '@/types';
import { useEffect, useState } from 'react';

const notes = [
  {
    id: 1,
    title: 'Mid test exam',
    category: 'School',
    tags: ['exam', 'math'],
    bgColor: 'bg-yellow-200',
    content:
      'Uticenere oditio congue lecos felis, libero egestas nunc augue in massa.',
    date: '2025-04-05',
    time: '10:30 PM, Monday',
  },
  {
    id: 2,
    title: 'Mid test exam',
    category: 'School',
    tags: ['exam', 'science'],
    bgColor: 'bg-red-200',
    content: 'In augue cursus of adipiscing felis, diam volutpat mauris.',
    date: '2025-04-05',
    time: '12:30 PM, Monday',
  },
  {
    id: 3,
    title: "Jonas's notes",
    category: 'Personal',
    tags: ['friend', 'journal'],
    bgColor: 'bg-blue-200',
    content:
      'Rocky viverra odio congue felis, libero egestas nunc augue in massa.',
    date: '2025-04-05',
    time: '08:15 PM, Sunday',
  },
  {
    id: 4,
    title: 'Grocery List',
    category: 'Home',
    tags: ['shopping', 'weekly'],
    bgColor: 'bg-green-200',
    content: 'Milk, Eggs, Bread, Butter, Spinach, Chicken.',
    date: '2025-04-03',
    time: '09:00 AM, Thursday',
  },
  {
    id: 5,
    title: 'Project Meeting Notes',
    category: 'Work',
    tags: ['meeting', 'project'],
    bgColor: 'bg-purple-200',
    content: 'Discussed project deliverables, due dates, and task assignments.',
    date: '2025-04-04',
    time: '02:00 PM, Friday',
  },
  {
    id: 6,
    title: 'Workout Plan',
    category: 'Fitness',
    tags: ['health', 'routine'],
    bgColor: 'bg-orange-200',
    content:
      'Monday: Cardio, Tuesday: Weights, Wednesday: Rest, Thursday: HIIT.',
    date: '2025-04-02',
    time: '06:30 AM, Wednesday',
  },
  {
    id: 7,
    title: 'Birthday Planning',
    category: 'Events',
    tags: ['birthday', 'party'],
    bgColor: 'bg-pink-200',
    content: 'Book venue, order cake, send invites, buy decorations.',
    date: '2025-04-10',
    time: '11:00 AM, Sunday',
  },
  {
    id: 8,
    title: 'Frontend Bugs',
    category: 'Development',
    tags: ['frontend', 'bugs'],
    bgColor: 'bg-sky-200',
    content: 'Navbar glitch on scroll, button not responsive on mobile.',
    date: '2025-04-01',
    time: '04:45 PM, Tuesday',
  },
  {
    id: 9,
    title: 'Recipe: Pasta Alfredo',
    category: 'Cooking',
    tags: ['recipe', 'dinner'],
    bgColor: 'bg-lime-200',
    content: 'Butter, cream, garlic, parmesan, fettuccine, parsley.',
    date: '2025-04-04',
    time: '07:00 PM, Friday',
  },
  {
    id: 10,
    title: 'Reading List',
    category: 'Personal',
    tags: ['books', 'wishlist'],
    bgColor: 'bg-amber-200',
    content: 'Atomic Habits, Deep Work, The Alchemist, Zero to One.',
    date: '2025-04-02',
    time: '08:00 PM, Wednesday',
  },
];

const NoteList = () => {
  const getInitialNotesTab = (): NotesTabListType => {
    const stored = localStorage.getItem('notesTab') as NotesTabListType | null;
    if (
      stored === 'Today' ||
      stored === 'This Week' ||
      stored === 'This Month' ||
      stored === 'This Year'
    ) {
      return stored;
    }
    localStorage.setItem('notesTab', 'Today');
    return 'Today';
  };

  const [notesTab, setNotesTab] = useState<NotesTabListType>(() =>
    getInitialNotesTab()
  );

  const changeNotesTab = (item: string) => {
    setNotesTab(item as NotesTabListType);
    localStorage.setItem('notesTab', item);
  };

  useEffect(() => {
    localStorage.setItem('notesTab', notesTab);
  }, [notesTab]);

  return (
    <div className=''>
      <div className='flex flex-col-reverse gap-3.5 mb-6 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-center justify-end'>
          <Select onValueChange={(val) => changeNotesTab(val)}>
            <SelectTrigger className='w-[120px]'>
              <SelectValue placeholder={notesTab} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Today'>Today</SelectItem>
              <SelectItem value='This Week'>This week</SelectItem>
              <SelectItem value='This Month'>This month</SelectItem>
              <SelectItem value='This Year'>This year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-4'>
        {notes.map((note) => (
          <Card
            key={note.id}
            className={`${note.bgColor} rounded-xl shadow-none`}
          >
            <CardContent className='space-y-2 px-2.5'>
              <div className='flex justify-between text-sm text-gray-700 dark:text-background font-medium'>
                <span>{note.date}</span>
                <div className='h-6 w-6 flex items-center justify-center shadow-lg bg-background rounded-full cursor-pointer text-foreground'>
                  <Pencil size={12} />
                </div>
              </div>
              <h3 className='text-lg font-semibold dark:text-gray-600'>
                {note.title}
              </h3>
              <p className='text-sm text-gray-800 hidden md:block'>
                {note.content}
              </p>
              <p className='text-sm text-gray-800 md:hidden'>
                {note.content.slice(0, 35) + '...'}
              </p>
              <div className='mt-5 md:mt-0'>
                <p className='text-xs text-blue-900 text-end secondary-font font-semibold'>
                  {note.time}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default NoteList;
