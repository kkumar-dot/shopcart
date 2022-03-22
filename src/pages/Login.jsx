import React, { useEffect, useState } from "react";
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography,Link } from "@material-ui/core"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Alert } from '@mui/material';
import {emailAuthenticate} from '../redux/actions/LoginAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertFlag, setAlertFlag] = useState(false)

    const paperStyle={padding: 20, height: '60vh', width: 280, margin: "20px auto" }
    const avatarStyle={backgroundColor: 'red'}
    const loginTagStyle = {display: "flex", marginBottom: 20}
    const textStyle = {marginTop: 20, marginBottom: 5}
    const logDiv = {paddingTop: 5, marginLeft: 20, display: "flex"}

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("handle submit ==== ",email, password )
        const obj ={
            "Email": email,
            "Password": password
        }
        dispatch(emailAuthenticate(obj, (data) => 
            data ? navigate('/productList') :  setAlertFlag(true)
        ))
    }

    useEffect(() => {

    }, alertFlag)
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid style={loginTagStyle} >
                <Avatar style={avatarStyle} >
                    <AccountCircleIcon />
                </Avatar>
                <div style={logDiv}>
                    <h2>Log in</h2>
                </div>
                </Grid>
                <TextField 
                    id="standard-basic" 
                    label="Enter Email" 
                    variant="standard" 
                    fullWidth
                    required
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    id="standard-basic"
                    label="Enter Password"
                    type='password'
                    fullWidth
                    required
                    onChange={(event) => setPassword(event.target.value)}
                />
                <div style={{marginTop: 10, marginBottom: 10 }} >
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                </div>
                <Button  
                    type='submit'
                    color='primary'
                    variant="contained"
                    fullWidth
                    onClick={() => handleSubmit()}
                >
                    Submit
                </Button>

                <Typography style={textStyle} >
                    <Link href="#" >Forgot password ?</Link>
                </Typography>

                <Typography>
                    Don't have account ?
                    <Link href="/signup" >Click here</Link>
                </Typography>
                {alertFlag && <Alert severity="error">Email or Password is worng — check it out!</Alert>}
            </Paper>
        </Grid>
    )
}

export default Login