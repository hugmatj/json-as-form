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
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function(t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function(t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            r.d(
              n,
              o,
              function(e) {
                return t[e];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 11))
    );
  })([
    function(e, r) {
      e.exports = t;
    },
    function(t, e) {
      function r(t) {
        return (r =
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
      function n(e) {
        return (
          "function" == typeof Symbol && "symbol" === r(Symbol.iterator)
            ? (t.exports = n = function(t) {
                return r(t);
              })
            : (t.exports = n = function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : r(t);
              }),
          n(e)
        );
      }
      t.exports = n;
    },
    function(t, e) {
      t.exports = function(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = r),
          t
        );
      };
    },
    function(t, e, r) {
      var n = r(12),
        o = r(13),
        c = r(14);
      t.exports = function(t) {
        return n(t) || o(t) || c();
      };
    },
    function(t, e, r) {
      var n = r(7),
        o = r(19),
        c = r(20),
        i = r(21),
        u = r(25),
        a = r(27),
        l = Date.prototype.getTime;
      function f(t, e, r) {
        var y = r || {};
        return (
          !(y.strict ? !c(t, e) : t !== e) ||
          (!t || !e || ("object" != typeof t && "object" != typeof e)
            ? y.strict
              ? c(t, e)
              : t == e
            : (function(t, e, r) {
                var c, y;
                if (typeof t != typeof e) return !1;
                if (p(t) || p(e)) return !1;
                if (t.prototype !== e.prototype) return !1;
                if (o(t) !== o(e)) return !1;
                var b = i(t),
                  g = i(e);
                if (b !== g) return !1;
                if (b || g) return t.source === e.source && u(t) === u(e);
                if (a(t) && a(e)) return l.call(t) === l.call(e);
                var m = s(t),
                  v = s(e);
                if (m !== v) return !1;
                if (m || v) {
                  if (t.length !== e.length) return !1;
                  for (c = 0; c < t.length; c++) if (t[c] !== e[c]) return !1;
                  return !0;
                }
                if (typeof t != typeof e) return !1;
                try {
                  var d = n(t),
                    h = n(e);
                } catch (t) {
                  return !1;
                }
                if (d.length !== h.length) return !1;
                for (d.sort(), h.sort(), c = d.length - 1; c >= 0; c--)
                  if (d[c] != h[c]) return !1;
                for (c = d.length - 1; c >= 0; c--)
                  if (((y = d[c]), !f(t[y], e[y], r))) return !1;
                return !0;
              })(t, e, y))
        );
      }
      function p(t) {
        return null == t;
      }
      function s(t) {
        return (
          !(!t || "object" != typeof t || "number" != typeof t.length) &&
          ("function" == typeof t.copy &&
            "function" == typeof t.slice &&
            !(t.length > 0 && "number" != typeof t[0]))
        );
      }
      t.exports = f;
    },
    function(t, e, r) {
      "use strict";
      var n = r(7),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        c = Object.prototype.toString,
        i = Array.prototype.concat,
        u = Object.defineProperty,
        a =
          u &&
          (function() {
            var t = {};
            try {
              for (var e in (u(t, "x", { enumerable: !1, value: t }), t))
                return !1;
              return t.x === t;
            } catch (t) {
              return !1;
            }
          })(),
        l = function(t, e, r, n) {
          var o;
          (e in t &&
            ("function" != typeof (o = n) ||
              "[object Function]" !== c.call(o) ||
              !n())) ||
            (a
              ? u(t, e, {
                  configurable: !0,
                  enumerable: !1,
                  value: r,
                  writable: !0
                })
              : (t[e] = r));
        },
        f = function(t, e) {
          var r = arguments.length > 2 ? arguments[2] : {},
            c = n(e);
          o && (c = i.call(c, Object.getOwnPropertySymbols(e)));
          for (var u = 0; u < c.length; u += 1) l(t, c[u], e[c[u]], r[c[u]]);
        };
      (f.supportsDescriptors = !!a), (t.exports = f);
    },
    function(t, e, r) {
      var n = r(15),
        o = r(16),
        c = r(17);
      t.exports = function(t, e) {
        return n(t) || o(t, e) || c();
      };
    },
    function(t, e, r) {
      "use strict";
      var n = Array.prototype.slice,
        o = r(8),
        c = Object.keys,
        i = c
          ? function(t) {
              return c(t);
            }
          : r(18),
        u = Object.keys;
      (i.shim = function() {
        Object.keys
          ? (function() {
              var t = Object.keys(arguments);
              return t && t.length === arguments.length;
            })(1, 2) ||
            (Object.keys = function(t) {
              return o(t) ? u(n.call(t)) : u(t);
            })
          : (Object.keys = i);
        return Object.keys || i;
      }),
        (t.exports = i);
    },
    function(t, e, r) {
      "use strict";
      var n = Object.prototype.toString;
      t.exports = function(t) {
        var e = n.call(t),
          r = "[object Arguments]" === e;
        return (
          r ||
            (r =
              "[object Array]" !== e &&
              null !== t &&
              "object" == typeof t &&
              "number" == typeof t.length &&
              t.length >= 0 &&
              "[object Function]" === n.call(t.callee)),
          r
        );
      };
    },
    function(t, e, r) {
      "use strict";
      var n = Object,
        o = TypeError;
      t.exports = function() {
        if (null != this && this !== n(this))
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
    function(t, e, r) {
      "use strict";
      var n = r(9),
        o = r(5).supportsDescriptors,
        c = Object.getOwnPropertyDescriptor,
        i = TypeError;
      t.exports = function() {
        if (!o)
          throw new i(
            "RegExp.prototype.flags requires a true ES5 environment that supports property descriptors"
          );
        if ("gim" === /a/gim.flags) {
          var t = c(RegExp.prototype, "flags");
          if (t && "function" == typeof t.get && "boolean" == typeof /a/.dotAll)
            return t.get;
        }
        return n;
      };
    },
    function(t, e, r) {
      "use strict";
      r.r(e);
      var n = r(3),
        o = r.n(n),
        c = r(2),
        i = r.n(c),
        u = r(6),
        a = r.n(u),
        l = r(1),
        f = r.n(l),
        p = r(0),
        s = r.n(p),
        y = r(4),
        b = r.n(y);
      function g(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var m = function(t) {
        var e = t.row,
          r = (t.isLast, t.meta, t.showCheckBox),
          n = t.fixedKeys,
          o = void 0 === n ? [] : n,
          c = t.onChange,
          u = t.onToggleRowStatus,
          a = t.onRemoveRow,
          l = t.rowInterpolator,
          p = function(t) {
            return s.a.createElement(
              "span",
              { style: { color: "#167af6", fontSize: 14 } },
              '"'
            );
          },
          y = function(t) {
            return s.a.createElement(
              "span",
              { style: { color: "#cd6a42", fontSize: 14 } },
              '"'
            );
          },
          b = function(t) {
            var r = t.target,
              n = r.type,
              o = r.value,
              u = r.files;
            try {
              var a = (function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? g(r, !0).forEach(function(e) {
                        i()(t, e, r[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : g(r).forEach(function(e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(r, e)
                          );
                        });
                }
                return t;
              })({}, e, { value: "file" == n ? u[0] : o });
              (a = l(a)), c(a.key, a.value);
            } catch (t) {
              c(e.key, o);
            }
          },
          m = function(t) {
            c(t, e.value);
          };
        return s.a.createElement(
          "div",
          null,
          r &&
            s.a.createElement("input", {
              type: "checkbox",
              checked: !e.disable,
              onChange: function() {
                return u(!e.disable);
              },
              style: { marginLeft: 10, cursor: "pointer" }
            }),
          s.a.createElement(
            "span",
            { style: { marginLeft: 5, color: "#167af6" } },
            s.a.createElement(p, null),
            o.includes("key")
              ? s.a.createElement("span", null, " ", e.key)
              : s.a.createElement("input", {
                  type: "text",
                  value: e.key,
                  onChange: function(t) {
                    return m(t.target.value);
                  },
                  style: {
                    outline: "none",
                    width: "".concat(
                      e.key.length ? 8 * e.key.length + 2 : 20,
                      "px"
                    ),
                    minWidth: "10px",
                    border: "none",
                    borderBottom: "1px solid #167af6",
                    fontSize: 14,
                    color: "#167af6"
                  }
                }),
            s.a.createElement(p, null),
            ":"
          ),
          s.a.createElement(
            "span",
            { style: { marginLeft: 10 } },
            "boolean" == e.type
              ? s.a.createElement(
                  "select",
                  {
                    style: {
                      outline: "none",
                      width: "60px",
                      border: "none",
                      borderBottom: "1px solid #cd6a42",
                      fontSize: 14,
                      color: "#cd6a42"
                    }
                  },
                  s.a.createElement("option", { value: !0 }, "True"),
                  s.a.createElement("option", { value: !1 }, "False")
                )
              : "file" == e.type
                ? e.value && e.value.name
                  ? s.a.createElement(
                      "span",
                      {
                        style: {
                          borderBottom: "1px solid #cd6a42",
                          fontSize: 14,
                          color: "#767676"
                        }
                      },
                      e.value.name
                    )
                  : s.a.createElement("input", {
                      type: "file",
                      onChange: function(t) {
                        return b(t);
                      },
                      onClick: function(t) {
                        t.target.value = null;
                      },
                      style: {
                        outline: "none",
                        margin: "5px auto",
                        width: "80px",
                        minWidth: "10px",
                        border: "none"
                      }
                    })
                : null !== e.value && "object" == f()(e.value)
                  ? s.a.createElement("span", null, " ", "{...}", " ")
                  : [
                      s.a.createElement(y, { key: "start-quote" }),
                      s.a.createElement("input", {
                        type: e.key.includes("password") ? "password" : "text",
                        value: e.value || "",
                        onChange: function(t) {
                          return b(t);
                        },
                        style: {
                          outline: "none",
                          width: "".concat(
                            e.value ? 8 * e.value.length + 5 : 20,
                            "px"
                          ),
                          minWidth: "10px",
                          border: "none",
                          borderBottom: "1px solid #cd6a42",
                          fontSize: 14,
                          color: "#cd6a42"
                        },
                        key: "input"
                      }),
                      s.a.createElement(y, { key: "end-quote" })
                    ]
          ),
          s.a.createElement(
            "span",
            {
              onClick: a,
              style: { marginLeft: 10, color: "red", cursor: "pointer" }
            },
            "×"
          )
        );
      };
      function v(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? v(r, !0).forEach(function(e) {
                i()(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : v(r).forEach(function(e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
        }
        return t;
      }
      e.default = function(t) {
        var e = t.json,
          r = t.meta,
          n = t.fixedKeys,
          c = t.autoAddRow,
          u = void 0 !== c && c,
          l = t.debug,
          y = void 0 !== l && l,
          g = t.onChange,
          v = t.rowInterpolator,
          h =
            void 0 === v
              ? function(t) {
                  return t;
                }
              : v,
          j = Object(p.useRef)(!0),
          O = Object(p.useRef)("object" != f()(e) || !e.length),
          w = Object(p.useState)([]),
          x = a()(w, 2),
          S = x[0],
          E = x[1];
        Object(p.useEffect)(
          function() {
            if (
              ((O.current = "object" != f()(e) || !e.length), 1 == O.current)
            ) {
              var t = k._parseJSON(d({}, e));
              b()(t, S) || E(t);
            } else b()(e, k._toJSON()) || E(o()(e));
          },
          [e]
        ),
          Object(p.useEffect)(
            function() {
              if (j.current) j.current = !1;
              else if ("function" == typeof g) {
                var t = k._toJSON();
                b()(t, e) || g(t);
              }
            },
            [S]
          );
        var k = {
          _parseJSON: function() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = Object.keys(t).map(function(e, r) {
                return { key: e, value: t[e], type: t.type || f()(t[e]) };
              }),
              r = e.length - 1;
            return (
              1 == u &&
                (e[r].key || e[r].value) &&
                (e = [].concat(o()(e), [{ key: "", value: "" }])),
              e
            );
          },
          _toJSON: function() {
            return 1 == O.current
              ? S.filter(function(t) {
                  return t.key;
                }).reduce(function(t, e) {
                  return d({}, t, i()({}, e.key, e.value));
                }, {})
              : S.filter(function(t) {
                  return t.key;
                });
          },
          _addNewRow: function() {
            E([].concat(o()(S), [{ key: "", value: "" }]));
          },
          _onChangeRow: function(t, e, r, n) {
            var c = S.map(function(n, o) {
              var c = d({}, n);
              return o == r && ((c.key = t), (c.value = e)), c;
            });
            E(n && 1 == u ? [].concat(o()(c), [{ key: "", value: "" }]) : c);
          },
          _onToggleRowStatus: function() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = arguments.length > 1 ? arguments[1] : void 0,
              r = S.map(function(r, n) {
                return n == e && (r.disable = t), r;
              });
            E(r);
          },
          _onRemoveRow: function(t) {
            var e = S.filter(function(e, r) {
              return r !== t;
            });
            e.length ? E(e) : E([{ key: "", value: "" }]);
          }
        };
        return s.a.createElement(
          "div",
          { style: { marginLeft: 10 } },
          s.a.createElement("div", null, "{"),
          S.map(function(t, e) {
            var o = S.length == e + 1;
            return s.a.createElement(m, {
              row: t,
              key: e,
              meta: r,
              isLast: o,
              fixedKeys: n,
              onChange: function(t, r) {
                return k._onChangeRow(t, r, e, o);
              },
              onToggleRowStatus: function(t) {
                return k._onToggleRowStatus(t, e);
              },
              onRemoveRow: function() {
                return k._onRemoveRow(e);
              },
              showCheckBox: !O.current,
              rowInterpolator: h
            });
          }),
          s.a.createElement("div", null, "}"),
          y &&
            s.a.createElement(
              "div",
              null,
              s.a.createElement("pre", null, JSON.stringify(S, 2, 2)),
              s.a.createElement("pre", null, JSON.stringify(e, 2, 2))
            )
        );
      };
    },
    function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, r = new Array(t.length); e < t.length; e++)
            r[e] = t[e];
          return r;
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
          var r = [],
            n = !0,
            o = !1,
            c = void 0;
          try {
            for (
              var i, u = t[Symbol.iterator]();
              !(n = (i = u.next()).done) &&
              (r.push(i.value), !e || r.length !== e);
              n = !0
            );
          } catch (t) {
            (o = !0), (c = t);
          } finally {
            try {
              n || null == u.return || u.return();
            } finally {
              if (o) throw c;
            }
          }
          return r;
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
    function(t, e, r) {
      "use strict";
      var n;
      if (!Object.keys) {
        var o = Object.prototype.hasOwnProperty,
          c = Object.prototype.toString,
          i = r(8),
          u = Object.prototype.propertyIsEnumerable,
          a = !u.call({ toString: null }, "toString"),
          l = u.call(function() {}, "prototype"),
          f = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
          ],
          p = function(t) {
            var e = t.constructor;
            return e && e.prototype === t;
          },
          s = {
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
                  !s["$" + t] &&
                  o.call(window, t) &&
                  null !== window[t] &&
                  "object" == typeof window[t]
                )
                  try {
                    p(window[t]);
                  } catch (t) {
                    return !0;
                  }
              } catch (t) {
                return !0;
              }
            return !1;
          })();
        n = function(t) {
          var e = null !== t && "object" == typeof t,
            r = "[object Function]" === c.call(t),
            n = i(t),
            u = e && "[object String]" === c.call(t),
            s = [];
          if (!e && !r && !n)
            throw new TypeError("Object.keys called on a non-object");
          var b = l && r;
          if (u && t.length > 0 && !o.call(t, 0))
            for (var g = 0; g < t.length; ++g) s.push(String(g));
          if (n && t.length > 0)
            for (var m = 0; m < t.length; ++m) s.push(String(m));
          else
            for (var v in t)
              (b && "prototype" === v) || !o.call(t, v) || s.push(String(v));
          if (a)
            for (
              var d = (function(t) {
                  if ("undefined" == typeof window || !y) return p(t);
                  try {
                    return p(t);
                  } catch (t) {
                    return !1;
                  }
                })(t),
                h = 0;
              h < f.length;
              ++h
            )
              (d && "constructor" === f[h]) || !o.call(t, f[h]) || s.push(f[h]);
          return s;
        };
      }
      t.exports = n;
    },
    function(t, e, r) {
      "use strict";
      var n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
        o = Object.prototype.toString,
        c = function(t) {
          return (
            !(n && t && "object" == typeof t && Symbol.toStringTag in t) &&
            "[object Arguments]" === o.call(t)
          );
        },
        i = function(t) {
          return (
            !!c(t) ||
            (null !== t &&
              "object" == typeof t &&
              "number" == typeof t.length &&
              t.length >= 0 &&
              "[object Array]" !== o.call(t) &&
              "[object Function]" === o.call(t.callee))
          );
        },
        u = (function() {
          return c(arguments);
        })();
      (c.isLegacyArguments = i), (t.exports = u ? c : i);
    },
    function(t, e, r) {
      "use strict";
      var n = function(t) {
        return t != t;
      };
      t.exports = function(t, e) {
        return 0 === t && 0 === e
          ? 1 / t == 1 / e
          : t === e || !(!n(t) || !n(e));
      };
    },
    function(t, e, r) {
      "use strict";
      var n = r(22),
        o = RegExp.prototype.exec,
        c = Object.getOwnPropertyDescriptor,
        i = Object.prototype.toString,
        u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
      t.exports = function(t) {
        if (!t || "object" != typeof t) return !1;
        if (!u) return "[object RegExp]" === i.call(t);
        var e = c(t, "lastIndex");
        return (
          !(!e || !n(e, "value")) &&
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
    function(t, e, r) {
      "use strict";
      var n = r(23);
      t.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
    },
    function(t, e, r) {
      "use strict";
      var n = r(24);
      t.exports = Function.prototype.bind || n;
    },
    function(t, e, r) {
      "use strict";
      var n = "Function.prototype.bind called on incompatible ",
        o = Array.prototype.slice,
        c = Object.prototype.toString;
      t.exports = function(t) {
        var e = this;
        if ("function" != typeof e || "[object Function]" !== c.call(e))
          throw new TypeError(n + e);
        for (
          var r,
            i = o.call(arguments, 1),
            u = function() {
              if (this instanceof r) {
                var n = e.apply(this, i.concat(o.call(arguments)));
                return Object(n) === n ? n : this;
              }
              return e.apply(t, i.concat(o.call(arguments)));
            },
            a = Math.max(0, e.length - i.length),
            l = [],
            f = 0;
          f < a;
          f++
        )
          l.push("$" + f);
        if (
          ((r = Function(
            "binder",
            "return function (" +
              l.join(",") +
              "){ return binder.apply(this,arguments); }"
          )(u)),
          e.prototype)
        ) {
          var p = function() {};
          (p.prototype = e.prototype),
            (r.prototype = new p()),
            (p.prototype = null);
        }
        return r;
      };
    },
    function(t, e, r) {
      "use strict";
      var n = r(5),
        o = r(9),
        c = r(10),
        i = r(26),
        u = Function.call.bind(o);
      n(u, { getPolyfill: c, implementation: o, shim: i }), (t.exports = u);
    },
    function(t, e, r) {
      "use strict";
      var n = r(5).supportsDescriptors,
        o = r(10),
        c = Object.getOwnPropertyDescriptor,
        i = Object.defineProperty,
        u = TypeError,
        a = Object.getPrototypeOf,
        l = /a/;
      t.exports = function() {
        if (!n || !a)
          throw new u(
            "RegExp.prototype.flags requires a true ES5 environment that supports property descriptors"
          );
        var t = o(),
          e = a(l),
          r = c(e, "flags");
        return (
          (r && r.get === t) ||
            i(e, "flags", { configurable: !0, enumerable: !1, get: t }),
          t
        );
      };
    },
    function(t, e, r) {
      "use strict";
      var n = Date.prototype.getDay,
        o = Object.prototype.toString,
        c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
      t.exports = function(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          (c
            ? (function(t) {
                try {
                  return n.call(t), !0;
                } catch (t) {
                  return !1;
                }
              })(t)
            : "[object Date]" === o.call(t))
        );
      };
    }
  ]);
});
//# sourceMappingURL=index.js.map
