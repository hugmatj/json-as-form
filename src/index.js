import React, { useState, useRef, useEffect } from "react";
import equal from "deep-equal";
import uuid from "uuid";

import Row from "./Row";
import "./index.css";

const JSONForm = ({
  json,
  fixedKeys,
  detach = false,
  autoAddRow = false,
  className = "",
  rowIdKey = "uuid",
  debug = false,
  onChange,
  rowInterpolator = row => row
}) => {
  const isInitialMount = useRef(true);
  let fromJSONObj = useRef(!Array.isArray(json));
  let [parsedJSON, setParsedJSON] = useState([]);

  useEffect(
    () => {
      if (isInitialMount.current === false && detach === true) {
        return;
      }

      fromJSONObj.current = !Array.isArray(json);
      // console.log(fromJSONObj.current, "fromJSONObj.current", json)

      if (fromJSONObj.current == true) {
        // console.log(json);
        let newJSON = _fns._parseJSON({ ...json });
        if (!equal(newJSON, parsedJSON)) {
          setParsedJSON(newJSON);
        }
      } else {
        if (autoAddRow && (!json || !json.length)) {
          json = [_fns._getEmptyRowSkeleton()];
        }
        if (!equal(json, _fns._toJSON())) {
          let jsonArr = json.map(j => {
            let obj = {
              ...j
            };
            if (!obj[rowIdKey]) {
              obj[rowIdKey] = uuid.v4(); //add uuid if not exists
            }
            return j;
          });
          setParsedJSON([...jsonArr]);
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

          console.log(res, json, equal(res, json));

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

      if (autoAddRow && (!rows || !rows.length)) {
        rows = [_fns._getEmptyRowSkeleton()];
      }

      let lastIndex = rows.length - 1;
      if (
        autoAddRow === true &&
        rows[lastIndex] &&
        (rows[lastIndex].key || rows[lastIndex].value)
      ) {
        rows = [...rows, _fns._getEmptyRowSkeleton()];
      }
      return rows;
    },
    _toJSON: () => {
      if (fromJSONObj.current === true) {
        return parsedJSON
          .filter(j => j.key)
          .reduce((p, n) => ({ ...p, [n.key]: n.value }), {});
      } else {
        console.log(parsedJSON, parsedJSON.filter(j => j.key));
        return parsedJSON.filter(j => j.key);
      }
    },
    _getEmptyRowSkeleton: () => {
      return { [rowIdKey]: uuid.v4(), key: "", value: "" };
    },

    _addNewRow: () => {
      // console.log(parsedJSON);
      setParsedJSON([...parsedJSON, _fns._getEmptyRowSkeleton()]);
    },
    _onChangeRow: (k, v, i, isLast) => {
      // console.log(k, v, i);
      let rows = parsedJSON.map((j, ii) => {
        let obj = { ...j };
        if (ii === i) {
          obj.key = k;
          obj.value = v;
        }
        return obj;
      });

      setParsedJSON(
        isLast && autoAddRow === true
          ? [...rows, _fns._getEmptyRowSkeleton()]
          : rows
      );
    },
    _onToggleRowStatus: (disable = false, i) => {
      let rows = parsedJSON.map((j, ii) => {
        let obj = { ...j };
        if (ii === i) {
          obj.disable = disable;
        }
        return obj;
      });
      setParsedJSON(rows);
    },
    _onRemoveRow: i => {
      let rows = parsedJSON.filter((j, ii) => {
        return ii !== i;
      });
      if (!rows.length) {
        setParsedJSON([_fns._getEmptyRowSkeleton()]);
      } else {
        setParsedJSON(rows);
      }
    }
  };

  let start = <span className={"start-brace"}>{"{"}</span>;
  let end = <span className={"end-brace"}>{"}"}</span>;

  if (!parsedJSON.length) {
    return <div className={`json-as-form ${className}`} />;
  }

  return (
    <div className={`json-as-form ${className}`}>
      <div>{start}</div>
      {parsedJSON.map((d, i) => {
        let isLastRow = parsedJSON.length === i + 1;
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
