import React from "react";
import styles from "../../screen.module.css";

export class Artists extends React.Component{
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
            <h3 className={styles.coverHeading}>Artists</h3>
        </>
    }
}

