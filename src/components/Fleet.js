import React from "react";
import PropTypes from "prop-types";

function Fleet(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenFleetClicked(props.id)}>
        <h3>{props.name} - {props.faction}</h3>
        <ul>
          <li>{props.ships}</li>
        </ul>
        <hr />
      </div>
    </React.Fragment>
  );
}

Fleet.propTypes = {
  name: PropTypes.string,
  faction: PropTypes.string,
  ships: PropTypes.string,
  id: PropTypes.string,
  whenFleetClicked: PropTypes.func
};

export default Fleet;