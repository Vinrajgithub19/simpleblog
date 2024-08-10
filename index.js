import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <App />

  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export {App,Home,CreatePost,PostDetail,Navbar,BrowserRouter };