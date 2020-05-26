import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MainContainer from './components/MainContainer';

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
       <Route exact path='/search/:product' component={() => <MainContainer busqueda={busqueda} productList={productList} component={'results'}/>} />
       <Route exact path='/product/:id' component={() => <MainContainer busqueda={busqueda} productList={productList} component={'single'}/>} />
       <Route exact path='/help' component={() => <MainContainer busqueda={busqueda} component={'help'}/>} />
     </Switch>

    </Router>
  );
}

export default App;