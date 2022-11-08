import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { getPostById } from '../../api/postData';

export default function PostsPage() {
  const [postDetails, setPostDetails] = useState();
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getPostById(id).then(setPostDetails);
  }, [id]);

  return (
    <Card className="text-center">
      <Card.Title>{postDetails.title}</Card.Title>
      <Card.Img variant="top" src={postDetails.image_url} />
      <Card.Body>
        <Card.Text>Author: soandso</Card.Text>
        <Button>View Comments</Button>
        <Badge pill bg="primary">
          😍
        </Badge>
        <Badge pill bg="primary">
          🤯
        </Badge>
        <Badge pill bg="primary">
          🤔
        </Badge>
        <Badge pill bg="primary">
          🤬
        </Badge>
        <Card.Text>{postDetails.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}
