import React from 'react';
import Paper from '@material-ui/core/Paper';
import DistanceFinder from "./DistanceFinder.jsx"
import { Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosTwoToneIcon from '@material-ui/icons/ArrowBackIosTwoTone';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styled } from '@material-ui/core/styles';


const MyPaper = styled(Paper)({
    
    backgroundImage:'url(./assets/Fairway.jpg)'
  
  });
  
  const MyPaper2 = styled(Paper)({
    background: 'rgb(248,248,255)',
    opacity: ".6"
  
  });
  const MyPaper3 = styled(Paper)({
    background: 'rgb(21, 139, 19)',
    opacity: ".7",
    zIndex:"20"
  
  });

  const StyledButton = styled(Button)({
    background: 'rgb(255, 255, 255)',
    display: "grid",
    gridColumn: "2/4",
    justifyContent: "center",
    gridRow: "8",
    /* width: 100px; */
    height: "30px"

});



class RoundInProgress extends React.Component{

constructor(props){
    super(props);
    this.state = {
       view:"score",
       score:0,
       time:new Date()
      
     }
     this.handleClick = this.handleClick.bind(this);
     this.handleNextHole = this.handleNextHole.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handlePrevious = this.handlePrevious.bind(this);
}
handleNextHole(e){
   
    
        // let oldTally = this.props.round
        // let h=this.props.hole
        // oldTally[this.props.hole] = this.state.score
        // this.props.alterState({"round":oldTally})
        // this.props.alterState({"currentHole": h + 1})
        e.stopPropagation();
        let h = this.props.hole
        let currentRound = this.props.round 
        currentRound[this.props.hole]=this.state.score
        
        this.props.alterState('round',currentRound)
        
        this.props.alterState('currentHole',h+1)
      
        this.setState({'score':0})
        
       
    
}
handlePrevious(e){
    e.stopPropagation();
   let h = this.props.hole
   
    this.setState({'score':0})
    this.props.alterState('currentHole',h-1)
}
handleClick(e,direction="up"){
    if(direction === 'up'){
        e.stopPropagation
    this.setState({'score':this.state.score + 1})
    }else{
        if(this.state.score!==0){
        this.setState({'score':this.state.score -1})
        }
    }
   
    
}
handleSubmit(e){
    e.stopPropagation();
    
    let currentRound = this.props.round 
    currentRound[this.props.hole]=this.state.score
    this.props.alterState('round',currentRound)
    
    
    this.props.alterState("view","results");
   }
   componentDidMount(){
     console.log(this.state.time[0])
   }
render(){
    return <MyPaper elevation={3} className="holeScorerBin" > 
    <div>
         <div className='scoreSelectorGrid'>
         <DistanceFinder/>
        <h1 className="holeTitle">Hole {this.props.hole}</h1>
        {this.props.hole !== 1 ? <div className='previousButton' ><ArrowBackIosTwoToneIcon onClick={this.handlePrevious}></ArrowBackIosTwoToneIcon></div>:null}
       {this.props.hole !==(this.props.holes18 ? 18 : 9)? <div className='nextButton' onClick={this.handleNextHole}>
        
        <ArrowForwardIosIcon ></ArrowForwardIosIcon> </div> : <div  className = "submit" onClick ={this.handleSubmit}><StyledButton>Submit Round</StyledButton></div>}
        
        <MyPaper2 elevation={3} className="scorePicker">
       
        </MyPaper2>
        <MyPaper3 elevation ={1} className = "scorer"></MyPaper3>
        <div className="increaseScore"  onClick ={this.handleClick}>
        <ExpandLessIcon></ExpandLessIcon>
        </div>
        <div className="decreaseScore" onClick ={(e)=>this.handleClick(e,'down')}>
       {this.state.score!==0? <ExpandMoreIcon></ExpandMoreIcon>:null}
        </div> 
        <div className="scoreView">{this.state.score}</div>
        
       
        
   
      

</div>
</div>
</MyPaper>
}
}

export default RoundInProgress;