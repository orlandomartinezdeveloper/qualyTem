import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import Req from './components/Req';
import "./App.css"
import Documento from './components/Documento';
const App = () => {
    const [busca, setBusca] = useState('');
    const handleSearch = (captura) => {
        setBusca(captura)
    }
    return (
        <Router>
            <Navbar />
            <main className="content--container">
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/list" exact>
                        <Req busca={busca} handleSearch={handleSearch} />
                    </Route>
                    <Route path="/documento/:id" >
                        <Documento />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;