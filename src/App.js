import React, { Component,Fragment } from 'react';
import Search from "./Components/search.jsx";
import api from "./Api/UnsplashApi.jsx";
import "./index.css";
import axios from "axios";
import ImageList from "./Components/ImageList.jsx"

class App extends Component {
    constructor(){
        super()
        this.state={
            Images:[],
        }
        this.handelSubmit=this.handelSubmit.bind(this);
    }
   async handelSubmit(term){
       let reasponce=await api.get("/search/photos",
       {
           params:{
            query:term
           }
       })
    //    console.log(reasponce.data.results)
    this.setState({
        Images:reasponce.data.results
    })
    }
    render() {
        // console.log(this.state.Images)
        return (
            <Fragment>
               <Search submit={this.handelSubmit}/>
               <div className="ImageBlock">
               <ImageList ListOfImages={this.state.Images}/>
                </div>
              
            </Fragment>
        )
    }
}
export default App;