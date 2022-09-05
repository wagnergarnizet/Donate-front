import * as React from 'react';
import Rotas from './router';
import './scss/App.scss';
import Navbar from './pages/helpers/Navbar';
import Contato from './pages/helpers/Contato';
import Footer from './pages/helpers/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Rotas></Rotas>
      <Contato></Contato>
      <Footer></Footer>
    </div>
  );
}

export default App;