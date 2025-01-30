// base URL:
// https://economia.awesomeapi.com.br/json/all
//  > Rota para buscar BTC > BRL : all/BTC-BRL

import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/'
})