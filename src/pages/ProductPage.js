import React, { Component } from 'react';
import ProductsComponent from "../components/products/ProductsComponent";

class ProductPage extends Component {

    render() {
        return (
            <section id="homePage">
                <ProductsComponent />
            </section>
        )
    }
}

export default ProductPage;
