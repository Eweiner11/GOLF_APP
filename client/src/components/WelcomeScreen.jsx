import React from "react";
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

const MyPaper = styled(Paper)({
 
  
  });

const StyledButton = styled(Button)({
    background: 'rgb(255, 255, 255)'
});
var WelcomeScreen = (props) =>{




return   <MyPaper  className='paperBin' elevation={3}>
<div className ="welcomeScreenContainer">
<h4 className ="welcomeScreenTitle">GOLF ADDICT</h4>
<StyledButton variant="outlined" className= "playButton" onClick={() => { props.changeView("round setup") }}>PLAY</StyledButton>
</div>
</MyPaper>



}


export default WelcomeScreen;



