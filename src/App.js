import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import HomePage from './pages/HomePage';
// import Logout from './pages/LogoutPage';
import ProtectedRoute from './pages/ProtectedRoute';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core';
// import Navbar from './pages/Navbar'


function App() {
  return (
    <>
    <Router>
      
      {/* <Navbar /> */}
      <Switch>
        
        <Route exact path = "/" component={LoginPage} />
        <ProtectedRoute exact path = "/HomePage" component={HomePage} />
        <Route exact path = "" >
          <h1>Page Not Found</h1>
        </Route>
        {/* <Route exact path="/Logout" component={Logout} /> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
