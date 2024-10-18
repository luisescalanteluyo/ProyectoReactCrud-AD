import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Login from './components/pages/Login';
import UserManagement from './components/pages/UserManagement';
import Contact from './components/pages/Contact';

const App = () => {
  return (
  <Router>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/users" element={<UserManagement/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
  </Router>
  );
};
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
