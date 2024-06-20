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

    render(){
        const {currentScreen, setOptions, menuPos, changeScreen}=this.props;
        return (
            <>
                <div className={styles.screen}>
                    {currentScreen=="home"?(<Home menuPos={menuPos}/>):
                    (currentScreen=="cover"?(<Cover />):(currentScreen=="games"?(<Games/>):
                    (currentScreen=="settings"?(<Settings/>):(<Music menuPos={menuPos} setOptions={setOptions} currentScreen={currentScreen}/>))))}
                </div>
            </>
        )
    }
}