import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import JSONForm from "../src/index";

const App = () => {
  let JSONState = [
    {
      key: "name",
      value: "json-as-form",
      type: "string"
    },
    {
      key: "file",
      value: "",
      type: "file"
    },
    {
      key: "is OSS?",
      value: false,
      type: "boolean"
    }
  ];

  let JSONObj = {
    // name: "Nishchit"
  };
  let [state, setState] = useState(JSONObj);
  let [jsonArr, setJsonArr] = useState(JSONState);

  return (
    <div>
      <h4>Stateless Form</h4>
      <JSONForm
        json={state}
        fixedKeys={[]}
        debug={false}
        autoAddRow={true}
        detach={false}
        onChange={v => {
          // console.log(v);
          setState(v);
        }}
        rowInterpolator={row => {
          console.log("row interpolator", row);
          if (row.value == "Dhanani") row.value = "Firecamp";
          return row;
        }}
      />
      <pre>{JSON.stringify(state, 4, 4)}</pre>

      <br />
      <br />
      <br />
      <h4>Statefull Form</h4>
      <JSONForm
        json={jsonArr}
        fixedKeys={[]}
        debug={false}
        detach={false}
        autoAddRow={true}
        defaultValueType={"file"}
        rowIdKey={"id"}
        onChange={v => {
          // console.log(v);
          setJsonArr(v);
        }}
        rowInterpolator={row => {
          console.log("row interpolator", row);
          if (row.value == "Dhanani") row.value = "Firecamp";
          return row;
        }}
      />

      <pre>{JSON.stringify(jsonArr, 4, 4)}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
