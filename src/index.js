import React from 'react';
import { render } from 'react-dom';
// import 'normalize.css';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar/NavBar';
import App from './routes/App/App';
import theme from './theme/theme';
// Pages
import RSVP from './routes/RSVP/RSVP';
import PageNotFound from './routes/PageNotFound/PageNotFound';

// Components

const rootElement = document.getElementById('root');
const root = (
  <ThemeProvider theme={theme}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/rsvp" component={RSVP} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  </ThemeProvider>
);

render(root, rootElement);
