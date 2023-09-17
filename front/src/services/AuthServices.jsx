import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json';

export const AuthService = () => {
    const urnSignin = 'api/register';

    const register = ($data) => {
        const res = axios.post(urnSignin, $data);
        return res;
    }

    return {
        register
    }
}