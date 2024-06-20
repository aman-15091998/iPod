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
    handleRoundBtnClick=()=>{
        this.props.changeScreen(this.props.options.length-1);
        this.props.toggleMenuChange();
    }
    componentDidMount(){
        this.controlRef.current.addEventListener("mousedown", (e)=>{
            if(e.target.id=="navigator"){
                let mouseDown=true;
                this.controlRef.current.addEventListener("mousemove", (event)=>{
                   if(event.target.id=="navigator"){
                        if(mouseDown){
                            console.log(event.clientX+" "+event.clientY);
                            this.onXYChange(event.clientX, event.clientY);
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
            if(this.props.allowMenuChange){
                this.props.changeScreen();
                this.props.toggleMenuChange();
            }
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.state.yMap<473){
            if(prevState.xMap<this.state.xMap && (this.state.xMap%15==0)){
                console.log("incremented");
                this.props.incrementSelection(true);
            }
            if(prevState.xMap>this.state.xMap && this.state.xMap%15==0){
                console.log("decremented");
                this.props.incrementSelection(false);
            }
        }
        if(this.state.yMap>473){
            if(prevState.xMap>this.state.xMap && this.state.xMap%15==0){
                // console.log("incremented");
                this.props.incrementSelection(true);
            }
            if(prevState.xMap<this.state.xMap && this.state.xMap%15==0){
                // console.log("decremented");
                this.props.incrementSelection(false);
            }
        }
    }

    render(){
        return (
            <>
                <div className={styles.controls}>
                    <div className={styles.navigator} id="navigator" ref={this.controlRef}>
                    <span className={styles.menuBtn} onClick={this.handleRoundBtnClick}>Menu</span>
                        <div className={styles.roundBtn} ref={this.btnRef}></div>
                    </div>
                </div>
                
            </>
        )
    }
}
