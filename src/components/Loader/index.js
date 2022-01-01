import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = ( {type} ) => {
  if (type === 'dogs') {
    return (
      <div className='App'>
      <h3>Loading dogs...</h3>
      <Loader
        type="Hearts"
        color="#1e232b"
        height={200}
        width={200}
        timeout={1000} //1.5 secs
      />
    </div>
   )
  }

  if (type === 'cats') {
    return (
      <div className='App'>
      <h3>Loading cats...</h3>
      <Loader
        type="Hearts"
        color="#1e232b"
        height={200}
        width={200}
        timeout={3000} //1.5 secs
      />
    </div>
   )
  }

}

export default Loading;