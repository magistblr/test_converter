import axios from 'axios'


export const currencyConverterAPI = {
  getConvert(base:string, current: string) {
      return axios({
        method: "GET",
        url: `https://free.currconv.com/api/v7/convert?q=${base}_${current},${current}_${base}&compact=ultra&apiKey=cc0001f1e20d88fd417b`
    });
  },
}

export const currencyAPI = {
  getBaseCurrency(base: string) {
      return axios({
        method: "GET",
        url: `https://freecurrencyapi.net/api/v2/latest?apikey=8b72b070-41f5-11ec-b8f8-55bac05a3b7e&base_currency=${base}`
    });
  },
}