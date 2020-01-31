import './MainComponent.css';
import React, { Component } from 'react';

// Nosso trabalho é trazer a vida da Natureza para você!

class MainComponent extends Component {

    render() {
        return (
            <section id="main-component">
                <div className="main-text">
                    <div className="col-xs-12 col-md-12">
                        <h1>
                            <strong>Nosso trabalho é trazer a vida <br/> da Natureza para você!</strong>
                        </h1>
                        <a href="/contato">
                            <button className="btn btn-lg btn-main">Venha nos visitar!</button>
                        </a>
                    </div>
                </div>
            </section>
        );
    }

}

export default MainComponent;
