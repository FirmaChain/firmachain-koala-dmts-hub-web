import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import ThemeProvider from './context/themeProvider';
import ScreenProvider from './context/screenProvider';
import ModalProvider from './context/modalProvider';
import DropdownProvider from './context/dropDownProvider';

import Portal from './components/modal/base/portal';
import store from './redux/store';

import 'crypto-browserify';

import App from './App';
import WalletProvider from './context/walletProvider';

const persistor = persistStore(store);
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <ScreenProvider>
          <ModalProvider>
            <DropdownProvider>
              <WalletProvider>
                <Portal />
                <SnackbarProvider
                  maxSnack={3}
                  style={{ fontSize: '16px' }}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                  <App />
                </SnackbarProvider>
              </WalletProvider>
            </DropdownProvider>
          </ModalProvider>
        </ScreenProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
