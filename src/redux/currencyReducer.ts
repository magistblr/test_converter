import { Dispatch } from 'redux';
import { currencyAPI } from '../api/currencyApi';
import { ChangeCurrentCurrency,  CurrencyReducersTypes } from './actions';


export type CurrencyState = {
    base: string
    currencies: any
};

const initialState: CurrencyState = {
    base: 'RUB',
    currencies: null,
};



export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    switch (action.type) {
        case 'СurrentСurrencies/CHANGE_CURRENT_BASE_CURRENCY':
            return {...state, base: action.payload}
        case 'СurrentСurrencies/CHANGE_CURRENT_CURRENCIES':
            return {...state, currencies: action.payload}
        default:
            return state;
    }
};



//thunk
export const getCurrentCurrency = (currencyBase: string) => (dispatch: Dispatch) => {
    currencyAPI.getBaseCurrency(currencyBase)
        .then((response) => {
            dispatch(ChangeCurrentCurrency(response.data.data))
        })
        .catch((error) => {
            console.log(error);
        })
}

