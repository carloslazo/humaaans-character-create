import React from 'react';
import './App.css';
import body from './body.js';
import bottom from './bottom.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "selected": "turtleNeck"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  defineSelectList(part){
    return Object.keys(part).map(function(key, index) {
      return key
    })
  }
  
  handleClick(e){
   let value = e.target.value
   this.setState({"selected": value})
  }
  
  render(){
    return (
    <div>
      <div>
        <div>{body[this.state.selected]}</div>
        <div>{bottom.standing.sweeatpants}</div>
      </div>
      
      <div>
        <div class="select">
          <select
            onChange={this.handleClick}
            >
            <option>Select body</option>
            {
              this.defineSelectList(body).map( key => {
                return <option>{key}</option>
              } )
            }
          </select>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
