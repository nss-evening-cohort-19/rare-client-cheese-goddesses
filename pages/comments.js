import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCommentByPostId } from '../api/commentData';
import CommentCard from '../components/CommentCard';

export default function CommentsPage() {
  const [comments, setComments] = useState();
  const router = useRouter();
  const path = router.asPath.split('/')[2];

  useEffect(() => {
    getCommentByPostId(path).then(setComments);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Link href="/Comments/new" passHref>
        <Button style={{ backgroundColor: '#F1E6D4' }} variant="info" className="m-2">New Comment</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {comments.map((comment) => (
          <CommentCard commentObj={comment} onUpdate={getCommentByPostId} />
        ))}
      </div>
    </>
  );
}
