import React from 'react';
import { CurrencyExchange } from './components/CurrencyExchange/CurrencyExchange';
import { СurrentСurrencies } from './components/CurrentCurrencies/СurrentСurrencies';
import s from './App.module.css';
import { Routes, Route, Link } from 'react-router-dom';

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
            <Link className={s.page} to="/">Currency</Link>
            <Link className={s.page} to="current-currencies">Сurrent</Link>
            </nav>
          </div>
      </div>
    )
}

export default App;
