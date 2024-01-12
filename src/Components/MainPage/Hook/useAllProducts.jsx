import { useQuery } from "@tanstack/react-query";
import useAxousPublic from "./useAxousPublic";


const useAllProducts = () => {
    const axouspbilic = useAxousPublic()

    const { isLoading, refetch, data } = useQuery({
        queryKey: ['home'],
        queryFn: async() =>{
            const res = await axouspbilic.get('/home')
            return res.data
        }
      })
    return [data,isLoading,refetch]
};

export default useAllProducts;