import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
    return (
        <React.Fragment>
            <Header />
            <main className="aboutPage">
                <img className="mobile-version" src="/images/mountains-mobile-version.png" alt="Mountains about page mobile" />
                <img className="desktop-version" src="/images/mountains-desktop-version.png" alt="Mountains about page desktop" />
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default About;