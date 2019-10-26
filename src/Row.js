import React, { useState, useRef, useEffect } from "react";

const Row = ({
  row,
  isLast,
  meta,
  showCheckBox,
  fixedKeys = [],
  onChange,
  onToggleRowStatus,
  onRemoveRow,
  rowInterpolator
}) => {
  let KeyQuote = _ => <span className={"json_row--keyQuote"}>"</span>;
  let ValueQuote = _ => <span className={"json_row--valueQuote"}>"</span>;

  let _onChangeValue = ({ target: { type, value, files } }) => {
    try {
      // if (!meta || !meta.variableToType) {
      //   return onChange(row.key, type == "file" ? files[0] : value);
      // }

      // if (Object.keys(meta.variableToType).includes(row.key)) {
      //   if (
      //     meta.variableToType[row.key].ofType &&
      //     meta.variableToType[row.key].ofType.serialize
      //   ) {
      //     let value = meta.variableToType[row.key].ofType.serialize(value);

      //     onChange(row.key, value);
      //   }
      // }

      console.log(files);
      if (value == "true") value = true;
      if (value == "false") value = false;
      let fileValue = files && files.length == 1 ? files.item(0) : files;
      let changedRow = { ...row, value: type == "file" ? fileValue : value };
      changedRow = rowInterpolator(changedRow);
      onChange(changedRow.key, changedRow.value);
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
          className={"json_row--value"}
          value={!!row.value}
          onChange={_onChangeValue}
        >
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      );
    } else if (row.type == "file") {
      /*for( let i =0; i < row.value.length ; i++) {
				console.log(row.value[i])
      }*/
      if (row.value && row.value.name) {
        return <span className={"json_row--value"}>{row.value.name}</span>;
      } else {
        return (
          <input
            type={"file"}
            multiple
            onChange={e => _onChangeValue(e, isLast)}
            onClick={event => {
              event.target.value = null;
            }}
            className={"json_row--file"}
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
          className={"json_row--value"}
          style={{
            width: `${row.value ? row.value.length * 8 + 5 : 20}px`
          }}
          key="input"
        />,
        <ValueQuote key="end-quote" />
      ];
    }
  };

  return (
    <div className={"json-row"}>
      {showCheckBox && (
        <input
          type="checkbox"
          checked={!row.disable}
          onChange={() => onToggleRowStatus(!row.disable)}
          className={"json_row--checkbox"}
        />
      )}

      <span className={"json_row--keyWrapper"}>
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
              width: `${row.key.length ? row.key.length * 8 + 2 : 20}px`
            }}
            className={"json_row--key"}
          />
        )}
        <KeyQuote />:
      </span>
      <span style={{ marginLeft: 10 }}>{_renderValue()}</span>

      <span
        onClick={onRemoveRow}
        className={"json_row--remove"}
        style={{ marginLeft: 10, color: "red", cursor: "pointer" }}
      >
        &times;
      </span>
    </div>
  );
};

export default Row;
