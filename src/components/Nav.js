import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import searchIcon from '../assets/search-icon.jpg';
import homeIcon from '../assets/home-icon.png';

const NavBar = styled.nav`
 display: flex;
 align-items: center;
 justify-content: space-around;
 height: 60px;
 background-color: rgb(150, 190, 62);
 color: #fff;
 form {
  width: 50%;
  input {
   width: 100%;
   height: 30px;
   border-radius: 8px;
   padding-left: 10px;
  };
 };
 .search-icon {
  height: 20px;
  position: relative;
  right: 160px;
  @media (max-width: 800px) {
    right: 80px;
  };
  @media (max-width: 415px) {
   right: 60px;
  };
 };
 p {
  font-size: 17px;
  transition: color 0.3s;
  &:hover {
   color: rgb(176, 206, 111);
   cursor: pointer;
   text-shadow: 2px 2px 2px #000;
  };
 };
 a {
   text-decoration: none;
   color: #fff;
   .home-icon {
     width: 35px;
     display: none;
      @media (max-width: 415px) {
       display: block;
      };
    }; 
    h3 {
      @media (max-width: 415px) {
        display: none;
      };
    };
 };
`;

const StyledTitle = styled.span`
  font-family: 'Chonburi', cursive;
`;

const Nav = ({ busqueda }) => {

 const history = useHistory();
 const [searchInput, setSearchInput] = useState('');

 const handleChange = e => {
   setSearchInput(e.target.value);
 };

 const handleSubmit = e => {
   e.preventDefault();
   history.push(`/search/${searchInput}`);
 };

 return (
  <NavBar>
   <Link to='/'>
     <img src={homeIcon} className='home-icon' alt='home'/>
     <h3><StyledTitle>MeLi</StyledTitle> search</h3>
   </Link>  
   <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange}></input>
   </form>
   <img className='search-icon' src={searchIcon} alt='search-icon' onClick={handleSubmit}/> 
   <Link to='/help'>
     <p>Ayuda</p>
   </Link>
  </NavBar>
 )
};

export default Nav;