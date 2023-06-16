import axios from 'axios';

const USER_API_BASE_URL = "https://localhost:44360/api/Users";

class UserService {

    static resetpassword(username){
        return axios.get(USER_API_BASE_URL + '/resetpassword/' + username);
    }

    static getuser(userid){
        return axios.get(USER_API_BASE_URL + '/' + userid);
    }
}

export default UserService
