import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import Collapsible from "../components/Collapsible";
import Rentals from '../data.json';

function Rental() {
    const { id } = useParams();

    return (
        <React.Fragment>
            <Header />
            <main className="rental-page">
                {
                    Rentals.filter( rental => rental.id === id).map( rental => {
                        const slides = rental.pictures;
                        return(
                            <React.Fragment key={ rental.id }>
                                <div className="rental-basics">
                                    <div className="images-slider">
                                        <ImageSlider slides={slides} />
                                    </div>
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
                                            ★ ★ ★ ★ ★
                                        </div>
                                        <div className="host">
                                            <span>{ rental.host.name }</span>
                                            <img src={ rental.host.picture } alt={ rental.host.name} />
                                        </div>
                                </div>
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
                            </React.Fragment>
                        )
                    })
                }
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default Rental;