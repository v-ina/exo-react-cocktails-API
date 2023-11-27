import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { useEffect, useState } from "react"


function MealDetailPage(){

    const{mealID} = useParams()
    const [mealsDetail, setMealsDetail] = useState(null)

    useEffect(()=>{
        (async()=>{
            const mealsDetailResponse = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID)
            const mealsDetailInJson = await mealsDetailResponse.json()
            setMealsDetail(mealsDetailInJson.meals[0])
        })()
    },[])

    const ingredients = []
    for (let i=1; i<=20; i++){
        ingredients.push(`strIngredient${i}`)
    }
    
    console.log(mealsDetail);
    return(
        <>
            <Header/>
            <main>
                {mealsDetail ? (
                    <article>
                        <h2>{mealsDetail.strMeal}</h2>
                        <img src={mealsDetail.strMealThumb} alt={mealsDetail.strMeal} style={{width:"200px"}} />
                        <ul>
                            {ingredients.map((stringredient)=>{
                                if(mealsDetail[stringredient]){
                                    return <li>{mealsDetail[stringredient]}</li>
                                }
                            })}
                        </ul>
                    </article>
                ):(
                    <p>chargeemnt...</p>
                )}                
            </main>
        </>
    )
}
export default MealDetailPage