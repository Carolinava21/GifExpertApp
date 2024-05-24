import { useState } from "react"
export const GifExpertApp = () => {

    const [ categories, setCategories] = useState([ 'One Punch', 'Inuyasha' ])

    return (
        <>
            {/*titulo*/}
                <h1>GifExpertApp</h1>
            {/* Input*/}

            {/* Listado de gif*/}
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