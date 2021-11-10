  import React from 'react';
  import Mostrar from './Componentes/Mostrar.js';
  import Agregar from './Componentes/Agregar.js';
  import Navbar from './Componentes/Navbar.js';
  import './App.css';

  function App() {

    return (
      <div>
      <Navbar />
      <Agregar/>
     
      <Mostrar />
      
      </div>
      );
    }

    export default App;
