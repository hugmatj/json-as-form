!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("react"), require("reactDOM")))
    : "function" == typeof define && define.amd
      ? define("json-as-form", ["react", "reactDOM"], t)
      : "object" == typeof exports
        ? (exports["json-as-form"] = t(require("react"), require("reactDOM")))
        : (e["json-as-form"] = t(e.react, e.reactDOM));
})(window, function(e, t) {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 38))
    );
  })([
    function(t, n) {
      t.exports = e;
    },
    function(e, t) {
      e.exports = function(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      };
    },
    function(e, t, n) {
      var r = n(15),
        o = n(16),
        a = n(17);
      e.exports = function(e) {
        return r(e) || o(e) || a();
      };
    },
    function(e, t) {
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function r(t) {
        return (
          "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
            ? (e.exports = r = function(e) {
                return n(e);
              })
            : (e.exports = r = function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : n(e);
              }),
          r(t)
        );
      }
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(8),
        o = n(22),
        a = n(23),
        i = n(24),
        c = n(28),
        u = n(30),
        l = Date.prototype.getTime;
      function s(e, t, n) {
        var y = n || {};
        return (
          !(y.strict ? !a(e, t) : e !== t) ||
          (!e || !t || ("object" != typeof e && "object" != typeof t)
            ? y.strict
              ? a(e, t)
              : e == t
            : (function(e, t, n) {
                var a, y;
                if (typeof e != typeof t) return !1;
                if (f(e) || f(t)) return !1;
                if (e.prototype !== t.prototype) return !1;
                if (o(e) !== o(t)) return !1;
                var v = i(e),
                  d = i(t);
                if (v !== d) return !1;
                if (v || d) return e.source === t.source && c(e) === c(t);
                if (u(e) && u(t)) return l.call(e) === l.call(t);
                var m = p(e),
                  b = p(t);
                if (m !== b) return !1;
                if (m || b) {
                  if (e.length !== t.length) return !1;
                  for (a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
                  return !0;
                }
                if (typeof e != typeof t) return !1;
                try {
                  var g = r(e),
                    h = r(t);
                } catch (e) {
                  return !1;
                }
                if (g.length !== h.length) return !1;
                for (g.sort(), h.sort(), a = g.length - 1; a >= 0; a--)
                  if (g[a] != h[a]) return !1;
                for (a = g.length - 1; a >= 0; a--)
                  if (((y = g[a]), !s(e[y], t[y], n))) return !1;
                return !0;
              })(e, t, y))
        );
      }
      function f(e) {
        return null == e;
      }
      function p(e) {
        return (
          !(!e || "object" != typeof e || "number" != typeof e.length) &&
          ("function" == typeof e.copy &&
            "function" == typeof e.slice &&
            !(e.length > 0 && "number" != typeof e[0]))
        );
      }
      e.exports = s;
    },
    function(e, t, n) {
      var r = n(18),
        o = n(19),
        a = n(20);
      e.exports = function(e, t) {
        return r(e) || o(e, t) || a();
      };
    },
    function(e, t, n) {
      "use strict";
      var r = n(8),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        a = Object.prototype.toString,
        i = Array.prototype.concat,
        c = Object.defineProperty,
        u =
          c &&
          (function() {
            var e = {};
            try {
              for (var t in (c(e, "x", { enumerable: !1, value: e }), e))
                return !1;
              return e.x === e;
            } catch (e) {
              return !1;
            }
          })(),
        l = function(e, t, n, r) {
          var o;
          (t in e &&
            ("function" != typeof (o = r) ||
              "[object Function]" !== a.call(o) ||
              !r())) ||
            (u
              ? c(e, t, {
                  configurable: !0,
                  enumerable: !1,
                  value: n,
                  writable: !0
                })
              : (e[t] = n));
        },
        s = function(e, t) {
          var n = arguments.length > 2 ? arguments[2] : {},
            a = r(t);
          o && (a = i.call(a, Object.getOwnPropertySymbols(t)));
          for (var c = 0; c < a.length; c += 1) l(e, a[c], t[a[c]], n[a[c]]);
        };
      (s.supportsDescriptors = !!u), (e.exports = s);
    },
    function(e, t, n) {
      var r = n(31),
        o = n(32),
        a = o;
      (a.v1 = r), (a.v4 = o), (e.exports = a);
    },
    function(e, t, n) {
      "use strict";
      var r = Array.prototype.slice,
        o = n(9),
        a = Object.keys,
        i = a
          ? function(e) {
              return a(e);
            }
          : n(21),
        c = Object.keys;
      (i.shim = function() {
        Object.keys
          ? (function() {
              var e = Object.keys(arguments);
              return e && e.length === arguments.length;
            })(1, 2) ||
            (Object.keys = function(e) {
              return o(e) ? c(r.call(e)) : c(e);
            })
          : (Object.keys = i);
        return Object.keys || i;
      }),
        (e.exports = i);
    },
    function(e, t, n) {
      "use strict";
      var r = Object.prototype.toString;
      e.exports = function(e) {
        var t = r.call(e),
          n = "[object Arguments]" === t;
        return (
          n ||
            (n =
              "[object Array]" !== t &&
              null !== e &&
              "object" == typeof e &&
              "number" == typeof e.length &&
              e.length >= 0 &&
              "[object Function]" === r.call(e.callee)),
          n
        );
      };
    },
    function(e, t, n) {
      "use strict";
      var r = Object,
        o = TypeError;
      e.exports = function() {
        if (null != this && this !== r(this))
          throw new o("RegExp.prototype.flags getter called on non-object");
        var e = "";
        return (
          this.global && (e += "g"),
          this.ignoreCase && (e += "i"),
          this.multiline && (e += "m"),
          this.dotAll && (e += "s"),
          this.unicode && (e += "u"),
          this.sticky && (e += "y"),
          e
        );
      };
    },
    function(e, t, n) {
      "use strict";
      var r = n(10),
        o = n(6).supportsDescriptors,
        a = Object.getOwnPropertyDescriptor,
        i = TypeError;
      e.exports = function() {
        if (!o)
          throw new i(
            "RegExp.prototype.flags requires a true ES5 environment that supports property descriptors"
          );
        if ("gim" === /a/gim.flags) {
          var e = a(RegExp.prototype, "flags");
          if (e && "function" == typeof e.get && "boolean" == typeof /a/.dotAll)
            return e.get;
        }
        return r;
      };
    },
    function(e, t) {
      var n =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (n) {
        var r = new Uint8Array(16);
        e.exports = function() {
          return n(r), r;
        };
      } else {
        var o = new Array(16);
        e.exports = function() {
          for (var e, t = 0; t < 16; t++)
            0 == (3 & t) && (e = 4294967296 * Math.random()),
              (o[t] = (e >>> ((3 & t) << 3)) & 255);
          return o;
        };
      }
    },
    function(e, t) {
      for (var n = [], r = 0; r < 256; ++r)
        n[r] = (r + 256).toString(16).substr(1);
      e.exports = function(e, t) {
        var r = t || 0,
          o = n;
        return [
          o[e[r++]],
          o[e[r++]],
          o[e[r++]],
          o[e[r++]],
          "-",
          o[e[r++]],
          o[e[r++]],
          "-",
          o[e[r++]],
          o[e[r++]],
          "-",
          o[e[r++]],
          o[e[r++]],
          "-",
          o[e[r++]],
          o[e[r++]],
          o[e[r++]],
          o[e[r++]],
          o[e[r++]],
          o[e[r++]]
        ].join("");
      };
    },
    function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(3),
        o = n.n(r),
        a = n(2),
        i = n.n(a),
        c = n(1),
        u = n.n(c),
        l = n(5),
        s = n.n(l),
        f = n(0),
        p = n.n(f),
        y = n(4),
        v = n.n(y),
        d = n(7),
        m = n.n(d);
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var g = function(e) {
        var t = e.row,
          n = (e.isLast, e.meta, e.showCheckBox),
          r = e.fixedKeys,
          a = void 0 === r ? [] : r,
          i = e.onChange,
          c = e.onToggleRowStatus,
          l = e.onRemoveRow,
          s = e.rowInterpolator,
          f = function(e) {
            return p.a.createElement(
              "span",
              { className: "json_row--keyQuote" },
              '"'
            );
          },
          y = function(e) {
            return p.a.createElement(
              "span",
              { className: "json_row--valueQuote" },
              '"'
            );
          },
          v = function(e) {
            var n = e.target,
              r = n.type,
              o = n.value,
              a = n.files;
            try {
              "true" == o && (o = !0), "false" == o && (o = !1);
              var c = (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? b(n, !0).forEach(function(t) {
                        u()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : b(n).forEach(function(t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                }
                return e;
              })({}, t, { value: "file" == r ? a[0] : o });
              (c = s(c)), i(c.key, c.value);
            } catch (e) {
              i(t.key, o);
            }
          },
          d = function(e) {
            i(e, t.value);
          };
        return p.a.createElement(
          "div",
          { className: "json-row" },
          n &&
            p.a.createElement("input", {
              type: "checkbox",
              checked: !t.disable,
              onChange: function() {
                return c(!t.disable);
              },
              className: "json_row--checkbox"
            }),
          p.a.createElement(
            "span",
            { className: "json_row--keyWrapper" },
            p.a.createElement(f, null),
            a.includes("key")
              ? p.a.createElement("span", null, " ", t.key)
              : p.a.createElement("input", {
                  type: "text",
                  value: t.key,
                  onChange: function(e) {
                    return d(e.target.value);
                  },
                  style: {
                    width: "".concat(
                      t.key.length ? 8 * t.key.length + 2 : 20,
                      "px"
                    )
                  },
                  className: "json_row--key"
                }),
            p.a.createElement(f, null),
            ":"
          ),
          p.a.createElement(
            "span",
            { style: { marginLeft: 10 } },
            "boolean" == t.type
              ? p.a.createElement(
                  "select",
                  {
                    className: "json_row--value",
                    value: !!t.value,
                    onChange: v
                  },
                  p.a.createElement("option", { value: !0 }, "True"),
                  p.a.createElement("option", { value: !1 }, "False")
                )
              : "file" == t.type
                ? t.value && t.value.name
                  ? p.a.createElement(
                      "span",
                      { className: "json_row--value" },
                      t.value.name
                    )
                  : p.a.createElement("input", {
                      type: "file",
                      onChange: function(e) {
                        return v(e);
                      },
                      onClick: function(e) {
                        e.target.value = null;
                      },
                      className: "json_row--file"
                    })
                : null !== t.value && "object" == o()(t.value)
                  ? p.a.createElement("span", null, " ", "{...}", " ")
                  : [
                      p.a.createElement(y, { key: "start-quote" }),
                      p.a.createElement("input", {
                        type: t.key.includes("password") ? "password" : "text",
                        value: t.value || "",
                        onChange: function(e) {
                          return v(e);
                        },
                        className: "json_row--value",
                        style: {
                          width: "".concat(
                            t.value ? 8 * t.value.length + 5 : 20,
                            "px"
                          )
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
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(n, !0).forEach(function(t) {
                u()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(n).forEach(function(t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      t.default = function(e) {
        var t = e.json,
          n = e.fixedKeys,
          r = e.detach,
          a = void 0 !== r && r,
          c = e.autoAddRow,
          l = void 0 !== c && c,
          y = e.className,
          d = void 0 === y ? "" : y,
          b = e.rowIdKey,
          h = void 0 === b ? "uuid" : b,
          w = e.debug,
          x = void 0 !== w && w,
          O = e.onChange,
          S = e.rowInterpolator,
          E =
            void 0 === S
              ? function(e) {
                  return e;
                }
              : S,
          k = Object(f.useRef)(!0),
          _ = Object(f.useRef)(!Array.isArray(t)),
          R = Object(f.useState)([]),
          C = s()(R, 2),
          P = C[0],
          N = C[1];
        Object(f.useEffect)(
          function() {
            if (!1 !== k.current || !0 !== a)
              if (((_.current = !Array.isArray(t)), 1 == _.current)) {
                var e = A._parseJSON(j({}, t));
                v()(e, P) || N(e);
              } else
                !l || (t && t.length) || (t = [{ key: "", value: "" }]),
                  v()(t, A._toJSON()) ||
                    ((t = t.map(function(e) {
                      return e[h] || (e[h] = m.a.v4()), e;
                    })),
                    N(i()(t)));
          },
          [t]
        ),
          Object(f.useEffect)(
            function() {
              if (k.current) k.current = !1;
              else if ("function" == typeof O) {
                var e = A._toJSON();
                v()(e, t) || O(e);
              }
            },
            [P]
          );
        var A = {
            _parseJSON: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = Object.keys(e).map(function(t, n) {
                  return { key: t, value: e[t], type: e.type || o()(e[t]) };
                });
              !l || (t && t.length) || (t = [{ key: "", value: "" }]);
              var n = t.length - 1;
              return (
                !0 === l &&
                  t[n] &&
                  (t[n].key || t[n].value) &&
                  (t = [].concat(i()(t), [{ key: "", value: "" }])),
                t
              );
            },
            _toJSON: function() {
              return !0 === _.current
                ? P.filter(function(e) {
                    return e.key;
                  }).reduce(function(e, t) {
                    return j({}, e, u()({}, t.key, t.value));
                  }, {})
                : P.filter(function(e) {
                    return e.key;
                  });
            },
            _addNewRow: function() {
              var e;
              N(
                [].concat(i()(P), [
                  ((e = {}),
                  u()(e, h, m.a.v4()),
                  u()(e, "key", ""),
                  u()(e, "value", ""),
                  e)
                ])
              );
            },
            _onChangeRow: function(e, t, n, r) {
              var o = P.map(function(r, o) {
                var a = j({}, r);
                return o === n && ((a.key = e), (a.value = t)), a;
              });
              N(
                r && !0 === l ? [].concat(i()(o), [{ key: "", value: "" }]) : o
              );
            },
            _onToggleRowStatus: function() {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = P.map(function(n, r) {
                  return r === t && (n.disable = e), n;
                });
              N(n);
            },
            _onRemoveRow: function(e) {
              var t = P.filter(function(t, n) {
                return n !== e;
              });
              t.length ? N(t) : N([{ key: "", value: "" }]);
            }
          },
          T = p.a.createElement("span", { className: "start-brace" }, "{"),
          D = p.a.createElement("span", { className: "end-brace" }, "}");
        return P.length
          ? p.a.createElement(
              "div",
              { className: "json-as-form ".concat(d) },
              p.a.createElement("div", null, T),
              P.map(function(e, t) {
                var r = P.length === t + 1;
                return p.a.createElement(g, {
                  row: e,
                  key: t,
                  isLast: r,
                  fixedKeys: n,
                  onChange: function(e, n) {
                    return A._onChangeRow(e, n, t, r);
                  },
                  onToggleRowStatus: function(e) {
                    return A._onToggleRowStatus(e, t);
                  },
                  onRemoveRow: function() {
                    return A._onRemoveRow(t);
                  },
                  showCheckBox: !_.current,
                  rowInterpolator: E
                });
              }),
              p.a.createElement("div", null, D),
              x &&
                p.a.createElement(
                  "div",
                  null,
                  p.a.createElement("pre", null, JSON.stringify(P, 2, 2)),
                  p.a.createElement("pre", null, JSON.stringify(t, 2, 2))
                )
            )
          : p.a.createElement("div", { className: "json-as-form ".concat(d) });
      };
    },
    function(e, t) {
      e.exports = function(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++)
            n[t] = e[t];
          return n;
        }
      };
    },
    function(e, t) {
      e.exports = function(e) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      };
    },
    function(e, t) {
      e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      };
    },
    function(e, t) {
      e.exports = function(e) {
        if (Array.isArray(e)) return e;
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        ) {
          var n = [],
            r = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (a = e);
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
    function(e, t) {
      e.exports = function() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    },
    function(e, t, n) {
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
          f = function(e) {
            var t = e.constructor;
            return t && t.prototype === e;
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
            for (var e in window)
              try {
                if (
                  !p["$" + e] &&
                  o.call(window, e) &&
                  null !== window[e] &&
                  "object" == typeof window[e]
                )
                  try {
                    f(window[e]);
                  } catch (e) {
                    return !0;
                  }
              } catch (e) {
                return !0;
              }
            return !1;
          })();
        r = function(e) {
          var t = null !== e && "object" == typeof e,
            n = "[object Function]" === a.call(e),
            r = i(e),
            c = t && "[object String]" === a.call(e),
            p = [];
          if (!t && !n && !r)
            throw new TypeError("Object.keys called on a non-object");
          var v = l && n;
          if (c && e.length > 0 && !o.call(e, 0))
            for (var d = 0; d < e.length; ++d) p.push(String(d));
          if (r && e.length > 0)
            for (var m = 0; m < e.length; ++m) p.push(String(m));
          else
            for (var b in e)
              (v && "prototype" === b) || !o.call(e, b) || p.push(String(b));
          if (u)
            for (
              var g = (function(e) {
                  if ("undefined" == typeof window || !y) return f(e);
                  try {
                    return f(e);
                  } catch (e) {
                    return !1;
                  }
                })(e),
                h = 0;
              h < s.length;
              ++h
            )
              (g && "constructor" === s[h]) || !o.call(e, s[h]) || p.push(s[h]);
          return p;
        };
      }
      e.exports = r;
    },
    function(e, t, n) {
      "use strict";
      var r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
        o = Object.prototype.toString,
        a = function(e) {
          return (
            !(r && e && "object" == typeof e && Symbol.toStringTag in e) &&
            "[object Arguments]" === o.call(e)
          );
        },
        i = function(e) {
          return (
            !!a(e) ||
            (null !== e &&
              "object" == typeof e &&
              "number" == typeof e.length &&
              e.length >= 0 &&
              "[object Array]" !== o.call(e) &&
              "[object Function]" === o.call(e.callee))
          );
        },
        c = (function() {
          return a(arguments);
        })();
      (a.isLegacyArguments = i), (e.exports = c ? a : i);
    },
    function(e, t, n) {
      "use strict";
      var r = function(e) {
        return e != e;
      };
      e.exports = function(e, t) {
        return 0 === e && 0 === t
          ? 1 / e == 1 / t
          : e === t || !(!r(e) || !r(t));
      };
    },
    function(e, t, n) {
      "use strict";
      var r = n(25),
        o = RegExp.prototype.exec,
        a = Object.getOwnPropertyDescriptor,
        i = Object.prototype.toString,
        c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
      e.exports = function(e) {
        if (!e || "object" != typeof e) return !1;
        if (!c) return "[object RegExp]" === i.call(e);
        var t = a(e, "lastIndex");
        return (
          !(!t || !r(t, "value")) &&
          (function(e) {
            try {
              var t = e.lastIndex;
              return (e.lastIndex = 0), o.call(e), !0;
            } catch (e) {
              return !1;
            } finally {
              e.lastIndex = t;
            }
          })(e)
        );
      };
    },
    function(e, t, n) {
      "use strict";
      var r = n(26);
      e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    },
    function(e, t, n) {
      "use strict";
      var r = n(27);
      e.exports = Function.prototype.bind || r;
    },
    function(e, t, n) {
      "use strict";
      var r = "Function.prototype.bind called on incompatible ",
        o = Array.prototype.slice,
        a = Object.prototype.toString;
      e.exports = function(e) {
        var t = this;
        if ("function" != typeof t || "[object Function]" !== a.call(t))
          throw new TypeError(r + t);
        for (
          var n,
            i = o.call(arguments, 1),
            c = function() {
              if (this instanceof n) {
                var r = t.apply(this, i.concat(o.call(arguments)));
                return Object(r) === r ? r : this;
              }
              return t.apply(e, i.concat(o.call(arguments)));
            },
            u = Math.max(0, t.length - i.length),
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
          t.prototype)
        ) {
          var f = function() {};
          (f.prototype = t.prototype),
            (n.prototype = new f()),
            (f.prototype = null);
        }
        return n;
      };
    },
    function(e, t, n) {
      "use strict";
      var r = n(6),
        o = n(10),
        a = n(11),
        i = n(29),
        c = Function.call.bind(o);
      r(c, { getPolyfill: a, implementation: o, shim: i }), (e.exports = c);
    },
    function(e, t, n) {
      "use strict";
      var r = n(6).supportsDescriptors,
        o = n(11),
        a = Object.getOwnPropertyDescriptor,
        i = Object.defineProperty,
        c = TypeError,
        u = Object.getPrototypeOf,
        l = /a/;
      e.exports = function() {
        if (!r || !u)
          throw new c(
            "RegExp.prototype.flags requires a true ES5 environment that supports property descriptors"
          );
        var e = o(),
          t = u(l),
          n = a(t, "flags");
        return (
          (n && n.get === e) ||
            i(t, "flags", { configurable: !0, enumerable: !1, get: e }),
          e
        );
      };
    },
    function(e, t, n) {
      "use strict";
      var r = Date.prototype.getDay,
        o = Object.prototype.toString,
        a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
      e.exports = function(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          (a
            ? (function(e) {
                try {
                  return r.call(e), !0;
                } catch (e) {
                  return !1;
                }
              })(e)
            : "[object Date]" === o.call(e))
        );
      };
    },
    function(e, t, n) {
      var r,
        o,
        a = n(12),
        i = n(13),
        c = 0,
        u = 0;
      e.exports = function(e, t, n) {
        var l = (t && n) || 0,
          s = t || [],
          f = (e = e || {}).node || r,
          p = void 0 !== e.clockseq ? e.clockseq : o;
        if (null == f || null == p) {
          var y = a();
          null == f && (f = r = [1 | y[0], y[1], y[2], y[3], y[4], y[5]]),
            null == p && (p = o = 16383 & ((y[6] << 8) | y[7]));
        }
        var v = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
          d = void 0 !== e.nsecs ? e.nsecs : u + 1,
          m = v - c + (d - u) / 1e4;
        if (
          (m < 0 && void 0 === e.clockseq && (p = (p + 1) & 16383),
          (m < 0 || v > c) && void 0 === e.nsecs && (d = 0),
          d >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (c = v), (u = d), (o = p);
        var b = (1e4 * (268435455 & (v += 122192928e5)) + d) % 4294967296;
        (s[l++] = (b >>> 24) & 255),
          (s[l++] = (b >>> 16) & 255),
          (s[l++] = (b >>> 8) & 255),
          (s[l++] = 255 & b);
        var g = (v / 4294967296 * 1e4) & 268435455;
        (s[l++] = (g >>> 8) & 255),
          (s[l++] = 255 & g),
          (s[l++] = ((g >>> 24) & 15) | 16),
          (s[l++] = (g >>> 16) & 255),
          (s[l++] = (p >>> 8) | 128),
          (s[l++] = 255 & p);
        for (var h = 0; h < 6; ++h) s[l + h] = f[h];
        return t || i(s);
      };
    },
    function(e, t, n) {
      var r = n(12),
        o = n(13);
      e.exports = function(e, t, n) {
        var a = (t && n) || 0;
        "string" == typeof e &&
          ((t = "binary" === e ? new Array(16) : null), (e = null));
        var i = (e = e || {}).random || (e.rng || r)();
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t))
          for (var c = 0; c < 16; ++c) t[a + c] = i[c];
        return t || o(i);
      };
    },
    function(e, t, n) {
      var r = n(34);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      var o = { insert: "head", singleton: !1 };
      n(36)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      (e.exports = n(35)(!1)).push([
        e.i,
        ".json-as-form {\r\n    margin-left: 10px;\r\n}\r\n.json-as-form .start-brace,\r\n.json-as-form .end-brace {\r\n    color: #2025bb;\r\n}\r\n\r\n.json-as-form .json-row {\r\n\r\n}\r\n\r\n.json-as-form input.json_row--checkbox {\r\n    margin-left: 10px;\r\n    cursor: pointer\r\n}\r\n\r\n.json-as-form .json_row--keyQuote {\r\n    color: #167af6;\r\n    font-size: 14px;\r\n}\r\n.json-as-form .json_row--valueQuote {\r\n    color: #cd6a42;\r\n    font-size: 14px;\r\n}\r\n\r\n.json-as-form .json_row--keyWrapper {\r\n    margin-left: 5px;\r\n}\r\n\r\n.json-as-form input.json_row--key {\r\n    outline: none;\r\n    min-width: 10px;\r\n    border: none;\r\n    border-bottom: 1px solid #167af6;\r\n    font-size: 14px;\r\n    color: #167af6;\r\n}\r\n\r\n.json-as-form select.json_row--value {\r\n    outline: none;\r\n    width: 60px;\r\n    border: none;\r\n    border-bottom: 1px solid #cd6a42;\r\n    font-size: 14px;\r\n    color: #cd6a42;\r\n    max-width: 250px;\r\n}\r\n\r\n.json-as-form input.json_row--value {\r\n    outline: none;\r\n    min-width: 10px;\r\n    border: none;\r\n    border-bottom: 1px solid #cd6a42;\r\n    font-size: 14px;\r\n    color: #cd6a42;\r\n    max-width: 250px;\r\n}\r\n\r\n.json-as-form input.json_row--file {\r\n    outline: none;\r\n    margin: 5px auto;\r\n    border: none;\r\n    font-size: 14px;\r\n    color: #cd6a42;\r\n    min-width: 10px;\r\n    max-width: 175px;\r\n    line-height: 2.5;\r\n}\r\n\r\n.json-as-form span.json_row--value {\r\n    border-bottom: 1px solid #cd6a42;\r\n    font-size: 14px;\r\n    color: #767676;\r\n    max-width: 250px;\r\n}\r\n\r\n.json-as-form div.json-row span.json_row--remove {\r\n    display: none;\r\n}\r\n\r\n.json-as-form div.json-row:hover span.json_row--remove {\r\n    display: inline;\r\n}\r\n",
        ""
      ]);
    },
    function(e, t, n) {
      "use strict";
      e.exports = function(e) {
        var t = [];
        return (
          (t.toString = function() {
            return this.map(function(t) {
              var n = (function(e, t) {
                var n = e[1] || "",
                  r = e[3];
                if (!r) return n;
                if (t && "function" == typeof btoa) {
                  var o = ((i = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      c
                    )),
                    "/*# ".concat(u, " */")),
                    a = r.sources.map(function(e) {
                      return "/*# sourceURL="
                        .concat(r.sourceRoot)
                        .concat(e, " */");
                    });
                  return [n]
                    .concat(a)
                    .concat([o])
                    .join("\n");
                }
                var i, c, u;
                return [n].join("\n");
              })(t, e);
              return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
              var a = this[o][0];
              null != a && (r[a] = !0);
            }
            for (var i = 0; i < e.length; i++) {
              var c = e[i];
              (null != c[0] && r[c[0]]) ||
                (n && !c[2]
                  ? (c[2] = n)
                  : n && (c[2] = "(".concat(c[2], ") and (").concat(n, ")")),
                t.push(c));
            }
          }),
          t
        );
      };
    },
    function(e, t, n) {
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
          var e = {};
          return function(t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          };
        })();
      function c(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
          var a = e[o],
            i = t.base ? a[0] + t.base : a[0],
            c = { css: a[1], media: a[2], sourceMap: a[3] };
          r[i] ? r[i].parts.push(c) : n.push((r[i] = { id: i, parts: [c] }));
        }
        return n;
      }
      function u(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = o[r.id],
            i = 0;
          if (a) {
            for (a.refs++; i < a.parts.length; i++) a.parts[i](r.parts[i]);
            for (; i < r.parts.length; i++) a.parts.push(m(r.parts[i], t));
          } else {
            for (var c = []; i < r.parts.length; i++) c.push(m(r.parts[i], t));
            o[r.id] = { id: r.id, refs: 1, parts: c };
          }
        }
      }
      function l(e) {
        var t = document.createElement("style");
        if (void 0 === e.attributes.nonce) {
          var r = n.nc;
          r && (e.attributes.nonce = r);
        }
        if (
          (Object.keys(e.attributes).forEach(function(n) {
            t.setAttribute(n, e.attributes[n]);
          }),
          "function" == typeof e.insert)
        )
          e.insert(t);
        else {
          var o = i(e.insert || "head");
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        }
        return t;
      }
      var s,
        f = ((s = []),
        function(e, t) {
          return (s[e] = t), s.filter(Boolean).join("\n");
        });
      function p(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = f(t, o);
        else {
          var a = document.createTextNode(o),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]),
            i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
        }
      }
      function y(e, t, n) {
        var r = n.css,
          o = n.media,
          a = n.sourceMap;
        if (
          (o && e.setAttribute("media", o),
          a &&
            btoa &&
            (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              " */"
            )),
          e.styleSheet)
        )
          e.styleSheet.cssText = r;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(r));
        }
      }
      var v = null,
        d = 0;
      function m(e, t) {
        var n, r, o;
        if (t.singleton) {
          var a = d++;
          (n = v || (v = l(t))),
            (r = p.bind(null, n, a, !1)),
            (o = p.bind(null, n, a, !0));
        } else
          (n = l(t)),
            (r = y.bind(null, n, t)),
            (o = function() {
              !(function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            });
        return (
          r(e),
          function(t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              r((e = t));
            } else o();
          }
        );
      }
      e.exports = function(e, t) {
        ((t = t || {}).attributes =
          "object" == typeof t.attributes ? t.attributes : {}),
          t.singleton || "boolean" == typeof t.singleton || (t.singleton = a());
        var n = c(e, t);
        return (
          u(n, t),
          function(e) {
            for (var r = [], a = 0; a < n.length; a++) {
              var i = n[a],
                l = o[i.id];
              l && (l.refs--, r.push(l));
            }
            e && u(c(e, t), t);
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
    },
    function(e, n) {
      e.exports = t;
    },
    function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(5),
        o = n.n(r),
        a = n(0),
        i = n.n(a),
        c = n(37),
        u = n.n(c),
        l = n(14);
      u.a.render(
        i.a.createElement(function() {
          var e = Object(a.useState)({}),
            t = o()(e, 2),
            n = t[0],
            r = t[1],
            c = Object(a.useState)([
              { key: "name", value: "json-as-form", type: "string" },
              { key: "file", value: "", type: "file" },
              { key: "is OSS?", value: !1, type: "boolean" }
            ]),
            u = o()(c, 2),
            s = u[0],
            f = u[1];
          return i.a.createElement(
            "div",
            null,
            i.a.createElement("pre", null, JSON.stringify(n, 4, 4)),
            i.a.createElement(l.default, {
              json: n,
              fixedKeys: [],
              debug: !1,
              autoAddRow: !0,
              detach: !0,
              onChange: function(e) {
                r(e);
              },
              rowInterpolator: function(e) {
                return (
                  console.log("row interpolator", e),
                  "Dhanani" == e.value && (e.value = "Firecamp"),
                  e
                );
              }
            }),
            i.a.createElement(l.default, {
              json: s,
              fixedKeys: [],
              debug: !1,
              autoAddRow: !0,
              onChange: function(e) {
                f(e);
              },
              rowInterpolator: function(e) {
                return (
                  console.log("row interpolator", e),
                  "Dhanani" == e.value && (e.value = "Firecamp"),
                  e
                );
              }
            }),
            i.a.createElement("pre", null, JSON.stringify(s, 4, 4))
          );
        }, null),
        document.getElementById("root")
      );
    }
  ]);
});
//# sourceMappingURL=index.js.map
