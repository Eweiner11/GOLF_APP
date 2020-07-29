import React from "react"
import WelcomeScreen from "./WelcomeScreen.jsx"
import RoundSetup from "./RoundSetup.jsx"


class App extends React.Component {
constructor(props){
    super(props);
    this.state={
        view:'welcome screen'
    }
    this.renderView=this.renderView.bind(this);
    this.changeView= this.changeView.bind(this);

}
renderView(){
   if(this.state.view==="welcome screen"){
       return <WelcomeScreen changeView = {this.changeView}/>
   }else if( this.state.view = "round setup"){
       return <RoundSetup/>
   }
}
changeView(view){
this.setState({'view':view});
}

render(){

    return(
        <div>
        {this.renderView()}
       </div>
    )
}
}

export default App;