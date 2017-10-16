import './index.css';

import App from './components/App'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { MuiThemeProvider } from 'material-ui/'
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(   <BrowserRouter><MuiThemeProvider> <App /> </MuiThemeProvider></BrowserRouter>  , document.getElementById('root'));
registerServiceWorker();
