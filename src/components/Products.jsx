import React from 'react'
import styled from "styled-components"
import { categories } from '../data'
import MediaCard from './MediaCard'
import Product from './Product'

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = (props) => {
    return (
        <Container>
            {props?.products?.map((value) => (
                <MediaCard item={value} />
            ))}
        </Container>
    )
}

export default Products
