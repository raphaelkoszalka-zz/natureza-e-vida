import './ProductComponent.css';
import React, { Component } from 'react';
import { Products } from '../products/Products'

class ProductComponent extends Component {

    constructor() {
        super();
        this.super = this.componentWillMount();
    }

    componentWillMount() {
        let product = [];
        const uri = '/' + window.location.href.split('/')[3];
        Products.map(p => {
            if(p['href'] === uri) {
                product = p;
            }
        });
        return product;
    }

    render() {

        const product = this.super;
        console.log(product);

        return (
            <div id="products-component">
                <div id="product-detail-wrapper">
                    <div className="col-md-8">
                        <h1>{product['title']}</h1>
                    </div>
                    <div className="col-md-4 text-right back">
                        <a href="/produtos">
                            <button className="btn btn-sm btn-about top">Voltar</button>
                        </a>
                    </div>
                    <div className="clearfix"></div>
                    <hr/>
                    <div className="col-md-6">
                        <img src={product['src']} className="product-image" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {product['text_1']}
                        </h4>
                        <h4>
                            {product['text_1']}
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductComponent;
