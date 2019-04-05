import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class stepThree extends Component {
    constructor() {
        super()

        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    handleCancel = () => {
        this.setState({
            mortgage: 0,
            rent: 0
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='page'>
                <div className="boundary-box">
                    <div className="box-header">
                        <h1>Add New Listing</h1>
                        <button className="new-property2" onClick={this.handleCancel}>Cancel</button>

                    </div>
                    <div className="img-url">
                        Monthly Motgage Amount <input value={this.state.mortgage} type="number" onChange={(e) => this.handleChange('mortgage', e.target.value)}></input> <br></br>
                        Desired Monthly Rent <input value={this.state.rent} type="number" onChange={(e) => this.handleChange('rent', e.target.value)}></input>
                    </div>
                    <Link to="/stepTwo"><button>Previous Step</button></Link>
                    <button>Complete</button>
                </div>
            </div>
        )
    }
}

export default stepThree