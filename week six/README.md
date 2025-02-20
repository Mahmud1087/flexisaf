# RESTful API Guide

## Introduction

This guide covers the basics of making **POST, GET, PUT, and DELETE** requests using **React**. I used the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) as my mock backend.

---

## Prerequisites

- [React.js](https://react.dev/)

---

## API Endpoints Used

The `https://jsonplaceholder.typicode.com/posts` has the following endpoints.

- **GET** `/posts` - Fetch all posts
- **POST** `/posts` - Add a new post
- **PUT** `/posts/:id` - Update a post
- **DELETE** `/posts/:id` - Delete a post

---

## **Fetching Posts (GET Request)**

```js
    const fetchPosts = ()={
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => (console.log('Posts Fetched Successfully: ', response.json())))
      .catch(error => console.error('Error fetching posts:', error));
    }

fetchPosts()
```

### **Adding a Post (POST Request)**

```js
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
    .then((res) => console.log('Post edited Successfully: ', res.json()))
    .catch((error) => console.log(error));
};

addPost();
```

### **Updating a Post (PUT Request)**

```js
const updatePost = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      title: 'Edit Post Title',
      body: 'Edit Post Body',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => console.log('Post edited Successfully: ', res.json()))
    .catch((error) => console.log(error));
};

updatePost();
```

### **Deleting a Post (DELETE Request)**

```js
const deletePost = async (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })
    .then(() => console.log('Successfully deleted'))
    .catch((error) => console.log(error));
};

deletePost();
```

---

## Conclusion

This guide demonstrates the four main operations in a RESTful API using React and JSONPlaceholder:

- **GET** - Retrieve posts
- **POST** - Add a new post
- **PUT** - Update a post
- **DELETE** - Remove a post
