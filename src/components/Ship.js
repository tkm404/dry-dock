import React from "react";
import PropTypes from "prop-types";


function Ship(props) {
  return(
    <React.Fragment>
      <h4>{props.name} </h4>
      <h4>{props.size} </h4>
      <h4>{props.cost} </h4>
      <h4>{props.faction} </h4>
    </React.Fragment>
  )
}




Ship.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  cost: PropTypes.number,
  faction: PropTypes.string,
  id: PropTypes.string
  
}


export default Ship;

