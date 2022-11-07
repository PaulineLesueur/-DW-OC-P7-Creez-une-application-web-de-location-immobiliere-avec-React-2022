import '../assets/style/sass/card.scss';
import { Link } from 'react-router-dom';
import Rentals from '../data.json';

function Card() {
    return (
        <div className="cards-container">
            {
                Rentals.map( rental => {
                    return (
                        <Link to={`/rental/${ rental.id }`} key={ rental.id }>
                            <div className="card" style={{ backgroundImage: `linear-gradient(transparent,rgba(0, 0, 0, 0.6) 85%), url(${rental.cover})` }} key={ rental.id }>
                                <h2>{ rental.title }</h2>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Card;