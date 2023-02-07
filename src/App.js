import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./redux/action/GetDataAction";
import Navbar from "./components/navbar/Navbar";
import Tableheader from "./components/Table/table header/Tableheader";
import Tabledata from "./components/Table/table data/Tabledata";
import "./App.css";
export class App extends Component {
  constructor(props) {
    super(props);

    this.props.getDataHandler();
    this.state = {
      data: "upanshu",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.data) {
      return {
        data: props.data,
      };
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Tableheader />
        <Tabledata data={this.state.data} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.main_reducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataHandler: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
