import React from "react";
import RoundInProgress from "./RoundInProgress.jsx";
import ResultsView from './ResultsView'
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/core/styles";
import PlayerSelector from "./PlayerSelector.jsx";
const StyledButton = styled(Button)({
  background: "rgb(255, 255, 255)",
});
const ResultPaper = styled(Paper)({
  background: "rgb(150,166,60)",
});


class RoundSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holes18: true,
      holes9: false,
      currentHole: 1,
      round: {},
      view: "round setup",
      courses:[{
        name: 'default',
        courseLayout:null

      }],
      selectedCourse:'  default'

    };

    this.alterState = this.alterState.bind(this);
    this.toggleHole18 = this.toggleHole18.bind(this);
    this.toggleHole9 = this.toggleHole9.bind(this);
    this.renderView.bind(this);
  }
  toggleHole18() {
    let alert = this.state.holes18;
    this.setState({ "holes18": true });
    this.setState({"holes9": false }
    );
  }
  toggleHole9() {
    this.setState({ "holes9": true });
    this.setState({ "holes18": false });
  }

  alterState(key, value) {
    this.setState({ [key]: value }, 
     
    );
  }
  renderView() {
    if (this.state.view === "round setup") {
      return (
        <Paper elevation={3} className="roundSetupScreen">
          <div className="roundSetupGrid">
            <div className="roundSetupContainer">
              <h4 className="roundSetupTitle">ROUND SETUP</h4>
            </div>

            <div className="playerSelectTitle">
              <PlayerSelector
                choices={["1"]}
                title="bottom"
                l = "players"
                // toggleHole18={this.toggleHole18}
                // toggleHole9={this.state.holes9}
              />
            </div>
            <div className="holesSelectTitle">
              <PlayerSelector
                choices={["9", "18"]}
               
                title="bottom"
                l = "# OF HOLES"
                toggleHole18={this.toggleHole18}
                toggleHole9={this.toggleHole9}
              />
            </div >
            <div className="teeOffButton">
            <StyledButton  onClick={()=>this.alterState('view','Round In Progress')}>TEE OFF</StyledButton>
            </div>
          </div>
        </Paper>
      );
    } else if (this.state.view === "Round In Progress") {
      return (
        
        <RoundInProgress
          alterState={this.alterState}
          hole={this.state.currentHole}
          round={this.state.round}
          holes18={this.state.holes18}
        />
        
      ); // give props this.state.round this.state.hole this.state.alterState
    } else {
      let score = 0;
      return (
        <ResultPaper elevation={3} className=" roundSetupScreen">
        
        <ResultsView  round ={this.state.round}/>
        </ResultPaper>
        
        
          // {this.state.round.map((item) => {
       
       
        
      );
    }
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}

export default RoundSetup;
