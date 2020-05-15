import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CardsContainer from './components/CardsContainer';

const App = () => {
   
  const [productList, setProductList] = useState([]);
  
  const busqueda = searchInput => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchInput}`)
     .then(res => res.json())
     .then(data => setProductList(data.results));
  };


   
  return (
    <Router>
      
     <Switch>
       <Route exact path='/' component={() => <Home busqueda={busqueda}/>} />
       <Route to='/search/:product' component={() => <CardsContainer productList={productList} busqueda={busqueda}/>}/>       
     </Switch>

    </Router>
  );
}

export default App;