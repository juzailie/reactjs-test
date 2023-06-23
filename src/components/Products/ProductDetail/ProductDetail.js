import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from "../../../context/auth-context";
import ProductService from '../../../Services/ProductService';

import './ProductDetail.css';

class ProductDetail extends Component {

    static contextType = AuthContext;

    state = {
        id: "",
        name: "",
        imagePath: "/",
        description: "",
        productVariants: [
            {
                info: "",
                price: 0.00,
            }
        ]
    }

    componentDidMount() {

        const { id } = this.props.match.params;

        ProductService.get(id)
            .then((result) => {
                if (result.status === 200) {
                    const { id, name, imagePath, description, productVariants } = result.data;
                    this.setState({ id, name, imagePath, description, productVariants });
                }
            });
    }

    previousPage = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className={`h1-red ${(this.state.id) && 'd-none'}`}>Invalid Product ID</h1>
                    </div>
                </div>
                <div className={`row ${(!this.state.id) && 'd-none'}`}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <h1 className='header-title'>{this.state.name}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <img src={this.state.imagePath} width={'550px'} alt={this.state.name} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Description</td>
                                            <td>{this.state.description}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Variance</b></td>
                                            <td></td>
                                        </tr>
                                        {this.state.productVariants.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.info}</td>
                                                <td>{item.price.toLocaleString('en-MY', { style: 'currency', currency: 'MYR' })}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-end">
                        <button className="btn btn-primary pull-right mr-5" onClick={this.previousPage}>Back</button>
                    </div>
                </div>
            </div>
        )
    };

}

// {!this.state.id && () }

export default withRouter(ProductDetail);