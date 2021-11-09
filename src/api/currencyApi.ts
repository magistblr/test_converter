import axios from 'axios'

// const instance = axios.create({
//     baseURL: 'https://free.currconv.com',
//     withCredentials: true,
// })


export const currencyAPI = {
  getCurrency(base:string, current: string) {
      return axios({
        method: "GET",
        url: `https://free.currconv.com/api/v7/convert?q=${base}_${current},${current}_${base}&compact=ultra&apiKey=cc0001f1e20d88fd417b`
    });
  },
}