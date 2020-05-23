import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import '../../Components/Home/Home.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 1600,
    },
    image: {
      width: 1000,
      height: 1000,
    },
   
    
   
  }));


const Home = ({data:{date, copyright, explanation, title, hdurl}}) => {
    const classes = useStyles();
   
    return (
        
        <div className="apod">
                <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item >
              <Typography variant="subtitle1"><h1>Astronomy Picture Of The Day(NASA)</h1></Typography>
            </Grid>
          <Grid item>
            
              <img  alt="Astronomy Picture of The Day" src={hdurl} />
           
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    <h4>{title}</h4>
                </Typography>
                <Typography variant="body2" gutterBottom>
                     <p>{explanation}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <p>Date: <small>{date}</small></p>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" >
                <p>Picture Copyright: {copyright}</p>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
   </Paper>
    </div>
        </div>
    );
};

export default Home;