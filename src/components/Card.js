import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import freeShippingIcon from '../assets/free-shipping-icon.png';

const Item = styled(Link)` 
 background-color: #fff;
 transition: all 0.5s ease-in-out;
 text-decoration: none;
 color: #000;
 cursor: default;
 margin: 10px;
  &:hover {
   transform: scale(1.05);
   background-color: rgb(176, 206, 111);
   .free-shipping {
     background-color: #fff;
   };
  };
`;

const ItemInfo = styled.div`
   width: 250px;
   padding: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   img {
     width: 95%;
     height: auto;
    };
    .free-shipping {
      background-color: rgb(150, 190, 62); 
      width: 40px;
      height: 40px;
      position: relative;
      left: 70px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
       width: 60%;
      }; 
    };
   p {
     font-size: 30px;
     margin: 0;
    };
   button {
     margin-top: 20px;
     height: 25px;
     color: #fff;
     background-color: rgb(150, 190, 62);
     transition: all 0.5s ease-in-out;
     cursor: pointer;
    &:hover {
     background-color: rgb(176, 206, 111);
    };
   };
`;

const Card = ({product}) => {
 
 return (
  <Item to= {`/product/${product.id}`} >
    <ItemInfo>
      <img src={product.thumbnail} alt={product.title} />
      {product.shipping.free_shipping && <div className='free-shipping'><img src={freeShippingIcon} alt='free shipping'/></div>}
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button type='button'>Ver más</button>
    </ItemInfo>
  </Item>
 )
};

export default Card;