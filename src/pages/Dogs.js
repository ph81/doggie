import React from 'react';
import Header from '../components/Header';
import DogData from '../components/DogData'

const Dogs = () => {
   return (
      <>
      <Header />
      <main className="flex-shrink-0">
         <DogData />
      </main>
      </>
   )
}

export default Dogs;