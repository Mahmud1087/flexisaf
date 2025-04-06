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
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo distinctio, fugit consectetur sed reprehenderit ab temporibus molestiae dicta doloremque totam sint asperiores ipsa odio perferendis illo maxime voluptatibus, debitis fuga enim nisi sit rem doloribus. Ea, blanditiis facilis? Ratione ducimus, repudiandae consequuntur quisquam voluptatem esse suscipit doloremque officiis dolores nesciunt, exercitationem adipisci et nemo reiciendis error dolorum cumque incidunt, distinctio eaque harum repellendus ab qui quasi. Exercitationem, neque aspernatur. Maiores architecto animi nihil explicabo quae error, dolorem modi at eaque, temporibus sunt rerum maxime, provident eveniet vitae velit hic quisquam quas nesciunt repellat id? Accusamus ipsum doloribus molestias, voluptatum amet necessitatibus, perferendis, tempore ad eligendi exercitationem deserunt ullam a quidem! Nulla, dignissimos consequuntur. Obcaecati vero sapiente unde eos pariatur illum perspiciatis quidem maxime consectetur ipsam voluptas quis aliquid, ipsum et temporibus, ad sint rerum commodi alias voluptate veniam enim? Nulla eum voluptatibus, ipsum repellat quas in delectus deserunt alias obcaecati mollitia velit ad sed ab libero iusto aliquid esse, sint similique quae, ducimus cum. Quas, repudiandae sint magni nesciunt dicta architecto aliquam iusto illum accusamus voluptas minima nemo ipsum quae porro ipsam illo molestiae a deserunt possimus et labore modi dolor. Aperiam atque, eveniet unde dignissimos cumque suscipit quod, ab aliquam distinctio voluptates veritatis ipsam accusamus laboriosam mollitia, quia qui beatae dolores numquam quidem cupiditate minima nostrum harum debitis? Architecto voluptatum culpa dignissimos nostrum autem neque rerum, accusantium consequatur ipsum cupiditate reiciendis nam laborum sapiente animi odit vitae voluptas quis magnam adipisci nulla. Exercitationem nobis ullam maiores dicta, libero illo veniam repellat eos pariatur, odio nemo optio vitae tenetur animi assumenda voluptatum provident atque ex aspernatur! Officia debitis alias animi consequuntur esse fugiat id quo doloribus, aut sequi atque eaque? Doloribus consequatur animi mollitia, architecto a obcaecati iure voluptatibus sint eveniet labore quibusdam laboriosam quos iusto, amet eius ullam quasi veniam. Nobis perferendis aliquid odit eum vitae fugit accusamus omnis pariatur quaerat placeat dolorem, recusandae eveniet, voluptatem facere magni officia mollitia illo. Pariatur odit alias ut ratione. Cumque placeat error minima magnam ipsa natus deserunt beatae quis ad nisi odit, rem adipisci ab, eligendi alias soluta quae facilis molestiae, libero dolores? Maiores, cupiditate adipisci ipsum itaque aspernatur optio expedita. Cupiditate dolor asperiores voluptatum molestias veritatis quod impedit reprehenderit consequatur animi architecto excepturi similique alias, nam magni dignissimos corporis ut ex officia laboriosam dolorem error. Eveniet voluptatibus unde consectetur, dignissimos corporis, illum fuga doloribus deserunt fugit laboriosam itaque eius omnis consequatur necessitatibus aliquid praesentium aspernatur pariatur? Hic, sed explicabo in et numquam doloremque quam quibusdam praesentium? Vel, deserunt expedita nobis nostrum voluptatum reiciendis delectus pariatur laudantium enim reprehenderit. Ipsam repellendus veniam unde quae, sit explicabo repudiandae nisi! Necessitatibus nostrum, esse dolorem magnam, perferendis cumque totam facilis, velit ipsum veritatis non. Laborum, eum libero? Culpa nemo, asperiores iste recusandae, delectus at inventore corrupti nesciunt mollitia facilis soluta quia, non est aliquid quidem dolor. Eum est quaerat sit eos voluptas perspiciatis consectetur maiores ab unde iusto veniam consequuntur aspernatur illo minima qui suscipit harum, dignissimos fuga aperiam modi voluptatum quis maxime! Suscipit culpa maiores fugit placeat sed ex vero, aut vel odit, dolor dolore soluta exercitationem consequatur iure. Repellat, blanditiis dolore? Tempore quae libero ratione. Animi inventore dolorum hic quo? Ex, voluptates tempore provident expedita eos officia distinctio. Nihil, distinctio adipisci. Quod nostrum corporis nobis quaerat voluptates voluptas temporibus, commodi repellendus facere deserunt vitae pariatur tenetur ad facilis?',
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
            <CardContent className='space-y-2 px-2.5 h-full lg:h-56'>
              <div className='flex justify-between text-sm text-gray-700 dark:text-background font-medium'>
                <span>{note.date}</span>
                <div className='h-6 w-6 flex items-center justify-center shadow-lg bg-background rounded-full cursor-pointer text-foreground'>
                  <Pencil size={12} />
                </div>
              </div>
              <h3 className='text-lg font-semibold dark:text-gray-800'>
                {note.title.slice(0, 25)}
              </h3>
              <p className='text-sm text-gray-600 hidden h-32 overflow-y-hidden lg:block'>
                {note.content}
              </p>
              <p className='text-sm text-gray-800 lg:hidden'>
                {note.content.slice(0, 30) + '...'}
              </p>
              <div className='mt-5'>
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
