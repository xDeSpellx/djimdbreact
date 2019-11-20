import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import allReducers from './store/reducers'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, allReducers)
const store = createStore(persistedReducer,applyMiddleware(thunk))
const persistor = persistStore(store)

ReactDOM.render(
                <BrowserRouter>
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                             <App />
                         </PersistGate>
                     </Provider>
                </BrowserRouter>,
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();