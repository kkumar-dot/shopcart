import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useLocation} from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function Cart(props) {
 
    const location = useLocation();

    return (
        <div style={{
            display:"flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#f4eadb"
        }} >
            {/* {console.log("react router dom === ", location?.state?.item)} */}
            <div 
                style={{
                    borderRadius: 10,
                    backgroundColor: "white",
                    margin: "20px 30px",
                    padding: "5px 5px"
                }} >
                <img 
                    src={`http://localhost:8080/${location?.state?.item?.image}`} 
                    alt="Logo"
                    style={{
                        // m: 1,
                        width: "250px",
                        height: "350px",
                        borderRadius: 10,
                        backgroundColor: "grey",
                        // margin: "20px 40px"
                    }}
                />
            </div>

            <div style={{
                    // background: "red", 
                    // justifyContent: "center",
                    display: "flex",
                    flexDirection: "column"
                }} >
                <Box
                    sx={{
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        padding: "20px 20px",
                        width: "300px",
                        height: "200px",
                        // alignItems: 'center',
                        margin: "20px 40px"
                    },
                    }}
                >
                    <Paper 
                        elevation={5} 
                    >
                        <h4>Price: {location?.state?.item?.price}</h4>
                        <h3>{location?.state?.item?.title}</h3>
                        <h4>{location?.state?.item?.description}</h4>
                    </Paper>
                </Box>
                <div style={{margin: "5px 40px"}} >
                    <Fab variant="extended">
                        <NavigationIcon sx={{ mr: 3 }} />
                        Buy Now
                    </Fab>
                </div>
            </div>

            <Box
                sx={{
                flexWrap: 'wrap',
                '& > :not(style)': {
                    padding: "20px 20px",
                    width: "400px",
                    height: "400px",
                    // alignItems: 'center',
                    margin: "20px 40px"
                },
                }}
            >
                <Paper 
                    elevation={5} 
                >
                </Paper>
            </Box>
        </div>
    
  );
}
