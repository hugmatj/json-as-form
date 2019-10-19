import React, { useState, useRef, useEffect } from "react";
import equal from "deep-equal";

import Row from "./Row"

const JSONForm = ({ 
  json, 
  meta, 
  onChange, 
  debug= false
 }) => {

  const isInitialMount = useRef(true);
  let fromJSONObj = useRef(typeof json == "object" && json.length? false: true);
  let [parsedJSON, setParsedJSON] = useState([]);

  useEffect(() => {

    console.log(json, "json value changed")


    fromJSONObj.current = typeof json == "object" && json.length? false: true;
    // console.log(fromJSONObj.current, "fromJSONObj.current", json)

    if (fromJSONObj.current == true) {

      debugger
      // console.log(json);
      let newJSON = _fns._parseJSON({ ...json });
      if (!equal(newJSON, parsedJSON)) {
        setParsedJSON(newJSON);
      }
    } else {
    
      if (!equal(json, _fns._toJSON())) {
        setParsedJSON([ ...json ]);
      }
    }
  }, [ json ]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
   }
   else {

    console.log("in parsed json callback")
    if (typeof onChange == "function") {
      // debugger;
      let res = _fns._toJSON()

      console.log(equal(res, json), res, json, 988898)
      debugger
      if (!equal(res, json)) {
        debugger
        onChange(res);
      }
    }
   }
  }, [parsedJSON]);

  let _fns = {
    _parseJSON: (jsn = {}) => {
      return Object.keys(jsn).map((k, i) => {
        return {
          key: k,
          value: jsn[k],
          type: jsn.type || typeof jsn[k]
        };
      });
    },
    _toJSON: () => {

      console.log(fromJSONObj)
      // debugger
      if (fromJSONObj.current == true) {
        return parsedJSON
          .filter(j => j.key)
          .reduce((p, n) => ({ ...p, [n.key]: n.value }), {});
      } else {
        // debugger
        return parsedJSON.filter(j => j.key);
      }
    },
    _addNewRow: () => {
      setParsedJSON([...parsedJSON, { key: "", value: "" }]);
    },
    _onChangeRow: (k, v, i) => {

      console.log(k, v, i)
      let rows = parsedJSON.map((j, ii) => {
        let obj = { ...j };
        if (ii == i) {
          obj.key = k;
          obj.value = v;
        }
        return obj;
      });

      console.log( json)
      setParsedJSON([ ...rows ]);
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

  let start = "{";
  let end = "}";

  return (
    <div style={{ marginLeft: 10 }}>
      <div>{start}</div>
      {parsedJSON.map((d, i) => (
        <Row
          row={d}
          key={i}
          meta={meta}
          isLast={parsedJSON.length == i + 1}
          onChange={(k, v) => _fns._onChangeRow(k, v, i)}
          onToggleRowStatus={disable => _fns._onToggleRowStatus(disable, i)}
          onRemoveRow={() => _fns._onRemoveRow(i)}
          addNewRow={_fns._addNewRow}
          showCheckBox={!fromJSONObj.current}
        />
      ))}
      <div>{end}</div>

      {
        debug && (
          <div>
            <pre>
              {
                JSON.stringify(parsedJSON, 2, 2)
              }
            </pre>

            <pre>
              {
                JSON.stringify(json, 2, 2)
              }
            </pre>
          </div>
        )
      }
    </div>
  );
};

export default JSONForm;

