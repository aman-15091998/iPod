import React, { useState, useReducer } from "react";
import "./App.css";
import styles from "./app.module.css";
import { Screen } from "./Components/Screen/Screen";
import { Controls } from "./Components/Controls/Controls";
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      menuPos:0,
      currentScreen:"home",
      options:["cover", "music", "games", "settings", "home"],
      allowMenuChange:true,
      insideMenu:""
    }
  }
  
  setOptions=(options)=>{
    this.setState({options})
  }
  toggleMenuChange=()=>{
    this.setState({allowMenuChange:(this.state.allowMenuChange==false?(!this.state.allowMenuChange):(this.state.allowMenuChange))});
  }
  changeScreen=(pos=this.state.menuPos)=>{
    switch(pos){
      case 0: this.setState({currentScreen:this.state.options[0]});
      break;
      case 1: this.setState({currentScreen:this.state.options[1]});
      break;
      case 2: this.setState({currentScreen:this.state.options[2]});
      break;
      case 3: this.setState({currentScreen:this.state.options[3]});
      break;
      case 4: this.setState({currentScreen:this.state.options[4]});
      break;
    }
  }
  incrementSelection=(increment)=>{
    if(increment)
      this.setState({menuPos:(this.state.menuPos+1)%(this.state.options.length-1)});
    else
      this.setState({menuPos:(this.state.menuPos-1)<0?(this.state.options.length-2):(this.state.menuPos-1)})
  }
  
  // y=473 mid x=293 mid
  render() {
      return (
      <>
        <h1 className={styles.centerText}>iPod</h1>
        <div className={styles.body}>
          <Screen menuPos={this.state.menuPos} currentScreen={this.state.currentScreen} setOptions={this.setOptions} changeScreen={this.changeScreen} />
          <Controls changeScreen={this.changeScreen} incrementSelection={this.incrementSelection} allowMenuChange={this.state.allowMenuChange} toggleMenuChange={this.toggleMenuChange} options={this.state.options}/>
          <span>{this.state.xMap} {this.state.yMap}</span>
        </div>
      </>
    );
  }
}

export default App;
