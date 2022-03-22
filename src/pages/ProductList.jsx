import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import {productList} from '../redux/actions/ProductsAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`
const Main = styled.div`
    display: flex;
    flex-Direction: column;  
    background-Color: #f4eadb;
    margin: 20px 0px;
    padding: 0px 20px;
`

const ProductDiv = styled.div`
    display: flex;
    flex: 2;
    background-Color: #f4eadb;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600
`
// const Select = styled.select``
const Option = styled.option``

const ProductList = () => {
    const { user, products } = useSelector(state => {
        return { 
            user: state.loginReducer.user,
            products: state.productsReducer.products
        }
    })

    const [product, setProduct] = React.useState('');
    const [price, setPrice] = React.useState('');

    const handleChange = (event) => {
        event.target.name == "product" && setProduct(event.target.value);
        event.target.name == "price" && setPrice(event.target.value);
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(productList())
    }, [])

    return (
        <Container>
            {console.log("user andproduct info ==== ", user, products)}
            <Announcement/>
            <Navbar
                user={user}
            />
            <Main>
            {/* <FilterContainer> */}
                <ProductDiv>
                    <div style={{
                        width: 250, 
                        margin: "15px 50px"
                        }} >                
                        <FormControl fullWidth>
                        <InputLabel >Product</InputLabel>
                        <Select
                            id="product"
                            name="product"
                            value={product}
                            label="product"
                            onChange={handleChange}
                        >
                            <MenuItem value={30}>Mobiles</MenuItem>
                            <MenuItem value={10}>Cloths</MenuItem>
                            <MenuItem value={20}>Food</MenuItem>
                            <MenuItem value={30}>Shoes</MenuItem>
                            <MenuItem value={10}>Electronics</MenuItem>
                            <MenuItem value={20}>Toys</MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                    <div style={{
                        width: 200, 
                        margin: "15px 0px"
                        }} >                
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Price</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="price"
                            name="price"
                            value={price}
                            label="price"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Below 1000</MenuItem>
                            <MenuItem value={20}>Above 1000</MenuItem>
                            <MenuItem value={30}>2000 to 5000</MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                </ProductDiv>
            {/* </FilterContainer> */}
                <div style={{flex: 1}} >
                {products && <Products
                    products={products}
                />}
                </div>
            </Main>
            {/* <Newsletter/> */}
            <Footer/>
        </Container>
    )
}

export default ProductList
