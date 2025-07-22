// // AuthGuard.js
// import { useEffect, useRef, useState } from 'react';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import { useAuth } from '../hooks/use-auth';
//
// export const AuthGuard = (props) => {
//   const { children } = props;
//   const router = useRouter();
//   const { isAuthenticated } = useAuth();
//   const ignore = useRef(false);
//   const [checked, setChecked] = useState(false);
//
//   console.log("isAuthenticated", isAuthenticated);
//
//   useEffect(() => {
//     if (!router.isReady) {
//       return;
//     }
//
//     if (ignore.current) {
//       return;
//     }
//
//     ignore.current = true;
//
//     if (!isAuthenticated) {
//       router.replace({
//         pathname: '/', // Redirect to homepage instead of /login
//         query: router.asPath !== '/' ? { continueUrl: router.asPath } : undefined
//       }).catch(console.error);
//       // router.replace({
//       //   pathname: '/login',
//       //   query: router.asPath !== '/' ? { continueUrl: router.asPath } : undefined
//       // }).catch(console.error);
//     } else {
//       setChecked(true);
//     }
//   }, [router.isReady]);
//
//   if (!checked) {
//     return null;
//   }
//
//   return children; // Render children if authentication is checked
// };
//
// AuthGuard.propTypes = {
//   children: PropTypes.node
// };

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/use-auth';

export const AuthGuard = (props) => {
  const { children } = props;
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const ignore = useRef(false);
  const [checked, setChecked] = useState(false);



  useEffect(() => {
    if (!router.isReady) return;
    if (ignore.current) return;

    ignore.current = true;

    const publicPaths = ['/']; // Add other public routes if needed
    const pathIsPublic = publicPaths.includes(router.pathname);

    if (!isAuthenticated && !pathIsPublic) {
      localStorage.setItem('continueUrl', router.asPath); // <- add this line
      router.replace('/');

      // router
      //   .replace({
      //     pathname: '/',
      //     query: router.asPath !== '/' ? { continueUrl: router.asPath } : undefined
      //   })
      //   .catch(console.error);
    } else {
      setChecked(true);
    }
  }, [router.isReady, isAuthenticated, router.pathname]);

  if (!checked) return null;

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};
