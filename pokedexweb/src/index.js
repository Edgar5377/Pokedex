import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './DataContext'; // Importa el DataProvider del archivo DataContext

ReactDOM.render(
  <React.StrictMode>
    <DataProvider> {/* Agrega DataProvider como envoltura de la aplicación */}
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
