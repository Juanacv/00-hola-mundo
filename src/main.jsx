import React from 'react'
import ReactDom from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

const root = ReactDom.createRoot(document.getElementById('root'));
const Button = ({ text }) => (
  <button>{text}</button>
);

root.render(<App />);