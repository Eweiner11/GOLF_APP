import React from "react";
import { Button } from '@material-ui/core';


var WelcomeScreen = (props) =>{

{/* <div> <button onClick = {() =>props.changeView("round setup")}>Play</button></div> */}





return <Button onClick={() => { props.changeView("round setup") }}>PLAY</Button>

}

export default WelcomeScreen;



