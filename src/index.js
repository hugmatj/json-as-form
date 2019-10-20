import React, { useState, useRef, useEffect } from "react";
import equal from "deep-equal";

import Row from "./Row";
import "./index.css";

const JSONForm = ({
  json,
  fixedKeys,
  autoAddRow = false,
  className = "",
  debug = false,
  onChange,
  rowInterpolator = row => row
}) => {
  const isInitialMount = useRef(true);
  let fromJSONObj = useRef(
    typeof json == "object" && json.length ? false : true
  );
  let [parsedJSON, setParsedJSON] = useState([]);

  useEffect(
    () => {
      fromJSONObj.current =
        typeof json == "object" && json.length ? false : true;
      // console.log(fromJSONObj.current, "fromJSONObj.current", json)

      if (fromJSONObj.current == true) {
        // console.log(json);
        let newJSON = _fns._parseJSON({ ...json });
        if (!equal(newJSON, parsedJSON)) {
          setParsedJSON(newJSON);
        }
      } else {
        if (!equal(json, _fns._toJSON())) {
          setParsedJSON([...json]);
        }
      }
    },
    [json]
  );

  useEffect(
    () => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        // console.log("in parsed json callback");
        if (typeof onChange == "function") {
          let res = _fns._toJSON();
          if (!equal(res, json)) {
            onChange(res);
          }
        }
      }
    },
    [parsedJSON]
  );

  let _fns = {
    _parseJSON: (jsn = {}) => {
      let rows = Object.keys(jsn).map((k, i) => {
        return {
          key: k,
          value: jsn[k],
          type: jsn.type || typeof jsn[k]
        };
      });

      let lastIndex = rows.length - 1;
      if (
        autoAddRow == true &&
        (rows[lastIndex].key || rows[lastIndex].value)
      ) {
        rows = [...rows, { key: "", value: "" }];
      }
      return rows;
    },
    _toJSON: () => {
      if (fromJSONObj.current == true) {
        return parsedJSON
          .filter(j => j.key)
          .reduce((p, n) => ({ ...p, [n.key]: n.value }), {});
      } else {
        return parsedJSON.filter(j => j.key);
      }
    },
    _addNewRow: () => {
      // console.log(parsedJSON);
      setParsedJSON([...parsedJSON, { key: "", value: "" }]);
    },
    _onChangeRow: (k, v, i, isLast) => {
      // console.log(k, v, i);
      let rows = parsedJSON.map((j, ii) => {
        let obj = { ...j };
        if (ii == i) {
          obj.key = k;
          obj.value = v;
        }
        return obj;
      });

      setParsedJSON(
        isLast && autoAddRow == true ? [...rows, { key: "", value: "" }] : rows
      );
    },
    _onToggleRowStatus: (disblbe = false, i) => {
      let rows = parsedJSON.map((j, ii) => {
        if (ii == i) {
          j.disable = disblbe;
        }
        return j;
      });
      setParsedJSON(rows);
    },
    _onRemoveRow: i => {
      let rows = parsedJSON.filter((j, ii) => {
        return ii !== i;
      });
      if (!rows.length) {
        setParsedJSON([{ key: "", value: "" }]);
      } else {
        setParsedJSON(rows);
      }
    }
  };

  let start = <span className={"start-brace"}>{"{"}</span>;
  let end = <span className={"end-brace"}>{"}"}</span>;

  return (
    <div className={`json-as-form ${className}`}>
      <div>{start}</div>
      {parsedJSON.map((d, i) => {
        let isLastRow = parsedJSON.length == i + 1;
        return (
          <Row
            row={d}
            key={i}
            isLast={isLastRow}
            fixedKeys={fixedKeys}
            onChange={(k, v) => _fns._onChangeRow(k, v, i, isLastRow)}
            onToggleRowStatus={disable => _fns._onToggleRowStatus(disable, i)}
            onRemoveRow={() => _fns._onRemoveRow(i)}
            showCheckBox={!fromJSONObj.current}
            rowInterpolator={rowInterpolator}
          />
        );
      })}
      <div>{end}</div>

      {debug && (
        <div>
          <pre>{JSON.stringify(parsedJSON, 2, 2)}</pre>

          <pre>{JSON.stringify(json, 2, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default JSONForm;
