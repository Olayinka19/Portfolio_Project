// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (isAuthenticated) {
//           return <Component {...props} />;
//         } else {
//           return (
//             <Navigate
//               to={{
//                 pathname: '/signin',
//                 state: { from: props.location },
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };

// export default ProtectedRoute;