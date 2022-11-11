import Link from 'next/link';
import { Button } from 'react-bootstrap';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import { useRef, useState } from 'react';
// import { loginUser } from '../utils/data/AuthManager';

export default function Logout() {
  return (
    <Link href="/login" passHref>
      <Button variant="danger" type="button" size="lg" className="copy-btn">
        Sign Out
      </Button>
    </Link>
  );
}
