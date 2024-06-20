import React from "react";
import styles from "../screen.module.css"
export class Home extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const {menuPos}=this.props;
        return (
            <>
                <div className={styles.menu}>
                    <h3 className={styles.h3}>iPod.js</h3>
                    <ul className={styles.ul}>
                        <li className={menuPos==0?styles.selected:""}>Cover Flow</li>
                        <li className={menuPos==1?styles.selected:""}>Music</li>
                        <li className={menuPos==2?styles.selected:""}>Games</li>
                        <li className={menuPos==3?styles.selected:""}>Settings</li>
                    </ul>
                </div>
                <div className={styles.wallpaper}>

                </div>
            </>
        )
    }
}