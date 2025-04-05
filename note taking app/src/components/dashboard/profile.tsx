'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Title from './title';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { useToastContext } from '@/store/contexts';
import { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email.',
  }),
});

export default function ProfileForm() {
  const updateUserDetails = useMutation(api.user.updateUserDetails);
  const user = useQuery(api.user.getUserDetails);
  const [loading, setLoading] = useState(false);

  const { open } = useToastContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await updateUserDetails({
        email: values.email === undefined ? user?.email : values.email,
        name: values.name === undefined ? user?.name : values.name,
      });
      open({
        message: res,
        type: 'success',
      });
      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        open({ duration: 5, message: error.message, type: 'error' });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex flex-col gap-7'>
      <Title title='Profile' />

      <div className='w-full md:w-[70%] lg:w-1/2'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder={user ? user.email : ''} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fullname</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user && user.name ? user.name : ''}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>
              <span className='text-white text-base disabled:text-white/60'>
                {loading ? <LoadingOutlined /> : 'Save'}
              </span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
