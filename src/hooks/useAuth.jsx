import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const useAuth = () => {
    const AuthUtilities = useContext(AuthContext)
    return AuthUtilities
};

export default useAuth;