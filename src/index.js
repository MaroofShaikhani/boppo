import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import Container from './Container';
import Banner from './Banner';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  // </React.StrictMode>
  <div>
    <Banner/>
   <Nav/> 
  <Container/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
