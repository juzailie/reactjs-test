import axios from 'axios';

const AUTHENTICATION_API_BASE_URL = "https://localhost:44360/api/Users";

class UserService {

    static resetpassword(username){
        return axios.get(AUTHENTICATION_API_BASE_URL + '/resetpassword/' + username);
    }
}

export default UserService
