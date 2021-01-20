import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import LayersIcon from '@material-ui/icons/Layers';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import logo from './../Assets/logo.png';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 65
  },
  brand: {
    lineHeight: 1,
    marginRight: 'auto',
    color:"white"
  },
  link: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      color:"darkOrange"
    }
  },
  primaryAction: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    color: 'black'
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 300,
  },
  appBarTransparent: {
    backgroundColor: 'rgba(67, 129, 168,0.2)'
  },
  appBarSolid: {
    backgroundColor: 'white'
  }

}));



export default function Navbarforall(props) {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

  

  const content = {
    'brand': { image: 'Assets/logo.png', width: 110 },
    'link1': 'Home',
    'link2': 'About',
    'link3': 'Services',
    'link4': 'Career',
    'link5': 'Contact Us',

    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = <img src={logo} alt="" width="50px" height="50px" />
  } else {
    brand = content.brand.text || '';
  }

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    
    <AppBar position="fixed" className={classes[navRef.current]}>
      <Toolbar className={classes.toolbar} >
        <Link href="#" color="primary" underline="none" variant="h5" className={classes.brand}>
          {brand}
        </Link>
        <Link href="#" color="textPrimary" variant="body2" underline="none" className={classes.link} style={{color:"blue"}}>
          {content['link1']}
        </Link>
        <Link href="#" color="textPrimary" variant="body2" underline="none" className={classes.link} style={{color:"blue"}}>
          {content['link2']}
        </Link>
        <Link href="#" color="textPrimary" variant="body2" underline="none" className={classes.link} style={{color:"blue"}}>
          {content['link3']}
        </Link>
        <Link href="#" color="textPrimary" variant="body2" underline="none" className={classes.link} style={{color:"blue"}}>
          {content['link4']}
        </Link>
        <Link href="#" color="textPrimary" variant="body2" underline="none" className={classes.link} style={{color:"blue"}}>
          {content['link5']}
        </Link>
        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <Box mb={1} ml={2} pb={2} border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
            <Link href="#" color="primary" underline="none" variant="h5" className={classes.linkBrand}>
              {brand}
            </Link>
          </Box>
          <List>
            <ListItem button key={content['link1']}>
              <ListItemIcon className={classes.iconWrapper}>
                <LayersIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link1']} />
            </ListItem>
            <ListItem button key={content['link2']}>
              <ListItemIcon className={classes.iconWrapper}>
                <FilterHdrIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link2']} />
            </ListItem>
            <ListItem button key={content['link3']}>
              <ListItemIcon className={classes.iconWrapper}>
                <DirectionsBusIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link3']} />
            </ListItem>
            <ListItem button key={content['link4']}>
              <ListItemIcon className={classes.iconWrapper}>
                <NotificationImportantIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link4']} />
            </ListItem>
            <ListItem button key={content['link5']}>
              <ListItemIcon className={classes.iconWrapper}>
                <NotificationImportantIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link5']} />
            </ListItem>
          </List>
          {/* <Box mt={1} ml={2} pt={3} border={1} borderBottom={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
            <Button variant="contained" color="primary" fullWidth>{content['primary-action']}</Button>
          </Box> */}
        </div>
      </Drawer>
    </AppBar>
  );
 

};
