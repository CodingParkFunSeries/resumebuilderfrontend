import React from 'react';
import logo from './logo.svg';
import './App.css';




import ResumeListComponent from './component/ResumeListComponent';
import ResumeComponent from './component/ResumeComponent';
import NavigationBar from './component/NavigationBar';

class App extends React.Component {

   render() {
     return (
        <div>
          <NavigationBar />
          <br/>
          
          <ResumeListComponent />
        </div>
      );
   }

}

export default App;
