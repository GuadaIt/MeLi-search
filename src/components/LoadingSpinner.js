import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .loading {
   width: 60px;
   height: 60px;
   border: solid 6px #ccc;
   border-radius: 100%;
   border-top-color: rgb(150, 190, 62);
   border-left-color: rgb(150, 190, 62);
   animation: spin 1s infinite ease-in-out;

   @keyframes spin {
    0% {
     transform: rotate(0deg);
    };
    100% {
     transform: rotate(360deg);
    };
   };
  };
`;

const LoadingSpinner = () => {
 return (
  <SpinnerContainer>
   <div className='loading' />
  </SpinnerContainer>
 );
};

export default LoadingSpinner;