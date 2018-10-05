import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}> 
                    <MuiThemeProvider><App /> </MuiThemeProvider>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
