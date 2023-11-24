import { useEffect, useState } from "react"
import Header from "../components/Header"

function RandomCocktail2Page(){

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

    // useEffect est une fonction que react me founit et qui permet d'executer du code uniquement a certains chargements du composant
    // (soit le premier, soit à chaque fois etc
    // icic, vu qu'oon place un tableau vide en deuxieme parametre de useEffect, ca signifie qu'on veut executer la fonction une seule fois
    // au premier chargement du composant.
    // useEffect에 []가 없다면 useEffect 자체로 composant이 다시 charger되기 떄문에 []를 붙여 줘야 하는 것.
    useEffect(()=>{

        //avant, on a utilise if pour le cas quand 'randomCocktail' est null. 
        // mais grace a useEffect et [] a la fin, deja on a une promesse de charger une fois au premier.
        (async()=>{
            const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            const cocktailRandomInJs = await cocktailRandomResponse.json()
            setRandomCocktail(cocktailRandomInJs.drinks)
        })()
    }, [])

    // 만약에 그대로 if(randomCocktail === null){} 두었다고 가정해보자. api 자체 서버가 터저서 애초에 api로부터 받아오는 정보가 null 이라면


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

export default RandomCocktail2Page