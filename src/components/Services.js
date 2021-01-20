import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import img1 from './../Assets/img1.jpg';
import img2 from './../Assets/img2.jpg';
import img3 from './../Assets/img3.jpg';
import img4 from './../Assets/img4.jpg';



const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    
  media: {
    height: 140,
  },
  }),
);

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.paper} color="primary" variant="h3">OUR SERVICES</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
      <CardActionArea>
      <Avatar variant="square" style={{width:"100%", height:"100%"}} src={img1}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Aerospace
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Hummingbird Technologies offer comprehensive process solutions for flow, level, pressure, analysis, temperature, recording and digital communications across a wide range of industries.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
      <CardActionArea>
        <Avatar variant="square" style={{width:"100%", height:"100%"}} src={img2}/>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Automation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Hummingbird Technologies offer comprehensive process solutions for flow, level, pressure, analysis, temperature, recording and digital communications across a wide range of industries.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
      <CardActionArea>
      <Avatar variant="square" style={{width:"100%", height:"100%"}} src={img3}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Medical Devices
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Hummingbird Technologies have also provided solutions for mobility enablement for medical devices and clinical software, integrating them securely with the cloud infrastructure for remote diagnosis and ease of access.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>        
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
      <CardActionArea>
      <Avatar variant="square" style={{width:"100%", height:"100%"}} src={img4}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Industrial Automation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Hummingbird Technologies offer comprehensive process solutions for flow, level, pressure, analysis, temperature, recording and digital communications across a wide range of industries.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>      
        </Grid>
      </Grid>      
      </Container>
    </React.Fragment>
      
    </div>
  );
}
  