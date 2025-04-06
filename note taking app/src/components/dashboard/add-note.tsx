import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { PlusOutlined } from '@ant-design/icons';
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
import { CategoryType } from '@/types';
import { ScrollArea } from '../ui/scroll-area';

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

export default function AddNote() {
  const [addNewNoteModal, setAddNewNoteModal] = useState(false);
  const [note, setNote] = useState('');
  const [category, setCategory] = useState<CategoryType>('General');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
      categories: '',
      others: '',
      tags: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({
      title: values.title,
      content: note,
      categores: category,
      tags: values.tags,
      others: values.others,
    });
  }

  return (
    <Dialog open={addNewNoteModal} onOpenChange={setAddNewNoteModal}>
      <DialogTrigger asChild>
        <Button className='rounded-full p-0 h-8 w-8 md:h-10 md:w-10'>
          <PlusOutlined />
        </Button>
      </DialogTrigger>
      <DialogContent
        key={addNewNoteModal ? 'open' : 'closed'}
        className='sm:max-w-[425px]'
      >
        <ScrollArea className='sm:max-w-[425px] max-h-[80vh]'>
          <DialogHeader>
            <DialogTitle>Add New Note</DialogTitle>
            <DialogDescription>
              Fill the form to add a new note.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <Form {...form}>
              <form
                id='add-note-form'
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
                <FormField
                  control={form.control}
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
                  name='categories'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categories</FormLabel>
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
            <Button form='add-note-form' type='submit'>
              Add
            </Button>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
