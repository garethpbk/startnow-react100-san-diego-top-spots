import React, { Component } from "react";
import axios from "axios";
import TopSpot from "./topspot";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "San Diego Top Spots",
      subtitle: "A list of the top 30 places to see in San Diego, California.",
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="card p-4 mt-4">
            <h1>{this.state.title}</h1>
            <p>{this.state.subtitle}</p>
          </div>

          {this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
