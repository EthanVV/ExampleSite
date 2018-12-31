/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from 'containers/NavBar/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import ChallengeMenu from 'containers/ChallengeMenu/Loadable';
import FizzBuzz from 'containers/Challenges/FizzBuzz/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/challenge_menu" component={ChallengeMenu} />
        <Route exact path="/challenges/fizz_buzz" component={FizzBuzz} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
