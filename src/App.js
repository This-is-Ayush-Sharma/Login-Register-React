// import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/Register">
            <Register/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
