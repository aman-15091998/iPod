import React from "react";
import { Home } from "./Home/Home";
import styles from "./screen.module.css"
import { Cover } from "./Cover/Cover";
import { Games } from "./Games/Games";
import { Music } from "./Music/Music";
import { Settings } from "./Settings/Settings";
export class Screen extends React.Component{
    constructor(props){
        super(props);
    }
    // Switching the screen based on currentScreen property
    render(){
        const {currentScreen, setOptions, menuPos}=this.props;
        return (
            <>
                <div className={styles.screen}>    
                    {currentScreen=="home"?(<Home menuPos={menuPos }/>):
                    (currentScreen=="cover"?(<Cover setOptions={setOptions}/>):(currentScreen=="games"?(<Games setOptions={setOptions}/>):
                    (currentScreen=="settings"?(<Settings setOptions={setOptions}/>):(<Music menuPos={menuPos} setOptions={setOptions} currentScreen={currentScreen}/>))))}
                </div>
            </>
        )
    }
}