import React from 'react'
import ReactDOM from 'react-dom/client'
import ContainProjects from './components/ContainProjects';
import Header from "./components/Header";
import "./style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <ContainProjects/>
  </React.StrictMode>
)
