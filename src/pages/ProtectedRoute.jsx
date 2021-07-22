import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => {
  let isAuth = sessionStorage.getItem("isAuth")
  return ( 
    <>
    <Route
        {...rest}
        render={(location) =>
          isAuth ? <Component {...rest} /> :
            <Redirect to="/" />
        }
      />
    </>
   );
}
 
export default ProtectedRoute;