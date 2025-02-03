import { useEffect, useState } from 'react';

// Made use of jsonplaceholder API

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [editPostId, setEditPostId] = useState(null);

  const [addPostForm, setAddPostForm] = useState({
    title: '',
    body: '',
  });

  const sortedPosts = [...posts].reverse();

  const handleChange = (e) => {
    setAddPostForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editPostId) {
      updatePost();
    } else {
      addPost();
    }
  };

  const addPost = () => {
    setCreating(true);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: addPostForm.title,
        body: addPostForm.body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((newPost) => {
        setPosts((prev) => [...prev, newPost]);
        resetForm();
      })
      .catch((error) => console.log(error))
      .finally(() => setCreating(false));
  };

  const editPost = (post) => {
    setEditPostId(post.id);
    setAddPostForm({ title: post.title, body: post.body });
  };

  const updatePost = () => {
    setCreating(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${editPostId}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: editPostId,
        title: addPostForm.title,
        body: addPostForm.body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((updatedPost) => {
        setPosts((prev) =>
          prev.map((post) => (post.id === editPostId ? updatedPost : post))
        );
        resetForm();
      })
      .catch((error) => console.log(error))
      .finally(() => setCreating(false));
  };

  const deletePost = (id) => {
    setDeleting(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => setPosts((prev) => prev.filter((post) => post.id !== id)))
      .catch((error) => console.log(error))
      .finally(() => setDeleting(false));
  };

  const fetchPosts = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const resetForm = () => {
    setAddPostForm({ title: '', body: '' });
    setEditPostId(null);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <form className='post-form' onSubmit={handleSubmit}>
        <div className='add-post'>
          <label htmlFor='add-post-title'>Title:</label>
          <input
            type='text'
            name='title'
            placeholder='Add post title...'
            value={addPostForm.title}
            required
            onChange={handleChange}
          />
        </div>
        <div className='add-post'>
          <label htmlFor='add-post-body'>Body:</label>
          <textarea
            name='body'
            placeholder='Enter post body...'
            rows={5}
            value={addPostForm.body}
            required
            onChange={handleChange}
          />
        </div>
        <button type='submit' disabled={creating}>
          {creating ? 'Loading...' : editPostId ? 'Save Changes' : 'Submit'}
        </button>
      </form>

      <h2 className='posts-title'>Posts</h2>
      <div className='posts'>
        {sortedPosts.map((post) => (
          <div key={post.id} className='post'>
            <h3 className='post-title'>{post.title}</h3>
            <p className='post-body'>{post.body}</p>
            <section className='post-btns'>
              <button
                className='delete-btn'
                onClick={() => deletePost(post.id)}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
              <button className='edit-btn' onClick={() => editPost(post)}>
                Edit
              </button>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
