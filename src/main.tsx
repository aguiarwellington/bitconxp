import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa o componente principal
import './styles/index.css'; // Estilos globais (opcional)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
