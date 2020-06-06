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
                    name: res.data[0].teamName,
                    place :res.data[0].destination
                })
            })

        

    }



    render(){

        return(
            <div className="Return">
              <h1>Welcome Back to Earth {this.state.name}</h1>

              <h2>Hope You Had Fun Going To {this.state.place}</h2>

                                
            </div>
        );
    }
}


export default Result;