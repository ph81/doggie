import React from 'react';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <>
         <main>
            <p><Link to="/dogs">Dogs</Link></p>
            <p><Link to="/cats">Cats</Link></p>
         </main>
         <Footer />
      </>
   )
}

export default Home;