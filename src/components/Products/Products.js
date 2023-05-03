import React, { Component } from 'react';
import axios from 'axios';

import Product from './Product/Product';

import './Products.css';

class Products extends Component {

    state = {
        products: []
    }

    componentDidMount(){
        axios.get("https://localhost:44360/api/Products")
            .then((response) => {
                console.log("response ", response);
                this.setState({ products: response.data })
            })
    }

    render(){

        const products = this.state.products.map(prod => {
            return (
                <Product 
                    name={prod.name} 
                    desc={prod.description} 
                    imgpath={prod.imagePath}
                    variants={prod.productVariants}/>
            )
        })

        return (
            <div className="row">
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
                            { products }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
  
};
  
export default Products;