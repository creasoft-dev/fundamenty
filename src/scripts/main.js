import '../styles/main.css';
import '../styles/radar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import ProductSearch from './ProductSearch';
import ApiDocSwagger from './ApiDocSwagger';

// store the current locale of the page
const sStorage = window.sessionStorage;
const htmlLocale = document.getElementsByTagName('html')[0].getAttribute('lang')
  || document.getElementsByTagName('html')[0].getAttribute('xml:lang')
  || '';
if (sStorage.getItem('locale') !== htmlLocale) {
  sStorage.setItem('locale', htmlLocale);
}

/**
 * NOTE: You can turn on the below components when the backend services are fully configured
 */
const ENABLE = false;

// TODO: Find a better way to render the dom 
const searchContainer = document.querySelector('#search-container');
ENABLE && (searchContainer) && ReactDOM.render(<Search />, searchContainer);

// Instantiate Product component
const prodSearchContainer = document.querySelector('#productsearch-container');
ENABLE && (prodSearchContainer) && ReactDOM.render(<ProductSearch />, prodSearchContainer);

// Instantiate API Swagger component
const apiswaggerContainer = document.querySelector('#apiswagger-container');
(apiswaggerContainer) && ReactDOM.render(<ApiDocSwagger />, apiswaggerContainer);
