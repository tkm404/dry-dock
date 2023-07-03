import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewFleetForm(props) {
  return (
    <form onSubmit={props.onNewFleetCreation}>
      <select value={props.input} onChange={props.onSelect}>
        <option value="" disabled={true}>Select a Faction</option>
        <option value="Rebel">Rebel Alliance</option>
        <option value="Empire">Galactic Empire</option>
      </select>
      <br></br>
      <button type="submit">Choose Ships</button>
    </form>
  )
}

NewFleetForm.propTypes = {
  onNewFleetCreation: PropTypes.func,
  onSelect: PropTypes.func,
  input: PropTypes.string
}

export default NewFleetForm;

