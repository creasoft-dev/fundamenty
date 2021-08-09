import '../styles/main.css';
import '../styles/radar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import ArchiSearch from './ArchiSearch';
import ApiDocSwagger from './ApiDocSwagger';


/**
 * NOTE: You can turn on the below components when the backend services are fully configured
 */
const ENABLE = false;

// TODO: Find a better way to render the dom 
const searchContainer = document.querySelector('#search-container');
ENABLE && (searchContainer) && ReactDOM.render(<Search/>, searchContainer);

// Instantiate Product component
const archisearchContainer = document.querySelector('#archisearch-container');
ENABLE && (archisearchContainer) && ReactDOM.render(<ArchiSearch/>, archisearchContainer);

// Instantiate API Swagger component
const apiswaggerContainer = document.querySelector('#apiswagger-container');
ENABLE && (apiswaggerContainer) && ReactDOM.render(<ApiDocSwagger/>, apiswaggerContainer);
