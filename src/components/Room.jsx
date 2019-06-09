import React from 'react';
import styled from 'styled-components';
import Button from './Button'
import Price from "./Price";
import styles from "../styles";

const Room = ({ room }) => {
    const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    margin: 30px;
    background-color: ${styles.colours.white}
   `;

    const Image = styled.img`
    height: 130px;
    margin: auto;
  `;

    const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 10px;
  `;

    const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    `

    const Text = styled.p`
    margin: 10px;
  `;

    const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    `

    return (
        <Card>
            <Image src={room.photoUrls.homecard} />
            <ContentContainer>
                <TextContainer>
                    <Text>{room.title}</Text>
                    <Price>{room.monthlyPrice.fixedPrice}{room.currencySymbol}</Price>
                </TextContainer>
                <ButtonsContainer>
                    <Button secondary desktopOnly>More details</Button>
                    <Button primary>Buy now!</Button>
                </ButtonsContainer>
            </ContentContainer>
        </Card>
    );
};

export default Room;
