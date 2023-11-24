import { useEffect, useState } from "react"
import Header from "../components/Header"

function CategoryPage() {

    const [categories, setCategories] = useState(null)

    useEffect(()=>{
        (async()=>{
            const categoryResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            const categoryInJs = await categoryResponse.json()
            setCategories(categoryInJs.drinks)
        })()
    },[])

    return(
        <>
            <Header />
            {categories ? (
                <>
                    {categories.map((category)=>{
                        return <p>{category.strCategory}</p>
                    })}
                </>
            ):(
                <p>charger en cours...</p>
            )}
        </>
    )
}

export default CategoryPage