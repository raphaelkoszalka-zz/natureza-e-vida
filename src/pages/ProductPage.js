import React, { Component } from 'react';
import ProductComponent from "../components/product/ProductComponent";

class ProductPage extends Component {

    render() {
        return (
            <section id="homePage">
                <ProductComponent />
            </section>
        )
    }
}

export default ProductPage;
