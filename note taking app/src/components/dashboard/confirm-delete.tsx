import { DeleteFilled, LoadingOutlined } from '@ant-design/icons';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { useToastContext } from '@/store/contexts';
import { Id, TableNames } from 'convex/_generated/dataModel';
import { SystemTableNames } from 'convex/server';
import { Flex } from 'antd';

type Props = {
  id: Id<TableNames | SystemTableNames>;
};

const ConfirmDelete = ({ id }: Props) => {
  const { open } = useToastContext();
  const removeNote = useMutation(api.notes.removeNote);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleRemoveNote = async (id: any) => {
    setLoading(true);
    try {
      const res = await removeNote({ id });
      if (res) {
        open({
          message: res,
          type: 'success',
          duration: 5,
        });
      }
      setOpenModal(false);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'Something went wrong'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>
        <div className='h-6 w-6 flex items-center justify-center shadow-lg bg-black rounded-full cursor-pointer text-red-500 text-sm'>
          <DeleteFilled />
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-96'>
        <p className='text-center text-sm text-gray-700 dark:text-gray-100 lg:text-base'>
          Are you sure you want to delete?
          <br /> This action cannot be undone
        </p>

        <Flex gap={15} align='center' justify='space-center'>
          <Button
            form='add-note-form'
            disabled={loading}
            onClick={() => setOpenModal(false)}
            variant={'secondary'}
            size={'sm'}
            className='w-1/2'
          >
            <p className=''>Cancel</p>
          </Button>
          <Button
            form='add-note-form'
            type='submit'
            disabled={loading}
            onClick={() => handleRemoveNote(id)}
            variant={'destructive'}
            size={'sm'}
            className='w-1/2'
          >
            {loading ? (
              <LoadingOutlined />
            ) : (
              <p className='text-white'>Delete</p>
            )}
          </Button>
        </Flex>
      </DialogContent>
    </Dialog>
  );
};
export default ConfirmDelete;
