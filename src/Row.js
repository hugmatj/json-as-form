import React, { useState, useRef, useEffect } from "react";

const Row = ({
  row,
  isLast,
  meta,
  showCheckBox,
  fixedKeys = [],
  onChange,
  onToggleRowStatus,
  onRemoveRow
}) => {
  let KeyQuote = _ => <span style={{ color: "#167af6", fontSize: 14 }}>"</span>;
  let ValueQuote = _ => (
    <span style={{ color: "#cd6a42", fontSize: 14 }}>"</span>
  );

  let _onChangeValue = ({ target: { type, value, files } }, lastRow) => {
    try {
      if (!meta || !meta.variableToType) {
        return onChange(row.key, type == "file" ? files[0] : value);
      }

      if (Object.keys(meta.variableToType).includes(row.key)) {
        if (
          meta.variableToType[row.key].ofType &&
          meta.variableToType[row.key].ofType.serialize
        ) {
          let value = meta.variableToType[row.key].ofType.serialize(value);

          onChange(row.key, value);
        }
      }
    } catch (error) {
      onChange(row.key, value);
    }

    //onChange(row.key, +e.target.value)
  };

  let _onChangeKey = name => {
    onChange(name, row.value);
    if (isLast) {
      // row.key && row.key.length && addNewRow();
    }
  };

  let _renderValue = () => {
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
    } else if (row.type == "file") {
      if (row.value && row.value.name) {
        return (
          <span
            style={{
              borderBottom: "1px solid #cd6a42",
              fontSize: 14,
              color: "#767676"
            }}
          >
            {row.value.name}
          </span>
        );
      } else {
        return (
          <input
            type={"file"}
            onChange={e => _onChangeValue(e, isLast)}
            onClick={event => {
              event.target.value = null;
            }}
            style={{
              outline: "none",
              margin: "5px auto",
              width: `80px`,
              minWidth: "10px",
              border: "none"
            }}
          />
        );
      }
    } else if (row.value !== null && typeof row.value == "object") {
      return <span> {`{...}`} </span>;
    } else {
      return [
        <ValueQuote key="start-quote" />,
        <input
          type={row.key.includes("password") ? "password" : "text"}
          value={row.value || ""}
          onChange={e => _onChangeValue(e, isLast)}
          style={{
            outline: "none",
            width: `${row.value ? row.value.length * 8 + 5 : 20}px`,
            minWidth: "10px",
            border: "none",
            borderBottom: "1px solid #cd6a42",
            fontSize: 14,
            color: "#cd6a42"
          }}
          key="input"
        />,
        <ValueQuote key="end-quote" />
      ];
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
        {fixedKeys.includes("key") ? (
          <span> {row.key}</span>
        ) : (
          <input
            type="text"
            value={row.key}
            onChange={e => _onChangeKey(e.target.value)}
            style={{
              outline: "none",
              width: `${row.key.length ? row.key.length * 8 + 2 : 20}px`,
              minWidth: "10px",
              border: "none",
              borderBottom: "1px solid #167af6",
              fontSize: 14,
              color: "#167af6"
            }}
          />
        )}
        <KeyQuote />:
      </span>
      <span style={{ marginLeft: 10 }}>{_renderValue()}</span>

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

export default Row;
