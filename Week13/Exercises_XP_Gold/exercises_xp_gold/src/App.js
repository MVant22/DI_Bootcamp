import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import BootstrapCard from './BootstrapCard';
import PlanetList from './planet';


function App() {
    return (
      <div>
        <h2 className='text-center mt-4'> Planets</h2>
        <PlanetList/>
      </div>
    );
}

export default App;
