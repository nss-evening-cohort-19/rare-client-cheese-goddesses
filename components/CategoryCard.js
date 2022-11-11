import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteCategory } from '../api/categoryData';

export default function CategoryCard({ categoryObj, onUpdate }) {
  const deleteThisCategory = () => {
    if (window.confirm(`Delete ${categoryObj.label}?`)) {
      deleteCategory(categoryObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Category</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{categoryObj.label}</Card.Subtitle>
        <Button variant="danger" onClick={deleteThisCategory} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CategoryCard.propTypes = {
  categoryObj: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
