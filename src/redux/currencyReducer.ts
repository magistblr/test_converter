import { Dispatch } from 'redux';
import { currencyAPI } from '../api/currencyApi';
import { ChangePriceCurrency, CurrencyReducersTypes } from './actions';
import { IGlobalState } from './state';


export type CurrencyState = {
    base: string
    currency: string | null
    priceBase: number
    priceCurrency: null | number
};

const initialState: CurrencyState = {
    base: 'RUB',
    currency: null,
    priceBase: 1,
    priceCurrency: null
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
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
export const getCurrent = (data: string[]) => (dispatch: Dispatch, getState: ()=> IGlobalState) => {
    const state = getState()
    const base = data[1].toUpperCase()
    const current = data[3].toUpperCase()
    console.log(base);
    console.log(current);

    currencyAPI.getCurrency(base, current)
        .then((response) => {
            // const data1 = response.data[`${base}_${current}`]
            console.log("message", response);
            dispatch(ChangePriceCurrency(response.data[`${base}_${current}`]))
        })
        .catch((error) => {
            console.log(error);
        })
}

