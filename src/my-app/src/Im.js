import React, {Component} from 'react';


class Im extends Component {
constructor(props){
    super(props);
    this.state = {
        fontSize: ""
    };
    this.updateInput = this.updateInput.bind(this);
    
}
updateInput(event){
    this.setState({fontSize: event.target.value})
}

render(){
    return(
        <div>
            <h3  style={{fontSize: this.state.fontSize+"px"}}>Im</h3>
            <input type ='text' onKeyUp={this.updateInput}></input>
        </div>
    );
};
};

export default Im