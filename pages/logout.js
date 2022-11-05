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
// function Logout({ setToken }) {//   const navigate = useRouter();
//   const [isUnsuccessful, setisUnsuccessful] = useState(false);

//   const handleLogout = (e) => {
//     e.preventDefault();

//     const user = {
//       username: username.current.value,
//       password: password.current.value,
//     };

//     loginUser(user).then((res) => {
//       if (<Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
//       Sign Out
//     </Button>) {
//         setToken(res.token);
//         navigate.push('/');
//       } else {
//         setisUnsuccessful(true);
//       }
//     });
//   };
