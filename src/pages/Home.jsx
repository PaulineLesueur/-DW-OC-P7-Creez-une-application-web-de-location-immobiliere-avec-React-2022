import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

function Home() {
  return (
      <React.Fragment>
        <Header />
        <main>
            Main content
        </main>
        <Footer />
      </React.Fragment>
  );
}

export default Home;
