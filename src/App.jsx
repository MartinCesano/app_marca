import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Marca from './components/Marca';

function App() {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center p-8">
            <h1 className="mb-6 text-2xl font-bold">Bienvenido a la App Marca</h1>
            <Marca />
        </div>
        
    );
}

export default App;
