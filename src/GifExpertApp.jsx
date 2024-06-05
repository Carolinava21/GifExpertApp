import { useState } from "react"
import { AddCategory } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {

    const [ categories, setCategories] = useState(['One Punch', 'Inuyasha' ]);
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory) )return;
        
        setCategories([ newCategory, ...categories]);
        //setCategories(cat => [...cat, 'Naruto'])

    }

    return (
        <>
           
                <h1>GifExpertApp</h1>
            
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory ={(value) => onAddCategory(value)}

            />
                { 
                categories.map(( category ) => (
                     <GifGrid key={category} category = {category}/>
                )) 
                }
              
        </>

    )

}