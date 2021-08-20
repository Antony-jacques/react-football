import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar/MyNavbar'
import LoginPage from './Pages/LoginPage/LoginPage'
import PrivateHome from './Pages/PrivateHome/PrivateHome'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import AuthProvider from'./Context/AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">


    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} ></Route>
          {/* <Route exact path='/accueil' component={PrivateHome} ></Route> */}
          <PrivateRoute exact path='/accueil' component={PrivateHome}></PrivateRoute>

        </Switch>
      </Router>


    </AuthProvider>
    </div>
  );
}

export default App;
