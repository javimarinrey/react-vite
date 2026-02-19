import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createRoot} from 'react-dom/client'
import './styles/main.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {AuthProvider} from "./context/AuthContext.tsx";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
)
