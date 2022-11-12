import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PostsDetails from '../components/PostDetails';
import { getCommentByPostId } from '../api/commentData';

export default function CommentsPage() {
  const [commentDetail, setCommentDetail] = useState();
  const router = useRouter();
  const path = router.asPath.split('/')[2];

  useEffect(() => {
    getCommentByPostId(path).then(setCommentDetail);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="center-page">
      testing
      <PostsDetails key={commentDetail?.id} postObj={commentDetail} />
    </div>
  );
}
