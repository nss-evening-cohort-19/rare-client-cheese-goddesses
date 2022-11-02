// eslint-disable-next-line import/prefer-default-export
export const deletePost = (id) => fetch(`http://localhost:8088/posts/${id}`, {
  method: 'DELETE',
});

export const getPostById = (id) => fetch(`http://localhost:8088/posts/${id}`)
  .then((res) => res.json());
