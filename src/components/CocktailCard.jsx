import { Link } from "react-router-dom"

function CocktailCard({cocktail, keys}){
    return(
        <article>
            <p>{cocktail.strDrink}</p>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{width:"200px"}} />
            <ul>
                {keys.map((key)=>{
                    if(cocktail[key]){
                        return <li>{cocktail[key]}</li>
                    }
                    // faute2) en oubliant qu'on est deja dans une boucle de cocktailList.map
                    // j'avais mis cocktailList[key]. aucun sense. il fallait prendre tout les ingredients par chaque cocktail.
                    // tableau[key] c'est impossible je pense
                })}
            </ul>
            <Link to={`/cocktails/details/${cocktail.idDrink}`}>voir plus</Link>
        </article>
    )
}
export default CocktailCard