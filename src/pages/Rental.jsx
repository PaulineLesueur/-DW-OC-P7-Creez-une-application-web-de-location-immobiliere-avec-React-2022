import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import Collapsible from "../components/Collapsible";
import Rentals from '../data.json';
import ErrorPage from './ErrorPage';
import Rating from '../components/Rating';

function Rental() {
    const { id } = useParams();
    const idExists = Rentals.find(e => e.id === id);

    return idExists ? (
        <React.Fragment>
            <Header />
            <main className="rental-page">
                {
                    Rentals.filter( rental => rental.id === id).map( rental => {
                        const slides = rental.pictures;
                        return(
                            <React.Fragment key={ rental.id }>
                                <div className="images-slider">
                                    <ImageSlider slides={slides} />
                                </div>
                                <div className="rental-informations">
                                    <div className="rental-basics">
                                        <h2>{ rental.title }</h2>
                                        <span>{ rental.location }</span>
                                        <div className="tags">
                                            {rental.tags.map((tag, index) => {
                                                return(
                                                    <div key={index} className="tag">{ tag }</div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="rating-host">
                                            <div className="rating">
                                                <Rating>
                                                    { rental.rating }
                                                </Rating>
                                            </div>
                                            <div className="host">
                                                <span>{ rental.host.name }</span>
                                                <img src={ rental.host.picture } alt={ rental.host.name} />
                                            </div>
                                    </div>
                                </div>
                                <div className="rental-collapsible">
                                    <Collapsible title="Description">
                                        { rental.description }
                                    </Collapsible>
                                    <Collapsible title="Équipements">
                                        <ul>
                                            { rental.equipments.map((equipment, index) => {
                                                return(
                                                    <li key={index}>{ equipment }</li>
                                                )
                                            }) }
                                        </ul>
                                    </Collapsible>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </main>
            <Footer />
        </React.Fragment>
    ) : <ErrorPage />;
}

export default Rental;