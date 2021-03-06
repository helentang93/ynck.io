import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Profile from './components/Profile/Profile';
import Shop from './components/Shops/Shop';
import RecentTattoos from './components/Home/RecentTattoos';


import '../../public/stylesheets/main.scss'; // or `.scss` if you chose scss

import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// import { Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component={Main}></Route>
        <Route path = "/user/:id" render={(props) => (<Profile {...props} />)} />
        <Route path = "/shop" component={Shop}></Route>
      </Switch>
    </BrowserRouter>
 </Provider>

);


ReactDOM.render(router, document.getElementById('root'));
