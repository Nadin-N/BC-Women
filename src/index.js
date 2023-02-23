import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import 'modern-normalize/modern-normalize.css';
import { theme } from './styles/theme';
// import './index.css';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />

          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
