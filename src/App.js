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
    this.handlePicker = this.handlePicker.bind(this);
  }
  
  handleClick(e){
   let value = e.target.value
   this.setState({[e.target.name]: value})
  }
  
  handleControl(e){
    let currentIndex = this.state[e.currentTarget.id + "Array"].findIndex((i) => this.state[e.currentTarget.id] == i)
    
    let nextIndex;
    
    
    if (e.currentTarget.name == "right" && currentIndex == this.state[e.currentTarget.id + "Array"].length - 1){
      currentIndex = -1
    }
    
    else if (e.currentTarget.name == "left" && currentIndex == 0) {
      currentIndex = this.state[e.currentTarget.id + "Array"].length - 1
    }
    
    if (e.currentTarget.name == "right"){
      nextIndex = this.state[e.currentTarget.id + "Array"][currentIndex + 1]
    }
    
    else if (e.currentTarget.name == "left") {
      nextIndex = this.state[e.currentTarget.id + "Array"][currentIndex - 1]
    }
    
    if (e.currentTarget.name == "random"){
      nextIndex = this.state[e.currentTarget.id + "Array"][Math.floor((Math.random() * this.state[e.currentTarget.id + "Array"].length - 1) + 1)]
    }
        
    this.setState({[e.currentTarget.id]: nextIndex})
  }
  
  handlePicker(e){
    console.log(document.getElementById("Skin"));
    document.getElementById("Skin").style["fill"] = "blue";
  }
  
  render(){
    return (
    <div className="App">
      <div
        onClick={this.handlePicker}
        >
        <div>{body[this.state.body]}</div>
        <div>{bottom[this.state.bottom]}</div>
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
        
        <span>
          <button
            className="button"
            onClick={this.handleControl}
            name="left"
            id="body"
            >
            <i class="fas fa-chevron-left" style={{color: "#3273dc"}}></i>
          </button>
          <button
            className="button"
            onClick={this.handleControl}
            name="random"
            id="body"
            >
            <i class="fas fa-circle" style={{color: "#3273dc"}}></i>
          </button>
          <button
            className="button"
            onClick={this.handleControl}
            name="right"
            id="body"
            >
              <i class="fas fa-chevron-right" style={{color: "#3273dc"}}></i>
          </button>
        </span>        
      </div>
      
      <div>
        <div class="select">
          <select
            onChange={this.handleClick}
            name="bottom"
            value ={this.state.bottom}
            >
            {
              this.state.bottomArray.map( key => {
                return <option>{key}</option>
              } )
            }
          </select>
        </div>
        
        <span>
          <button
            className="button"
            onClick={this.handleControl}
            name="left"
            id="bottom"
            >
            <i class="fas fa-chevron-left" style={{color: "#3273dc"}}></i>
          </button>
          <button
            className="button"
            onClick={this.handleControl}
            name="random"
            id="bottom"
            >
            <i class="fas fa-circle" style={{color: "#3273dc"}}></i>
          </button>
          <button
            className="button"
            onClick={this.handleControl}
            name="right"
            id="bottom"
            >
              <i class="fas fa-chevron-right" style={{color: "#3273dc"}}></i>
          </button>
        </span>        
      </div>
    </div>
    );
  }
}

export default App;
