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
                    destination: res.data[0].teamName
                })
            })

        

    }



    render(){

        return(
            <div className="Return">
              <h1>Welcome Back to Earth {this.state.destination}</h1><br/>

                                
            </div>
        );
    }
}


export default Result;