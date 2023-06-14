import axios from 'axios';

const AUTHENTICATION_API_BASE_URL = "https://localhost:44360/api/Auth";

class AuthService {

    static authticate(request){
        return axios.post(AUTHENTICATION_API_BASE_URL, request);
    }

    getEmployees(){
        return axios.get(AUTHENTICATION_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(AUTHENTICATION_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(AUTHENTICATION_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(AUTHENTICATION_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(AUTHENTICATION_API_BASE_URL + '/' + employeeId);
    }
}

export default AuthService