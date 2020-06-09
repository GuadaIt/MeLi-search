import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Card from './Card.js';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage.js';

const Section = styled.section`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 background-color: rgb(215, 230, 183);
`;

const CardsContainer = () => {

   const { product } = useParams();

   const fetchItems = async () => {
      const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`);
      const searchedItems = await res.json();

      return searchedItems;
   };

   const { status, data } = useQuery('fetch_searched_items', fetchItems);

   if (status === 'loading') return <LoadingSpinner />
   if (status === 'error') return <ErrorMessage />

   return (
      <Section> {data.results.map((product) => <Card product={product} key={product.id} />)}</Section>
   );
};

export default CardsContainer;