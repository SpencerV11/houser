import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class stepTwo extends Component {
    constructor() {
        super()

        this.state = {
            img: ''
        }
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    handleCancel() {
        console.log('Hi')
        this.setState({
            img: ''
        })
    }

    render() {
        console.log(this.state.img)
        return (
            <div className='page'>
                <div className="boundary-box">
                    <div className="box-header">
                        <h1>Add New Listing</h1>
                        <button className="new-property2" onClick={this.handleCancel}>Cancel</button>
                        
                    </div>
                    <div className="img-url">
                        Image URL <input value={this.state.img} onChange={(e) => this.handleChange('img', e.target.value)}></input>
                    </div>
                    <Link to="/wizard"><button>Previous Step</button></Link>
                    <Link to="/stepThree"><button>Next Step</button></Link>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default stepTwo