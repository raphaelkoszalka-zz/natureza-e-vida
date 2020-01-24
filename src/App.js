import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ProducsPage from "./pages/ProducsPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderComponent />
                <Switch>
                    <Route path="/" exact={true} component={HomePage} />
                    <Route path="/home" exact={true} component={HomePage} />
                    <Route path="/sobre-nos" exact={true} component={AboutUsPage} />
                    <Route path="/produtos" exact={true} component={ProducsPage} />
                    <Route path="/contato" exact={true} component={ContactPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
