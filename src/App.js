import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CardsContainer from './components/CardsContainer';
import SingleProductSection from './components/SingleProductSection';
import HelpPage from './components/HelpPage';

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
       <Route exact path='/search/:product' component={() => <CardsContainer productList={productList} busqueda={busqueda}/>}/>       
       <Route exact path='/product/:id' component={() => <SingleProductSection/>}/>
       <Route exact path='/help' component={HelpPage}/>
     </Switch>

    </Router>
  );
}

export default App;