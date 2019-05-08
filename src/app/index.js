import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../helpers/history';

import LandingPage from '../components/Home';
import Container from '../components/Container';
import Signup from '../components/Signup';
import Confirmation from '../components/Confirmation';

import './index.css';

const App = () => {
  return (
    <Router history={history}>
      <Container history={history}>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/confirmation" component={Confirmation} />
      </Container>
    </Router>
  );
}

export default App;

