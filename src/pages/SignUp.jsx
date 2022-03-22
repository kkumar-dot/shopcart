import React, { useState, useEffect } from "react";
import { Grid, Paper, Avatar,TextField, FormControlLabel, Checkbox, Link } from "@material-ui/core"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {signupAuthenticate} from '../redux/actions/LoginAction';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@mui/material';

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertFlag, setAlertFlag] = useState(false)
    const [alertMsg, setAlertMsg] = useState('')

    const paperStyle={padding: 20, height: '70vh', width: 280, margin: "20px auto"}
    const avatarStyle={backgroundColor: 'red'}
    const loginTagStyle = {display: "flex", marginBottom: 20}
    const textStyle = {marginTop: 20, marginBottom: 5}

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log("handle submit ==== ", firstName, lastName, email, password )
        if(firstName.length <= 0 || email.length <= 0 || password.length <= 0) {
            setAlertFlag(true)
            setAlertMsg("All fields are required!")
            return
        } else if(firstName.length <=2) {
            setAlertFlag(true)
            setAlertMsg("Enter valid Fisrtname and lastname")
            return
        }
        else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setAlertFlag(true)
            setAlertMsg("Enter valid email")
            return
        } else if(password.length <= 7){
            // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/   - regex for password
            // Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers 
            setAlertFlag(true)
            setAlertMsg("Password should contains atleast 8 charaters")
            return
        }
        const obj ={
            "FirstName": firstName,
	        "LastName": lastName,
            "Email": email,
            "Password": password
        }
        dispatch(signupAuthenticate(obj, (data) => 
            data ? 
            [console.log("signup success ... "), navigate('/productList')] : 
            [setAlertFlag(true), setAlertMsg("Something went worng!!!")]
        ))
    }

    useEffect(() => {

    }, alertFlag, alertMsg)

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid style={loginTagStyle} >
                <Avatar style={avatarStyle} >
                    <AccountCircleIcon />
                </Avatar>
                <div style={{paddingTop: 5, marginLeft: 20, display: "flex"}} >
                    <h2>Sign up</h2>
                </div>
                </Grid>
                <TextField onChange={(event) => setFirstName(event.target.value)} id="standard-basic" label="Enter FirstName" variant="standard" fullWidth required />
                <TextField onChange={(event) => setLastName(event.target.value)} id="standard-basic" label="Enter LastName" variant="standard" fullWidth />
                <TextField onChange={(event) => setEmail(event.target.value)} id="standard-basic" label="Enter Email" variant="standard" fullWidth required />
                <TextField onChange={(event) => setPassword(event.target.value)} id="standard-basic" label="Enter Password" type='password' fullWidth required />
                <div style={{marginTop: 10, marginBottom: 10 }} >
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                </div>
                <Button onClick={() => handleSubmit()} type='submit' color='primary' variant="contained" fullWidth>Submit</Button>

                <Typography style={textStyle} >
                    Already have an account ?
                    <Link href="/" >Click here</Link>
                </Typography>
                {alertFlag && <Alert severity="error">{alertMsg}</Alert>}
            </Paper>
           
        </Grid>
    )
}

export default SignUp