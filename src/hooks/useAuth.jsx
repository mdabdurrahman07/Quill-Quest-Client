import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const useAuth = () => {
   const authUtilities = useContext(AuthContext)
   return authUtilities
};

export default useAuth;