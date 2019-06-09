import React from 'react';
import styled from 'styled-components';
import styles from "../styles";

const NavBar = ({ title }) => {
    const Wrapper = styled.div`
    margin: 30px;
    display: flex;
    justify-content: space-between;
    background-color: ${styles.colours.primary}
    padding: 10px;
  `;
  const Title = styled.h1`
    color: ${styles.colours.white}
    text-align: left;
  `;
  const Menu = styled.p`
    color: ${styles.colours.white}
    @media (max-width: 767px){
      display: none;
    }
  `
    return <Wrapper>
        <Title>{title}</Title>
        <Menu>The company - How we work - Contact us</Menu>
    </Wrapper>;
};

export default NavBar;
