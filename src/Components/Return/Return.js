import React, { Component } from 'react';
import './Return.css';
import axios from 'axios';

class Result extends Component{

    state ={
        id: ""
    }

    componentDidMount(){

            
        const id = localStorage.getItem('id');
        this.setState({id: id});

        axios.get('http://api-space-explorer.herokuapp.com/api/astronauts/?id='+id).then(res =>{
            this.setState({
                destination: res.data.destination,

            })
        })
    }



    render(){

        return(
            <div className="Return">
              <h1>Welcome Back to Earth</h1> 
                
            </div>
        );
    }
}


export default Result;