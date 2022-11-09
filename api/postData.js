export const deletePost = (id) => fetch(`http://localhost:8088/posts/${id}`, {
  method: 'DELETE',
});

export const getPostById = (id) => fetch(`http://localhost:8088/posts/${id}`)
  .then((res) => res.json());

export const updatePostById = (payload) => fetch(`http://localhost:8088/posts/${payload.id}`, {
  method: 'PUT',
  body: JSON.stringify(payload),
}).then((res) => res.json());

export const createPost = (post) => fetch('http://localhost:8088/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(post),
});
