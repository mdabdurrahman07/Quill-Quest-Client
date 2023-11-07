/* eslint-disable react/prop-types */

import useAuth from '../hooks/useAuth';
import { RotatingLines } from  'react-loader-spinner'

const PrivateRoute = ({children}) => {
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
    if(User?.email){
        return children
    }
};

export default PrivateRoute;