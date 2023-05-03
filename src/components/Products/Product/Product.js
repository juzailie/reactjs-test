import React from 'react';
import { NavLink } from 'react-router-dom';

import './Product.css';

const Product = (props) => (
    <tr>
        <td>{props.name}</td>
        <td><div className="product-desc-limiter">{props.desc}</div></td>
        <td>
            <NavLink className="thumbnail" to={'/productdetails/' + props.id} exact>
                <img src={props.imgpath} alt={props.name}  className="product-img"/>
            </NavLink>
        </td>
        <td>
        {
            props.variants.map(d => {
                return d.price.toLocaleString()
            }).join("-")
        }
        </td>
    </tr>
);

export default Product;