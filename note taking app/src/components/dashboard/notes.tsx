import NoteList from './note-list';
import Title from './title';

const Notes = () => {
  return (
    <div className='flex flex-col gap-7'>
      <Title title='All Notes' />
      <NoteList />
    </div>
  );
};
export default Notes;
