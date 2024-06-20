import React from "react";
import styles from "../screen.module.css";
import { Menu } from "./Menu/Menu";
import { Allsongs } from "./Allsongs/Allsongs";
import { Albums } from "./Albums/Albums";
import { Artists } from "./Artists/Artists";
export class Music extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.setOptions(["all_songs", "artists", "albums", "home"]);
    }
    componentWillUnmount(){
        this.props.setOptions(["cover", "music", "games", "settings", "home"]);
    }
    render(){
        const {menuPos, currentScreen, setOptions}=this.props;
        return (
            <>  {currentScreen=="all_songs"?(<Allsongs setOptions={setOptions}/>):(currentScreen=="artists"?(<Artists setOptions={setOptions}/>):(
                currentScreen=="albums"?(<Albums setOptions={setOptions}/>):(<Menu menuPos={menuPos} setOptions={this.props.setOptions}/>)
            ))}
            </>
        )
    }
}

