import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Ajuste o caminho conforme necessário
import QuemSomos from './QuemSomos'; // Ajuste o caminho conforme necessário

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/quem-somos" element={<QuemSomos />} />
                {/* Adicione outras rotas conforme necessário */}
            </Routes>
        </Router>
    );
};

export default App;
