export enum ACTIONS_TYPE {
    CHANGE_BASE_CURRENCY = 'CurrencyExchange/CHANGE_BASE_CURRENCY',
    CHANGE_PRICE_BASE = 'CurrencyExchange/CHANGE_PRICE_BASE',
    CHANGE_PRICE_CURRENCY = 'CurrencyExchange/CHANGE_PRICE_CURRENCY',
    CHANGE_CURRENCY = 'CurrencyExchange/CHANGE_CURRENCY',
    CHANGE_CURRENT_CURRENCIES = 'СurrentСurrencies/CHANGE_CURRENT_CURRENCIES',
    CHANGE_CURRENT_BASE_CURRENCY = 'СurrentСurrencies/CHANGE_CURRENT_BASE_CURRENCY',
}


export const ChangeCurrencyBase = (payload: string) => ({ type: 'CurrencyExchange/CHANGE_BASE_CURRENCY', payload} as const);
export const ChangeCurrency = (payload: string) => ({ type: 'CurrencyExchange/CHANGE_CURRENCY', payload} as const);
export const ChangePriceBase = (payload: number) => ({ type: 'CurrencyExchange/CHANGE_PRICE_BASE', payload} as const);
export const ChangePriceCurrency = (payload: number) => ({ type: 'CurrencyExchange/CHANGE_PRICE_CURRENCY', payload} as const);

export const ChangeCurrentCurrency = (payload: any) => ({ type: 'СurrentСurrencies/CHANGE_CURRENT_CURRENCIES', payload} as const);
export const ChangeCurrentBaseCurrency = (payload: string) => ({ type: 'СurrentСurrencies/CHANGE_CURRENT_BASE_CURRENCY', payload} as const);

export type CurrencyReducersTypes =
        | ReturnType<typeof ChangeCurrencyBase>
        | ReturnType<typeof ChangePriceBase>
        | ReturnType<typeof ChangePriceCurrency>
        | ReturnType<typeof ChangeCurrency>
        | ReturnType<typeof ChangeCurrentCurrency>
        | ReturnType<typeof ChangeCurrentBaseCurrency>
