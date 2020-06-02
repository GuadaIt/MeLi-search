import React from 'react';
import Nav from './Nav';
import CardsContainer from './CardsContainer';
import SingleProductSection from './SingleProductSection';
import HelpPage from './HelpPage';

const MainContainer = ({ component }) => {

  return (
   <>
    <Nav />
    {component === 'results' && <CardsContainer />}
    {component === 'single' && <SingleProductSection />}
    {component === 'help' && <HelpPage />}
   </> 

  )
};

export default MainContainer;