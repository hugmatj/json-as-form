import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import JSONForm from "../src/index";

const App = () => {
  let JSONState = [
    {
      key: "name",
      value: "Nishchit",
      type: "string"
    },
    {
      key: "file",
      value: "",
      type: "file"
    }
  ];

  let JSONObj = {
    name: "Nishchit"
  };
  let [state, setState] = useState(JSONState);

  return (
    <div>
      <pre>{JSON.stringify(state, 4, 4)}</pre>
      <JSONForm
        json={state}
        fixedKeys={[]}
        debug={false}
        autoAddRow={false}
        onChange={v => {
          console.log(v);
          setState(v);
        }}
        rowInterpolator={row => {
          console.log("row interpolator", row);
          if (row.value == "Dhanani") row.value = "Firecamp";
          return row;
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
