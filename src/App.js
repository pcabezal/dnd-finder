import React from 'react';
import './App.css';
import Cards from './Cards';
import Header from './Header';

function App() {
  return (

    // BEM class naming convention
    <div className='app'>
      {/* {Header} */}
      <Header/>
    
      {/* {TinderCards} */}
      <Cards/>
      

      {/* {SwipeButtons} */}



    </div>
  );
}

export default App;
