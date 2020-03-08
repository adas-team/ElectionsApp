import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
    <BrowserRouter>
        <FirebaseContext.Provider value={new Firebase()}>
            <App />
        </FirebaseContext.Provider>
    </BrowserRouter>, 
document.getElementById('root'));
