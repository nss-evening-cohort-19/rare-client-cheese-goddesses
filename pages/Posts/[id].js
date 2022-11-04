/* eslint-disable max-len */
// import { useRouter } from 'next/router';
// import { useState } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';

export default function PostsPage() {
  // const [postDetails, setPostDetails] = useState();
  // const router = useRouter();

  // const { id } = router.query;

  // useEffect(() => {
  // }, [id]);

  return (
    <Card className="text-center">
      <Card.Title>Title</Card.Title>
      <Card.Img variant="top" src="holder.js/100px180" />
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
        <Card.Text>Post Details</Card.Text>
      </Card.Body>
    </Card>
  );
}
