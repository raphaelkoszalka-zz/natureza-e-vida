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

                    // @todo: use wildcard for products routes
                    <Route path="/produtos/biscoitos" exact={true} component={ProductPage} />
                    <Route path="/produtos/graos" exact={true} component={ProductPage} />
                    <Route path="/produtos/cereais" exact={true} component={ProductPage} />
                    <Route path="/produtos/temperos" exact={true} component={ProductPage} />
                    <Route path="/produtos/chas" exact={true} component={ProductPage} />
                    <Route path="/produtos/sem-gluten" exact={true} component={ProductPage} />
                    <Route path="/produtos/paes" exact={true} component={ProductPage} />
                    <Route path="/produtos/geleias" exact={true} component={ProductPage} />
                    <Route path="/produtos/granel" exact={true} component={ProductPage} />
                    <Route path="/produtos/mel" exact={true} component={ProductPage} />

                    <Route path="/contato" exact={true} component={ContactPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
