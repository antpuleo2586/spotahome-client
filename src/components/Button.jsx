import React from 'react';
import styled, { css } from 'styled-components';
import styles from '../styles'

const StyledButton = styled.button`
    background: white;
    color: black;
    border: none;
    font-size: 1.2em;
    padding: 10px;
    margin: 10px;
    color: white;
    ${props => props.primary && css`
    background: ${styles.colours.primary};
    color: white;
    border-bottom: 5px solid ${styles.colours.primaryDark}
  `}
    ${props => props.secondary && css`
    background: ${styles.colours.secondary};
    color: white;
    border-bottom: 5px solid ${styles.colours.secondaryDark}
  `}
    ${props => props.desktopOnly && css`
    @media (max-width: 767px){
      display: none;
    }
  `}
`;

const Button = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
