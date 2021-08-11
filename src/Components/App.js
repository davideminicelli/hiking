// IMPORT STYLES
import '../styles/App.css';

// IMPORT DATA
import { mainMenu, socialMenu, aboutMenu, contactsMenu } from '../Data/menuData';

// IMPORT COMPONENTS
import React from 'react';
import { Switch, Route } from 'react-router';
import Menu from './Menu';
import Homepage from './Homepage';
import Shop from './Shop';
import Basket from './Basket';


function App() {
  return (
    <div className="app-wrap">
      <Menu menuData={ mainMenu } />
      <Basket />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
      <footer>
        <Menu menuData={ socialMenu } />
        <Menu menuData={ aboutMenu } />
        <Menu menuData={ contactsMenu } />
      </footer>
    </div>
  );
};

export default App;
