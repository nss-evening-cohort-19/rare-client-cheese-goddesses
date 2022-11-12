import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCommentById } from '../../api/commentData';
import PostsDetails from '../../components/PostDetails';

export default function CommentsPage() {
  const [commentDetail, setCommentDetail] = useState();
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getCommentById(id).then(setCommentDetail);
  }, [id]);
  return (
    <div className="center-page">
      <PostsDetails key={commentDetail?.id} postObj={commentDetail} />
    </div>
  );
}
