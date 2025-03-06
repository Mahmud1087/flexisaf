import { useEffect, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { fetchPosts, addPost, updatePost, deletePost } from './services/api';
import { Container, Typography } from '@mui/material';

function App() {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState({});

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const data = await fetchPosts();
      setPosts(data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  const handleSubmit = async (postData) => {
    if (editPost) {
      setEditing(true);
      const updatedPost = await updatePost(editPost.id, postData);
      setPosts((prev) =>
        prev.map((post) => (post.id === editPost.id ? updatedPost : post))
      );
      setEditPost(null);
      setEditing(false);
    } else {
      setSaving(true);
      const newPost = await addPost(postData);
      setPosts((prev) => [...prev, newPost]);
      setSaving(false);
    }
  };

  const handleEdit = (post) => {
    setEditPost(post);
  };

  const handleDelete = async (postId) => {
    setDeleting((prev) => ({ ...prev, [postId]: true }));
    await deletePost(postId);
    setPosts((prev) => prev.filter((post) => post.id !== postId));
    setDeleting((prev) => ({ ...prev, [postId]: false }));
  };

  if (loading) {
    return (
      <Typography variant='h6' align='center'>
        Loading...
      </Typography>
    );
  }

  return (
    <Container maxWidth='md'>
      <PostForm
        onSubmit={handleSubmit}
        editPost={editPost}
        saving={saving}
        editing={editing}
      />
      <Typography variant='h5' gutterBottom align='center'>
        Posts
      </Typography>
      <PostList
        posts={posts.reverse()}
        onDelete={handleDelete}
        onEdit={handleEdit}
        deleting={deleting}
      />
    </Container>
  );
}

export default App;
