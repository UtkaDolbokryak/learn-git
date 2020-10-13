import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLetterNumber: 0,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
  }

  keyPressHandler({ key }) {
    if (key === this.state.text.substr(this.state.currentLetterNumber, 1)) {
      this.setState({
        currentLetterNumber: this.state.currentLetterNumber + 1,
      });
    }
    console.log(key);
  }

  componentDidMount() {
    document.onkeypress = this.keyPressHandler.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="text">
          <span className="completed">
            {this.state.text.substr(0, this.state.currentLetterNumber)}
          </span>
          <span className="uncompleted">
            {this.state.text.substr(this.state.currentLetterNumber)}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
