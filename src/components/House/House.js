import React, { Component } from 'react'

class House extends Component {

    handleDelete = () => {
        let id = this.props.house.id
        this.props.deleteHouse(id)
    }

    render() {
        return (
            <div>
                 <div className="house-box">
                     <div>
                         <img src={this.props.house.img}/>
                         <div>Property Name: {this.props.house.name}</div>
                         <div>Address: {this.props.house.address}</div>
                         <div>City: {this.props.house.city}</div>
                         <div>State: {this.props.house.state}</div>
                         <div>Zip: {this.props.house.zip}</div>
                     </div>
                     <button className="but" onClick={this.handleDelete}>X</button>
                 </div>
            </div>
           
        )
    }
}

export default House
