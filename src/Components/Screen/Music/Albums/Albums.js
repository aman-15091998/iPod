import React from "react";
import styles from "../../screen.module.css";

export class Albums extends React.Component{
    constructor(props){
        super(props);
    }   
    componentDidMount(){
        this.props.setOptions(["menu"])
    }
    componentWillUnmount(){
        this.props.setOptions(["all_songs", "artists", "albums", "home"]);
        
    }
    render(){
        return <>
            <h3 className={styles.coverHeading}>Albums</h3>
        </>
    }
}

