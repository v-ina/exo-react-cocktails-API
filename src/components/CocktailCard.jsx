import { Link } from "react-router-dom"

function CocktailCard({cocktail, keys}){

    const removeCocktail = async(event, id) =>{
        await fetch ("https.//www.delete/api=" +id , {method:"DELETE"})
        // pour ma fonction qui va appeler au moment de clique, on va faire fetch pour supprimer.
        // il faut ecrire methode HTTP: soit 'delete'
        // pour le deuxieme parametre , on va recupere cocktail.idDrink
    }

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
            <button onClick={(event)=>{removeCocktail(event,cocktail.idDrink)}}>supprimer le cocktail</button>
            {/* quand je clique, j'appelle ma fonction 'removeCocktail' avec deux parametres. mais pour utiliser parametre sur onClick, */}
            {/* il faut appeler une autre fonctioin pour appeler ma fonction. ()=>{} */}
        </article>
    )
}
export default CocktailCard