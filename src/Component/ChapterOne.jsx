import React, { Component } from 'react';
import Igorance from '../Component/Ignorance';
import Help from '../Component/Help';


const component= {
    ignorance: Igorance,
    help: Help,
}



export default class Story extends Component {

    state = {
        choice:null,
    }

    changeComponent= (event) => {
        console.log(("OK"));
        
        const choice = event.target.value;
        this.setState({choice})
    }

    methods = {
        changeComponent:this.changeComponent,
    }

    render = () => {

        const {choice} = this.state;


        const ComponentName = component[choice]

        if (ComponentName) {
            return (
                <ComponentName methods={this.methods}/>
            )
        }
        else {
            return (
            <div>
                <div>Oh ? Hello adventurer. Welcome to our humble village.
                Are you here to help us defeat the demon ?
                </div>

                <button value="help" onClick={this.changeComponent}>
                    Yeah,sure !
                </button>

                <button value="ignorance" onClick={this.changeComponent}>
                    What demon ?
                </button>
            </div>);
        }
    }

}