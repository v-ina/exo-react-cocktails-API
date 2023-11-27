import { useEffect, useState } from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom"

function MealListPage(){

    const [meals , setMeals] = useState(null)
    useEffect(()=>{
        (async()=>{
            const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
            const mealsInJson = await mealsResponse.json()
            setMeals(mealsInJson.meals)
        })()
    },[])

    const ingredients = []
    for (let i=1; i<=20; i++){
        ingredients.push(`strIngredient${i}`)
    }

    return(
        <>
            <Header/>
            <main>
                {meals?(
                    <>
                        {meals.map((meal)=>{
                            return(
                                <article>
                                    <h2>{meal.strMeal}</h2>
                                    <img src={meal.strMealThumb} alt={meal.strMeal} style={{width:"200px"}} />
                                    <button><Link to={`/meals/details/${meal.idMeal}`}>voir +</Link></button>

                                </article>
                            )
                        })}
                    </>
                ):(
                    <p> en train de charger</p>
                )}
            </main>
        </>
    )
}
export default MealListPage