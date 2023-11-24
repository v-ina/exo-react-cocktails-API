import { useState } from "react"
import Header from "../components/Header"

function RandomCocktailPage(){

    const [randomCocktail, setRandomCocktail] = useState(null)
    // variable 'randomCocktail' a un valeur null grace a useState.
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

    return(
        <>
            <Header />
            {randomCocktail? (
                // une fois randomCocktail a son valeur, on cree ces balises HTML
                <main>
                    <h2>{randomCocktail[0].strDrink}</h2>
                    <img src={randomCocktail[0].strDrinkThumb} alt={randomCocktail[0].strDrink} style={{width:"200px"}} />
                    <p>{randomCocktail[0].strInstructions} <span> (id : {randomCocktail[0].idDrink})</span></p>
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