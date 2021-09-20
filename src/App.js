import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar/MyNavbar'
import LoginPage from './Pages/LoginPage/LoginPage'
import PrivateHome from './Pages/PrivateHome/PrivateHome'
import PrivateLivePage from './Pages/PrivateLivePage/PrivateLivePage'
import SingleMatchPage from './Pages/SingleMatchPage/SingleMatchPage'
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage'
import Tchat from './Components/Tchat/Tchat'
import RankingPage from './Pages/RankingPage/RankingPage'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import AuthProvider from'./Context/AuthContext'
import CompetitionProvider from './Context/CompetitionContext/CompetitionContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import muiTheme from './muiTheme'



function App() {
  return (
    <ThemeProvider theme = {muiTheme}>
    <div className="App">

    

    <AuthProvider>
      <CompetitionProvider>

      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} ></Route>
          <PrivateRoute exact path='/accueil' component={PrivateHome}></PrivateRoute>
          <PrivateRoute exact path='/live' component={PrivateLivePage}></PrivateRoute>
          <PrivateRoute exact path='/Tchat' component={Tchat}></PrivateRoute>
          <PrivateRoute exact path='/profile' component={UserProfilePage}></PrivateRoute>
          <PrivateRoute exact path='/classements' component={RankingPage}></PrivateRoute>
          <PrivateRoute exact path='/match/:slug' component={SingleMatchPage}></PrivateRoute>

        </Switch>
      </Router>


      </CompetitionProvider>
    </AuthProvider>
    </div>
    </ThemeProvider>
  );
}

export default App;
