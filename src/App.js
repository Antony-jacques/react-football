import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar/MyNavbar'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import AuthProvider from'./Context/AuthContext'

function App() {
  return (
    <AuthProvider>

    <div className="App">
      <LoginPage/>

    </div>
    </AuthProvider>
  );
}

export default App;
