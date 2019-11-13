!(function(t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e(require("react")))
    : "function" == typeof define && define.amd
      ? define("json-as-form", ["react"], e)
      : "object" == typeof exports
        ? (exports["json-as-form"] = e(require("react")))
        : (t["json-as-form"] = e(t.react));
})(window, function(t) {
  return (function(t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function(t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function(e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 14))
    );
  })([
    function(e, n) {
      e.exports = t;
    },
    function(t, e) {
      t.exports = function(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      };
    },
    function(t, e, n) {
      var r = n(15),
        o = n(16),
        a = n(17);
      t.exports = function(t) {
        return r(t) || o(t) || a();
      };
    },
    function(t, e, n) {
      var r = n(8),
        o = n(22),
        a = n(23),
        i = n(24),
        c = n(28),
        u = n(30),
        l = Date.prototype.getTime;
      function s(t, e, n) {
        var y = n || {};
        return (
          !(y.strict ? !a(t, e) : t !== e) ||
          (!t || !e || ("object" != typeof t && "object" != typeof e)
            ? y.strict
              ? a(t, e)
              : t == e
            : (function(t, e, n) {
                var a, y;
                if (typeof t != typeof e) return !1;
                if (f(t) || f(e)) return !1;
                if (t.prototype !== e.prototype) return !1;
                if (o(t) !== o(e)) return !1;
                var m = i(t),
                  d = i(e);
                if (m !== d) return !1;
                if (m || d) return t.source === e.source && c(t) === c(e);
                if (u(t) && u(e)) return l.call(t) === l.call(e);
                var v = p(t),
                  b = p(e);
                if (v !== b) return !1;
                if (v || b) {
                  if (t.length !== e.length) return !1;
                  for (a = 0; a < t.length; a++) if (t[a] !== e[a]) return !1;
                  return !0;
                }
                if (typeof t != typeof e) return !1;
                try {
                  var g = r(t),
                    h = r(e);
                } catch (t) {
                  return !1;
                }
                if (g.length !== h.length) return !1;
                for (g.sort(), h.sort(), a = g.length - 1; a >= 0; a--)
                  if (g[a] != h[a]) return !1;
                for (a = g.length - 1; a >= 0; a--)
                  if (((y = g[a]), !s(t[y], e[y], n))) return !1;
                return !0;
              })(t, e, y))
        );
      }
      function f(t) {
        return null == t;
      }
      function p(t) {
        return (
          !(!t || "object" != typeof t || "number" != typeof t.length) &&
          ("function" == typeof t.copy &&
            "function" == typeof t.slice &&
            !(t.length > 0 && "number" != typeof t[0]))
        );
      }
      t.exports = s;
    },
    function(t, e) {
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function r(e) {
        return (
          "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
            ? (t.exports = r = function(t) {
                return n(t);
              })
            : (t.exports = r = function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : n(t);
              }),
          r(e)
        );
      }
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(18),
        o = n(19),
        a = n(20);
      t.exports = function(t, e) {
        return r(t) || o(t, e) || a();
      };
    },
    function(t, e, n) {
      "use strict";
      var r = n(8),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        a = Object.prototype.toString,
        i = Array.prototype.concat,
        c = Object.defineProperty,
        u =
          c &&
          (function() {
            var t = {};
            try {
              for (var e in (c(t, "x", { enumerable: !1, value: t }), t))
                return !1;
              return t.x === t;
            } catch (t) {
              return !1;
            }
          })(),
        l = function(t, e, n, r) {
          var o;
          (e in t &&
            ("function" != typeof (o = r) ||
              "[object Function]" !== a.call(o) ||
              !r())) ||
            (u
              ? c(t, e, {
                  configurable: !0,
                  enumerable: !1,
                  value: n,
                  writable: !0
                })
              : (t[e] = n));
        },
        s = function(t, e) {
          var n = arguments.length > 2 ? arguments[2] : {},
            a = r(e);
          o && (a = i.call(a, Object.getOwnPropertySymbols(e)));
          for (var c = 0; c < a.length; c += 1) l(t, a[c], e[a[c]], n[a[c]]);
        };
      (s.supportsDescriptors = !!u), (t.exports = s);
    },
    function(t, e, n) {
      var r = n(31),
        o = n(32),
        a = o;
      (a.v1 = r), (a.v4 = o), (t.exports = a);
    },
    function(t, e, n) {
      "use strict";
      var r = Array.prototype.slice,
        o = n(9),
        a = Object.keys,
        i = a
          ? function(t) {
              return a(t);
            }
          : n(21),
        c = Object.keys;
      (i.shim = function() {
        Object.keys
          ? (function() {
              var t = Object.keys(arguments);
              return t && t.length === arguments.length;
            })(1, 2) ||
            (Object.keys = function(t) {
              return o(t) ? c(r.call(t)) : c(t);
            })
          : (Object.keys = i);
        return Object.keys || i;
      }),
        (t.exports = i);
    },
    function(t, e, n) {
      "use strict";
      var r = Object.prototype.toString;
      t.exports = function(t) {
        var e = r.call(t),
          n = "[object Arguments]" === e;
        return (
          n ||
            (n =
              "[object Array]" !== e &&
              null !== t &&
              "object" == typeof t &&
              "number" == typeof t.length &&
              t.length >= 0 &&
              "[object Function]" === r.call(t.callee)),
          n
        );
      };
    },
    function(t, e, n) {
      "use strict";
      var r = Object,
        o = TypeError;
      t.exports = function() {
        if (null != this && this !== r(this))
          throw new o("RegExp.prototype.flags getter called on non-object");
        var t = "";
        return (
          this.global && (t += "g"),
          this.ignoreCase && (t += "i"),
          this.multiline && (t += "m"),
          this.dotAll && (t += "s"),
          this.unicode && (t += "u"),
          this.sticky && (t += "y"),
          t
        );
      };
    },
    function(t, e, n) {
      "use strict";
      var r = n(10),
        o = n(6).supportsDescriptors,
        a = Object.getOwnPropertyDescriptor,
        i = TypeError;
      t.exports = function() {
        if (!o)
          throw new i(
            "RegExp.prototype.flags requires a true ES5 environment that supports property descriptors"
          );
        if ("gim" === /a/gim.flags) {
          var t = a(RegExp.prototype, "flags");
          if (t && "function" == typeof t.get && "boolean" == typeof /a/.dotAll)
            return t.get;
        }
        return r;
      };
    },
    function(t, e) {
      var n =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (n) {
        var r = new Uint8Array(16);
        t.exports = function() {
          return n(r), r;
        };
      } else {
        var o = new Array(16);
        t.exports = function() {
          for (var t, e = 0; e < 16; e++)
            0 == (3 & e) && (t = 4294967296 * Math.random()),
              (o[e] = (t >>> ((3 & e) << 3)) & 255);
          return o;
        };
      }
    },
    function(t, e) {
      for (var n = [], r = 0; r < 256; ++r)
        n[r] = (r + 256).toString(16).substr(1);
      t.exports = function(t, e) {
        var r = e || 0,
          o = n;
        return [
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]]
        ].join("");
      };
    },
    function(t, e, n) {
      "use strict";
      n.r(e);
      var r = n(4),
        o = n.n(r),
        a = n(2),
        i = n.n(a),
        c = n(1),
        u = n.n(c),
        l = n(5),
        s = n.n(l),
        f = n(0),
        p = n.n(f),
        y = n(3),
        m = n.n(y),
        d = n(7),
        v = n.n(d);
      function b(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var g = function(t) {
        var e = t.row,
          n = (t.isLast, t.meta, t.showCheckBox),
          r = t.fixedKeys,
          a = void 0 === r ? [] : r,
          i = t.onChange,
          c = t.onToggleRowStatus,
          l = t.onRemoveRow,
          s = t.rowInterpolator,
          f = function(t) {
            return p.a.createElement(
              "span",
              { className: "json_row--keyQuote" },
              '"'
            );
          },
          y = function(t) {
            return p.a.createElement(
              "span",
              { className: "json_row--valueQuote" },
              '"'
            );
          },
          m = e.key,
          d = void 0 === m ? "" : m,
          v = e.value,
          g = void 0 === v ? "" : v,
          h = e.disable,
          j = void 0 !== h && h,
          w = e.type,
          x = function(t) {
            var n = t.target,
              r = n.type,
              o = n.value,
              a = n.files;
            try {
              console.log(a), "true" == o && (o = !0), "false" == o && (o = !1);
              var c = a && 1 == a.length ? a.item(0) : a,
                l = (function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? b(n, !0).forEach(function(e) {
                          u()(t, e, n[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : b(n).forEach(function(e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            );
                          });
                  }
                  return t;
                })({}, e, { value: "file" == r ? c : o });
              (l = s(l)), i(l.key, l.value);
            } catch (t) {
              i(d, o);
            }
          },
          O = function(t) {
            i(t, g);
          };
        return p.a.createElement(
          "div",
          { className: "json-row" },
          n &&
            p.a.createElement("input", {
              type: "checkbox",
              checked: !j,
              onChange: function() {
                return c(!j);
              },
              className: "json_row--checkbox"
            }),
          p.a.createElement(
            "span",
            { className: "json_row--keyWrapper" },
            p.a.createElement(f, null),
            a.includes("key")
              ? p.a.createElement("span", null, " ", d)
              : p.a.createElement("input", {
                  type: "text",
                  value: d,
                  onChange: function(t) {
                    return O(t.target.value);
                  },
                  style: {
                    width: "".concat(d.length ? 8 * d.length + 2 : 20, "px")
                  },
                  className: "json_row--key"
                }),
            p.a.createElement(f, null),
            ":"
          ),
          p.a.createElement(
            "span",
            { style: { marginLeft: 10 } },
            "boolean" == w
              ? p.a.createElement(
                  "select",
                  { className: "json_row--value", value: !!g, onChange: x },
                  p.a.createElement("option", { value: !0 }, "True"),
                  p.a.createElement("option", { value: !1 }, "False")
                )
              : "file" == w
                ? g && g.name
                  ? p.a.createElement(
                      "span",
                      { className: "json_row--value" },
                      g.name
                    )
                  : p.a.createElement("input", {
                      type: "file",
                      multiple: !0,
                      onChange: function(t) {
                        return x(t);
                      },
                      onClick: function(t) {
                        t.target.value = null;
                      },
                      className: "json_row--file"
                    })
                : null !== g && "object" == o()(g)
                  ? p.a.createElement("span", null, " ", "{...}", " ")
                  : [
                      p.a.createElement(y, { key: "start-quote" }),
                      p.a.createElement("input", {
                        type: d.includes("password") ? "password" : "text",
                        value: g || "",
                        onChange: function(t) {
                          return x(t);
                        },
                        className: "json_row--value",
                        style: {
                          width: "".concat(g ? 8 * g.length + 5 : 20, "px")
                        },
                        key: "input"
                      }),
                      p.a.createElement(y, { key: "end-quote" })
                    ]
          ),
          p.a.createElement(
            "span",
            {
              onClick: l,
              className: "json_row--remove",
              style: { marginLeft: 10, color: "red", cursor: "pointer" }
            },
            "×"
          )
        );
      };
      n(33);
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(n, !0).forEach(function(e) {
                u()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : h(n).forEach(function(e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      e.default = function(t) {
        var e = t.json,
          n = t.fixedKeys,
          r = t.detach,
          a = void 0 !== r && r,
          c = t.autoAddRow,
          l = void 0 === c || c,
          y = t.defaultValueType,
          d = void 0 === y ? "string" : y,
          b = t.className,
          h = void 0 === b ? "" : b,
          w = t.rowIdKey,
          x = void 0 === w ? "uuid" : w,
          O = t.debug,
          S = void 0 !== O && O,
          E = t.onChange,
          k = t.rowInterpolator,
          _ =
            void 0 === k
              ? function(t) {
                  return t;
                }
              : k,
          R = Object(f.useRef)(!0),
          P = Object(f.useRef)(!Array.isArray(e)),
          C = Object(f.useState)([]),
          N = s()(C, 2),
          T = N[0],
          A = N[1];
        Object(f.useEffect)(
          function() {
            if (!1 !== R.current || !0 !== a)
              if (((P.current = !Array.isArray(e)), 1 == P.current)) {
                var t = $._parseJSON(j({}, e));
                m()(t, T) || A(t);
              } else if (
                (!l || (e && e.length) || (e = [$._getEmptyRowSkeleton()]),
                !m()(e, $._toJSON()))
              ) {
                var n = e.map(function(t) {
                  var e = j({}, t);
                  return e[x] || (e[x] = v.a.v4()), e;
                });
                console.log(n, 8889), A(i()(n));
              }
          },
          [e]
        ),
          Object(f.useEffect)(
            function() {
              if (R.current) R.current = !1;
              else if ("function" == typeof E) {
                var t = $._toJSON();
                console.log(t, e, m()(t, e)), m()(t, e) || E(t);
              }
            },
            [T]
          );
        var $ = {
            _parseJSON: function() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = Object.keys(t).map(function(e, n) {
                  return { key: e, value: t[e], type: t.type || o()(t[e]) };
                });
              !l || (e && e.length) || (e = [$._getEmptyRowSkeleton()]);
              var n = e.length - 1;
              return (
                !0 === l &&
                  e[n] &&
                  (e[n].key || e[n].value) &&
                  (e = [].concat(i()(e), [$._getEmptyRowSkeleton()])),
                e
              );
            },
            _toJSON: function() {
              return !0 === P.current
                ? T.filter(function(t) {
                    return t.key;
                  }).reduce(function(t, e) {
                    return j({}, t, u()({}, e.key, e.value));
                  }, {})
                : (console.log(
                    T,
                    T.filter(function(t) {
                      return t.key;
                    })
                  ),
                  T.filter(function(t) {
                    return t.key;
                  }));
            },
            _getEmptyRowSkeleton: function() {
              var t;
              return (
                (t = {}),
                u()(t, x, v.a.v4()),
                u()(t, "key", ""),
                u()(t, "value", ""),
                u()(t, "type", d),
                t
              );
            },
            _addNewRow: function() {
              A([].concat(i()(T), [$._getEmptyRowSkeleton()]));
            },
            _onChangeRow: function(t, e, n, r) {
              var o = T.map(function(r, o) {
                var a = j({}, r);
                return o === n && ((a.key = t), (a.value = e)), a;
              });
              A(
                r && !0 === l
                  ? [].concat(i()(o), [$._getEmptyRowSkeleton()])
                  : o
              );
            },
            _onToggleRowStatus: function() {
              var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                e = arguments.length > 1 ? arguments[1] : void 0,
                n = T.map(function(n, r) {
                  var o = j({}, n);
                  return r === e && (o.disable = t), o;
                });
              A(n);
            },
            _onRemoveRow: function(t) {
              var e = T.filter(function(e, n) {
                return n !== t;
              });
              e.length ? A(e) : A([$._getEmptyRowSkeleton()]);
            }
          },
          D = p.a.createElement("span", { className: "start-brace" }, "{"),
          I = p.a.createElement("span", { className: "end-brace" }, "}");
        return T.length
          ? p.a.createElement(
              "div",
              { className: "json-as-form ".concat(h) },
              p.a.createElement("div", null, D),
              T.map(function(t, e) {
                var r = T.length === e + 1;
                return p.a.createElement(g, {
                  row: t,
                  key: e,
                  isLast: r,
                  fixedKeys: n,
                  onChange: function(t, n) {
                    return $._onChangeRow(t, n, e, r);
                  },
                  onToggleRowStatus: function(t) {
                    return $._onToggleRowStatus(t, e);
                  },
                  onRemoveRow: function() {
                    return $._onRemoveRow(e);
                  },
                  showCheckBox: !P.current,
                  rowInterpolator: _
                });
              }),
              p.a.createElement("div", null, I),
              S &&
                p.a.createElement(
                  "div",
                  null,
                  p.a.createElement("pre", null, JSON.stringify(T, 2, 2)),
                  p.a.createElement("pre", null, JSON.stringify(e, 2, 2))
                )
            )
          : p.a.createElement("div", { className: "json-as-form ".concat(h) });
      };
    },
    function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
          return n;
        }
      };
    },
    function(t, e) {
      t.exports = function(t) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      };
    },
    function(t, e) {
      t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      };
    },
    function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) return t;
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        ) {
          var n = [],
            r = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var i, c = t[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (o = !0), (a = t);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (o) throw a;
            }
          }
          return n;
        }
      };
    },
    function(t, e) {
      t.exports = function() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    },
    function(t, e, n) {
      "use strict";
      var r;
      if (!Object.keys) {
        var o = Object.prototype.hasOwnProperty,
          a = Object.prototype.toString,
          i = n(9),
          c = Object.prototype.propertyIsEnumerable,
          u = !c.call({ toString: null }, "toString"),
          l = c.call(function() {}, "prototype"),
          s = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
          ],
          f = function(t) {
            var e = t.constructor;
            return e && e.prototype === t;
          },
          p = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
          },
          y = (function() {
            if ("undefined" == typeof window) return !1;
            for (var t in window)
              try {
                if (
                  !p["$" + t] &&
                  o.call(window, t) &&
                  null !== window[t] &&
                  "object" == typeof window[t]
                )
                  try {
                    f(window[t]);
                  } catch (t) {
                    return !0;
                  }
              } catch (t) {
                return !0;
              }
            return !1;
          })();
        r = function(t) {
          var e = null !== t && "object" == typeof t,
            n = "[object Function]" === a.call(t),
            r = i(t),
            c = e && "[object String]" === a.call(t),
            p = [];
          if (!e && !n && !r)
            throw new TypeError("Object.keys called on a non-object");
          var m = l && n;
          if (c && t.length > 0 && !o.call(t, 0))
            for (var d = 0; d < t.length; ++d) p.push(String(d));
          if (r && t.length > 0)
            for (var v = 0; v < t.length; ++v) p.push(String(v));
          else
            for (var b in t)
              (m && "prototype" === b) || !o.call(t, b) || p.push(String(b));
          if (u)
            for (
              var g = (function(t) {
                  if ("undefined" == typeof window || !y) return f(t);
                  try {
                    return f(t);
                  } catch (t) {
                    return !1;
                  }
                })(t),
                h = 0;
              h < s.length;
              ++h
            )
              (g && "constructor" === s[h]) || !o.call(t, s[h]) || p.push(s[h]);
          return p;
        };
      }
      t.exports = r;
    },
    function(t, e, n) {
      "use strict";
      var r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
        o = Object.prototype.toString,
        a = function(t) {
          return (
            !(r && t && "object" == typeof t && Symbol.toStringTag in t) &&
            "[object Arguments]" === o.call(t)
          );
        },
        i = function(t) {
          return (
            !!a(t) ||
            (null !== t &&
              "object" == typeof t &&
              "number" == typeof t.length &&
              t.length >= 0 &&
              "[object Array]" !== o.call(t) &&
              "[object Function]" === o.call(t.callee))
          );
        },
        c = (function() {
          return a(arguments);
        })();
      (a.isLegacyArguments = i), (t.exports = c ? a : i);
    },
    function(t, e, n) {
      "use strict";
      var r = function(t) {
        return t != t;
      };
      t.exports = function(t, e) {
        return 0 === t && 0 === e
          ? 1 / t == 1 / e
          : t === e || !(!r(t) || !r(e));
      };
    },
    function(t, e, n) {
      "use strict";
      var r = n(25),
        o = RegExp.prototype.exec,
        a = Object.getOwnPropertyDescriptor,
        i = Object.prototype.toString,
        c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
      t.exports = function(t) {
        if (!t || "object" != typeof t) return !1;
        if (!c) return "[object RegExp]" === i.call(t);
        var e = a(t, "lastIndex");
        return (
          !(!e || !r(e, "value")) &&
          (function(t) {
            try {
              var e = t.lastIndex;
              return (t.lastIndex = 0), o.call(t), !0;
            } catch (t) {
              return !1;
            } finally {
              t.lastIndex = e;
            }
          })(t)
        );
      };
    },
    function(t, e, n) {
      "use strict";
      var r = n(26);
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    },
    function(t, e, n) {
      "use strict";
      var r = n(27);
      t.exports = Function.prototype.bind || r;
    },
    function(t, e, n) {
      "use strict";
      var r = "Function.prototype.bind called on incompatible ",
        o = Array.prototype.slice,
        a = Object.prototype.toString;
      t.exports = function(t) {
        var e = this;
        if ("function" != typeof e || "[object Function]" !== a.call(e))
          throw new TypeError(r + e);
        for (
          var n,
            i = o.call(arguments, 1),
            c = function() {
              if (this instanceof n) {
                var r = e.apply(this, i.concat(o.call(arguments)));
                return Object(r) === r ? r : this;
              }
              return e.apply(t, i.concat(o.call(arguments)));
            },
            u = Math.max(0, e.length - i.length),
            l = [],
            s = 0;
          s < u;
          s++
        )
          l.push("$" + s);
        if (
          ((n = Function(
            "binder",
            "return function (" +
              l.join(",") +
              "){ return binder.apply(this,arguments); }"
          )(c)),
          e.prototype)
        ) {
          var f = function() {};
          (f.prototype = e.prototype),
            (n.prototype = new f()),
            (f.prototype = null);
        }
        return n;
      };
    },
    function(t, e, n) {
      "use strict";
      var r = n(6),
        o = n(10),
        a = n(11),
        i = n(29),
        c = Function.call.bind(o);
      r(c, { getPolyfill: a, implementation: o, shim: i }), (t.exports = c);
    },
    function(t, e, n) {
      "use strict";
      var r = n(6).supportsDescriptors,
        o = n(11),
        a = Object.getOwnPropertyDescriptor,
        i = Object.defineProperty,
        c = TypeError,
        u = Object.getPrototypeOf,
        l = /a/;
      t.exports = function() {
        if (!r || !u)
          throw new c(
            "RegExp.prototype.flags requires a true ES5 environment that supports property descriptors"
          );
        var t = o(),
          e = u(l),
          n = a(e, "flags");
        return (
          (n && n.get === t) ||
            i(e, "flags", { configurable: !0, enumerable: !1, get: t }),
          t
        );
      };
    },
    function(t, e, n) {
      "use strict";
      var r = Date.prototype.getDay,
        o = Object.prototype.toString,
        a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
      t.exports = function(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          (a
            ? (function(t) {
                try {
                  return r.call(t), !0;
                } catch (t) {
                  return !1;
                }
              })(t)
            : "[object Date]" === o.call(t))
        );
      };
    },
    function(t, e, n) {
      var r,
        o,
        a = n(12),
        i = n(13),
        c = 0,
        u = 0;
      t.exports = function(t, e, n) {
        var l = (e && n) || 0,
          s = e || [],
          f = (t = t || {}).node || r,
          p = void 0 !== t.clockseq ? t.clockseq : o;
        if (null == f || null == p) {
          var y = a();
          null == f && (f = r = [1 | y[0], y[1], y[2], y[3], y[4], y[5]]),
            null == p && (p = o = 16383 & ((y[6] << 8) | y[7]));
        }
        var m = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
          d = void 0 !== t.nsecs ? t.nsecs : u + 1,
          v = m - c + (d - u) / 1e4;
        if (
          (v < 0 && void 0 === t.clockseq && (p = (p + 1) & 16383),
          (v < 0 || m > c) && void 0 === t.nsecs && (d = 0),
          d >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (c = m), (u = d), (o = p);
        var b = (1e4 * (268435455 & (m += 122192928e5)) + d) % 4294967296;
        (s[l++] = (b >>> 24) & 255),
          (s[l++] = (b >>> 16) & 255),
          (s[l++] = (b >>> 8) & 255),
          (s[l++] = 255 & b);
        var g = (m / 4294967296 * 1e4) & 268435455;
        (s[l++] = (g >>> 8) & 255),
          (s[l++] = 255 & g),
          (s[l++] = ((g >>> 24) & 15) | 16),
          (s[l++] = (g >>> 16) & 255),
          (s[l++] = (p >>> 8) | 128),
          (s[l++] = 255 & p);
        for (var h = 0; h < 6; ++h) s[l + h] = f[h];
        return e || i(s);
      };
    },
    function(t, e, n) {
      var r = n(12),
        o = n(13);
      t.exports = function(t, e, n) {
        var a = (e && n) || 0;
        "string" == typeof t &&
          ((e = "binary" === t ? new Array(16) : null), (t = null));
        var i = (t = t || {}).random || (t.rng || r)();
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), e))
          for (var c = 0; c < 16; ++c) e[a + c] = i[c];
        return e || o(i);
      };
    },
    function(t, e, n) {
      var r = n(34);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var o = { insert: "head", singleton: !1 };
      n(36)(r, o);
      r.locals && (t.exports = r.locals);
    },
    function(t, e, n) {
      (t.exports = n(35)(!1)).push([
        t.i,
        ".json-as-form {\r\n    margin-left: 10px;\r\n}\r\n.json-as-form .start-brace,\r\n.json-as-form .end-brace {\r\n    color: #2025bb;\r\n}\r\n\r\n.json-as-form .json-row {\r\n\r\n}\r\n\r\n.json-as-form input.json_row--checkbox {\r\n    margin-left: 10px;\r\n    cursor: pointer\r\n}\r\n\r\n.json-as-form .json_row--keyQuote {\r\n    color: #167af6;\r\n    font-size: 14px;\r\n}\r\n.json-as-form .json_row--valueQuote {\r\n    color: #cd6a42;\r\n    font-size: 14px;\r\n}\r\n\r\n.json-as-form .json_row--keyWrapper {\r\n    margin-left: 5px;\r\n}\r\n\r\n.json-as-form input.json_row--key {\r\n    outline: none;\r\n    min-width: 10px;\r\n    border: none;\r\n    border-bottom: 1px solid #167af6;\r\n    font-size: 14px;\r\n    color: #167af6;\r\n}\r\n\r\n.json-as-form select.json_row--value {\r\n    outline: none;\r\n    width: 60px;\r\n    border: none;\r\n    border-bottom: 1px solid #cd6a42;\r\n    font-size: 14px;\r\n    color: #cd6a42;\r\n    max-width: 250px;\r\n}\r\n\r\n.json-as-form input.json_row--value {\r\n    outline: none;\r\n    min-width: 10px;\r\n    border: none;\r\n    border-bottom: 1px solid #cd6a42;\r\n    font-size: 14px;\r\n    color: #cd6a42;\r\n    max-width: 250px;\r\n}\r\n\r\n.json-as-form input.json_row--file {\r\n    outline: none;\r\n    margin: 5px auto;\r\n    border: none;\r\n    font-size: 14px;\r\n    color: #cd6a42;\r\n    min-width: 10px;\r\n    max-width: 175px;\r\n    line-height: 1.2;\r\n}\r\n\r\n.json-as-form span.json_row--value {\r\n    border-bottom: 1px solid #cd6a42;\r\n    font-size: 14px;\r\n    color: #767676;\r\n    max-width: 250px;\r\n}\r\n\r\n.json-as-form div.json-row span.json_row--remove {\r\n    display: none;\r\n}\r\n\r\n.json-as-form div.json-row:hover span.json_row--remove {\r\n    display: inline;\r\n}\r\n",
        ""
      ]);
    },
    function(t, e, n) {
      "use strict";
      t.exports = function(t) {
        var e = [];
        return (
          (e.toString = function() {
            return this.map(function(e) {
              var n = (function(t, e) {
                var n = t[1] || "",
                  r = t[3];
                if (!r) return n;
                if (e && "function" == typeof btoa) {
                  var o = ((i = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      c
                    )),
                    "/*# ".concat(u, " */")),
                    a = r.sources.map(function(t) {
                      return "/*# sourceURL="
                        .concat(r.sourceRoot)
                        .concat(t, " */");
                    });
                  return [n]
                    .concat(a)
                    .concat([o])
                    .join("\n");
                }
                var i, c, u;
                return [n].join("\n");
              })(e, t);
              return e[2] ? "@media ".concat(e[2], "{").concat(n, "}") : n;
            }).join("");
          }),
          (e.i = function(t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
              var a = this[o][0];
              null != a && (r[a] = !0);
            }
            for (var i = 0; i < t.length; i++) {
              var c = t[i];
              (null != c[0] && r[c[0]]) ||
                (n && !c[2]
                  ? (c[2] = n)
                  : n && (c[2] = "(".concat(c[2], ") and (").concat(n, ")")),
                e.push(c));
            }
          }),
          e
        );
      };
    },
    function(t, e, n) {
      "use strict";
      var r,
        o = {},
        a = function() {
          return (
            void 0 === r &&
              (r = Boolean(window && document && document.all && !window.atob)),
            r
          );
        },
        i = (function() {
          var t = {};
          return function(e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          };
        })();
      function c(t, e) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
          var a = t[o],
            i = e.base ? a[0] + e.base : a[0],
            c = { css: a[1], media: a[2], sourceMap: a[3] };
          r[i] ? r[i].parts.push(c) : n.push((r[i] = { id: i, parts: [c] }));
        }
        return n;
      }
      function u(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            a = o[r.id],
            i = 0;
          if (a) {
            for (a.refs++; i < a.parts.length; i++) a.parts[i](r.parts[i]);
            for (; i < r.parts.length; i++) a.parts.push(v(r.parts[i], e));
          } else {
            for (var c = []; i < r.parts.length; i++) c.push(v(r.parts[i], e));
            o[r.id] = { id: r.id, refs: 1, parts: c };
          }
        }
      }
      function l(t) {
        var e = document.createElement("style");
        if (void 0 === t.attributes.nonce) {
          var r = n.nc;
          r && (t.attributes.nonce = r);
        }
        if (
          (Object.keys(t.attributes).forEach(function(n) {
            e.setAttribute(n, t.attributes[n]);
          }),
          "function" == typeof t.insert)
        )
          t.insert(e);
        else {
          var o = i(t.insert || "head");
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(e);
        }
        return e;
      }
      var s,
        f = ((s = []),
        function(t, e) {
          return (s[t] = e), s.filter(Boolean).join("\n");
        });
      function p(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = f(e, o);
        else {
          var a = document.createTextNode(o),
            i = t.childNodes;
          i[e] && t.removeChild(i[e]),
            i.length ? t.insertBefore(a, i[e]) : t.appendChild(a);
        }
      }
      function y(t, e, n) {
        var r = n.css,
          o = n.media,
          a = n.sourceMap;
        if (
          (o && t.setAttribute("media", o),
          a &&
            btoa &&
            (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              " */"
            )),
          t.styleSheet)
        )
          t.styleSheet.cssText = r;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(r));
        }
      }
      var m = null,
        d = 0;
      function v(t, e) {
        var n, r, o;
        if (e.singleton) {
          var a = d++;
          (n = m || (m = l(e))),
            (r = p.bind(null, n, a, !1)),
            (o = p.bind(null, n, a, !0));
        } else
          (n = l(e)),
            (r = y.bind(null, n, e)),
            (o = function() {
              !(function(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(n);
            });
        return (
          r(t),
          function(e) {
            if (e) {
              if (
                e.css === t.css &&
                e.media === t.media &&
                e.sourceMap === t.sourceMap
              )
                return;
              r((t = e));
            } else o();
          }
        );
      }
      t.exports = function(t, e) {
        ((e = e || {}).attributes =
          "object" == typeof e.attributes ? e.attributes : {}),
          e.singleton || "boolean" == typeof e.singleton || (e.singleton = a());
        var n = c(t, e);
        return (
          u(n, e),
          function(t) {
            for (var r = [], a = 0; a < n.length; a++) {
              var i = n[a],
                l = o[i.id];
              l && (l.refs--, r.push(l));
            }
            t && u(c(t, e), e);
            for (var s = 0; s < r.length; s++) {
              var f = r[s];
              if (0 === f.refs) {
                for (var p = 0; p < f.parts.length; p++) f.parts[p]();
                delete o[f.id];
              }
            }
          }
        );
      };
    }
  ]);
});
//# sourceMappingURL=index.js.map
