import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ThemeProvider } from 'styled-components';
import * as serviceWorker from './serviceWorker';
import App from './App';
import theme from './settings/Theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();
