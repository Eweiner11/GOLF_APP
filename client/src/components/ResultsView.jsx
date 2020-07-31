import React from 'react';
import Paper from '@material-ui/core/Paper';



import distanceConverter from '../../helpers/scoreCalculator.js';
import scoreCalculator from '../../helpers/scoreCalculator.js';
import { styled } from '@material-ui/core/styles';
const MyPaperResults = styled(Paper)({
    height:"150px",
    width:'150px',
    background: 'rgb(21, 139, 19)',
    borderRadius:"75px"
  
  });

class ResultsView  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            totalScore:0,
            
        }
        this.calculateScore =this.calculateScore.bind(this);
    }
    calculateScore(){
     return scoreCalculator(this.props.round)
    }
    componentDidMount(){
       
    }
    render(){
      return ( <div className = "resultsGrid" >
        <h4 className='resultsTitle'>ROUND OVERVIEW</h4>
        <div className= "finalScore">
      <MyPaperResults ></MyPaperResults>
      </div>
      <div className="finalScoreResults">{this.calculateScore(this.props.round)}</div>
       
    {/* {props.results} */}
    </div>
      )

    }
}







export default ResultsView;