// IMPORT STYLES

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
      <Menu menuData={ mainMenu } accordion="on" icon="Logo">
        <Basket />
      </Menu>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
      <footer className="bg-yellow-500">
        <Menu menuData={ socialMenu } accordion="off"/>
        <Menu menuData={ aboutMenu } accordion="off" />
        <Menu menuData={ contactsMenu } accordion="off" />
      </footer>
    </div>
  );
};

export default App;
