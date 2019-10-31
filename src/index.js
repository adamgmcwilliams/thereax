import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
