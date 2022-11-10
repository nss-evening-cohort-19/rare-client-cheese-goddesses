import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { deletePost } from '../api/postData';

export default function PostCard({ postObj, onUpdate }) {
  const deleteThisPost = () => {
    if (window.confirm(`Delete ${postObj.title}?`)) {
      deletePost(postObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <div> {postObj.title}</div>
        <Card.Img variant="top" src={postObj.image_url} alt={postObj.title} style={{ height: '400px' }} />
        <Link href={`/posts/${postObj.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/posts/edit/${postObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        {/* <Link href="/" passHref> */}
        {/* Removed link to check navigation after deleting post card */}
        <Button variant="danger" onClick={deleteThisPost} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    id: PropTypes.string,
    user_id: PropTypes.string,
    category_id: PropTypes.string,
    title: PropTypes.string,
    publication_date: PropTypes.number,
    image_url: PropTypes.string,
    content: PropTypes.string,
    approved: PropTypes.string,
    // first_name: PropTypes.string,
    // reaction_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
