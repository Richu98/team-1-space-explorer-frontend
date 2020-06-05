import React, { Component } from 'react';
import axios from 'axios';
import './Begin.css';





class Begin extends Component {

  state = {
    teamName: "",
    destination: "",
    members: [""],
    spaceshipName: "",
    mission: ""
  }

  handlechange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

      const astronauts = { 
        teamName: this.state.teamName,
        destination: this.state.destination,
        teamMembers: this.state.members,
        spaceshipName: this.state.spaceshipName,
        mission: this.state.mission
      }

      console.log(astronauts); 

    axios.post('https://api-space-explorer.herokuapp.com/api/astronauts', astronauts)
    .then(res =>{
      console.log(res);
    })
   
    this.props.history.push("/Destination");
    
  }

  /*--------for Member Array function-------- */

  handleChangeArray = (e) => {

    this.setState({ forArray: e.target.value });

  }



  addPeople = (e) => {
    e.preventDefault();
    const members = this.state.members;
    const forArray = this.state.forArray;
    members.push(forArray);
    this.setState({ members: members, forArray: "" });



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


            <div>
              <label htmlFor="teamName">Team Name:</label>
                <input type="text" id="teamName" placeholder="Enter Team Name" onChange={this.handlechange} required />
            </div>

            <div>
              <label htmlFor="destination">Destination:</label>
                <input type="text" id="destination" placeholder="Enter your Destination" onChange={this.handlechange} required />
            </div>
            
            <div>
              <label htmlFor="spaceShipName">Spaceship Name:</label>
                <input type="text" id="spaceshipName" placeholder="Enter SpaceShip Name" onChange={this.handlechange} required />
            </div>

              <div>
                <label htmlFor="mission">Mission:</label>
                  <input type="text" id="mission" placeholder="Enter Mission" onChange={this.handlechange} required />
              </div>

              <div>
                <label htmlFor="members"> Members List:</label>
                  <input type="text" id="members" placeholder="Member Name" onChange={this.handleChangeArray} required />

                  {/*-------button for add members to array*/}
                   <button className="btn_add" onClick={this.addPeople}>Add The Member</button> 

                    {/*----Rendering Member Data------ */}
                  {
                    this.state.members.map((data, index) => {
                      return (
                        <div className="teammem" key={index}>
                            <p>{data}</p>
                        </div>
                      );
                    })
                  }
              </div>
            

           


          <button className="btn" onClick={this.handleSubmit} >Ready For Take off in 3...2...1...</button>

          </form>

        </div>
           


      </div>
    );
  }
}

export default Begin;
