import React, { Component } from 'react';
import './Destination.css';
import swal from 'sweetalert'

class Destination extends Component{

    componentDidMount(){
        swal("Here's the title!", "...and here's the text!");
    }

    render(){
        
        return(
            <div className="Destination">
                <p>Hello</p>
            </div>
        );
    }
}


export default Destination;