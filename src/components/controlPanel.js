import React from 'react';

function ControlPanel(props){
  return (
    <button
      className="button"
      onClick={props.onClick}
      name={props.name}
      id={props.id}
      >
      <i class={props.icon} style={{color: "#3273dc"}}></i>
    </button>
  )
}

export default ControlPanel;
