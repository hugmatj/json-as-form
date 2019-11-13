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

  let { key = "", value = "", disable = false, type } = row;

  let _onChangeValue = ({ target: { type, value, files } }) => {
    try {
      // if (!meta || !meta.variableToType) {
      //   return onChange(key, type == "file" ? files[0] : value);
      // }

      // if (Object.keys(meta.variableToType).includes(key)) {
      //   if (
      //     meta.variableToType[key].ofType &&
      //     meta.variableToType[key].ofType.serialize
      //   ) {
      //     let value = meta.variableToType[key].ofType.serialize(value);

      //     onChange(key, value);
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
      onChange(key, value);
    }

    //onChange(key, +e.target.value)
  };

  let _onChangeKey = name => {
    onChange(name, value);
    if (isLast) {
      // key && key.length && addNewRow();
    }
  };

  let _renderValue = () => {
    if (type == "boolean") {
      return (
        <select
          className={"json_row--value"}
          value={!!value}
          onChange={_onChangeValue}
        >
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      );
    } else if (type == "file") {
      /*for( let i =0; i < value.length ; i++) {
				console.log(value[i])
      }*/
      if (value && value.name) {
        return <span className={"json_row--value"}>{value.name}</span>;
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
    } else if (value !== null && typeof value == "object") {
      return <span> {`{...}`} </span>;
    } else {
      return [
        <ValueQuote key="start-quote" />,
        <input
          type={key.includes("password") ? "password" : "text"}
          value={value || ""}
          onChange={e => _onChangeValue(e, isLast)}
          className={"json_row--value"}
          style={{
            width: `${value ? value.length * 8 + 5 : 20}px`
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
          checked={!disable}
          onChange={() => onToggleRowStatus(!disable)}
          className={"json_row--checkbox"}
        />
      )}

      <span className={"json_row--keyWrapper"}>
        <KeyQuote />
        {/*{key}*/}
        {fixedKeys.includes("key") ? (
          <span> {key}</span>
        ) : (
          <input
            type="text"
            value={key}
            onChange={e => _onChangeKey(e.target.value)}
            style={{
              width: `${key.length ? key.length * 8 + 2 : 20}px`
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
