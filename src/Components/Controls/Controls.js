import React from "react";
import styles from "./controls.module.css"
export class Controls extends React.Component{
    constructor(props){
        super(props);
        this.state={
            xMap:null,
            yMap:null,
            xPrev:null,
        }
        this.controlRef=React.createRef();  
        this.btnRef=React.createRef();  
    }
    
    onXYChange=(x, y)=>{
        this.setState({xMap:x, yMap:y});
    }
    menuBtnClick=()=>{
        this.props.changeScreen(this.props.options.length-1); // will set the currentScreen to previous menu
    }
    componentDidMount(){
        this.controlRef.current.addEventListener("mousedown", (e)=>{
            if(e.target.id=="navigator"){
                let mouseDown=true;
                this.controlRef.current.addEventListener("mousemove", (event)=>{
                   if(event.target.id=="navigator"){
                        if(mouseDown){
                            console.log(event.clientX+" "+event.clientY);
                            this.onXYChange(event.clientX, event.clientY);   //updating the x, y  position
                        }
                    }
                })
                this.controlRef.current.addEventListener("mouseup", (ev)=>{
                    mouseDown=false;
                })
            }
        })
        this.btnRef.current.addEventListener("click", (e)=>{
            e.stopPropagation();
            if(this.props.options.length>1){  //if currentScreen has no menu then prevent screen change
                this.props.changeScreen();    //changing the currentScreen on the basis on menu position 
            }
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.options.length>1){   
            if(this.state.yMap<473){     //If the movement is on the upper half of Y axis
                if(prevState.xMap<this.state.xMap && (this.state.xMap%15==0)){
                    // console.log("incremented");             //X axis is increasing, then clockwise movement
                    this.props.incrementSelection(true);
                }
                if(prevState.xMap>this.state.xMap && this.state.xMap%15==0){
                    // console.log("decremented");              //X axis is increasing, then anticlockwise movement
                    this.props.incrementSelection(false);
                }
            }
            if(this.state.yMap>473){ //If the movement is on the lower half of Y axis
                if(prevState.xMap>this.state.xMap && this.state.xMap%15==0){ 
                    // console.log("incremented");              //X axis is decreasing, then clockwise movement
                    this.props.incrementSelection(true);
                }
                if(prevState.xMap<this.state.xMap && this.state.xMap%15==0){
                    // console.log("decremented");              //X axis is increasing, then anticlockwise movement
                    this.props.incrementSelection(false);
                }
            }
        }
    }

    render(){
        return (
            <>
                <div className={styles.controls}>
                    <div className={styles.navigator} id="navigator" ref={this.controlRef}>
                    <span className={styles.menuBtn} onClick={this.menuBtnClick}>Menu</span>
                        <div className={styles.roundBtn} ref={this.btnRef}></div>
                    </div>
                </div>
                
            </>
        )
    }
}
