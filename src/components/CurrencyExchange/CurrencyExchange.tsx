import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeCurrency, ChangeCurrencyBase, ChangePriceBase } from '../../redux/actions';
import { getCurrent } from '../../redux/convertReducer';
import { IGlobalState } from '../../redux/state';
import s from './CurrencyExchange.module.css';

type CurrencyPropsType = {

};

export const CurrencyExchange: React.FC<CurrencyPropsType> = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const basePrice = useSelector<IGlobalState, number>(state =>  state.convert.priceBase);
    const currency = useSelector<IGlobalState, string>(state =>  state.convert.currency);
    const baseCurrency = useSelector<IGlobalState, string>(state =>  state.convert.base);
    const priceCurrency = useSelector<IGlobalState, number>(state =>  state.convert.priceCurrency);



    const addItemHandler = () => {
        const base = text.split(" ")
        if (text.trim() !== '') {
            dispatch(ChangeCurrencyBase(base[1]))
            dispatch(ChangeCurrency(base[3]))
            dispatch(ChangePriceBase(Number(base[0])))
            dispatch(getCurrent(base))
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

    const round100 = (num: number) => {
        return Math.round(num * 100) / 100
    }

    // const reg = /\d+\s\D+\s/in/\s\D+/

    return (
        <div className={s.currency}>
            <div className={text ? `${s.message} ${s.message_active}` : s.message}>example: 15 usd in rub</div>
            <input className={s.input} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} value={text} placeholder="enter the text, example: 15 usd in rub"/>
            <button className={s.btn} onClick={addItemHandler}>convert</button>
            {currency && <div className={s.text}>{basePrice} {baseCurrency.toUpperCase()} = {round100(priceCurrency ? priceCurrency : 1)} {currency && currency.toUpperCase()}</div>}
        </div>
    );
};

