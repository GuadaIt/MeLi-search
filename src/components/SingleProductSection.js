import React from 'react';
import styled from 'styled-components';

const ItemSection = styled.section`
 background-color: rgb(215, 230, 183);
 display: flex;
 justify-content: center;
 padding: 30px 0;
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
     width: 100%;
     height: auto;
     @media (max-width: 800px) {
      width: 50%;
     };
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

const SingleProductSection = ({ item }) => {
 
 return (
  <ItemSection>
   <div className='item-container'>
    <div className='description-img-container'>
     <img src={item.pictures[0].url} alt={item.title} />
     <h3>Descripción</h3>
     <p>{item.description}</p>
    </div>
    <div className='details-container'>
     <p>{item.condition === 'new' ? 'Nuevo - ' : 'Usado - '}{item.sold_quantity} vendidos</p>
     <h2>{item.title}</h2>
     <p className='price-p'>${item.price}</p>
     <a href={item.permalink}>
      <button type='button'>Comprar</button>
     </a>
    </div>
   </div>
  </ItemSection>
 );
};

export default SingleProductSection;