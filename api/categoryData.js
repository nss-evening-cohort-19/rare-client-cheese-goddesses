export const deleteCategory = (id) => fetch(`http://localhost:8088/categories/${id}`, {
  method: 'DELETE',
});

export const getCategoryById = (id) => fetch(`http://localhost:8088/categories/${id}`)
  .then((res) => res.json());

export const updateCategoryById = (payload) => fetch(`http://localhost:8088/categories/${payload.id}`, {
  method: 'PUT',
  body: JSON.stringify(payload),
}).then((res) => res.json());

export const createCategory = (post) => fetch('http://localhost:8088/categories', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(post),
});
