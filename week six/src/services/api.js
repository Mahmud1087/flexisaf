const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
  try {
    const res = await fetch(API_URL);
    return await res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const addPost = async (postData) => {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ ...postData, userId: 1 }),
      headers: { 'Content-Type': 'application/json' },
    });
    return await res.json();
  } catch (error) {
    console.error('Error adding post:', error);
  }
};

export const updatePost = async (postId, postData) => {
  try {
    const res = await fetch(`${API_URL}/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ ...postData, userId: 1 }),
      headers: { 'Content-Type': 'application/json' },
    });
    return await res.json();
  } catch (error) {
    console.error('Error updating post:', error);
  }
};

export const deletePost = async (postId) => {
  try {
    await fetch(`${API_URL}/${postId}`, { method: 'DELETE' });
    return postId;
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};
