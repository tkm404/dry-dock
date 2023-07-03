import React from "react";
import Fleet from "./Fleet";
import PropTypes from "prop-types";


function FleetList(props) {
  return (
    <React.Fragment>
      {props.fleetList.map((fleet) =>
      <Fleet
        whenFleetClicked = { props.onFleetSelection }
        name={fleet.name}
        faction={fleet.faction}
        ships={fleet.ships}
        id={fleet.id}
        key={fleet.id}/>
        )}
    </React.Fragment>
  )
}

FleetList.propTypes = {
  fleetList: PropTypes.array,
  onFleetSelection: PropTypes.func
};

export default FleetList;