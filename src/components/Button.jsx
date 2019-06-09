import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: white;
    color: blue;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid blue;
    border-radius: 3px;
`;

const Button = (props) => {
    return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
