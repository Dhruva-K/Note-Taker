import React ,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Editor from './editor/Editor';
import Sidebar from './sidebar/Sidebar';
import Notes from './components/pages/Notes';




 class App extends Component {



  render() {
    return (
    <div className="App">

      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component = { Home }/>
          <Route path='/editor' exact component = { Notes }/>
        </Switch>
      </Router>
  
    </div>
  );
      
    
  }
}

export default App;

