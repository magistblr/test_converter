import React from 'react';
import { CurrencyExchange } from './components/CurrencyExchange/CurrencyExchange';
import { СurrentСurrencies } from './components/CurrentCurrencies/СurrentСurrencies';
import s from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function App() {


  return (
      <div className={s.App}>
        <div className={s.content}>
          <Routes>
              <Route path='/'  element={<CurrencyExchange/>}/>
              <Route path="current-currencies" element={<СurrentСurrencies/>}/>
              <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>} />
          </Routes>
        </div>
          <div className={s.pages_wrapper}>
            <nav className={s.pages}>
              <NavLink className={ ({isActive}) => isActive ? `${s.page} ${s.page_active}` : s.page} to="/">Convertor</NavLink>
              <NavLink className={ ({isActive}) => isActive ? `${s.page} ${s.page_active}` : s.page} to="current-currencies">Currencies</NavLink>
            </nav>
          </div>
      </div>
    )
}

export default App;
