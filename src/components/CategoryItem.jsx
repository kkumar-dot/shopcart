import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.05);
`

const Image = styled.img`
    width: 80%;
    height: 80%;
    object-fit: contain;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-Items: center;
    justify-content: center;
`
const Title = styled.h3`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 5px;
`

const Div = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-Items: center;
    justify-content: center;
    background-color: white;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Div>
            <Image src={item.img} />
            </Div>
            <Info>
                {/* <Title>{item.title}</Title> */}
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
