import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import StocksInvesting from "./routes/StocksInvesting";
import { About } from "./routes/About";
import { BlogPost } from "./routes/BlogPost";
import Home from "./routes/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="about" element={<About />} />
        <Route path="/home" element={<Home></Home>} />
        <Route path='stocks-investing' element={<StocksInvesting />} />
        <Route path='blog-post' element={<BlogPost></BlogPost>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
