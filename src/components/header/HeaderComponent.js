import './HeaderComponent.css';
import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class HeaderComponent extends Component {

    componentDidMount() {
        HeaderComponent.routeHasChanged('root');
    }

    static routeHasChanged(routeId) {
        console.log(routeId);
    }

    render() {
        return (
            <header>
                <div id="headerBackground">
                    <div id="headerWrapper">
                        <div id="headerComponent">
                            <div className="col-xs-3">
                                <NavLink to="/home" activeClassName="active">
                                    <img src="./logo.jpg" id="consensBrand" alt="Natureza e Vida" />
                                </NavLink>
                            </div>
                            <div className="col-xs-9">
                                <ul id="headerDesktopMenu" className="hidden-xs hidden-sm hidden-md">
                                    <NavLink to="/contato" activeClassName="active">
                                        <li
                                            className="buttonsList"
                                            id="contactComponentButton"
                                        >
                                            Contato
                                        </li>
                                    </NavLink>
                                    <NavLink to="/produtos"  activeClassName="active">
                                        <li
                                            className="buttonsList"
                                            id="productsComponentButton"
                                        >
                                            Produtos
                                        </li>
                                    </NavLink>
                                    <NavLink to="/sobre-nos"  activeClassName="active">
                                        <li
                                            className="buttonsList"
                                            id="aboutComponentButton"
                                        >
                                            A Natureza e Vida
                                        </li>
                                    </NavLink>
                                    <NavLink to="/home" activeClassName="active">
                                        <li
                                            className="buttonsList"
                                            id="root"
                                        >
                                            Início
                                        </li>
                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
