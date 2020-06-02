import React, { Component } from 'react';
import './Begin.css';



class Begin extends Component {

state = {
  teamName: null,
  destination: null,
  members: [ ]
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
               <form className="teamForm" onSubmit={this.handleSubmit}>
              
                      <label htmlFor="teamName">Team Name:</label><br/>
                          <input type="text" id="teamName" placeholder="Enter Team Name" onChange={this.handlechange} required/><br/>

                    
                      <label htmlFor="destination">Destination:</label><br/>
                          <input type="text" id="destination" placeholder="Enter your Destination" onChange={this.handlechange} required/><br/>

                      <label htmlFor="members"> Members List:</label><br/>
                          <input type="text" id="members_one" placeholder="Member Name" onChange={this.handlechange} required/><br/>
                          <input type="text" id="members_two" placeholder="Members Name" onChange={this.handlechange}/><br/>
                          <input type="text" id="members_three" placeholder="Members Name" onChange={this.handlechange} /><br/>
                          <input type="text" id="members_four" placeholder="Members Name" onChange={this.handlechange} /><br/>
                    
                      <button className="btn">Ready For Take off in 3...2...1...</button>
                      
                </form>
                
            </div>



      </div>
    );
  }
}

export default Begin;