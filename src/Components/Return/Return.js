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
        console.log(this.state.id);
        axios.get('http://api-space-explorer.herokuapp.com/api/astronauts/?id='+id).then(res =>{
            this.setState({
             name :res.data[0].teamName,
             place :res.data[0].destination,
             teamMembers:res.data[0].teamMembers,
             spaceshipName: res.data[0].spaceshipName
            })
            console.log(res.data[0]);
        })
        
        
    }
    


    render(){

        return(
            <div className="Return">
               
                <div className="text">
               <h1>Welcome Back to Earth {this.state.name}</h1> <br/>
               <h2>How was your journey on {this.state.place}</h2>
               <h3>Congratulations! {this.state.teamMembers}</h3>
               <h4>We hope your ride was fun with {this.state.spaceshipName}</h4>
               </div>
            </div>
        );
    }
}


export default Result;