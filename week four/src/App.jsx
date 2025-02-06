const App = () => {
  // Fetching Posts
  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => console.log('Posts Fetched Successfully: ', json))
      .catch((error) => console.error('Error fetching posts:', error));
  };

  // fetchPosts();

  /******** Add Post ********/
  const addPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'New Post Title',
        body: 'New Post Body',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => console.log('Post edited Successfully: ', json))
      .catch((error) => console.log(error));
  };

  // addPost();

  /******** Update Post ********/
  const updatePost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${56}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: 56,
        title: 'Edit Post Title',
        body: 'Edit Post Body',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => console.log('Post edited Successfully: ', json))
      .catch((error) => console.log(error));
  };

  // updatePost();

  /******** Delete Post ********/
  const deletePost = async () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${56}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => console.log('Post successfully deleted'))
      .catch((error) => console.log(error));
  };

  // deletePost();

  return <div className='container'>Week Four</div>;
};
export default App;
