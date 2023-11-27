import { useEffect, useState } from "react"
import Header from "../components/Header"

function IngredientListPage(){

    const [ingredients, setIngredients] = useState(null)

    useEffect(()=>{
        (async()=>{
            const ingredientResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
            const ingredientInJson = await ingredientResponse.json()
            setIngredients(ingredientInJson.drinks)
        })()
    },[])

console.log(ingredients);
    return(
        <>
            <Header />
            <main>
                {ingredients ? (
                    <ul>
                        {ingredients.map((ingredient)=>{
                            return (
                                <li>{ingredient.strIngredient1}</li>
                            )
                        })}
                    </ul>
                ):(
                    <img src="https://media.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="" />
                )}
            </main>

        </>
    )
}

export default IngredientListPage