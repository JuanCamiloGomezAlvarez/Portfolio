import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/Header";
import ProjectCard from './components/ProjectCard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <ProjectCard/>
  </React.StrictMode>
)
