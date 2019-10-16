import React, { useState, useRef, useEffect } from "react";
import equal from "deep-equal";

const JSONForm = ({ json, meta, onChange }) => {

  let fromJSONObj = useRef(true);
  let [parsedJSON, setParsedJSON] = useState([]);

  useEffect(() => {
    if (typeof json == "object" && json.length) {
      //if from array state
      fromJSONObj.current = false;
    } else {
      fromJSONObj.current = true;
    }

    if (fromJSONObj.current == true) {
      // console.log(json);
      let newJSON = _fns._parseJSON(json);
      // console.log(equal(newJSON, parsedJSON), newJSON, parsedJSON);
      // debugger;
      if (!equal(newJSON, parsedJSON)) {
        setParsedJSON(newJSON);
      }
    } else {
      if (!equal(json, parsedJSON)) {
        setParsedJSON(json);
      }
    }
  }, [json]);

  useEffect(() => {
    if (typeof onChange == "function") {
      // debugger;
      onChange(_fns._toJSON());
    }
  }, [parsedJSON]);

  let _fns = {
    _parseJSON: (json = {}) => {
      return Object.keys(json).map((k, i) => {
        return {
          key: k,
          value: json[k],
          type: typeof json[k]
        };
      });
    },
    _toJSON: () => {
      if (fromJSONObj.current == true) {
        return parsedJSON
          .filter(j => j.key)
          .reduce((p, n) => ({ ...p, [n.key]: n.value }), {});
      } else {
        return parsedJSON.filter(j => !j.disable && j.key);
      }
    },
    _addNewRow: () => {
      setParsedJSON([...parsedJSON, { key: "", value: "" }]);
    },
    _onChangeRow: (k, v, i) => {
      let rows = parsedJSON.map((j, ii) => {
        if (ii == i) {
          j.key = k;
          j.value = v;
        }
        return j;
      });
      setParsedJSON(rows);
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
    </div>
  );
};

export default JSONForm;

const Row = ({
  row,
  isLast,
  meta,
  showCheckBox,
  onChange,
  addNewRow,
  onToggleRowStatus,
  onRemoveRow
}) => {
  // console.log(isLast, 999);

  let KeyQuote = _ => <span style={{ color: "#167af6", fontSize: 14 }}>"</span>;
  let ValueQuote = _ => (
    <span style={{ color: "#cd6a42", fontSize: 14 }}>"</span>
  );

  let _onChangeValue = e => {
    try {
      if (!meta || !meta.variableToType) {
        return onChange(row.key, e.target.value);
      }

      if (Object.keys(meta.variableToType).includes(row.key)) {
        if (
          meta.variableToType[row.key].ofType &&
          meta.variableToType[row.key].ofType.serialize
        ) {
          let value = meta.variableToType[row.key].ofType.serialize(
            e.target.value
          );

          console.log(`serialize value: `, value);

          onChange(row.key, value);
        }
      }
    } catch (error) {
      console.log(`e`, error);
      onChange(row.key, e.target.value);
    }

    //onChange(row.key, +e.target.value)
  };

  let _renderValue = () => {
    console.log(`row from jsonform: `, row);

    if (row.type == "boolean") {
      return (
        <select
          style={{
            outline: "none",
            width: "60px",
            border: "none",
            borderBottom: "1px solid #cd6a42",
            fontSize: 14,
            color: "#cd6a42"
          }}
        >
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      );
    } else if (row.value !== null && typeof row.value == "object") {
      return <span> {`{...}`} </span>;
    } else {
      return (
        <input
          type={row.key.includes("password") ? "password" : "text"}
          value={row.value || ""}
          onChange={e => _onChangeValue(e)}
          style={{
            outline: "none",
            width: `${row.value ? row.value.length * 8 + 5 : 20}px`,
            minWidth: "10px",
            border: "none",
            borderBottom: "1px solid #cd6a42",
            fontSize: 14,
            color: "#cd6a42"
          }}
          onBlur={() => {
            if (isLast) {
              row.key &&
                row.key.length &&
                row.value &&
                row.value.length &&
                addNewRow();
            }
          }}
        />
      );
    }
  };

  return (
    <div>
      {showCheckBox && (
        <input
          type="checkbox"
          checked={!row.disable}
          onChange={() => onToggleRowStatus(!row.disable)}
          style={{ marginLeft: 10, cursor: "pointer" }}
        />
      )}

      <span style={{ marginLeft: 5, color: "#167af6" }}>
        <KeyQuote />
        {/*{row.key}*/}
        <input
          autoFocus
          type="text"
          value={row.key}
          onChange={e => onChange(e.target.value, row.value)}
          style={{
            outline: "none",
            width: `${row.key.length ? row.key.length * 8 + 2 : 20}px`,
            minWidth: "10px",
            border: "none",
            borderBottom: "1px solid #167af6",
            fontSize: 14,
            color: "#167af6"
          }}
          onFocus={() => {
            if (isLast) {
              row.key.length && row.value.length && addNewRow();
            }
          }}
        />
        <KeyQuote />:
      </span>
      <span style={{ marginLeft: 10 }}>
        <ValueQuote />

        {_renderValue()}

        <ValueQuote />
      </span>

      <span
        onClick={onRemoveRow}
        style={{ marginLeft: 10, color: "red", cursor: "pointer" }}
      >
        &times;
        {/*<button aria-label="Close Account Info Modal Box">&#10006;</button>*/}
      </span>
    </div>
  );
};

