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
                
                place :res.data[0].destination
            })
            console.log(res.data[0]);
        })
        
        
    }
    


    render(){

        return(
            <div className="Return">
               
          <div>
               <h1>Welcome Back to Earth</h1> 
               <h2>How is your journey on {this.state.place}</h2>
            </div>
            </div>
        );
    }
}


export default Result;