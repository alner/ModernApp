import './main.css';

import React from 'react';
import {render} from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home';
import Hello from './components/hello';

main();

function main() {
  const appContainer = document.createElement('div');
  document.body.appendChild(appContainer);

  render(
    (
      <Router history={createBrowserHistory()}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="hello" component={Hello} />
        </Route>
      </Router>
    )
    , appContainer);
}
