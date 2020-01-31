import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderComponent />
                <Switch>
                    <Route path="/" exact={true} component={HomePage} />
                    <Route path="/home" exact={true} component={HomePage} />
                    <Route path="/sobre-nos" exact={true} component={AboutUsPage} />
                    <Route path="/produtos" exact={true} component={ProductsPage} />
                    <Route path="/biscoitos" exact={true} component={ProductPage} />
                    <Route path="/graos" exact={true} component={ProductPage} />
                    <Route path="/cereais" exact={true} component={ProductPage} />
                    <Route path="/temperos" exact={true} component={ProductPage} />
                    <Route path="/chas" exact={true} component={ProductPage} />
                    <Route path="/sem-gluten" exact={true} component={ProductPage} />
                    <Route path="/paes" exact={true} component={ProductPage} />
                    <Route path="/geleias" exact={true} component={ProductPage} />
                    <Route path="/granel" exact={true} component={ProductPage} />
                    <Route path="/mel" exact={true} component={ProductPage} />
                    <Route path="/contato" exact={true} component={ContactPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
