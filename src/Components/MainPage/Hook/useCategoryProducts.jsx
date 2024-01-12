import { useQuery } from "@tanstack/react-query";
import useAxousPublic from "./useAxousPublic";


const useCategoryProducts = () => {
    const axouspbilic = useAxousPublic()

    const { isLoading, refetch, data:products } = useQuery({
        queryKey: ['home'],
        queryFn: async() =>{
            const res = await axouspbilic.get('/home')
            return res.data
        }
      })
    return [products,isLoading,refetch]
};

export default useCategoryProducts;