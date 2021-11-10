import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeCurrentBaseCurrency } from '../../redux/actions';
import { getCurrentCurrency } from '../../redux/currencyReducer';
import { IGlobalState } from '../../redux/state';
import s from './СurrentСurrencies.module.css';

type СurrentСurrenciesType = {

};

export const СurrentСurrencies: React.FC<СurrentСurrenciesType> = () => {

    const dispatch = useDispatch()

    const currentCurrencies = useSelector<IGlobalState, any>(state =>  state.currency.currencies);
    const baseCurrentCurrency = useSelector<IGlobalState, string>(state =>  state.currency.base);


    //change base currency on browser language
    const lang = navigator.language

    useEffect(() => {
        if(lang === "ru-RU"){
            changeBaseCurrencyHandler("RUB")
        }
        if(lang === "en-US"){
            changeBaseCurrencyHandler("USD")
        }
    }, [lang])

    const getCurrency = () => {
        dispatch(getCurrentCurrency(baseCurrentCurrency))
    }

    function changeBaseCurrencyHandler (base: string) {
        dispatch(ChangeCurrentBaseCurrency(base))
    }

    const currenciesData = currentCurrencies ? Object.entries(currentCurrencies) : []


    return (
        <div className={s.current}>
            <div>
                <span className={baseCurrentCurrency === "RUB" ?`${s.base} ${s.base_active}` : s.base} onClick={() => changeBaseCurrencyHandler("RUB")}>RUB </span>
                <span className={baseCurrentCurrency === "USD" ?`${s.base} ${s.base_active}` : s.base} onClick={() => changeBaseCurrencyHandler("USD")}>USD</span>
            </div>
            <button onClick={getCurrency}>get</button>
            {currenciesData.length !== 0 &&
                        <select>
                        {currenciesData.map((t) =>
                            <option className={s.currency} key={t[0]}>{t[0] + ":" + t[1]}</option>
                        )}
                    </select>
        }
        </div>
    );
};

