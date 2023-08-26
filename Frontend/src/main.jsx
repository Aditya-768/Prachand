import React from 'react'
import ReactDOM from 'react-dom/client'
import "antd/dist/reset.css";
import App from './App.jsx'
import './index.css';
import { Provider } from "react-redux";
import store from './redux/store';
import { SocketProvider } from "./context/SocketProvider";

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS (and its dependencies)
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SocketProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SocketProvider>
  </Provider>
);