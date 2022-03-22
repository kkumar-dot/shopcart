import * as React from 'react';
import Card from '@mui/material/Card';
import { Grid, Paper, Avatar,TextField, FormControlLabel, Checkbox, Link } from "@material-ui/core"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function MediaCard(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Card sx={{ width: 250, margin: "10px", height: 350 }}>
      <CardMedia
        className={{ backgroundColor: "green" }}
        component="img"
        height="190"
        image={`http://localhost:8080/${props?.item?.image}`}
        alt="Goods"
      />
      <CardContent style={{ padding: "5px 10px" }} >
        <Typography gutterBottom variant="h7" component="div">
            {props?.item?.title}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={`Price: ${props?.item?.price}`} color="primary" />
        </Stack>
        <Typography variant="body2" color="text.secondary">
            {props?.item?.description}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: "space-around"}} >
        <Button size="small" variant="outlined" color="error">
          Add to Cart
        </Button>
        <Button size="small" onClick={() => navigate('/cart', { state:{ item: props?.item } })} variant="contained" color="success">
          Purchase
        </Button>
      </CardActions>
    </Card>
  );
}
