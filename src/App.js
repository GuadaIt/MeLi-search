import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MainContainer from './components/MainContainer';

const App = () => {
      
  return (
    <Router>
      
     <Switch>
       <Route exact path='/' component={() => <Home />} />
       <Route exact path='/search/:product' component={() => <MainContainer component={'results'}/>} />
       <Route exact path='/product/:id' component={() => <MainContainer component={'single'}/>} />
       <Route exact path='/help' component={() => <MainContainer component={'help'}/>} />
     </Switch>

    </Router>
  );
}

export default App;