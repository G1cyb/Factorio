import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './Main/Home/'
import Contract from './Main/Contract'
import Navbar from './Navbar/'
import './App.css'

function App() {
return (
  <Router>
  <div>
    <Navbar/>

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/contract">
        <Contract />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
</Router>
  );
}

export default App;


function Users() {
  return <h2>Users</h2>;
}