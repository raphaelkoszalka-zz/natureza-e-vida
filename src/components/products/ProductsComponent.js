import './ProductsComponent.css';
import React, { Component } from 'react';
import GalleryComponent from "../gallery/GalleryComponent";

class ProductsComponent extends Component {
    render() {
        return (
            <div id="products-component">
                <div className="container">
                    <div className="col-xs-12">
                        <div className="container">
                            <div className="col-xs-12">
                                <h1 className="padding-top">
                                    <strong>Nossa linha de produtos</strong>
                                </h1>
                                <h3>Nosso trabalho é trazer a <strong>vida da Natureza para você!</strong></h3>
                                <GalleryComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsComponent;
