import React from "react";
import styles from "../../screen.module.css";

export class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {menuPos}=this.props;
        return (
            <>
                <div className={styles.musicMenu}>
                    <h3 className={styles.h3}>Music</h3>
                    <ul className={styles.ul}>
                        <li className={menuPos==0?styles.selected:""}>All Songs</li>
                        <li className={menuPos==1?styles.selected:""}>Artists</li>
                        <li className={menuPos==2?styles.selected:""}>Albums</li>
                    </ul>
                </div>
                <div className={styles.musicWallpaper}>

                </div>
            </>
        )
    }
}

