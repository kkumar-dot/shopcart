import { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Container = styled.div`
    width: 100%;
    margin: 2vh 0;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 25px;
    display: flex;
    align-Items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw)
`

const Slide = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    align-Items: center;
    background-color: #${props=>props.bg};
`

const ImgContainer = styled.div`
    height: 100%;
    background-color: green;
    flex: 2;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Slider = () => {
    const[slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === 'left')
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        else
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick("left")} >
                <ArrowLeftOutlined/>
            </Arrow>
            {/* <Carousel autoPlay={true}>
                <div>
                    <img src="https://www.easypromosapp.com/blog/en/wp-content/uploads/xxss_bike_shop_marketing_ideas.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://indianonlineseller.com/images/blogs/editor/sponsored-ads-on-online-marketplaces.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
            <Wrapper slideIndex={slideIndex} >
                <Slide bg="f5fafd" >
                    <ImgContainer>
                        <Image src="https://www.easypromosapp.com/blog/en/wp-content/uploads/xxss_bike_shop_marketing_ideas.png" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Test Shop</Title>
                        <Desc>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Desc>
                        <Stack>
                        <Button variant="contained">Show Now</Button>
                        </Stack>
                    </InfoContainer>
                </Slide>
                <Slide bg="f5fafd" >
                    <ImgContainer>
                        <Image src="https://indianonlineseller.com/images/blogs/editor/sponsored-ads-on-online-marketplaces.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Test Shop</Title>
                        <Desc>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Desc>
                        <Stack>
                        <Button variant="contained">Show Now</Button>
                        </Stack>
                    </InfoContainer>
                </Slide>
                <Slide bg="f5fafd" >
                    <ImgContainer>
                        <Image src="https://newspaperads.ads2publish.com/wp-content/uploads/2019/06/central-shopping-mall-happiness-sale-upto-51-off-ad-delhi-times-19-06-2019.png" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Test Shop</Title>
                        <Desc>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Desc>
                        <Stack>
                        <Button variant="contained">Show Now</Button>
                        </Stack>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick("right")} >
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
