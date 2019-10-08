import React from 'react';

import ControlPanel from "./controlPanel.js"

function FullControlPanel(props){
  return(
    <div>
      <div class="select">
        <select
          onChange={props.onChange}
          name={props.name}
          value ={props.value}
          >
          {
            props.array.map( key => {
              return <option>{key}</option>
            } )
          }
        </select>
      </div>
      
      <ControlPanel
        onClick={props.onClick}
        name="left"
        icon="fas fa-chevron-left"
        id={props.id}
        />
        
      <ControlPanel
        onClick={props.onClick}
        name="random"
        icon="fas fa-circle"
        id={props.id}
        />
        
      <ControlPanel
        onClick={props.onClick}
        name="right"
        icon="fas fa-chevron-right"
        id={props.id}
        />
    </div>
  )
}

export default FullControlPanel;
