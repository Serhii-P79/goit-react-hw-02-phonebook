import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { App } from 'сomponent';
import { theme } from 'constant';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
