import React, { Component } from 'react';
import Product from './Product/Product';
import './Products.css';
import { AuthContext } from "../../context/auth-context";
import ProductService from '../../Services/ProductService';

class Products extends Component {

    static contextType = AuthContext;

    state = {
        products: []
    }

    componentDidMount() {
        ProductService.products()
            .then((response) => {
                this.setState({ products: response.data })
            })
    }

    render() {

        const { authenticated } = this.context;

        const products = this.state.products.map(prod => {
            return (
                <Product 
                    id={prod.id}
                    name={prod.name}
                    desc={prod.description}
                    imgpath={prod.imagePath}
                    variants={prod.productVariants} />
            )
        })

        return (
            <div className="row">
                {authenticated && (
                    <div className="col-md-6">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Price Range (RM)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products}
                            </tbody>
                        </table>
                    </div>
                )}
                {!authenticated && (
                    <div className="col-md-3 offset-md-6">
                        <h1>Unauthorized</h1>
                    </div>
                )}
            </div>
        );
    }

};

export default React.memo(Products);