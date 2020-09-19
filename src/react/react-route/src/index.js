import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    users : []
  };
}

handleClick() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(results => {
    return results.json();
  })
  .then(data => {
    let users = data.map((user) => {
      console.log(user.id, user.title);
      return (
        <li key={user.id}>{user.title}</li>
      );
    });
    .then(data => this.setState({ data }));
  })
  .catch(function(error) {
    console.log(error);
  });
}

render(){
    return (
      <div>
        <button onClick={this.handleClick}>Get All Users</button>
        {this.state.users.length > 0 &&
          <ul>
            {this.state.users}
          </ul>
        }
      </div>
    );
  }
}

ReactDOM.render(<Button />, document.getElementById("root"));