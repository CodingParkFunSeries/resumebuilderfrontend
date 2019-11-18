import React from 'react';
import logo from './logo.svg';
import './App.css';


import ResumeListComponent from './component/ResumeListComponent';
import ResumeComponent from './component/ResumeComponent';


function App() {
  return (
    <div className="App">
      <h1>Resume</h1>
      <ResumeListComponent />

      <br/>
      <br/>

      <ResumeComponent />
    </div>
  );
}

export default App;
