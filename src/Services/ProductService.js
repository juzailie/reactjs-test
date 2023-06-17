import axios from 'axios';

const PRODUCT_API_BASE_URL = "https://localhost:44360/api/Products";

class ProductService {

    static products(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    static get(prodid){
        return axios.get(PRODUCT_API_BASE_URL + "/" + prodid);
    }
}

export default ProductService
