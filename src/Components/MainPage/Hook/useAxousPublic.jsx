import axios from 'axios';

const AxousPublic = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAxousPublic = () => {

    return AxousPublic;
};

export default useAxousPublic;