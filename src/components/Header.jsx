import {Link} from 'react-router-dom'

function Header (){
    return (
        <nav>
            <ul>
                <li><Link to="/">Home page</Link></li>
                <li><Link to="/cocktail">cocktail list page</Link></li>
                <li><Link to="/randomcocktail">randomcocktail page</Link></li>
                <li><Link to="/randomcocktail2">randomcocktail page2</Link></li>
            </ul>
        </nav>
    )
}

export default Header