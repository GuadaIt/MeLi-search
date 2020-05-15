import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Card from './Card.js';
import SingleProductSection from './SingleProductSection';
import HelpPage from './HelpPage';

const Section = styled.section`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 background-color: rgb(215, 230, 183);
`;

const CardsContainer = ({productList, busqueda}) => {

 const [item, setItem] = useState(null);
 const [searchResults, setSearchResults] = useState(true);
 
 const busquedaItem = id => {
   let itemInfo = {};
   fetch(`https://api.mercadolibre.com/items/${id}`)
   .then(res => res.json())
   .then(data => itemInfo = data);
  
   fetch(`https://api.mercadolibre.com/items/${id}/description`)
    .then(res => res.json())
    .then(data => {
      itemInfo.description = data.plain_text;
      setItem(itemInfo);
      setSearchResults(false);
    });
  };

  const handleClick = () => {
   setSearchResults(false);
  };

 return (
  <>
   <Nav busqueda={busqueda} handleClick={handleClick}/>
   {searchResults && <Section> {productList.map((product) => <Card product={product} key={product.id} busquedaItem={busquedaItem}/>)}</Section>}
   

   <Route exact path='/product/:id' component={() => item && <SingleProductSection item={item}/>}/>
   <Route path='/help' component={HelpPage}/>
  </>
 );
};

export default CardsContainer;