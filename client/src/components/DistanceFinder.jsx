import React from "react"
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import distanceConverter from "./../../helpers/distanceConverter.js"


const StyledButton = styled(Button)({
    background: 'rgb(255, 255, 255)',
    
});
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
            window.alert(JSON.stringify(this.state))
            window.alert(` You hit the Ball ${distanceConverter(this.state.shotStart[0],this.state.shotStart[1],this.state.shotEnd[0],this.state.shotEnd[1])} Yards`)
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
      return  <div className = 'distance'>
           
        <StyledButton  variant="outlined" onClick = {()=>this.getLocation()} >{ this.state.start ? "Mark Shot Start":"Mark Shot End"}</StyledButton>
        </div>
    }
}
export default DistanceFinder;