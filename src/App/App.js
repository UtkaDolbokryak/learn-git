import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLetterNumber: 0,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      beginTime: null,
      endTime: null,
    };
  }

  keyPressHandler({ key }) {
    if (!this.state.beginTime) {
      this.setState({
        beginTime: performance.now(),
      });
    }
    if (key === this.state.text.substr(this.state.currentLetterNumber, 1)) {
      if (this.state.currentLetterNumber === this.state.text.length - 1) {
        this.setState({
          endTime: performance.now(),
          currentLetterNumber: this.state.currentLetterNumber + 1,
        });
      } else {
        this.setState({
          currentLetterNumber: this.state.currentLetterNumber + 1,
        });
      }
    }
    console.log(key);
  }

  componentDidMount() {
    document.onkeypress = this.keyPressHandler.bind(this);
  }

  render() {
    let getChar = () => {
      return this.state.text.substr(this.state.currentLetterNumber, 1);
    };

    return (
      <div className="App">
        <div className="text">
          <span className="completed">
            {this.state.text.substr(0, this.state.currentLetterNumber)}
          </span>
          <span className="underlined">{getChar()}</span>
          <span className="uncompleted">
            {this.state.text.substr(this.state.currentLetterNumber + 1)}
          </span>
        </div>
        <div>{this.state.beginTime}</div>
        <div>{this.state.endTime}</div>

        {this.state.endTime ? (
          <>
            <div>
              {`Вы ввели весь текст за ${Math.round(
                (this.state.endTime - this.state.beginTime) / 1000
              )}
              сек.`}
            </div>
            <input
              type="button"
              value="Начать заново"
              onClick={() => {
                this.setState({
                  currentLetterNumber: 0,
                  beginTime: null,
                  endTime: null,
                });
              }}
            />
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
