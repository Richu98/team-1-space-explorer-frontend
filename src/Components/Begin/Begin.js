import React, { Component } from 'react';
import axios from 'axios';
import './Begin.css';

class Begin extends Component {

  state = {
    teamName: "",
    destination: "",
    members: [],
    spaceshipName: "",
    mission: "",
    
    teamNameError: "",
    destinationError: "",
    membersError: "",
    spaceshipNameError: "",
    missionEror: ""

  }

    
  
  /*------Assigns values to state from Form ---------- */
  handlechange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    });
  }
  //-----------validattion on Form
  validateform = () => {
    let teamNameError= "";
    let destinationError= "";
    let membersError= "";
    let spaceshipNameError= "";
    let missionError= "";
            //-------this validation is for team name--------
      if(!this.state.teamName) {
        teamNameError= "Team Name cannot be empty";
      }
            //--------this validation is for destination------
      if(!this.state.destination) {
        destinationError= "Destination Name cannot be empty";
      }
            //---------this validation if for members ---------
      if(!this.state.forArray) {
        membersError= "Member's Name cannot be empty";
      }
           //--------this validation is for spaceshipname------
      if(!this.state.spaceshipName) {
        spaceshipNameError= "Spaceship Name cannot be empty";
      }
          //--------this validation is for mission name------
      if(!this.state.mission) {
        missionError= "Mission Name cannot be empty";
      }
      if(teamNameError || destinationError || membersError || spaceshipNameError || missionError ) {
        this.setState({ 
          teamNameError: teamNameError, 
          destinationError: destinationError, 
          membersError: membersError, 
          spaceshipNameError: spaceshipNameError, 
          missionError: missionError
        })
        return false;
      }
    return true;
  }  
  


  handleSubmit = (e) => {
    e.preventDefault();


    const isValid = this.validateform();
      if(isValid){
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
            localStorage.setItem('id',res.data._id);  
          })
        
          this.props.history.push("/Destination");
    
      }
  }

  /*--------for Member Array function-------- */

  handleChangeArray = (e) => {

    this.setState({ forArray: e.target.value });

  }



  addPeople = (e) => {
    const isvalid = this.validateform();
    if(isvalid) {
      e.preventDefault();
      const members = this.state.members;
      const forArray = this.state.forArray;
      members.push(forArray);
      this.setState({ members: members});
    }



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
                <input type="text" id="teamName" placeholder="Enter Team Name" value={this.state.teamName} onChange={this.handlechange} required />
            </div>

            {/*-------------------show Eror if any-------------------- */}
            <div className="tError"> {this.state.teamNameError}</div>
            
            <div>

              <label htmlFor="destination">Destination:</label>
                <input type="text" id="destination" placeholder="Enter your Destination" onChange={this.handlechange}  />
            </div>

            {/*-------------------show Eror if any-------------------- */}
            <div className="dError"> {this.state.destinationError}</div>
           
            <div>
              <label htmlFor="spaceshipName">Spaceship Name:</label>
                <input type="text" id="spaceshipName" placeholder="Enter SpaceShip Name" onChange={this.handlechange}  />
            </div>

             {/*-------------------show Eror if any-------------------- */}
             <div className="sError"> {this.state.spaceshipNameError}</div>
           
             

              <div>
                <label htmlFor="mission">Mission:</label>
                  <input type="text" id="mission" placeholder="Enter Mission" onChange={this.handlechange} />
              </div>

              {/*-------------------show Eror if any-------------------- */}
              <div className="mError"> {this.state.missionError}</div>
              
 
              <div>
                <label htmlFor="members"> Members List:</label>
                  <input type="text" id="members" placeholder="Member Name" onChange={this.handleChangeArray}  />


                   {/*-------button for add members to array*/}
                   <button className="btn_add" onClick={this.addPeople}>Add The Member</button> 

                    {/*-------------------show Eror if any-------------------- */}
                    <div className="membersError"> {this.state.membersError}</div>
                  



                 

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
            

           
            {/*-------------Submit Button-----------------*/}
            <button className="btn" onClick={this.handleSubmit} >Ready For Take off in 3...2...1...</button>
          </form>

        </div>
           


      </div>
    );
  }
}

export default Begin;
