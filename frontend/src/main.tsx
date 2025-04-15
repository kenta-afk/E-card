import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter as Router} from "react-router-dom";
import App from './App.tsx'
import {AuthProvider} from "./components/AuthContext.tsx";

const root = ReactDOM.createRoot(
    document.getElementById('root')as HTMLElement
);
root.render(
  <React.StrictMode>
      <AuthProvider>
          <Router>
              <App />
          </Router>
      </AuthProvider>
  </React.StrictMode>,
)
