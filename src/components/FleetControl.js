import React from "react";
import FleetList from "./FleetList";
import NewFleetForm from "./NewFleetForm";
import ShipsToFleetForm from "./ShipsToFleetForm";
import { v4 } from 'uuid';
// import Fleet from "./Fleet";


class FleetControl extends React.Component {


  constructor(props) {

    super(props)
    this.state = {
      formVisibleOnPage: true,
      addShipsToFleetForm: false,
      mainFleetList: [],
      selectedFleet: null,
      editing: false,
      userInput: ""
    };
  }
  handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        addShipsToFleetForm: false
      }))
  }
  

  handleAddingNewShipsToFleet = (event) => {
    event.preventDefault();
    this.setState({
      addShipsToFleetForm: true, 
      formVisibleOnPage: false})
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    
    });
    console.log(event.target.value)
  }

  render() {
    
    const availableShips = [
  {
    name: "GR-75 Medium Transports",
    size: "flotilla",
    cost: 18,
    faction: "Rebel",
    id: v4()
  },
  {
    name: "GR-75 Combat Retrofits",
    size: "flotilla",
    cost: 24,
    faction: "Rebel",
    id: v4()
  },
  {
    name: "CR90b Corvette",
    size: "small",
    cost: 39,
    faction: "Rebel",
    id: v4()
  },
  {
    name: "CR90a Corvette",
    size: "small",
    cost: 44,
    faction: "Rebel",
    id: v4()
  },
  {
    name: "Nebulon-B Support Frigate",
    size: "small",
    cost: 51,
    faction: "Rebel",
    id: v4()
  },
  {
    name: "Nebulon-B Escort Frigate",
    size: "small",
    cost: 57,
    faction: "Rebel",
    id: v4()
  },
  {
    name: "Assault Frigate MkII B",
    size: "medium",
    cost: 72,
    faction: "Rebel",
    id: v4()
  },
  {
    name: "Assault Frigate MkII A",
    size: "medium",
    cost: 81,
    faction: "Rebel",
    id: v4()
  },
  {
    name: "MC80 Command Cruiser",
    size: "large",
    cost: 106,
    faction: "Rebel",
    id: v4()
  },
  {
    name: "MC80 Assault Cruiser",
    size: "large",
    cost: 114,
    faction: "Rebel",
    id: v4()
  },
  {
    name: "Gozanti-class Cruisers",
    size: "flotilla",
    cost: 23,
    faction: "Empire",
    id: v4()
  },
  {
    name: "Gozanti-class Assault Carriers",
    size: "flotilla",
    cost: 28,
    faction: "Empire",
    id: v4()
  },
  {
    name: "Raider I Corvette",
    size: "small",
    cost: 44,
    faction: "Empire",
    id: v4()
  },
  {
    name: "Raider II Corvette",
    size: "small",
    cost: 48,
    faction: "Empire",
    id: v4()
  },
  {
    name: "Gladiator I Star Destroyer",
    size: "small",
    cost: 56,
    faction: "Empire",
    id: v4()
  },
  {
    name: "Gladiator II Star Destroyer",
    size: "small",
    cost: 62,
    faction: "Empire",
    id: v4()
  },
  {
    name: "Victory I Star Destroyer",
    size: "medium",
    cost: 73,
    faction: "Empire",
    id: v4()
  },
  {
    name: "Victory II Star Destroyer",
    size: "medium",
    cost: 85,
    faction: "Empire",
    id: v4()
  },
  {
    name: "Imperial I Star Destroyer",
    size: "large",
    cost: 110,
    faction: "Empire",
    id: v4()
  },
  {
    name: "Imperial II Star Destroyer",
    size: "large",
    cost: 120,
    faction: "Empire",
    id: v4()
  }
]
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.addShipsToFleetForm){
      currentlyVisibleState = <ShipsToFleetForm  shipsAvailable={availableShips} chosenFaction={this.state.userInput}/>
      buttonText = "Return to Fleet List"
    }
      else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewFleetForm onNewFleetCreation=
      {this.handleAddingNewShipsToFleet} onSelect={this.handleChange} input={this.state.userInput}/>
      buttonText = "Return to Fleet List"
    } else {
      currentlyVisibleState = <FleetList fleetList={this.state.mainFleetList} onFleetSelection={this.handleChangingSelectedFleet} />;
      buttonText = "Add Fleet";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <hr />
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}


      // const fleetFaction = availableShips.filter(faction => faction.faction === this.state.userInput)
      // if (fleetFaction.length === 0)
      // {
      //   currentlyVisibleState =
      //   <React.Fragment>
      //     <p>Please select a faction</p>
      //     <button onClick={this.handleClick}>Home</button>
      //   </React.Fragment>
      // } else {
      //   <React.Fragment>
      //     {/* <Fleet fleet={fleet[0].faction}
      //     ships={faction[0].selection.map((ship) =>
      //     <li key={fleet.id}>{ship}</li>)} /> */}
      //   </React.Fragment>
      // }


export default FleetControl;

