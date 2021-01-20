import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import backgroundImage from './../Assets/656665.jpg';



const useStyles = makeStyles((theme) => ({
        section: {
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: theme.palette.primary.dark,
            paddingTop: theme.spacing(12),
            paddingBottom: theme.spacing(12),
            [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(30),
            paddingBottom: theme.spacing(30),
            }
        },
        description: {
            color: theme.palette.background.secondary
        },
        primaryAction: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '50%',
            marginRight: theme.spacing(0),
            marginBottom: theme.spacing(2),
            }
        },
        secondaryAction: {
            [theme.breakpoints.down('xs')]: {
            width: '100%',
            }
        }
    }));

    export default function SimpleContainer() {
        const classes = useStyles();

        return(
            <section className={classes.section} style={{backgroundImage: "url(" + backgroundImage + ")"}}>
                <Container maxWidth="md">
                    <Box textAlign="center" color="common.white">
                        <Typography variant="h3" component="h2" gutterBottom={true}>
                            <Typography color="primary" variant="h2" component="span">
                            THREE HORIZONS TO PURPOSE-LED GROWTH
                            </Typography>
                        </Typography>
                        <Container maxWidth="sm">
                            <Typography variant="h5" paragraph={true} color="primary" className={classes.description}>
                            Build the core. Innovate business models. Transform and grow through purpose-driven ecosystems.
                            </Typography>
                        </Container>
                        <Box mt={3}>
                        <Button variant="contained" size="medium" color="primary" className={classes.margin}>                              
                          Know More
                        </Button>
                        </Box>
                    </Box>
                </Container>
            </section>
        );
    }