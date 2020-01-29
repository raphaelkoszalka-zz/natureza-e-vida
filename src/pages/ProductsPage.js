import React, { Component } from 'react';
import ProductsComponent from "../components/products/ProductsComponent";

class ProductsPage extends Component {

    render() {
        return (
            <section id="homePage">
                <ProductsComponent />
            </section>
        )
    }
}

export default ProductsPage;
