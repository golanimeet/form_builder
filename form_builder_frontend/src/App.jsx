import React from 'react';
import './Pages/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Dashboard from './Pages/Dashboard';
import Forms from './Pages/Forms';
import Templates from './Pages/Templates';
import Submissions from './Pages/Submissions';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/submission" element={<Submissions />} />
          <Route path="/login" element={<h5>Logout</h5>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
