import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  showPets = () => {
    return this.props.pets.map( (singlePet, index) => {
      return < Pet pet={singlePet} onAdoptPet={this.props.onAdoptPet} key={index}/>
      }
    )

  }

  render() {
    return <div className="ui cards"> 
      {this.showPets()}
    </div>
  }
}

export default PetBrowser
