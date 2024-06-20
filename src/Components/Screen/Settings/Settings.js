import React from "react";
import styles from "../screen.module.css";

export class Settings extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
            <div className={styles.settingsWallpaper}>
                <h3 className={styles.Heading}>Settings</h3>
            </div>
        </>
    }
}

