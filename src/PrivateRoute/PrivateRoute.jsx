/* eslint-disable react/prop-types */

import {  Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { RotatingLines } from  'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {User , loading} = useAuth()
    if(loading){
        return <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="100%"
        
        visible={true}
      />
    }
    if(User){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;