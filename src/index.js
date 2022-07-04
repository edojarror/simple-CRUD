import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Router from './routes/Router';
// import MoviesPage from './pages/MoviesPage';
// import TestPage from './pages/testPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />}></Route>
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
