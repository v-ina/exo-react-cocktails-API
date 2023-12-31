import {Link} from 'react-router-dom'
import './Header.scss'

function Header (){
    return (
        <nav>
            <ul>
                <li><Link to="/">Home page</Link></li>
                <li><Link to="/cocktail">cocktail list page</Link></li>
                <li><Link to="/randomcocktail">randomcocktail page</Link></li>
                <li><Link to="/randomcocktail2">randomcocktail page2</Link></li>
                <li><Link to="/category">Category page</Link></li>
                <li><Link to="/ingredient">ingredient page</Link></li>
                <li><Link to="/meals">Meal list page</Link></li>
            </ul>
        </nav>
    )
}

export default Header