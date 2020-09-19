import React from 'react';

// class Counter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }
//     updateData = (value) => {
//       this.setState({ name: value })
//    }
  
//     render() {
//       return (
//         <div>
          
//           <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//             - 1
//           </button>
//           <p>Вы кликнули {this.state.count} раз(а)</p>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             + 1
//           </button>
//         </div>
//       );
//     }
//   }


//   import React from 'react';


class ChildComponentPlus extends React.Component {
  state = {
    count: ""
  }

  render() {
    return (
    <div>
        <button onClick={() => { this.props.updateData(this.state.count )}}>+ 1</button>
    </div>
    )
  }
}

class ChildComponentMinus extends React.Component {
  state = {
    count: ""
  }

  render() {
    return (
    <div>
        <button onClick={() => { this.props.updateData(this.state.count)}}>- 1</button>
    </div>
    )
  }
}


class ParentComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    count: 0
  }
  
  };

  updateData = (value) => {
    this.setState({ count: value })
  }

  render() {
    return (
      <div>
        <ChildComponentMinus updateData={this.updateData} />
        <p>State: {this.state.count}</p>
        <ChildComponentPlus updateData={this.updateData} />
      </div>
    )
  }
}


export default ParentComponent