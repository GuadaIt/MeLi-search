import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import searchIcon from '../assets/search-icon.jpg';

const MainPage = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 100vh;
 background: linear-gradient(60deg, rgb(124, 174, 15), rgb(150, 190, 62), rgb(176, 206, 111), rgb(215, 230, 183), rgb(255, 255, 255));
 h2 {
   font-size: 50px;
 };
 p {
   margin: 0;
   font-size: 15px;
   font-style: italic;
 };
 form {
   width: 40%;
   margin-top: 60px;
   @media (max-width: 415px) {
     width: 70%;
   };
   input {
     padding-left: 10px;
     width: 100%;
     height: 40px;
     border-radius: 10px;
     box-shadow: -9px 11px 20px 0px rgba(62,87,7,1);
   };
 };
`;

const StyledTitle = styled.span`
  font-family: 'Chonburi', cursive;
`;

const Icon = styled.img`
 height: 30px;
 position: relative;
 left: 500px;
 bottom: 35px;
 @media (max-width: 800px) {
   left: 260px;
 };
 @media (max-width: 415px) {
   left: 220px;
 };
`;


const Home = ({busqueda}) => {

 const history = useHistory();
 const [searchInput, setSearchInput] = useState('');
 
 const handleSubmit = e => {
  e.preventDefault();
  busqueda(searchInput);
  history.push(`./search/${searchInput}`);
 };

 const handleChange = e => {
  setSearchInput(e.target.value);
 };
 
 
 return (
  <MainPage>
  <h2><StyledTitle>MeLi</StyledTitle> search</h2>
  <p>If you haven't found it yet, keep looking</p>
  <p>- Steve Jobs</p>
 <form onSubmit={handleSubmit}>
   <input type="text" onChange={handleChange}/>
   <Icon src={searchIcon} alt='icon' onClick={handleSubmit}/>
 </form>
 </MainPage>
 );
};

export default Home;