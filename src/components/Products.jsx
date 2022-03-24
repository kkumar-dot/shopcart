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
    console.log("props============ ", props)
    let filteredData = props?.selectedProduct != "" && props?.products.filter(item => item.category == props?.selectedProduct)
    return (
        <Container>
            {filteredData.length > 0 ? 
            filteredData?.map((value) => (
                <MediaCard item={value} />
            )) :
            props?.products?.map((value) => (
                <MediaCard item={value} />
            ))}
        </Container>
    )
}

export default Products
