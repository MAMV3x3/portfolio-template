import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import NotFoundPage from './components/OnePage/NotFoundPage';
import OnePage from './components/OnePage/OnePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<OnePage/>} />
        <Route path='*' element = {<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;
