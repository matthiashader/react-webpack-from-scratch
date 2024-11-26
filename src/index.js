import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import {
    defineCustomElements as themeDefineCustomElements,
  } from "@siemens/ix-brand-theme/loader";
  import { defineCustomElements } from "@siemens/ix-icons/loader";
  
  defineCustomElements();
  themeDefineCustomElements();

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);
