import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-black sm:px-10 px-6 py-2 shadow-md">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain my-0" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#fc731e] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[url(./assets/AdobeStock_220175380.jpeg)] bg-cover min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
