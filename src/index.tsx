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
}
*{box-sizing:border-box;
padding: 0;margin:0; font-family: 'Exo 2', sans-serif;}

.swiper-button-prev{
  color: #000;
  width: 20px;
  height: 44px;
}
  .swiper-button-next{
    color: #000;
    width: 20px;
    height: 44px;
  }

/* Position and sizing of burger button */
.bm-burger-button {
  position: absolute;
  width: 36px;
  height: 30px;
  top: -300px;
  right: -300px;
  @media (max-width: 1020px) {
    top: 27px;
    right: 36px;
  }

}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #4478BB;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #2d588f;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
  top: 0;
  right: 0 !important;
}

/* General sidebar styles */
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
  width: 291px !important;

}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: flex !important;
}

/* Styling of overlay */
.bm-overlay {
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}

.bm-item {
  display: inline-block;

  color: #d1d1d1;
  margin-bottom: 10px;
  text-align: left;
  text-decoration: none;
  transition: color 0.2s;
}

.bm-item:hover {
  color: #ffffff;
}
`


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
