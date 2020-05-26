import React from 'react';
import Nav from './Nav';
import CardsContainer from './CardsContainer';
import SingleProductSection from './SingleProductSection';
import HelpPage from './HelpPage';

const MainContainer = ({ busqueda, productList, component }) => {

  return (
   <>
    <Nav busqueda={busqueda} />
    {component === 'results' && <CardsContainer busqueda={busqueda} productList={productList}/>}
    {component === 'single' && <SingleProductSection />}
    {component === 'help' && <HelpPage />}
   </> 

  )
};

export default MainContainer;