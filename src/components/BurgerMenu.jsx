import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

function Burger() {
    return (
        <Menu right>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
      </Menu>
    )
}

export default Burger;