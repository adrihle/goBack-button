import React, { useState } from 'react';
import './App.css';
import Main from './views/Main'
import Second from './views/Second'
import NavBar from './components/NavBar'
import BottomNav from './components/BottomNav'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export default function App() {

  const [active, setActive] = useState(false);

  const goBack = () => {
    var ruta = history.location.pathname
    if (ruta === '/second'){
      history.goBack()
    }
  }

  history.listen((location, action) => {
    var ruta = location.pathname
    if (ruta === '/second'){
      setActive(true)
    }else {
      setActive(false)
    }
  })


  return (
    <div className="App">
      <Router history={history}>
        <NavBar goback={() => goBack()} active={active} history={history}/>
        <Switch>
          <Route path='/'  exact component={Main}/>
          <Route path='/second' exact component={Second} />
        </Switch>
        <BottomNav />
      </Router>
    </div>
  );
}

