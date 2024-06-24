import React from "react";
import styles from "../screen.module.css";

export class Settings extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.setOptions(["home"])
    }
    componentWillUnmount(){
        this.props.setOptions(["cover", "music", "games", "settings", "home"]);
        
    }
    render(){
        return <>
            <div className={styles.settingsWallpaper}>
                <h3 className={styles.Heading}>Settings</h3>
            </div>
        </>
    }
}

