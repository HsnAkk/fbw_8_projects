import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import GroupOne from './components/GroupOne';
import GroupTwo from './components/GroupTwo';
import GroupThree from './components/GroupThree';
import GroupFour from './components/GroupFour';
import GroupFive from './components/GroupFive';
import GroupSix from './components/GroupSix';
import Home from './components/Home';
import './App.css';


function App() {
  return (
      <div>
          <Header />
          <Switch>
              <Route exact path="/" component= {Home} />
              <Route path="/how_you_doing" component= {GroupOne} />
              <Route path="/wawawiwa" component= {GroupTwo} />
              <Route path="/albatros" component= {GroupThree} />
              <Route path="/tom&jerry" component= {GroupFour} />
              <Route path="/be_guys" component= {GroupFive} />
              <Route path="/vins" component= {GroupSix} />
          </Switch>
      </div>
  );
}

export default App;
