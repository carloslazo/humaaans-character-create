import React from 'react';
import './App.css';
import body from './body.js';
import bottom from './bottom.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "body": "hoodie",
      "bodyArray": Object.keys(body).map((key, index) => key),
      "bottom": "baggyPants",
      "bottomArray": Object.keys(bottom).map((key, index) => key)
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleControl = this.handleControl.bind(this);
  }
  
  handleClick(e){
   let value = e.target.value
   this.setState({[e.target.name]: value})
  }
  
  handleControl(e){
    
    let currentIndex = this.state.bodyArray.findIndex((i) => this.state.body == i)
    
    let nextIndex;
    
    
    if (e.currentTarget.name == "right" && currentIndex == this.state.bodyArray.length - 1){
      currentIndex = -1
    }
    
    else if (e.currentTarget.name == "left" && currentIndex == 0) {
      currentIndex = this.state.bodyArray.length - 1
    }
    
    if (e.currentTarget.name == "right"){
      nextIndex = this.state.bodyArray[currentIndex + 1]
    }
    
    else if (e.currentTarget.name == "left") {
      nextIndex = this.state.bodyArray[currentIndex - 1]
    }
    
    if (e.currentTarget.name == "random"){
      nextIndex = this.state.bodyArray[Math.floor((Math.random() * this.state.bodyArray.length - 1) + 1)]
    }
        
    this.setState({"body": nextIndex})
  }
  
  render(){
    
    console.log(this.state.body);
    
    return (
    <div className="App">
      <div>
        <div>{body[this.state.body]}</div>
        <div className="pants-position">{bottom[this.state.bottom]}</div>
      </div>
      
      <div>
        <div class="select">
          <select
            onChange={this.handleClick}
            name="body"
            value ={this.state.body}
            >
            {
              this.state.bodyArray.map( key => {
                return <option>{key}</option>
              } )
            }
          </select>
        </div>
        
        <div class="select">
          <select
            onChange={this.handleClick}
            name="bottom"
            >
            {
              this.state.bottomArray.map( key => {
                return <option>{key}</option>
              } )
            }
          </select>
        </div>
        
        <div>
          <button
            onClick={this.handleControl}
            name="left"
            value="body"
            id="hey"
            >
            <i class="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={this.handleControl}
            name="random"
            id="hey"
            >
            <i class="fas fa-circle"></i>
          </button>
          <button
            onClick={this.handleControl}
            name="right"
            value="body"
            id="hey"
            >
              <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
