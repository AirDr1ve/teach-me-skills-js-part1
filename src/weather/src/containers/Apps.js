import React, { Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { listFetchData } from '../actions/list';

class Apps extends Component {

  componentDidMount() {
    this.props.fetchData("http://api.openweathermap.org/data/2.5/forecast?q=Minsk&units=metric&appid=098d31524ed06d295f000b1488178b09")
  };
render(){
  return (
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
  );
}
}

const mapStateToProps = state => {
  return {
    list: state.list
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(listFetchData(url))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Apps);
