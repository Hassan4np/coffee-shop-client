import axios from 'axios';

const Axous = axios.create({
    baseURL: 'http://localhost:5173'
});

const useAxous = () => {
    return Axous
};

export default useAxous;