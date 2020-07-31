import React from "react";
import RoundInProgress from './RoundInProgress.jsx'
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

const MyPaper = styled(Paper)({
    background: 'rgb(21, 139, 19)',
  
  });
  const StyledButton = styled(Button)({
    background: 'rgb(255, 255, 255)'
});

class RoundSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holes18: true,
      holes9: false,
      currentHole: 1,
      round: [],
      view: "round setup",
    };

    this.alterState = this.alterState.bind(this);
    this.toggleHole18 = this.toggleHole18.bind(this);
    this.toggleHole9 = this.toggleHole9.bind(this);
    this.renderView.bind(this);
  }
  toggleHole18() {
    this.setState({ holes18: !this.state.holes18 });
    this.setState({ holes9: !this.state.holes9 });
  }
  toggleHole9() {
    this.setState({ holes9: !this.state.holes9 });
    this.setState({ holes18: !this.state.holes18 });
  }

  alterState(key, value) {
    this.setState({ [key]: value },()=>console.log(this.state));
  }
  renderView() {
    if (this.state.view === "round setup") {
      return (
        <MyPaper elevation={3} className="paperBin" >
          <div className = "roundSetupGrid">
          <div className= "roundSetupContainer">
            <h4 className ="roundSetupTitle">ROUND SETUP</h4>
          </div>
          <div className="playerSelectTitle"># OF PLAYERS</div>
          <div className="holesSelectTitle"># OF HOLES</div>
          <div className="courseSelectTitle">SELECT COURSE</div>
          {/* <form>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="holes18"
                  checked={this.state.holes18}
                  onChange={this.toggleHole18}
                />
                18 holes
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="holes9"
                  checked={this.state.holes9}
                  onChange={this.toggleHole9}
                />
                9 holes
              </label>
            </div>
          </form>

          <StyledButton variant="outlined" onClick={() => this.setState({ view: "Round In Progress" })}>
            Start Round
          </StyledButton> */}
          </div>
          </MyPaper>
      );
    } else if (this.state.view === "Round In Progress") {
      return  <RoundInProgress alterState={this.alterState} hole ={this.state.currentHole} round ={this.state.round} holes18 ={this.state.holes18}/>; // give props this.state.round this.state.hole this.state.alterState
    }else{
      let score=0;
      return <div>
       { 
       this.state.round.map(item =>{
         score+=item.score
        return <div>{`hole: ${item.hole} Score:${item.score}`}</div>
       })}
       <div>{`You shot a ${score}`}</div>
      </div>
    }
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}

export default RoundSetup;
