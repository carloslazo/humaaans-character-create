import React from 'react';
import './App.css';
import body from './body.js';
import bottom from './bottom.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render(){  
    console.log(bottom);  
    return (
      <div>{body.turtleNeck}</div>
    );
  }
}

export default App;
