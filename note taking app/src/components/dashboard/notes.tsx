import NoteList from './note-list';
import Title from './title';
import { useDashboardContext } from '@/store/contexts';

const Notes = () => {
  const { notes } = useDashboardContext();

  return (
    <div className='flex flex-col gap-5'>
      <Title title='Notes' />
      <NoteList notes={notes} />
    </div>
  );
};
export default Notes;
