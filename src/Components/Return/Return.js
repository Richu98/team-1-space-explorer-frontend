import React, { Component } from 'react';
import './Return.css';
import axios from 'axios';

class Result extends Component{

    state= {
        id:"",
    }

    componentDidMount(){

            const id = localStorage.getItem("id")||null
            this.setState({id:id});
                console.log(this.state);

        axios.get('http://api-space-explorer.herokuapp.com/api/astronauts/').then(res =>{
            console.log(res.data);
        })
    }



    render(){

        return(
            <div className="Return">
              <h1>hello world</h1> 
            </div>
        );
    }
}


export default Result;