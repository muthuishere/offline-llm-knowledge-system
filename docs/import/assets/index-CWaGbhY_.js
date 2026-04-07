var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let wk, xd, mk, wp, uk, pk, Uu, br, my, cd, el, Gy, md, Xy, dk, Vy, vk, Ky, yp, l0, sk, lk, be, dy, ck, ak, on, Sy, Mi, Ny, yk, Sp, Ep, gk, fk, cl, ky, hk, ly, Ye, cy, vy, Fi, ll, Tp, Hp;
let __tla = (async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]')) l(u);
    new MutationObserver((u) => {
      for (const a of u) if (a.type === "childList") for (const c of a.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && l(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function i(u) {
      const a = {};
      return u.integrity && (a.integrity = u.integrity), u.referrerPolicy && (a.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? a.credentials = "include" : u.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
    }
    function l(u) {
      if (u.ep) return;
      u.ep = true;
      const a = i(u);
      fetch(u.href, a);
    }
  })();
  function al(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var iu = {
    exports: {}
  }, Ci = {}, ou = {
    exports: {}
  }, Ie = {};
  var Qf;
  function _g() {
    if (Qf) return Ie;
    Qf = 1;
    var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
    function v(_) {
      return _ === null || typeof _ != "object" ? null : (_ = y && _[y] || _["@@iterator"], typeof _ == "function" ? _ : null);
    }
    var w = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, I = Object.assign, D = {};
    function N(_, M, S) {
      this.props = _, this.context = M, this.refs = D, this.updater = S || w;
    }
    N.prototype.isReactComponent = {}, N.prototype.setState = function(_, M) {
      if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, _, M, "setState");
    }, N.prototype.forceUpdate = function(_) {
      this.updater.enqueueForceUpdate(this, _, "forceUpdate");
    };
    function T() {
    }
    T.prototype = N.prototype;
    function b(_, M, S) {
      this.props = _, this.context = M, this.refs = D, this.updater = S || w;
    }
    var L = b.prototype = new T();
    L.constructor = b, I(L, N.prototype), L.isPureReactComponent = true;
    var $ = Array.isArray, ee = Object.prototype.hasOwnProperty, R = {
      current: null
    }, te = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function re(_, M, S) {
      var oe, pe = {}, de = null, Ce = null;
      if (M != null) for (oe in M.ref !== void 0 && (Ce = M.ref), M.key !== void 0 && (de = "" + M.key), M) ee.call(M, oe) && !te.hasOwnProperty(oe) && (pe[oe] = M[oe]);
      var ke = arguments.length - 2;
      if (ke === 1) pe.children = S;
      else if (1 < ke) {
        for (var Te = Array(ke), He = 0; He < ke; He++) Te[He] = arguments[He + 2];
        pe.children = Te;
      }
      if (_ && _.defaultProps) for (oe in ke = _.defaultProps, ke) pe[oe] === void 0 && (pe[oe] = ke[oe]);
      return {
        $$typeof: t,
        type: _,
        key: de,
        ref: Ce,
        props: pe,
        _owner: R.current
      };
    }
    function le(_, M) {
      return {
        $$typeof: t,
        type: _.type,
        key: M,
        ref: _.ref,
        props: _.props,
        _owner: _._owner
      };
    }
    function he(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function G(_) {
      var M = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + _.replace(/[=:]/g, function(S) {
        return M[S];
      });
    }
    var B = /\/+/g;
    function ue(_, M) {
      return typeof _ == "object" && _ !== null && _.key != null ? G("" + _.key) : M.toString(36);
    }
    function J(_, M, S, oe, pe) {
      var de = typeof _;
      (de === "undefined" || de === "boolean") && (_ = null);
      var Ce = false;
      if (_ === null) Ce = true;
      else switch (de) {
        case "string":
        case "number":
          Ce = true;
          break;
        case "object":
          switch (_.$$typeof) {
            case t:
            case r:
              Ce = true;
          }
      }
      if (Ce) return Ce = _, pe = pe(Ce), _ = oe === "" ? "." + ue(Ce, 0) : oe, $(pe) ? (S = "", _ != null && (S = _.replace(B, "$&/") + "/"), J(pe, M, S, "", function(He) {
        return He;
      })) : pe != null && (he(pe) && (pe = le(pe, S + (!pe.key || Ce && Ce.key === pe.key ? "" : ("" + pe.key).replace(B, "$&/") + "/") + _)), M.push(pe)), 1;
      if (Ce = 0, oe = oe === "" ? "." : oe + ":", $(_)) for (var ke = 0; ke < _.length; ke++) {
        de = _[ke];
        var Te = oe + ue(de, ke);
        Ce += J(de, M, S, Te, pe);
      }
      else if (Te = v(_), typeof Te == "function") for (_ = Te.call(_), ke = 0; !(de = _.next()).done; ) de = de.value, Te = oe + ue(de, ke++), Ce += J(de, M, S, Te, pe);
      else if (de === "object") throw M = String(_), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
      return Ce;
    }
    function V(_, M, S) {
      if (_ == null) return _;
      var oe = [], pe = 0;
      return J(_, oe, "", "", function(de) {
        return M.call(S, de, pe++);
      }), oe;
    }
    function Q(_) {
      if (_._status === -1) {
        var M = _._result;
        M = M(), M.then(function(S) {
          (_._status === 0 || _._status === -1) && (_._status = 1, _._result = S);
        }, function(S) {
          (_._status === 0 || _._status === -1) && (_._status = 2, _._result = S);
        }), _._status === -1 && (_._status = 0, _._result = M);
      }
      if (_._status === 1) return _._result.default;
      throw _._result;
    }
    var ne = {
      current: null
    }, U = {
      transition: null
    }, X = {
      ReactCurrentDispatcher: ne,
      ReactCurrentBatchConfig: U,
      ReactCurrentOwner: R
    };
    function k() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return Ie.Children = {
      map: V,
      forEach: function(_, M, S) {
        V(_, function() {
          M.apply(this, arguments);
        }, S);
      },
      count: function(_) {
        var M = 0;
        return V(_, function() {
          M++;
        }), M;
      },
      toArray: function(_) {
        return V(_, function(M) {
          return M;
        }) || [];
      },
      only: function(_) {
        if (!he(_)) throw Error("React.Children.only expected to receive a single React element child.");
        return _;
      }
    }, Ie.Component = N, Ie.Fragment = i, Ie.Profiler = u, Ie.PureComponent = b, Ie.StrictMode = l, Ie.Suspense = h, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, Ie.act = k, Ie.cloneElement = function(_, M, S) {
      if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
      var oe = I({}, _.props), pe = _.key, de = _.ref, Ce = _._owner;
      if (M != null) {
        if (M.ref !== void 0 && (de = M.ref, Ce = R.current), M.key !== void 0 && (pe = "" + M.key), _.type && _.type.defaultProps) var ke = _.type.defaultProps;
        for (Te in M) ee.call(M, Te) && !te.hasOwnProperty(Te) && (oe[Te] = M[Te] === void 0 && ke !== void 0 ? ke[Te] : M[Te]);
      }
      var Te = arguments.length - 2;
      if (Te === 1) oe.children = S;
      else if (1 < Te) {
        ke = Array(Te);
        for (var He = 0; He < Te; He++) ke[He] = arguments[He + 2];
        oe.children = ke;
      }
      return {
        $$typeof: t,
        type: _.type,
        key: pe,
        ref: de,
        props: oe,
        _owner: Ce
      };
    }, Ie.createContext = function(_) {
      return _ = {
        $$typeof: c,
        _currentValue: _,
        _currentValue2: _,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }, _.Provider = {
        $$typeof: a,
        _context: _
      }, _.Consumer = _;
    }, Ie.createElement = re, Ie.createFactory = function(_) {
      var M = re.bind(null, _);
      return M.type = _, M;
    }, Ie.createRef = function() {
      return {
        current: null
      };
    }, Ie.forwardRef = function(_) {
      return {
        $$typeof: f,
        render: _
      };
    }, Ie.isValidElement = he, Ie.lazy = function(_) {
      return {
        $$typeof: g,
        _payload: {
          _status: -1,
          _result: _
        },
        _init: Q
      };
    }, Ie.memo = function(_, M) {
      return {
        $$typeof: m,
        type: _,
        compare: M === void 0 ? null : M
      };
    }, Ie.startTransition = function(_) {
      var M = U.transition;
      U.transition = {};
      try {
        _();
      } finally {
        U.transition = M;
      }
    }, Ie.unstable_act = k, Ie.useCallback = function(_, M) {
      return ne.current.useCallback(_, M);
    }, Ie.useContext = function(_) {
      return ne.current.useContext(_);
    }, Ie.useDebugValue = function() {
    }, Ie.useDeferredValue = function(_) {
      return ne.current.useDeferredValue(_);
    }, Ie.useEffect = function(_, M) {
      return ne.current.useEffect(_, M);
    }, Ie.useId = function() {
      return ne.current.useId();
    }, Ie.useImperativeHandle = function(_, M, S) {
      return ne.current.useImperativeHandle(_, M, S);
    }, Ie.useInsertionEffect = function(_, M) {
      return ne.current.useInsertionEffect(_, M);
    }, Ie.useLayoutEffect = function(_, M) {
      return ne.current.useLayoutEffect(_, M);
    }, Ie.useMemo = function(_, M) {
      return ne.current.useMemo(_, M);
    }, Ie.useReducer = function(_, M, S) {
      return ne.current.useReducer(_, M, S);
    }, Ie.useRef = function(_) {
      return ne.current.useRef(_);
    }, Ie.useState = function(_) {
      return ne.current.useState(_);
    }, Ie.useSyncExternalStore = function(_, M, S) {
      return ne.current.useSyncExternalStore(_, M, S);
    }, Ie.useTransition = function() {
      return ne.current.useTransition();
    }, Ie.version = "18.3.1", Ie;
  }
  var Kf;
  function Bu() {
    return Kf || (Kf = 1, ou.exports = _g()), ou.exports;
  }
  var Gf;
  function Ng() {
    if (Gf) return Ci;
    Gf = 1;
    var t = Bu(), r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function c(f, h, m) {
      var g, y = {}, v = null, w = null;
      m !== void 0 && (v = "" + m), h.key !== void 0 && (v = "" + h.key), h.ref !== void 0 && (w = h.ref);
      for (g in h) l.call(h, g) && !a.hasOwnProperty(g) && (y[g] = h[g]);
      if (f && f.defaultProps) for (g in h = f.defaultProps, h) y[g] === void 0 && (y[g] = h[g]);
      return {
        $$typeof: r,
        type: f,
        key: v,
        ref: w,
        props: y,
        _owner: u.current
      };
    }
    return Ci.Fragment = i, Ci.jsx = c, Ci.jsxs = c, Ci;
  }
  var Xf;
  function Dg() {
    return Xf || (Xf = 1, iu.exports = Ng()), iu.exports;
  }
  var j = Dg(), ye = Bu();
  const Og = al(ye);
  var Zo = {}, lu = {
    exports: {}
  }, yt = {}, su = {
    exports: {}
  }, uu = {};
  var Jf;
  function Ag() {
    return Jf || (Jf = 1, (function(t) {
      function r(U, X) {
        var k = U.length;
        U.push(X);
        e: for (; 0 < k; ) {
          var _ = k - 1 >>> 1, M = U[_];
          if (0 < u(M, X)) U[_] = X, U[k] = M, k = _;
          else break e;
        }
      }
      function i(U) {
        return U.length === 0 ? null : U[0];
      }
      function l(U) {
        if (U.length === 0) return null;
        var X = U[0], k = U.pop();
        if (k !== X) {
          U[0] = k;
          e: for (var _ = 0, M = U.length, S = M >>> 1; _ < S; ) {
            var oe = 2 * (_ + 1) - 1, pe = U[oe], de = oe + 1, Ce = U[de];
            if (0 > u(pe, k)) de < M && 0 > u(Ce, pe) ? (U[_] = Ce, U[de] = k, _ = de) : (U[_] = pe, U[oe] = k, _ = oe);
            else if (de < M && 0 > u(Ce, k)) U[_] = Ce, U[de] = k, _ = de;
            else break e;
          }
        }
        return X;
      }
      function u(U, X) {
        var k = U.sortIndex - X.sortIndex;
        return k !== 0 ? k : U.id - X.id;
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        t.unstable_now = function() {
          return a.now();
        };
      } else {
        var c = Date, f = c.now();
        t.unstable_now = function() {
          return c.now() - f;
        };
      }
      var h = [], m = [], g = 1, y = null, v = 3, w = false, I = false, D = false, N = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function L(U) {
        for (var X = i(m); X !== null; ) {
          if (X.callback === null) l(m);
          else if (X.startTime <= U) l(m), X.sortIndex = X.expirationTime, r(h, X);
          else break;
          X = i(m);
        }
      }
      function $(U) {
        if (D = false, L(U), !I) if (i(h) !== null) I = true, Q(ee);
        else {
          var X = i(m);
          X !== null && ne($, X.startTime - U);
        }
      }
      function ee(U, X) {
        I = false, D && (D = false, T(re), re = -1), w = true;
        var k = v;
        try {
          for (L(X), y = i(h); y !== null && (!(y.expirationTime > X) || U && !G()); ) {
            var _ = y.callback;
            if (typeof _ == "function") {
              y.callback = null, v = y.priorityLevel;
              var M = _(y.expirationTime <= X);
              X = t.unstable_now(), typeof M == "function" ? y.callback = M : y === i(h) && l(h), L(X);
            } else l(h);
            y = i(h);
          }
          if (y !== null) var S = true;
          else {
            var oe = i(m);
            oe !== null && ne($, oe.startTime - X), S = false;
          }
          return S;
        } finally {
          y = null, v = k, w = false;
        }
      }
      var R = false, te = null, re = -1, le = 5, he = -1;
      function G() {
        return !(t.unstable_now() - he < le);
      }
      function B() {
        if (te !== null) {
          var U = t.unstable_now();
          he = U;
          var X = true;
          try {
            X = te(true, U);
          } finally {
            X ? ue() : (R = false, te = null);
          }
        } else R = false;
      }
      var ue;
      if (typeof b == "function") ue = function() {
        b(B);
      };
      else if (typeof MessageChannel < "u") {
        var J = new MessageChannel(), V = J.port2;
        J.port1.onmessage = B, ue = function() {
          V.postMessage(null);
        };
      } else ue = function() {
        N(B, 0);
      };
      function Q(U) {
        te = U, R || (R = true, ue());
      }
      function ne(U, X) {
        re = N(function() {
          U(t.unstable_now());
        }, X);
      }
      t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(U) {
        U.callback = null;
      }, t.unstable_continueExecution = function() {
        I || w || (I = true, Q(ee));
      }, t.unstable_forceFrameRate = function(U) {
        0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : le = 0 < U ? Math.floor(1e3 / U) : 5;
      }, t.unstable_getCurrentPriorityLevel = function() {
        return v;
      }, t.unstable_getFirstCallbackNode = function() {
        return i(h);
      }, t.unstable_next = function(U) {
        switch (v) {
          case 1:
          case 2:
          case 3:
            var X = 3;
            break;
          default:
            X = v;
        }
        var k = v;
        v = X;
        try {
          return U();
        } finally {
          v = k;
        }
      }, t.unstable_pauseExecution = function() {
      }, t.unstable_requestPaint = function() {
      }, t.unstable_runWithPriority = function(U, X) {
        switch (U) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            U = 3;
        }
        var k = v;
        v = U;
        try {
          return X();
        } finally {
          v = k;
        }
      }, t.unstable_scheduleCallback = function(U, X, k) {
        var _ = t.unstable_now();
        switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? _ + k : _) : k = _, U) {
          case 1:
            var M = -1;
            break;
          case 2:
            M = 250;
            break;
          case 5:
            M = 1073741823;
            break;
          case 4:
            M = 1e4;
            break;
          default:
            M = 5e3;
        }
        return M = k + M, U = {
          id: g++,
          callback: X,
          priorityLevel: U,
          startTime: k,
          expirationTime: M,
          sortIndex: -1
        }, k > _ ? (U.sortIndex = k, r(m, U), i(h) === null && U === i(m) && (D ? (T(re), re = -1) : D = true, ne($, k - _))) : (U.sortIndex = M, r(h, U), I || w || (I = true, Q(ee))), U;
      }, t.unstable_shouldYield = G, t.unstable_wrapCallback = function(U) {
        var X = v;
        return function() {
          var k = v;
          v = X;
          try {
            return U.apply(this, arguments);
          } finally {
            v = k;
          }
        };
      };
    })(uu)), uu;
  }
  var Zf;
  function Rg() {
    return Zf || (Zf = 1, su.exports = Ag()), su.exports;
  }
  var ed;
  function Lg() {
    if (ed) return yt;
    ed = 1;
    var t = Bu(), r = Rg();
    function i(e) {
      for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 1; o < arguments.length; o++) n += "&args[]=" + encodeURIComponent(arguments[o]);
      return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var l = /* @__PURE__ */ new Set(), u = {};
    function a(e, n) {
      c(e, n), c(e + "Capture", n);
    }
    function c(e, n) {
      for (u[e] = n, e = 0; e < n.length; e++) l.add(n[e]);
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, y = {};
    function v(e) {
      return h.call(y, e) ? true : h.call(g, e) ? false : m.test(e) ? y[e] = true : (g[e] = true, false);
    }
    function w(e, n, o, s) {
      if (o !== null && o.type === 0) return false;
      switch (typeof n) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          return s ? false : o !== null ? !o.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
          return false;
      }
    }
    function I(e, n, o, s) {
      if (n === null || typeof n > "u" || w(e, n, o, s)) return true;
      if (s) return false;
      if (o !== null) switch (o.type) {
        case 3:
          return !n;
        case 4:
          return n === false;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
      return false;
    }
    function D(e, n, o, s, d, p, x) {
      this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = s, this.attributeNamespace = d, this.mustUseProperty = o, this.propertyName = e, this.type = n, this.sanitizeURL = p, this.removeEmptyString = x;
    }
    var N = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
      N[e] = new D(e, 0, false, e, null, false, false);
    }), [
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "className",
        "class"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ]
    ].forEach(function(e) {
      var n = e[0];
      N[n] = new D(n, 1, false, e[1], null, false, false);
    }), [
      "contentEditable",
      "draggable",
      "spellCheck",
      "value"
    ].forEach(function(e) {
      N[e] = new D(e, 2, false, e.toLowerCase(), null, false, false);
    }), [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha"
    ].forEach(function(e) {
      N[e] = new D(e, 2, false, e, null, false, false);
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
      N[e] = new D(e, 3, false, e.toLowerCase(), null, false, false);
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(e) {
      N[e] = new D(e, 3, true, e, null, false, false);
    }), [
      "capture",
      "download"
    ].forEach(function(e) {
      N[e] = new D(e, 4, false, e, null, false, false);
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(e) {
      N[e] = new D(e, 6, false, e, null, false, false);
    }), [
      "rowSpan",
      "start"
    ].forEach(function(e) {
      N[e] = new D(e, 5, false, e.toLowerCase(), null, false, false);
    });
    var T = /[\-:]([a-z])/g;
    function b(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
      var n = e.replace(T, b);
      N[n] = new D(n, 1, false, e, null, false, false);
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
      var n = e.replace(T, b);
      N[n] = new D(n, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(e) {
      var n = e.replace(T, b);
      N[n] = new D(n, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
    }), [
      "tabIndex",
      "crossOrigin"
    ].forEach(function(e) {
      N[e] = new D(e, 1, false, e.toLowerCase(), null, false, false);
    }), N.xlinkHref = new D("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), [
      "src",
      "href",
      "action",
      "formAction"
    ].forEach(function(e) {
      N[e] = new D(e, 1, false, e.toLowerCase(), null, true, true);
    });
    function L(e, n, o, s) {
      var d = N.hasOwnProperty(n) ? N[n] : null;
      (d !== null ? d.type !== 0 : s || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (I(n, o, d, s) && (o = null), s || d === null ? v(n) && (o === null ? e.removeAttribute(n) : e.setAttribute(n, "" + o)) : d.mustUseProperty ? e[d.propertyName] = o === null ? d.type === 3 ? false : "" : o : (n = d.attributeName, s = d.attributeNamespace, o === null ? e.removeAttribute(n) : (d = d.type, o = d === 3 || d === 4 && o === true ? "" : "" + o, s ? e.setAttributeNS(s, n, o) : e.setAttribute(n, o))));
    }
    var $ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ee = Symbol.for("react.element"), R = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), G = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), U = Symbol.iterator;
    function X(e) {
      return e === null || typeof e != "object" ? null : (e = U && e[U] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var k = Object.assign, _;
    function M(e) {
      if (_ === void 0) try {
        throw Error();
      } catch (o) {
        var n = o.stack.trim().match(/\n( *(at )?)/);
        _ = n && n[1] || "";
      }
      return `
` + _ + e;
    }
    var S = false;
    function oe(e, n) {
      if (!e || S) return "";
      S = true;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (n) if (n = function() {
          throw Error();
        }, Object.defineProperty(n.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n, []);
          } catch (z) {
            var s = z;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (z) {
            s = z;
          }
          e.call(n.prototype);
        }
        else {
          try {
            throw Error();
          } catch (z) {
            s = z;
          }
          e();
        }
      } catch (z) {
        if (z && s && typeof z.stack == "string") {
          for (var d = z.stack.split(`
`), p = s.stack.split(`
`), x = d.length - 1, E = p.length - 1; 1 <= x && 0 <= E && d[x] !== p[E]; ) E--;
          for (; 1 <= x && 0 <= E; x--, E--) if (d[x] !== p[E]) {
            if (x !== 1 || E !== 1) do
              if (x--, E--, 0 > E || d[x] !== p[E]) {
                var C = `
` + d[x].replace(" at new ", " at ");
                return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
              }
            while (1 <= x && 0 <= E);
            break;
          }
        }
      } finally {
        S = false, Error.prepareStackTrace = o;
      }
      return (e = e ? e.displayName || e.name : "") ? M(e) : "";
    }
    function pe(e) {
      switch (e.tag) {
        case 5:
          return M(e.type);
        case 16:
          return M("Lazy");
        case 13:
          return M("Suspense");
        case 19:
          return M("SuspenseList");
        case 0:
        case 2:
        case 15:
          return e = oe(e.type, false), e;
        case 11:
          return e = oe(e.type.render, false), e;
        case 1:
          return e = oe(e.type, true), e;
        default:
          return "";
      }
    }
    function de(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case te:
          return "Fragment";
        case R:
          return "Portal";
        case le:
          return "Profiler";
        case re:
          return "StrictMode";
        case ue:
          return "Suspense";
        case J:
          return "SuspenseList";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case G:
          return (e.displayName || "Context") + ".Consumer";
        case he:
          return (e._context.displayName || "Context") + ".Provider";
        case B:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case V:
          return n = e.displayName || null, n !== null ? n : de(e.type) || "Memo";
        case Q:
          n = e._payload, e = e._init;
          try {
            return de(e(n));
          } catch {
          }
      }
      return null;
    }
    function Ce(e) {
      var n = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (n.displayName || "Context") + ".Consumer";
        case 10:
          return (n._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return n;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return de(n);
        case 8:
          return n === re ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof n == "function") return n.displayName || n.name || null;
          if (typeof n == "string") return n;
      }
      return null;
    }
    function ke(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function Te(e) {
      var n = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
    }
    function He(e) {
      var n = Te(e) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), s = "" + e[n];
      if (!e.hasOwnProperty(n) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
        var d = o.get, p = o.set;
        return Object.defineProperty(e, n, {
          configurable: true,
          get: function() {
            return d.call(this);
          },
          set: function(x) {
            s = "" + x, p.call(this, x);
          }
        }), Object.defineProperty(e, n, {
          enumerable: o.enumerable
        }), {
          getValue: function() {
            return s;
          },
          setValue: function(x) {
            s = "" + x;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[n];
          }
        };
      }
    }
    function Ot(e) {
      e._valueTracker || (e._valueTracker = He(e));
    }
    function Vn(e) {
      if (!e) return false;
      var n = e._valueTracker;
      if (!n) return true;
      var o = n.getValue(), s = "";
      return e && (s = Te(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== o ? (n.setValue(e), true) : false;
    }
    function ln(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function jr(e, n) {
      var o = n.checked;
      return k({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: o ?? e._wrapperState.initialChecked
      });
    }
    function Br(e, n) {
      var o = n.defaultValue == null ? "" : n.defaultValue, s = n.checked != null ? n.checked : n.defaultChecked;
      o = ke(n.value != null ? n.value : o), e._wrapperState = {
        initialChecked: s,
        initialValue: o,
        controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
      };
    }
    function Ur(e, n) {
      n = n.checked, n != null && L(e, "checked", n, false);
    }
    function ir(e, n) {
      Ur(e, n);
      var o = ke(n.value), s = n.type;
      if (o != null) s === "number" ? (o === 0 && e.value === "" || e.value != o) && (e.value = "" + o) : e.value !== "" + o && (e.value = "" + o);
      else if (s === "submit" || s === "reset") {
        e.removeAttribute("value");
        return;
      }
      n.hasOwnProperty("value") ? or(e, n.type, o) : n.hasOwnProperty("defaultValue") && or(e, n.type, ke(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
    }
    function Ui(e, n, o) {
      if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var s = n.type;
        if (!(s !== "submit" && s !== "reset" || n.value !== void 0 && n.value !== null)) return;
        n = "" + e._wrapperState.initialValue, o || n === e.value || (e.value = n), e.defaultValue = n;
      }
      o = e.name, o !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, o !== "" && (e.name = o);
    }
    function or(e, n, o) {
      (n !== "number" || ln(e.ownerDocument) !== e) && (o == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
    }
    var gn = Array.isArray;
    function yn(e, n, o, s) {
      if (e = e.options, n) {
        n = {};
        for (var d = 0; d < o.length; d++) n["$" + o[d]] = true;
        for (o = 0; o < e.length; o++) d = n.hasOwnProperty("$" + e[o].value), e[o].selected !== d && (e[o].selected = d), d && s && (e[o].defaultSelected = true);
      } else {
        for (o = "" + ke(o), n = null, d = 0; d < e.length; d++) {
          if (e[d].value === o) {
            e[d].selected = true, s && (e[d].defaultSelected = true);
            return;
          }
          n !== null || e[d].disabled || (n = e[d]);
        }
        n !== null && (n.selected = true);
      }
    }
    function Vr(e, n) {
      if (n.dangerouslySetInnerHTML != null) throw Error(i(91));
      return k({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
      });
    }
    function Vi(e, n) {
      var o = n.value;
      if (o == null) {
        if (o = n.children, n = n.defaultValue, o != null) {
          if (n != null) throw Error(i(92));
          if (gn(o)) {
            if (1 < o.length) throw Error(i(93));
            o = o[0];
          }
          n = o;
        }
        n == null && (n = ""), o = n;
      }
      e._wrapperState = {
        initialValue: ke(o)
      };
    }
    function Hi(e, n) {
      var o = ke(n.value), s = ke(n.defaultValue);
      o != null && (o = "" + o, o !== e.value && (e.value = o), n.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)), s != null && (e.defaultValue = "" + s);
    }
    function Wi(e) {
      var n = e.textContent;
      n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
    }
    function F(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Z(e, n) {
      return e == null || e === "http://www.w3.org/1999/xhtml" ? F(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var ve, Ee = (function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, o, s, d) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(n, o, s, d);
        });
      } : e;
    })(function(e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
      else {
        for (ve = ve || document.createElement("div"), ve.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ve.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
    function Pe(e, n) {
      if (n) {
        var o = e.firstChild;
        if (o && o === e.lastChild && o.nodeType === 3) {
          o.nodeValue = n;
          return;
        }
      }
      e.textContent = n;
    }
    var tt = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, sn = [
      "Webkit",
      "ms",
      "Moz",
      "O"
    ];
    Object.keys(tt).forEach(function(e) {
      sn.forEach(function(n) {
        n = n + e.charAt(0).toUpperCase() + e.substring(1), tt[n] = tt[e];
      });
    });
    function At(e, n, o) {
      return n == null || typeof n == "boolean" || n === "" ? "" : o || typeof n != "number" || n === 0 || tt.hasOwnProperty(e) && tt[e] ? ("" + n).trim() : n + "px";
    }
    function vn(e, n) {
      e = e.style;
      for (var o in n) if (n.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, d = At(o, n[o], s);
        o === "float" && (o = "cssFloat"), s ? e.setProperty(o, d) : e[o] = d;
      }
    }
    var Hn = k({
      menuitem: true
    }, {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    });
    function nt(e, n) {
      if (n) {
        if (Hn[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
        if (n.dangerouslySetInnerHTML != null) {
          if (n.children != null) throw Error(i(60));
          if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(i(61));
        }
        if (n.style != null && typeof n.style != "object") throw Error(i(62));
      }
    }
    function Kt(e, n) {
      if (e.indexOf("-") === -1) return typeof n.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var kt = null;
    function wl(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var xl = null, lr = null, sr = null;
    function ca(e) {
      if (e = ci(e)) {
        if (typeof xl != "function") throw Error(i(280));
        var n = e.stateNode;
        n && (n = ho(n), xl(e.stateNode, e.type, n));
      }
    }
    function fa(e) {
      lr ? sr ? sr.push(e) : sr = [
        e
      ] : lr = e;
    }
    function da() {
      if (lr) {
        var e = lr, n = sr;
        if (sr = lr = null, ca(e), n) for (e = 0; e < n.length; e++) ca(n[e]);
      }
    }
    function pa(e, n) {
      return e(n);
    }
    function ha() {
    }
    var kl = false;
    function ma(e, n, o) {
      if (kl) return e(n, o);
      kl = true;
      try {
        return pa(e, n, o);
      } finally {
        kl = false, (lr !== null || sr !== null) && (ha(), da());
      }
    }
    function Hr(e, n) {
      var o = e.stateNode;
      if (o === null) return null;
      var s = ho(o);
      if (s === null) return null;
      o = s[n];
      e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (o && typeof o != "function") throw Error(i(231, n, typeof o));
      return o;
    }
    var Sl = false;
    if (f) try {
      var Wr = {};
      Object.defineProperty(Wr, "passive", {
        get: function() {
          Sl = true;
        }
      }), window.addEventListener("test", Wr, Wr), window.removeEventListener("test", Wr, Wr);
    } catch {
      Sl = false;
    }
    function Lh(e, n, o, s, d, p, x, E, C) {
      var z = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(o, z);
      } catch (W) {
        this.onError(W);
      }
    }
    var $r = false, $i = null, qi = false, El = null, zh = {
      onError: function(e) {
        $r = true, $i = e;
      }
    };
    function bh(e, n, o, s, d, p, x, E, C) {
      $r = false, $i = null, Lh.apply(zh, arguments);
    }
    function Mh(e, n, o, s, d, p, x, E, C) {
      if (bh.apply(this, arguments), $r) {
        if ($r) {
          var z = $i;
          $r = false, $i = null;
        } else throw Error(i(198));
        qi || (qi = true, El = z);
      }
    }
    function Wn(e) {
      var n = e, o = e;
      if (e.alternate) for (; n.return; ) n = n.return;
      else {
        e = n;
        do
          n = e, (n.flags & 4098) !== 0 && (o = n.return), e = n.return;
        while (e);
      }
      return n.tag === 3 ? o : null;
    }
    function ga(e) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
      }
      return null;
    }
    function ya(e) {
      if (Wn(e) !== e) throw Error(i(188));
    }
    function Fh(e) {
      var n = e.alternate;
      if (!n) {
        if (n = Wn(e), n === null) throw Error(i(188));
        return n !== e ? null : e;
      }
      for (var o = e, s = n; ; ) {
        var d = o.return;
        if (d === null) break;
        var p = d.alternate;
        if (p === null) {
          if (s = d.return, s !== null) {
            o = s;
            continue;
          }
          break;
        }
        if (d.child === p.child) {
          for (p = d.child; p; ) {
            if (p === o) return ya(d), e;
            if (p === s) return ya(d), n;
            p = p.sibling;
          }
          throw Error(i(188));
        }
        if (o.return !== s.return) o = d, s = p;
        else {
          for (var x = false, E = d.child; E; ) {
            if (E === o) {
              x = true, o = d, s = p;
              break;
            }
            if (E === s) {
              x = true, s = d, o = p;
              break;
            }
            E = E.sibling;
          }
          if (!x) {
            for (E = p.child; E; ) {
              if (E === o) {
                x = true, o = p, s = d;
                break;
              }
              if (E === s) {
                x = true, s = p, o = d;
                break;
              }
              E = E.sibling;
            }
            if (!x) throw Error(i(189));
          }
        }
        if (o.alternate !== s) throw Error(i(190));
      }
      if (o.tag !== 3) throw Error(i(188));
      return o.stateNode.current === o ? e : n;
    }
    function va(e) {
      return e = Fh(e), e !== null ? wa(e) : null;
    }
    function wa(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var n = wa(e);
        if (n !== null) return n;
        e = e.sibling;
      }
      return null;
    }
    var xa = r.unstable_scheduleCallback, ka = r.unstable_cancelCallback, jh = r.unstable_shouldYield, Bh = r.unstable_requestPaint, $e = r.unstable_now, Uh = r.unstable_getCurrentPriorityLevel, Il = r.unstable_ImmediatePriority, Sa = r.unstable_UserBlockingPriority, Yi = r.unstable_NormalPriority, Vh = r.unstable_LowPriority, Ea = r.unstable_IdlePriority, Qi = null, Gt = null;
    function Hh(e) {
      if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
        Gt.onCommitFiberRoot(Qi, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
    }
    var Bt = Math.clz32 ? Math.clz32 : qh, Wh = Math.log, $h = Math.LN2;
    function qh(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Wh(e) / $h | 0) | 0;
    }
    var Ki = 64, Gi = 4194304;
    function qr(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Xi(e, n) {
      var o = e.pendingLanes;
      if (o === 0) return 0;
      var s = 0, d = e.suspendedLanes, p = e.pingedLanes, x = o & 268435455;
      if (x !== 0) {
        var E = x & ~d;
        E !== 0 ? s = qr(E) : (p &= x, p !== 0 && (s = qr(p)));
      } else x = o & ~d, x !== 0 ? s = qr(x) : p !== 0 && (s = qr(p));
      if (s === 0) return 0;
      if (n !== 0 && n !== s && (n & d) === 0 && (d = s & -s, p = n & -n, d >= p || d === 16 && (p & 4194240) !== 0)) return n;
      if ((s & 4) !== 0 && (s |= o & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= s; 0 < n; ) o = 31 - Bt(n), d = 1 << o, s |= e[o], n &= ~d;
      return s;
    }
    function Yh(e, n) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return n + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Qh(e, n) {
      for (var o = e.suspendedLanes, s = e.pingedLanes, d = e.expirationTimes, p = e.pendingLanes; 0 < p; ) {
        var x = 31 - Bt(p), E = 1 << x, C = d[x];
        C === -1 ? ((E & o) === 0 || (E & s) !== 0) && (d[x] = Yh(E, n)) : C <= n && (e.expiredLanes |= E), p &= ~E;
      }
    }
    function Cl(e) {
      return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Ia() {
      var e = Ki;
      return Ki <<= 1, (Ki & 4194240) === 0 && (Ki = 64), e;
    }
    function Tl(e) {
      for (var n = [], o = 0; 31 > o; o++) n.push(e);
      return n;
    }
    function Yr(e, n, o) {
      e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Bt(n), e[n] = o;
    }
    function Kh(e, n) {
      var o = e.pendingLanes & ~n;
      e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
      var s = e.eventTimes;
      for (e = e.expirationTimes; 0 < o; ) {
        var d = 31 - Bt(o), p = 1 << d;
        n[d] = 0, s[d] = -1, e[d] = -1, o &= ~p;
      }
    }
    function Pl(e, n) {
      var o = e.entangledLanes |= n;
      for (e = e.entanglements; o; ) {
        var s = 31 - Bt(o), d = 1 << s;
        d & n | e[s] & n && (e[s] |= n), o &= ~d;
      }
    }
    var Ae = 0;
    function Ca(e) {
      return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var Ta, _l, Pa, _a, Na, Nl = false, Ji = [], wn = null, xn = null, kn = null, Qr = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), Sn = [], Gh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Da(e, n) {
      switch (e) {
        case "focusin":
        case "focusout":
          wn = null;
          break;
        case "dragenter":
        case "dragleave":
          xn = null;
          break;
        case "mouseover":
        case "mouseout":
          kn = null;
          break;
        case "pointerover":
        case "pointerout":
          Qr.delete(n.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Kr.delete(n.pointerId);
      }
    }
    function Gr(e, n, o, s, d, p) {
      return e === null || e.nativeEvent !== p ? (e = {
        blockedOn: n,
        domEventName: o,
        eventSystemFlags: s,
        nativeEvent: p,
        targetContainers: [
          d
        ]
      }, n !== null && (n = ci(n), n !== null && _l(n)), e) : (e.eventSystemFlags |= s, n = e.targetContainers, d !== null && n.indexOf(d) === -1 && n.push(d), e);
    }
    function Xh(e, n, o, s, d) {
      switch (n) {
        case "focusin":
          return wn = Gr(wn, e, n, o, s, d), true;
        case "dragenter":
          return xn = Gr(xn, e, n, o, s, d), true;
        case "mouseover":
          return kn = Gr(kn, e, n, o, s, d), true;
        case "pointerover":
          var p = d.pointerId;
          return Qr.set(p, Gr(Qr.get(p) || null, e, n, o, s, d)), true;
        case "gotpointercapture":
          return p = d.pointerId, Kr.set(p, Gr(Kr.get(p) || null, e, n, o, s, d)), true;
      }
      return false;
    }
    function Oa(e) {
      var n = $n(e.target);
      if (n !== null) {
        var o = Wn(n);
        if (o !== null) {
          if (n = o.tag, n === 13) {
            if (n = ga(o), n !== null) {
              e.blockedOn = n, Na(e.priority, function() {
                Pa(o);
              });
              return;
            }
          } else if (n === 3 && o.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Zi(e) {
      if (e.blockedOn !== null) return false;
      for (var n = e.targetContainers; 0 < n.length; ) {
        var o = Ol(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (o === null) {
          o = e.nativeEvent;
          var s = new o.constructor(o.type, o);
          kt = s, o.target.dispatchEvent(s), kt = null;
        } else return n = ci(o), n !== null && _l(n), e.blockedOn = o, false;
        n.shift();
      }
      return true;
    }
    function Aa(e, n, o) {
      Zi(e) && o.delete(n);
    }
    function Jh() {
      Nl = false, wn !== null && Zi(wn) && (wn = null), xn !== null && Zi(xn) && (xn = null), kn !== null && Zi(kn) && (kn = null), Qr.forEach(Aa), Kr.forEach(Aa);
    }
    function Xr(e, n) {
      e.blockedOn === n && (e.blockedOn = null, Nl || (Nl = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Jh)));
    }
    function Jr(e) {
      function n(d) {
        return Xr(d, e);
      }
      if (0 < Ji.length) {
        Xr(Ji[0], e);
        for (var o = 1; o < Ji.length; o++) {
          var s = Ji[o];
          s.blockedOn === e && (s.blockedOn = null);
        }
      }
      for (wn !== null && Xr(wn, e), xn !== null && Xr(xn, e), kn !== null && Xr(kn, e), Qr.forEach(n), Kr.forEach(n), o = 0; o < Sn.length; o++) s = Sn[o], s.blockedOn === e && (s.blockedOn = null);
      for (; 0 < Sn.length && (o = Sn[0], o.blockedOn === null); ) Oa(o), o.blockedOn === null && Sn.shift();
    }
    var ur = $.ReactCurrentBatchConfig, eo = true;
    function Zh(e, n, o, s) {
      var d = Ae, p = ur.transition;
      ur.transition = null;
      try {
        Ae = 1, Dl(e, n, o, s);
      } finally {
        Ae = d, ur.transition = p;
      }
    }
    function em(e, n, o, s) {
      var d = Ae, p = ur.transition;
      ur.transition = null;
      try {
        Ae = 4, Dl(e, n, o, s);
      } finally {
        Ae = d, ur.transition = p;
      }
    }
    function Dl(e, n, o, s) {
      if (eo) {
        var d = Ol(e, n, o, s);
        if (d === null) Ql(e, n, s, to, o), Da(e, s);
        else if (Xh(d, e, n, o, s)) s.stopPropagation();
        else if (Da(e, s), n & 4 && -1 < Gh.indexOf(e)) {
          for (; d !== null; ) {
            var p = ci(d);
            if (p !== null && Ta(p), p = Ol(e, n, o, s), p === null && Ql(e, n, s, to, o), p === d) break;
            d = p;
          }
          d !== null && s.stopPropagation();
        } else Ql(e, n, s, null, o);
      }
    }
    var to = null;
    function Ol(e, n, o, s) {
      if (to = null, e = wl(s), e = $n(e), e !== null) if (n = Wn(e), n === null) e = null;
      else if (o = n.tag, o === 13) {
        if (e = ga(n), e !== null) return e;
        e = null;
      } else if (o === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
      return to = e, null;
    }
    function Ra(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (Uh()) {
            case Il:
              return 1;
            case Sa:
              return 4;
            case Yi:
            case Vh:
              return 16;
            case Ea:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var En = null, Al = null, no = null;
    function La() {
      if (no) return no;
      var e, n = Al, o = n.length, s, d = "value" in En ? En.value : En.textContent, p = d.length;
      for (e = 0; e < o && n[e] === d[e]; e++) ;
      var x = o - e;
      for (s = 1; s <= x && n[o - s] === d[p - s]; s++) ;
      return no = d.slice(e, 1 < s ? 1 - s : void 0);
    }
    function ro(e) {
      var n = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function io() {
      return true;
    }
    function za() {
      return false;
    }
    function St(e) {
      function n(o, s, d, p, x) {
        this._reactName = o, this._targetInst = d, this.type = s, this.nativeEvent = p, this.target = x, this.currentTarget = null;
        for (var E in e) e.hasOwnProperty(E) && (o = e[E], this[E] = o ? o(p) : p[E]);
        return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === false) ? io : za, this.isPropagationStopped = za, this;
      }
      return k(n.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var o = this.nativeEvent;
          o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = false), this.isDefaultPrevented = io);
        },
        stopPropagation: function() {
          var o = this.nativeEvent;
          o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = true), this.isPropagationStopped = io);
        },
        persist: function() {
        },
        isPersistent: io
      }), n;
    }
    var ar = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Rl = St(ar), Zr = k({}, ar, {
      view: 0,
      detail: 0
    }), tm = St(Zr), Ll, zl, ei, oo = k({}, Zr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ml,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== ei && (ei && e.type === "mousemove" ? (Ll = e.screenX - ei.screenX, zl = e.screenY - ei.screenY) : zl = Ll = 0, ei = e), Ll);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : zl;
      }
    }), ba = St(oo), nm = k({}, oo, {
      dataTransfer: 0
    }), rm = St(nm), im = k({}, Zr, {
      relatedTarget: 0
    }), bl = St(im), om = k({}, ar, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), lm = St(om), sm = k({}, ar, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), um = St(sm), am = k({}, ar, {
      data: 0
    }), Ma = St(am), cm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, fm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, dm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function pm(e) {
      var n = this.nativeEvent;
      return n.getModifierState ? n.getModifierState(e) : (e = dm[e]) ? !!n[e] : false;
    }
    function Ml() {
      return pm;
    }
    var hm = k({}, Zr, {
      key: function(e) {
        if (e.key) {
          var n = cm[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress" ? (e = ro(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fm[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ml,
      charCode: function(e) {
        return e.type === "keypress" ? ro(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ro(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), mm = St(hm), gm = k({}, oo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Fa = St(gm), ym = k({}, Zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ml
    }), vm = St(ym), wm = k({}, ar, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), xm = St(wm), km = k({}, oo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Sm = St(km), Em = [
      9,
      13,
      27,
      32
    ], Fl = f && "CompositionEvent" in window, ti = null;
    f && "documentMode" in document && (ti = document.documentMode);
    var Im = f && "TextEvent" in window && !ti, ja = f && (!Fl || ti && 8 < ti && 11 >= ti), Ba = " ", Ua = false;
    function Va(e, n) {
      switch (e) {
        case "keyup":
          return Em.indexOf(n.keyCode) !== -1;
        case "keydown":
          return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function Ha(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var cr = false;
    function Cm(e, n) {
      switch (e) {
        case "compositionend":
          return Ha(n);
        case "keypress":
          return n.which !== 32 ? null : (Ua = true, Ba);
        case "textInput":
          return e = n.data, e === Ba && Ua ? null : e;
        default:
          return null;
      }
    }
    function Tm(e, n) {
      if (cr) return e === "compositionend" || !Fl && Va(e, n) ? (e = La(), no = Al = En = null, cr = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
            if (n.char && 1 < n.char.length) return n.char;
            if (n.which) return String.fromCharCode(n.which);
          }
          return null;
        case "compositionend":
          return ja && n.locale !== "ko" ? null : n.data;
        default:
          return null;
      }
    }
    var Pm = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function Wa(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return n === "input" ? !!Pm[e.type] : n === "textarea";
    }
    function $a(e, n, o, s) {
      fa(s), n = co(n, "onChange"), 0 < n.length && (o = new Rl("onChange", "change", null, o, s), e.push({
        event: o,
        listeners: n
      }));
    }
    var ni = null, ri = null;
    function _m(e) {
      ac(e, 0);
    }
    function lo(e) {
      var n = mr(e);
      if (Vn(n)) return e;
    }
    function Nm(e, n) {
      if (e === "change") return n;
    }
    var qa = false;
    if (f) {
      var jl;
      if (f) {
        var Bl = "oninput" in document;
        if (!Bl) {
          var Ya = document.createElement("div");
          Ya.setAttribute("oninput", "return;"), Bl = typeof Ya.oninput == "function";
        }
        jl = Bl;
      } else jl = false;
      qa = jl && (!document.documentMode || 9 < document.documentMode);
    }
    function Qa() {
      ni && (ni.detachEvent("onpropertychange", Ka), ri = ni = null);
    }
    function Ka(e) {
      if (e.propertyName === "value" && lo(ri)) {
        var n = [];
        $a(n, ri, e, wl(e)), ma(_m, n);
      }
    }
    function Dm(e, n, o) {
      e === "focusin" ? (Qa(), ni = n, ri = o, ni.attachEvent("onpropertychange", Ka)) : e === "focusout" && Qa();
    }
    function Om(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return lo(ri);
    }
    function Am(e, n) {
      if (e === "click") return lo(n);
    }
    function Rm(e, n) {
      if (e === "input" || e === "change") return lo(n);
    }
    function Lm(e, n) {
      return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
    }
    var Ut = typeof Object.is == "function" ? Object.is : Lm;
    function ii(e, n) {
      if (Ut(e, n)) return true;
      if (typeof e != "object" || e === null || typeof n != "object" || n === null) return false;
      var o = Object.keys(e), s = Object.keys(n);
      if (o.length !== s.length) return false;
      for (s = 0; s < o.length; s++) {
        var d = o[s];
        if (!h.call(n, d) || !Ut(e[d], n[d])) return false;
      }
      return true;
    }
    function Ga(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Xa(e, n) {
      var o = Ga(e);
      e = 0;
      for (var s; o; ) {
        if (o.nodeType === 3) {
          if (s = e + o.textContent.length, e <= n && s >= n) return {
            node: o,
            offset: n - e
          };
          e = s;
        }
        e: {
          for (; o; ) {
            if (o.nextSibling) {
              o = o.nextSibling;
              break e;
            }
            o = o.parentNode;
          }
          o = void 0;
        }
        o = Ga(o);
      }
    }
    function Ja(e, n) {
      return e && n ? e === n ? true : e && e.nodeType === 3 ? false : n && n.nodeType === 3 ? Ja(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : false : false;
    }
    function Za() {
      for (var e = window, n = ln(); n instanceof e.HTMLIFrameElement; ) {
        try {
          var o = typeof n.contentWindow.location.href == "string";
        } catch {
          o = false;
        }
        if (o) e = n.contentWindow;
        else break;
        n = ln(e.document);
      }
      return n;
    }
    function Ul(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
    }
    function zm(e) {
      var n = Za(), o = e.focusedElem, s = e.selectionRange;
      if (n !== o && o && o.ownerDocument && Ja(o.ownerDocument.documentElement, o)) {
        if (s !== null && Ul(o)) {
          if (n = s.start, e = s.end, e === void 0 && (e = n), "selectionStart" in o) o.selectionStart = n, o.selectionEnd = Math.min(e, o.value.length);
          else if (e = (n = o.ownerDocument || document) && n.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var d = o.textContent.length, p = Math.min(s.start, d);
            s = s.end === void 0 ? p : Math.min(s.end, d), !e.extend && p > s && (d = s, s = p, p = d), d = Xa(o, p);
            var x = Xa(o, s);
            d && x && (e.rangeCount !== 1 || e.anchorNode !== d.node || e.anchorOffset !== d.offset || e.focusNode !== x.node || e.focusOffset !== x.offset) && (n = n.createRange(), n.setStart(d.node, d.offset), e.removeAllRanges(), p > s ? (e.addRange(n), e.extend(x.node, x.offset)) : (n.setEnd(x.node, x.offset), e.addRange(n)));
          }
        }
        for (n = [], e = o; e = e.parentNode; ) e.nodeType === 1 && n.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop
        });
        for (typeof o.focus == "function" && o.focus(), o = 0; o < n.length; o++) e = n[o], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
      }
    }
    var bm = f && "documentMode" in document && 11 >= document.documentMode, fr = null, Vl = null, oi = null, Hl = false;
    function ec(e, n, o) {
      var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
      Hl || fr == null || fr !== ln(s) || (s = fr, "selectionStart" in s && Ul(s) ? s = {
        start: s.selectionStart,
        end: s.selectionEnd
      } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
        anchorNode: s.anchorNode,
        anchorOffset: s.anchorOffset,
        focusNode: s.focusNode,
        focusOffset: s.focusOffset
      }), oi && ii(oi, s) || (oi = s, s = co(Vl, "onSelect"), 0 < s.length && (n = new Rl("onSelect", "select", null, n, o), e.push({
        event: n,
        listeners: s
      }), n.target = fr)));
    }
    function so(e, n) {
      var o = {};
      return o[e.toLowerCase()] = n.toLowerCase(), o["Webkit" + e] = "webkit" + n, o["Moz" + e] = "moz" + n, o;
    }
    var dr = {
      animationend: so("Animation", "AnimationEnd"),
      animationiteration: so("Animation", "AnimationIteration"),
      animationstart: so("Animation", "AnimationStart"),
      transitionend: so("Transition", "TransitionEnd")
    }, Wl = {}, tc = {};
    f && (tc = document.createElement("div").style, "AnimationEvent" in window || (delete dr.animationend.animation, delete dr.animationiteration.animation, delete dr.animationstart.animation), "TransitionEvent" in window || delete dr.transitionend.transition);
    function uo(e) {
      if (Wl[e]) return Wl[e];
      if (!dr[e]) return e;
      var n = dr[e], o;
      for (o in n) if (n.hasOwnProperty(o) && o in tc) return Wl[e] = n[o];
      return e;
    }
    var nc = uo("animationend"), rc = uo("animationiteration"), ic = uo("animationstart"), oc = uo("transitionend"), lc = /* @__PURE__ */ new Map(), sc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function In(e, n) {
      lc.set(e, n), a(n, [
        e
      ]);
    }
    for (var $l = 0; $l < sc.length; $l++) {
      var ql = sc[$l], Mm = ql.toLowerCase(), Fm = ql[0].toUpperCase() + ql.slice(1);
      In(Mm, "on" + Fm);
    }
    In(nc, "onAnimationEnd"), In(rc, "onAnimationIteration"), In(ic, "onAnimationStart"), In("dblclick", "onDoubleClick"), In("focusin", "onFocus"), In("focusout", "onBlur"), In(oc, "onTransitionEnd"), c("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), c("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), c("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), c("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var li = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(li));
    function uc(e, n, o) {
      var s = e.type || "unknown-event";
      e.currentTarget = o, Mh(s, n, void 0, e), e.currentTarget = null;
    }
    function ac(e, n) {
      n = (n & 4) !== 0;
      for (var o = 0; o < e.length; o++) {
        var s = e[o], d = s.event;
        s = s.listeners;
        e: {
          var p = void 0;
          if (n) for (var x = s.length - 1; 0 <= x; x--) {
            var E = s[x], C = E.instance, z = E.currentTarget;
            if (E = E.listener, C !== p && d.isPropagationStopped()) break e;
            uc(d, E, z), p = C;
          }
          else for (x = 0; x < s.length; x++) {
            if (E = s[x], C = E.instance, z = E.currentTarget, E = E.listener, C !== p && d.isPropagationStopped()) break e;
            uc(d, E, z), p = C;
          }
        }
      }
      if (qi) throw e = El, qi = false, El = null, e;
    }
    function Me(e, n) {
      var o = n[es];
      o === void 0 && (o = n[es] = /* @__PURE__ */ new Set());
      var s = e + "__bubble";
      o.has(s) || (cc(n, e, 2, false), o.add(s));
    }
    function Yl(e, n, o) {
      var s = 0;
      n && (s |= 4), cc(o, e, s, n);
    }
    var ao = "_reactListening" + Math.random().toString(36).slice(2);
    function si(e) {
      if (!e[ao]) {
        e[ao] = true, l.forEach(function(o) {
          o !== "selectionchange" && (jm.has(o) || Yl(o, false, e), Yl(o, true, e));
        });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[ao] || (n[ao] = true, Yl("selectionchange", false, n));
      }
    }
    function cc(e, n, o, s) {
      switch (Ra(n)) {
        case 1:
          var d = Zh;
          break;
        case 4:
          d = em;
          break;
        default:
          d = Dl;
      }
      o = d.bind(null, n, o, e), d = void 0, !Sl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (d = true), s ? d !== void 0 ? e.addEventListener(n, o, {
        capture: true,
        passive: d
      }) : e.addEventListener(n, o, true) : d !== void 0 ? e.addEventListener(n, o, {
        passive: d
      }) : e.addEventListener(n, o, false);
    }
    function Ql(e, n, o, s, d) {
      var p = s;
      if ((n & 1) === 0 && (n & 2) === 0 && s !== null) e: for (; ; ) {
        if (s === null) return;
        var x = s.tag;
        if (x === 3 || x === 4) {
          var E = s.stateNode.containerInfo;
          if (E === d || E.nodeType === 8 && E.parentNode === d) break;
          if (x === 4) for (x = s.return; x !== null; ) {
            var C = x.tag;
            if ((C === 3 || C === 4) && (C = x.stateNode.containerInfo, C === d || C.nodeType === 8 && C.parentNode === d)) return;
            x = x.return;
          }
          for (; E !== null; ) {
            if (x = $n(E), x === null) return;
            if (C = x.tag, C === 5 || C === 6) {
              s = p = x;
              continue e;
            }
            E = E.parentNode;
          }
        }
        s = s.return;
      }
      ma(function() {
        var z = p, W = wl(o), q = [];
        e: {
          var H = lc.get(e);
          if (H !== void 0) {
            var ie = Rl, ae = e;
            switch (e) {
              case "keypress":
                if (ro(o) === 0) break e;
              case "keydown":
              case "keyup":
                ie = mm;
                break;
              case "focusin":
                ae = "focus", ie = bl;
                break;
              case "focusout":
                ae = "blur", ie = bl;
                break;
              case "beforeblur":
              case "afterblur":
                ie = bl;
                break;
              case "click":
                if (o.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                ie = ba;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                ie = rm;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                ie = vm;
                break;
              case nc:
              case rc:
              case ic:
                ie = lm;
                break;
              case oc:
                ie = xm;
                break;
              case "scroll":
                ie = tm;
                break;
              case "wheel":
                ie = Sm;
                break;
              case "copy":
              case "cut":
              case "paste":
                ie = um;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                ie = Fa;
            }
            var ce = (n & 4) !== 0, qe = !ce && e === "scroll", O = ce ? H !== null ? H + "Capture" : null : H;
            ce = [];
            for (var P = z, A; P !== null; ) {
              A = P;
              var K = A.stateNode;
              if (A.tag === 5 && K !== null && (A = K, O !== null && (K = Hr(P, O), K != null && ce.push(ui(P, K, A)))), qe) break;
              P = P.return;
            }
            0 < ce.length && (H = new ie(H, ae, null, o, W), q.push({
              event: H,
              listeners: ce
            }));
          }
        }
        if ((n & 7) === 0) {
          e: {
            if (H = e === "mouseover" || e === "pointerover", ie = e === "mouseout" || e === "pointerout", H && o !== kt && (ae = o.relatedTarget || o.fromElement) && ($n(ae) || ae[un])) break e;
            if ((ie || H) && (H = W.window === W ? W : (H = W.ownerDocument) ? H.defaultView || H.parentWindow : window, ie ? (ae = o.relatedTarget || o.toElement, ie = z, ae = ae ? $n(ae) : null, ae !== null && (qe = Wn(ae), ae !== qe || ae.tag !== 5 && ae.tag !== 6) && (ae = null)) : (ie = null, ae = z), ie !== ae)) {
              if (ce = ba, K = "onMouseLeave", O = "onMouseEnter", P = "mouse", (e === "pointerout" || e === "pointerover") && (ce = Fa, K = "onPointerLeave", O = "onPointerEnter", P = "pointer"), qe = ie == null ? H : mr(ie), A = ae == null ? H : mr(ae), H = new ce(K, P + "leave", ie, o, W), H.target = qe, H.relatedTarget = A, K = null, $n(W) === z && (ce = new ce(O, P + "enter", ae, o, W), ce.target = A, ce.relatedTarget = qe, K = ce), qe = K, ie && ae) t: {
                for (ce = ie, O = ae, P = 0, A = ce; A; A = pr(A)) P++;
                for (A = 0, K = O; K; K = pr(K)) A++;
                for (; 0 < P - A; ) ce = pr(ce), P--;
                for (; 0 < A - P; ) O = pr(O), A--;
                for (; P--; ) {
                  if (ce === O || O !== null && ce === O.alternate) break t;
                  ce = pr(ce), O = pr(O);
                }
                ce = null;
              }
              else ce = null;
              ie !== null && fc(q, H, ie, ce, false), ae !== null && qe !== null && fc(q, qe, ae, ce, true);
            }
          }
          e: {
            if (H = z ? mr(z) : window, ie = H.nodeName && H.nodeName.toLowerCase(), ie === "select" || ie === "input" && H.type === "file") var fe = Nm;
            else if (Wa(H)) if (qa) fe = Rm;
            else {
              fe = Om;
              var me = Dm;
            }
            else (ie = H.nodeName) && ie.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (fe = Am);
            if (fe && (fe = fe(e, z))) {
              $a(q, fe, o, W);
              break e;
            }
            me && me(e, H, z), e === "focusout" && (me = H._wrapperState) && me.controlled && H.type === "number" && or(H, "number", H.value);
          }
          switch (me = z ? mr(z) : window, e) {
            case "focusin":
              (Wa(me) || me.contentEditable === "true") && (fr = me, Vl = z, oi = null);
              break;
            case "focusout":
              oi = Vl = fr = null;
              break;
            case "mousedown":
              Hl = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Hl = false, ec(q, o, W);
              break;
            case "selectionchange":
              if (bm) break;
            case "keydown":
            case "keyup":
              ec(q, o, W);
          }
          var ge;
          if (Fl) e: {
            switch (e) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
          else cr ? Va(e, o) && (we = "onCompositionEnd") : e === "keydown" && o.keyCode === 229 && (we = "onCompositionStart");
          we && (ja && o.locale !== "ko" && (cr || we !== "onCompositionStart" ? we === "onCompositionEnd" && cr && (ge = La()) : (En = W, Al = "value" in En ? En.value : En.textContent, cr = true)), me = co(z, we), 0 < me.length && (we = new Ma(we, e, null, o, W), q.push({
            event: we,
            listeners: me
          }), ge ? we.data = ge : (ge = Ha(o), ge !== null && (we.data = ge)))), (ge = Im ? Cm(e, o) : Tm(e, o)) && (z = co(z, "onBeforeInput"), 0 < z.length && (W = new Ma("onBeforeInput", "beforeinput", null, o, W), q.push({
            event: W,
            listeners: z
          }), W.data = ge));
        }
        ac(q, n);
      });
    }
    function ui(e, n, o) {
      return {
        instance: e,
        listener: n,
        currentTarget: o
      };
    }
    function co(e, n) {
      for (var o = n + "Capture", s = []; e !== null; ) {
        var d = e, p = d.stateNode;
        d.tag === 5 && p !== null && (d = p, p = Hr(e, o), p != null && s.unshift(ui(e, p, d)), p = Hr(e, n), p != null && s.push(ui(e, p, d))), e = e.return;
      }
      return s;
    }
    function pr(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function fc(e, n, o, s, d) {
      for (var p = n._reactName, x = []; o !== null && o !== s; ) {
        var E = o, C = E.alternate, z = E.stateNode;
        if (C !== null && C === s) break;
        E.tag === 5 && z !== null && (E = z, d ? (C = Hr(o, p), C != null && x.unshift(ui(o, C, E))) : d || (C = Hr(o, p), C != null && x.push(ui(o, C, E)))), o = o.return;
      }
      x.length !== 0 && e.push({
        event: n,
        listeners: x
      });
    }
    var Bm = /\r\n?/g, Um = /\u0000|\uFFFD/g;
    function dc(e) {
      return (typeof e == "string" ? e : "" + e).replace(Bm, `
`).replace(Um, "");
    }
    function fo(e, n, o) {
      if (n = dc(n), dc(e) !== n && o) throw Error(i(425));
    }
    function po() {
    }
    var Kl = null, Gl = null;
    function Xl(e, n) {
      return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var Jl = typeof setTimeout == "function" ? setTimeout : void 0, Vm = typeof clearTimeout == "function" ? clearTimeout : void 0, pc = typeof Promise == "function" ? Promise : void 0, Hm = typeof queueMicrotask == "function" ? queueMicrotask : typeof pc < "u" ? function(e) {
      return pc.resolve(null).then(e).catch(Wm);
    } : Jl;
    function Wm(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Zl(e, n) {
      var o = n, s = 0;
      do {
        var d = o.nextSibling;
        if (e.removeChild(o), d && d.nodeType === 8) if (o = d.data, o === "/$") {
          if (s === 0) {
            e.removeChild(d), Jr(n);
            return;
          }
          s--;
        } else o !== "$" && o !== "$?" && o !== "$!" || s++;
        o = d;
      } while (o);
      Jr(n);
    }
    function Cn(e) {
      for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
          if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
          if (n === "/$") return null;
        }
      }
      return e;
    }
    function hc(e) {
      e = e.previousSibling;
      for (var n = 0; e; ) {
        if (e.nodeType === 8) {
          var o = e.data;
          if (o === "$" || o === "$!" || o === "$?") {
            if (n === 0) return e;
            n--;
          } else o === "/$" && n++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var hr = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + hr, ai = "__reactProps$" + hr, un = "__reactContainer$" + hr, es = "__reactEvents$" + hr, $m = "__reactListeners$" + hr, qm = "__reactHandles$" + hr;
    function $n(e) {
      var n = e[Xt];
      if (n) return n;
      for (var o = e.parentNode; o; ) {
        if (n = o[un] || o[Xt]) {
          if (o = n.alternate, n.child !== null || o !== null && o.child !== null) for (e = hc(e); e !== null; ) {
            if (o = e[Xt]) return o;
            e = hc(e);
          }
          return n;
        }
        e = o, o = e.parentNode;
      }
      return null;
    }
    function ci(e) {
      return e = e[Xt] || e[un], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function mr(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(i(33));
    }
    function ho(e) {
      return e[ai] || null;
    }
    var ts = [], gr = -1;
    function Tn(e) {
      return {
        current: e
      };
    }
    function Fe(e) {
      0 > gr || (e.current = ts[gr], ts[gr] = null, gr--);
    }
    function Re(e, n) {
      gr++, ts[gr] = e.current, e.current = n;
    }
    var Pn = {}, ot = Tn(Pn), dt = Tn(false), qn = Pn;
    function yr(e, n) {
      var o = e.type.contextTypes;
      if (!o) return Pn;
      var s = e.stateNode;
      if (s && s.__reactInternalMemoizedUnmaskedChildContext === n) return s.__reactInternalMemoizedMaskedChildContext;
      var d = {}, p;
      for (p in o) d[p] = n[p];
      return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = d), d;
    }
    function pt(e) {
      return e = e.childContextTypes, e != null;
    }
    function mo() {
      Fe(dt), Fe(ot);
    }
    function mc(e, n, o) {
      if (ot.current !== Pn) throw Error(i(168));
      Re(ot, n), Re(dt, o);
    }
    function gc(e, n, o) {
      var s = e.stateNode;
      if (n = n.childContextTypes, typeof s.getChildContext != "function") return o;
      s = s.getChildContext();
      for (var d in s) if (!(d in n)) throw Error(i(108, Ce(e) || "Unknown", d));
      return k({}, o, s);
    }
    function go(e) {
      return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pn, qn = ot.current, Re(ot, e), Re(dt, dt.current), true;
    }
    function yc(e, n, o) {
      var s = e.stateNode;
      if (!s) throw Error(i(169));
      o ? (e = gc(e, n, qn), s.__reactInternalMemoizedMergedChildContext = e, Fe(dt), Fe(ot), Re(ot, e)) : Fe(dt), Re(dt, o);
    }
    var an = null, yo = false, ns = false;
    function vc(e) {
      an === null ? an = [
        e
      ] : an.push(e);
    }
    function Ym(e) {
      yo = true, vc(e);
    }
    function _n() {
      if (!ns && an !== null) {
        ns = true;
        var e = 0, n = Ae;
        try {
          var o = an;
          for (Ae = 1; e < o.length; e++) {
            var s = o[e];
            do
              s = s(true);
            while (s !== null);
          }
          an = null, yo = false;
        } catch (d) {
          throw an !== null && (an = an.slice(e + 1)), xa(Il, _n), d;
        } finally {
          Ae = n, ns = false;
        }
      }
      return null;
    }
    var vr = [], wr = 0, vo = null, wo = 0, Rt = [], Lt = 0, Yn = null, cn = 1, fn = "";
    function Qn(e, n) {
      vr[wr++] = wo, vr[wr++] = vo, vo = e, wo = n;
    }
    function wc(e, n, o) {
      Rt[Lt++] = cn, Rt[Lt++] = fn, Rt[Lt++] = Yn, Yn = e;
      var s = cn;
      e = fn;
      var d = 32 - Bt(s) - 1;
      s &= ~(1 << d), o += 1;
      var p = 32 - Bt(n) + d;
      if (30 < p) {
        var x = d - d % 5;
        p = (s & (1 << x) - 1).toString(32), s >>= x, d -= x, cn = 1 << 32 - Bt(n) + d | o << d | s, fn = p + e;
      } else cn = 1 << p | o << d | s, fn = e;
    }
    function rs(e) {
      e.return !== null && (Qn(e, 1), wc(e, 1, 0));
    }
    function is(e) {
      for (; e === vo; ) vo = vr[--wr], vr[wr] = null, wo = vr[--wr], vr[wr] = null;
      for (; e === Yn; ) Yn = Rt[--Lt], Rt[Lt] = null, fn = Rt[--Lt], Rt[Lt] = null, cn = Rt[--Lt], Rt[Lt] = null;
    }
    var Et = null, It = null, Be = false, Vt = null;
    function xc(e, n) {
      var o = Ft(5, null, null, 0);
      o.elementType = "DELETED", o.stateNode = n, o.return = e, n = e.deletions, n === null ? (e.deletions = [
        o
      ], e.flags |= 16) : n.push(o);
    }
    function kc(e, n) {
      switch (e.tag) {
        case 5:
          var o = e.type;
          return n = n.nodeType !== 1 || o.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Et = e, It = Cn(n.firstChild), true) : false;
        case 6:
          return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Et = e, It = null, true) : false;
        case 13:
          return n = n.nodeType !== 8 ? null : n, n !== null ? (o = Yn !== null ? {
            id: cn,
            overflow: fn
          } : null, e.memoizedState = {
            dehydrated: n,
            treeContext: o,
            retryLane: 1073741824
          }, o = Ft(18, null, null, 0), o.stateNode = n, o.return = e, e.child = o, Et = e, It = null, true) : false;
        default:
          return false;
      }
    }
    function os(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function ls(e) {
      if (Be) {
        var n = It;
        if (n) {
          var o = n;
          if (!kc(e, n)) {
            if (os(e)) throw Error(i(418));
            n = Cn(o.nextSibling);
            var s = Et;
            n && kc(e, n) ? xc(s, o) : (e.flags = e.flags & -4097 | 2, Be = false, Et = e);
          }
        } else {
          if (os(e)) throw Error(i(418));
          e.flags = e.flags & -4097 | 2, Be = false, Et = e;
        }
      }
    }
    function Sc(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
      Et = e;
    }
    function xo(e) {
      if (e !== Et) return false;
      if (!Be) return Sc(e), Be = true, false;
      var n;
      if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Xl(e.type, e.memoizedProps)), n && (n = It)) {
        if (os(e)) throw Ec(), Error(i(418));
        for (; n; ) xc(e, n), n = Cn(n.nextSibling);
      }
      if (Sc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
        e: {
          for (e = e.nextSibling, n = 0; e; ) {
            if (e.nodeType === 8) {
              var o = e.data;
              if (o === "/$") {
                if (n === 0) {
                  It = Cn(e.nextSibling);
                  break e;
                }
                n--;
              } else o !== "$" && o !== "$!" && o !== "$?" || n++;
            }
            e = e.nextSibling;
          }
          It = null;
        }
      } else It = Et ? Cn(e.stateNode.nextSibling) : null;
      return true;
    }
    function Ec() {
      for (var e = It; e; ) e = Cn(e.nextSibling);
    }
    function xr() {
      It = Et = null, Be = false;
    }
    function ss(e) {
      Vt === null ? Vt = [
        e
      ] : Vt.push(e);
    }
    var Qm = $.ReactCurrentBatchConfig;
    function fi(e, n, o) {
      if (e = o.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (o._owner) {
          if (o = o._owner, o) {
            if (o.tag !== 1) throw Error(i(309));
            var s = o.stateNode;
          }
          if (!s) throw Error(i(147, e));
          var d = s, p = "" + e;
          return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === p ? n.ref : (n = function(x) {
            var E = d.refs;
            x === null ? delete E[p] : E[p] = x;
          }, n._stringRef = p, n);
        }
        if (typeof e != "string") throw Error(i(284));
        if (!o._owner) throw Error(i(290, e));
      }
      return e;
    }
    function ko(e, n) {
      throw e = Object.prototype.toString.call(n), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
    }
    function Ic(e) {
      var n = e._init;
      return n(e._payload);
    }
    function Cc(e) {
      function n(O, P) {
        if (e) {
          var A = O.deletions;
          A === null ? (O.deletions = [
            P
          ], O.flags |= 16) : A.push(P);
        }
      }
      function o(O, P) {
        if (!e) return null;
        for (; P !== null; ) n(O, P), P = P.sibling;
        return null;
      }
      function s(O, P) {
        for (O = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? O.set(P.key, P) : O.set(P.index, P), P = P.sibling;
        return O;
      }
      function d(O, P) {
        return O = bn(O, P), O.index = 0, O.sibling = null, O;
      }
      function p(O, P, A) {
        return O.index = A, e ? (A = O.alternate, A !== null ? (A = A.index, A < P ? (O.flags |= 2, P) : A) : (O.flags |= 2, P)) : (O.flags |= 1048576, P);
      }
      function x(O) {
        return e && O.alternate === null && (O.flags |= 2), O;
      }
      function E(O, P, A, K) {
        return P === null || P.tag !== 6 ? (P = Js(A, O.mode, K), P.return = O, P) : (P = d(P, A), P.return = O, P);
      }
      function C(O, P, A, K) {
        var fe = A.type;
        return fe === te ? W(O, P, A.props.children, K, A.key) : P !== null && (P.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === Q && Ic(fe) === P.type) ? (K = d(P, A.props), K.ref = fi(O, P, A), K.return = O, K) : (K = $o(A.type, A.key, A.props, null, O.mode, K), K.ref = fi(O, P, A), K.return = O, K);
      }
      function z(O, P, A, K) {
        return P === null || P.tag !== 4 || P.stateNode.containerInfo !== A.containerInfo || P.stateNode.implementation !== A.implementation ? (P = Zs(A, O.mode, K), P.return = O, P) : (P = d(P, A.children || []), P.return = O, P);
      }
      function W(O, P, A, K, fe) {
        return P === null || P.tag !== 7 ? (P = nr(A, O.mode, K, fe), P.return = O, P) : (P = d(P, A), P.return = O, P);
      }
      function q(O, P, A) {
        if (typeof P == "string" && P !== "" || typeof P == "number") return P = Js("" + P, O.mode, A), P.return = O, P;
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case ee:
              return A = $o(P.type, P.key, P.props, null, O.mode, A), A.ref = fi(O, null, P), A.return = O, A;
            case R:
              return P = Zs(P, O.mode, A), P.return = O, P;
            case Q:
              var K = P._init;
              return q(O, K(P._payload), A);
          }
          if (gn(P) || X(P)) return P = nr(P, O.mode, A, null), P.return = O, P;
          ko(O, P);
        }
        return null;
      }
      function H(O, P, A, K) {
        var fe = P !== null ? P.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number") return fe !== null ? null : E(O, P, "" + A, K);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case ee:
              return A.key === fe ? C(O, P, A, K) : null;
            case R:
              return A.key === fe ? z(O, P, A, K) : null;
            case Q:
              return fe = A._init, H(O, P, fe(A._payload), K);
          }
          if (gn(A) || X(A)) return fe !== null ? null : W(O, P, A, K, null);
          ko(O, A);
        }
        return null;
      }
      function ie(O, P, A, K, fe) {
        if (typeof K == "string" && K !== "" || typeof K == "number") return O = O.get(A) || null, E(P, O, "" + K, fe);
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case ee:
              return O = O.get(K.key === null ? A : K.key) || null, C(P, O, K, fe);
            case R:
              return O = O.get(K.key === null ? A : K.key) || null, z(P, O, K, fe);
            case Q:
              var me = K._init;
              return ie(O, P, A, me(K._payload), fe);
          }
          if (gn(K) || X(K)) return O = O.get(A) || null, W(P, O, K, fe, null);
          ko(P, K);
        }
        return null;
      }
      function ae(O, P, A, K) {
        for (var fe = null, me = null, ge = P, we = P = 0, et = null; ge !== null && we < A.length; we++) {
          ge.index > we ? (et = ge, ge = null) : et = ge.sibling;
          var Ne = H(O, ge, A[we], K);
          if (Ne === null) {
            ge === null && (ge = et);
            break;
          }
          e && ge && Ne.alternate === null && n(O, ge), P = p(Ne, P, we), me === null ? fe = Ne : me.sibling = Ne, me = Ne, ge = et;
        }
        if (we === A.length) return o(O, ge), Be && Qn(O, we), fe;
        if (ge === null) {
          for (; we < A.length; we++) ge = q(O, A[we], K), ge !== null && (P = p(ge, P, we), me === null ? fe = ge : me.sibling = ge, me = ge);
          return Be && Qn(O, we), fe;
        }
        for (ge = s(O, ge); we < A.length; we++) et = ie(ge, O, we, A[we], K), et !== null && (e && et.alternate !== null && ge.delete(et.key === null ? we : et.key), P = p(et, P, we), me === null ? fe = et : me.sibling = et, me = et);
        return e && ge.forEach(function(Mn) {
          return n(O, Mn);
        }), Be && Qn(O, we), fe;
      }
      function ce(O, P, A, K) {
        var fe = X(A);
        if (typeof fe != "function") throw Error(i(150));
        if (A = fe.call(A), A == null) throw Error(i(151));
        for (var me = fe = null, ge = P, we = P = 0, et = null, Ne = A.next(); ge !== null && !Ne.done; we++, Ne = A.next()) {
          ge.index > we ? (et = ge, ge = null) : et = ge.sibling;
          var Mn = H(O, ge, Ne.value, K);
          if (Mn === null) {
            ge === null && (ge = et);
            break;
          }
          e && ge && Mn.alternate === null && n(O, ge), P = p(Mn, P, we), me === null ? fe = Mn : me.sibling = Mn, me = Mn, ge = et;
        }
        if (Ne.done) return o(O, ge), Be && Qn(O, we), fe;
        if (ge === null) {
          for (; !Ne.done; we++, Ne = A.next()) Ne = q(O, Ne.value, K), Ne !== null && (P = p(Ne, P, we), me === null ? fe = Ne : me.sibling = Ne, me = Ne);
          return Be && Qn(O, we), fe;
        }
        for (ge = s(O, ge); !Ne.done; we++, Ne = A.next()) Ne = ie(ge, O, we, Ne.value, K), Ne !== null && (e && Ne.alternate !== null && ge.delete(Ne.key === null ? we : Ne.key), P = p(Ne, P, we), me === null ? fe = Ne : me.sibling = Ne, me = Ne);
        return e && ge.forEach(function(Pg) {
          return n(O, Pg);
        }), Be && Qn(O, we), fe;
      }
      function qe(O, P, A, K) {
        if (typeof A == "object" && A !== null && A.type === te && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case ee:
              e: {
                for (var fe = A.key, me = P; me !== null; ) {
                  if (me.key === fe) {
                    if (fe = A.type, fe === te) {
                      if (me.tag === 7) {
                        o(O, me.sibling), P = d(me, A.props.children), P.return = O, O = P;
                        break e;
                      }
                    } else if (me.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === Q && Ic(fe) === me.type) {
                      o(O, me.sibling), P = d(me, A.props), P.ref = fi(O, me, A), P.return = O, O = P;
                      break e;
                    }
                    o(O, me);
                    break;
                  } else n(O, me);
                  me = me.sibling;
                }
                A.type === te ? (P = nr(A.props.children, O.mode, K, A.key), P.return = O, O = P) : (K = $o(A.type, A.key, A.props, null, O.mode, K), K.ref = fi(O, P, A), K.return = O, O = K);
              }
              return x(O);
            case R:
              e: {
                for (me = A.key; P !== null; ) {
                  if (P.key === me) if (P.tag === 4 && P.stateNode.containerInfo === A.containerInfo && P.stateNode.implementation === A.implementation) {
                    o(O, P.sibling), P = d(P, A.children || []), P.return = O, O = P;
                    break e;
                  } else {
                    o(O, P);
                    break;
                  }
                  else n(O, P);
                  P = P.sibling;
                }
                P = Zs(A, O.mode, K), P.return = O, O = P;
              }
              return x(O);
            case Q:
              return me = A._init, qe(O, P, me(A._payload), K);
          }
          if (gn(A)) return ae(O, P, A, K);
          if (X(A)) return ce(O, P, A, K);
          ko(O, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, P !== null && P.tag === 6 ? (o(O, P.sibling), P = d(P, A), P.return = O, O = P) : (o(O, P), P = Js(A, O.mode, K), P.return = O, O = P), x(O)) : o(O, P);
      }
      return qe;
    }
    var kr = Cc(true), Tc = Cc(false), So = Tn(null), Eo = null, Sr = null, us = null;
    function as() {
      us = Sr = Eo = null;
    }
    function cs(e) {
      var n = So.current;
      Fe(So), e._currentValue = n;
    }
    function fs(e, n, o) {
      for (; e !== null; ) {
        var s = e.alternate;
        if ((e.childLanes & n) !== n ? (e.childLanes |= n, s !== null && (s.childLanes |= n)) : s !== null && (s.childLanes & n) !== n && (s.childLanes |= n), e === o) break;
        e = e.return;
      }
    }
    function Er(e, n) {
      Eo = e, us = Sr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (ht = true), e.firstContext = null);
    }
    function zt(e) {
      var n = e._currentValue;
      if (us !== e) if (e = {
        context: e,
        memoizedValue: n,
        next: null
      }, Sr === null) {
        if (Eo === null) throw Error(i(308));
        Sr = e, Eo.dependencies = {
          lanes: 0,
          firstContext: e
        };
      } else Sr = Sr.next = e;
      return n;
    }
    var Kn = null;
    function ds(e) {
      Kn === null ? Kn = [
        e
      ] : Kn.push(e);
    }
    function Pc(e, n, o, s) {
      var d = n.interleaved;
      return d === null ? (o.next = o, ds(n)) : (o.next = d.next, d.next = o), n.interleaved = o, dn(e, s);
    }
    function dn(e, n) {
      e.lanes |= n;
      var o = e.alternate;
      for (o !== null && (o.lanes |= n), o = e, e = e.return; e !== null; ) e.childLanes |= n, o = e.alternate, o !== null && (o.childLanes |= n), o = e, e = e.return;
      return o.tag === 3 ? o.stateNode : null;
    }
    var Nn = false;
    function ps(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: 0
        },
        effects: null
      };
    }
    function _c(e, n) {
      e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      });
    }
    function pn(e, n) {
      return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Dn(e, n, o) {
      var s = e.updateQueue;
      if (s === null) return null;
      if (s = s.shared, (_e & 2) !== 0) {
        var d = s.pending;
        return d === null ? n.next = n : (n.next = d.next, d.next = n), s.pending = n, dn(e, o);
      }
      return d = s.interleaved, d === null ? (n.next = n, ds(s)) : (n.next = d.next, d.next = n), s.interleaved = n, dn(e, o);
    }
    function Io(e, n, o) {
      if (n = n.updateQueue, n !== null && (n = n.shared, (o & 4194240) !== 0)) {
        var s = n.lanes;
        s &= e.pendingLanes, o |= s, n.lanes = o, Pl(e, o);
      }
    }
    function Nc(e, n) {
      var o = e.updateQueue, s = e.alternate;
      if (s !== null && (s = s.updateQueue, o === s)) {
        var d = null, p = null;
        if (o = o.firstBaseUpdate, o !== null) {
          do {
            var x = {
              eventTime: o.eventTime,
              lane: o.lane,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null
            };
            p === null ? d = p = x : p = p.next = x, o = o.next;
          } while (o !== null);
          p === null ? d = p = n : p = p.next = n;
        } else d = p = n;
        o = {
          baseState: s.baseState,
          firstBaseUpdate: d,
          lastBaseUpdate: p,
          shared: s.shared,
          effects: s.effects
        }, e.updateQueue = o;
        return;
      }
      e = o.lastBaseUpdate, e === null ? o.firstBaseUpdate = n : e.next = n, o.lastBaseUpdate = n;
    }
    function Co(e, n, o, s) {
      var d = e.updateQueue;
      Nn = false;
      var p = d.firstBaseUpdate, x = d.lastBaseUpdate, E = d.shared.pending;
      if (E !== null) {
        d.shared.pending = null;
        var C = E, z = C.next;
        C.next = null, x === null ? p = z : x.next = z, x = C;
        var W = e.alternate;
        W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== x && (E === null ? W.firstBaseUpdate = z : E.next = z, W.lastBaseUpdate = C));
      }
      if (p !== null) {
        var q = d.baseState;
        x = 0, W = z = C = null, E = p;
        do {
          var H = E.lane, ie = E.eventTime;
          if ((s & H) === H) {
            W !== null && (W = W.next = {
              eventTime: ie,
              lane: 0,
              tag: E.tag,
              payload: E.payload,
              callback: E.callback,
              next: null
            });
            e: {
              var ae = e, ce = E;
              switch (H = n, ie = o, ce.tag) {
                case 1:
                  if (ae = ce.payload, typeof ae == "function") {
                    q = ae.call(ie, q, H);
                    break e;
                  }
                  q = ae;
                  break e;
                case 3:
                  ae.flags = ae.flags & -65537 | 128;
                case 0:
                  if (ae = ce.payload, H = typeof ae == "function" ? ae.call(ie, q, H) : ae, H == null) break e;
                  q = k({}, q, H);
                  break e;
                case 2:
                  Nn = true;
              }
            }
            E.callback !== null && E.lane !== 0 && (e.flags |= 64, H = d.effects, H === null ? d.effects = [
              E
            ] : H.push(E));
          } else ie = {
            eventTime: ie,
            lane: H,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          }, W === null ? (z = W = ie, C = q) : W = W.next = ie, x |= H;
          if (E = E.next, E === null) {
            if (E = d.shared.pending, E === null) break;
            H = E, E = H.next, H.next = null, d.lastBaseUpdate = H, d.shared.pending = null;
          }
        } while (true);
        if (W === null && (C = q), d.baseState = C, d.firstBaseUpdate = z, d.lastBaseUpdate = W, n = d.shared.interleaved, n !== null) {
          d = n;
          do
            x |= d.lane, d = d.next;
          while (d !== n);
        } else p === null && (d.shared.lanes = 0);
        Jn |= x, e.lanes = x, e.memoizedState = q;
      }
    }
    function Dc(e, n, o) {
      if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
        var s = e[n], d = s.callback;
        if (d !== null) {
          if (s.callback = null, s = o, typeof d != "function") throw Error(i(191, d));
          d.call(s);
        }
      }
    }
    var di = {}, Jt = Tn(di), pi = Tn(di), hi = Tn(di);
    function Gn(e) {
      if (e === di) throw Error(i(174));
      return e;
    }
    function hs(e, n) {
      switch (Re(hi, n), Re(pi, e), Re(Jt, di), e = n.nodeType, e) {
        case 9:
        case 11:
          n = (n = n.documentElement) ? n.namespaceURI : Z(null, "");
          break;
        default:
          e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Z(n, e);
      }
      Fe(Jt), Re(Jt, n);
    }
    function Ir() {
      Fe(Jt), Fe(pi), Fe(hi);
    }
    function Oc(e) {
      Gn(hi.current);
      var n = Gn(Jt.current), o = Z(n, e.type);
      n !== o && (Re(pi, e), Re(Jt, o));
    }
    function ms(e) {
      pi.current === e && (Fe(Jt), Fe(pi));
    }
    var Ue = Tn(0);
    function To(e) {
      for (var n = e; n !== null; ) {
        if (n.tag === 13) {
          var o = n.memoizedState;
          if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return n;
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
          if ((n.flags & 128) !== 0) return n;
        } else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return null;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return null;
    }
    var gs = [];
    function ys() {
      for (var e = 0; e < gs.length; e++) gs[e]._workInProgressVersionPrimary = null;
      gs.length = 0;
    }
    var Po = $.ReactCurrentDispatcher, vs = $.ReactCurrentBatchConfig, Xn = 0, Ve = null, Ge = null, Je = null, _o = false, mi = false, gi = 0, Km = 0;
    function lt() {
      throw Error(i(321));
    }
    function ws(e, n) {
      if (n === null) return false;
      for (var o = 0; o < n.length && o < e.length; o++) if (!Ut(e[o], n[o])) return false;
      return true;
    }
    function xs(e, n, o, s, d, p) {
      if (Xn = p, Ve = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Po.current = e === null || e.memoizedState === null ? Zm : eg, e = o(s, d), mi) {
        p = 0;
        do {
          if (mi = false, gi = 0, 25 <= p) throw Error(i(301));
          p += 1, Je = Ge = null, n.updateQueue = null, Po.current = tg, e = o(s, d);
        } while (mi);
      }
      if (Po.current = Oo, n = Ge !== null && Ge.next !== null, Xn = 0, Je = Ge = Ve = null, _o = false, n) throw Error(i(300));
      return e;
    }
    function ks() {
      var e = gi !== 0;
      return gi = 0, e;
    }
    function Zt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Je === null ? Ve.memoizedState = Je = e : Je = Je.next = e, Je;
    }
    function bt() {
      if (Ge === null) {
        var e = Ve.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ge.next;
      var n = Je === null ? Ve.memoizedState : Je.next;
      if (n !== null) Je = n, Ge = e;
      else {
        if (e === null) throw Error(i(310));
        Ge = e, e = {
          memoizedState: Ge.memoizedState,
          baseState: Ge.baseState,
          baseQueue: Ge.baseQueue,
          queue: Ge.queue,
          next: null
        }, Je === null ? Ve.memoizedState = Je = e : Je = Je.next = e;
      }
      return Je;
    }
    function yi(e, n) {
      return typeof n == "function" ? n(e) : n;
    }
    function Ss(e) {
      var n = bt(), o = n.queue;
      if (o === null) throw Error(i(311));
      o.lastRenderedReducer = e;
      var s = Ge, d = s.baseQueue, p = o.pending;
      if (p !== null) {
        if (d !== null) {
          var x = d.next;
          d.next = p.next, p.next = x;
        }
        s.baseQueue = d = p, o.pending = null;
      }
      if (d !== null) {
        p = d.next, s = s.baseState;
        var E = x = null, C = null, z = p;
        do {
          var W = z.lane;
          if ((Xn & W) === W) C !== null && (C = C.next = {
            lane: 0,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          }), s = z.hasEagerState ? z.eagerState : e(s, z.action);
          else {
            var q = {
              lane: W,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            };
            C === null ? (E = C = q, x = s) : C = C.next = q, Ve.lanes |= W, Jn |= W;
          }
          z = z.next;
        } while (z !== null && z !== p);
        C === null ? x = s : C.next = E, Ut(s, n.memoizedState) || (ht = true), n.memoizedState = s, n.baseState = x, n.baseQueue = C, o.lastRenderedState = s;
      }
      if (e = o.interleaved, e !== null) {
        d = e;
        do
          p = d.lane, Ve.lanes |= p, Jn |= p, d = d.next;
        while (d !== e);
      } else d === null && (o.lanes = 0);
      return [
        n.memoizedState,
        o.dispatch
      ];
    }
    function Es(e) {
      var n = bt(), o = n.queue;
      if (o === null) throw Error(i(311));
      o.lastRenderedReducer = e;
      var s = o.dispatch, d = o.pending, p = n.memoizedState;
      if (d !== null) {
        o.pending = null;
        var x = d = d.next;
        do
          p = e(p, x.action), x = x.next;
        while (x !== d);
        Ut(p, n.memoizedState) || (ht = true), n.memoizedState = p, n.baseQueue === null && (n.baseState = p), o.lastRenderedState = p;
      }
      return [
        p,
        s
      ];
    }
    function Ac() {
    }
    function Rc(e, n) {
      var o = Ve, s = bt(), d = n(), p = !Ut(s.memoizedState, d);
      if (p && (s.memoizedState = d, ht = true), s = s.queue, Is(bc.bind(null, o, s, e), [
        e
      ]), s.getSnapshot !== n || p || Je !== null && Je.memoizedState.tag & 1) {
        if (o.flags |= 2048, vi(9, zc.bind(null, o, s, d, n), void 0, null), Ze === null) throw Error(i(349));
        (Xn & 30) !== 0 || Lc(o, n, d);
      }
      return d;
    }
    function Lc(e, n, o) {
      e.flags |= 16384, e = {
        getSnapshot: n,
        value: o
      }, n = Ve.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
      }, Ve.updateQueue = n, n.stores = [
        e
      ]) : (o = n.stores, o === null ? n.stores = [
        e
      ] : o.push(e));
    }
    function zc(e, n, o, s) {
      n.value = o, n.getSnapshot = s, Mc(n) && Fc(e);
    }
    function bc(e, n, o) {
      return o(function() {
        Mc(n) && Fc(e);
      });
    }
    function Mc(e) {
      var n = e.getSnapshot;
      e = e.value;
      try {
        var o = n();
        return !Ut(e, o);
      } catch {
        return true;
      }
    }
    function Fc(e) {
      var n = dn(e, 1);
      n !== null && qt(n, e, 1, -1);
    }
    function jc(e) {
      var n = Zt();
      return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yi,
        lastRenderedState: e
      }, n.queue = e, e = e.dispatch = Jm.bind(null, Ve, e), [
        n.memoizedState,
        e
      ];
    }
    function vi(e, n, o, s) {
      return e = {
        tag: e,
        create: n,
        destroy: o,
        deps: s,
        next: null
      }, n = Ve.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
      }, Ve.updateQueue = n, n.lastEffect = e.next = e) : (o = n.lastEffect, o === null ? n.lastEffect = e.next = e : (s = o.next, o.next = e, e.next = s, n.lastEffect = e)), e;
    }
    function Bc() {
      return bt().memoizedState;
    }
    function No(e, n, o, s) {
      var d = Zt();
      Ve.flags |= e, d.memoizedState = vi(1 | n, o, void 0, s === void 0 ? null : s);
    }
    function Do(e, n, o, s) {
      var d = bt();
      s = s === void 0 ? null : s;
      var p = void 0;
      if (Ge !== null) {
        var x = Ge.memoizedState;
        if (p = x.destroy, s !== null && ws(s, x.deps)) {
          d.memoizedState = vi(n, o, p, s);
          return;
        }
      }
      Ve.flags |= e, d.memoizedState = vi(1 | n, o, p, s);
    }
    function Uc(e, n) {
      return No(8390656, 8, e, n);
    }
    function Is(e, n) {
      return Do(2048, 8, e, n);
    }
    function Vc(e, n) {
      return Do(4, 2, e, n);
    }
    function Hc(e, n) {
      return Do(4, 4, e, n);
    }
    function Wc(e, n) {
      if (typeof n == "function") return e = e(), n(e), function() {
        n(null);
      };
      if (n != null) return e = e(), n.current = e, function() {
        n.current = null;
      };
    }
    function $c(e, n, o) {
      return o = o != null ? o.concat([
        e
      ]) : null, Do(4, 4, Wc.bind(null, n, e), o);
    }
    function Cs() {
    }
    function qc(e, n) {
      var o = bt();
      n = n === void 0 ? null : n;
      var s = o.memoizedState;
      return s !== null && n !== null && ws(n, s[1]) ? s[0] : (o.memoizedState = [
        e,
        n
      ], e);
    }
    function Yc(e, n) {
      var o = bt();
      n = n === void 0 ? null : n;
      var s = o.memoizedState;
      return s !== null && n !== null && ws(n, s[1]) ? s[0] : (e = e(), o.memoizedState = [
        e,
        n
      ], e);
    }
    function Qc(e, n, o) {
      return (Xn & 21) === 0 ? (e.baseState && (e.baseState = false, ht = true), e.memoizedState = o) : (Ut(o, n) || (o = Ia(), Ve.lanes |= o, Jn |= o, e.baseState = true), n);
    }
    function Gm(e, n) {
      var o = Ae;
      Ae = o !== 0 && 4 > o ? o : 4, e(true);
      var s = vs.transition;
      vs.transition = {};
      try {
        e(false), n();
      } finally {
        Ae = o, vs.transition = s;
      }
    }
    function Kc() {
      return bt().memoizedState;
    }
    function Xm(e, n, o) {
      var s = Ln(e);
      if (o = {
        lane: s,
        action: o,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Gc(e)) Xc(n, o);
      else if (o = Pc(e, n, o, s), o !== null) {
        var d = ft();
        qt(o, e, s, d), Jc(o, n, s);
      }
    }
    function Jm(e, n, o) {
      var s = Ln(e), d = {
        lane: s,
        action: o,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Gc(e)) Xc(n, d);
      else {
        var p = e.alternate;
        if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
          var x = n.lastRenderedState, E = p(x, o);
          if (d.hasEagerState = true, d.eagerState = E, Ut(E, x)) {
            var C = n.interleaved;
            C === null ? (d.next = d, ds(n)) : (d.next = C.next, C.next = d), n.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
        o = Pc(e, n, d, s), o !== null && (d = ft(), qt(o, e, s, d), Jc(o, n, s));
      }
    }
    function Gc(e) {
      var n = e.alternate;
      return e === Ve || n !== null && n === Ve;
    }
    function Xc(e, n) {
      mi = _o = true;
      var o = e.pending;
      o === null ? n.next = n : (n.next = o.next, o.next = n), e.pending = n;
    }
    function Jc(e, n, o) {
      if ((o & 4194240) !== 0) {
        var s = n.lanes;
        s &= e.pendingLanes, o |= s, n.lanes = o, Pl(e, o);
      }
    }
    var Oo = {
      readContext: zt,
      useCallback: lt,
      useContext: lt,
      useEffect: lt,
      useImperativeHandle: lt,
      useInsertionEffect: lt,
      useLayoutEffect: lt,
      useMemo: lt,
      useReducer: lt,
      useRef: lt,
      useState: lt,
      useDebugValue: lt,
      useDeferredValue: lt,
      useTransition: lt,
      useMutableSource: lt,
      useSyncExternalStore: lt,
      useId: lt,
      unstable_isNewReconciler: false
    }, Zm = {
      readContext: zt,
      useCallback: function(e, n) {
        return Zt().memoizedState = [
          e,
          n === void 0 ? null : n
        ], e;
      },
      useContext: zt,
      useEffect: Uc,
      useImperativeHandle: function(e, n, o) {
        return o = o != null ? o.concat([
          e
        ]) : null, No(4194308, 4, Wc.bind(null, n, e), o);
      },
      useLayoutEffect: function(e, n) {
        return No(4194308, 4, e, n);
      },
      useInsertionEffect: function(e, n) {
        return No(4, 2, e, n);
      },
      useMemo: function(e, n) {
        var o = Zt();
        return n = n === void 0 ? null : n, e = e(), o.memoizedState = [
          e,
          n
        ], e;
      },
      useReducer: function(e, n, o) {
        var s = Zt();
        return n = o !== void 0 ? o(n) : n, s.memoizedState = s.baseState = n, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n
        }, s.queue = e, e = e.dispatch = Xm.bind(null, Ve, e), [
          s.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var n = Zt();
        return e = {
          current: e
        }, n.memoizedState = e;
      },
      useState: jc,
      useDebugValue: Cs,
      useDeferredValue: function(e) {
        return Zt().memoizedState = e;
      },
      useTransition: function() {
        var e = jc(false), n = e[0];
        return e = Gm.bind(null, e[1]), Zt().memoizedState = e, [
          n,
          e
        ];
      },
      useMutableSource: function() {
      },
      useSyncExternalStore: function(e, n, o) {
        var s = Ve, d = Zt();
        if (Be) {
          if (o === void 0) throw Error(i(407));
          o = o();
        } else {
          if (o = n(), Ze === null) throw Error(i(349));
          (Xn & 30) !== 0 || Lc(s, n, o);
        }
        d.memoizedState = o;
        var p = {
          value: o,
          getSnapshot: n
        };
        return d.queue = p, Uc(bc.bind(null, s, p, e), [
          e
        ]), s.flags |= 2048, vi(9, zc.bind(null, s, p, o, n), void 0, null), o;
      },
      useId: function() {
        var e = Zt(), n = Ze.identifierPrefix;
        if (Be) {
          var o = fn, s = cn;
          o = (s & ~(1 << 32 - Bt(s) - 1)).toString(32) + o, n = ":" + n + "R" + o, o = gi++, 0 < o && (n += "H" + o.toString(32)), n += ":";
        } else o = Km++, n = ":" + n + "r" + o.toString(32) + ":";
        return e.memoizedState = n;
      },
      unstable_isNewReconciler: false
    }, eg = {
      readContext: zt,
      useCallback: qc,
      useContext: zt,
      useEffect: Is,
      useImperativeHandle: $c,
      useInsertionEffect: Vc,
      useLayoutEffect: Hc,
      useMemo: Yc,
      useReducer: Ss,
      useRef: Bc,
      useState: function() {
        return Ss(yi);
      },
      useDebugValue: Cs,
      useDeferredValue: function(e) {
        var n = bt();
        return Qc(n, Ge.memoizedState, e);
      },
      useTransition: function() {
        var e = Ss(yi)[0], n = bt().memoizedState;
        return [
          e,
          n
        ];
      },
      useMutableSource: Ac,
      useSyncExternalStore: Rc,
      useId: Kc,
      unstable_isNewReconciler: false
    }, tg = {
      readContext: zt,
      useCallback: qc,
      useContext: zt,
      useEffect: Is,
      useImperativeHandle: $c,
      useInsertionEffect: Vc,
      useLayoutEffect: Hc,
      useMemo: Yc,
      useReducer: Es,
      useRef: Bc,
      useState: function() {
        return Es(yi);
      },
      useDebugValue: Cs,
      useDeferredValue: function(e) {
        var n = bt();
        return Ge === null ? n.memoizedState = e : Qc(n, Ge.memoizedState, e);
      },
      useTransition: function() {
        var e = Es(yi)[0], n = bt().memoizedState;
        return [
          e,
          n
        ];
      },
      useMutableSource: Ac,
      useSyncExternalStore: Rc,
      useId: Kc,
      unstable_isNewReconciler: false
    };
    function Ht(e, n) {
      if (e && e.defaultProps) {
        n = k({}, n), e = e.defaultProps;
        for (var o in e) n[o] === void 0 && (n[o] = e[o]);
        return n;
      }
      return n;
    }
    function Ts(e, n, o, s) {
      n = e.memoizedState, o = o(s, n), o = o == null ? n : k({}, n, o), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    var Ao = {
      isMounted: function(e) {
        return (e = e._reactInternals) ? Wn(e) === e : false;
      },
      enqueueSetState: function(e, n, o) {
        e = e._reactInternals;
        var s = ft(), d = Ln(e), p = pn(s, d);
        p.payload = n, o != null && (p.callback = o), n = Dn(e, p, d), n !== null && (qt(n, e, d, s), Io(n, e, d));
      },
      enqueueReplaceState: function(e, n, o) {
        e = e._reactInternals;
        var s = ft(), d = Ln(e), p = pn(s, d);
        p.tag = 1, p.payload = n, o != null && (p.callback = o), n = Dn(e, p, d), n !== null && (qt(n, e, d, s), Io(n, e, d));
      },
      enqueueForceUpdate: function(e, n) {
        e = e._reactInternals;
        var o = ft(), s = Ln(e), d = pn(o, s);
        d.tag = 2, n != null && (d.callback = n), n = Dn(e, d, s), n !== null && (qt(n, e, s, o), Io(n, e, s));
      }
    };
    function Zc(e, n, o, s, d, p, x) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, p, x) : n.prototype && n.prototype.isPureReactComponent ? !ii(o, s) || !ii(d, p) : true;
    }
    function ef(e, n, o) {
      var s = false, d = Pn, p = n.contextType;
      return typeof p == "object" && p !== null ? p = zt(p) : (d = pt(n) ? qn : ot.current, s = n.contextTypes, p = (s = s != null) ? yr(e, d) : Pn), n = new n(o, p), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Ao, e.stateNode = n, n._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = d, e.__reactInternalMemoizedMaskedChildContext = p), n;
    }
    function tf(e, n, o, s) {
      e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(o, s), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(o, s), n.state !== e && Ao.enqueueReplaceState(n, n.state, null);
    }
    function Ps(e, n, o, s) {
      var d = e.stateNode;
      d.props = o, d.state = e.memoizedState, d.refs = {}, ps(e);
      var p = n.contextType;
      typeof p == "object" && p !== null ? d.context = zt(p) : (p = pt(n) ? qn : ot.current, d.context = yr(e, p)), d.state = e.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (Ts(e, n, p, o), d.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (n = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), n !== d.state && Ao.enqueueReplaceState(d, d.state, null), Co(e, o, d, s), d.state = e.memoizedState), typeof d.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Cr(e, n) {
      try {
        var o = "", s = n;
        do
          o += pe(s), s = s.return;
        while (s);
        var d = o;
      } catch (p) {
        d = `
Error generating stack: ` + p.message + `
` + p.stack;
      }
      return {
        value: e,
        source: n,
        stack: d,
        digest: null
      };
    }
    function _s(e, n, o) {
      return {
        value: e,
        source: null,
        stack: o ?? null,
        digest: n ?? null
      };
    }
    function Ns(e, n) {
      try {
        console.error(n.value);
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    var ng = typeof WeakMap == "function" ? WeakMap : Map;
    function nf(e, n, o) {
      o = pn(-1, o), o.tag = 3, o.payload = {
        element: null
      };
      var s = n.value;
      return o.callback = function() {
        jo || (jo = true, Ws = s), Ns(e, n);
      }, o;
    }
    function rf(e, n, o) {
      o = pn(-1, o), o.tag = 3;
      var s = e.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var d = n.value;
        o.payload = function() {
          return s(d);
        }, o.callback = function() {
          Ns(e, n);
        };
      }
      var p = e.stateNode;
      return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
        Ns(e, n), typeof s != "function" && (An === null ? An = /* @__PURE__ */ new Set([
          this
        ]) : An.add(this));
        var x = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: x !== null ? x : ""
        });
      }), o;
    }
    function of(e, n, o) {
      var s = e.pingCache;
      if (s === null) {
        s = e.pingCache = new ng();
        var d = /* @__PURE__ */ new Set();
        s.set(n, d);
      } else d = s.get(n), d === void 0 && (d = /* @__PURE__ */ new Set(), s.set(n, d));
      d.has(o) || (d.add(o), e = gg.bind(null, e, n, o), n.then(e, e));
    }
    function lf(e) {
      do {
        var n;
        if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : true), n) return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function sf(e, n, o, s, d) {
      return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (n = pn(-1, 1), n.tag = 2, Dn(o, n, 1))), o.lanes |= 1), e) : (e.flags |= 65536, e.lanes = d, e);
    }
    var rg = $.ReactCurrentOwner, ht = false;
    function ct(e, n, o, s) {
      n.child = e === null ? Tc(n, null, o, s) : kr(n, e.child, o, s);
    }
    function uf(e, n, o, s, d) {
      o = o.render;
      var p = n.ref;
      return Er(n, d), s = xs(e, n, o, s, p, d), o = ks(), e !== null && !ht ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~d, hn(e, n, d)) : (Be && o && rs(n), n.flags |= 1, ct(e, n, s, d), n.child);
    }
    function af(e, n, o, s, d) {
      if (e === null) {
        var p = o.type;
        return typeof p == "function" && !Xs(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (n.tag = 15, n.type = p, cf(e, n, p, s, d)) : (e = $o(o.type, null, s, n, n.mode, d), e.ref = n.ref, e.return = n, n.child = e);
      }
      if (p = e.child, (e.lanes & d) === 0) {
        var x = p.memoizedProps;
        if (o = o.compare, o = o !== null ? o : ii, o(x, s) && e.ref === n.ref) return hn(e, n, d);
      }
      return n.flags |= 1, e = bn(p, s), e.ref = n.ref, e.return = n, n.child = e;
    }
    function cf(e, n, o, s, d) {
      if (e !== null) {
        var p = e.memoizedProps;
        if (ii(p, s) && e.ref === n.ref) if (ht = false, n.pendingProps = s = p, (e.lanes & d) !== 0) (e.flags & 131072) !== 0 && (ht = true);
        else return n.lanes = e.lanes, hn(e, n, d);
      }
      return Ds(e, n, o, s, d);
    }
    function ff(e, n, o) {
      var s = n.pendingProps, d = s.children, p = e !== null ? e.memoizedState : null;
      if (s.mode === "hidden") if ((n.mode & 1) === 0) n.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, Re(Pr, Ct), Ct |= o;
      else {
        if ((o & 1073741824) === 0) return e = p !== null ? p.baseLanes | o : o, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }, n.updateQueue = null, Re(Pr, Ct), Ct |= e, null;
        n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, s = p !== null ? p.baseLanes : o, Re(Pr, Ct), Ct |= s;
      }
      else p !== null ? (s = p.baseLanes | o, n.memoizedState = null) : s = o, Re(Pr, Ct), Ct |= s;
      return ct(e, n, d, o), n.child;
    }
    function df(e, n) {
      var o = n.ref;
      (e === null && o !== null || e !== null && e.ref !== o) && (n.flags |= 512, n.flags |= 2097152);
    }
    function Ds(e, n, o, s, d) {
      var p = pt(o) ? qn : ot.current;
      return p = yr(n, p), Er(n, d), o = xs(e, n, o, s, p, d), s = ks(), e !== null && !ht ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~d, hn(e, n, d)) : (Be && s && rs(n), n.flags |= 1, ct(e, n, o, d), n.child);
    }
    function pf(e, n, o, s, d) {
      if (pt(o)) {
        var p = true;
        go(n);
      } else p = false;
      if (Er(n, d), n.stateNode === null) Lo(e, n), ef(n, o, s), Ps(n, o, s, d), s = true;
      else if (e === null) {
        var x = n.stateNode, E = n.memoizedProps;
        x.props = E;
        var C = x.context, z = o.contextType;
        typeof z == "object" && z !== null ? z = zt(z) : (z = pt(o) ? qn : ot.current, z = yr(n, z));
        var W = o.getDerivedStateFromProps, q = typeof W == "function" || typeof x.getSnapshotBeforeUpdate == "function";
        q || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (E !== s || C !== z) && tf(n, x, s, z), Nn = false;
        var H = n.memoizedState;
        x.state = H, Co(n, s, x, d), C = n.memoizedState, E !== s || H !== C || dt.current || Nn ? (typeof W == "function" && (Ts(n, o, W, s), C = n.memoizedState), (E = Nn || Zc(n, o, E, s, H, C, z)) ? (q || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = s, n.memoizedState = C), x.props = s, x.state = C, x.context = z, s = E) : (typeof x.componentDidMount == "function" && (n.flags |= 4194308), s = false);
      } else {
        x = n.stateNode, _c(e, n), E = n.memoizedProps, z = n.type === n.elementType ? E : Ht(n.type, E), x.props = z, q = n.pendingProps, H = x.context, C = o.contextType, typeof C == "object" && C !== null ? C = zt(C) : (C = pt(o) ? qn : ot.current, C = yr(n, C));
        var ie = o.getDerivedStateFromProps;
        (W = typeof ie == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (E !== q || H !== C) && tf(n, x, s, C), Nn = false, H = n.memoizedState, x.state = H, Co(n, s, x, d);
        var ae = n.memoizedState;
        E !== q || H !== ae || dt.current || Nn ? (typeof ie == "function" && (Ts(n, o, ie, s), ae = n.memoizedState), (z = Nn || Zc(n, o, z, s, H, ae, C) || false) ? (W || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(s, ae, C), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(s, ae, C)), typeof x.componentDidUpdate == "function" && (n.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || E === e.memoizedProps && H === e.memoizedState || (n.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && H === e.memoizedState || (n.flags |= 1024), n.memoizedProps = s, n.memoizedState = ae), x.props = s, x.state = ae, x.context = C, s = z) : (typeof x.componentDidUpdate != "function" || E === e.memoizedProps && H === e.memoizedState || (n.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && H === e.memoizedState || (n.flags |= 1024), s = false);
      }
      return Os(e, n, o, s, p, d);
    }
    function Os(e, n, o, s, d, p) {
      df(e, n);
      var x = (n.flags & 128) !== 0;
      if (!s && !x) return d && yc(n, o, false), hn(e, n, p);
      s = n.stateNode, rg.current = n;
      var E = x && typeof o.getDerivedStateFromError != "function" ? null : s.render();
      return n.flags |= 1, e !== null && x ? (n.child = kr(n, e.child, null, p), n.child = kr(n, null, E, p)) : ct(e, n, E, p), n.memoizedState = s.state, d && yc(n, o, true), n.child;
    }
    function hf(e) {
      var n = e.stateNode;
      n.pendingContext ? mc(e, n.pendingContext, n.pendingContext !== n.context) : n.context && mc(e, n.context, false), hs(e, n.containerInfo);
    }
    function mf(e, n, o, s, d) {
      return xr(), ss(d), n.flags |= 256, ct(e, n, o, s), n.child;
    }
    var As = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    };
    function Rs(e) {
      return {
        baseLanes: e,
        cachePool: null,
        transitions: null
      };
    }
    function gf(e, n, o) {
      var s = n.pendingProps, d = Ue.current, p = false, x = (n.flags & 128) !== 0, E;
      if ((E = x) || (E = e !== null && e.memoizedState === null ? false : (d & 2) !== 0), E ? (p = true, n.flags &= -129) : (e === null || e.memoizedState !== null) && (d |= 1), Re(Ue, d & 1), e === null) return ls(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (x = s.children, e = s.fallback, p ? (s = n.mode, p = n.child, x = {
        mode: "hidden",
        children: x
      }, (s & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = x) : p = qo(x, s, 0, null), e = nr(e, s, o, null), p.return = n, e.return = n, p.sibling = e, n.child = p, n.child.memoizedState = Rs(o), n.memoizedState = As, e) : Ls(n, x));
      if (d = e.memoizedState, d !== null && (E = d.dehydrated, E !== null)) return ig(e, n, x, s, E, d, o);
      if (p) {
        p = s.fallback, x = n.mode, d = e.child, E = d.sibling;
        var C = {
          mode: "hidden",
          children: s.children
        };
        return (x & 1) === 0 && n.child !== d ? (s = n.child, s.childLanes = 0, s.pendingProps = C, n.deletions = null) : (s = bn(d, C), s.subtreeFlags = d.subtreeFlags & 14680064), E !== null ? p = bn(E, p) : (p = nr(p, x, o, null), p.flags |= 2), p.return = n, s.return = n, s.sibling = p, n.child = s, s = p, p = n.child, x = e.child.memoizedState, x = x === null ? Rs(o) : {
          baseLanes: x.baseLanes | o,
          cachePool: null,
          transitions: x.transitions
        }, p.memoizedState = x, p.childLanes = e.childLanes & ~o, n.memoizedState = As, s;
      }
      return p = e.child, e = p.sibling, s = bn(p, {
        mode: "visible",
        children: s.children
      }), (n.mode & 1) === 0 && (s.lanes = o), s.return = n, s.sibling = null, e !== null && (o = n.deletions, o === null ? (n.deletions = [
        e
      ], n.flags |= 16) : o.push(e)), n.child = s, n.memoizedState = null, s;
    }
    function Ls(e, n) {
      return n = qo({
        mode: "visible",
        children: n
      }, e.mode, 0, null), n.return = e, e.child = n;
    }
    function Ro(e, n, o, s) {
      return s !== null && ss(s), kr(n, e.child, null, o), e = Ls(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
    }
    function ig(e, n, o, s, d, p, x) {
      if (o) return n.flags & 256 ? (n.flags &= -257, s = _s(Error(i(422))), Ro(e, n, x, s)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (p = s.fallback, d = n.mode, s = qo({
        mode: "visible",
        children: s.children
      }, d, 0, null), p = nr(p, d, x, null), p.flags |= 2, s.return = n, p.return = n, s.sibling = p, n.child = s, (n.mode & 1) !== 0 && kr(n, e.child, null, x), n.child.memoizedState = Rs(x), n.memoizedState = As, p);
      if ((n.mode & 1) === 0) return Ro(e, n, x, null);
      if (d.data === "$!") {
        if (s = d.nextSibling && d.nextSibling.dataset, s) var E = s.dgst;
        return s = E, p = Error(i(419)), s = _s(p, s, void 0), Ro(e, n, x, s);
      }
      if (E = (x & e.childLanes) !== 0, ht || E) {
        if (s = Ze, s !== null) {
          switch (x & -x) {
            case 4:
              d = 2;
              break;
            case 16:
              d = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              d = 32;
              break;
            case 536870912:
              d = 268435456;
              break;
            default:
              d = 0;
          }
          d = (d & (s.suspendedLanes | x)) !== 0 ? 0 : d, d !== 0 && d !== p.retryLane && (p.retryLane = d, dn(e, d), qt(s, e, d, -1));
        }
        return Gs(), s = _s(Error(i(421))), Ro(e, n, x, s);
      }
      return d.data === "$?" ? (n.flags |= 128, n.child = e.child, n = yg.bind(null, e), d._reactRetry = n, null) : (e = p.treeContext, It = Cn(d.nextSibling), Et = n, Be = true, Vt = null, e !== null && (Rt[Lt++] = cn, Rt[Lt++] = fn, Rt[Lt++] = Yn, cn = e.id, fn = e.overflow, Yn = n), n = Ls(n, s.children), n.flags |= 4096, n);
    }
    function yf(e, n, o) {
      e.lanes |= n;
      var s = e.alternate;
      s !== null && (s.lanes |= n), fs(e.return, n, o);
    }
    function zs(e, n, o, s, d) {
      var p = e.memoizedState;
      p === null ? e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: o,
        tailMode: d
      } : (p.isBackwards = n, p.rendering = null, p.renderingStartTime = 0, p.last = s, p.tail = o, p.tailMode = d);
    }
    function vf(e, n, o) {
      var s = n.pendingProps, d = s.revealOrder, p = s.tail;
      if (ct(e, n, s.children, o), s = Ue.current, (s & 2) !== 0) s = s & 1 | 2, n.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && yf(e, o, n);
          else if (e.tag === 19) yf(e, o, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        s &= 1;
      }
      if (Re(Ue, s), (n.mode & 1) === 0) n.memoizedState = null;
      else switch (d) {
        case "forwards":
          for (o = n.child, d = null; o !== null; ) e = o.alternate, e !== null && To(e) === null && (d = o), o = o.sibling;
          o = d, o === null ? (d = n.child, n.child = null) : (d = o.sibling, o.sibling = null), zs(n, false, d, o, p);
          break;
        case "backwards":
          for (o = null, d = n.child, n.child = null; d !== null; ) {
            if (e = d.alternate, e !== null && To(e) === null) {
              n.child = d;
              break;
            }
            e = d.sibling, d.sibling = o, o = d, d = e;
          }
          zs(n, true, o, null, p);
          break;
        case "together":
          zs(n, false, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
      return n.child;
    }
    function Lo(e, n) {
      (n.mode & 1) === 0 && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
    }
    function hn(e, n, o) {
      if (e !== null && (n.dependencies = e.dependencies), Jn |= n.lanes, (o & n.childLanes) === 0) return null;
      if (e !== null && n.child !== e.child) throw Error(i(153));
      if (n.child !== null) {
        for (e = n.child, o = bn(e, e.pendingProps), n.child = o, o.return = n; e.sibling !== null; ) e = e.sibling, o = o.sibling = bn(e, e.pendingProps), o.return = n;
        o.sibling = null;
      }
      return n.child;
    }
    function og(e, n, o) {
      switch (n.tag) {
        case 3:
          hf(n), xr();
          break;
        case 5:
          Oc(n);
          break;
        case 1:
          pt(n.type) && go(n);
          break;
        case 4:
          hs(n, n.stateNode.containerInfo);
          break;
        case 10:
          var s = n.type._context, d = n.memoizedProps.value;
          Re(So, s._currentValue), s._currentValue = d;
          break;
        case 13:
          if (s = n.memoizedState, s !== null) return s.dehydrated !== null ? (Re(Ue, Ue.current & 1), n.flags |= 128, null) : (o & n.child.childLanes) !== 0 ? gf(e, n, o) : (Re(Ue, Ue.current & 1), e = hn(e, n, o), e !== null ? e.sibling : null);
          Re(Ue, Ue.current & 1);
          break;
        case 19:
          if (s = (o & n.childLanes) !== 0, (e.flags & 128) !== 0) {
            if (s) return vf(e, n, o);
            n.flags |= 128;
          }
          if (d = n.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Re(Ue, Ue.current), s) break;
          return null;
        case 22:
        case 23:
          return n.lanes = 0, ff(e, n, o);
      }
      return hn(e, n, o);
    }
    var wf, bs, xf, kf;
    wf = function(e, n) {
      for (var o = n.child; o !== null; ) {
        if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
        else if (o.tag !== 4 && o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === n) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === n) return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, bs = function() {
    }, xf = function(e, n, o, s) {
      var d = e.memoizedProps;
      if (d !== s) {
        e = n.stateNode, Gn(Jt.current);
        var p = null;
        switch (o) {
          case "input":
            d = jr(e, d), s = jr(e, s), p = [];
            break;
          case "select":
            d = k({}, d, {
              value: void 0
            }), s = k({}, s, {
              value: void 0
            }), p = [];
            break;
          case "textarea":
            d = Vr(e, d), s = Vr(e, s), p = [];
            break;
          default:
            typeof d.onClick != "function" && typeof s.onClick == "function" && (e.onclick = po);
        }
        nt(o, s);
        var x;
        o = null;
        for (z in d) if (!s.hasOwnProperty(z) && d.hasOwnProperty(z) && d[z] != null) if (z === "style") {
          var E = d[z];
          for (x in E) E.hasOwnProperty(x) && (o || (o = {}), o[x] = "");
        } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (u.hasOwnProperty(z) ? p || (p = []) : (p = p || []).push(z, null));
        for (z in s) {
          var C = s[z];
          if (E = d == null ? void 0 : d[z], s.hasOwnProperty(z) && C !== E && (C != null || E != null)) if (z === "style") if (E) {
            for (x in E) !E.hasOwnProperty(x) || C && C.hasOwnProperty(x) || (o || (o = {}), o[x] = "");
            for (x in C) C.hasOwnProperty(x) && E[x] !== C[x] && (o || (o = {}), o[x] = C[x]);
          } else o || (p || (p = []), p.push(z, o)), o = C;
          else z === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, E = E ? E.__html : void 0, C != null && E !== C && (p = p || []).push(z, C)) : z === "children" ? typeof C != "string" && typeof C != "number" || (p = p || []).push(z, "" + C) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (u.hasOwnProperty(z) ? (C != null && z === "onScroll" && Me("scroll", e), p || E === C || (p = [])) : (p = p || []).push(z, C));
        }
        o && (p = p || []).push("style", o);
        var z = p;
        (n.updateQueue = z) && (n.flags |= 4);
      }
    }, kf = function(e, n, o, s) {
      o !== s && (n.flags |= 4);
    };
    function wi(e, n) {
      if (!Be) switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var o = null; n !== null; ) n.alternate !== null && (o = n), n = n.sibling;
          o === null ? e.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = e.tail;
          for (var s = null; o !== null; ) o.alternate !== null && (s = o), o = o.sibling;
          s === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
      }
    }
    function st(e) {
      var n = e.alternate !== null && e.alternate.child === e.child, o = 0, s = 0;
      if (n) for (var d = e.child; d !== null; ) o |= d.lanes | d.childLanes, s |= d.subtreeFlags & 14680064, s |= d.flags & 14680064, d.return = e, d = d.sibling;
      else for (d = e.child; d !== null; ) o |= d.lanes | d.childLanes, s |= d.subtreeFlags, s |= d.flags, d.return = e, d = d.sibling;
      return e.subtreeFlags |= s, e.childLanes = o, n;
    }
    function lg(e, n, o) {
      var s = n.pendingProps;
      switch (is(n), n.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return st(n), null;
        case 1:
          return pt(n.type) && mo(), st(n), null;
        case 3:
          return s = n.stateNode, Ir(), Fe(dt), Fe(ot), ys(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (xo(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Vt !== null && (Ys(Vt), Vt = null))), bs(e, n), st(n), null;
        case 5:
          ms(n);
          var d = Gn(hi.current);
          if (o = n.type, e !== null && n.stateNode != null) xf(e, n, o, s, d), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
          else {
            if (!s) {
              if (n.stateNode === null) throw Error(i(166));
              return st(n), null;
            }
            if (e = Gn(Jt.current), xo(n)) {
              s = n.stateNode, o = n.type;
              var p = n.memoizedProps;
              switch (s[Xt] = n, s[ai] = p, e = (n.mode & 1) !== 0, o) {
                case "dialog":
                  Me("cancel", s), Me("close", s);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Me("load", s);
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < li.length; d++) Me(li[d], s);
                  break;
                case "source":
                  Me("error", s);
                  break;
                case "img":
                case "image":
                case "link":
                  Me("error", s), Me("load", s);
                  break;
                case "details":
                  Me("toggle", s);
                  break;
                case "input":
                  Br(s, p), Me("invalid", s);
                  break;
                case "select":
                  s._wrapperState = {
                    wasMultiple: !!p.multiple
                  }, Me("invalid", s);
                  break;
                case "textarea":
                  Vi(s, p), Me("invalid", s);
              }
              nt(o, p), d = null;
              for (var x in p) if (p.hasOwnProperty(x)) {
                var E = p[x];
                x === "children" ? typeof E == "string" ? s.textContent !== E && (p.suppressHydrationWarning !== true && fo(s.textContent, E, e), d = [
                  "children",
                  E
                ]) : typeof E == "number" && s.textContent !== "" + E && (p.suppressHydrationWarning !== true && fo(s.textContent, E, e), d = [
                  "children",
                  "" + E
                ]) : u.hasOwnProperty(x) && E != null && x === "onScroll" && Me("scroll", s);
              }
              switch (o) {
                case "input":
                  Ot(s), Ui(s, p, true);
                  break;
                case "textarea":
                  Ot(s), Wi(s);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof p.onClick == "function" && (s.onclick = po);
              }
              s = d, n.updateQueue = s, s !== null && (n.flags |= 4);
            } else {
              x = d.nodeType === 9 ? d : d.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = F(o)), e === "http://www.w3.org/1999/xhtml" ? o === "script" ? (e = x.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = x.createElement(o, {
                is: s.is
              }) : (e = x.createElement(o), o === "select" && (x = e, s.multiple ? x.multiple = true : s.size && (x.size = s.size))) : e = x.createElementNS(e, o), e[Xt] = n, e[ai] = s, wf(e, n, false, false), n.stateNode = e;
              e: {
                switch (x = Kt(o, s), o) {
                  case "dialog":
                    Me("cancel", e), Me("close", e), d = s;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Me("load", e), d = s;
                    break;
                  case "video":
                  case "audio":
                    for (d = 0; d < li.length; d++) Me(li[d], e);
                    d = s;
                    break;
                  case "source":
                    Me("error", e), d = s;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Me("error", e), Me("load", e), d = s;
                    break;
                  case "details":
                    Me("toggle", e), d = s;
                    break;
                  case "input":
                    Br(e, s), d = jr(e, s), Me("invalid", e);
                    break;
                  case "option":
                    d = s;
                    break;
                  case "select":
                    e._wrapperState = {
                      wasMultiple: !!s.multiple
                    }, d = k({}, s, {
                      value: void 0
                    }), Me("invalid", e);
                    break;
                  case "textarea":
                    Vi(e, s), d = Vr(e, s), Me("invalid", e);
                    break;
                  default:
                    d = s;
                }
                nt(o, d), E = d;
                for (p in E) if (E.hasOwnProperty(p)) {
                  var C = E[p];
                  p === "style" ? vn(e, C) : p === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Ee(e, C)) : p === "children" ? typeof C == "string" ? (o !== "textarea" || C !== "") && Pe(e, C) : typeof C == "number" && Pe(e, "" + C) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (u.hasOwnProperty(p) ? C != null && p === "onScroll" && Me("scroll", e) : C != null && L(e, p, C, x));
                }
                switch (o) {
                  case "input":
                    Ot(e), Ui(e, s, false);
                    break;
                  case "textarea":
                    Ot(e), Wi(e);
                    break;
                  case "option":
                    s.value != null && e.setAttribute("value", "" + ke(s.value));
                    break;
                  case "select":
                    e.multiple = !!s.multiple, p = s.value, p != null ? yn(e, !!s.multiple, p, false) : s.defaultValue != null && yn(e, !!s.multiple, s.defaultValue, true);
                    break;
                  default:
                    typeof d.onClick == "function" && (e.onclick = po);
                }
                switch (o) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s = !!s.autoFocus;
                    break e;
                  case "img":
                    s = true;
                    break e;
                  default:
                    s = false;
                }
              }
              s && (n.flags |= 4);
            }
            n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
          }
          return st(n), null;
        case 6:
          if (e && n.stateNode != null) kf(e, n, e.memoizedProps, s);
          else {
            if (typeof s != "string" && n.stateNode === null) throw Error(i(166));
            if (o = Gn(hi.current), Gn(Jt.current), xo(n)) {
              if (s = n.stateNode, o = n.memoizedProps, s[Xt] = n, (p = s.nodeValue !== o) && (e = Et, e !== null)) switch (e.tag) {
                case 3:
                  fo(s.nodeValue, o, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== true && fo(s.nodeValue, o, (e.mode & 1) !== 0);
              }
              p && (n.flags |= 4);
            } else s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[Xt] = n, n.stateNode = s;
          }
          return st(n), null;
        case 13:
          if (Fe(Ue), s = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Be && It !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) Ec(), xr(), n.flags |= 98560, p = false;
            else if (p = xo(n), s !== null && s.dehydrated !== null) {
              if (e === null) {
                if (!p) throw Error(i(318));
                if (p = n.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(i(317));
                p[Xt] = n;
              } else xr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
              st(n), p = false;
            } else Vt !== null && (Ys(Vt), Vt = null), p = true;
            if (!p) return n.flags & 65536 ? n : null;
          }
          return (n.flags & 128) !== 0 ? (n.lanes = o, n) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (Ue.current & 1) !== 0 ? Xe === 0 && (Xe = 3) : Gs())), n.updateQueue !== null && (n.flags |= 4), st(n), null);
        case 4:
          return Ir(), bs(e, n), e === null && si(n.stateNode.containerInfo), st(n), null;
        case 10:
          return cs(n.type._context), st(n), null;
        case 17:
          return pt(n.type) && mo(), st(n), null;
        case 19:
          if (Fe(Ue), p = n.memoizedState, p === null) return st(n), null;
          if (s = (n.flags & 128) !== 0, x = p.rendering, x === null) if (s) wi(p, false);
          else {
            if (Xe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
              if (x = To(e), x !== null) {
                for (n.flags |= 128, wi(p, false), s = x.updateQueue, s !== null && (n.updateQueue = s, n.flags |= 4), n.subtreeFlags = 0, s = o, o = n.child; o !== null; ) p = o, e = s, p.flags &= 14680066, x = p.alternate, x === null ? (p.childLanes = 0, p.lanes = e, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = x.childLanes, p.lanes = x.lanes, p.child = x.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = x.memoizedProps, p.memoizedState = x.memoizedState, p.updateQueue = x.updateQueue, p.type = x.type, e = x.dependencies, p.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), o = o.sibling;
                return Re(Ue, Ue.current & 1 | 2), n.child;
              }
              e = e.sibling;
            }
            p.tail !== null && $e() > _r && (n.flags |= 128, s = true, wi(p, false), n.lanes = 4194304);
          }
          else {
            if (!s) if (e = To(x), e !== null) {
              if (n.flags |= 128, s = true, o = e.updateQueue, o !== null && (n.updateQueue = o, n.flags |= 4), wi(p, true), p.tail === null && p.tailMode === "hidden" && !x.alternate && !Be) return st(n), null;
            } else 2 * $e() - p.renderingStartTime > _r && o !== 1073741824 && (n.flags |= 128, s = true, wi(p, false), n.lanes = 4194304);
            p.isBackwards ? (x.sibling = n.child, n.child = x) : (o = p.last, o !== null ? o.sibling = x : n.child = x, p.last = x);
          }
          return p.tail !== null ? (n = p.tail, p.rendering = n, p.tail = n.sibling, p.renderingStartTime = $e(), n.sibling = null, o = Ue.current, Re(Ue, s ? o & 1 | 2 : o & 1), n) : (st(n), null);
        case 22:
        case 23:
          return Ks(), s = n.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (n.flags |= 8192), s && (n.mode & 1) !== 0 ? (Ct & 1073741824) !== 0 && (st(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : st(n), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(i(156, n.tag));
    }
    function sg(e, n) {
      switch (is(n), n.tag) {
        case 1:
          return pt(n.type) && mo(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 3:
          return Ir(), Fe(dt), Fe(ot), ys(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
        case 5:
          return ms(n), null;
        case 13:
          if (Fe(Ue), e = n.memoizedState, e !== null && e.dehydrated !== null) {
            if (n.alternate === null) throw Error(i(340));
            xr();
          }
          return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 19:
          return Fe(Ue), null;
        case 4:
          return Ir(), null;
        case 10:
          return cs(n.type._context), null;
        case 22:
        case 23:
          return Ks(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var zo = false, ut = false, ug = typeof WeakSet == "function" ? WeakSet : Set, se = null;
    function Tr(e, n) {
      var o = e.ref;
      if (o !== null) if (typeof o == "function") try {
        o(null);
      } catch (s) {
        We(e, n, s);
      }
      else o.current = null;
    }
    function Ms(e, n, o) {
      try {
        o();
      } catch (s) {
        We(e, n, s);
      }
    }
    var Sf = false;
    function ag(e, n) {
      if (Kl = eo, e = Za(), Ul(e)) {
        if ("selectionStart" in e) var o = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
        else e: {
          o = (o = e.ownerDocument) && o.defaultView || window;
          var s = o.getSelection && o.getSelection();
          if (s && s.rangeCount !== 0) {
            o = s.anchorNode;
            var d = s.anchorOffset, p = s.focusNode;
            s = s.focusOffset;
            try {
              o.nodeType, p.nodeType;
            } catch {
              o = null;
              break e;
            }
            var x = 0, E = -1, C = -1, z = 0, W = 0, q = e, H = null;
            t: for (; ; ) {
              for (var ie; q !== o || d !== 0 && q.nodeType !== 3 || (E = x + d), q !== p || s !== 0 && q.nodeType !== 3 || (C = x + s), q.nodeType === 3 && (x += q.nodeValue.length), (ie = q.firstChild) !== null; ) H = q, q = ie;
              for (; ; ) {
                if (q === e) break t;
                if (H === o && ++z === d && (E = x), H === p && ++W === s && (C = x), (ie = q.nextSibling) !== null) break;
                q = H, H = q.parentNode;
              }
              q = ie;
            }
            o = E === -1 || C === -1 ? null : {
              start: E,
              end: C
            };
          } else o = null;
        }
        o = o || {
          start: 0,
          end: 0
        };
      } else o = null;
      for (Gl = {
        focusedElem: e,
        selectionRange: o
      }, eo = false, se = n; se !== null; ) if (n = se, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, se = e;
      else for (; se !== null; ) {
        n = se;
        try {
          var ae = n.alternate;
          if ((n.flags & 1024) !== 0) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (ae !== null) {
                var ce = ae.memoizedProps, qe = ae.memoizedState, O = n.stateNode, P = O.getSnapshotBeforeUpdate(n.elementType === n.type ? ce : Ht(n.type, ce), qe);
                O.__reactInternalSnapshotBeforeUpdate = P;
              }
              break;
            case 3:
              var A = n.stateNode.containerInfo;
              A.nodeType === 1 ? A.textContent = "" : A.nodeType === 9 && A.documentElement && A.removeChild(A.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(i(163));
          }
        } catch (K) {
          We(n, n.return, K);
        }
        if (e = n.sibling, e !== null) {
          e.return = n.return, se = e;
          break;
        }
        se = n.return;
      }
      return ae = Sf, Sf = false, ae;
    }
    function xi(e, n, o) {
      var s = n.updateQueue;
      if (s = s !== null ? s.lastEffect : null, s !== null) {
        var d = s = s.next;
        do {
          if ((d.tag & e) === e) {
            var p = d.destroy;
            d.destroy = void 0, p !== void 0 && Ms(n, o, p);
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function bo(e, n) {
      if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
        var o = n = n.next;
        do {
          if ((o.tag & e) === e) {
            var s = o.create;
            o.destroy = s();
          }
          o = o.next;
        } while (o !== n);
      }
    }
    function Fs(e) {
      var n = e.ref;
      if (n !== null) {
        var o = e.stateNode;
        switch (e.tag) {
          case 5:
            e = o;
            break;
          default:
            e = o;
        }
        typeof n == "function" ? n(e) : n.current = e;
      }
    }
    function Ef(e) {
      var n = e.alternate;
      n !== null && (e.alternate = null, Ef(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Xt], delete n[ai], delete n[es], delete n[$m], delete n[qm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function If(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Cf(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || If(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function js(e, n, o) {
      var s = e.tag;
      if (s === 5 || s === 6) e = e.stateNode, n ? o.nodeType === 8 ? o.parentNode.insertBefore(e, n) : o.insertBefore(e, n) : (o.nodeType === 8 ? (n = o.parentNode, n.insertBefore(e, o)) : (n = o, n.appendChild(e)), o = o._reactRootContainer, o != null || n.onclick !== null || (n.onclick = po));
      else if (s !== 4 && (e = e.child, e !== null)) for (js(e, n, o), e = e.sibling; e !== null; ) js(e, n, o), e = e.sibling;
    }
    function Bs(e, n, o) {
      var s = e.tag;
      if (s === 5 || s === 6) e = e.stateNode, n ? o.insertBefore(e, n) : o.appendChild(e);
      else if (s !== 4 && (e = e.child, e !== null)) for (Bs(e, n, o), e = e.sibling; e !== null; ) Bs(e, n, o), e = e.sibling;
    }
    var rt = null, Wt = false;
    function On(e, n, o) {
      for (o = o.child; o !== null; ) Tf(e, n, o), o = o.sibling;
    }
    function Tf(e, n, o) {
      if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
        Gt.onCommitFiberUnmount(Qi, o);
      } catch {
      }
      switch (o.tag) {
        case 5:
          ut || Tr(o, n);
        case 6:
          var s = rt, d = Wt;
          rt = null, On(e, n, o), rt = s, Wt = d, rt !== null && (Wt ? (e = rt, o = o.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o)) : rt.removeChild(o.stateNode));
          break;
        case 18:
          rt !== null && (Wt ? (e = rt, o = o.stateNode, e.nodeType === 8 ? Zl(e.parentNode, o) : e.nodeType === 1 && Zl(e, o), Jr(e)) : Zl(rt, o.stateNode));
          break;
        case 4:
          s = rt, d = Wt, rt = o.stateNode.containerInfo, Wt = true, On(e, n, o), rt = s, Wt = d;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!ut && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
            d = s = s.next;
            do {
              var p = d, x = p.destroy;
              p = p.tag, x !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Ms(o, n, x), d = d.next;
            } while (d !== s);
          }
          On(e, n, o);
          break;
        case 1:
          if (!ut && (Tr(o, n), s = o.stateNode, typeof s.componentWillUnmount == "function")) try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (E) {
            We(o, n, E);
          }
          On(e, n, o);
          break;
        case 21:
          On(e, n, o);
          break;
        case 22:
          o.mode & 1 ? (ut = (s = ut) || o.memoizedState !== null, On(e, n, o), ut = s) : On(e, n, o);
          break;
        default:
          On(e, n, o);
      }
    }
    function Pf(e) {
      var n = e.updateQueue;
      if (n !== null) {
        e.updateQueue = null;
        var o = e.stateNode;
        o === null && (o = e.stateNode = new ug()), n.forEach(function(s) {
          var d = vg.bind(null, e, s);
          o.has(s) || (o.add(s), s.then(d, d));
        });
      }
    }
    function $t(e, n) {
      var o = n.deletions;
      if (o !== null) for (var s = 0; s < o.length; s++) {
        var d = o[s];
        try {
          var p = e, x = n, E = x;
          e: for (; E !== null; ) {
            switch (E.tag) {
              case 5:
                rt = E.stateNode, Wt = false;
                break e;
              case 3:
                rt = E.stateNode.containerInfo, Wt = true;
                break e;
              case 4:
                rt = E.stateNode.containerInfo, Wt = true;
                break e;
            }
            E = E.return;
          }
          if (rt === null) throw Error(i(160));
          Tf(p, x, d), rt = null, Wt = false;
          var C = d.alternate;
          C !== null && (C.return = null), d.return = null;
        } catch (z) {
          We(d, n, z);
        }
      }
      if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) _f(n, e), n = n.sibling;
    }
    function _f(e, n) {
      var o = e.alternate, s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ($t(n, e), en(e), s & 4) {
            try {
              xi(3, e, e.return), bo(3, e);
            } catch (ce) {
              We(e, e.return, ce);
            }
            try {
              xi(5, e, e.return);
            } catch (ce) {
              We(e, e.return, ce);
            }
          }
          break;
        case 1:
          $t(n, e), en(e), s & 512 && o !== null && Tr(o, o.return);
          break;
        case 5:
          if ($t(n, e), en(e), s & 512 && o !== null && Tr(o, o.return), e.flags & 32) {
            var d = e.stateNode;
            try {
              Pe(d, "");
            } catch (ce) {
              We(e, e.return, ce);
            }
          }
          if (s & 4 && (d = e.stateNode, d != null)) {
            var p = e.memoizedProps, x = o !== null ? o.memoizedProps : p, E = e.type, C = e.updateQueue;
            if (e.updateQueue = null, C !== null) try {
              E === "input" && p.type === "radio" && p.name != null && Ur(d, p), Kt(E, x);
              var z = Kt(E, p);
              for (x = 0; x < C.length; x += 2) {
                var W = C[x], q = C[x + 1];
                W === "style" ? vn(d, q) : W === "dangerouslySetInnerHTML" ? Ee(d, q) : W === "children" ? Pe(d, q) : L(d, W, q, z);
              }
              switch (E) {
                case "input":
                  ir(d, p);
                  break;
                case "textarea":
                  Hi(d, p);
                  break;
                case "select":
                  var H = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var ie = p.value;
                  ie != null ? yn(d, !!p.multiple, ie, false) : H !== !!p.multiple && (p.defaultValue != null ? yn(d, !!p.multiple, p.defaultValue, true) : yn(d, !!p.multiple, p.multiple ? [] : "", false));
              }
              d[ai] = p;
            } catch (ce) {
              We(e, e.return, ce);
            }
          }
          break;
        case 6:
          if ($t(n, e), en(e), s & 4) {
            if (e.stateNode === null) throw Error(i(162));
            d = e.stateNode, p = e.memoizedProps;
            try {
              d.nodeValue = p;
            } catch (ce) {
              We(e, e.return, ce);
            }
          }
          break;
        case 3:
          if ($t(n, e), en(e), s & 4 && o !== null && o.memoizedState.isDehydrated) try {
            Jr(n.containerInfo);
          } catch (ce) {
            We(e, e.return, ce);
          }
          break;
        case 4:
          $t(n, e), en(e);
          break;
        case 13:
          $t(n, e), en(e), d = e.child, d.flags & 8192 && (p = d.memoizedState !== null, d.stateNode.isHidden = p, !p || d.alternate !== null && d.alternate.memoizedState !== null || (Hs = $e())), s & 4 && Pf(e);
          break;
        case 22:
          if (W = o !== null && o.memoizedState !== null, e.mode & 1 ? (ut = (z = ut) || W, $t(n, e), ut = z) : $t(n, e), en(e), s & 8192) {
            if (z = e.memoizedState !== null, (e.stateNode.isHidden = z) && !W && (e.mode & 1) !== 0) for (se = e, W = e.child; W !== null; ) {
              for (q = se = W; se !== null; ) {
                switch (H = se, ie = H.child, H.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    xi(4, H, H.return);
                    break;
                  case 1:
                    Tr(H, H.return);
                    var ae = H.stateNode;
                    if (typeof ae.componentWillUnmount == "function") {
                      s = H, o = H.return;
                      try {
                        n = s, ae.props = n.memoizedProps, ae.state = n.memoizedState, ae.componentWillUnmount();
                      } catch (ce) {
                        We(s, o, ce);
                      }
                    }
                    break;
                  case 5:
                    Tr(H, H.return);
                    break;
                  case 22:
                    if (H.memoizedState !== null) {
                      Of(q);
                      continue;
                    }
                }
                ie !== null ? (ie.return = H, se = ie) : Of(q);
              }
              W = W.sibling;
            }
            e: for (W = null, q = e; ; ) {
              if (q.tag === 5) {
                if (W === null) {
                  W = q;
                  try {
                    d = q.stateNode, z ? (p = d.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (E = q.stateNode, C = q.memoizedProps.style, x = C != null && C.hasOwnProperty("display") ? C.display : null, E.style.display = At("display", x));
                  } catch (ce) {
                    We(e, e.return, ce);
                  }
                }
              } else if (q.tag === 6) {
                if (W === null) try {
                  q.stateNode.nodeValue = z ? "" : q.memoizedProps;
                } catch (ce) {
                  We(e, e.return, ce);
                }
              } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === e) && q.child !== null) {
                q.child.return = q, q = q.child;
                continue;
              }
              if (q === e) break e;
              for (; q.sibling === null; ) {
                if (q.return === null || q.return === e) break e;
                W === q && (W = null), q = q.return;
              }
              W === q && (W = null), q.sibling.return = q.return, q = q.sibling;
            }
          }
          break;
        case 19:
          $t(n, e), en(e), s & 4 && Pf(e);
          break;
        case 21:
          break;
        default:
          $t(n, e), en(e);
      }
    }
    function en(e) {
      var n = e.flags;
      if (n & 2) {
        try {
          e: {
            for (var o = e.return; o !== null; ) {
              if (If(o)) {
                var s = o;
                break e;
              }
              o = o.return;
            }
            throw Error(i(160));
          }
          switch (s.tag) {
            case 5:
              var d = s.stateNode;
              s.flags & 32 && (Pe(d, ""), s.flags &= -33);
              var p = Cf(e);
              Bs(e, p, d);
              break;
            case 3:
            case 4:
              var x = s.stateNode.containerInfo, E = Cf(e);
              js(e, E, x);
              break;
            default:
              throw Error(i(161));
          }
        } catch (C) {
          We(e, e.return, C);
        }
        e.flags &= -3;
      }
      n & 4096 && (e.flags &= -4097);
    }
    function cg(e, n, o) {
      se = e, Nf(e);
    }
    function Nf(e, n, o) {
      for (var s = (e.mode & 1) !== 0; se !== null; ) {
        var d = se, p = d.child;
        if (d.tag === 22 && s) {
          var x = d.memoizedState !== null || zo;
          if (!x) {
            var E = d.alternate, C = E !== null && E.memoizedState !== null || ut;
            E = zo;
            var z = ut;
            if (zo = x, (ut = C) && !z) for (se = d; se !== null; ) x = se, C = x.child, x.tag === 22 && x.memoizedState !== null ? Af(d) : C !== null ? (C.return = x, se = C) : Af(d);
            for (; p !== null; ) se = p, Nf(p), p = p.sibling;
            se = d, zo = E, ut = z;
          }
          Df(e);
        } else (d.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = d, se = p) : Df(e);
      }
    }
    function Df(e) {
      for (; se !== null; ) {
        var n = se;
        if ((n.flags & 8772) !== 0) {
          var o = n.alternate;
          try {
            if ((n.flags & 8772) !== 0) switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ut || bo(5, n);
                break;
              case 1:
                var s = n.stateNode;
                if (n.flags & 4 && !ut) if (o === null) s.componentDidMount();
                else {
                  var d = n.elementType === n.type ? o.memoizedProps : Ht(n.type, o.memoizedProps);
                  s.componentDidUpdate(d, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                }
                var p = n.updateQueue;
                p !== null && Dc(n, p, s);
                break;
              case 3:
                var x = n.updateQueue;
                if (x !== null) {
                  if (o = null, n.child !== null) switch (n.child.tag) {
                    case 5:
                      o = n.child.stateNode;
                      break;
                    case 1:
                      o = n.child.stateNode;
                  }
                  Dc(n, x, o);
                }
                break;
              case 5:
                var E = n.stateNode;
                if (o === null && n.flags & 4) {
                  o = E;
                  var C = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      C.autoFocus && o.focus();
                      break;
                    case "img":
                      C.src && (o.src = C.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var z = n.alternate;
                  if (z !== null) {
                    var W = z.memoizedState;
                    if (W !== null) {
                      var q = W.dehydrated;
                      q !== null && Jr(q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
            ut || n.flags & 512 && Fs(n);
          } catch (H) {
            We(n, n.return, H);
          }
        }
        if (n === e) {
          se = null;
          break;
        }
        if (o = n.sibling, o !== null) {
          o.return = n.return, se = o;
          break;
        }
        se = n.return;
      }
    }
    function Of(e) {
      for (; se !== null; ) {
        var n = se;
        if (n === e) {
          se = null;
          break;
        }
        var o = n.sibling;
        if (o !== null) {
          o.return = n.return, se = o;
          break;
        }
        se = n.return;
      }
    }
    function Af(e) {
      for (; se !== null; ) {
        var n = se;
        try {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              var o = n.return;
              try {
                bo(4, n);
              } catch (C) {
                We(n, o, C);
              }
              break;
            case 1:
              var s = n.stateNode;
              if (typeof s.componentDidMount == "function") {
                var d = n.return;
                try {
                  s.componentDidMount();
                } catch (C) {
                  We(n, d, C);
                }
              }
              var p = n.return;
              try {
                Fs(n);
              } catch (C) {
                We(n, p, C);
              }
              break;
            case 5:
              var x = n.return;
              try {
                Fs(n);
              } catch (C) {
                We(n, x, C);
              }
          }
        } catch (C) {
          We(n, n.return, C);
        }
        if (n === e) {
          se = null;
          break;
        }
        var E = n.sibling;
        if (E !== null) {
          E.return = n.return, se = E;
          break;
        }
        se = n.return;
      }
    }
    var fg = Math.ceil, Mo = $.ReactCurrentDispatcher, Us = $.ReactCurrentOwner, Mt = $.ReactCurrentBatchConfig, _e = 0, Ze = null, Qe = null, it = 0, Ct = 0, Pr = Tn(0), Xe = 0, ki = null, Jn = 0, Fo = 0, Vs = 0, Si = null, mt = null, Hs = 0, _r = 1 / 0, mn = null, jo = false, Ws = null, An = null, Bo = false, Rn = null, Uo = 0, Ei = 0, $s = null, Vo = -1, Ho = 0;
    function ft() {
      return (_e & 6) !== 0 ? $e() : Vo !== -1 ? Vo : Vo = $e();
    }
    function Ln(e) {
      return (e.mode & 1) === 0 ? 1 : (_e & 2) !== 0 && it !== 0 ? it & -it : Qm.transition !== null ? (Ho === 0 && (Ho = Ia()), Ho) : (e = Ae, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ra(e.type)), e);
    }
    function qt(e, n, o, s) {
      if (50 < Ei) throw Ei = 0, $s = null, Error(i(185));
      Yr(e, o, s), ((_e & 2) === 0 || e !== Ze) && (e === Ze && ((_e & 2) === 0 && (Fo |= o), Xe === 4 && zn(e, it)), gt(e, s), o === 1 && _e === 0 && (n.mode & 1) === 0 && (_r = $e() + 500, yo && _n()));
    }
    function gt(e, n) {
      var o = e.callbackNode;
      Qh(e, n);
      var s = Xi(e, e === Ze ? it : 0);
      if (s === 0) o !== null && ka(o), e.callbackNode = null, e.callbackPriority = 0;
      else if (n = s & -s, e.callbackPriority !== n) {
        if (o != null && ka(o), n === 1) e.tag === 0 ? Ym(Lf.bind(null, e)) : vc(Lf.bind(null, e)), Hm(function() {
          (_e & 6) === 0 && _n();
        }), o = null;
        else {
          switch (Ca(s)) {
            case 1:
              o = Il;
              break;
            case 4:
              o = Sa;
              break;
            case 16:
              o = Yi;
              break;
            case 536870912:
              o = Ea;
              break;
            default:
              o = Yi;
          }
          o = Vf(o, Rf.bind(null, e));
        }
        e.callbackPriority = n, e.callbackNode = o;
      }
    }
    function Rf(e, n) {
      if (Vo = -1, Ho = 0, (_e & 6) !== 0) throw Error(i(327));
      var o = e.callbackNode;
      if (Nr() && e.callbackNode !== o) return null;
      var s = Xi(e, e === Ze ? it : 0);
      if (s === 0) return null;
      if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || n) n = Wo(e, s);
      else {
        n = s;
        var d = _e;
        _e |= 2;
        var p = bf();
        (Ze !== e || it !== n) && (mn = null, _r = $e() + 500, er(e, n));
        do
          try {
            hg();
            break;
          } catch (E) {
            zf(e, E);
          }
        while (true);
        as(), Mo.current = p, _e = d, Qe !== null ? n = 0 : (Ze = null, it = 0, n = Xe);
      }
      if (n !== 0) {
        if (n === 2 && (d = Cl(e), d !== 0 && (s = d, n = qs(e, d))), n === 1) throw o = ki, er(e, 0), zn(e, s), gt(e, $e()), o;
        if (n === 6) zn(e, s);
        else {
          if (d = e.current.alternate, (s & 30) === 0 && !dg(d) && (n = Wo(e, s), n === 2 && (p = Cl(e), p !== 0 && (s = p, n = qs(e, p))), n === 1)) throw o = ki, er(e, 0), zn(e, s), gt(e, $e()), o;
          switch (e.finishedWork = d, e.finishedLanes = s, n) {
            case 0:
            case 1:
              throw Error(i(345));
            case 2:
              tr(e, mt, mn);
              break;
            case 3:
              if (zn(e, s), (s & 130023424) === s && (n = Hs + 500 - $e(), 10 < n)) {
                if (Xi(e, 0) !== 0) break;
                if (d = e.suspendedLanes, (d & s) !== s) {
                  ft(), e.pingedLanes |= e.suspendedLanes & d;
                  break;
                }
                e.timeoutHandle = Jl(tr.bind(null, e, mt, mn), n);
                break;
              }
              tr(e, mt, mn);
              break;
            case 4:
              if (zn(e, s), (s & 4194240) === s) break;
              for (n = e.eventTimes, d = -1; 0 < s; ) {
                var x = 31 - Bt(s);
                p = 1 << x, x = n[x], x > d && (d = x), s &= ~p;
              }
              if (s = d, s = $e() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * fg(s / 1960)) - s, 10 < s) {
                e.timeoutHandle = Jl(tr.bind(null, e, mt, mn), s);
                break;
              }
              tr(e, mt, mn);
              break;
            case 5:
              tr(e, mt, mn);
              break;
            default:
              throw Error(i(329));
          }
        }
      }
      return gt(e, $e()), e.callbackNode === o ? Rf.bind(null, e) : null;
    }
    function qs(e, n) {
      var o = Si;
      return e.current.memoizedState.isDehydrated && (er(e, n).flags |= 256), e = Wo(e, n), e !== 2 && (n = mt, mt = o, n !== null && Ys(n)), e;
    }
    function Ys(e) {
      mt === null ? mt = e : mt.push.apply(mt, e);
    }
    function dg(e) {
      for (var n = e; ; ) {
        if (n.flags & 16384) {
          var o = n.updateQueue;
          if (o !== null && (o = o.stores, o !== null)) for (var s = 0; s < o.length; s++) {
            var d = o[s], p = d.getSnapshot;
            d = d.value;
            try {
              if (!Ut(p(), d)) return false;
            } catch {
              return false;
            }
          }
        }
        if (o = n.child, n.subtreeFlags & 16384 && o !== null) o.return = n, n = o;
        else {
          if (n === e) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return true;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
      }
      return true;
    }
    function zn(e, n) {
      for (n &= ~Vs, n &= ~Fo, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Bt(n), s = 1 << o;
        e[o] = -1, n &= ~s;
      }
    }
    function Lf(e) {
      if ((_e & 6) !== 0) throw Error(i(327));
      Nr();
      var n = Xi(e, 0);
      if ((n & 1) === 0) return gt(e, $e()), null;
      var o = Wo(e, n);
      if (e.tag !== 0 && o === 2) {
        var s = Cl(e);
        s !== 0 && (n = s, o = qs(e, s));
      }
      if (o === 1) throw o = ki, er(e, 0), zn(e, n), gt(e, $e()), o;
      if (o === 6) throw Error(i(345));
      return e.finishedWork = e.current.alternate, e.finishedLanes = n, tr(e, mt, mn), gt(e, $e()), null;
    }
    function Qs(e, n) {
      var o = _e;
      _e |= 1;
      try {
        return e(n);
      } finally {
        _e = o, _e === 0 && (_r = $e() + 500, yo && _n());
      }
    }
    function Zn(e) {
      Rn !== null && Rn.tag === 0 && (_e & 6) === 0 && Nr();
      var n = _e;
      _e |= 1;
      var o = Mt.transition, s = Ae;
      try {
        if (Mt.transition = null, Ae = 1, e) return e();
      } finally {
        Ae = s, Mt.transition = o, _e = n, (_e & 6) === 0 && _n();
      }
    }
    function Ks() {
      Ct = Pr.current, Fe(Pr);
    }
    function er(e, n) {
      e.finishedWork = null, e.finishedLanes = 0;
      var o = e.timeoutHandle;
      if (o !== -1 && (e.timeoutHandle = -1, Vm(o)), Qe !== null) for (o = Qe.return; o !== null; ) {
        var s = o;
        switch (is(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && mo();
            break;
          case 3:
            Ir(), Fe(dt), Fe(ot), ys();
            break;
          case 5:
            ms(s);
            break;
          case 4:
            Ir();
            break;
          case 13:
            Fe(Ue);
            break;
          case 19:
            Fe(Ue);
            break;
          case 10:
            cs(s.type._context);
            break;
          case 22:
          case 23:
            Ks();
        }
        o = o.return;
      }
      if (Ze = e, Qe = e = bn(e.current, null), it = Ct = n, Xe = 0, ki = null, Vs = Fo = Jn = 0, mt = Si = null, Kn !== null) {
        for (n = 0; n < Kn.length; n++) if (o = Kn[n], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var d = s.next, p = o.pending;
          if (p !== null) {
            var x = p.next;
            p.next = d, s.next = x;
          }
          o.pending = s;
        }
        Kn = null;
      }
      return e;
    }
    function zf(e, n) {
      do {
        var o = Qe;
        try {
          if (as(), Po.current = Oo, _o) {
            for (var s = Ve.memoizedState; s !== null; ) {
              var d = s.queue;
              d !== null && (d.pending = null), s = s.next;
            }
            _o = false;
          }
          if (Xn = 0, Je = Ge = Ve = null, mi = false, gi = 0, Us.current = null, o === null || o.return === null) {
            Xe = 1, ki = n, Qe = null;
            break;
          }
          e: {
            var p = e, x = o.return, E = o, C = n;
            if (n = it, E.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
              var z = C, W = E, q = W.tag;
              if ((W.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
                var H = W.alternate;
                H ? (W.updateQueue = H.updateQueue, W.memoizedState = H.memoizedState, W.lanes = H.lanes) : (W.updateQueue = null, W.memoizedState = null);
              }
              var ie = lf(x);
              if (ie !== null) {
                ie.flags &= -257, sf(ie, x, E, p, n), ie.mode & 1 && of(p, z, n), n = ie, C = z;
                var ae = n.updateQueue;
                if (ae === null) {
                  var ce = /* @__PURE__ */ new Set();
                  ce.add(C), n.updateQueue = ce;
                } else ae.add(C);
                break e;
              } else {
                if ((n & 1) === 0) {
                  of(p, z, n), Gs();
                  break e;
                }
                C = Error(i(426));
              }
            } else if (Be && E.mode & 1) {
              var qe = lf(x);
              if (qe !== null) {
                (qe.flags & 65536) === 0 && (qe.flags |= 256), sf(qe, x, E, p, n), ss(Cr(C, E));
                break e;
              }
            }
            p = C = Cr(C, E), Xe !== 4 && (Xe = 2), Si === null ? Si = [
              p
            ] : Si.push(p), p = x;
            do {
              switch (p.tag) {
                case 3:
                  p.flags |= 65536, n &= -n, p.lanes |= n;
                  var O = nf(p, C, n);
                  Nc(p, O);
                  break e;
                case 1:
                  E = C;
                  var P = p.type, A = p.stateNode;
                  if ((p.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && (An === null || !An.has(A)))) {
                    p.flags |= 65536, n &= -n, p.lanes |= n;
                    var K = rf(p, E, n);
                    Nc(p, K);
                    break e;
                  }
              }
              p = p.return;
            } while (p !== null);
          }
          Ff(o);
        } catch (fe) {
          n = fe, Qe === o && o !== null && (Qe = o = o.return);
          continue;
        }
        break;
      } while (true);
    }
    function bf() {
      var e = Mo.current;
      return Mo.current = Oo, e === null ? Oo : e;
    }
    function Gs() {
      (Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4), Ze === null || (Jn & 268435455) === 0 && (Fo & 268435455) === 0 || zn(Ze, it);
    }
    function Wo(e, n) {
      var o = _e;
      _e |= 2;
      var s = bf();
      (Ze !== e || it !== n) && (mn = null, er(e, n));
      do
        try {
          pg();
          break;
        } catch (d) {
          zf(e, d);
        }
      while (true);
      if (as(), _e = o, Mo.current = s, Qe !== null) throw Error(i(261));
      return Ze = null, it = 0, Xe;
    }
    function pg() {
      for (; Qe !== null; ) Mf(Qe);
    }
    function hg() {
      for (; Qe !== null && !jh(); ) Mf(Qe);
    }
    function Mf(e) {
      var n = Uf(e.alternate, e, Ct);
      e.memoizedProps = e.pendingProps, n === null ? Ff(e) : Qe = n, Us.current = null;
    }
    function Ff(e) {
      var n = e;
      do {
        var o = n.alternate;
        if (e = n.return, (n.flags & 32768) === 0) {
          if (o = lg(o, n, Ct), o !== null) {
            Qe = o;
            return;
          }
        } else {
          if (o = sg(o, n), o !== null) {
            o.flags &= 32767, Qe = o;
            return;
          }
          if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
          else {
            Xe = 6, Qe = null;
            return;
          }
        }
        if (n = n.sibling, n !== null) {
          Qe = n;
          return;
        }
        Qe = n = e;
      } while (n !== null);
      Xe === 0 && (Xe = 5);
    }
    function tr(e, n, o) {
      var s = Ae, d = Mt.transition;
      try {
        Mt.transition = null, Ae = 1, mg(e, n, o, s);
      } finally {
        Mt.transition = d, Ae = s;
      }
      return null;
    }
    function mg(e, n, o, s) {
      do
        Nr();
      while (Rn !== null);
      if ((_e & 6) !== 0) throw Error(i(327));
      o = e.finishedWork;
      var d = e.finishedLanes;
      if (o === null) return null;
      if (e.finishedWork = null, e.finishedLanes = 0, o === e.current) throw Error(i(177));
      e.callbackNode = null, e.callbackPriority = 0;
      var p = o.lanes | o.childLanes;
      if (Kh(e, p), e === Ze && (Qe = Ze = null, it = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Bo || (Bo = true, Vf(Yi, function() {
        return Nr(), null;
      })), p = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || p) {
        p = Mt.transition, Mt.transition = null;
        var x = Ae;
        Ae = 1;
        var E = _e;
        _e |= 4, Us.current = null, ag(e, o), _f(o, e), zm(Gl), eo = !!Kl, Gl = Kl = null, e.current = o, cg(o), Bh(), _e = E, Ae = x, Mt.transition = p;
      } else e.current = o;
      if (Bo && (Bo = false, Rn = e, Uo = d), p = e.pendingLanes, p === 0 && (An = null), Hh(o.stateNode), gt(e, $e()), n !== null) for (s = e.onRecoverableError, o = 0; o < n.length; o++) d = n[o], s(d.value, {
        componentStack: d.stack,
        digest: d.digest
      });
      if (jo) throw jo = false, e = Ws, Ws = null, e;
      return (Uo & 1) !== 0 && e.tag !== 0 && Nr(), p = e.pendingLanes, (p & 1) !== 0 ? e === $s ? Ei++ : (Ei = 0, $s = e) : Ei = 0, _n(), null;
    }
    function Nr() {
      if (Rn !== null) {
        var e = Ca(Uo), n = Mt.transition, o = Ae;
        try {
          if (Mt.transition = null, Ae = 16 > e ? 16 : e, Rn === null) var s = false;
          else {
            if (e = Rn, Rn = null, Uo = 0, (_e & 6) !== 0) throw Error(i(331));
            var d = _e;
            for (_e |= 4, se = e.current; se !== null; ) {
              var p = se, x = p.child;
              if ((se.flags & 16) !== 0) {
                var E = p.deletions;
                if (E !== null) {
                  for (var C = 0; C < E.length; C++) {
                    var z = E[C];
                    for (se = z; se !== null; ) {
                      var W = se;
                      switch (W.tag) {
                        case 0:
                        case 11:
                        case 15:
                          xi(8, W, p);
                      }
                      var q = W.child;
                      if (q !== null) q.return = W, se = q;
                      else for (; se !== null; ) {
                        W = se;
                        var H = W.sibling, ie = W.return;
                        if (Ef(W), W === z) {
                          se = null;
                          break;
                        }
                        if (H !== null) {
                          H.return = ie, se = H;
                          break;
                        }
                        se = ie;
                      }
                    }
                  }
                  var ae = p.alternate;
                  if (ae !== null) {
                    var ce = ae.child;
                    if (ce !== null) {
                      ae.child = null;
                      do {
                        var qe = ce.sibling;
                        ce.sibling = null, ce = qe;
                      } while (ce !== null);
                    }
                  }
                  se = p;
                }
              }
              if ((p.subtreeFlags & 2064) !== 0 && x !== null) x.return = p, se = x;
              else e: for (; se !== null; ) {
                if (p = se, (p.flags & 2048) !== 0) switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xi(9, p, p.return);
                }
                var O = p.sibling;
                if (O !== null) {
                  O.return = p.return, se = O;
                  break e;
                }
                se = p.return;
              }
            }
            var P = e.current;
            for (se = P; se !== null; ) {
              x = se;
              var A = x.child;
              if ((x.subtreeFlags & 2064) !== 0 && A !== null) A.return = x, se = A;
              else e: for (x = P; se !== null; ) {
                if (E = se, (E.flags & 2048) !== 0) try {
                  switch (E.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bo(9, E);
                  }
                } catch (fe) {
                  We(E, E.return, fe);
                }
                if (E === x) {
                  se = null;
                  break e;
                }
                var K = E.sibling;
                if (K !== null) {
                  K.return = E.return, se = K;
                  break e;
                }
                se = E.return;
              }
            }
            if (_e = d, _n(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
              Gt.onPostCommitFiberRoot(Qi, e);
            } catch {
            }
            s = true;
          }
          return s;
        } finally {
          Ae = o, Mt.transition = n;
        }
      }
      return false;
    }
    function jf(e, n, o) {
      n = Cr(o, n), n = nf(e, n, 1), e = Dn(e, n, 1), n = ft(), e !== null && (Yr(e, 1, n), gt(e, n));
    }
    function We(e, n, o) {
      if (e.tag === 3) jf(e, e, o);
      else for (; n !== null; ) {
        if (n.tag === 3) {
          jf(n, e, o);
          break;
        } else if (n.tag === 1) {
          var s = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (An === null || !An.has(s))) {
            e = Cr(o, e), e = rf(n, e, 1), n = Dn(n, e, 1), e = ft(), n !== null && (Yr(n, 1, e), gt(n, e));
            break;
          }
        }
        n = n.return;
      }
    }
    function gg(e, n, o) {
      var s = e.pingCache;
      s !== null && s.delete(n), n = ft(), e.pingedLanes |= e.suspendedLanes & o, Ze === e && (it & o) === o && (Xe === 4 || Xe === 3 && (it & 130023424) === it && 500 > $e() - Hs ? er(e, 0) : Vs |= o), gt(e, n);
    }
    function Bf(e, n) {
      n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = Gi, Gi <<= 1, (Gi & 130023424) === 0 && (Gi = 4194304)));
      var o = ft();
      e = dn(e, n), e !== null && (Yr(e, n, o), gt(e, o));
    }
    function yg(e) {
      var n = e.memoizedState, o = 0;
      n !== null && (o = n.retryLane), Bf(e, o);
    }
    function vg(e, n) {
      var o = 0;
      switch (e.tag) {
        case 13:
          var s = e.stateNode, d = e.memoizedState;
          d !== null && (o = d.retryLane);
          break;
        case 19:
          s = e.stateNode;
          break;
        default:
          throw Error(i(314));
      }
      s !== null && s.delete(n), Bf(e, o);
    }
    var Uf;
    Uf = function(e, n, o) {
      if (e !== null) if (e.memoizedProps !== n.pendingProps || dt.current) ht = true;
      else {
        if ((e.lanes & o) === 0 && (n.flags & 128) === 0) return ht = false, og(e, n, o);
        ht = (e.flags & 131072) !== 0;
      }
      else ht = false, Be && (n.flags & 1048576) !== 0 && wc(n, wo, n.index);
      switch (n.lanes = 0, n.tag) {
        case 2:
          var s = n.type;
          Lo(e, n), e = n.pendingProps;
          var d = yr(n, ot.current);
          Er(n, o), d = xs(null, n, s, e, d, o);
          var p = ks();
          return n.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, pt(s) ? (p = true, go(n)) : p = false, n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, ps(n), d.updater = Ao, n.stateNode = d, d._reactInternals = n, Ps(n, s, e, o), n = Os(null, n, s, true, p, o)) : (n.tag = 0, Be && p && rs(n), ct(null, n, d, o), n = n.child), n;
        case 16:
          s = n.elementType;
          e: {
            switch (Lo(e, n), e = n.pendingProps, d = s._init, s = d(s._payload), n.type = s, d = n.tag = xg(s), e = Ht(s, e), d) {
              case 0:
                n = Ds(null, n, s, e, o);
                break e;
              case 1:
                n = pf(null, n, s, e, o);
                break e;
              case 11:
                n = uf(null, n, s, e, o);
                break e;
              case 14:
                n = af(null, n, s, Ht(s.type, e), o);
                break e;
            }
            throw Error(i(306, s, ""));
          }
          return n;
        case 0:
          return s = n.type, d = n.pendingProps, d = n.elementType === s ? d : Ht(s, d), Ds(e, n, s, d, o);
        case 1:
          return s = n.type, d = n.pendingProps, d = n.elementType === s ? d : Ht(s, d), pf(e, n, s, d, o);
        case 3:
          e: {
            if (hf(n), e === null) throw Error(i(387));
            s = n.pendingProps, p = n.memoizedState, d = p.element, _c(e, n), Co(n, s, null, o);
            var x = n.memoizedState;
            if (s = x.element, p.isDehydrated) if (p = {
              element: s,
              isDehydrated: false,
              cache: x.cache,
              pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
              transitions: x.transitions
            }, n.updateQueue.baseState = p, n.memoizedState = p, n.flags & 256) {
              d = Cr(Error(i(423)), n), n = mf(e, n, s, o, d);
              break e;
            } else if (s !== d) {
              d = Cr(Error(i(424)), n), n = mf(e, n, s, o, d);
              break e;
            } else for (It = Cn(n.stateNode.containerInfo.firstChild), Et = n, Be = true, Vt = null, o = Tc(n, null, s, o), n.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
            else {
              if (xr(), s === d) {
                n = hn(e, n, o);
                break e;
              }
              ct(e, n, s, o);
            }
            n = n.child;
          }
          return n;
        case 5:
          return Oc(n), e === null && ls(n), s = n.type, d = n.pendingProps, p = e !== null ? e.memoizedProps : null, x = d.children, Xl(s, d) ? x = null : p !== null && Xl(s, p) && (n.flags |= 32), df(e, n), ct(e, n, x, o), n.child;
        case 6:
          return e === null && ls(n), null;
        case 13:
          return gf(e, n, o);
        case 4:
          return hs(n, n.stateNode.containerInfo), s = n.pendingProps, e === null ? n.child = kr(n, null, s, o) : ct(e, n, s, o), n.child;
        case 11:
          return s = n.type, d = n.pendingProps, d = n.elementType === s ? d : Ht(s, d), uf(e, n, s, d, o);
        case 7:
          return ct(e, n, n.pendingProps, o), n.child;
        case 8:
          return ct(e, n, n.pendingProps.children, o), n.child;
        case 12:
          return ct(e, n, n.pendingProps.children, o), n.child;
        case 10:
          e: {
            if (s = n.type._context, d = n.pendingProps, p = n.memoizedProps, x = d.value, Re(So, s._currentValue), s._currentValue = x, p !== null) if (Ut(p.value, x)) {
              if (p.children === d.children && !dt.current) {
                n = hn(e, n, o);
                break e;
              }
            } else for (p = n.child, p !== null && (p.return = n); p !== null; ) {
              var E = p.dependencies;
              if (E !== null) {
                x = p.child;
                for (var C = E.firstContext; C !== null; ) {
                  if (C.context === s) {
                    if (p.tag === 1) {
                      C = pn(-1, o & -o), C.tag = 2;
                      var z = p.updateQueue;
                      if (z !== null) {
                        z = z.shared;
                        var W = z.pending;
                        W === null ? C.next = C : (C.next = W.next, W.next = C), z.pending = C;
                      }
                    }
                    p.lanes |= o, C = p.alternate, C !== null && (C.lanes |= o), fs(p.return, o, n), E.lanes |= o;
                    break;
                  }
                  C = C.next;
                }
              } else if (p.tag === 10) x = p.type === n.type ? null : p.child;
              else if (p.tag === 18) {
                if (x = p.return, x === null) throw Error(i(341));
                x.lanes |= o, E = x.alternate, E !== null && (E.lanes |= o), fs(x, o, n), x = p.sibling;
              } else x = p.child;
              if (x !== null) x.return = p;
              else for (x = p; x !== null; ) {
                if (x === n) {
                  x = null;
                  break;
                }
                if (p = x.sibling, p !== null) {
                  p.return = x.return, x = p;
                  break;
                }
                x = x.return;
              }
              p = x;
            }
            ct(e, n, d.children, o), n = n.child;
          }
          return n;
        case 9:
          return d = n.type, s = n.pendingProps.children, Er(n, o), d = zt(d), s = s(d), n.flags |= 1, ct(e, n, s, o), n.child;
        case 14:
          return s = n.type, d = Ht(s, n.pendingProps), d = Ht(s.type, d), af(e, n, s, d, o);
        case 15:
          return cf(e, n, n.type, n.pendingProps, o);
        case 17:
          return s = n.type, d = n.pendingProps, d = n.elementType === s ? d : Ht(s, d), Lo(e, n), n.tag = 1, pt(s) ? (e = true, go(n)) : e = false, Er(n, o), ef(n, s, d), Ps(n, s, d, o), Os(null, n, s, true, e, o);
        case 19:
          return vf(e, n, o);
        case 22:
          return ff(e, n, o);
      }
      throw Error(i(156, n.tag));
    };
    function Vf(e, n) {
      return xa(e, n);
    }
    function wg(e, n, o, s) {
      this.tag = e, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Ft(e, n, o, s) {
      return new wg(e, n, o, s);
    }
    function Xs(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function xg(e) {
      if (typeof e == "function") return Xs(e) ? 1 : 0;
      if (e != null) {
        if (e = e.$$typeof, e === B) return 11;
        if (e === V) return 14;
      }
      return 2;
    }
    function bn(e, n) {
      var o = e.alternate;
      return o === null ? (o = Ft(e.tag, n, e.key, e.mode), o.elementType = e.elementType, o.type = e.type, o.stateNode = e.stateNode, o.alternate = e, e.alternate = o) : (o.pendingProps = n, o.type = e.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = e.flags & 14680064, o.childLanes = e.childLanes, o.lanes = e.lanes, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, n = e.dependencies, o.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }, o.sibling = e.sibling, o.index = e.index, o.ref = e.ref, o;
    }
    function $o(e, n, o, s, d, p) {
      var x = 2;
      if (s = e, typeof e == "function") Xs(e) && (x = 1);
      else if (typeof e == "string") x = 5;
      else e: switch (e) {
        case te:
          return nr(o.children, d, p, n);
        case re:
          x = 8, d |= 8;
          break;
        case le:
          return e = Ft(12, o, n, d | 2), e.elementType = le, e.lanes = p, e;
        case ue:
          return e = Ft(13, o, n, d), e.elementType = ue, e.lanes = p, e;
        case J:
          return e = Ft(19, o, n, d), e.elementType = J, e.lanes = p, e;
        case ne:
          return qo(o, d, p, n);
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case he:
              x = 10;
              break e;
            case G:
              x = 9;
              break e;
            case B:
              x = 11;
              break e;
            case V:
              x = 14;
              break e;
            case Q:
              x = 16, s = null;
              break e;
          }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
      return n = Ft(x, o, n, d), n.elementType = e, n.type = s, n.lanes = p, n;
    }
    function nr(e, n, o, s) {
      return e = Ft(7, e, s, n), e.lanes = o, e;
    }
    function qo(e, n, o, s) {
      return e = Ft(22, e, s, n), e.elementType = ne, e.lanes = o, e.stateNode = {
        isHidden: false
      }, e;
    }
    function Js(e, n, o) {
      return e = Ft(6, e, null, n), e.lanes = o, e;
    }
    function Zs(e, n, o) {
      return n = Ft(4, e.children !== null ? e.children : [], e.key, n), n.lanes = o, n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, n;
    }
    function kg(e, n, o, s, d) {
      this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Tl(0), this.expirationTimes = Tl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tl(0), this.identifierPrefix = s, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
    }
    function eu(e, n, o, s, d, p, x, E, C) {
      return e = new kg(e, n, o, E, C), n === 1 ? (n = 1, p === true && (n |= 8)) : n = 0, p = Ft(3, null, null, n), e.current = p, p.stateNode = e, p.memoizedState = {
        element: s,
        isDehydrated: o,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
      }, ps(p), e;
    }
    function Sg(e, n, o) {
      var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: R,
        key: s == null ? null : "" + s,
        children: e,
        containerInfo: n,
        implementation: o
      };
    }
    function Hf(e) {
      if (!e) return Pn;
      e = e._reactInternals;
      e: {
        if (Wn(e) !== e || e.tag !== 1) throw Error(i(170));
        var n = e;
        do {
          switch (n.tag) {
            case 3:
              n = n.stateNode.context;
              break e;
            case 1:
              if (pt(n.type)) {
                n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          n = n.return;
        } while (n !== null);
        throw Error(i(171));
      }
      if (e.tag === 1) {
        var o = e.type;
        if (pt(o)) return gc(e, o, n);
      }
      return n;
    }
    function Wf(e, n, o, s, d, p, x, E, C) {
      return e = eu(o, s, true, e, d, p, x, E, C), e.context = Hf(null), o = e.current, s = ft(), d = Ln(o), p = pn(s, d), p.callback = n ?? null, Dn(o, p, d), e.current.lanes = d, Yr(e, d, s), gt(e, s), e;
    }
    function Yo(e, n, o, s) {
      var d = n.current, p = ft(), x = Ln(d);
      return o = Hf(o), n.context === null ? n.context = o : n.pendingContext = o, n = pn(p, x), n.payload = {
        element: e
      }, s = s === void 0 ? null : s, s !== null && (n.callback = s), e = Dn(d, n, x), e !== null && (qt(e, d, x, p), Io(e, d, x)), x;
    }
    function Qo(e) {
      if (e = e.current, !e.child) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function $f(e, n) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var o = e.retryLane;
        e.retryLane = o !== 0 && o < n ? o : n;
      }
    }
    function tu(e, n) {
      $f(e, n), (e = e.alternate) && $f(e, n);
    }
    function Eg() {
      return null;
    }
    var qf = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function nu(e) {
      this._internalRoot = e;
    }
    Ko.prototype.render = nu.prototype.render = function(e) {
      var n = this._internalRoot;
      if (n === null) throw Error(i(409));
      Yo(e, n, null, null);
    }, Ko.prototype.unmount = nu.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        Zn(function() {
          Yo(null, e, null, null);
        }), n[un] = null;
      }
    };
    function Ko(e) {
      this._internalRoot = e;
    }
    Ko.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var n = _a();
        e = {
          blockedOn: null,
          target: e,
          priority: n
        };
        for (var o = 0; o < Sn.length && n !== 0 && n < Sn[o].priority; o++) ;
        Sn.splice(o, 0, e), o === 0 && Oa(e);
      }
    };
    function ru(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Go(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Yf() {
    }
    function Ig(e, n, o, s, d) {
      if (d) {
        if (typeof s == "function") {
          var p = s;
          s = function() {
            var z = Qo(x);
            p.call(z);
          };
        }
        var x = Wf(n, s, e, 0, null, false, false, "", Yf);
        return e._reactRootContainer = x, e[un] = x.current, si(e.nodeType === 8 ? e.parentNode : e), Zn(), x;
      }
      for (; d = e.lastChild; ) e.removeChild(d);
      if (typeof s == "function") {
        var E = s;
        s = function() {
          var z = Qo(C);
          E.call(z);
        };
      }
      var C = eu(e, 0, false, null, null, false, false, "", Yf);
      return e._reactRootContainer = C, e[un] = C.current, si(e.nodeType === 8 ? e.parentNode : e), Zn(function() {
        Yo(n, C, o, s);
      }), C;
    }
    function Xo(e, n, o, s, d) {
      var p = o._reactRootContainer;
      if (p) {
        var x = p;
        if (typeof d == "function") {
          var E = d;
          d = function() {
            var C = Qo(x);
            E.call(C);
          };
        }
        Yo(n, x, e, d);
      } else x = Ig(o, n, e, d, s);
      return Qo(x);
    }
    Ta = function(e) {
      switch (e.tag) {
        case 3:
          var n = e.stateNode;
          if (n.current.memoizedState.isDehydrated) {
            var o = qr(n.pendingLanes);
            o !== 0 && (Pl(n, o | 1), gt(n, $e()), (_e & 6) === 0 && (_r = $e() + 500, _n()));
          }
          break;
        case 13:
          Zn(function() {
            var s = dn(e, 1);
            if (s !== null) {
              var d = ft();
              qt(s, e, 1, d);
            }
          }), tu(e, 1);
      }
    }, _l = function(e) {
      if (e.tag === 13) {
        var n = dn(e, 134217728);
        if (n !== null) {
          var o = ft();
          qt(n, e, 134217728, o);
        }
        tu(e, 134217728);
      }
    }, Pa = function(e) {
      if (e.tag === 13) {
        var n = Ln(e), o = dn(e, n);
        if (o !== null) {
          var s = ft();
          qt(o, e, n, s);
        }
        tu(e, n);
      }
    }, _a = function() {
      return Ae;
    }, Na = function(e, n) {
      var o = Ae;
      try {
        return Ae = e, n();
      } finally {
        Ae = o;
      }
    }, xl = function(e, n, o) {
      switch (n) {
        case "input":
          if (ir(e, o), n = o.name, o.type === "radio" && n != null) {
            for (o = e; o.parentNode; ) o = o.parentNode;
            for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < o.length; n++) {
              var s = o[n];
              if (s !== e && s.form === e.form) {
                var d = ho(s);
                if (!d) throw Error(i(90));
                Vn(s), ir(s, d);
              }
            }
          }
          break;
        case "textarea":
          Hi(e, o);
          break;
        case "select":
          n = o.value, n != null && yn(e, !!o.multiple, n, false);
      }
    }, pa = Qs, ha = Zn;
    var Cg = {
      usingClientEntryPoint: false,
      Events: [
        ci,
        mr,
        ho,
        fa,
        da,
        Qs
      ]
    }, Ii = {
      findFiberByHostInstance: $n,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom"
    }, Tg = {
      bundleType: Ii.bundleType,
      version: Ii.version,
      rendererPackageName: Ii.rendererPackageName,
      rendererConfig: Ii.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: $.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(e) {
        return e = va(e), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ii.findFiberByHostInstance || Eg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Jo.isDisabled && Jo.supportsFiber) try {
        Qi = Jo.inject(Tg), Gt = Jo;
      } catch {
      }
    }
    return yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cg, yt.createPortal = function(e, n) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ru(n)) throw Error(i(200));
      return Sg(e, n, null, o);
    }, yt.createRoot = function(e, n) {
      if (!ru(e)) throw Error(i(299));
      var o = false, s = "", d = qf;
      return n != null && (n.unstable_strictMode === true && (o = true), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), n = eu(e, 1, false, null, null, o, false, s, d), e[un] = n.current, si(e.nodeType === 8 ? e.parentNode : e), new nu(n);
    }, yt.findDOMNode = function(e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
      return e = va(n), e = e === null ? null : e.stateNode, e;
    }, yt.flushSync = function(e) {
      return Zn(e);
    }, yt.hydrate = function(e, n, o) {
      if (!Go(n)) throw Error(i(200));
      return Xo(null, e, n, true, o);
    }, yt.hydrateRoot = function(e, n, o) {
      if (!ru(e)) throw Error(i(405));
      var s = o != null && o.hydratedSources || null, d = false, p = "", x = qf;
      if (o != null && (o.unstable_strictMode === true && (d = true), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (x = o.onRecoverableError)), n = Wf(n, null, e, 1, o ?? null, d, false, p, x), e[un] = n.current, si(e), s) for (e = 0; e < s.length; e++) o = s[e], d = o._getVersion, d = d(o._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [
        o,
        d
      ] : n.mutableSourceEagerHydrationData.push(o, d);
      return new Ko(n);
    }, yt.render = function(e, n, o) {
      if (!Go(n)) throw Error(i(200));
      return Xo(null, e, n, false, o);
    }, yt.unmountComponentAtNode = function(e) {
      if (!Go(e)) throw Error(i(40));
      return e._reactRootContainer ? (Zn(function() {
        Xo(null, null, e, false, function() {
          e._reactRootContainer = null, e[un] = null;
        });
      }), true) : false;
    }, yt.unstable_batchedUpdates = Qs, yt.unstable_renderSubtreeIntoContainer = function(e, n, o, s) {
      if (!Go(o)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return Xo(e, n, o, false, s);
    }, yt.version = "18.3.1-next-f1338f8080-20240426", yt;
  }
  var td;
  function zg() {
    if (td) return lu.exports;
    td = 1;
    function t() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
    }
    return t(), lu.exports = Lg(), lu.exports;
  }
  var nd;
  function bg() {
    if (nd) return Zo;
    nd = 1;
    var t = zg();
    return Zo.createRoot = t.createRoot, Zo.hydrateRoot = t.hydrateRoot, Zo;
  }
  var Mg = bg();
  const Fg = al(Mg), jg = "modulepreload", Bg = function(t) {
    return "/offline-llm-knowledge-system/import/" + t;
  }, rd = {}, ap = function(r, i, l) {
    let u = Promise.resolve();
    if (i && i.length > 0) {
      let c = function(m) {
        return Promise.all(m.map((g) => Promise.resolve(g).then((y) => ({
          status: "fulfilled",
          value: y
        }), (y) => ({
          status: "rejected",
          reason: y
        }))));
      };
      document.getElementsByTagName("link");
      const f = document.querySelector("meta[property=csp-nonce]"), h = (f == null ? void 0 : f.nonce) || (f == null ? void 0 : f.getAttribute("nonce"));
      u = c(i.map((m) => {
        if (m = Bg(m), m in rd) return;
        rd[m] = true;
        const g = m.endsWith(".css"), y = g ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${m}"]${y}`)) return;
        const v = document.createElement("link");
        if (v.rel = g ? "stylesheet" : jg, g || (v.as = "script"), v.crossOrigin = "", v.href = m, h && v.setAttribute("nonce", h), document.head.appendChild(v), g) return new Promise((w, I) => {
          v.addEventListener("load", w), v.addEventListener("error", () => I(new Error(`Unable to preload CSS for ${m}`)));
        });
      }));
    }
    function a(c) {
      const f = new Event("vite:preloadError", {
        cancelable: true
      });
      if (f.payload = c, window.dispatchEvent(f), !f.defaultPrevented) throw c;
    }
    return u.then((c) => {
      for (const f of c || []) f.status === "rejected" && a(f.reason);
      return r().catch(a);
    });
  };
  var Nt = Uint8Array, Ar = Uint16Array, Ug = Int32Array, cp = new Nt([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    0,
    0,
    0
  ]), fp = new Nt([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    0,
    0
  ]), Vg = new Nt([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
  ]), dp = function(t, r) {
    for (var i = new Ar(31), l = 0; l < 31; ++l) i[l] = r += 1 << t[l - 1];
    for (var u = new Ug(i[30]), l = 1; l < 30; ++l) for (var a = i[l]; a < i[l + 1]; ++a) u[a] = a - i[l] << 5 | l;
    return {
      b: i,
      r: u
    };
  }, pp = dp(cp, 2), hp = pp.b, Hg = pp.r;
  hp[28] = 258, Hg[258] = 28;
  var Wg = dp(fp, 0), $g = Wg.b, _u = new Ar(32768);
  for (var je = 0; je < 32768; ++je) {
    var Fn = (je & 43690) >> 1 | (je & 21845) << 1;
    Fn = (Fn & 52428) >> 2 | (Fn & 13107) << 2, Fn = (Fn & 61680) >> 4 | (Fn & 3855) << 4, _u[je] = ((Fn & 65280) >> 8 | (Fn & 255) << 8) >> 1;
  }
  var Di = (function(t, r, i) {
    for (var l = t.length, u = 0, a = new Ar(r); u < l; ++u) t[u] && ++a[t[u] - 1];
    var c = new Ar(r);
    for (u = 1; u < r; ++u) c[u] = c[u - 1] + a[u - 1] << 1;
    var f;
    if (i) {
      f = new Ar(1 << r);
      var h = 15 - r;
      for (u = 0; u < l; ++u) if (t[u]) for (var m = u << 4 | t[u], g = r - t[u], y = c[t[u] - 1]++ << g, v = y | (1 << g) - 1; y <= v; ++y) f[_u[y] >> h] = m;
    } else for (f = new Ar(l), u = 0; u < l; ++u) t[u] && (f[u] = _u[c[t[u] - 1]++] >> 15 - t[u]);
    return f;
  }), bi = new Nt(288);
  for (var je = 0; je < 144; ++je) bi[je] = 8;
  for (var je = 144; je < 256; ++je) bi[je] = 9;
  for (var je = 256; je < 280; ++je) bi[je] = 7;
  for (var je = 280; je < 288; ++je) bi[je] = 8;
  var mp = new Nt(32);
  for (var je = 0; je < 32; ++je) mp[je] = 5;
  var qg = Di(bi, 9, 1), Yg = Di(mp, 5, 1), au = function(t) {
    for (var r = t[0], i = 1; i < t.length; ++i) t[i] > r && (r = t[i]);
    return r;
  }, Yt = function(t, r, i) {
    var l = r / 8 | 0;
    return (t[l] | t[l + 1] << 8) >> (r & 7) & i;
  }, cu = function(t, r) {
    var i = r / 8 | 0;
    return (t[i] | t[i + 1] << 8 | t[i + 2] << 16) >> (r & 7);
  }, Qg = function(t) {
    return (t + 7) / 8 | 0;
  }, Kg = function(t, r, i) {
    return (i == null || i > t.length) && (i = t.length), new Nt(t.subarray(r, i));
  }, Gg = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
  ], Qt = function(t, r, i) {
    var l = new Error(r || Gg[t]);
    if (l.code = t, Error.captureStackTrace && Error.captureStackTrace(l, Qt), !i) throw l;
    return l;
  }, Xg = function(t, r, i, l) {
    var u = t.length, a = 0;
    if (!u || r.f && !r.l) return i || new Nt(0);
    var c = !i, f = c || r.i != 2, h = r.i;
    c && (i = new Nt(u * 3));
    var m = function(Ot) {
      var Vn = i.length;
      if (Ot > Vn) {
        var ln = new Nt(Math.max(Vn * 2, Ot));
        ln.set(i), i = ln;
      }
    }, g = r.f || 0, y = r.p || 0, v = r.b || 0, w = r.l, I = r.d, D = r.m, N = r.n, T = u * 8;
    do {
      if (!w) {
        g = Yt(t, y, 1);
        var b = Yt(t, y + 1, 3);
        if (y += 3, b) if (b == 1) w = qg, I = Yg, D = 9, N = 5;
        else if (b == 2) {
          var R = Yt(t, y, 31) + 257, te = Yt(t, y + 10, 15) + 4, re = R + Yt(t, y + 5, 31) + 1;
          y += 14;
          for (var le = new Nt(re), he = new Nt(19), G = 0; G < te; ++G) he[Vg[G]] = Yt(t, y + G * 3, 7);
          y += te * 3;
          for (var B = au(he), ue = (1 << B) - 1, J = Di(he, B, 1), G = 0; G < re; ) {
            var V = J[Yt(t, y, ue)];
            y += V & 15;
            var L = V >> 4;
            if (L < 16) le[G++] = L;
            else {
              var Q = 0, ne = 0;
              for (L == 16 ? (ne = 3 + Yt(t, y, 3), y += 2, Q = le[G - 1]) : L == 17 ? (ne = 3 + Yt(t, y, 7), y += 3) : L == 18 && (ne = 11 + Yt(t, y, 127), y += 7); ne--; ) le[G++] = Q;
            }
          }
          var U = le.subarray(0, R), X = le.subarray(R);
          D = au(U), N = au(X), w = Di(U, D, 1), I = Di(X, N, 1);
        } else Qt(1);
        else {
          var L = Qg(y) + 4, $ = t[L - 4] | t[L - 3] << 8, ee = L + $;
          if (ee > u) {
            h && Qt(0);
            break;
          }
          f && m(v + $), i.set(t.subarray(L, ee), v), r.b = v += $, r.p = y = ee * 8, r.f = g;
          continue;
        }
        if (y > T) {
          h && Qt(0);
          break;
        }
      }
      f && m(v + 131072);
      for (var k = (1 << D) - 1, _ = (1 << N) - 1, M = y; ; M = y) {
        var Q = w[cu(t, y) & k], S = Q >> 4;
        if (y += Q & 15, y > T) {
          h && Qt(0);
          break;
        }
        if (Q || Qt(2), S < 256) i[v++] = S;
        else if (S == 256) {
          M = y, w = null;
          break;
        } else {
          var oe = S - 254;
          if (S > 264) {
            var G = S - 257, pe = cp[G];
            oe = Yt(t, y, (1 << pe) - 1) + hp[G], y += pe;
          }
          var de = I[cu(t, y) & _], Ce = de >> 4;
          de || Qt(3), y += de & 15;
          var X = $g[Ce];
          if (Ce > 3) {
            var pe = fp[Ce];
            X += cu(t, y) & (1 << pe) - 1, y += pe;
          }
          if (y > T) {
            h && Qt(0);
            break;
          }
          f && m(v + 131072);
          var ke = v + oe;
          if (v < X) {
            var Te = a - X, He = Math.min(X, ke);
            for (Te + v < 0 && Qt(3); v < He; ++v) i[v] = l[Te + v];
          }
          for (; v < ke; ++v) i[v] = i[v - X];
        }
      }
      r.l = w, r.p = M, r.b = v, r.f = g, w && (g = 1, r.m = D, r.d = I, r.n = N);
    } while (!g);
    return v != i.length && c ? Kg(i, 0, v) : i.subarray(0, v);
  }, Jg = new Nt(0), Zg = function(t) {
    (t[0] != 31 || t[1] != 139 || t[2] != 8) && Qt(6, "invalid gzip data");
    var r = t[3], i = 10;
    r & 4 && (i += (t[10] | t[11] << 8) + 2);
    for (var l = (r >> 3 & 1) + (r >> 4 & 1); l > 0; l -= !t[i++]) ;
    return i + (r & 2);
  }, ey = function(t) {
    var r = t.length;
    return (t[r - 4] | t[r - 3] << 8 | t[r - 2] << 16 | t[r - 1] << 24) >>> 0;
  };
  function ty(t, r) {
    var i = Zg(t);
    return i + 8 > t.length && Qt(6, "invalid gzip data"), Xg(t.subarray(i, -8), {
      i: 2
    }, new Nt(ey(t)), r);
  }
  var ny = typeof TextDecoder < "u" && new TextDecoder(), ry = 0;
  try {
    ny.decode(Jg, {
      stream: true
    }), ry = 1;
  } catch {
  }
  let gp;
  gp = {
    arabic: "ar",
    armenian: "am",
    bulgarian: "bg",
    czech: "cz",
    danish: "dk",
    dutch: "nl",
    english: "en",
    finnish: "fi",
    french: "fr",
    german: "de",
    greek: "gr",
    hungarian: "hu",
    indian: "in",
    indonesian: "id",
    irish: "ie",
    italian: "it",
    lithuanian: "lt",
    nepali: "np",
    norwegian: "no",
    portuguese: "pt",
    romanian: "ro",
    russian: "ru",
    serbian: "rs",
    slovenian: "ru",
    spanish: "es",
    swedish: "se",
    tamil: "ta",
    turkish: "tr",
    ukrainian: "uk",
    sanskrit: "sk"
  };
  lk = {
    dutch: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
    english: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
    french: /[^a-z0-9äâàéèëêïîöôùüûœç-]+/gim,
    italian: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
    norwegian: /[^a-z0-9_æøåÆØÅäÄöÖüÜ]+/gim,
    portuguese: /[^a-z0-9à-úÀ-Ú]/gim,
    russian: /[^a-z0-9а-яА-ЯёЁ]+/gim,
    spanish: /[^a-z0-9A-Zá-úÁ-ÚñÑüÜ]+/gim,
    swedish: /[^a-z0-9_åÅäÄöÖüÜ-]+/gim,
    german: /[^a-z0-9A-ZäöüÄÖÜß]+/gim,
    finnish: /[^a-z0-9äöÄÖ]+/gim,
    danish: /[^a-z0-9æøåÆØÅ]+/gim,
    hungarian: /[^a-z0-9áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+/gim,
    romanian: /[^a-z0-9ăâîșțĂÂÎȘȚ]+/gim,
    serbian: /[^a-z0-9čćžšđČĆŽŠĐ]+/gim,
    turkish: /[^a-z0-9çÇğĞıİöÖşŞüÜ]+/gim,
    lithuanian: /[^a-z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ]+/gim,
    arabic: /[^a-z0-9أ-ي]+/gim,
    nepali: /[^a-z0-9अ-ह]+/gim,
    irish: /[^a-z0-9áéíóúÁÉÍÓÚ]+/gim,
    indian: /[^a-z0-9अ-ह]+/gim,
    armenian: /[^a-z0-9ա-ֆ]+/gim,
    greek: /[^a-z0-9α-ωά-ώ]+/gim,
    indonesian: /[^a-z0-9]+/gim,
    ukrainian: /[^a-z0-9а-яА-ЯіїєІЇЄ]+/gim,
    slovenian: /[^a-z0-9čžšČŽŠ]+/gim,
    bulgarian: /[^a-z0-9а-яА-Я]+/gim,
    tamil: /[^a-z0-9அ-ஹ]+/gim,
    sanskrit: /[^a-z0-9A-Zāīūṛḷṃṁḥśṣṭḍṇṅñḻḹṝ]+/gim,
    czech: /[^A-Z0-9a-zěščřžýáíéúůóťďĚŠČŘŽÝÁÍÉÓÚŮŤĎ-]+/gim
  };
  yp = Object.keys(gp);
  sk = function(t) {
    return t !== void 0 && yp.includes(t) ? gp[t] : void 0;
  };
  const iy = Date.now().toString().slice(5);
  let oy = 0;
  const id = 1024, od = BigInt(1e3), ld = BigInt(1e6), sd = BigInt(1e9), fu = 65535;
  ly = function(t, r) {
    if (r.length < fu) Array.prototype.push.apply(t, r);
    else {
      const i = r.length;
      for (let l = 0; l < i; l += fu) Array.prototype.push.apply(t, r.slice(l, l + fu));
    }
  };
  function sy(t, ...r) {
    return t.replace(/%(?:(?<position>\d+)\$)?(?<width>-?\d*\.?\d*)(?<type>[dfs])/g, function(...i) {
      const l = i[i.length - 1], { width: u, type: a, position: c } = l, f = c ? r[Number.parseInt(c) - 1] : r.shift(), h = u === "" ? 0 : Number.parseInt(u);
      switch (a) {
        case "d":
          return f.toString().padStart(h, "0");
        case "f": {
          let m = f;
          const [g, y] = u.split(".").map((v) => Number.parseFloat(v));
          return typeof y == "number" && y >= 0 && (m = m.toFixed(y)), typeof g == "number" && g >= 0 ? m.toString().padStart(h, "0") : m.toString();
        }
        case "s":
          return h < 0 ? f.toString().padEnd(-h, " ") : f.toString().padStart(h, " ");
        default:
          return f;
      }
    });
  }
  uk = function(t, r = 2) {
    if (t === 0) return "0 Bytes";
    const i = r < 0 ? 0 : r, l = [
      "Bytes",
      "KB",
      "MB",
      "GB",
      "TB",
      "PB",
      "EB",
      "ZB",
      "YB"
    ], u = Math.floor(Math.log(t) / Math.log(id));
    return `${parseFloat((t / Math.pow(id, u)).toFixed(i))} ${l[u]}`;
  };
  function uy() {
    return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
  }
  function ay() {
    return typeof process < "u" && process.release && process.release.name === "node";
  }
  function ud() {
    return BigInt(Math.floor(performance.now() * 1e6));
  }
  Uu = function(t) {
    return typeof t == "number" && (t = BigInt(t)), t < od ? `${t}ns` : t < ld ? `${t / od}\u03BCs` : t < sd ? `${t / ld}ms` : `${t / sd}s`;
  };
  br = function() {
    var _a;
    return uy() ? ud() : ay() || typeof process < "u" && typeof ((_a = process == null ? void 0 : process.hrtime) == null ? void 0 : _a.bigint) == "function" ? process.hrtime.bigint() : typeof performance < "u" ? ud() : BigInt(0);
  };
  cy = function() {
    return `${iy}-${oy++}`;
  };
  function du(t, r) {
    return Object.hasOwn === void 0 ? Object.prototype.hasOwnProperty.call(t, r) ? t[r] : void 0 : Object.hasOwn(t, r) ? t[r] : void 0;
  }
  function vp(t, r) {
    return r[1] === t[1] ? t[0] - r[0] : r[1] - t[1];
  }
  function fy(t) {
    if (t.length === 0) return [];
    if (t.length === 1) return t[0];
    for (let i = 1; i < t.length; i++) if (t[i].length < t[0].length) {
      const l = t[0];
      t[0] = t[i], t[i] = l;
    }
    const r = /* @__PURE__ */ new Map();
    for (const i of t[0]) r.set(i, 1);
    for (let i = 1; i < t.length; i++) {
      let l = 0;
      for (const u of t[i]) {
        const a = r.get(u);
        a === i && (r.set(u, a + 1), l++);
      }
      if (l === 0) return [];
    }
    return t[0].filter((i) => {
      const l = r.get(i);
      return l !== void 0 && r.set(i, 0), l === t.length;
    });
  }
  dy = function(t, r) {
    const i = {}, l = r.length;
    for (let u = 0; u < l; u++) {
      const a = r[u], c = a.split(".");
      let f = t;
      const h = c.length;
      for (let m = 0; m < h; m++) if (f = f[c[m]], typeof f == "object") {
        if (f !== null && "lat" in f && "lon" in f && typeof f.lat == "number" && typeof f.lon == "number") {
          f = i[a] = f;
          break;
        } else if (!Array.isArray(f) && f !== null && m === h - 1) {
          f = void 0;
          break;
        }
      } else if ((f === null || typeof f != "object") && m < h - 1) {
        f = void 0;
        break;
      }
      typeof f < "u" && (i[a] = f);
    }
    return i;
  };
  function Vu(t, r) {
    return dy(t, [
      r
    ])[r];
  }
  const py = {
    cm: 0.01,
    m: 1,
    km: 1e3,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.344
  };
  wp = function(t, r) {
    const i = py[r];
    if (i === void 0) throw new Error(be("INVALID_DISTANCE_SUFFIX", t).message);
    return t * i;
  };
  function xp(t, r) {
    t.hits = t.hits.map((i) => ({
      ...i,
      document: {
        ...i.document,
        ...r.reduce((l, u) => {
          const a = u.split("."), c = a.pop();
          let f = l;
          for (const h of a) f[h] = f[h] ?? {}, f = f[h];
          return f[c] = null, l;
        }, i.document)
      }
    }));
  }
  Ye = function(t) {
    var _a;
    return Array.isArray(t) ? t.some((r) => Ye(r)) : ((_a = t == null ? void 0 : t.constructor) == null ? void 0 : _a.name) === "AsyncFunction";
  };
  const ad = "intersection" in /* @__PURE__ */ new Set();
  cd = function(...t) {
    if (t.length === 0) return /* @__PURE__ */ new Set();
    if (t.length === 1) return t[0];
    if (t.length === 2) {
      const l = t[0], u = t[1];
      if (ad) return l.intersection(u);
      const a = /* @__PURE__ */ new Set(), c = l.size < u.size ? l : u, f = c === l ? u : l;
      for (const h of c) f.has(h) && a.add(h);
      return a;
    }
    const r = {
      index: 0,
      size: t[0].size
    };
    for (let l = 1; l < t.length; l++) t[l].size < r.size && (r.index = l, r.size = t[l].size);
    if (ad) {
      let l = t[r.index];
      for (let u = 0; u < t.length; u++) u !== r.index && (l = l.intersection(t[u]));
      return l;
    }
    const i = t[r.index];
    for (let l = 0; l < t.length; l++) {
      if (l === r.index) continue;
      const u = t[l];
      for (const a of i) u.has(a) || i.delete(a);
    }
    return i;
  };
  const hy = "union" in /* @__PURE__ */ new Set();
  el = function(t, r) {
    return hy ? t ? t.union(r) : r : t ? /* @__PURE__ */ new Set([
      ...t,
      ...r
    ]) : new Set(r);
  };
  my = function(t, r) {
    const i = /* @__PURE__ */ new Set();
    for (const l of t) r.has(l) || i.add(l);
    return i;
  };
  function kp(t) {
    if (typeof SharedArrayBuffer < "u" && typeof Atomics < "u") {
      const r = new Int32Array(new SharedArrayBuffer(4));
      if ((t > 0 && t < 1 / 0) === false) throw typeof t != "number" && typeof t != "bigint" ? TypeError("sleep: ms must be a number") : RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
      Atomics.wait(r, 0, 0, Number(t));
    } else if ((t > 0 && t < 1 / 0) === false) throw typeof t != "number" && typeof t != "bigint" ? TypeError("sleep: ms must be a number") : RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
  }
  const gy = yp.join(`
 - `), yy = {
    NO_LANGUAGE_WITH_CUSTOM_TOKENIZER: "Do not pass the language option to create when using a custom tokenizer.",
    LANGUAGE_NOT_SUPPORTED: `Language "%s" is not supported.
Supported languages are:
 - ${gy}`,
    INVALID_STEMMER_FUNCTION_TYPE: "config.stemmer property must be a function.",
    MISSING_STEMMER: 'As of version 1.0.0 @orama/orama does not ship non English stemmers by default. To solve this, please explicitly import and specify the "%s" stemmer from the package @orama/stemmers. See https://docs.orama.com/docs/orama-js/text-analysis/stemming for more information.',
    CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY: "Custom stop words array must only contain strings.",
    UNSUPPORTED_COMPONENT: 'Unsupported component "%s".',
    COMPONENT_MUST_BE_FUNCTION: 'The component "%s" must be a function.',
    COMPONENT_MUST_BE_FUNCTION_OR_ARRAY_FUNCTIONS: 'The component "%s" must be a function or an array of functions.',
    INVALID_SCHEMA_TYPE: 'Unsupported schema type "%s" at "%s". Expected "string", "boolean" or "number" or array of them.',
    DOCUMENT_ID_MUST_BE_STRING: 'Document id must be of type "string". Got "%s" instead.',
    DOCUMENT_ALREADY_EXISTS: 'A document with id "%s" already exists.',
    DOCUMENT_DOES_NOT_EXIST: 'A document with id "%s" does not exists.',
    MISSING_DOCUMENT_PROPERTY: 'Missing searchable property "%s".',
    INVALID_DOCUMENT_PROPERTY: 'Invalid document property "%s": expected "%s", got "%s"',
    UNKNOWN_INDEX: 'Invalid property name "%s". Expected a wildcard string ("*") or array containing one of the following properties: %s',
    INVALID_BOOST_VALUE: "Boost value must be a number greater than, or less than 0.",
    INVALID_FILTER_OPERATION: "You can only use one operation per filter, you requested %d.",
    SCHEMA_VALIDATION_FAILURE: 'Cannot insert document due schema validation failure on "%s" property.',
    INVALID_SORT_SCHEMA_TYPE: 'Unsupported sort schema type "%s" at "%s". Expected "string" or "number".',
    CANNOT_SORT_BY_ARRAY: 'Cannot configure sort for "%s" because it is an array (%s).',
    UNABLE_TO_SORT_ON_UNKNOWN_FIELD: 'Unable to sort on unknown field "%s". Allowed fields: %s',
    SORT_DISABLED: "Sort is disabled. Please read the documentation at https://docs.orama.com/docs/orama-js for more information.",
    UNKNOWN_GROUP_BY_PROPERTY: 'Unknown groupBy property "%s".',
    INVALID_GROUP_BY_PROPERTY: 'Invalid groupBy property "%s". Allowed types: "%s", but given "%s".',
    UNKNOWN_FILTER_PROPERTY: 'Unknown filter property "%s".',
    UNKNOWN_VECTOR_PROPERTY: 'Unknown vector property "%s". Make sure the property exists in the schema and is configured as a vector.',
    INVALID_VECTOR_SIZE: 'Vector size must be a number greater than 0. Got "%s" instead.',
    INVALID_VECTOR_VALUE: 'Vector value must be a number greater than 0. Got "%s" instead.',
    INVALID_INPUT_VECTOR: `Property "%s" was declared as a %s-dimensional vector, but got a %s-dimensional vector instead.
Input vectors must be of the size declared in the schema, as calculating similarity between vectors of different sizes can lead to unexpected results.`,
    WRONG_SEARCH_PROPERTY_TYPE: 'Property "%s" is not searchable. Only "string" properties are searchable.',
    FACET_NOT_SUPPORTED: `Facet doens't support the type "%s".`,
    INVALID_DISTANCE_SUFFIX: 'Invalid distance suffix "%s". Valid suffixes are: cm, m, km, mi, yd, ft.',
    INVALID_SEARCH_MODE: 'Invalid search mode "%s". Valid modes are: "fulltext", "vector", "hybrid".',
    MISSING_VECTOR_AND_SECURE_PROXY: "No vector was provided and no secure proxy was configured. Please provide a vector or configure an Orama Secure Proxy to perform hybrid search.",
    MISSING_TERM: '"term" is a required parameter when performing hybrid search. Please provide a search term.',
    INVALID_VECTOR_INPUT: 'Invalid "vector" property. Expected an object with "value" and "property" properties, but got "%s" instead.',
    PLUGIN_CRASHED: "A plugin crashed during initialization. Please check the error message for more information:",
    PLUGIN_SECURE_PROXY_NOT_FOUND: `Could not find '@orama/secure-proxy-plugin' installed in your Orama instance.
Please install it before proceeding with creating an answer session.
Read more at https://docs.orama.com/docs/orama-js/plugins/plugin-secure-proxy#plugin-secure-proxy
`,
    PLUGIN_SECURE_PROXY_MISSING_CHAT_MODEL: `Could not find a chat model defined in the secure proxy plugin configuration.
Please provide a chat model before proceeding with creating an answer session.
Read more at https://docs.orama.com/docs/orama-js/plugins/plugin-secure-proxy#plugin-secure-proxy
`,
    ANSWER_SESSION_LAST_MESSAGE_IS_NOT_ASSISTANT: "The last message in the session is not an assistant message. Cannot regenerate non-assistant messages.",
    PLUGIN_COMPONENT_CONFLICT: 'The component "%s" is already defined. The plugin "%s" is trying to redefine it.'
  };
  be = function(t, ...r) {
    const i = new Error(sy(yy[t] ?? `Unsupported Orama Error code: ${t}`, ...r));
    return i.code = t, "captureStackTrace" in Error.prototype && Error.captureStackTrace(i), i;
  };
  ak = function(t) {
    return {
      raw: Number(t),
      formatted: Uu(t)
    };
  };
  ck = function(t) {
    if (t.id) {
      if (typeof t.id != "string") throw be("DOCUMENT_ID_MUST_BE_STRING", typeof t.id);
      return t.id;
    }
    return cy();
  };
  vy = function(t, r) {
    for (const [i, l] of Object.entries(r)) {
      const u = t[i];
      if (!(typeof u > "u") && !(l === "geopoint" && typeof u == "object" && typeof u.lon == "number" && typeof u.lat == "number") && !(l === "enum" && (typeof u == "string" || typeof u == "number"))) {
        if (l === "enum[]" && Array.isArray(u)) {
          const a = u.length;
          for (let c = 0; c < a; c++) if (typeof u[c] != "string" && typeof u[c] != "number") return i + "." + c;
          continue;
        }
        if (Mi(l)) {
          const a = Ep(l);
          if (!Array.isArray(u) || u.length !== a) throw be("INVALID_INPUT_VECTOR", i, a, u.length);
          continue;
        }
        if (cl(l)) {
          if (!Array.isArray(u)) return i;
          const a = Sp(l), c = u.length;
          for (let f = 0; f < c; f++) if (typeof u[f] !== a) return i + "." + f;
          continue;
        }
        if (typeof l == "object") {
          if (!u || typeof u != "object") return i;
          const a = vy(u, l);
          if (a) return i + "." + a;
          continue;
        }
        if (typeof u !== l) return i;
      }
    }
  };
  const wy = {
    string: false,
    number: false,
    boolean: false,
    enum: false,
    geopoint: false,
    "string[]": true,
    "number[]": true,
    "boolean[]": true,
    "enum[]": true
  }, xy = {
    "string[]": "string",
    "number[]": "number",
    "boolean[]": "boolean",
    "enum[]": "enum"
  };
  ky = function(t) {
    return t === "geopoint";
  };
  Mi = function(t) {
    return typeof t == "string" && /^vector\[\d+\]$/.test(t);
  };
  cl = function(t) {
    return typeof t == "string" && wy[t];
  };
  Sp = function(t) {
    return xy[t];
  };
  Ep = function(t) {
    const r = Number(t.slice(7, -1));
    switch (true) {
      case isNaN(r):
        throw be("INVALID_VECTOR_VALUE", t);
      case r <= 0:
        throw be("INVALID_VECTOR_SIZE", t);
      default:
        return r;
    }
  };
  Sy = function() {
    return {
      idToInternalId: /* @__PURE__ */ new Map(),
      internalIdToId: [],
      save: Ip,
      load: Cp
    };
  };
  function Ip(t) {
    return {
      internalIdToId: t.internalIdToId
    };
  }
  function Cp(t, r) {
    const { internalIdToId: i } = r;
    t.internalDocumentIDStore.idToInternalId.clear(), t.internalDocumentIDStore.internalIdToId = [];
    const l = i.length;
    for (let u = 0; u < l; u++) {
      const a = i[u];
      t.internalDocumentIDStore.idToInternalId.set(a, u + 1), t.internalDocumentIDStore.internalIdToId.push(a);
    }
  }
  on = function(t, r) {
    if (typeof r == "string") {
      const i = t.idToInternalId.get(r);
      if (i) return i;
      const l = t.idToInternalId.size + 1;
      return t.idToInternalId.set(r, l), t.internalIdToId.push(r), l;
    }
    return r > t.internalIdToId.length ? on(t, r.toString()) : r;
  };
  Fi = function(t, r) {
    if (t.internalIdToId.length < r) throw new Error(`Invalid internalId ${r}`);
    return t.internalIdToId[r - 1];
  };
  fk = Object.freeze(Object.defineProperty({
    __proto__: null,
    createInternalDocumentIDStore: Sy,
    getDocumentIdFromInternalId: Fi,
    getInternalDocumentId: on,
    load: Cp,
    save: Ip
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  dk = [
    "tokenizer",
    "index",
    "documentsStore",
    "sorter",
    "pinning"
  ];
  pk = [
    "validateSchema",
    "getDocumentIndexId",
    "getDocumentProperties",
    "formatElapsedTime"
  ];
  ll = function(t, r, i, l) {
    if (t.some(Ye)) return (async () => {
      for (const a of t) await a(r, i, l);
    })();
    for (const a of t) a(r, i, l);
  };
  Tp = function(t, r, i) {
    if (t.some(Ye)) return (async () => {
      for (const u of t) await u(r, i);
    })();
    for (const u of t) u(r, i);
  };
  function Hu(t, r, i, l, u) {
    if (t.some(Ye)) return (async () => {
      for (const c of t) await c(r, i, l, u);
    })();
    for (const c of t) c(r, i, l, u);
  }
  function Wu(t, r, i, l) {
    if (t.some(Ye)) return (async () => {
      for (const a of t) await a(r, i, l);
    })();
    for (const a of t) a(r, i, l);
  }
  hk = function(t, r) {
    if (t.some(Ye)) return (async () => {
      for (const l of t) await l(r);
    })();
    for (const l of t) l(r);
  };
  class Pt {
    constructor(r, i) {
      __publicField(this, "k");
      __publicField(this, "v");
      __publicField(this, "l", null);
      __publicField(this, "r", null);
      __publicField(this, "h", 1);
      this.k = r, this.v = new Set(i);
    }
    updateHeight() {
      this.h = Math.max(Pt.getHeight(this.l), Pt.getHeight(this.r)) + 1;
    }
    static getHeight(r) {
      return r ? r.h : 0;
    }
    getBalanceFactor() {
      return Pt.getHeight(this.l) - Pt.getHeight(this.r);
    }
    rotateLeft() {
      const r = this.r;
      return this.r = r.l, r.l = this, this.updateHeight(), r.updateHeight(), r;
    }
    rotateRight() {
      const r = this.l;
      return this.l = r.r, r.r = this, this.updateHeight(), r.updateHeight(), r;
    }
    toJSON() {
      return {
        k: this.k,
        v: Array.from(this.v),
        l: this.l ? this.l.toJSON() : null,
        r: this.r ? this.r.toJSON() : null,
        h: this.h
      };
    }
    static fromJSON(r) {
      const i = new Pt(r.k, r.v);
      return i.l = r.l ? Pt.fromJSON(r.l) : null, i.r = r.r ? Pt.fromJSON(r.r) : null, i.h = r.h, i;
    }
  }
  class fl {
    constructor(r, i) {
      __publicField(this, "root", null);
      __publicField(this, "insertCount", 0);
      r !== void 0 && i !== void 0 && (this.root = new Pt(r, i));
    }
    insert(r, i, l = 1e3) {
      this.root = this.insertNode(this.root, r, i, l);
    }
    insertMultiple(r, i, l = 1e3) {
      for (const u of i) this.insert(r, u, l);
    }
    rebalance() {
      this.root && (this.root = this.rebalanceNode(this.root));
    }
    toJSON() {
      return {
        root: this.root ? this.root.toJSON() : null,
        insertCount: this.insertCount
      };
    }
    static fromJSON(r) {
      const i = new fl();
      return i.root = r.root ? Pt.fromJSON(r.root) : null, i.insertCount = r.insertCount || 0, i;
    }
    insertNode(r, i, l, u) {
      if (r === null) return new Pt(i, [
        l
      ]);
      const a = [];
      let c = r, f = null;
      for (; c !== null; ) if (a.push({
        parent: f,
        node: c
      }), i < c.k) if (c.l === null) {
        c.l = new Pt(i, [
          l
        ]), a.push({
          parent: c,
          node: c.l
        });
        break;
      } else f = c, c = c.l;
      else if (i > c.k) if (c.r === null) {
        c.r = new Pt(i, [
          l
        ]), a.push({
          parent: c,
          node: c.r
        });
        break;
      } else f = c, c = c.r;
      else return c.v.add(l), r;
      let h = false;
      this.insertCount++ % u === 0 && (h = true);
      for (let m = a.length - 1; m >= 0; m--) {
        const { parent: g, node: y } = a[m];
        if (y.updateHeight(), h) {
          const v = this.rebalanceNode(y);
          g ? g.l === y ? g.l = v : g.r === y && (g.r = v) : r = v;
        }
      }
      return r;
    }
    rebalanceNode(r) {
      const i = r.getBalanceFactor();
      if (i > 1) {
        if (r.l && r.l.getBalanceFactor() >= 0) return r.rotateRight();
        if (r.l) return r.l = r.l.rotateLeft(), r.rotateRight();
      }
      if (i < -1) {
        if (r.r && r.r.getBalanceFactor() <= 0) return r.rotateLeft();
        if (r.r) return r.r = r.r.rotateRight(), r.rotateLeft();
      }
      return r;
    }
    find(r) {
      const i = this.findNodeByKey(r);
      return i ? i.v : null;
    }
    contains(r) {
      return this.find(r) !== null;
    }
    getSize() {
      let r = 0;
      const i = [];
      let l = this.root;
      for (; l || i.length > 0; ) {
        for (; l; ) i.push(l), l = l.l;
        l = i.pop(), r++, l = l.r;
      }
      return r;
    }
    isBalanced() {
      if (!this.root) return true;
      const r = [
        this.root
      ];
      for (; r.length > 0; ) {
        const i = r.pop(), l = i.getBalanceFactor();
        if (Math.abs(l) > 1) return false;
        i.l && r.push(i.l), i.r && r.push(i.r);
      }
      return true;
    }
    remove(r) {
      this.root = this.removeNode(this.root, r);
    }
    removeDocument(r, i) {
      const l = this.findNodeByKey(r);
      l && (l.v.size === 1 ? this.root = this.removeNode(this.root, r) : l.v = new Set([
        ...l.v.values()
      ].filter((u) => u !== i)));
    }
    findNodeByKey(r) {
      let i = this.root;
      for (; i; ) if (r < i.k) i = i.l;
      else if (r > i.k) i = i.r;
      else return i;
      return null;
    }
    removeNode(r, i) {
      if (r === null) return null;
      const l = [];
      let u = r;
      for (; u !== null && u.k !== i; ) l.push(u), i < u.k ? u = u.l : u = u.r;
      if (u === null) return r;
      if (u.l === null || u.r === null) {
        const a = u.l ? u.l : u.r;
        if (l.length === 0) r = a;
        else {
          const c = l[l.length - 1];
          c.l === u ? c.l = a : c.r = a;
        }
      } else {
        let a = u, c = u.r;
        for (; c.l !== null; ) a = c, c = c.l;
        u.k = c.k, u.v = c.v, a.l === c ? a.l = c.r : a.r = c.r, u = a;
      }
      l.push(u);
      for (let a = l.length - 1; a >= 0; a--) {
        const c = l[a];
        c.updateHeight();
        const f = this.rebalanceNode(c);
        if (a > 0) {
          const h = l[a - 1];
          h.l === c ? h.l = f : h.r === c && (h.r = f);
        } else r = f;
      }
      return r;
    }
    rangeSearch(r, i) {
      const l = /* @__PURE__ */ new Set(), u = [];
      let a = this.root;
      for (; a || u.length > 0; ) {
        for (; a; ) u.push(a), a = a.l;
        if (a = u.pop(), a.k >= r && a.k <= i) for (const c of a.v) l.add(c);
        if (a.k > i) break;
        a = a.r;
      }
      return l;
    }
    greaterThan(r, i = false) {
      const l = /* @__PURE__ */ new Set(), u = [];
      let a = this.root;
      for (; a || u.length > 0; ) {
        for (; a; ) u.push(a), a = a.r;
        if (a = u.pop(), i && a.k >= r || !i && a.k > r) for (const c of a.v) l.add(c);
        else if (a.k <= r) break;
        a = a.l;
      }
      return l;
    }
    lessThan(r, i = false) {
      const l = /* @__PURE__ */ new Set(), u = [];
      let a = this.root;
      for (; a || u.length > 0; ) {
        for (; a; ) u.push(a), a = a.l;
        if (a = u.pop(), i && a.k <= r || !i && a.k < r) for (const c of a.v) l.add(c);
        else if (a.k > r) break;
        a = a.r;
      }
      return l;
    }
  }
  class dl {
    constructor() {
      __publicField(this, "numberToDocumentId");
      this.numberToDocumentId = /* @__PURE__ */ new Map();
    }
    insert(r, i) {
      this.numberToDocumentId.has(r) ? this.numberToDocumentId.get(r).add(i) : this.numberToDocumentId.set(r, /* @__PURE__ */ new Set([
        i
      ]));
    }
    find(r) {
      const i = this.numberToDocumentId.get(r);
      return i ? Array.from(i) : null;
    }
    remove(r) {
      this.numberToDocumentId.delete(r);
    }
    removeDocument(r, i) {
      const l = this.numberToDocumentId.get(i);
      l && (l.delete(r), l.size === 0 && this.numberToDocumentId.delete(i));
    }
    contains(r) {
      return this.numberToDocumentId.has(r);
    }
    getSize() {
      let r = 0;
      for (const i of this.numberToDocumentId.values()) r += i.size;
      return r;
    }
    filter(r) {
      const i = Object.keys(r);
      if (i.length !== 1) throw new Error("Invalid operation");
      const l = i[0];
      switch (l) {
        case "eq": {
          const u = r[l], a = this.numberToDocumentId.get(u);
          return a ? Array.from(a) : [];
        }
        case "in": {
          const u = r[l], a = /* @__PURE__ */ new Set();
          for (const c of u) {
            const f = this.numberToDocumentId.get(c);
            if (f) for (const h of f) a.add(h);
          }
          return Array.from(a);
        }
        case "nin": {
          const u = new Set(r[l]), a = /* @__PURE__ */ new Set();
          for (const [c, f] of this.numberToDocumentId.entries()) if (!u.has(c)) for (const h of f) a.add(h);
          return Array.from(a);
        }
        default:
          throw new Error("Invalid operation");
      }
    }
    filterArr(r) {
      const i = Object.keys(r);
      if (i.length !== 1) throw new Error("Invalid operation");
      const l = i[0];
      switch (l) {
        case "containsAll": {
          const a = r[l].map((f) => this.numberToDocumentId.get(f) ?? /* @__PURE__ */ new Set());
          if (a.length === 0) return [];
          const c = a.reduce((f, h) => new Set([
            ...f
          ].filter((m) => h.has(m))));
          return Array.from(c);
        }
        case "containsAny": {
          const a = r[l].map((f) => this.numberToDocumentId.get(f) ?? /* @__PURE__ */ new Set());
          if (a.length === 0) return [];
          const c = a.reduce((f, h) => /* @__PURE__ */ new Set([
            ...f,
            ...h
          ]));
          return Array.from(c);
        }
        default:
          throw new Error("Invalid operation");
      }
    }
    static fromJSON(r) {
      if (!r.numberToDocumentId) throw new Error("Invalid Flat Tree JSON");
      const i = new dl();
      for (const [l, u] of r.numberToDocumentId) i.numberToDocumentId.set(l, new Set(u));
      return i;
    }
    toJSON() {
      return {
        numberToDocumentId: Array.from(this.numberToDocumentId.entries()).map(([r, i]) => [
          r,
          Array.from(i)
        ])
      };
    }
  }
  function Pp(t, r, i) {
    if (i < 0) return -1;
    if (t === r) return 0;
    const l = t.length, u = r.length;
    if (l === 0) return u <= i ? u : -1;
    if (u === 0) return l <= i ? l : -1;
    const a = Math.abs(l - u);
    if (t.startsWith(r)) return a <= i ? a : -1;
    if (r.startsWith(t)) return 0;
    if (a > i) return -1;
    const c = [];
    for (let f = 0; f <= l; f++) {
      c[f] = [
        f
      ];
      for (let h = 1; h <= u; h++) c[f][h] = f === 0 ? h : 0;
    }
    for (let f = 1; f <= l; f++) {
      let h = 1 / 0;
      for (let m = 1; m <= u; m++) t[f - 1] === r[m - 1] ? c[f][m] = c[f - 1][m - 1] : c[f][m] = Math.min(c[f - 1][m] + 1, c[f][m - 1] + 1, c[f - 1][m - 1] + 1), h = Math.min(h, c[f][m]);
      if (h > i) return -1;
    }
    return c[l][u] <= i ? c[l][u] : -1;
  }
  mk = function(t, r, i) {
    const l = Pp(t, r, i);
    return {
      distance: l,
      isBounded: l >= 0
    };
  };
  function fd(t, r, i) {
    const l = Pp(t, r, i);
    return {
      distance: l,
      isBounded: l >= 0
    };
  }
  class Bn {
    constructor(r, i, l) {
      __publicField(this, "k");
      __publicField(this, "s");
      __publicField(this, "c", /* @__PURE__ */ new Map());
      __publicField(this, "d", /* @__PURE__ */ new Set());
      __publicField(this, "e");
      __publicField(this, "w", "");
      this.k = r, this.s = i, this.e = l;
    }
    updateParent(r) {
      this.w = r.w + this.s;
    }
    addDocument(r) {
      this.d.add(r);
    }
    removeDocument(r) {
      return this.d.delete(r);
    }
    findAllWords(r, i, l, u) {
      const a = [
        this
      ];
      for (; a.length > 0; ) {
        const c = a.pop();
        if (c.e) {
          const { w: f, d: h } = c;
          if (l && f !== i) continue;
          if (du(r, f) !== null) if (u) if (Math.abs(i.length - f.length) <= u && fd(i, f, u).isBounded) r[f] = [];
          else continue;
          else r[f] = [];
          if (du(r, f) != null && h.size > 0) {
            const m = r[f];
            for (const g of h) m.includes(g) || m.push(g);
          }
        }
        c.c.size > 0 && a.push(...c.c.values());
      }
      return r;
    }
    insert(r, i) {
      let l = this, u = 0;
      const a = r.length;
      for (; u < a; ) {
        const c = r[u], f = l.c.get(c);
        if (f) {
          const h = f.s, m = h.length;
          let g = 0;
          for (; g < m && u + g < a && h[g] === r[u + g]; ) g++;
          if (g === m) {
            if (l = f, u += g, u === a) {
              f.e || (f.e = true), f.addDocument(i);
              return;
            }
            continue;
          }
          const y = h.slice(0, g), v = h.slice(g), w = r.slice(u + g), I = new Bn(y[0], y, false);
          if (l.c.set(y[0], I), I.updateParent(l), f.s = v, f.k = v[0], I.c.set(v[0], f), f.updateParent(I), w) {
            const D = new Bn(w[0], w, true);
            D.addDocument(i), I.c.set(w[0], D), D.updateParent(I);
          } else I.e = true, I.addDocument(i);
          return;
        } else {
          const h = new Bn(c, r.slice(u), true);
          h.addDocument(i), l.c.set(c, h), h.updateParent(l);
          return;
        }
      }
      l.e || (l.e = true), l.addDocument(i);
    }
    _findLevenshtein(r, i, l, u, a) {
      const c = [
        {
          node: this,
          index: i,
          tolerance: l
        }
      ];
      for (; c.length > 0; ) {
        const { node: f, index: h, tolerance: m } = c.pop();
        if (f.w.startsWith(r)) {
          f.findAllWords(a, r, false, 0);
          continue;
        }
        if (m < 0) continue;
        if (f.e) {
          const { w: y, d: v } = f;
          if (y && (fd(r, y, u).isBounded && (a[y] = []), du(a, y) !== void 0 && v.size > 0)) {
            const w = new Set(a[y]);
            for (const I of v) w.add(I);
            a[y] = Array.from(w);
          }
        }
        if (h >= r.length) continue;
        const g = r[h];
        if (f.c.has(g)) {
          const y = f.c.get(g);
          c.push({
            node: y,
            index: h + 1,
            tolerance: m
          });
        }
        c.push({
          node: f,
          index: h + 1,
          tolerance: m - 1
        });
        for (const [y, v] of f.c) c.push({
          node: v,
          index: h,
          tolerance: m - 1
        }), y !== g && c.push({
          node: v,
          index: h + 1,
          tolerance: m - 1
        });
      }
    }
    find(r) {
      const { term: i, exact: l, tolerance: u } = r;
      if (u && !l) {
        const a = {};
        return this._findLevenshtein(i, 0, u, u, a), a;
      } else {
        let a = this, c = 0;
        const f = i.length;
        for (; c < f; ) {
          const m = i[c], g = a.c.get(m);
          if (g) {
            const y = g.s, v = y.length;
            let w = 0;
            for (; w < v && c + w < f && y[w] === i[c + w]; ) w++;
            if (w === v) a = g, c += w;
            else if (c + w === f) if (w === f - c) {
              if (l) return {};
              {
                const I = {};
                return g.findAllWords(I, i, l, u), I;
              }
            } else return {};
            else return {};
          } else return {};
        }
        const h = {};
        return a.findAllWords(h, i, l, u), h;
      }
    }
    contains(r) {
      let i = this, l = 0;
      const u = r.length;
      for (; l < u; ) {
        const a = r[l], c = i.c.get(a);
        if (c) {
          const f = c.s, h = f.length;
          let m = 0;
          for (; m < h && l + m < u && f[m] === r[l + m]; ) m++;
          if (m < h) return false;
          l += h, i = c;
        } else return false;
      }
      return true;
    }
    removeWord(r) {
      if (!r) return false;
      let i = this;
      const l = r.length, u = [];
      for (let a = 0; a < l; a++) {
        const c = r[a];
        if (i.c.has(c)) {
          const f = i.c.get(c);
          u.push({
            parent: i,
            character: c
          }), a += f.s.length - 1, i = f;
        } else return false;
      }
      for (i.d.clear(), i.e = false; u.length > 0 && i.c.size === 0 && !i.e && i.d.size === 0; ) {
        const { parent: a, character: c } = u.pop();
        a.c.delete(c), i = a;
      }
      return true;
    }
    removeDocumentByWord(r, i, l = true) {
      if (!r) return true;
      let u = this;
      const a = r.length;
      for (let c = 0; c < a; c++) {
        const f = r[c];
        if (u.c.has(f)) {
          const h = u.c.get(f);
          c += h.s.length - 1, u = h, l && u.w !== r || u.removeDocument(i);
        } else return false;
      }
      return true;
    }
    static getCommonPrefix(r, i) {
      const l = Math.min(r.length, i.length);
      let u = 0;
      for (; u < l && r.charCodeAt(u) === i.charCodeAt(u); ) u++;
      return r.slice(0, u);
    }
    toJSON() {
      var _a, _b;
      return {
        w: this.w,
        s: this.s,
        e: this.e,
        k: this.k,
        d: Array.from(this.d),
        c: (_b = Array.from((_a = this.c) == null ? void 0 : _a.entries())) == null ? void 0 : _b.map(([r, i]) => [
          r,
          i.toJSON()
        ])
      };
    }
    static fromJSON(r) {
      var _a;
      const i = new Bn(r.k, r.s, r.e);
      return i.w = r.w, i.d = new Set(r.d), i.c = new Map(((_a = r == null ? void 0 : r.c) == null ? void 0 : _a.map(([l, u]) => [
        l,
        Bn.fromJSON(u)
      ])) || []), i;
    }
  }
  class pl extends Bn {
    constructor() {
      super("", "", false);
    }
    static fromJSON(r) {
      var _a;
      const i = new pl();
      return i.w = r.w, i.s = r.s, i.e = r.e, i.k = r.k, i.d = new Set(r.d), i.c = new Map(((_a = r == null ? void 0 : r.c) == null ? void 0 : _a.map(([l, u]) => [
        l,
        Bn.fromJSON(u)
      ])) || []), i;
    }
    toJSON() {
      return super.toJSON();
    }
  }
  const Ey = 2, Iy = 6371e3;
  class Rr {
    constructor(r, i) {
      __publicField(this, "point");
      __publicField(this, "docIDs");
      __publicField(this, "left");
      __publicField(this, "right");
      __publicField(this, "parent");
      this.point = r, this.docIDs = new Set(i), this.left = null, this.right = null, this.parent = null;
    }
    toJSON() {
      return {
        point: this.point,
        docIDs: Array.from(this.docIDs),
        left: this.left ? this.left.toJSON() : null,
        right: this.right ? this.right.toJSON() : null
      };
    }
    static fromJSON(r, i = null) {
      const l = new Rr(r.point, r.docIDs);
      return l.parent = i, r.left && (l.left = Rr.fromJSON(r.left, l)), r.right && (l.right = Rr.fromJSON(r.right, l)), l;
    }
  }
  class _t {
    constructor() {
      __publicField(this, "root");
      __publicField(this, "nodeMap");
      this.root = null, this.nodeMap = /* @__PURE__ */ new Map();
    }
    getPointKey(r) {
      return `${r.lon},${r.lat}`;
    }
    insert(r, i) {
      const l = this.getPointKey(r), u = this.nodeMap.get(l);
      if (u) {
        i.forEach((h) => u.docIDs.add(h));
        return;
      }
      const a = new Rr(r, i);
      if (this.nodeMap.set(l, a), this.root == null) {
        this.root = a;
        return;
      }
      let c = this.root, f = 0;
      for (; ; ) {
        if (f % Ey === 0) if (r.lon < c.point.lon) {
          if (c.left == null) {
            c.left = a, a.parent = c;
            return;
          }
          c = c.left;
        } else {
          if (c.right == null) {
            c.right = a, a.parent = c;
            return;
          }
          c = c.right;
        }
        else if (r.lat < c.point.lat) {
          if (c.left == null) {
            c.left = a, a.parent = c;
            return;
          }
          c = c.left;
        } else {
          if (c.right == null) {
            c.right = a, a.parent = c;
            return;
          }
          c = c.right;
        }
        f++;
      }
    }
    contains(r) {
      const i = this.getPointKey(r);
      return this.nodeMap.has(i);
    }
    getDocIDsByCoordinates(r) {
      const i = this.getPointKey(r), l = this.nodeMap.get(i);
      return l ? Array.from(l.docIDs) : null;
    }
    removeDocByID(r, i) {
      const l = this.getPointKey(r), u = this.nodeMap.get(l);
      u && (u.docIDs.delete(i), u.docIDs.size === 0 && (this.nodeMap.delete(l), this.deleteNode(u)));
    }
    deleteNode(r) {
      const i = r.parent, l = r.left ? r.left : r.right;
      l && (l.parent = i), i ? i.left === r ? i.left = l : i.right === r && (i.right = l) : (this.root = l, this.root && (this.root.parent = null));
    }
    searchByRadius(r, i, l = true, u = "asc", a = false) {
      const c = a ? _t.vincentyDistance : _t.haversineDistance, f = [
        {
          node: this.root,
          depth: 0
        }
      ], h = [];
      for (; f.length > 0; ) {
        const { node: m, depth: g } = f.pop();
        if (m == null) continue;
        const y = c(r, m.point);
        (l ? y <= i : y > i) && h.push({
          point: m.point,
          docIDs: Array.from(m.docIDs)
        }), m.left != null && f.push({
          node: m.left,
          depth: g + 1
        }), m.right != null && f.push({
          node: m.right,
          depth: g + 1
        });
      }
      return u && h.sort((m, g) => {
        const y = c(r, m.point), v = c(r, g.point);
        return u.toLowerCase() === "asc" ? y - v : v - y;
      }), h;
    }
    searchByPolygon(r, i = true, l = null, u = false) {
      const a = [
        {
          node: this.root,
          depth: 0
        }
      ], c = [];
      for (; a.length > 0; ) {
        const { node: h, depth: m } = a.pop();
        if (h == null) continue;
        h.left != null && a.push({
          node: h.left,
          depth: m + 1
        }), h.right != null && a.push({
          node: h.right,
          depth: m + 1
        });
        const g = _t.isPointInPolygon(r, h.point);
        (g && i || !g && !i) && c.push({
          point: h.point,
          docIDs: Array.from(h.docIDs)
        });
      }
      const f = _t.calculatePolygonCentroid(r);
      if (l) {
        const h = u ? _t.vincentyDistance : _t.haversineDistance;
        c.sort((m, g) => {
          const y = h(f, m.point), v = h(f, g.point);
          return l.toLowerCase() === "asc" ? y - v : v - y;
        });
      }
      return c;
    }
    toJSON() {
      return {
        root: this.root ? this.root.toJSON() : null
      };
    }
    static fromJSON(r) {
      const i = new _t();
      return r.root && (i.root = Rr.fromJSON(r.root), i.buildNodeMap(i.root)), i;
    }
    buildNodeMap(r) {
      if (r == null) return;
      const i = this.getPointKey(r.point);
      this.nodeMap.set(i, r), r.left && this.buildNodeMap(r.left), r.right && this.buildNodeMap(r.right);
    }
    static calculatePolygonCentroid(r) {
      let i = 0, l = 0, u = 0;
      const a = r.length;
      for (let f = 0, h = a - 1; f < a; h = f++) {
        const m = r[f].lon, g = r[f].lat, y = r[h].lon, v = r[h].lat, w = m * v - y * g;
        i += w, l += (m + y) * w, u += (g + v) * w;
      }
      i /= 2;
      const c = 6 * i;
      return l /= c, u /= c, {
        lon: l,
        lat: u
      };
    }
    static isPointInPolygon(r, i) {
      let l = false;
      const u = i.lon, a = i.lat, c = r.length;
      for (let f = 0, h = c - 1; f < c; h = f++) {
        const m = r[f].lon, g = r[f].lat, y = r[h].lon, v = r[h].lat;
        g > a != v > a && u < (y - m) * (a - g) / (v - g) + m && (l = !l);
      }
      return l;
    }
    static haversineDistance(r, i) {
      const l = Math.PI / 180, u = r.lat * l, a = i.lat * l, c = (i.lat - r.lat) * l, f = (i.lon - r.lon) * l, h = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(u) * Math.cos(a) * Math.sin(f / 2) * Math.sin(f / 2), m = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
      return Iy * m;
    }
    static vincentyDistance(r, i) {
      const u = 0.0033528106647474805, a = (1 - u) * 6378137, c = Math.PI / 180, f = r.lat * c, h = i.lat * c, m = (i.lon - r.lon) * c, g = Math.atan((1 - u) * Math.tan(f)), y = Math.atan((1 - u) * Math.tan(h)), v = Math.sin(g), w = Math.cos(g), I = Math.sin(y), D = Math.cos(y);
      let N = m, T, b = 1e3, L, $, ee, R, te, re;
      do {
        const J = Math.sin(N), V = Math.cos(N);
        if (L = Math.sqrt(D * J * (D * J) + (w * I - v * D * V) * (w * I - v * D * V)), L === 0) return 0;
        $ = v * I + w * D * V, ee = Math.atan2(L, $), R = w * D * J / L, te = 1 - R * R, re = $ - 2 * v * I / te, isNaN(re) && (re = 0);
        const Q = u / 16 * te * (4 + u * (4 - 3 * te));
        T = N, N = m + (1 - Q) * u * R * (ee + Q * L * (re + Q * $ * (-1 + 2 * re * re)));
      } while (Math.abs(N - T) > 1e-12 && --b > 0);
      if (b === 0) return NaN;
      const le = te * (6378137 * 6378137 - a * a) / (a * a), he = 1 + le / 16384 * (4096 + le * (-768 + le * (320 - 175 * le))), G = le / 1024 * (256 + le * (-128 + le * (74 - 47 * le))), B = G * L * (re + G / 4 * ($ * (-1 + 2 * re * re) - G / 6 * re * (-3 + 4 * L * L) * (-3 + 4 * re * re)));
      return a * he * (ee - B);
    }
  }
  class hl {
    constructor() {
      __publicField(this, "true");
      __publicField(this, "false");
      this.true = /* @__PURE__ */ new Set(), this.false = /* @__PURE__ */ new Set();
    }
    insert(r, i) {
      i ? this.true.add(r) : this.false.add(r);
    }
    delete(r, i) {
      i ? this.true.delete(r) : this.false.delete(r);
    }
    getSize() {
      return this.true.size + this.false.size;
    }
    toJSON() {
      return {
        true: Array.from(this.true),
        false: Array.from(this.false)
      };
    }
    static fromJSON(r) {
      const i = new hl();
      return i.true = new Set(r.true), i.false = new Set(r.false), i;
    }
  }
  function Cy(t, r, i, l, u, { k: a, b: c, d: f }) {
    return Math.log(1 + (i - r + 0.5) / (r + 0.5)) * (f + t * (a + 1)) / (t + a * (1 - c + c * l / u));
  }
  const Ty = 0.8;
  class ml {
    constructor(r) {
      __publicField(this, "size");
      __publicField(this, "vectors", /* @__PURE__ */ new Map());
      this.size = r;
    }
    add(r, i) {
      i instanceof Float32Array || (i = new Float32Array(i));
      const l = _p(i, this.size);
      this.vectors.set(r, [
        l,
        i
      ]);
    }
    remove(r) {
      this.vectors.delete(r);
    }
    find(r, i, l) {
      return r instanceof Float32Array || (r = new Float32Array(r)), Py(r, l, this.vectors, this.size, i);
    }
    toJSON() {
      const r = [];
      for (const [i, [l, u]] of this.vectors) r.push([
        i,
        [
          l,
          Array.from(u)
        ]
      ]);
      return {
        size: this.size,
        vectors: r
      };
    }
    static fromJSON(r) {
      const i = r, l = new ml(i.size);
      for (const [u, [a, c]] of i.vectors) l.vectors.set(u, [
        a,
        new Float32Array(c)
      ]);
      return l;
    }
  }
  function _p(t, r) {
    let i = 0;
    for (let l = 0; l < r; l++) i += t[l] * t[l];
    return Math.sqrt(i);
  }
  function Py(t, r, i, l, u) {
    const a = _p(t, l), c = [], f = r || i.keys();
    for (const h of f) {
      const m = i.get(h);
      if (!m) continue;
      const g = m[0], y = m[1];
      let v = 0;
      for (let I = 0; I < l; I++) v += t[I] * y[I];
      const w = v / (a * g);
      w >= u && c.push([
        h,
        w
      ]);
    }
    return c;
  }
  function Np(t, r, i, l, u) {
    const a = on(t.sharedInternalDocumentStore, i);
    t.avgFieldLength[r] = ((t.avgFieldLength[r] ?? 0) * (u - 1) + l.length) / u, t.fieldLengths[r][a] = l.length, t.frequencies[r][a] = {};
  }
  function Dp(t, r, i, l, u) {
    let a = 0;
    for (const h of l) h === u && a++;
    const c = on(t.sharedInternalDocumentStore, i), f = a / l.length;
    t.frequencies[r][c][u] = f, u in t.tokenOccurrences[r] || (t.tokenOccurrences[r][u] = 0), t.tokenOccurrences[r][u] = (t.tokenOccurrences[r][u] ?? 0) + 1;
  }
  function Op(t, r, i, l) {
    const u = on(t.sharedInternalDocumentStore, i);
    l > 1 ? t.avgFieldLength[r] = (t.avgFieldLength[r] * l - t.fieldLengths[r][u]) / (l - 1) : t.avgFieldLength[r] = void 0, t.fieldLengths[r][u] = void 0, t.frequencies[r][u] = void 0;
  }
  function Ap(t, r, i) {
    t.tokenOccurrences[r][i]--;
  }
  function $u(t, r, i, l, u = "") {
    l || (l = {
      sharedInternalDocumentStore: r,
      indexes: {},
      vectorIndexes: {},
      searchableProperties: [],
      searchablePropertiesWithTypes: {},
      frequencies: {},
      tokenOccurrences: {},
      avgFieldLength: {},
      fieldLengths: {}
    });
    for (const [a, c] of Object.entries(i)) {
      const f = `${u}${u ? "." : ""}${a}`;
      if (typeof c == "object" && !Array.isArray(c)) {
        $u(t, r, c, l, f);
        continue;
      }
      if (Mi(c)) l.searchableProperties.push(f), l.searchablePropertiesWithTypes[f] = c, l.vectorIndexes[f] = {
        type: "Vector",
        node: new ml(Ep(c)),
        isArray: false
      };
      else {
        const h = /\[/.test(c);
        switch (c) {
          case "boolean":
          case "boolean[]":
            l.indexes[f] = {
              type: "Bool",
              node: new hl(),
              isArray: h
            };
            break;
          case "number":
          case "number[]":
            l.indexes[f] = {
              type: "AVL",
              node: new fl(0, []),
              isArray: h
            };
            break;
          case "string":
          case "string[]":
            l.indexes[f] = {
              type: "Radix",
              node: new pl(),
              isArray: h
            }, l.avgFieldLength[f] = 0, l.frequencies[f] = {}, l.tokenOccurrences[f] = {}, l.fieldLengths[f] = {};
            break;
          case "enum":
          case "enum[]":
            l.indexes[f] = {
              type: "Flat",
              node: new dl(),
              isArray: h
            };
            break;
          case "geopoint":
            l.indexes[f] = {
              type: "BKD",
              node: new _t(),
              isArray: h
            };
            break;
          default:
            throw be("INVALID_SCHEMA_TYPE", Array.isArray(c) ? "array" : c, f);
        }
        l.searchableProperties.push(f), l.searchablePropertiesWithTypes[f] = c;
      }
    }
    return l;
  }
  function _y(t, r, i, l, u, a, c, f) {
    return (h) => {
      const { type: m, node: g } = r.indexes[i];
      switch (m) {
        case "Bool": {
          g[h ? "true" : "false"].add(l);
          break;
        }
        case "AVL": {
          const y = (f == null ? void 0 : f.avlRebalanceThreshold) ?? 1;
          g.insert(h, l, y);
          break;
        }
        case "Radix": {
          const y = a.tokenize(h, u, i, false);
          t.insertDocumentScoreParameters(r, i, l, y, c);
          for (const v of y) t.insertTokenScoreParameters(r, i, l, y, v), g.insert(v, l);
          break;
        }
        case "Flat": {
          g.insert(h, l);
          break;
        }
        case "BKD": {
          g.insert(h, [
            l
          ]);
          break;
        }
      }
    };
  }
  function Rp(t, r, i, l, u, a, c, f, h, m, g) {
    if (Mi(c)) return Lp(r, i, a, l, u);
    const y = _y(t, r, i, u, f, h, m, g);
    if (!cl(c)) return y(a);
    const v = a, w = v.length;
    for (let I = 0; I < w; I++) y(v[I]);
  }
  function Lp(t, r, i, l, u) {
    t.vectorIndexes[r].node.add(u, i);
  }
  function dd(t, r, i, l, u, a, c, f, h, m) {
    if (Mi(c)) return r.vectorIndexes[i].node.remove(u), true;
    const { type: g, node: y } = r.indexes[i];
    switch (g) {
      case "AVL":
        return y.removeDocument(a, u), true;
      case "Bool":
        return y[a ? "true" : "false"].delete(u), true;
      case "Radix": {
        const v = h.tokenize(a, f, i);
        t.removeDocumentScoreParameters(r, i, l, m);
        for (const w of v) t.removeTokenScoreParameters(r, i, w), y.removeDocumentByWord(w, u);
        return true;
      }
      case "Flat":
        return y.removeDocument(u, a), true;
      case "BKD":
        return y.removeDocByID(a, u), false;
    }
  }
  function zp(t, r, i, l, u, a, c, f, h, m) {
    if (!cl(c)) return dd(t, r, i, l, u, a, c, f, h, m);
    const g = Sp(c), y = a, v = y.length;
    for (let w = 0; w < v; w++) dd(t, r, i, l, u, y[w], g, f, h, m);
    return true;
  }
  function qu(t, r, i, l, u, a, c, f, h, m) {
    var _a;
    const g = Array.from(l), y = t.avgFieldLength[r], v = t.fieldLengths[r], w = t.tokenOccurrences[r], I = t.frequencies[r], D = typeof w[i] == "number" ? w[i] ?? 0 : 0, N = g.length;
    for (let T = 0; T < N; T++) {
      const b = g[T];
      if (h && !h.has(b)) continue;
      m.has(b) || m.set(b, /* @__PURE__ */ new Map());
      const L = m.get(b);
      L.set(r, (L.get(r) || 0) + 1);
      const $ = ((_a = I == null ? void 0 : I[b]) == null ? void 0 : _a[i]) ?? 0, ee = Cy($, D, u, v[b], y, a);
      c.has(b) ? c.set(b, c.get(b) + ee * f) : c.set(b, ee * f);
    }
  }
  function bp(t, r, i, l, u, a, c, f, h, m, g, y = 0) {
    const v = i.tokenize(r, l), w = v.length || 1, I = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
    for (const L of u) {
      if (!(L in t.indexes)) continue;
      const $ = t.indexes[L], { type: ee } = $;
      if (ee !== "Radix") throw be("WRONG_SEARCH_PROPERTY_TYPE", L);
      const R = f[L] ?? 1;
      if (R <= 0) throw be("INVALID_BOOST_VALUE", R);
      v.length === 0 && !r && v.push("");
      const te = v.length;
      for (let re = 0; re < te; re++) {
        const le = v[re], he = $.node.find({
          term: le,
          exact: a,
          tolerance: c
        }), G = Object.keys(he);
        G.length > 0 && D.set(le, true);
        const B = G.length;
        for (let ue = 0; ue < B; ue++) {
          const J = G[ue], V = he[J];
          qu(t, L, J, V, m, h, N, R, g, I);
        }
      }
    }
    const T = Array.from(N.entries()).map(([L, $]) => [
      L,
      $
    ]).sort((L, $) => $[1] - L[1]);
    if (T.length === 0) return [];
    if (y === 1) return T;
    if (y === 0) {
      if (w === 1) return T;
      for (const $ of v) if (!D.get($)) return [];
      return T.filter(([$]) => {
        const ee = I.get($);
        return ee ? Array.from(ee.values()).some((R) => R === w) : false;
      });
    }
    const b = T.filter(([L]) => {
      const $ = I.get(L);
      return $ ? Array.from($.values()).some((ee) => ee === w) : false;
    });
    if (b.length > 0) {
      const L = T.filter(([ee]) => !b.some(([R]) => R === ee)), $ = Math.ceil(L.length * y);
      return [
        ...b,
        ...L.slice(0, $)
      ];
    }
    return T;
  }
  function Oi(t, r, i, l) {
    if ("and" in i && i.and && Array.isArray(i.and)) {
      const c = i.and;
      if (c.length === 0) return /* @__PURE__ */ new Set();
      const f = c.map((h) => Oi(t, r, h, l));
      return cd(...f);
    }
    if ("or" in i && i.or && Array.isArray(i.or)) {
      const c = i.or;
      return c.length === 0 ? /* @__PURE__ */ new Set() : c.map((h) => Oi(t, r, h, l)).reduce((h, m) => el(h, m), /* @__PURE__ */ new Set());
    }
    if ("not" in i && i.not) {
      const c = i.not, f = /* @__PURE__ */ new Set(), h = t.sharedInternalDocumentStore;
      for (let g = 1; g <= h.internalIdToId.length; g++) f.add(g);
      const m = Oi(t, r, c, l);
      return my(f, m);
    }
    const u = Object.keys(i), a = u.reduce((c, f) => ({
      [f]: /* @__PURE__ */ new Set(),
      ...c
    }), {});
    for (const c of u) {
      const f = i[c];
      if (typeof t.indexes[c] > "u") throw be("UNKNOWN_FILTER_PROPERTY", c);
      const { node: h, type: m, isArray: g } = t.indexes[c];
      if (m === "Bool") {
        const v = h, w = f ? v.true : v.false;
        a[c] = el(a[c], w);
        continue;
      }
      if (m === "BKD") {
        let v;
        if ("radius" in f) v = "radius";
        else if ("polygon" in f) v = "polygon";
        else throw new Error(`Invalid operation ${f}`);
        if (v === "radius") {
          const { value: w, coordinates: I, unit: D = "m", inside: N = true, highPrecision: T = false } = f[v], b = wp(w, D), L = h.searchByRadius(I, b, N, void 0, T);
          a[c] = pd(a[c], L);
        } else {
          const { coordinates: w, inside: I = true, highPrecision: D = false } = f[v], N = h.searchByPolygon(w, I, void 0, D);
          a[c] = pd(a[c], N);
        }
        continue;
      }
      if (m === "Radix" && (typeof f == "string" || Array.isArray(f))) {
        for (const v of [
          f
        ].flat()) {
          const w = r.tokenize(v, l, c);
          for (const I of w) {
            const D = h.find({
              term: I,
              exact: true
            });
            a[c] = Oy(a[c], D);
          }
        }
        continue;
      }
      const y = Object.keys(f);
      if (y.length > 1) throw be("INVALID_FILTER_OPERATION", y.length);
      if (m === "Flat") {
        const v = new Set(g ? h.filterArr(f) : h.filter(f));
        a[c] = el(a[c], v);
        continue;
      }
      if (m === "AVL") {
        const v = y[0], w = f[v];
        let I;
        switch (v) {
          case "gt": {
            I = h.greaterThan(w, false);
            break;
          }
          case "gte": {
            I = h.greaterThan(w, true);
            break;
          }
          case "lt": {
            I = h.lessThan(w, false);
            break;
          }
          case "lte": {
            I = h.lessThan(w, true);
            break;
          }
          case "eq": {
            I = h.find(w) ?? /* @__PURE__ */ new Set();
            break;
          }
          case "between": {
            const [D, N] = w;
            I = h.rangeSearch(D, N);
            break;
          }
          default:
            throw be("INVALID_FILTER_OPERATION", v);
        }
        a[c] = el(a[c], I);
      }
    }
    return cd(...Object.values(a));
  }
  function Mp(t) {
    return t.searchableProperties;
  }
  function Fp(t) {
    return t.searchablePropertiesWithTypes;
  }
  function jp(t, r) {
    const { indexes: i, vectorIndexes: l, searchableProperties: u, searchablePropertiesWithTypes: a, frequencies: c, tokenOccurrences: f, avgFieldLength: h, fieldLengths: m } = r, g = {}, y = {};
    for (const v of Object.keys(i)) {
      const { node: w, type: I, isArray: D } = i[v];
      switch (I) {
        case "Radix":
          g[v] = {
            type: "Radix",
            node: pl.fromJSON(w),
            isArray: D
          };
          break;
        case "Flat":
          g[v] = {
            type: "Flat",
            node: dl.fromJSON(w),
            isArray: D
          };
          break;
        case "AVL":
          g[v] = {
            type: "AVL",
            node: fl.fromJSON(w),
            isArray: D
          };
          break;
        case "BKD":
          g[v] = {
            type: "BKD",
            node: _t.fromJSON(w),
            isArray: D
          };
          break;
        case "Bool":
          g[v] = {
            type: "Bool",
            node: hl.fromJSON(w),
            isArray: D
          };
          break;
        default:
          g[v] = i[v];
      }
    }
    for (const v of Object.keys(l)) y[v] = {
      type: "Vector",
      isArray: false,
      node: ml.fromJSON(l[v])
    };
    return {
      sharedInternalDocumentStore: t,
      indexes: g,
      vectorIndexes: y,
      searchableProperties: u,
      searchablePropertiesWithTypes: a,
      frequencies: c,
      tokenOccurrences: f,
      avgFieldLength: h,
      fieldLengths: m
    };
  }
  function Bp(t) {
    const { indexes: r, vectorIndexes: i, searchableProperties: l, searchablePropertiesWithTypes: u, frequencies: a, tokenOccurrences: c, avgFieldLength: f, fieldLengths: h } = t, m = {};
    for (const y of Object.keys(i)) m[y] = i[y].node.toJSON();
    const g = {};
    for (const y of Object.keys(r)) {
      const { type: v, node: w, isArray: I } = r[y];
      v === "Flat" || v === "Radix" || v === "AVL" || v === "BKD" || v === "Bool" ? g[y] = {
        type: v,
        node: w.toJSON(),
        isArray: I
      } : (g[y] = r[y], g[y].node = g[y].node.toJSON());
    }
    return {
      indexes: g,
      vectorIndexes: m,
      searchableProperties: l,
      searchablePropertiesWithTypes: u,
      frequencies: a,
      tokenOccurrences: c,
      avgFieldLength: f,
      fieldLengths: h
    };
  }
  Ny = function() {
    return {
      create: $u,
      insert: Rp,
      remove: zp,
      insertDocumentScoreParameters: Np,
      insertTokenScoreParameters: Dp,
      removeDocumentScoreParameters: Op,
      removeTokenScoreParameters: Ap,
      calculateResultScores: qu,
      search: bp,
      searchByWhereClause: Oi,
      getSearchableProperties: Mp,
      getSearchablePropertiesWithTypes: Fp,
      load: jp,
      save: Bp
    };
  };
  function pd(t, r) {
    t || (t = /* @__PURE__ */ new Set());
    const i = r.length;
    for (let l = 0; l < i; l++) {
      const u = r[l].docIDs, a = u.length;
      for (let c = 0; c < a; c++) t.add(u[c]);
    }
    return t;
  }
  function hd(t, r, i = false) {
    const l = i ? _t.vincentyDistance : _t.haversineDistance, u = [], a = [];
    for (const { point: h } of t) a.push(l(r, h));
    const c = Math.max(...a);
    let f = 0;
    for (const { docIDs: h } of t) {
      const m = a[f], g = c - m + 1;
      for (const y of h) u.push([
        y,
        g
      ]);
      f++;
    }
    return u.sort((h, m) => m[1] - h[1]), u;
  }
  function Dy(t, r) {
    const i = Object.keys(t);
    if (i.length !== 1) return {
      isGeoOnly: false
    };
    const l = i[0], u = t[l];
    if (typeof r.indexes[l] > "u") return {
      isGeoOnly: false
    };
    const { type: a } = r.indexes[l];
    return a === "BKD" && u && ("radius" in u || "polygon" in u) ? {
      isGeoOnly: true,
      geoProperty: l,
      geoOperation: u
    } : {
      isGeoOnly: false
    };
  }
  function Up(t, r) {
    const i = t, l = Dy(r, i);
    if (!l.isGeoOnly || !l.geoProperty || !l.geoOperation) return null;
    const { node: u } = i.indexes[l.geoProperty], a = l.geoOperation, c = u;
    let f;
    if ("radius" in a) {
      const { value: h, coordinates: m, unit: g = "m", inside: y = true, highPrecision: v = false } = a.radius, w = m, I = wp(h, g);
      return f = c.searchByRadius(w, I, y, "asc", v), hd(f, w, v);
    } else if ("polygon" in a) {
      const { coordinates: h, inside: m = true, highPrecision: g = false } = a.polygon;
      f = c.searchByPolygon(h, m, "asc", g);
      const y = _t.calculatePolygonCentroid(h);
      return hd(f, y, g);
    }
    return null;
  }
  function Oy(t, r) {
    t || (t = /* @__PURE__ */ new Set());
    const i = Object.keys(r), l = i.length;
    for (let u = 0; u < l; u++) {
      const a = r[i[u]], c = a.length;
      for (let f = 0; f < c; f++) t.add(a[f]);
    }
    return t;
  }
  gk = Object.freeze(Object.defineProperty({
    __proto__: null,
    calculateResultScores: qu,
    create: $u,
    createIndex: Ny,
    getSearchableProperties: Mp,
    getSearchablePropertiesWithTypes: Fp,
    insert: Rp,
    insertDocumentScoreParameters: Np,
    insertTokenScoreParameters: Dp,
    insertVector: Lp,
    load: jp,
    remove: zp,
    removeDocumentScoreParameters: Op,
    removeTokenScoreParameters: Ap,
    save: Bp,
    search: bp,
    searchByGeoWhereClause: Up,
    searchByWhereClause: Oi
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function Ay(t) {
    return {
      sharedInternalDocumentStore: t,
      rules: /* @__PURE__ */ new Map()
    };
  }
  function Ry(t, r) {
    if (t.rules.has(r.id)) throw new Error(`PINNING_RULE_ALREADY_EXISTS: A pinning rule with id "${r.id}" already exists. Use updateRule to modify it.`);
    t.rules.set(r.id, r);
  }
  function Ly(t, r) {
    if (!t.rules.has(r.id)) throw new Error(`PINNING_RULE_NOT_FOUND: Cannot update pinning rule with id "${r.id}" because it does not exist. Use addRule to create it.`);
    t.rules.set(r.id, r);
  }
  function zy(t, r) {
    return t.rules.delete(r);
  }
  function by(t, r) {
    return t.rules.get(r);
  }
  function My(t) {
    return Array.from(t.rules.values());
  }
  function Fy(t, r) {
    const i = t.toLowerCase().trim(), l = r.pattern.toLowerCase().trim();
    switch (r.anchoring) {
      case "is":
        return i === l;
      case "starts_with":
        return i.startsWith(l);
      case "contains":
        return i.includes(l);
      default:
        return false;
    }
  }
  function jy(t, r) {
    return t ? r.conditions.every((i) => Fy(t, i)) : false;
  }
  function Vp(t, r) {
    if (!r) return [];
    const i = [];
    for (const l of t.rules.values()) jy(r, l) && i.push(l);
    return i;
  }
  function By(t, r) {
    const i = r;
    return {
      sharedInternalDocumentStore: t,
      rules: new Map((i == null ? void 0 : i.rules) ?? [])
    };
  }
  function Uy(t) {
    return {
      rules: Array.from(t.rules.entries())
    };
  }
  yk = function() {
    return {
      create: Ay,
      addRule: Ry,
      updateRule: Ly,
      removeRule: zy,
      getRule: by,
      getAllRules: My,
      getMatchingRules: Vp,
      load: By,
      save: Uy
    };
  };
  vk = function(t, r) {
    return t.documentsStore.get(t.data.docs, r);
  };
  Vy = function(t) {
    return t.documentsStore.count(t.data.docs);
  };
  Hp = function(t, r, i, l, u) {
    const a = t.validateSchema(r, t.schema);
    if (a) throw be("SCHEMA_VALIDATION_FAILURE", a);
    return Ye(t.beforeInsert) || Ye(t.afterInsert) || Ye(t.index.beforeInsert) || Ye(t.index.insert) || Ye(t.index.afterInsert) ? $y(t, r, i, l, u) : qy(t, r, i, l, u);
  };
  const Hy = /* @__PURE__ */ new Set([
    "enum",
    "enum[]"
  ]), Wy = /* @__PURE__ */ new Set([
    "string",
    "number"
  ]);
  async function $y(t, r, i, l, u) {
    const { index: a, docs: c } = t.data, f = t.getDocumentIndexId(r);
    if (typeof f != "string") throw be("DOCUMENT_ID_MUST_BE_STRING", typeof f);
    const h = on(t.internalDocumentIDStore, f);
    if (l || await ll(t.beforeInsert, t, f, r), !t.documentsStore.store(c, f, h, r)) throw be("DOCUMENT_ALREADY_EXISTS", f);
    const m = t.documentsStore.count(c), g = t.index.getSearchableProperties(a), y = t.index.getSearchablePropertiesWithTypes(a), v = t.getDocumentProperties(r, g);
    for (const [w, I] of Object.entries(v)) {
      if (typeof I > "u") continue;
      const D = typeof I, N = y[w];
      Wp(D, N, w, I);
    }
    return await Yy(t, f, g, v, m, i, r, u), l || await ll(t.afterInsert, t, f, r), f;
  }
  function qy(t, r, i, l, u) {
    const { index: a, docs: c } = t.data, f = t.getDocumentIndexId(r);
    if (typeof f != "string") throw be("DOCUMENT_ID_MUST_BE_STRING", typeof f);
    const h = on(t.internalDocumentIDStore, f);
    if (l || ll(t.beforeInsert, t, f, r), !t.documentsStore.store(c, f, h, r)) throw be("DOCUMENT_ALREADY_EXISTS", f);
    const m = t.documentsStore.count(c), g = t.index.getSearchableProperties(a), y = t.index.getSearchablePropertiesWithTypes(a), v = t.getDocumentProperties(r, g);
    for (const [w, I] of Object.entries(v)) {
      if (typeof I > "u") continue;
      const D = typeof I, N = y[w];
      Wp(D, N, w, I);
    }
    return Qy(t, f, g, v, m, i, r, u), l || ll(t.afterInsert, t, f, r), f;
  }
  function Wp(t, r, i, l) {
    if (!(ky(r) && typeof l == "object" && typeof l.lon == "number" && typeof l.lat == "number") && !(Mi(r) && Array.isArray(l)) && !(cl(r) && Array.isArray(l)) && !(Hy.has(r) && Wy.has(t)) && t !== r) throw be("INVALID_DOCUMENT_PROPERTY", i, r, t);
  }
  async function Yy(t, r, i, l, u, a, c, f) {
    var _a, _b, _c, _d2;
    for (const g of i) {
      const y = l[g];
      if (typeof y > "u") continue;
      const v = t.index.getSearchablePropertiesWithTypes(t.data.index)[g];
      await ((_b = (_a = t.index).beforeInsert) == null ? void 0 : _b.call(_a, t.data.index, g, r, y, v, a, t.tokenizer, u));
      const w = t.internalDocumentIDStore.idToInternalId.get(r);
      await t.index.insert(t.index, t.data.index, g, r, w, y, v, a, t.tokenizer, u, f), await ((_d2 = (_c = t.index).afterInsert) == null ? void 0 : _d2.call(_c, t.data.index, g, r, y, v, a, t.tokenizer, u));
    }
    const h = t.sorter.getSortableProperties(t.data.sorting), m = t.getDocumentProperties(c, h);
    for (const g of h) {
      const y = m[g];
      if (typeof y > "u") continue;
      const v = t.sorter.getSortablePropertiesWithTypes(t.data.sorting)[g];
      t.sorter.insert(t.data.sorting, g, r, y, v, a);
    }
  }
  function Qy(t, r, i, l, u, a, c, f) {
    var _a, _b, _c, _d2;
    for (const g of i) {
      const y = l[g];
      if (typeof y > "u") continue;
      const v = t.index.getSearchablePropertiesWithTypes(t.data.index)[g], w = on(t.internalDocumentIDStore, r);
      (_b = (_a = t.index).beforeInsert) == null ? void 0 : _b.call(_a, t.data.index, g, r, y, v, a, t.tokenizer, u), t.index.insert(t.index, t.data.index, g, r, w, y, v, a, t.tokenizer, u, f), (_d2 = (_c = t.index).afterInsert) == null ? void 0 : _d2.call(_c, t.data.index, g, r, y, v, a, t.tokenizer, u);
    }
    const h = t.sorter.getSortableProperties(t.data.sorting), m = t.getDocumentProperties(c, h);
    for (const g of h) {
      const y = m[g];
      if (typeof y > "u") continue;
      const v = t.sorter.getSortablePropertiesWithTypes(t.data.sorting)[g];
      t.sorter.insert(t.data.sorting, g, r, y, v, a);
    }
  }
  Ky = function(t, r, i, l, u, a) {
    return Ye(t.afterInsertMultiple) || Ye(t.beforeInsertMultiple) || Ye(t.index.beforeInsert) || Ye(t.index.insert) || Ye(t.index.afterInsert) ? $p(t, r, i, l, u, a) : qp(t, r, i, l, u, a);
  };
  async function $p(t, r, i = 1e3, l, u, a = 0) {
    const c = [], f = async (m) => {
      const g = Math.min(m + i, r.length), y = r.slice(m, g);
      for (const v of y) {
        const w = {
          avlRebalanceThreshold: y.length
        }, I = await Hp(t, v, l, u, w);
        c.push(I);
      }
      return g;
    };
    return await (async () => {
      let m = 0;
      for (; m < r.length; ) {
        const g = Date.now();
        if (m = await f(m), a > 0) {
          const y = Date.now() - g, v = a - y;
          v > 0 && kp(v);
        }
      }
    })(), u || await Tp(t.afterInsertMultiple, t, r), c;
  }
  function qp(t, r, i = 1e3, l, u, a = 0) {
    const c = [];
    let f = 0;
    function h() {
      const g = r.slice(f * i, (f + 1) * i);
      if (g.length === 0) return false;
      for (const y of g) {
        const v = {
          avlRebalanceThreshold: g.length
        }, w = Hp(t, y, l, u, v);
        c.push(w);
      }
      return f++, true;
    }
    function m() {
      const g = Date.now();
      for (; h(); ) if (a > 0) {
        const v = Date.now() - g;
        if (v >= a) {
          const w = a - v % a;
          w > 0 && kp(w);
        }
      }
    }
    return m(), u || Tp(t.afterInsertMultiple, t, r), c;
  }
  wk = function(t, r, i, l, u, a) {
    return Ye(t.beforeInsert) || Ye(t.afterInsert) || Ye(t.index.beforeInsert) || Ye(t.index.insert) || Ye(t.index.afterInsert) ? $p(t, r, i, l, u, a) : qp(t, r, i, l, u, a);
  };
  md = "fulltext";
  Gy = "hybrid";
  Xy = "vector";
  function Jy(t, r) {
    return t[1] - r[1];
  }
  function Zy(t, r) {
    return r[1] - t[1];
  }
  function e0(t = "desc") {
    return t.toLowerCase() === "asc" ? Jy : Zy;
  }
  function Yu(t, r, i) {
    const l = {}, u = r.map(([m]) => m), a = t.documentsStore.getMultiple(t.data.docs, u), c = Object.keys(i), f = t.index.getSearchablePropertiesWithTypes(t.data.index);
    for (const m of c) {
      let g;
      if (f[m] === "number") {
        const { ranges: y } = i[m], v = y.length, w = Array.from({
          length: v
        });
        for (let I = 0; I < v; I++) {
          const D = y[I];
          w[I] = [
            `${D.from}-${D.to}`,
            0
          ];
        }
        g = Object.fromEntries(w);
      }
      l[m] = {
        count: 0,
        values: g ?? {}
      };
    }
    const h = a.length;
    for (let m = 0; m < h; m++) {
      const g = a[m];
      for (const y of c) {
        const v = y.includes(".") ? Vu(g, y) : g[y], w = f[y], I = l[y].values;
        switch (w) {
          case "number": {
            const D = i[y].ranges;
            gd(D, I)(v);
            break;
          }
          case "number[]": {
            const D = /* @__PURE__ */ new Set(), N = i[y].ranges, T = gd(N, I, D);
            for (const b of v) T(b);
            break;
          }
          case "boolean":
          case "enum":
          case "string": {
            yd(I, w)(v);
            break;
          }
          case "boolean[]":
          case "enum[]":
          case "string[]": {
            const T = yd(I, w === "boolean[]" ? "boolean" : "string", /* @__PURE__ */ new Set());
            for (const b of v) T(b);
            break;
          }
          default:
            throw be("FACET_NOT_SUPPORTED", w);
        }
      }
    }
    for (const m of c) {
      const g = l[m];
      if (g.count = Object.keys(g.values).length, f[m] === "string") {
        const y = i[m], v = e0(y.sort);
        g.values = Object.fromEntries(Object.entries(g.values).sort(v).slice(y.offset ?? 0, y.limit ?? 10));
      }
    }
    return l;
  }
  function gd(t, r, i) {
    return (l) => {
      for (const u of t) {
        const a = `${u.from}-${u.to}`;
        (i == null ? void 0 : i.has(a)) || l >= u.from && l <= u.to && (r[a] === void 0 ? r[a] = 1 : (r[a]++, i == null ? void 0 : i.add(a)));
      }
    };
  }
  function yd(t, r, i) {
    const l = r === "boolean" ? "false" : "";
    return (u) => {
      const a = (u == null ? void 0 : u.toString()) ?? l;
      (i == null ? void 0 : i.has(a)) || (t[a] = (t[a] ?? 0) + 1, i == null ? void 0 : i.add(a));
    };
  }
  const t0 = {
    reducer: (t, r, i, l) => (r[l] = i, r),
    getInitialValue: (t) => Array.from({
      length: t
    })
  }, vd = [
    "string",
    "number",
    "boolean"
  ];
  function Qu(t, r, i) {
    const l = i.properties, u = l.length, a = t.index.getSearchablePropertiesWithTypes(t.data.index);
    for (let T = 0; T < u; T++) {
      const b = l[T];
      if (typeof a[b] > "u") throw be("UNKNOWN_GROUP_BY_PROPERTY", b);
      if (!vd.includes(a[b])) throw be("INVALID_GROUP_BY_PROPERTY", b, vd.join(", "), a[b]);
    }
    const c = r.map(([T]) => Fi(t.internalDocumentIDStore, T)), f = t.documentsStore.getMultiple(t.data.docs, c), h = f.length, m = i.maxResult || Number.MAX_SAFE_INTEGER, g = [], y = {};
    for (let T = 0; T < u; T++) {
      const b = l[T], L = {
        property: b,
        perValue: {}
      }, $ = /* @__PURE__ */ new Set();
      for (let ee = 0; ee < h; ee++) {
        const R = f[ee], te = Vu(R, b);
        if (typeof te > "u") continue;
        const re = typeof te != "boolean" ? te : "" + te, le = L.perValue[re] ?? {
          indexes: [],
          count: 0
        };
        le.count >= m || (le.indexes.push(ee), le.count++, L.perValue[re] = le, $.add(te));
      }
      g.push(Array.from($)), y[b] = L;
    }
    const v = Yp(g), w = v.length, I = [];
    for (let T = 0; T < w; T++) {
      const b = v[T], L = b.length, $ = {
        values: [],
        indexes: []
      }, ee = [];
      for (let R = 0; R < L; R++) {
        const te = b[R], re = l[R];
        ee.push(y[re].perValue[typeof te != "boolean" ? te : "" + te].indexes), $.values.push(te);
      }
      $.indexes = fy(ee).sort((R, te) => R - te), $.indexes.length !== 0 && I.push($);
    }
    const D = I.length, N = Array.from({
      length: D
    });
    for (let T = 0; T < D; T++) {
      const b = I[T], L = i.reduce || t0, $ = b.indexes.map((re) => ({
        id: c[re],
        score: r[re][1],
        document: f[re]
      })), ee = L.reducer.bind(null, b.values), R = L.getInitialValue(b.indexes.length), te = $.reduce(ee, R);
      N[T] = {
        values: b.values,
        result: te
      };
    }
    return N;
  }
  function Yp(t, r = 0) {
    if (r + 1 === t.length) return t[r].map((a) => [
      a
    ]);
    const i = t[r], l = Yp(t, r + 1), u = [];
    for (const a of i) for (const c of l) {
      const f = [
        a
      ];
      ly(f, c), u.push(f);
    }
    return u;
  }
  function Ku(t, r, i, l) {
    const u = Vp(r, l);
    if (u.length === 0) return i;
    const a = u.flatMap((N) => N.consequence.promote);
    a.sort((N, T) => N.position - T.position);
    const c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set();
    for (const N of a) {
      const T = on(t.internalDocumentIDStore, N.doc_id);
      if (T !== void 0) {
        if (f.has(T)) {
          const b = f.get(T);
          N.position < b && f.set(T, N.position);
          continue;
        }
        h.has(N.position) || (c.add(T), f.set(T, N.position), h.add(N.position));
      }
    }
    if (f.size === 0) return i;
    const m = i.filter(([N]) => !c.has(N)), g = 1e6, y = [];
    for (const [N, T] of f.entries()) i.find(([L]) => L === N) ? y.push([
      N,
      g - T
    ]) : t.documentsStore.get(t.data.docs, N) && y.push([
      N,
      0
    ]);
    y.sort((N, T) => {
      const b = f.get(N[0]) ?? 1 / 0, L = f.get(T[0]) ?? 1 / 0;
      return b - L;
    });
    const v = [], w = /* @__PURE__ */ new Map();
    for (const N of y) {
      const T = f.get(N[0]);
      w.set(T, N);
    }
    let I = 0, D = 0;
    for (; D < m.length + y.length; ) if (w.has(D)) v.push(w.get(D)), D++;
    else if (I < m.length) v.push(m[I]), I++, D++;
    else break;
    for (const [N, T] of w.entries()) N >= v.length && v.push(T);
    return v;
  }
  function Qp(t, r, i) {
    const { term: l, properties: u } = r, a = t.data.index;
    let c = t.caches.propertiesToSearch;
    if (!c) {
      const y = t.index.getSearchablePropertiesWithTypes(a);
      c = t.index.getSearchableProperties(a), c = c.filter((v) => y[v].startsWith("string")), t.caches.propertiesToSearch = c;
    }
    if (u && u !== "*") {
      for (const y of u) if (!c.includes(y)) throw be("UNKNOWN_INDEX", y, c.join(", "));
      c = c.filter((y) => u.includes(y));
    }
    const f = Object.keys(r.where ?? {}).length > 0;
    let h;
    f && (h = t.index.searchByWhereClause(a, t.tokenizer, r.where, i));
    let m;
    const g = r.threshold !== void 0 && r.threshold !== null ? r.threshold : 1;
    if (l || u) {
      const y = Vy(t);
      if (m = t.index.search(a, l || "", t.tokenizer, i, c, r.exact || false, r.tolerance || 0, r.boost || {}, o0(r.relevance), y, h, g), r.exact && l) {
        const v = l.trim().split(/\s+/);
        m = m.filter(([w]) => {
          const I = t.documentsStore.get(t.data.docs, w);
          if (!I) return false;
          for (const D of c) {
            const N = r0(I, D);
            if (typeof N == "string" && v.every((b) => new RegExp(`\\b${n0(b)}\\b`).test(N))) return true;
          }
          return false;
        });
      }
    } else if (f) {
      const y = Up(a, r.where);
      y ? m = y : m = (h ? Array.from(h) : []).map((w) => [
        +w,
        0
      ]);
    } else m = Object.keys(t.documentsStore.getAll(t.data.docs)).map((v) => [
      +v,
      0
    ]);
    return m;
  }
  function n0(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function r0(t, r) {
    const i = r.split(".");
    let l = t;
    for (const u of i) if (l && typeof l == "object" && u in l) l = l[u];
    else return;
    return l;
  }
  function i0(t, r, i) {
    var _a, _b;
    const l = br();
    function u() {
      const f = Object.keys(t.data.index.vectorIndexes), h = r.facets && Object.keys(r.facets).length > 0, { limit: m = 10, offset: g = 0, distinctOn: y, includeVectors: v = false } = r, w = r.preflight === true;
      let I = Qp(t, r, i);
      if (r.sortBy) if (typeof r.sortBy == "function") {
        const T = I.map(([$]) => $), L = t.documentsStore.getMultiple(t.data.docs, T).map(($, ee) => [
          I[ee][0],
          I[ee][1],
          $
        ]);
        L.sort(r.sortBy), I = L.map(([$, ee]) => [
          $,
          ee
        ]);
      } else I = t.sorter.sortBy(t.data.sorting, I, r.sortBy).map(([T, b]) => [
        on(t.internalDocumentIDStore, T),
        b
      ]);
      else I = I.sort(vp);
      I = Ku(t, t.data.pinning, I, r.term);
      let D;
      w || (D = y ? p0(t, I, g, m, y) : Gp(t, I, g, m));
      const N = {
        elapsed: {
          formatted: "",
          raw: 0
        },
        hits: [],
        count: I.length
      };
      if (typeof D < "u" && (N.hits = D.filter(Boolean), v || xp(N, f)), h) {
        const T = Yu(t, I, r.facets);
        N.facets = T;
      }
      return r.groupBy && (N.groups = Qu(t, I, r.groupBy)), N.elapsed = t.formatElapsedTime(br() - l), N;
    }
    async function a() {
      t.beforeSearch && await Wu(t.beforeSearch, t, r, i);
      const f = u();
      return t.afterSearch && await Hu(t.afterSearch, t, r, i, f), f;
    }
    return ((_a = t.beforeSearch) == null ? void 0 : _a.length) || ((_b = t.afterSearch) == null ? void 0 : _b.length) ? a() : u();
  }
  const pu = {
    k: 1.2,
    b: 0.75,
    d: 0.5
  };
  function o0(t) {
    const r = t ?? {};
    return r.k = r.k ?? pu.k, r.b = r.b ?? pu.b, r.d = r.d ?? pu.d, r;
  }
  function Kp(t, r, i) {
    const l = r.vector;
    if (l && (!("value" in l) || !("property" in l))) throw be("INVALID_VECTOR_INPUT", Object.keys(l).join(", "));
    const u = t.data.index.vectorIndexes[l.property];
    if (!u) throw be("UNKNOWN_VECTOR_PROPERTY", l.property);
    const a = u.node.size;
    if ((l == null ? void 0 : l.value.length) !== a) throw (l == null ? void 0 : l.property) === void 0 || (l == null ? void 0 : l.value.length) === void 0 ? be("INVALID_INPUT_VECTOR", "undefined", a, "undefined") : be("INVALID_INPUT_VECTOR", l.property, a, l.value.length);
    const c = t.data.index;
    let f;
    return Object.keys(r.where ?? {}).length > 0 && (f = t.index.searchByWhereClause(c, t.tokenizer, r.where, i)), u.node.find(l.value, r.similarity ?? Ty, f);
  }
  l0 = function(t, r, i = "english") {
    var _a, _b;
    const l = br();
    function u() {
      let f = Kp(t, r, i).sort(vp);
      f = Ku(t, t.data.pinning, f, void 0);
      let h = [];
      r.facets && Object.keys(r.facets).length > 0 && (h = Yu(t, f, r.facets));
      const g = r.vector.property, y = r.includeVectors ?? false, v = r.limit ?? 10, w = r.offset ?? 0, I = Array.from({
        length: v
      });
      for (let b = 0; b < v; b++) {
        const L = f[b + w];
        if (!L) break;
        const $ = t.data.docs.docs[L[0]];
        if ($) {
          y || ($[g] = null);
          const ee = {
            id: Fi(t.internalDocumentIDStore, L[0]),
            score: L[1],
            document: $
          };
          I[b] = ee;
        }
      }
      let D = [];
      r.groupBy && (D = Qu(t, f, r.groupBy));
      const T = br() - l;
      return {
        count: f.length,
        hits: I.filter(Boolean),
        elapsed: {
          raw: Number(T),
          formatted: Uu(T)
        },
        ...h ? {
          facets: h
        } : {},
        ...D ? {
          groups: D
        } : {}
      };
    }
    async function a() {
      t.beforeSearch && await Wu(t.beforeSearch, t, r, i);
      const f = u();
      return t.afterSearch && await Hu(t.afterSearch, t, r, i, f), f;
    }
    return ((_a = t.beforeSearch) == null ? void 0 : _a.length) || ((_b = t.afterSearch) == null ? void 0 : _b.length) ? a() : u();
  };
  function s0(t, r, i) {
    const l = a0(Qp(t, r, i)), u = Kp(t, r, i), a = r.hybridWeights;
    return f0(l, u, r.term ?? "", a);
  }
  function u0(t, r, i) {
    var _a, _b;
    const l = br();
    function u() {
      let f = s0(t, r, i);
      f = Ku(t, t.data.pinning, f, r.term);
      let h;
      r.facets && Object.keys(r.facets).length > 0 && (h = Yu(t, f, r.facets));
      let g;
      r.groupBy && (g = Qu(t, f, r.groupBy));
      const y = r.offset ?? 0, v = r.limit ?? 10, w = Gp(t, f, y, v).filter(Boolean), I = br(), D = {
        count: f.length,
        elapsed: {
          raw: Number(I - l),
          formatted: Uu(I - l)
        },
        hits: w,
        ...h ? {
          facets: h
        } : {},
        ...g ? {
          groups: g
        } : {}
      };
      if (!(r.includeVectors ?? false)) {
        const T = Object.keys(t.data.index.vectorIndexes);
        xp(D, T);
      }
      return D;
    }
    async function a() {
      t.beforeSearch && await Wu(t.beforeSearch, t, r, i);
      const f = u();
      return t.afterSearch && await Hu(t.afterSearch, t, r, i, f), f;
    }
    return ((_a = t.beforeSearch) == null ? void 0 : _a.length) || ((_b = t.afterSearch) == null ? void 0 : _b.length) ? a() : u();
  }
  function Nu(t) {
    return t[1];
  }
  function a0(t) {
    const r = Math.max.apply(Math, t.map(Nu));
    return t.map(([i, l]) => [
      i,
      l / r
    ]);
  }
  function wd(t, r) {
    return t / r;
  }
  function c0(t, r) {
    return (i, l) => i * t + l * r;
  }
  function f0(t, r, i, l) {
    const u = Math.max.apply(Math, t.map(Nu)), a = Math.max.apply(Math, r.map(Nu)), c = l && l.text && l.vector, { text: f, vector: h } = c ? l : d0(), m = /* @__PURE__ */ new Map(), g = t.length, y = c0(f, h);
    for (let w = 0; w < g; w++) {
      const [I, D] = t[w], N = wd(D, u), T = y(N, 0);
      m.set(I, T);
    }
    const v = r.length;
    for (let w = 0; w < v; w++) {
      const [I, D] = r[w], N = wd(D, a), T = m.get(I) ?? 0;
      m.set(I, T + y(0, N));
    }
    return [
      ...m
    ].sort((w, I) => I[1] - w[1]);
  }
  function d0(t) {
    return {
      text: 0.5,
      vector: 0.5
    };
  }
  xd = function(t, r, i) {
    const l = r.mode ?? md;
    if (l === md) return i0(t, r, i);
    if (l === Xy) return l0(t, r);
    if (l === Gy) return u0(t, r);
    throw be("INVALID_SEARCH_MODE", l);
  };
  function p0(t, r, i, l, u) {
    const a = t.data.docs, c = /* @__PURE__ */ new Map(), f = [], h = /* @__PURE__ */ new Set(), m = r.length;
    let g = 0;
    for (let y = 0; y < m; y++) {
      const v = r[y];
      if (typeof v > "u") continue;
      const [w, I] = v;
      if (h.has(w)) continue;
      const D = t.documentsStore.get(a, w), N = Vu(D, u);
      if (!(typeof N > "u" || c.has(N)) && (c.set(N, true), g++, !(g <= i) && (f.push({
        id: Fi(t.internalDocumentIDStore, w),
        score: I,
        document: D
      }), h.add(w), g >= i + l))) break;
    }
    return f;
  }
  function Gp(t, r, i, l) {
    const u = t.data.docs, a = Array.from({
      length: l
    }), c = /* @__PURE__ */ new Set();
    for (let f = i; f < l + i; f++) {
      const h = r[f];
      if (typeof h > "u") break;
      const [m, g] = h;
      if (!c.has(m)) {
        const y = t.documentsStore.get(u, m);
        a[f] = {
          id: Fi(t.internalDocumentIDStore, m),
          score: g,
          document: y
        }, c.add(m);
      }
    }
    return a;
  }
  const Xp = "llm-import-export";
  async function h0() {
    return (await navigator.storage.getDirectory()).getDirectoryHandle(Xp, {
      create: true
    });
  }
  async function Jp(t) {
    return (await h0()).getDirectoryHandle(t, {
      create: true
    });
  }
  async function m0(t, r) {
    let i = t;
    for (const l of r) i = await i.getDirectoryHandle(l, {
      create: true
    });
    return i;
  }
  async function g0(t, r, i) {
    const l = await Jp(t), u = r.split("/"), a = u.pop(), h = await (await (u.length > 0 ? await m0(l, u) : l).getFileHandle(a, {
      create: true
    })).createWritable(), m = i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength);
    await h.write(m), await h.close();
  }
  async function il(t, r) {
    const i = await Jp(t), l = r.split("/"), u = l.pop();
    let a = i;
    for (const m of l) a = await a.getDirectoryHandle(m);
    const h = await (await (await a.getFileHandle(u)).getFile()).arrayBuffer();
    return new Uint8Array(h);
  }
  async function y0() {
    try {
      await (await navigator.storage.getDirectory()).removeEntry(Xp, {
        recursive: true
      });
    } catch {
    }
    await Promise.allSettled([
      caches.delete("webllm/config"),
      caches.delete("webllm/model"),
      caches.delete("webllm/wasm")
    ]);
  }
  function v0() {
    const [t, r] = ye.useState("idle"), [i, l] = ye.useState(0), [u, a] = ye.useState(null), [c, f] = ye.useState(null), [h, m] = ye.useState(null), [g, y] = ye.useState([]), [v, w] = ye.useState([]), I = ye.useCallback(async (N) => {
      try {
        a(null), r("extracting"), l(0), console.log("[Import] Handing zip to unzip-worker:", N.name, `(${(N.size / 1e9).toFixed(2)} GB)`);
        const T = new Worker(new URL("/offline-llm-knowledge-system/import/assets/unzip-worker-CLxpdtiW.js", import.meta.url), {
          type: "module"
        }), b = `extract-${Date.now()}`;
        let L = null;
        if (await new Promise((ue, J) => {
          T.onmessage = (Q) => {
            const ne = Q.data;
            if (ne.id === b) switch (ne.type) {
              case "EXTRACT_MANIFEST":
                L = ne.manifest, m(ne.manifest);
                break;
              case "EXTRACT_PROGRESS":
                l(ne.percent), ne.stage && r(ne.stage);
                break;
              case "EXTRACT_DONE":
                T.terminate(), ue();
                break;
              case "EXTRACT_ERROR":
                T.terminate(), J(new Error(ne.error));
                break;
            }
          }, T.onerror = (Q) => {
            T.terminate(), J(new Error(Q.message ?? "Unzip worker crashed"));
          };
          const V = N.stream();
          T.postMessage({
            type: "EXTRACT",
            id: b,
            stream: V,
            fileSize: N.size
          }, {
            transfer: [
              V
            ]
          });
        }), !L) throw new Error("Manifest was not received from worker");
        const $ = L;
        r("loading-index"), l(82), console.log("[Import] Loading Orama index from OPFS...");
        const ee = await il($.manifest_hash, "chunks.json"), R = JSON.parse(new TextDecoder().decode(ee)), te = await il($.manifest_hash, "orama-index.json.gz").catch(() => null);
        te && ty(te);
        const re = await il($.manifest_hash, "graph.json"), he = JSON.parse(new TextDecoder().decode(re)).edges;
        console.log(`[Import] Graph loaded: ${he.length} edges`);
        const { create: G } = await ap(async () => {
          const { create: ue } = await import("./index-C-0bJB31.js");
          return {
            create: ue
          };
        }, []), B = await G({
          schema: {
            id: "string",
            source: "string",
            text: "string",
            vector: `vector[${$.embed_model.dimensions}]`
          },
          components: {
            tokenizer: {
              stemming: false
            }
          }
        });
        await Ky(B, R.map((ue) => ({
          id: ue.id,
          source: ue.source,
          text: ue.text,
          vector: ue.vector
        }))), y(R), w(he), f(B), l(92), console.log("[Import] Orama index ready."), r("loading-model");
      } catch (T) {
        const b = T instanceof Error ? T.message : String(T);
        console.error("[Import] importZip error:", b), a(b), r("error");
      }
    }, []), D = ye.useCallback(async () => {
      try {
        await y0(), f(null), m(null), y([]), w([]), l(0), a(null), r("idle");
      } catch (N) {
        a(N instanceof Error ? N.message : String(N));
      }
    }, []);
    return {
      stage: t,
      progress: i,
      error: u,
      importZip: I,
      clearKnowledgeBase: D,
      oramaDb: c,
      manifest: h,
      chunks: g,
      graphEdges: v
    };
  }
  function w0({ onFile: t, disabled: r }) {
    const [i, l] = ye.useState(false), [u, a] = ye.useState(null), c = ye.useCallback((y) => {
      if (a(null), !y.name.endsWith(".zip")) {
        a("Please drop a .zip file");
        return;
      }
      t(y);
    }, [
      t
    ]), f = ye.useCallback((y) => {
      y.preventDefault(), y.stopPropagation(), r || l(true);
    }, [
      r
    ]), h = ye.useCallback((y) => {
      y.preventDefault(), y.stopPropagation(), l(false);
    }, []), m = ye.useCallback((y) => {
      if (y.preventDefault(), y.stopPropagation(), l(false), r) return;
      const v = y.dataTransfer.files[0];
      v && c(v);
    }, [
      r,
      c
    ]), g = ye.useCallback((y) => {
      var _a;
      const v = (_a = y.target.files) == null ? void 0 : _a[0];
      v && c(v), y.target.value = "";
    }, [
      c
    ]);
    return j.jsxs("div", {
      style: {
        width: "100%",
        maxWidth: 560,
        margin: "0 auto"
      },
      children: [
        j.jsxs("label", {
          onDragOver: f,
          onDragLeave: h,
          onDrop: m,
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            border: `2px dashed ${i ? "var(--accent)" : "var(--border)"}`,
            borderRadius: 12,
            padding: "56px 32px",
            cursor: r ? "not-allowed" : "pointer",
            background: i ? "rgba(99,102,241,0.08)" : "var(--surface)",
            transition: "border-color 0.15s, background 0.15s",
            opacity: r ? 0.5 : 1
          },
          children: [
            j.jsx("input", {
              type: "file",
              accept: ".zip",
              onChange: g,
              disabled: r,
              style: {
                display: "none"
              }
            }),
            j.jsxs("svg", {
              width: 48,
              height: 48,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: i ? "var(--accent)" : "var(--muted)",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                j.jsx("path", {
                  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                }),
                j.jsx("polyline", {
                  points: "17 8 12 3 7 8"
                }),
                j.jsx("line", {
                  x1: "12",
                  y1: "3",
                  x2: "12",
                  y2: "15"
                })
              ]
            }),
            j.jsxs("div", {
              style: {
                textAlign: "center"
              },
              children: [
                j.jsx("div", {
                  style: {
                    fontWeight: 600,
                    fontSize: 17,
                    color: "var(--text)"
                  },
                  children: "Drop knowledge base zip here"
                }),
                j.jsx("div", {
                  style: {
                    color: "var(--muted)",
                    fontSize: 13,
                    marginTop: 6
                  },
                  children: "or click to browse \u2014 .zip files only"
                })
              ]
            })
          ]
        }),
        u && j.jsx("p", {
          style: {
            color: "var(--danger)",
            marginTop: 12,
            fontSize: 13,
            textAlign: "center"
          },
          children: u
        })
      ]
    });
  }
  const x0 = {
    idle: "Waiting",
    extracting: "Extracting zip to storage...",
    caching: "Caching model files for offline use...",
    "loading-index": "Loading search index...",
    "loading-model": "Loading language model...",
    ready: "Ready",
    error: "Error"
  };
  function kd({ stage: t, progress: r, error: i }) {
    const l = x0[t] ?? t;
    return j.jsxs("div", {
      style: {
        width: "100%",
        maxWidth: 480,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 16
      },
      children: [
        j.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          },
          children: [
            j.jsx("span", {
              style: {
                fontWeight: 600,
                fontSize: 15,
                color: "var(--text)"
              },
              children: l
            }),
            j.jsxs("span", {
              style: {
                fontSize: 13,
                color: "var(--muted)"
              },
              children: [
                Math.round(r),
                "%"
              ]
            })
          ]
        }),
        j.jsx("div", {
          style: {
            height: 8,
            background: "var(--border)",
            borderRadius: 8,
            overflow: "hidden"
          },
          children: j.jsx("div", {
            style: {
              height: "100%",
              width: `${Math.min(100, Math.max(0, r))}%`,
              background: i ? "var(--danger)" : "var(--accent)",
              borderRadius: 8,
              transition: "width 0.3s ease"
            }
          })
        }),
        i && j.jsx("p", {
          style: {
            color: "var(--danger)",
            fontSize: 13,
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.3)",
            borderRadius: 8,
            padding: "10px 14px"
          },
          children: i
        }),
        t === "loading-model" && j.jsx("p", {
          style: {
            color: "var(--muted)",
            fontSize: 12,
            textAlign: "center"
          },
          children: "Uploading model weights to GPU \u2014 this may take a moment."
        })
      ]
    });
  }
  function k0(t, r) {
    const i = {};
    return (t[t.length - 1] === "" ? [
      ...t,
      ""
    ] : t).join((i.padRight ? " " : "") + "," + (i.padLeft === false ? "" : " ")).trim();
  }
  const S0 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, E0 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, I0 = {};
  function Sd(t, r) {
    return (I0.jsx ? E0 : S0).test(t);
  }
  const C0 = /[ \t\n\f\r]/g;
  function T0(t) {
    return typeof t == "object" ? t.type === "text" ? Ed(t.value) : false : Ed(t);
  }
  function Ed(t) {
    return t.replace(C0, "") === "";
  }
  class ji {
    constructor(r, i, l) {
      this.normal = i, this.property = r, l && (this.space = l);
    }
  }
  ji.prototype.normal = {};
  ji.prototype.property = {};
  ji.prototype.space = void 0;
  function Zp(t, r) {
    const i = {}, l = {};
    for (const u of t) Object.assign(i, u.property), Object.assign(l, u.normal);
    return new ji(i, l, r);
  }
  function Du(t) {
    return t.toLowerCase();
  }
  class xt {
    constructor(r, i) {
      this.attribute = i, this.property = r;
    }
  }
  xt.prototype.attribute = "";
  xt.prototype.booleanish = false;
  xt.prototype.boolean = false;
  xt.prototype.commaOrSpaceSeparated = false;
  xt.prototype.commaSeparated = false;
  xt.prototype.defined = false;
  xt.prototype.mustUseProperty = false;
  xt.prototype.number = false;
  xt.prototype.overloadedBoolean = false;
  xt.prototype.property = "";
  xt.prototype.spaceSeparated = false;
  xt.prototype.space = void 0;
  let P0 = 0;
  const Se = rr(), Ke = rr(), Ou = rr(), Y = rr(), Le = rr(), Lr = rr(), Tt = rr();
  function rr() {
    return 2 ** ++P0;
  }
  const Au = Object.freeze(Object.defineProperty({
    __proto__: null,
    boolean: Se,
    booleanish: Ke,
    commaOrSpaceSeparated: Tt,
    commaSeparated: Lr,
    number: Y,
    overloadedBoolean: Ou,
    spaceSeparated: Le
  }, Symbol.toStringTag, {
    value: "Module"
  })), hu = Object.keys(Au);
  class Gu extends xt {
    constructor(r, i, l, u) {
      let a = -1;
      if (super(r, i), Id(this, "space", u), typeof l == "number") for (; ++a < hu.length; ) {
        const c = hu[a];
        Id(this, hu[a], (l & Au[c]) === Au[c]);
      }
    }
  }
  Gu.prototype.defined = true;
  function Id(t, r, i) {
    i && (t[r] = i);
  }
  function Mr(t) {
    const r = {}, i = {};
    for (const [l, u] of Object.entries(t.properties)) {
      const a = new Gu(l, t.transform(t.attributes || {}, l), u, t.space);
      t.mustUseProperty && t.mustUseProperty.includes(l) && (a.mustUseProperty = true), r[l] = a, i[Du(l)] = l, i[Du(a.attribute)] = l;
    }
    return new ji(r, i, t.space);
  }
  const eh = Mr({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Ke,
      ariaAutoComplete: null,
      ariaBusy: Ke,
      ariaChecked: Ke,
      ariaColCount: Y,
      ariaColIndex: Y,
      ariaColSpan: Y,
      ariaControls: Le,
      ariaCurrent: null,
      ariaDescribedBy: Le,
      ariaDetails: null,
      ariaDisabled: Ke,
      ariaDropEffect: Le,
      ariaErrorMessage: null,
      ariaExpanded: Ke,
      ariaFlowTo: Le,
      ariaGrabbed: Ke,
      ariaHasPopup: null,
      ariaHidden: Ke,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: Le,
      ariaLevel: Y,
      ariaLive: null,
      ariaModal: Ke,
      ariaMultiLine: Ke,
      ariaMultiSelectable: Ke,
      ariaOrientation: null,
      ariaOwns: Le,
      ariaPlaceholder: null,
      ariaPosInSet: Y,
      ariaPressed: Ke,
      ariaReadOnly: Ke,
      ariaRelevant: null,
      ariaRequired: Ke,
      ariaRoleDescription: Le,
      ariaRowCount: Y,
      ariaRowIndex: Y,
      ariaRowSpan: Y,
      ariaSelected: Ke,
      ariaSetSize: Y,
      ariaSort: null,
      ariaValueMax: Y,
      ariaValueMin: Y,
      ariaValueNow: Y,
      ariaValueText: null,
      role: null
    },
    transform(t, r) {
      return r === "role" ? r : "aria-" + r.slice(4).toLowerCase();
    }
  });
  function th(t, r) {
    return r in t ? t[r] : r;
  }
  function nh(t, r) {
    return th(t, r.toLowerCase());
  }
  const _0 = Mr({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    mustUseProperty: [
      "checked",
      "multiple",
      "muted",
      "selected"
    ],
    properties: {
      abbr: null,
      accept: Lr,
      acceptCharset: Le,
      accessKey: Le,
      action: null,
      allow: null,
      allowFullScreen: Se,
      allowPaymentRequest: Se,
      allowUserMedia: Se,
      alt: null,
      as: null,
      async: Se,
      autoCapitalize: null,
      autoComplete: Le,
      autoFocus: Se,
      autoPlay: Se,
      blocking: Le,
      capture: null,
      charSet: null,
      checked: Se,
      cite: null,
      className: Le,
      cols: Y,
      colSpan: null,
      content: null,
      contentEditable: Ke,
      controls: Se,
      controlsList: Le,
      coords: Y | Lr,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Se,
      defer: Se,
      dir: null,
      dirName: null,
      disabled: Se,
      download: Ou,
      draggable: Ke,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Se,
      formTarget: null,
      headers: Le,
      height: Y,
      hidden: Ou,
      high: Y,
      href: null,
      hrefLang: null,
      htmlFor: Le,
      httpEquiv: Le,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: Se,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Se,
      itemId: null,
      itemProp: Le,
      itemRef: Le,
      itemScope: Se,
      itemType: Le,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Se,
      low: Y,
      manifest: null,
      max: null,
      maxLength: Y,
      media: null,
      method: null,
      min: null,
      minLength: Y,
      multiple: Se,
      muted: Se,
      name: null,
      nonce: null,
      noModule: Se,
      noValidate: Se,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: Se,
      optimum: Y,
      pattern: null,
      ping: Le,
      placeholder: null,
      playsInline: Se,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: Se,
      referrerPolicy: null,
      rel: Le,
      required: Se,
      reversed: Se,
      rows: Y,
      rowSpan: Y,
      sandbox: Le,
      scope: null,
      scoped: Se,
      seamless: Se,
      selected: Se,
      shadowRootClonable: Se,
      shadowRootDelegatesFocus: Se,
      shadowRootMode: null,
      shape: null,
      size: Y,
      sizes: null,
      slot: null,
      span: Y,
      spellCheck: Ke,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: Y,
      step: null,
      style: null,
      tabIndex: Y,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Se,
      useMap: null,
      value: Ke,
      width: Y,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Le,
      axis: null,
      background: null,
      bgColor: null,
      border: Y,
      borderColor: null,
      bottomMargin: Y,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: Se,
      declare: Se,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: Y,
      leftMargin: Y,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: Y,
      marginWidth: Y,
      noResize: Se,
      noHref: Se,
      noShade: Se,
      noWrap: Se,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: Y,
      rules: null,
      scheme: null,
      scrolling: Ke,
      standby: null,
      summary: null,
      text: null,
      topMargin: Y,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: Y,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Se,
      disableRemotePlayback: Se,
      prefix: null,
      property: null,
      results: Y,
      security: null,
      unselectable: null
    },
    space: "html",
    transform: nh
  }), N0 = Mr({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin"
    },
    properties: {
      about: Tt,
      accentHeight: Y,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: Y,
      amplitude: Y,
      arabicForm: null,
      ascent: Y,
      attributeName: null,
      attributeType: null,
      azimuth: Y,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: Y,
      by: null,
      calcMode: null,
      capHeight: Y,
      className: Le,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: Y,
      diffuseConstant: Y,
      direction: null,
      display: null,
      dur: null,
      divisor: Y,
      dominantBaseline: null,
      download: Se,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: Y,
      enableBackground: null,
      end: null,
      event: null,
      exponent: Y,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: Y,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Lr,
      g2: Lr,
      glyphName: Lr,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: Y,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: Y,
      horizOriginX: Y,
      horizOriginY: Y,
      id: null,
      ideographic: Y,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: Y,
      k: Y,
      k1: Y,
      k2: Y,
      k3: Y,
      k4: Y,
      kernelMatrix: Tt,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: Y,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: Y,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: Y,
      overlineThickness: Y,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: Y,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Le,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: Y,
      pointsAtY: Y,
      pointsAtZ: Y,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Tt,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Tt,
      rev: Tt,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Tt,
      requiredFeatures: Tt,
      requiredFonts: Tt,
      requiredFormats: Tt,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: Y,
      specularExponent: Y,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: Y,
      strikethroughThickness: Y,
      string: null,
      stroke: null,
      strokeDashArray: Tt,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: Y,
      strokeOpacity: Y,
      strokeWidth: null,
      style: null,
      surfaceScale: Y,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Tt,
      tabIndex: Y,
      tableValues: null,
      target: null,
      targetX: Y,
      targetY: Y,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Tt,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: Y,
      underlineThickness: Y,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: Y,
      values: null,
      vAlphabetic: Y,
      vMathematical: Y,
      vectorEffect: null,
      vHanging: Y,
      vIdeographic: Y,
      version: null,
      vertAdvY: Y,
      vertOriginX: Y,
      vertOriginY: Y,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: Y,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    },
    space: "svg",
    transform: th
  }), rh = Mr({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    },
    space: "xlink",
    transform(t, r) {
      return "xlink:" + r.slice(5).toLowerCase();
    }
  }), ih = Mr({
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    properties: {
      xmlnsXLink: null,
      xmlns: null
    },
    space: "xmlns",
    transform: nh
  }), oh = Mr({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null
    },
    space: "xml",
    transform(t, r) {
      return "xml:" + r.slice(3).toLowerCase();
    }
  }), D0 = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink"
  }, O0 = /[A-Z]/g, Cd = /-[a-z]/g, A0 = /^data[-\w.:]+$/i;
  function R0(t, r) {
    const i = Du(r);
    let l = r, u = xt;
    if (i in t.normal) return t.property[t.normal[i]];
    if (i.length > 4 && i.slice(0, 4) === "data" && A0.test(r)) {
      if (r.charAt(4) === "-") {
        const a = r.slice(5).replace(Cd, z0);
        l = "data" + a.charAt(0).toUpperCase() + a.slice(1);
      } else {
        const a = r.slice(4);
        if (!Cd.test(a)) {
          let c = a.replace(O0, L0);
          c.charAt(0) !== "-" && (c = "-" + c), r = "data" + c;
        }
      }
      u = Gu;
    }
    return new u(l, r);
  }
  function L0(t) {
    return "-" + t.toLowerCase();
  }
  function z0(t) {
    return t.charAt(1).toUpperCase();
  }
  const b0 = Zp([
    eh,
    _0,
    rh,
    ih,
    oh
  ], "html"), Xu = Zp([
    eh,
    N0,
    rh,
    ih,
    oh
  ], "svg");
  function M0(t) {
    return t.join(" ").trim();
  }
  var Dr = {}, mu, Td;
  function F0() {
    if (Td) return mu;
    Td = 1;
    var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, u = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, f = /^\s+|\s+$/g, h = `
`, m = "/", g = "*", y = "", v = "comment", w = "declaration";
    function I(N, T) {
      if (typeof N != "string") throw new TypeError("First argument must be a string");
      if (!N) return [];
      T = T || {};
      var b = 1, L = 1;
      function $(J) {
        var V = J.match(r);
        V && (b += V.length);
        var Q = J.lastIndexOf(h);
        L = ~Q ? J.length - Q : L + J.length;
      }
      function ee() {
        var J = {
          line: b,
          column: L
        };
        return function(V) {
          return V.position = new R(J), le(), V;
        };
      }
      function R(J) {
        this.start = J, this.end = {
          line: b,
          column: L
        }, this.source = T.source;
      }
      R.prototype.content = N;
      function te(J) {
        var V = new Error(T.source + ":" + b + ":" + L + ": " + J);
        if (V.reason = J, V.filename = T.source, V.line = b, V.column = L, V.source = N, !T.silent) throw V;
      }
      function re(J) {
        var V = J.exec(N);
        if (V) {
          var Q = V[0];
          return $(Q), N = N.slice(Q.length), V;
        }
      }
      function le() {
        re(i);
      }
      function he(J) {
        var V;
        for (J = J || []; V = G(); ) V !== false && J.push(V);
        return J;
      }
      function G() {
        var J = ee();
        if (!(m != N.charAt(0) || g != N.charAt(1))) {
          for (var V = 2; y != N.charAt(V) && (g != N.charAt(V) || m != N.charAt(V + 1)); ) ++V;
          if (V += 2, y === N.charAt(V - 1)) return te("End of comment missing");
          var Q = N.slice(2, V - 2);
          return L += 2, $(Q), N = N.slice(V), L += 2, J({
            type: v,
            comment: Q
          });
        }
      }
      function B() {
        var J = ee(), V = re(l);
        if (V) {
          if (G(), !re(u)) return te("property missing ':'");
          var Q = re(a), ne = J({
            type: w,
            property: D(V[0].replace(t, y)),
            value: Q ? D(Q[0].replace(t, y)) : y
          });
          return re(c), ne;
        }
      }
      function ue() {
        var J = [];
        he(J);
        for (var V; V = B(); ) V !== false && (J.push(V), he(J));
        return J;
      }
      return le(), ue();
    }
    function D(N) {
      return N ? N.replace(f, y) : y;
    }
    return mu = I, mu;
  }
  var Pd;
  function j0() {
    if (Pd) return Dr;
    Pd = 1;
    var t = Dr && Dr.__importDefault || function(l) {
      return l && l.__esModule ? l : {
        default: l
      };
    };
    Object.defineProperty(Dr, "__esModule", {
      value: true
    }), Dr.default = i;
    const r = t(F0());
    function i(l, u) {
      let a = null;
      if (!l || typeof l != "string") return a;
      const c = (0, r.default)(l), f = typeof u == "function";
      return c.forEach((h) => {
        if (h.type !== "declaration") return;
        const { property: m, value: g } = h;
        f ? u(m, g, h) : g && (a = a || {}, a[m] = g);
      }), a;
    }
    return Dr;
  }
  var Ti = {}, _d;
  function B0() {
    if (_d) return Ti;
    _d = 1, Object.defineProperty(Ti, "__esModule", {
      value: true
    }), Ti.camelCase = void 0;
    var t = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, i = /^[^-]+$/, l = /^-(webkit|moz|ms|o|khtml)-/, u = /^-(ms)-/, a = function(m) {
      return !m || i.test(m) || t.test(m);
    }, c = function(m, g) {
      return g.toUpperCase();
    }, f = function(m, g) {
      return "".concat(g, "-");
    }, h = function(m, g) {
      return g === void 0 && (g = {}), a(m) ? m : (m = m.toLowerCase(), g.reactCompat ? m = m.replace(u, f) : m = m.replace(l, f), m.replace(r, c));
    };
    return Ti.camelCase = h, Ti;
  }
  var Pi, Nd;
  function U0() {
    if (Nd) return Pi;
    Nd = 1;
    var t = Pi && Pi.__importDefault || function(u) {
      return u && u.__esModule ? u : {
        default: u
      };
    }, r = t(j0()), i = B0();
    function l(u, a) {
      var c = {};
      return !u || typeof u != "string" || (0, r.default)(u, function(f, h) {
        f && h && (c[(0, i.camelCase)(f, a)] = h);
      }), c;
    }
    return l.default = l, Pi = l, Pi;
  }
  var V0 = U0();
  const H0 = al(V0), lh = sh("end"), Ju = sh("start");
  function sh(t) {
    return r;
    function r(i) {
      const l = i && i.position && i.position[t] || {};
      if (typeof l.line == "number" && l.line > 0 && typeof l.column == "number" && l.column > 0) return {
        line: l.line,
        column: l.column,
        offset: typeof l.offset == "number" && l.offset > -1 ? l.offset : void 0
      };
    }
  }
  function W0(t) {
    const r = Ju(t), i = lh(t);
    if (r && i) return {
      start: r,
      end: i
    };
  }
  function Ai(t) {
    return !t || typeof t != "object" ? "" : "position" in t || "type" in t ? Dd(t.position) : "start" in t || "end" in t ? Dd(t) : "line" in t || "column" in t ? Ru(t) : "";
  }
  function Ru(t) {
    return Od(t && t.line) + ":" + Od(t && t.column);
  }
  function Dd(t) {
    return Ru(t && t.start) + "-" + Ru(t && t.end);
  }
  function Od(t) {
    return t && typeof t == "number" ? t : 1;
  }
  class at extends Error {
    constructor(r, i, l) {
      super(), typeof i == "string" && (l = i, i = void 0);
      let u = "", a = {}, c = false;
      if (i && ("line" in i && "column" in i ? a = {
        place: i
      } : "start" in i && "end" in i ? a = {
        place: i
      } : "type" in i ? a = {
        ancestors: [
          i
        ],
        place: i.position
      } : a = {
        ...i
      }), typeof r == "string" ? u = r : !a.cause && r && (c = true, u = r.message, a.cause = r), !a.ruleId && !a.source && typeof l == "string") {
        const h = l.indexOf(":");
        h === -1 ? a.ruleId = l : (a.source = l.slice(0, h), a.ruleId = l.slice(h + 1));
      }
      if (!a.place && a.ancestors && a.ancestors) {
        const h = a.ancestors[a.ancestors.length - 1];
        h && (a.place = h.position);
      }
      const f = a.place && "start" in a.place ? a.place.start : a.place;
      this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = f ? f.column : void 0, this.fatal = void 0, this.file = "", this.message = u, this.line = f ? f.line : void 0, this.name = Ai(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = c && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
    }
  }
  at.prototype.file = "";
  at.prototype.name = "";
  at.prototype.reason = "";
  at.prototype.message = "";
  at.prototype.stack = "";
  at.prototype.column = void 0;
  at.prototype.line = void 0;
  at.prototype.ancestors = void 0;
  at.prototype.cause = void 0;
  at.prototype.fatal = void 0;
  at.prototype.place = void 0;
  at.prototype.ruleId = void 0;
  at.prototype.source = void 0;
  const Zu = {}.hasOwnProperty, $0 = /* @__PURE__ */ new Map(), q0 = /[A-Z]/g, Y0 = /* @__PURE__ */ new Set([
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr"
  ]), Q0 = /* @__PURE__ */ new Set([
    "td",
    "th"
  ]), uh = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function K0(t, r) {
    if (!r || r.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const i = r.filePath || void 0;
    let l;
    if (r.development) {
      if (typeof r.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
      l = rv(i, r.jsxDEV);
    } else {
      if (typeof r.jsx != "function") throw new TypeError("Expected `jsx` in production options");
      if (typeof r.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
      l = nv(i, r.jsx, r.jsxs);
    }
    const u = {
      Fragment: r.Fragment,
      ancestors: [],
      components: r.components || {},
      create: l,
      elementAttributeNameCase: r.elementAttributeNameCase || "react",
      evaluater: r.createEvaluater ? r.createEvaluater() : void 0,
      filePath: i,
      ignoreInvalidStyle: r.ignoreInvalidStyle || false,
      passKeys: r.passKeys !== false,
      passNode: r.passNode || false,
      schema: r.space === "svg" ? Xu : b0,
      stylePropertyNameCase: r.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: r.tableCellAlignToStyle !== false
    }, a = ah(u, t, void 0);
    return a && typeof a != "string" ? a : u.create(t, u.Fragment, {
      children: a || void 0
    }, void 0);
  }
  function ah(t, r, i) {
    if (r.type === "element") return G0(t, r, i);
    if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression") return X0(t, r);
    if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement") return Z0(t, r, i);
    if (r.type === "mdxjsEsm") return J0(t, r);
    if (r.type === "root") return ev(t, r, i);
    if (r.type === "text") return tv(t, r);
  }
  function G0(t, r, i) {
    const l = t.schema;
    let u = l;
    r.tagName.toLowerCase() === "svg" && l.space === "html" && (u = Xu, t.schema = u), t.ancestors.push(r);
    const a = fh(t, r.tagName, false), c = iv(t, r);
    let f = ta(t, r);
    return Y0.has(r.tagName) && (f = f.filter(function(h) {
      return typeof h == "string" ? !T0(h) : true;
    })), ch(t, c, a, r), ea(c, f), t.ancestors.pop(), t.schema = l, t.create(r, a, c, i);
  }
  function X0(t, r) {
    if (r.data && r.data.estree && t.evaluater) {
      const l = r.data.estree.body[0];
      return l.type, t.evaluater.evaluateExpression(l.expression);
    }
    zi(t, r.position);
  }
  function J0(t, r) {
    if (r.data && r.data.estree && t.evaluater) return t.evaluater.evaluateProgram(r.data.estree);
    zi(t, r.position);
  }
  function Z0(t, r, i) {
    const l = t.schema;
    let u = l;
    r.name === "svg" && l.space === "html" && (u = Xu, t.schema = u), t.ancestors.push(r);
    const a = r.name === null ? t.Fragment : fh(t, r.name, true), c = ov(t, r), f = ta(t, r);
    return ch(t, c, a, r), ea(c, f), t.ancestors.pop(), t.schema = l, t.create(r, a, c, i);
  }
  function ev(t, r, i) {
    const l = {};
    return ea(l, ta(t, r)), t.create(r, t.Fragment, l, i);
  }
  function tv(t, r) {
    return r.value;
  }
  function ch(t, r, i, l) {
    typeof i != "string" && i !== t.Fragment && t.passNode && (r.node = l);
  }
  function ea(t, r) {
    if (r.length > 0) {
      const i = r.length > 1 ? r : r[0];
      i && (t.children = i);
    }
  }
  function nv(t, r, i) {
    return l;
    function l(u, a, c, f) {
      const m = Array.isArray(c.children) ? i : r;
      return f ? m(a, c, f) : m(a, c);
    }
  }
  function rv(t, r) {
    return i;
    function i(l, u, a, c) {
      const f = Array.isArray(a.children), h = Ju(l);
      return r(u, a, c, f, {
        columnNumber: h ? h.column - 1 : void 0,
        fileName: t,
        lineNumber: h ? h.line : void 0
      }, void 0);
    }
  }
  function iv(t, r) {
    const i = {};
    let l, u;
    for (u in r.properties) if (u !== "children" && Zu.call(r.properties, u)) {
      const a = lv(t, u, r.properties[u]);
      if (a) {
        const [c, f] = a;
        t.tableCellAlignToStyle && c === "align" && typeof f == "string" && Q0.has(r.tagName) ? l = f : i[c] = f;
      }
    }
    if (l) {
      const a = i.style || (i.style = {});
      a[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = l;
    }
    return i;
  }
  function ov(t, r) {
    const i = {};
    for (const l of r.attributes) if (l.type === "mdxJsxExpressionAttribute") if (l.data && l.data.estree && t.evaluater) {
      const a = l.data.estree.body[0];
      a.type;
      const c = a.expression;
      c.type;
      const f = c.properties[0];
      f.type, Object.assign(i, t.evaluater.evaluateExpression(f.argument));
    } else zi(t, r.position);
    else {
      const u = l.name;
      let a;
      if (l.value && typeof l.value == "object") if (l.value.data && l.value.data.estree && t.evaluater) {
        const f = l.value.data.estree.body[0];
        f.type, a = t.evaluater.evaluateExpression(f.expression);
      } else zi(t, r.position);
      else a = l.value === null ? true : l.value;
      i[u] = a;
    }
    return i;
  }
  function ta(t, r) {
    const i = [];
    let l = -1;
    const u = t.passKeys ? /* @__PURE__ */ new Map() : $0;
    for (; ++l < r.children.length; ) {
      const a = r.children[l];
      let c;
      if (t.passKeys) {
        const h = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
        if (h) {
          const m = u.get(h) || 0;
          c = h + "-" + m, u.set(h, m + 1);
        }
      }
      const f = ah(t, a, c);
      f !== void 0 && i.push(f);
    }
    return i;
  }
  function lv(t, r, i) {
    const l = R0(t.schema, r);
    if (!(i == null || typeof i == "number" && Number.isNaN(i))) {
      if (Array.isArray(i) && (i = l.commaSeparated ? k0(i) : M0(i)), l.property === "style") {
        let u = typeof i == "object" ? i : sv(t, String(i));
        return t.stylePropertyNameCase === "css" && (u = uv(u)), [
          "style",
          u
        ];
      }
      return [
        t.elementAttributeNameCase === "react" && l.space ? D0[l.property] || l.property : l.attribute,
        i
      ];
    }
  }
  function sv(t, r) {
    try {
      return H0(r, {
        reactCompat: true
      });
    } catch (i) {
      if (t.ignoreInvalidStyle) return {};
      const l = i, u = new at("Cannot parse `style` attribute", {
        ancestors: t.ancestors,
        cause: l,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw u.file = t.filePath || void 0, u.url = uh + "#cannot-parse-style-attribute", u;
    }
  }
  function fh(t, r, i) {
    let l;
    if (!i) l = {
      type: "Literal",
      value: r
    };
    else if (r.includes(".")) {
      const u = r.split(".");
      let a = -1, c;
      for (; ++a < u.length; ) {
        const f = Sd(u[a]) ? {
          type: "Identifier",
          name: u[a]
        } : {
          type: "Literal",
          value: u[a]
        };
        c = c ? {
          type: "MemberExpression",
          object: c,
          property: f,
          computed: !!(a && f.type === "Literal"),
          optional: false
        } : f;
      }
      l = c;
    } else l = Sd(r) && !/^[a-z]/.test(r) ? {
      type: "Identifier",
      name: r
    } : {
      type: "Literal",
      value: r
    };
    if (l.type === "Literal") {
      const u = l.value;
      return Zu.call(t.components, u) ? t.components[u] : u;
    }
    if (t.evaluater) return t.evaluater.evaluateExpression(l);
    zi(t);
  }
  function zi(t, r) {
    const i = new at("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: t.ancestors,
      place: r,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = t.filePath || void 0, i.url = uh + "#cannot-handle-mdx-estrees-without-createevaluater", i;
  }
  function uv(t) {
    const r = {};
    let i;
    for (i in t) Zu.call(t, i) && (r[av(i)] = t[i]);
    return r;
  }
  function av(t) {
    let r = t.replace(q0, cv);
    return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
  }
  function cv(t) {
    return "-" + t.toLowerCase();
  }
  const gu = {
    action: [
      "form"
    ],
    cite: [
      "blockquote",
      "del",
      "ins",
      "q"
    ],
    data: [
      "object"
    ],
    formAction: [
      "button",
      "input"
    ],
    href: [
      "a",
      "area",
      "base",
      "link"
    ],
    icon: [
      "menuitem"
    ],
    itemId: null,
    manifest: [
      "html"
    ],
    ping: [
      "a",
      "area"
    ],
    poster: [
      "video"
    ],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video"
    ]
  }, fv = {};
  function dv(t, r) {
    const i = fv, l = typeof i.includeImageAlt == "boolean" ? i.includeImageAlt : true, u = typeof i.includeHtml == "boolean" ? i.includeHtml : true;
    return dh(t, l, u);
  }
  function dh(t, r, i) {
    if (pv(t)) {
      if ("value" in t) return t.type === "html" && !i ? "" : t.value;
      if (r && "alt" in t && t.alt) return t.alt;
      if ("children" in t) return Ad(t.children, r, i);
    }
    return Array.isArray(t) ? Ad(t, r, i) : "";
  }
  function Ad(t, r, i) {
    const l = [];
    let u = -1;
    for (; ++u < t.length; ) l[u] = dh(t[u], r, i);
    return l.join("");
  }
  function pv(t) {
    return !!(t && typeof t == "object");
  }
  const Rd = document.createElement("i");
  function na(t) {
    const r = "&" + t + ";";
    Rd.innerHTML = r;
    const i = Rd.textContent;
    return i.charCodeAt(i.length - 1) === 59 && t !== "semi" || i === r ? false : i;
  }
  function rn(t, r, i, l) {
    const u = t.length;
    let a = 0, c;
    if (r < 0 ? r = -r > u ? 0 : u + r : r = r > u ? u : r, i = i > 0 ? i : 0, l.length < 1e4) c = Array.from(l), c.unshift(r, i), t.splice(...c);
    else for (i && t.splice(r, i); a < l.length; ) c = l.slice(a, a + 1e4), c.unshift(r, 0), t.splice(...c), a += 1e4, r += 1e4;
  }
  function jt(t, r) {
    return t.length > 0 ? (rn(t, t.length, 0, r), t) : r;
  }
  const Ld = {}.hasOwnProperty;
  function hv(t) {
    const r = {};
    let i = -1;
    for (; ++i < t.length; ) mv(r, t[i]);
    return r;
  }
  function mv(t, r) {
    let i;
    for (i in r) {
      const u = (Ld.call(t, i) ? t[i] : void 0) || (t[i] = {}), a = r[i];
      let c;
      if (a) for (c in a) {
        Ld.call(u, c) || (u[c] = []);
        const f = a[c];
        gv(u[c], Array.isArray(f) ? f : f ? [
          f
        ] : []);
      }
    }
  }
  function gv(t, r) {
    let i = -1;
    const l = [];
    for (; ++i < r.length; ) (r[i].add === "after" ? t : l).push(r[i]);
    rn(t, 0, 0, l);
  }
  function ph(t, r) {
    const i = Number.parseInt(t, r);
    return i < 9 || i === 11 || i > 13 && i < 32 || i > 126 && i < 160 || i > 55295 && i < 57344 || i > 64975 && i < 65008 || (i & 65535) === 65535 || (i & 65535) === 65534 || i > 1114111 ? "\uFFFD" : String.fromCodePoint(i);
  }
  function zr(t) {
    return t.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }
  const nn = Un(/[A-Za-z]/), Dt = Un(/[\dA-Za-z]/), yv = Un(/[#-'*+\--9=?A-Z^-~]/);
  function Lu(t) {
    return t !== null && (t < 32 || t === 127);
  }
  const zu = Un(/\d/), vv = Un(/[\dA-Fa-f]/), wv = Un(/[!-/:-@[-`{-~]/);
  function xe(t) {
    return t !== null && t < -2;
  }
  function wt(t) {
    return t !== null && (t < 0 || t === 32);
  }
  function Oe(t) {
    return t === -2 || t === -1 || t === 32;
  }
  const xv = Un(new RegExp("\\p{P}|\\p{S}", "u")), kv = Un(/\s/);
  function Un(t) {
    return r;
    function r(i) {
      return i !== null && i > -1 && t.test(String.fromCharCode(i));
    }
  }
  function Fr(t) {
    const r = [];
    let i = -1, l = 0, u = 0;
    for (; ++i < t.length; ) {
      const a = t.charCodeAt(i);
      let c = "";
      if (a === 37 && Dt(t.charCodeAt(i + 1)) && Dt(t.charCodeAt(i + 2))) u = 2;
      else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (c = String.fromCharCode(a));
      else if (a > 55295 && a < 57344) {
        const f = t.charCodeAt(i + 1);
        a < 56320 && f > 56319 && f < 57344 ? (c = String.fromCharCode(a, f), u = 1) : c = "\uFFFD";
      } else c = String.fromCharCode(a);
      c && (r.push(t.slice(l, i), encodeURIComponent(c)), l = i + u + 1, c = ""), u && (i += u, u = 0);
    }
    return r.join("") + t.slice(l);
  }
  function ze(t, r, i, l) {
    const u = l ? l - 1 : Number.POSITIVE_INFINITY;
    let a = 0;
    return c;
    function c(h) {
      return Oe(h) ? (t.enter(i), f(h)) : r(h);
    }
    function f(h) {
      return Oe(h) && a++ < u ? (t.consume(h), f) : (t.exit(i), r(h));
    }
  }
  const Sv = {
    tokenize: Ev
  };
  function Ev(t) {
    const r = t.attempt(this.parser.constructs.contentInitial, l, u);
    let i;
    return r;
    function l(f) {
      if (f === null) {
        t.consume(f);
        return;
      }
      return t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), ze(t, r, "linePrefix");
    }
    function u(f) {
      return t.enter("paragraph"), a(f);
    }
    function a(f) {
      const h = t.enter("chunkText", {
        contentType: "text",
        previous: i
      });
      return i && (i.next = h), i = h, c(f);
    }
    function c(f) {
      if (f === null) {
        t.exit("chunkText"), t.exit("paragraph"), t.consume(f);
        return;
      }
      return xe(f) ? (t.consume(f), t.exit("chunkText"), a) : (t.consume(f), c);
    }
  }
  const Iv = {
    tokenize: Cv
  }, zd = {
    tokenize: Tv
  };
  function Cv(t) {
    const r = this, i = [];
    let l = 0, u, a, c;
    return f;
    function f(L) {
      if (l < i.length) {
        const $ = i[l];
        return r.containerState = $[1], t.attempt($[0].continuation, h, m)(L);
      }
      return m(L);
    }
    function h(L) {
      if (l++, r.containerState._closeFlow) {
        r.containerState._closeFlow = void 0, u && b();
        const $ = r.events.length;
        let ee = $, R;
        for (; ee--; ) if (r.events[ee][0] === "exit" && r.events[ee][1].type === "chunkFlow") {
          R = r.events[ee][1].end;
          break;
        }
        T(l);
        let te = $;
        for (; te < r.events.length; ) r.events[te][1].end = {
          ...R
        }, te++;
        return rn(r.events, ee + 1, 0, r.events.slice($)), r.events.length = te, m(L);
      }
      return f(L);
    }
    function m(L) {
      if (l === i.length) {
        if (!u) return v(L);
        if (u.currentConstruct && u.currentConstruct.concrete) return I(L);
        r.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
      }
      return r.containerState = {}, t.check(zd, g, y)(L);
    }
    function g(L) {
      return u && b(), T(l), v(L);
    }
    function y(L) {
      return r.parser.lazy[r.now().line] = l !== i.length, c = r.now().offset, I(L);
    }
    function v(L) {
      return r.containerState = {}, t.attempt(zd, w, I)(L);
    }
    function w(L) {
      return l++, i.push([
        r.currentConstruct,
        r.containerState
      ]), v(L);
    }
    function I(L) {
      if (L === null) {
        u && b(), T(0), t.consume(L);
        return;
      }
      return u = u || r.parser.flow(r.now()), t.enter("chunkFlow", {
        _tokenizer: u,
        contentType: "flow",
        previous: a
      }), D(L);
    }
    function D(L) {
      if (L === null) {
        N(t.exit("chunkFlow"), true), T(0), t.consume(L);
        return;
      }
      return xe(L) ? (t.consume(L), N(t.exit("chunkFlow")), l = 0, r.interrupt = void 0, f) : (t.consume(L), D);
    }
    function N(L, $) {
      const ee = r.sliceStream(L);
      if ($ && ee.push(null), L.previous = a, a && (a.next = L), a = L, u.defineSkip(L.start), u.write(ee), r.parser.lazy[L.start.line]) {
        let R = u.events.length;
        for (; R--; ) if (u.events[R][1].start.offset < c && (!u.events[R][1].end || u.events[R][1].end.offset > c)) return;
        const te = r.events.length;
        let re = te, le, he;
        for (; re--; ) if (r.events[re][0] === "exit" && r.events[re][1].type === "chunkFlow") {
          if (le) {
            he = r.events[re][1].end;
            break;
          }
          le = true;
        }
        for (T(l), R = te; R < r.events.length; ) r.events[R][1].end = {
          ...he
        }, R++;
        rn(r.events, re + 1, 0, r.events.slice(te)), r.events.length = R;
      }
    }
    function T(L) {
      let $ = i.length;
      for (; $-- > L; ) {
        const ee = i[$];
        r.containerState = ee[1], ee[0].exit.call(r, t);
      }
      i.length = L;
    }
    function b() {
      u.write([
        null
      ]), a = void 0, u = void 0, r.containerState._closeFlow = void 0;
    }
  }
  function Tv(t, r, i) {
    return ze(t, t.attempt(this.parser.constructs.document, r, i), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function bd(t) {
    if (t === null || wt(t) || kv(t)) return 1;
    if (xv(t)) return 2;
  }
  function ra(t, r, i) {
    const l = [];
    let u = -1;
    for (; ++u < t.length; ) {
      const a = t[u].resolveAll;
      a && !l.includes(a) && (r = a(r, i), l.push(a));
    }
    return r;
  }
  const bu = {
    name: "attention",
    resolveAll: Pv,
    tokenize: _v
  };
  function Pv(t, r) {
    let i = -1, l, u, a, c, f, h, m, g;
    for (; ++i < t.length; ) if (t[i][0] === "enter" && t[i][1].type === "attentionSequence" && t[i][1]._close) {
      for (l = i; l--; ) if (t[l][0] === "exit" && t[l][1].type === "attentionSequence" && t[l][1]._open && r.sliceSerialize(t[l][1]).charCodeAt(0) === r.sliceSerialize(t[i][1]).charCodeAt(0)) {
        if ((t[l][1]._close || t[i][1]._open) && (t[i][1].end.offset - t[i][1].start.offset) % 3 && !((t[l][1].end.offset - t[l][1].start.offset + t[i][1].end.offset - t[i][1].start.offset) % 3)) continue;
        h = t[l][1].end.offset - t[l][1].start.offset > 1 && t[i][1].end.offset - t[i][1].start.offset > 1 ? 2 : 1;
        const y = {
          ...t[l][1].end
        }, v = {
          ...t[i][1].start
        };
        Md(y, -h), Md(v, h), c = {
          type: h > 1 ? "strongSequence" : "emphasisSequence",
          start: y,
          end: {
            ...t[l][1].end
          }
        }, f = {
          type: h > 1 ? "strongSequence" : "emphasisSequence",
          start: {
            ...t[i][1].start
          },
          end: v
        }, a = {
          type: h > 1 ? "strongText" : "emphasisText",
          start: {
            ...t[l][1].end
          },
          end: {
            ...t[i][1].start
          }
        }, u = {
          type: h > 1 ? "strong" : "emphasis",
          start: {
            ...c.start
          },
          end: {
            ...f.end
          }
        }, t[l][1].end = {
          ...c.start
        }, t[i][1].start = {
          ...f.end
        }, m = [], t[l][1].end.offset - t[l][1].start.offset && (m = jt(m, [
          [
            "enter",
            t[l][1],
            r
          ],
          [
            "exit",
            t[l][1],
            r
          ]
        ])), m = jt(m, [
          [
            "enter",
            u,
            r
          ],
          [
            "enter",
            c,
            r
          ],
          [
            "exit",
            c,
            r
          ],
          [
            "enter",
            a,
            r
          ]
        ]), m = jt(m, ra(r.parser.constructs.insideSpan.null, t.slice(l + 1, i), r)), m = jt(m, [
          [
            "exit",
            a,
            r
          ],
          [
            "enter",
            f,
            r
          ],
          [
            "exit",
            f,
            r
          ],
          [
            "exit",
            u,
            r
          ]
        ]), t[i][1].end.offset - t[i][1].start.offset ? (g = 2, m = jt(m, [
          [
            "enter",
            t[i][1],
            r
          ],
          [
            "exit",
            t[i][1],
            r
          ]
        ])) : g = 0, rn(t, l - 1, i - l + 3, m), i = l + m.length - g - 2;
        break;
      }
    }
    for (i = -1; ++i < t.length; ) t[i][1].type === "attentionSequence" && (t[i][1].type = "data");
    return t;
  }
  function _v(t, r) {
    const i = this.parser.constructs.attentionMarkers.null, l = this.previous, u = bd(l);
    let a;
    return c;
    function c(h) {
      return a = h, t.enter("attentionSequence"), f(h);
    }
    function f(h) {
      if (h === a) return t.consume(h), f;
      const m = t.exit("attentionSequence"), g = bd(h), y = !g || g === 2 && u || i.includes(h), v = !u || u === 2 && g || i.includes(l);
      return m._open = !!(a === 42 ? y : y && (u || !v)), m._close = !!(a === 42 ? v : v && (g || !y)), r(h);
    }
  }
  function Md(t, r) {
    t.column += r, t.offset += r, t._bufferIndex += r;
  }
  const Nv = {
    name: "autolink",
    tokenize: Dv
  };
  function Dv(t, r, i) {
    let l = 0;
    return u;
    function u(w) {
      return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(w), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), a;
    }
    function a(w) {
      return nn(w) ? (t.consume(w), c) : w === 64 ? i(w) : m(w);
    }
    function c(w) {
      return w === 43 || w === 45 || w === 46 || Dt(w) ? (l = 1, f(w)) : m(w);
    }
    function f(w) {
      return w === 58 ? (t.consume(w), l = 0, h) : (w === 43 || w === 45 || w === 46 || Dt(w)) && l++ < 32 ? (t.consume(w), f) : (l = 0, m(w));
    }
    function h(w) {
      return w === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(w), t.exit("autolinkMarker"), t.exit("autolink"), r) : w === null || w === 32 || w === 60 || Lu(w) ? i(w) : (t.consume(w), h);
    }
    function m(w) {
      return w === 64 ? (t.consume(w), g) : yv(w) ? (t.consume(w), m) : i(w);
    }
    function g(w) {
      return Dt(w) ? y(w) : i(w);
    }
    function y(w) {
      return w === 46 ? (t.consume(w), l = 0, g) : w === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(w), t.exit("autolinkMarker"), t.exit("autolink"), r) : v(w);
    }
    function v(w) {
      if ((w === 45 || Dt(w)) && l++ < 63) {
        const I = w === 45 ? v : y;
        return t.consume(w), I;
      }
      return i(w);
    }
  }
  const gl = {
    partial: true,
    tokenize: Ov
  };
  function Ov(t, r, i) {
    return l;
    function l(a) {
      return Oe(a) ? ze(t, u, "linePrefix")(a) : u(a);
    }
    function u(a) {
      return a === null || xe(a) ? r(a) : i(a);
    }
  }
  const hh = {
    continuation: {
      tokenize: Rv
    },
    exit: Lv,
    name: "blockQuote",
    tokenize: Av
  };
  function Av(t, r, i) {
    const l = this;
    return u;
    function u(c) {
      if (c === 62) {
        const f = l.containerState;
        return f.open || (t.enter("blockQuote", {
          _container: true
        }), f.open = true), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(c), t.exit("blockQuoteMarker"), a;
      }
      return i(c);
    }
    function a(c) {
      return Oe(c) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(c), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), r) : (t.exit("blockQuotePrefix"), r(c));
    }
  }
  function Rv(t, r, i) {
    const l = this;
    return u;
    function u(c) {
      return Oe(c) ? ze(t, a, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(c) : a(c);
    }
    function a(c) {
      return t.attempt(hh, r, i)(c);
    }
  }
  function Lv(t) {
    t.exit("blockQuote");
  }
  const mh = {
    name: "characterEscape",
    tokenize: zv
  };
  function zv(t, r, i) {
    return l;
    function l(a) {
      return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(a), t.exit("escapeMarker"), u;
    }
    function u(a) {
      return wv(a) ? (t.enter("characterEscapeValue"), t.consume(a), t.exit("characterEscapeValue"), t.exit("characterEscape"), r) : i(a);
    }
  }
  const gh = {
    name: "characterReference",
    tokenize: bv
  };
  function bv(t, r, i) {
    const l = this;
    let u = 0, a, c;
    return f;
    function f(y) {
      return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(y), t.exit("characterReferenceMarker"), h;
    }
    function h(y) {
      return y === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(y), t.exit("characterReferenceMarkerNumeric"), m) : (t.enter("characterReferenceValue"), a = 31, c = Dt, g(y));
    }
    function m(y) {
      return y === 88 || y === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(y), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), a = 6, c = vv, g) : (t.enter("characterReferenceValue"), a = 7, c = zu, g(y));
    }
    function g(y) {
      if (y === 59 && u) {
        const v = t.exit("characterReferenceValue");
        return c === Dt && !na(l.sliceSerialize(v)) ? i(y) : (t.enter("characterReferenceMarker"), t.consume(y), t.exit("characterReferenceMarker"), t.exit("characterReference"), r);
      }
      return c(y) && u++ < a ? (t.consume(y), g) : i(y);
    }
  }
  const Fd = {
    partial: true,
    tokenize: Fv
  }, jd = {
    concrete: true,
    name: "codeFenced",
    tokenize: Mv
  };
  function Mv(t, r, i) {
    const l = this, u = {
      partial: true,
      tokenize: ee
    };
    let a = 0, c = 0, f;
    return h;
    function h(R) {
      return m(R);
    }
    function m(R) {
      const te = l.events[l.events.length - 1];
      return a = te && te[1].type === "linePrefix" ? te[2].sliceSerialize(te[1], true).length : 0, f = R, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), g(R);
    }
    function g(R) {
      return R === f ? (c++, t.consume(R), g) : c < 3 ? i(R) : (t.exit("codeFencedFenceSequence"), Oe(R) ? ze(t, y, "whitespace")(R) : y(R));
    }
    function y(R) {
      return R === null || xe(R) ? (t.exit("codeFencedFence"), l.interrupt ? r(R) : t.check(Fd, D, $)(R)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
        contentType: "string"
      }), v(R));
    }
    function v(R) {
      return R === null || xe(R) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), y(R)) : Oe(R) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), ze(t, w, "whitespace")(R)) : R === 96 && R === f ? i(R) : (t.consume(R), v);
    }
    function w(R) {
      return R === null || xe(R) ? y(R) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
        contentType: "string"
      }), I(R));
    }
    function I(R) {
      return R === null || xe(R) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), y(R)) : R === 96 && R === f ? i(R) : (t.consume(R), I);
    }
    function D(R) {
      return t.attempt(u, $, N)(R);
    }
    function N(R) {
      return t.enter("lineEnding"), t.consume(R), t.exit("lineEnding"), T;
    }
    function T(R) {
      return a > 0 && Oe(R) ? ze(t, b, "linePrefix", a + 1)(R) : b(R);
    }
    function b(R) {
      return R === null || xe(R) ? t.check(Fd, D, $)(R) : (t.enter("codeFlowValue"), L(R));
    }
    function L(R) {
      return R === null || xe(R) ? (t.exit("codeFlowValue"), b(R)) : (t.consume(R), L);
    }
    function $(R) {
      return t.exit("codeFenced"), r(R);
    }
    function ee(R, te, re) {
      let le = 0;
      return he;
      function he(V) {
        return R.enter("lineEnding"), R.consume(V), R.exit("lineEnding"), G;
      }
      function G(V) {
        return R.enter("codeFencedFence"), Oe(V) ? ze(R, B, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(V) : B(V);
      }
      function B(V) {
        return V === f ? (R.enter("codeFencedFenceSequence"), ue(V)) : re(V);
      }
      function ue(V) {
        return V === f ? (le++, R.consume(V), ue) : le >= c ? (R.exit("codeFencedFenceSequence"), Oe(V) ? ze(R, J, "whitespace")(V) : J(V)) : re(V);
      }
      function J(V) {
        return V === null || xe(V) ? (R.exit("codeFencedFence"), te(V)) : re(V);
      }
    }
  }
  function Fv(t, r, i) {
    const l = this;
    return u;
    function u(c) {
      return c === null ? i(c) : (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), a);
    }
    function a(c) {
      return l.parser.lazy[l.now().line] ? i(c) : r(c);
    }
  }
  const yu = {
    name: "codeIndented",
    tokenize: Bv
  }, jv = {
    partial: true,
    tokenize: Uv
  };
  function Bv(t, r, i) {
    const l = this;
    return u;
    function u(m) {
      return t.enter("codeIndented"), ze(t, a, "linePrefix", 5)(m);
    }
    function a(m) {
      const g = l.events[l.events.length - 1];
      return g && g[1].type === "linePrefix" && g[2].sliceSerialize(g[1], true).length >= 4 ? c(m) : i(m);
    }
    function c(m) {
      return m === null ? h(m) : xe(m) ? t.attempt(jv, c, h)(m) : (t.enter("codeFlowValue"), f(m));
    }
    function f(m) {
      return m === null || xe(m) ? (t.exit("codeFlowValue"), c(m)) : (t.consume(m), f);
    }
    function h(m) {
      return t.exit("codeIndented"), r(m);
    }
  }
  function Uv(t, r, i) {
    const l = this;
    return u;
    function u(c) {
      return l.parser.lazy[l.now().line] ? i(c) : xe(c) ? (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), u) : ze(t, a, "linePrefix", 5)(c);
    }
    function a(c) {
      const f = l.events[l.events.length - 1];
      return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], true).length >= 4 ? r(c) : xe(c) ? u(c) : i(c);
    }
  }
  const Vv = {
    name: "codeText",
    previous: Wv,
    resolve: Hv,
    tokenize: $v
  };
  function Hv(t) {
    let r = t.length - 4, i = 3, l, u;
    if ((t[i][1].type === "lineEnding" || t[i][1].type === "space") && (t[r][1].type === "lineEnding" || t[r][1].type === "space")) {
      for (l = i; ++l < r; ) if (t[l][1].type === "codeTextData") {
        t[i][1].type = "codeTextPadding", t[r][1].type = "codeTextPadding", i += 2, r -= 2;
        break;
      }
    }
    for (l = i - 1, r++; ++l <= r; ) u === void 0 ? l !== r && t[l][1].type !== "lineEnding" && (u = l) : (l === r || t[l][1].type === "lineEnding") && (t[u][1].type = "codeTextData", l !== u + 2 && (t[u][1].end = t[l - 1][1].end, t.splice(u + 2, l - u - 2), r -= l - u - 2, l = u + 2), u = void 0);
    return t;
  }
  function Wv(t) {
    return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function $v(t, r, i) {
    let l = 0, u, a;
    return c;
    function c(y) {
      return t.enter("codeText"), t.enter("codeTextSequence"), f(y);
    }
    function f(y) {
      return y === 96 ? (t.consume(y), l++, f) : (t.exit("codeTextSequence"), h(y));
    }
    function h(y) {
      return y === null ? i(y) : y === 32 ? (t.enter("space"), t.consume(y), t.exit("space"), h) : y === 96 ? (a = t.enter("codeTextSequence"), u = 0, g(y)) : xe(y) ? (t.enter("lineEnding"), t.consume(y), t.exit("lineEnding"), h) : (t.enter("codeTextData"), m(y));
    }
    function m(y) {
      return y === null || y === 32 || y === 96 || xe(y) ? (t.exit("codeTextData"), h(y)) : (t.consume(y), m);
    }
    function g(y) {
      return y === 96 ? (t.consume(y), u++, g) : u === l ? (t.exit("codeTextSequence"), t.exit("codeText"), r(y)) : (a.type = "codeTextData", m(y));
    }
  }
  class qv {
    constructor(r) {
      this.left = r ? [
        ...r
      ] : [], this.right = [];
    }
    get(r) {
      if (r < 0 || r >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + r + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
      return r < this.left.length ? this.left[r] : this.right[this.right.length - r + this.left.length - 1];
    }
    get length() {
      return this.left.length + this.right.length;
    }
    shift() {
      return this.setCursor(0), this.right.pop();
    }
    slice(r, i) {
      const l = i ?? Number.POSITIVE_INFINITY;
      return l < this.left.length ? this.left.slice(r, l) : r > this.left.length ? this.right.slice(this.right.length - l + this.left.length, this.right.length - r + this.left.length).reverse() : this.left.slice(r).concat(this.right.slice(this.right.length - l + this.left.length).reverse());
    }
    splice(r, i, l) {
      const u = i || 0;
      this.setCursor(Math.trunc(r));
      const a = this.right.splice(this.right.length - u, Number.POSITIVE_INFINITY);
      return l && _i(this.left, l), a.reverse();
    }
    pop() {
      return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(r) {
      this.setCursor(Number.POSITIVE_INFINITY), this.left.push(r);
    }
    pushMany(r) {
      this.setCursor(Number.POSITIVE_INFINITY), _i(this.left, r);
    }
    unshift(r) {
      this.setCursor(0), this.right.push(r);
    }
    unshiftMany(r) {
      this.setCursor(0), _i(this.right, r.reverse());
    }
    setCursor(r) {
      if (!(r === this.left.length || r > this.left.length && this.right.length === 0 || r < 0 && this.left.length === 0)) if (r < this.left.length) {
        const i = this.left.splice(r, Number.POSITIVE_INFINITY);
        _i(this.right, i.reverse());
      } else {
        const i = this.right.splice(this.left.length + this.right.length - r, Number.POSITIVE_INFINITY);
        _i(this.left, i.reverse());
      }
    }
  }
  function _i(t, r) {
    let i = 0;
    if (r.length < 1e4) t.push(...r);
    else for (; i < r.length; ) t.push(...r.slice(i, i + 1e4)), i += 1e4;
  }
  function yh(t) {
    const r = {};
    let i = -1, l, u, a, c, f, h, m;
    const g = new qv(t);
    for (; ++i < g.length; ) {
      for (; i in r; ) i = r[i];
      if (l = g.get(i), i && l[1].type === "chunkFlow" && g.get(i - 1)[1].type === "listItemPrefix" && (h = l[1]._tokenizer.events, a = 0, a < h.length && h[a][1].type === "lineEndingBlank" && (a += 2), a < h.length && h[a][1].type === "content")) for (; ++a < h.length && h[a][1].type !== "content"; ) h[a][1].type === "chunkText" && (h[a][1]._isInFirstContentOfListItem = true, a++);
      if (l[0] === "enter") l[1].contentType && (Object.assign(r, Yv(g, i)), i = r[i], m = true);
      else if (l[1]._container) {
        for (a = i, u = void 0; a--; ) if (c = g.get(a), c[1].type === "lineEnding" || c[1].type === "lineEndingBlank") c[0] === "enter" && (u && (g.get(u)[1].type = "lineEndingBlank"), c[1].type = "lineEnding", u = a);
        else if (!(c[1].type === "linePrefix" || c[1].type === "listItemIndent")) break;
        u && (l[1].end = {
          ...g.get(u)[1].start
        }, f = g.slice(u, i), f.unshift(l), g.splice(u, i - u + 1, f));
      }
    }
    return rn(t, 0, Number.POSITIVE_INFINITY, g.slice(0)), !m;
  }
  function Yv(t, r) {
    const i = t.get(r)[1], l = t.get(r)[2];
    let u = r - 1;
    const a = [];
    let c = i._tokenizer;
    c || (c = l.parser[i.contentType](i.start), i._contentTypeTextTrailing && (c._contentTypeTextTrailing = true));
    const f = c.events, h = [], m = {};
    let g, y, v = -1, w = i, I = 0, D = 0;
    const N = [
      D
    ];
    for (; w; ) {
      for (; t.get(++u)[1] !== w; ) ;
      a.push(u), w._tokenizer || (g = l.sliceStream(w), w.next || g.push(null), y && c.defineSkip(w.start), w._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = true), c.write(g), w._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = void 0)), y = w, w = w.next;
    }
    for (w = i; ++v < f.length; ) f[v][0] === "exit" && f[v - 1][0] === "enter" && f[v][1].type === f[v - 1][1].type && f[v][1].start.line !== f[v][1].end.line && (D = v + 1, N.push(D), w._tokenizer = void 0, w.previous = void 0, w = w.next);
    for (c.events = [], w ? (w._tokenizer = void 0, w.previous = void 0) : N.pop(), v = N.length; v--; ) {
      const T = f.slice(N[v], N[v + 1]), b = a.pop();
      h.push([
        b,
        b + T.length - 1
      ]), t.splice(b, 2, T);
    }
    for (h.reverse(), v = -1; ++v < h.length; ) m[I + h[v][0]] = I + h[v][1], I += h[v][1] - h[v][0] - 1;
    return m;
  }
  const Qv = {
    resolve: Gv,
    tokenize: Xv
  }, Kv = {
    partial: true,
    tokenize: Jv
  };
  function Gv(t) {
    return yh(t), t;
  }
  function Xv(t, r) {
    let i;
    return l;
    function l(f) {
      return t.enter("content"), i = t.enter("chunkContent", {
        contentType: "content"
      }), u(f);
    }
    function u(f) {
      return f === null ? a(f) : xe(f) ? t.check(Kv, c, a)(f) : (t.consume(f), u);
    }
    function a(f) {
      return t.exit("chunkContent"), t.exit("content"), r(f);
    }
    function c(f) {
      return t.consume(f), t.exit("chunkContent"), i.next = t.enter("chunkContent", {
        contentType: "content",
        previous: i
      }), i = i.next, u;
    }
  }
  function Jv(t, r, i) {
    const l = this;
    return u;
    function u(c) {
      return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), ze(t, a, "linePrefix");
    }
    function a(c) {
      if (c === null || xe(c)) return i(c);
      const f = l.events[l.events.length - 1];
      return !l.parser.constructs.disable.null.includes("codeIndented") && f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], true).length >= 4 ? r(c) : t.interrupt(l.parser.constructs.flow, i, r)(c);
    }
  }
  function vh(t, r, i, l, u, a, c, f, h) {
    const m = h || Number.POSITIVE_INFINITY;
    let g = 0;
    return y;
    function y(T) {
      return T === 60 ? (t.enter(l), t.enter(u), t.enter(a), t.consume(T), t.exit(a), v) : T === null || T === 32 || T === 41 || Lu(T) ? i(T) : (t.enter(l), t.enter(c), t.enter(f), t.enter("chunkString", {
        contentType: "string"
      }), D(T));
    }
    function v(T) {
      return T === 62 ? (t.enter(a), t.consume(T), t.exit(a), t.exit(u), t.exit(l), r) : (t.enter(f), t.enter("chunkString", {
        contentType: "string"
      }), w(T));
    }
    function w(T) {
      return T === 62 ? (t.exit("chunkString"), t.exit(f), v(T)) : T === null || T === 60 || xe(T) ? i(T) : (t.consume(T), T === 92 ? I : w);
    }
    function I(T) {
      return T === 60 || T === 62 || T === 92 ? (t.consume(T), w) : w(T);
    }
    function D(T) {
      return !g && (T === null || T === 41 || wt(T)) ? (t.exit("chunkString"), t.exit(f), t.exit(c), t.exit(l), r(T)) : g < m && T === 40 ? (t.consume(T), g++, D) : T === 41 ? (t.consume(T), g--, D) : T === null || T === 32 || T === 40 || Lu(T) ? i(T) : (t.consume(T), T === 92 ? N : D);
    }
    function N(T) {
      return T === 40 || T === 41 || T === 92 ? (t.consume(T), D) : D(T);
    }
  }
  function wh(t, r, i, l, u, a) {
    const c = this;
    let f = 0, h;
    return m;
    function m(w) {
      return t.enter(l), t.enter(u), t.consume(w), t.exit(u), t.enter(a), g;
    }
    function g(w) {
      return f > 999 || w === null || w === 91 || w === 93 && !h || w === 94 && !f && "_hiddenFootnoteSupport" in c.parser.constructs ? i(w) : w === 93 ? (t.exit(a), t.enter(u), t.consume(w), t.exit(u), t.exit(l), r) : xe(w) ? (t.enter("lineEnding"), t.consume(w), t.exit("lineEnding"), g) : (t.enter("chunkString", {
        contentType: "string"
      }), y(w));
    }
    function y(w) {
      return w === null || w === 91 || w === 93 || xe(w) || f++ > 999 ? (t.exit("chunkString"), g(w)) : (t.consume(w), h || (h = !Oe(w)), w === 92 ? v : y);
    }
    function v(w) {
      return w === 91 || w === 92 || w === 93 ? (t.consume(w), f++, y) : y(w);
    }
  }
  function xh(t, r, i, l, u, a) {
    let c;
    return f;
    function f(v) {
      return v === 34 || v === 39 || v === 40 ? (t.enter(l), t.enter(u), t.consume(v), t.exit(u), c = v === 40 ? 41 : v, h) : i(v);
    }
    function h(v) {
      return v === c ? (t.enter(u), t.consume(v), t.exit(u), t.exit(l), r) : (t.enter(a), m(v));
    }
    function m(v) {
      return v === c ? (t.exit(a), h(c)) : v === null ? i(v) : xe(v) ? (t.enter("lineEnding"), t.consume(v), t.exit("lineEnding"), ze(t, m, "linePrefix")) : (t.enter("chunkString", {
        contentType: "string"
      }), g(v));
    }
    function g(v) {
      return v === c || v === null || xe(v) ? (t.exit("chunkString"), m(v)) : (t.consume(v), v === 92 ? y : g);
    }
    function y(v) {
      return v === c || v === 92 ? (t.consume(v), g) : g(v);
    }
  }
  function Ri(t, r) {
    let i;
    return l;
    function l(u) {
      return xe(u) ? (t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), i = true, l) : Oe(u) ? ze(t, l, i ? "linePrefix" : "lineSuffix")(u) : r(u);
    }
  }
  const Zv = {
    name: "definition",
    tokenize: t1
  }, e1 = {
    partial: true,
    tokenize: n1
  };
  function t1(t, r, i) {
    const l = this;
    let u;
    return a;
    function a(w) {
      return t.enter("definition"), c(w);
    }
    function c(w) {
      return wh.call(l, t, f, i, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(w);
    }
    function f(w) {
      return u = zr(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)), w === 58 ? (t.enter("definitionMarker"), t.consume(w), t.exit("definitionMarker"), h) : i(w);
    }
    function h(w) {
      return wt(w) ? Ri(t, m)(w) : m(w);
    }
    function m(w) {
      return vh(t, g, i, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(w);
    }
    function g(w) {
      return t.attempt(e1, y, y)(w);
    }
    function y(w) {
      return Oe(w) ? ze(t, v, "whitespace")(w) : v(w);
    }
    function v(w) {
      return w === null || xe(w) ? (t.exit("definition"), l.parser.defined.push(u), r(w)) : i(w);
    }
  }
  function n1(t, r, i) {
    return l;
    function l(f) {
      return wt(f) ? Ri(t, u)(f) : i(f);
    }
    function u(f) {
      return xh(t, a, i, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(f);
    }
    function a(f) {
      return Oe(f) ? ze(t, c, "whitespace")(f) : c(f);
    }
    function c(f) {
      return f === null || xe(f) ? r(f) : i(f);
    }
  }
  const r1 = {
    name: "hardBreakEscape",
    tokenize: i1
  };
  function i1(t, r, i) {
    return l;
    function l(a) {
      return t.enter("hardBreakEscape"), t.consume(a), u;
    }
    function u(a) {
      return xe(a) ? (t.exit("hardBreakEscape"), r(a)) : i(a);
    }
  }
  const o1 = {
    name: "headingAtx",
    resolve: l1,
    tokenize: s1
  };
  function l1(t, r) {
    let i = t.length - 2, l = 3, u, a;
    return t[l][1].type === "whitespace" && (l += 2), i - 2 > l && t[i][1].type === "whitespace" && (i -= 2), t[i][1].type === "atxHeadingSequence" && (l === i - 1 || i - 4 > l && t[i - 2][1].type === "whitespace") && (i -= l + 1 === i ? 2 : 4), i > l && (u = {
      type: "atxHeadingText",
      start: t[l][1].start,
      end: t[i][1].end
    }, a = {
      type: "chunkText",
      start: t[l][1].start,
      end: t[i][1].end,
      contentType: "text"
    }, rn(t, l, i - l + 1, [
      [
        "enter",
        u,
        r
      ],
      [
        "enter",
        a,
        r
      ],
      [
        "exit",
        a,
        r
      ],
      [
        "exit",
        u,
        r
      ]
    ])), t;
  }
  function s1(t, r, i) {
    let l = 0;
    return u;
    function u(g) {
      return t.enter("atxHeading"), a(g);
    }
    function a(g) {
      return t.enter("atxHeadingSequence"), c(g);
    }
    function c(g) {
      return g === 35 && l++ < 6 ? (t.consume(g), c) : g === null || wt(g) ? (t.exit("atxHeadingSequence"), f(g)) : i(g);
    }
    function f(g) {
      return g === 35 ? (t.enter("atxHeadingSequence"), h(g)) : g === null || xe(g) ? (t.exit("atxHeading"), r(g)) : Oe(g) ? ze(t, f, "whitespace")(g) : (t.enter("atxHeadingText"), m(g));
    }
    function h(g) {
      return g === 35 ? (t.consume(g), h) : (t.exit("atxHeadingSequence"), f(g));
    }
    function m(g) {
      return g === null || g === 35 || wt(g) ? (t.exit("atxHeadingText"), f(g)) : (t.consume(g), m);
    }
  }
  const u1 = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ], Bd = [
    "pre",
    "script",
    "style",
    "textarea"
  ], a1 = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: d1,
    tokenize: p1
  }, c1 = {
    partial: true,
    tokenize: m1
  }, f1 = {
    partial: true,
    tokenize: h1
  };
  function d1(t) {
    let r = t.length;
    for (; r-- && !(t[r][0] === "enter" && t[r][1].type === "htmlFlow"); ) ;
    return r > 1 && t[r - 2][1].type === "linePrefix" && (t[r][1].start = t[r - 2][1].start, t[r + 1][1].start = t[r - 2][1].start, t.splice(r - 2, 2)), t;
  }
  function p1(t, r, i) {
    const l = this;
    let u, a, c, f, h;
    return m;
    function m(S) {
      return g(S);
    }
    function g(S) {
      return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(S), y;
    }
    function y(S) {
      return S === 33 ? (t.consume(S), v) : S === 47 ? (t.consume(S), a = true, D) : S === 63 ? (t.consume(S), u = 3, l.interrupt ? r : k) : nn(S) ? (t.consume(S), c = String.fromCharCode(S), N) : i(S);
    }
    function v(S) {
      return S === 45 ? (t.consume(S), u = 2, w) : S === 91 ? (t.consume(S), u = 5, f = 0, I) : nn(S) ? (t.consume(S), u = 4, l.interrupt ? r : k) : i(S);
    }
    function w(S) {
      return S === 45 ? (t.consume(S), l.interrupt ? r : k) : i(S);
    }
    function I(S) {
      const oe = "CDATA[";
      return S === oe.charCodeAt(f++) ? (t.consume(S), f === oe.length ? l.interrupt ? r : B : I) : i(S);
    }
    function D(S) {
      return nn(S) ? (t.consume(S), c = String.fromCharCode(S), N) : i(S);
    }
    function N(S) {
      if (S === null || S === 47 || S === 62 || wt(S)) {
        const oe = S === 47, pe = c.toLowerCase();
        return !oe && !a && Bd.includes(pe) ? (u = 1, l.interrupt ? r(S) : B(S)) : u1.includes(c.toLowerCase()) ? (u = 6, oe ? (t.consume(S), T) : l.interrupt ? r(S) : B(S)) : (u = 7, l.interrupt && !l.parser.lazy[l.now().line] ? i(S) : a ? b(S) : L(S));
      }
      return S === 45 || Dt(S) ? (t.consume(S), c += String.fromCharCode(S), N) : i(S);
    }
    function T(S) {
      return S === 62 ? (t.consume(S), l.interrupt ? r : B) : i(S);
    }
    function b(S) {
      return Oe(S) ? (t.consume(S), b) : he(S);
    }
    function L(S) {
      return S === 47 ? (t.consume(S), he) : S === 58 || S === 95 || nn(S) ? (t.consume(S), $) : Oe(S) ? (t.consume(S), L) : he(S);
    }
    function $(S) {
      return S === 45 || S === 46 || S === 58 || S === 95 || Dt(S) ? (t.consume(S), $) : ee(S);
    }
    function ee(S) {
      return S === 61 ? (t.consume(S), R) : Oe(S) ? (t.consume(S), ee) : L(S);
    }
    function R(S) {
      return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? i(S) : S === 34 || S === 39 ? (t.consume(S), h = S, te) : Oe(S) ? (t.consume(S), R) : re(S);
    }
    function te(S) {
      return S === h ? (t.consume(S), h = null, le) : S === null || xe(S) ? i(S) : (t.consume(S), te);
    }
    function re(S) {
      return S === null || S === 34 || S === 39 || S === 47 || S === 60 || S === 61 || S === 62 || S === 96 || wt(S) ? ee(S) : (t.consume(S), re);
    }
    function le(S) {
      return S === 47 || S === 62 || Oe(S) ? L(S) : i(S);
    }
    function he(S) {
      return S === 62 ? (t.consume(S), G) : i(S);
    }
    function G(S) {
      return S === null || xe(S) ? B(S) : Oe(S) ? (t.consume(S), G) : i(S);
    }
    function B(S) {
      return S === 45 && u === 2 ? (t.consume(S), Q) : S === 60 && u === 1 ? (t.consume(S), ne) : S === 62 && u === 4 ? (t.consume(S), _) : S === 63 && u === 3 ? (t.consume(S), k) : S === 93 && u === 5 ? (t.consume(S), X) : xe(S) && (u === 6 || u === 7) ? (t.exit("htmlFlowData"), t.check(c1, M, ue)(S)) : S === null || xe(S) ? (t.exit("htmlFlowData"), ue(S)) : (t.consume(S), B);
    }
    function ue(S) {
      return t.check(f1, J, M)(S);
    }
    function J(S) {
      return t.enter("lineEnding"), t.consume(S), t.exit("lineEnding"), V;
    }
    function V(S) {
      return S === null || xe(S) ? ue(S) : (t.enter("htmlFlowData"), B(S));
    }
    function Q(S) {
      return S === 45 ? (t.consume(S), k) : B(S);
    }
    function ne(S) {
      return S === 47 ? (t.consume(S), c = "", U) : B(S);
    }
    function U(S) {
      if (S === 62) {
        const oe = c.toLowerCase();
        return Bd.includes(oe) ? (t.consume(S), _) : B(S);
      }
      return nn(S) && c.length < 8 ? (t.consume(S), c += String.fromCharCode(S), U) : B(S);
    }
    function X(S) {
      return S === 93 ? (t.consume(S), k) : B(S);
    }
    function k(S) {
      return S === 62 ? (t.consume(S), _) : S === 45 && u === 2 ? (t.consume(S), k) : B(S);
    }
    function _(S) {
      return S === null || xe(S) ? (t.exit("htmlFlowData"), M(S)) : (t.consume(S), _);
    }
    function M(S) {
      return t.exit("htmlFlow"), r(S);
    }
  }
  function h1(t, r, i) {
    const l = this;
    return u;
    function u(c) {
      return xe(c) ? (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), a) : i(c);
    }
    function a(c) {
      return l.parser.lazy[l.now().line] ? i(c) : r(c);
    }
  }
  function m1(t, r, i) {
    return l;
    function l(u) {
      return t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), t.attempt(gl, r, i);
    }
  }
  const g1 = {
    name: "htmlText",
    tokenize: y1
  };
  function y1(t, r, i) {
    const l = this;
    let u, a, c;
    return f;
    function f(k) {
      return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(k), h;
    }
    function h(k) {
      return k === 33 ? (t.consume(k), m) : k === 47 ? (t.consume(k), ee) : k === 63 ? (t.consume(k), L) : nn(k) ? (t.consume(k), re) : i(k);
    }
    function m(k) {
      return k === 45 ? (t.consume(k), g) : k === 91 ? (t.consume(k), a = 0, I) : nn(k) ? (t.consume(k), b) : i(k);
    }
    function g(k) {
      return k === 45 ? (t.consume(k), w) : i(k);
    }
    function y(k) {
      return k === null ? i(k) : k === 45 ? (t.consume(k), v) : xe(k) ? (c = y, ne(k)) : (t.consume(k), y);
    }
    function v(k) {
      return k === 45 ? (t.consume(k), w) : y(k);
    }
    function w(k) {
      return k === 62 ? Q(k) : k === 45 ? v(k) : y(k);
    }
    function I(k) {
      const _ = "CDATA[";
      return k === _.charCodeAt(a++) ? (t.consume(k), a === _.length ? D : I) : i(k);
    }
    function D(k) {
      return k === null ? i(k) : k === 93 ? (t.consume(k), N) : xe(k) ? (c = D, ne(k)) : (t.consume(k), D);
    }
    function N(k) {
      return k === 93 ? (t.consume(k), T) : D(k);
    }
    function T(k) {
      return k === 62 ? Q(k) : k === 93 ? (t.consume(k), T) : D(k);
    }
    function b(k) {
      return k === null || k === 62 ? Q(k) : xe(k) ? (c = b, ne(k)) : (t.consume(k), b);
    }
    function L(k) {
      return k === null ? i(k) : k === 63 ? (t.consume(k), $) : xe(k) ? (c = L, ne(k)) : (t.consume(k), L);
    }
    function $(k) {
      return k === 62 ? Q(k) : L(k);
    }
    function ee(k) {
      return nn(k) ? (t.consume(k), R) : i(k);
    }
    function R(k) {
      return k === 45 || Dt(k) ? (t.consume(k), R) : te(k);
    }
    function te(k) {
      return xe(k) ? (c = te, ne(k)) : Oe(k) ? (t.consume(k), te) : Q(k);
    }
    function re(k) {
      return k === 45 || Dt(k) ? (t.consume(k), re) : k === 47 || k === 62 || wt(k) ? le(k) : i(k);
    }
    function le(k) {
      return k === 47 ? (t.consume(k), Q) : k === 58 || k === 95 || nn(k) ? (t.consume(k), he) : xe(k) ? (c = le, ne(k)) : Oe(k) ? (t.consume(k), le) : Q(k);
    }
    function he(k) {
      return k === 45 || k === 46 || k === 58 || k === 95 || Dt(k) ? (t.consume(k), he) : G(k);
    }
    function G(k) {
      return k === 61 ? (t.consume(k), B) : xe(k) ? (c = G, ne(k)) : Oe(k) ? (t.consume(k), G) : le(k);
    }
    function B(k) {
      return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? i(k) : k === 34 || k === 39 ? (t.consume(k), u = k, ue) : xe(k) ? (c = B, ne(k)) : Oe(k) ? (t.consume(k), B) : (t.consume(k), J);
    }
    function ue(k) {
      return k === u ? (t.consume(k), u = void 0, V) : k === null ? i(k) : xe(k) ? (c = ue, ne(k)) : (t.consume(k), ue);
    }
    function J(k) {
      return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? i(k) : k === 47 || k === 62 || wt(k) ? le(k) : (t.consume(k), J);
    }
    function V(k) {
      return k === 47 || k === 62 || wt(k) ? le(k) : i(k);
    }
    function Q(k) {
      return k === 62 ? (t.consume(k), t.exit("htmlTextData"), t.exit("htmlText"), r) : i(k);
    }
    function ne(k) {
      return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(k), t.exit("lineEnding"), U;
    }
    function U(k) {
      return Oe(k) ? ze(t, X, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(k) : X(k);
    }
    function X(k) {
      return t.enter("htmlTextData"), c(k);
    }
  }
  const ia = {
    name: "labelEnd",
    resolveAll: k1,
    resolveTo: S1,
    tokenize: E1
  }, v1 = {
    tokenize: I1
  }, w1 = {
    tokenize: C1
  }, x1 = {
    tokenize: T1
  };
  function k1(t) {
    let r = -1;
    const i = [];
    for (; ++r < t.length; ) {
      const l = t[r][1];
      if (i.push(t[r]), l.type === "labelImage" || l.type === "labelLink" || l.type === "labelEnd") {
        const u = l.type === "labelImage" ? 4 : 2;
        l.type = "data", r += u;
      }
    }
    return t.length !== i.length && rn(t, 0, t.length, i), t;
  }
  function S1(t, r) {
    let i = t.length, l = 0, u, a, c, f;
    for (; i--; ) if (u = t[i][1], a) {
      if (u.type === "link" || u.type === "labelLink" && u._inactive) break;
      t[i][0] === "enter" && u.type === "labelLink" && (u._inactive = true);
    } else if (c) {
      if (t[i][0] === "enter" && (u.type === "labelImage" || u.type === "labelLink") && !u._balanced && (a = i, u.type !== "labelLink")) {
        l = 2;
        break;
      }
    } else u.type === "labelEnd" && (c = i);
    const h = {
      type: t[a][1].type === "labelLink" ? "link" : "image",
      start: {
        ...t[a][1].start
      },
      end: {
        ...t[t.length - 1][1].end
      }
    }, m = {
      type: "label",
      start: {
        ...t[a][1].start
      },
      end: {
        ...t[c][1].end
      }
    }, g = {
      type: "labelText",
      start: {
        ...t[a + l + 2][1].end
      },
      end: {
        ...t[c - 2][1].start
      }
    };
    return f = [
      [
        "enter",
        h,
        r
      ],
      [
        "enter",
        m,
        r
      ]
    ], f = jt(f, t.slice(a + 1, a + l + 3)), f = jt(f, [
      [
        "enter",
        g,
        r
      ]
    ]), f = jt(f, ra(r.parser.constructs.insideSpan.null, t.slice(a + l + 4, c - 3), r)), f = jt(f, [
      [
        "exit",
        g,
        r
      ],
      t[c - 2],
      t[c - 1],
      [
        "exit",
        m,
        r
      ]
    ]), f = jt(f, t.slice(c + 1)), f = jt(f, [
      [
        "exit",
        h,
        r
      ]
    ]), rn(t, a, t.length, f), t;
  }
  function E1(t, r, i) {
    const l = this;
    let u = l.events.length, a, c;
    for (; u--; ) if ((l.events[u][1].type === "labelImage" || l.events[u][1].type === "labelLink") && !l.events[u][1]._balanced) {
      a = l.events[u][1];
      break;
    }
    return f;
    function f(v) {
      return a ? a._inactive ? y(v) : (c = l.parser.defined.includes(zr(l.sliceSerialize({
        start: a.end,
        end: l.now()
      }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(v), t.exit("labelMarker"), t.exit("labelEnd"), h) : i(v);
    }
    function h(v) {
      return v === 40 ? t.attempt(v1, g, c ? g : y)(v) : v === 91 ? t.attempt(w1, g, c ? m : y)(v) : c ? g(v) : y(v);
    }
    function m(v) {
      return t.attempt(x1, g, y)(v);
    }
    function g(v) {
      return r(v);
    }
    function y(v) {
      return a._balanced = true, i(v);
    }
  }
  function I1(t, r, i) {
    return l;
    function l(y) {
      return t.enter("resource"), t.enter("resourceMarker"), t.consume(y), t.exit("resourceMarker"), u;
    }
    function u(y) {
      return wt(y) ? Ri(t, a)(y) : a(y);
    }
    function a(y) {
      return y === 41 ? g(y) : vh(t, c, f, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y);
    }
    function c(y) {
      return wt(y) ? Ri(t, h)(y) : g(y);
    }
    function f(y) {
      return i(y);
    }
    function h(y) {
      return y === 34 || y === 39 || y === 40 ? xh(t, m, i, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : g(y);
    }
    function m(y) {
      return wt(y) ? Ri(t, g)(y) : g(y);
    }
    function g(y) {
      return y === 41 ? (t.enter("resourceMarker"), t.consume(y), t.exit("resourceMarker"), t.exit("resource"), r) : i(y);
    }
  }
  function C1(t, r, i) {
    const l = this;
    return u;
    function u(f) {
      return wh.call(l, t, a, c, "reference", "referenceMarker", "referenceString")(f);
    }
    function a(f) {
      return l.parser.defined.includes(zr(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1))) ? r(f) : i(f);
    }
    function c(f) {
      return i(f);
    }
  }
  function T1(t, r, i) {
    return l;
    function l(a) {
      return t.enter("reference"), t.enter("referenceMarker"), t.consume(a), t.exit("referenceMarker"), u;
    }
    function u(a) {
      return a === 93 ? (t.enter("referenceMarker"), t.consume(a), t.exit("referenceMarker"), t.exit("reference"), r) : i(a);
    }
  }
  const P1 = {
    name: "labelStartImage",
    resolveAll: ia.resolveAll,
    tokenize: _1
  };
  function _1(t, r, i) {
    const l = this;
    return u;
    function u(f) {
      return t.enter("labelImage"), t.enter("labelImageMarker"), t.consume(f), t.exit("labelImageMarker"), a;
    }
    function a(f) {
      return f === 91 ? (t.enter("labelMarker"), t.consume(f), t.exit("labelMarker"), t.exit("labelImage"), c) : i(f);
    }
    function c(f) {
      return f === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? i(f) : r(f);
    }
  }
  const N1 = {
    name: "labelStartLink",
    resolveAll: ia.resolveAll,
    tokenize: D1
  };
  function D1(t, r, i) {
    const l = this;
    return u;
    function u(c) {
      return t.enter("labelLink"), t.enter("labelMarker"), t.consume(c), t.exit("labelMarker"), t.exit("labelLink"), a;
    }
    function a(c) {
      return c === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? i(c) : r(c);
    }
  }
  const vu = {
    name: "lineEnding",
    tokenize: O1
  };
  function O1(t, r) {
    return i;
    function i(l) {
      return t.enter("lineEnding"), t.consume(l), t.exit("lineEnding"), ze(t, r, "linePrefix");
    }
  }
  const ol = {
    name: "thematicBreak",
    tokenize: A1
  };
  function A1(t, r, i) {
    let l = 0, u;
    return a;
    function a(m) {
      return t.enter("thematicBreak"), c(m);
    }
    function c(m) {
      return u = m, f(m);
    }
    function f(m) {
      return m === u ? (t.enter("thematicBreakSequence"), h(m)) : l >= 3 && (m === null || xe(m)) ? (t.exit("thematicBreak"), r(m)) : i(m);
    }
    function h(m) {
      return m === u ? (t.consume(m), l++, h) : (t.exit("thematicBreakSequence"), Oe(m) ? ze(t, f, "whitespace")(m) : f(m));
    }
  }
  const vt = {
    continuation: {
      tokenize: b1
    },
    exit: F1,
    name: "list",
    tokenize: z1
  }, R1 = {
    partial: true,
    tokenize: j1
  }, L1 = {
    partial: true,
    tokenize: M1
  };
  function z1(t, r, i) {
    const l = this, u = l.events[l.events.length - 1];
    let a = u && u[1].type === "linePrefix" ? u[2].sliceSerialize(u[1], true).length : 0, c = 0;
    return f;
    function f(w) {
      const I = l.containerState.type || (w === 42 || w === 43 || w === 45 ? "listUnordered" : "listOrdered");
      if (I === "listUnordered" ? !l.containerState.marker || w === l.containerState.marker : zu(w)) {
        if (l.containerState.type || (l.containerState.type = I, t.enter(I, {
          _container: true
        })), I === "listUnordered") return t.enter("listItemPrefix"), w === 42 || w === 45 ? t.check(ol, i, m)(w) : m(w);
        if (!l.interrupt || w === 49) return t.enter("listItemPrefix"), t.enter("listItemValue"), h(w);
      }
      return i(w);
    }
    function h(w) {
      return zu(w) && ++c < 10 ? (t.consume(w), h) : (!l.interrupt || c < 2) && (l.containerState.marker ? w === l.containerState.marker : w === 41 || w === 46) ? (t.exit("listItemValue"), m(w)) : i(w);
    }
    function m(w) {
      return t.enter("listItemMarker"), t.consume(w), t.exit("listItemMarker"), l.containerState.marker = l.containerState.marker || w, t.check(gl, l.interrupt ? i : g, t.attempt(R1, v, y));
    }
    function g(w) {
      return l.containerState.initialBlankLine = true, a++, v(w);
    }
    function y(w) {
      return Oe(w) ? (t.enter("listItemPrefixWhitespace"), t.consume(w), t.exit("listItemPrefixWhitespace"), v) : i(w);
    }
    function v(w) {
      return l.containerState.size = a + l.sliceSerialize(t.exit("listItemPrefix"), true).length, r(w);
    }
  }
  function b1(t, r, i) {
    const l = this;
    return l.containerState._closeFlow = void 0, t.check(gl, u, a);
    function u(f) {
      return l.containerState.furtherBlankLines = l.containerState.furtherBlankLines || l.containerState.initialBlankLine, ze(t, r, "listItemIndent", l.containerState.size + 1)(f);
    }
    function a(f) {
      return l.containerState.furtherBlankLines || !Oe(f) ? (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, c(f)) : (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, t.attempt(L1, r, c)(f));
    }
    function c(f) {
      return l.containerState._closeFlow = true, l.interrupt = void 0, ze(t, t.attempt(vt, r, i), "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(f);
    }
  }
  function M1(t, r, i) {
    const l = this;
    return ze(t, u, "listItemIndent", l.containerState.size + 1);
    function u(a) {
      const c = l.events[l.events.length - 1];
      return c && c[1].type === "listItemIndent" && c[2].sliceSerialize(c[1], true).length === l.containerState.size ? r(a) : i(a);
    }
  }
  function F1(t) {
    t.exit(this.containerState.type);
  }
  function j1(t, r, i) {
    const l = this;
    return ze(t, u, "listItemPrefixWhitespace", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function u(a) {
      const c = l.events[l.events.length - 1];
      return !Oe(a) && c && c[1].type === "listItemPrefixWhitespace" ? r(a) : i(a);
    }
  }
  const Ud = {
    name: "setextUnderline",
    resolveTo: B1,
    tokenize: U1
  };
  function B1(t, r) {
    let i = t.length, l, u, a;
    for (; i--; ) if (t[i][0] === "enter") {
      if (t[i][1].type === "content") {
        l = i;
        break;
      }
      t[i][1].type === "paragraph" && (u = i);
    } else t[i][1].type === "content" && t.splice(i, 1), !a && t[i][1].type === "definition" && (a = i);
    const c = {
      type: "setextHeading",
      start: {
        ...t[l][1].start
      },
      end: {
        ...t[t.length - 1][1].end
      }
    };
    return t[u][1].type = "setextHeadingText", a ? (t.splice(u, 0, [
      "enter",
      c,
      r
    ]), t.splice(a + 1, 0, [
      "exit",
      t[l][1],
      r
    ]), t[l][1].end = {
      ...t[a][1].end
    }) : t[l][1] = c, t.push([
      "exit",
      c,
      r
    ]), t;
  }
  function U1(t, r, i) {
    const l = this;
    let u;
    return a;
    function a(m) {
      let g = l.events.length, y;
      for (; g--; ) if (l.events[g][1].type !== "lineEnding" && l.events[g][1].type !== "linePrefix" && l.events[g][1].type !== "content") {
        y = l.events[g][1].type === "paragraph";
        break;
      }
      return !l.parser.lazy[l.now().line] && (l.interrupt || y) ? (t.enter("setextHeadingLine"), u = m, c(m)) : i(m);
    }
    function c(m) {
      return t.enter("setextHeadingLineSequence"), f(m);
    }
    function f(m) {
      return m === u ? (t.consume(m), f) : (t.exit("setextHeadingLineSequence"), Oe(m) ? ze(t, h, "lineSuffix")(m) : h(m));
    }
    function h(m) {
      return m === null || xe(m) ? (t.exit("setextHeadingLine"), r(m)) : i(m);
    }
  }
  const V1 = {
    tokenize: H1
  };
  function H1(t) {
    const r = this, i = t.attempt(gl, l, t.attempt(this.parser.constructs.flowInitial, u, ze(t, t.attempt(this.parser.constructs.flow, u, t.attempt(Qv, u)), "linePrefix")));
    return i;
    function l(a) {
      if (a === null) {
        t.consume(a);
        return;
      }
      return t.enter("lineEndingBlank"), t.consume(a), t.exit("lineEndingBlank"), r.currentConstruct = void 0, i;
    }
    function u(a) {
      if (a === null) {
        t.consume(a);
        return;
      }
      return t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), r.currentConstruct = void 0, i;
    }
  }
  const W1 = {
    resolveAll: Sh()
  }, $1 = kh("string"), q1 = kh("text");
  function kh(t) {
    return {
      resolveAll: Sh(t === "text" ? Y1 : void 0),
      tokenize: r
    };
    function r(i) {
      const l = this, u = this.parser.constructs[t], a = i.attempt(u, c, f);
      return c;
      function c(g) {
        return m(g) ? a(g) : f(g);
      }
      function f(g) {
        if (g === null) {
          i.consume(g);
          return;
        }
        return i.enter("data"), i.consume(g), h;
      }
      function h(g) {
        return m(g) ? (i.exit("data"), a(g)) : (i.consume(g), h);
      }
      function m(g) {
        if (g === null) return true;
        const y = u[g];
        let v = -1;
        if (y) for (; ++v < y.length; ) {
          const w = y[v];
          if (!w.previous || w.previous.call(l, l.previous)) return true;
        }
        return false;
      }
    }
  }
  function Sh(t) {
    return r;
    function r(i, l) {
      let u = -1, a;
      for (; ++u <= i.length; ) a === void 0 ? i[u] && i[u][1].type === "data" && (a = u, u++) : (!i[u] || i[u][1].type !== "data") && (u !== a + 2 && (i[a][1].end = i[u - 1][1].end, i.splice(a + 2, u - a - 2), u = a + 2), a = void 0);
      return t ? t(i, l) : i;
    }
  }
  function Y1(t, r) {
    let i = 0;
    for (; ++i <= t.length; ) if ((i === t.length || t[i][1].type === "lineEnding") && t[i - 1][1].type === "data") {
      const l = t[i - 1][1], u = r.sliceStream(l);
      let a = u.length, c = -1, f = 0, h;
      for (; a--; ) {
        const m = u[a];
        if (typeof m == "string") {
          for (c = m.length; m.charCodeAt(c - 1) === 32; ) f++, c--;
          if (c) break;
          c = -1;
        } else if (m === -2) h = true, f++;
        else if (m !== -1) {
          a++;
          break;
        }
      }
      if (r._contentTypeTextTrailing && i === t.length && (f = 0), f) {
        const m = {
          type: i === t.length || h || f < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? c : l.start._bufferIndex + c,
            _index: l.start._index + a,
            line: l.end.line,
            column: l.end.column - f,
            offset: l.end.offset - f
          },
          end: {
            ...l.end
          }
        };
        l.end = {
          ...m.start
        }, l.start.offset === l.end.offset ? Object.assign(l, m) : (t.splice(i, 0, [
          "enter",
          m,
          r
        ], [
          "exit",
          m,
          r
        ]), i += 2);
      }
      i++;
    }
    return t;
  }
  const Q1 = {
    42: vt,
    43: vt,
    45: vt,
    48: vt,
    49: vt,
    50: vt,
    51: vt,
    52: vt,
    53: vt,
    54: vt,
    55: vt,
    56: vt,
    57: vt,
    62: hh
  }, K1 = {
    91: Zv
  }, G1 = {
    [-2]: yu,
    [-1]: yu,
    32: yu
  }, X1 = {
    35: o1,
    42: ol,
    45: [
      Ud,
      ol
    ],
    60: a1,
    61: Ud,
    95: ol,
    96: jd,
    126: jd
  }, J1 = {
    38: gh,
    92: mh
  }, Z1 = {
    [-5]: vu,
    [-4]: vu,
    [-3]: vu,
    33: P1,
    38: gh,
    42: bu,
    60: [
      Nv,
      g1
    ],
    91: N1,
    92: [
      r1,
      mh
    ],
    93: ia,
    95: bu,
    96: Vv
  }, ew = {
    null: [
      bu,
      W1
    ]
  }, tw = {
    null: [
      42,
      95
    ]
  }, nw = {
    null: []
  }, rw = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers: tw,
    contentInitial: K1,
    disable: nw,
    document: Q1,
    flow: X1,
    flowInitial: G1,
    insideSpan: ew,
    string: J1,
    text: Z1
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function iw(t, r, i) {
    let l = {
      _bufferIndex: -1,
      _index: 0,
      line: i && i.line || 1,
      column: i && i.column || 1,
      offset: i && i.offset || 0
    };
    const u = {}, a = [];
    let c = [], f = [];
    const h = {
      attempt: te(ee),
      check: te(R),
      consume: b,
      enter: L,
      exit: $,
      interrupt: te(R, {
        interrupt: true
      })
    }, m = {
      code: null,
      containerState: {},
      defineSkip: D,
      events: [],
      now: I,
      parser: t,
      previous: null,
      sliceSerialize: v,
      sliceStream: w,
      write: y
    };
    let g = r.tokenize.call(m, h);
    return r.resolveAll && a.push(r), m;
    function y(G) {
      return c = jt(c, G), N(), c[c.length - 1] !== null ? [] : (re(r, 0), m.events = ra(a, m.events, m), m.events);
    }
    function v(G, B) {
      return lw(w(G), B);
    }
    function w(G) {
      return ow(c, G);
    }
    function I() {
      const { _bufferIndex: G, _index: B, line: ue, column: J, offset: V } = l;
      return {
        _bufferIndex: G,
        _index: B,
        line: ue,
        column: J,
        offset: V
      };
    }
    function D(G) {
      u[G.line] = G.column, he();
    }
    function N() {
      let G;
      for (; l._index < c.length; ) {
        const B = c[l._index];
        if (typeof B == "string") for (G = l._index, l._bufferIndex < 0 && (l._bufferIndex = 0); l._index === G && l._bufferIndex < B.length; ) T(B.charCodeAt(l._bufferIndex));
        else T(B);
      }
    }
    function T(G) {
      g = g(G);
    }
    function b(G) {
      xe(G) ? (l.line++, l.column = 1, l.offset += G === -3 ? 2 : 1, he()) : G !== -1 && (l.column++, l.offset++), l._bufferIndex < 0 ? l._index++ : (l._bufferIndex++, l._bufferIndex === c[l._index].length && (l._bufferIndex = -1, l._index++)), m.previous = G;
    }
    function L(G, B) {
      const ue = B || {};
      return ue.type = G, ue.start = I(), m.events.push([
        "enter",
        ue,
        m
      ]), f.push(ue), ue;
    }
    function $(G) {
      const B = f.pop();
      return B.end = I(), m.events.push([
        "exit",
        B,
        m
      ]), B;
    }
    function ee(G, B) {
      re(G, B.from);
    }
    function R(G, B) {
      B.restore();
    }
    function te(G, B) {
      return ue;
      function ue(J, V, Q) {
        let ne, U, X, k;
        return Array.isArray(J) ? M(J) : "tokenize" in J ? M([
          J
        ]) : _(J);
        function _(de) {
          return Ce;
          function Ce(ke) {
            const Te = ke !== null && de[ke], He = ke !== null && de.null, Ot = [
              ...Array.isArray(Te) ? Te : Te ? [
                Te
              ] : [],
              ...Array.isArray(He) ? He : He ? [
                He
              ] : []
            ];
            return M(Ot)(ke);
          }
        }
        function M(de) {
          return ne = de, U = 0, de.length === 0 ? Q : S(de[U]);
        }
        function S(de) {
          return Ce;
          function Ce(ke) {
            return k = le(), X = de, de.partial || (m.currentConstruct = de), de.name && m.parser.constructs.disable.null.includes(de.name) ? pe() : de.tokenize.call(B ? Object.assign(Object.create(m), B) : m, h, oe, pe)(ke);
          }
        }
        function oe(de) {
          return G(X, k), V;
        }
        function pe(de) {
          return k.restore(), ++U < ne.length ? S(ne[U]) : Q;
        }
      }
    }
    function re(G, B) {
      G.resolveAll && !a.includes(G) && a.push(G), G.resolve && rn(m.events, B, m.events.length - B, G.resolve(m.events.slice(B), m)), G.resolveTo && (m.events = G.resolveTo(m.events, m));
    }
    function le() {
      const G = I(), B = m.previous, ue = m.currentConstruct, J = m.events.length, V = Array.from(f);
      return {
        from: J,
        restore: Q
      };
      function Q() {
        l = G, m.previous = B, m.currentConstruct = ue, m.events.length = J, f = V, he();
      }
    }
    function he() {
      l.line in u && l.column < 2 && (l.column = u[l.line], l.offset += u[l.line] - 1);
    }
  }
  function ow(t, r) {
    const i = r.start._index, l = r.start._bufferIndex, u = r.end._index, a = r.end._bufferIndex;
    let c;
    if (i === u) c = [
      t[i].slice(l, a)
    ];
    else {
      if (c = t.slice(i, u), l > -1) {
        const f = c[0];
        typeof f == "string" ? c[0] = f.slice(l) : c.shift();
      }
      a > 0 && c.push(t[u].slice(0, a));
    }
    return c;
  }
  function lw(t, r) {
    let i = -1;
    const l = [];
    let u;
    for (; ++i < t.length; ) {
      const a = t[i];
      let c;
      if (typeof a == "string") c = a;
      else switch (a) {
        case -5: {
          c = "\r";
          break;
        }
        case -4: {
          c = `
`;
          break;
        }
        case -3: {
          c = `\r
`;
          break;
        }
        case -2: {
          c = r ? " " : "	";
          break;
        }
        case -1: {
          if (!r && u) continue;
          c = " ";
          break;
        }
        default:
          c = String.fromCharCode(a);
      }
      u = a === -2, l.push(c);
    }
    return l.join("");
  }
  function sw(t) {
    const l = {
      constructs: hv([
        rw,
        ...(t || {}).extensions || []
      ]),
      content: u(Sv),
      defined: [],
      document: u(Iv),
      flow: u(V1),
      lazy: {},
      string: u($1),
      text: u(q1)
    };
    return l;
    function u(a) {
      return c;
      function c(f) {
        return iw(l, a, f);
      }
    }
  }
  function uw(t) {
    for (; !yh(t); ) ;
    return t;
  }
  const Vd = /[\0\t\n\r]/g;
  function aw() {
    let t = 1, r = "", i = true, l;
    return u;
    function u(a, c, f) {
      const h = [];
      let m, g, y, v, w;
      for (a = r + (typeof a == "string" ? a.toString() : new TextDecoder(c || void 0).decode(a)), y = 0, r = "", i && (a.charCodeAt(0) === 65279 && y++, i = void 0); y < a.length; ) {
        if (Vd.lastIndex = y, m = Vd.exec(a), v = m && m.index !== void 0 ? m.index : a.length, w = a.charCodeAt(v), !m) {
          r = a.slice(y);
          break;
        }
        if (w === 10 && y === v && l) h.push(-3), l = void 0;
        else switch (l && (h.push(-5), l = void 0), y < v && (h.push(a.slice(y, v)), t += v - y), w) {
          case 0: {
            h.push(65533), t++;
            break;
          }
          case 9: {
            for (g = Math.ceil(t / 4) * 4, h.push(-2); t++ < g; ) h.push(-1);
            break;
          }
          case 10: {
            h.push(-4), t = 1;
            break;
          }
          default:
            l = true, t = 1;
        }
        y = v + 1;
      }
      return f && (l && h.push(-5), r && h.push(r), h.push(null)), h;
    }
  }
  const cw = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function fw(t) {
    return t.replace(cw, dw);
  }
  function dw(t, r, i) {
    if (r) return r;
    if (i.charCodeAt(0) === 35) {
      const u = i.charCodeAt(1), a = u === 120 || u === 88;
      return ph(i.slice(a ? 2 : 1), a ? 16 : 10);
    }
    return na(i) || t;
  }
  const Eh = {}.hasOwnProperty;
  function pw(t, r, i) {
    return r && typeof r == "object" && (i = r, r = void 0), hw(i)(uw(sw(i).document().write(aw()(t, r, true))));
  }
  function hw(t) {
    const r = {
      transforms: [],
      canContainEols: [
        "emphasis",
        "fragment",
        "heading",
        "paragraph",
        "strong"
      ],
      enter: {
        autolink: a(or),
        autolinkProtocol: le,
        autolinkEmail: le,
        atxHeading: a(Br),
        blockQuote: a(He),
        characterEscape: le,
        characterReference: le,
        codeFenced: a(Ot),
        codeFencedFenceInfo: c,
        codeFencedFenceMeta: c,
        codeIndented: a(Ot, c),
        codeText: a(Vn, c),
        codeTextData: le,
        data: le,
        codeFlowValue: le,
        definition: a(ln),
        definitionDestinationString: c,
        definitionLabelString: c,
        definitionTitleString: c,
        emphasis: a(jr),
        hardBreakEscape: a(Ur),
        hardBreakTrailing: a(Ur),
        htmlFlow: a(ir, c),
        htmlFlowData: le,
        htmlText: a(ir, c),
        htmlTextData: le,
        image: a(Ui),
        label: c,
        link: a(or),
        listItem: a(yn),
        listItemValue: v,
        listOrdered: a(gn, y),
        listUnordered: a(gn),
        paragraph: a(Vr),
        reference: S,
        referenceString: c,
        resourceDestinationString: c,
        resourceTitleString: c,
        setextHeading: a(Br),
        strong: a(Vi),
        thematicBreak: a(Wi)
      },
      exit: {
        atxHeading: h(),
        atxHeadingSequence: ee,
        autolink: h(),
        autolinkEmail: Te,
        autolinkProtocol: ke,
        blockQuote: h(),
        characterEscapeValue: he,
        characterReferenceMarkerHexadecimal: pe,
        characterReferenceMarkerNumeric: pe,
        characterReferenceValue: de,
        characterReference: Ce,
        codeFenced: h(N),
        codeFencedFence: D,
        codeFencedFenceInfo: w,
        codeFencedFenceMeta: I,
        codeFlowValue: he,
        codeIndented: h(T),
        codeText: h(V),
        codeTextData: he,
        data: he,
        definition: h(),
        definitionDestinationString: $,
        definitionLabelString: b,
        definitionTitleString: L,
        emphasis: h(),
        hardBreakEscape: h(B),
        hardBreakTrailing: h(B),
        htmlFlow: h(ue),
        htmlFlowData: he,
        htmlText: h(J),
        htmlTextData: he,
        image: h(ne),
        label: X,
        labelText: U,
        lineEnding: G,
        link: h(Q),
        listItem: h(),
        listOrdered: h(),
        listUnordered: h(),
        paragraph: h(),
        referenceString: oe,
        resourceDestinationString: k,
        resourceTitleString: _,
        resource: M,
        setextHeading: h(re),
        setextHeadingLineSequence: te,
        setextHeadingText: R,
        strong: h(),
        thematicBreak: h()
      }
    };
    Ih(r, (t || {}).mdastExtensions || []);
    const i = {};
    return l;
    function l(F) {
      let Z = {
        type: "root",
        children: []
      };
      const ve = {
        stack: [
          Z
        ],
        tokenStack: [],
        config: r,
        enter: f,
        exit: m,
        buffer: c,
        resume: g,
        data: i
      }, Ee = [];
      let Pe = -1;
      for (; ++Pe < F.length; ) if (F[Pe][1].type === "listOrdered" || F[Pe][1].type === "listUnordered") if (F[Pe][0] === "enter") Ee.push(Pe);
      else {
        const tt = Ee.pop();
        Pe = u(F, tt, Pe);
      }
      for (Pe = -1; ++Pe < F.length; ) {
        const tt = r[F[Pe][0]];
        Eh.call(tt, F[Pe][1].type) && tt[F[Pe][1].type].call(Object.assign({
          sliceSerialize: F[Pe][2].sliceSerialize
        }, ve), F[Pe][1]);
      }
      if (ve.tokenStack.length > 0) {
        const tt = ve.tokenStack[ve.tokenStack.length - 1];
        (tt[1] || Hd).call(ve, void 0, tt[0]);
      }
      for (Z.position = {
        start: jn(F.length > 0 ? F[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }),
        end: jn(F.length > 0 ? F[F.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        })
      }, Pe = -1; ++Pe < r.transforms.length; ) Z = r.transforms[Pe](Z) || Z;
      return Z;
    }
    function u(F, Z, ve) {
      let Ee = Z - 1, Pe = -1, tt = false, sn, At, vn, Hn;
      for (; ++Ee <= ve; ) {
        const nt = F[Ee];
        switch (nt[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            nt[0] === "enter" ? Pe++ : Pe--, Hn = void 0;
            break;
          }
          case "lineEndingBlank": {
            nt[0] === "enter" && (sn && !Hn && !Pe && !vn && (vn = Ee), Hn = void 0);
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            Hn = void 0;
        }
        if (!Pe && nt[0] === "enter" && nt[1].type === "listItemPrefix" || Pe === -1 && nt[0] === "exit" && (nt[1].type === "listUnordered" || nt[1].type === "listOrdered")) {
          if (sn) {
            let Kt = Ee;
            for (At = void 0; Kt--; ) {
              const kt = F[Kt];
              if (kt[1].type === "lineEnding" || kt[1].type === "lineEndingBlank") {
                if (kt[0] === "exit") continue;
                At && (F[At][1].type = "lineEndingBlank", tt = true), kt[1].type = "lineEnding", At = Kt;
              } else if (!(kt[1].type === "linePrefix" || kt[1].type === "blockQuotePrefix" || kt[1].type === "blockQuotePrefixWhitespace" || kt[1].type === "blockQuoteMarker" || kt[1].type === "listItemIndent")) break;
            }
            vn && (!At || vn < At) && (sn._spread = true), sn.end = Object.assign({}, At ? F[At][1].start : nt[1].end), F.splice(At || Ee, 0, [
              "exit",
              sn,
              nt[2]
            ]), Ee++, ve++;
          }
          if (nt[1].type === "listItemPrefix") {
            const Kt = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, nt[1].start),
              end: void 0
            };
            sn = Kt, F.splice(Ee, 0, [
              "enter",
              Kt,
              nt[2]
            ]), Ee++, ve++, vn = void 0, Hn = true;
          }
        }
      }
      return F[Z][1]._spread = tt, ve;
    }
    function a(F, Z) {
      return ve;
      function ve(Ee) {
        f.call(this, F(Ee), Ee), Z && Z.call(this, Ee);
      }
    }
    function c() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function f(F, Z, ve) {
      this.stack[this.stack.length - 1].children.push(F), this.stack.push(F), this.tokenStack.push([
        Z,
        ve || void 0
      ]), F.position = {
        start: jn(Z.start),
        end: void 0
      };
    }
    function h(F) {
      return Z;
      function Z(ve) {
        F && F.call(this, ve), m.call(this, ve);
      }
    }
    function m(F, Z) {
      const ve = this.stack.pop(), Ee = this.tokenStack.pop();
      if (Ee) Ee[0].type !== F.type && (Z ? Z.call(this, F, Ee[0]) : (Ee[1] || Hd).call(this, F, Ee[0]));
      else throw new Error("Cannot close `" + F.type + "` (" + Ai({
        start: F.start,
        end: F.end
      }) + "): it\u2019s not open");
      ve.position.end = jn(F.end);
    }
    function g() {
      return dv(this.stack.pop());
    }
    function y() {
      this.data.expectingFirstListItemValue = true;
    }
    function v(F) {
      if (this.data.expectingFirstListItemValue) {
        const Z = this.stack[this.stack.length - 2];
        Z.start = Number.parseInt(this.sliceSerialize(F), 10), this.data.expectingFirstListItemValue = void 0;
      }
    }
    function w() {
      const F = this.resume(), Z = this.stack[this.stack.length - 1];
      Z.lang = F;
    }
    function I() {
      const F = this.resume(), Z = this.stack[this.stack.length - 1];
      Z.meta = F;
    }
    function D() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }
    function N() {
      const F = this.resume(), Z = this.stack[this.stack.length - 1];
      Z.value = F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }
    function T() {
      const F = this.resume(), Z = this.stack[this.stack.length - 1];
      Z.value = F.replace(/(\r?\n|\r)$/g, "");
    }
    function b(F) {
      const Z = this.resume(), ve = this.stack[this.stack.length - 1];
      ve.label = Z, ve.identifier = zr(this.sliceSerialize(F)).toLowerCase();
    }
    function L() {
      const F = this.resume(), Z = this.stack[this.stack.length - 1];
      Z.title = F;
    }
    function $() {
      const F = this.resume(), Z = this.stack[this.stack.length - 1];
      Z.url = F;
    }
    function ee(F) {
      const Z = this.stack[this.stack.length - 1];
      if (!Z.depth) {
        const ve = this.sliceSerialize(F).length;
        Z.depth = ve;
      }
    }
    function R() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function te(F) {
      const Z = this.stack[this.stack.length - 1];
      Z.depth = this.sliceSerialize(F).codePointAt(0) === 61 ? 1 : 2;
    }
    function re() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function le(F) {
      const ve = this.stack[this.stack.length - 1].children;
      let Ee = ve[ve.length - 1];
      (!Ee || Ee.type !== "text") && (Ee = Hi(), Ee.position = {
        start: jn(F.start),
        end: void 0
      }, ve.push(Ee)), this.stack.push(Ee);
    }
    function he(F) {
      const Z = this.stack.pop();
      Z.value += this.sliceSerialize(F), Z.position.end = jn(F.end);
    }
    function G(F) {
      const Z = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const ve = Z.children[Z.children.length - 1];
        ve.position.end = jn(F.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && r.canContainEols.includes(Z.type) && (le.call(this, F), he.call(this, F));
    }
    function B() {
      this.data.atHardBreak = true;
    }
    function ue() {
      const F = this.resume(), Z = this.stack[this.stack.length - 1];
      Z.value = F;
    }
    function J() {
      const F = this.resume(), Z = this.stack[this.stack.length - 1];
      Z.value = F;
    }
    function V() {
      const F = this.resume(), Z = this.stack[this.stack.length - 1];
      Z.value = F;
    }
    function Q() {
      const F = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const Z = this.data.referenceType || "shortcut";
        F.type += "Reference", F.referenceType = Z, delete F.url, delete F.title;
      } else delete F.identifier, delete F.label;
      this.data.referenceType = void 0;
    }
    function ne() {
      const F = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const Z = this.data.referenceType || "shortcut";
        F.type += "Reference", F.referenceType = Z, delete F.url, delete F.title;
      } else delete F.identifier, delete F.label;
      this.data.referenceType = void 0;
    }
    function U(F) {
      const Z = this.sliceSerialize(F), ve = this.stack[this.stack.length - 2];
      ve.label = fw(Z), ve.identifier = zr(Z).toLowerCase();
    }
    function X() {
      const F = this.stack[this.stack.length - 1], Z = this.resume(), ve = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, ve.type === "link") {
        const Ee = F.children;
        ve.children = Ee;
      } else ve.alt = Z;
    }
    function k() {
      const F = this.resume(), Z = this.stack[this.stack.length - 1];
      Z.url = F;
    }
    function _() {
      const F = this.resume(), Z = this.stack[this.stack.length - 1];
      Z.title = F;
    }
    function M() {
      this.data.inReference = void 0;
    }
    function S() {
      this.data.referenceType = "collapsed";
    }
    function oe(F) {
      const Z = this.resume(), ve = this.stack[this.stack.length - 1];
      ve.label = Z, ve.identifier = zr(this.sliceSerialize(F)).toLowerCase(), this.data.referenceType = "full";
    }
    function pe(F) {
      this.data.characterReferenceType = F.type;
    }
    function de(F) {
      const Z = this.sliceSerialize(F), ve = this.data.characterReferenceType;
      let Ee;
      ve ? (Ee = ph(Z, ve === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Ee = na(Z);
      const Pe = this.stack[this.stack.length - 1];
      Pe.value += Ee;
    }
    function Ce(F) {
      const Z = this.stack.pop();
      Z.position.end = jn(F.end);
    }
    function ke(F) {
      he.call(this, F);
      const Z = this.stack[this.stack.length - 1];
      Z.url = this.sliceSerialize(F);
    }
    function Te(F) {
      he.call(this, F);
      const Z = this.stack[this.stack.length - 1];
      Z.url = "mailto:" + this.sliceSerialize(F);
    }
    function He() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function Ot() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function Vn() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function ln() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function jr() {
      return {
        type: "emphasis",
        children: []
      };
    }
    function Br() {
      return {
        type: "heading",
        depth: 0,
        children: []
      };
    }
    function Ur() {
      return {
        type: "break"
      };
    }
    function ir() {
      return {
        type: "html",
        value: ""
      };
    }
    function Ui() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function or() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function gn(F) {
      return {
        type: "list",
        ordered: F.type === "listOrdered",
        start: null,
        spread: F._spread,
        children: []
      };
    }
    function yn(F) {
      return {
        type: "listItem",
        spread: F._spread,
        checked: null,
        children: []
      };
    }
    function Vr() {
      return {
        type: "paragraph",
        children: []
      };
    }
    function Vi() {
      return {
        type: "strong",
        children: []
      };
    }
    function Hi() {
      return {
        type: "text",
        value: ""
      };
    }
    function Wi() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function jn(t) {
    return {
      line: t.line,
      column: t.column,
      offset: t.offset
    };
  }
  function Ih(t, r) {
    let i = -1;
    for (; ++i < r.length; ) {
      const l = r[i];
      Array.isArray(l) ? Ih(t, l) : mw(t, l);
    }
  }
  function mw(t, r) {
    let i;
    for (i in r) if (Eh.call(r, i)) switch (i) {
      case "canContainEols": {
        const l = r[i];
        l && t[i].push(...l);
        break;
      }
      case "transforms": {
        const l = r[i];
        l && t[i].push(...l);
        break;
      }
      case "enter":
      case "exit": {
        const l = r[i];
        l && Object.assign(t[i], l);
        break;
      }
    }
  }
  function Hd(t, r) {
    throw t ? new Error("Cannot close `" + t.type + "` (" + Ai({
      start: t.start,
      end: t.end
    }) + "): a different token (`" + r.type + "`, " + Ai({
      start: r.start,
      end: r.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + r.type + "`, " + Ai({
      start: r.start,
      end: r.end
    }) + ") is still open");
  }
  function gw(t) {
    const r = this;
    r.parser = i;
    function i(l) {
      return pw(l, {
        ...r.data("settings"),
        ...t,
        extensions: r.data("micromarkExtensions") || [],
        mdastExtensions: r.data("fromMarkdownExtensions") || []
      });
    }
  }
  function yw(t, r) {
    const i = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: t.wrap(t.all(r), true)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function vw(t, r) {
    const i = {
      type: "element",
      tagName: "br",
      properties: {},
      children: []
    };
    return t.patch(r, i), [
      t.applyData(r, i),
      {
        type: "text",
        value: `
`
      }
    ];
  }
  function ww(t, r) {
    const i = r.value ? r.value + `
` : "", l = {}, u = r.lang ? r.lang.split(/\s+/) : [];
    u.length > 0 && (l.className = [
      "language-" + u[0]
    ]);
    let a = {
      type: "element",
      tagName: "code",
      properties: l,
      children: [
        {
          type: "text",
          value: i
        }
      ]
    };
    return r.meta && (a.data = {
      meta: r.meta
    }), t.patch(r, a), a = t.applyData(r, a), a = {
      type: "element",
      tagName: "pre",
      properties: {},
      children: [
        a
      ]
    }, t.patch(r, a), a;
  }
  function xw(t, r) {
    const i = {
      type: "element",
      tagName: "del",
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function kw(t, r) {
    const i = {
      type: "element",
      tagName: "em",
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function Sw(t, r) {
    const i = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", l = String(r.identifier).toUpperCase(), u = Fr(l.toLowerCase()), a = t.footnoteOrder.indexOf(l);
    let c, f = t.footnoteCounts.get(l);
    f === void 0 ? (f = 0, t.footnoteOrder.push(l), c = t.footnoteOrder.length) : c = a + 1, f += 1, t.footnoteCounts.set(l, f);
    const h = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + i + "fn-" + u,
        id: i + "fnref-" + u + (f > 1 ? "-" + f : ""),
        dataFootnoteRef: true,
        ariaDescribedBy: [
          "footnote-label"
        ]
      },
      children: [
        {
          type: "text",
          value: String(c)
        }
      ]
    };
    t.patch(r, h);
    const m = {
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        h
      ]
    };
    return t.patch(r, m), t.applyData(r, m);
  }
  function Ew(t, r) {
    const i = {
      type: "element",
      tagName: "h" + r.depth,
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function Iw(t, r) {
    if (t.options.allowDangerousHtml) {
      const i = {
        type: "raw",
        value: r.value
      };
      return t.patch(r, i), t.applyData(r, i);
    }
  }
  function Ch(t, r) {
    const i = r.referenceType;
    let l = "]";
    if (i === "collapsed" ? l += "[]" : i === "full" && (l += "[" + (r.label || r.identifier) + "]"), r.type === "imageReference") return [
      {
        type: "text",
        value: "![" + r.alt + l
      }
    ];
    const u = t.all(r), a = u[0];
    a && a.type === "text" ? a.value = "[" + a.value : u.unshift({
      type: "text",
      value: "["
    });
    const c = u[u.length - 1];
    return c && c.type === "text" ? c.value += l : u.push({
      type: "text",
      value: l
    }), u;
  }
  function Cw(t, r) {
    const i = String(r.identifier).toUpperCase(), l = t.definitionById.get(i);
    if (!l) return Ch(t, r);
    const u = {
      src: Fr(l.url || ""),
      alt: r.alt
    };
    l.title !== null && l.title !== void 0 && (u.title = l.title);
    const a = {
      type: "element",
      tagName: "img",
      properties: u,
      children: []
    };
    return t.patch(r, a), t.applyData(r, a);
  }
  function Tw(t, r) {
    const i = {
      src: Fr(r.url)
    };
    r.alt !== null && r.alt !== void 0 && (i.alt = r.alt), r.title !== null && r.title !== void 0 && (i.title = r.title);
    const l = {
      type: "element",
      tagName: "img",
      properties: i,
      children: []
    };
    return t.patch(r, l), t.applyData(r, l);
  }
  function Pw(t, r) {
    const i = {
      type: "text",
      value: r.value.replace(/\r?\n|\r/g, " ")
    };
    t.patch(r, i);
    const l = {
      type: "element",
      tagName: "code",
      properties: {},
      children: [
        i
      ]
    };
    return t.patch(r, l), t.applyData(r, l);
  }
  function _w(t, r) {
    const i = String(r.identifier).toUpperCase(), l = t.definitionById.get(i);
    if (!l) return Ch(t, r);
    const u = {
      href: Fr(l.url || "")
    };
    l.title !== null && l.title !== void 0 && (u.title = l.title);
    const a = {
      type: "element",
      tagName: "a",
      properties: u,
      children: t.all(r)
    };
    return t.patch(r, a), t.applyData(r, a);
  }
  function Nw(t, r) {
    const i = {
      href: Fr(r.url)
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const l = {
      type: "element",
      tagName: "a",
      properties: i,
      children: t.all(r)
    };
    return t.patch(r, l), t.applyData(r, l);
  }
  function Dw(t, r, i) {
    const l = t.all(r), u = i ? Ow(i) : Th(r), a = {}, c = [];
    if (typeof r.checked == "boolean") {
      const g = l[0];
      let y;
      g && g.type === "element" && g.tagName === "p" ? y = g : (y = {
        type: "element",
        tagName: "p",
        properties: {},
        children: []
      }, l.unshift(y)), y.children.length > 0 && y.children.unshift({
        type: "text",
        value: " "
      }), y.children.unshift({
        type: "element",
        tagName: "input",
        properties: {
          type: "checkbox",
          checked: r.checked,
          disabled: true
        },
        children: []
      }), a.className = [
        "task-list-item"
      ];
    }
    let f = -1;
    for (; ++f < l.length; ) {
      const g = l[f];
      (u || f !== 0 || g.type !== "element" || g.tagName !== "p") && c.push({
        type: "text",
        value: `
`
      }), g.type === "element" && g.tagName === "p" && !u ? c.push(...g.children) : c.push(g);
    }
    const h = l[l.length - 1];
    h && (u || h.type !== "element" || h.tagName !== "p") && c.push({
      type: "text",
      value: `
`
    });
    const m = {
      type: "element",
      tagName: "li",
      properties: a,
      children: c
    };
    return t.patch(r, m), t.applyData(r, m);
  }
  function Ow(t) {
    let r = false;
    if (t.type === "list") {
      r = t.spread || false;
      const i = t.children;
      let l = -1;
      for (; !r && ++l < i.length; ) r = Th(i[l]);
    }
    return r;
  }
  function Th(t) {
    const r = t.spread;
    return r ?? t.children.length > 1;
  }
  function Aw(t, r) {
    const i = {}, l = t.all(r);
    let u = -1;
    for (typeof r.start == "number" && r.start !== 1 && (i.start = r.start); ++u < l.length; ) {
      const c = l[u];
      if (c.type === "element" && c.tagName === "li" && c.properties && Array.isArray(c.properties.className) && c.properties.className.includes("task-list-item")) {
        i.className = [
          "contains-task-list"
        ];
        break;
      }
    }
    const a = {
      type: "element",
      tagName: r.ordered ? "ol" : "ul",
      properties: i,
      children: t.wrap(l, true)
    };
    return t.patch(r, a), t.applyData(r, a);
  }
  function Rw(t, r) {
    const i = {
      type: "element",
      tagName: "p",
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function Lw(t, r) {
    const i = {
      type: "root",
      children: t.wrap(t.all(r))
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function zw(t, r) {
    const i = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function bw(t, r) {
    const i = t.all(r), l = i.shift(), u = [];
    if (l) {
      const c = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: t.wrap([
          l
        ], true)
      };
      t.patch(r.children[0], c), u.push(c);
    }
    if (i.length > 0) {
      const c = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: t.wrap(i, true)
      }, f = Ju(r.children[1]), h = lh(r.children[r.children.length - 1]);
      f && h && (c.position = {
        start: f,
        end: h
      }), u.push(c);
    }
    const a = {
      type: "element",
      tagName: "table",
      properties: {},
      children: t.wrap(u, true)
    };
    return t.patch(r, a), t.applyData(r, a);
  }
  function Mw(t, r, i) {
    const l = i ? i.children : void 0, a = (l ? l.indexOf(r) : 1) === 0 ? "th" : "td", c = i && i.type === "table" ? i.align : void 0, f = c ? c.length : r.children.length;
    let h = -1;
    const m = [];
    for (; ++h < f; ) {
      const y = r.children[h], v = {}, w = c ? c[h] : void 0;
      w && (v.align = w);
      let I = {
        type: "element",
        tagName: a,
        properties: v,
        children: []
      };
      y && (I.children = t.all(y), t.patch(y, I), I = t.applyData(y, I)), m.push(I);
    }
    const g = {
      type: "element",
      tagName: "tr",
      properties: {},
      children: t.wrap(m, true)
    };
    return t.patch(r, g), t.applyData(r, g);
  }
  function Fw(t, r) {
    const i = {
      type: "element",
      tagName: "td",
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  const Wd = 9, $d = 32;
  function jw(t) {
    const r = String(t), i = /\r?\n|\r/g;
    let l = i.exec(r), u = 0;
    const a = [];
    for (; l; ) a.push(qd(r.slice(u, l.index), u > 0, true), l[0]), u = l.index + l[0].length, l = i.exec(r);
    return a.push(qd(r.slice(u), u > 0, false)), a.join("");
  }
  function qd(t, r, i) {
    let l = 0, u = t.length;
    if (r) {
      let a = t.codePointAt(l);
      for (; a === Wd || a === $d; ) l++, a = t.codePointAt(l);
    }
    if (i) {
      let a = t.codePointAt(u - 1);
      for (; a === Wd || a === $d; ) u--, a = t.codePointAt(u - 1);
    }
    return u > l ? t.slice(l, u) : "";
  }
  function Bw(t, r) {
    const i = {
      type: "text",
      value: jw(String(r.value))
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function Uw(t, r) {
    const i = {
      type: "element",
      tagName: "hr",
      properties: {},
      children: []
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  const Vw = {
    blockquote: yw,
    break: vw,
    code: ww,
    delete: xw,
    emphasis: kw,
    footnoteReference: Sw,
    heading: Ew,
    html: Iw,
    imageReference: Cw,
    image: Tw,
    inlineCode: Pw,
    linkReference: _w,
    link: Nw,
    listItem: Dw,
    list: Aw,
    paragraph: Rw,
    root: Lw,
    strong: zw,
    table: bw,
    tableCell: Fw,
    tableRow: Mw,
    text: Bw,
    thematicBreak: Uw,
    toml: tl,
    yaml: tl,
    definition: tl,
    footnoteDefinition: tl
  };
  function tl() {
  }
  const Ph = -1, yl = 0, Li = 1, sl = 2, oa = 3, la = 4, sa = 5, ua = 6, _h = 7, Nh = 8, Yd = typeof self == "object" ? self : globalThis, Hw = (t, r) => {
    const i = (u, a) => (t.set(a, u), u), l = (u) => {
      if (t.has(u)) return t.get(u);
      const [a, c] = r[u];
      switch (a) {
        case yl:
        case Ph:
          return i(c, u);
        case Li: {
          const f = i([], u);
          for (const h of c) f.push(l(h));
          return f;
        }
        case sl: {
          const f = i({}, u);
          for (const [h, m] of c) f[l(h)] = l(m);
          return f;
        }
        case oa:
          return i(new Date(c), u);
        case la: {
          const { source: f, flags: h } = c;
          return i(new RegExp(f, h), u);
        }
        case sa: {
          const f = i(/* @__PURE__ */ new Map(), u);
          for (const [h, m] of c) f.set(l(h), l(m));
          return f;
        }
        case ua: {
          const f = i(/* @__PURE__ */ new Set(), u);
          for (const h of c) f.add(l(h));
          return f;
        }
        case _h: {
          const { name: f, message: h } = c;
          return i(new Yd[f](h), u);
        }
        case Nh:
          return i(BigInt(c), u);
        case "BigInt":
          return i(Object(BigInt(c)), u);
        case "ArrayBuffer":
          return i(new Uint8Array(c).buffer, c);
        case "DataView": {
          const { buffer: f } = new Uint8Array(c);
          return i(new DataView(f), c);
        }
      }
      return i(new Yd[a](c), u);
    };
    return l;
  }, Qd = (t) => Hw(/* @__PURE__ */ new Map(), t)(0), Or = "", { toString: Ww } = {}, { keys: $w } = Object, Ni = (t) => {
    const r = typeof t;
    if (r !== "object" || !t) return [
      yl,
      r
    ];
    const i = Ww.call(t).slice(8, -1);
    switch (i) {
      case "Array":
        return [
          Li,
          Or
        ];
      case "Object":
        return [
          sl,
          Or
        ];
      case "Date":
        return [
          oa,
          Or
        ];
      case "RegExp":
        return [
          la,
          Or
        ];
      case "Map":
        return [
          sa,
          Or
        ];
      case "Set":
        return [
          ua,
          Or
        ];
      case "DataView":
        return [
          Li,
          i
        ];
    }
    return i.includes("Array") ? [
      Li,
      i
    ] : i.includes("Error") ? [
      _h,
      i
    ] : [
      sl,
      i
    ];
  }, nl = ([t, r]) => t === yl && (r === "function" || r === "symbol"), qw = (t, r, i, l) => {
    const u = (c, f) => {
      const h = l.push(c) - 1;
      return i.set(f, h), h;
    }, a = (c) => {
      if (i.has(c)) return i.get(c);
      let [f, h] = Ni(c);
      switch (f) {
        case yl: {
          let g = c;
          switch (h) {
            case "bigint":
              f = Nh, g = c.toString();
              break;
            case "function":
            case "symbol":
              if (t) throw new TypeError("unable to serialize " + h);
              g = null;
              break;
            case "undefined":
              return u([
                Ph
              ], c);
          }
          return u([
            f,
            g
          ], c);
        }
        case Li: {
          if (h) {
            let v = c;
            return h === "DataView" ? v = new Uint8Array(c.buffer) : h === "ArrayBuffer" && (v = new Uint8Array(c)), u([
              h,
              [
                ...v
              ]
            ], c);
          }
          const g = [], y = u([
            f,
            g
          ], c);
          for (const v of c) g.push(a(v));
          return y;
        }
        case sl: {
          if (h) switch (h) {
            case "BigInt":
              return u([
                h,
                c.toString()
              ], c);
            case "Boolean":
            case "Number":
            case "String":
              return u([
                h,
                c.valueOf()
              ], c);
          }
          if (r && "toJSON" in c) return a(c.toJSON());
          const g = [], y = u([
            f,
            g
          ], c);
          for (const v of $w(c)) (t || !nl(Ni(c[v]))) && g.push([
            a(v),
            a(c[v])
          ]);
          return y;
        }
        case oa:
          return u([
            f,
            c.toISOString()
          ], c);
        case la: {
          const { source: g, flags: y } = c;
          return u([
            f,
            {
              source: g,
              flags: y
            }
          ], c);
        }
        case sa: {
          const g = [], y = u([
            f,
            g
          ], c);
          for (const [v, w] of c) (t || !(nl(Ni(v)) || nl(Ni(w)))) && g.push([
            a(v),
            a(w)
          ]);
          return y;
        }
        case ua: {
          const g = [], y = u([
            f,
            g
          ], c);
          for (const v of c) (t || !nl(Ni(v))) && g.push(a(v));
          return y;
        }
      }
      const { message: m } = c;
      return u([
        f,
        {
          name: h,
          message: m
        }
      ], c);
    };
    return a;
  }, Kd = (t, { json: r, lossy: i } = {}) => {
    const l = [];
    return qw(!(r || i), !!r, /* @__PURE__ */ new Map(), l)(t), l;
  }, ul = typeof structuredClone == "function" ? (t, r) => r && ("json" in r || "lossy" in r) ? Qd(Kd(t, r)) : structuredClone(t) : (t, r) => Qd(Kd(t, r));
  function Yw(t, r) {
    const i = [
      {
        type: "text",
        value: "\u21A9"
      }
    ];
    return r > 1 && i.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        {
          type: "text",
          value: String(r)
        }
      ]
    }), i;
  }
  function Qw(t, r) {
    return "Back to reference " + (t + 1) + (r > 1 ? "-" + r : "");
  }
  function Kw(t) {
    const r = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", i = t.options.footnoteBackContent || Yw, l = t.options.footnoteBackLabel || Qw, u = t.options.footnoteLabel || "Footnotes", a = t.options.footnoteLabelTagName || "h2", c = t.options.footnoteLabelProperties || {
      className: [
        "sr-only"
      ]
    }, f = [];
    let h = -1;
    for (; ++h < t.footnoteOrder.length; ) {
      const m = t.footnoteById.get(t.footnoteOrder[h]);
      if (!m) continue;
      const g = t.all(m), y = String(m.identifier).toUpperCase(), v = Fr(y.toLowerCase());
      let w = 0;
      const I = [], D = t.footnoteCounts.get(y);
      for (; D !== void 0 && ++w <= D; ) {
        I.length > 0 && I.push({
          type: "text",
          value: " "
        });
        let b = typeof i == "string" ? i : i(h, w);
        typeof b == "string" && (b = {
          type: "text",
          value: b
        }), I.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + r + "fnref-" + v + (w > 1 ? "-" + w : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof l == "string" ? l : l(h, w),
            className: [
              "data-footnote-backref"
            ]
          },
          children: Array.isArray(b) ? b : [
            b
          ]
        });
      }
      const N = g[g.length - 1];
      if (N && N.type === "element" && N.tagName === "p") {
        const b = N.children[N.children.length - 1];
        b && b.type === "text" ? b.value += " " : N.children.push({
          type: "text",
          value: " "
        }), N.children.push(...I);
      } else g.push(...I);
      const T = {
        type: "element",
        tagName: "li",
        properties: {
          id: r + "fn-" + v
        },
        children: t.wrap(g, true)
      };
      t.patch(m, T), f.push(T);
    }
    if (f.length !== 0) return {
      type: "element",
      tagName: "section",
      properties: {
        dataFootnotes: true,
        className: [
          "footnotes"
        ]
      },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...ul(c),
            id: "footnote-label"
          },
          children: [
            {
              type: "text",
              value: u
            }
          ]
        },
        {
          type: "text",
          value: `
`
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: t.wrap(f, true)
        },
        {
          type: "text",
          value: `
`
        }
      ]
    };
  }
  const Dh = (function(t) {
    if (t == null) return Zw;
    if (typeof t == "function") return vl(t);
    if (typeof t == "object") return Array.isArray(t) ? Gw(t) : Xw(t);
    if (typeof t == "string") return Jw(t);
    throw new Error("Expected function, string, or object as test");
  });
  function Gw(t) {
    const r = [];
    let i = -1;
    for (; ++i < t.length; ) r[i] = Dh(t[i]);
    return vl(l);
    function l(...u) {
      let a = -1;
      for (; ++a < r.length; ) if (r[a].apply(this, u)) return true;
      return false;
    }
  }
  function Xw(t) {
    const r = t;
    return vl(i);
    function i(l) {
      const u = l;
      let a;
      for (a in t) if (u[a] !== r[a]) return false;
      return true;
    }
  }
  function Jw(t) {
    return vl(r);
    function r(i) {
      return i && i.type === t;
    }
  }
  function vl(t) {
    return r;
    function r(i, l, u) {
      return !!(ex(i) && t.call(this, i, typeof l == "number" ? l : void 0, u || void 0));
    }
  }
  function Zw() {
    return true;
  }
  function ex(t) {
    return t !== null && typeof t == "object" && "type" in t;
  }
  const Oh = [], tx = true, Gd = false, nx = "skip";
  function rx(t, r, i, l) {
    let u;
    typeof r == "function" && typeof i != "function" ? (l = i, i = r) : u = r;
    const a = Dh(u), c = l ? -1 : 1;
    f(t, void 0, [])();
    function f(h, m, g) {
      const y = h && typeof h == "object" ? h : {};
      if (typeof y.type == "string") {
        const w = typeof y.tagName == "string" ? y.tagName : typeof y.name == "string" ? y.name : void 0;
        Object.defineProperty(v, "name", {
          value: "node (" + (h.type + (w ? "<" + w + ">" : "")) + ")"
        });
      }
      return v;
      function v() {
        let w = Oh, I, D, N;
        if ((!r || a(h, m, g[g.length - 1] || void 0)) && (w = ix(i(h, g)), w[0] === Gd)) return w;
        if ("children" in h && h.children) {
          const T = h;
          if (T.children && w[0] !== nx) for (D = (l ? T.children.length : -1) + c, N = g.concat(T); D > -1 && D < T.children.length; ) {
            const b = T.children[D];
            if (I = f(b, D, N)(), I[0] === Gd) return I;
            D = typeof I[1] == "number" ? I[1] : D + c;
          }
        }
        return w;
      }
    }
  }
  function ix(t) {
    return Array.isArray(t) ? t : typeof t == "number" ? [
      tx,
      t
    ] : t == null ? Oh : [
      t
    ];
  }
  function Ah(t, r, i, l) {
    let u, a, c;
    typeof r == "function" && typeof i != "function" ? (a = void 0, c = r, u = i) : (a = r, c = i, u = l), rx(t, a, f, u);
    function f(h, m) {
      const g = m[m.length - 1], y = g ? g.children.indexOf(h) : void 0;
      return c(h, y, g);
    }
  }
  const Mu = {}.hasOwnProperty, ox = {};
  function lx(t, r) {
    const i = r || ox, l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = {
      ...Vw,
      ...i.handlers
    }, f = {
      all: m,
      applyData: ux,
      definitionById: l,
      footnoteById: u,
      footnoteCounts: a,
      footnoteOrder: [],
      handlers: c,
      one: h,
      options: i,
      patch: sx,
      wrap: cx
    };
    return Ah(t, function(g) {
      if (g.type === "definition" || g.type === "footnoteDefinition") {
        const y = g.type === "definition" ? l : u, v = String(g.identifier).toUpperCase();
        y.has(v) || y.set(v, g);
      }
    }), f;
    function h(g, y) {
      const v = g.type, w = f.handlers[v];
      if (Mu.call(f.handlers, v) && w) return w(f, g, y);
      if (f.options.passThrough && f.options.passThrough.includes(v)) {
        if ("children" in g) {
          const { children: D, ...N } = g, T = ul(N);
          return T.children = f.all(g), T;
        }
        return ul(g);
      }
      return (f.options.unknownHandler || ax)(f, g, y);
    }
    function m(g) {
      const y = [];
      if ("children" in g) {
        const v = g.children;
        let w = -1;
        for (; ++w < v.length; ) {
          const I = f.one(v[w], g);
          if (I) {
            if (w && v[w - 1].type === "break" && (!Array.isArray(I) && I.type === "text" && (I.value = Xd(I.value)), !Array.isArray(I) && I.type === "element")) {
              const D = I.children[0];
              D && D.type === "text" && (D.value = Xd(D.value));
            }
            Array.isArray(I) ? y.push(...I) : y.push(I);
          }
        }
      }
      return y;
    }
  }
  function sx(t, r) {
    t.position && (r.position = W0(t));
  }
  function ux(t, r) {
    let i = r;
    if (t && t.data) {
      const l = t.data.hName, u = t.data.hChildren, a = t.data.hProperties;
      if (typeof l == "string") if (i.type === "element") i.tagName = l;
      else {
        const c = "children" in i ? i.children : [
          i
        ];
        i = {
          type: "element",
          tagName: l,
          properties: {},
          children: c
        };
      }
      i.type === "element" && a && Object.assign(i.properties, ul(a)), "children" in i && i.children && u !== null && u !== void 0 && (i.children = u);
    }
    return i;
  }
  function ax(t, r) {
    const i = r.data || {}, l = "value" in r && !(Mu.call(i, "hProperties") || Mu.call(i, "hChildren")) ? {
      type: "text",
      value: r.value
    } : {
      type: "element",
      tagName: "div",
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, l), t.applyData(r, l);
  }
  function cx(t, r) {
    const i = [];
    let l = -1;
    for (r && i.push({
      type: "text",
      value: `
`
    }); ++l < t.length; ) l && i.push({
      type: "text",
      value: `
`
    }), i.push(t[l]);
    return r && t.length > 0 && i.push({
      type: "text",
      value: `
`
    }), i;
  }
  function Xd(t) {
    let r = 0, i = t.charCodeAt(r);
    for (; i === 9 || i === 32; ) r++, i = t.charCodeAt(r);
    return t.slice(r);
  }
  function Jd(t, r) {
    const i = lx(t, r), l = i.one(t, void 0), u = Kw(i), a = Array.isArray(l) ? {
      type: "root",
      children: l
    } : l || {
      type: "root",
      children: []
    };
    return u && a.children.push({
      type: "text",
      value: `
`
    }, u), a;
  }
  function fx(t, r) {
    return t && "run" in t ? async function(i, l) {
      const u = Jd(i, {
        file: l,
        ...r
      });
      await t.run(u, l);
    } : function(i, l) {
      return Jd(i, {
        file: l,
        ...t || r
      });
    };
  }
  function Zd(t) {
    if (t) throw t;
  }
  var wu, ep;
  function dx() {
    if (ep) return wu;
    ep = 1;
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = function(m) {
      return typeof Array.isArray == "function" ? Array.isArray(m) : r.call(m) === "[object Array]";
    }, a = function(m) {
      if (!m || r.call(m) !== "[object Object]") return false;
      var g = t.call(m, "constructor"), y = m.constructor && m.constructor.prototype && t.call(m.constructor.prototype, "isPrototypeOf");
      if (m.constructor && !g && !y) return false;
      var v;
      for (v in m) ;
      return typeof v > "u" || t.call(m, v);
    }, c = function(m, g) {
      i && g.name === "__proto__" ? i(m, g.name, {
        enumerable: true,
        configurable: true,
        value: g.newValue,
        writable: true
      }) : m[g.name] = g.newValue;
    }, f = function(m, g) {
      if (g === "__proto__") if (t.call(m, g)) {
        if (l) return l(m, g).value;
      } else return;
      return m[g];
    };
    return wu = function h() {
      var m, g, y, v, w, I, D = arguments[0], N = 1, T = arguments.length, b = false;
      for (typeof D == "boolean" && (b = D, D = arguments[1] || {}, N = 2), (D == null || typeof D != "object" && typeof D != "function") && (D = {}); N < T; ++N) if (m = arguments[N], m != null) for (g in m) y = f(D, g), v = f(m, g), D !== v && (b && v && (a(v) || (w = u(v))) ? (w ? (w = false, I = y && u(y) ? y : []) : I = y && a(y) ? y : {}, c(D, {
        name: g,
        newValue: h(b, I, v)
      })) : typeof v < "u" && c(D, {
        name: g,
        newValue: v
      }));
      return D;
    }, wu;
  }
  var px = dx();
  const xu = al(px);
  function Fu(t) {
    if (typeof t != "object" || t === null) return false;
    const r = Object.getPrototypeOf(t);
    return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
  }
  function hx() {
    const t = [], r = {
      run: i,
      use: l
    };
    return r;
    function i(...u) {
      let a = -1;
      const c = u.pop();
      if (typeof c != "function") throw new TypeError("Expected function as last argument, not " + c);
      f(null, ...u);
      function f(h, ...m) {
        const g = t[++a];
        let y = -1;
        if (h) {
          c(h);
          return;
        }
        for (; ++y < u.length; ) (m[y] === null || m[y] === void 0) && (m[y] = u[y]);
        u = m, g ? mx(g, f)(...m) : c(null, ...m);
      }
    }
    function l(u) {
      if (typeof u != "function") throw new TypeError("Expected `middelware` to be a function, not " + u);
      return t.push(u), r;
    }
  }
  function mx(t, r) {
    let i;
    return l;
    function l(...c) {
      const f = t.length > c.length;
      let h;
      f && c.push(u);
      try {
        h = t.apply(this, c);
      } catch (m) {
        const g = m;
        if (f && i) throw g;
        return u(g);
      }
      f || (h && h.then && typeof h.then == "function" ? h.then(a, u) : h instanceof Error ? u(h) : a(h));
    }
    function u(c, ...f) {
      i || (i = true, r(c, ...f));
    }
    function a(c) {
      u(null, c);
    }
  }
  const tn = {
    basename: gx,
    dirname: yx,
    extname: vx,
    join: wx,
    sep: "/"
  };
  function gx(t, r) {
    if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
    Bi(t);
    let i = 0, l = -1, u = t.length, a;
    if (r === void 0 || r.length === 0 || r.length > t.length) {
      for (; u--; ) if (t.codePointAt(u) === 47) {
        if (a) {
          i = u + 1;
          break;
        }
      } else l < 0 && (a = true, l = u + 1);
      return l < 0 ? "" : t.slice(i, l);
    }
    if (r === t) return "";
    let c = -1, f = r.length - 1;
    for (; u--; ) if (t.codePointAt(u) === 47) {
      if (a) {
        i = u + 1;
        break;
      }
    } else c < 0 && (a = true, c = u + 1), f > -1 && (t.codePointAt(u) === r.codePointAt(f--) ? f < 0 && (l = u) : (f = -1, l = c));
    return i === l ? l = c : l < 0 && (l = t.length), t.slice(i, l);
  }
  function yx(t) {
    if (Bi(t), t.length === 0) return ".";
    let r = -1, i = t.length, l;
    for (; --i; ) if (t.codePointAt(i) === 47) {
      if (l) {
        r = i;
        break;
      }
    } else l || (l = true);
    return r < 0 ? t.codePointAt(0) === 47 ? "/" : "." : r === 1 && t.codePointAt(0) === 47 ? "//" : t.slice(0, r);
  }
  function vx(t) {
    Bi(t);
    let r = t.length, i = -1, l = 0, u = -1, a = 0, c;
    for (; r--; ) {
      const f = t.codePointAt(r);
      if (f === 47) {
        if (c) {
          l = r + 1;
          break;
        }
        continue;
      }
      i < 0 && (c = true, i = r + 1), f === 46 ? u < 0 ? u = r : a !== 1 && (a = 1) : u > -1 && (a = -1);
    }
    return u < 0 || i < 0 || a === 0 || a === 1 && u === i - 1 && u === l + 1 ? "" : t.slice(u, i);
  }
  function wx(...t) {
    let r = -1, i;
    for (; ++r < t.length; ) Bi(t[r]), t[r] && (i = i === void 0 ? t[r] : i + "/" + t[r]);
    return i === void 0 ? "." : xx(i);
  }
  function xx(t) {
    Bi(t);
    const r = t.codePointAt(0) === 47;
    let i = kx(t, !r);
    return i.length === 0 && !r && (i = "."), i.length > 0 && t.codePointAt(t.length - 1) === 47 && (i += "/"), r ? "/" + i : i;
  }
  function kx(t, r) {
    let i = "", l = 0, u = -1, a = 0, c = -1, f, h;
    for (; ++c <= t.length; ) {
      if (c < t.length) f = t.codePointAt(c);
      else {
        if (f === 47) break;
        f = 47;
      }
      if (f === 47) {
        if (!(u === c - 1 || a === 1)) if (u !== c - 1 && a === 2) {
          if (i.length < 2 || l !== 2 || i.codePointAt(i.length - 1) !== 46 || i.codePointAt(i.length - 2) !== 46) {
            if (i.length > 2) {
              if (h = i.lastIndexOf("/"), h !== i.length - 1) {
                h < 0 ? (i = "", l = 0) : (i = i.slice(0, h), l = i.length - 1 - i.lastIndexOf("/")), u = c, a = 0;
                continue;
              }
            } else if (i.length > 0) {
              i = "", l = 0, u = c, a = 0;
              continue;
            }
          }
          r && (i = i.length > 0 ? i + "/.." : "..", l = 2);
        } else i.length > 0 ? i += "/" + t.slice(u + 1, c) : i = t.slice(u + 1, c), l = c - u - 1;
        u = c, a = 0;
      } else f === 46 && a > -1 ? a++ : a = -1;
    }
    return i;
  }
  function Bi(t) {
    if (typeof t != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(t));
  }
  const Sx = {
    cwd: Ex
  };
  function Ex() {
    return "/";
  }
  function ju(t) {
    return !!(t !== null && typeof t == "object" && "href" in t && t.href && "protocol" in t && t.protocol && t.auth === void 0);
  }
  function Ix(t) {
    if (typeof t == "string") t = new URL(t);
    else if (!ju(t)) {
      const r = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + t + "`");
      throw r.code = "ERR_INVALID_ARG_TYPE", r;
    }
    if (t.protocol !== "file:") {
      const r = new TypeError("The URL must be of scheme file");
      throw r.code = "ERR_INVALID_URL_SCHEME", r;
    }
    return Cx(t);
  }
  function Cx(t) {
    if (t.hostname !== "") {
      const l = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw l.code = "ERR_INVALID_FILE_URL_HOST", l;
    }
    const r = t.pathname;
    let i = -1;
    for (; ++i < r.length; ) if (r.codePointAt(i) === 37 && r.codePointAt(i + 1) === 50) {
      const l = r.codePointAt(i + 2);
      if (l === 70 || l === 102) {
        const u = new TypeError("File URL path must not include encoded / characters");
        throw u.code = "ERR_INVALID_FILE_URL_PATH", u;
      }
    }
    return decodeURIComponent(r);
  }
  const ku = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ];
  class Rh {
    constructor(r) {
      let i;
      r ? ju(r) ? i = {
        path: r
      } : typeof r == "string" || Tx(r) ? i = {
        value: r
      } : i = r : i = {}, this.cwd = "cwd" in i ? "" : Sx.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
      let l = -1;
      for (; ++l < ku.length; ) {
        const a = ku[l];
        a in i && i[a] !== void 0 && i[a] !== null && (this[a] = a === "history" ? [
          ...i[a]
        ] : i[a]);
      }
      let u;
      for (u in i) ku.includes(u) || (this[u] = i[u]);
    }
    get basename() {
      return typeof this.path == "string" ? tn.basename(this.path) : void 0;
    }
    set basename(r) {
      Eu(r, "basename"), Su(r, "basename"), this.path = tn.join(this.dirname || "", r);
    }
    get dirname() {
      return typeof this.path == "string" ? tn.dirname(this.path) : void 0;
    }
    set dirname(r) {
      tp(this.basename, "dirname"), this.path = tn.join(r || "", this.basename);
    }
    get extname() {
      return typeof this.path == "string" ? tn.extname(this.path) : void 0;
    }
    set extname(r) {
      if (Su(r, "extname"), tp(this.dirname, "extname"), r) {
        if (r.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
        if (r.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = tn.join(this.dirname, this.stem + (r || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(r) {
      ju(r) && (r = Ix(r)), Eu(r, "path"), this.path !== r && this.history.push(r);
    }
    get stem() {
      return typeof this.path == "string" ? tn.basename(this.path, this.extname) : void 0;
    }
    set stem(r) {
      Eu(r, "stem"), Su(r, "stem"), this.path = tn.join(this.dirname || "", r + (this.extname || ""));
    }
    fail(r, i, l) {
      const u = this.message(r, i, l);
      throw u.fatal = true, u;
    }
    info(r, i, l) {
      const u = this.message(r, i, l);
      return u.fatal = void 0, u;
    }
    message(r, i, l) {
      const u = new at(r, i, l);
      return this.path && (u.name = this.path + ":" + u.name, u.file = this.path), u.fatal = false, this.messages.push(u), u;
    }
    toString(r) {
      return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(r || void 0).decode(this.value);
    }
  }
  function Su(t, r) {
    if (t && t.includes(tn.sep)) throw new Error("`" + r + "` cannot be a path: did not expect `" + tn.sep + "`");
  }
  function Eu(t, r) {
    if (!t) throw new Error("`" + r + "` cannot be empty");
  }
  function tp(t, r) {
    if (!t) throw new Error("Setting `" + r + "` requires `path` to be set too");
  }
  function Tx(t) {
    return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
  }
  const Px = (function(t) {
    const l = this.constructor.prototype, u = l[t], a = function() {
      return u.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, l), a;
  }), _x = {}.hasOwnProperty;
  class aa extends Px {
    constructor() {
      super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = hx();
    }
    copy() {
      const r = new aa();
      let i = -1;
      for (; ++i < this.attachers.length; ) {
        const l = this.attachers[i];
        r.use(...l);
      }
      return r.data(xu(true, {}, this.namespace)), r;
    }
    data(r, i) {
      return typeof r == "string" ? arguments.length === 2 ? (Tu("data", this.frozen), this.namespace[r] = i, this) : _x.call(this.namespace, r) && this.namespace[r] || void 0 : r ? (Tu("data", this.frozen), this.namespace = r, this) : this.namespace;
    }
    freeze() {
      if (this.frozen) return this;
      const r = this;
      for (; ++this.freezeIndex < this.attachers.length; ) {
        const [i, ...l] = this.attachers[this.freezeIndex];
        if (l[0] === false) continue;
        l[0] === true && (l[0] = void 0);
        const u = i.call(r, ...l);
        typeof u == "function" && this.transformers.use(u);
      }
      return this.frozen = true, this.freezeIndex = Number.POSITIVE_INFINITY, this;
    }
    parse(r) {
      this.freeze();
      const i = rl(r), l = this.parser || this.Parser;
      return Iu("parse", l), l(String(i), i);
    }
    process(r, i) {
      const l = this;
      return this.freeze(), Iu("process", this.parser || this.Parser), Cu("process", this.compiler || this.Compiler), i ? u(void 0, i) : new Promise(u);
      function u(a, c) {
        const f = rl(r), h = l.parse(f);
        l.run(h, f, function(g, y, v) {
          if (g || !y || !v) return m(g);
          const w = y, I = l.stringify(w, v);
          Ox(I) ? v.value = I : v.result = I, m(g, v);
        });
        function m(g, y) {
          g || !y ? c(g) : a ? a(y) : i(void 0, y);
        }
      }
    }
    processSync(r) {
      let i = false, l;
      return this.freeze(), Iu("processSync", this.parser || this.Parser), Cu("processSync", this.compiler || this.Compiler), this.process(r, u), rp("processSync", "process", i), l;
      function u(a, c) {
        i = true, Zd(a), l = c;
      }
    }
    run(r, i, l) {
      np(r), this.freeze();
      const u = this.transformers;
      return !l && typeof i == "function" && (l = i, i = void 0), l ? a(void 0, l) : new Promise(a);
      function a(c, f) {
        const h = rl(i);
        u.run(r, h, m);
        function m(g, y, v) {
          const w = y || r;
          g ? f(g) : c ? c(w) : l(void 0, w, v);
        }
      }
    }
    runSync(r, i) {
      let l = false, u;
      return this.run(r, i, a), rp("runSync", "run", l), u;
      function a(c, f) {
        Zd(c), u = f, l = true;
      }
    }
    stringify(r, i) {
      this.freeze();
      const l = rl(i), u = this.compiler || this.Compiler;
      return Cu("stringify", u), np(r), u(r, l);
    }
    use(r, ...i) {
      const l = this.attachers, u = this.namespace;
      if (Tu("use", this.frozen), r != null) if (typeof r == "function") h(r, i);
      else if (typeof r == "object") Array.isArray(r) ? f(r) : c(r);
      else throw new TypeError("Expected usable value, not `" + r + "`");
      return this;
      function a(m) {
        if (typeof m == "function") h(m, []);
        else if (typeof m == "object") if (Array.isArray(m)) {
          const [g, ...y] = m;
          h(g, y);
        } else c(m);
        else throw new TypeError("Expected usable value, not `" + m + "`");
      }
      function c(m) {
        if (!("plugins" in m) && !("settings" in m)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
        f(m.plugins), m.settings && (u.settings = xu(true, u.settings, m.settings));
      }
      function f(m) {
        let g = -1;
        if (m != null) if (Array.isArray(m)) for (; ++g < m.length; ) {
          const y = m[g];
          a(y);
        }
        else throw new TypeError("Expected a list of plugins, not `" + m + "`");
      }
      function h(m, g) {
        let y = -1, v = -1;
        for (; ++y < l.length; ) if (l[y][0] === m) {
          v = y;
          break;
        }
        if (v === -1) l.push([
          m,
          ...g
        ]);
        else if (g.length > 0) {
          let [w, ...I] = g;
          const D = l[v][1];
          Fu(D) && Fu(w) && (w = xu(true, D, w)), l[v] = [
            m,
            w,
            ...I
          ];
        }
      }
    }
  }
  const Nx = new aa().freeze();
  function Iu(t, r) {
    if (typeof r != "function") throw new TypeError("Cannot `" + t + "` without `parser`");
  }
  function Cu(t, r) {
    if (typeof r != "function") throw new TypeError("Cannot `" + t + "` without `compiler`");
  }
  function Tu(t, r) {
    if (r) throw new Error("Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
  function np(t) {
    if (!Fu(t) || typeof t.type != "string") throw new TypeError("Expected node, got `" + t + "`");
  }
  function rp(t, r, i) {
    if (!i) throw new Error("`" + t + "` finished async. Use `" + r + "` instead");
  }
  function rl(t) {
    return Dx(t) ? t : new Rh(t);
  }
  function Dx(t) {
    return !!(t && typeof t == "object" && "message" in t && "messages" in t);
  }
  function Ox(t) {
    return typeof t == "string" || Ax(t);
  }
  function Ax(t) {
    return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
  }
  const Rx = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", ip = [], op = {
    allowDangerousHtml: true
  }, Lx = /^(https?|ircs?|mailto|xmpp)$/i, zx = [
    {
      from: "astPlugins",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "allowDangerousHtml",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement"
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements"
    },
    {
      from: "className",
      id: "remove-classname"
    },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements"
    },
    {
      from: "escapeHtml",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "includeElementIndex",
      id: "#remove-includeelementindex"
    },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex"
    },
    {
      from: "linkTarget",
      id: "remove-linktarget"
    },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins"
    },
    {
      from: "rawSourcePos",
      id: "#remove-rawsourcepos"
    },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components"
    },
    {
      from: "source",
      id: "change-source-to-children",
      to: "children"
    },
    {
      from: "sourcePos",
      id: "#remove-sourcepos"
    },
    {
      from: "transformImageUri",
      id: "#add-urltransform",
      to: "urlTransform"
    },
    {
      from: "transformLinkUri",
      id: "#add-urltransform",
      to: "urlTransform"
    }
  ];
  function bx(t) {
    const r = Mx(t), i = Fx(t);
    return jx(r.runSync(r.parse(i), i), t);
  }
  function Mx(t) {
    const r = t.rehypePlugins || ip, i = t.remarkPlugins || ip, l = t.remarkRehypeOptions ? {
      ...t.remarkRehypeOptions,
      ...op
    } : op;
    return Nx().use(gw).use(i).use(fx, l).use(r);
  }
  function Fx(t) {
    const r = t.children || "", i = new Rh();
    return typeof r == "string" && (i.value = r), i;
  }
  function jx(t, r) {
    const i = r.allowedElements, l = r.allowElement, u = r.components, a = r.disallowedElements, c = r.skipHtml, f = r.unwrapDisallowed, h = r.urlTransform || Bx;
    for (const g of zx) Object.hasOwn(r, g.from) && ("" + g.from + (g.to ? "use `" + g.to + "` instead" : "remove it") + Rx + g.id, void 0);
    return Ah(t, m), K0(t, {
      Fragment: j.Fragment,
      components: u,
      ignoreInvalidStyle: true,
      jsx: j.jsx,
      jsxs: j.jsxs,
      passKeys: true,
      passNode: true
    });
    function m(g, y, v) {
      if (g.type === "raw" && v && typeof y == "number") return c ? v.children.splice(y, 1) : v.children[y] = {
        type: "text",
        value: g.value
      }, y;
      if (g.type === "element") {
        let w;
        for (w in gu) if (Object.hasOwn(gu, w) && Object.hasOwn(g.properties, w)) {
          const I = g.properties[w], D = gu[w];
          (D === null || D.includes(g.tagName)) && (g.properties[w] = h(String(I || ""), w, g));
        }
      }
      if (g.type === "element") {
        let w = i ? !i.includes(g.tagName) : a ? a.includes(g.tagName) : false;
        if (!w && l && typeof y == "number" && (w = !l(g, y, v)), w && v && typeof y == "number") return f && g.children ? v.children.splice(y, 1, ...g.children) : v.children.splice(y, 1), y;
      }
    }
  }
  function Bx(t) {
    const r = t.indexOf(":"), i = t.indexOf("?"), l = t.indexOf("#"), u = t.indexOf("/");
    return r === -1 || u !== -1 && r > u || i !== -1 && r > i || l !== -1 && r > l || Lx.test(t.slice(0, r)) ? t : "";
  }
  function Ux() {
    const [t, r] = ye.useState(null), [i, l] = ye.useState(false), u = ye.useRef(null), a = ye.useRef(null), c = ye.useCallback(async (h) => {
      if (u.current) {
        console.log("[WebLLM] Engine already exists (singleton), skipping load");
        return;
      }
      if (a.current) return console.log("[WebLLM] Load already in progress, awaiting shared promise"), a.current;
      const m = h.chat_model.name;
      return console.log("[WebLLM] Loading model from pre-populated cache:", m), l(true), a.current = (async () => {
        try {
          const { CreateWebWorkerMLCEngine: g } = await ap(async () => {
            const { CreateWebWorkerMLCEngine: w } = await import("./index-DFLBea7M.js");
            return {
              CreateWebWorkerMLCEngine: w
            };
          }, []), y = new Worker(new URL("/offline-llm-knowledge-system/import/assets/llm-worker-BAB0O2by.js", import.meta.url), {
            type: "module"
          }), v = await g(y, m, {
            initProgressCallback: (w) => {
              console.log("[WebLLM]", w.text, `${Math.round((w.progress ?? 0) * 100)}%`);
            }
          });
          u.current = v, r(v), console.log("[WebLLM] Engine ready (worker)");
        } catch (g) {
          throw a.current = null, l(false), g;
        }
        l(false);
      })(), a.current;
    }, []), f = ye.useCallback(async (h, m) => {
      var _a, _b;
      const g = u.current;
      if (!g) throw new Error("Engine not loaded");
      const y = await g.chat.completions.create({
        messages: h,
        stream: true
      });
      for await (const v of y) {
        const w = ((_b = (_a = v.choices[0]) == null ? void 0 : _a.delta) == null ? void 0 : _b.content) ?? "";
        w && m(w);
      }
    }, []);
    return {
      engine: t,
      loading: i,
      loadModel: c,
      chat: f
    };
  }
  function Vx(t) {
    async function r(i, l) {
      if (!t) return [];
      try {
        return (await xd(t, {
          term: i,
          vector: {
            value: l,
            property: "vector"
          },
          limit: 3,
          mode: "hybrid"
        })).hits.map((a) => a.document);
      } catch {
        try {
          return (await xd(t, {
            term: i,
            limit: 3
          })).hits.map((a) => a.document);
        } catch {
          return [];
        }
      }
    }
    return {
      search: r
    };
  }
  function Hx() {
    const t = ye.useRef(null), r = ye.useRef(false), i = ye.useRef(/* @__PURE__ */ new Map());
    return ye.useEffect(() => {
      const u = new Worker(new URL("/offline-llm-knowledge-system/import/assets/embed-query-worker-B5za7fZ3.js", import.meta.url), {
        type: "module"
      });
      return t.current = u, u.onmessage = (a) => {
        const { type: c, id: f, vector: h, error: m } = a.data;
        if (c === "READY") {
          r.current = true, console.log("[EmbedWorker] ready");
          return;
        }
        if (c === "EMBED_QUERY_DONE") {
          const g = i.current.get(f);
          g && (g.resolve(h), i.current.delete(f));
          return;
        }
        if (c === "EMBED_QUERY_ERROR") {
          console.warn("[EmbedWorker] error:", m);
          const g = i.current.get(f);
          g && (g.resolve(new Array(384).fill(0)), i.current.delete(f));
        }
      }, u.onerror = (a) => {
        console.error("[EmbedWorker] uncaught error:", a);
      }, u.postMessage({
        type: "INIT"
      }), () => {
        u.terminate(), t.current = null, r.current = false;
      };
    }, []), {
      embedQuery: ye.useCallback(async (u) => {
        const a = t.current;
        if (!a) return console.warn("[EmbedWorker] worker not available, using zero vector"), new Array(384).fill(0);
        const c = `eq-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        return new Promise((f) => {
          i.current.set(c, {
            resolve: f
          }), a.postMessage({
            type: "EMBED_QUERY",
            id: c,
            text: u
          }), setTimeout(() => {
            i.current.has(c) && (console.warn("[EmbedWorker] timeout for query:", u), i.current.delete(c), f(new Array(384).fill(0)));
          }, 1e4);
        });
      }, [])
    };
  }
  const Wx = 14e3, lp = 1100, sp = 300, $x = 3200, qx = 7e3, Yx = 3500, Qx = " Write in complete sentences. Do not repeat the question. If the documents do not contain the answer, say so.";
  function Kx(t) {
    const r = t.split(/\n##|\n#|\n-\s|\n\*/)[0].trim();
    return (r.length > sp ? r.slice(0, sp).trimEnd() + "\u2026" : r) + Qx;
  }
  function up(t, r, i) {
    const l = [];
    let u = 0;
    for (let a = 0; a < t.length; a++) {
      const c = t[a].text.length > lp ? t[a].text.slice(0, lp).trimEnd() + "\u2026" : t[a].text, f = `[${i} ${a + 1} \u2014 ${t[a].source}]
${c}`;
      if (u + f.length > r) break;
      l.push(f), u += f.length;
    }
    return l.join(`

`);
  }
  function Pu(t, r, i, l, u) {
    var _a, _b;
    const a = ((_a = l == null ? void 0 : l.system_instructions) == null ? void 0 : _a.trim()) || "You are a helpful assistant.", c = Kx(a), f = (u == null ? void 0 : u.wikiContent) ? `[WIKI]
${u.wikiContent.slice(0, $x)}` : "", h = ((_b = u == null ? void 0 : u.graphChunks) == null ? void 0 : _b.length) ? `[GRAPH CONTEXT]
${up(u.graphChunks, qx, "GRAPH")}` : "", m = i.length ? `[RETRIEVED DOCS]
${up(i, Yx, "DOC")}` : "", g = [
      f,
      h,
      m
    ].filter(Boolean), y = g.length > 0 ? `${g.join(`

`)}

Question: ${r}` : r;
    let v = t.map((D) => ({
      role: D.role,
      content: D.content
    }));
    const w = (D) => c.length + D.reduce((N, T) => N + T.content.length, 0) + y.length;
    for (; w(v) > Wx && v.length >= 2; ) v = v.slice(2), console.log("[chatMessages] History trimmed: dropped oldest message pair, remaining:", v.length);
    const I = [
      {
        role: "system",
        content: c
      },
      ...v,
      {
        role: "user",
        content: y
      }
    ];
    return console.log("[chatMessages] system:", c.length, "chars | wiki:", f.length, "| graph:", h.length, "| rag:", m.length, "| history:", v.length, "msgs", "| total:", w(v), "chars"), I;
  }
  function Gx(t) {
    const r = /* @__PURE__ */ new Map();
    for (const i of t) r.has(i.a) || r.set(i.a, []), r.has(i.b) || r.set(i.b, []), r.get(i.a).push(i.b), r.get(i.b).push(i.a);
    return r;
  }
  function Xx(t, r, i = 2) {
    const l = new Set(r);
    let u = [
      ...r
    ];
    for (let a = 0; a < i; a++) {
      const c = [];
      for (const f of u) for (const h of t.get(f) ?? []) l.has(h) || (l.add(h), c.push(h));
      if (u = c, u.length === 0) break;
    }
    return l;
  }
  function Jx(t, r) {
    return t.filter((i) => r.has(i.id));
  }
  function Zx(t) {
    return t.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase().slice(0, 80);
  }
  async function ek(t, r, i, l) {
    var _a, _b, _c;
    const a = `wiki/${Zx(t)}.md`;
    try {
      const h = await il(r, a), m = new TextDecoder().decode(h);
      return console.log(`[wikiCache] hit: ${a} (${m.length} chars)`), m;
    } catch {
    }
    const c = `Write a concise 3-5 sentence reference summary for "${t}". Be factual and specific. Use only information from the excerpts below. Do not repeat the instructions.

Excerpts:
${l.slice(0, 2e3)}

Summary:`;
    let f = "";
    try {
      f = ((_c = (_b = (_a = (await i.chat.completions.create({
        messages: [
          {
            role: "user",
            content: c
          }
        ],
        max_tokens: 200,
        temperature: 0.1
      })).choices[0]) == null ? void 0 : _a.message) == null ? void 0 : _b.content) == null ? void 0 : _c.trim()) ?? "";
    } catch (h) {
      return console.warn("[wikiCache] synthesis failed:", h), "";
    }
    if (!f) return "";
    try {
      await g0(r, a, new TextEncoder().encode(f)), console.log(`[wikiCache] written: ${a} (${f.length} chars)`);
    } catch (h) {
      console.warn("[wikiCache] OPFS write failed (non-fatal):", h);
    }
    return f;
  }
  function tk({ oramaDb: t, manifest: r, onClear: i, chunks: l, graphEdges: u }) {
    const [a, c] = ye.useState([]), f = ye.useRef([]);
    ye.useEffect(() => {
      f.current = a;
    }, [
      a
    ]);
    const [h, m] = ye.useState(""), [g, y] = ye.useState(false), [v, w] = ye.useState(false), [I, D] = ye.useState(null), N = ye.useRef(null), T = ye.useRef(null), { engine: b, loading: L, loadModel: $, chat: ee } = Ux(), { search: R } = Vx(t), { embedQuery: te } = Hx(), re = ye.useMemo(() => u.length > 0 ? Gx(u) : /* @__PURE__ */ new Map(), [
      u
    ]);
    ye.useEffect(() => {
      b && !v && w(true);
    }, [
      b,
      v
    ]), ye.useEffect(() => {
      r && $(r).catch((B) => D(B instanceof Error ? B.message : String(B)));
    }, [
      r,
      $
    ]), ye.useEffect(() => {
      var _a;
      (_a = N.current) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth"
      });
    }, [
      a
    ]);
    const le = ye.useCallback(async () => {
      var _a, _b;
      const B = h.trim();
      if (!B || g || !b && !v) return;
      m(""), y(true);
      const ue = {
        role: "user",
        content: B
      };
      c((V) => [
        ...V,
        ue
      ]);
      const J = {
        role: "assistant",
        content: "",
        sources: [],
        streaming: true
      };
      c((V) => [
        ...V,
        J
      ]);
      try {
        const V = await te(B), Q = await R(B, V);
        let ne = [];
        if (re.size > 0 && l.length > 0) {
          const M = Q.map((pe) => pe.id), S = Xx(re, M, 2), oe = new Set(M);
          ne = Jx(l, S).filter((pe) => !oe.has(pe.id));
        }
        let U = "";
        if (b && r && Q.length > 0) {
          const M = Q[0].source, S = Q.map((oe) => oe.text).join(`

`);
          U = await ek(M, r.manifest_hash, b, S);
        }
        c((M) => {
          const S = [
            ...M
          ], oe = S[S.length - 1];
          return oe.role === "assistant" && (S[S.length - 1] = {
            ...oe,
            sources: Q
          }), S;
        });
        const X = a.filter((M) => !(M.role === "assistant" && M.content.startsWith("Error:"))).map((M) => ({
          role: M.role,
          content: M.content
        })), k = Pu(X, B, Q, r, {
          wikiContent: U,
          graphChunks: ne
        });
        console.group("[Chat] Sending to model"), console.log("Query:", B), console.log(`RAG chunks (${Q.length}):`, Q.map((M) => ({
          source: M.source,
          preview: M.text.slice(0, 100)
        }))), console.log(`Graph chunks (${ne.length}):`, ne.map((M) => ({
          source: M.source,
          preview: M.text.slice(0, 100)
        }))), console.log(`Wiki content (${U.length} chars):`, U.slice(0, 200)), console.log("System prompt:", (_b = (_a = k[0]) == null ? void 0 : _a.content) == null ? void 0 : _b.slice(0, 500)), console.log("Full messages:", JSON.stringify(k, null, 2)), console.groupEnd();
        let _ = "";
        await ee(k, (M) => {
          _ += M, c((S) => {
            const oe = [
              ...S
            ], pe = oe[oe.length - 1];
            return pe.role === "assistant" && (oe[oe.length - 1] = {
              ...pe,
              content: _,
              streaming: true
            }), oe;
          });
        }), c((M) => {
          const S = [
            ...M
          ], oe = S[S.length - 1];
          return oe.role === "assistant" && (S[S.length - 1] = {
            ...oe,
            streaming: false
          }), S;
        });
      } catch (V) {
        const Q = V instanceof Error ? V.message : String(V);
        c((ne) => {
          const U = [
            ...ne
          ], X = U[U.length - 1];
          return X.role === "assistant" && (U[U.length - 1] = {
            ...X,
            content: `Error: ${Q}`,
            streaming: false
          }), U;
        });
      } finally {
        y(false);
      }
    }, [
      h,
      g,
      b,
      v,
      te,
      R,
      ee,
      a,
      re,
      l,
      r
    ]), he = ye.useCallback((B) => {
      B.key === "Enter" && !B.shiftKey && (B.preventDefault(), le());
    }, [
      le
    ]), G = ye.useCallback(() => {
      window.confirm("Clear the knowledge base? You will need to import a zip again.") && i();
    }, [
      i
    ]);
    return ye.useEffect(() => {
      const B = (Q) => b ? t ? true : (console.error(`[kb.${Q}] No knowledge base loaded`), false) : (console.error(`[kb.${Q}] Engine not loaded yet`), false), ue = async (Q) => {
        const ne = await te(Q);
        return R(Q, ne);
      }, J = async (Q) => {
        var _a, _b;
        if (!B("ask")) return "";
        console.time("[kb.ask] total");
        const ne = await ue(Q), U = Pu([], Q, ne, r);
        console.log("[kb.ask] messages:", JSON.stringify(U, null, 2));
        let X = "";
        const k = await b.chat.completions.create({
          messages: U,
          stream: true,
          max_tokens: 512
        });
        for await (const _ of k) {
          const M = ((_b = (_a = _.choices[0]) == null ? void 0 : _a.delta) == null ? void 0 : _b.content) ?? "";
          M && (X += M);
        }
        return console.timeEnd("[kb.ask] total"), console.log("[kb.ask] answer:", X), X;
      }, V = {
        ask: J,
        search: async (Q) => {
          if (!B("search")) return [];
          const ne = await ue(Q);
          return console.table(ne.map((U, X) => ({
            doc: X + 1,
            source: U.source,
            chars: U.text.length,
            preview: U.text.slice(0, 120).replace(/\n/g, " ")
          }))), ne;
        },
        prompt: async (Q) => {
          if (!B("prompt")) return null;
          const ne = await ue(Q), U = Pu([], Q, ne, r);
          return console.group("[kb.prompt] Full message array"), U.forEach((X, k) => console.log(`[${k}] ${X.role} (${X.content.length} chars):
${X.content}`)), console.groupEnd(), U;
        },
        history: () => {
          const Q = f.current;
          return Q.length === 0 ? (console.log("[kb.history] No messages yet"), []) : (console.table(Q.map((ne, U) => ({
            "#": U,
            role: ne.role,
            chars: ne.content.length,
            preview: ne.content.slice(0, 100).replace(/\n/g, " ")
          }))), Q);
        },
        batch: async (Q) => {
          if (!B("batch")) return;
          console.log(`[kb.batch] Running ${Q.length} questions...`);
          const ne = [];
          for (const U of Q) {
            const X = Date.now(), k = await J(U);
            ne.push({
              question: U,
              answer: k.slice(0, 120),
              ms: Date.now() - X
            });
          }
          return console.table(ne), ne;
        }
      };
      window.kb = V, window.askchat = J, console.log("%c[kb] Console API ready", "color: #4ade80; font-weight: bold", `
  kb.ask("question")          \u2192 search + LLM answer`, `
  kb.search("question")       \u2192 show retrieved chunks`, `
  kb.prompt("question")       \u2192 show full prompt without calling LLM`, `
  kb.history()                \u2192 show current chat history`, `
  kb.batch(["q1","q2"])       \u2192 run multiple questions`, `
  askchat("question")         \u2192 alias for kb.ask()`);
    }, [
      b,
      t,
      r,
      te,
      R
    ]), j.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0,
        flex: 1
      },
      children: [
        j.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 20px",
            borderBottom: "1px solid var(--border)",
            background: "var(--surface)",
            flexShrink: 0
          },
          children: [
            j.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10
              },
              children: [
                j.jsx("div", {
                  style: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: v ? "var(--success)" : L ? "var(--accent)" : "var(--muted)"
                  }
                }),
                j.jsx("span", {
                  style: {
                    fontWeight: 600,
                    fontSize: 15
                  },
                  children: v ? "Chat ready" : L ? "Uploading to GPU..." : "Initializing"
                }),
                I && j.jsx("span", {
                  style: {
                    color: "var(--danger)",
                    fontSize: 12
                  },
                  children: I
                })
              ]
            }),
            j.jsx("button", {
              onClick: G,
              style: {
                background: "none",
                border: "1px solid var(--danger)",
                color: "var(--danger)",
                borderRadius: 6,
                padding: "5px 12px",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 500
              },
              children: "Clear knowledge base"
            })
          ]
        }),
        j.jsxs("div", {
          style: {
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: 16
          },
          children: [
            a.length === 0 && j.jsx("div", {
              style: {
                textAlign: "center",
                color: "var(--muted)",
                marginTop: 60,
                fontSize: 14
              },
              children: "Ask a question about your knowledge base"
            }),
            a.map((B, ue) => j.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: B.role === "user" ? "flex-end" : "flex-start",
                gap: 6
              },
              children: [
                j.jsx("div", {
                  className: B.role === "assistant" ? "markdown" : void 0,
                  style: {
                    maxWidth: "75%",
                    padding: "10px 14px",
                    borderRadius: B.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background: B.role === "user" ? "var(--accent)" : "var(--surface)",
                    color: "var(--text)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    wordBreak: "break-word",
                    border: B.role === "assistant" ? "1px solid var(--border)" : "none"
                  },
                  children: B.role === "assistant" ? B.content ? j.jsxs(j.Fragment, {
                    children: [
                      j.jsx(bx, {
                        children: B.content
                      }),
                      B.streaming && j.jsx("span", {
                        style: {
                          display: "inline-block",
                          width: 6,
                          height: 14,
                          background: "var(--accent)",
                          marginLeft: 2,
                          verticalAlign: "text-bottom",
                          animation: "blink 1s step-end infinite"
                        }
                      })
                    ]
                  }) : B.streaming ? j.jsx("span", {
                    style: {
                      color: "var(--muted)"
                    },
                    children: "..."
                  }) : "" : j.jsx("span", {
                    style: {
                      whiteSpace: "pre-wrap"
                    },
                    children: B.content
                  })
                }),
                B.role === "assistant" && B.sources && B.sources.length > 0 && !B.streaming && j.jsxs("div", {
                  style: {
                    maxWidth: "75%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4
                  },
                  children: [
                    j.jsx("span", {
                      style: {
                        fontSize: 11,
                        color: "var(--muted)",
                        marginLeft: 2
                      },
                      children: "Sources:"
                    }),
                    B.sources.map((J, V) => j.jsxs("div", {
                      style: {
                        fontSize: 12,
                        color: "var(--muted)",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        padding: "6px 10px"
                      },
                      children: [
                        j.jsxs("span", {
                          style: {
                            fontWeight: 600,
                            color: "var(--text)"
                          },
                          children: [
                            J.source,
                            J.page ? ` p.${J.page}` : ""
                          ]
                        }),
                        j.jsxs("span", {
                          style: {
                            marginLeft: 6
                          },
                          children: [
                            J.text.slice(0, 120),
                            J.text.length > 120 ? "..." : ""
                          ]
                        })
                      ]
                    }, V))
                  ]
                })
              ]
            }, ue)),
            j.jsx("div", {
              ref: N
            })
          ]
        }),
        j.jsx("div", {
          style: {
            padding: "14px 20px",
            borderTop: "1px solid var(--border)",
            background: "var(--surface)",
            flexShrink: 0
          },
          children: j.jsxs("div", {
            style: {
              display: "flex",
              gap: 10,
              alignItems: "flex-end"
            },
            children: [
              j.jsx("textarea", {
                ref: T,
                value: h,
                onChange: (B) => m(B.target.value),
                onKeyDown: he,
                disabled: g || !v,
                placeholder: v ? "Ask a question... (Enter to send, Shift+Enter for newline)" : "Waiting for model...",
                rows: 1,
                style: {
                  flex: 1,
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  color: "var(--text)",
                  padding: "10px 14px",
                  fontSize: 14,
                  resize: "none",
                  minHeight: 42,
                  maxHeight: 120,
                  outline: "none",
                  fontFamily: "inherit",
                  lineHeight: 1.5,
                  overflowY: "auto"
                }
              }),
              j.jsx("button", {
                onClick: le,
                disabled: g || !v || !h.trim(),
                style: {
                  background: "var(--accent)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 18px",
                  cursor: g || !v || !h.trim() ? "not-allowed" : "pointer",
                  fontWeight: 600,
                  fontSize: 14,
                  opacity: g || !v || !h.trim() ? 0.5 : 1,
                  flexShrink: 0,
                  height: 42,
                  whiteSpace: "nowrap"
                },
                children: g ? "Thinking..." : "Send"
              })
            ]
          })
        }),
        j.jsx("style", {
          children: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `
        })
      ]
    });
  }
  function nk(t) {
    return t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : t < 1024 * 1024 * 1024 ? `${(t / (1024 * 1024)).toFixed(1)} MB` : `${(t / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  }
  function rk(t) {
    return t.loading ? "\u2026" : t.used === 0 ? "empty" : `${nk(t.used)} used`;
  }
  function ik() {
    const [t, r] = ye.useState({
      used: 0,
      quota: 0,
      loading: true
    }), i = ye.useCallback(async () => {
      r((l) => ({
        ...l,
        loading: true
      }));
      try {
        const l = await navigator.storage.estimate();
        r({
          used: l.usage ?? 0,
          quota: l.quota ?? 0,
          loading: false
        });
      } catch {
        r({
          used: 0,
          quota: 0,
          loading: false
        });
      }
    }, []);
    return ye.useEffect(() => {
      i();
    }, [
      i
    ]), {
      info: t,
      refresh: i
    };
  }
  const De = {
    backdrop: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.65)",
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    },
    modal: {
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: 12,
      width: "100%",
      maxWidth: 560,
      maxHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      borderBottom: "1px solid var(--border)",
      flexShrink: 0
    },
    title: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--text)"
    },
    close: {
      background: "none",
      border: "none",
      color: "var(--muted)",
      fontSize: 16,
      cursor: "pointer",
      padding: "2px 6px"
    },
    tabs: {
      display: "flex",
      borderBottom: "1px solid var(--border)",
      flexShrink: 0
    },
    tab: (t) => ({
      flex: 1,
      padding: "10px 16px",
      fontSize: 13,
      fontWeight: 600,
      background: "none",
      border: "none",
      borderBottom: t ? "2px solid var(--accent)" : "2px solid transparent",
      color: t ? "var(--text)" : "var(--muted)",
      cursor: "pointer"
    }),
    body: {
      overflowY: "auto",
      flex: 1,
      padding: "20px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    },
    lead: {
      fontSize: 14,
      color: "var(--muted)",
      lineHeight: 1.65
    },
    stepItem: {
      display: "flex",
      gap: 12,
      fontSize: 13,
      color: "var(--muted)",
      lineHeight: 1.6
    },
    stepIcon: {
      fontSize: 18,
      flexShrink: 0,
      width: 24,
      textAlign: "center",
      marginTop: 1
    },
    techItem: {
      fontSize: 13,
      color: "var(--muted)",
      lineHeight: 1.6,
      background: "var(--bg)",
      border: "1px solid var(--border)",
      borderRadius: 6,
      padding: "10px 14px"
    },
    techLabel: {
      display: "block",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--accent-hover)",
      fontFamily: "monospace",
      marginBottom: 3
    },
    infoBtn: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      border: "1px solid var(--border)",
      background: "none",
      color: "var(--muted)",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer"
    }
  };
  function ok() {
    const { stage: t, progress: r, error: i, importZip: l, clearKnowledgeBase: u, oramaDb: a, manifest: c, chunks: f, graphEdges: h } = v0(), { info: m, refresh: g } = ik(), [y, v] = ye.useState(false), [w, I] = ye.useState("functional"), D = ye.useCallback((b) => {
      b.target.dataset.backdrop && v(false);
    }, []), N = t === "extracting" || t === "caching" || t === "loading-index", T = t === "loading-model" || t === "ready";
    return j.jsxs("div", {
      style: {
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
        display: "flex",
        flexDirection: "column"
      },
      children: [
        y && j.jsx("div", {
          style: De.backdrop,
          "data-backdrop": "1",
          onClick: D,
          children: j.jsxs("div", {
            style: De.modal,
            children: [
              j.jsxs("div", {
                style: De.header,
                children: [
                  j.jsx("span", {
                    style: De.title,
                    children: "About this app"
                  }),
                  j.jsx("button", {
                    style: De.close,
                    onClick: () => v(false),
                    children: "\u2715"
                  })
                ]
              }),
              j.jsx("div", {
                style: De.tabs,
                children: [
                  "functional",
                  "technical"
                ].map((b) => j.jsx("button", {
                  style: De.tab(w === b),
                  onClick: () => I(b),
                  children: b === "functional" ? "What it does" : "How it works"
                }, b))
              }),
              j.jsx("div", {
                style: De.body,
                children: w === "functional" ? j.jsxs(j.Fragment, {
                  children: [
                    j.jsx("p", {
                      style: De.lead,
                      children: "Chat with your documents completely offline \u2014 no server, no API keys, no internet after the first load."
                    }),
                    j.jsxs("div", {
                      style: De.stepItem,
                      children: [
                        j.jsx("span", {
                          style: De.stepIcon,
                          children: "\u{1F4E5}"
                        }),
                        j.jsxs("div", {
                          children: [
                            j.jsx("strong", {
                              children: "Drop the exported zip"
                            }),
                            j.jsx("br", {}),
                            "The zip was built by the Export app \u2014 it contains your documents, search index, knowledge graph, and the chat model."
                          ]
                        })
                      ]
                    }),
                    j.jsxs("div", {
                      style: De.stepItem,
                      children: [
                        j.jsx("span", {
                          style: De.stepIcon,
                          children: "\u23F3"
                        }),
                        j.jsxs("div", {
                          children: [
                            j.jsx("strong", {
                              children: "Wait for extraction"
                            }),
                            j.jsx("br", {}),
                            "The browser extracts the zip into local OPFS storage. Takes 1\u20133 minutes on first load. Drop the same zip again \u2014 it's instant."
                          ]
                        })
                      ]
                    }),
                    j.jsxs("div", {
                      style: De.stepItem,
                      children: [
                        j.jsx("span", {
                          style: De.stepIcon,
                          children: "\u{1F4AC}"
                        }),
                        j.jsxs("div", {
                          children: [
                            j.jsx("strong", {
                              children: "Ask questions"
                            }),
                            j.jsx("br", {}),
                            "The AI answers from your documents. Sources are shown below each answer."
                          ]
                        })
                      ]
                    }),
                    j.jsxs("div", {
                      style: De.stepItem,
                      children: [
                        j.jsx("span", {
                          style: De.stepIcon,
                          children: "\u{1F4D6}"
                        }),
                        j.jsxs("div", {
                          children: [
                            j.jsx("strong", {
                              children: "Gets smarter as you use it"
                            }),
                            j.jsx("br", {}),
                            "The first question about a document synthesizes a wiki page and caches it locally. Subsequent questions on that document use the cached page \u2014 zero model calls."
                          ]
                        })
                      ]
                    })
                  ]
                }) : j.jsxs(j.Fragment, {
                  children: [
                    j.jsx("p", {
                      style: De.lead,
                      children: "Everything runs in the browser. No server, no Python, no backend. The full inference pipeline runs on-device."
                    }),
                    j.jsxs("div", {
                      style: De.techItem,
                      children: [
                        j.jsx("span", {
                          style: De.techLabel,
                          children: "OPFS extraction"
                        }),
                        "fflate streaming unzip \u2192 OPFS, keyed by manifest_hash. Re-drop = instant load from OPFS."
                      ]
                    }),
                    j.jsxs("div", {
                      style: De.techItem,
                      children: [
                        j.jsx("span", {
                          style: De.techLabel,
                          children: "Embed model restore"
                        }),
                        "embed-cache/ entries written back to Cache API under original HuggingFace CDN URLs. Transformers.js loads them with zero network calls."
                      ]
                    }),
                    j.jsxs("div", {
                      style: De.techItem,
                      children: [
                        j.jsx("span", {
                          style: De.techLabel,
                          children: "Chat model from blob URLs"
                        }),
                        "Model safetensors shards read from OPFS \u2192 Blob \u2192 blob: URLs \u2192 injected into WebLLM appConfig. Revoked after init to free memory."
                      ]
                    }),
                    j.jsxs("div", {
                      style: De.techItem,
                      children: [
                        j.jsx("span", {
                          style: De.techLabel,
                          children: "Query pipeline (per message)"
                        }),
                        "Embed query \u2192 Orama BM25+vector hybrid \u2192 top-3 RAG chunks \u2192 2-hop BFS graph expansion \u2192 OPFS wiki lookup \u2192 three-slot user-turn context: wiki (~800 tok) \u2192 graph (~1,750 tok) \u2192 RAG (~875 tok) \u2192 WebLLM stream."
                      ]
                    }),
                    j.jsxs("div", {
                      style: De.techItem,
                      children: [
                        j.jsx("span", {
                          style: De.techLabel,
                          children: "Context always in user turn"
                        }),
                        "Small models (Phi-3, Gemma-2B) attend to user-turn content far more reliably than system-prompt content. All retrieved context is injected into the user message, not the system prompt."
                      ]
                    }),
                    j.jsxs("div", {
                      style: De.techItem,
                      children: [
                        j.jsx("span", {
                          style: De.techLabel,
                          children: "SharedArrayBuffer"
                        }),
                        "Required by WebLLM's WASM threading. coi-serviceworker provides COOP/COEP headers on first load, reloads the page, then runs normally."
                      ]
                    })
                  ]
                })
              })
            ]
          })
        }),
        j.jsxs("nav", {
          style: {
            padding: "12px 24px",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "var(--surface)",
            flexShrink: 0
          },
          children: [
            j.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10
              },
              children: [
                j.jsx("span", {
                  style: {
                    fontWeight: 700,
                    fontSize: 16,
                    letterSpacing: "-0.5px"
                  },
                  children: "Knowledge Base Chat"
                }),
                j.jsx("button", {
                  onClick: () => v(true),
                  style: De.infoBtn,
                  title: "About this app",
                  children: "?"
                })
              ]
            }),
            !T && j.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 4
              },
              children: [
                j.jsxs("button", {
                  onClick: async () => {
                    await u(), g();
                  },
                  style: {
                    background: "none",
                    border: "1px solid var(--danger)",
                    color: "var(--danger)",
                    borderRadius: 6,
                    padding: "6px 14px",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 500
                  },
                  children: [
                    "Clear cache \xB7 ",
                    rk(m)
                  ]
                }),
                j.jsx("span", {
                  style: {
                    fontSize: 11,
                    color: "var(--muted)"
                  },
                  children: "port 5199 only \u2014 export app (5198) has its own cache"
                })
              ]
            })
          ]
        }),
        j.jsxs("main", {
          style: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          children: [
            t === "idle" && j.jsxs("div", {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 40,
                gap: 24
              },
              children: [
                j.jsxs("div", {
                  style: {
                    textAlign: "center",
                    marginBottom: 8
                  },
                  children: [
                    j.jsx("h1", {
                      style: {
                        fontSize: 28,
                        fontWeight: 700,
                        marginBottom: 8,
                        letterSpacing: "-0.5px"
                      },
                      children: "Import Knowledge Base"
                    }),
                    j.jsx("p", {
                      style: {
                        color: "var(--muted)",
                        fontSize: 15,
                        maxWidth: 400
                      },
                      children: "Drop your exported knowledge base zip to load it for offline chat."
                    })
                  ]
                }),
                j.jsx(w0, {
                  onFile: l,
                  disabled: false
                })
              ]
            }),
            N && j.jsx("div", {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 40
              },
              children: j.jsx(kd, {
                stage: t,
                progress: r,
                error: null
              })
            }),
            t === "error" && j.jsxs("div", {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 40,
                gap: 16
              },
              children: [
                j.jsx(kd, {
                  stage: t,
                  progress: r,
                  error: i
                }),
                j.jsx("button", {
                  onClick: u,
                  style: {
                    background: "var(--accent)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "10px 24px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 14
                  },
                  children: "Clear and try again"
                })
              ]
            }),
            T && j.jsx(tk, {
              oramaDb: a,
              manifest: c,
              onClear: u,
              chunks: f,
              graphEdges: h
            })
          ]
        })
      ]
    });
  }
  Fg.createRoot(document.getElementById("root")).render(j.jsx(Og.StrictMode, {
    children: j.jsx(ok, {})
  }));
})();
export {
  wk as A,
  xd as B,
  mk as C,
  wp as D,
  uk as E,
  pk as F,
  Uu as G,
  br as H,
  my as I,
  cd as J,
  el as K,
  Gy as L,
  md as M,
  Xy as N,
  dk as O,
  Vy as P,
  vk as Q,
  Ky as R,
  yp as S,
  l0 as T,
  __tla,
  sk as a,
  lk as b,
  be as c,
  dy as d,
  ck as e,
  ak as f,
  on as g,
  Sy as h,
  Mi as i,
  Ny as j,
  yk as k,
  Sp as l,
  Ep as m,
  gk as n,
  fk as o,
  cl as p,
  ky as q,
  hk as r,
  ly as s,
  Ye as t,
  cy as u,
  vy as v,
  Fi as w,
  ll as x,
  Tp as y,
  Hp as z
};
