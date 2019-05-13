import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import { calEmAl } from "./reqs.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: "",
      hum: "",
      hygr: "",
      time: new Date().toLocaleString(),
      checked: false,
      led: "OFF"
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.reseter(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  reseter() {
    this.setState({
      time: new Date().toLocaleString()
    });
    const cl = calEmAl.bind(this);
    cl();
  }

  render() {
    return (
      <div className="parent">
        <h1 className="hf">Gardening sensors data</h1>

        <div className="box">
          <p>Humidity: {this.state.hum}% </p>
          <p>Temperature: {this.state.temp}&#8451; </p>
          <p>Soil Hygrometer: {this.state.hygr} </p>
          Time: {this.state.time}
        </div>
      </div>
    );
  }
}

export default App;
