import React from 'react';
import './App.scss';
import MainGradients from './components/MainGradients';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/gradient/:dir/:color1/:color2" component={MainGradients} />
        <Route path="(/|/gradient)" component={MainGradients}/>
      </Switch>
    </Router>
    <footer>Copyright (c) 2020 Spanomaly - MIT License</footer>
    </div>
  );
}

export default App;
