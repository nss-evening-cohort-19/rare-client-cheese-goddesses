// eslint-disable-next-line import/prefer-default-export
export const deletePost = (id) => fetch(`http://localhost:8088/posts/${id}`, {
  method: 'DELETE',
});

export const getPostById = (id) => fetch(`http://localhost:8088/posts/${id}`)
  .then((res) => res.json());

export const getPosts = () => fetch('http://localhost:8088/posts')
  .then((res) => res.json());

export const createPost = (post) => fetch('http://localhost:8088/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(post),
});

export const updatePost = (post) => fetch(`http://localhost:8088/posts/${post.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(post),
});
