import './ProductsComponent.css';
import React, { Component } from 'react';

class ProductsComponent extends Component {
    render() {
        return (
            <div id="about-component">
                <div className="container">
                    <div className="col-xs-12">
                        <div className="container">
                            <div className="col-xs-12">
                                <h1 className="padding-top">
                                    <strong>Nossa linha de produtos</strong>
                                </h1>
                                <h3>Nosso trabalho é trazer a vida da Natureza para você!</h3>
                                <p>
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Ut pharetra, sem nec blandit congue, mauris nulla scelerisque
                                    ligula, eget rutrum ante eros in sem.
                                    Mauris consequat ultricies nunc, non condimentum mauris malesuada eu.
                                    Etiam tincidunt orci quis mauris scelerisque sodales.
                                    Mauris consequat ultricies nunc, non condimentum mauris malesuada eu.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Ut pharetra, sem nec blandit congue, mauris nulla scelerisque
                                    ligula, eget rutrum ante eros in sem.
                                    Mauris consequat ultricies nunc, non condimentum mauris malesuada eu.
                                    Etiam tincidunt orci quis mauris scelerisque sodales.
                                    Mauris consequat ultricies nunc, non condimentum mauris malesuada eu.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Ut pharetra, sem nec blandit congue, mauris nulla scelerisque
                                    ligula, eget rutrum ante eros in sem.
                                    Mauris consequat ultricies nunc, non condimentum mauris malesuada eu.
                                    Etiam tincidunt orci quis mauris scelerisque sodales.
                                    Mauris consequat ultricies nunc, non condimentum mauris malesuada eu.
                                </p>
                                <h2 className="text-center">
                                    <button className="btn btn-lg btn-about">Venha nos <strong>visitar</strong>!</button>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsComponent;
