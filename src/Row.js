import React, { useState, useRef, useEffect } from "react";

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

        console.log(e.target.value, e.target.type,  e.target.files)

      try {
        if (!meta || !meta.variableToType) {
          return onChange(row.key, e.target.type == "file"? e.target.files[0]: e.target.value);
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
      }
      else if(row.type == "file"){

        if(row.value && row.value.name ) {
            return <span style={{
                borderBottom: "1px solid #cd6a42",
                fontSize: 14,
                color: "#767676"
            }}>
                {row.value.name}
            </span>
        }
        else {
           return  <input
                type={"file"}
                onChange={e => _onChangeValue(e)}
                onClick={(event)=> { 
                    event.target.value = null
                }}
                style={{
                    outline: "none",
                    margin: "5px auto",
                    width: `80px`,
                    minWidth: "10px",
                    border: "none",
                }}
            />
        }
      }
      else if (row.value !== null && typeof row.value == "object") {
        return <span> {`{...}`} </span>;
      }
      else {
        return (
            [
                <ValueQuote key="start-quote"/>,
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
                    key="input"
                    onBlur={(e) => {
        
                    let a = e
                    console.log(a, event.shiftKey)
        
                    if (isLast) {
                        row.key &&
                        row.key.length &&
                        row.value &&
                        row.value.length &&
                        addNewRow();
                    }
                    }}
                />,
                <ValueQuote key="end-quote"/>
            ]
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
            autoFocus={row.autoFocus}
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
            {_renderValue()}
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

  export default Row;
  