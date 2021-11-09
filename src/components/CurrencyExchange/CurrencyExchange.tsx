import axios from 'axios';
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyAPI } from '../../api/currencyApi';
import { ChangeCurrency, ChangeCurrencyBase, ChangePriceBase, ChangePriceCurrency } from '../../redux/actions';
import { getCurrent } from '../../redux/currencyReducer';
import { IGlobalState } from '../../redux/state';
import s from './CurrencyExchange.module.css';

type CurrencyPropsType = {

};

export const CurrencyExchange: React.FC<CurrencyPropsType> = () => {
    const [text, setText] = useState('')
    const [data, setData] = useState('')
    const dispatch = useDispatch()

    const basePrice = useSelector<IGlobalState, number>(state =>  state.currency.priceBase);
    const currency = useSelector<IGlobalState, string | null>(state =>  state.currency.currency);
    const baseCurrency = useSelector<IGlobalState, string>(state =>  state.currency.base);
    const priceCurrency = useSelector<IGlobalState, number | null>(state =>  state.currency.priceCurrency);



    const addItemHandler = () => {
        const base = text.split(" ")
        // console.log(base);
        if (text.trim() !== '') {
            dispatch(ChangeCurrencyBase(base[1]))
            dispatch(ChangeCurrency(base[3]))
            dispatch(ChangePriceBase(Number(base[0])))
            dispatch(getCurrent(base))
            setData(text)
            setText('');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }


    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addItemHandler();
        }
    }

    const round = (num: number) => {
        return Math.round(num * 1000) / 1000
    }

    return (
        <div className={s.currency}>
            <input className={s.input} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} value={text} placeholder="enter the text, example: 15 usd in rub"/>
            <button onClick={addItemHandler}>send</button>
            <div>{basePrice} {baseCurrency} = {round(priceCurrency ? priceCurrency : 1)} {currency}</div>
        </div>
    );
};

