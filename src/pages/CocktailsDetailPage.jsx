import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"

function CocktailsDetailPage(){
    const{id} = useParams()

    const [cocktailById, setCocktailById] = useState(null)
    
    useEffect(()=>{
        (async()=>{
            const cocktailByIdResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
            const cocktailByIdInJson = await cocktailByIdResponse.json()
            setCocktailById(cocktailByIdInJson.drinks[0])
        })()
    },[])
    
    return (
        <>
            <Header />
            <main>
                {cocktailById ?(
                    <article>
                        <h2>{cocktailById.strDrink}</h2>
                        <img src={cocktailById.strDrinkThumb} alt={cocktailById.strDrink} />
                    </article>
                ):(
                    <p>pas de cocktail</p>
                )}

            </main>
        </>
    )
}
export default CocktailsDetailPage