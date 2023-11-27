import { useState } from "react"
import Header from "../components/Header"
import { Link, useParams } from "react-router-dom"


function RandomCocktailPage(){

    const {idDrink} = useParams()

    const [randomCocktail, setRandomCocktail] = useState(null)
    // variable 'randomCocktail' a un valeur null grace a useState.

    /*
    if(randomCocktail === null){
        // si randomCocktail n'est pas chargé,
        (async()=>{
            const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            // 'cocktailRandomResponse' va prendre un valeur quand la fontion fetch a fini à récupérer tout les imformations
            const cocktailRandomInJs = await cocktailRandomResponse.json()
            // cocktailRnadomInJs va prendre un valeur enformé en json(resultat de fetch) quand fontions json() est fini 
            console.log(cocktailRandomInJs);
            setRandomCocktail(cocktailRandomInJs.drinks)
            // on va stocker le resultat en json à variable 'randomCocktail'. pour stocker, on utilise 'setRandomCocktail'
        })()
    }
    console.log(randomCocktail);
    */

    const ingredientKeys = []
    for (let i = 1; i <= 15; i++) {
        ingredientKeys.push(`strIngredient${i}`)
    }

    /*
    const rechargeComposant =()=>{
        setRandomCocktail(null)  // 이렇게 해도 되긴 하는데 randomCocktail===null이 충족되며 fetch를 완전 처음부터 시작하기 때문에 좋은 방법은 아님.
    }
    */

    /*
    const rechargeComposant =()=>{
        (async()=>{
            const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            const cocktailRandomInJs = await cocktailRandomResponse.json()
            setRandomCocktail(cocktailRandomInJs.drinks)
        })()
    }
    */


    // vu que cette async fonction a ete utilise 2 fois, on peut creer une variable

    const fetchCocktail = async()=>{
        const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const cocktailRandomInJs = await cocktailRandomResponse.json()
        setRandomCocktail(cocktailRandomInJs.drinks)
    }
    if (randomCocktail == null){
        fetchCocktail()
    }
    const rechargeComposant = () =>{
        fetchCocktail()
    }

    return(
        <>
            <Header />
            {randomCocktail? (
                // une fois randomCocktail a son valeur, on cree ces balises HTML
                <main>
                    <h2>{randomCocktail[0].strDrink}</h2>
                    <img src={randomCocktail[0].strDrinkThumb} alt={randomCocktail[0].strDrink} style={{width:"200px"}} />
                    <p>{randomCocktail[0].strInstructions} <span> (id : {randomCocktail[0].idDrink})</span></p>
                    <ul>
                        {ingredientKeys.map((key)=>{
                            if(randomCocktail[0][key]){
                                return <li>{randomCocktail[0][key]}</li>
                            }
                        })}
                    </ul>
                    <Link to={`/cocktails/details/${randomCocktail[0].idDrink}`}>voir plus</Link>
                    <button onClick={rechargeComposant}>actualiser</button>
                </main>
            ):(
                // pendant le chargement, pendant le randomCocktail a pas encore son valeur, on cree cette balises HTML
                <main>
                    <p>en train de charger</p>
                </main>
            )}
        </>
    )
}

export default RandomCocktailPage