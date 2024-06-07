import { useState, useEffect } from "react";
import { getGifs} from '../helpers/getGIfs'


export const useFetchGifs = (category) => {
    
     const [images, setImages] = useState([]);
     const [isLoading, setIsLoading] = useState( true);

     const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
     }
     useEffect(()=> {
        getImages();
     }, [])
 
    return{
        images,
        isLoading,
   }
}
