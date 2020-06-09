import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage.js';

const ItemSection = styled.section`
 background-color: rgb(215, 230, 183);
 display: flex;
 justify-content: center;
 padding: 30px 0;
 min-height: 100vh;
 .item-container {
  width: 90%;
  background-color: #fff;
  display: flex;
  @media (max-width: 415px) {
    flex-direction: column-reverse;
  };
  .description-img-container {
    width: 60%;
    padding: 20px;
    @media (max-width: 415px) {
     width: 100%;
     text-align: center;
    };
    img {
     width: 50%;
     height: auto;
     display: block;
     margin-left: auto;
     margin-right: auto;
    };
    h3 {
     margin-bottom: 0;
    };
    p {
      text-align: justify;
    }; 
  };
  .details-container {
   display: flex;
   flex-direction: column;
   padding: 20px;
   h2 {
    margin-bottom: 0;
   };
   .price-p {
    font-size: 40px;
   };
   button {
    height: 50px;
    width: 60%;
    font-size: 20px; 
    border-radius: 8px;
    background-color: #96be3e;
    color: #fff;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    &:hover {
     background-color: rgb(176, 206, 111);
    };
   };
  };
 };
`;

const SingleProductSection = () => {

  const params = useParams();

  const fetchItem = async () => {
    const res = await fetch(`https://api.mercadolibre.com/items/${params.id}`);
    const data = await res.json();
    
    const resDescription = await fetch(`https://api.mercadolibre.com/items/${params.id}/description`);
    data.description = await resDescription.json();
    
    return data;
  };

  const { status, data } = useQuery('fetch_item_data', fetchItem);
 
  if (status === 'loading') return <LoadingSpinner />
  if (status === 'error') return <ErrorMessage />

  return (
    <ItemSection>
        <div className='item-container'>
          <div className='description-img-container'>
            <img src={data.pictures[0].url} alt={data.title} />
            <h3>Descripción</h3>
            <p>{data.description.plain_text}</p>
          </div>
          <div className='details-container'>
            <p>{data.condition === 'new' ? 'Nuevo - ' : 'Usado - '}{data.sold_quantity} vendidos</p>
            <h2>{data.title}</h2>
            <p className='price-p'>${data.price}</p>
            <a href={data.permalink}>
              <button type='button'>Comprar</button>
            </a>
          </div>
        </div>
    </ItemSection>
  )
};

export default SingleProductSection;