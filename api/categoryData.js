export const getSingleCategory = (id) => fetch(`http://localhost:8088/categories/${id}`)
  .then((res) => res.json());

export const deleteCategory = (id) => fetch(`http://localhost:8088/categories/${id}`, {
  method: 'DELETE',
});

export const createCategory = (post) => fetch('http://localhost:8088/categories', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(post),
});

export const updateCategory = (category) => fetch(`http://localhost:8088/comment/${category.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(category),
});

export const getCategories = () => fetch('http://localhost:8088/categories')
  .then((res) => res.json());
