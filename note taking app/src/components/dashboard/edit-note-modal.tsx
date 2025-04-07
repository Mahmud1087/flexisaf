import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import RichTextEditor from './editor';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { CategoryType, SingleNoteType } from '@/types';
import { ScrollArea } from '../ui/scroll-area';
import { useMutation } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { useToastContext } from '@/store/contexts';
import { Pencil } from 'lucide-react';
import { Id } from 'convex/_generated/dataModel';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  content: z.string(),
  categories: z.string({
    message: 'Please select at least one categories.',
  }),
  others: z.string(),
  tags: z.string(),
});

export default function EditNote({
  _id,
  categories,
  content,
  tags,
  title,
}: SingleNoteType) {
  const [editNoteModal, setEditNoteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState(content);
  const { open } = useToastContext();
  const [category, setCategory] = useState<CategoryType>(null);

  const editNote = useMutation(api.notes.editNote);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title,
      content,
      categories,
      others: '',
      tags,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      title: values.title,
      content: note,
      categories: category === 'Others' ? values.others : (category as string),
      tags: values.tags,
    };
    setLoading(true);
    try {
      const res = await editNote({ id: _id as Id<'allNotes'>, ...data });
      open({
        message: res,
        type: 'success',
        duration: 5,
      });
      form.reset();
      setNote('');
      setCategory('General');
      setEditNoteModal(false);
    } catch (error) {
      open({
        message: error instanceof Error ? error.message : 'Failed to edit note',
        type: 'error',
        duration: 5,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={editNoteModal} onOpenChange={setEditNoteModal}>
      <DialogTrigger asChild>
        <div className='h-6 w-6 flex items-center justify-center shadow-lg bg-background rounded-full cursor-pointer text-foreground'>
          <Pencil size={12} />
        </div>
      </DialogTrigger>
      <DialogContent
        key={editNoteModal ? 'open' : 'closed'}
        className='sm:max-w-[425px]'
      >
        <ScrollArea className='sm:max-w-[425px] max-h-[80vh]'>
          <DialogHeader>
            <DialogTitle>Edit Note</DialogTitle>
            {/* <DialogDescription>
              Fill the form to add a new note.
            </DialogDescription> */}
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <Form {...form}>
              <form
                id='edit-note-form'
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
                <FormField
                  control={form.control}
                  defaultValue={title}
                  name='title'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder='School work' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  defaultValue={content}
                  name='content'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        {/* <Input
                        placeholder='Content'
                        {...field}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      /> */}
                        <RichTextEditor
                          {...field}
                          value={note}
                          setNote={setNote}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  defaultValue={categories}
                  name='categories'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(val) =>
                            setCategory(val as CategoryType)
                          }
                          {...field}
                        >
                          <SelectTrigger className='w-full'>
                            <SelectValue placeholder={category} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='General'>General</SelectItem>
                            <SelectItem value='School'>School</SelectItem>
                            <SelectItem value='Work'>Work</SelectItem>
                            <SelectItem value='Business'>Business</SelectItem>
                            <SelectItem value='Others'>Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {category === 'Others' && (
                  <FormField
                    control={form.control}
                    defaultValue={categories}
                    name='others'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Others</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  defaultValue={tags}
                  name='tags'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags</FormLabel>
                      <FormControl>
                        <Input placeholder='#schoolWork' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <DialogFooter>
            <Button form='edit-note-form' type='submit' disabled={loading}>
              {loading ? <LoadingOutlined /> : 'Save Changes'}
            </Button>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
