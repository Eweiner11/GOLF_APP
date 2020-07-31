import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const MyPaper = styled(Paper)({
    background: 'rgb(21, 139, 19)',
  
  });
  const StyledButton = styled(Button)({
    background: 'rgb(255, 255, 255)'
});



class RoundInProgress extends React.Component{

constructor(props){
    super(props);
    this.state = {
       view:"score",
       score:''
     }
     this.handleClick = this.handleClick.bind(this);
     this.handleNextHole = this.handleNextHole.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
}
handleNextHole(){
    let limit = this.props.holes18 ? 18 : 9
   
    if(this.props.hole !== limit){
        let holeResult = {
            hole:this.props.hole,
            score: this.state.score
        }
     
     this.props.round.push(holeResult)
        
        this.props.alterState('currentHole',this.props.hole+1)
        this.setState({"score":''})
    }
}
handleClick(value){
    this.setState({'score':value})
    
}
handleSubmit(){
    let holeResult = {
        hole:this.props.hole,
        score: this.state.score
    }
    this.props.round.push(holeResult)

    this.props.alterState("view","results");
}
render(){
    return <MyPaper elevation={3} className="paperBin" > <div>
        <h1>Hole {this.props.hole}</h1>
       
<p>SELECT YOUR SCORE: {this.state.score}</p>
        <div id='scoreSelector'>
        <div className="scoreSelection1" onClick={()=>this.handleClick(1)}>1</div>
        <div className="scoreSelection2" onClick={()=>this.handleClick(2)}>2</div>
        <div className="scoreSelection3" onClick={()=>this.handleClick(3)}>3</div>
        <div className="scoreSelection4" onClick={()=>this.handleClick(4)}>4</div>
        <div className="scoreSelection5" onClick={()=>this.handleClick(5)}>5</div>
        <div className="scoreSelection6" onClick={()=>this.handleClick(6)}>6</div>
        <div className="scoreSelection7" onClick={()=>this.handleClick(7)}>7</div>
        <div className="scoreSelection8" onClick={()=>this.handleClick(8)}>8</div>
        <div className="scoreSelection9" onClick={()=>this.handleClick(9)}>9</div>
        </div>
      
    
<div>

{(this.props.holes18 ? 18 : 9) !== this.props.hole ?<StyledButton onClick = {this.handleNextHole}>Next Hole</StyledButton>:null}
{(this.props.holes18 ? 18 : 9) === this.props.hole ?<StyledButton onClick = {this.handleSubmit}>Submit</StyledButton>:null}
</div>
</div>
</MyPaper>
}
}

export default RoundInProgress;