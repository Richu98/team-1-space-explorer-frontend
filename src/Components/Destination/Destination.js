import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './Destination.css';


class Destination extends Component{

    componentDidMount(){
        swal("Your Destination Has Arrived", "Click OK to Make some Memories");
    }

    state = {
        imgUrl :'https://meetgreet-upload.herokuapp.com/images/',
        pictures: []
    }

    handleImageSelection = (e) =>{
        this.setState({ imgAdd: e.target.files[0]})
    }


    handleImageUpload = (e) => {

        /*----------for uploading an image--------- */

        const image = new FormData();
        const config = {
            headers: { 'content-type': 'multipart/form-data' } };
        console.log(this.state.imgAdd);    
        image.append('file',this.state.imgAdd,this.state.imgAdd.name);
        axios.post('https://meetgreet-upload.herokuapp.com/upload',image,config).then(res =>{
            this.setState({
                imgData: res.data,
            })
        })
        .catch(err =>{
            console.log(err);
        })
        /*-------To add imgData in into array */


        const pictures = this.state.pictures;
        pictures.push(this.state.imgData);

        this.setState({pictures: pictures})
        
        /*---------------------------------- */
        console.log(this.state);
        
        console.log(this.state.pictures);

    }



    handleClick = (e) => {
        console.log(this.state);
        
        axios.post('https://api-space-explorer.herokuapp.com/api/astronauts',this.state.pictures)
        .then(res =>{
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
        this.props.history.push("/Return");
        
    }

    
    
    
    render(){
        
        return(
            <div className="Destination">
                <h2>Lets Make some memories...</h2>

                <div className="imageContainer">
                    
                    <input type="file" onChange = {this.handleImageSelection}/>
                    <button className="upload" onClick = {this.handleImageUpload}> Upload </button>
                    <div>
                        {
                            this.state.pictures.map((data,index) =>{
                                const imgGetUrl = this.state.imgUrl + data;
                                return(
                                    <div key={index}>
                                        <img src={imgGetUrl} alt="hello" />
                                    </div>
                                );
                            })
                        }
                    </div>

                    {/*-------------FOOTER------------- */}

                        <button className="butClass" onClick={this.handleClick}>It's Time To Go Home!! :( </button>        


                </div>
            </div>
        );
    }
}


export default Destination;
