import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

function Burger() {
    return (
        <Menu right>
            <NavLink style={({ isActive }) => (isActive ? {textDecoration: 'underline'} : {textDecoration: 'none'})} to="/" end>Accueil</NavLink>
            <NavLink style={({ isActive }) => (isActive ? {textDecoration: 'underline'} : {textDecoration: 'none'})} to="/about">A propos</NavLink>
      </Menu>
    )
}

export default Burger;