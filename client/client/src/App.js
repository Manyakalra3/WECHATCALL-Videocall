import React, { useEffect } from 'react';
import './App.css';
import Meet from './Components/Meet/Meet';
import Join from './Components/Join/Join';
import Home from './Components/Home/Home';
import Googlelogin from './Components/Googlesignpage/Googlelogin';
import { ContextProvider } from './SocketContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {

  useEffect(() => {
    if (!navigator.onLine) alert('Connect to internet!');
  }, [navigator]);

  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path ='/' component={Googlelogin} exact></Route>
          <Route path='/home' component={Home} ></Route>
          <Route path='/meet' component={Meet}></Route>
          <Route path='/join' component={Join}></Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
