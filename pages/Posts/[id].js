import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPostById } from '../../api/postData';
import PostsDetails from '../../components/PostDetails';

export default function PostsPage() {
  const [postDetail, setPostDetail] = useState();
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getPostById(id).then(setPostDetail);
  }, [id]);

  return (
    <div className="center-page">
      <PostsDetails key={postDetail?.id} postObj={postDetail} />
    </div>
  );
}
