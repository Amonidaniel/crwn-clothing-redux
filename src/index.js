import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './component/context/user.context';
import { CategoriesProvider } from './component/context/categories.context';
import { CartProvider } from './component/context/cart.context';

import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <UserProvider>
            <CategoriesProvider>
              <CartProvider>
               <App />
              </CartProvider>
            </CategoriesProvider>
          </UserProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
