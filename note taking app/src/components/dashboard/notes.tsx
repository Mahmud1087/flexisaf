import { useQuery } from 'convex/react';
import NoteList from './note-list';
import Title from './title';
import { api } from '@/../convex/_generated/api';
import { Skeleton } from '../ui/skeleton';

const Notes = () => {
  const notes = useQuery(api.notes.getAllNotes);

  if (!notes) {
    return (
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-4'>
        {Array(6)?.map((note) => (
          <div key={note._id}>
            <Skeleton className='space-y-2 px-2.5 h-32 lg:h-56' />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-5'>
      <Title title='Notes' />
      <NoteList notes={notes} />
    </div>
  );
};
export default Notes;
