import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import blod from '../Assets/blod.png'
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme)=>({
  contain: {
    margin: '2rem auto',
    width: '80%'
  },
  fom: {
    marginTop: '2rem',
  },
  image: {
    height: '91vh',
    width: '90%'
  },
  textField: {
    width: '85%',
    border: '1px solid #ddd',
    outline: 'none',
    padding: '0.4rem 0.5rem',
    borderRadius: '6px',
    margin: '1rem auto'
  },
  fomCon: {
    width: '75%',
    margin: '6rem auto',
  },
  grid: {
    background: '#fff'
  },
  icon: {
    color: '#808080',
    '&:hover': {
      background: '#fff'
    }
  },
  btn: {
    width: '85%',
    marginTop: '3rem',
    background: '#C10909',
    color: '#fff',
    padding: '1rem auto',
    fontSize: '1.1rem',
    borderRadius: '10px',
    '&:hover': {
      background: '#c10909'
    }
  },
  createAcct: {
    textAlign: 'center', width: '85%', marginTop: '6rem', color: '#B7B7B7'
  },
  forgetPsswd: {
    textAlign: 'right', width: '85%', marginTop: '-10px', 
  }
}))

const LoginPage = () => {

  const classes = useStyles()

  const loginData = {
    email: '',
    password: '',
    showPassword: false
  }

  const [errMessage, setErrMessage] = useState({value: ""})
  const [loginDetails, setLoginDetails] = useState(loginData)

  const handleChange =(e)=> {
    const { name, value } = e.target;
    loginDetails[name] = value;
    setLoginDetails({...loginDetails})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (loginDetails.email === '' || loginDetails.password === '') {
      setErrMessage((prev)=>({value: "empty field"}))
    } else if (loginDetails.email.toLowerCase() === 'samiedoe@yahoo.com' && loginDetails.password.toLowerCase() === '123456') {
      sessionStorage.setItem("isAuth", "true")
      window.location.pathname = "/HomePage"
    } else {
      setErrMessage((prev)=>({value: "invalid username/password"}))
    }
  }

  const handleClickShowPassword = () => {
    setLoginDetails({ ...loginDetails, showPassword: !loginDetails.showPassword });
  }

  return ( 
    <>

    <div className={classes.contain}>
      <Grid container className={classes.grid}>
        <Grid item md={7} xl={7}>
          <img src={blod} alt="blood signage" className={classes.image} />
        </Grid>
        <Grid item md={5} xl={5} >
          <div className={classes.fomCon}>

            <form onSubmit={handleSubmit}>
              <h2>Login</h2><br />
              <small>welcome back!</small>
              <div className={classes.fom}>
                <label htmlFor="email">Email Address</label>
                <InputBase 
                name="email"
                variant="outlined" type="email" id="email"
                 fullWidth className={classes.textField}
                 onChange={handleChange} 
                 />
                
             
              <label htmlFor="pwd">Password</label>
                  <InputBase  variant="outlined" type={loginDetails.showPassword ? 'text' : 'password'} id="pwd" 
                    fullWidth 
                    name="password"
                    className={classes.textField}
                    onChange={handleChange} 
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton className={classes.icon}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        >
                          {loginDetails.showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                          </IconButton> 
                      </InputAdornment>
                    } 
                />
              <div className={classes.forgetPsswd}>
                <small>Forget Password?</small>
              </div>
                  <Button variant="contained" type="submit" className={classes.btn}>LOGIN</Button>
              </div>
            </form>

            <div className={classes.createAcct}>
              <small>Not yet registered? <Link to="/">Create account</Link></small>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
    </>
   );
}
 
export default LoginPage;