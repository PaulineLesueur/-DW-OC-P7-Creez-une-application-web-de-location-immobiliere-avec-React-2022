import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ErrorPage() {
    return (
        <React.Fragment>
            <Header />
            <main className="error-page">
                <div className="error-page">
                    <span>404</span>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <a href="/">Retourner sur la page d’accueil</a>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default ErrorPage;