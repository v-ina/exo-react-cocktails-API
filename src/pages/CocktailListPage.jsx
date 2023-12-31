import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import CocktailCard from '../components/CocktailCard'

function CocktailListPage (){

    const [cocktailList, setCocktailList] = useState(null)    

    if(!cocktailList){

        // vieux syntaxe
        /*
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            setCocktailList(json.drinks)
        })
        */


        // nouvelle syntaxe
        /*
        const fetchCocktails = async() =>{
            const cocktailsResponse = await fetch()    // 이때, await는 async가 필요한데, async를 composant만드는 함수에 쓸 수 없으므로 안에 함수를 하나 더 만든다.
            const cocktailsInJs = cocktailsResponse.json()
        }
        fetchCocktails();
        */
               // vu que c'est une fonction asynchrone, ca doit etre bizarre de l'appeller sans await.


        // fonction anonyme (elle a pas de nom) qui s'autoinvoque
        // cette syntaxe est comme les syntaxes au-dessus, mais cette fonction apelle elle-meme
        (async () => {
            const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")    // 이때, await는 async가 필요한데, async를 composant만드는 함수에 쓸 수 없으므로 안에 함수를 하나 더 만든다.
            const cocktailsInJs = await cocktailsResponse.json()
            setCocktailList(cocktailsInJs.drinks)
        })(); // elle s'appelle elle meme . premier parentaise veut dire  fonction anonyme
    }


    const ingredientsKey = []
    for (let i = 1; i <= 15; i++) {
        ingredientsKey.push(`strIngredient${i}`)
    }


    return(
        <>
            <Header />
            <main>
                {cocktailList?(
                    <>
                        {cocktailList.map((cocktail)=>{
                            return(    // faute1) au debut, meme si je voulais une seule element <p> pour le resultat,  j'ai pas mis return ici, donc j'avais pas de resultats.
                                <CocktailCard cocktail={cocktail} keys={ingredientsKey}/>
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

export default CocktailListPage