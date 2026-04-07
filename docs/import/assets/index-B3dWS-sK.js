var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let vk, wd, hk, vp, sk, dk, ju, zr, hy, ad, Zo, Qy, hd, Gy, fk, Uy, yk, Ky, gp, o0, lk, ok, ze, fy, ak, uk, rn, ky, Mi, Py, gk, kp, Sp, mk, ck, al, xy, pk, oy, Ye, ay, yy, bi, ol, Cp, Vp;
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
  function ul(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  }
  var ru = {
    exports: {}
  }, Ii = {}, iu = {
    exports: {}
  }, Ie = {};
  var qf;
  function _g() {
    if (qf) return Ie;
    qf = 1;
    var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
    function v(P) {
      return P === null || typeof P != "object" ? null : (P = y && P[y] || P["@@iterator"], typeof P == "function" ? P : null);
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
    function N(P, M, S) {
      this.props = P, this.context = M, this.refs = D, this.updater = S || w;
    }
    N.prototype.isReactComponent = {}, N.prototype.setState = function(P, M) {
      if (typeof P != "object" && typeof P != "function" && P != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, P, M, "setState");
    }, N.prototype.forceUpdate = function(P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    };
    function T() {
    }
    T.prototype = N.prototype;
    function b(P, M, S) {
      this.props = P, this.context = M, this.refs = D, this.updater = S || w;
    }
    var L = b.prototype = new T();
    L.constructor = b, I(L, N.prototype), L.isPureReactComponent = true;
    var W = Array.isArray, Z = Object.prototype.hasOwnProperty, A = {
      current: null
    }, ee = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function ne(P, M, S) {
      var oe, pe = {}, de = null, Ce = null;
      if (M != null) for (oe in M.ref !== void 0 && (Ce = M.ref), M.key !== void 0 && (de = "" + M.key), M) Z.call(M, oe) && !ee.hasOwnProperty(oe) && (pe[oe] = M[oe]);
      var ke = arguments.length - 2;
      if (ke === 1) pe.children = S;
      else if (1 < ke) {
        for (var Te = Array(ke), Ve = 0; Ve < ke; Ve++) Te[Ve] = arguments[Ve + 2];
        pe.children = Te;
      }
      if (P && P.defaultProps) for (oe in ke = P.defaultProps, ke) pe[oe] === void 0 && (pe[oe] = ke[oe]);
      return {
        $$typeof: n,
        type: P,
        key: de,
        ref: Ce,
        props: pe,
        _owner: A.current
      };
    }
    function le(P, M) {
      return {
        $$typeof: n,
        type: P.type,
        key: M,
        ref: P.ref,
        props: P.props,
        _owner: P._owner
      };
    }
    function he(P) {
      return typeof P == "object" && P !== null && P.$$typeof === n;
    }
    function Q(P) {
      var M = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + P.replace(/[=:]/g, function(S) {
        return M[S];
      });
    }
    var B = /\/+/g;
    function ue(P, M) {
      return typeof P == "object" && P !== null && P.key != null ? Q("" + P.key) : M.toString(36);
    }
    function X(P, M, S, oe, pe) {
      var de = typeof P;
      (de === "undefined" || de === "boolean") && (P = null);
      var Ce = false;
      if (P === null) Ce = true;
      else switch (de) {
        case "string":
        case "number":
          Ce = true;
          break;
        case "object":
          switch (P.$$typeof) {
            case n:
            case r:
              Ce = true;
          }
      }
      if (Ce) return Ce = P, pe = pe(Ce), P = oe === "" ? "." + ue(Ce, 0) : oe, W(pe) ? (S = "", P != null && (S = P.replace(B, "$&/") + "/"), X(pe, M, S, "", function(Ve) {
        return Ve;
      })) : pe != null && (he(pe) && (pe = le(pe, S + (!pe.key || Ce && Ce.key === pe.key ? "" : ("" + pe.key).replace(B, "$&/") + "/") + P)), M.push(pe)), 1;
      if (Ce = 0, oe = oe === "" ? "." : oe + ":", W(P)) for (var ke = 0; ke < P.length; ke++) {
        de = P[ke];
        var Te = oe + ue(de, ke);
        Ce += X(de, M, S, Te, pe);
      }
      else if (Te = v(P), typeof Te == "function") for (P = Te.call(P), ke = 0; !(de = P.next()).done; ) de = de.value, Te = oe + ue(de, ke++), Ce += X(de, M, S, Te, pe);
      else if (de === "object") throw M = String(P), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
      return Ce;
    }
    function U(P, M, S) {
      if (P == null) return P;
      var oe = [], pe = 0;
      return X(P, oe, "", "", function(de) {
        return M.call(S, de, pe++);
      }), oe;
    }
    function q(P) {
      if (P._status === -1) {
        var M = P._result;
        M = M(), M.then(function(S) {
          (P._status === 0 || P._status === -1) && (P._status = 1, P._result = S);
        }, function(S) {
          (P._status === 0 || P._status === -1) && (P._status = 2, P._result = S);
        }), P._status === -1 && (P._status = 0, P._result = M);
      }
      if (P._status === 1) return P._result.default;
      throw P._result;
    }
    var te = {
      current: null
    }, j = {
      transition: null
    }, G = {
      ReactCurrentDispatcher: te,
      ReactCurrentBatchConfig: j,
      ReactCurrentOwner: A
    };
    function k() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return Ie.Children = {
      map: U,
      forEach: function(P, M, S) {
        U(P, function() {
          M.apply(this, arguments);
        }, S);
      },
      count: function(P) {
        var M = 0;
        return U(P, function() {
          M++;
        }), M;
      },
      toArray: function(P) {
        return U(P, function(M) {
          return M;
        }) || [];
      },
      only: function(P) {
        if (!he(P)) throw Error("React.Children.only expected to receive a single React element child.");
        return P;
      }
    }, Ie.Component = N, Ie.Fragment = i, Ie.Profiler = u, Ie.PureComponent = b, Ie.StrictMode = l, Ie.Suspense = h, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, Ie.act = k, Ie.cloneElement = function(P, M, S) {
      if (P == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + P + ".");
      var oe = I({}, P.props), pe = P.key, de = P.ref, Ce = P._owner;
      if (M != null) {
        if (M.ref !== void 0 && (de = M.ref, Ce = A.current), M.key !== void 0 && (pe = "" + M.key), P.type && P.type.defaultProps) var ke = P.type.defaultProps;
        for (Te in M) Z.call(M, Te) && !ee.hasOwnProperty(Te) && (oe[Te] = M[Te] === void 0 && ke !== void 0 ? ke[Te] : M[Te]);
      }
      var Te = arguments.length - 2;
      if (Te === 1) oe.children = S;
      else if (1 < Te) {
        ke = Array(Te);
        for (var Ve = 0; Ve < Te; Ve++) ke[Ve] = arguments[Ve + 2];
        oe.children = ke;
      }
      return {
        $$typeof: n,
        type: P.type,
        key: pe,
        ref: de,
        props: oe,
        _owner: Ce
      };
    }, Ie.createContext = function(P) {
      return P = {
        $$typeof: c,
        _currentValue: P,
        _currentValue2: P,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }, P.Provider = {
        $$typeof: a,
        _context: P
      }, P.Consumer = P;
    }, Ie.createElement = ne, Ie.createFactory = function(P) {
      var M = ne.bind(null, P);
      return M.type = P, M;
    }, Ie.createRef = function() {
      return {
        current: null
      };
    }, Ie.forwardRef = function(P) {
      return {
        $$typeof: f,
        render: P
      };
    }, Ie.isValidElement = he, Ie.lazy = function(P) {
      return {
        $$typeof: g,
        _payload: {
          _status: -1,
          _result: P
        },
        _init: q
      };
    }, Ie.memo = function(P, M) {
      return {
        $$typeof: m,
        type: P,
        compare: M === void 0 ? null : M
      };
    }, Ie.startTransition = function(P) {
      var M = j.transition;
      j.transition = {};
      try {
        P();
      } finally {
        j.transition = M;
      }
    }, Ie.unstable_act = k, Ie.useCallback = function(P, M) {
      return te.current.useCallback(P, M);
    }, Ie.useContext = function(P) {
      return te.current.useContext(P);
    }, Ie.useDebugValue = function() {
    }, Ie.useDeferredValue = function(P) {
      return te.current.useDeferredValue(P);
    }, Ie.useEffect = function(P, M) {
      return te.current.useEffect(P, M);
    }, Ie.useId = function() {
      return te.current.useId();
    }, Ie.useImperativeHandle = function(P, M, S) {
      return te.current.useImperativeHandle(P, M, S);
    }, Ie.useInsertionEffect = function(P, M) {
      return te.current.useInsertionEffect(P, M);
    }, Ie.useLayoutEffect = function(P, M) {
      return te.current.useLayoutEffect(P, M);
    }, Ie.useMemo = function(P, M) {
      return te.current.useMemo(P, M);
    }, Ie.useReducer = function(P, M, S) {
      return te.current.useReducer(P, M, S);
    }, Ie.useRef = function(P) {
      return te.current.useRef(P);
    }, Ie.useState = function(P) {
      return te.current.useState(P);
    }, Ie.useSyncExternalStore = function(P, M, S) {
      return te.current.useSyncExternalStore(P, M, S);
    }, Ie.useTransition = function() {
      return te.current.useTransition();
    }, Ie.version = "18.3.1", Ie;
  }
  var Kf;
  function Bu() {
    return Kf || (Kf = 1, iu.exports = _g()), iu.exports;
  }
  var Qf;
  function Pg() {
    if (Qf) return Ii;
    Qf = 1;
    var n = Bu(), r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = {
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
    return Ii.Fragment = i, Ii.jsx = c, Ii.jsxs = c, Ii;
  }
  var Gf;
  function Ng() {
    return Gf || (Gf = 1, ru.exports = Pg()), ru.exports;
  }
  var ie = Ng(), ve = Bu();
  const Dg = ul(ve);
  var Jo = {}, ou = {
    exports: {}
  }, gt = {}, lu = {
    exports: {}
  }, su = {};
  var Xf;
  function Og() {
    return Xf || (Xf = 1, (function(n) {
      function r(j, G) {
        var k = j.length;
        j.push(G);
        e: for (; 0 < k; ) {
          var P = k - 1 >>> 1, M = j[P];
          if (0 < u(M, G)) j[P] = G, j[k] = M, k = P;
          else break e;
        }
      }
      function i(j) {
        return j.length === 0 ? null : j[0];
      }
      function l(j) {
        if (j.length === 0) return null;
        var G = j[0], k = j.pop();
        if (k !== G) {
          j[0] = k;
          e: for (var P = 0, M = j.length, S = M >>> 1; P < S; ) {
            var oe = 2 * (P + 1) - 1, pe = j[oe], de = oe + 1, Ce = j[de];
            if (0 > u(pe, k)) de < M && 0 > u(Ce, pe) ? (j[P] = Ce, j[de] = k, P = de) : (j[P] = pe, j[oe] = k, P = oe);
            else if (de < M && 0 > u(Ce, k)) j[P] = Ce, j[de] = k, P = de;
            else break e;
          }
        }
        return G;
      }
      function u(j, G) {
        var k = j.sortIndex - G.sortIndex;
        return k !== 0 ? k : j.id - G.id;
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        n.unstable_now = function() {
          return a.now();
        };
      } else {
        var c = Date, f = c.now();
        n.unstable_now = function() {
          return c.now() - f;
        };
      }
      var h = [], m = [], g = 1, y = null, v = 3, w = false, I = false, D = false, N = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function L(j) {
        for (var G = i(m); G !== null; ) {
          if (G.callback === null) l(m);
          else if (G.startTime <= j) l(m), G.sortIndex = G.expirationTime, r(h, G);
          else break;
          G = i(m);
        }
      }
      function W(j) {
        if (D = false, L(j), !I) if (i(h) !== null) I = true, q(Z);
        else {
          var G = i(m);
          G !== null && te(W, G.startTime - j);
        }
      }
      function Z(j, G) {
        I = false, D && (D = false, T(ne), ne = -1), w = true;
        var k = v;
        try {
          for (L(G), y = i(h); y !== null && (!(y.expirationTime > G) || j && !Q()); ) {
            var P = y.callback;
            if (typeof P == "function") {
              y.callback = null, v = y.priorityLevel;
              var M = P(y.expirationTime <= G);
              G = n.unstable_now(), typeof M == "function" ? y.callback = M : y === i(h) && l(h), L(G);
            } else l(h);
            y = i(h);
          }
          if (y !== null) var S = true;
          else {
            var oe = i(m);
            oe !== null && te(W, oe.startTime - G), S = false;
          }
          return S;
        } finally {
          y = null, v = k, w = false;
        }
      }
      var A = false, ee = null, ne = -1, le = 5, he = -1;
      function Q() {
        return !(n.unstable_now() - he < le);
      }
      function B() {
        if (ee !== null) {
          var j = n.unstable_now();
          he = j;
          var G = true;
          try {
            G = ee(true, j);
          } finally {
            G ? ue() : (A = false, ee = null);
          }
        } else A = false;
      }
      var ue;
      if (typeof b == "function") ue = function() {
        b(B);
      };
      else if (typeof MessageChannel < "u") {
        var X = new MessageChannel(), U = X.port2;
        X.port1.onmessage = B, ue = function() {
          U.postMessage(null);
        };
      } else ue = function() {
        N(B, 0);
      };
      function q(j) {
        ee = j, A || (A = true, ue());
      }
      function te(j, G) {
        ne = N(function() {
          j(n.unstable_now());
        }, G);
      }
      n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(j) {
        j.callback = null;
      }, n.unstable_continueExecution = function() {
        I || w || (I = true, q(Z));
      }, n.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : le = 0 < j ? Math.floor(1e3 / j) : 5;
      }, n.unstable_getCurrentPriorityLevel = function() {
        return v;
      }, n.unstable_getFirstCallbackNode = function() {
        return i(h);
      }, n.unstable_next = function(j) {
        switch (v) {
          case 1:
          case 2:
          case 3:
            var G = 3;
            break;
          default:
            G = v;
        }
        var k = v;
        v = G;
        try {
          return j();
        } finally {
          v = k;
        }
      }, n.unstable_pauseExecution = function() {
      }, n.unstable_requestPaint = function() {
      }, n.unstable_runWithPriority = function(j, G) {
        switch (j) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            j = 3;
        }
        var k = v;
        v = j;
        try {
          return G();
        } finally {
          v = k;
        }
      }, n.unstable_scheduleCallback = function(j, G, k) {
        var P = n.unstable_now();
        switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? P + k : P) : k = P, j) {
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
        return M = k + M, j = {
          id: g++,
          callback: G,
          priorityLevel: j,
          startTime: k,
          expirationTime: M,
          sortIndex: -1
        }, k > P ? (j.sortIndex = k, r(m, j), i(h) === null && j === i(m) && (D ? (T(ne), ne = -1) : D = true, te(W, k - P))) : (j.sortIndex = M, r(h, j), I || w || (I = true, q(Z))), j;
      }, n.unstable_shouldYield = Q, n.unstable_wrapCallback = function(j) {
        var G = v;
        return function() {
          var k = v;
          v = G;
          try {
            return j.apply(this, arguments);
          } finally {
            v = k;
          }
        };
      };
    })(su)), su;
  }
  var Jf;
  function Rg() {
    return Jf || (Jf = 1, lu.exports = Og()), lu.exports;
  }
  var Zf;
  function Ag() {
    if (Zf) return gt;
    Zf = 1;
    var n = Bu(), r = Rg();
    function i(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 1; o < arguments.length; o++) t += "&args[]=" + encodeURIComponent(arguments[o]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var l = /* @__PURE__ */ new Set(), u = {};
    function a(e, t) {
      c(e, t), c(e + "Capture", t);
    }
    function c(e, t) {
      for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, y = {};
    function v(e) {
      return h.call(y, e) ? true : h.call(g, e) ? false : m.test(e) ? y[e] = true : (g[e] = true, false);
    }
    function w(e, t, o, s) {
      if (o !== null && o.type === 0) return false;
      switch (typeof t) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          return s ? false : o !== null ? !o.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
          return false;
      }
    }
    function I(e, t, o, s) {
      if (t === null || typeof t > "u" || w(e, t, o, s)) return true;
      if (s) return false;
      if (o !== null) switch (o.type) {
        case 3:
          return !t;
        case 4:
          return t === false;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
      return false;
    }
    function D(e, t, o, s, d, p, x) {
      this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = d, this.mustUseProperty = o, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = x;
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
      var t = e[0];
      N[t] = new D(t, 1, false, e[1], null, false, false);
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
      var t = e.replace(T, b);
      N[t] = new D(t, 1, false, e, null, false, false);
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
      var t = e.replace(T, b);
      N[t] = new D(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(e) {
      var t = e.replace(T, b);
      N[t] = new D(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
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
    function L(e, t, o, s) {
      var d = N.hasOwnProperty(t) ? N[t] : null;
      (d !== null ? d.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (I(t, o, d, s) && (o = null), s || d === null ? v(t) && (o === null ? e.removeAttribute(t) : e.setAttribute(t, "" + o)) : d.mustUseProperty ? e[d.propertyName] = o === null ? d.type === 3 ? false : "" : o : (t = d.attributeName, s = d.attributeNamespace, o === null ? e.removeAttribute(t) : (d = d.type, o = d === 3 || d === 4 && o === true ? "" : "" + o, s ? e.setAttributeNS(s, t, o) : e.setAttribute(t, o))));
    }
    var W = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Z = Symbol.for("react.element"), A = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), Q = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), j = Symbol.iterator;
    function G(e) {
      return e === null || typeof e != "object" ? null : (e = j && e[j] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var k = Object.assign, P;
    function M(e) {
      if (P === void 0) try {
        throw Error();
      } catch (o) {
        var t = o.stack.trim().match(/\n( *(at )?)/);
        P = t && t[1] || "";
      }
      return `
` + P + e;
    }
    var S = false;
    function oe(e, t) {
      if (!e || S) return "";
      S = true;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t) if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (z) {
            var s = z;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (z) {
            s = z;
          }
          e.call(t.prototype);
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
        case ee:
          return "Fragment";
        case A:
          return "Portal";
        case le:
          return "Profiler";
        case ne:
          return "StrictMode";
        case ue:
          return "Suspense";
        case X:
          return "SuspenseList";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case Q:
          return (e.displayName || "Context") + ".Consumer";
        case he:
          return (e._context.displayName || "Context") + ".Provider";
        case B:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case U:
          return t = e.displayName || null, t !== null ? t : de(e.type) || "Memo";
        case q:
          t = e._payload, e = e._init;
          try {
            return de(e(t));
          } catch {
          }
      }
      return null;
    }
    function Ce(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return de(t);
        case 8:
          return t === ne ? "StrictMode" : "Mode";
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
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
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
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Ve(e) {
      var t = Te(e) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
        var d = o.get, p = o.set;
        return Object.defineProperty(e, t, {
          configurable: true,
          get: function() {
            return d.call(this);
          },
          set: function(x) {
            s = "" + x, p.call(this, x);
          }
        }), Object.defineProperty(e, t, {
          enumerable: o.enumerable
        }), {
          getValue: function() {
            return s;
          },
          setValue: function(x) {
            s = "" + x;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Dt(e) {
      e._valueTracker || (e._valueTracker = Ve(e));
    }
    function Un(e) {
      if (!e) return false;
      var t = e._valueTracker;
      if (!t) return true;
      var o = t.getValue(), s = "";
      return e && (s = Te(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== o ? (t.setValue(e), true) : false;
    }
    function on(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Fr(e, t) {
      var o = t.checked;
      return k({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: o ?? e._wrapperState.initialChecked
      });
    }
    function Br(e, t) {
      var o = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
      o = ke(t.value != null ? t.value : o), e._wrapperState = {
        initialChecked: s,
        initialValue: o,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
      };
    }
    function jr(e, t) {
      t = t.checked, t != null && L(e, "checked", t, false);
    }
    function rr(e, t) {
      jr(e, t);
      var o = ke(t.value), s = t.type;
      if (o != null) s === "number" ? (o === 0 && e.value === "" || e.value != o) && (e.value = "" + o) : e.value !== "" + o && (e.value = "" + o);
      else if (s === "submit" || s === "reset") {
        e.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ir(e, t.type, o) : t.hasOwnProperty("defaultValue") && ir(e, t.type, ke(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function ji(e, t, o) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var s = t.type;
        if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, o || t === e.value || (e.value = t), e.defaultValue = t;
      }
      o = e.name, o !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, o !== "" && (e.name = o);
    }
    function ir(e, t, o) {
      (t !== "number" || on(e.ownerDocument) !== e) && (o == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
    }
    var mn = Array.isArray;
    function gn(e, t, o, s) {
      if (e = e.options, t) {
        t = {};
        for (var d = 0; d < o.length; d++) t["$" + o[d]] = true;
        for (o = 0; o < e.length; o++) d = t.hasOwnProperty("$" + e[o].value), e[o].selected !== d && (e[o].selected = d), d && s && (e[o].defaultSelected = true);
      } else {
        for (o = "" + ke(o), t = null, d = 0; d < e.length; d++) {
          if (e[d].value === o) {
            e[d].selected = true, s && (e[d].defaultSelected = true);
            return;
          }
          t !== null || e[d].disabled || (t = e[d]);
        }
        t !== null && (t.selected = true);
      }
    }
    function Ur(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
      return k({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
      });
    }
    function Ui(e, t) {
      var o = t.value;
      if (o == null) {
        if (o = t.children, t = t.defaultValue, o != null) {
          if (t != null) throw Error(i(92));
          if (mn(o)) {
            if (1 < o.length) throw Error(i(93));
            o = o[0];
          }
          t = o;
        }
        t == null && (t = ""), o = t;
      }
      e._wrapperState = {
        initialValue: ke(o)
      };
    }
    function Vi(e, t) {
      var o = ke(t.value), s = ke(t.defaultValue);
      o != null && (o = "" + o, o !== e.value && (e.value = o), t.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)), s != null && (e.defaultValue = "" + s);
    }
    function Hi(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
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
    function J(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml" ? F(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var ye, Ee = (function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, o, s, d) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, o, s, d);
        });
      } : e;
    })(function(e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (ye = ye || document.createElement("div"), ye.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ye.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
    function _e(e, t) {
      if (t) {
        var o = e.firstChild;
        if (o && o === e.lastChild && o.nodeType === 3) {
          o.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var et = {
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
    }, ln = [
      "Webkit",
      "ms",
      "Moz",
      "O"
    ];
    Object.keys(et).forEach(function(e) {
      ln.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), et[t] = et[e];
      });
    });
    function Ot(e, t, o) {
      return t == null || typeof t == "boolean" || t === "" ? "" : o || typeof t != "number" || t === 0 || et.hasOwnProperty(e) && et[e] ? ("" + t).trim() : t + "px";
    }
    function yn(e, t) {
      e = e.style;
      for (var o in t) if (t.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, d = Ot(o, t[o], s);
        o === "float" && (o = "cssFloat"), s ? e.setProperty(o, d) : e[o] = d;
      }
    }
    var Vn = k({
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
    function tt(e, t) {
      if (t) {
        if (Vn[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(i(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(i(62));
      }
    }
    function Kt(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
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
    var xt = null;
    function vl(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var wl = null, or = null, lr = null;
    function aa(e) {
      if (e = ai(e)) {
        if (typeof wl != "function") throw Error(i(280));
        var t = e.stateNode;
        t && (t = po(t), wl(e.stateNode, e.type, t));
      }
    }
    function ca(e) {
      or ? lr ? lr.push(e) : lr = [
        e
      ] : or = e;
    }
    function fa() {
      if (or) {
        var e = or, t = lr;
        if (lr = or = null, aa(e), t) for (e = 0; e < t.length; e++) aa(t[e]);
      }
    }
    function da(e, t) {
      return e(t);
    }
    function pa() {
    }
    var xl = false;
    function ha(e, t, o) {
      if (xl) return e(t, o);
      xl = true;
      try {
        return da(e, t, o);
      } finally {
        xl = false, (or !== null || lr !== null) && (pa(), fa());
      }
    }
    function Vr(e, t) {
      var o = e.stateNode;
      if (o === null) return null;
      var s = po(o);
      if (s === null) return null;
      o = s[t];
      e: switch (t) {
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
      if (o && typeof o != "function") throw Error(i(231, t, typeof o));
      return o;
    }
    var kl = false;
    if (f) try {
      var Hr = {};
      Object.defineProperty(Hr, "passive", {
        get: function() {
          kl = true;
        }
      }), window.addEventListener("test", Hr, Hr), window.removeEventListener("test", Hr, Hr);
    } catch {
      kl = false;
    }
    function Ah(e, t, o, s, d, p, x, E, C) {
      var z = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(o, z);
      } catch (H) {
        this.onError(H);
      }
    }
    var Wr = false, Wi = null, $i = false, Sl = null, Lh = {
      onError: function(e) {
        Wr = true, Wi = e;
      }
    };
    function zh(e, t, o, s, d, p, x, E, C) {
      Wr = false, Wi = null, Ah.apply(Lh, arguments);
    }
    function Mh(e, t, o, s, d, p, x, E, C) {
      if (zh.apply(this, arguments), Wr) {
        if (Wr) {
          var z = Wi;
          Wr = false, Wi = null;
        } else throw Error(i(198));
        $i || ($i = true, Sl = z);
      }
    }
    function Hn(e) {
      var t = e, o = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (o = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? o : null;
    }
    function ma(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function ga(e) {
      if (Hn(e) !== e) throw Error(i(188));
    }
    function bh(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Hn(e), t === null) throw Error(i(188));
        return t !== e ? null : e;
      }
      for (var o = e, s = t; ; ) {
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
            if (p === o) return ga(d), e;
            if (p === s) return ga(d), t;
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
      return o.stateNode.current === o ? e : t;
    }
    function ya(e) {
      return e = bh(e), e !== null ? va(e) : null;
    }
    function va(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = va(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var wa = r.unstable_scheduleCallback, xa = r.unstable_cancelCallback, Fh = r.unstable_shouldYield, Bh = r.unstable_requestPaint, We = r.unstable_now, jh = r.unstable_getCurrentPriorityLevel, El = r.unstable_ImmediatePriority, ka = r.unstable_UserBlockingPriority, Yi = r.unstable_NormalPriority, Uh = r.unstable_LowPriority, Sa = r.unstable_IdlePriority, qi = null, Qt = null;
    function Vh(e) {
      if (Qt && typeof Qt.onCommitFiberRoot == "function") try {
        Qt.onCommitFiberRoot(qi, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
    }
    var Bt = Math.clz32 ? Math.clz32 : $h, Hh = Math.log, Wh = Math.LN2;
    function $h(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Hh(e) / Wh | 0) | 0;
    }
    var Ki = 64, Qi = 4194304;
    function $r(e) {
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
    function Gi(e, t) {
      var o = e.pendingLanes;
      if (o === 0) return 0;
      var s = 0, d = e.suspendedLanes, p = e.pingedLanes, x = o & 268435455;
      if (x !== 0) {
        var E = x & ~d;
        E !== 0 ? s = $r(E) : (p &= x, p !== 0 && (s = $r(p)));
      } else x = o & ~d, x !== 0 ? s = $r(x) : p !== 0 && (s = $r(p));
      if (s === 0) return 0;
      if (t !== 0 && t !== s && (t & d) === 0 && (d = s & -s, p = t & -t, d >= p || d === 16 && (p & 4194240) !== 0)) return t;
      if ((s & 4) !== 0 && (s |= o & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) o = 31 - Bt(t), d = 1 << o, s |= e[o], t &= ~d;
      return s;
    }
    function Yh(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
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
          return t + 5e3;
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
    function qh(e, t) {
      for (var o = e.suspendedLanes, s = e.pingedLanes, d = e.expirationTimes, p = e.pendingLanes; 0 < p; ) {
        var x = 31 - Bt(p), E = 1 << x, C = d[x];
        C === -1 ? ((E & o) === 0 || (E & s) !== 0) && (d[x] = Yh(E, t)) : C <= t && (e.expiredLanes |= E), p &= ~E;
      }
    }
    function Il(e) {
      return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Ea() {
      var e = Ki;
      return Ki <<= 1, (Ki & 4194240) === 0 && (Ki = 64), e;
    }
    function Cl(e) {
      for (var t = [], o = 0; 31 > o; o++) t.push(e);
      return t;
    }
    function Yr(e, t, o) {
      e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Bt(t), e[t] = o;
    }
    function Kh(e, t) {
      var o = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
      var s = e.eventTimes;
      for (e = e.expirationTimes; 0 < o; ) {
        var d = 31 - Bt(o), p = 1 << d;
        t[d] = 0, s[d] = -1, e[d] = -1, o &= ~p;
      }
    }
    function Tl(e, t) {
      var o = e.entangledLanes |= t;
      for (e = e.entanglements; o; ) {
        var s = 31 - Bt(o), d = 1 << s;
        d & t | e[s] & t && (e[s] |= t), o &= ~d;
      }
    }
    var Oe = 0;
    function Ia(e) {
      return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var Ca, _l, Ta, _a, Pa, Pl = false, Xi = [], vn = null, wn = null, xn = null, qr = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), kn = [], Qh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Na(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          vn = null;
          break;
        case "dragenter":
        case "dragleave":
          wn = null;
          break;
        case "mouseover":
        case "mouseout":
          xn = null;
          break;
        case "pointerover":
        case "pointerout":
          qr.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Kr.delete(t.pointerId);
      }
    }
    function Qr(e, t, o, s, d, p) {
      return e === null || e.nativeEvent !== p ? (e = {
        blockedOn: t,
        domEventName: o,
        eventSystemFlags: s,
        nativeEvent: p,
        targetContainers: [
          d
        ]
      }, t !== null && (t = ai(t), t !== null && _l(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, d !== null && t.indexOf(d) === -1 && t.push(d), e);
    }
    function Gh(e, t, o, s, d) {
      switch (t) {
        case "focusin":
          return vn = Qr(vn, e, t, o, s, d), true;
        case "dragenter":
          return wn = Qr(wn, e, t, o, s, d), true;
        case "mouseover":
          return xn = Qr(xn, e, t, o, s, d), true;
        case "pointerover":
          var p = d.pointerId;
          return qr.set(p, Qr(qr.get(p) || null, e, t, o, s, d)), true;
        case "gotpointercapture":
          return p = d.pointerId, Kr.set(p, Qr(Kr.get(p) || null, e, t, o, s, d)), true;
      }
      return false;
    }
    function Da(e) {
      var t = Wn(e.target);
      if (t !== null) {
        var o = Hn(t);
        if (o !== null) {
          if (t = o.tag, t === 13) {
            if (t = ma(o), t !== null) {
              e.blockedOn = t, Pa(e.priority, function() {
                Ta(o);
              });
              return;
            }
          } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Ji(e) {
      if (e.blockedOn !== null) return false;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var o = Dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (o === null) {
          o = e.nativeEvent;
          var s = new o.constructor(o.type, o);
          xt = s, o.target.dispatchEvent(s), xt = null;
        } else return t = ai(o), t !== null && _l(t), e.blockedOn = o, false;
        t.shift();
      }
      return true;
    }
    function Oa(e, t, o) {
      Ji(e) && o.delete(t);
    }
    function Xh() {
      Pl = false, vn !== null && Ji(vn) && (vn = null), wn !== null && Ji(wn) && (wn = null), xn !== null && Ji(xn) && (xn = null), qr.forEach(Oa), Kr.forEach(Oa);
    }
    function Gr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Pl || (Pl = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Xh)));
    }
    function Xr(e) {
      function t(d) {
        return Gr(d, e);
      }
      if (0 < Xi.length) {
        Gr(Xi[0], e);
        for (var o = 1; o < Xi.length; o++) {
          var s = Xi[o];
          s.blockedOn === e && (s.blockedOn = null);
        }
      }
      for (vn !== null && Gr(vn, e), wn !== null && Gr(wn, e), xn !== null && Gr(xn, e), qr.forEach(t), Kr.forEach(t), o = 0; o < kn.length; o++) s = kn[o], s.blockedOn === e && (s.blockedOn = null);
      for (; 0 < kn.length && (o = kn[0], o.blockedOn === null); ) Da(o), o.blockedOn === null && kn.shift();
    }
    var sr = W.ReactCurrentBatchConfig, Zi = true;
    function Jh(e, t, o, s) {
      var d = Oe, p = sr.transition;
      sr.transition = null;
      try {
        Oe = 1, Nl(e, t, o, s);
      } finally {
        Oe = d, sr.transition = p;
      }
    }
    function Zh(e, t, o, s) {
      var d = Oe, p = sr.transition;
      sr.transition = null;
      try {
        Oe = 4, Nl(e, t, o, s);
      } finally {
        Oe = d, sr.transition = p;
      }
    }
    function Nl(e, t, o, s) {
      if (Zi) {
        var d = Dl(e, t, o, s);
        if (d === null) ql(e, t, s, eo, o), Na(e, s);
        else if (Gh(d, e, t, o, s)) s.stopPropagation();
        else if (Na(e, s), t & 4 && -1 < Qh.indexOf(e)) {
          for (; d !== null; ) {
            var p = ai(d);
            if (p !== null && Ca(p), p = Dl(e, t, o, s), p === null && ql(e, t, s, eo, o), p === d) break;
            d = p;
          }
          d !== null && s.stopPropagation();
        } else ql(e, t, s, null, o);
      }
    }
    var eo = null;
    function Dl(e, t, o, s) {
      if (eo = null, e = vl(s), e = Wn(e), e !== null) if (t = Hn(e), t === null) e = null;
      else if (o = t.tag, o === 13) {
        if (e = ma(t), e !== null) return e;
        e = null;
      } else if (o === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
      return eo = e, null;
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
          switch (jh()) {
            case El:
              return 1;
            case ka:
              return 4;
            case Yi:
            case Uh:
              return 16;
            case Sa:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Sn = null, Ol = null, to = null;
    function Aa() {
      if (to) return to;
      var e, t = Ol, o = t.length, s, d = "value" in Sn ? Sn.value : Sn.textContent, p = d.length;
      for (e = 0; e < o && t[e] === d[e]; e++) ;
      var x = o - e;
      for (s = 1; s <= x && t[o - s] === d[p - s]; s++) ;
      return to = d.slice(e, 1 < s ? 1 - s : void 0);
    }
    function no(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ro() {
      return true;
    }
    function La() {
      return false;
    }
    function kt(e) {
      function t(o, s, d, p, x) {
        this._reactName = o, this._targetInst = d, this.type = s, this.nativeEvent = p, this.target = x, this.currentTarget = null;
        for (var E in e) e.hasOwnProperty(E) && (o = e[E], this[E] = o ? o(p) : p[E]);
        return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === false) ? ro : La, this.isPropagationStopped = La, this;
      }
      return k(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var o = this.nativeEvent;
          o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = false), this.isDefaultPrevented = ro);
        },
        stopPropagation: function() {
          var o = this.nativeEvent;
          o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = true), this.isPropagationStopped = ro);
        },
        persist: function() {
        },
        isPersistent: ro
      }), t;
    }
    var ur = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Rl = kt(ur), Jr = k({}, ur, {
      view: 0,
      detail: 0
    }), em = kt(Jr), Al, Ll, Zr, io = k({}, Jr, {
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
        return "movementX" in e ? e.movementX : (e !== Zr && (Zr && e.type === "mousemove" ? (Al = e.screenX - Zr.screenX, Ll = e.screenY - Zr.screenY) : Ll = Al = 0, Zr = e), Al);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ll;
      }
    }), za = kt(io), tm = k({}, io, {
      dataTransfer: 0
    }), nm = kt(tm), rm = k({}, Jr, {
      relatedTarget: 0
    }), zl = kt(rm), im = k({}, ur, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), om = kt(im), lm = k({}, ur, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), sm = kt(lm), um = k({}, ur, {
      data: 0
    }), Ma = kt(um), am = {
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
    }, cm = {
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
    }, fm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function dm(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = fm[e]) ? !!t[e] : false;
    }
    function Ml() {
      return dm;
    }
    var pm = k({}, Jr, {
      key: function(e) {
        if (e.key) {
          var t = am[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = no(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cm[e.keyCode] || "Unidentified" : "";
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
        return e.type === "keypress" ? no(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? no(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), hm = kt(pm), mm = k({}, io, {
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
    }), ba = kt(mm), gm = k({}, Jr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ml
    }), ym = kt(gm), vm = k({}, ur, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), wm = kt(vm), xm = k({}, io, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), km = kt(xm), Sm = [
      9,
      13,
      27,
      32
    ], bl = f && "CompositionEvent" in window, ei = null;
    f && "documentMode" in document && (ei = document.documentMode);
    var Em = f && "TextEvent" in window && !ei, Fa = f && (!bl || ei && 8 < ei && 11 >= ei), Ba = " ", ja = false;
    function Ua(e, t) {
      switch (e) {
        case "keyup":
          return Sm.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function Va(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var ar = false;
    function Im(e, t) {
      switch (e) {
        case "compositionend":
          return Va(t);
        case "keypress":
          return t.which !== 32 ? null : (ja = true, Ba);
        case "textInput":
          return e = t.data, e === Ba && ja ? null : e;
        default:
          return null;
      }
    }
    function Cm(e, t) {
      if (ar) return e === "compositionend" || !bl && Ua(e, t) ? (e = Aa(), to = Ol = Sn = null, ar = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Fa && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var Tm = {
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
    function Ha(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Tm[e.type] : t === "textarea";
    }
    function Wa(e, t, o, s) {
      ca(s), t = ao(t, "onChange"), 0 < t.length && (o = new Rl("onChange", "change", null, o, s), e.push({
        event: o,
        listeners: t
      }));
    }
    var ti = null, ni = null;
    function _m(e) {
      uc(e, 0);
    }
    function oo(e) {
      var t = hr(e);
      if (Un(t)) return e;
    }
    function Pm(e, t) {
      if (e === "change") return t;
    }
    var $a = false;
    if (f) {
      var Fl;
      if (f) {
        var Bl = "oninput" in document;
        if (!Bl) {
          var Ya = document.createElement("div");
          Ya.setAttribute("oninput", "return;"), Bl = typeof Ya.oninput == "function";
        }
        Fl = Bl;
      } else Fl = false;
      $a = Fl && (!document.documentMode || 9 < document.documentMode);
    }
    function qa() {
      ti && (ti.detachEvent("onpropertychange", Ka), ni = ti = null);
    }
    function Ka(e) {
      if (e.propertyName === "value" && oo(ni)) {
        var t = [];
        Wa(t, ni, e, vl(e)), ha(_m, t);
      }
    }
    function Nm(e, t, o) {
      e === "focusin" ? (qa(), ti = t, ni = o, ti.attachEvent("onpropertychange", Ka)) : e === "focusout" && qa();
    }
    function Dm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return oo(ni);
    }
    function Om(e, t) {
      if (e === "click") return oo(t);
    }
    function Rm(e, t) {
      if (e === "input" || e === "change") return oo(t);
    }
    function Am(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var jt = typeof Object.is == "function" ? Object.is : Am;
    function ri(e, t) {
      if (jt(e, t)) return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
      var o = Object.keys(e), s = Object.keys(t);
      if (o.length !== s.length) return false;
      for (s = 0; s < o.length; s++) {
        var d = o[s];
        if (!h.call(t, d) || !jt(e[d], t[d])) return false;
      }
      return true;
    }
    function Qa(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Ga(e, t) {
      var o = Qa(e);
      e = 0;
      for (var s; o; ) {
        if (o.nodeType === 3) {
          if (s = e + o.textContent.length, e <= t && s >= t) return {
            node: o,
            offset: t - e
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
        o = Qa(o);
      }
    }
    function Xa(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Xa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function Ja() {
      for (var e = window, t = on(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var o = typeof t.contentWindow.location.href == "string";
        } catch {
          o = false;
        }
        if (o) e = t.contentWindow;
        else break;
        t = on(e.document);
      }
      return t;
    }
    function jl(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Lm(e) {
      var t = Ja(), o = e.focusedElem, s = e.selectionRange;
      if (t !== o && o && o.ownerDocument && Xa(o.ownerDocument.documentElement, o)) {
        if (s !== null && jl(o)) {
          if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in o) o.selectionStart = t, o.selectionEnd = Math.min(e, o.value.length);
          else if (e = (t = o.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var d = o.textContent.length, p = Math.min(s.start, d);
            s = s.end === void 0 ? p : Math.min(s.end, d), !e.extend && p > s && (d = s, s = p, p = d), d = Ga(o, p);
            var x = Ga(o, s);
            d && x && (e.rangeCount !== 1 || e.anchorNode !== d.node || e.anchorOffset !== d.offset || e.focusNode !== x.node || e.focusOffset !== x.offset) && (t = t.createRange(), t.setStart(d.node, d.offset), e.removeAllRanges(), p > s ? (e.addRange(t), e.extend(x.node, x.offset)) : (t.setEnd(x.node, x.offset), e.addRange(t)));
          }
        }
        for (t = [], e = o; e = e.parentNode; ) e.nodeType === 1 && t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop
        });
        for (typeof o.focus == "function" && o.focus(), o = 0; o < t.length; o++) e = t[o], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
      }
    }
    var zm = f && "documentMode" in document && 11 >= document.documentMode, cr = null, Ul = null, ii = null, Vl = false;
    function Za(e, t, o) {
      var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
      Vl || cr == null || cr !== on(s) || (s = cr, "selectionStart" in s && jl(s) ? s = {
        start: s.selectionStart,
        end: s.selectionEnd
      } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
        anchorNode: s.anchorNode,
        anchorOffset: s.anchorOffset,
        focusNode: s.focusNode,
        focusOffset: s.focusOffset
      }), ii && ri(ii, s) || (ii = s, s = ao(Ul, "onSelect"), 0 < s.length && (t = new Rl("onSelect", "select", null, t, o), e.push({
        event: t,
        listeners: s
      }), t.target = cr)));
    }
    function lo(e, t) {
      var o = {};
      return o[e.toLowerCase()] = t.toLowerCase(), o["Webkit" + e] = "webkit" + t, o["Moz" + e] = "moz" + t, o;
    }
    var fr = {
      animationend: lo("Animation", "AnimationEnd"),
      animationiteration: lo("Animation", "AnimationIteration"),
      animationstart: lo("Animation", "AnimationStart"),
      transitionend: lo("Transition", "TransitionEnd")
    }, Hl = {}, ec = {};
    f && (ec = document.createElement("div").style, "AnimationEvent" in window || (delete fr.animationend.animation, delete fr.animationiteration.animation, delete fr.animationstart.animation), "TransitionEvent" in window || delete fr.transitionend.transition);
    function so(e) {
      if (Hl[e]) return Hl[e];
      if (!fr[e]) return e;
      var t = fr[e], o;
      for (o in t) if (t.hasOwnProperty(o) && o in ec) return Hl[e] = t[o];
      return e;
    }
    var tc = so("animationend"), nc = so("animationiteration"), rc = so("animationstart"), ic = so("transitionend"), oc = /* @__PURE__ */ new Map(), lc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function En(e, t) {
      oc.set(e, t), a(t, [
        e
      ]);
    }
    for (var Wl = 0; Wl < lc.length; Wl++) {
      var $l = lc[Wl], Mm = $l.toLowerCase(), bm = $l[0].toUpperCase() + $l.slice(1);
      En(Mm, "on" + bm);
    }
    En(tc, "onAnimationEnd"), En(nc, "onAnimationIteration"), En(rc, "onAnimationStart"), En("dblclick", "onDoubleClick"), En("focusin", "onFocus"), En("focusout", "onBlur"), En(ic, "onTransitionEnd"), c("onMouseEnter", [
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
    var oi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fm = new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));
    function sc(e, t, o) {
      var s = e.type || "unknown-event";
      e.currentTarget = o, Mh(s, t, void 0, e), e.currentTarget = null;
    }
    function uc(e, t) {
      t = (t & 4) !== 0;
      for (var o = 0; o < e.length; o++) {
        var s = e[o], d = s.event;
        s = s.listeners;
        e: {
          var p = void 0;
          if (t) for (var x = s.length - 1; 0 <= x; x--) {
            var E = s[x], C = E.instance, z = E.currentTarget;
            if (E = E.listener, C !== p && d.isPropagationStopped()) break e;
            sc(d, E, z), p = C;
          }
          else for (x = 0; x < s.length; x++) {
            if (E = s[x], C = E.instance, z = E.currentTarget, E = E.listener, C !== p && d.isPropagationStopped()) break e;
            sc(d, E, z), p = C;
          }
        }
      }
      if ($i) throw e = Sl, $i = false, Sl = null, e;
    }
    function Me(e, t) {
      var o = t[Zl];
      o === void 0 && (o = t[Zl] = /* @__PURE__ */ new Set());
      var s = e + "__bubble";
      o.has(s) || (ac(t, e, 2, false), o.add(s));
    }
    function Yl(e, t, o) {
      var s = 0;
      t && (s |= 4), ac(o, e, s, t);
    }
    var uo = "_reactListening" + Math.random().toString(36).slice(2);
    function li(e) {
      if (!e[uo]) {
        e[uo] = true, l.forEach(function(o) {
          o !== "selectionchange" && (Fm.has(o) || Yl(o, false, e), Yl(o, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[uo] || (t[uo] = true, Yl("selectionchange", false, t));
      }
    }
    function ac(e, t, o, s) {
      switch (Ra(t)) {
        case 1:
          var d = Jh;
          break;
        case 4:
          d = Zh;
          break;
        default:
          d = Nl;
      }
      o = d.bind(null, t, o, e), d = void 0, !kl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (d = true), s ? d !== void 0 ? e.addEventListener(t, o, {
        capture: true,
        passive: d
      }) : e.addEventListener(t, o, true) : d !== void 0 ? e.addEventListener(t, o, {
        passive: d
      }) : e.addEventListener(t, o, false);
    }
    function ql(e, t, o, s, d) {
      var p = s;
      if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
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
            if (x = Wn(E), x === null) return;
            if (C = x.tag, C === 5 || C === 6) {
              s = p = x;
              continue e;
            }
            E = E.parentNode;
          }
        }
        s = s.return;
      }
      ha(function() {
        var z = p, H = vl(o), $ = [];
        e: {
          var V = oc.get(e);
          if (V !== void 0) {
            var re = Rl, ae = e;
            switch (e) {
              case "keypress":
                if (no(o) === 0) break e;
              case "keydown":
              case "keyup":
                re = hm;
                break;
              case "focusin":
                ae = "focus", re = zl;
                break;
              case "focusout":
                ae = "blur", re = zl;
                break;
              case "beforeblur":
              case "afterblur":
                re = zl;
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
                re = za;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                re = nm;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                re = ym;
                break;
              case tc:
              case nc:
              case rc:
                re = om;
                break;
              case ic:
                re = wm;
                break;
              case "scroll":
                re = em;
                break;
              case "wheel":
                re = km;
                break;
              case "copy":
              case "cut":
              case "paste":
                re = sm;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                re = ba;
            }
            var ce = (t & 4) !== 0, $e = !ce && e === "scroll", O = ce ? V !== null ? V + "Capture" : null : V;
            ce = [];
            for (var _ = z, R; _ !== null; ) {
              R = _;
              var K = R.stateNode;
              if (R.tag === 5 && K !== null && (R = K, O !== null && (K = Vr(_, O), K != null && ce.push(si(_, K, R)))), $e) break;
              _ = _.return;
            }
            0 < ce.length && (V = new re(V, ae, null, o, H), $.push({
              event: V,
              listeners: ce
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (V = e === "mouseover" || e === "pointerover", re = e === "mouseout" || e === "pointerout", V && o !== xt && (ae = o.relatedTarget || o.fromElement) && (Wn(ae) || ae[sn])) break e;
            if ((re || V) && (V = H.window === H ? H : (V = H.ownerDocument) ? V.defaultView || V.parentWindow : window, re ? (ae = o.relatedTarget || o.toElement, re = z, ae = ae ? Wn(ae) : null, ae !== null && ($e = Hn(ae), ae !== $e || ae.tag !== 5 && ae.tag !== 6) && (ae = null)) : (re = null, ae = z), re !== ae)) {
              if (ce = za, K = "onMouseLeave", O = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (ce = ba, K = "onPointerLeave", O = "onPointerEnter", _ = "pointer"), $e = re == null ? V : hr(re), R = ae == null ? V : hr(ae), V = new ce(K, _ + "leave", re, o, H), V.target = $e, V.relatedTarget = R, K = null, Wn(H) === z && (ce = new ce(O, _ + "enter", ae, o, H), ce.target = R, ce.relatedTarget = $e, K = ce), $e = K, re && ae) t: {
                for (ce = re, O = ae, _ = 0, R = ce; R; R = dr(R)) _++;
                for (R = 0, K = O; K; K = dr(K)) R++;
                for (; 0 < _ - R; ) ce = dr(ce), _--;
                for (; 0 < R - _; ) O = dr(O), R--;
                for (; _--; ) {
                  if (ce === O || O !== null && ce === O.alternate) break t;
                  ce = dr(ce), O = dr(O);
                }
                ce = null;
              }
              else ce = null;
              re !== null && cc($, V, re, ce, false), ae !== null && $e !== null && cc($, $e, ae, ce, true);
            }
          }
          e: {
            if (V = z ? hr(z) : window, re = V.nodeName && V.nodeName.toLowerCase(), re === "select" || re === "input" && V.type === "file") var fe = Pm;
            else if (Ha(V)) if ($a) fe = Rm;
            else {
              fe = Dm;
              var me = Nm;
            }
            else (re = V.nodeName) && re.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (fe = Om);
            if (fe && (fe = fe(e, z))) {
              Wa($, fe, o, H);
              break e;
            }
            me && me(e, V, z), e === "focusout" && (me = V._wrapperState) && me.controlled && V.type === "number" && ir(V, "number", V.value);
          }
          switch (me = z ? hr(z) : window, e) {
            case "focusin":
              (Ha(me) || me.contentEditable === "true") && (cr = me, Ul = z, ii = null);
              break;
            case "focusout":
              ii = Ul = cr = null;
              break;
            case "mousedown":
              Vl = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Vl = false, Za($, o, H);
              break;
            case "selectionchange":
              if (zm) break;
            case "keydown":
            case "keyup":
              Za($, o, H);
          }
          var ge;
          if (bl) e: {
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
          else ar ? Ua(e, o) && (we = "onCompositionEnd") : e === "keydown" && o.keyCode === 229 && (we = "onCompositionStart");
          we && (Fa && o.locale !== "ko" && (ar || we !== "onCompositionStart" ? we === "onCompositionEnd" && ar && (ge = Aa()) : (Sn = H, Ol = "value" in Sn ? Sn.value : Sn.textContent, ar = true)), me = ao(z, we), 0 < me.length && (we = new Ma(we, e, null, o, H), $.push({
            event: we,
            listeners: me
          }), ge ? we.data = ge : (ge = Va(o), ge !== null && (we.data = ge)))), (ge = Em ? Im(e, o) : Cm(e, o)) && (z = ao(z, "onBeforeInput"), 0 < z.length && (H = new Ma("onBeforeInput", "beforeinput", null, o, H), $.push({
            event: H,
            listeners: z
          }), H.data = ge));
        }
        uc($, t);
      });
    }
    function si(e, t, o) {
      return {
        instance: e,
        listener: t,
        currentTarget: o
      };
    }
    function ao(e, t) {
      for (var o = t + "Capture", s = []; e !== null; ) {
        var d = e, p = d.stateNode;
        d.tag === 5 && p !== null && (d = p, p = Vr(e, o), p != null && s.unshift(si(e, p, d)), p = Vr(e, t), p != null && s.push(si(e, p, d))), e = e.return;
      }
      return s;
    }
    function dr(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function cc(e, t, o, s, d) {
      for (var p = t._reactName, x = []; o !== null && o !== s; ) {
        var E = o, C = E.alternate, z = E.stateNode;
        if (C !== null && C === s) break;
        E.tag === 5 && z !== null && (E = z, d ? (C = Vr(o, p), C != null && x.unshift(si(o, C, E))) : d || (C = Vr(o, p), C != null && x.push(si(o, C, E)))), o = o.return;
      }
      x.length !== 0 && e.push({
        event: t,
        listeners: x
      });
    }
    var Bm = /\r\n?/g, jm = /\u0000|\uFFFD/g;
    function fc(e) {
      return (typeof e == "string" ? e : "" + e).replace(Bm, `
`).replace(jm, "");
    }
    function co(e, t, o) {
      if (t = fc(t), fc(e) !== t && o) throw Error(i(425));
    }
    function fo() {
    }
    var Kl = null, Ql = null;
    function Gl(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var Xl = typeof setTimeout == "function" ? setTimeout : void 0, Um = typeof clearTimeout == "function" ? clearTimeout : void 0, dc = typeof Promise == "function" ? Promise : void 0, Vm = typeof queueMicrotask == "function" ? queueMicrotask : typeof dc < "u" ? function(e) {
      return dc.resolve(null).then(e).catch(Hm);
    } : Xl;
    function Hm(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Jl(e, t) {
      var o = t, s = 0;
      do {
        var d = o.nextSibling;
        if (e.removeChild(o), d && d.nodeType === 8) if (o = d.data, o === "/$") {
          if (s === 0) {
            e.removeChild(d), Xr(t);
            return;
          }
          s--;
        } else o !== "$" && o !== "$?" && o !== "$!" || s++;
        o = d;
      } while (o);
      Xr(t);
    }
    function In(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    function pc(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var o = e.data;
          if (o === "$" || o === "$!" || o === "$?") {
            if (t === 0) return e;
            t--;
          } else o === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var pr = Math.random().toString(36).slice(2), Gt = "__reactFiber$" + pr, ui = "__reactProps$" + pr, sn = "__reactContainer$" + pr, Zl = "__reactEvents$" + pr, Wm = "__reactListeners$" + pr, $m = "__reactHandles$" + pr;
    function Wn(e) {
      var t = e[Gt];
      if (t) return t;
      for (var o = e.parentNode; o; ) {
        if (t = o[sn] || o[Gt]) {
          if (o = t.alternate, t.child !== null || o !== null && o.child !== null) for (e = pc(e); e !== null; ) {
            if (o = e[Gt]) return o;
            e = pc(e);
          }
          return t;
        }
        e = o, o = e.parentNode;
      }
      return null;
    }
    function ai(e) {
      return e = e[Gt] || e[sn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function hr(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(i(33));
    }
    function po(e) {
      return e[ui] || null;
    }
    var es = [], mr = -1;
    function Cn(e) {
      return {
        current: e
      };
    }
    function be(e) {
      0 > mr || (e.current = es[mr], es[mr] = null, mr--);
    }
    function Re(e, t) {
      mr++, es[mr] = e.current, e.current = t;
    }
    var Tn = {}, it = Cn(Tn), ft = Cn(false), $n = Tn;
    function gr(e, t) {
      var o = e.type.contextTypes;
      if (!o) return Tn;
      var s = e.stateNode;
      if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
      var d = {}, p;
      for (p in o) d[p] = t[p];
      return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = d), d;
    }
    function dt(e) {
      return e = e.childContextTypes, e != null;
    }
    function ho() {
      be(ft), be(it);
    }
    function hc(e, t, o) {
      if (it.current !== Tn) throw Error(i(168));
      Re(it, t), Re(ft, o);
    }
    function mc(e, t, o) {
      var s = e.stateNode;
      if (t = t.childContextTypes, typeof s.getChildContext != "function") return o;
      s = s.getChildContext();
      for (var d in s) if (!(d in t)) throw Error(i(108, Ce(e) || "Unknown", d));
      return k({}, o, s);
    }
    function mo(e) {
      return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Tn, $n = it.current, Re(it, e), Re(ft, ft.current), true;
    }
    function gc(e, t, o) {
      var s = e.stateNode;
      if (!s) throw Error(i(169));
      o ? (e = mc(e, t, $n), s.__reactInternalMemoizedMergedChildContext = e, be(ft), be(it), Re(it, e)) : be(ft), Re(ft, o);
    }
    var un = null, go = false, ts = false;
    function yc(e) {
      un === null ? un = [
        e
      ] : un.push(e);
    }
    function Ym(e) {
      go = true, yc(e);
    }
    function _n() {
      if (!ts && un !== null) {
        ts = true;
        var e = 0, t = Oe;
        try {
          var o = un;
          for (Oe = 1; e < o.length; e++) {
            var s = o[e];
            do
              s = s(true);
            while (s !== null);
          }
          un = null, go = false;
        } catch (d) {
          throw un !== null && (un = un.slice(e + 1)), wa(El, _n), d;
        } finally {
          Oe = t, ts = false;
        }
      }
      return null;
    }
    var yr = [], vr = 0, yo = null, vo = 0, Rt = [], At = 0, Yn = null, an = 1, cn = "";
    function qn(e, t) {
      yr[vr++] = vo, yr[vr++] = yo, yo = e, vo = t;
    }
    function vc(e, t, o) {
      Rt[At++] = an, Rt[At++] = cn, Rt[At++] = Yn, Yn = e;
      var s = an;
      e = cn;
      var d = 32 - Bt(s) - 1;
      s &= ~(1 << d), o += 1;
      var p = 32 - Bt(t) + d;
      if (30 < p) {
        var x = d - d % 5;
        p = (s & (1 << x) - 1).toString(32), s >>= x, d -= x, an = 1 << 32 - Bt(t) + d | o << d | s, cn = p + e;
      } else an = 1 << p | o << d | s, cn = e;
    }
    function ns(e) {
      e.return !== null && (qn(e, 1), vc(e, 1, 0));
    }
    function rs(e) {
      for (; e === yo; ) yo = yr[--vr], yr[vr] = null, vo = yr[--vr], yr[vr] = null;
      for (; e === Yn; ) Yn = Rt[--At], Rt[At] = null, cn = Rt[--At], Rt[At] = null, an = Rt[--At], Rt[At] = null;
    }
    var St = null, Et = null, Be = false, Ut = null;
    function wc(e, t) {
      var o = bt(5, null, null, 0);
      o.elementType = "DELETED", o.stateNode = t, o.return = e, t = e.deletions, t === null ? (e.deletions = [
        o
      ], e.flags |= 16) : t.push(o);
    }
    function xc(e, t) {
      switch (e.tag) {
        case 5:
          var o = e.type;
          return t = t.nodeType !== 1 || o.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, St = e, Et = In(t.firstChild), true) : false;
        case 6:
          return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, St = e, Et = null, true) : false;
        case 13:
          return t = t.nodeType !== 8 ? null : t, t !== null ? (o = Yn !== null ? {
            id: an,
            overflow: cn
          } : null, e.memoizedState = {
            dehydrated: t,
            treeContext: o,
            retryLane: 1073741824
          }, o = bt(18, null, null, 0), o.stateNode = t, o.return = e, e.child = o, St = e, Et = null, true) : false;
        default:
          return false;
      }
    }
    function is(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function os(e) {
      if (Be) {
        var t = Et;
        if (t) {
          var o = t;
          if (!xc(e, t)) {
            if (is(e)) throw Error(i(418));
            t = In(o.nextSibling);
            var s = St;
            t && xc(e, t) ? wc(s, o) : (e.flags = e.flags & -4097 | 2, Be = false, St = e);
          }
        } else {
          if (is(e)) throw Error(i(418));
          e.flags = e.flags & -4097 | 2, Be = false, St = e;
        }
      }
    }
    function kc(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
      St = e;
    }
    function wo(e) {
      if (e !== St) return false;
      if (!Be) return kc(e), Be = true, false;
      var t;
      if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Gl(e.type, e.memoizedProps)), t && (t = Et)) {
        if (is(e)) throw Sc(), Error(i(418));
        for (; t; ) wc(e, t), t = In(t.nextSibling);
      }
      if (kc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var o = e.data;
              if (o === "/$") {
                if (t === 0) {
                  Et = In(e.nextSibling);
                  break e;
                }
                t--;
              } else o !== "$" && o !== "$!" && o !== "$?" || t++;
            }
            e = e.nextSibling;
          }
          Et = null;
        }
      } else Et = St ? In(e.stateNode.nextSibling) : null;
      return true;
    }
    function Sc() {
      for (var e = Et; e; ) e = In(e.nextSibling);
    }
    function wr() {
      Et = St = null, Be = false;
    }
    function ls(e) {
      Ut === null ? Ut = [
        e
      ] : Ut.push(e);
    }
    var qm = W.ReactCurrentBatchConfig;
    function ci(e, t, o) {
      if (e = o.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (o._owner) {
          if (o = o._owner, o) {
            if (o.tag !== 1) throw Error(i(309));
            var s = o.stateNode;
          }
          if (!s) throw Error(i(147, e));
          var d = s, p = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === p ? t.ref : (t = function(x) {
            var E = d.refs;
            x === null ? delete E[p] : E[p] = x;
          }, t._stringRef = p, t);
        }
        if (typeof e != "string") throw Error(i(284));
        if (!o._owner) throw Error(i(290, e));
      }
      return e;
    }
    function xo(e, t) {
      throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function Ec(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Ic(e) {
      function t(O, _) {
        if (e) {
          var R = O.deletions;
          R === null ? (O.deletions = [
            _
          ], O.flags |= 16) : R.push(_);
        }
      }
      function o(O, _) {
        if (!e) return null;
        for (; _ !== null; ) t(O, _), _ = _.sibling;
        return null;
      }
      function s(O, _) {
        for (O = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? O.set(_.key, _) : O.set(_.index, _), _ = _.sibling;
        return O;
      }
      function d(O, _) {
        return O = zn(O, _), O.index = 0, O.sibling = null, O;
      }
      function p(O, _, R) {
        return O.index = R, e ? (R = O.alternate, R !== null ? (R = R.index, R < _ ? (O.flags |= 2, _) : R) : (O.flags |= 2, _)) : (O.flags |= 1048576, _);
      }
      function x(O) {
        return e && O.alternate === null && (O.flags |= 2), O;
      }
      function E(O, _, R, K) {
        return _ === null || _.tag !== 6 ? (_ = Xs(R, O.mode, K), _.return = O, _) : (_ = d(_, R), _.return = O, _);
      }
      function C(O, _, R, K) {
        var fe = R.type;
        return fe === ee ? H(O, _, R.props.children, K, R.key) : _ !== null && (_.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === q && Ec(fe) === _.type) ? (K = d(_, R.props), K.ref = ci(O, _, R), K.return = O, K) : (K = Wo(R.type, R.key, R.props, null, O.mode, K), K.ref = ci(O, _, R), K.return = O, K);
      }
      function z(O, _, R, K) {
        return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== R.containerInfo || _.stateNode.implementation !== R.implementation ? (_ = Js(R, O.mode, K), _.return = O, _) : (_ = d(_, R.children || []), _.return = O, _);
      }
      function H(O, _, R, K, fe) {
        return _ === null || _.tag !== 7 ? (_ = tr(R, O.mode, K, fe), _.return = O, _) : (_ = d(_, R), _.return = O, _);
      }
      function $(O, _, R) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = Xs("" + _, O.mode, R), _.return = O, _;
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case Z:
              return R = Wo(_.type, _.key, _.props, null, O.mode, R), R.ref = ci(O, null, _), R.return = O, R;
            case A:
              return _ = Js(_, O.mode, R), _.return = O, _;
            case q:
              var K = _._init;
              return $(O, K(_._payload), R);
          }
          if (mn(_) || G(_)) return _ = tr(_, O.mode, R, null), _.return = O, _;
          xo(O, _);
        }
        return null;
      }
      function V(O, _, R, K) {
        var fe = _ !== null ? _.key : null;
        if (typeof R == "string" && R !== "" || typeof R == "number") return fe !== null ? null : E(O, _, "" + R, K);
        if (typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case Z:
              return R.key === fe ? C(O, _, R, K) : null;
            case A:
              return R.key === fe ? z(O, _, R, K) : null;
            case q:
              return fe = R._init, V(O, _, fe(R._payload), K);
          }
          if (mn(R) || G(R)) return fe !== null ? null : H(O, _, R, K, null);
          xo(O, R);
        }
        return null;
      }
      function re(O, _, R, K, fe) {
        if (typeof K == "string" && K !== "" || typeof K == "number") return O = O.get(R) || null, E(_, O, "" + K, fe);
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Z:
              return O = O.get(K.key === null ? R : K.key) || null, C(_, O, K, fe);
            case A:
              return O = O.get(K.key === null ? R : K.key) || null, z(_, O, K, fe);
            case q:
              var me = K._init;
              return re(O, _, R, me(K._payload), fe);
          }
          if (mn(K) || G(K)) return O = O.get(R) || null, H(_, O, K, fe, null);
          xo(_, K);
        }
        return null;
      }
      function ae(O, _, R, K) {
        for (var fe = null, me = null, ge = _, we = _ = 0, Ze = null; ge !== null && we < R.length; we++) {
          ge.index > we ? (Ze = ge, ge = null) : Ze = ge.sibling;
          var Ne = V(O, ge, R[we], K);
          if (Ne === null) {
            ge === null && (ge = Ze);
            break;
          }
          e && ge && Ne.alternate === null && t(O, ge), _ = p(Ne, _, we), me === null ? fe = Ne : me.sibling = Ne, me = Ne, ge = Ze;
        }
        if (we === R.length) return o(O, ge), Be && qn(O, we), fe;
        if (ge === null) {
          for (; we < R.length; we++) ge = $(O, R[we], K), ge !== null && (_ = p(ge, _, we), me === null ? fe = ge : me.sibling = ge, me = ge);
          return Be && qn(O, we), fe;
        }
        for (ge = s(O, ge); we < R.length; we++) Ze = re(ge, O, we, R[we], K), Ze !== null && (e && Ze.alternate !== null && ge.delete(Ze.key === null ? we : Ze.key), _ = p(Ze, _, we), me === null ? fe = Ze : me.sibling = Ze, me = Ze);
        return e && ge.forEach(function(Mn) {
          return t(O, Mn);
        }), Be && qn(O, we), fe;
      }
      function ce(O, _, R, K) {
        var fe = G(R);
        if (typeof fe != "function") throw Error(i(150));
        if (R = fe.call(R), R == null) throw Error(i(151));
        for (var me = fe = null, ge = _, we = _ = 0, Ze = null, Ne = R.next(); ge !== null && !Ne.done; we++, Ne = R.next()) {
          ge.index > we ? (Ze = ge, ge = null) : Ze = ge.sibling;
          var Mn = V(O, ge, Ne.value, K);
          if (Mn === null) {
            ge === null && (ge = Ze);
            break;
          }
          e && ge && Mn.alternate === null && t(O, ge), _ = p(Mn, _, we), me === null ? fe = Mn : me.sibling = Mn, me = Mn, ge = Ze;
        }
        if (Ne.done) return o(O, ge), Be && qn(O, we), fe;
        if (ge === null) {
          for (; !Ne.done; we++, Ne = R.next()) Ne = $(O, Ne.value, K), Ne !== null && (_ = p(Ne, _, we), me === null ? fe = Ne : me.sibling = Ne, me = Ne);
          return Be && qn(O, we), fe;
        }
        for (ge = s(O, ge); !Ne.done; we++, Ne = R.next()) Ne = re(ge, O, we, Ne.value, K), Ne !== null && (e && Ne.alternate !== null && ge.delete(Ne.key === null ? we : Ne.key), _ = p(Ne, _, we), me === null ? fe = Ne : me.sibling = Ne, me = Ne);
        return e && ge.forEach(function(Tg) {
          return t(O, Tg);
        }), Be && qn(O, we), fe;
      }
      function $e(O, _, R, K) {
        if (typeof R == "object" && R !== null && R.type === ee && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case Z:
              e: {
                for (var fe = R.key, me = _; me !== null; ) {
                  if (me.key === fe) {
                    if (fe = R.type, fe === ee) {
                      if (me.tag === 7) {
                        o(O, me.sibling), _ = d(me, R.props.children), _.return = O, O = _;
                        break e;
                      }
                    } else if (me.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === q && Ec(fe) === me.type) {
                      o(O, me.sibling), _ = d(me, R.props), _.ref = ci(O, me, R), _.return = O, O = _;
                      break e;
                    }
                    o(O, me);
                    break;
                  } else t(O, me);
                  me = me.sibling;
                }
                R.type === ee ? (_ = tr(R.props.children, O.mode, K, R.key), _.return = O, O = _) : (K = Wo(R.type, R.key, R.props, null, O.mode, K), K.ref = ci(O, _, R), K.return = O, O = K);
              }
              return x(O);
            case A:
              e: {
                for (me = R.key; _ !== null; ) {
                  if (_.key === me) if (_.tag === 4 && _.stateNode.containerInfo === R.containerInfo && _.stateNode.implementation === R.implementation) {
                    o(O, _.sibling), _ = d(_, R.children || []), _.return = O, O = _;
                    break e;
                  } else {
                    o(O, _);
                    break;
                  }
                  else t(O, _);
                  _ = _.sibling;
                }
                _ = Js(R, O.mode, K), _.return = O, O = _;
              }
              return x(O);
            case q:
              return me = R._init, $e(O, _, me(R._payload), K);
          }
          if (mn(R)) return ae(O, _, R, K);
          if (G(R)) return ce(O, _, R, K);
          xo(O, R);
        }
        return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, _ !== null && _.tag === 6 ? (o(O, _.sibling), _ = d(_, R), _.return = O, O = _) : (o(O, _), _ = Xs(R, O.mode, K), _.return = O, O = _), x(O)) : o(O, _);
      }
      return $e;
    }
    var xr = Ic(true), Cc = Ic(false), ko = Cn(null), So = null, kr = null, ss = null;
    function us() {
      ss = kr = So = null;
    }
    function as(e) {
      var t = ko.current;
      be(ko), e._currentValue = t;
    }
    function cs(e, t, o) {
      for (; e !== null; ) {
        var s = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === o) break;
        e = e.return;
      }
    }
    function Sr(e, t) {
      So = e, ss = kr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (pt = true), e.firstContext = null);
    }
    function Lt(e) {
      var t = e._currentValue;
      if (ss !== e) if (e = {
        context: e,
        memoizedValue: t,
        next: null
      }, kr === null) {
        if (So === null) throw Error(i(308));
        kr = e, So.dependencies = {
          lanes: 0,
          firstContext: e
        };
      } else kr = kr.next = e;
      return t;
    }
    var Kn = null;
    function fs(e) {
      Kn === null ? Kn = [
        e
      ] : Kn.push(e);
    }
    function Tc(e, t, o, s) {
      var d = t.interleaved;
      return d === null ? (o.next = o, fs(t)) : (o.next = d.next, d.next = o), t.interleaved = o, fn(e, s);
    }
    function fn(e, t) {
      e.lanes |= t;
      var o = e.alternate;
      for (o !== null && (o.lanes |= t), o = e, e = e.return; e !== null; ) e.childLanes |= t, o = e.alternate, o !== null && (o.childLanes |= t), o = e, e = e.return;
      return o.tag === 3 ? o.stateNode : null;
    }
    var Pn = false;
    function ds(e) {
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
    function _c(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      });
    }
    function dn(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Nn(e, t, o) {
      var s = e.updateQueue;
      if (s === null) return null;
      if (s = s.shared, (Pe & 2) !== 0) {
        var d = s.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), s.pending = t, fn(e, o);
      }
      return d = s.interleaved, d === null ? (t.next = t, fs(s)) : (t.next = d.next, d.next = t), s.interleaved = t, fn(e, o);
    }
    function Eo(e, t, o) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (o & 4194240) !== 0)) {
        var s = t.lanes;
        s &= e.pendingLanes, o |= s, t.lanes = o, Tl(e, o);
      }
    }
    function Pc(e, t) {
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
          p === null ? d = p = t : p = p.next = t;
        } else d = p = t;
        o = {
          baseState: s.baseState,
          firstBaseUpdate: d,
          lastBaseUpdate: p,
          shared: s.shared,
          effects: s.effects
        }, e.updateQueue = o;
        return;
      }
      e = o.lastBaseUpdate, e === null ? o.firstBaseUpdate = t : e.next = t, o.lastBaseUpdate = t;
    }
    function Io(e, t, o, s) {
      var d = e.updateQueue;
      Pn = false;
      var p = d.firstBaseUpdate, x = d.lastBaseUpdate, E = d.shared.pending;
      if (E !== null) {
        d.shared.pending = null;
        var C = E, z = C.next;
        C.next = null, x === null ? p = z : x.next = z, x = C;
        var H = e.alternate;
        H !== null && (H = H.updateQueue, E = H.lastBaseUpdate, E !== x && (E === null ? H.firstBaseUpdate = z : E.next = z, H.lastBaseUpdate = C));
      }
      if (p !== null) {
        var $ = d.baseState;
        x = 0, H = z = C = null, E = p;
        do {
          var V = E.lane, re = E.eventTime;
          if ((s & V) === V) {
            H !== null && (H = H.next = {
              eventTime: re,
              lane: 0,
              tag: E.tag,
              payload: E.payload,
              callback: E.callback,
              next: null
            });
            e: {
              var ae = e, ce = E;
              switch (V = t, re = o, ce.tag) {
                case 1:
                  if (ae = ce.payload, typeof ae == "function") {
                    $ = ae.call(re, $, V);
                    break e;
                  }
                  $ = ae;
                  break e;
                case 3:
                  ae.flags = ae.flags & -65537 | 128;
                case 0:
                  if (ae = ce.payload, V = typeof ae == "function" ? ae.call(re, $, V) : ae, V == null) break e;
                  $ = k({}, $, V);
                  break e;
                case 2:
                  Pn = true;
              }
            }
            E.callback !== null && E.lane !== 0 && (e.flags |= 64, V = d.effects, V === null ? d.effects = [
              E
            ] : V.push(E));
          } else re = {
            eventTime: re,
            lane: V,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          }, H === null ? (z = H = re, C = $) : H = H.next = re, x |= V;
          if (E = E.next, E === null) {
            if (E = d.shared.pending, E === null) break;
            V = E, E = V.next, V.next = null, d.lastBaseUpdate = V, d.shared.pending = null;
          }
        } while (true);
        if (H === null && (C = $), d.baseState = C, d.firstBaseUpdate = z, d.lastBaseUpdate = H, t = d.shared.interleaved, t !== null) {
          d = t;
          do
            x |= d.lane, d = d.next;
          while (d !== t);
        } else p === null && (d.shared.lanes = 0);
        Xn |= x, e.lanes = x, e.memoizedState = $;
      }
    }
    function Nc(e, t, o) {
      if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var s = e[t], d = s.callback;
        if (d !== null) {
          if (s.callback = null, s = o, typeof d != "function") throw Error(i(191, d));
          d.call(s);
        }
      }
    }
    var fi = {}, Xt = Cn(fi), di = Cn(fi), pi = Cn(fi);
    function Qn(e) {
      if (e === fi) throw Error(i(174));
      return e;
    }
    function ps(e, t) {
      switch (Re(pi, t), Re(di, e), Re(Xt, fi), e = t.nodeType, e) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : J(null, "");
          break;
        default:
          e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = J(t, e);
      }
      be(Xt), Re(Xt, t);
    }
    function Er() {
      be(Xt), be(di), be(pi);
    }
    function Dc(e) {
      Qn(pi.current);
      var t = Qn(Xt.current), o = J(t, e.type);
      t !== o && (Re(di, e), Re(Xt, o));
    }
    function hs(e) {
      di.current === e && (be(Xt), be(di));
    }
    var je = Cn(0);
    function Co(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var o = t.memoizedState;
          if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ms = [];
    function gs() {
      for (var e = 0; e < ms.length; e++) ms[e]._workInProgressVersionPrimary = null;
      ms.length = 0;
    }
    var To = W.ReactCurrentDispatcher, ys = W.ReactCurrentBatchConfig, Gn = 0, Ue = null, Qe = null, Xe = null, _o = false, hi = false, mi = 0, Km = 0;
    function ot() {
      throw Error(i(321));
    }
    function vs(e, t) {
      if (t === null) return false;
      for (var o = 0; o < t.length && o < e.length; o++) if (!jt(e[o], t[o])) return false;
      return true;
    }
    function ws(e, t, o, s, d, p) {
      if (Gn = p, Ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, To.current = e === null || e.memoizedState === null ? Jm : Zm, e = o(s, d), hi) {
        p = 0;
        do {
          if (hi = false, mi = 0, 25 <= p) throw Error(i(301));
          p += 1, Xe = Qe = null, t.updateQueue = null, To.current = eg, e = o(s, d);
        } while (hi);
      }
      if (To.current = Do, t = Qe !== null && Qe.next !== null, Gn = 0, Xe = Qe = Ue = null, _o = false, t) throw Error(i(300));
      return e;
    }
    function xs() {
      var e = mi !== 0;
      return mi = 0, e;
    }
    function Jt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Xe === null ? Ue.memoizedState = Xe = e : Xe = Xe.next = e, Xe;
    }
    function zt() {
      if (Qe === null) {
        var e = Ue.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Qe.next;
      var t = Xe === null ? Ue.memoizedState : Xe.next;
      if (t !== null) Xe = t, Qe = e;
      else {
        if (e === null) throw Error(i(310));
        Qe = e, e = {
          memoizedState: Qe.memoizedState,
          baseState: Qe.baseState,
          baseQueue: Qe.baseQueue,
          queue: Qe.queue,
          next: null
        }, Xe === null ? Ue.memoizedState = Xe = e : Xe = Xe.next = e;
      }
      return Xe;
    }
    function gi(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ks(e) {
      var t = zt(), o = t.queue;
      if (o === null) throw Error(i(311));
      o.lastRenderedReducer = e;
      var s = Qe, d = s.baseQueue, p = o.pending;
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
          var H = z.lane;
          if ((Gn & H) === H) C !== null && (C = C.next = {
            lane: 0,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          }), s = z.hasEagerState ? z.eagerState : e(s, z.action);
          else {
            var $ = {
              lane: H,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            };
            C === null ? (E = C = $, x = s) : C = C.next = $, Ue.lanes |= H, Xn |= H;
          }
          z = z.next;
        } while (z !== null && z !== p);
        C === null ? x = s : C.next = E, jt(s, t.memoizedState) || (pt = true), t.memoizedState = s, t.baseState = x, t.baseQueue = C, o.lastRenderedState = s;
      }
      if (e = o.interleaved, e !== null) {
        d = e;
        do
          p = d.lane, Ue.lanes |= p, Xn |= p, d = d.next;
        while (d !== e);
      } else d === null && (o.lanes = 0);
      return [
        t.memoizedState,
        o.dispatch
      ];
    }
    function Ss(e) {
      var t = zt(), o = t.queue;
      if (o === null) throw Error(i(311));
      o.lastRenderedReducer = e;
      var s = o.dispatch, d = o.pending, p = t.memoizedState;
      if (d !== null) {
        o.pending = null;
        var x = d = d.next;
        do
          p = e(p, x.action), x = x.next;
        while (x !== d);
        jt(p, t.memoizedState) || (pt = true), t.memoizedState = p, t.baseQueue === null && (t.baseState = p), o.lastRenderedState = p;
      }
      return [
        p,
        s
      ];
    }
    function Oc() {
    }
    function Rc(e, t) {
      var o = Ue, s = zt(), d = t(), p = !jt(s.memoizedState, d);
      if (p && (s.memoizedState = d, pt = true), s = s.queue, Es(zc.bind(null, o, s, e), [
        e
      ]), s.getSnapshot !== t || p || Xe !== null && Xe.memoizedState.tag & 1) {
        if (o.flags |= 2048, yi(9, Lc.bind(null, o, s, d, t), void 0, null), Je === null) throw Error(i(349));
        (Gn & 30) !== 0 || Ac(o, t, d);
      }
      return d;
    }
    function Ac(e, t, o) {
      e.flags |= 16384, e = {
        getSnapshot: t,
        value: o
      }, t = Ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
      }, Ue.updateQueue = t, t.stores = [
        e
      ]) : (o = t.stores, o === null ? t.stores = [
        e
      ] : o.push(e));
    }
    function Lc(e, t, o, s) {
      t.value = o, t.getSnapshot = s, Mc(t) && bc(e);
    }
    function zc(e, t, o) {
      return o(function() {
        Mc(t) && bc(e);
      });
    }
    function Mc(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var o = t();
        return !jt(e, o);
      } catch {
        return true;
      }
    }
    function bc(e) {
      var t = fn(e, 1);
      t !== null && $t(t, e, 1, -1);
    }
    function Fc(e) {
      var t = Jt();
      return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gi,
        lastRenderedState: e
      }, t.queue = e, e = e.dispatch = Xm.bind(null, Ue, e), [
        t.memoizedState,
        e
      ];
    }
    function yi(e, t, o, s) {
      return e = {
        tag: e,
        create: t,
        destroy: o,
        deps: s,
        next: null
      }, t = Ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
      }, Ue.updateQueue = t, t.lastEffect = e.next = e) : (o = t.lastEffect, o === null ? t.lastEffect = e.next = e : (s = o.next, o.next = e, e.next = s, t.lastEffect = e)), e;
    }
    function Bc() {
      return zt().memoizedState;
    }
    function Po(e, t, o, s) {
      var d = Jt();
      Ue.flags |= e, d.memoizedState = yi(1 | t, o, void 0, s === void 0 ? null : s);
    }
    function No(e, t, o, s) {
      var d = zt();
      s = s === void 0 ? null : s;
      var p = void 0;
      if (Qe !== null) {
        var x = Qe.memoizedState;
        if (p = x.destroy, s !== null && vs(s, x.deps)) {
          d.memoizedState = yi(t, o, p, s);
          return;
        }
      }
      Ue.flags |= e, d.memoizedState = yi(1 | t, o, p, s);
    }
    function jc(e, t) {
      return Po(8390656, 8, e, t);
    }
    function Es(e, t) {
      return No(2048, 8, e, t);
    }
    function Uc(e, t) {
      return No(4, 2, e, t);
    }
    function Vc(e, t) {
      return No(4, 4, e, t);
    }
    function Hc(e, t) {
      if (typeof t == "function") return e = e(), t(e), function() {
        t(null);
      };
      if (t != null) return e = e(), t.current = e, function() {
        t.current = null;
      };
    }
    function Wc(e, t, o) {
      return o = o != null ? o.concat([
        e
      ]) : null, No(4, 4, Hc.bind(null, t, e), o);
    }
    function Is() {
    }
    function $c(e, t) {
      var o = zt();
      t = t === void 0 ? null : t;
      var s = o.memoizedState;
      return s !== null && t !== null && vs(t, s[1]) ? s[0] : (o.memoizedState = [
        e,
        t
      ], e);
    }
    function Yc(e, t) {
      var o = zt();
      t = t === void 0 ? null : t;
      var s = o.memoizedState;
      return s !== null && t !== null && vs(t, s[1]) ? s[0] : (e = e(), o.memoizedState = [
        e,
        t
      ], e);
    }
    function qc(e, t, o) {
      return (Gn & 21) === 0 ? (e.baseState && (e.baseState = false, pt = true), e.memoizedState = o) : (jt(o, t) || (o = Ea(), Ue.lanes |= o, Xn |= o, e.baseState = true), t);
    }
    function Qm(e, t) {
      var o = Oe;
      Oe = o !== 0 && 4 > o ? o : 4, e(true);
      var s = ys.transition;
      ys.transition = {};
      try {
        e(false), t();
      } finally {
        Oe = o, ys.transition = s;
      }
    }
    function Kc() {
      return zt().memoizedState;
    }
    function Gm(e, t, o) {
      var s = An(e);
      if (o = {
        lane: s,
        action: o,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Qc(e)) Gc(t, o);
      else if (o = Tc(e, t, o, s), o !== null) {
        var d = ct();
        $t(o, e, s, d), Xc(o, t, s);
      }
    }
    function Xm(e, t, o) {
      var s = An(e), d = {
        lane: s,
        action: o,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Qc(e)) Gc(t, d);
      else {
        var p = e.alternate;
        if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = t.lastRenderedReducer, p !== null)) try {
          var x = t.lastRenderedState, E = p(x, o);
          if (d.hasEagerState = true, d.eagerState = E, jt(E, x)) {
            var C = t.interleaved;
            C === null ? (d.next = d, fs(t)) : (d.next = C.next, C.next = d), t.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
        o = Tc(e, t, d, s), o !== null && (d = ct(), $t(o, e, s, d), Xc(o, t, s));
      }
    }
    function Qc(e) {
      var t = e.alternate;
      return e === Ue || t !== null && t === Ue;
    }
    function Gc(e, t) {
      hi = _o = true;
      var o = e.pending;
      o === null ? t.next = t : (t.next = o.next, o.next = t), e.pending = t;
    }
    function Xc(e, t, o) {
      if ((o & 4194240) !== 0) {
        var s = t.lanes;
        s &= e.pendingLanes, o |= s, t.lanes = o, Tl(e, o);
      }
    }
    var Do = {
      readContext: Lt,
      useCallback: ot,
      useContext: ot,
      useEffect: ot,
      useImperativeHandle: ot,
      useInsertionEffect: ot,
      useLayoutEffect: ot,
      useMemo: ot,
      useReducer: ot,
      useRef: ot,
      useState: ot,
      useDebugValue: ot,
      useDeferredValue: ot,
      useTransition: ot,
      useMutableSource: ot,
      useSyncExternalStore: ot,
      useId: ot,
      unstable_isNewReconciler: false
    }, Jm = {
      readContext: Lt,
      useCallback: function(e, t) {
        return Jt().memoizedState = [
          e,
          t === void 0 ? null : t
        ], e;
      },
      useContext: Lt,
      useEffect: jc,
      useImperativeHandle: function(e, t, o) {
        return o = o != null ? o.concat([
          e
        ]) : null, Po(4194308, 4, Hc.bind(null, t, e), o);
      },
      useLayoutEffect: function(e, t) {
        return Po(4194308, 4, e, t);
      },
      useInsertionEffect: function(e, t) {
        return Po(4, 2, e, t);
      },
      useMemo: function(e, t) {
        var o = Jt();
        return t = t === void 0 ? null : t, e = e(), o.memoizedState = [
          e,
          t
        ], e;
      },
      useReducer: function(e, t, o) {
        var s = Jt();
        return t = o !== void 0 ? o(t) : t, s.memoizedState = s.baseState = t, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }, s.queue = e, e = e.dispatch = Gm.bind(null, Ue, e), [
          s.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var t = Jt();
        return e = {
          current: e
        }, t.memoizedState = e;
      },
      useState: Fc,
      useDebugValue: Is,
      useDeferredValue: function(e) {
        return Jt().memoizedState = e;
      },
      useTransition: function() {
        var e = Fc(false), t = e[0];
        return e = Qm.bind(null, e[1]), Jt().memoizedState = e, [
          t,
          e
        ];
      },
      useMutableSource: function() {
      },
      useSyncExternalStore: function(e, t, o) {
        var s = Ue, d = Jt();
        if (Be) {
          if (o === void 0) throw Error(i(407));
          o = o();
        } else {
          if (o = t(), Je === null) throw Error(i(349));
          (Gn & 30) !== 0 || Ac(s, t, o);
        }
        d.memoizedState = o;
        var p = {
          value: o,
          getSnapshot: t
        };
        return d.queue = p, jc(zc.bind(null, s, p, e), [
          e
        ]), s.flags |= 2048, yi(9, Lc.bind(null, s, p, o, t), void 0, null), o;
      },
      useId: function() {
        var e = Jt(), t = Je.identifierPrefix;
        if (Be) {
          var o = cn, s = an;
          o = (s & ~(1 << 32 - Bt(s) - 1)).toString(32) + o, t = ":" + t + "R" + o, o = mi++, 0 < o && (t += "H" + o.toString(32)), t += ":";
        } else o = Km++, t = ":" + t + "r" + o.toString(32) + ":";
        return e.memoizedState = t;
      },
      unstable_isNewReconciler: false
    }, Zm = {
      readContext: Lt,
      useCallback: $c,
      useContext: Lt,
      useEffect: Es,
      useImperativeHandle: Wc,
      useInsertionEffect: Uc,
      useLayoutEffect: Vc,
      useMemo: Yc,
      useReducer: ks,
      useRef: Bc,
      useState: function() {
        return ks(gi);
      },
      useDebugValue: Is,
      useDeferredValue: function(e) {
        var t = zt();
        return qc(t, Qe.memoizedState, e);
      },
      useTransition: function() {
        var e = ks(gi)[0], t = zt().memoizedState;
        return [
          e,
          t
        ];
      },
      useMutableSource: Oc,
      useSyncExternalStore: Rc,
      useId: Kc,
      unstable_isNewReconciler: false
    }, eg = {
      readContext: Lt,
      useCallback: $c,
      useContext: Lt,
      useEffect: Es,
      useImperativeHandle: Wc,
      useInsertionEffect: Uc,
      useLayoutEffect: Vc,
      useMemo: Yc,
      useReducer: Ss,
      useRef: Bc,
      useState: function() {
        return Ss(gi);
      },
      useDebugValue: Is,
      useDeferredValue: function(e) {
        var t = zt();
        return Qe === null ? t.memoizedState = e : qc(t, Qe.memoizedState, e);
      },
      useTransition: function() {
        var e = Ss(gi)[0], t = zt().memoizedState;
        return [
          e,
          t
        ];
      },
      useMutableSource: Oc,
      useSyncExternalStore: Rc,
      useId: Kc,
      unstable_isNewReconciler: false
    };
    function Vt(e, t) {
      if (e && e.defaultProps) {
        t = k({}, t), e = e.defaultProps;
        for (var o in e) t[o] === void 0 && (t[o] = e[o]);
        return t;
      }
      return t;
    }
    function Cs(e, t, o, s) {
      t = e.memoizedState, o = o(s, t), o = o == null ? t : k({}, t, o), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    var Oo = {
      isMounted: function(e) {
        return (e = e._reactInternals) ? Hn(e) === e : false;
      },
      enqueueSetState: function(e, t, o) {
        e = e._reactInternals;
        var s = ct(), d = An(e), p = dn(s, d);
        p.payload = t, o != null && (p.callback = o), t = Nn(e, p, d), t !== null && ($t(t, e, d, s), Eo(t, e, d));
      },
      enqueueReplaceState: function(e, t, o) {
        e = e._reactInternals;
        var s = ct(), d = An(e), p = dn(s, d);
        p.tag = 1, p.payload = t, o != null && (p.callback = o), t = Nn(e, p, d), t !== null && ($t(t, e, d, s), Eo(t, e, d));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var o = ct(), s = An(e), d = dn(o, s);
        d.tag = 2, t != null && (d.callback = t), t = Nn(e, d, s), t !== null && ($t(t, e, s, o), Eo(t, e, s));
      }
    };
    function Jc(e, t, o, s, d, p, x) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, p, x) : t.prototype && t.prototype.isPureReactComponent ? !ri(o, s) || !ri(d, p) : true;
    }
    function Zc(e, t, o) {
      var s = false, d = Tn, p = t.contextType;
      return typeof p == "object" && p !== null ? p = Lt(p) : (d = dt(t) ? $n : it.current, s = t.contextTypes, p = (s = s != null) ? gr(e, d) : Tn), t = new t(o, p), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Oo, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = d, e.__reactInternalMemoizedMaskedChildContext = p), t;
    }
    function ef(e, t, o, s) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(o, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(o, s), t.state !== e && Oo.enqueueReplaceState(t, t.state, null);
    }
    function Ts(e, t, o, s) {
      var d = e.stateNode;
      d.props = o, d.state = e.memoizedState, d.refs = {}, ds(e);
      var p = t.contextType;
      typeof p == "object" && p !== null ? d.context = Lt(p) : (p = dt(t) ? $n : it.current, d.context = gr(e, p)), d.state = e.memoizedState, p = t.getDerivedStateFromProps, typeof p == "function" && (Cs(e, t, p, o), d.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (t = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), t !== d.state && Oo.enqueueReplaceState(d, d.state, null), Io(e, o, d, s), d.state = e.memoizedState), typeof d.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Ir(e, t) {
      try {
        var o = "", s = t;
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
        source: t,
        stack: d,
        digest: null
      };
    }
    function _s(e, t, o) {
      return {
        value: e,
        source: null,
        stack: o ?? null,
        digest: t ?? null
      };
    }
    function Ps(e, t) {
      try {
        console.error(t.value);
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    var tg = typeof WeakMap == "function" ? WeakMap : Map;
    function tf(e, t, o) {
      o = dn(-1, o), o.tag = 3, o.payload = {
        element: null
      };
      var s = t.value;
      return o.callback = function() {
        Fo || (Fo = true, Hs = s), Ps(e, t);
      }, o;
    }
    function nf(e, t, o) {
      o = dn(-1, o), o.tag = 3;
      var s = e.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var d = t.value;
        o.payload = function() {
          return s(d);
        }, o.callback = function() {
          Ps(e, t);
        };
      }
      var p = e.stateNode;
      return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
        Ps(e, t), typeof s != "function" && (On === null ? On = /* @__PURE__ */ new Set([
          this
        ]) : On.add(this));
        var x = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: x !== null ? x : ""
        });
      }), o;
    }
    function rf(e, t, o) {
      var s = e.pingCache;
      if (s === null) {
        s = e.pingCache = new tg();
        var d = /* @__PURE__ */ new Set();
        s.set(t, d);
      } else d = s.get(t), d === void 0 && (d = /* @__PURE__ */ new Set(), s.set(t, d));
      d.has(o) || (d.add(o), e = mg.bind(null, e, t, o), t.then(e, e));
    }
    function of(e) {
      do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function lf(e, t, o, s, d) {
      return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (t = dn(-1, 1), t.tag = 2, Nn(o, t, 1))), o.lanes |= 1), e) : (e.flags |= 65536, e.lanes = d, e);
    }
    var ng = W.ReactCurrentOwner, pt = false;
    function at(e, t, o, s) {
      t.child = e === null ? Cc(t, null, o, s) : xr(t, e.child, o, s);
    }
    function sf(e, t, o, s, d) {
      o = o.render;
      var p = t.ref;
      return Sr(t, d), s = ws(e, t, o, s, p, d), o = xs(), e !== null && !pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~d, pn(e, t, d)) : (Be && o && ns(t), t.flags |= 1, at(e, t, s, d), t.child);
    }
    function uf(e, t, o, s, d) {
      if (e === null) {
        var p = o.type;
        return typeof p == "function" && !Gs(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (t.tag = 15, t.type = p, af(e, t, p, s, d)) : (e = Wo(o.type, null, s, t, t.mode, d), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (p = e.child, (e.lanes & d) === 0) {
        var x = p.memoizedProps;
        if (o = o.compare, o = o !== null ? o : ri, o(x, s) && e.ref === t.ref) return pn(e, t, d);
      }
      return t.flags |= 1, e = zn(p, s), e.ref = t.ref, e.return = t, t.child = e;
    }
    function af(e, t, o, s, d) {
      if (e !== null) {
        var p = e.memoizedProps;
        if (ri(p, s) && e.ref === t.ref) if (pt = false, t.pendingProps = s = p, (e.lanes & d) !== 0) (e.flags & 131072) !== 0 && (pt = true);
        else return t.lanes = e.lanes, pn(e, t, d);
      }
      return Ns(e, t, o, s, d);
    }
    function cf(e, t, o) {
      var s = t.pendingProps, d = s.children, p = e !== null ? e.memoizedState : null;
      if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, Re(Tr, It), It |= o;
      else {
        if ((o & 1073741824) === 0) return e = p !== null ? p.baseLanes | o : o, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }, t.updateQueue = null, Re(Tr, It), It |= e, null;
        t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, s = p !== null ? p.baseLanes : o, Re(Tr, It), It |= s;
      }
      else p !== null ? (s = p.baseLanes | o, t.memoizedState = null) : s = o, Re(Tr, It), It |= s;
      return at(e, t, d, o), t.child;
    }
    function ff(e, t) {
      var o = t.ref;
      (e === null && o !== null || e !== null && e.ref !== o) && (t.flags |= 512, t.flags |= 2097152);
    }
    function Ns(e, t, o, s, d) {
      var p = dt(o) ? $n : it.current;
      return p = gr(t, p), Sr(t, d), o = ws(e, t, o, s, p, d), s = xs(), e !== null && !pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~d, pn(e, t, d)) : (Be && s && ns(t), t.flags |= 1, at(e, t, o, d), t.child);
    }
    function df(e, t, o, s, d) {
      if (dt(o)) {
        var p = true;
        mo(t);
      } else p = false;
      if (Sr(t, d), t.stateNode === null) Ao(e, t), Zc(t, o, s), Ts(t, o, s, d), s = true;
      else if (e === null) {
        var x = t.stateNode, E = t.memoizedProps;
        x.props = E;
        var C = x.context, z = o.contextType;
        typeof z == "object" && z !== null ? z = Lt(z) : (z = dt(o) ? $n : it.current, z = gr(t, z));
        var H = o.getDerivedStateFromProps, $ = typeof H == "function" || typeof x.getSnapshotBeforeUpdate == "function";
        $ || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (E !== s || C !== z) && ef(t, x, s, z), Pn = false;
        var V = t.memoizedState;
        x.state = V, Io(t, s, x, d), C = t.memoizedState, E !== s || V !== C || ft.current || Pn ? (typeof H == "function" && (Cs(t, o, H, s), C = t.memoizedState), (E = Pn || Jc(t, o, E, s, V, C, z)) ? ($ || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = C), x.props = s, x.state = C, x.context = z, s = E) : (typeof x.componentDidMount == "function" && (t.flags |= 4194308), s = false);
      } else {
        x = t.stateNode, _c(e, t), E = t.memoizedProps, z = t.type === t.elementType ? E : Vt(t.type, E), x.props = z, $ = t.pendingProps, V = x.context, C = o.contextType, typeof C == "object" && C !== null ? C = Lt(C) : (C = dt(o) ? $n : it.current, C = gr(t, C));
        var re = o.getDerivedStateFromProps;
        (H = typeof re == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (E !== $ || V !== C) && ef(t, x, s, C), Pn = false, V = t.memoizedState, x.state = V, Io(t, s, x, d);
        var ae = t.memoizedState;
        E !== $ || V !== ae || ft.current || Pn ? (typeof re == "function" && (Cs(t, o, re, s), ae = t.memoizedState), (z = Pn || Jc(t, o, z, s, V, ae, C) || false) ? (H || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(s, ae, C), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(s, ae, C)), typeof x.componentDidUpdate == "function" && (t.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || E === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = ae), x.props = s, x.state = ae, x.context = C, s = z) : (typeof x.componentDidUpdate != "function" || E === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), s = false);
      }
      return Ds(e, t, o, s, p, d);
    }
    function Ds(e, t, o, s, d, p) {
      ff(e, t);
      var x = (t.flags & 128) !== 0;
      if (!s && !x) return d && gc(t, o, false), pn(e, t, p);
      s = t.stateNode, ng.current = t;
      var E = x && typeof o.getDerivedStateFromError != "function" ? null : s.render();
      return t.flags |= 1, e !== null && x ? (t.child = xr(t, e.child, null, p), t.child = xr(t, null, E, p)) : at(e, t, E, p), t.memoizedState = s.state, d && gc(t, o, true), t.child;
    }
    function pf(e) {
      var t = e.stateNode;
      t.pendingContext ? hc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hc(e, t.context, false), ps(e, t.containerInfo);
    }
    function hf(e, t, o, s, d) {
      return wr(), ls(d), t.flags |= 256, at(e, t, o, s), t.child;
    }
    var Os = {
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
    function mf(e, t, o) {
      var s = t.pendingProps, d = je.current, p = false, x = (t.flags & 128) !== 0, E;
      if ((E = x) || (E = e !== null && e.memoizedState === null ? false : (d & 2) !== 0), E ? (p = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (d |= 1), Re(je, d & 1), e === null) return os(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (x = s.children, e = s.fallback, p ? (s = t.mode, p = t.child, x = {
        mode: "hidden",
        children: x
      }, (s & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = x) : p = $o(x, s, 0, null), e = tr(e, s, o, null), p.return = t, e.return = t, p.sibling = e, t.child = p, t.child.memoizedState = Rs(o), t.memoizedState = Os, e) : As(t, x));
      if (d = e.memoizedState, d !== null && (E = d.dehydrated, E !== null)) return rg(e, t, x, s, E, d, o);
      if (p) {
        p = s.fallback, x = t.mode, d = e.child, E = d.sibling;
        var C = {
          mode: "hidden",
          children: s.children
        };
        return (x & 1) === 0 && t.child !== d ? (s = t.child, s.childLanes = 0, s.pendingProps = C, t.deletions = null) : (s = zn(d, C), s.subtreeFlags = d.subtreeFlags & 14680064), E !== null ? p = zn(E, p) : (p = tr(p, x, o, null), p.flags |= 2), p.return = t, s.return = t, s.sibling = p, t.child = s, s = p, p = t.child, x = e.child.memoizedState, x = x === null ? Rs(o) : {
          baseLanes: x.baseLanes | o,
          cachePool: null,
          transitions: x.transitions
        }, p.memoizedState = x, p.childLanes = e.childLanes & ~o, t.memoizedState = Os, s;
      }
      return p = e.child, e = p.sibling, s = zn(p, {
        mode: "visible",
        children: s.children
      }), (t.mode & 1) === 0 && (s.lanes = o), s.return = t, s.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [
        e
      ], t.flags |= 16) : o.push(e)), t.child = s, t.memoizedState = null, s;
    }
    function As(e, t) {
      return t = $o({
        mode: "visible",
        children: t
      }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Ro(e, t, o, s) {
      return s !== null && ls(s), xr(t, e.child, null, o), e = As(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function rg(e, t, o, s, d, p, x) {
      if (o) return t.flags & 256 ? (t.flags &= -257, s = _s(Error(i(422))), Ro(e, t, x, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (p = s.fallback, d = t.mode, s = $o({
        mode: "visible",
        children: s.children
      }, d, 0, null), p = tr(p, d, x, null), p.flags |= 2, s.return = t, p.return = t, s.sibling = p, t.child = s, (t.mode & 1) !== 0 && xr(t, e.child, null, x), t.child.memoizedState = Rs(x), t.memoizedState = Os, p);
      if ((t.mode & 1) === 0) return Ro(e, t, x, null);
      if (d.data === "$!") {
        if (s = d.nextSibling && d.nextSibling.dataset, s) var E = s.dgst;
        return s = E, p = Error(i(419)), s = _s(p, s, void 0), Ro(e, t, x, s);
      }
      if (E = (x & e.childLanes) !== 0, pt || E) {
        if (s = Je, s !== null) {
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
          d = (d & (s.suspendedLanes | x)) !== 0 ? 0 : d, d !== 0 && d !== p.retryLane && (p.retryLane = d, fn(e, d), $t(s, e, d, -1));
        }
        return Qs(), s = _s(Error(i(421))), Ro(e, t, x, s);
      }
      return d.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gg.bind(null, e), d._reactRetry = t, null) : (e = p.treeContext, Et = In(d.nextSibling), St = t, Be = true, Ut = null, e !== null && (Rt[At++] = an, Rt[At++] = cn, Rt[At++] = Yn, an = e.id, cn = e.overflow, Yn = t), t = As(t, s.children), t.flags |= 4096, t);
    }
    function gf(e, t, o) {
      e.lanes |= t;
      var s = e.alternate;
      s !== null && (s.lanes |= t), cs(e.return, t, o);
    }
    function Ls(e, t, o, s, d) {
      var p = e.memoizedState;
      p === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: o,
        tailMode: d
      } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = s, p.tail = o, p.tailMode = d);
    }
    function yf(e, t, o) {
      var s = t.pendingProps, d = s.revealOrder, p = s.tail;
      if (at(e, t, s.children, o), s = je.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && gf(e, o, t);
          else if (e.tag === 19) gf(e, o, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        s &= 1;
      }
      if (Re(je, s), (t.mode & 1) === 0) t.memoizedState = null;
      else switch (d) {
        case "forwards":
          for (o = t.child, d = null; o !== null; ) e = o.alternate, e !== null && Co(e) === null && (d = o), o = o.sibling;
          o = d, o === null ? (d = t.child, t.child = null) : (d = o.sibling, o.sibling = null), Ls(t, false, d, o, p);
          break;
        case "backwards":
          for (o = null, d = t.child, t.child = null; d !== null; ) {
            if (e = d.alternate, e !== null && Co(e) === null) {
              t.child = d;
              break;
            }
            e = d.sibling, d.sibling = o, o = d, d = e;
          }
          Ls(t, true, o, null, p);
          break;
        case "together":
          Ls(t, false, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ao(e, t) {
      (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function pn(e, t, o) {
      if (e !== null && (t.dependencies = e.dependencies), Xn |= t.lanes, (o & t.childLanes) === 0) return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (e = t.child, o = zn(e, e.pendingProps), t.child = o, o.return = t; e.sibling !== null; ) e = e.sibling, o = o.sibling = zn(e, e.pendingProps), o.return = t;
        o.sibling = null;
      }
      return t.child;
    }
    function ig(e, t, o) {
      switch (t.tag) {
        case 3:
          pf(t), wr();
          break;
        case 5:
          Dc(t);
          break;
        case 1:
          dt(t.type) && mo(t);
          break;
        case 4:
          ps(t, t.stateNode.containerInfo);
          break;
        case 10:
          var s = t.type._context, d = t.memoizedProps.value;
          Re(ko, s._currentValue), s._currentValue = d;
          break;
        case 13:
          if (s = t.memoizedState, s !== null) return s.dehydrated !== null ? (Re(je, je.current & 1), t.flags |= 128, null) : (o & t.child.childLanes) !== 0 ? mf(e, t, o) : (Re(je, je.current & 1), e = pn(e, t, o), e !== null ? e.sibling : null);
          Re(je, je.current & 1);
          break;
        case 19:
          if (s = (o & t.childLanes) !== 0, (e.flags & 128) !== 0) {
            if (s) return yf(e, t, o);
            t.flags |= 128;
          }
          if (d = t.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Re(je, je.current), s) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, cf(e, t, o);
      }
      return pn(e, t, o);
    }
    var vf, zs, wf, xf;
    vf = function(e, t) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
        else if (o.tag !== 4 && o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === t) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t) return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, zs = function() {
    }, wf = function(e, t, o, s) {
      var d = e.memoizedProps;
      if (d !== s) {
        e = t.stateNode, Qn(Xt.current);
        var p = null;
        switch (o) {
          case "input":
            d = Fr(e, d), s = Fr(e, s), p = [];
            break;
          case "select":
            d = k({}, d, {
              value: void 0
            }), s = k({}, s, {
              value: void 0
            }), p = [];
            break;
          case "textarea":
            d = Ur(e, d), s = Ur(e, s), p = [];
            break;
          default:
            typeof d.onClick != "function" && typeof s.onClick == "function" && (e.onclick = fo);
        }
        tt(o, s);
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
        (t.updateQueue = z) && (t.flags |= 4);
      }
    }, xf = function(e, t, o, s) {
      o !== s && (t.flags |= 4);
    };
    function vi(e, t) {
      if (!Be) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var o = null; t !== null; ) t.alternate !== null && (o = t), t = t.sibling;
          o === null ? e.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = e.tail;
          for (var s = null; o !== null; ) o.alternate !== null && (s = o), o = o.sibling;
          s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
      }
    }
    function lt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, o = 0, s = 0;
      if (t) for (var d = e.child; d !== null; ) o |= d.lanes | d.childLanes, s |= d.subtreeFlags & 14680064, s |= d.flags & 14680064, d.return = e, d = d.sibling;
      else for (d = e.child; d !== null; ) o |= d.lanes | d.childLanes, s |= d.subtreeFlags, s |= d.flags, d.return = e, d = d.sibling;
      return e.subtreeFlags |= s, e.childLanes = o, t;
    }
    function og(e, t, o) {
      var s = t.pendingProps;
      switch (rs(t), t.tag) {
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
          return lt(t), null;
        case 1:
          return dt(t.type) && ho(), lt(t), null;
        case 3:
          return s = t.stateNode, Er(), be(ft), be(it), gs(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (wo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ut !== null && (Ys(Ut), Ut = null))), zs(e, t), lt(t), null;
        case 5:
          hs(t);
          var d = Qn(pi.current);
          if (o = t.type, e !== null && t.stateNode != null) wf(e, t, o, s, d), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
          else {
            if (!s) {
              if (t.stateNode === null) throw Error(i(166));
              return lt(t), null;
            }
            if (e = Qn(Xt.current), wo(t)) {
              s = t.stateNode, o = t.type;
              var p = t.memoizedProps;
              switch (s[Gt] = t, s[ui] = p, e = (t.mode & 1) !== 0, o) {
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
                  for (d = 0; d < oi.length; d++) Me(oi[d], s);
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
                  Ui(s, p), Me("invalid", s);
              }
              tt(o, p), d = null;
              for (var x in p) if (p.hasOwnProperty(x)) {
                var E = p[x];
                x === "children" ? typeof E == "string" ? s.textContent !== E && (p.suppressHydrationWarning !== true && co(s.textContent, E, e), d = [
                  "children",
                  E
                ]) : typeof E == "number" && s.textContent !== "" + E && (p.suppressHydrationWarning !== true && co(s.textContent, E, e), d = [
                  "children",
                  "" + E
                ]) : u.hasOwnProperty(x) && E != null && x === "onScroll" && Me("scroll", s);
              }
              switch (o) {
                case "input":
                  Dt(s), ji(s, p, true);
                  break;
                case "textarea":
                  Dt(s), Hi(s);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof p.onClick == "function" && (s.onclick = fo);
              }
              s = d, t.updateQueue = s, s !== null && (t.flags |= 4);
            } else {
              x = d.nodeType === 9 ? d : d.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = F(o)), e === "http://www.w3.org/1999/xhtml" ? o === "script" ? (e = x.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = x.createElement(o, {
                is: s.is
              }) : (e = x.createElement(o), o === "select" && (x = e, s.multiple ? x.multiple = true : s.size && (x.size = s.size))) : e = x.createElementNS(e, o), e[Gt] = t, e[ui] = s, vf(e, t, false, false), t.stateNode = e;
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
                    for (d = 0; d < oi.length; d++) Me(oi[d], e);
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
                    Br(e, s), d = Fr(e, s), Me("invalid", e);
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
                    Ui(e, s), d = Ur(e, s), Me("invalid", e);
                    break;
                  default:
                    d = s;
                }
                tt(o, d), E = d;
                for (p in E) if (E.hasOwnProperty(p)) {
                  var C = E[p];
                  p === "style" ? yn(e, C) : p === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Ee(e, C)) : p === "children" ? typeof C == "string" ? (o !== "textarea" || C !== "") && _e(e, C) : typeof C == "number" && _e(e, "" + C) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (u.hasOwnProperty(p) ? C != null && p === "onScroll" && Me("scroll", e) : C != null && L(e, p, C, x));
                }
                switch (o) {
                  case "input":
                    Dt(e), ji(e, s, false);
                    break;
                  case "textarea":
                    Dt(e), Hi(e);
                    break;
                  case "option":
                    s.value != null && e.setAttribute("value", "" + ke(s.value));
                    break;
                  case "select":
                    e.multiple = !!s.multiple, p = s.value, p != null ? gn(e, !!s.multiple, p, false) : s.defaultValue != null && gn(e, !!s.multiple, s.defaultValue, true);
                    break;
                  default:
                    typeof d.onClick == "function" && (e.onclick = fo);
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
              s && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
          }
          return lt(t), null;
        case 6:
          if (e && t.stateNode != null) xf(e, t, e.memoizedProps, s);
          else {
            if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
            if (o = Qn(pi.current), Qn(Xt.current), wo(t)) {
              if (s = t.stateNode, o = t.memoizedProps, s[Gt] = t, (p = s.nodeValue !== o) && (e = St, e !== null)) switch (e.tag) {
                case 3:
                  co(s.nodeValue, o, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== true && co(s.nodeValue, o, (e.mode & 1) !== 0);
              }
              p && (t.flags |= 4);
            } else s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[Gt] = t, t.stateNode = s;
          }
          return lt(t), null;
        case 13:
          if (be(je), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Be && Et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Sc(), wr(), t.flags |= 98560, p = false;
            else if (p = wo(t), s !== null && s.dehydrated !== null) {
              if (e === null) {
                if (!p) throw Error(i(318));
                if (p = t.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(i(317));
                p[Gt] = t;
              } else wr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              lt(t), p = false;
            } else Ut !== null && (Ys(Ut), Ut = null), p = true;
            if (!p) return t.flags & 65536 ? t : null;
          }
          return (t.flags & 128) !== 0 ? (t.lanes = o, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (je.current & 1) !== 0 ? Ge === 0 && (Ge = 3) : Qs())), t.updateQueue !== null && (t.flags |= 4), lt(t), null);
        case 4:
          return Er(), zs(e, t), e === null && li(t.stateNode.containerInfo), lt(t), null;
        case 10:
          return as(t.type._context), lt(t), null;
        case 17:
          return dt(t.type) && ho(), lt(t), null;
        case 19:
          if (be(je), p = t.memoizedState, p === null) return lt(t), null;
          if (s = (t.flags & 128) !== 0, x = p.rendering, x === null) if (s) vi(p, false);
          else {
            if (Ge !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
              if (x = Co(e), x !== null) {
                for (t.flags |= 128, vi(p, false), s = x.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = o, o = t.child; o !== null; ) p = o, e = s, p.flags &= 14680066, x = p.alternate, x === null ? (p.childLanes = 0, p.lanes = e, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = x.childLanes, p.lanes = x.lanes, p.child = x.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = x.memoizedProps, p.memoizedState = x.memoizedState, p.updateQueue = x.updateQueue, p.type = x.type, e = x.dependencies, p.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), o = o.sibling;
                return Re(je, je.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
            p.tail !== null && We() > _r && (t.flags |= 128, s = true, vi(p, false), t.lanes = 4194304);
          }
          else {
            if (!s) if (e = Co(x), e !== null) {
              if (t.flags |= 128, s = true, o = e.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), vi(p, true), p.tail === null && p.tailMode === "hidden" && !x.alternate && !Be) return lt(t), null;
            } else 2 * We() - p.renderingStartTime > _r && o !== 1073741824 && (t.flags |= 128, s = true, vi(p, false), t.lanes = 4194304);
            p.isBackwards ? (x.sibling = t.child, t.child = x) : (o = p.last, o !== null ? o.sibling = x : t.child = x, p.last = x);
          }
          return p.tail !== null ? (t = p.tail, p.rendering = t, p.tail = t.sibling, p.renderingStartTime = We(), t.sibling = null, o = je.current, Re(je, s ? o & 1 | 2 : o & 1), t) : (lt(t), null);
        case 22:
        case 23:
          return Ks(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (It & 1073741824) !== 0 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function lg(e, t) {
      switch (rs(t), t.tag) {
        case 1:
          return dt(t.type) && ho(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return Er(), be(ft), be(it), gs(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
          return hs(t), null;
        case 13:
          if (be(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(i(340));
            wr();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return be(je), null;
        case 4:
          return Er(), null;
        case 10:
          return as(t.type._context), null;
        case 22:
        case 23:
          return Ks(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Lo = false, st = false, sg = typeof WeakSet == "function" ? WeakSet : Set, se = null;
    function Cr(e, t) {
      var o = e.ref;
      if (o !== null) if (typeof o == "function") try {
        o(null);
      } catch (s) {
        He(e, t, s);
      }
      else o.current = null;
    }
    function Ms(e, t, o) {
      try {
        o();
      } catch (s) {
        He(e, t, s);
      }
    }
    var kf = false;
    function ug(e, t) {
      if (Kl = Zi, e = Ja(), jl(e)) {
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
            var x = 0, E = -1, C = -1, z = 0, H = 0, $ = e, V = null;
            t: for (; ; ) {
              for (var re; $ !== o || d !== 0 && $.nodeType !== 3 || (E = x + d), $ !== p || s !== 0 && $.nodeType !== 3 || (C = x + s), $.nodeType === 3 && (x += $.nodeValue.length), (re = $.firstChild) !== null; ) V = $, $ = re;
              for (; ; ) {
                if ($ === e) break t;
                if (V === o && ++z === d && (E = x), V === p && ++H === s && (C = x), (re = $.nextSibling) !== null) break;
                $ = V, V = $.parentNode;
              }
              $ = re;
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
      for (Ql = {
        focusedElem: e,
        selectionRange: o
      }, Zi = false, se = t; se !== null; ) if (t = se, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, se = e;
      else for (; se !== null; ) {
        t = se;
        try {
          var ae = t.alternate;
          if ((t.flags & 1024) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (ae !== null) {
                var ce = ae.memoizedProps, $e = ae.memoizedState, O = t.stateNode, _ = O.getSnapshotBeforeUpdate(t.elementType === t.type ? ce : Vt(t.type, ce), $e);
                O.__reactInternalSnapshotBeforeUpdate = _;
              }
              break;
            case 3:
              var R = t.stateNode.containerInfo;
              R.nodeType === 1 ? R.textContent = "" : R.nodeType === 9 && R.documentElement && R.removeChild(R.documentElement);
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
          He(t, t.return, K);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, se = e;
          break;
        }
        se = t.return;
      }
      return ae = kf, kf = false, ae;
    }
    function wi(e, t, o) {
      var s = t.updateQueue;
      if (s = s !== null ? s.lastEffect : null, s !== null) {
        var d = s = s.next;
        do {
          if ((d.tag & e) === e) {
            var p = d.destroy;
            d.destroy = void 0, p !== void 0 && Ms(t, o, p);
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function zo(e, t) {
      if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var o = t = t.next;
        do {
          if ((o.tag & e) === e) {
            var s = o.create;
            o.destroy = s();
          }
          o = o.next;
        } while (o !== t);
      }
    }
    function bs(e) {
      var t = e.ref;
      if (t !== null) {
        var o = e.stateNode;
        switch (e.tag) {
          case 5:
            e = o;
            break;
          default:
            e = o;
        }
        typeof t == "function" ? t(e) : t.current = e;
      }
    }
    function Sf(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Sf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Gt], delete t[ui], delete t[Zl], delete t[Wm], delete t[$m])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Ef(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function If(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ef(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Fs(e, t, o) {
      var s = e.tag;
      if (s === 5 || s === 6) e = e.stateNode, t ? o.nodeType === 8 ? o.parentNode.insertBefore(e, t) : o.insertBefore(e, t) : (o.nodeType === 8 ? (t = o.parentNode, t.insertBefore(e, o)) : (t = o, t.appendChild(e)), o = o._reactRootContainer, o != null || t.onclick !== null || (t.onclick = fo));
      else if (s !== 4 && (e = e.child, e !== null)) for (Fs(e, t, o), e = e.sibling; e !== null; ) Fs(e, t, o), e = e.sibling;
    }
    function Bs(e, t, o) {
      var s = e.tag;
      if (s === 5 || s === 6) e = e.stateNode, t ? o.insertBefore(e, t) : o.appendChild(e);
      else if (s !== 4 && (e = e.child, e !== null)) for (Bs(e, t, o), e = e.sibling; e !== null; ) Bs(e, t, o), e = e.sibling;
    }
    var nt = null, Ht = false;
    function Dn(e, t, o) {
      for (o = o.child; o !== null; ) Cf(e, t, o), o = o.sibling;
    }
    function Cf(e, t, o) {
      if (Qt && typeof Qt.onCommitFiberUnmount == "function") try {
        Qt.onCommitFiberUnmount(qi, o);
      } catch {
      }
      switch (o.tag) {
        case 5:
          st || Cr(o, t);
        case 6:
          var s = nt, d = Ht;
          nt = null, Dn(e, t, o), nt = s, Ht = d, nt !== null && (Ht ? (e = nt, o = o.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o)) : nt.removeChild(o.stateNode));
          break;
        case 18:
          nt !== null && (Ht ? (e = nt, o = o.stateNode, e.nodeType === 8 ? Jl(e.parentNode, o) : e.nodeType === 1 && Jl(e, o), Xr(e)) : Jl(nt, o.stateNode));
          break;
        case 4:
          s = nt, d = Ht, nt = o.stateNode.containerInfo, Ht = true, Dn(e, t, o), nt = s, Ht = d;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!st && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
            d = s = s.next;
            do {
              var p = d, x = p.destroy;
              p = p.tag, x !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Ms(o, t, x), d = d.next;
            } while (d !== s);
          }
          Dn(e, t, o);
          break;
        case 1:
          if (!st && (Cr(o, t), s = o.stateNode, typeof s.componentWillUnmount == "function")) try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (E) {
            He(o, t, E);
          }
          Dn(e, t, o);
          break;
        case 21:
          Dn(e, t, o);
          break;
        case 22:
          o.mode & 1 ? (st = (s = st) || o.memoizedState !== null, Dn(e, t, o), st = s) : Dn(e, t, o);
          break;
        default:
          Dn(e, t, o);
      }
    }
    function Tf(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var o = e.stateNode;
        o === null && (o = e.stateNode = new sg()), t.forEach(function(s) {
          var d = yg.bind(null, e, s);
          o.has(s) || (o.add(s), s.then(d, d));
        });
      }
    }
    function Wt(e, t) {
      var o = t.deletions;
      if (o !== null) for (var s = 0; s < o.length; s++) {
        var d = o[s];
        try {
          var p = e, x = t, E = x;
          e: for (; E !== null; ) {
            switch (E.tag) {
              case 5:
                nt = E.stateNode, Ht = false;
                break e;
              case 3:
                nt = E.stateNode.containerInfo, Ht = true;
                break e;
              case 4:
                nt = E.stateNode.containerInfo, Ht = true;
                break e;
            }
            E = E.return;
          }
          if (nt === null) throw Error(i(160));
          Cf(p, x, d), nt = null, Ht = false;
          var C = d.alternate;
          C !== null && (C.return = null), d.return = null;
        } catch (z) {
          He(d, t, z);
        }
      }
      if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) _f(t, e), t = t.sibling;
    }
    function _f(e, t) {
      var o = e.alternate, s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (Wt(t, e), Zt(e), s & 4) {
            try {
              wi(3, e, e.return), zo(3, e);
            } catch (ce) {
              He(e, e.return, ce);
            }
            try {
              wi(5, e, e.return);
            } catch (ce) {
              He(e, e.return, ce);
            }
          }
          break;
        case 1:
          Wt(t, e), Zt(e), s & 512 && o !== null && Cr(o, o.return);
          break;
        case 5:
          if (Wt(t, e), Zt(e), s & 512 && o !== null && Cr(o, o.return), e.flags & 32) {
            var d = e.stateNode;
            try {
              _e(d, "");
            } catch (ce) {
              He(e, e.return, ce);
            }
          }
          if (s & 4 && (d = e.stateNode, d != null)) {
            var p = e.memoizedProps, x = o !== null ? o.memoizedProps : p, E = e.type, C = e.updateQueue;
            if (e.updateQueue = null, C !== null) try {
              E === "input" && p.type === "radio" && p.name != null && jr(d, p), Kt(E, x);
              var z = Kt(E, p);
              for (x = 0; x < C.length; x += 2) {
                var H = C[x], $ = C[x + 1];
                H === "style" ? yn(d, $) : H === "dangerouslySetInnerHTML" ? Ee(d, $) : H === "children" ? _e(d, $) : L(d, H, $, z);
              }
              switch (E) {
                case "input":
                  rr(d, p);
                  break;
                case "textarea":
                  Vi(d, p);
                  break;
                case "select":
                  var V = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var re = p.value;
                  re != null ? gn(d, !!p.multiple, re, false) : V !== !!p.multiple && (p.defaultValue != null ? gn(d, !!p.multiple, p.defaultValue, true) : gn(d, !!p.multiple, p.multiple ? [] : "", false));
              }
              d[ui] = p;
            } catch (ce) {
              He(e, e.return, ce);
            }
          }
          break;
        case 6:
          if (Wt(t, e), Zt(e), s & 4) {
            if (e.stateNode === null) throw Error(i(162));
            d = e.stateNode, p = e.memoizedProps;
            try {
              d.nodeValue = p;
            } catch (ce) {
              He(e, e.return, ce);
            }
          }
          break;
        case 3:
          if (Wt(t, e), Zt(e), s & 4 && o !== null && o.memoizedState.isDehydrated) try {
            Xr(t.containerInfo);
          } catch (ce) {
            He(e, e.return, ce);
          }
          break;
        case 4:
          Wt(t, e), Zt(e);
          break;
        case 13:
          Wt(t, e), Zt(e), d = e.child, d.flags & 8192 && (p = d.memoizedState !== null, d.stateNode.isHidden = p, !p || d.alternate !== null && d.alternate.memoizedState !== null || (Vs = We())), s & 4 && Tf(e);
          break;
        case 22:
          if (H = o !== null && o.memoizedState !== null, e.mode & 1 ? (st = (z = st) || H, Wt(t, e), st = z) : Wt(t, e), Zt(e), s & 8192) {
            if (z = e.memoizedState !== null, (e.stateNode.isHidden = z) && !H && (e.mode & 1) !== 0) for (se = e, H = e.child; H !== null; ) {
              for ($ = se = H; se !== null; ) {
                switch (V = se, re = V.child, V.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    wi(4, V, V.return);
                    break;
                  case 1:
                    Cr(V, V.return);
                    var ae = V.stateNode;
                    if (typeof ae.componentWillUnmount == "function") {
                      s = V, o = V.return;
                      try {
                        t = s, ae.props = t.memoizedProps, ae.state = t.memoizedState, ae.componentWillUnmount();
                      } catch (ce) {
                        He(s, o, ce);
                      }
                    }
                    break;
                  case 5:
                    Cr(V, V.return);
                    break;
                  case 22:
                    if (V.memoizedState !== null) {
                      Df($);
                      continue;
                    }
                }
                re !== null ? (re.return = V, se = re) : Df($);
              }
              H = H.sibling;
            }
            e: for (H = null, $ = e; ; ) {
              if ($.tag === 5) {
                if (H === null) {
                  H = $;
                  try {
                    d = $.stateNode, z ? (p = d.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (E = $.stateNode, C = $.memoizedProps.style, x = C != null && C.hasOwnProperty("display") ? C.display : null, E.style.display = Ot("display", x));
                  } catch (ce) {
                    He(e, e.return, ce);
                  }
                }
              } else if ($.tag === 6) {
                if (H === null) try {
                  $.stateNode.nodeValue = z ? "" : $.memoizedProps;
                } catch (ce) {
                  He(e, e.return, ce);
                }
              } else if (($.tag !== 22 && $.tag !== 23 || $.memoizedState === null || $ === e) && $.child !== null) {
                $.child.return = $, $ = $.child;
                continue;
              }
              if ($ === e) break e;
              for (; $.sibling === null; ) {
                if ($.return === null || $.return === e) break e;
                H === $ && (H = null), $ = $.return;
              }
              H === $ && (H = null), $.sibling.return = $.return, $ = $.sibling;
            }
          }
          break;
        case 19:
          Wt(t, e), Zt(e), s & 4 && Tf(e);
          break;
        case 21:
          break;
        default:
          Wt(t, e), Zt(e);
      }
    }
    function Zt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var o = e.return; o !== null; ) {
              if (Ef(o)) {
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
              s.flags & 32 && (_e(d, ""), s.flags &= -33);
              var p = If(e);
              Bs(e, p, d);
              break;
            case 3:
            case 4:
              var x = s.stateNode.containerInfo, E = If(e);
              Fs(e, E, x);
              break;
            default:
              throw Error(i(161));
          }
        } catch (C) {
          He(e, e.return, C);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ag(e, t, o) {
      se = e, Pf(e);
    }
    function Pf(e, t, o) {
      for (var s = (e.mode & 1) !== 0; se !== null; ) {
        var d = se, p = d.child;
        if (d.tag === 22 && s) {
          var x = d.memoizedState !== null || Lo;
          if (!x) {
            var E = d.alternate, C = E !== null && E.memoizedState !== null || st;
            E = Lo;
            var z = st;
            if (Lo = x, (st = C) && !z) for (se = d; se !== null; ) x = se, C = x.child, x.tag === 22 && x.memoizedState !== null ? Of(d) : C !== null ? (C.return = x, se = C) : Of(d);
            for (; p !== null; ) se = p, Pf(p), p = p.sibling;
            se = d, Lo = E, st = z;
          }
          Nf(e);
        } else (d.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = d, se = p) : Nf(e);
      }
    }
    function Nf(e) {
      for (; se !== null; ) {
        var t = se;
        if ((t.flags & 8772) !== 0) {
          var o = t.alternate;
          try {
            if ((t.flags & 8772) !== 0) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                st || zo(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !st) if (o === null) s.componentDidMount();
                else {
                  var d = t.elementType === t.type ? o.memoizedProps : Vt(t.type, o.memoizedProps);
                  s.componentDidUpdate(d, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                }
                var p = t.updateQueue;
                p !== null && Nc(t, p, s);
                break;
              case 3:
                var x = t.updateQueue;
                if (x !== null) {
                  if (o = null, t.child !== null) switch (t.child.tag) {
                    case 5:
                      o = t.child.stateNode;
                      break;
                    case 1:
                      o = t.child.stateNode;
                  }
                  Nc(t, x, o);
                }
                break;
              case 5:
                var E = t.stateNode;
                if (o === null && t.flags & 4) {
                  o = E;
                  var C = t.memoizedProps;
                  switch (t.type) {
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
                if (t.memoizedState === null) {
                  var z = t.alternate;
                  if (z !== null) {
                    var H = z.memoizedState;
                    if (H !== null) {
                      var $ = H.dehydrated;
                      $ !== null && Xr($);
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
            st || t.flags & 512 && bs(t);
          } catch (V) {
            He(t, t.return, V);
          }
        }
        if (t === e) {
          se = null;
          break;
        }
        if (o = t.sibling, o !== null) {
          o.return = t.return, se = o;
          break;
        }
        se = t.return;
      }
    }
    function Df(e) {
      for (; se !== null; ) {
        var t = se;
        if (t === e) {
          se = null;
          break;
        }
        var o = t.sibling;
        if (o !== null) {
          o.return = t.return, se = o;
          break;
        }
        se = t.return;
      }
    }
    function Of(e) {
      for (; se !== null; ) {
        var t = se;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var o = t.return;
              try {
                zo(4, t);
              } catch (C) {
                He(t, o, C);
              }
              break;
            case 1:
              var s = t.stateNode;
              if (typeof s.componentDidMount == "function") {
                var d = t.return;
                try {
                  s.componentDidMount();
                } catch (C) {
                  He(t, d, C);
                }
              }
              var p = t.return;
              try {
                bs(t);
              } catch (C) {
                He(t, p, C);
              }
              break;
            case 5:
              var x = t.return;
              try {
                bs(t);
              } catch (C) {
                He(t, x, C);
              }
          }
        } catch (C) {
          He(t, t.return, C);
        }
        if (t === e) {
          se = null;
          break;
        }
        var E = t.sibling;
        if (E !== null) {
          E.return = t.return, se = E;
          break;
        }
        se = t.return;
      }
    }
    var cg = Math.ceil, Mo = W.ReactCurrentDispatcher, js = W.ReactCurrentOwner, Mt = W.ReactCurrentBatchConfig, Pe = 0, Je = null, qe = null, rt = 0, It = 0, Tr = Cn(0), Ge = 0, xi = null, Xn = 0, bo = 0, Us = 0, ki = null, ht = null, Vs = 0, _r = 1 / 0, hn = null, Fo = false, Hs = null, On = null, Bo = false, Rn = null, jo = 0, Si = 0, Ws = null, Uo = -1, Vo = 0;
    function ct() {
      return (Pe & 6) !== 0 ? We() : Uo !== -1 ? Uo : Uo = We();
    }
    function An(e) {
      return (e.mode & 1) === 0 ? 1 : (Pe & 2) !== 0 && rt !== 0 ? rt & -rt : qm.transition !== null ? (Vo === 0 && (Vo = Ea()), Vo) : (e = Oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ra(e.type)), e);
    }
    function $t(e, t, o, s) {
      if (50 < Si) throw Si = 0, Ws = null, Error(i(185));
      Yr(e, o, s), ((Pe & 2) === 0 || e !== Je) && (e === Je && ((Pe & 2) === 0 && (bo |= o), Ge === 4 && Ln(e, rt)), mt(e, s), o === 1 && Pe === 0 && (t.mode & 1) === 0 && (_r = We() + 500, go && _n()));
    }
    function mt(e, t) {
      var o = e.callbackNode;
      qh(e, t);
      var s = Gi(e, e === Je ? rt : 0);
      if (s === 0) o !== null && xa(o), e.callbackNode = null, e.callbackPriority = 0;
      else if (t = s & -s, e.callbackPriority !== t) {
        if (o != null && xa(o), t === 1) e.tag === 0 ? Ym(Af.bind(null, e)) : yc(Af.bind(null, e)), Vm(function() {
          (Pe & 6) === 0 && _n();
        }), o = null;
        else {
          switch (Ia(s)) {
            case 1:
              o = El;
              break;
            case 4:
              o = ka;
              break;
            case 16:
              o = Yi;
              break;
            case 536870912:
              o = Sa;
              break;
            default:
              o = Yi;
          }
          o = Uf(o, Rf.bind(null, e));
        }
        e.callbackPriority = t, e.callbackNode = o;
      }
    }
    function Rf(e, t) {
      if (Uo = -1, Vo = 0, (Pe & 6) !== 0) throw Error(i(327));
      var o = e.callbackNode;
      if (Pr() && e.callbackNode !== o) return null;
      var s = Gi(e, e === Je ? rt : 0);
      if (s === 0) return null;
      if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Ho(e, s);
      else {
        t = s;
        var d = Pe;
        Pe |= 2;
        var p = zf();
        (Je !== e || rt !== t) && (hn = null, _r = We() + 500, Zn(e, t));
        do
          try {
            pg();
            break;
          } catch (E) {
            Lf(e, E);
          }
        while (true);
        us(), Mo.current = p, Pe = d, qe !== null ? t = 0 : (Je = null, rt = 0, t = Ge);
      }
      if (t !== 0) {
        if (t === 2 && (d = Il(e), d !== 0 && (s = d, t = $s(e, d))), t === 1) throw o = xi, Zn(e, 0), Ln(e, s), mt(e, We()), o;
        if (t === 6) Ln(e, s);
        else {
          if (d = e.current.alternate, (s & 30) === 0 && !fg(d) && (t = Ho(e, s), t === 2 && (p = Il(e), p !== 0 && (s = p, t = $s(e, p))), t === 1)) throw o = xi, Zn(e, 0), Ln(e, s), mt(e, We()), o;
          switch (e.finishedWork = d, e.finishedLanes = s, t) {
            case 0:
            case 1:
              throw Error(i(345));
            case 2:
              er(e, ht, hn);
              break;
            case 3:
              if (Ln(e, s), (s & 130023424) === s && (t = Vs + 500 - We(), 10 < t)) {
                if (Gi(e, 0) !== 0) break;
                if (d = e.suspendedLanes, (d & s) !== s) {
                  ct(), e.pingedLanes |= e.suspendedLanes & d;
                  break;
                }
                e.timeoutHandle = Xl(er.bind(null, e, ht, hn), t);
                break;
              }
              er(e, ht, hn);
              break;
            case 4:
              if (Ln(e, s), (s & 4194240) === s) break;
              for (t = e.eventTimes, d = -1; 0 < s; ) {
                var x = 31 - Bt(s);
                p = 1 << x, x = t[x], x > d && (d = x), s &= ~p;
              }
              if (s = d, s = We() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * cg(s / 1960)) - s, 10 < s) {
                e.timeoutHandle = Xl(er.bind(null, e, ht, hn), s);
                break;
              }
              er(e, ht, hn);
              break;
            case 5:
              er(e, ht, hn);
              break;
            default:
              throw Error(i(329));
          }
        }
      }
      return mt(e, We()), e.callbackNode === o ? Rf.bind(null, e) : null;
    }
    function $s(e, t) {
      var o = ki;
      return e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256), e = Ho(e, t), e !== 2 && (t = ht, ht = o, t !== null && Ys(t)), e;
    }
    function Ys(e) {
      ht === null ? ht = e : ht.push.apply(ht, e);
    }
    function fg(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var o = t.updateQueue;
          if (o !== null && (o = o.stores, o !== null)) for (var s = 0; s < o.length; s++) {
            var d = o[s], p = d.getSnapshot;
            d = d.value;
            try {
              if (!jt(p(), d)) return false;
            } catch {
              return false;
            }
          }
        }
        if (o = t.child, t.subtreeFlags & 16384 && o !== null) o.return = t, t = o;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function Ln(e, t) {
      for (t &= ~Us, t &= ~bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var o = 31 - Bt(t), s = 1 << o;
        e[o] = -1, t &= ~s;
      }
    }
    function Af(e) {
      if ((Pe & 6) !== 0) throw Error(i(327));
      Pr();
      var t = Gi(e, 0);
      if ((t & 1) === 0) return mt(e, We()), null;
      var o = Ho(e, t);
      if (e.tag !== 0 && o === 2) {
        var s = Il(e);
        s !== 0 && (t = s, o = $s(e, s));
      }
      if (o === 1) throw o = xi, Zn(e, 0), Ln(e, t), mt(e, We()), o;
      if (o === 6) throw Error(i(345));
      return e.finishedWork = e.current.alternate, e.finishedLanes = t, er(e, ht, hn), mt(e, We()), null;
    }
    function qs(e, t) {
      var o = Pe;
      Pe |= 1;
      try {
        return e(t);
      } finally {
        Pe = o, Pe === 0 && (_r = We() + 500, go && _n());
      }
    }
    function Jn(e) {
      Rn !== null && Rn.tag === 0 && (Pe & 6) === 0 && Pr();
      var t = Pe;
      Pe |= 1;
      var o = Mt.transition, s = Oe;
      try {
        if (Mt.transition = null, Oe = 1, e) return e();
      } finally {
        Oe = s, Mt.transition = o, Pe = t, (Pe & 6) === 0 && _n();
      }
    }
    function Ks() {
      It = Tr.current, be(Tr);
    }
    function Zn(e, t) {
      e.finishedWork = null, e.finishedLanes = 0;
      var o = e.timeoutHandle;
      if (o !== -1 && (e.timeoutHandle = -1, Um(o)), qe !== null) for (o = qe.return; o !== null; ) {
        var s = o;
        switch (rs(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && ho();
            break;
          case 3:
            Er(), be(ft), be(it), gs();
            break;
          case 5:
            hs(s);
            break;
          case 4:
            Er();
            break;
          case 13:
            be(je);
            break;
          case 19:
            be(je);
            break;
          case 10:
            as(s.type._context);
            break;
          case 22:
          case 23:
            Ks();
        }
        o = o.return;
      }
      if (Je = e, qe = e = zn(e.current, null), rt = It = t, Ge = 0, xi = null, Us = bo = Xn = 0, ht = ki = null, Kn !== null) {
        for (t = 0; t < Kn.length; t++) if (o = Kn[t], s = o.interleaved, s !== null) {
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
    function Lf(e, t) {
      do {
        var o = qe;
        try {
          if (us(), To.current = Do, _o) {
            for (var s = Ue.memoizedState; s !== null; ) {
              var d = s.queue;
              d !== null && (d.pending = null), s = s.next;
            }
            _o = false;
          }
          if (Gn = 0, Xe = Qe = Ue = null, hi = false, mi = 0, js.current = null, o === null || o.return === null) {
            Ge = 1, xi = t, qe = null;
            break;
          }
          e: {
            var p = e, x = o.return, E = o, C = t;
            if (t = rt, E.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
              var z = C, H = E, $ = H.tag;
              if ((H.mode & 1) === 0 && ($ === 0 || $ === 11 || $ === 15)) {
                var V = H.alternate;
                V ? (H.updateQueue = V.updateQueue, H.memoizedState = V.memoizedState, H.lanes = V.lanes) : (H.updateQueue = null, H.memoizedState = null);
              }
              var re = of(x);
              if (re !== null) {
                re.flags &= -257, lf(re, x, E, p, t), re.mode & 1 && rf(p, z, t), t = re, C = z;
                var ae = t.updateQueue;
                if (ae === null) {
                  var ce = /* @__PURE__ */ new Set();
                  ce.add(C), t.updateQueue = ce;
                } else ae.add(C);
                break e;
              } else {
                if ((t & 1) === 0) {
                  rf(p, z, t), Qs();
                  break e;
                }
                C = Error(i(426));
              }
            } else if (Be && E.mode & 1) {
              var $e = of(x);
              if ($e !== null) {
                ($e.flags & 65536) === 0 && ($e.flags |= 256), lf($e, x, E, p, t), ls(Ir(C, E));
                break e;
              }
            }
            p = C = Ir(C, E), Ge !== 4 && (Ge = 2), ki === null ? ki = [
              p
            ] : ki.push(p), p = x;
            do {
              switch (p.tag) {
                case 3:
                  p.flags |= 65536, t &= -t, p.lanes |= t;
                  var O = tf(p, C, t);
                  Pc(p, O);
                  break e;
                case 1:
                  E = C;
                  var _ = p.type, R = p.stateNode;
                  if ((p.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (On === null || !On.has(R)))) {
                    p.flags |= 65536, t &= -t, p.lanes |= t;
                    var K = nf(p, E, t);
                    Pc(p, K);
                    break e;
                  }
              }
              p = p.return;
            } while (p !== null);
          }
          bf(o);
        } catch (fe) {
          t = fe, qe === o && o !== null && (qe = o = o.return);
          continue;
        }
        break;
      } while (true);
    }
    function zf() {
      var e = Mo.current;
      return Mo.current = Do, e === null ? Do : e;
    }
    function Qs() {
      (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4), Je === null || (Xn & 268435455) === 0 && (bo & 268435455) === 0 || Ln(Je, rt);
    }
    function Ho(e, t) {
      var o = Pe;
      Pe |= 2;
      var s = zf();
      (Je !== e || rt !== t) && (hn = null, Zn(e, t));
      do
        try {
          dg();
          break;
        } catch (d) {
          Lf(e, d);
        }
      while (true);
      if (us(), Pe = o, Mo.current = s, qe !== null) throw Error(i(261));
      return Je = null, rt = 0, Ge;
    }
    function dg() {
      for (; qe !== null; ) Mf(qe);
    }
    function pg() {
      for (; qe !== null && !Fh(); ) Mf(qe);
    }
    function Mf(e) {
      var t = jf(e.alternate, e, It);
      e.memoizedProps = e.pendingProps, t === null ? bf(e) : qe = t, js.current = null;
    }
    function bf(e) {
      var t = e;
      do {
        var o = t.alternate;
        if (e = t.return, (t.flags & 32768) === 0) {
          if (o = og(o, t, It), o !== null) {
            qe = o;
            return;
          }
        } else {
          if (o = lg(o, t), o !== null) {
            o.flags &= 32767, qe = o;
            return;
          }
          if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
          else {
            Ge = 6, qe = null;
            return;
          }
        }
        if (t = t.sibling, t !== null) {
          qe = t;
          return;
        }
        qe = t = e;
      } while (t !== null);
      Ge === 0 && (Ge = 5);
    }
    function er(e, t, o) {
      var s = Oe, d = Mt.transition;
      try {
        Mt.transition = null, Oe = 1, hg(e, t, o, s);
      } finally {
        Mt.transition = d, Oe = s;
      }
      return null;
    }
    function hg(e, t, o, s) {
      do
        Pr();
      while (Rn !== null);
      if ((Pe & 6) !== 0) throw Error(i(327));
      o = e.finishedWork;
      var d = e.finishedLanes;
      if (o === null) return null;
      if (e.finishedWork = null, e.finishedLanes = 0, o === e.current) throw Error(i(177));
      e.callbackNode = null, e.callbackPriority = 0;
      var p = o.lanes | o.childLanes;
      if (Kh(e, p), e === Je && (qe = Je = null, rt = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Bo || (Bo = true, Uf(Yi, function() {
        return Pr(), null;
      })), p = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || p) {
        p = Mt.transition, Mt.transition = null;
        var x = Oe;
        Oe = 1;
        var E = Pe;
        Pe |= 4, js.current = null, ug(e, o), _f(o, e), Lm(Ql), Zi = !!Kl, Ql = Kl = null, e.current = o, ag(o), Bh(), Pe = E, Oe = x, Mt.transition = p;
      } else e.current = o;
      if (Bo && (Bo = false, Rn = e, jo = d), p = e.pendingLanes, p === 0 && (On = null), Vh(o.stateNode), mt(e, We()), t !== null) for (s = e.onRecoverableError, o = 0; o < t.length; o++) d = t[o], s(d.value, {
        componentStack: d.stack,
        digest: d.digest
      });
      if (Fo) throw Fo = false, e = Hs, Hs = null, e;
      return (jo & 1) !== 0 && e.tag !== 0 && Pr(), p = e.pendingLanes, (p & 1) !== 0 ? e === Ws ? Si++ : (Si = 0, Ws = e) : Si = 0, _n(), null;
    }
    function Pr() {
      if (Rn !== null) {
        var e = Ia(jo), t = Mt.transition, o = Oe;
        try {
          if (Mt.transition = null, Oe = 16 > e ? 16 : e, Rn === null) var s = false;
          else {
            if (e = Rn, Rn = null, jo = 0, (Pe & 6) !== 0) throw Error(i(331));
            var d = Pe;
            for (Pe |= 4, se = e.current; se !== null; ) {
              var p = se, x = p.child;
              if ((se.flags & 16) !== 0) {
                var E = p.deletions;
                if (E !== null) {
                  for (var C = 0; C < E.length; C++) {
                    var z = E[C];
                    for (se = z; se !== null; ) {
                      var H = se;
                      switch (H.tag) {
                        case 0:
                        case 11:
                        case 15:
                          wi(8, H, p);
                      }
                      var $ = H.child;
                      if ($ !== null) $.return = H, se = $;
                      else for (; se !== null; ) {
                        H = se;
                        var V = H.sibling, re = H.return;
                        if (Sf(H), H === z) {
                          se = null;
                          break;
                        }
                        if (V !== null) {
                          V.return = re, se = V;
                          break;
                        }
                        se = re;
                      }
                    }
                  }
                  var ae = p.alternate;
                  if (ae !== null) {
                    var ce = ae.child;
                    if (ce !== null) {
                      ae.child = null;
                      do {
                        var $e = ce.sibling;
                        ce.sibling = null, ce = $e;
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
                    wi(9, p, p.return);
                }
                var O = p.sibling;
                if (O !== null) {
                  O.return = p.return, se = O;
                  break e;
                }
                se = p.return;
              }
            }
            var _ = e.current;
            for (se = _; se !== null; ) {
              x = se;
              var R = x.child;
              if ((x.subtreeFlags & 2064) !== 0 && R !== null) R.return = x, se = R;
              else e: for (x = _; se !== null; ) {
                if (E = se, (E.flags & 2048) !== 0) try {
                  switch (E.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zo(9, E);
                  }
                } catch (fe) {
                  He(E, E.return, fe);
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
            if (Pe = d, _n(), Qt && typeof Qt.onPostCommitFiberRoot == "function") try {
              Qt.onPostCommitFiberRoot(qi, e);
            } catch {
            }
            s = true;
          }
          return s;
        } finally {
          Oe = o, Mt.transition = t;
        }
      }
      return false;
    }
    function Ff(e, t, o) {
      t = Ir(o, t), t = tf(e, t, 1), e = Nn(e, t, 1), t = ct(), e !== null && (Yr(e, 1, t), mt(e, t));
    }
    function He(e, t, o) {
      if (e.tag === 3) Ff(e, e, o);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          Ff(t, e, o);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (On === null || !On.has(s))) {
            e = Ir(o, e), e = nf(t, e, 1), t = Nn(t, e, 1), e = ct(), t !== null && (Yr(t, 1, e), mt(t, e));
            break;
          }
        }
        t = t.return;
      }
    }
    function mg(e, t, o) {
      var s = e.pingCache;
      s !== null && s.delete(t), t = ct(), e.pingedLanes |= e.suspendedLanes & o, Je === e && (rt & o) === o && (Ge === 4 || Ge === 3 && (rt & 130023424) === rt && 500 > We() - Vs ? Zn(e, 0) : Us |= o), mt(e, t);
    }
    function Bf(e, t) {
      t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Qi, Qi <<= 1, (Qi & 130023424) === 0 && (Qi = 4194304)));
      var o = ct();
      e = fn(e, t), e !== null && (Yr(e, t, o), mt(e, o));
    }
    function gg(e) {
      var t = e.memoizedState, o = 0;
      t !== null && (o = t.retryLane), Bf(e, o);
    }
    function yg(e, t) {
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
      s !== null && s.delete(t), Bf(e, o);
    }
    var jf;
    jf = function(e, t, o) {
      if (e !== null) if (e.memoizedProps !== t.pendingProps || ft.current) pt = true;
      else {
        if ((e.lanes & o) === 0 && (t.flags & 128) === 0) return pt = false, ig(e, t, o);
        pt = (e.flags & 131072) !== 0;
      }
      else pt = false, Be && (t.flags & 1048576) !== 0 && vc(t, vo, t.index);
      switch (t.lanes = 0, t.tag) {
        case 2:
          var s = t.type;
          Ao(e, t), e = t.pendingProps;
          var d = gr(t, it.current);
          Sr(t, o), d = ws(null, t, s, e, d, o);
          var p = xs();
          return t.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, dt(s) ? (p = true, mo(t)) : p = false, t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, ds(t), d.updater = Oo, t.stateNode = d, d._reactInternals = t, Ts(t, s, e, o), t = Ds(null, t, s, true, p, o)) : (t.tag = 0, Be && p && ns(t), at(null, t, d, o), t = t.child), t;
        case 16:
          s = t.elementType;
          e: {
            switch (Ao(e, t), e = t.pendingProps, d = s._init, s = d(s._payload), t.type = s, d = t.tag = wg(s), e = Vt(s, e), d) {
              case 0:
                t = Ns(null, t, s, e, o);
                break e;
              case 1:
                t = df(null, t, s, e, o);
                break e;
              case 11:
                t = sf(null, t, s, e, o);
                break e;
              case 14:
                t = uf(null, t, s, Vt(s.type, e), o);
                break e;
            }
            throw Error(i(306, s, ""));
          }
          return t;
        case 0:
          return s = t.type, d = t.pendingProps, d = t.elementType === s ? d : Vt(s, d), Ns(e, t, s, d, o);
        case 1:
          return s = t.type, d = t.pendingProps, d = t.elementType === s ? d : Vt(s, d), df(e, t, s, d, o);
        case 3:
          e: {
            if (pf(t), e === null) throw Error(i(387));
            s = t.pendingProps, p = t.memoizedState, d = p.element, _c(e, t), Io(t, s, null, o);
            var x = t.memoizedState;
            if (s = x.element, p.isDehydrated) if (p = {
              element: s,
              isDehydrated: false,
              cache: x.cache,
              pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
              transitions: x.transitions
            }, t.updateQueue.baseState = p, t.memoizedState = p, t.flags & 256) {
              d = Ir(Error(i(423)), t), t = hf(e, t, s, o, d);
              break e;
            } else if (s !== d) {
              d = Ir(Error(i(424)), t), t = hf(e, t, s, o, d);
              break e;
            } else for (Et = In(t.stateNode.containerInfo.firstChild), St = t, Be = true, Ut = null, o = Cc(t, null, s, o), t.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
            else {
              if (wr(), s === d) {
                t = pn(e, t, o);
                break e;
              }
              at(e, t, s, o);
            }
            t = t.child;
          }
          return t;
        case 5:
          return Dc(t), e === null && os(t), s = t.type, d = t.pendingProps, p = e !== null ? e.memoizedProps : null, x = d.children, Gl(s, d) ? x = null : p !== null && Gl(s, p) && (t.flags |= 32), ff(e, t), at(e, t, x, o), t.child;
        case 6:
          return e === null && os(t), null;
        case 13:
          return mf(e, t, o);
        case 4:
          return ps(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = xr(t, null, s, o) : at(e, t, s, o), t.child;
        case 11:
          return s = t.type, d = t.pendingProps, d = t.elementType === s ? d : Vt(s, d), sf(e, t, s, d, o);
        case 7:
          return at(e, t, t.pendingProps, o), t.child;
        case 8:
          return at(e, t, t.pendingProps.children, o), t.child;
        case 12:
          return at(e, t, t.pendingProps.children, o), t.child;
        case 10:
          e: {
            if (s = t.type._context, d = t.pendingProps, p = t.memoizedProps, x = d.value, Re(ko, s._currentValue), s._currentValue = x, p !== null) if (jt(p.value, x)) {
              if (p.children === d.children && !ft.current) {
                t = pn(e, t, o);
                break e;
              }
            } else for (p = t.child, p !== null && (p.return = t); p !== null; ) {
              var E = p.dependencies;
              if (E !== null) {
                x = p.child;
                for (var C = E.firstContext; C !== null; ) {
                  if (C.context === s) {
                    if (p.tag === 1) {
                      C = dn(-1, o & -o), C.tag = 2;
                      var z = p.updateQueue;
                      if (z !== null) {
                        z = z.shared;
                        var H = z.pending;
                        H === null ? C.next = C : (C.next = H.next, H.next = C), z.pending = C;
                      }
                    }
                    p.lanes |= o, C = p.alternate, C !== null && (C.lanes |= o), cs(p.return, o, t), E.lanes |= o;
                    break;
                  }
                  C = C.next;
                }
              } else if (p.tag === 10) x = p.type === t.type ? null : p.child;
              else if (p.tag === 18) {
                if (x = p.return, x === null) throw Error(i(341));
                x.lanes |= o, E = x.alternate, E !== null && (E.lanes |= o), cs(x, o, t), x = p.sibling;
              } else x = p.child;
              if (x !== null) x.return = p;
              else for (x = p; x !== null; ) {
                if (x === t) {
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
            at(e, t, d.children, o), t = t.child;
          }
          return t;
        case 9:
          return d = t.type, s = t.pendingProps.children, Sr(t, o), d = Lt(d), s = s(d), t.flags |= 1, at(e, t, s, o), t.child;
        case 14:
          return s = t.type, d = Vt(s, t.pendingProps), d = Vt(s.type, d), uf(e, t, s, d, o);
        case 15:
          return af(e, t, t.type, t.pendingProps, o);
        case 17:
          return s = t.type, d = t.pendingProps, d = t.elementType === s ? d : Vt(s, d), Ao(e, t), t.tag = 1, dt(s) ? (e = true, mo(t)) : e = false, Sr(t, o), Zc(t, s, d), Ts(t, s, d, o), Ds(null, t, s, true, e, o);
        case 19:
          return yf(e, t, o);
        case 22:
          return cf(e, t, o);
      }
      throw Error(i(156, t.tag));
    };
    function Uf(e, t) {
      return wa(e, t);
    }
    function vg(e, t, o, s) {
      this.tag = e, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function bt(e, t, o, s) {
      return new vg(e, t, o, s);
    }
    function Gs(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function wg(e) {
      if (typeof e == "function") return Gs(e) ? 1 : 0;
      if (e != null) {
        if (e = e.$$typeof, e === B) return 11;
        if (e === U) return 14;
      }
      return 2;
    }
    function zn(e, t) {
      var o = e.alternate;
      return o === null ? (o = bt(e.tag, t, e.key, e.mode), o.elementType = e.elementType, o.type = e.type, o.stateNode = e.stateNode, o.alternate = e, e.alternate = o) : (o.pendingProps = t, o.type = e.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = e.flags & 14680064, o.childLanes = e.childLanes, o.lanes = e.lanes, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, t = e.dependencies, o.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, o.sibling = e.sibling, o.index = e.index, o.ref = e.ref, o;
    }
    function Wo(e, t, o, s, d, p) {
      var x = 2;
      if (s = e, typeof e == "function") Gs(e) && (x = 1);
      else if (typeof e == "string") x = 5;
      else e: switch (e) {
        case ee:
          return tr(o.children, d, p, t);
        case ne:
          x = 8, d |= 8;
          break;
        case le:
          return e = bt(12, o, t, d | 2), e.elementType = le, e.lanes = p, e;
        case ue:
          return e = bt(13, o, t, d), e.elementType = ue, e.lanes = p, e;
        case X:
          return e = bt(19, o, t, d), e.elementType = X, e.lanes = p, e;
        case te:
          return $o(o, d, p, t);
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case he:
              x = 10;
              break e;
            case Q:
              x = 9;
              break e;
            case B:
              x = 11;
              break e;
            case U:
              x = 14;
              break e;
            case q:
              x = 16, s = null;
              break e;
          }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
      return t = bt(x, o, t, d), t.elementType = e, t.type = s, t.lanes = p, t;
    }
    function tr(e, t, o, s) {
      return e = bt(7, e, s, t), e.lanes = o, e;
    }
    function $o(e, t, o, s) {
      return e = bt(22, e, s, t), e.elementType = te, e.lanes = o, e.stateNode = {
        isHidden: false
      }, e;
    }
    function Xs(e, t, o) {
      return e = bt(6, e, null, t), e.lanes = o, e;
    }
    function Js(e, t, o) {
      return t = bt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = o, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function xg(e, t, o, s, d) {
      this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cl(0), this.expirationTimes = Cl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cl(0), this.identifierPrefix = s, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
    }
    function Zs(e, t, o, s, d, p, x, E, C) {
      return e = new xg(e, t, o, E, C), t === 1 ? (t = 1, p === true && (t |= 8)) : t = 0, p = bt(3, null, null, t), e.current = p, p.stateNode = e, p.memoizedState = {
        element: s,
        isDehydrated: o,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
      }, ds(p), e;
    }
    function kg(e, t, o) {
      var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: A,
        key: s == null ? null : "" + s,
        children: e,
        containerInfo: t,
        implementation: o
      };
    }
    function Vf(e) {
      if (!e) return Tn;
      e = e._reactInternals;
      e: {
        if (Hn(e) !== e || e.tag !== 1) throw Error(i(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (dt(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(i(171));
      }
      if (e.tag === 1) {
        var o = e.type;
        if (dt(o)) return mc(e, o, t);
      }
      return t;
    }
    function Hf(e, t, o, s, d, p, x, E, C) {
      return e = Zs(o, s, true, e, d, p, x, E, C), e.context = Vf(null), o = e.current, s = ct(), d = An(o), p = dn(s, d), p.callback = t ?? null, Nn(o, p, d), e.current.lanes = d, Yr(e, d, s), mt(e, s), e;
    }
    function Yo(e, t, o, s) {
      var d = t.current, p = ct(), x = An(d);
      return o = Vf(o), t.context === null ? t.context = o : t.pendingContext = o, t = dn(p, x), t.payload = {
        element: e
      }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Nn(d, t, x), e !== null && ($t(e, d, x, p), Eo(e, d, x)), x;
    }
    function qo(e) {
      if (e = e.current, !e.child) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function Wf(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var o = e.retryLane;
        e.retryLane = o !== 0 && o < t ? o : t;
      }
    }
    function eu(e, t) {
      Wf(e, t), (e = e.alternate) && Wf(e, t);
    }
    function Sg() {
      return null;
    }
    var $f = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function tu(e) {
      this._internalRoot = e;
    }
    Ko.prototype.render = tu.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      Yo(e, t, null, null);
    }, Ko.prototype.unmount = tu.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Jn(function() {
          Yo(null, e, null, null);
        }), t[sn] = null;
      }
    };
    function Ko(e) {
      this._internalRoot = e;
    }
    Ko.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = _a();
        e = {
          blockedOn: null,
          target: e,
          priority: t
        };
        for (var o = 0; o < kn.length && t !== 0 && t < kn[o].priority; o++) ;
        kn.splice(o, 0, e), o === 0 && Da(e);
      }
    };
    function nu(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Qo(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Yf() {
    }
    function Eg(e, t, o, s, d) {
      if (d) {
        if (typeof s == "function") {
          var p = s;
          s = function() {
            var z = qo(x);
            p.call(z);
          };
        }
        var x = Hf(t, s, e, 0, null, false, false, "", Yf);
        return e._reactRootContainer = x, e[sn] = x.current, li(e.nodeType === 8 ? e.parentNode : e), Jn(), x;
      }
      for (; d = e.lastChild; ) e.removeChild(d);
      if (typeof s == "function") {
        var E = s;
        s = function() {
          var z = qo(C);
          E.call(z);
        };
      }
      var C = Zs(e, 0, false, null, null, false, false, "", Yf);
      return e._reactRootContainer = C, e[sn] = C.current, li(e.nodeType === 8 ? e.parentNode : e), Jn(function() {
        Yo(t, C, o, s);
      }), C;
    }
    function Go(e, t, o, s, d) {
      var p = o._reactRootContainer;
      if (p) {
        var x = p;
        if (typeof d == "function") {
          var E = d;
          d = function() {
            var C = qo(x);
            E.call(C);
          };
        }
        Yo(t, x, e, d);
      } else x = Eg(o, t, e, d, s);
      return qo(x);
    }
    Ca = function(e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var o = $r(t.pendingLanes);
            o !== 0 && (Tl(t, o | 1), mt(t, We()), (Pe & 6) === 0 && (_r = We() + 500, _n()));
          }
          break;
        case 13:
          Jn(function() {
            var s = fn(e, 1);
            if (s !== null) {
              var d = ct();
              $t(s, e, 1, d);
            }
          }), eu(e, 1);
      }
    }, _l = function(e) {
      if (e.tag === 13) {
        var t = fn(e, 134217728);
        if (t !== null) {
          var o = ct();
          $t(t, e, 134217728, o);
        }
        eu(e, 134217728);
      }
    }, Ta = function(e) {
      if (e.tag === 13) {
        var t = An(e), o = fn(e, t);
        if (o !== null) {
          var s = ct();
          $t(o, e, t, s);
        }
        eu(e, t);
      }
    }, _a = function() {
      return Oe;
    }, Pa = function(e, t) {
      var o = Oe;
      try {
        return Oe = e, t();
      } finally {
        Oe = o;
      }
    }, wl = function(e, t, o) {
      switch (t) {
        case "input":
          if (rr(e, o), t = o.name, o.type === "radio" && t != null) {
            for (o = e; o.parentNode; ) o = o.parentNode;
            for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < o.length; t++) {
              var s = o[t];
              if (s !== e && s.form === e.form) {
                var d = po(s);
                if (!d) throw Error(i(90));
                Un(s), rr(s, d);
              }
            }
          }
          break;
        case "textarea":
          Vi(e, o);
          break;
        case "select":
          t = o.value, t != null && gn(e, !!o.multiple, t, false);
      }
    }, da = qs, pa = Jn;
    var Ig = {
      usingClientEntryPoint: false,
      Events: [
        ai,
        hr,
        po,
        ca,
        fa,
        qs
      ]
    }, Ei = {
      findFiberByHostInstance: Wn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom"
    }, Cg = {
      bundleType: Ei.bundleType,
      version: Ei.version,
      rendererPackageName: Ei.rendererPackageName,
      rendererConfig: Ei.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: W.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(e) {
        return e = ya(e), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ei.findFiberByHostInstance || Sg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Xo.isDisabled && Xo.supportsFiber) try {
        qi = Xo.inject(Cg), Qt = Xo;
      } catch {
      }
    }
    return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ig, gt.createPortal = function(e, t) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!nu(t)) throw Error(i(200));
      return kg(e, t, null, o);
    }, gt.createRoot = function(e, t) {
      if (!nu(e)) throw Error(i(299));
      var o = false, s = "", d = $f;
      return t != null && (t.unstable_strictMode === true && (o = true), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Zs(e, 1, false, null, null, o, false, s, d), e[sn] = t.current, li(e.nodeType === 8 ? e.parentNode : e), new tu(t);
    }, gt.findDOMNode = function(e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
      return e = ya(t), e = e === null ? null : e.stateNode, e;
    }, gt.flushSync = function(e) {
      return Jn(e);
    }, gt.hydrate = function(e, t, o) {
      if (!Qo(t)) throw Error(i(200));
      return Go(null, e, t, true, o);
    }, gt.hydrateRoot = function(e, t, o) {
      if (!nu(e)) throw Error(i(405));
      var s = o != null && o.hydratedSources || null, d = false, p = "", x = $f;
      if (o != null && (o.unstable_strictMode === true && (d = true), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (x = o.onRecoverableError)), t = Hf(t, null, e, 1, o ?? null, d, false, p, x), e[sn] = t.current, li(e), s) for (e = 0; e < s.length; e++) o = s[e], d = o._getVersion, d = d(o._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
        o,
        d
      ] : t.mutableSourceEagerHydrationData.push(o, d);
      return new Ko(t);
    }, gt.render = function(e, t, o) {
      if (!Qo(t)) throw Error(i(200));
      return Go(null, e, t, false, o);
    }, gt.unmountComponentAtNode = function(e) {
      if (!Qo(e)) throw Error(i(40));
      return e._reactRootContainer ? (Jn(function() {
        Go(null, null, e, false, function() {
          e._reactRootContainer = null, e[sn] = null;
        });
      }), true) : false;
    }, gt.unstable_batchedUpdates = qs, gt.unstable_renderSubtreeIntoContainer = function(e, t, o, s) {
      if (!Qo(o)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return Go(e, t, o, false, s);
    }, gt.version = "18.3.1-next-f1338f8080-20240426", gt;
  }
  var ed;
  function Lg() {
    if (ed) return ou.exports;
    ed = 1;
    function n() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
    }
    return n(), ou.exports = Ag(), ou.exports;
  }
  var td;
  function zg() {
    if (td) return Jo;
    td = 1;
    var n = Lg();
    return Jo.createRoot = n.createRoot, Jo.hydrateRoot = n.hydrateRoot, Jo;
  }
  var Mg = zg();
  const bg = ul(Mg), Fg = "modulepreload", Bg = function(n) {
    return "/offline-llm-knowledge-system/import/" + n;
  }, nd = {}, up = function(r, i, l) {
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
        if (m = Bg(m), m in nd) return;
        nd[m] = true;
        const g = m.endsWith(".css"), y = g ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${m}"]${y}`)) return;
        const v = document.createElement("link");
        if (v.rel = g ? "stylesheet" : Fg, g || (v.as = "script"), v.crossOrigin = "", v.href = m, h && v.setAttribute("nonce", h), document.head.appendChild(v), g) return new Promise((w, I) => {
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
  var Pt = Uint8Array, Or = Uint16Array, jg = Int32Array, ap = new Pt([
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
  ]), cp = new Pt([
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
  ]), Ug = new Pt([
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
  ]), fp = function(n, r) {
    for (var i = new Or(31), l = 0; l < 31; ++l) i[l] = r += 1 << n[l - 1];
    for (var u = new jg(i[30]), l = 1; l < 30; ++l) for (var a = i[l]; a < i[l + 1]; ++a) u[a] = a - i[l] << 5 | l;
    return {
      b: i,
      r: u
    };
  }, dp = fp(ap, 2), pp = dp.b, Vg = dp.r;
  pp[28] = 258, Vg[258] = 28;
  var Hg = fp(cp, 0), Wg = Hg.b, _u = new Or(32768);
  for (var Fe = 0; Fe < 32768; ++Fe) {
    var bn = (Fe & 43690) >> 1 | (Fe & 21845) << 1;
    bn = (bn & 52428) >> 2 | (bn & 13107) << 2, bn = (bn & 61680) >> 4 | (bn & 3855) << 4, _u[Fe] = ((bn & 65280) >> 8 | (bn & 255) << 8) >> 1;
  }
  var Ni = (function(n, r, i) {
    for (var l = n.length, u = 0, a = new Or(r); u < l; ++u) n[u] && ++a[n[u] - 1];
    var c = new Or(r);
    for (u = 1; u < r; ++u) c[u] = c[u - 1] + a[u - 1] << 1;
    var f;
    if (i) {
      f = new Or(1 << r);
      var h = 15 - r;
      for (u = 0; u < l; ++u) if (n[u]) for (var m = u << 4 | n[u], g = r - n[u], y = c[n[u] - 1]++ << g, v = y | (1 << g) - 1; y <= v; ++y) f[_u[y] >> h] = m;
    } else for (f = new Or(l), u = 0; u < l; ++u) n[u] && (f[u] = _u[c[n[u] - 1]++] >> 15 - n[u]);
    return f;
  }), zi = new Pt(288);
  for (var Fe = 0; Fe < 144; ++Fe) zi[Fe] = 8;
  for (var Fe = 144; Fe < 256; ++Fe) zi[Fe] = 9;
  for (var Fe = 256; Fe < 280; ++Fe) zi[Fe] = 7;
  for (var Fe = 280; Fe < 288; ++Fe) zi[Fe] = 8;
  var hp = new Pt(32);
  for (var Fe = 0; Fe < 32; ++Fe) hp[Fe] = 5;
  var $g = Ni(zi, 9, 1), Yg = Ni(hp, 5, 1), uu = function(n) {
    for (var r = n[0], i = 1; i < n.length; ++i) n[i] > r && (r = n[i]);
    return r;
  }, Yt = function(n, r, i) {
    var l = r / 8 | 0;
    return (n[l] | n[l + 1] << 8) >> (r & 7) & i;
  }, au = function(n, r) {
    var i = r / 8 | 0;
    return (n[i] | n[i + 1] << 8 | n[i + 2] << 16) >> (r & 7);
  }, qg = function(n) {
    return (n + 7) / 8 | 0;
  }, Kg = function(n, r, i) {
    return (i == null || i > n.length) && (i = n.length), new Pt(n.subarray(r, i));
  }, Qg = [
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
  ], qt = function(n, r, i) {
    var l = new Error(r || Qg[n]);
    if (l.code = n, Error.captureStackTrace && Error.captureStackTrace(l, qt), !i) throw l;
    return l;
  }, Gg = function(n, r, i, l) {
    var u = n.length, a = 0;
    if (!u || r.f && !r.l) return i || new Pt(0);
    var c = !i, f = c || r.i != 2, h = r.i;
    c && (i = new Pt(u * 3));
    var m = function(Dt) {
      var Un = i.length;
      if (Dt > Un) {
        var on = new Pt(Math.max(Un * 2, Dt));
        on.set(i), i = on;
      }
    }, g = r.f || 0, y = r.p || 0, v = r.b || 0, w = r.l, I = r.d, D = r.m, N = r.n, T = u * 8;
    do {
      if (!w) {
        g = Yt(n, y, 1);
        var b = Yt(n, y + 1, 3);
        if (y += 3, b) if (b == 1) w = $g, I = Yg, D = 9, N = 5;
        else if (b == 2) {
          var A = Yt(n, y, 31) + 257, ee = Yt(n, y + 10, 15) + 4, ne = A + Yt(n, y + 5, 31) + 1;
          y += 14;
          for (var le = new Pt(ne), he = new Pt(19), Q = 0; Q < ee; ++Q) he[Ug[Q]] = Yt(n, y + Q * 3, 7);
          y += ee * 3;
          for (var B = uu(he), ue = (1 << B) - 1, X = Ni(he, B, 1), Q = 0; Q < ne; ) {
            var U = X[Yt(n, y, ue)];
            y += U & 15;
            var L = U >> 4;
            if (L < 16) le[Q++] = L;
            else {
              var q = 0, te = 0;
              for (L == 16 ? (te = 3 + Yt(n, y, 3), y += 2, q = le[Q - 1]) : L == 17 ? (te = 3 + Yt(n, y, 7), y += 3) : L == 18 && (te = 11 + Yt(n, y, 127), y += 7); te--; ) le[Q++] = q;
            }
          }
          var j = le.subarray(0, A), G = le.subarray(A);
          D = uu(j), N = uu(G), w = Ni(j, D, 1), I = Ni(G, N, 1);
        } else qt(1);
        else {
          var L = qg(y) + 4, W = n[L - 4] | n[L - 3] << 8, Z = L + W;
          if (Z > u) {
            h && qt(0);
            break;
          }
          f && m(v + W), i.set(n.subarray(L, Z), v), r.b = v += W, r.p = y = Z * 8, r.f = g;
          continue;
        }
        if (y > T) {
          h && qt(0);
          break;
        }
      }
      f && m(v + 131072);
      for (var k = (1 << D) - 1, P = (1 << N) - 1, M = y; ; M = y) {
        var q = w[au(n, y) & k], S = q >> 4;
        if (y += q & 15, y > T) {
          h && qt(0);
          break;
        }
        if (q || qt(2), S < 256) i[v++] = S;
        else if (S == 256) {
          M = y, w = null;
          break;
        } else {
          var oe = S - 254;
          if (S > 264) {
            var Q = S - 257, pe = ap[Q];
            oe = Yt(n, y, (1 << pe) - 1) + pp[Q], y += pe;
          }
          var de = I[au(n, y) & P], Ce = de >> 4;
          de || qt(3), y += de & 15;
          var G = Wg[Ce];
          if (Ce > 3) {
            var pe = cp[Ce];
            G += au(n, y) & (1 << pe) - 1, y += pe;
          }
          if (y > T) {
            h && qt(0);
            break;
          }
          f && m(v + 131072);
          var ke = v + oe;
          if (v < G) {
            var Te = a - G, Ve = Math.min(G, ke);
            for (Te + v < 0 && qt(3); v < Ve; ++v) i[v] = l[Te + v];
          }
          for (; v < ke; ++v) i[v] = i[v - G];
        }
      }
      r.l = w, r.p = M, r.b = v, r.f = g, w && (g = 1, r.m = D, r.d = I, r.n = N);
    } while (!g);
    return v != i.length && c ? Kg(i, 0, v) : i.subarray(0, v);
  }, Xg = new Pt(0), Jg = function(n) {
    (n[0] != 31 || n[1] != 139 || n[2] != 8) && qt(6, "invalid gzip data");
    var r = n[3], i = 10;
    r & 4 && (i += (n[10] | n[11] << 8) + 2);
    for (var l = (r >> 3 & 1) + (r >> 4 & 1); l > 0; l -= !n[i++]) ;
    return i + (r & 2);
  }, Zg = function(n) {
    var r = n.length;
    return (n[r - 4] | n[r - 3] << 8 | n[r - 2] << 16 | n[r - 1] << 24) >>> 0;
  };
  function ey(n, r) {
    var i = Jg(n);
    return i + 8 > n.length && qt(6, "invalid gzip data"), Gg(n.subarray(i, -8), {
      i: 2
    }, new Pt(Zg(n)), r);
  }
  var ty = typeof TextDecoder < "u" && new TextDecoder(), ny = 0;
  try {
    ty.decode(Xg, {
      stream: true
    }), ny = 1;
  } catch {
  }
  let mp;
  mp = {
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
  ok = {
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
  gp = Object.keys(mp);
  lk = function(n) {
    return n !== void 0 && gp.includes(n) ? mp[n] : void 0;
  };
  const ry = Date.now().toString().slice(5);
  let iy = 0;
  const rd = 1024, id = BigInt(1e3), od = BigInt(1e6), ld = BigInt(1e9), cu = 65535;
  oy = function(n, r) {
    if (r.length < cu) Array.prototype.push.apply(n, r);
    else {
      const i = r.length;
      for (let l = 0; l < i; l += cu) Array.prototype.push.apply(n, r.slice(l, l + cu));
    }
  };
  function ly(n, ...r) {
    return n.replace(/%(?:(?<position>\d+)\$)?(?<width>-?\d*\.?\d*)(?<type>[dfs])/g, function(...i) {
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
  sk = function(n, r = 2) {
    if (n === 0) return "0 Bytes";
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
    ], u = Math.floor(Math.log(n) / Math.log(rd));
    return `${parseFloat((n / Math.pow(rd, u)).toFixed(i))} ${l[u]}`;
  };
  function sy() {
    return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
  }
  function uy() {
    return typeof process < "u" && process.release && process.release.name === "node";
  }
  function sd() {
    return BigInt(Math.floor(performance.now() * 1e6));
  }
  ju = function(n) {
    return typeof n == "number" && (n = BigInt(n)), n < id ? `${n}ns` : n < od ? `${n / id}\u03BCs` : n < ld ? `${n / od}ms` : `${n / ld}s`;
  };
  zr = function() {
    var _a;
    return sy() ? sd() : uy() || typeof process < "u" && typeof ((_a = process == null ? void 0 : process.hrtime) == null ? void 0 : _a.bigint) == "function" ? process.hrtime.bigint() : typeof performance < "u" ? sd() : BigInt(0);
  };
  ay = function() {
    return `${ry}-${iy++}`;
  };
  function fu(n, r) {
    return Object.hasOwn === void 0 ? Object.prototype.hasOwnProperty.call(n, r) ? n[r] : void 0 : Object.hasOwn(n, r) ? n[r] : void 0;
  }
  function yp(n, r) {
    return r[1] === n[1] ? n[0] - r[0] : r[1] - n[1];
  }
  function cy(n) {
    if (n.length === 0) return [];
    if (n.length === 1) return n[0];
    for (let i = 1; i < n.length; i++) if (n[i].length < n[0].length) {
      const l = n[0];
      n[0] = n[i], n[i] = l;
    }
    const r = /* @__PURE__ */ new Map();
    for (const i of n[0]) r.set(i, 1);
    for (let i = 1; i < n.length; i++) {
      let l = 0;
      for (const u of n[i]) {
        const a = r.get(u);
        a === i && (r.set(u, a + 1), l++);
      }
      if (l === 0) return [];
    }
    return n[0].filter((i) => {
      const l = r.get(i);
      return l !== void 0 && r.set(i, 0), l === n.length;
    });
  }
  fy = function(n, r) {
    const i = {}, l = r.length;
    for (let u = 0; u < l; u++) {
      const a = r[u], c = a.split(".");
      let f = n;
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
  function Uu(n, r) {
    return fy(n, [
      r
    ])[r];
  }
  const dy = {
    cm: 0.01,
    m: 1,
    km: 1e3,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.344
  };
  vp = function(n, r) {
    const i = dy[r];
    if (i === void 0) throw new Error(ze("INVALID_DISTANCE_SUFFIX", n).message);
    return n * i;
  };
  function wp(n, r) {
    n.hits = n.hits.map((i) => ({
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
  Ye = function(n) {
    var _a;
    return Array.isArray(n) ? n.some((r) => Ye(r)) : ((_a = n == null ? void 0 : n.constructor) == null ? void 0 : _a.name) === "AsyncFunction";
  };
  const ud = "intersection" in /* @__PURE__ */ new Set();
  ad = function(...n) {
    if (n.length === 0) return /* @__PURE__ */ new Set();
    if (n.length === 1) return n[0];
    if (n.length === 2) {
      const l = n[0], u = n[1];
      if (ud) return l.intersection(u);
      const a = /* @__PURE__ */ new Set(), c = l.size < u.size ? l : u, f = c === l ? u : l;
      for (const h of c) f.has(h) && a.add(h);
      return a;
    }
    const r = {
      index: 0,
      size: n[0].size
    };
    for (let l = 1; l < n.length; l++) n[l].size < r.size && (r.index = l, r.size = n[l].size);
    if (ud) {
      let l = n[r.index];
      for (let u = 0; u < n.length; u++) u !== r.index && (l = l.intersection(n[u]));
      return l;
    }
    const i = n[r.index];
    for (let l = 0; l < n.length; l++) {
      if (l === r.index) continue;
      const u = n[l];
      for (const a of i) u.has(a) || i.delete(a);
    }
    return i;
  };
  const py = "union" in /* @__PURE__ */ new Set();
  Zo = function(n, r) {
    return py ? n ? n.union(r) : r : n ? /* @__PURE__ */ new Set([
      ...n,
      ...r
    ]) : new Set(r);
  };
  hy = function(n, r) {
    const i = /* @__PURE__ */ new Set();
    for (const l of n) r.has(l) || i.add(l);
    return i;
  };
  function xp(n) {
    if (typeof SharedArrayBuffer < "u" && typeof Atomics < "u") {
      const r = new Int32Array(new SharedArrayBuffer(4));
      if ((n > 0 && n < 1 / 0) === false) throw typeof n != "number" && typeof n != "bigint" ? TypeError("sleep: ms must be a number") : RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
      Atomics.wait(r, 0, 0, Number(n));
    } else if ((n > 0 && n < 1 / 0) === false) throw typeof n != "number" && typeof n != "bigint" ? TypeError("sleep: ms must be a number") : RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
  }
  const my = gp.join(`
 - `), gy = {
    NO_LANGUAGE_WITH_CUSTOM_TOKENIZER: "Do not pass the language option to create when using a custom tokenizer.",
    LANGUAGE_NOT_SUPPORTED: `Language "%s" is not supported.
Supported languages are:
 - ${my}`,
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
  ze = function(n, ...r) {
    const i = new Error(ly(gy[n] ?? `Unsupported Orama Error code: ${n}`, ...r));
    return i.code = n, "captureStackTrace" in Error.prototype && Error.captureStackTrace(i), i;
  };
  uk = function(n) {
    return {
      raw: Number(n),
      formatted: ju(n)
    };
  };
  ak = function(n) {
    if (n.id) {
      if (typeof n.id != "string") throw ze("DOCUMENT_ID_MUST_BE_STRING", typeof n.id);
      return n.id;
    }
    return ay();
  };
  yy = function(n, r) {
    for (const [i, l] of Object.entries(r)) {
      const u = n[i];
      if (!(typeof u > "u") && !(l === "geopoint" && typeof u == "object" && typeof u.lon == "number" && typeof u.lat == "number") && !(l === "enum" && (typeof u == "string" || typeof u == "number"))) {
        if (l === "enum[]" && Array.isArray(u)) {
          const a = u.length;
          for (let c = 0; c < a; c++) if (typeof u[c] != "string" && typeof u[c] != "number") return i + "." + c;
          continue;
        }
        if (Mi(l)) {
          const a = Sp(l);
          if (!Array.isArray(u) || u.length !== a) throw ze("INVALID_INPUT_VECTOR", i, a, u.length);
          continue;
        }
        if (al(l)) {
          if (!Array.isArray(u)) return i;
          const a = kp(l), c = u.length;
          for (let f = 0; f < c; f++) if (typeof u[f] !== a) return i + "." + f;
          continue;
        }
        if (typeof l == "object") {
          if (!u || typeof u != "object") return i;
          const a = yy(u, l);
          if (a) return i + "." + a;
          continue;
        }
        if (typeof u !== l) return i;
      }
    }
  };
  const vy = {
    string: false,
    number: false,
    boolean: false,
    enum: false,
    geopoint: false,
    "string[]": true,
    "number[]": true,
    "boolean[]": true,
    "enum[]": true
  }, wy = {
    "string[]": "string",
    "number[]": "number",
    "boolean[]": "boolean",
    "enum[]": "enum"
  };
  xy = function(n) {
    return n === "geopoint";
  };
  Mi = function(n) {
    return typeof n == "string" && /^vector\[\d+\]$/.test(n);
  };
  al = function(n) {
    return typeof n == "string" && vy[n];
  };
  kp = function(n) {
    return wy[n];
  };
  Sp = function(n) {
    const r = Number(n.slice(7, -1));
    switch (true) {
      case isNaN(r):
        throw ze("INVALID_VECTOR_VALUE", n);
      case r <= 0:
        throw ze("INVALID_VECTOR_SIZE", n);
      default:
        return r;
    }
  };
  ky = function() {
    return {
      idToInternalId: /* @__PURE__ */ new Map(),
      internalIdToId: [],
      save: Ep,
      load: Ip
    };
  };
  function Ep(n) {
    return {
      internalIdToId: n.internalIdToId
    };
  }
  function Ip(n, r) {
    const { internalIdToId: i } = r;
    n.internalDocumentIDStore.idToInternalId.clear(), n.internalDocumentIDStore.internalIdToId = [];
    const l = i.length;
    for (let u = 0; u < l; u++) {
      const a = i[u];
      n.internalDocumentIDStore.idToInternalId.set(a, u + 1), n.internalDocumentIDStore.internalIdToId.push(a);
    }
  }
  rn = function(n, r) {
    if (typeof r == "string") {
      const i = n.idToInternalId.get(r);
      if (i) return i;
      const l = n.idToInternalId.size + 1;
      return n.idToInternalId.set(r, l), n.internalIdToId.push(r), l;
    }
    return r > n.internalIdToId.length ? rn(n, r.toString()) : r;
  };
  bi = function(n, r) {
    if (n.internalIdToId.length < r) throw new Error(`Invalid internalId ${r}`);
    return n.internalIdToId[r - 1];
  };
  ck = Object.freeze(Object.defineProperty({
    __proto__: null,
    createInternalDocumentIDStore: ky,
    getDocumentIdFromInternalId: bi,
    getInternalDocumentId: rn,
    load: Ip,
    save: Ep
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  fk = [
    "tokenizer",
    "index",
    "documentsStore",
    "sorter",
    "pinning"
  ];
  dk = [
    "validateSchema",
    "getDocumentIndexId",
    "getDocumentProperties",
    "formatElapsedTime"
  ];
  ol = function(n, r, i, l) {
    if (n.some(Ye)) return (async () => {
      for (const a of n) await a(r, i, l);
    })();
    for (const a of n) a(r, i, l);
  };
  Cp = function(n, r, i) {
    if (n.some(Ye)) return (async () => {
      for (const u of n) await u(r, i);
    })();
    for (const u of n) u(r, i);
  };
  function Vu(n, r, i, l, u) {
    if (n.some(Ye)) return (async () => {
      for (const c of n) await c(r, i, l, u);
    })();
    for (const c of n) c(r, i, l, u);
  }
  function Hu(n, r, i, l) {
    if (n.some(Ye)) return (async () => {
      for (const a of n) await a(r, i, l);
    })();
    for (const a of n) a(r, i, l);
  }
  pk = function(n, r) {
    if (n.some(Ye)) return (async () => {
      for (const l of n) await l(r);
    })();
    for (const l of n) l(r);
  };
  class Tt {
    constructor(r, i) {
      __publicField(this, "k");
      __publicField(this, "v");
      __publicField(this, "l", null);
      __publicField(this, "r", null);
      __publicField(this, "h", 1);
      this.k = r, this.v = new Set(i);
    }
    updateHeight() {
      this.h = Math.max(Tt.getHeight(this.l), Tt.getHeight(this.r)) + 1;
    }
    static getHeight(r) {
      return r ? r.h : 0;
    }
    getBalanceFactor() {
      return Tt.getHeight(this.l) - Tt.getHeight(this.r);
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
      const i = new Tt(r.k, r.v);
      return i.l = r.l ? Tt.fromJSON(r.l) : null, i.r = r.r ? Tt.fromJSON(r.r) : null, i.h = r.h, i;
    }
  }
  class cl {
    constructor(r, i) {
      __publicField(this, "root", null);
      __publicField(this, "insertCount", 0);
      r !== void 0 && i !== void 0 && (this.root = new Tt(r, i));
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
      const i = new cl();
      return i.root = r.root ? Tt.fromJSON(r.root) : null, i.insertCount = r.insertCount || 0, i;
    }
    insertNode(r, i, l, u) {
      if (r === null) return new Tt(i, [
        l
      ]);
      const a = [];
      let c = r, f = null;
      for (; c !== null; ) if (a.push({
        parent: f,
        node: c
      }), i < c.k) if (c.l === null) {
        c.l = new Tt(i, [
          l
        ]), a.push({
          parent: c,
          node: c.l
        });
        break;
      } else f = c, c = c.l;
      else if (i > c.k) if (c.r === null) {
        c.r = new Tt(i, [
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
  class fl {
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
      const i = new fl();
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
  function Tp(n, r, i) {
    if (i < 0) return -1;
    if (n === r) return 0;
    const l = n.length, u = r.length;
    if (l === 0) return u <= i ? u : -1;
    if (u === 0) return l <= i ? l : -1;
    const a = Math.abs(l - u);
    if (n.startsWith(r)) return a <= i ? a : -1;
    if (r.startsWith(n)) return 0;
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
      for (let m = 1; m <= u; m++) n[f - 1] === r[m - 1] ? c[f][m] = c[f - 1][m - 1] : c[f][m] = Math.min(c[f - 1][m] + 1, c[f][m - 1] + 1, c[f - 1][m - 1] + 1), h = Math.min(h, c[f][m]);
      if (h > i) return -1;
    }
    return c[l][u] <= i ? c[l][u] : -1;
  }
  hk = function(n, r, i) {
    const l = Tp(n, r, i);
    return {
      distance: l,
      isBounded: l >= 0
    };
  };
  function cd(n, r, i) {
    const l = Tp(n, r, i);
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
          if (fu(r, f) !== null) if (u) if (Math.abs(i.length - f.length) <= u && cd(i, f, u).isBounded) r[f] = [];
          else continue;
          else r[f] = [];
          if (fu(r, f) != null && h.size > 0) {
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
          if (y && (cd(r, y, u).isBounded && (a[y] = []), fu(a, y) !== void 0 && v.size > 0)) {
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
  class dl extends Bn {
    constructor() {
      super("", "", false);
    }
    static fromJSON(r) {
      var _a;
      const i = new dl();
      return i.w = r.w, i.s = r.s, i.e = r.e, i.k = r.k, i.d = new Set(r.d), i.c = new Map(((_a = r == null ? void 0 : r.c) == null ? void 0 : _a.map(([l, u]) => [
        l,
        Bn.fromJSON(u)
      ])) || []), i;
    }
    toJSON() {
      return super.toJSON();
    }
  }
  const Sy = 2, Ey = 6371e3;
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
        if (f % Sy === 0) if (r.lon < c.point.lon) {
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
      return Ey * m;
    }
    static vincentyDistance(r, i) {
      const u = 0.0033528106647474805, a = (1 - u) * 6378137, c = Math.PI / 180, f = r.lat * c, h = i.lat * c, m = (i.lon - r.lon) * c, g = Math.atan((1 - u) * Math.tan(f)), y = Math.atan((1 - u) * Math.tan(h)), v = Math.sin(g), w = Math.cos(g), I = Math.sin(y), D = Math.cos(y);
      let N = m, T, b = 1e3, L, W, Z, A, ee, ne;
      do {
        const X = Math.sin(N), U = Math.cos(N);
        if (L = Math.sqrt(D * X * (D * X) + (w * I - v * D * U) * (w * I - v * D * U)), L === 0) return 0;
        W = v * I + w * D * U, Z = Math.atan2(L, W), A = w * D * X / L, ee = 1 - A * A, ne = W - 2 * v * I / ee, isNaN(ne) && (ne = 0);
        const q = u / 16 * ee * (4 + u * (4 - 3 * ee));
        T = N, N = m + (1 - q) * u * A * (Z + q * L * (ne + q * W * (-1 + 2 * ne * ne)));
      } while (Math.abs(N - T) > 1e-12 && --b > 0);
      if (b === 0) return NaN;
      const le = ee * (6378137 * 6378137 - a * a) / (a * a), he = 1 + le / 16384 * (4096 + le * (-768 + le * (320 - 175 * le))), Q = le / 1024 * (256 + le * (-128 + le * (74 - 47 * le))), B = Q * L * (ne + Q / 4 * (W * (-1 + 2 * ne * ne) - Q / 6 * ne * (-3 + 4 * L * L) * (-3 + 4 * ne * ne)));
      return a * he * (Z - B);
    }
  }
  class pl {
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
      const i = new pl();
      return i.true = new Set(r.true), i.false = new Set(r.false), i;
    }
  }
  function Iy(n, r, i, l, u, { k: a, b: c, d: f }) {
    return Math.log(1 + (i - r + 0.5) / (r + 0.5)) * (f + n * (a + 1)) / (n + a * (1 - c + c * l / u));
  }
  const Cy = 0.8;
  class hl {
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
      return r instanceof Float32Array || (r = new Float32Array(r)), Ty(r, l, this.vectors, this.size, i);
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
      const i = r, l = new hl(i.size);
      for (const [u, [a, c]] of i.vectors) l.vectors.set(u, [
        a,
        new Float32Array(c)
      ]);
      return l;
    }
  }
  function _p(n, r) {
    let i = 0;
    for (let l = 0; l < r; l++) i += n[l] * n[l];
    return Math.sqrt(i);
  }
  function Ty(n, r, i, l, u) {
    const a = _p(n, l), c = [], f = r || i.keys();
    for (const h of f) {
      const m = i.get(h);
      if (!m) continue;
      const g = m[0], y = m[1];
      let v = 0;
      for (let I = 0; I < l; I++) v += n[I] * y[I];
      const w = v / (a * g);
      w >= u && c.push([
        h,
        w
      ]);
    }
    return c;
  }
  function Pp(n, r, i, l, u) {
    const a = rn(n.sharedInternalDocumentStore, i);
    n.avgFieldLength[r] = ((n.avgFieldLength[r] ?? 0) * (u - 1) + l.length) / u, n.fieldLengths[r][a] = l.length, n.frequencies[r][a] = {};
  }
  function Np(n, r, i, l, u) {
    let a = 0;
    for (const h of l) h === u && a++;
    const c = rn(n.sharedInternalDocumentStore, i), f = a / l.length;
    n.frequencies[r][c][u] = f, u in n.tokenOccurrences[r] || (n.tokenOccurrences[r][u] = 0), n.tokenOccurrences[r][u] = (n.tokenOccurrences[r][u] ?? 0) + 1;
  }
  function Dp(n, r, i, l) {
    const u = rn(n.sharedInternalDocumentStore, i);
    l > 1 ? n.avgFieldLength[r] = (n.avgFieldLength[r] * l - n.fieldLengths[r][u]) / (l - 1) : n.avgFieldLength[r] = void 0, n.fieldLengths[r][u] = void 0, n.frequencies[r][u] = void 0;
  }
  function Op(n, r, i) {
    n.tokenOccurrences[r][i]--;
  }
  function Wu(n, r, i, l, u = "") {
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
        Wu(n, r, c, l, f);
        continue;
      }
      if (Mi(c)) l.searchableProperties.push(f), l.searchablePropertiesWithTypes[f] = c, l.vectorIndexes[f] = {
        type: "Vector",
        node: new hl(Sp(c)),
        isArray: false
      };
      else {
        const h = /\[/.test(c);
        switch (c) {
          case "boolean":
          case "boolean[]":
            l.indexes[f] = {
              type: "Bool",
              node: new pl(),
              isArray: h
            };
            break;
          case "number":
          case "number[]":
            l.indexes[f] = {
              type: "AVL",
              node: new cl(0, []),
              isArray: h
            };
            break;
          case "string":
          case "string[]":
            l.indexes[f] = {
              type: "Radix",
              node: new dl(),
              isArray: h
            }, l.avgFieldLength[f] = 0, l.frequencies[f] = {}, l.tokenOccurrences[f] = {}, l.fieldLengths[f] = {};
            break;
          case "enum":
          case "enum[]":
            l.indexes[f] = {
              type: "Flat",
              node: new fl(),
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
            throw ze("INVALID_SCHEMA_TYPE", Array.isArray(c) ? "array" : c, f);
        }
        l.searchableProperties.push(f), l.searchablePropertiesWithTypes[f] = c;
      }
    }
    return l;
  }
  function _y(n, r, i, l, u, a, c, f) {
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
          n.insertDocumentScoreParameters(r, i, l, y, c);
          for (const v of y) n.insertTokenScoreParameters(r, i, l, y, v), g.insert(v, l);
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
  function Rp(n, r, i, l, u, a, c, f, h, m, g) {
    if (Mi(c)) return Ap(r, i, a, l, u);
    const y = _y(n, r, i, u, f, h, m, g);
    if (!al(c)) return y(a);
    const v = a, w = v.length;
    for (let I = 0; I < w; I++) y(v[I]);
  }
  function Ap(n, r, i, l, u) {
    n.vectorIndexes[r].node.add(u, i);
  }
  function fd(n, r, i, l, u, a, c, f, h, m) {
    if (Mi(c)) return r.vectorIndexes[i].node.remove(u), true;
    const { type: g, node: y } = r.indexes[i];
    switch (g) {
      case "AVL":
        return y.removeDocument(a, u), true;
      case "Bool":
        return y[a ? "true" : "false"].delete(u), true;
      case "Radix": {
        const v = h.tokenize(a, f, i);
        n.removeDocumentScoreParameters(r, i, l, m);
        for (const w of v) n.removeTokenScoreParameters(r, i, w), y.removeDocumentByWord(w, u);
        return true;
      }
      case "Flat":
        return y.removeDocument(u, a), true;
      case "BKD":
        return y.removeDocByID(a, u), false;
    }
  }
  function Lp(n, r, i, l, u, a, c, f, h, m) {
    if (!al(c)) return fd(n, r, i, l, u, a, c, f, h, m);
    const g = kp(c), y = a, v = y.length;
    for (let w = 0; w < v; w++) fd(n, r, i, l, u, y[w], g, f, h, m);
    return true;
  }
  function $u(n, r, i, l, u, a, c, f, h, m) {
    var _a;
    const g = Array.from(l), y = n.avgFieldLength[r], v = n.fieldLengths[r], w = n.tokenOccurrences[r], I = n.frequencies[r], D = typeof w[i] == "number" ? w[i] ?? 0 : 0, N = g.length;
    for (let T = 0; T < N; T++) {
      const b = g[T];
      if (h && !h.has(b)) continue;
      m.has(b) || m.set(b, /* @__PURE__ */ new Map());
      const L = m.get(b);
      L.set(r, (L.get(r) || 0) + 1);
      const W = ((_a = I == null ? void 0 : I[b]) == null ? void 0 : _a[i]) ?? 0, Z = Iy(W, D, u, v[b], y, a);
      c.has(b) ? c.set(b, c.get(b) + Z * f) : c.set(b, Z * f);
    }
  }
  function zp(n, r, i, l, u, a, c, f, h, m, g, y = 0) {
    const v = i.tokenize(r, l), w = v.length || 1, I = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
    for (const L of u) {
      if (!(L in n.indexes)) continue;
      const W = n.indexes[L], { type: Z } = W;
      if (Z !== "Radix") throw ze("WRONG_SEARCH_PROPERTY_TYPE", L);
      const A = f[L] ?? 1;
      if (A <= 0) throw ze("INVALID_BOOST_VALUE", A);
      v.length === 0 && !r && v.push("");
      const ee = v.length;
      for (let ne = 0; ne < ee; ne++) {
        const le = v[ne], he = W.node.find({
          term: le,
          exact: a,
          tolerance: c
        }), Q = Object.keys(he);
        Q.length > 0 && D.set(le, true);
        const B = Q.length;
        for (let ue = 0; ue < B; ue++) {
          const X = Q[ue], U = he[X];
          $u(n, L, X, U, m, h, N, A, g, I);
        }
      }
    }
    const T = Array.from(N.entries()).map(([L, W]) => [
      L,
      W
    ]).sort((L, W) => W[1] - L[1]);
    if (T.length === 0) return [];
    if (y === 1) return T;
    if (y === 0) {
      if (w === 1) return T;
      for (const W of v) if (!D.get(W)) return [];
      return T.filter(([W]) => {
        const Z = I.get(W);
        return Z ? Array.from(Z.values()).some((A) => A === w) : false;
      });
    }
    const b = T.filter(([L]) => {
      const W = I.get(L);
      return W ? Array.from(W.values()).some((Z) => Z === w) : false;
    });
    if (b.length > 0) {
      const L = T.filter(([Z]) => !b.some(([A]) => A === Z)), W = Math.ceil(L.length * y);
      return [
        ...b,
        ...L.slice(0, W)
      ];
    }
    return T;
  }
  function Di(n, r, i, l) {
    if ("and" in i && i.and && Array.isArray(i.and)) {
      const c = i.and;
      if (c.length === 0) return /* @__PURE__ */ new Set();
      const f = c.map((h) => Di(n, r, h, l));
      return ad(...f);
    }
    if ("or" in i && i.or && Array.isArray(i.or)) {
      const c = i.or;
      return c.length === 0 ? /* @__PURE__ */ new Set() : c.map((h) => Di(n, r, h, l)).reduce((h, m) => Zo(h, m), /* @__PURE__ */ new Set());
    }
    if ("not" in i && i.not) {
      const c = i.not, f = /* @__PURE__ */ new Set(), h = n.sharedInternalDocumentStore;
      for (let g = 1; g <= h.internalIdToId.length; g++) f.add(g);
      const m = Di(n, r, c, l);
      return hy(f, m);
    }
    const u = Object.keys(i), a = u.reduce((c, f) => ({
      [f]: /* @__PURE__ */ new Set(),
      ...c
    }), {});
    for (const c of u) {
      const f = i[c];
      if (typeof n.indexes[c] > "u") throw ze("UNKNOWN_FILTER_PROPERTY", c);
      const { node: h, type: m, isArray: g } = n.indexes[c];
      if (m === "Bool") {
        const v = h, w = f ? v.true : v.false;
        a[c] = Zo(a[c], w);
        continue;
      }
      if (m === "BKD") {
        let v;
        if ("radius" in f) v = "radius";
        else if ("polygon" in f) v = "polygon";
        else throw new Error(`Invalid operation ${f}`);
        if (v === "radius") {
          const { value: w, coordinates: I, unit: D = "m", inside: N = true, highPrecision: T = false } = f[v], b = vp(w, D), L = h.searchByRadius(I, b, N, void 0, T);
          a[c] = dd(a[c], L);
        } else {
          const { coordinates: w, inside: I = true, highPrecision: D = false } = f[v], N = h.searchByPolygon(w, I, void 0, D);
          a[c] = dd(a[c], N);
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
            a[c] = Dy(a[c], D);
          }
        }
        continue;
      }
      const y = Object.keys(f);
      if (y.length > 1) throw ze("INVALID_FILTER_OPERATION", y.length);
      if (m === "Flat") {
        const v = new Set(g ? h.filterArr(f) : h.filter(f));
        a[c] = Zo(a[c], v);
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
            throw ze("INVALID_FILTER_OPERATION", v);
        }
        a[c] = Zo(a[c], I);
      }
    }
    return ad(...Object.values(a));
  }
  function Mp(n) {
    return n.searchableProperties;
  }
  function bp(n) {
    return n.searchablePropertiesWithTypes;
  }
  function Fp(n, r) {
    const { indexes: i, vectorIndexes: l, searchableProperties: u, searchablePropertiesWithTypes: a, frequencies: c, tokenOccurrences: f, avgFieldLength: h, fieldLengths: m } = r, g = {}, y = {};
    for (const v of Object.keys(i)) {
      const { node: w, type: I, isArray: D } = i[v];
      switch (I) {
        case "Radix":
          g[v] = {
            type: "Radix",
            node: dl.fromJSON(w),
            isArray: D
          };
          break;
        case "Flat":
          g[v] = {
            type: "Flat",
            node: fl.fromJSON(w),
            isArray: D
          };
          break;
        case "AVL":
          g[v] = {
            type: "AVL",
            node: cl.fromJSON(w),
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
            node: pl.fromJSON(w),
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
      node: hl.fromJSON(l[v])
    };
    return {
      sharedInternalDocumentStore: n,
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
  function Bp(n) {
    const { indexes: r, vectorIndexes: i, searchableProperties: l, searchablePropertiesWithTypes: u, frequencies: a, tokenOccurrences: c, avgFieldLength: f, fieldLengths: h } = n, m = {};
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
  Py = function() {
    return {
      create: Wu,
      insert: Rp,
      remove: Lp,
      insertDocumentScoreParameters: Pp,
      insertTokenScoreParameters: Np,
      removeDocumentScoreParameters: Dp,
      removeTokenScoreParameters: Op,
      calculateResultScores: $u,
      search: zp,
      searchByWhereClause: Di,
      getSearchableProperties: Mp,
      getSearchablePropertiesWithTypes: bp,
      load: Fp,
      save: Bp
    };
  };
  function dd(n, r) {
    n || (n = /* @__PURE__ */ new Set());
    const i = r.length;
    for (let l = 0; l < i; l++) {
      const u = r[l].docIDs, a = u.length;
      for (let c = 0; c < a; c++) n.add(u[c]);
    }
    return n;
  }
  function pd(n, r, i = false) {
    const l = i ? _t.vincentyDistance : _t.haversineDistance, u = [], a = [];
    for (const { point: h } of n) a.push(l(r, h));
    const c = Math.max(...a);
    let f = 0;
    for (const { docIDs: h } of n) {
      const m = a[f], g = c - m + 1;
      for (const y of h) u.push([
        y,
        g
      ]);
      f++;
    }
    return u.sort((h, m) => m[1] - h[1]), u;
  }
  function Ny(n, r) {
    const i = Object.keys(n);
    if (i.length !== 1) return {
      isGeoOnly: false
    };
    const l = i[0], u = n[l];
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
  function jp(n, r) {
    const i = n, l = Ny(r, i);
    if (!l.isGeoOnly || !l.geoProperty || !l.geoOperation) return null;
    const { node: u } = i.indexes[l.geoProperty], a = l.geoOperation, c = u;
    let f;
    if ("radius" in a) {
      const { value: h, coordinates: m, unit: g = "m", inside: y = true, highPrecision: v = false } = a.radius, w = m, I = vp(h, g);
      return f = c.searchByRadius(w, I, y, "asc", v), pd(f, w, v);
    } else if ("polygon" in a) {
      const { coordinates: h, inside: m = true, highPrecision: g = false } = a.polygon;
      f = c.searchByPolygon(h, m, "asc", g);
      const y = _t.calculatePolygonCentroid(h);
      return pd(f, y, g);
    }
    return null;
  }
  function Dy(n, r) {
    n || (n = /* @__PURE__ */ new Set());
    const i = Object.keys(r), l = i.length;
    for (let u = 0; u < l; u++) {
      const a = r[i[u]], c = a.length;
      for (let f = 0; f < c; f++) n.add(a[f]);
    }
    return n;
  }
  mk = Object.freeze(Object.defineProperty({
    __proto__: null,
    calculateResultScores: $u,
    create: Wu,
    createIndex: Py,
    getSearchableProperties: Mp,
    getSearchablePropertiesWithTypes: bp,
    insert: Rp,
    insertDocumentScoreParameters: Pp,
    insertTokenScoreParameters: Np,
    insertVector: Ap,
    load: Fp,
    remove: Lp,
    removeDocumentScoreParameters: Dp,
    removeTokenScoreParameters: Op,
    save: Bp,
    search: zp,
    searchByGeoWhereClause: jp,
    searchByWhereClause: Di
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function Oy(n) {
    return {
      sharedInternalDocumentStore: n,
      rules: /* @__PURE__ */ new Map()
    };
  }
  function Ry(n, r) {
    if (n.rules.has(r.id)) throw new Error(`PINNING_RULE_ALREADY_EXISTS: A pinning rule with id "${r.id}" already exists. Use updateRule to modify it.`);
    n.rules.set(r.id, r);
  }
  function Ay(n, r) {
    if (!n.rules.has(r.id)) throw new Error(`PINNING_RULE_NOT_FOUND: Cannot update pinning rule with id "${r.id}" because it does not exist. Use addRule to create it.`);
    n.rules.set(r.id, r);
  }
  function Ly(n, r) {
    return n.rules.delete(r);
  }
  function zy(n, r) {
    return n.rules.get(r);
  }
  function My(n) {
    return Array.from(n.rules.values());
  }
  function by(n, r) {
    const i = n.toLowerCase().trim(), l = r.pattern.toLowerCase().trim();
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
  function Fy(n, r) {
    return n ? r.conditions.every((i) => by(n, i)) : false;
  }
  function Up(n, r) {
    if (!r) return [];
    const i = [];
    for (const l of n.rules.values()) Fy(r, l) && i.push(l);
    return i;
  }
  function By(n, r) {
    const i = r;
    return {
      sharedInternalDocumentStore: n,
      rules: new Map((i == null ? void 0 : i.rules) ?? [])
    };
  }
  function jy(n) {
    return {
      rules: Array.from(n.rules.entries())
    };
  }
  gk = function() {
    return {
      create: Oy,
      addRule: Ry,
      updateRule: Ay,
      removeRule: Ly,
      getRule: zy,
      getAllRules: My,
      getMatchingRules: Up,
      load: By,
      save: jy
    };
  };
  yk = function(n, r) {
    return n.documentsStore.get(n.data.docs, r);
  };
  Uy = function(n) {
    return n.documentsStore.count(n.data.docs);
  };
  Vp = function(n, r, i, l, u) {
    const a = n.validateSchema(r, n.schema);
    if (a) throw ze("SCHEMA_VALIDATION_FAILURE", a);
    return Ye(n.beforeInsert) || Ye(n.afterInsert) || Ye(n.index.beforeInsert) || Ye(n.index.insert) || Ye(n.index.afterInsert) ? Wy(n, r, i, l, u) : $y(n, r, i, l, u);
  };
  const Vy = /* @__PURE__ */ new Set([
    "enum",
    "enum[]"
  ]), Hy = /* @__PURE__ */ new Set([
    "string",
    "number"
  ]);
  async function Wy(n, r, i, l, u) {
    const { index: a, docs: c } = n.data, f = n.getDocumentIndexId(r);
    if (typeof f != "string") throw ze("DOCUMENT_ID_MUST_BE_STRING", typeof f);
    const h = rn(n.internalDocumentIDStore, f);
    if (l || await ol(n.beforeInsert, n, f, r), !n.documentsStore.store(c, f, h, r)) throw ze("DOCUMENT_ALREADY_EXISTS", f);
    const m = n.documentsStore.count(c), g = n.index.getSearchableProperties(a), y = n.index.getSearchablePropertiesWithTypes(a), v = n.getDocumentProperties(r, g);
    for (const [w, I] of Object.entries(v)) {
      if (typeof I > "u") continue;
      const D = typeof I, N = y[w];
      Hp(D, N, w, I);
    }
    return await Yy(n, f, g, v, m, i, r, u), l || await ol(n.afterInsert, n, f, r), f;
  }
  function $y(n, r, i, l, u) {
    const { index: a, docs: c } = n.data, f = n.getDocumentIndexId(r);
    if (typeof f != "string") throw ze("DOCUMENT_ID_MUST_BE_STRING", typeof f);
    const h = rn(n.internalDocumentIDStore, f);
    if (l || ol(n.beforeInsert, n, f, r), !n.documentsStore.store(c, f, h, r)) throw ze("DOCUMENT_ALREADY_EXISTS", f);
    const m = n.documentsStore.count(c), g = n.index.getSearchableProperties(a), y = n.index.getSearchablePropertiesWithTypes(a), v = n.getDocumentProperties(r, g);
    for (const [w, I] of Object.entries(v)) {
      if (typeof I > "u") continue;
      const D = typeof I, N = y[w];
      Hp(D, N, w, I);
    }
    return qy(n, f, g, v, m, i, r, u), l || ol(n.afterInsert, n, f, r), f;
  }
  function Hp(n, r, i, l) {
    if (!(xy(r) && typeof l == "object" && typeof l.lon == "number" && typeof l.lat == "number") && !(Mi(r) && Array.isArray(l)) && !(al(r) && Array.isArray(l)) && !(Vy.has(r) && Hy.has(n)) && n !== r) throw ze("INVALID_DOCUMENT_PROPERTY", i, r, n);
  }
  async function Yy(n, r, i, l, u, a, c, f) {
    var _a, _b, _c, _d2;
    for (const g of i) {
      const y = l[g];
      if (typeof y > "u") continue;
      const v = n.index.getSearchablePropertiesWithTypes(n.data.index)[g];
      await ((_b = (_a = n.index).beforeInsert) == null ? void 0 : _b.call(_a, n.data.index, g, r, y, v, a, n.tokenizer, u));
      const w = n.internalDocumentIDStore.idToInternalId.get(r);
      await n.index.insert(n.index, n.data.index, g, r, w, y, v, a, n.tokenizer, u, f), await ((_d2 = (_c = n.index).afterInsert) == null ? void 0 : _d2.call(_c, n.data.index, g, r, y, v, a, n.tokenizer, u));
    }
    const h = n.sorter.getSortableProperties(n.data.sorting), m = n.getDocumentProperties(c, h);
    for (const g of h) {
      const y = m[g];
      if (typeof y > "u") continue;
      const v = n.sorter.getSortablePropertiesWithTypes(n.data.sorting)[g];
      n.sorter.insert(n.data.sorting, g, r, y, v, a);
    }
  }
  function qy(n, r, i, l, u, a, c, f) {
    var _a, _b, _c, _d2;
    for (const g of i) {
      const y = l[g];
      if (typeof y > "u") continue;
      const v = n.index.getSearchablePropertiesWithTypes(n.data.index)[g], w = rn(n.internalDocumentIDStore, r);
      (_b = (_a = n.index).beforeInsert) == null ? void 0 : _b.call(_a, n.data.index, g, r, y, v, a, n.tokenizer, u), n.index.insert(n.index, n.data.index, g, r, w, y, v, a, n.tokenizer, u, f), (_d2 = (_c = n.index).afterInsert) == null ? void 0 : _d2.call(_c, n.data.index, g, r, y, v, a, n.tokenizer, u);
    }
    const h = n.sorter.getSortableProperties(n.data.sorting), m = n.getDocumentProperties(c, h);
    for (const g of h) {
      const y = m[g];
      if (typeof y > "u") continue;
      const v = n.sorter.getSortablePropertiesWithTypes(n.data.sorting)[g];
      n.sorter.insert(n.data.sorting, g, r, y, v, a);
    }
  }
  Ky = function(n, r, i, l, u, a) {
    return Ye(n.afterInsertMultiple) || Ye(n.beforeInsertMultiple) || Ye(n.index.beforeInsert) || Ye(n.index.insert) || Ye(n.index.afterInsert) ? Wp(n, r, i, l, u, a) : $p(n, r, i, l, u, a);
  };
  async function Wp(n, r, i = 1e3, l, u, a = 0) {
    const c = [], f = async (m) => {
      const g = Math.min(m + i, r.length), y = r.slice(m, g);
      for (const v of y) {
        const w = {
          avlRebalanceThreshold: y.length
        }, I = await Vp(n, v, l, u, w);
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
          v > 0 && xp(v);
        }
      }
    })(), u || await Cp(n.afterInsertMultiple, n, r), c;
  }
  function $p(n, r, i = 1e3, l, u, a = 0) {
    const c = [];
    let f = 0;
    function h() {
      const g = r.slice(f * i, (f + 1) * i);
      if (g.length === 0) return false;
      for (const y of g) {
        const v = {
          avlRebalanceThreshold: g.length
        }, w = Vp(n, y, l, u, v);
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
          w > 0 && xp(w);
        }
      }
    }
    return m(), u || Cp(n.afterInsertMultiple, n, r), c;
  }
  vk = function(n, r, i, l, u, a) {
    return Ye(n.beforeInsert) || Ye(n.afterInsert) || Ye(n.index.beforeInsert) || Ye(n.index.insert) || Ye(n.index.afterInsert) ? Wp(n, r, i, l, u, a) : $p(n, r, i, l, u, a);
  };
  hd = "fulltext";
  Qy = "hybrid";
  Gy = "vector";
  function Xy(n, r) {
    return n[1] - r[1];
  }
  function Jy(n, r) {
    return r[1] - n[1];
  }
  function Zy(n = "desc") {
    return n.toLowerCase() === "asc" ? Xy : Jy;
  }
  function Yu(n, r, i) {
    const l = {}, u = r.map(([m]) => m), a = n.documentsStore.getMultiple(n.data.docs, u), c = Object.keys(i), f = n.index.getSearchablePropertiesWithTypes(n.data.index);
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
        const v = y.includes(".") ? Uu(g, y) : g[y], w = f[y], I = l[y].values;
        switch (w) {
          case "number": {
            const D = i[y].ranges;
            md(D, I)(v);
            break;
          }
          case "number[]": {
            const D = /* @__PURE__ */ new Set(), N = i[y].ranges, T = md(N, I, D);
            for (const b of v) T(b);
            break;
          }
          case "boolean":
          case "enum":
          case "string": {
            gd(I, w)(v);
            break;
          }
          case "boolean[]":
          case "enum[]":
          case "string[]": {
            const T = gd(I, w === "boolean[]" ? "boolean" : "string", /* @__PURE__ */ new Set());
            for (const b of v) T(b);
            break;
          }
          default:
            throw ze("FACET_NOT_SUPPORTED", w);
        }
      }
    }
    for (const m of c) {
      const g = l[m];
      if (g.count = Object.keys(g.values).length, f[m] === "string") {
        const y = i[m], v = Zy(y.sort);
        g.values = Object.fromEntries(Object.entries(g.values).sort(v).slice(y.offset ?? 0, y.limit ?? 10));
      }
    }
    return l;
  }
  function md(n, r, i) {
    return (l) => {
      for (const u of n) {
        const a = `${u.from}-${u.to}`;
        (i == null ? void 0 : i.has(a)) || l >= u.from && l <= u.to && (r[a] === void 0 ? r[a] = 1 : (r[a]++, i == null ? void 0 : i.add(a)));
      }
    };
  }
  function gd(n, r, i) {
    const l = r === "boolean" ? "false" : "";
    return (u) => {
      const a = (u == null ? void 0 : u.toString()) ?? l;
      (i == null ? void 0 : i.has(a)) || (n[a] = (n[a] ?? 0) + 1, i == null ? void 0 : i.add(a));
    };
  }
  const e0 = {
    reducer: (n, r, i, l) => (r[l] = i, r),
    getInitialValue: (n) => Array.from({
      length: n
    })
  }, yd = [
    "string",
    "number",
    "boolean"
  ];
  function qu(n, r, i) {
    const l = i.properties, u = l.length, a = n.index.getSearchablePropertiesWithTypes(n.data.index);
    for (let T = 0; T < u; T++) {
      const b = l[T];
      if (typeof a[b] > "u") throw ze("UNKNOWN_GROUP_BY_PROPERTY", b);
      if (!yd.includes(a[b])) throw ze("INVALID_GROUP_BY_PROPERTY", b, yd.join(", "), a[b]);
    }
    const c = r.map(([T]) => bi(n.internalDocumentIDStore, T)), f = n.documentsStore.getMultiple(n.data.docs, c), h = f.length, m = i.maxResult || Number.MAX_SAFE_INTEGER, g = [], y = {};
    for (let T = 0; T < u; T++) {
      const b = l[T], L = {
        property: b,
        perValue: {}
      }, W = /* @__PURE__ */ new Set();
      for (let Z = 0; Z < h; Z++) {
        const A = f[Z], ee = Uu(A, b);
        if (typeof ee > "u") continue;
        const ne = typeof ee != "boolean" ? ee : "" + ee, le = L.perValue[ne] ?? {
          indexes: [],
          count: 0
        };
        le.count >= m || (le.indexes.push(Z), le.count++, L.perValue[ne] = le, W.add(ee));
      }
      g.push(Array.from(W)), y[b] = L;
    }
    const v = Yp(g), w = v.length, I = [];
    for (let T = 0; T < w; T++) {
      const b = v[T], L = b.length, W = {
        values: [],
        indexes: []
      }, Z = [];
      for (let A = 0; A < L; A++) {
        const ee = b[A], ne = l[A];
        Z.push(y[ne].perValue[typeof ee != "boolean" ? ee : "" + ee].indexes), W.values.push(ee);
      }
      W.indexes = cy(Z).sort((A, ee) => A - ee), W.indexes.length !== 0 && I.push(W);
    }
    const D = I.length, N = Array.from({
      length: D
    });
    for (let T = 0; T < D; T++) {
      const b = I[T], L = i.reduce || e0, W = b.indexes.map((ne) => ({
        id: c[ne],
        score: r[ne][1],
        document: f[ne]
      })), Z = L.reducer.bind(null, b.values), A = L.getInitialValue(b.indexes.length), ee = W.reduce(Z, A);
      N[T] = {
        values: b.values,
        result: ee
      };
    }
    return N;
  }
  function Yp(n, r = 0) {
    if (r + 1 === n.length) return n[r].map((a) => [
      a
    ]);
    const i = n[r], l = Yp(n, r + 1), u = [];
    for (const a of i) for (const c of l) {
      const f = [
        a
      ];
      oy(f, c), u.push(f);
    }
    return u;
  }
  function Ku(n, r, i, l) {
    const u = Up(r, l);
    if (u.length === 0) return i;
    const a = u.flatMap((N) => N.consequence.promote);
    a.sort((N, T) => N.position - T.position);
    const c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set();
    for (const N of a) {
      const T = rn(n.internalDocumentIDStore, N.doc_id);
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
    ]) : n.documentsStore.get(n.data.docs, N) && y.push([
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
  function qp(n, r, i) {
    const { term: l, properties: u } = r, a = n.data.index;
    let c = n.caches.propertiesToSearch;
    if (!c) {
      const y = n.index.getSearchablePropertiesWithTypes(a);
      c = n.index.getSearchableProperties(a), c = c.filter((v) => y[v].startsWith("string")), n.caches.propertiesToSearch = c;
    }
    if (u && u !== "*") {
      for (const y of u) if (!c.includes(y)) throw ze("UNKNOWN_INDEX", y, c.join(", "));
      c = c.filter((y) => u.includes(y));
    }
    const f = Object.keys(r.where ?? {}).length > 0;
    let h;
    f && (h = n.index.searchByWhereClause(a, n.tokenizer, r.where, i));
    let m;
    const g = r.threshold !== void 0 && r.threshold !== null ? r.threshold : 1;
    if (l || u) {
      const y = Uy(n);
      if (m = n.index.search(a, l || "", n.tokenizer, i, c, r.exact || false, r.tolerance || 0, r.boost || {}, i0(r.relevance), y, h, g), r.exact && l) {
        const v = l.trim().split(/\s+/);
        m = m.filter(([w]) => {
          const I = n.documentsStore.get(n.data.docs, w);
          if (!I) return false;
          for (const D of c) {
            const N = n0(I, D);
            if (typeof N == "string" && v.every((b) => new RegExp(`\\b${t0(b)}\\b`).test(N))) return true;
          }
          return false;
        });
      }
    } else if (f) {
      const y = jp(a, r.where);
      y ? m = y : m = (h ? Array.from(h) : []).map((w) => [
        +w,
        0
      ]);
    } else m = Object.keys(n.documentsStore.getAll(n.data.docs)).map((v) => [
      +v,
      0
    ]);
    return m;
  }
  function t0(n) {
    return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function n0(n, r) {
    const i = r.split(".");
    let l = n;
    for (const u of i) if (l && typeof l == "object" && u in l) l = l[u];
    else return;
    return l;
  }
  function r0(n, r, i) {
    var _a, _b;
    const l = zr();
    function u() {
      const f = Object.keys(n.data.index.vectorIndexes), h = r.facets && Object.keys(r.facets).length > 0, { limit: m = 10, offset: g = 0, distinctOn: y, includeVectors: v = false } = r, w = r.preflight === true;
      let I = qp(n, r, i);
      if (r.sortBy) if (typeof r.sortBy == "function") {
        const T = I.map(([W]) => W), L = n.documentsStore.getMultiple(n.data.docs, T).map((W, Z) => [
          I[Z][0],
          I[Z][1],
          W
        ]);
        L.sort(r.sortBy), I = L.map(([W, Z]) => [
          W,
          Z
        ]);
      } else I = n.sorter.sortBy(n.data.sorting, I, r.sortBy).map(([T, b]) => [
        rn(n.internalDocumentIDStore, T),
        b
      ]);
      else I = I.sort(yp);
      I = Ku(n, n.data.pinning, I, r.term);
      let D;
      w || (D = y ? d0(n, I, g, m, y) : Qp(n, I, g, m));
      const N = {
        elapsed: {
          formatted: "",
          raw: 0
        },
        hits: [],
        count: I.length
      };
      if (typeof D < "u" && (N.hits = D.filter(Boolean), v || wp(N, f)), h) {
        const T = Yu(n, I, r.facets);
        N.facets = T;
      }
      return r.groupBy && (N.groups = qu(n, I, r.groupBy)), N.elapsed = n.formatElapsedTime(zr() - l), N;
    }
    async function a() {
      n.beforeSearch && await Hu(n.beforeSearch, n, r, i);
      const f = u();
      return n.afterSearch && await Vu(n.afterSearch, n, r, i, f), f;
    }
    return ((_a = n.beforeSearch) == null ? void 0 : _a.length) || ((_b = n.afterSearch) == null ? void 0 : _b.length) ? a() : u();
  }
  const du = {
    k: 1.2,
    b: 0.75,
    d: 0.5
  };
  function i0(n) {
    const r = n ?? {};
    return r.k = r.k ?? du.k, r.b = r.b ?? du.b, r.d = r.d ?? du.d, r;
  }
  function Kp(n, r, i) {
    const l = r.vector;
    if (l && (!("value" in l) || !("property" in l))) throw ze("INVALID_VECTOR_INPUT", Object.keys(l).join(", "));
    const u = n.data.index.vectorIndexes[l.property];
    if (!u) throw ze("UNKNOWN_VECTOR_PROPERTY", l.property);
    const a = u.node.size;
    if ((l == null ? void 0 : l.value.length) !== a) throw (l == null ? void 0 : l.property) === void 0 || (l == null ? void 0 : l.value.length) === void 0 ? ze("INVALID_INPUT_VECTOR", "undefined", a, "undefined") : ze("INVALID_INPUT_VECTOR", l.property, a, l.value.length);
    const c = n.data.index;
    let f;
    return Object.keys(r.where ?? {}).length > 0 && (f = n.index.searchByWhereClause(c, n.tokenizer, r.where, i)), u.node.find(l.value, r.similarity ?? Cy, f);
  }
  o0 = function(n, r, i = "english") {
    var _a, _b;
    const l = zr();
    function u() {
      let f = Kp(n, r, i).sort(yp);
      f = Ku(n, n.data.pinning, f, void 0);
      let h = [];
      r.facets && Object.keys(r.facets).length > 0 && (h = Yu(n, f, r.facets));
      const g = r.vector.property, y = r.includeVectors ?? false, v = r.limit ?? 10, w = r.offset ?? 0, I = Array.from({
        length: v
      });
      for (let b = 0; b < v; b++) {
        const L = f[b + w];
        if (!L) break;
        const W = n.data.docs.docs[L[0]];
        if (W) {
          y || (W[g] = null);
          const Z = {
            id: bi(n.internalDocumentIDStore, L[0]),
            score: L[1],
            document: W
          };
          I[b] = Z;
        }
      }
      let D = [];
      r.groupBy && (D = qu(n, f, r.groupBy));
      const T = zr() - l;
      return {
        count: f.length,
        hits: I.filter(Boolean),
        elapsed: {
          raw: Number(T),
          formatted: ju(T)
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
      n.beforeSearch && await Hu(n.beforeSearch, n, r, i);
      const f = u();
      return n.afterSearch && await Vu(n.afterSearch, n, r, i, f), f;
    }
    return ((_a = n.beforeSearch) == null ? void 0 : _a.length) || ((_b = n.afterSearch) == null ? void 0 : _b.length) ? a() : u();
  };
  function l0(n, r, i) {
    const l = u0(qp(n, r, i)), u = Kp(n, r, i), a = r.hybridWeights;
    return c0(l, u, r.term ?? "", a);
  }
  function s0(n, r, i) {
    var _a, _b;
    const l = zr();
    function u() {
      let f = l0(n, r, i);
      f = Ku(n, n.data.pinning, f, r.term);
      let h;
      r.facets && Object.keys(r.facets).length > 0 && (h = Yu(n, f, r.facets));
      let g;
      r.groupBy && (g = qu(n, f, r.groupBy));
      const y = r.offset ?? 0, v = r.limit ?? 10, w = Qp(n, f, y, v).filter(Boolean), I = zr(), D = {
        count: f.length,
        elapsed: {
          raw: Number(I - l),
          formatted: ju(I - l)
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
        const T = Object.keys(n.data.index.vectorIndexes);
        wp(D, T);
      }
      return D;
    }
    async function a() {
      n.beforeSearch && await Hu(n.beforeSearch, n, r, i);
      const f = u();
      return n.afterSearch && await Vu(n.afterSearch, n, r, i, f), f;
    }
    return ((_a = n.beforeSearch) == null ? void 0 : _a.length) || ((_b = n.afterSearch) == null ? void 0 : _b.length) ? a() : u();
  }
  function Pu(n) {
    return n[1];
  }
  function u0(n) {
    const r = Math.max.apply(Math, n.map(Pu));
    return n.map(([i, l]) => [
      i,
      l / r
    ]);
  }
  function vd(n, r) {
    return n / r;
  }
  function a0(n, r) {
    return (i, l) => i * n + l * r;
  }
  function c0(n, r, i, l) {
    const u = Math.max.apply(Math, n.map(Pu)), a = Math.max.apply(Math, r.map(Pu)), c = l && l.text && l.vector, { text: f, vector: h } = c ? l : f0(), m = /* @__PURE__ */ new Map(), g = n.length, y = a0(f, h);
    for (let w = 0; w < g; w++) {
      const [I, D] = n[w], N = vd(D, u), T = y(N, 0);
      m.set(I, T);
    }
    const v = r.length;
    for (let w = 0; w < v; w++) {
      const [I, D] = r[w], N = vd(D, a), T = m.get(I) ?? 0;
      m.set(I, T + y(0, N));
    }
    return [
      ...m
    ].sort((w, I) => I[1] - w[1]);
  }
  function f0(n) {
    return {
      text: 0.5,
      vector: 0.5
    };
  }
  wd = function(n, r, i) {
    const l = r.mode ?? hd;
    if (l === hd) return r0(n, r, i);
    if (l === Gy) return o0(n, r);
    if (l === Qy) return s0(n, r);
    throw ze("INVALID_SEARCH_MODE", l);
  };
  function d0(n, r, i, l, u) {
    const a = n.data.docs, c = /* @__PURE__ */ new Map(), f = [], h = /* @__PURE__ */ new Set(), m = r.length;
    let g = 0;
    for (let y = 0; y < m; y++) {
      const v = r[y];
      if (typeof v > "u") continue;
      const [w, I] = v;
      if (h.has(w)) continue;
      const D = n.documentsStore.get(a, w), N = Uu(D, u);
      if (!(typeof N > "u" || c.has(N)) && (c.set(N, true), g++, !(g <= i) && (f.push({
        id: bi(n.internalDocumentIDStore, w),
        score: I,
        document: D
      }), h.add(w), g >= i + l))) break;
    }
    return f;
  }
  function Qp(n, r, i, l) {
    const u = n.data.docs, a = Array.from({
      length: l
    }), c = /* @__PURE__ */ new Set();
    for (let f = i; f < l + i; f++) {
      const h = r[f];
      if (typeof h > "u") break;
      const [m, g] = h;
      if (!c.has(m)) {
        const y = n.documentsStore.get(u, m);
        a[f] = {
          id: bi(n.internalDocumentIDStore, m),
          score: g,
          document: y
        }, c.add(m);
      }
    }
    return a;
  }
  const Gp = "llm-import-export";
  async function p0() {
    return (await navigator.storage.getDirectory()).getDirectoryHandle(Gp, {
      create: true
    });
  }
  async function Xp(n) {
    return (await p0()).getDirectoryHandle(n, {
      create: true
    });
  }
  async function h0(n, r) {
    let i = n;
    for (const l of r) i = await i.getDirectoryHandle(l, {
      create: true
    });
    return i;
  }
  async function m0(n, r, i) {
    const l = await Xp(n), u = r.split("/"), a = u.pop(), h = await (await (u.length > 0 ? await h0(l, u) : l).getFileHandle(a, {
      create: true
    })).createWritable(), m = i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength);
    await h.write(m), await h.close();
  }
  async function rl(n, r) {
    const i = await Xp(n), l = r.split("/"), u = l.pop();
    let a = i;
    for (const m of l) a = await a.getDirectoryHandle(m);
    const h = await (await (await a.getFileHandle(u)).getFile()).arrayBuffer();
    return new Uint8Array(h);
  }
  async function g0() {
    try {
      await (await navigator.storage.getDirectory()).removeEntry(Gp, {
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
  function y0() {
    const [n, r] = ve.useState("idle"), [i, l] = ve.useState(0), [u, a] = ve.useState(null), [c, f] = ve.useState(null), [h, m] = ve.useState(null), [g, y] = ve.useState([]), [v, w] = ve.useState([]), I = ve.useCallback(async (N) => {
      try {
        a(null), r("extracting"), l(0), console.log("[Import] Handing zip to unzip-worker:", N.name, `(${(N.size / 1e9).toFixed(2)} GB)`);
        const T = new Worker(new URL("/offline-llm-knowledge-system/import/assets/unzip-worker-CLxpdtiW.js", import.meta.url), {
          type: "module"
        }), b = `extract-${Date.now()}`;
        let L = null;
        if (await new Promise((ue, X) => {
          T.onmessage = (q) => {
            const te = q.data;
            if (te.id === b) switch (te.type) {
              case "EXTRACT_MANIFEST":
                L = te.manifest, m(te.manifest);
                break;
              case "EXTRACT_PROGRESS":
                l(te.percent), te.stage && r(te.stage);
                break;
              case "EXTRACT_DONE":
                T.terminate(), ue();
                break;
              case "EXTRACT_ERROR":
                T.terminate(), X(new Error(te.error));
                break;
            }
          }, T.onerror = (q) => {
            T.terminate(), X(new Error(q.message ?? "Unzip worker crashed"));
          };
          const U = N.stream();
          T.postMessage({
            type: "EXTRACT",
            id: b,
            stream: U,
            fileSize: N.size
          }, {
            transfer: [
              U
            ]
          });
        }), !L) throw new Error("Manifest was not received from worker");
        const W = L;
        r("loading-index"), l(82), console.log("[Import] Loading Orama index from OPFS...");
        const Z = await rl(W.manifest_hash, "chunks.json"), A = JSON.parse(new TextDecoder().decode(Z)), ee = await rl(W.manifest_hash, "orama-index.json.gz").catch(() => null);
        ee && ey(ee);
        const ne = await rl(W.manifest_hash, "graph.json"), he = JSON.parse(new TextDecoder().decode(ne)).edges;
        console.log(`[Import] Graph loaded: ${he.length} edges`);
        const { create: Q } = await up(async () => {
          const { create: ue } = await import("./index-BD2x0NEM.js");
          return {
            create: ue
          };
        }, []), B = await Q({
          schema: {
            id: "string",
            source: "string",
            text: "string",
            vector: `vector[${W.embed_model.dimensions}]`
          },
          components: {
            tokenizer: {
              stemming: false
            }
          }
        });
        await Ky(B, A.map((ue) => ({
          id: ue.id,
          source: ue.source,
          text: ue.text,
          vector: ue.vector
        }))), y(A), w(he), f(B), l(92), console.log("[Import] Orama index ready."), r("loading-model");
      } catch (T) {
        const b = T instanceof Error ? T.message : String(T);
        console.error("[Import] importZip error:", b), a(b), r("error");
      }
    }, []), D = ve.useCallback(async () => {
      try {
        await g0(), f(null), m(null), y([]), w([]), l(0), a(null), r("idle");
      } catch (N) {
        a(N instanceof Error ? N.message : String(N));
      }
    }, []);
    return {
      stage: n,
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
  function v0({ onFile: n, disabled: r }) {
    const [i, l] = ve.useState(false), [u, a] = ve.useState(null), c = ve.useCallback((y) => {
      if (a(null), !y.name.endsWith(".zip")) {
        a("Please drop a .zip file");
        return;
      }
      n(y);
    }, [
      n
    ]), f = ve.useCallback((y) => {
      y.preventDefault(), y.stopPropagation(), r || l(true);
    }, [
      r
    ]), h = ve.useCallback((y) => {
      y.preventDefault(), y.stopPropagation(), l(false);
    }, []), m = ve.useCallback((y) => {
      if (y.preventDefault(), y.stopPropagation(), l(false), r) return;
      const v = y.dataTransfer.files[0];
      v && c(v);
    }, [
      r,
      c
    ]), g = ve.useCallback((y) => {
      var _a;
      const v = (_a = y.target.files) == null ? void 0 : _a[0];
      v && c(v), y.target.value = "";
    }, [
      c
    ]);
    return ie.jsxs("div", {
      style: {
        width: "100%",
        maxWidth: 560,
        margin: "0 auto"
      },
      children: [
        ie.jsxs("label", {
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
            ie.jsx("input", {
              type: "file",
              accept: ".zip",
              onChange: g,
              disabled: r,
              style: {
                display: "none"
              }
            }),
            ie.jsxs("svg", {
              width: 48,
              height: 48,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: i ? "var(--accent)" : "var(--muted)",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                ie.jsx("path", {
                  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                }),
                ie.jsx("polyline", {
                  points: "17 8 12 3 7 8"
                }),
                ie.jsx("line", {
                  x1: "12",
                  y1: "3",
                  x2: "12",
                  y2: "15"
                })
              ]
            }),
            ie.jsxs("div", {
              style: {
                textAlign: "center"
              },
              children: [
                ie.jsx("div", {
                  style: {
                    fontWeight: 600,
                    fontSize: 17,
                    color: "var(--text)"
                  },
                  children: "Drop knowledge base zip here"
                }),
                ie.jsx("div", {
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
        u && ie.jsx("p", {
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
  const w0 = {
    idle: "Waiting",
    extracting: "Extracting zip to storage...",
    caching: "Caching model files for offline use...",
    "loading-index": "Loading search index...",
    "loading-model": "Loading language model...",
    ready: "Ready",
    error: "Error"
  };
  function xd({ stage: n, progress: r, error: i }) {
    const l = w0[n] ?? n;
    return ie.jsxs("div", {
      style: {
        width: "100%",
        maxWidth: 480,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 16
      },
      children: [
        ie.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          },
          children: [
            ie.jsx("span", {
              style: {
                fontWeight: 600,
                fontSize: 15,
                color: "var(--text)"
              },
              children: l
            }),
            ie.jsxs("span", {
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
        ie.jsx("div", {
          style: {
            height: 8,
            background: "var(--border)",
            borderRadius: 8,
            overflow: "hidden"
          },
          children: ie.jsx("div", {
            style: {
              height: "100%",
              width: `${Math.min(100, Math.max(0, r))}%`,
              background: i ? "var(--danger)" : "var(--accent)",
              borderRadius: 8,
              transition: "width 0.3s ease"
            }
          })
        }),
        i && ie.jsx("p", {
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
        n === "loading-model" && ie.jsx("p", {
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
  function x0(n, r) {
    const i = {};
    return (n[n.length - 1] === "" ? [
      ...n,
      ""
    ] : n).join((i.padRight ? " " : "") + "," + (i.padLeft === false ? "" : " ")).trim();
  }
  const k0 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, S0 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, E0 = {};
  function kd(n, r) {
    return (E0.jsx ? S0 : k0).test(n);
  }
  const I0 = /[ \t\n\f\r]/g;
  function C0(n) {
    return typeof n == "object" ? n.type === "text" ? Sd(n.value) : false : Sd(n);
  }
  function Sd(n) {
    return n.replace(I0, "") === "";
  }
  class Fi {
    constructor(r, i, l) {
      this.normal = i, this.property = r, l && (this.space = l);
    }
  }
  Fi.prototype.normal = {};
  Fi.prototype.property = {};
  Fi.prototype.space = void 0;
  function Jp(n, r) {
    const i = {}, l = {};
    for (const u of n) Object.assign(i, u.property), Object.assign(l, u.normal);
    return new Fi(i, l, r);
  }
  function Nu(n) {
    return n.toLowerCase();
  }
  class wt {
    constructor(r, i) {
      this.attribute = i, this.property = r;
    }
  }
  wt.prototype.attribute = "";
  wt.prototype.booleanish = false;
  wt.prototype.boolean = false;
  wt.prototype.commaOrSpaceSeparated = false;
  wt.prototype.commaSeparated = false;
  wt.prototype.defined = false;
  wt.prototype.mustUseProperty = false;
  wt.prototype.number = false;
  wt.prototype.overloadedBoolean = false;
  wt.prototype.property = "";
  wt.prototype.spaceSeparated = false;
  wt.prototype.space = void 0;
  let T0 = 0;
  const Se = nr(), Ke = nr(), Du = nr(), Y = nr(), Ae = nr(), Ar = nr(), Ct = nr();
  function nr() {
    return 2 ** ++T0;
  }
  const Ou = Object.freeze(Object.defineProperty({
    __proto__: null,
    boolean: Se,
    booleanish: Ke,
    commaOrSpaceSeparated: Ct,
    commaSeparated: Ar,
    number: Y,
    overloadedBoolean: Du,
    spaceSeparated: Ae
  }, Symbol.toStringTag, {
    value: "Module"
  })), pu = Object.keys(Ou);
  class Qu extends wt {
    constructor(r, i, l, u) {
      let a = -1;
      if (super(r, i), Ed(this, "space", u), typeof l == "number") for (; ++a < pu.length; ) {
        const c = pu[a];
        Ed(this, pu[a], (l & Ou[c]) === Ou[c]);
      }
    }
  }
  Qu.prototype.defined = true;
  function Ed(n, r, i) {
    i && (n[r] = i);
  }
  function Mr(n) {
    const r = {}, i = {};
    for (const [l, u] of Object.entries(n.properties)) {
      const a = new Qu(l, n.transform(n.attributes || {}, l), u, n.space);
      n.mustUseProperty && n.mustUseProperty.includes(l) && (a.mustUseProperty = true), r[l] = a, i[Nu(l)] = l, i[Nu(a.attribute)] = l;
    }
    return new Fi(r, i, n.space);
  }
  const Zp = Mr({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Ke,
      ariaAutoComplete: null,
      ariaBusy: Ke,
      ariaChecked: Ke,
      ariaColCount: Y,
      ariaColIndex: Y,
      ariaColSpan: Y,
      ariaControls: Ae,
      ariaCurrent: null,
      ariaDescribedBy: Ae,
      ariaDetails: null,
      ariaDisabled: Ke,
      ariaDropEffect: Ae,
      ariaErrorMessage: null,
      ariaExpanded: Ke,
      ariaFlowTo: Ae,
      ariaGrabbed: Ke,
      ariaHasPopup: null,
      ariaHidden: Ke,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: Ae,
      ariaLevel: Y,
      ariaLive: null,
      ariaModal: Ke,
      ariaMultiLine: Ke,
      ariaMultiSelectable: Ke,
      ariaOrientation: null,
      ariaOwns: Ae,
      ariaPlaceholder: null,
      ariaPosInSet: Y,
      ariaPressed: Ke,
      ariaReadOnly: Ke,
      ariaRelevant: null,
      ariaRequired: Ke,
      ariaRoleDescription: Ae,
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
    transform(n, r) {
      return r === "role" ? r : "aria-" + r.slice(4).toLowerCase();
    }
  });
  function eh(n, r) {
    return r in n ? n[r] : r;
  }
  function th(n, r) {
    return eh(n, r.toLowerCase());
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
      accept: Ar,
      acceptCharset: Ae,
      accessKey: Ae,
      action: null,
      allow: null,
      allowFullScreen: Se,
      allowPaymentRequest: Se,
      allowUserMedia: Se,
      alt: null,
      as: null,
      async: Se,
      autoCapitalize: null,
      autoComplete: Ae,
      autoFocus: Se,
      autoPlay: Se,
      blocking: Ae,
      capture: null,
      charSet: null,
      checked: Se,
      cite: null,
      className: Ae,
      cols: Y,
      colSpan: null,
      content: null,
      contentEditable: Ke,
      controls: Se,
      controlsList: Ae,
      coords: Y | Ar,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Se,
      defer: Se,
      dir: null,
      dirName: null,
      disabled: Se,
      download: Du,
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
      headers: Ae,
      height: Y,
      hidden: Du,
      high: Y,
      href: null,
      hrefLang: null,
      htmlFor: Ae,
      httpEquiv: Ae,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: Se,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Se,
      itemId: null,
      itemProp: Ae,
      itemRef: Ae,
      itemScope: Se,
      itemType: Ae,
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
      ping: Ae,
      placeholder: null,
      playsInline: Se,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: Se,
      referrerPolicy: null,
      rel: Ae,
      required: Se,
      reversed: Se,
      rows: Y,
      rowSpan: Y,
      sandbox: Ae,
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
      archive: Ae,
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
    transform: th
  }), P0 = Mr({
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
      about: Ct,
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
      className: Ae,
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
      g1: Ar,
      g2: Ar,
      glyphName: Ar,
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
      kernelMatrix: Ct,
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
      ping: Ae,
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
      property: Ct,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Ct,
      rev: Ct,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Ct,
      requiredFeatures: Ct,
      requiredFonts: Ct,
      requiredFormats: Ct,
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
      strokeDashArray: Ct,
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
      systemLanguage: Ct,
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
      typeOf: Ct,
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
    transform: eh
  }), nh = Mr({
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
    transform(n, r) {
      return "xlink:" + r.slice(5).toLowerCase();
    }
  }), rh = Mr({
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    properties: {
      xmlnsXLink: null,
      xmlns: null
    },
    space: "xmlns",
    transform: th
  }), ih = Mr({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null
    },
    space: "xml",
    transform(n, r) {
      return "xml:" + r.slice(3).toLowerCase();
    }
  }), N0 = {
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
  }, D0 = /[A-Z]/g, Id = /-[a-z]/g, O0 = /^data[-\w.:]+$/i;
  function R0(n, r) {
    const i = Nu(r);
    let l = r, u = wt;
    if (i in n.normal) return n.property[n.normal[i]];
    if (i.length > 4 && i.slice(0, 4) === "data" && O0.test(r)) {
      if (r.charAt(4) === "-") {
        const a = r.slice(5).replace(Id, L0);
        l = "data" + a.charAt(0).toUpperCase() + a.slice(1);
      } else {
        const a = r.slice(4);
        if (!Id.test(a)) {
          let c = a.replace(D0, A0);
          c.charAt(0) !== "-" && (c = "-" + c), r = "data" + c;
        }
      }
      u = Qu;
    }
    return new u(l, r);
  }
  function A0(n) {
    return "-" + n.toLowerCase();
  }
  function L0(n) {
    return n.charAt(1).toUpperCase();
  }
  const z0 = Jp([
    Zp,
    _0,
    nh,
    rh,
    ih
  ], "html"), Gu = Jp([
    Zp,
    P0,
    nh,
    rh,
    ih
  ], "svg");
  function M0(n) {
    return n.join(" ").trim();
  }
  var Nr = {}, hu, Cd;
  function b0() {
    if (Cd) return hu;
    Cd = 1;
    var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, u = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, f = /^\s+|\s+$/g, h = `
`, m = "/", g = "*", y = "", v = "comment", w = "declaration";
    function I(N, T) {
      if (typeof N != "string") throw new TypeError("First argument must be a string");
      if (!N) return [];
      T = T || {};
      var b = 1, L = 1;
      function W(X) {
        var U = X.match(r);
        U && (b += U.length);
        var q = X.lastIndexOf(h);
        L = ~q ? X.length - q : L + X.length;
      }
      function Z() {
        var X = {
          line: b,
          column: L
        };
        return function(U) {
          return U.position = new A(X), le(), U;
        };
      }
      function A(X) {
        this.start = X, this.end = {
          line: b,
          column: L
        }, this.source = T.source;
      }
      A.prototype.content = N;
      function ee(X) {
        var U = new Error(T.source + ":" + b + ":" + L + ": " + X);
        if (U.reason = X, U.filename = T.source, U.line = b, U.column = L, U.source = N, !T.silent) throw U;
      }
      function ne(X) {
        var U = X.exec(N);
        if (U) {
          var q = U[0];
          return W(q), N = N.slice(q.length), U;
        }
      }
      function le() {
        ne(i);
      }
      function he(X) {
        var U;
        for (X = X || []; U = Q(); ) U !== false && X.push(U);
        return X;
      }
      function Q() {
        var X = Z();
        if (!(m != N.charAt(0) || g != N.charAt(1))) {
          for (var U = 2; y != N.charAt(U) && (g != N.charAt(U) || m != N.charAt(U + 1)); ) ++U;
          if (U += 2, y === N.charAt(U - 1)) return ee("End of comment missing");
          var q = N.slice(2, U - 2);
          return L += 2, W(q), N = N.slice(U), L += 2, X({
            type: v,
            comment: q
          });
        }
      }
      function B() {
        var X = Z(), U = ne(l);
        if (U) {
          if (Q(), !ne(u)) return ee("property missing ':'");
          var q = ne(a), te = X({
            type: w,
            property: D(U[0].replace(n, y)),
            value: q ? D(q[0].replace(n, y)) : y
          });
          return ne(c), te;
        }
      }
      function ue() {
        var X = [];
        he(X);
        for (var U; U = B(); ) U !== false && (X.push(U), he(X));
        return X;
      }
      return le(), ue();
    }
    function D(N) {
      return N ? N.replace(f, y) : y;
    }
    return hu = I, hu;
  }
  var Td;
  function F0() {
    if (Td) return Nr;
    Td = 1;
    var n = Nr && Nr.__importDefault || function(l) {
      return l && l.__esModule ? l : {
        default: l
      };
    };
    Object.defineProperty(Nr, "__esModule", {
      value: true
    }), Nr.default = i;
    const r = n(b0());
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
    return Nr;
  }
  var Ci = {}, _d;
  function B0() {
    if (_d) return Ci;
    _d = 1, Object.defineProperty(Ci, "__esModule", {
      value: true
    }), Ci.camelCase = void 0;
    var n = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, i = /^[^-]+$/, l = /^-(webkit|moz|ms|o|khtml)-/, u = /^-(ms)-/, a = function(m) {
      return !m || i.test(m) || n.test(m);
    }, c = function(m, g) {
      return g.toUpperCase();
    }, f = function(m, g) {
      return "".concat(g, "-");
    }, h = function(m, g) {
      return g === void 0 && (g = {}), a(m) ? m : (m = m.toLowerCase(), g.reactCompat ? m = m.replace(u, f) : m = m.replace(l, f), m.replace(r, c));
    };
    return Ci.camelCase = h, Ci;
  }
  var Ti, Pd;
  function j0() {
    if (Pd) return Ti;
    Pd = 1;
    var n = Ti && Ti.__importDefault || function(u) {
      return u && u.__esModule ? u : {
        default: u
      };
    }, r = n(F0()), i = B0();
    function l(u, a) {
      var c = {};
      return !u || typeof u != "string" || (0, r.default)(u, function(f, h) {
        f && h && (c[(0, i.camelCase)(f, a)] = h);
      }), c;
    }
    return l.default = l, Ti = l, Ti;
  }
  var U0 = j0();
  const V0 = ul(U0), oh = lh("end"), Xu = lh("start");
  function lh(n) {
    return r;
    function r(i) {
      const l = i && i.position && i.position[n] || {};
      if (typeof l.line == "number" && l.line > 0 && typeof l.column == "number" && l.column > 0) return {
        line: l.line,
        column: l.column,
        offset: typeof l.offset == "number" && l.offset > -1 ? l.offset : void 0
      };
    }
  }
  function H0(n) {
    const r = Xu(n), i = oh(n);
    if (r && i) return {
      start: r,
      end: i
    };
  }
  function Oi(n) {
    return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? Nd(n.position) : "start" in n || "end" in n ? Nd(n) : "line" in n || "column" in n ? Ru(n) : "";
  }
  function Ru(n) {
    return Dd(n && n.line) + ":" + Dd(n && n.column);
  }
  function Nd(n) {
    return Ru(n && n.start) + "-" + Ru(n && n.end);
  }
  function Dd(n) {
    return n && typeof n == "number" ? n : 1;
  }
  class ut extends Error {
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
      this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = f ? f.column : void 0, this.fatal = void 0, this.file = "", this.message = u, this.line = f ? f.line : void 0, this.name = Oi(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = c && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
    }
  }
  ut.prototype.file = "";
  ut.prototype.name = "";
  ut.prototype.reason = "";
  ut.prototype.message = "";
  ut.prototype.stack = "";
  ut.prototype.column = void 0;
  ut.prototype.line = void 0;
  ut.prototype.ancestors = void 0;
  ut.prototype.cause = void 0;
  ut.prototype.fatal = void 0;
  ut.prototype.place = void 0;
  ut.prototype.ruleId = void 0;
  ut.prototype.source = void 0;
  const Ju = {}.hasOwnProperty, W0 = /* @__PURE__ */ new Map(), $0 = /[A-Z]/g, Y0 = /* @__PURE__ */ new Set([
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr"
  ]), q0 = /* @__PURE__ */ new Set([
    "td",
    "th"
  ]), sh = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function K0(n, r) {
    if (!r || r.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const i = r.filePath || void 0;
    let l;
    if (r.development) {
      if (typeof r.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
      l = nv(i, r.jsxDEV);
    } else {
      if (typeof r.jsx != "function") throw new TypeError("Expected `jsx` in production options");
      if (typeof r.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
      l = tv(i, r.jsx, r.jsxs);
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
      schema: r.space === "svg" ? Gu : z0,
      stylePropertyNameCase: r.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: r.tableCellAlignToStyle !== false
    }, a = uh(u, n, void 0);
    return a && typeof a != "string" ? a : u.create(n, u.Fragment, {
      children: a || void 0
    }, void 0);
  }
  function uh(n, r, i) {
    if (r.type === "element") return Q0(n, r, i);
    if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression") return G0(n, r);
    if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement") return J0(n, r, i);
    if (r.type === "mdxjsEsm") return X0(n, r);
    if (r.type === "root") return Z0(n, r, i);
    if (r.type === "text") return ev(n, r);
  }
  function Q0(n, r, i) {
    const l = n.schema;
    let u = l;
    r.tagName.toLowerCase() === "svg" && l.space === "html" && (u = Gu, n.schema = u), n.ancestors.push(r);
    const a = ch(n, r.tagName, false), c = rv(n, r);
    let f = ea(n, r);
    return Y0.has(r.tagName) && (f = f.filter(function(h) {
      return typeof h == "string" ? !C0(h) : true;
    })), ah(n, c, a, r), Zu(c, f), n.ancestors.pop(), n.schema = l, n.create(r, a, c, i);
  }
  function G0(n, r) {
    if (r.data && r.data.estree && n.evaluater) {
      const l = r.data.estree.body[0];
      return l.type, n.evaluater.evaluateExpression(l.expression);
    }
    Li(n, r.position);
  }
  function X0(n, r) {
    if (r.data && r.data.estree && n.evaluater) return n.evaluater.evaluateProgram(r.data.estree);
    Li(n, r.position);
  }
  function J0(n, r, i) {
    const l = n.schema;
    let u = l;
    r.name === "svg" && l.space === "html" && (u = Gu, n.schema = u), n.ancestors.push(r);
    const a = r.name === null ? n.Fragment : ch(n, r.name, true), c = iv(n, r), f = ea(n, r);
    return ah(n, c, a, r), Zu(c, f), n.ancestors.pop(), n.schema = l, n.create(r, a, c, i);
  }
  function Z0(n, r, i) {
    const l = {};
    return Zu(l, ea(n, r)), n.create(r, n.Fragment, l, i);
  }
  function ev(n, r) {
    return r.value;
  }
  function ah(n, r, i, l) {
    typeof i != "string" && i !== n.Fragment && n.passNode && (r.node = l);
  }
  function Zu(n, r) {
    if (r.length > 0) {
      const i = r.length > 1 ? r : r[0];
      i && (n.children = i);
    }
  }
  function tv(n, r, i) {
    return l;
    function l(u, a, c, f) {
      const m = Array.isArray(c.children) ? i : r;
      return f ? m(a, c, f) : m(a, c);
    }
  }
  function nv(n, r) {
    return i;
    function i(l, u, a, c) {
      const f = Array.isArray(a.children), h = Xu(l);
      return r(u, a, c, f, {
        columnNumber: h ? h.column - 1 : void 0,
        fileName: n,
        lineNumber: h ? h.line : void 0
      }, void 0);
    }
  }
  function rv(n, r) {
    const i = {};
    let l, u;
    for (u in r.properties) if (u !== "children" && Ju.call(r.properties, u)) {
      const a = ov(n, u, r.properties[u]);
      if (a) {
        const [c, f] = a;
        n.tableCellAlignToStyle && c === "align" && typeof f == "string" && q0.has(r.tagName) ? l = f : i[c] = f;
      }
    }
    if (l) {
      const a = i.style || (i.style = {});
      a[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = l;
    }
    return i;
  }
  function iv(n, r) {
    const i = {};
    for (const l of r.attributes) if (l.type === "mdxJsxExpressionAttribute") if (l.data && l.data.estree && n.evaluater) {
      const a = l.data.estree.body[0];
      a.type;
      const c = a.expression;
      c.type;
      const f = c.properties[0];
      f.type, Object.assign(i, n.evaluater.evaluateExpression(f.argument));
    } else Li(n, r.position);
    else {
      const u = l.name;
      let a;
      if (l.value && typeof l.value == "object") if (l.value.data && l.value.data.estree && n.evaluater) {
        const f = l.value.data.estree.body[0];
        f.type, a = n.evaluater.evaluateExpression(f.expression);
      } else Li(n, r.position);
      else a = l.value === null ? true : l.value;
      i[u] = a;
    }
    return i;
  }
  function ea(n, r) {
    const i = [];
    let l = -1;
    const u = n.passKeys ? /* @__PURE__ */ new Map() : W0;
    for (; ++l < r.children.length; ) {
      const a = r.children[l];
      let c;
      if (n.passKeys) {
        const h = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
        if (h) {
          const m = u.get(h) || 0;
          c = h + "-" + m, u.set(h, m + 1);
        }
      }
      const f = uh(n, a, c);
      f !== void 0 && i.push(f);
    }
    return i;
  }
  function ov(n, r, i) {
    const l = R0(n.schema, r);
    if (!(i == null || typeof i == "number" && Number.isNaN(i))) {
      if (Array.isArray(i) && (i = l.commaSeparated ? x0(i) : M0(i)), l.property === "style") {
        let u = typeof i == "object" ? i : lv(n, String(i));
        return n.stylePropertyNameCase === "css" && (u = sv(u)), [
          "style",
          u
        ];
      }
      return [
        n.elementAttributeNameCase === "react" && l.space ? N0[l.property] || l.property : l.attribute,
        i
      ];
    }
  }
  function lv(n, r) {
    try {
      return V0(r, {
        reactCompat: true
      });
    } catch (i) {
      if (n.ignoreInvalidStyle) return {};
      const l = i, u = new ut("Cannot parse `style` attribute", {
        ancestors: n.ancestors,
        cause: l,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw u.file = n.filePath || void 0, u.url = sh + "#cannot-parse-style-attribute", u;
    }
  }
  function ch(n, r, i) {
    let l;
    if (!i) l = {
      type: "Literal",
      value: r
    };
    else if (r.includes(".")) {
      const u = r.split(".");
      let a = -1, c;
      for (; ++a < u.length; ) {
        const f = kd(u[a]) ? {
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
    } else l = kd(r) && !/^[a-z]/.test(r) ? {
      type: "Identifier",
      name: r
    } : {
      type: "Literal",
      value: r
    };
    if (l.type === "Literal") {
      const u = l.value;
      return Ju.call(n.components, u) ? n.components[u] : u;
    }
    if (n.evaluater) return n.evaluater.evaluateExpression(l);
    Li(n);
  }
  function Li(n, r) {
    const i = new ut("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: n.ancestors,
      place: r,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = n.filePath || void 0, i.url = sh + "#cannot-handle-mdx-estrees-without-createevaluater", i;
  }
  function sv(n) {
    const r = {};
    let i;
    for (i in n) Ju.call(n, i) && (r[uv(i)] = n[i]);
    return r;
  }
  function uv(n) {
    let r = n.replace($0, av);
    return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
  }
  function av(n) {
    return "-" + n.toLowerCase();
  }
  const mu = {
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
  }, cv = {};
  function fv(n, r) {
    const i = cv, l = typeof i.includeImageAlt == "boolean" ? i.includeImageAlt : true, u = typeof i.includeHtml == "boolean" ? i.includeHtml : true;
    return fh(n, l, u);
  }
  function fh(n, r, i) {
    if (dv(n)) {
      if ("value" in n) return n.type === "html" && !i ? "" : n.value;
      if (r && "alt" in n && n.alt) return n.alt;
      if ("children" in n) return Od(n.children, r, i);
    }
    return Array.isArray(n) ? Od(n, r, i) : "";
  }
  function Od(n, r, i) {
    const l = [];
    let u = -1;
    for (; ++u < n.length; ) l[u] = fh(n[u], r, i);
    return l.join("");
  }
  function dv(n) {
    return !!(n && typeof n == "object");
  }
  const Rd = document.createElement("i");
  function ta(n) {
    const r = "&" + n + ";";
    Rd.innerHTML = r;
    const i = Rd.textContent;
    return i.charCodeAt(i.length - 1) === 59 && n !== "semi" || i === r ? false : i;
  }
  function nn(n, r, i, l) {
    const u = n.length;
    let a = 0, c;
    if (r < 0 ? r = -r > u ? 0 : u + r : r = r > u ? u : r, i = i > 0 ? i : 0, l.length < 1e4) c = Array.from(l), c.unshift(r, i), n.splice(...c);
    else for (i && n.splice(r, i); a < l.length; ) c = l.slice(a, a + 1e4), c.unshift(r, 0), n.splice(...c), a += 1e4, r += 1e4;
  }
  function Ft(n, r) {
    return n.length > 0 ? (nn(n, n.length, 0, r), n) : r;
  }
  const Ad = {}.hasOwnProperty;
  function pv(n) {
    const r = {};
    let i = -1;
    for (; ++i < n.length; ) hv(r, n[i]);
    return r;
  }
  function hv(n, r) {
    let i;
    for (i in r) {
      const u = (Ad.call(n, i) ? n[i] : void 0) || (n[i] = {}), a = r[i];
      let c;
      if (a) for (c in a) {
        Ad.call(u, c) || (u[c] = []);
        const f = a[c];
        mv(u[c], Array.isArray(f) ? f : f ? [
          f
        ] : []);
      }
    }
  }
  function mv(n, r) {
    let i = -1;
    const l = [];
    for (; ++i < r.length; ) (r[i].add === "after" ? n : l).push(r[i]);
    nn(n, 0, 0, l);
  }
  function dh(n, r) {
    const i = Number.parseInt(n, r);
    return i < 9 || i === 11 || i > 13 && i < 32 || i > 126 && i < 160 || i > 55295 && i < 57344 || i > 64975 && i < 65008 || (i & 65535) === 65535 || (i & 65535) === 65534 || i > 1114111 ? "\uFFFD" : String.fromCodePoint(i);
  }
  function Lr(n) {
    return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }
  const tn = jn(/[A-Za-z]/), Nt = jn(/[\dA-Za-z]/), gv = jn(/[#-'*+\--9=?A-Z^-~]/);
  function Au(n) {
    return n !== null && (n < 32 || n === 127);
  }
  const Lu = jn(/\d/), yv = jn(/[\dA-Fa-f]/), vv = jn(/[!-/:-@[-`{-~]/);
  function xe(n) {
    return n !== null && n < -2;
  }
  function vt(n) {
    return n !== null && (n < 0 || n === 32);
  }
  function De(n) {
    return n === -2 || n === -1 || n === 32;
  }
  const wv = jn(new RegExp("\\p{P}|\\p{S}", "u")), xv = jn(/\s/);
  function jn(n) {
    return r;
    function r(i) {
      return i !== null && i > -1 && n.test(String.fromCharCode(i));
    }
  }
  function br(n) {
    const r = [];
    let i = -1, l = 0, u = 0;
    for (; ++i < n.length; ) {
      const a = n.charCodeAt(i);
      let c = "";
      if (a === 37 && Nt(n.charCodeAt(i + 1)) && Nt(n.charCodeAt(i + 2))) u = 2;
      else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (c = String.fromCharCode(a));
      else if (a > 55295 && a < 57344) {
        const f = n.charCodeAt(i + 1);
        a < 56320 && f > 56319 && f < 57344 ? (c = String.fromCharCode(a, f), u = 1) : c = "\uFFFD";
      } else c = String.fromCharCode(a);
      c && (r.push(n.slice(l, i), encodeURIComponent(c)), l = i + u + 1, c = ""), u && (i += u, u = 0);
    }
    return r.join("") + n.slice(l);
  }
  function Le(n, r, i, l) {
    const u = l ? l - 1 : Number.POSITIVE_INFINITY;
    let a = 0;
    return c;
    function c(h) {
      return De(h) ? (n.enter(i), f(h)) : r(h);
    }
    function f(h) {
      return De(h) && a++ < u ? (n.consume(h), f) : (n.exit(i), r(h));
    }
  }
  const kv = {
    tokenize: Sv
  };
  function Sv(n) {
    const r = n.attempt(this.parser.constructs.contentInitial, l, u);
    let i;
    return r;
    function l(f) {
      if (f === null) {
        n.consume(f);
        return;
      }
      return n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), Le(n, r, "linePrefix");
    }
    function u(f) {
      return n.enter("paragraph"), a(f);
    }
    function a(f) {
      const h = n.enter("chunkText", {
        contentType: "text",
        previous: i
      });
      return i && (i.next = h), i = h, c(f);
    }
    function c(f) {
      if (f === null) {
        n.exit("chunkText"), n.exit("paragraph"), n.consume(f);
        return;
      }
      return xe(f) ? (n.consume(f), n.exit("chunkText"), a) : (n.consume(f), c);
    }
  }
  const Ev = {
    tokenize: Iv
  }, Ld = {
    tokenize: Cv
  };
  function Iv(n) {
    const r = this, i = [];
    let l = 0, u, a, c;
    return f;
    function f(L) {
      if (l < i.length) {
        const W = i[l];
        return r.containerState = W[1], n.attempt(W[0].continuation, h, m)(L);
      }
      return m(L);
    }
    function h(L) {
      if (l++, r.containerState._closeFlow) {
        r.containerState._closeFlow = void 0, u && b();
        const W = r.events.length;
        let Z = W, A;
        for (; Z--; ) if (r.events[Z][0] === "exit" && r.events[Z][1].type === "chunkFlow") {
          A = r.events[Z][1].end;
          break;
        }
        T(l);
        let ee = W;
        for (; ee < r.events.length; ) r.events[ee][1].end = {
          ...A
        }, ee++;
        return nn(r.events, Z + 1, 0, r.events.slice(W)), r.events.length = ee, m(L);
      }
      return f(L);
    }
    function m(L) {
      if (l === i.length) {
        if (!u) return v(L);
        if (u.currentConstruct && u.currentConstruct.concrete) return I(L);
        r.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
      }
      return r.containerState = {}, n.check(Ld, g, y)(L);
    }
    function g(L) {
      return u && b(), T(l), v(L);
    }
    function y(L) {
      return r.parser.lazy[r.now().line] = l !== i.length, c = r.now().offset, I(L);
    }
    function v(L) {
      return r.containerState = {}, n.attempt(Ld, w, I)(L);
    }
    function w(L) {
      return l++, i.push([
        r.currentConstruct,
        r.containerState
      ]), v(L);
    }
    function I(L) {
      if (L === null) {
        u && b(), T(0), n.consume(L);
        return;
      }
      return u = u || r.parser.flow(r.now()), n.enter("chunkFlow", {
        _tokenizer: u,
        contentType: "flow",
        previous: a
      }), D(L);
    }
    function D(L) {
      if (L === null) {
        N(n.exit("chunkFlow"), true), T(0), n.consume(L);
        return;
      }
      return xe(L) ? (n.consume(L), N(n.exit("chunkFlow")), l = 0, r.interrupt = void 0, f) : (n.consume(L), D);
    }
    function N(L, W) {
      const Z = r.sliceStream(L);
      if (W && Z.push(null), L.previous = a, a && (a.next = L), a = L, u.defineSkip(L.start), u.write(Z), r.parser.lazy[L.start.line]) {
        let A = u.events.length;
        for (; A--; ) if (u.events[A][1].start.offset < c && (!u.events[A][1].end || u.events[A][1].end.offset > c)) return;
        const ee = r.events.length;
        let ne = ee, le, he;
        for (; ne--; ) if (r.events[ne][0] === "exit" && r.events[ne][1].type === "chunkFlow") {
          if (le) {
            he = r.events[ne][1].end;
            break;
          }
          le = true;
        }
        for (T(l), A = ee; A < r.events.length; ) r.events[A][1].end = {
          ...he
        }, A++;
        nn(r.events, ne + 1, 0, r.events.slice(ee)), r.events.length = A;
      }
    }
    function T(L) {
      let W = i.length;
      for (; W-- > L; ) {
        const Z = i[W];
        r.containerState = Z[1], Z[0].exit.call(r, n);
      }
      i.length = L;
    }
    function b() {
      u.write([
        null
      ]), a = void 0, u = void 0, r.containerState._closeFlow = void 0;
    }
  }
  function Cv(n, r, i) {
    return Le(n, n.attempt(this.parser.constructs.document, r, i), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function zd(n) {
    if (n === null || vt(n) || xv(n)) return 1;
    if (wv(n)) return 2;
  }
  function na(n, r, i) {
    const l = [];
    let u = -1;
    for (; ++u < n.length; ) {
      const a = n[u].resolveAll;
      a && !l.includes(a) && (r = a(r, i), l.push(a));
    }
    return r;
  }
  const zu = {
    name: "attention",
    resolveAll: Tv,
    tokenize: _v
  };
  function Tv(n, r) {
    let i = -1, l, u, a, c, f, h, m, g;
    for (; ++i < n.length; ) if (n[i][0] === "enter" && n[i][1].type === "attentionSequence" && n[i][1]._close) {
      for (l = i; l--; ) if (n[l][0] === "exit" && n[l][1].type === "attentionSequence" && n[l][1]._open && r.sliceSerialize(n[l][1]).charCodeAt(0) === r.sliceSerialize(n[i][1]).charCodeAt(0)) {
        if ((n[l][1]._close || n[i][1]._open) && (n[i][1].end.offset - n[i][1].start.offset) % 3 && !((n[l][1].end.offset - n[l][1].start.offset + n[i][1].end.offset - n[i][1].start.offset) % 3)) continue;
        h = n[l][1].end.offset - n[l][1].start.offset > 1 && n[i][1].end.offset - n[i][1].start.offset > 1 ? 2 : 1;
        const y = {
          ...n[l][1].end
        }, v = {
          ...n[i][1].start
        };
        Md(y, -h), Md(v, h), c = {
          type: h > 1 ? "strongSequence" : "emphasisSequence",
          start: y,
          end: {
            ...n[l][1].end
          }
        }, f = {
          type: h > 1 ? "strongSequence" : "emphasisSequence",
          start: {
            ...n[i][1].start
          },
          end: v
        }, a = {
          type: h > 1 ? "strongText" : "emphasisText",
          start: {
            ...n[l][1].end
          },
          end: {
            ...n[i][1].start
          }
        }, u = {
          type: h > 1 ? "strong" : "emphasis",
          start: {
            ...c.start
          },
          end: {
            ...f.end
          }
        }, n[l][1].end = {
          ...c.start
        }, n[i][1].start = {
          ...f.end
        }, m = [], n[l][1].end.offset - n[l][1].start.offset && (m = Ft(m, [
          [
            "enter",
            n[l][1],
            r
          ],
          [
            "exit",
            n[l][1],
            r
          ]
        ])), m = Ft(m, [
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
        ]), m = Ft(m, na(r.parser.constructs.insideSpan.null, n.slice(l + 1, i), r)), m = Ft(m, [
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
        ]), n[i][1].end.offset - n[i][1].start.offset ? (g = 2, m = Ft(m, [
          [
            "enter",
            n[i][1],
            r
          ],
          [
            "exit",
            n[i][1],
            r
          ]
        ])) : g = 0, nn(n, l - 1, i - l + 3, m), i = l + m.length - g - 2;
        break;
      }
    }
    for (i = -1; ++i < n.length; ) n[i][1].type === "attentionSequence" && (n[i][1].type = "data");
    return n;
  }
  function _v(n, r) {
    const i = this.parser.constructs.attentionMarkers.null, l = this.previous, u = zd(l);
    let a;
    return c;
    function c(h) {
      return a = h, n.enter("attentionSequence"), f(h);
    }
    function f(h) {
      if (h === a) return n.consume(h), f;
      const m = n.exit("attentionSequence"), g = zd(h), y = !g || g === 2 && u || i.includes(h), v = !u || u === 2 && g || i.includes(l);
      return m._open = !!(a === 42 ? y : y && (u || !v)), m._close = !!(a === 42 ? v : v && (g || !y)), r(h);
    }
  }
  function Md(n, r) {
    n.column += r, n.offset += r, n._bufferIndex += r;
  }
  const Pv = {
    name: "autolink",
    tokenize: Nv
  };
  function Nv(n, r, i) {
    let l = 0;
    return u;
    function u(w) {
      return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(w), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), a;
    }
    function a(w) {
      return tn(w) ? (n.consume(w), c) : w === 64 ? i(w) : m(w);
    }
    function c(w) {
      return w === 43 || w === 45 || w === 46 || Nt(w) ? (l = 1, f(w)) : m(w);
    }
    function f(w) {
      return w === 58 ? (n.consume(w), l = 0, h) : (w === 43 || w === 45 || w === 46 || Nt(w)) && l++ < 32 ? (n.consume(w), f) : (l = 0, m(w));
    }
    function h(w) {
      return w === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(w), n.exit("autolinkMarker"), n.exit("autolink"), r) : w === null || w === 32 || w === 60 || Au(w) ? i(w) : (n.consume(w), h);
    }
    function m(w) {
      return w === 64 ? (n.consume(w), g) : gv(w) ? (n.consume(w), m) : i(w);
    }
    function g(w) {
      return Nt(w) ? y(w) : i(w);
    }
    function y(w) {
      return w === 46 ? (n.consume(w), l = 0, g) : w === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(w), n.exit("autolinkMarker"), n.exit("autolink"), r) : v(w);
    }
    function v(w) {
      if ((w === 45 || Nt(w)) && l++ < 63) {
        const I = w === 45 ? v : y;
        return n.consume(w), I;
      }
      return i(w);
    }
  }
  const ml = {
    partial: true,
    tokenize: Dv
  };
  function Dv(n, r, i) {
    return l;
    function l(a) {
      return De(a) ? Le(n, u, "linePrefix")(a) : u(a);
    }
    function u(a) {
      return a === null || xe(a) ? r(a) : i(a);
    }
  }
  const ph = {
    continuation: {
      tokenize: Rv
    },
    exit: Av,
    name: "blockQuote",
    tokenize: Ov
  };
  function Ov(n, r, i) {
    const l = this;
    return u;
    function u(c) {
      if (c === 62) {
        const f = l.containerState;
        return f.open || (n.enter("blockQuote", {
          _container: true
        }), f.open = true), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(c), n.exit("blockQuoteMarker"), a;
      }
      return i(c);
    }
    function a(c) {
      return De(c) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(c), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), r) : (n.exit("blockQuotePrefix"), r(c));
    }
  }
  function Rv(n, r, i) {
    const l = this;
    return u;
    function u(c) {
      return De(c) ? Le(n, a, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(c) : a(c);
    }
    function a(c) {
      return n.attempt(ph, r, i)(c);
    }
  }
  function Av(n) {
    n.exit("blockQuote");
  }
  const hh = {
    name: "characterEscape",
    tokenize: Lv
  };
  function Lv(n, r, i) {
    return l;
    function l(a) {
      return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(a), n.exit("escapeMarker"), u;
    }
    function u(a) {
      return vv(a) ? (n.enter("characterEscapeValue"), n.consume(a), n.exit("characterEscapeValue"), n.exit("characterEscape"), r) : i(a);
    }
  }
  const mh = {
    name: "characterReference",
    tokenize: zv
  };
  function zv(n, r, i) {
    const l = this;
    let u = 0, a, c;
    return f;
    function f(y) {
      return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), h;
    }
    function h(y) {
      return y === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(y), n.exit("characterReferenceMarkerNumeric"), m) : (n.enter("characterReferenceValue"), a = 31, c = Nt, g(y));
    }
    function m(y) {
      return y === 88 || y === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(y), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), a = 6, c = yv, g) : (n.enter("characterReferenceValue"), a = 7, c = Lu, g(y));
    }
    function g(y) {
      if (y === 59 && u) {
        const v = n.exit("characterReferenceValue");
        return c === Nt && !ta(l.sliceSerialize(v)) ? i(y) : (n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), n.exit("characterReference"), r);
      }
      return c(y) && u++ < a ? (n.consume(y), g) : i(y);
    }
  }
  const bd = {
    partial: true,
    tokenize: bv
  }, Fd = {
    concrete: true,
    name: "codeFenced",
    tokenize: Mv
  };
  function Mv(n, r, i) {
    const l = this, u = {
      partial: true,
      tokenize: Z
    };
    let a = 0, c = 0, f;
    return h;
    function h(A) {
      return m(A);
    }
    function m(A) {
      const ee = l.events[l.events.length - 1];
      return a = ee && ee[1].type === "linePrefix" ? ee[2].sliceSerialize(ee[1], true).length : 0, f = A, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), g(A);
    }
    function g(A) {
      return A === f ? (c++, n.consume(A), g) : c < 3 ? i(A) : (n.exit("codeFencedFenceSequence"), De(A) ? Le(n, y, "whitespace")(A) : y(A));
    }
    function y(A) {
      return A === null || xe(A) ? (n.exit("codeFencedFence"), l.interrupt ? r(A) : n.check(bd, D, W)(A)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
        contentType: "string"
      }), v(A));
    }
    function v(A) {
      return A === null || xe(A) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), y(A)) : De(A) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), Le(n, w, "whitespace")(A)) : A === 96 && A === f ? i(A) : (n.consume(A), v);
    }
    function w(A) {
      return A === null || xe(A) ? y(A) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
        contentType: "string"
      }), I(A));
    }
    function I(A) {
      return A === null || xe(A) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), y(A)) : A === 96 && A === f ? i(A) : (n.consume(A), I);
    }
    function D(A) {
      return n.attempt(u, W, N)(A);
    }
    function N(A) {
      return n.enter("lineEnding"), n.consume(A), n.exit("lineEnding"), T;
    }
    function T(A) {
      return a > 0 && De(A) ? Le(n, b, "linePrefix", a + 1)(A) : b(A);
    }
    function b(A) {
      return A === null || xe(A) ? n.check(bd, D, W)(A) : (n.enter("codeFlowValue"), L(A));
    }
    function L(A) {
      return A === null || xe(A) ? (n.exit("codeFlowValue"), b(A)) : (n.consume(A), L);
    }
    function W(A) {
      return n.exit("codeFenced"), r(A);
    }
    function Z(A, ee, ne) {
      let le = 0;
      return he;
      function he(U) {
        return A.enter("lineEnding"), A.consume(U), A.exit("lineEnding"), Q;
      }
      function Q(U) {
        return A.enter("codeFencedFence"), De(U) ? Le(A, B, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(U) : B(U);
      }
      function B(U) {
        return U === f ? (A.enter("codeFencedFenceSequence"), ue(U)) : ne(U);
      }
      function ue(U) {
        return U === f ? (le++, A.consume(U), ue) : le >= c ? (A.exit("codeFencedFenceSequence"), De(U) ? Le(A, X, "whitespace")(U) : X(U)) : ne(U);
      }
      function X(U) {
        return U === null || xe(U) ? (A.exit("codeFencedFence"), ee(U)) : ne(U);
      }
    }
  }
  function bv(n, r, i) {
    const l = this;
    return u;
    function u(c) {
      return c === null ? i(c) : (n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), a);
    }
    function a(c) {
      return l.parser.lazy[l.now().line] ? i(c) : r(c);
    }
  }
  const gu = {
    name: "codeIndented",
    tokenize: Bv
  }, Fv = {
    partial: true,
    tokenize: jv
  };
  function Bv(n, r, i) {
    const l = this;
    return u;
    function u(m) {
      return n.enter("codeIndented"), Le(n, a, "linePrefix", 5)(m);
    }
    function a(m) {
      const g = l.events[l.events.length - 1];
      return g && g[1].type === "linePrefix" && g[2].sliceSerialize(g[1], true).length >= 4 ? c(m) : i(m);
    }
    function c(m) {
      return m === null ? h(m) : xe(m) ? n.attempt(Fv, c, h)(m) : (n.enter("codeFlowValue"), f(m));
    }
    function f(m) {
      return m === null || xe(m) ? (n.exit("codeFlowValue"), c(m)) : (n.consume(m), f);
    }
    function h(m) {
      return n.exit("codeIndented"), r(m);
    }
  }
  function jv(n, r, i) {
    const l = this;
    return u;
    function u(c) {
      return l.parser.lazy[l.now().line] ? i(c) : xe(c) ? (n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), u) : Le(n, a, "linePrefix", 5)(c);
    }
    function a(c) {
      const f = l.events[l.events.length - 1];
      return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], true).length >= 4 ? r(c) : xe(c) ? u(c) : i(c);
    }
  }
  const Uv = {
    name: "codeText",
    previous: Hv,
    resolve: Vv,
    tokenize: Wv
  };
  function Vv(n) {
    let r = n.length - 4, i = 3, l, u;
    if ((n[i][1].type === "lineEnding" || n[i][1].type === "space") && (n[r][1].type === "lineEnding" || n[r][1].type === "space")) {
      for (l = i; ++l < r; ) if (n[l][1].type === "codeTextData") {
        n[i][1].type = "codeTextPadding", n[r][1].type = "codeTextPadding", i += 2, r -= 2;
        break;
      }
    }
    for (l = i - 1, r++; ++l <= r; ) u === void 0 ? l !== r && n[l][1].type !== "lineEnding" && (u = l) : (l === r || n[l][1].type === "lineEnding") && (n[u][1].type = "codeTextData", l !== u + 2 && (n[u][1].end = n[l - 1][1].end, n.splice(u + 2, l - u - 2), r -= l - u - 2, l = u + 2), u = void 0);
    return n;
  }
  function Hv(n) {
    return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function Wv(n, r, i) {
    let l = 0, u, a;
    return c;
    function c(y) {
      return n.enter("codeText"), n.enter("codeTextSequence"), f(y);
    }
    function f(y) {
      return y === 96 ? (n.consume(y), l++, f) : (n.exit("codeTextSequence"), h(y));
    }
    function h(y) {
      return y === null ? i(y) : y === 32 ? (n.enter("space"), n.consume(y), n.exit("space"), h) : y === 96 ? (a = n.enter("codeTextSequence"), u = 0, g(y)) : xe(y) ? (n.enter("lineEnding"), n.consume(y), n.exit("lineEnding"), h) : (n.enter("codeTextData"), m(y));
    }
    function m(y) {
      return y === null || y === 32 || y === 96 || xe(y) ? (n.exit("codeTextData"), h(y)) : (n.consume(y), m);
    }
    function g(y) {
      return y === 96 ? (n.consume(y), u++, g) : u === l ? (n.exit("codeTextSequence"), n.exit("codeText"), r(y)) : (a.type = "codeTextData", m(y));
    }
  }
  class $v {
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
  function _i(n, r) {
    let i = 0;
    if (r.length < 1e4) n.push(...r);
    else for (; i < r.length; ) n.push(...r.slice(i, i + 1e4)), i += 1e4;
  }
  function gh(n) {
    const r = {};
    let i = -1, l, u, a, c, f, h, m;
    const g = new $v(n);
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
    return nn(n, 0, Number.POSITIVE_INFINITY, g.slice(0)), !m;
  }
  function Yv(n, r) {
    const i = n.get(r)[1], l = n.get(r)[2];
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
      for (; n.get(++u)[1] !== w; ) ;
      a.push(u), w._tokenizer || (g = l.sliceStream(w), w.next || g.push(null), y && c.defineSkip(w.start), w._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = true), c.write(g), w._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = void 0)), y = w, w = w.next;
    }
    for (w = i; ++v < f.length; ) f[v][0] === "exit" && f[v - 1][0] === "enter" && f[v][1].type === f[v - 1][1].type && f[v][1].start.line !== f[v][1].end.line && (D = v + 1, N.push(D), w._tokenizer = void 0, w.previous = void 0, w = w.next);
    for (c.events = [], w ? (w._tokenizer = void 0, w.previous = void 0) : N.pop(), v = N.length; v--; ) {
      const T = f.slice(N[v], N[v + 1]), b = a.pop();
      h.push([
        b,
        b + T.length - 1
      ]), n.splice(b, 2, T);
    }
    for (h.reverse(), v = -1; ++v < h.length; ) m[I + h[v][0]] = I + h[v][1], I += h[v][1] - h[v][0] - 1;
    return m;
  }
  const qv = {
    resolve: Qv,
    tokenize: Gv
  }, Kv = {
    partial: true,
    tokenize: Xv
  };
  function Qv(n) {
    return gh(n), n;
  }
  function Gv(n, r) {
    let i;
    return l;
    function l(f) {
      return n.enter("content"), i = n.enter("chunkContent", {
        contentType: "content"
      }), u(f);
    }
    function u(f) {
      return f === null ? a(f) : xe(f) ? n.check(Kv, c, a)(f) : (n.consume(f), u);
    }
    function a(f) {
      return n.exit("chunkContent"), n.exit("content"), r(f);
    }
    function c(f) {
      return n.consume(f), n.exit("chunkContent"), i.next = n.enter("chunkContent", {
        contentType: "content",
        previous: i
      }), i = i.next, u;
    }
  }
  function Xv(n, r, i) {
    const l = this;
    return u;
    function u(c) {
      return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), Le(n, a, "linePrefix");
    }
    function a(c) {
      if (c === null || xe(c)) return i(c);
      const f = l.events[l.events.length - 1];
      return !l.parser.constructs.disable.null.includes("codeIndented") && f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], true).length >= 4 ? r(c) : n.interrupt(l.parser.constructs.flow, i, r)(c);
    }
  }
  function yh(n, r, i, l, u, a, c, f, h) {
    const m = h || Number.POSITIVE_INFINITY;
    let g = 0;
    return y;
    function y(T) {
      return T === 60 ? (n.enter(l), n.enter(u), n.enter(a), n.consume(T), n.exit(a), v) : T === null || T === 32 || T === 41 || Au(T) ? i(T) : (n.enter(l), n.enter(c), n.enter(f), n.enter("chunkString", {
        contentType: "string"
      }), D(T));
    }
    function v(T) {
      return T === 62 ? (n.enter(a), n.consume(T), n.exit(a), n.exit(u), n.exit(l), r) : (n.enter(f), n.enter("chunkString", {
        contentType: "string"
      }), w(T));
    }
    function w(T) {
      return T === 62 ? (n.exit("chunkString"), n.exit(f), v(T)) : T === null || T === 60 || xe(T) ? i(T) : (n.consume(T), T === 92 ? I : w);
    }
    function I(T) {
      return T === 60 || T === 62 || T === 92 ? (n.consume(T), w) : w(T);
    }
    function D(T) {
      return !g && (T === null || T === 41 || vt(T)) ? (n.exit("chunkString"), n.exit(f), n.exit(c), n.exit(l), r(T)) : g < m && T === 40 ? (n.consume(T), g++, D) : T === 41 ? (n.consume(T), g--, D) : T === null || T === 32 || T === 40 || Au(T) ? i(T) : (n.consume(T), T === 92 ? N : D);
    }
    function N(T) {
      return T === 40 || T === 41 || T === 92 ? (n.consume(T), D) : D(T);
    }
  }
  function vh(n, r, i, l, u, a) {
    const c = this;
    let f = 0, h;
    return m;
    function m(w) {
      return n.enter(l), n.enter(u), n.consume(w), n.exit(u), n.enter(a), g;
    }
    function g(w) {
      return f > 999 || w === null || w === 91 || w === 93 && !h || w === 94 && !f && "_hiddenFootnoteSupport" in c.parser.constructs ? i(w) : w === 93 ? (n.exit(a), n.enter(u), n.consume(w), n.exit(u), n.exit(l), r) : xe(w) ? (n.enter("lineEnding"), n.consume(w), n.exit("lineEnding"), g) : (n.enter("chunkString", {
        contentType: "string"
      }), y(w));
    }
    function y(w) {
      return w === null || w === 91 || w === 93 || xe(w) || f++ > 999 ? (n.exit("chunkString"), g(w)) : (n.consume(w), h || (h = !De(w)), w === 92 ? v : y);
    }
    function v(w) {
      return w === 91 || w === 92 || w === 93 ? (n.consume(w), f++, y) : y(w);
    }
  }
  function wh(n, r, i, l, u, a) {
    let c;
    return f;
    function f(v) {
      return v === 34 || v === 39 || v === 40 ? (n.enter(l), n.enter(u), n.consume(v), n.exit(u), c = v === 40 ? 41 : v, h) : i(v);
    }
    function h(v) {
      return v === c ? (n.enter(u), n.consume(v), n.exit(u), n.exit(l), r) : (n.enter(a), m(v));
    }
    function m(v) {
      return v === c ? (n.exit(a), h(c)) : v === null ? i(v) : xe(v) ? (n.enter("lineEnding"), n.consume(v), n.exit("lineEnding"), Le(n, m, "linePrefix")) : (n.enter("chunkString", {
        contentType: "string"
      }), g(v));
    }
    function g(v) {
      return v === c || v === null || xe(v) ? (n.exit("chunkString"), m(v)) : (n.consume(v), v === 92 ? y : g);
    }
    function y(v) {
      return v === c || v === 92 ? (n.consume(v), g) : g(v);
    }
  }
  function Ri(n, r) {
    let i;
    return l;
    function l(u) {
      return xe(u) ? (n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), i = true, l) : De(u) ? Le(n, l, i ? "linePrefix" : "lineSuffix")(u) : r(u);
    }
  }
  const Jv = {
    name: "definition",
    tokenize: e1
  }, Zv = {
    partial: true,
    tokenize: t1
  };
  function e1(n, r, i) {
    const l = this;
    let u;
    return a;
    function a(w) {
      return n.enter("definition"), c(w);
    }
    function c(w) {
      return vh.call(l, n, f, i, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(w);
    }
    function f(w) {
      return u = Lr(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)), w === 58 ? (n.enter("definitionMarker"), n.consume(w), n.exit("definitionMarker"), h) : i(w);
    }
    function h(w) {
      return vt(w) ? Ri(n, m)(w) : m(w);
    }
    function m(w) {
      return yh(n, g, i, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(w);
    }
    function g(w) {
      return n.attempt(Zv, y, y)(w);
    }
    function y(w) {
      return De(w) ? Le(n, v, "whitespace")(w) : v(w);
    }
    function v(w) {
      return w === null || xe(w) ? (n.exit("definition"), l.parser.defined.push(u), r(w)) : i(w);
    }
  }
  function t1(n, r, i) {
    return l;
    function l(f) {
      return vt(f) ? Ri(n, u)(f) : i(f);
    }
    function u(f) {
      return wh(n, a, i, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(f);
    }
    function a(f) {
      return De(f) ? Le(n, c, "whitespace")(f) : c(f);
    }
    function c(f) {
      return f === null || xe(f) ? r(f) : i(f);
    }
  }
  const n1 = {
    name: "hardBreakEscape",
    tokenize: r1
  };
  function r1(n, r, i) {
    return l;
    function l(a) {
      return n.enter("hardBreakEscape"), n.consume(a), u;
    }
    function u(a) {
      return xe(a) ? (n.exit("hardBreakEscape"), r(a)) : i(a);
    }
  }
  const i1 = {
    name: "headingAtx",
    resolve: o1,
    tokenize: l1
  };
  function o1(n, r) {
    let i = n.length - 2, l = 3, u, a;
    return n[l][1].type === "whitespace" && (l += 2), i - 2 > l && n[i][1].type === "whitespace" && (i -= 2), n[i][1].type === "atxHeadingSequence" && (l === i - 1 || i - 4 > l && n[i - 2][1].type === "whitespace") && (i -= l + 1 === i ? 2 : 4), i > l && (u = {
      type: "atxHeadingText",
      start: n[l][1].start,
      end: n[i][1].end
    }, a = {
      type: "chunkText",
      start: n[l][1].start,
      end: n[i][1].end,
      contentType: "text"
    }, nn(n, l, i - l + 1, [
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
    ])), n;
  }
  function l1(n, r, i) {
    let l = 0;
    return u;
    function u(g) {
      return n.enter("atxHeading"), a(g);
    }
    function a(g) {
      return n.enter("atxHeadingSequence"), c(g);
    }
    function c(g) {
      return g === 35 && l++ < 6 ? (n.consume(g), c) : g === null || vt(g) ? (n.exit("atxHeadingSequence"), f(g)) : i(g);
    }
    function f(g) {
      return g === 35 ? (n.enter("atxHeadingSequence"), h(g)) : g === null || xe(g) ? (n.exit("atxHeading"), r(g)) : De(g) ? Le(n, f, "whitespace")(g) : (n.enter("atxHeadingText"), m(g));
    }
    function h(g) {
      return g === 35 ? (n.consume(g), h) : (n.exit("atxHeadingSequence"), f(g));
    }
    function m(g) {
      return g === null || g === 35 || vt(g) ? (n.exit("atxHeadingText"), f(g)) : (n.consume(g), m);
    }
  }
  const s1 = [
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
  ], u1 = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: f1,
    tokenize: d1
  }, a1 = {
    partial: true,
    tokenize: h1
  }, c1 = {
    partial: true,
    tokenize: p1
  };
  function f1(n) {
    let r = n.length;
    for (; r-- && !(n[r][0] === "enter" && n[r][1].type === "htmlFlow"); ) ;
    return r > 1 && n[r - 2][1].type === "linePrefix" && (n[r][1].start = n[r - 2][1].start, n[r + 1][1].start = n[r - 2][1].start, n.splice(r - 2, 2)), n;
  }
  function d1(n, r, i) {
    const l = this;
    let u, a, c, f, h;
    return m;
    function m(S) {
      return g(S);
    }
    function g(S) {
      return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(S), y;
    }
    function y(S) {
      return S === 33 ? (n.consume(S), v) : S === 47 ? (n.consume(S), a = true, D) : S === 63 ? (n.consume(S), u = 3, l.interrupt ? r : k) : tn(S) ? (n.consume(S), c = String.fromCharCode(S), N) : i(S);
    }
    function v(S) {
      return S === 45 ? (n.consume(S), u = 2, w) : S === 91 ? (n.consume(S), u = 5, f = 0, I) : tn(S) ? (n.consume(S), u = 4, l.interrupt ? r : k) : i(S);
    }
    function w(S) {
      return S === 45 ? (n.consume(S), l.interrupt ? r : k) : i(S);
    }
    function I(S) {
      const oe = "CDATA[";
      return S === oe.charCodeAt(f++) ? (n.consume(S), f === oe.length ? l.interrupt ? r : B : I) : i(S);
    }
    function D(S) {
      return tn(S) ? (n.consume(S), c = String.fromCharCode(S), N) : i(S);
    }
    function N(S) {
      if (S === null || S === 47 || S === 62 || vt(S)) {
        const oe = S === 47, pe = c.toLowerCase();
        return !oe && !a && Bd.includes(pe) ? (u = 1, l.interrupt ? r(S) : B(S)) : s1.includes(c.toLowerCase()) ? (u = 6, oe ? (n.consume(S), T) : l.interrupt ? r(S) : B(S)) : (u = 7, l.interrupt && !l.parser.lazy[l.now().line] ? i(S) : a ? b(S) : L(S));
      }
      return S === 45 || Nt(S) ? (n.consume(S), c += String.fromCharCode(S), N) : i(S);
    }
    function T(S) {
      return S === 62 ? (n.consume(S), l.interrupt ? r : B) : i(S);
    }
    function b(S) {
      return De(S) ? (n.consume(S), b) : he(S);
    }
    function L(S) {
      return S === 47 ? (n.consume(S), he) : S === 58 || S === 95 || tn(S) ? (n.consume(S), W) : De(S) ? (n.consume(S), L) : he(S);
    }
    function W(S) {
      return S === 45 || S === 46 || S === 58 || S === 95 || Nt(S) ? (n.consume(S), W) : Z(S);
    }
    function Z(S) {
      return S === 61 ? (n.consume(S), A) : De(S) ? (n.consume(S), Z) : L(S);
    }
    function A(S) {
      return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? i(S) : S === 34 || S === 39 ? (n.consume(S), h = S, ee) : De(S) ? (n.consume(S), A) : ne(S);
    }
    function ee(S) {
      return S === h ? (n.consume(S), h = null, le) : S === null || xe(S) ? i(S) : (n.consume(S), ee);
    }
    function ne(S) {
      return S === null || S === 34 || S === 39 || S === 47 || S === 60 || S === 61 || S === 62 || S === 96 || vt(S) ? Z(S) : (n.consume(S), ne);
    }
    function le(S) {
      return S === 47 || S === 62 || De(S) ? L(S) : i(S);
    }
    function he(S) {
      return S === 62 ? (n.consume(S), Q) : i(S);
    }
    function Q(S) {
      return S === null || xe(S) ? B(S) : De(S) ? (n.consume(S), Q) : i(S);
    }
    function B(S) {
      return S === 45 && u === 2 ? (n.consume(S), q) : S === 60 && u === 1 ? (n.consume(S), te) : S === 62 && u === 4 ? (n.consume(S), P) : S === 63 && u === 3 ? (n.consume(S), k) : S === 93 && u === 5 ? (n.consume(S), G) : xe(S) && (u === 6 || u === 7) ? (n.exit("htmlFlowData"), n.check(a1, M, ue)(S)) : S === null || xe(S) ? (n.exit("htmlFlowData"), ue(S)) : (n.consume(S), B);
    }
    function ue(S) {
      return n.check(c1, X, M)(S);
    }
    function X(S) {
      return n.enter("lineEnding"), n.consume(S), n.exit("lineEnding"), U;
    }
    function U(S) {
      return S === null || xe(S) ? ue(S) : (n.enter("htmlFlowData"), B(S));
    }
    function q(S) {
      return S === 45 ? (n.consume(S), k) : B(S);
    }
    function te(S) {
      return S === 47 ? (n.consume(S), c = "", j) : B(S);
    }
    function j(S) {
      if (S === 62) {
        const oe = c.toLowerCase();
        return Bd.includes(oe) ? (n.consume(S), P) : B(S);
      }
      return tn(S) && c.length < 8 ? (n.consume(S), c += String.fromCharCode(S), j) : B(S);
    }
    function G(S) {
      return S === 93 ? (n.consume(S), k) : B(S);
    }
    function k(S) {
      return S === 62 ? (n.consume(S), P) : S === 45 && u === 2 ? (n.consume(S), k) : B(S);
    }
    function P(S) {
      return S === null || xe(S) ? (n.exit("htmlFlowData"), M(S)) : (n.consume(S), P);
    }
    function M(S) {
      return n.exit("htmlFlow"), r(S);
    }
  }
  function p1(n, r, i) {
    const l = this;
    return u;
    function u(c) {
      return xe(c) ? (n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), a) : i(c);
    }
    function a(c) {
      return l.parser.lazy[l.now().line] ? i(c) : r(c);
    }
  }
  function h1(n, r, i) {
    return l;
    function l(u) {
      return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), n.attempt(ml, r, i);
    }
  }
  const m1 = {
    name: "htmlText",
    tokenize: g1
  };
  function g1(n, r, i) {
    const l = this;
    let u, a, c;
    return f;
    function f(k) {
      return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(k), h;
    }
    function h(k) {
      return k === 33 ? (n.consume(k), m) : k === 47 ? (n.consume(k), Z) : k === 63 ? (n.consume(k), L) : tn(k) ? (n.consume(k), ne) : i(k);
    }
    function m(k) {
      return k === 45 ? (n.consume(k), g) : k === 91 ? (n.consume(k), a = 0, I) : tn(k) ? (n.consume(k), b) : i(k);
    }
    function g(k) {
      return k === 45 ? (n.consume(k), w) : i(k);
    }
    function y(k) {
      return k === null ? i(k) : k === 45 ? (n.consume(k), v) : xe(k) ? (c = y, te(k)) : (n.consume(k), y);
    }
    function v(k) {
      return k === 45 ? (n.consume(k), w) : y(k);
    }
    function w(k) {
      return k === 62 ? q(k) : k === 45 ? v(k) : y(k);
    }
    function I(k) {
      const P = "CDATA[";
      return k === P.charCodeAt(a++) ? (n.consume(k), a === P.length ? D : I) : i(k);
    }
    function D(k) {
      return k === null ? i(k) : k === 93 ? (n.consume(k), N) : xe(k) ? (c = D, te(k)) : (n.consume(k), D);
    }
    function N(k) {
      return k === 93 ? (n.consume(k), T) : D(k);
    }
    function T(k) {
      return k === 62 ? q(k) : k === 93 ? (n.consume(k), T) : D(k);
    }
    function b(k) {
      return k === null || k === 62 ? q(k) : xe(k) ? (c = b, te(k)) : (n.consume(k), b);
    }
    function L(k) {
      return k === null ? i(k) : k === 63 ? (n.consume(k), W) : xe(k) ? (c = L, te(k)) : (n.consume(k), L);
    }
    function W(k) {
      return k === 62 ? q(k) : L(k);
    }
    function Z(k) {
      return tn(k) ? (n.consume(k), A) : i(k);
    }
    function A(k) {
      return k === 45 || Nt(k) ? (n.consume(k), A) : ee(k);
    }
    function ee(k) {
      return xe(k) ? (c = ee, te(k)) : De(k) ? (n.consume(k), ee) : q(k);
    }
    function ne(k) {
      return k === 45 || Nt(k) ? (n.consume(k), ne) : k === 47 || k === 62 || vt(k) ? le(k) : i(k);
    }
    function le(k) {
      return k === 47 ? (n.consume(k), q) : k === 58 || k === 95 || tn(k) ? (n.consume(k), he) : xe(k) ? (c = le, te(k)) : De(k) ? (n.consume(k), le) : q(k);
    }
    function he(k) {
      return k === 45 || k === 46 || k === 58 || k === 95 || Nt(k) ? (n.consume(k), he) : Q(k);
    }
    function Q(k) {
      return k === 61 ? (n.consume(k), B) : xe(k) ? (c = Q, te(k)) : De(k) ? (n.consume(k), Q) : le(k);
    }
    function B(k) {
      return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? i(k) : k === 34 || k === 39 ? (n.consume(k), u = k, ue) : xe(k) ? (c = B, te(k)) : De(k) ? (n.consume(k), B) : (n.consume(k), X);
    }
    function ue(k) {
      return k === u ? (n.consume(k), u = void 0, U) : k === null ? i(k) : xe(k) ? (c = ue, te(k)) : (n.consume(k), ue);
    }
    function X(k) {
      return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? i(k) : k === 47 || k === 62 || vt(k) ? le(k) : (n.consume(k), X);
    }
    function U(k) {
      return k === 47 || k === 62 || vt(k) ? le(k) : i(k);
    }
    function q(k) {
      return k === 62 ? (n.consume(k), n.exit("htmlTextData"), n.exit("htmlText"), r) : i(k);
    }
    function te(k) {
      return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(k), n.exit("lineEnding"), j;
    }
    function j(k) {
      return De(k) ? Le(n, G, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(k) : G(k);
    }
    function G(k) {
      return n.enter("htmlTextData"), c(k);
    }
  }
  const ra = {
    name: "labelEnd",
    resolveAll: x1,
    resolveTo: k1,
    tokenize: S1
  }, y1 = {
    tokenize: E1
  }, v1 = {
    tokenize: I1
  }, w1 = {
    tokenize: C1
  };
  function x1(n) {
    let r = -1;
    const i = [];
    for (; ++r < n.length; ) {
      const l = n[r][1];
      if (i.push(n[r]), l.type === "labelImage" || l.type === "labelLink" || l.type === "labelEnd") {
        const u = l.type === "labelImage" ? 4 : 2;
        l.type = "data", r += u;
      }
    }
    return n.length !== i.length && nn(n, 0, n.length, i), n;
  }
  function k1(n, r) {
    let i = n.length, l = 0, u, a, c, f;
    for (; i--; ) if (u = n[i][1], a) {
      if (u.type === "link" || u.type === "labelLink" && u._inactive) break;
      n[i][0] === "enter" && u.type === "labelLink" && (u._inactive = true);
    } else if (c) {
      if (n[i][0] === "enter" && (u.type === "labelImage" || u.type === "labelLink") && !u._balanced && (a = i, u.type !== "labelLink")) {
        l = 2;
        break;
      }
    } else u.type === "labelEnd" && (c = i);
    const h = {
      type: n[a][1].type === "labelLink" ? "link" : "image",
      start: {
        ...n[a][1].start
      },
      end: {
        ...n[n.length - 1][1].end
      }
    }, m = {
      type: "label",
      start: {
        ...n[a][1].start
      },
      end: {
        ...n[c][1].end
      }
    }, g = {
      type: "labelText",
      start: {
        ...n[a + l + 2][1].end
      },
      end: {
        ...n[c - 2][1].start
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
    ], f = Ft(f, n.slice(a + 1, a + l + 3)), f = Ft(f, [
      [
        "enter",
        g,
        r
      ]
    ]), f = Ft(f, na(r.parser.constructs.insideSpan.null, n.slice(a + l + 4, c - 3), r)), f = Ft(f, [
      [
        "exit",
        g,
        r
      ],
      n[c - 2],
      n[c - 1],
      [
        "exit",
        m,
        r
      ]
    ]), f = Ft(f, n.slice(c + 1)), f = Ft(f, [
      [
        "exit",
        h,
        r
      ]
    ]), nn(n, a, n.length, f), n;
  }
  function S1(n, r, i) {
    const l = this;
    let u = l.events.length, a, c;
    for (; u--; ) if ((l.events[u][1].type === "labelImage" || l.events[u][1].type === "labelLink") && !l.events[u][1]._balanced) {
      a = l.events[u][1];
      break;
    }
    return f;
    function f(v) {
      return a ? a._inactive ? y(v) : (c = l.parser.defined.includes(Lr(l.sliceSerialize({
        start: a.end,
        end: l.now()
      }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(v), n.exit("labelMarker"), n.exit("labelEnd"), h) : i(v);
    }
    function h(v) {
      return v === 40 ? n.attempt(y1, g, c ? g : y)(v) : v === 91 ? n.attempt(v1, g, c ? m : y)(v) : c ? g(v) : y(v);
    }
    function m(v) {
      return n.attempt(w1, g, y)(v);
    }
    function g(v) {
      return r(v);
    }
    function y(v) {
      return a._balanced = true, i(v);
    }
  }
  function E1(n, r, i) {
    return l;
    function l(y) {
      return n.enter("resource"), n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), u;
    }
    function u(y) {
      return vt(y) ? Ri(n, a)(y) : a(y);
    }
    function a(y) {
      return y === 41 ? g(y) : yh(n, c, f, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y);
    }
    function c(y) {
      return vt(y) ? Ri(n, h)(y) : g(y);
    }
    function f(y) {
      return i(y);
    }
    function h(y) {
      return y === 34 || y === 39 || y === 40 ? wh(n, m, i, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : g(y);
    }
    function m(y) {
      return vt(y) ? Ri(n, g)(y) : g(y);
    }
    function g(y) {
      return y === 41 ? (n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), n.exit("resource"), r) : i(y);
    }
  }
  function I1(n, r, i) {
    const l = this;
    return u;
    function u(f) {
      return vh.call(l, n, a, c, "reference", "referenceMarker", "referenceString")(f);
    }
    function a(f) {
      return l.parser.defined.includes(Lr(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1))) ? r(f) : i(f);
    }
    function c(f) {
      return i(f);
    }
  }
  function C1(n, r, i) {
    return l;
    function l(a) {
      return n.enter("reference"), n.enter("referenceMarker"), n.consume(a), n.exit("referenceMarker"), u;
    }
    function u(a) {
      return a === 93 ? (n.enter("referenceMarker"), n.consume(a), n.exit("referenceMarker"), n.exit("reference"), r) : i(a);
    }
  }
  const T1 = {
    name: "labelStartImage",
    resolveAll: ra.resolveAll,
    tokenize: _1
  };
  function _1(n, r, i) {
    const l = this;
    return u;
    function u(f) {
      return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(f), n.exit("labelImageMarker"), a;
    }
    function a(f) {
      return f === 91 ? (n.enter("labelMarker"), n.consume(f), n.exit("labelMarker"), n.exit("labelImage"), c) : i(f);
    }
    function c(f) {
      return f === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? i(f) : r(f);
    }
  }
  const P1 = {
    name: "labelStartLink",
    resolveAll: ra.resolveAll,
    tokenize: N1
  };
  function N1(n, r, i) {
    const l = this;
    return u;
    function u(c) {
      return n.enter("labelLink"), n.enter("labelMarker"), n.consume(c), n.exit("labelMarker"), n.exit("labelLink"), a;
    }
    function a(c) {
      return c === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? i(c) : r(c);
    }
  }
  const yu = {
    name: "lineEnding",
    tokenize: D1
  };
  function D1(n, r) {
    return i;
    function i(l) {
      return n.enter("lineEnding"), n.consume(l), n.exit("lineEnding"), Le(n, r, "linePrefix");
    }
  }
  const il = {
    name: "thematicBreak",
    tokenize: O1
  };
  function O1(n, r, i) {
    let l = 0, u;
    return a;
    function a(m) {
      return n.enter("thematicBreak"), c(m);
    }
    function c(m) {
      return u = m, f(m);
    }
    function f(m) {
      return m === u ? (n.enter("thematicBreakSequence"), h(m)) : l >= 3 && (m === null || xe(m)) ? (n.exit("thematicBreak"), r(m)) : i(m);
    }
    function h(m) {
      return m === u ? (n.consume(m), l++, h) : (n.exit("thematicBreakSequence"), De(m) ? Le(n, f, "whitespace")(m) : f(m));
    }
  }
  const yt = {
    continuation: {
      tokenize: z1
    },
    exit: b1,
    name: "list",
    tokenize: L1
  }, R1 = {
    partial: true,
    tokenize: F1
  }, A1 = {
    partial: true,
    tokenize: M1
  };
  function L1(n, r, i) {
    const l = this, u = l.events[l.events.length - 1];
    let a = u && u[1].type === "linePrefix" ? u[2].sliceSerialize(u[1], true).length : 0, c = 0;
    return f;
    function f(w) {
      const I = l.containerState.type || (w === 42 || w === 43 || w === 45 ? "listUnordered" : "listOrdered");
      if (I === "listUnordered" ? !l.containerState.marker || w === l.containerState.marker : Lu(w)) {
        if (l.containerState.type || (l.containerState.type = I, n.enter(I, {
          _container: true
        })), I === "listUnordered") return n.enter("listItemPrefix"), w === 42 || w === 45 ? n.check(il, i, m)(w) : m(w);
        if (!l.interrupt || w === 49) return n.enter("listItemPrefix"), n.enter("listItemValue"), h(w);
      }
      return i(w);
    }
    function h(w) {
      return Lu(w) && ++c < 10 ? (n.consume(w), h) : (!l.interrupt || c < 2) && (l.containerState.marker ? w === l.containerState.marker : w === 41 || w === 46) ? (n.exit("listItemValue"), m(w)) : i(w);
    }
    function m(w) {
      return n.enter("listItemMarker"), n.consume(w), n.exit("listItemMarker"), l.containerState.marker = l.containerState.marker || w, n.check(ml, l.interrupt ? i : g, n.attempt(R1, v, y));
    }
    function g(w) {
      return l.containerState.initialBlankLine = true, a++, v(w);
    }
    function y(w) {
      return De(w) ? (n.enter("listItemPrefixWhitespace"), n.consume(w), n.exit("listItemPrefixWhitespace"), v) : i(w);
    }
    function v(w) {
      return l.containerState.size = a + l.sliceSerialize(n.exit("listItemPrefix"), true).length, r(w);
    }
  }
  function z1(n, r, i) {
    const l = this;
    return l.containerState._closeFlow = void 0, n.check(ml, u, a);
    function u(f) {
      return l.containerState.furtherBlankLines = l.containerState.furtherBlankLines || l.containerState.initialBlankLine, Le(n, r, "listItemIndent", l.containerState.size + 1)(f);
    }
    function a(f) {
      return l.containerState.furtherBlankLines || !De(f) ? (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, c(f)) : (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, n.attempt(A1, r, c)(f));
    }
    function c(f) {
      return l.containerState._closeFlow = true, l.interrupt = void 0, Le(n, n.attempt(yt, r, i), "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(f);
    }
  }
  function M1(n, r, i) {
    const l = this;
    return Le(n, u, "listItemIndent", l.containerState.size + 1);
    function u(a) {
      const c = l.events[l.events.length - 1];
      return c && c[1].type === "listItemIndent" && c[2].sliceSerialize(c[1], true).length === l.containerState.size ? r(a) : i(a);
    }
  }
  function b1(n) {
    n.exit(this.containerState.type);
  }
  function F1(n, r, i) {
    const l = this;
    return Le(n, u, "listItemPrefixWhitespace", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function u(a) {
      const c = l.events[l.events.length - 1];
      return !De(a) && c && c[1].type === "listItemPrefixWhitespace" ? r(a) : i(a);
    }
  }
  const jd = {
    name: "setextUnderline",
    resolveTo: B1,
    tokenize: j1
  };
  function B1(n, r) {
    let i = n.length, l, u, a;
    for (; i--; ) if (n[i][0] === "enter") {
      if (n[i][1].type === "content") {
        l = i;
        break;
      }
      n[i][1].type === "paragraph" && (u = i);
    } else n[i][1].type === "content" && n.splice(i, 1), !a && n[i][1].type === "definition" && (a = i);
    const c = {
      type: "setextHeading",
      start: {
        ...n[l][1].start
      },
      end: {
        ...n[n.length - 1][1].end
      }
    };
    return n[u][1].type = "setextHeadingText", a ? (n.splice(u, 0, [
      "enter",
      c,
      r
    ]), n.splice(a + 1, 0, [
      "exit",
      n[l][1],
      r
    ]), n[l][1].end = {
      ...n[a][1].end
    }) : n[l][1] = c, n.push([
      "exit",
      c,
      r
    ]), n;
  }
  function j1(n, r, i) {
    const l = this;
    let u;
    return a;
    function a(m) {
      let g = l.events.length, y;
      for (; g--; ) if (l.events[g][1].type !== "lineEnding" && l.events[g][1].type !== "linePrefix" && l.events[g][1].type !== "content") {
        y = l.events[g][1].type === "paragraph";
        break;
      }
      return !l.parser.lazy[l.now().line] && (l.interrupt || y) ? (n.enter("setextHeadingLine"), u = m, c(m)) : i(m);
    }
    function c(m) {
      return n.enter("setextHeadingLineSequence"), f(m);
    }
    function f(m) {
      return m === u ? (n.consume(m), f) : (n.exit("setextHeadingLineSequence"), De(m) ? Le(n, h, "lineSuffix")(m) : h(m));
    }
    function h(m) {
      return m === null || xe(m) ? (n.exit("setextHeadingLine"), r(m)) : i(m);
    }
  }
  const U1 = {
    tokenize: V1
  };
  function V1(n) {
    const r = this, i = n.attempt(ml, l, n.attempt(this.parser.constructs.flowInitial, u, Le(n, n.attempt(this.parser.constructs.flow, u, n.attempt(qv, u)), "linePrefix")));
    return i;
    function l(a) {
      if (a === null) {
        n.consume(a);
        return;
      }
      return n.enter("lineEndingBlank"), n.consume(a), n.exit("lineEndingBlank"), r.currentConstruct = void 0, i;
    }
    function u(a) {
      if (a === null) {
        n.consume(a);
        return;
      }
      return n.enter("lineEnding"), n.consume(a), n.exit("lineEnding"), r.currentConstruct = void 0, i;
    }
  }
  const H1 = {
    resolveAll: kh()
  }, W1 = xh("string"), $1 = xh("text");
  function xh(n) {
    return {
      resolveAll: kh(n === "text" ? Y1 : void 0),
      tokenize: r
    };
    function r(i) {
      const l = this, u = this.parser.constructs[n], a = i.attempt(u, c, f);
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
  function kh(n) {
    return r;
    function r(i, l) {
      let u = -1, a;
      for (; ++u <= i.length; ) a === void 0 ? i[u] && i[u][1].type === "data" && (a = u, u++) : (!i[u] || i[u][1].type !== "data") && (u !== a + 2 && (i[a][1].end = i[u - 1][1].end, i.splice(a + 2, u - a - 2), u = a + 2), a = void 0);
      return n ? n(i, l) : i;
    }
  }
  function Y1(n, r) {
    let i = 0;
    for (; ++i <= n.length; ) if ((i === n.length || n[i][1].type === "lineEnding") && n[i - 1][1].type === "data") {
      const l = n[i - 1][1], u = r.sliceStream(l);
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
      if (r._contentTypeTextTrailing && i === n.length && (f = 0), f) {
        const m = {
          type: i === n.length || h || f < 2 ? "lineSuffix" : "hardBreakTrailing",
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
        }, l.start.offset === l.end.offset ? Object.assign(l, m) : (n.splice(i, 0, [
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
    return n;
  }
  const q1 = {
    42: yt,
    43: yt,
    45: yt,
    48: yt,
    49: yt,
    50: yt,
    51: yt,
    52: yt,
    53: yt,
    54: yt,
    55: yt,
    56: yt,
    57: yt,
    62: ph
  }, K1 = {
    91: Jv
  }, Q1 = {
    [-2]: gu,
    [-1]: gu,
    32: gu
  }, G1 = {
    35: i1,
    42: il,
    45: [
      jd,
      il
    ],
    60: u1,
    61: jd,
    95: il,
    96: Fd,
    126: Fd
  }, X1 = {
    38: mh,
    92: hh
  }, J1 = {
    [-5]: yu,
    [-4]: yu,
    [-3]: yu,
    33: T1,
    38: mh,
    42: zu,
    60: [
      Pv,
      m1
    ],
    91: P1,
    92: [
      n1,
      hh
    ],
    93: ra,
    95: zu,
    96: Uv
  }, Z1 = {
    null: [
      zu,
      H1
    ]
  }, ew = {
    null: [
      42,
      95
    ]
  }, tw = {
    null: []
  }, nw = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers: ew,
    contentInitial: K1,
    disable: tw,
    document: q1,
    flow: G1,
    flowInitial: Q1,
    insideSpan: Z1,
    string: X1,
    text: J1
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function rw(n, r, i) {
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
      attempt: ee(Z),
      check: ee(A),
      consume: b,
      enter: L,
      exit: W,
      interrupt: ee(A, {
        interrupt: true
      })
    }, m = {
      code: null,
      containerState: {},
      defineSkip: D,
      events: [],
      now: I,
      parser: n,
      previous: null,
      sliceSerialize: v,
      sliceStream: w,
      write: y
    };
    let g = r.tokenize.call(m, h);
    return r.resolveAll && a.push(r), m;
    function y(Q) {
      return c = Ft(c, Q), N(), c[c.length - 1] !== null ? [] : (ne(r, 0), m.events = na(a, m.events, m), m.events);
    }
    function v(Q, B) {
      return ow(w(Q), B);
    }
    function w(Q) {
      return iw(c, Q);
    }
    function I() {
      const { _bufferIndex: Q, _index: B, line: ue, column: X, offset: U } = l;
      return {
        _bufferIndex: Q,
        _index: B,
        line: ue,
        column: X,
        offset: U
      };
    }
    function D(Q) {
      u[Q.line] = Q.column, he();
    }
    function N() {
      let Q;
      for (; l._index < c.length; ) {
        const B = c[l._index];
        if (typeof B == "string") for (Q = l._index, l._bufferIndex < 0 && (l._bufferIndex = 0); l._index === Q && l._bufferIndex < B.length; ) T(B.charCodeAt(l._bufferIndex));
        else T(B);
      }
    }
    function T(Q) {
      g = g(Q);
    }
    function b(Q) {
      xe(Q) ? (l.line++, l.column = 1, l.offset += Q === -3 ? 2 : 1, he()) : Q !== -1 && (l.column++, l.offset++), l._bufferIndex < 0 ? l._index++ : (l._bufferIndex++, l._bufferIndex === c[l._index].length && (l._bufferIndex = -1, l._index++)), m.previous = Q;
    }
    function L(Q, B) {
      const ue = B || {};
      return ue.type = Q, ue.start = I(), m.events.push([
        "enter",
        ue,
        m
      ]), f.push(ue), ue;
    }
    function W(Q) {
      const B = f.pop();
      return B.end = I(), m.events.push([
        "exit",
        B,
        m
      ]), B;
    }
    function Z(Q, B) {
      ne(Q, B.from);
    }
    function A(Q, B) {
      B.restore();
    }
    function ee(Q, B) {
      return ue;
      function ue(X, U, q) {
        let te, j, G, k;
        return Array.isArray(X) ? M(X) : "tokenize" in X ? M([
          X
        ]) : P(X);
        function P(de) {
          return Ce;
          function Ce(ke) {
            const Te = ke !== null && de[ke], Ve = ke !== null && de.null, Dt = [
              ...Array.isArray(Te) ? Te : Te ? [
                Te
              ] : [],
              ...Array.isArray(Ve) ? Ve : Ve ? [
                Ve
              ] : []
            ];
            return M(Dt)(ke);
          }
        }
        function M(de) {
          return te = de, j = 0, de.length === 0 ? q : S(de[j]);
        }
        function S(de) {
          return Ce;
          function Ce(ke) {
            return k = le(), G = de, de.partial || (m.currentConstruct = de), de.name && m.parser.constructs.disable.null.includes(de.name) ? pe() : de.tokenize.call(B ? Object.assign(Object.create(m), B) : m, h, oe, pe)(ke);
          }
        }
        function oe(de) {
          return Q(G, k), U;
        }
        function pe(de) {
          return k.restore(), ++j < te.length ? S(te[j]) : q;
        }
      }
    }
    function ne(Q, B) {
      Q.resolveAll && !a.includes(Q) && a.push(Q), Q.resolve && nn(m.events, B, m.events.length - B, Q.resolve(m.events.slice(B), m)), Q.resolveTo && (m.events = Q.resolveTo(m.events, m));
    }
    function le() {
      const Q = I(), B = m.previous, ue = m.currentConstruct, X = m.events.length, U = Array.from(f);
      return {
        from: X,
        restore: q
      };
      function q() {
        l = Q, m.previous = B, m.currentConstruct = ue, m.events.length = X, f = U, he();
      }
    }
    function he() {
      l.line in u && l.column < 2 && (l.column = u[l.line], l.offset += u[l.line] - 1);
    }
  }
  function iw(n, r) {
    const i = r.start._index, l = r.start._bufferIndex, u = r.end._index, a = r.end._bufferIndex;
    let c;
    if (i === u) c = [
      n[i].slice(l, a)
    ];
    else {
      if (c = n.slice(i, u), l > -1) {
        const f = c[0];
        typeof f == "string" ? c[0] = f.slice(l) : c.shift();
      }
      a > 0 && c.push(n[u].slice(0, a));
    }
    return c;
  }
  function ow(n, r) {
    let i = -1;
    const l = [];
    let u;
    for (; ++i < n.length; ) {
      const a = n[i];
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
  function lw(n) {
    const l = {
      constructs: pv([
        nw,
        ...(n || {}).extensions || []
      ]),
      content: u(kv),
      defined: [],
      document: u(Ev),
      flow: u(U1),
      lazy: {},
      string: u(W1),
      text: u($1)
    };
    return l;
    function u(a) {
      return c;
      function c(f) {
        return rw(l, a, f);
      }
    }
  }
  function sw(n) {
    for (; !gh(n); ) ;
    return n;
  }
  const Ud = /[\0\t\n\r]/g;
  function uw() {
    let n = 1, r = "", i = true, l;
    return u;
    function u(a, c, f) {
      const h = [];
      let m, g, y, v, w;
      for (a = r + (typeof a == "string" ? a.toString() : new TextDecoder(c || void 0).decode(a)), y = 0, r = "", i && (a.charCodeAt(0) === 65279 && y++, i = void 0); y < a.length; ) {
        if (Ud.lastIndex = y, m = Ud.exec(a), v = m && m.index !== void 0 ? m.index : a.length, w = a.charCodeAt(v), !m) {
          r = a.slice(y);
          break;
        }
        if (w === 10 && y === v && l) h.push(-3), l = void 0;
        else switch (l && (h.push(-5), l = void 0), y < v && (h.push(a.slice(y, v)), n += v - y), w) {
          case 0: {
            h.push(65533), n++;
            break;
          }
          case 9: {
            for (g = Math.ceil(n / 4) * 4, h.push(-2); n++ < g; ) h.push(-1);
            break;
          }
          case 10: {
            h.push(-4), n = 1;
            break;
          }
          default:
            l = true, n = 1;
        }
        y = v + 1;
      }
      return f && (l && h.push(-5), r && h.push(r), h.push(null)), h;
    }
  }
  const aw = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function cw(n) {
    return n.replace(aw, fw);
  }
  function fw(n, r, i) {
    if (r) return r;
    if (i.charCodeAt(0) === 35) {
      const u = i.charCodeAt(1), a = u === 120 || u === 88;
      return dh(i.slice(a ? 2 : 1), a ? 16 : 10);
    }
    return ta(i) || n;
  }
  const Sh = {}.hasOwnProperty;
  function dw(n, r, i) {
    return r && typeof r == "object" && (i = r, r = void 0), pw(i)(sw(lw(i).document().write(uw()(n, r, true))));
  }
  function pw(n) {
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
        autolink: a(ir),
        autolinkProtocol: le,
        autolinkEmail: le,
        atxHeading: a(Br),
        blockQuote: a(Ve),
        characterEscape: le,
        characterReference: le,
        codeFenced: a(Dt),
        codeFencedFenceInfo: c,
        codeFencedFenceMeta: c,
        codeIndented: a(Dt, c),
        codeText: a(Un, c),
        codeTextData: le,
        data: le,
        codeFlowValue: le,
        definition: a(on),
        definitionDestinationString: c,
        definitionLabelString: c,
        definitionTitleString: c,
        emphasis: a(Fr),
        hardBreakEscape: a(jr),
        hardBreakTrailing: a(jr),
        htmlFlow: a(rr, c),
        htmlFlowData: le,
        htmlText: a(rr, c),
        htmlTextData: le,
        image: a(ji),
        label: c,
        link: a(ir),
        listItem: a(gn),
        listItemValue: v,
        listOrdered: a(mn, y),
        listUnordered: a(mn),
        paragraph: a(Ur),
        reference: S,
        referenceString: c,
        resourceDestinationString: c,
        resourceTitleString: c,
        setextHeading: a(Br),
        strong: a(Ui),
        thematicBreak: a(Hi)
      },
      exit: {
        atxHeading: h(),
        atxHeadingSequence: Z,
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
        codeText: h(U),
        codeTextData: he,
        data: he,
        definition: h(),
        definitionDestinationString: W,
        definitionLabelString: b,
        definitionTitleString: L,
        emphasis: h(),
        hardBreakEscape: h(B),
        hardBreakTrailing: h(B),
        htmlFlow: h(ue),
        htmlFlowData: he,
        htmlText: h(X),
        htmlTextData: he,
        image: h(te),
        label: G,
        labelText: j,
        lineEnding: Q,
        link: h(q),
        listItem: h(),
        listOrdered: h(),
        listUnordered: h(),
        paragraph: h(),
        referenceString: oe,
        resourceDestinationString: k,
        resourceTitleString: P,
        resource: M,
        setextHeading: h(ne),
        setextHeadingLineSequence: ee,
        setextHeadingText: A,
        strong: h(),
        thematicBreak: h()
      }
    };
    Eh(r, (n || {}).mdastExtensions || []);
    const i = {};
    return l;
    function l(F) {
      let J = {
        type: "root",
        children: []
      };
      const ye = {
        stack: [
          J
        ],
        tokenStack: [],
        config: r,
        enter: f,
        exit: m,
        buffer: c,
        resume: g,
        data: i
      }, Ee = [];
      let _e = -1;
      for (; ++_e < F.length; ) if (F[_e][1].type === "listOrdered" || F[_e][1].type === "listUnordered") if (F[_e][0] === "enter") Ee.push(_e);
      else {
        const et = Ee.pop();
        _e = u(F, et, _e);
      }
      for (_e = -1; ++_e < F.length; ) {
        const et = r[F[_e][0]];
        Sh.call(et, F[_e][1].type) && et[F[_e][1].type].call(Object.assign({
          sliceSerialize: F[_e][2].sliceSerialize
        }, ye), F[_e][1]);
      }
      if (ye.tokenStack.length > 0) {
        const et = ye.tokenStack[ye.tokenStack.length - 1];
        (et[1] || Vd).call(ye, void 0, et[0]);
      }
      for (J.position = {
        start: Fn(F.length > 0 ? F[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }),
        end: Fn(F.length > 0 ? F[F.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        })
      }, _e = -1; ++_e < r.transforms.length; ) J = r.transforms[_e](J) || J;
      return J;
    }
    function u(F, J, ye) {
      let Ee = J - 1, _e = -1, et = false, ln, Ot, yn, Vn;
      for (; ++Ee <= ye; ) {
        const tt = F[Ee];
        switch (tt[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            tt[0] === "enter" ? _e++ : _e--, Vn = void 0;
            break;
          }
          case "lineEndingBlank": {
            tt[0] === "enter" && (ln && !Vn && !_e && !yn && (yn = Ee), Vn = void 0);
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            Vn = void 0;
        }
        if (!_e && tt[0] === "enter" && tt[1].type === "listItemPrefix" || _e === -1 && tt[0] === "exit" && (tt[1].type === "listUnordered" || tt[1].type === "listOrdered")) {
          if (ln) {
            let Kt = Ee;
            for (Ot = void 0; Kt--; ) {
              const xt = F[Kt];
              if (xt[1].type === "lineEnding" || xt[1].type === "lineEndingBlank") {
                if (xt[0] === "exit") continue;
                Ot && (F[Ot][1].type = "lineEndingBlank", et = true), xt[1].type = "lineEnding", Ot = Kt;
              } else if (!(xt[1].type === "linePrefix" || xt[1].type === "blockQuotePrefix" || xt[1].type === "blockQuotePrefixWhitespace" || xt[1].type === "blockQuoteMarker" || xt[1].type === "listItemIndent")) break;
            }
            yn && (!Ot || yn < Ot) && (ln._spread = true), ln.end = Object.assign({}, Ot ? F[Ot][1].start : tt[1].end), F.splice(Ot || Ee, 0, [
              "exit",
              ln,
              tt[2]
            ]), Ee++, ye++;
          }
          if (tt[1].type === "listItemPrefix") {
            const Kt = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, tt[1].start),
              end: void 0
            };
            ln = Kt, F.splice(Ee, 0, [
              "enter",
              Kt,
              tt[2]
            ]), Ee++, ye++, yn = void 0, Vn = true;
          }
        }
      }
      return F[J][1]._spread = et, ye;
    }
    function a(F, J) {
      return ye;
      function ye(Ee) {
        f.call(this, F(Ee), Ee), J && J.call(this, Ee);
      }
    }
    function c() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function f(F, J, ye) {
      this.stack[this.stack.length - 1].children.push(F), this.stack.push(F), this.tokenStack.push([
        J,
        ye || void 0
      ]), F.position = {
        start: Fn(J.start),
        end: void 0
      };
    }
    function h(F) {
      return J;
      function J(ye) {
        F && F.call(this, ye), m.call(this, ye);
      }
    }
    function m(F, J) {
      const ye = this.stack.pop(), Ee = this.tokenStack.pop();
      if (Ee) Ee[0].type !== F.type && (J ? J.call(this, F, Ee[0]) : (Ee[1] || Vd).call(this, F, Ee[0]));
      else throw new Error("Cannot close `" + F.type + "` (" + Oi({
        start: F.start,
        end: F.end
      }) + "): it\u2019s not open");
      ye.position.end = Fn(F.end);
    }
    function g() {
      return fv(this.stack.pop());
    }
    function y() {
      this.data.expectingFirstListItemValue = true;
    }
    function v(F) {
      if (this.data.expectingFirstListItemValue) {
        const J = this.stack[this.stack.length - 2];
        J.start = Number.parseInt(this.sliceSerialize(F), 10), this.data.expectingFirstListItemValue = void 0;
      }
    }
    function w() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.lang = F;
    }
    function I() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.meta = F;
    }
    function D() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }
    function N() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.value = F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }
    function T() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.value = F.replace(/(\r?\n|\r)$/g, "");
    }
    function b(F) {
      const J = this.resume(), ye = this.stack[this.stack.length - 1];
      ye.label = J, ye.identifier = Lr(this.sliceSerialize(F)).toLowerCase();
    }
    function L() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.title = F;
    }
    function W() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.url = F;
    }
    function Z(F) {
      const J = this.stack[this.stack.length - 1];
      if (!J.depth) {
        const ye = this.sliceSerialize(F).length;
        J.depth = ye;
      }
    }
    function A() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function ee(F) {
      const J = this.stack[this.stack.length - 1];
      J.depth = this.sliceSerialize(F).codePointAt(0) === 61 ? 1 : 2;
    }
    function ne() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function le(F) {
      const ye = this.stack[this.stack.length - 1].children;
      let Ee = ye[ye.length - 1];
      (!Ee || Ee.type !== "text") && (Ee = Vi(), Ee.position = {
        start: Fn(F.start),
        end: void 0
      }, ye.push(Ee)), this.stack.push(Ee);
    }
    function he(F) {
      const J = this.stack.pop();
      J.value += this.sliceSerialize(F), J.position.end = Fn(F.end);
    }
    function Q(F) {
      const J = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const ye = J.children[J.children.length - 1];
        ye.position.end = Fn(F.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && r.canContainEols.includes(J.type) && (le.call(this, F), he.call(this, F));
    }
    function B() {
      this.data.atHardBreak = true;
    }
    function ue() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.value = F;
    }
    function X() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.value = F;
    }
    function U() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.value = F;
    }
    function q() {
      const F = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const J = this.data.referenceType || "shortcut";
        F.type += "Reference", F.referenceType = J, delete F.url, delete F.title;
      } else delete F.identifier, delete F.label;
      this.data.referenceType = void 0;
    }
    function te() {
      const F = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const J = this.data.referenceType || "shortcut";
        F.type += "Reference", F.referenceType = J, delete F.url, delete F.title;
      } else delete F.identifier, delete F.label;
      this.data.referenceType = void 0;
    }
    function j(F) {
      const J = this.sliceSerialize(F), ye = this.stack[this.stack.length - 2];
      ye.label = cw(J), ye.identifier = Lr(J).toLowerCase();
    }
    function G() {
      const F = this.stack[this.stack.length - 1], J = this.resume(), ye = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, ye.type === "link") {
        const Ee = F.children;
        ye.children = Ee;
      } else ye.alt = J;
    }
    function k() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.url = F;
    }
    function P() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.title = F;
    }
    function M() {
      this.data.inReference = void 0;
    }
    function S() {
      this.data.referenceType = "collapsed";
    }
    function oe(F) {
      const J = this.resume(), ye = this.stack[this.stack.length - 1];
      ye.label = J, ye.identifier = Lr(this.sliceSerialize(F)).toLowerCase(), this.data.referenceType = "full";
    }
    function pe(F) {
      this.data.characterReferenceType = F.type;
    }
    function de(F) {
      const J = this.sliceSerialize(F), ye = this.data.characterReferenceType;
      let Ee;
      ye ? (Ee = dh(J, ye === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Ee = ta(J);
      const _e = this.stack[this.stack.length - 1];
      _e.value += Ee;
    }
    function Ce(F) {
      const J = this.stack.pop();
      J.position.end = Fn(F.end);
    }
    function ke(F) {
      he.call(this, F);
      const J = this.stack[this.stack.length - 1];
      J.url = this.sliceSerialize(F);
    }
    function Te(F) {
      he.call(this, F);
      const J = this.stack[this.stack.length - 1];
      J.url = "mailto:" + this.sliceSerialize(F);
    }
    function Ve() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function Dt() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function Un() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function on() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function Fr() {
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
    function jr() {
      return {
        type: "break"
      };
    }
    function rr() {
      return {
        type: "html",
        value: ""
      };
    }
    function ji() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function ir() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function mn(F) {
      return {
        type: "list",
        ordered: F.type === "listOrdered",
        start: null,
        spread: F._spread,
        children: []
      };
    }
    function gn(F) {
      return {
        type: "listItem",
        spread: F._spread,
        checked: null,
        children: []
      };
    }
    function Ur() {
      return {
        type: "paragraph",
        children: []
      };
    }
    function Ui() {
      return {
        type: "strong",
        children: []
      };
    }
    function Vi() {
      return {
        type: "text",
        value: ""
      };
    }
    function Hi() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function Fn(n) {
    return {
      line: n.line,
      column: n.column,
      offset: n.offset
    };
  }
  function Eh(n, r) {
    let i = -1;
    for (; ++i < r.length; ) {
      const l = r[i];
      Array.isArray(l) ? Eh(n, l) : hw(n, l);
    }
  }
  function hw(n, r) {
    let i;
    for (i in r) if (Sh.call(r, i)) switch (i) {
      case "canContainEols": {
        const l = r[i];
        l && n[i].push(...l);
        break;
      }
      case "transforms": {
        const l = r[i];
        l && n[i].push(...l);
        break;
      }
      case "enter":
      case "exit": {
        const l = r[i];
        l && Object.assign(n[i], l);
        break;
      }
    }
  }
  function Vd(n, r) {
    throw n ? new Error("Cannot close `" + n.type + "` (" + Oi({
      start: n.start,
      end: n.end
    }) + "): a different token (`" + r.type + "`, " + Oi({
      start: r.start,
      end: r.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + r.type + "`, " + Oi({
      start: r.start,
      end: r.end
    }) + ") is still open");
  }
  function mw(n) {
    const r = this;
    r.parser = i;
    function i(l) {
      return dw(l, {
        ...r.data("settings"),
        ...n,
        extensions: r.data("micromarkExtensions") || [],
        mdastExtensions: r.data("fromMarkdownExtensions") || []
      });
    }
  }
  function gw(n, r) {
    const i = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: n.wrap(n.all(r), true)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function yw(n, r) {
    const i = {
      type: "element",
      tagName: "br",
      properties: {},
      children: []
    };
    return n.patch(r, i), [
      n.applyData(r, i),
      {
        type: "text",
        value: `
`
      }
    ];
  }
  function vw(n, r) {
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
    }), n.patch(r, a), a = n.applyData(r, a), a = {
      type: "element",
      tagName: "pre",
      properties: {},
      children: [
        a
      ]
    }, n.patch(r, a), a;
  }
  function ww(n, r) {
    const i = {
      type: "element",
      tagName: "del",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function xw(n, r) {
    const i = {
      type: "element",
      tagName: "em",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function kw(n, r) {
    const i = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", l = String(r.identifier).toUpperCase(), u = br(l.toLowerCase()), a = n.footnoteOrder.indexOf(l);
    let c, f = n.footnoteCounts.get(l);
    f === void 0 ? (f = 0, n.footnoteOrder.push(l), c = n.footnoteOrder.length) : c = a + 1, f += 1, n.footnoteCounts.set(l, f);
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
    n.patch(r, h);
    const m = {
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        h
      ]
    };
    return n.patch(r, m), n.applyData(r, m);
  }
  function Sw(n, r) {
    const i = {
      type: "element",
      tagName: "h" + r.depth,
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function Ew(n, r) {
    if (n.options.allowDangerousHtml) {
      const i = {
        type: "raw",
        value: r.value
      };
      return n.patch(r, i), n.applyData(r, i);
    }
  }
  function Ih(n, r) {
    const i = r.referenceType;
    let l = "]";
    if (i === "collapsed" ? l += "[]" : i === "full" && (l += "[" + (r.label || r.identifier) + "]"), r.type === "imageReference") return [
      {
        type: "text",
        value: "![" + r.alt + l
      }
    ];
    const u = n.all(r), a = u[0];
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
  function Iw(n, r) {
    const i = String(r.identifier).toUpperCase(), l = n.definitionById.get(i);
    if (!l) return Ih(n, r);
    const u = {
      src: br(l.url || ""),
      alt: r.alt
    };
    l.title !== null && l.title !== void 0 && (u.title = l.title);
    const a = {
      type: "element",
      tagName: "img",
      properties: u,
      children: []
    };
    return n.patch(r, a), n.applyData(r, a);
  }
  function Cw(n, r) {
    const i = {
      src: br(r.url)
    };
    r.alt !== null && r.alt !== void 0 && (i.alt = r.alt), r.title !== null && r.title !== void 0 && (i.title = r.title);
    const l = {
      type: "element",
      tagName: "img",
      properties: i,
      children: []
    };
    return n.patch(r, l), n.applyData(r, l);
  }
  function Tw(n, r) {
    const i = {
      type: "text",
      value: r.value.replace(/\r?\n|\r/g, " ")
    };
    n.patch(r, i);
    const l = {
      type: "element",
      tagName: "code",
      properties: {},
      children: [
        i
      ]
    };
    return n.patch(r, l), n.applyData(r, l);
  }
  function _w(n, r) {
    const i = String(r.identifier).toUpperCase(), l = n.definitionById.get(i);
    if (!l) return Ih(n, r);
    const u = {
      href: br(l.url || "")
    };
    l.title !== null && l.title !== void 0 && (u.title = l.title);
    const a = {
      type: "element",
      tagName: "a",
      properties: u,
      children: n.all(r)
    };
    return n.patch(r, a), n.applyData(r, a);
  }
  function Pw(n, r) {
    const i = {
      href: br(r.url)
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const l = {
      type: "element",
      tagName: "a",
      properties: i,
      children: n.all(r)
    };
    return n.patch(r, l), n.applyData(r, l);
  }
  function Nw(n, r, i) {
    const l = n.all(r), u = i ? Dw(i) : Ch(r), a = {}, c = [];
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
    return n.patch(r, m), n.applyData(r, m);
  }
  function Dw(n) {
    let r = false;
    if (n.type === "list") {
      r = n.spread || false;
      const i = n.children;
      let l = -1;
      for (; !r && ++l < i.length; ) r = Ch(i[l]);
    }
    return r;
  }
  function Ch(n) {
    const r = n.spread;
    return r ?? n.children.length > 1;
  }
  function Ow(n, r) {
    const i = {}, l = n.all(r);
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
      children: n.wrap(l, true)
    };
    return n.patch(r, a), n.applyData(r, a);
  }
  function Rw(n, r) {
    const i = {
      type: "element",
      tagName: "p",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function Aw(n, r) {
    const i = {
      type: "root",
      children: n.wrap(n.all(r))
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function Lw(n, r) {
    const i = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function zw(n, r) {
    const i = n.all(r), l = i.shift(), u = [];
    if (l) {
      const c = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: n.wrap([
          l
        ], true)
      };
      n.patch(r.children[0], c), u.push(c);
    }
    if (i.length > 0) {
      const c = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: n.wrap(i, true)
      }, f = Xu(r.children[1]), h = oh(r.children[r.children.length - 1]);
      f && h && (c.position = {
        start: f,
        end: h
      }), u.push(c);
    }
    const a = {
      type: "element",
      tagName: "table",
      properties: {},
      children: n.wrap(u, true)
    };
    return n.patch(r, a), n.applyData(r, a);
  }
  function Mw(n, r, i) {
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
      y && (I.children = n.all(y), n.patch(y, I), I = n.applyData(y, I)), m.push(I);
    }
    const g = {
      type: "element",
      tagName: "tr",
      properties: {},
      children: n.wrap(m, true)
    };
    return n.patch(r, g), n.applyData(r, g);
  }
  function bw(n, r) {
    const i = {
      type: "element",
      tagName: "td",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  const Hd = 9, Wd = 32;
  function Fw(n) {
    const r = String(n), i = /\r?\n|\r/g;
    let l = i.exec(r), u = 0;
    const a = [];
    for (; l; ) a.push($d(r.slice(u, l.index), u > 0, true), l[0]), u = l.index + l[0].length, l = i.exec(r);
    return a.push($d(r.slice(u), u > 0, false)), a.join("");
  }
  function $d(n, r, i) {
    let l = 0, u = n.length;
    if (r) {
      let a = n.codePointAt(l);
      for (; a === Hd || a === Wd; ) l++, a = n.codePointAt(l);
    }
    if (i) {
      let a = n.codePointAt(u - 1);
      for (; a === Hd || a === Wd; ) u--, a = n.codePointAt(u - 1);
    }
    return u > l ? n.slice(l, u) : "";
  }
  function Bw(n, r) {
    const i = {
      type: "text",
      value: Fw(String(r.value))
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function jw(n, r) {
    const i = {
      type: "element",
      tagName: "hr",
      properties: {},
      children: []
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  const Uw = {
    blockquote: gw,
    break: yw,
    code: vw,
    delete: ww,
    emphasis: xw,
    footnoteReference: kw,
    heading: Sw,
    html: Ew,
    imageReference: Iw,
    image: Cw,
    inlineCode: Tw,
    linkReference: _w,
    link: Pw,
    listItem: Nw,
    list: Ow,
    paragraph: Rw,
    root: Aw,
    strong: Lw,
    table: zw,
    tableCell: bw,
    tableRow: Mw,
    text: Bw,
    thematicBreak: jw,
    toml: el,
    yaml: el,
    definition: el,
    footnoteDefinition: el
  };
  function el() {
  }
  const Th = -1, gl = 0, Ai = 1, ll = 2, ia = 3, oa = 4, la = 5, sa = 6, _h = 7, Ph = 8, Yd = typeof self == "object" ? self : globalThis, Vw = (n, r) => {
    const i = (u, a) => (n.set(a, u), u), l = (u) => {
      if (n.has(u)) return n.get(u);
      const [a, c] = r[u];
      switch (a) {
        case gl:
        case Th:
          return i(c, u);
        case Ai: {
          const f = i([], u);
          for (const h of c) f.push(l(h));
          return f;
        }
        case ll: {
          const f = i({}, u);
          for (const [h, m] of c) f[l(h)] = l(m);
          return f;
        }
        case ia:
          return i(new Date(c), u);
        case oa: {
          const { source: f, flags: h } = c;
          return i(new RegExp(f, h), u);
        }
        case la: {
          const f = i(/* @__PURE__ */ new Map(), u);
          for (const [h, m] of c) f.set(l(h), l(m));
          return f;
        }
        case sa: {
          const f = i(/* @__PURE__ */ new Set(), u);
          for (const h of c) f.add(l(h));
          return f;
        }
        case _h: {
          const { name: f, message: h } = c;
          return i(new Yd[f](h), u);
        }
        case Ph:
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
  }, qd = (n) => Vw(/* @__PURE__ */ new Map(), n)(0), Dr = "", { toString: Hw } = {}, { keys: Ww } = Object, Pi = (n) => {
    const r = typeof n;
    if (r !== "object" || !n) return [
      gl,
      r
    ];
    const i = Hw.call(n).slice(8, -1);
    switch (i) {
      case "Array":
        return [
          Ai,
          Dr
        ];
      case "Object":
        return [
          ll,
          Dr
        ];
      case "Date":
        return [
          ia,
          Dr
        ];
      case "RegExp":
        return [
          oa,
          Dr
        ];
      case "Map":
        return [
          la,
          Dr
        ];
      case "Set":
        return [
          sa,
          Dr
        ];
      case "DataView":
        return [
          Ai,
          i
        ];
    }
    return i.includes("Array") ? [
      Ai,
      i
    ] : i.includes("Error") ? [
      _h,
      i
    ] : [
      ll,
      i
    ];
  }, tl = ([n, r]) => n === gl && (r === "function" || r === "symbol"), $w = (n, r, i, l) => {
    const u = (c, f) => {
      const h = l.push(c) - 1;
      return i.set(f, h), h;
    }, a = (c) => {
      if (i.has(c)) return i.get(c);
      let [f, h] = Pi(c);
      switch (f) {
        case gl: {
          let g = c;
          switch (h) {
            case "bigint":
              f = Ph, g = c.toString();
              break;
            case "function":
            case "symbol":
              if (n) throw new TypeError("unable to serialize " + h);
              g = null;
              break;
            case "undefined":
              return u([
                Th
              ], c);
          }
          return u([
            f,
            g
          ], c);
        }
        case Ai: {
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
        case ll: {
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
          for (const v of Ww(c)) (n || !tl(Pi(c[v]))) && g.push([
            a(v),
            a(c[v])
          ]);
          return y;
        }
        case ia:
          return u([
            f,
            c.toISOString()
          ], c);
        case oa: {
          const { source: g, flags: y } = c;
          return u([
            f,
            {
              source: g,
              flags: y
            }
          ], c);
        }
        case la: {
          const g = [], y = u([
            f,
            g
          ], c);
          for (const [v, w] of c) (n || !(tl(Pi(v)) || tl(Pi(w)))) && g.push([
            a(v),
            a(w)
          ]);
          return y;
        }
        case sa: {
          const g = [], y = u([
            f,
            g
          ], c);
          for (const v of c) (n || !tl(Pi(v))) && g.push(a(v));
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
  }, Kd = (n, { json: r, lossy: i } = {}) => {
    const l = [];
    return $w(!(r || i), !!r, /* @__PURE__ */ new Map(), l)(n), l;
  }, sl = typeof structuredClone == "function" ? (n, r) => r && ("json" in r || "lossy" in r) ? qd(Kd(n, r)) : structuredClone(n) : (n, r) => qd(Kd(n, r));
  function Yw(n, r) {
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
  function qw(n, r) {
    return "Back to reference " + (n + 1) + (r > 1 ? "-" + r : "");
  }
  function Kw(n) {
    const r = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", i = n.options.footnoteBackContent || Yw, l = n.options.footnoteBackLabel || qw, u = n.options.footnoteLabel || "Footnotes", a = n.options.footnoteLabelTagName || "h2", c = n.options.footnoteLabelProperties || {
      className: [
        "sr-only"
      ]
    }, f = [];
    let h = -1;
    for (; ++h < n.footnoteOrder.length; ) {
      const m = n.footnoteById.get(n.footnoteOrder[h]);
      if (!m) continue;
      const g = n.all(m), y = String(m.identifier).toUpperCase(), v = br(y.toLowerCase());
      let w = 0;
      const I = [], D = n.footnoteCounts.get(y);
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
        children: n.wrap(g, true)
      };
      n.patch(m, T), f.push(T);
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
            ...sl(c),
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
          children: n.wrap(f, true)
        },
        {
          type: "text",
          value: `
`
        }
      ]
    };
  }
  const Nh = (function(n) {
    if (n == null) return Jw;
    if (typeof n == "function") return yl(n);
    if (typeof n == "object") return Array.isArray(n) ? Qw(n) : Gw(n);
    if (typeof n == "string") return Xw(n);
    throw new Error("Expected function, string, or object as test");
  });
  function Qw(n) {
    const r = [];
    let i = -1;
    for (; ++i < n.length; ) r[i] = Nh(n[i]);
    return yl(l);
    function l(...u) {
      let a = -1;
      for (; ++a < r.length; ) if (r[a].apply(this, u)) return true;
      return false;
    }
  }
  function Gw(n) {
    const r = n;
    return yl(i);
    function i(l) {
      const u = l;
      let a;
      for (a in n) if (u[a] !== r[a]) return false;
      return true;
    }
  }
  function Xw(n) {
    return yl(r);
    function r(i) {
      return i && i.type === n;
    }
  }
  function yl(n) {
    return r;
    function r(i, l, u) {
      return !!(Zw(i) && n.call(this, i, typeof l == "number" ? l : void 0, u || void 0));
    }
  }
  function Jw() {
    return true;
  }
  function Zw(n) {
    return n !== null && typeof n == "object" && "type" in n;
  }
  const Dh = [], ex = true, Qd = false, tx = "skip";
  function nx(n, r, i, l) {
    let u;
    typeof r == "function" && typeof i != "function" ? (l = i, i = r) : u = r;
    const a = Nh(u), c = l ? -1 : 1;
    f(n, void 0, [])();
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
        let w = Dh, I, D, N;
        if ((!r || a(h, m, g[g.length - 1] || void 0)) && (w = rx(i(h, g)), w[0] === Qd)) return w;
        if ("children" in h && h.children) {
          const T = h;
          if (T.children && w[0] !== tx) for (D = (l ? T.children.length : -1) + c, N = g.concat(T); D > -1 && D < T.children.length; ) {
            const b = T.children[D];
            if (I = f(b, D, N)(), I[0] === Qd) return I;
            D = typeof I[1] == "number" ? I[1] : D + c;
          }
        }
        return w;
      }
    }
  }
  function rx(n) {
    return Array.isArray(n) ? n : typeof n == "number" ? [
      ex,
      n
    ] : n == null ? Dh : [
      n
    ];
  }
  function Oh(n, r, i, l) {
    let u, a, c;
    typeof r == "function" && typeof i != "function" ? (a = void 0, c = r, u = i) : (a = r, c = i, u = l), nx(n, a, f, u);
    function f(h, m) {
      const g = m[m.length - 1], y = g ? g.children.indexOf(h) : void 0;
      return c(h, y, g);
    }
  }
  const Mu = {}.hasOwnProperty, ix = {};
  function ox(n, r) {
    const i = r || ix, l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = {
      ...Uw,
      ...i.handlers
    }, f = {
      all: m,
      applyData: sx,
      definitionById: l,
      footnoteById: u,
      footnoteCounts: a,
      footnoteOrder: [],
      handlers: c,
      one: h,
      options: i,
      patch: lx,
      wrap: ax
    };
    return Oh(n, function(g) {
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
          const { children: D, ...N } = g, T = sl(N);
          return T.children = f.all(g), T;
        }
        return sl(g);
      }
      return (f.options.unknownHandler || ux)(f, g, y);
    }
    function m(g) {
      const y = [];
      if ("children" in g) {
        const v = g.children;
        let w = -1;
        for (; ++w < v.length; ) {
          const I = f.one(v[w], g);
          if (I) {
            if (w && v[w - 1].type === "break" && (!Array.isArray(I) && I.type === "text" && (I.value = Gd(I.value)), !Array.isArray(I) && I.type === "element")) {
              const D = I.children[0];
              D && D.type === "text" && (D.value = Gd(D.value));
            }
            Array.isArray(I) ? y.push(...I) : y.push(I);
          }
        }
      }
      return y;
    }
  }
  function lx(n, r) {
    n.position && (r.position = H0(n));
  }
  function sx(n, r) {
    let i = r;
    if (n && n.data) {
      const l = n.data.hName, u = n.data.hChildren, a = n.data.hProperties;
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
      i.type === "element" && a && Object.assign(i.properties, sl(a)), "children" in i && i.children && u !== null && u !== void 0 && (i.children = u);
    }
    return i;
  }
  function ux(n, r) {
    const i = r.data || {}, l = "value" in r && !(Mu.call(i, "hProperties") || Mu.call(i, "hChildren")) ? {
      type: "text",
      value: r.value
    } : {
      type: "element",
      tagName: "div",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, l), n.applyData(r, l);
  }
  function ax(n, r) {
    const i = [];
    let l = -1;
    for (r && i.push({
      type: "text",
      value: `
`
    }); ++l < n.length; ) l && i.push({
      type: "text",
      value: `
`
    }), i.push(n[l]);
    return r && n.length > 0 && i.push({
      type: "text",
      value: `
`
    }), i;
  }
  function Gd(n) {
    let r = 0, i = n.charCodeAt(r);
    for (; i === 9 || i === 32; ) r++, i = n.charCodeAt(r);
    return n.slice(r);
  }
  function Xd(n, r) {
    const i = ox(n, r), l = i.one(n, void 0), u = Kw(i), a = Array.isArray(l) ? {
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
  function cx(n, r) {
    return n && "run" in n ? async function(i, l) {
      const u = Xd(i, {
        file: l,
        ...r
      });
      await n.run(u, l);
    } : function(i, l) {
      return Xd(i, {
        file: l,
        ...n || r
      });
    };
  }
  function Jd(n) {
    if (n) throw n;
  }
  var vu, Zd;
  function fx() {
    if (Zd) return vu;
    Zd = 1;
    var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = function(m) {
      return typeof Array.isArray == "function" ? Array.isArray(m) : r.call(m) === "[object Array]";
    }, a = function(m) {
      if (!m || r.call(m) !== "[object Object]") return false;
      var g = n.call(m, "constructor"), y = m.constructor && m.constructor.prototype && n.call(m.constructor.prototype, "isPrototypeOf");
      if (m.constructor && !g && !y) return false;
      var v;
      for (v in m) ;
      return typeof v > "u" || n.call(m, v);
    }, c = function(m, g) {
      i && g.name === "__proto__" ? i(m, g.name, {
        enumerable: true,
        configurable: true,
        value: g.newValue,
        writable: true
      }) : m[g.name] = g.newValue;
    }, f = function(m, g) {
      if (g === "__proto__") if (n.call(m, g)) {
        if (l) return l(m, g).value;
      } else return;
      return m[g];
    };
    return vu = function h() {
      var m, g, y, v, w, I, D = arguments[0], N = 1, T = arguments.length, b = false;
      for (typeof D == "boolean" && (b = D, D = arguments[1] || {}, N = 2), (D == null || typeof D != "object" && typeof D != "function") && (D = {}); N < T; ++N) if (m = arguments[N], m != null) for (g in m) y = f(D, g), v = f(m, g), D !== v && (b && v && (a(v) || (w = u(v))) ? (w ? (w = false, I = y && u(y) ? y : []) : I = y && a(y) ? y : {}, c(D, {
        name: g,
        newValue: h(b, I, v)
      })) : typeof v < "u" && c(D, {
        name: g,
        newValue: v
      }));
      return D;
    }, vu;
  }
  var dx = fx();
  const wu = ul(dx);
  function bu(n) {
    if (typeof n != "object" || n === null) return false;
    const r = Object.getPrototypeOf(n);
    return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
  }
  function px() {
    const n = [], r = {
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
        const g = n[++a];
        let y = -1;
        if (h) {
          c(h);
          return;
        }
        for (; ++y < u.length; ) (m[y] === null || m[y] === void 0) && (m[y] = u[y]);
        u = m, g ? hx(g, f)(...m) : c(null, ...m);
      }
    }
    function l(u) {
      if (typeof u != "function") throw new TypeError("Expected `middelware` to be a function, not " + u);
      return n.push(u), r;
    }
  }
  function hx(n, r) {
    let i;
    return l;
    function l(...c) {
      const f = n.length > c.length;
      let h;
      f && c.push(u);
      try {
        h = n.apply(this, c);
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
  const en = {
    basename: mx,
    dirname: gx,
    extname: yx,
    join: vx,
    sep: "/"
  };
  function mx(n, r) {
    if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
    Bi(n);
    let i = 0, l = -1, u = n.length, a;
    if (r === void 0 || r.length === 0 || r.length > n.length) {
      for (; u--; ) if (n.codePointAt(u) === 47) {
        if (a) {
          i = u + 1;
          break;
        }
      } else l < 0 && (a = true, l = u + 1);
      return l < 0 ? "" : n.slice(i, l);
    }
    if (r === n) return "";
    let c = -1, f = r.length - 1;
    for (; u--; ) if (n.codePointAt(u) === 47) {
      if (a) {
        i = u + 1;
        break;
      }
    } else c < 0 && (a = true, c = u + 1), f > -1 && (n.codePointAt(u) === r.codePointAt(f--) ? f < 0 && (l = u) : (f = -1, l = c));
    return i === l ? l = c : l < 0 && (l = n.length), n.slice(i, l);
  }
  function gx(n) {
    if (Bi(n), n.length === 0) return ".";
    let r = -1, i = n.length, l;
    for (; --i; ) if (n.codePointAt(i) === 47) {
      if (l) {
        r = i;
        break;
      }
    } else l || (l = true);
    return r < 0 ? n.codePointAt(0) === 47 ? "/" : "." : r === 1 && n.codePointAt(0) === 47 ? "//" : n.slice(0, r);
  }
  function yx(n) {
    Bi(n);
    let r = n.length, i = -1, l = 0, u = -1, a = 0, c;
    for (; r--; ) {
      const f = n.codePointAt(r);
      if (f === 47) {
        if (c) {
          l = r + 1;
          break;
        }
        continue;
      }
      i < 0 && (c = true, i = r + 1), f === 46 ? u < 0 ? u = r : a !== 1 && (a = 1) : u > -1 && (a = -1);
    }
    return u < 0 || i < 0 || a === 0 || a === 1 && u === i - 1 && u === l + 1 ? "" : n.slice(u, i);
  }
  function vx(...n) {
    let r = -1, i;
    for (; ++r < n.length; ) Bi(n[r]), n[r] && (i = i === void 0 ? n[r] : i + "/" + n[r]);
    return i === void 0 ? "." : wx(i);
  }
  function wx(n) {
    Bi(n);
    const r = n.codePointAt(0) === 47;
    let i = xx(n, !r);
    return i.length === 0 && !r && (i = "."), i.length > 0 && n.codePointAt(n.length - 1) === 47 && (i += "/"), r ? "/" + i : i;
  }
  function xx(n, r) {
    let i = "", l = 0, u = -1, a = 0, c = -1, f, h;
    for (; ++c <= n.length; ) {
      if (c < n.length) f = n.codePointAt(c);
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
        } else i.length > 0 ? i += "/" + n.slice(u + 1, c) : i = n.slice(u + 1, c), l = c - u - 1;
        u = c, a = 0;
      } else f === 46 && a > -1 ? a++ : a = -1;
    }
    return i;
  }
  function Bi(n) {
    if (typeof n != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(n));
  }
  const kx = {
    cwd: Sx
  };
  function Sx() {
    return "/";
  }
  function Fu(n) {
    return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && n.auth === void 0);
  }
  function Ex(n) {
    if (typeof n == "string") n = new URL(n);
    else if (!Fu(n)) {
      const r = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + n + "`");
      throw r.code = "ERR_INVALID_ARG_TYPE", r;
    }
    if (n.protocol !== "file:") {
      const r = new TypeError("The URL must be of scheme file");
      throw r.code = "ERR_INVALID_URL_SCHEME", r;
    }
    return Ix(n);
  }
  function Ix(n) {
    if (n.hostname !== "") {
      const l = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw l.code = "ERR_INVALID_FILE_URL_HOST", l;
    }
    const r = n.pathname;
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
  const xu = [
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
      r ? Fu(r) ? i = {
        path: r
      } : typeof r == "string" || Cx(r) ? i = {
        value: r
      } : i = r : i = {}, this.cwd = "cwd" in i ? "" : kx.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
      let l = -1;
      for (; ++l < xu.length; ) {
        const a = xu[l];
        a in i && i[a] !== void 0 && i[a] !== null && (this[a] = a === "history" ? [
          ...i[a]
        ] : i[a]);
      }
      let u;
      for (u in i) xu.includes(u) || (this[u] = i[u]);
    }
    get basename() {
      return typeof this.path == "string" ? en.basename(this.path) : void 0;
    }
    set basename(r) {
      Su(r, "basename"), ku(r, "basename"), this.path = en.join(this.dirname || "", r);
    }
    get dirname() {
      return typeof this.path == "string" ? en.dirname(this.path) : void 0;
    }
    set dirname(r) {
      ep(this.basename, "dirname"), this.path = en.join(r || "", this.basename);
    }
    get extname() {
      return typeof this.path == "string" ? en.extname(this.path) : void 0;
    }
    set extname(r) {
      if (ku(r, "extname"), ep(this.dirname, "extname"), r) {
        if (r.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
        if (r.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = en.join(this.dirname, this.stem + (r || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(r) {
      Fu(r) && (r = Ex(r)), Su(r, "path"), this.path !== r && this.history.push(r);
    }
    get stem() {
      return typeof this.path == "string" ? en.basename(this.path, this.extname) : void 0;
    }
    set stem(r) {
      Su(r, "stem"), ku(r, "stem"), this.path = en.join(this.dirname || "", r + (this.extname || ""));
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
      const u = new ut(r, i, l);
      return this.path && (u.name = this.path + ":" + u.name, u.file = this.path), u.fatal = false, this.messages.push(u), u;
    }
    toString(r) {
      return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(r || void 0).decode(this.value);
    }
  }
  function ku(n, r) {
    if (n && n.includes(en.sep)) throw new Error("`" + r + "` cannot be a path: did not expect `" + en.sep + "`");
  }
  function Su(n, r) {
    if (!n) throw new Error("`" + r + "` cannot be empty");
  }
  function ep(n, r) {
    if (!n) throw new Error("Setting `" + r + "` requires `path` to be set too");
  }
  function Cx(n) {
    return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
  }
  const Tx = (function(n) {
    const l = this.constructor.prototype, u = l[n], a = function() {
      return u.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, l), a;
  }), _x = {}.hasOwnProperty;
  class ua extends Tx {
    constructor() {
      super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = px();
    }
    copy() {
      const r = new ua();
      let i = -1;
      for (; ++i < this.attachers.length; ) {
        const l = this.attachers[i];
        r.use(...l);
      }
      return r.data(wu(true, {}, this.namespace)), r;
    }
    data(r, i) {
      return typeof r == "string" ? arguments.length === 2 ? (Cu("data", this.frozen), this.namespace[r] = i, this) : _x.call(this.namespace, r) && this.namespace[r] || void 0 : r ? (Cu("data", this.frozen), this.namespace = r, this) : this.namespace;
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
      const i = nl(r), l = this.parser || this.Parser;
      return Eu("parse", l), l(String(i), i);
    }
    process(r, i) {
      const l = this;
      return this.freeze(), Eu("process", this.parser || this.Parser), Iu("process", this.compiler || this.Compiler), i ? u(void 0, i) : new Promise(u);
      function u(a, c) {
        const f = nl(r), h = l.parse(f);
        l.run(h, f, function(g, y, v) {
          if (g || !y || !v) return m(g);
          const w = y, I = l.stringify(w, v);
          Dx(I) ? v.value = I : v.result = I, m(g, v);
        });
        function m(g, y) {
          g || !y ? c(g) : a ? a(y) : i(void 0, y);
        }
      }
    }
    processSync(r) {
      let i = false, l;
      return this.freeze(), Eu("processSync", this.parser || this.Parser), Iu("processSync", this.compiler || this.Compiler), this.process(r, u), np("processSync", "process", i), l;
      function u(a, c) {
        i = true, Jd(a), l = c;
      }
    }
    run(r, i, l) {
      tp(r), this.freeze();
      const u = this.transformers;
      return !l && typeof i == "function" && (l = i, i = void 0), l ? a(void 0, l) : new Promise(a);
      function a(c, f) {
        const h = nl(i);
        u.run(r, h, m);
        function m(g, y, v) {
          const w = y || r;
          g ? f(g) : c ? c(w) : l(void 0, w, v);
        }
      }
    }
    runSync(r, i) {
      let l = false, u;
      return this.run(r, i, a), np("runSync", "run", l), u;
      function a(c, f) {
        Jd(c), u = f, l = true;
      }
    }
    stringify(r, i) {
      this.freeze();
      const l = nl(i), u = this.compiler || this.Compiler;
      return Iu("stringify", u), tp(r), u(r, l);
    }
    use(r, ...i) {
      const l = this.attachers, u = this.namespace;
      if (Cu("use", this.frozen), r != null) if (typeof r == "function") h(r, i);
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
        f(m.plugins), m.settings && (u.settings = wu(true, u.settings, m.settings));
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
          bu(D) && bu(w) && (w = wu(true, D, w)), l[v] = [
            m,
            w,
            ...I
          ];
        }
      }
    }
  }
  const Px = new ua().freeze();
  function Eu(n, r) {
    if (typeof r != "function") throw new TypeError("Cannot `" + n + "` without `parser`");
  }
  function Iu(n, r) {
    if (typeof r != "function") throw new TypeError("Cannot `" + n + "` without `compiler`");
  }
  function Cu(n, r) {
    if (r) throw new Error("Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
  function tp(n) {
    if (!bu(n) || typeof n.type != "string") throw new TypeError("Expected node, got `" + n + "`");
  }
  function np(n, r, i) {
    if (!i) throw new Error("`" + n + "` finished async. Use `" + r + "` instead");
  }
  function nl(n) {
    return Nx(n) ? n : new Rh(n);
  }
  function Nx(n) {
    return !!(n && typeof n == "object" && "message" in n && "messages" in n);
  }
  function Dx(n) {
    return typeof n == "string" || Ox(n);
  }
  function Ox(n) {
    return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
  }
  const Rx = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", rp = [], ip = {
    allowDangerousHtml: true
  }, Ax = /^(https?|ircs?|mailto|xmpp)$/i, Lx = [
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
  function zx(n) {
    const r = Mx(n), i = bx(n);
    return Fx(r.runSync(r.parse(i), i), n);
  }
  function Mx(n) {
    const r = n.rehypePlugins || rp, i = n.remarkPlugins || rp, l = n.remarkRehypeOptions ? {
      ...n.remarkRehypeOptions,
      ...ip
    } : ip;
    return Px().use(mw).use(i).use(cx, l).use(r);
  }
  function bx(n) {
    const r = n.children || "", i = new Rh();
    return typeof r == "string" && (i.value = r), i;
  }
  function Fx(n, r) {
    const i = r.allowedElements, l = r.allowElement, u = r.components, a = r.disallowedElements, c = r.skipHtml, f = r.unwrapDisallowed, h = r.urlTransform || Bx;
    for (const g of Lx) Object.hasOwn(r, g.from) && ("" + g.from + (g.to ? "use `" + g.to + "` instead" : "remove it") + Rx + g.id, void 0);
    return Oh(n, m), K0(n, {
      Fragment: ie.Fragment,
      components: u,
      ignoreInvalidStyle: true,
      jsx: ie.jsx,
      jsxs: ie.jsxs,
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
        for (w in mu) if (Object.hasOwn(mu, w) && Object.hasOwn(g.properties, w)) {
          const I = g.properties[w], D = mu[w];
          (D === null || D.includes(g.tagName)) && (g.properties[w] = h(String(I || ""), w, g));
        }
      }
      if (g.type === "element") {
        let w = i ? !i.includes(g.tagName) : a ? a.includes(g.tagName) : false;
        if (!w && l && typeof y == "number" && (w = !l(g, y, v)), w && v && typeof y == "number") return f && g.children ? v.children.splice(y, 1, ...g.children) : v.children.splice(y, 1), y;
      }
    }
  }
  function Bx(n) {
    const r = n.indexOf(":"), i = n.indexOf("?"), l = n.indexOf("#"), u = n.indexOf("/");
    return r === -1 || u !== -1 && r > u || i !== -1 && r > i || l !== -1 && r > l || Ax.test(n.slice(0, r)) ? n : "";
  }
  function jx() {
    const [n, r] = ve.useState(null), [i, l] = ve.useState(false), u = ve.useRef(null), a = ve.useRef(null), c = ve.useCallback(async (h) => {
      if (u.current) {
        console.log("[WebLLM] Engine already exists (singleton), skipping load");
        return;
      }
      if (a.current) return console.log("[WebLLM] Load already in progress, awaiting shared promise"), a.current;
      const m = h.chat_model.name;
      return console.log("[WebLLM] Loading model from pre-populated cache:", m), l(true), a.current = (async () => {
        try {
          const { CreateWebWorkerMLCEngine: g } = await up(async () => {
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
    }, []), f = ve.useCallback(async (h, m) => {
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
      engine: n,
      loading: i,
      loadModel: c,
      chat: f
    };
  }
  function Ux(n) {
    async function r(i, l) {
      if (!n) return [];
      try {
        return (await wd(n, {
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
          return (await wd(n, {
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
  function Vx() {
    const n = ve.useRef(null), r = ve.useRef(false), i = ve.useRef(/* @__PURE__ */ new Map());
    return ve.useEffect(() => {
      const u = new Worker(new URL("/offline-llm-knowledge-system/import/assets/embed-query-worker-B5za7fZ3.js", import.meta.url), {
        type: "module"
      });
      return n.current = u, u.onmessage = (a) => {
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
        u.terminate(), n.current = null, r.current = false;
      };
    }, []), {
      embedQuery: ve.useCallback(async (u) => {
        const a = n.current;
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
  const Hx = 14e3, op = 1100, lp = 300, Wx = 3200, $x = 7e3, Yx = 3500, qx = " Write in complete sentences. Do not repeat the question. If the documents do not contain the answer, say so.";
  function Kx(n) {
    const r = n.split(/\n##|\n#|\n-\s|\n\*/)[0].trim();
    return (r.length > lp ? r.slice(0, lp).trimEnd() + "\u2026" : r) + qx;
  }
  function sp(n, r, i) {
    const l = [];
    let u = 0;
    for (let a = 0; a < n.length; a++) {
      const c = n[a].text.length > op ? n[a].text.slice(0, op).trimEnd() + "\u2026" : n[a].text, f = `[${i} ${a + 1} \u2014 ${n[a].source}]
${c}`;
      if (u + f.length > r) break;
      l.push(f), u += f.length;
    }
    return l.join(`

`);
  }
  function Tu(n, r, i, l, u) {
    var _a, _b;
    const a = ((_a = l == null ? void 0 : l.system_instructions) == null ? void 0 : _a.trim()) || "You are a helpful assistant.", c = Kx(a), f = (u == null ? void 0 : u.wikiContent) ? `[WIKI]
${u.wikiContent.slice(0, Wx)}` : "", h = ((_b = u == null ? void 0 : u.graphChunks) == null ? void 0 : _b.length) ? `[GRAPH CONTEXT]
${sp(u.graphChunks, $x, "GRAPH")}` : "", m = i.length ? `[RETRIEVED DOCS]
${sp(i, Yx, "DOC")}` : "", g = [
      f,
      h,
      m
    ].filter(Boolean), y = g.length > 0 ? `${g.join(`

`)}

Question: ${r}` : r;
    let v = n.map((D) => ({
      role: D.role,
      content: D.content
    }));
    const w = (D) => c.length + D.reduce((N, T) => N + T.content.length, 0) + y.length;
    for (; w(v) > Hx && v.length >= 2; ) v = v.slice(2), console.log("[chatMessages] History trimmed: dropped oldest message pair, remaining:", v.length);
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
  function Qx(n) {
    const r = /* @__PURE__ */ new Map();
    for (const i of n) r.has(i.a) || r.set(i.a, []), r.has(i.b) || r.set(i.b, []), r.get(i.a).push(i.b), r.get(i.b).push(i.a);
    return r;
  }
  function Gx(n, r, i = 2) {
    const l = new Set(r);
    let u = [
      ...r
    ];
    for (let a = 0; a < i; a++) {
      const c = [];
      for (const f of u) for (const h of n.get(f) ?? []) l.has(h) || (l.add(h), c.push(h));
      if (u = c, u.length === 0) break;
    }
    return l;
  }
  function Xx(n, r) {
    return n.filter((i) => r.has(i.id));
  }
  function Jx(n) {
    return n.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase().slice(0, 80);
  }
  async function Zx(n, r, i, l) {
    var _a, _b, _c;
    const a = `wiki/${Jx(n)}.md`;
    try {
      const h = await rl(r, a), m = new TextDecoder().decode(h);
      return console.log(`[wikiCache] hit: ${a} (${m.length} chars)`), m;
    } catch {
    }
    const c = `Write a concise 3-5 sentence reference summary for "${n}". Be factual and specific. Use only information from the excerpts below. Do not repeat the instructions.

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
      await m0(r, a, new TextEncoder().encode(f)), console.log(`[wikiCache] written: ${a} (${f.length} chars)`);
    } catch (h) {
      console.warn("[wikiCache] OPFS write failed (non-fatal):", h);
    }
    return f;
  }
  function ek({ oramaDb: n, manifest: r, onClear: i, chunks: l, graphEdges: u }) {
    const [a, c] = ve.useState([]), f = ve.useRef([]);
    ve.useEffect(() => {
      f.current = a;
    }, [
      a
    ]);
    const [h, m] = ve.useState(""), [g, y] = ve.useState(false), [v, w] = ve.useState(false), [I, D] = ve.useState(null), N = ve.useRef(null), T = ve.useRef(null), { engine: b, loading: L, loadModel: W, chat: Z } = jx(), { search: A } = Ux(n), { embedQuery: ee } = Vx(), ne = ve.useMemo(() => u.length > 0 ? Qx(u) : /* @__PURE__ */ new Map(), [
      u
    ]);
    ve.useEffect(() => {
      b && !v && w(true);
    }, [
      b,
      v
    ]), ve.useEffect(() => {
      r && W(r).catch((B) => D(B instanceof Error ? B.message : String(B)));
    }, [
      r,
      W
    ]), ve.useEffect(() => {
      var _a;
      (_a = N.current) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth"
      });
    }, [
      a
    ]);
    const le = ve.useCallback(async () => {
      var _a, _b;
      const B = h.trim();
      if (!B || g || !b && !v) return;
      m(""), y(true);
      const ue = {
        role: "user",
        content: B
      };
      c((U) => [
        ...U,
        ue
      ]);
      const X = {
        role: "assistant",
        content: "",
        sources: [],
        streaming: true
      };
      c((U) => [
        ...U,
        X
      ]);
      try {
        const U = await ee(B), q = await A(B, U);
        let te = [];
        if (ne.size > 0 && l.length > 0) {
          const M = q.map((pe) => pe.id), S = Gx(ne, M, 2), oe = new Set(M);
          te = Xx(l, S).filter((pe) => !oe.has(pe.id));
        }
        let j = "";
        if (b && r && q.length > 0) {
          const M = q[0].source, S = q.map((oe) => oe.text).join(`

`);
          j = await Zx(M, r.manifest_hash, b, S);
        }
        c((M) => {
          const S = [
            ...M
          ], oe = S[S.length - 1];
          return oe.role === "assistant" && (S[S.length - 1] = {
            ...oe,
            sources: q
          }), S;
        });
        const G = a.filter((M) => !(M.role === "assistant" && M.content.startsWith("Error:"))).map((M) => ({
          role: M.role,
          content: M.content
        })), k = Tu(G, B, q, r, {
          wikiContent: j,
          graphChunks: te
        });
        console.group("[Chat] Sending to model"), console.log("Query:", B), console.log(`RAG chunks (${q.length}):`, q.map((M) => ({
          source: M.source,
          preview: M.text.slice(0, 100)
        }))), console.log(`Graph chunks (${te.length}):`, te.map((M) => ({
          source: M.source,
          preview: M.text.slice(0, 100)
        }))), console.log(`Wiki content (${j.length} chars):`, j.slice(0, 200)), console.log("System prompt:", (_b = (_a = k[0]) == null ? void 0 : _a.content) == null ? void 0 : _b.slice(0, 500)), console.log("Full messages:", JSON.stringify(k, null, 2)), console.groupEnd();
        let P = "";
        await Z(k, (M) => {
          P += M, c((S) => {
            const oe = [
              ...S
            ], pe = oe[oe.length - 1];
            return pe.role === "assistant" && (oe[oe.length - 1] = {
              ...pe,
              content: P,
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
      } catch (U) {
        const q = U instanceof Error ? U.message : String(U);
        c((te) => {
          const j = [
            ...te
          ], G = j[j.length - 1];
          return G.role === "assistant" && (j[j.length - 1] = {
            ...G,
            content: `Error: ${q}`,
            streaming: false
          }), j;
        });
      } finally {
        y(false);
      }
    }, [
      h,
      g,
      b,
      v,
      ee,
      A,
      Z,
      a,
      ne,
      l,
      r
    ]), he = ve.useCallback((B) => {
      B.key === "Enter" && !B.shiftKey && (B.preventDefault(), le());
    }, [
      le
    ]), Q = ve.useCallback(() => {
      window.confirm("Clear the knowledge base? You will need to import a zip again.") && i();
    }, [
      i
    ]);
    return ve.useEffect(() => {
      const B = (q) => b ? n ? true : (console.error(`[kb.${q}] No knowledge base loaded`), false) : (console.error(`[kb.${q}] Engine not loaded yet`), false), ue = async (q) => {
        const te = await ee(q);
        return A(q, te);
      }, X = async (q) => {
        var _a, _b;
        if (!B("ask")) return "";
        console.time("[kb.ask] total");
        const te = await ue(q), j = Tu([], q, te, r);
        console.log("[kb.ask] messages:", JSON.stringify(j, null, 2));
        let G = "";
        const k = await b.chat.completions.create({
          messages: j,
          stream: true,
          max_tokens: 512
        });
        for await (const P of k) {
          const M = ((_b = (_a = P.choices[0]) == null ? void 0 : _a.delta) == null ? void 0 : _b.content) ?? "";
          M && (G += M);
        }
        return console.timeEnd("[kb.ask] total"), console.log("[kb.ask] answer:", G), G;
      }, U = {
        ask: X,
        search: async (q) => {
          if (!B("search")) return [];
          const te = await ue(q);
          return console.table(te.map((j, G) => ({
            doc: G + 1,
            source: j.source,
            chars: j.text.length,
            preview: j.text.slice(0, 120).replace(/\n/g, " ")
          }))), te;
        },
        prompt: async (q) => {
          if (!B("prompt")) return null;
          const te = await ue(q), j = Tu([], q, te, r);
          return console.group("[kb.prompt] Full message array"), j.forEach((G, k) => console.log(`[${k}] ${G.role} (${G.content.length} chars):
${G.content}`)), console.groupEnd(), j;
        },
        history: () => {
          const q = f.current;
          return q.length === 0 ? (console.log("[kb.history] No messages yet"), []) : (console.table(q.map((te, j) => ({
            "#": j,
            role: te.role,
            chars: te.content.length,
            preview: te.content.slice(0, 100).replace(/\n/g, " ")
          }))), q);
        },
        batch: async (q) => {
          if (!B("batch")) return;
          console.log(`[kb.batch] Running ${q.length} questions...`);
          const te = [];
          for (const j of q) {
            const G = Date.now(), k = await X(j);
            te.push({
              question: j,
              answer: k.slice(0, 120),
              ms: Date.now() - G
            });
          }
          return console.table(te), te;
        }
      };
      window.kb = U, window.askchat = X, console.log("%c[kb] Console API ready", "color: #4ade80; font-weight: bold", `
  kb.ask("question")          \u2192 search + LLM answer`, `
  kb.search("question")       \u2192 show retrieved chunks`, `
  kb.prompt("question")       \u2192 show full prompt without calling LLM`, `
  kb.history()                \u2192 show current chat history`, `
  kb.batch(["q1","q2"])       \u2192 run multiple questions`, `
  askchat("question")         \u2192 alias for kb.ask()`);
    }, [
      b,
      n,
      r,
      ee,
      A
    ]), ie.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0,
        flex: 1
      },
      children: [
        ie.jsxs("div", {
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
            ie.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10
              },
              children: [
                ie.jsx("div", {
                  style: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: v ? "var(--success)" : L ? "var(--accent)" : "var(--muted)"
                  }
                }),
                ie.jsx("span", {
                  style: {
                    fontWeight: 600,
                    fontSize: 15
                  },
                  children: v ? "Chat ready" : L ? "Uploading to GPU..." : "Initializing"
                }),
                I && ie.jsx("span", {
                  style: {
                    color: "var(--danger)",
                    fontSize: 12
                  },
                  children: I
                })
              ]
            }),
            ie.jsx("button", {
              onClick: Q,
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
        ie.jsxs("div", {
          style: {
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: 16
          },
          children: [
            a.length === 0 && ie.jsx("div", {
              style: {
                textAlign: "center",
                color: "var(--muted)",
                marginTop: 60,
                fontSize: 14
              },
              children: "Ask a question about your knowledge base"
            }),
            a.map((B, ue) => ie.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: B.role === "user" ? "flex-end" : "flex-start",
                gap: 6
              },
              children: [
                ie.jsx("div", {
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
                  children: B.role === "assistant" ? B.content ? ie.jsxs(ie.Fragment, {
                    children: [
                      ie.jsx(zx, {
                        children: B.content
                      }),
                      B.streaming && ie.jsx("span", {
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
                  }) : B.streaming ? ie.jsx("span", {
                    style: {
                      color: "var(--muted)"
                    },
                    children: "..."
                  }) : "" : ie.jsx("span", {
                    style: {
                      whiteSpace: "pre-wrap"
                    },
                    children: B.content
                  })
                }),
                B.role === "assistant" && B.sources && B.sources.length > 0 && !B.streaming && ie.jsxs("div", {
                  style: {
                    maxWidth: "75%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4
                  },
                  children: [
                    ie.jsx("span", {
                      style: {
                        fontSize: 11,
                        color: "var(--muted)",
                        marginLeft: 2
                      },
                      children: "Sources:"
                    }),
                    B.sources.map((X, U) => ie.jsxs("div", {
                      style: {
                        fontSize: 12,
                        color: "var(--muted)",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        padding: "6px 10px"
                      },
                      children: [
                        ie.jsxs("span", {
                          style: {
                            fontWeight: 600,
                            color: "var(--text)"
                          },
                          children: [
                            X.source,
                            X.page ? ` p.${X.page}` : ""
                          ]
                        }),
                        ie.jsxs("span", {
                          style: {
                            marginLeft: 6
                          },
                          children: [
                            X.text.slice(0, 120),
                            X.text.length > 120 ? "..." : ""
                          ]
                        })
                      ]
                    }, U))
                  ]
                })
              ]
            }, ue)),
            ie.jsx("div", {
              ref: N
            })
          ]
        }),
        ie.jsx("div", {
          style: {
            padding: "14px 20px",
            borderTop: "1px solid var(--border)",
            background: "var(--surface)",
            flexShrink: 0
          },
          children: ie.jsxs("div", {
            style: {
              display: "flex",
              gap: 10,
              alignItems: "flex-end"
            },
            children: [
              ie.jsx("textarea", {
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
              ie.jsx("button", {
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
        ie.jsx("style", {
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
  function tk(n) {
    return n < 1024 * 1024 ? `${(n / 1024).toFixed(0)} KB` : n < 1024 * 1024 * 1024 ? `${(n / (1024 * 1024)).toFixed(1)} MB` : `${(n / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  }
  function nk(n) {
    return n.loading ? "\u2026" : n.used === 0 ? "empty" : `${tk(n.used)} used`;
  }
  function rk() {
    const [n, r] = ve.useState({
      used: 0,
      quota: 0,
      loading: true
    }), i = ve.useCallback(async () => {
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
    return ve.useEffect(() => {
      i();
    }, [
      i
    ]), {
      info: n,
      refresh: i
    };
  }
  function ik() {
    const { stage: n, progress: r, error: i, importZip: l, clearKnowledgeBase: u, oramaDb: a, manifest: c, chunks: f, graphEdges: h } = y0(), { info: m, refresh: g } = rk(), y = n === "extracting" || n === "caching" || n === "loading-index", v = n === "loading-model" || n === "ready";
    return ie.jsxs("div", {
      style: {
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
        display: "flex",
        flexDirection: "column"
      },
      children: [
        ie.jsxs("nav", {
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
            ie.jsx("span", {
              style: {
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "-0.5px"
              },
              children: "Knowledge Base Chat"
            }),
            !v && ie.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 4
              },
              children: [
                ie.jsxs("button", {
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
                    nk(m)
                  ]
                }),
                ie.jsx("span", {
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
        ie.jsxs("main", {
          style: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          children: [
            n === "idle" && ie.jsxs("div", {
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
                ie.jsxs("div", {
                  style: {
                    textAlign: "center",
                    marginBottom: 8
                  },
                  children: [
                    ie.jsx("h1", {
                      style: {
                        fontSize: 28,
                        fontWeight: 700,
                        marginBottom: 8,
                        letterSpacing: "-0.5px"
                      },
                      children: "Import Knowledge Base"
                    }),
                    ie.jsx("p", {
                      style: {
                        color: "var(--muted)",
                        fontSize: 15,
                        maxWidth: 400
                      },
                      children: "Drop your exported knowledge base zip to load it for offline chat."
                    })
                  ]
                }),
                ie.jsx(v0, {
                  onFile: l,
                  disabled: false
                })
              ]
            }),
            y && ie.jsx("div", {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 40
              },
              children: ie.jsx(xd, {
                stage: n,
                progress: r,
                error: null
              })
            }),
            n === "error" && ie.jsxs("div", {
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
                ie.jsx(xd, {
                  stage: n,
                  progress: r,
                  error: i
                }),
                ie.jsx("button", {
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
            v && ie.jsx(ek, {
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
  bg.createRoot(document.getElementById("root")).render(ie.jsx(Dg.StrictMode, {
    children: ie.jsx(ik, {})
  }));
})();
export {
  vk as A,
  wd as B,
  hk as C,
  vp as D,
  sk as E,
  dk as F,
  ju as G,
  zr as H,
  hy as I,
  ad as J,
  Zo as K,
  Qy as L,
  hd as M,
  Gy as N,
  fk as O,
  Uy as P,
  yk as Q,
  Ky as R,
  gp as S,
  o0 as T,
  __tla,
  lk as a,
  ok as b,
  ze as c,
  fy as d,
  ak as e,
  uk as f,
  rn as g,
  ky as h,
  Mi as i,
  Py as j,
  gk as k,
  kp as l,
  Sp as m,
  mk as n,
  ck as o,
  al as p,
  xy as q,
  pk as r,
  oy as s,
  Ye as t,
  ay as u,
  yy as v,
  bi as w,
  ol as x,
  Cp as y,
  Vp as z
};
