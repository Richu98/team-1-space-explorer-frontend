import React, { Component } from 'react';
import './Begin.css';



class Begin extends Component {

state = {
  id: "",
  teamName: "",
  destination: "",
  members: [],
  spaceShipName: "",
  mission: ""
}

handlechange = (e) => {
    this.setState({
    [e.target.id] : e.target.value
  });
}

handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
}

/*--------for Member Array function-------- */ 

handleChangeArray =(e) => {

  this.setState({forArray: e.target.value});
  
}



addPeople = (e) =>{
  e.preventDefault();
  const  members = this.state.members;
  const forArray = this.state.forArray;
  members.push({name: forArray});
  this.setState({members:members, forArray: ""});
  

  
}
//---------------------------

  render() {
    
    return (
      <div className="Begin">

        {/* -----HEADER----- */}

        <div className="header">

          <h1>Lost In Space....</h1>
          <h2>Let's get going... </h2>

        </div>

        {/* -----FORM----- */}
          <div className="TeamInfo">            
               <form className="teamForm" autoComplete="off" onSubmit={this.handleSubmit}>
              
                  <label htmlFor="teamName">Team Name:</label><br/>
                    <input type="text" id="teamName" placeholder="Enter Team Name" onChange={this.handlechange} required/><br/>

                    
                  <label htmlFor="destination">Destination:</label><br/>
                    <input type="text" id="destination" placeholder="Enter your Destination" onChange={this.handlechange} required/><br/>
                  
                  <label htmlFor="spaceShipName">Spaceship Name:</label><br/>
                    <input type="text" id="spaceShipName" placeholder="Enter SpaceShip Name" onChange={this.handlechange} required/><br/>
                  
                  <label htmlFor="mission">Mission:</label><br/>
                    <input type="text" id="mission" placeholder="Enter Mission" onChange={this.handlechange} required/><br/>
                    
                  <label htmlFor="members"> Members List:</label><br/>
                    <input type="text" id="members" placeholder="Member Name" onChange={this.handleChangeArray} required/>
                    {/*-------button for add members to array*/}
                    <button className="addmem" onClick={this.addPeople}>Add The Member</button> <br/>
                         {/*----Rendering Member Data------ */}
                         {
                      this.state.members.map((data,index) =>{
                        return(
                          <div key={index}>
                            <p>{data.name}</p>
                          </div>
                        );
                      })
                    }

                    
                  <button className="btn" >Ready For Take off in 3...2...1...</button>
                      
                </form>
                
          </div>



      </div>
    );
  }
}

export default Begin;