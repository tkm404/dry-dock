import React from "react";
import PropTypes from "prop-types";
import Ship from "./Ship"
import Fleet from "./Fleet";
// import { v4 } from 'uuid';


function ShipsToFleetForm(props) {
  const filteredByFaction = props.shipsAvailable.filter((ship) => {
    return ship.faction === props.chosenFaction;
  })

  return(
    <React.Fragment>
      
    <form onSubmit={props.onFinalizeFleet}>
      <select value={props.shipInput || ""} onChange={props.onShipSelect}>
        <option value="" disabled={true}>Choose Ships</option>
        {filteredByFaction.map((ships) => <option key={ships.id}>{ships.name}</option>)}
      </select>

      <ul id="ship-selects">
        <li> </li>
      </ul>
      
<button type="submit">Finalize Fleet</button>
    </form>

    
</React.Fragment>
  )
}

ShipsToFleetForm.propTypes = {
  shipsAvailable: PropTypes.arrayOf(PropTypes.object),
  shipInput: PropTypes.string,
  onShipSelect: PropTypes.func


}

export default ShipsToFleetForm