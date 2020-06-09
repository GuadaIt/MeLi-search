import React from 'react';
import styled from 'styled-components';

const ErrorMessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(150, 190, 62);
 p { 
  font-size: 20px;
  margin: 0;
  };
`;

const ErrorMessage = () => {
  return (
   <ErrorMessageContainer>
    <h2>¡Oops! Something went wrong</h2>
    <p>Please refresh the page</p>
   </ErrorMessageContainer>
  );
};

export default ErrorMessage;