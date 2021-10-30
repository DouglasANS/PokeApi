import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ClassReactTest from "./pages/ClassReactTest";


function App() {
  return (
    localStorage.getItem('token') ?
    <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="*">
            <Redirect to="/" />
          </Route>    
        </Switch>
        <GlobalStyles />
    </Router>
    : 
    <Router>
        <Switch>
        <Route path="/teste" exact component={ClassReactTest}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/" exact component={Login}/>   
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <GlobalStyles />
    </Router>
  );
}

export default App;
