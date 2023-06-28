import React from "react";
import FleetList from "./FleetList";
import NewFleetForm from "/.NewFleetForm";

class FleetControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: null,
      mainFleetList: [],
      selectedFleet: null,
      editing: false
    };
  }
  handleClick = () => {
    if (this.state.selectedFleet != null) {
      this.setState({
        selectedFleet: null,
        editing: false
      })
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewFleetForm onNewFleetCreation=
      {this.handleAddingNewFleetToList} />
      buttonText = "Return to Fleet List"
    } else {
      currentlyVisibleState = <FleetList fleetList={this.state.mainFleetList} onFleetSelection={this.handleChangingSelectedFleet} />;
      buttonText = "Add Fleet";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default FleetControl;