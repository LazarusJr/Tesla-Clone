import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section 
        title="Model S"
        description="Order Online For Touchless Delivery"
        backgroundimg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        />
        <Section 
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundimg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        />
        <Section 
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundimg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"/>
        <Section 
        title="Solar and Powerwall"
        description="Power Everything"
        backgroundimg="solar-panel.jpg"
        leftBtnText="Learn more"
         />
        <Section 
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundimg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        />
         <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundimg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more" />
        <Section 
        title="Accessories"
        description=""
        backgroundimg="accessories.jpg"
        leftBtnText="Shop now"
         />
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`