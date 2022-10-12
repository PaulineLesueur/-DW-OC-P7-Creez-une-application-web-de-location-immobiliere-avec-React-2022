import { Link } from 'react-router-dom';
import Burger from './BurgerMenu';

function Header() {
    return (
        <header>
            <svg width="145" height="47" viewBox="0 0 145 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8398 23.9482L6.09457 31.8883V43.03H0V0H6.09457V24.0763L29.2032 0H36.1865L18.0298 19.3379L37.4562 43.03H30.3459L13.8398 23.9482Z" fill="#FF6060"/>
                <path d="M81.8958 39.5722L84.3082 34.9619C87.1015 36.8828 91.4185 38.2916 95.6085 38.2916C101.068 38.2916 103.227 36.6267 103.227 33.8093C103.227 26.5095 82.7845 32.7847 82.7845 19.8501C82.7845 13.9591 87.9903 10.1172 96.2434 10.1172C100.433 10.1172 105.258 11.2698 108.052 13.0627L105.512 17.673C102.592 15.752 99.4176 15.1117 96.2434 15.1117C91.1646 15.1117 88.6252 17.0327 88.6252 19.594C88.6252 27.2779 109.067 21.0027 109.067 33.6812C109.067 39.5722 103.735 43.2861 95.1007 43.2861C89.8949 43.4142 84.5621 41.7493 81.8958 39.5722Z" fill="#FF6060"/>
                <path d="M145 23.3079V43.03H139.413V38.6758C137.509 41.6213 133.827 43.2861 128.748 43.2861C121.384 43.2861 116.813 39.3161 116.813 33.6812C116.813 28.4305 120.114 24.2044 129.764 24.2044H139.032V23.0518C139.032 18.0572 136.112 15.2398 130.398 15.2398C126.589 15.2398 122.653 16.6485 120.114 18.6976L117.701 14.2153C121.003 11.5259 125.828 9.98911 131.033 9.98911C140.048 10.1172 145 14.4714 145 23.3079ZM139.159 33.0409V28.4305H130.145C124.304 28.4305 122.653 30.7357 122.653 33.4251C122.653 36.6267 125.32 38.6758 129.764 38.6758C134.208 38.8038 137.763 36.8828 139.159 33.0409Z" fill="#FF6060"/>
                <path d="M63.1042 34.4496V43.158L66.7864 40.9809V32.2725L63.1042 34.4496Z" fill="#FF6060"/>
                <path d="M73.2619 23.8202L58.1524 14.9837L49.7724 10.1172L41.5193 24.5886L41.6463 38.1635L56.6288 47L58.1524 46.1035V33.297L64.8819 21.3869L71.7383 25.357V38.1635L73.2619 37.267V23.8202Z" fill="#FF6060"/>
            </svg>
            <Burger />
            <nav className="desktop-nav">
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </header>
    )
}

export default Header;