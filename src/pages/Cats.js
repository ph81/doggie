import React from 'react';
import Header from '../components/Header';
import CatData from '../components/CatData'

const Cats = () => {
   return (
      <>
      <Header />
      <main className="flex-shrink-0">
         <CatData />
      </main>
      </>
   )
}

export default Cats;