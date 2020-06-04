import React, { Component } from 'react';
import './Destination.css';

class Destination extends Component{

    render(){
        console.log(this.props);
        return(
            <div className="Destination">
                <p>Hello</p>
            </div>
        );
    }
}


export default Destination;