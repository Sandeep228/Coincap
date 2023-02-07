import React, { Component } from "react";
import "./Tableheader.css";
export default class Tableheader extends Component {
  state = {
    intial: false,
  };
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => {
      return {
        intial: !prevState.intial,
      };
    });
  }
  render() {
    return (
      <div className="table-header-container">
        <section className="currency-info-header">
          <ul className="currency-info-lists">
            <li className="currency-info currency-info-list">
              <p className="info-name">MARKET CAP</p>
              <p className="info-value">$1.13t</p>
            </li>
            <li className=" currency-info-list">
              <p className="info-name">EXCHANGE VOL</p>
              <p className="info-value">$48.58b</p>
            </li>
            <li className=" currency-info-list">
              <p className="info-name">ASSETS</p>
              <p className="info-value">2,295</p>
            </li>
            <li className="currency-info-list">
              <p className="info-name">EXCHANGES</p>
              <p className="info-value">73</p>
            </li>
            <li className=" currency-info-list">
              <p className="info-name">MARKETS</p>
              <p className="info-value">12,835</p>
            </li>
            <li className="currency-info-list">
              <p className="info-name">BTC DOM INDEX</p>
              <p className="info-value">37.2%</p>
            </li>
          </ul>
        </section>

        <div className="dropdown-header">
          <p onClick={this.handleToggle}>Market Snapshot</p>
          {this.state.intial === true && (
            <>
              <div className="l-item">
                <span className="name">MARKET CAP</span>
                <span className="value">$1.13t</span>
              </div>
              <hr className="horizontal" />
              <div className="l-item">
                <span className="name">EXCHANGE VOL</span>
                <span className="value">$48.56b</span>
              </div>
              <hr className="horizontal" />
              <div className="l-item">
                <span className="name">ASSETS</span>
                <span className="value">2,268</span>
              </div>
              <hr className="horizontal" />
              <div className="l-item">
                <span className="name">EXCHANGE</span>
                <span className="value">73</span>
              </div>
              <hr className="horizontal" />
              <div className="l-item">
                <span className="name">MARKETs</span>
                <span className="value">12882</span>
              </div>
              <hr className="horizontal" />
              <div className="l-item">
                <span className="name">BTC DOM INDEX</span>
                <span className="value">37.3%</span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
