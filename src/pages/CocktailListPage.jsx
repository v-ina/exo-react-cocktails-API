import { useState } from "react";

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
    console.log(cocktailList);

    const ingredientsKey = []
    for (let i = 1; i <= 15; i++) {
        ingredientsKey.push(`strIngredient${i}`)
    }
    console.log(ingredientsKey);

    return(
        <>
            <main>
                {cocktailList?(
                    <>
                        {cocktailList.map((cocktail)=>{
                            return(    // faute1) au debut, meme si je voulais une seule element <p> pour le resultat,  j'ai pas mis return ici, donc j'avais pas de resultats.
                                <>
                                    <article>
                                        <p>{cocktail.strDrink}</p>
                                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{width:"200px"}} />
                                        <ul>
                                            {ingredientsKey.map((key)=>{
                                                return <li>{cocktail[key]}</li>
                                                // faute2) en oubliant qu'on est deja dans une boucle de cocktailList.map
                                                // j'avais mis cocktailList[key]. aucun sense. il fallait prendre tout les ingredients par chaque cocktail.
                                                // tableau[key] c'est impossible je pense
                                            })}
                                        </ul>
                                    </article>
                                </>
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