import React from 'react';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
  const auth = useSelector((state) => state.auth)
  return auth ? children : <p>Fallbak</p>;
};

export default PrivateRoute;
