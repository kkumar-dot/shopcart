import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    background-Color: #FBCC87;
    padding: 15px 30px;
    display: flex;
    align-Items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-Items: center;
    margin-left: 25px;
    padding; 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 2;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-Items: center;
    justify-Content: space-between;
    padding
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Language = styled.span`
    font-size: 17px;
    cursor: pointer;
`

const Bold = styled.b`
    font-size: 17px;
    font-weight: bold;
`

const Navbar = (props) => {

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        {/* <Language>
                            EN
                        </Language> */}
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Products"
                            inputProps={{ 'aria-label': 'Search Products' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    </Paper>
                </Left>
                <Center>
                    <Logo>
                    ShopCart
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>
                        <Link to="/login">
                            <Bold>
                                {props?.user?.firstName != undefined ? props?.user?.firstName : "Login"}
                            </Bold>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/signup">
                            <Bold>
                                {props?.user?.firstName != undefined ? "" : "Signup"}
                            </Bold>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={0} color="secondary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
