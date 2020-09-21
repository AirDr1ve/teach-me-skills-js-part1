import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { listFetchData } from "../actions/list";

class App extends Component {
  componentDidMount() {
    this.props.fetchData(
      `http://api.openweathermap.org/data/2.5/forecast?q=Minsk&units=metric&appid=098d31524ed06d295f000b1488178b09`
    );
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((list, index) => {
            return (
              <li key={index}>
                <div>{list.dt}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(listFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
