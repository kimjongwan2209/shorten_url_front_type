import axios from 'axios';

export const createInstance = () => {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_BASEKEY,
        timeout: 7000,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return instance
}
const instance = createInstance()

export default instance;