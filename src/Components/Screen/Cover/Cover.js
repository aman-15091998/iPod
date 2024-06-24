import React from "react";
import styles from "../screen.module.css";

export class Cover extends React.Component{
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
            <h3 className={styles.coverHeading}>Cover Flow</h3>
        </>
    }
}

