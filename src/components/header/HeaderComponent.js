import './HeaderComponent.css';
import React, { Component } from 'react';
import Scroller from "../../services/ScrollerService";

class HeaderComponent extends Component {

    scroller = new Scroller();

    constructor() {
        super();
        this.scrollTo = this.scrollTo.bind(this);
    }

    componentDidMount() {
        // HeaderComponent.setActiveMenu('root');
    }

    static setActiveMenu(active) {
        const navigationBalls = document.getElementsByClassName('buttonsList');
        if(navigationBalls) {
            Array.from(navigationBalls).forEach( (nav) => nav.classList.remove('activeButton'));
            document.getElementById( active + 'Button' ).classList.toggle('activeButton');
        }
    }

    scrollTo(elm) {
        this.scroller.scrollToResolver(document.getElementById(elm));
        HeaderComponent.setActiveMenu(elm);
    }

    render() {
        return (
            <header>
                <div id="headerBackground">
                    <div id="headerWrapper">
                        <div id="headerComponent">
                            <div className="col-xs-3">
                                <img src="./logo.jpg" id="consensBrand" alt="ConSenS" onClick={ () => this.scrollTo('root')}/>
                            </div>
                            <div className="col-xs-9">
                                <ul id="headerDesktopMenu" className="hidden-xs hidden-sm hidden-md">
                                    <li
                                        className="buttonsList"
                                        onClick={ () => this.scrollTo('contactComponent') }
                                        id="contactComponentButton"
                                    >
                                        Contato
                                    </li>
                                    <li
                                        className="buttonsList"
                                        onClick={ () => this.scrollTo('contactComponent')}
                                        id="contactComponentButton"
                                    >
                                        Quem somos
                                    </li>
                                    <li
                                        className="buttonsList activeButton"
                                        onClick={ () => this.scrollTo('root')}
                                        id="root"
                                    >
                                        Início
                                    </li>
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
