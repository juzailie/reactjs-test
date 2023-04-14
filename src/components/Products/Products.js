import React, { Component } from 'react';
import './Products.css';

class Products extends Component {
   
    renderProducts(){
        
        // get products

        return (
            <tr>
                <td>name text</td>
                <td>description text</td>
                <td>image path</td>
                <td>price value</td>
            </tr>
        );
    };

    render(){
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
                            { this.renderProducts() }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
  
};
  
export default Products;