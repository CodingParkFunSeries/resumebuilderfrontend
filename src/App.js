import React from 'react';
import logo from './logo.svg';
import './App.css';




import ResumeListComponent from './component/ResumeListComponent';
import ResumeEditComponent from './component/ResumeEditComponent';
import NavigationBar from './component/NavigationBar';

class App extends React.Component {

   render() {
     return (
        <div>
          <NavigationBar />
          <br/>
          
          <ResumeEditComponent />
        </div>
      );
   }

}

export default App;
