import React, {Compoment} from 'react';

// function Name(props){
//     return(
//         <div>
//             <p>Name {props.name}</p>
//         </div>
//     )
// }

class Name extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "Name",
            color: "black",
        };
    };

    setColor = () => {
        this.setState({
            color: "red",
        });
    };

    render(){
        return (
            <>
            <h3 style={{color: this.state.color}}>{this.state.text}</h3>
            <button onClick={this.setColor}>Need more RED!</button>
            </>
        );
    };
};



export default Name