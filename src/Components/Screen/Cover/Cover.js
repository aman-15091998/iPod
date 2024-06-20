import React from "react";
import styles from "../screen.module.css";

export class Cover extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
            <h3 className={styles.coverHeading}>Cover Flow</h3>
        </>
    }
}

