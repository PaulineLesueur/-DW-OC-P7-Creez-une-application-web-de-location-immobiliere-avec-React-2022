import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import Card from '../components/Card';

function Home() {
  return (
      <React.Fragment>
        <Header />
        <main className='home-page'>
            <div className="banner">
              <p>Chez vous,<br /> partout et ailleurs</p>
            </div>
            <Card />
        </main>
        <Footer />
      </React.Fragment>
  );
}

export default Home;
