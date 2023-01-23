import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import NotFoundPage from './components/OnePage/NotFoundPage';
import OnePage from './components/OnePage/OnePage';
import useLocalStorage from 'use-local-storage';

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const themeToggler = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <BrowserRouter>
        <div className="theme__toggle" onClick={themeToggler}>
          {/* use icon of current theme */}
          <i className={
            theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'
          }></i>
        </div>
        <Routes>
          <Route path='/' element = {<OnePage/>} />
          <Route path='*' element = {<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}




export default App;
