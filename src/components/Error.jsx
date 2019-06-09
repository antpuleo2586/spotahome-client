import React from 'react';
import styled from 'styled-components';

export default function () {
  const Error = styled.h2`
    color: red;
    text-align: center;
  `;

  return <Error>There has been an error! Please try again.</Error>;
}
