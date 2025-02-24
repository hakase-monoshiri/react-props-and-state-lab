import React from 'react'

class Pet extends React.Component {

  adoptMe = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  adoptionChecker = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    }
    else if (this.props.pet.isAdopted == false) {
      return   <button className="ui primary button" onClick={this.adoptMe}>Adopt pet</button>
    }
    
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">

          {this.adoptionChecker()}
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet
