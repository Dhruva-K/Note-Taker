import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Editor from './editor/Editor';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component = { Home }/>
          <Route path='/editor' exact component = { Editor }/>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
