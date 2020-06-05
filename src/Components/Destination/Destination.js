import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './Destination.css';


class Destination extends Component{

    componentDidMount(){
        swal("Your Destination Has Arrived", "Click OK to Make some Memories");
    }

    state = {
        pictures: ""
    }

    handleImageSelection = (e) =>{
        this.setState({ pictures: e.target.files[0]})
    }


    handleImageUpload = (e) => {

        const image = new FormData();
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };
        image.append('file',this.state.pictures,this.state.pictures.name);
        axios.post('https://meetgreet-upload.herokuapp.com/upload',image,config).then(res =>{
            console.log(res);
        })
    }



    handleClick = (e) => {
        this.props.history.push("/Return");
    }

    
    
    
    render(){
        console.log(this.state.pictures);
        return(
            <div className="Destination">
                <div className="imageContainer">
                    <input type="file" onChange = {this.handleImageSelection}/>
                    <button onClick = {this.handleImageUpload}> Upload </button>

                                {/*-------------FOOTER------------- */}

                        <button className="butclass" onClick={this.handleClick}>It's Time To Go Home!! :( </button>        


                </div>
            </div>
        );
    }
}


export default Destination;
