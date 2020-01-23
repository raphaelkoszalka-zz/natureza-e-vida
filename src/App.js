import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderComponent />
                <Switch>
                    <Route path="/" exact={true} component={HomePage} />
                    <Route path="/home" exact={true} component={HomePage} />
                    <Route path="/sobre-nos" exact={true} component={AboutUsPage} />
                    <Route path="/contato" exact={true} component={ContactPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
