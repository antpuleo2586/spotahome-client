import React from 'react';
import styled from 'styled-components';
import styles from '../styles'

const StyledPrice = styled.p`
    background-color: ${styles.colours.black};
    color: ${styles.colours.yellow};
    border-radius: 10px;
    font-size: 1.2em;
    padding: 5px;
    margin: 10px;
`;

const Price = (props) => {
    return <StyledPrice {...props}>{props.children}</StyledPrice>;
};

export default Price;
