"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var JSONForm = function JSONForm(_ref) {
  var json = _ref.json,
      meta = _ref.meta,
      onChange = _ref.onChange;
  var fromJSONObj = (0, _react.useRef)(true);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      parsedJSON = _useState2[0],
      setParsedJSON = _useState2[1];

  (0, _react.useEffect)(function () {
    if (_typeof(json) == "object" && json.length) {
      //if from array state
      fromJSONObj.current = false;
    } else {
      fromJSONObj.current = true;
    }

    if (fromJSONObj.current == true) {
      // console.log(json);
      var newJSON = _fns._parseJSON(json); // console.log(equal(newJSON, parsedJSON), newJSON, parsedJSON);
      // debugger;


      if (!(0, _deepEqual["default"])(newJSON, parsedJSON)) {
        setParsedJSON(newJSON);
      }
    } else {
      if (!(0, _deepEqual["default"])(json, parsedJSON)) {
        setParsedJSON(json);
      }
    }
  }, [json]);
  (0, _react.useEffect)(function () {
    if (typeof onChange == "function") {
      // debugger;
      onChange(_fns._toJSON());
    }
  }, [parsedJSON]);
  var _fns = {
    _parseJSON: function _parseJSON() {
      var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.keys(json).map(function (k, i) {
        return {
          key: k,
          value: json[k],
          type: _typeof(json[k])
        };
      });
    },
    _toJSON: function _toJSON() {
      if (fromJSONObj.current == true) {
        return parsedJSON.filter(function (j) {
          return j.key;
        }).reduce(function (p, n) {
          return _objectSpread({}, p, _defineProperty({}, n.key, n.value));
        }, {});
      } else {
        return parsedJSON.filter(function (j) {
          return !j.disable && j.key;
        });
      }
    },
    _addNewRow: function _addNewRow() {
      setParsedJSON([].concat(_toConsumableArray(parsedJSON), [{
        key: "",
        value: ""
      }]));
    },
    _onChangeRow: function _onChangeRow(k, v, i) {
      var rows = parsedJSON.map(function (j, ii) {
        if (ii == i) {
          j.key = k;
          j.value = v;
        }

        return j;
      });
      setParsedJSON(rows);
    },
    _onToggleRowStatus: function _onToggleRowStatus() {
      var disblbe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var i = arguments.length > 1 ? arguments[1] : undefined;
      var rows = parsedJSON.map(function (j, ii) {
        if (ii == i) {
          j.disable = disblbe;
        }

        return j;
      });
      setParsedJSON(rows);
    },
    _onRemoveRow: function _onRemoveRow(i) {
      var rows = parsedJSON.filter(function (j, ii) {
        return ii !== i;
      });

      if (!rows.length) {
        setParsedJSON([{
          key: "",
          value: ""
        }]);
      } else {
        setParsedJSON(rows);
      }
    }
  };
  var start = "{";
  var end = "}";
  return _react["default"].createElement("div", {
    style: {
      marginLeft: 10
    }
  }, _react["default"].createElement("div", null, start), parsedJSON.map(function (d, i) {
    return _react["default"].createElement(Row, {
      row: d,
      key: i,
      meta: meta,
      isLast: parsedJSON.length == i + 1,
      onChange: function onChange(k, v) {
        return _fns._onChangeRow(k, v, i);
      },
      onToggleRowStatus: function onToggleRowStatus(disable) {
        return _fns._onToggleRowStatus(disable, i);
      },
      onRemoveRow: function onRemoveRow() {
        return _fns._onRemoveRow(i);
      },
      addNewRow: _fns._addNewRow,
      showCheckBox: !fromJSONObj.current
    });
  }), _react["default"].createElement("div", null, end));
};

var _default = JSONForm;
exports["default"] = _default;

var Row = function Row(_ref2) {
  var row = _ref2.row,
      isLast = _ref2.isLast,
      meta = _ref2.meta,
      showCheckBox = _ref2.showCheckBox,
      _onChange = _ref2.onChange,
      addNewRow = _ref2.addNewRow,
      onToggleRowStatus = _ref2.onToggleRowStatus,
      onRemoveRow = _ref2.onRemoveRow;

  // console.log(isLast, 999);
  var KeyQuote = function KeyQuote(_) {
    return _react["default"].createElement("span", {
      style: {
        color: "#167af6",
        fontSize: 14
      }
    }, "\"");
  };

  var ValueQuote = function ValueQuote(_) {
    return _react["default"].createElement("span", {
      style: {
        color: "#cd6a42",
        fontSize: 14
      }
    }, "\"");
  };

  var _onChangeValue = function _onChangeValue(e) {
    try {
      if (!meta || !meta.variableToType) {
        return _onChange(row.key, e.target.value);
      }

      if (Object.keys(meta.variableToType).includes(row.key)) {
        if (meta.variableToType[row.key].ofType && meta.variableToType[row.key].ofType.serialize) {
          var value = meta.variableToType[row.key].ofType.serialize(e.target.value);
          console.log("serialize value: ", value);

          _onChange(row.key, value);
        }
      }
    } catch (error) {
      console.log("e", error);

      _onChange(row.key, e.target.value);
    } //onChange(row.key, +e.target.value)

  };

  var _renderValue = function _renderValue() {
    console.log("row from jsonform: ", row);

    if (row.type == "boolean") {
      return _react["default"].createElement("select", {
        style: {
          outline: "none",
          width: "60px",
          border: "none",
          borderBottom: "1px solid #cd6a42",
          fontSize: 14,
          color: "#cd6a42"
        }
      }, _react["default"].createElement("option", {
        value: true
      }, "True"), _react["default"].createElement("option", {
        value: false
      }, "False"));
    } else if (row.value !== null && _typeof(row.value) == "object") {
      return _react["default"].createElement("span", null, " ", "{...}", " ");
    } else {
      return _react["default"].createElement("input", {
        type: row.key.includes("password") ? "password" : "text",
        value: row.value || "",
        onChange: function onChange(e) {
          return _onChangeValue(e);
        },
        style: {
          outline: "none",
          width: "".concat(row.value ? row.value.length * 8 + 5 : 20, "px"),
          minWidth: "10px",
          border: "none",
          borderBottom: "1px solid #cd6a42",
          fontSize: 14,
          color: "#cd6a42"
        },
        onBlur: function onBlur() {
          if (isLast) {
            row.key && row.key.length && row.value && row.value.length && addNewRow();
          }
        }
      });
    }
  };

  return _react["default"].createElement("div", null, showCheckBox && _react["default"].createElement("input", {
    type: "checkbox",
    checked: !row.disable,
    onChange: function onChange() {
      return onToggleRowStatus(!row.disable);
    },
    style: {
      marginLeft: 10,
      cursor: "pointer"
    }
  }), _react["default"].createElement("span", {
    style: {
      marginLeft: 5,
      color: "#167af6"
    }
  }, _react["default"].createElement(KeyQuote, null), _react["default"].createElement("input", {
    autoFocus: true,
    type: "text",
    value: row.key,
    onChange: function onChange(e) {
      return _onChange(e.target.value, row.value);
    },
    style: {
      outline: "none",
      width: "".concat(row.key.length ? row.key.length * 8 + 2 : 20, "px"),
      minWidth: "10px",
      border: "none",
      borderBottom: "1px solid #167af6",
      fontSize: 14,
      color: "#167af6"
    },
    onFocus: function onFocus() {
      if (isLast) {
        row.key.length && row.value.length && addNewRow();
      }
    }
  }), _react["default"].createElement(KeyQuote, null), ":"), _react["default"].createElement("span", {
    style: {
      marginLeft: 10
    }
  }, _react["default"].createElement(ValueQuote, null), _renderValue(), _react["default"].createElement(ValueQuote, null)), _react["default"].createElement("span", {
    onClick: onRemoveRow,
    style: {
      marginLeft: 10,
      color: "red",
      cursor: "pointer"
    }
  }, "\xD7"));
};
