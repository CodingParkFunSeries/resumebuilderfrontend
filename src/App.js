import React from 'react';
import logo from './logo.svg';
import './App.css';
import Collapsible from 'react-collapsible';


function App() {
  return (
    <div className="App">
      <h1>Resume</h1>
      <Collapsible trigger="Personal Details" >
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      <Collapsible trigger="Education" >
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      <Collapsible trigger="Experience" >
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      <Collapsible trigger="Projects" >
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      <Collapsible trigger="Skills" >
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
    </div>
  );
}

export default App;
