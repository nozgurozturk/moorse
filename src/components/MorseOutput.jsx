import React, {Component} from 'react';
import paper from "paper";

class MorseOutput extends Component {
    
render(){
    return(
        <div className="outputs">
        <div className="uk-container">
        <h1>{this.props.codes}</h1>
        </div>
        </div>
    )
}

}

export default MorseOutput;