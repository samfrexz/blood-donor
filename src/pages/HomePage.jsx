import React from 'react';
import SideNav from '../components/SideNav';
import { makeStyles } from '@material-ui/styles';



const drawerWidth = 240;

const useStyles = makeStyles((theme)=>({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}))

const HomePage = () => {
  const classes = useStyles()
  return ( 
    <>
    <SideNav />
    <div className={classes.appBar}>
    <h1>home page</h1>
    </div>
    </>
   );
}
 
export default HomePage;