import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';//bridge piece
import { createStore } from 'redux';
import { Reducer } from './reducer/Reducer';
import 'bulma/css/bulma.css';
import './styles.scss';


// created store and connected to app

const store = createStore(Reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
