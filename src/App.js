import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {

  // Function to get the initial dark mode preference based on system preference
  const getInitialDarkModePreference = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      console.log('System is set dark theme ');
      return true; // System prefers dark mode
    } else {
      console.log('System is set light theme ');
      return false; // System prefers light mode
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkModePreference());

  useEffect(() => {
    // Listen for changes in system color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setIsDarkMode(mediaQuery.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Apply dark mode class to html and body elements
  useEffect(() => {
    const className = isDarkMode ? 'dark-mode' : 'light-mode';
    document.documentElement.classList.add(className);
    document.body.classList.add(className);
    return () => {
      document.documentElement.classList.remove(className);
      document.body.classList.remove(className);
    };
  }, [isDarkMode]);

  const toggleDarkMode = (param) => {
    if (param === "system") {
      // Listen for changes in system color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setIsDarkMode(mediaQuery.matches);
    };
    } else {
    console.log("Toggle dark mode clicked.")
     setIsDarkMode(!isDarkMode);
    // Store the new dark mode preference in localStorage
    localStorage.setItem('darkMode', JSON.stringify(!isDarkMode));  
    }
    
  };

  return (
    <Router>
        <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <ExpenseProvider>
          <Navbar toggleDarkMode={toggleDarkMode} isDarkModeOn={isDarkMode} />
              <Routes>
                <Route path="/" element={<ExpenseList/>} />
                <Route path="/add" element={<ExpenseForm/>} />
                <Route path="/edit/:id" element={<ExpenseForm/>} />
              </Routes>
          </ExpenseProvider>
        </div>
    </Router>
  );
};

export default App;
