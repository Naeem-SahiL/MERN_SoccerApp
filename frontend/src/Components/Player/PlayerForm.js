import React, { Component } from 'react'
import axios from 'axios';

export default class PlayerForm extends Component {
    constructor(props){
        super(props);
        this.firstName = 'null';
        this.lastName = null;
        this.phone = null;
        this.email = null;

        this.setFirstName = element =>{
            this.firstName = element
        }
        this.setLastName = element =>{
            this.lastName = element
        }
        this.setPhone = element =>{
            this.phone = element
        }
        this.setEmail = element =>{ 
            this.email = element
        }

    }
    submitPlayer(event){
        event.preventDefault();
        // console.log(this.firstName.value)
        axios.post('http://localhost:4000/players',{
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            phone: this.phone.value,
            email: this.email.value,
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {  
        return (
            <div className="row">
                <h1 className='center'>Add a new player</h1>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref={this.setFirstName} type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" ref={this.setLastName} type="text" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="phone" ref={this.setPhone} type="text" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" ref={this.setEmail} type="text" />
                          <label htmlFor="email">Email</label>
                        </div>

                    </div>
                    <button className='btn waves-effect waves-light' type='submit' name='action'>Add Player</button>
                </form>
            </div>
        )
    }
}
