import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="vsy">
        <div className="Slova">
          <p>
            <h1>Откуда мемы лучше</h1>
          </p>
        </div>

        <p>
          <button
            onClick={() => {
              document.location.href =
                "http://risovach.ru/upload/2014/03/mem/putin_46200719_orig_.jpg";
            }}
            className="Tik"
          >
            <p className="odin">Тик-</p>
            <p className="dva">ток</p>
          </button>
          <button
            onClick={() => {
              document.location.href =
                "https://risovach.ru/upload/2015/12/mem/putin_100431093_orig_.jpg";
            }}
            className="vk"
          >
            <h4>vk</h4>
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
