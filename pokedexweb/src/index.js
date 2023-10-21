import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './DataContext'; 
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <DataProvider> {/* Agrega DataProvider como envoltura de la aplicación */}
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
