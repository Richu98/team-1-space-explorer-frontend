import React, { Component } from 'react';
import axios from 'axios';
import { databaseGet ,imageGet } from '../URL/URL'
import './Return.css';




class Result extends Component {

    state = {
        teamMembers: [],
        id: "",
        pictures: [],
    }

    componentDidMount() {


        const id = localStorage.getItem('id');
        this.setState({ id: id });

            axios.get( databaseGet + id).then(res => {
                this.setState({
                    name: res.data[0].teamName ,
                    place: res.data[0].destination ,
                    teamMembers: res.data[0].teamMembers ,
                    spaceshipName: res.data[0].spaceshipName ,
                    pictures: res.data[0].pictures
                })
                console.log("third page",res);
            })       
    }



    render() {

        return (
            <div className="Return">

                <div className="text">
                    <h1>Welcome Back to Earth {this.state.name}</h1> <br />
                    <h2>Hope you made some amazing memories on your Space Adventure to {this.state.place}</h2><br />
                    <h4>We hope you had a great experience riding {this.state.spaceshipName}</h4><br />
                    <p>CONGRATULATIONS on Completing the Journey :-</p>

                    {
                        this.state.teamMembers.map((data, index) => {
                            return (
                                <div className="teammem" key={index}>
                                    <p>{data}</p>
                                </div>
                            );
                        })
                    }
                

                    <div className="imageShow">

                        {
                            /*----------Rendering Image Data-------- */
                            this.state.pictures.map((data, index) => {
                                return (
                                    <div className="imgBox" key={index}>
                                        <img src={imageGet + data} alt="heloo" className="imageDisplay" />
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
            </div>
        );
    }

}


export default Result;