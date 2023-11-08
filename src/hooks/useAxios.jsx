import axios from 'axios';


const useAxios = () => {
    const instance = axios.create({
        baseURL: 'https://quillquest-server.vercel.app/',
        
        
      });
    return instance
};

export default useAxios;