import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
        }
    }

    createHouse = (e) => {
        let { name, address, city, state, zip } = this.state
        axios.post('/api/houses', { name, address, city, state, zip }).then(res => {
            console.log(res)
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '',
                zip: 0
            })
        })
            .catch(error => console.log(`You have yourself an: ${error}`))
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='page'>
                <div className="boundary-box">
                    <div className="box-header">
                        <h1>Add listing</h1>
                        <Link to="/"><button className="new-property2">Cancel</button></Link>
                    </div>
                    <div>
                        <div>Property Name<br></br>
                            <input value={this.state.name} onChange={(e) => this.handleChange('name', e.target.value)}></input></div>

                        <div>Address<br></br>
                            <input value={this.state.address} onChange={(e) => this.handleChange('address', e.target.value)}></input></div>

                        <div>City<br></br>
                            <input value={this.state.city} onChange={(e) => this.handleChange('city', e.target.value)}></input></div>

                        <div>State<br></br>
                            <input value={this.state.state} onChange={(e) => this.handleChange('state', e.target.value)}></input></div>

                        <div>Zip<br></br>
                            <input value={this.state.zip} onChange={(e) => this.handleChange('zip', e.target.value)}></input></div>

                    </div>
                    <Link to="/"><button onClick={this.createHouse}>Complete</button></Link>
                    <Link to="/stepTwo"><button onClick={this.handleToggle} className="next-button">Next Step</button></Link>
                </div>
            </div>

        ) 
    }
}

export default Wizard