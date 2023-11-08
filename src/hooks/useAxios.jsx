import axios from 'axios';


const useAxios = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:5000/',
        
        
      });
    return instance
};

export default useAxios;