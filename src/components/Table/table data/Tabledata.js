import React, { Component } from "react";
import "./Tabledata.css";
import {
  getCurrencyInDollar,
  getCurrencySystem,
  getPercentChangeIn24Hr,
} from "../../../utils";
export default class Tabledata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      intial: true,
    };

    this.handleMore = this.handleMore.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.data) {
      return {
        data: props.data.data,
      };
    }
    return null;
  }
  handleMore() {
    this.setState((prevState) => {
      return {
        intial: !prevState.intial,
      };
    });
  }

  renderList = () => {
    let len = this.state.data.length;
    let required = [];
    if (this.state.intial === true) {
      required = this.state.data.slice(0, len / 3);
    } else {
      required = this.state.data;
    }

    return required.map((item, index) => {
      return (
        <tr className="currency-info-card" key={index}>
          <td className="th-hidden-mobile-view">{item.rank}</td>
          <td style={{ display: "flex" }}>
            <img
              className="currency-img"
              src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
              alt={item.symbol}
            />
            <p>{item.name}</p>
          </td>
          <td className="th-mobile-view">
            {getCurrencyInDollar(item.priceUsd)}
          </td>
          <td className="th-mobile-view">
            {getCurrencySystem(item.marketCapUsd)}
          </td>
          <td className="th-hidden-mobile-view">
            {getCurrencyInDollar(item.vwap24Hr)}
          </td>
          <td className="th-hidden-mobile-view">
            {getCurrencySystem(item.supply)}
          </td>
          <td className="th-hidden-mobile-view">
            {getCurrencySystem(item.volumeUsd24Hr)}
          </td>
          <td className="th-hidden-mobile-view">
            {getPercentChangeIn24Hr(item.changePercent24Hr)}
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="table-container">
        <table className="data-table">
          <tr>
            <th className="th-hidden-mobile-view">Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th className="th-hidden-mobile-view">VWAP(24hr)</th>
            <th className="th-hidden-mobile-view">Suppy</th>
            <th className="th-hidden-mobile-view">Volume(24hr)</th>
            <th className="th-hidden-mobile-view">Change(24hr)</th>
          </tr>

          {this.renderList()}
        </table>

        <button className="button btn-view-more" onClick={this.handleMore}>
          {this.state.intial === true ? "View More" : "View Less"}
        </button>
      </div>
    );
  }
}
