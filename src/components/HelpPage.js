import React from 'react';
import styled from 'styled-components';

const ContactForm = styled.section`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 p {
  color: rgb(150, 190, 62);
  font-size: 40px;
  @media (max-width: 415px) {
   font-size: 30px;
   text-align: center;
  };
 };
 form {
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 800px) {
    width: 50%;
  };
  @media (max-width: 415px) {
   width: 70%;
  };
  input {
   height: 35px;
   border-radius: 8px;
   padding-left: 5px;
   margin-bottom: 20px;
   font-size: 15px;
  };
 };
 textarea {
  border-radius: 8px;
  padding-left: 5px;
  font-size: 15px;
  width: 100%;
  height: 220px;
 };
 button {
  margin-top: 20px;
  height: 40px;
  width: 150px;
  font-size: 22px;
  border-radius: 8px;
  color: #fff;
  background-color: rgb(150, 190, 62);
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
   background-color: rgb(176, 206, 111);
  };
 }; 
`;

const HelpPage = () =>{
 return (
  <ContactForm>
   <p>Contanos en qué te podemos ayudar</p>
   <form>
    <input type='text'placeholder='Nombre'/>
    <input type='text' placeholder='Email'/>
    <textarea name='message' placeholder='Mensaje'/>
    <button type='submit'>Enviar</button>
   </form>
  </ContactForm>
 );
};

export default HelpPage;