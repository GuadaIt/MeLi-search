import React from 'react';
import styled from 'styled-components';
import Card from './Card.js';


const Section = styled.section`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 background-color: rgb(215, 230, 183);
`;

const CardsContainer = ({productList}) => {

 return (
  <>
   <Section> {productList.map((product) => <Card product={product} key={product.id}/>)}</Section>   
  </>
 );
};

export default CardsContainer;