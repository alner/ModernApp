import './main.css';

import React from 'react';
import {render} from 'react-dom';
import App from './components/app.jsx';

main();

function main() {
  const appContainer = document.createElement('div');
  document.body.appendChild(appContainer);

  render(<App />, appContainer);
}
