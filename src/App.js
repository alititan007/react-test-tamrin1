import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Timer from './timer';
import Hi from './well';

class Appl extends React.Component{
    render(){
        return(
            <div className="well">
                <Hi/>
                <Timer/>
            </div>
        )
    }
}
export default Appl;