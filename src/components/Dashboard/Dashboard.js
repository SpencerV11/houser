import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }

        this.getHouses = this.getHouses.bind(this)
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount() {
        this.getHouses()
    }

    getHouses(){
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        }).catch(err => console.log(`Your errorrr is ${err}`))
    }

    deleteHouse(id) {
        axios.delete(`/api/house/${id}`).then(res => {
            this.getHouses()
        }).catch(err => console.log(`Your error is ${err}`))
    }

    render() {
        let { houses } = this.state
        let map = houses.map(house => {
            return (
            <House 
            key={house.id}
            house={house}
            deleteHouse={this.deleteHouse}
            getHouses={this.getHouses} />
            )
        })
        return (
            <div className='page'>
                <div className="boundary-box">
                <div className="box-header">
                    <h1>Dashboard</h1>
                    <Link to="/wizard"><button className="new-property">Add New Property</button></Link>
                </div>
                <div className="home-listing">Home Listing</div>
                {/* <House /> */}
                {map}
             </div>
            </div>
            
        )
    }
}

export default Dashboard