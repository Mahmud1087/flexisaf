import NoteList from './note-list';
import Title from './title';

const Archive = () => {
  return (
    <div className='flex flex-col gap-7'>
      <Title title='Archive' />
      <NoteList />
    </div>
  );
};
export default Archive;
