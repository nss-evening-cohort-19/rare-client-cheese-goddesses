import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCommentById } from '../../api/commentData';
import CommentForm from '../../components/forms/CommentForm';

export default function EditComment() {
  const [editCommentItem, setEditCommentItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getCommentById(id).then(setEditCommentItem);
  }, [id]);

  return (
    <div className="create-form" style={{ height: '45rem', padding: '10%' }}>
      <CommentForm obj={editCommentItem} />
    </div>
  );
}
