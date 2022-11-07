import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from "../components/Header";
import Section from "../components/Collapse";
import Rentals from '../data.json';

function Rental() {
    const { id } = useParams();

    return (
        <React.Fragment>
            <Header />
            <main className="rental-page">
                {
                    Rentals.filter( rental => rental.id === id).map( rental => {
                        return(
                            <React.Fragment key={ rental.id }>
                                <div className="rental-basics">
                                    <h2>{ rental.title }</h2>
                                    <span>{ rental.location }</span>
                                    <div className="tags">
                                        {rental.tags.map(tag => {
                                            return(
                                                <div className="tag">{ tag }</div>
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
                                <Section title="Description">
                                    { rental.description }
                                </Section>
                                <Section title="Équipements">
                                    <ul>
                                        { rental.equipments.map(equipment => {
                                            return(
                                                <li>{ equipment }</li>
                                            )
                                        }) }
                                    </ul>
                                </Section>
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