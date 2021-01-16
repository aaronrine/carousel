import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([1, 2, 3]);
  const [classes, setClasses] = useState("");
  return (
    <>
      <div className="App">
        <div className="box-container">
          {data.map((box, i) => (
            <>
              <div
                key={box}
                className={`box ${i === 0 ? "prev" : ""} ${
                  i === 1 ? `active` : ""
                } ${i === 2 ? `next` : ""} ${classes}`}
              >
                {box}
              </div>
            </>
          ))}
        </div>
        <button
          onClick={() => {
            const newData = [...data];
            const first = newData.shift();
            newData.push(first);
            setData(newData);
            setClasses("left");
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            const newData = [...data];
            newData.unshift(newData.pop());
            setData(newData);
            setClasses("right");
          }}
        >
          next
        </button>
      </div>
    </>
  );
}

export default App;
