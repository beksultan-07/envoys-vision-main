import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body{
     height: 100%;
     overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    #root {
	display: flex;
	flex-direction: column;
	min-height: 100%;
   position: relative;
  }
`


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
