import axios from 'axios'

export function request(config){
    const installaxios = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/z8',
        // baseURL : 'http://123.207.32.32:8000',
         timeout: 5000
    });

    return installaxios(config);
}