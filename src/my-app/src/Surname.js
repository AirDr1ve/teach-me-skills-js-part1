import React from 'react';


export default class Surname extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'black',
            fontSize: '10',
            text: ''
        };

        this.setFz = this.setFz.bind(this)
    };

    setFz = (event) =>{
        this.setState({fontSize: event.target.value})
    };
    setColor = (event) => {
        this.setState({color: event.target.value})
    };
    setText = (event) => {
        this.setState({text: event.target.value})
    }
    setPlus = (event) =>{
        this.setState({fontSize: event.target.value+1})
        console.log(event.target.value);
    }
    render(){
        return(
           
            <div>
                <h3 style={{fontSize: this.state.fontSize + 'px', color: this.state.color}}>{this.state.text}</h3>
                <input type ='text' onChange={this.setText}></input><span> Text</span>
                <br/>
                <input type ='text' onChange={this.setColor}></input><span> Color</span>
                <br/>
                <input type = 'text' onChange={this.setFz}></input><span> Font Size</span>
                <button onClick={this.setPlus}>+1</button>
            </div>

            
        )
    }
    
}