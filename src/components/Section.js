import React from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'

const section = ({title, description, leftBtnText, rightBtnText, backgroundimg}) => {
  return (
    <Wrap bgImage={backgroundimg}>
        <FadeIn bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </FadeIn>
        <Buttons>
            <FadeIn>
        <ButtonGroup>
            <LeftButton className="LeftBtn">
                {leftBtnText}
            </LeftButton>
            {rightBtnText &&  
            <RightButton className="RightBtn">
                {rightBtnText}
            </RightButton>
            }
        </ButtonGroup>
        </FadeIn>
        <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
        </Wrap>
  )
}

export default section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/images/model-s.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;

`

const ButtonGroup = styled.div`
        display: flex;
        margin-bottom: 30px;
        @media (max-width: 768px) {
            flex-direction: column;
        }

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
background: white;
color: black;
opacity: 0.65;
`

const DownArrow = styled.img`
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`