import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

function Home() {
  return (
      <React.Fragment>
        <Header />
        <main className='home-page'>
            <div className="banner">
              <p>Chez vous,<br /> partout et ailleurs</p>
            </div>
        </main>
        <Footer />
      </React.Fragment>
  );
}

export default Home;
