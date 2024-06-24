import React from "react";
import styles from "../screen.module.css";

export class Games extends React.Component{
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
            <div className={styles.gameWallpaper}>
            <h3 className={styles.Heading}>Games</h3>
            </div>
        </>
    }
}

