import React from 'react';
import './App.css';
import Cards from './Cards';
import Header from './Header';
import SwipeButtons from './SwipeButtons';

function App() {
  return (

    // BEM class naming convention
    <div className='app'>
      {/* {Header} */}
      <Header/>
    
      {/* {TinderCards} */}
      <Cards/>
      

      {/* {SwipeButtons} */}
      <SwipeButtons/>


    </div>
  );
}

export default App;
