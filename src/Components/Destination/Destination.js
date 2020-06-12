import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './Destination.css';


class Destination extends Component{

    componentDidMount(){
        swal ("Your Destination Has Arrived", "Click OK to Make some Memories");
        const id = localStorage.getItem('id');
        this.setState({id: id});

        
    }

    state = {

        imgUrl:'https://meetgreet-upload.herokuapp.com/images/',
        id: "",

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
            
        image.append('file',this.state.imgAdd,this.state.imgAdd.name);
        axios.post('https://meetgreet-upload.herokuapp.com/upload',image,config).then(res =>{
            
            this.setState({ imgData: res.data })            
                console.log(res.data)
            /*-------To add imgData in into array */
                const pictures = this.state.pictures;
                pictures.push(this.state.imgData);
                this.setState({ pictures: pictures })
        })
        .catch(err =>{
            console.log(err);
        })

    }

    handleClick = (e) => {

        const imgSend=  { pictures: this.state.pictures};
        console.log(imgSend);
           /*--------update data pictures into database------------ */
            axios.put('https://api-space-explorer.herokuapp.com/api/astronauts/'+this.state.id, imgSend)


            .then(res =>{
                console.log(res);
                window.location.reload(res);
            })
            .catch(err =>{
                console.log(err);
            })  

        this.props.history.push("/Return");
        
    }

    
    
    
    render(){
        
        return(
            <div className="Destination">

                <div className="imageContainer">

                <h2>Lets Make some memories...</h2>
                    
                    <input type="file" onChange = {this.handleImageSelection}/>
                    <button className="upload" onClick = {this.handleImageUpload}> Upload </button>

                    <div className="imgShow">
                        {
                /*----------Rendering Image Data-------- */
                            this.state.pictures.map((data,index) =>{
                                const imgGetUrl = this.state.imgUrl + data;
                                return(

                                    <div className="imageBox" key={index}>
                                        <img src={imgGetUrl} alt="hello" className="imgDisplay"/>

                                    </div>
                                );
                            })
                        }
                    </div>

                    {/*-------------FOOTER------------- */}

                    <div className="footer">
                        <button className="btn-first1" onClick={this.handleClick}>It's Time To Go Home </button>        

                    </div>


                </div>
            </div>
        );
    }
}


export default Destination;
