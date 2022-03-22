import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === 'filled' && 'none'};
    background-color: ${props=>props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props=>props.type === 'filled' && 'white'};
`
const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex: 1;
`
const  Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const  ProductDetails = styled.div`
    flex: 2
`
const  PriceDetails = styled.div`
    flex2;
    display: flex;
`
const  Image = styled.img`
    width: 200px;
`

const Cart = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton type="filled" >
                        Continue Shoping
                    </TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                    </TopTexts>
                    <TopButton>
                        Checkout now
                    </TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg" />
                            </ProductDetails>
                            <PriceDetails>

                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>summary</Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
