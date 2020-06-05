import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './Destination.css';


class Destination extends Component{

    componentDidMount(){
        swal("Your Destination Has Arrived", "Click OK to Make some Memories");
    
    
    state = {
        pictures: ""
    }
    }
    

    handleImageSelection = (e) =>{
        this.setState({ pictures: e.target.files[0] })
    }


    handleImageUpload = (e) => {

        const image = new FormData();
        image.append(this.state.pictures,this.state.pictures.name);
        axios.post('https://meetgreet-upload.herokuapp.com/upload',image).then(res =>{
            console.log(res);
        })
    }


    render(){
        console.log(this.state.pictures);
        return(
            <div className="Destination">
                <div className="imageContainer">
                    <input type="file" onChange = {this.handleImageSelection}/>
                    <button onClick = {this.handleImageUpload}> Upload </button>
                </div>
            </div>
        );
    }
}


export default Destination;
