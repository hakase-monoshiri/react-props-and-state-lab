import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (newType) => {
    this.setState(
      {filters: {...this.state.filters,
         type: newType}
      }
    )
  }

  fetchPets = () => {
    let url = "/api/pets";
    if (this.state.filters.type !== 'all') {
      url = `/api/pets?type=${this.state.filters.type}`
    };
    fetch(url).then( res => 
      res.json()).then( petsJSON =>
        this.setState({...this.state,
          pets: petsJSON
        }
        )
    );
    console.log(this.state.pets)
    
  }

  adoptPet = (petId) => {
    const adoptedPet = this.state.pets.find(
      pet => pet.id === petId
    );
    adoptedPet.isAdopted = true;
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
