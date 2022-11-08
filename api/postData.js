/* eslint-disable no-console */

const deletePost = (id) => fetch(`http://localhost:8088/posts/${id}`, {
  method: 'DELETE',
});

const getPostById = (id) => fetch(`http://localhost:8088/posts/${id}`)
  .then((res) => res.json());

const getPosts = () => fetch('http://localhost:8088/posts')
  .then((res) => res.json());

const createPost = (post) => fetch('http://localhost:8088/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(post),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

const updatePost = (post) => fetch(`http://localhost:8088/posts/${post.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(post),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

export {
  deletePost, getPostById, getPosts, createPost, updatePost,
};
