import React from 'react';


class RoundSetup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "holes18":true,
            "holes9":false,
            "currentHole":1,
            "round":[]


        }
        this.alterState=this.alterState.bind(this);
        this.toggleHole18 = this.toggleHole18.bind(this)
        this.toggleHole9 = this.toggleHole9.bind(this)
    }
    toggleHole18(){
        this.setState({'holes18':!this.state.holes18})
        this.setState({'holes9':!this.state.holes9})
      
    }
    toggleHole9(){
        this.setState({'holes9':!this.state.holes9})
        this.setState({'holes18':!this.state.holes18})
    }

    alterState(key,value){
        this.setState({[key]:value})
    }

render(){
  return <form >
    <div className="radio" >
      <label>
        <input type="radio" value="holes18"
           checked={this.state.holes18}
           onChange = {this.toggleHole18}  />
        18 holes
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="holes9"
         checked ={this.state.holes9} 
         onChange = {this.toggleHole9} />
        9 holes
      </label>
    </div>

  </form>
}


}

export default RoundSetup;