/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { TextField, Button, Box, CircularProgress } from '@mui/material';

const PostForm = ({ onSubmit, editPost, saving, editing }) => {
  const [form, setForm] = useState({ title: '', body: '' });

  useEffect(() => {
    if (editPost) {
      setForm(editPost);
    } else {
      setForm({ title: '', body: '' });
    }
  }, [editPost]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', body: '' });
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}
      className='post-form'
    >
      <TextField
        label='Title'
        name='title'
        value={form.title}
        onChange={handleChange}
        required
        className='add-post-input'
      />
      <TextField
        label='Body'
        name='body'
        value={form.body}
        onChange={handleChange}
        multiline
        rows={4}
        required
        className='add-post-textarea'
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        disabled={saving || editing}
      >
        {saving || editing ? (
          <CircularProgress size={24} />
        ) : editPost ? (
          'Save Changes'
        ) : (
          'Submit'
        )}
      </Button>
    </Box>
  );
};

export default PostForm;
