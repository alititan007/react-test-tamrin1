import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

var inter;
class Timer extends React.Component{
    constructor(){
        super()
        this.state = {
            Second : 8,
            minute ,
            hour : 0
        }
    }
    componentDidMount(){
        inter = setInterval(()=>{
            if(this.state.Second > 0){
                this.setState({
                Second : this.state.Second -1
                })
                if(this.state.Second === 0){
                    this.setState({
                        minute : this.state.minute -1
                        //Second : 8
                    })
                }
            }
        } , 1000)
    }
    componentDidUpdate(){
        if(this.state === 0){
            clearInterval(inter);  
        }
    }
    render(){
        return(
            <h2 className="timer">
                it is {this.state.hour}:{this.state.minute}:{this.state.Second}
            </h2>
        )
    }
}
export default Timer;