import { Dispatch } from 'redux';
import { currencyConverterAPI } from '../api/currencyApi';
import { ChangePriceCurrency, CurrencyReducersTypes } from './actions';


export type CurrencyState = {
    base: string
    currency: string
    priceBase: number
    priceCurrency: number
};

const initialState: CurrencyState = {
    base: 'RUB',
    currency: 'USD',
    priceBase: 1,
    priceCurrency: 1
};

export const convertReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    switch (action.type) {
        case 'CurrencyExchange/CHANGE_BASE_CURRENCY':
            return {...state, base: action.payload}
        case 'CurrencyExchange/CHANGE_PRICE_BASE':
            return {...state, priceBase: action.payload}
        case 'CurrencyExchange/CHANGE_PRICE_CURRENCY':
            return {...state, priceCurrency: action.payload * state.priceBase}
        case 'CurrencyExchange/CHANGE_CURRENCY':
            return {...state, currency: action.payload}
        default:
            return state;
    }
};



//thunk
export const getCurrent = (data: string[]) => (dispatch: Dispatch) => {
    const base = data[1].toUpperCase()
    const current = data[3].toUpperCase()

    currencyConverterAPI.getConvert(base, current)
        .then((response) => {
            dispatch(ChangePriceCurrency(response.data[`${base}_${current}`]))
        })
        .catch((error) => {
            console.log(error);
        })
}

