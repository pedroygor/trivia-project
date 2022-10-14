import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login/index';
import Game from './pages/Game/index';
import Config from './pages/Config/index';
import Ranking from './pages/Ranking/index';
import Feedback from './pages/Feedback/index';
import defaultTheme from './styles/Themes/default';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/game" component={ Game } />
        <Route exact path="/ranking" component={ Ranking } />
        <Route exact path="/feedback" component={ Feedback } />
        <Route exact path="/config" component={ Config } />
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  );
}
