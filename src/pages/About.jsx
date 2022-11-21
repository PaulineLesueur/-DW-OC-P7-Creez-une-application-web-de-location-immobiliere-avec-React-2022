import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapsible from "../components/Collapsible";

function About() {
    return (
        <React.Fragment>
            <Header />
            <main className="aboutPage">
                <img className="mobile-version" src="/images/mountains-mobile-version.png" alt="Mountains about page mobile" />
                <img className="desktop-version" src="/images/mountains-desktop-version.png" alt="Mountains about page desktop" />

                <div className="about-page container-collapsible">
                    <Collapsible title="Fiabilité">
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </Collapsible>
                    <Collapsible title="Respect">
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </Collapsible>
                    <Collapsible title="Service">
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </Collapsible>
                    <Collapsible title="Sécurité">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </Collapsible>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default About;