import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {Provider} from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';
import './index.css';
import { persistor, store } from './redux/store.jsx';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot (document.getElementById ('root')).render (
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
