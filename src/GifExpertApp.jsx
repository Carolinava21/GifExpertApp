import { useState } from "react"
import { AddCategory } from "./components/AddCategories";
export const GifExpertApp = () => {

    const [ categories, setCategories] = useState(['One Punch', 'Inuyasha' ]);
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory) )return;
        
        setCategories([ newCategory, ...categories]);
        //setCategories(cat => [...cat, 'Naruto'])

    }

    return (
        <>
            {/*titulo*/}
                <h1>GifExpertApp</h1>
            {/* Input*/}
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory ={(value) => onAddCategory(value)}

            />

            {/* Listado de gif*/}
            
            <ol>
                { 
                categories.map(( category ) => {
                    return <li key={ category } >{category}</li>

                }) }
              
            </ol>
                    {/* Gif Item*/ }    
            
        </>

    )

}