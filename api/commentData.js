import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const deleteComment = (id) => fetch(`http://localhost:8088/comments/${id}`, {
  method: 'DELETE',
});

export const getCommentById = (id) => fetch(`http://localhost:8088/comments/${id}`)
  .then((res) => res.json());

export const getComments = () => fetch('http://localhost:8088/comments')
  .then((res) => res.json());

export const createComment = (comment) => fetch('http://localhost:8088/comments', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(comment),
});

export const updateComment = (comment) => fetch(`http://localhost:8088/comment/${comment.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(comment),
});

export const getCommentByPostId = (postId) => new Promise((resolve, reject) => {
  axios
    .get(`http://localhost:8088/comments.json?orderBy="id"&equalTo="${postId}"`)
    .then((response) => {
      if (response?.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
