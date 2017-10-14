import './index.css';

import Login from './components/Login'
import { MuiThemeProvider } from 'material-ui/'
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MuiThemeProvider><Login /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
