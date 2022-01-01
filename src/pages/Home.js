import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <>
         <Header />
         <main className="flex-shrink-0">
            <p><Link to="/dogs">Dogs</Link></p>
            <p><Link to="/cats">Cats</Link></p>
         </main>
         <Footer />
      </>
   )
}

export default Home;