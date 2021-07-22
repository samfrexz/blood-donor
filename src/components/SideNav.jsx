import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/styles';
import logo from '../Assets/logo.png'
import dashbordc from '../Assets/Icon material-dashboard.png'
import bdonor from '../Assets/bdonor.png'
import drople from '../Assets/drople.png'
import request from '../Assets/request.png'
import store from '../Assets/store.png'
import notification from '../Assets/notification.png'
import profile from '../Assets/profile.png'
import logout from '../Assets/logout.png'


const drawerWidth = 240;

const useStyles = makeStyles((theme)=>({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: 'none'
  },
  coyLogo: {
    width: '100%',
    height: '14vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))


const SideNav = () => {

  const classes = useStyles()

  const handleLogout=()=> {
    sessionStorage.clear()
    window.location.pathname = "/"
  }

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <img src={dashbordc} alt="" />,
      path: '/'
    },
    {
      text: 'Donor List',
      icon: <img src={bdonor} alt="" />,
      path: '/'
    },
    {
      text: 'Donation',
      icon: <img src={drople} alt="" />,
      path: '/'
    },
    {
      text: 'Request',
      icon: <img src={request} alt="" />,
      path: '/'
    },
    {
      text: 'Store',
      icon: <img src={store} alt="" />,
      path: '/'
    },
    {
      text: 'Notification',
      icon: <img src={notification} alt="" />,
      path: '/'
    },
    {
      text: 'Profile',
      icon: <img src={profile} alt="" />,
      path: '/'
    },
  ]
  return ( 
    <>
      <Drawer variant="permanent"
        classes={{paper: classes.drawerPaper}}
        className={classes.drawer}
        anchor="left"
        >
          <div className={classes.coyLogo}>
            <img src={logo} alt="" />
          </div>

          <List style={{cursor: 'pointer'}}>
            {menuItems.map(item => (
              <ListItem key={item.text}>
                <ListItemIcon>{item.icon} </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem onClick={handleLogout}>
              <ListItemIcon>
                <img src={logout} alt="" />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
      </Drawer>
    </>
   );
}
 
export default SideNav;