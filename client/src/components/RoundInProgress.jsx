import React from 'react';


class RoundInProgress extends React.Component{

constructor(props){
    super(props);
    this.state = {
       view:"score",
       score:0
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
        this.setState({"score":0})
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
    return <div>
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
{(this.props.holes18 ? 18 : 9) !== this.props.hole ?<button onClick = {this.handleNextHole}>Next Hole</button>:null}
{(this.props.holes18 ? 18 : 9) === this.props.hole ?<button onClick = {this.handleSubmit}>Submit</button>:null}
</div>
</div>
}
}

export default RoundInProgress;