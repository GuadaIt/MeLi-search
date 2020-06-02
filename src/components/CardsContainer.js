import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card.js';

const Section = styled.section`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 background-color: rgb(215, 230, 183);
`;

const CardsContainer = () => {

 const { product } = useParams();
 const [productList, setProductList] = useState([]);

 useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
    .then(res => res.json())
    .then(data => setProductList(data.results));
 }, [product]);
 
 return (
  <>
   <Section> {productList.map((product) => <Card product={product} key={product.id}/>)}</Section>   
  </>
 );
};

export default CardsContainer;