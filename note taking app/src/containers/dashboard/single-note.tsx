import { api } from '@/../convex/_generated/api';
import { useQuery } from 'convex/react';
import dayjs from 'dayjs';
import { ArrowLeft } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Id, TableNames } from 'convex/_generated/dataModel';
import { SystemTableNames } from 'convex/server';
import { Button } from '@/components/ui/button';

import MarkDown from 'react-markdown';
import { useNavigate } from '@/hooks';
import { Badge } from '@/components/ui/badge';

export default function SingleNote() {
  const { singleNote } = useParams();
  const { goBack } = useNavigate();
  const notes = useQuery(api.notes.getAllNotes, {});
  const noteDetails = notes?.find(
    (note) => note._id === (singleNote as Id<TableNames | SystemTableNames>)
  );

  return (
    // <DashboardLayout>
    <div className='flex flex-col gap-14 p-6 lg:px-12 md:py-6'>
      <div className='flex items-center justify-between'>
        <Button variant={'outline'} onClick={goBack}>
          <ArrowLeft />
        </Button>
        <p className='text-base font-medium text-gray-600 dark:text-slate-300'>
          📅 {dayjs(noteDetails?._creationTime).format('dddd MMMM D, YYYY')}
        </p>
      </div>

      <div className='flex flex-col gap-5 w-[90%] mx-auto md:w-[80%] lg:w-[65%]'>
        <h1 className='tertiary-font text-4xl'>{noteDetails?.title}</h1>
        <div className='text-slate-600 text-base dark:text-gray-400'>
          <MarkDown>{noteDetails?.content}</MarkDown>
        </div>
        <div className='border-t'>
          <div className='pt-10'>
            <p className='text-gray-600 dark:text-gray-400'>
              Category:{' '}
              <Badge>
                <span className='text-white'>{noteDetails?.categories}</span>
              </Badge>
            </p>
          </div>
          <div className='mt-5'>
            <p className='text-gray-600 dark:text-gray-400 flex gap-3 '>
              Tags:{' '}
              {noteDetails?.tags.split(' ').map((tag, i) => (
                <Badge key={i} className='bg-orange-500'>
                  <span className='text-white'>{tag.slice(1)}</span>
                </Badge>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
    // </DashboardLayout>
  );
}
