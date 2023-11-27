// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './AdminDashboard/Admin.js';
import Login from './component/login.js';
import Registration from './registration/registration.js';
import HomePage from './Homepage/home.js';
import BasicGrid from './Homepage/grid.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/g" element={<BasicGrid/>} />
          <Route path="/Admin" element={<Admin/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
