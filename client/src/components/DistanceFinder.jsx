import React from "react"
import { Button } from '@material-ui/core';

import distanceConverter from "./../../helpers/distanceConverter.js"

class DistanceFinder extends React.Component{
    constructor(props){
        super(props)
        this.state={
            shotStart:[],
            shotEnd:[],
            start:true
            
        }
        this.showPosition=this.showPosition.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }
    
showPosition(position) {
   if(this.state.start===true){
       this.setState({'shotStart':[position.coords.latitude,position.coords.longitude]},()=>{
        this.setState({'start':false})
       })
   }else{
    this.setState({'shotEnd':[position.coords.latitude,position.coords.longitude]},()=>{
        this.setState({'start':true}, ()=> {

            console.log(distanceConverter(this.state.shotStart[0],this.state.shotStart[1],this.state.shotEnd[0],this.state.shotEnd[1]))
        })
    })
   }
  }
  getLocation() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
     
    } else {
     Window.alert( "Geolocation is not supported by this browser.");
    }
  }
  
    render(){
      return  <div>
            <h4>{ this.state.start ? "Mark Where You're Shot was hit":"Mark Where You're Shot Landed"}</h4>
        <Button  variant="outlined" onClick = {()=>this.getLocation()} >{ this.state.start ? "Mark Shot Start":"Mark Shot End"}</Button>
        </div>
    }
}
export default DistanceFinder;