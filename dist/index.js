"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireWildcard(require("react"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var _Row = _interopRequireDefault(require("./Row"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var JSONForm = function JSONForm(_ref) {
  var json = _ref.json,
      meta = _ref.meta,
      onChange = _ref.onChange,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug;
  var isInitialMount = (0, _react.useRef)(true);
  var fromJSONObj = (0, _react.useRef)((0, _typeof2["default"])(json) == "object" && json.length ? false : true);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      parsedJSON = _useState2[0],
      setParsedJSON = _useState2[1];

  (0, _react.useEffect)(function () {
    console.log(json, "json value changed");
    fromJSONObj.current = (0, _typeof2["default"])(json) == "object" && json.length ? false : true; // console.log(fromJSONObj.current, "fromJSONObj.current", json)

    if (fromJSONObj.current == true) {
      debugger; // console.log(json);

      var newJSON = _fns._parseJSON(_objectSpread({}, json));

      if (!(0, _deepEqual["default"])(newJSON, parsedJSON)) {
        setParsedJSON(newJSON);
      }
    } else {
      if (!(0, _deepEqual["default"])(json, _fns._toJSON())) {
        setParsedJSON((0, _toConsumableArray2["default"])(json));
      }
    }
  }, [json]);
  (0, _react.useEffect)(function () {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log("in parsed json callback");

      if (typeof onChange == "function") {
        // debugger;
        var res = _fns._toJSON();

        console.log((0, _deepEqual["default"])(res, json), res, json, 988898);
        debugger;

        if (!(0, _deepEqual["default"])(res, json)) {
          debugger;
          onChange(res);
        }
      }
    }
  }, [parsedJSON]);
  var _fns = {
    _parseJSON: function _parseJSON() {
      var jsn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.keys(jsn).map(function (k, i) {
        return {
          key: k,
          value: jsn[k],
          type: jsn.type || (0, _typeof2["default"])(jsn[k])
        };
      });
    },
    _toJSON: function _toJSON() {
      console.log(fromJSONObj); // debugger

      if (fromJSONObj.current == true) {
        return parsedJSON.filter(function (j) {
          return j.key;
        }).reduce(function (p, n) {
          return _objectSpread({}, p, (0, _defineProperty2["default"])({}, n.key, n.value));
        }, {});
      } else {
        // debugger
        return parsedJSON.filter(function (j) {
          return j.key;
        });
      }
    },
    _addNewRow: function _addNewRow() {
      setParsedJSON([].concat((0, _toConsumableArray2["default"])(parsedJSON), [{
        key: "",
        value: ""
      }]));
    },
    _onChangeRow: function _onChangeRow(k, v, i) {
      console.log(k, v, i);
      var rows = parsedJSON.map(function (j, ii) {
        var obj = _objectSpread({}, j);

        if (ii == i) {
          obj.key = k;
          obj.value = v;
        }

        return obj;
      });
      console.log(json);
      setParsedJSON((0, _toConsumableArray2["default"])(rows));
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
    return _react["default"].createElement(_Row["default"], {
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
  }), _react["default"].createElement("div", null, end), debug && _react["default"].createElement("div", null, _react["default"].createElement("pre", null, JSON.stringify(parsedJSON, 2, 2)), _react["default"].createElement("pre", null, JSON.stringify(json, 2, 2))));
};

var _default = JSONForm;
exports["default"] = _default;
