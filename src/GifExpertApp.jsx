import { useState } from "react"
import { AddCategory } from "./components/AddCategories";
export const GifExpertApp = () => {

    const [ categories, setCategories] = useState([ 'One Punch', 'Inuyasha' ]);
    const onAddCategory = () => {
        setCategories([ ...categories, 'Naruto']);
        //setCategories(cat => [...cat, 'Naruto'])

    }

    return (
        <>
            {/*titulo*/}
                <h1>GifExpertApp</h1>
            {/* Input*/}
            <AddCategory/>

            {/* Listado de gif*/}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                { 
                categories.map( category => {
                    return <li key={ category } >{category}</li>

                }) }
              
            </ol>
                    {/* Gif Item*/ }    
            
        </>

    )

}