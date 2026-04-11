var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let Ek, Sd, wk, xp, dk, yk, Wu, Mr, my, dd, el, Ky, yd, Xy, gk, Vy, Sk, Qy, vp, l0, fk, ck, Me, dy, hk, pk, on, Sy, bi, Ny, kk, Ep, Ip, xk, mk, cl, ky, vk, ly, Ge, cy, vy, Fi, ll, _p, Hp;
let __tla = (async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
    new MutationObserver((s) => {
      for (const a of s) if (a.type === "childList") for (const c of a.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && l(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function i(s) {
      const a = {};
      return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
    }
    function l(s) {
      if (s.ep) return;
      s.ep = true;
      const a = i(s);
      fetch(s.href, a);
    }
  })();
  function al(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var ou = {
    exports: {}
  }, Ci = {}, lu = {
    exports: {}
  }, Ie = {};
  var Kf;
  function Pg() {
    if (Kf) return Ie;
    Kf = 1;
    var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
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
    }, I = Object.assign, N = {};
    function D(_, b, S) {
      this.props = _, this.context = b, this.refs = N, this.updater = S || w;
    }
    D.prototype.isReactComponent = {}, D.prototype.setState = function(_, b) {
      if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, _, b, "setState");
    }, D.prototype.forceUpdate = function(_) {
      this.updater.enqueueForceUpdate(this, _, "forceUpdate");
    };
    function T() {
    }
    T.prototype = D.prototype;
    function M(_, b, S) {
      this.props = _, this.context = b, this.refs = N, this.updater = S || w;
    }
    var L = M.prototype = new T();
    L.constructor = M, I(L, D.prototype), L.isPureReactComponent = true;
    var V = Array.isArray, Z = Object.prototype.hasOwnProperty, O = {
      current: null
    }, ee = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function re(_, b, S) {
      var oe, ce = {}, de = null, Ce = null;
      if (b != null) for (oe in b.ref !== void 0 && (Ce = b.ref), b.key !== void 0 && (de = "" + b.key), b) Z.call(b, oe) && !ee.hasOwnProperty(oe) && (ce[oe] = b[oe]);
      var ke = arguments.length - 2;
      if (ke === 1) ce.children = S;
      else if (1 < ke) {
        for (var Te = Array(ke), We = 0; We < ke; We++) Te[We] = arguments[We + 2];
        ce.children = Te;
      }
      if (_ && _.defaultProps) for (oe in ke = _.defaultProps, ke) ce[oe] === void 0 && (ce[oe] = ke[oe]);
      return {
        $$typeof: t,
        type: _,
        key: de,
        ref: Ce,
        props: ce,
        _owner: O.current
      };
    }
    function se(_, b) {
      return {
        $$typeof: t,
        type: _.type,
        key: b,
        ref: _.ref,
        props: _.props,
        _owner: _._owner
      };
    }
    function me(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function X(_) {
      var b = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + _.replace(/[=:]/g, function(S) {
        return b[S];
      });
    }
    var ne = /\/+/g;
    function q(_, b) {
      return typeof _ == "object" && _ !== null && _.key != null ? X("" + _.key) : b.toString(36);
    }
    function te(_, b, S, oe, ce) {
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
      if (Ce) return Ce = _, ce = ce(Ce), _ = oe === "" ? "." + q(Ce, 0) : oe, V(ce) ? (S = "", _ != null && (S = _.replace(ne, "$&/") + "/"), te(ce, b, S, "", function(We) {
        return We;
      })) : ce != null && (me(ce) && (ce = se(ce, S + (!ce.key || Ce && Ce.key === ce.key ? "" : ("" + ce.key).replace(ne, "$&/") + "/") + _)), b.push(ce)), 1;
      if (Ce = 0, oe = oe === "" ? "." : oe + ":", V(_)) for (var ke = 0; ke < _.length; ke++) {
        de = _[ke];
        var Te = oe + q(de, ke);
        Ce += te(de, b, S, Te, ce);
      }
      else if (Te = v(_), typeof Te == "function") for (_ = Te.call(_), ke = 0; !(de = _.next()).done; ) de = de.value, Te = oe + q(de, ke++), Ce += te(de, b, S, Te, ce);
      else if (de === "object") throw b = String(_), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return Ce;
    }
    function U(_, b, S) {
      if (_ == null) return _;
      var oe = [], ce = 0;
      return te(_, oe, "", "", function(de) {
        return b.call(S, de, ce++);
      }), oe;
    }
    function ie(_) {
      if (_._status === -1) {
        var b = _._result;
        b = b(), b.then(function(S) {
          (_._status === 0 || _._status === -1) && (_._status = 1, _._result = S);
        }, function(S) {
          (_._status === 0 || _._status === -1) && (_._status = 2, _._result = S);
        }), _._status === -1 && (_._status = 0, _._result = b);
      }
      if (_._status === 1) return _._result.default;
      throw _._result;
    }
    var K = {
      current: null
    }, B = {
      transition: null
    }, G = {
      ReactCurrentDispatcher: K,
      ReactCurrentBatchConfig: B,
      ReactCurrentOwner: O
    };
    function k() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return Ie.Children = {
      map: U,
      forEach: function(_, b, S) {
        U(_, function() {
          b.apply(this, arguments);
        }, S);
      },
      count: function(_) {
        var b = 0;
        return U(_, function() {
          b++;
        }), b;
      },
      toArray: function(_) {
        return U(_, function(b) {
          return b;
        }) || [];
      },
      only: function(_) {
        if (!me(_)) throw Error("React.Children.only expected to receive a single React element child.");
        return _;
      }
    }, Ie.Component = D, Ie.Fragment = i, Ie.Profiler = s, Ie.PureComponent = M, Ie.StrictMode = l, Ie.Suspense = h, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, Ie.act = k, Ie.cloneElement = function(_, b, S) {
      if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
      var oe = I({}, _.props), ce = _.key, de = _.ref, Ce = _._owner;
      if (b != null) {
        if (b.ref !== void 0 && (de = b.ref, Ce = O.current), b.key !== void 0 && (ce = "" + b.key), _.type && _.type.defaultProps) var ke = _.type.defaultProps;
        for (Te in b) Z.call(b, Te) && !ee.hasOwnProperty(Te) && (oe[Te] = b[Te] === void 0 && ke !== void 0 ? ke[Te] : b[Te]);
      }
      var Te = arguments.length - 2;
      if (Te === 1) oe.children = S;
      else if (1 < Te) {
        ke = Array(Te);
        for (var We = 0; We < Te; We++) ke[We] = arguments[We + 2];
        oe.children = ke;
      }
      return {
        $$typeof: t,
        type: _.type,
        key: ce,
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
      var b = re.bind(null, _);
      return b.type = _, b;
    }, Ie.createRef = function() {
      return {
        current: null
      };
    }, Ie.forwardRef = function(_) {
      return {
        $$typeof: f,
        render: _
      };
    }, Ie.isValidElement = me, Ie.lazy = function(_) {
      return {
        $$typeof: g,
        _payload: {
          _status: -1,
          _result: _
        },
        _init: ie
      };
    }, Ie.memo = function(_, b) {
      return {
        $$typeof: m,
        type: _,
        compare: b === void 0 ? null : b
      };
    }, Ie.startTransition = function(_) {
      var b = B.transition;
      B.transition = {};
      try {
        _();
      } finally {
        B.transition = b;
      }
    }, Ie.unstable_act = k, Ie.useCallback = function(_, b) {
      return K.current.useCallback(_, b);
    }, Ie.useContext = function(_) {
      return K.current.useContext(_);
    }, Ie.useDebugValue = function() {
    }, Ie.useDeferredValue = function(_) {
      return K.current.useDeferredValue(_);
    }, Ie.useEffect = function(_, b) {
      return K.current.useEffect(_, b);
    }, Ie.useId = function() {
      return K.current.useId();
    }, Ie.useImperativeHandle = function(_, b, S) {
      return K.current.useImperativeHandle(_, b, S);
    }, Ie.useInsertionEffect = function(_, b) {
      return K.current.useInsertionEffect(_, b);
    }, Ie.useLayoutEffect = function(_, b) {
      return K.current.useLayoutEffect(_, b);
    }, Ie.useMemo = function(_, b) {
      return K.current.useMemo(_, b);
    }, Ie.useReducer = function(_, b, S) {
      return K.current.useReducer(_, b, S);
    }, Ie.useRef = function(_) {
      return K.current.useRef(_);
    }, Ie.useState = function(_) {
      return K.current.useState(_);
    }, Ie.useSyncExternalStore = function(_, b, S) {
      return K.current.useSyncExternalStore(_, b, S);
    }, Ie.useTransition = function() {
      return K.current.useTransition();
    }, Ie.version = "18.3.1", Ie;
  }
  var Xf;
  function Uu() {
    return Xf || (Xf = 1, lu.exports = Pg()), lu.exports;
  }
  var Jf;
  function Ng() {
    if (Jf) return Ci;
    Jf = 1;
    var t = Uu(), r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = {
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
        _owner: s.current
      };
    }
    return Ci.Fragment = i, Ci.jsx = c, Ci.jsxs = c, Ci;
  }
  var Zf;
  function Dg() {
    return Zf || (Zf = 1, ou.exports = Ng()), ou.exports;
  }
  var j = Dg(), pe = Uu();
  const Rg = al(pe);
  var Zo = {}, su = {
    exports: {}
  }, yt = {}, uu = {
    exports: {}
  }, au = {};
  var ed;
  function Ag() {
    return ed || (ed = 1, (function(t) {
      function r(B, G) {
        var k = B.length;
        B.push(G);
        e: for (; 0 < k; ) {
          var _ = k - 1 >>> 1, b = B[_];
          if (0 < s(b, G)) B[_] = G, B[k] = b, k = _;
          else break e;
        }
      }
      function i(B) {
        return B.length === 0 ? null : B[0];
      }
      function l(B) {
        if (B.length === 0) return null;
        var G = B[0], k = B.pop();
        if (k !== G) {
          B[0] = k;
          e: for (var _ = 0, b = B.length, S = b >>> 1; _ < S; ) {
            var oe = 2 * (_ + 1) - 1, ce = B[oe], de = oe + 1, Ce = B[de];
            if (0 > s(ce, k)) de < b && 0 > s(Ce, ce) ? (B[_] = Ce, B[de] = k, _ = de) : (B[_] = ce, B[oe] = k, _ = oe);
            else if (de < b && 0 > s(Ce, k)) B[_] = Ce, B[de] = k, _ = de;
            else break e;
          }
        }
        return G;
      }
      function s(B, G) {
        var k = B.sortIndex - G.sortIndex;
        return k !== 0 ? k : B.id - G.id;
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
      var h = [], m = [], g = 1, y = null, v = 3, w = false, I = false, N = false, D = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function L(B) {
        for (var G = i(m); G !== null; ) {
          if (G.callback === null) l(m);
          else if (G.startTime <= B) l(m), G.sortIndex = G.expirationTime, r(h, G);
          else break;
          G = i(m);
        }
      }
      function V(B) {
        if (N = false, L(B), !I) if (i(h) !== null) I = true, ie(Z);
        else {
          var G = i(m);
          G !== null && K(V, G.startTime - B);
        }
      }
      function Z(B, G) {
        I = false, N && (N = false, T(re), re = -1), w = true;
        var k = v;
        try {
          for (L(G), y = i(h); y !== null && (!(y.expirationTime > G) || B && !X()); ) {
            var _ = y.callback;
            if (typeof _ == "function") {
              y.callback = null, v = y.priorityLevel;
              var b = _(y.expirationTime <= G);
              G = t.unstable_now(), typeof b == "function" ? y.callback = b : y === i(h) && l(h), L(G);
            } else l(h);
            y = i(h);
          }
          if (y !== null) var S = true;
          else {
            var oe = i(m);
            oe !== null && K(V, oe.startTime - G), S = false;
          }
          return S;
        } finally {
          y = null, v = k, w = false;
        }
      }
      var O = false, ee = null, re = -1, se = 5, me = -1;
      function X() {
        return !(t.unstable_now() - me < se);
      }
      function ne() {
        if (ee !== null) {
          var B = t.unstable_now();
          me = B;
          var G = true;
          try {
            G = ee(true, B);
          } finally {
            G ? q() : (O = false, ee = null);
          }
        } else O = false;
      }
      var q;
      if (typeof M == "function") q = function() {
        M(ne);
      };
      else if (typeof MessageChannel < "u") {
        var te = new MessageChannel(), U = te.port2;
        te.port1.onmessage = ne, q = function() {
          U.postMessage(null);
        };
      } else q = function() {
        D(ne, 0);
      };
      function ie(B) {
        ee = B, O || (O = true, q());
      }
      function K(B, G) {
        re = D(function() {
          B(t.unstable_now());
        }, G);
      }
      t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(B) {
        B.callback = null;
      }, t.unstable_continueExecution = function() {
        I || w || (I = true, ie(Z));
      }, t.unstable_forceFrameRate = function(B) {
        0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < B ? Math.floor(1e3 / B) : 5;
      }, t.unstable_getCurrentPriorityLevel = function() {
        return v;
      }, t.unstable_getFirstCallbackNode = function() {
        return i(h);
      }, t.unstable_next = function(B) {
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
          return B();
        } finally {
          v = k;
        }
      }, t.unstable_pauseExecution = function() {
      }, t.unstable_requestPaint = function() {
      }, t.unstable_runWithPriority = function(B, G) {
        switch (B) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            B = 3;
        }
        var k = v;
        v = B;
        try {
          return G();
        } finally {
          v = k;
        }
      }, t.unstable_scheduleCallback = function(B, G, k) {
        var _ = t.unstable_now();
        switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? _ + k : _) : k = _, B) {
          case 1:
            var b = -1;
            break;
          case 2:
            b = 250;
            break;
          case 5:
            b = 1073741823;
            break;
          case 4:
            b = 1e4;
            break;
          default:
            b = 5e3;
        }
        return b = k + b, B = {
          id: g++,
          callback: G,
          priorityLevel: B,
          startTime: k,
          expirationTime: b,
          sortIndex: -1
        }, k > _ ? (B.sortIndex = k, r(m, B), i(h) === null && B === i(m) && (N ? (T(re), re = -1) : N = true, K(V, k - _))) : (B.sortIndex = b, r(h, B), I || w || (I = true, ie(Z))), B;
      }, t.unstable_shouldYield = X, t.unstable_wrapCallback = function(B) {
        var G = v;
        return function() {
          var k = v;
          v = G;
          try {
            return B.apply(this, arguments);
          } finally {
            v = k;
          }
        };
      };
    })(au)), au;
  }
  var td;
  function Og() {
    return td || (td = 1, uu.exports = Ag()), uu.exports;
  }
  var nd;
  function Lg() {
    if (nd) return yt;
    nd = 1;
    var t = Uu(), r = Og();
    function i(e) {
      for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 1; o < arguments.length; o++) n += "&args[]=" + encodeURIComponent(arguments[o]);
      return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var l = /* @__PURE__ */ new Set(), s = {};
    function a(e, n) {
      c(e, n), c(e + "Capture", n);
    }
    function c(e, n) {
      for (s[e] = n, e = 0; e < n.length; e++) l.add(n[e]);
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, y = {};
    function v(e) {
      return h.call(y, e) ? true : h.call(g, e) ? false : m.test(e) ? y[e] = true : (g[e] = true, false);
    }
    function w(e, n, o, u) {
      if (o !== null && o.type === 0) return false;
      switch (typeof n) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          return u ? false : o !== null ? !o.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
          return false;
      }
    }
    function I(e, n, o, u) {
      if (n === null || typeof n > "u" || w(e, n, o, u)) return true;
      if (u) return false;
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
    function N(e, n, o, u, d, p, x) {
      this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = u, this.attributeNamespace = d, this.mustUseProperty = o, this.propertyName = e, this.type = n, this.sanitizeURL = p, this.removeEmptyString = x;
    }
    var D = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
      D[e] = new N(e, 0, false, e, null, false, false);
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
      D[n] = new N(n, 1, false, e[1], null, false, false);
    }), [
      "contentEditable",
      "draggable",
      "spellCheck",
      "value"
    ].forEach(function(e) {
      D[e] = new N(e, 2, false, e.toLowerCase(), null, false, false);
    }), [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha"
    ].forEach(function(e) {
      D[e] = new N(e, 2, false, e, null, false, false);
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
      D[e] = new N(e, 3, false, e.toLowerCase(), null, false, false);
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(e) {
      D[e] = new N(e, 3, true, e, null, false, false);
    }), [
      "capture",
      "download"
    ].forEach(function(e) {
      D[e] = new N(e, 4, false, e, null, false, false);
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(e) {
      D[e] = new N(e, 6, false, e, null, false, false);
    }), [
      "rowSpan",
      "start"
    ].forEach(function(e) {
      D[e] = new N(e, 5, false, e.toLowerCase(), null, false, false);
    });
    var T = /[\-:]([a-z])/g;
    function M(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
      var n = e.replace(T, M);
      D[n] = new N(n, 1, false, e, null, false, false);
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
      var n = e.replace(T, M);
      D[n] = new N(n, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(e) {
      var n = e.replace(T, M);
      D[n] = new N(n, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
    }), [
      "tabIndex",
      "crossOrigin"
    ].forEach(function(e) {
      D[e] = new N(e, 1, false, e.toLowerCase(), null, false, false);
    }), D.xlinkHref = new N("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), [
      "src",
      "href",
      "action",
      "formAction"
    ].forEach(function(e) {
      D[e] = new N(e, 1, false, e.toLowerCase(), null, true, true);
    });
    function L(e, n, o, u) {
      var d = D.hasOwnProperty(n) ? D[n] : null;
      (d !== null ? d.type !== 0 : u || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (I(n, o, d, u) && (o = null), u || d === null ? v(n) && (o === null ? e.removeAttribute(n) : e.setAttribute(n, "" + o)) : d.mustUseProperty ? e[d.propertyName] = o === null ? d.type === 3 ? false : "" : o : (n = d.attributeName, u = d.attributeNamespace, o === null ? e.removeAttribute(n) : (d = d.type, o = d === 3 || d === 4 && o === true ? "" : "" + o, u ? e.setAttributeNS(u, n, o) : e.setAttribute(n, o))));
    }
    var V = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Z = Symbol.for("react.element"), O = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), se = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), X = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), B = Symbol.iterator;
    function G(e) {
      return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var k = Object.assign, _;
    function b(e) {
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
            var u = z;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (z) {
            u = z;
          }
          e.call(n.prototype);
        }
        else {
          try {
            throw Error();
          } catch (z) {
            u = z;
          }
          e();
        }
      } catch (z) {
        if (z && u && typeof z.stack == "string") {
          for (var d = z.stack.split(`
`), p = u.stack.split(`
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
      return (e = e ? e.displayName || e.name : "") ? b(e) : "";
    }
    function ce(e) {
      switch (e.tag) {
        case 5:
          return b(e.type);
        case 16:
          return b("Lazy");
        case 13:
          return b("Suspense");
        case 19:
          return b("SuspenseList");
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
        case O:
          return "Portal";
        case se:
          return "Profiler";
        case re:
          return "StrictMode";
        case q:
          return "Suspense";
        case te:
          return "SuspenseList";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case X:
          return (e.displayName || "Context") + ".Consumer";
        case me:
          return (e._context.displayName || "Context") + ".Provider";
        case ne:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case U:
          return n = e.displayName || null, n !== null ? n : de(e.type) || "Memo";
        case ie:
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
    function We(e) {
      var n = Te(e) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), u = "" + e[n];
      if (!e.hasOwnProperty(n) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
        var d = o.get, p = o.set;
        return Object.defineProperty(e, n, {
          configurable: true,
          get: function() {
            return d.call(this);
          },
          set: function(x) {
            u = "" + x, p.call(this, x);
          }
        }), Object.defineProperty(e, n, {
          enumerable: o.enumerable
        }), {
          getValue: function() {
            return u;
          },
          setValue: function(x) {
            u = "" + x;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[n];
          }
        };
      }
    }
    function Rt(e) {
      e._valueTracker || (e._valueTracker = We(e));
    }
    function Vn(e) {
      if (!e) return false;
      var n = e._valueTracker;
      if (!n) return true;
      var o = n.getValue(), u = "";
      return e && (u = Te(e) ? e.checked ? "true" : "false" : e.value), e = u, e !== o ? (n.setValue(e), true) : false;
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
      var o = n.defaultValue == null ? "" : n.defaultValue, u = n.checked != null ? n.checked : n.defaultChecked;
      o = ke(n.value != null ? n.value : o), e._wrapperState = {
        initialChecked: u,
        initialValue: o,
        controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
      };
    }
    function Ur(e, n) {
      n = n.checked, n != null && L(e, "checked", n, false);
    }
    function ir(e, n) {
      Ur(e, n);
      var o = ke(n.value), u = n.type;
      if (o != null) u === "number" ? (o === 0 && e.value === "" || e.value != o) && (e.value = "" + o) : e.value !== "" + o && (e.value = "" + o);
      else if (u === "submit" || u === "reset") {
        e.removeAttribute("value");
        return;
      }
      n.hasOwnProperty("value") ? or(e, n.type, o) : n.hasOwnProperty("defaultValue") && or(e, n.type, ke(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
    }
    function Ui(e, n, o) {
      if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var u = n.type;
        if (!(u !== "submit" && u !== "reset" || n.value !== void 0 && n.value !== null)) return;
        n = "" + e._wrapperState.initialValue, o || n === e.value || (e.value = n), e.defaultValue = n;
      }
      o = e.name, o !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, o !== "" && (e.name = o);
    }
    function or(e, n, o) {
      (n !== "number" || ln(e.ownerDocument) !== e) && (o == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
    }
    var gn = Array.isArray;
    function yn(e, n, o, u) {
      if (e = e.options, n) {
        n = {};
        for (var d = 0; d < o.length; d++) n["$" + o[d]] = true;
        for (o = 0; o < e.length; o++) d = n.hasOwnProperty("$" + e[o].value), e[o].selected !== d && (e[o].selected = d), d && u && (e[o].defaultSelected = true);
      } else {
        for (o = "" + ke(o), n = null, d = 0; d < e.length; d++) {
          if (e[d].value === o) {
            e[d].selected = true, u && (e[d].defaultSelected = true);
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
    function Wi(e, n) {
      var o = ke(n.value), u = ke(n.defaultValue);
      o != null && (o = "" + o, o !== e.value && (e.value = o), n.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)), u != null && (e.defaultValue = "" + u);
    }
    function Hi(e) {
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
    function J(e, n) {
      return e == null || e === "http://www.w3.org/1999/xhtml" ? F(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var ve, Ee = (function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, o, u, d) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(n, o, u, d);
        });
      } : e;
    })(function(e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
      else {
        for (ve = ve || document.createElement("div"), ve.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ve.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
    function _e(e, n) {
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
        var u = o.indexOf("--") === 0, d = At(o, n[o], u);
        o === "float" && (o = "cssFloat"), u ? e.setProperty(o, d) : e[o] = d;
      }
    }
    var Wn = k({
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
        if (Wn[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
        if (n.dangerouslySetInnerHTML != null) {
          if (n.children != null) throw Error(i(60));
          if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(i(61));
        }
        if (n.style != null && typeof n.style != "object") throw Error(i(62));
      }
    }
    function Qt(e, n) {
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
    function xl(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var kl = null, lr = null, sr = null;
    function da(e) {
      if (e = ci(e)) {
        if (typeof kl != "function") throw Error(i(280));
        var n = e.stateNode;
        n && (n = ho(n), kl(e.stateNode, e.type, n));
      }
    }
    function pa(e) {
      lr ? sr ? sr.push(e) : sr = [
        e
      ] : lr = e;
    }
    function ha() {
      if (lr) {
        var e = lr, n = sr;
        if (sr = lr = null, da(e), n) for (e = 0; e < n.length; e++) da(n[e]);
      }
    }
    function ma(e, n) {
      return e(n);
    }
    function ga() {
    }
    var Sl = false;
    function ya(e, n, o) {
      if (Sl) return e(n, o);
      Sl = true;
      try {
        return ma(e, n, o);
      } finally {
        Sl = false, (lr !== null || sr !== null) && (ga(), ha());
      }
    }
    function Wr(e, n) {
      var o = e.stateNode;
      if (o === null) return null;
      var u = ho(o);
      if (u === null) return null;
      o = u[n];
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
          (u = !u.disabled) || (e = e.type, u = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !u;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (o && typeof o != "function") throw Error(i(231, n, typeof o));
      return o;
    }
    var El = false;
    if (f) try {
      var Hr = {};
      Object.defineProperty(Hr, "passive", {
        get: function() {
          El = true;
        }
      }), window.addEventListener("test", Hr, Hr), window.removeEventListener("test", Hr, Hr);
    } catch {
      El = false;
    }
    function Lh(e, n, o, u, d, p, x, E, C) {
      var z = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(o, z);
      } catch (H) {
        this.onError(H);
      }
    }
    var $r = false, $i = null, qi = false, Il = null, zh = {
      onError: function(e) {
        $r = true, $i = e;
      }
    };
    function Mh(e, n, o, u, d, p, x, E, C) {
      $r = false, $i = null, Lh.apply(zh, arguments);
    }
    function bh(e, n, o, u, d, p, x, E, C) {
      if (Mh.apply(this, arguments), $r) {
        if ($r) {
          var z = $i;
          $r = false, $i = null;
        } else throw Error(i(198));
        qi || (qi = true, Il = z);
      }
    }
    function Hn(e) {
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
    function va(e) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
      }
      return null;
    }
    function wa(e) {
      if (Hn(e) !== e) throw Error(i(188));
    }
    function Fh(e) {
      var n = e.alternate;
      if (!n) {
        if (n = Hn(e), n === null) throw Error(i(188));
        return n !== e ? null : e;
      }
      for (var o = e, u = n; ; ) {
        var d = o.return;
        if (d === null) break;
        var p = d.alternate;
        if (p === null) {
          if (u = d.return, u !== null) {
            o = u;
            continue;
          }
          break;
        }
        if (d.child === p.child) {
          for (p = d.child; p; ) {
            if (p === o) return wa(d), e;
            if (p === u) return wa(d), n;
            p = p.sibling;
          }
          throw Error(i(188));
        }
        if (o.return !== u.return) o = d, u = p;
        else {
          for (var x = false, E = d.child; E; ) {
            if (E === o) {
              x = true, o = d, u = p;
              break;
            }
            if (E === u) {
              x = true, u = d, o = p;
              break;
            }
            E = E.sibling;
          }
          if (!x) {
            for (E = p.child; E; ) {
              if (E === o) {
                x = true, o = p, u = d;
                break;
              }
              if (E === u) {
                x = true, u = p, o = d;
                break;
              }
              E = E.sibling;
            }
            if (!x) throw Error(i(189));
          }
        }
        if (o.alternate !== u) throw Error(i(190));
      }
      if (o.tag !== 3) throw Error(i(188));
      return o.stateNode.current === o ? e : n;
    }
    function xa(e) {
      return e = Fh(e), e !== null ? ka(e) : null;
    }
    function ka(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var n = ka(e);
        if (n !== null) return n;
        e = e.sibling;
      }
      return null;
    }
    var Sa = r.unstable_scheduleCallback, Ea = r.unstable_cancelCallback, jh = r.unstable_shouldYield, Bh = r.unstable_requestPaint, $e = r.unstable_now, Uh = r.unstable_getCurrentPriorityLevel, Cl = r.unstable_ImmediatePriority, Ia = r.unstable_UserBlockingPriority, Gi = r.unstable_NormalPriority, Vh = r.unstable_LowPriority, Ca = r.unstable_IdlePriority, Yi = null, Kt = null;
    function Wh(e) {
      if (Kt && typeof Kt.onCommitFiberRoot == "function") try {
        Kt.onCommitFiberRoot(Yi, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
    }
    var Bt = Math.clz32 ? Math.clz32 : qh, Hh = Math.log, $h = Math.LN2;
    function qh(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Hh(e) / $h | 0) | 0;
    }
    var Qi = 64, Ki = 4194304;
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
      var u = 0, d = e.suspendedLanes, p = e.pingedLanes, x = o & 268435455;
      if (x !== 0) {
        var E = x & ~d;
        E !== 0 ? u = qr(E) : (p &= x, p !== 0 && (u = qr(p)));
      } else x = o & ~d, x !== 0 ? u = qr(x) : p !== 0 && (u = qr(p));
      if (u === 0) return 0;
      if (n !== 0 && n !== u && (n & d) === 0 && (d = u & -u, p = n & -n, d >= p || d === 16 && (p & 4194240) !== 0)) return n;
      if ((u & 4) !== 0 && (u |= o & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= u; 0 < n; ) o = 31 - Bt(n), d = 1 << o, u |= e[o], n &= ~d;
      return u;
    }
    function Gh(e, n) {
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
    function Yh(e, n) {
      for (var o = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, p = e.pendingLanes; 0 < p; ) {
        var x = 31 - Bt(p), E = 1 << x, C = d[x];
        C === -1 ? ((E & o) === 0 || (E & u) !== 0) && (d[x] = Gh(E, n)) : C <= n && (e.expiredLanes |= E), p &= ~E;
      }
    }
    function Tl(e) {
      return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Ta() {
      var e = Qi;
      return Qi <<= 1, (Qi & 4194240) === 0 && (Qi = 64), e;
    }
    function _l(e) {
      for (var n = [], o = 0; 31 > o; o++) n.push(e);
      return n;
    }
    function Gr(e, n, o) {
      e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Bt(n), e[n] = o;
    }
    function Qh(e, n) {
      var o = e.pendingLanes & ~n;
      e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
      var u = e.eventTimes;
      for (e = e.expirationTimes; 0 < o; ) {
        var d = 31 - Bt(o), p = 1 << d;
        n[d] = 0, u[d] = -1, e[d] = -1, o &= ~p;
      }
    }
    function Pl(e, n) {
      var o = e.entangledLanes |= n;
      for (e = e.entanglements; o; ) {
        var u = 31 - Bt(o), d = 1 << u;
        d & n | e[u] & n && (e[u] |= n), o &= ~d;
      }
    }
    var Ae = 0;
    function _a(e) {
      return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var Pa, Nl, Na, Da, Ra, Dl = false, Ji = [], wn = null, xn = null, kn = null, Yr = /* @__PURE__ */ new Map(), Qr = /* @__PURE__ */ new Map(), Sn = [], Kh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Aa(e, n) {
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
          Yr.delete(n.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Qr.delete(n.pointerId);
      }
    }
    function Kr(e, n, o, u, d, p) {
      return e === null || e.nativeEvent !== p ? (e = {
        blockedOn: n,
        domEventName: o,
        eventSystemFlags: u,
        nativeEvent: p,
        targetContainers: [
          d
        ]
      }, n !== null && (n = ci(n), n !== null && Nl(n)), e) : (e.eventSystemFlags |= u, n = e.targetContainers, d !== null && n.indexOf(d) === -1 && n.push(d), e);
    }
    function Xh(e, n, o, u, d) {
      switch (n) {
        case "focusin":
          return wn = Kr(wn, e, n, o, u, d), true;
        case "dragenter":
          return xn = Kr(xn, e, n, o, u, d), true;
        case "mouseover":
          return kn = Kr(kn, e, n, o, u, d), true;
        case "pointerover":
          var p = d.pointerId;
          return Yr.set(p, Kr(Yr.get(p) || null, e, n, o, u, d)), true;
        case "gotpointercapture":
          return p = d.pointerId, Qr.set(p, Kr(Qr.get(p) || null, e, n, o, u, d)), true;
      }
      return false;
    }
    function Oa(e) {
      var n = $n(e.target);
      if (n !== null) {
        var o = Hn(n);
        if (o !== null) {
          if (n = o.tag, n === 13) {
            if (n = va(o), n !== null) {
              e.blockedOn = n, Ra(e.priority, function() {
                Na(o);
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
        var o = Al(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (o === null) {
          o = e.nativeEvent;
          var u = new o.constructor(o.type, o);
          kt = u, o.target.dispatchEvent(u), kt = null;
        } else return n = ci(o), n !== null && Nl(n), e.blockedOn = o, false;
        n.shift();
      }
      return true;
    }
    function La(e, n, o) {
      Zi(e) && o.delete(n);
    }
    function Jh() {
      Dl = false, wn !== null && Zi(wn) && (wn = null), xn !== null && Zi(xn) && (xn = null), kn !== null && Zi(kn) && (kn = null), Yr.forEach(La), Qr.forEach(La);
    }
    function Xr(e, n) {
      e.blockedOn === n && (e.blockedOn = null, Dl || (Dl = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Jh)));
    }
    function Jr(e) {
      function n(d) {
        return Xr(d, e);
      }
      if (0 < Ji.length) {
        Xr(Ji[0], e);
        for (var o = 1; o < Ji.length; o++) {
          var u = Ji[o];
          u.blockedOn === e && (u.blockedOn = null);
        }
      }
      for (wn !== null && Xr(wn, e), xn !== null && Xr(xn, e), kn !== null && Xr(kn, e), Yr.forEach(n), Qr.forEach(n), o = 0; o < Sn.length; o++) u = Sn[o], u.blockedOn === e && (u.blockedOn = null);
      for (; 0 < Sn.length && (o = Sn[0], o.blockedOn === null); ) Oa(o), o.blockedOn === null && Sn.shift();
    }
    var ur = V.ReactCurrentBatchConfig, eo = true;
    function Zh(e, n, o, u) {
      var d = Ae, p = ur.transition;
      ur.transition = null;
      try {
        Ae = 1, Rl(e, n, o, u);
      } finally {
        Ae = d, ur.transition = p;
      }
    }
    function em(e, n, o, u) {
      var d = Ae, p = ur.transition;
      ur.transition = null;
      try {
        Ae = 4, Rl(e, n, o, u);
      } finally {
        Ae = d, ur.transition = p;
      }
    }
    function Rl(e, n, o, u) {
      if (eo) {
        var d = Al(e, n, o, u);
        if (d === null) Ql(e, n, u, to, o), Aa(e, u);
        else if (Xh(d, e, n, o, u)) u.stopPropagation();
        else if (Aa(e, u), n & 4 && -1 < Kh.indexOf(e)) {
          for (; d !== null; ) {
            var p = ci(d);
            if (p !== null && Pa(p), p = Al(e, n, o, u), p === null && Ql(e, n, u, to, o), p === d) break;
            d = p;
          }
          d !== null && u.stopPropagation();
        } else Ql(e, n, u, null, o);
      }
    }
    var to = null;
    function Al(e, n, o, u) {
      if (to = null, e = xl(u), e = $n(e), e !== null) if (n = Hn(e), n === null) e = null;
      else if (o = n.tag, o === 13) {
        if (e = va(n), e !== null) return e;
        e = null;
      } else if (o === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
      return to = e, null;
    }
    function za(e) {
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
            case Cl:
              return 1;
            case Ia:
              return 4;
            case Gi:
            case Vh:
              return 16;
            case Ca:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var En = null, Ol = null, no = null;
    function Ma() {
      if (no) return no;
      var e, n = Ol, o = n.length, u, d = "value" in En ? En.value : En.textContent, p = d.length;
      for (e = 0; e < o && n[e] === d[e]; e++) ;
      var x = o - e;
      for (u = 1; u <= x && n[o - u] === d[p - u]; u++) ;
      return no = d.slice(e, 1 < u ? 1 - u : void 0);
    }
    function ro(e) {
      var n = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function io() {
      return true;
    }
    function ba() {
      return false;
    }
    function St(e) {
      function n(o, u, d, p, x) {
        this._reactName = o, this._targetInst = d, this.type = u, this.nativeEvent = p, this.target = x, this.currentTarget = null;
        for (var E in e) e.hasOwnProperty(E) && (o = e[E], this[E] = o ? o(p) : p[E]);
        return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === false) ? io : ba, this.isPropagationStopped = ba, this;
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
    }, Ll = St(ar), Zr = k({}, ar, {
      view: 0,
      detail: 0
    }), tm = St(Zr), zl, Ml, ei, oo = k({}, Zr, {
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
      getModifierState: Fl,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== ei && (ei && e.type === "mousemove" ? (zl = e.screenX - ei.screenX, Ml = e.screenY - ei.screenY) : Ml = zl = 0, ei = e), zl);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ml;
      }
    }), Fa = St(oo), nm = k({}, oo, {
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
    }), ja = St(am), cm = {
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
    function Fl() {
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
      getModifierState: Fl,
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
    }), Ba = St(gm), ym = k({}, Zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fl
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
    ], jl = f && "CompositionEvent" in window, ti = null;
    f && "documentMode" in document && (ti = document.documentMode);
    var Im = f && "TextEvent" in window && !ti, Ua = f && (!jl || ti && 8 < ti && 11 >= ti), Va = " ", Wa = false;
    function Ha(e, n) {
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
    function $a(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var cr = false;
    function Cm(e, n) {
      switch (e) {
        case "compositionend":
          return $a(n);
        case "keypress":
          return n.which !== 32 ? null : (Wa = true, Va);
        case "textInput":
          return e = n.data, e === Va && Wa ? null : e;
        default:
          return null;
      }
    }
    function Tm(e, n) {
      if (cr) return e === "compositionend" || !jl && Ha(e, n) ? (e = Ma(), no = Ol = En = null, cr = false, e) : null;
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
          return Ua && n.locale !== "ko" ? null : n.data;
        default:
          return null;
      }
    }
    var _m = {
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
    function qa(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return n === "input" ? !!_m[e.type] : n === "textarea";
    }
    function Ga(e, n, o, u) {
      pa(u), n = co(n, "onChange"), 0 < n.length && (o = new Ll("onChange", "change", null, o, u), e.push({
        event: o,
        listeners: n
      }));
    }
    var ni = null, ri = null;
    function Pm(e) {
      fc(e, 0);
    }
    function lo(e) {
      var n = mr(e);
      if (Vn(n)) return e;
    }
    function Nm(e, n) {
      if (e === "change") return n;
    }
    var Ya = false;
    if (f) {
      var Bl;
      if (f) {
        var Ul = "oninput" in document;
        if (!Ul) {
          var Qa = document.createElement("div");
          Qa.setAttribute("oninput", "return;"), Ul = typeof Qa.oninput == "function";
        }
        Bl = Ul;
      } else Bl = false;
      Ya = Bl && (!document.documentMode || 9 < document.documentMode);
    }
    function Ka() {
      ni && (ni.detachEvent("onpropertychange", Xa), ri = ni = null);
    }
    function Xa(e) {
      if (e.propertyName === "value" && lo(ri)) {
        var n = [];
        Ga(n, ri, e, xl(e)), ya(Pm, n);
      }
    }
    function Dm(e, n, o) {
      e === "focusin" ? (Ka(), ni = n, ri = o, ni.attachEvent("onpropertychange", Xa)) : e === "focusout" && Ka();
    }
    function Rm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return lo(ri);
    }
    function Am(e, n) {
      if (e === "click") return lo(n);
    }
    function Om(e, n) {
      if (e === "input" || e === "change") return lo(n);
    }
    function Lm(e, n) {
      return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
    }
    var Ut = typeof Object.is == "function" ? Object.is : Lm;
    function ii(e, n) {
      if (Ut(e, n)) return true;
      if (typeof e != "object" || e === null || typeof n != "object" || n === null) return false;
      var o = Object.keys(e), u = Object.keys(n);
      if (o.length !== u.length) return false;
      for (u = 0; u < o.length; u++) {
        var d = o[u];
        if (!h.call(n, d) || !Ut(e[d], n[d])) return false;
      }
      return true;
    }
    function Ja(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Za(e, n) {
      var o = Ja(e);
      e = 0;
      for (var u; o; ) {
        if (o.nodeType === 3) {
          if (u = e + o.textContent.length, e <= n && u >= n) return {
            node: o,
            offset: n - e
          };
          e = u;
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
        o = Ja(o);
      }
    }
    function ec(e, n) {
      return e && n ? e === n ? true : e && e.nodeType === 3 ? false : n && n.nodeType === 3 ? ec(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : false : false;
    }
    function tc() {
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
    function Vl(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
    }
    function zm(e) {
      var n = tc(), o = e.focusedElem, u = e.selectionRange;
      if (n !== o && o && o.ownerDocument && ec(o.ownerDocument.documentElement, o)) {
        if (u !== null && Vl(o)) {
          if (n = u.start, e = u.end, e === void 0 && (e = n), "selectionStart" in o) o.selectionStart = n, o.selectionEnd = Math.min(e, o.value.length);
          else if (e = (n = o.ownerDocument || document) && n.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var d = o.textContent.length, p = Math.min(u.start, d);
            u = u.end === void 0 ? p : Math.min(u.end, d), !e.extend && p > u && (d = u, u = p, p = d), d = Za(o, p);
            var x = Za(o, u);
            d && x && (e.rangeCount !== 1 || e.anchorNode !== d.node || e.anchorOffset !== d.offset || e.focusNode !== x.node || e.focusOffset !== x.offset) && (n = n.createRange(), n.setStart(d.node, d.offset), e.removeAllRanges(), p > u ? (e.addRange(n), e.extend(x.node, x.offset)) : (n.setEnd(x.node, x.offset), e.addRange(n)));
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
    var Mm = f && "documentMode" in document && 11 >= document.documentMode, fr = null, Wl = null, oi = null, Hl = false;
    function nc(e, n, o) {
      var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
      Hl || fr == null || fr !== ln(u) || (u = fr, "selectionStart" in u && Vl(u) ? u = {
        start: u.selectionStart,
        end: u.selectionEnd
      } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
        anchorNode: u.anchorNode,
        anchorOffset: u.anchorOffset,
        focusNode: u.focusNode,
        focusOffset: u.focusOffset
      }), oi && ii(oi, u) || (oi = u, u = co(Wl, "onSelect"), 0 < u.length && (n = new Ll("onSelect", "select", null, n, o), e.push({
        event: n,
        listeners: u
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
    }, $l = {}, rc = {};
    f && (rc = document.createElement("div").style, "AnimationEvent" in window || (delete dr.animationend.animation, delete dr.animationiteration.animation, delete dr.animationstart.animation), "TransitionEvent" in window || delete dr.transitionend.transition);
    function uo(e) {
      if ($l[e]) return $l[e];
      if (!dr[e]) return e;
      var n = dr[e], o;
      for (o in n) if (n.hasOwnProperty(o) && o in rc) return $l[e] = n[o];
      return e;
    }
    var ic = uo("animationend"), oc = uo("animationiteration"), lc = uo("animationstart"), sc = uo("transitionend"), uc = /* @__PURE__ */ new Map(), ac = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function In(e, n) {
      uc.set(e, n), a(n, [
        e
      ]);
    }
    for (var ql = 0; ql < ac.length; ql++) {
      var Gl = ac[ql], bm = Gl.toLowerCase(), Fm = Gl[0].toUpperCase() + Gl.slice(1);
      In(bm, "on" + Fm);
    }
    In(ic, "onAnimationEnd"), In(oc, "onAnimationIteration"), In(lc, "onAnimationStart"), In("dblclick", "onDoubleClick"), In("focusin", "onFocus"), In("focusout", "onBlur"), In(sc, "onTransitionEnd"), c("onMouseEnter", [
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
    function cc(e, n, o) {
      var u = e.type || "unknown-event";
      e.currentTarget = o, bh(u, n, void 0, e), e.currentTarget = null;
    }
    function fc(e, n) {
      n = (n & 4) !== 0;
      for (var o = 0; o < e.length; o++) {
        var u = e[o], d = u.event;
        u = u.listeners;
        e: {
          var p = void 0;
          if (n) for (var x = u.length - 1; 0 <= x; x--) {
            var E = u[x], C = E.instance, z = E.currentTarget;
            if (E = E.listener, C !== p && d.isPropagationStopped()) break e;
            cc(d, E, z), p = C;
          }
          else for (x = 0; x < u.length; x++) {
            if (E = u[x], C = E.instance, z = E.currentTarget, E = E.listener, C !== p && d.isPropagationStopped()) break e;
            cc(d, E, z), p = C;
          }
        }
      }
      if (qi) throw e = Il, qi = false, Il = null, e;
    }
    function be(e, n) {
      var o = n[ts];
      o === void 0 && (o = n[ts] = /* @__PURE__ */ new Set());
      var u = e + "__bubble";
      o.has(u) || (dc(n, e, 2, false), o.add(u));
    }
    function Yl(e, n, o) {
      var u = 0;
      n && (u |= 4), dc(o, e, u, n);
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
    function dc(e, n, o, u) {
      switch (za(n)) {
        case 1:
          var d = Zh;
          break;
        case 4:
          d = em;
          break;
        default:
          d = Rl;
      }
      o = d.bind(null, n, o, e), d = void 0, !El || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (d = true), u ? d !== void 0 ? e.addEventListener(n, o, {
        capture: true,
        passive: d
      }) : e.addEventListener(n, o, true) : d !== void 0 ? e.addEventListener(n, o, {
        passive: d
      }) : e.addEventListener(n, o, false);
    }
    function Ql(e, n, o, u, d) {
      var p = u;
      if ((n & 1) === 0 && (n & 2) === 0 && u !== null) e: for (; ; ) {
        if (u === null) return;
        var x = u.tag;
        if (x === 3 || x === 4) {
          var E = u.stateNode.containerInfo;
          if (E === d || E.nodeType === 8 && E.parentNode === d) break;
          if (x === 4) for (x = u.return; x !== null; ) {
            var C = x.tag;
            if ((C === 3 || C === 4) && (C = x.stateNode.containerInfo, C === d || C.nodeType === 8 && C.parentNode === d)) return;
            x = x.return;
          }
          for (; E !== null; ) {
            if (x = $n(E), x === null) return;
            if (C = x.tag, C === 5 || C === 6) {
              u = p = x;
              continue e;
            }
            E = E.parentNode;
          }
        }
        u = u.return;
      }
      ya(function() {
        var z = p, H = xl(o), $ = [];
        e: {
          var W = uc.get(e);
          if (W !== void 0) {
            var le = Ll, ae = e;
            switch (e) {
              case "keypress":
                if (ro(o) === 0) break e;
              case "keydown":
              case "keyup":
                le = mm;
                break;
              case "focusin":
                ae = "focus", le = bl;
                break;
              case "focusout":
                ae = "blur", le = bl;
                break;
              case "beforeblur":
              case "afterblur":
                le = bl;
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
                le = Fa;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                le = rm;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                le = vm;
                break;
              case ic:
              case oc:
              case lc:
                le = lm;
                break;
              case sc:
                le = xm;
                break;
              case "scroll":
                le = tm;
                break;
              case "wheel":
                le = Sm;
                break;
              case "copy":
              case "cut":
              case "paste":
                le = um;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                le = Ba;
            }
            var fe = (n & 4) !== 0, qe = !fe && e === "scroll", R = fe ? W !== null ? W + "Capture" : null : W;
            fe = [];
            for (var P = z, A; P !== null; ) {
              A = P;
              var Q = A.stateNode;
              if (A.tag === 5 && Q !== null && (A = Q, R !== null && (Q = Wr(P, R), Q != null && fe.push(ui(P, Q, A)))), qe) break;
              P = P.return;
            }
            0 < fe.length && (W = new le(W, ae, null, o, H), $.push({
              event: W,
              listeners: fe
            }));
          }
        }
        if ((n & 7) === 0) {
          e: {
            if (W = e === "mouseover" || e === "pointerover", le = e === "mouseout" || e === "pointerout", W && o !== kt && (ae = o.relatedTarget || o.fromElement) && ($n(ae) || ae[un])) break e;
            if ((le || W) && (W = H.window === H ? H : (W = H.ownerDocument) ? W.defaultView || W.parentWindow : window, le ? (ae = o.relatedTarget || o.toElement, le = z, ae = ae ? $n(ae) : null, ae !== null && (qe = Hn(ae), ae !== qe || ae.tag !== 5 && ae.tag !== 6) && (ae = null)) : (le = null, ae = z), le !== ae)) {
              if (fe = Fa, Q = "onMouseLeave", R = "onMouseEnter", P = "mouse", (e === "pointerout" || e === "pointerover") && (fe = Ba, Q = "onPointerLeave", R = "onPointerEnter", P = "pointer"), qe = le == null ? W : mr(le), A = ae == null ? W : mr(ae), W = new fe(Q, P + "leave", le, o, H), W.target = qe, W.relatedTarget = A, Q = null, $n(H) === z && (fe = new fe(R, P + "enter", ae, o, H), fe.target = A, fe.relatedTarget = qe, Q = fe), qe = Q, le && ae) t: {
                for (fe = le, R = ae, P = 0, A = fe; A; A = pr(A)) P++;
                for (A = 0, Q = R; Q; Q = pr(Q)) A++;
                for (; 0 < P - A; ) fe = pr(fe), P--;
                for (; 0 < A - P; ) R = pr(R), A--;
                for (; P--; ) {
                  if (fe === R || R !== null && fe === R.alternate) break t;
                  fe = pr(fe), R = pr(R);
                }
                fe = null;
              }
              else fe = null;
              le !== null && pc($, W, le, fe, false), ae !== null && qe !== null && pc($, qe, ae, fe, true);
            }
          }
          e: {
            if (W = z ? mr(z) : window, le = W.nodeName && W.nodeName.toLowerCase(), le === "select" || le === "input" && W.type === "file") var he = Nm;
            else if (qa(W)) if (Ya) he = Om;
            else {
              he = Rm;
              var ge = Dm;
            }
            else (le = W.nodeName) && le.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (he = Am);
            if (he && (he = he(e, z))) {
              Ga($, he, o, H);
              break e;
            }
            ge && ge(e, W, z), e === "focusout" && (ge = W._wrapperState) && ge.controlled && W.type === "number" && or(W, "number", W.value);
          }
          switch (ge = z ? mr(z) : window, e) {
            case "focusin":
              (qa(ge) || ge.contentEditable === "true") && (fr = ge, Wl = z, oi = null);
              break;
            case "focusout":
              oi = Wl = fr = null;
              break;
            case "mousedown":
              Hl = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Hl = false, nc($, o, H);
              break;
            case "selectionchange":
              if (Mm) break;
            case "keydown":
            case "keyup":
              nc($, o, H);
          }
          var ye;
          if (jl) e: {
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
          else cr ? Ha(e, o) && (we = "onCompositionEnd") : e === "keydown" && o.keyCode === 229 && (we = "onCompositionStart");
          we && (Ua && o.locale !== "ko" && (cr || we !== "onCompositionStart" ? we === "onCompositionEnd" && cr && (ye = Ma()) : (En = H, Ol = "value" in En ? En.value : En.textContent, cr = true)), ge = co(z, we), 0 < ge.length && (we = new ja(we, e, null, o, H), $.push({
            event: we,
            listeners: ge
          }), ye ? we.data = ye : (ye = $a(o), ye !== null && (we.data = ye)))), (ye = Im ? Cm(e, o) : Tm(e, o)) && (z = co(z, "onBeforeInput"), 0 < z.length && (H = new ja("onBeforeInput", "beforeinput", null, o, H), $.push({
            event: H,
            listeners: z
          }), H.data = ye));
        }
        fc($, n);
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
      for (var o = n + "Capture", u = []; e !== null; ) {
        var d = e, p = d.stateNode;
        d.tag === 5 && p !== null && (d = p, p = Wr(e, o), p != null && u.unshift(ui(e, p, d)), p = Wr(e, n), p != null && u.push(ui(e, p, d))), e = e.return;
      }
      return u;
    }
    function pr(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function pc(e, n, o, u, d) {
      for (var p = n._reactName, x = []; o !== null && o !== u; ) {
        var E = o, C = E.alternate, z = E.stateNode;
        if (C !== null && C === u) break;
        E.tag === 5 && z !== null && (E = z, d ? (C = Wr(o, p), C != null && x.unshift(ui(o, C, E))) : d || (C = Wr(o, p), C != null && x.push(ui(o, C, E)))), o = o.return;
      }
      x.length !== 0 && e.push({
        event: n,
        listeners: x
      });
    }
    var Bm = /\r\n?/g, Um = /\u0000|\uFFFD/g;
    function hc(e) {
      return (typeof e == "string" ? e : "" + e).replace(Bm, `
`).replace(Um, "");
    }
    function fo(e, n, o) {
      if (n = hc(n), hc(e) !== n && o) throw Error(i(425));
    }
    function po() {
    }
    var Kl = null, Xl = null;
    function Jl(e, n) {
      return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var Zl = typeof setTimeout == "function" ? setTimeout : void 0, Vm = typeof clearTimeout == "function" ? clearTimeout : void 0, mc = typeof Promise == "function" ? Promise : void 0, Wm = typeof queueMicrotask == "function" ? queueMicrotask : typeof mc < "u" ? function(e) {
      return mc.resolve(null).then(e).catch(Hm);
    } : Zl;
    function Hm(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function es(e, n) {
      var o = n, u = 0;
      do {
        var d = o.nextSibling;
        if (e.removeChild(o), d && d.nodeType === 8) if (o = d.data, o === "/$") {
          if (u === 0) {
            e.removeChild(d), Jr(n);
            return;
          }
          u--;
        } else o !== "$" && o !== "$?" && o !== "$!" || u++;
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
    function gc(e) {
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
    var hr = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + hr, ai = "__reactProps$" + hr, un = "__reactContainer$" + hr, ts = "__reactEvents$" + hr, $m = "__reactListeners$" + hr, qm = "__reactHandles$" + hr;
    function $n(e) {
      var n = e[Xt];
      if (n) return n;
      for (var o = e.parentNode; o; ) {
        if (n = o[un] || o[Xt]) {
          if (o = n.alternate, n.child !== null || o !== null && o.child !== null) for (e = gc(e); e !== null; ) {
            if (o = e[Xt]) return o;
            e = gc(e);
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
    var ns = [], gr = -1;
    function Tn(e) {
      return {
        current: e
      };
    }
    function Fe(e) {
      0 > gr || (e.current = ns[gr], ns[gr] = null, gr--);
    }
    function Oe(e, n) {
      gr++, ns[gr] = e.current, e.current = n;
    }
    var _n = {}, ot = Tn(_n), dt = Tn(false), qn = _n;
    function yr(e, n) {
      var o = e.type.contextTypes;
      if (!o) return _n;
      var u = e.stateNode;
      if (u && u.__reactInternalMemoizedUnmaskedChildContext === n) return u.__reactInternalMemoizedMaskedChildContext;
      var d = {}, p;
      for (p in o) d[p] = n[p];
      return u && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = d), d;
    }
    function pt(e) {
      return e = e.childContextTypes, e != null;
    }
    function mo() {
      Fe(dt), Fe(ot);
    }
    function yc(e, n, o) {
      if (ot.current !== _n) throw Error(i(168));
      Oe(ot, n), Oe(dt, o);
    }
    function vc(e, n, o) {
      var u = e.stateNode;
      if (n = n.childContextTypes, typeof u.getChildContext != "function") return o;
      u = u.getChildContext();
      for (var d in u) if (!(d in n)) throw Error(i(108, Ce(e) || "Unknown", d));
      return k({}, o, u);
    }
    function go(e) {
      return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _n, qn = ot.current, Oe(ot, e), Oe(dt, dt.current), true;
    }
    function wc(e, n, o) {
      var u = e.stateNode;
      if (!u) throw Error(i(169));
      o ? (e = vc(e, n, qn), u.__reactInternalMemoizedMergedChildContext = e, Fe(dt), Fe(ot), Oe(ot, e)) : Fe(dt), Oe(dt, o);
    }
    var an = null, yo = false, rs = false;
    function xc(e) {
      an === null ? an = [
        e
      ] : an.push(e);
    }
    function Gm(e) {
      yo = true, xc(e);
    }
    function Pn() {
      if (!rs && an !== null) {
        rs = true;
        var e = 0, n = Ae;
        try {
          var o = an;
          for (Ae = 1; e < o.length; e++) {
            var u = o[e];
            do
              u = u(true);
            while (u !== null);
          }
          an = null, yo = false;
        } catch (d) {
          throw an !== null && (an = an.slice(e + 1)), Sa(Cl, Pn), d;
        } finally {
          Ae = n, rs = false;
        }
      }
      return null;
    }
    var vr = [], wr = 0, vo = null, wo = 0, Ot = [], Lt = 0, Gn = null, cn = 1, fn = "";
    function Yn(e, n) {
      vr[wr++] = wo, vr[wr++] = vo, vo = e, wo = n;
    }
    function kc(e, n, o) {
      Ot[Lt++] = cn, Ot[Lt++] = fn, Ot[Lt++] = Gn, Gn = e;
      var u = cn;
      e = fn;
      var d = 32 - Bt(u) - 1;
      u &= ~(1 << d), o += 1;
      var p = 32 - Bt(n) + d;
      if (30 < p) {
        var x = d - d % 5;
        p = (u & (1 << x) - 1).toString(32), u >>= x, d -= x, cn = 1 << 32 - Bt(n) + d | o << d | u, fn = p + e;
      } else cn = 1 << p | o << d | u, fn = e;
    }
    function is(e) {
      e.return !== null && (Yn(e, 1), kc(e, 1, 0));
    }
    function os(e) {
      for (; e === vo; ) vo = vr[--wr], vr[wr] = null, wo = vr[--wr], vr[wr] = null;
      for (; e === Gn; ) Gn = Ot[--Lt], Ot[Lt] = null, fn = Ot[--Lt], Ot[Lt] = null, cn = Ot[--Lt], Ot[Lt] = null;
    }
    var Et = null, It = null, Be = false, Vt = null;
    function Sc(e, n) {
      var o = Ft(5, null, null, 0);
      o.elementType = "DELETED", o.stateNode = n, o.return = e, n = e.deletions, n === null ? (e.deletions = [
        o
      ], e.flags |= 16) : n.push(o);
    }
    function Ec(e, n) {
      switch (e.tag) {
        case 5:
          var o = e.type;
          return n = n.nodeType !== 1 || o.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Et = e, It = Cn(n.firstChild), true) : false;
        case 6:
          return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Et = e, It = null, true) : false;
        case 13:
          return n = n.nodeType !== 8 ? null : n, n !== null ? (o = Gn !== null ? {
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
    function ls(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function ss(e) {
      if (Be) {
        var n = It;
        if (n) {
          var o = n;
          if (!Ec(e, n)) {
            if (ls(e)) throw Error(i(418));
            n = Cn(o.nextSibling);
            var u = Et;
            n && Ec(e, n) ? Sc(u, o) : (e.flags = e.flags & -4097 | 2, Be = false, Et = e);
          }
        } else {
          if (ls(e)) throw Error(i(418));
          e.flags = e.flags & -4097 | 2, Be = false, Et = e;
        }
      }
    }
    function Ic(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
      Et = e;
    }
    function xo(e) {
      if (e !== Et) return false;
      if (!Be) return Ic(e), Be = true, false;
      var n;
      if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Jl(e.type, e.memoizedProps)), n && (n = It)) {
        if (ls(e)) throw Cc(), Error(i(418));
        for (; n; ) Sc(e, n), n = Cn(n.nextSibling);
      }
      if (Ic(e), e.tag === 13) {
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
    function Cc() {
      for (var e = It; e; ) e = Cn(e.nextSibling);
    }
    function xr() {
      It = Et = null, Be = false;
    }
    function us(e) {
      Vt === null ? Vt = [
        e
      ] : Vt.push(e);
    }
    var Ym = V.ReactCurrentBatchConfig;
    function fi(e, n, o) {
      if (e = o.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (o._owner) {
          if (o = o._owner, o) {
            if (o.tag !== 1) throw Error(i(309));
            var u = o.stateNode;
          }
          if (!u) throw Error(i(147, e));
          var d = u, p = "" + e;
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
    function Tc(e) {
      var n = e._init;
      return n(e._payload);
    }
    function _c(e) {
      function n(R, P) {
        if (e) {
          var A = R.deletions;
          A === null ? (R.deletions = [
            P
          ], R.flags |= 16) : A.push(P);
        }
      }
      function o(R, P) {
        if (!e) return null;
        for (; P !== null; ) n(R, P), P = P.sibling;
        return null;
      }
      function u(R, P) {
        for (R = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? R.set(P.key, P) : R.set(P.index, P), P = P.sibling;
        return R;
      }
      function d(R, P) {
        return R = Mn(R, P), R.index = 0, R.sibling = null, R;
      }
      function p(R, P, A) {
        return R.index = A, e ? (A = R.alternate, A !== null ? (A = A.index, A < P ? (R.flags |= 2, P) : A) : (R.flags |= 2, P)) : (R.flags |= 1048576, P);
      }
      function x(R) {
        return e && R.alternate === null && (R.flags |= 2), R;
      }
      function E(R, P, A, Q) {
        return P === null || P.tag !== 6 ? (P = Zs(A, R.mode, Q), P.return = R, P) : (P = d(P, A), P.return = R, P);
      }
      function C(R, P, A, Q) {
        var he = A.type;
        return he === ee ? H(R, P, A.props.children, Q, A.key) : P !== null && (P.elementType === he || typeof he == "object" && he !== null && he.$$typeof === ie && Tc(he) === P.type) ? (Q = d(P, A.props), Q.ref = fi(R, P, A), Q.return = R, Q) : (Q = $o(A.type, A.key, A.props, null, R.mode, Q), Q.ref = fi(R, P, A), Q.return = R, Q);
      }
      function z(R, P, A, Q) {
        return P === null || P.tag !== 4 || P.stateNode.containerInfo !== A.containerInfo || P.stateNode.implementation !== A.implementation ? (P = eu(A, R.mode, Q), P.return = R, P) : (P = d(P, A.children || []), P.return = R, P);
      }
      function H(R, P, A, Q, he) {
        return P === null || P.tag !== 7 ? (P = nr(A, R.mode, Q, he), P.return = R, P) : (P = d(P, A), P.return = R, P);
      }
      function $(R, P, A) {
        if (typeof P == "string" && P !== "" || typeof P == "number") return P = Zs("" + P, R.mode, A), P.return = R, P;
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case Z:
              return A = $o(P.type, P.key, P.props, null, R.mode, A), A.ref = fi(R, null, P), A.return = R, A;
            case O:
              return P = eu(P, R.mode, A), P.return = R, P;
            case ie:
              var Q = P._init;
              return $(R, Q(P._payload), A);
          }
          if (gn(P) || G(P)) return P = nr(P, R.mode, A, null), P.return = R, P;
          ko(R, P);
        }
        return null;
      }
      function W(R, P, A, Q) {
        var he = P !== null ? P.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number") return he !== null ? null : E(R, P, "" + A, Q);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case Z:
              return A.key === he ? C(R, P, A, Q) : null;
            case O:
              return A.key === he ? z(R, P, A, Q) : null;
            case ie:
              return he = A._init, W(R, P, he(A._payload), Q);
          }
          if (gn(A) || G(A)) return he !== null ? null : H(R, P, A, Q, null);
          ko(R, A);
        }
        return null;
      }
      function le(R, P, A, Q, he) {
        if (typeof Q == "string" && Q !== "" || typeof Q == "number") return R = R.get(A) || null, E(P, R, "" + Q, he);
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Z:
              return R = R.get(Q.key === null ? A : Q.key) || null, C(P, R, Q, he);
            case O:
              return R = R.get(Q.key === null ? A : Q.key) || null, z(P, R, Q, he);
            case ie:
              var ge = Q._init;
              return le(R, P, A, ge(Q._payload), he);
          }
          if (gn(Q) || G(Q)) return R = R.get(A) || null, H(P, R, Q, he, null);
          ko(P, Q);
        }
        return null;
      }
      function ae(R, P, A, Q) {
        for (var he = null, ge = null, ye = P, we = P = 0, et = null; ye !== null && we < A.length; we++) {
          ye.index > we ? (et = ye, ye = null) : et = ye.sibling;
          var Ne = W(R, ye, A[we], Q);
          if (Ne === null) {
            ye === null && (ye = et);
            break;
          }
          e && ye && Ne.alternate === null && n(R, ye), P = p(Ne, P, we), ge === null ? he = Ne : ge.sibling = Ne, ge = Ne, ye = et;
        }
        if (we === A.length) return o(R, ye), Be && Yn(R, we), he;
        if (ye === null) {
          for (; we < A.length; we++) ye = $(R, A[we], Q), ye !== null && (P = p(ye, P, we), ge === null ? he = ye : ge.sibling = ye, ge = ye);
          return Be && Yn(R, we), he;
        }
        for (ye = u(R, ye); we < A.length; we++) et = le(ye, R, we, A[we], Q), et !== null && (e && et.alternate !== null && ye.delete(et.key === null ? we : et.key), P = p(et, P, we), ge === null ? he = et : ge.sibling = et, ge = et);
        return e && ye.forEach(function(bn) {
          return n(R, bn);
        }), Be && Yn(R, we), he;
      }
      function fe(R, P, A, Q) {
        var he = G(A);
        if (typeof he != "function") throw Error(i(150));
        if (A = he.call(A), A == null) throw Error(i(151));
        for (var ge = he = null, ye = P, we = P = 0, et = null, Ne = A.next(); ye !== null && !Ne.done; we++, Ne = A.next()) {
          ye.index > we ? (et = ye, ye = null) : et = ye.sibling;
          var bn = W(R, ye, Ne.value, Q);
          if (bn === null) {
            ye === null && (ye = et);
            break;
          }
          e && ye && bn.alternate === null && n(R, ye), P = p(bn, P, we), ge === null ? he = bn : ge.sibling = bn, ge = bn, ye = et;
        }
        if (Ne.done) return o(R, ye), Be && Yn(R, we), he;
        if (ye === null) {
          for (; !Ne.done; we++, Ne = A.next()) Ne = $(R, Ne.value, Q), Ne !== null && (P = p(Ne, P, we), ge === null ? he = Ne : ge.sibling = Ne, ge = Ne);
          return Be && Yn(R, we), he;
        }
        for (ye = u(R, ye); !Ne.done; we++, Ne = A.next()) Ne = le(ye, R, we, Ne.value, Q), Ne !== null && (e && Ne.alternate !== null && ye.delete(Ne.key === null ? we : Ne.key), P = p(Ne, P, we), ge === null ? he = Ne : ge.sibling = Ne, ge = Ne);
        return e && ye.forEach(function(_g) {
          return n(R, _g);
        }), Be && Yn(R, we), he;
      }
      function qe(R, P, A, Q) {
        if (typeof A == "object" && A !== null && A.type === ee && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case Z:
              e: {
                for (var he = A.key, ge = P; ge !== null; ) {
                  if (ge.key === he) {
                    if (he = A.type, he === ee) {
                      if (ge.tag === 7) {
                        o(R, ge.sibling), P = d(ge, A.props.children), P.return = R, R = P;
                        break e;
                      }
                    } else if (ge.elementType === he || typeof he == "object" && he !== null && he.$$typeof === ie && Tc(he) === ge.type) {
                      o(R, ge.sibling), P = d(ge, A.props), P.ref = fi(R, ge, A), P.return = R, R = P;
                      break e;
                    }
                    o(R, ge);
                    break;
                  } else n(R, ge);
                  ge = ge.sibling;
                }
                A.type === ee ? (P = nr(A.props.children, R.mode, Q, A.key), P.return = R, R = P) : (Q = $o(A.type, A.key, A.props, null, R.mode, Q), Q.ref = fi(R, P, A), Q.return = R, R = Q);
              }
              return x(R);
            case O:
              e: {
                for (ge = A.key; P !== null; ) {
                  if (P.key === ge) if (P.tag === 4 && P.stateNode.containerInfo === A.containerInfo && P.stateNode.implementation === A.implementation) {
                    o(R, P.sibling), P = d(P, A.children || []), P.return = R, R = P;
                    break e;
                  } else {
                    o(R, P);
                    break;
                  }
                  else n(R, P);
                  P = P.sibling;
                }
                P = eu(A, R.mode, Q), P.return = R, R = P;
              }
              return x(R);
            case ie:
              return ge = A._init, qe(R, P, ge(A._payload), Q);
          }
          if (gn(A)) return ae(R, P, A, Q);
          if (G(A)) return fe(R, P, A, Q);
          ko(R, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, P !== null && P.tag === 6 ? (o(R, P.sibling), P = d(P, A), P.return = R, R = P) : (o(R, P), P = Zs(A, R.mode, Q), P.return = R, R = P), x(R)) : o(R, P);
      }
      return qe;
    }
    var kr = _c(true), Pc = _c(false), So = Tn(null), Eo = null, Sr = null, as = null;
    function cs() {
      as = Sr = Eo = null;
    }
    function fs(e) {
      var n = So.current;
      Fe(So), e._currentValue = n;
    }
    function ds(e, n, o) {
      for (; e !== null; ) {
        var u = e.alternate;
        if ((e.childLanes & n) !== n ? (e.childLanes |= n, u !== null && (u.childLanes |= n)) : u !== null && (u.childLanes & n) !== n && (u.childLanes |= n), e === o) break;
        e = e.return;
      }
    }
    function Er(e, n) {
      Eo = e, as = Sr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (ht = true), e.firstContext = null);
    }
    function zt(e) {
      var n = e._currentValue;
      if (as !== e) if (e = {
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
    var Qn = null;
    function ps(e) {
      Qn === null ? Qn = [
        e
      ] : Qn.push(e);
    }
    function Nc(e, n, o, u) {
      var d = n.interleaved;
      return d === null ? (o.next = o, ps(n)) : (o.next = d.next, d.next = o), n.interleaved = o, dn(e, u);
    }
    function dn(e, n) {
      e.lanes |= n;
      var o = e.alternate;
      for (o !== null && (o.lanes |= n), o = e, e = e.return; e !== null; ) e.childLanes |= n, o = e.alternate, o !== null && (o.childLanes |= n), o = e, e = e.return;
      return o.tag === 3 ? o.stateNode : null;
    }
    var Nn = false;
    function hs(e) {
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
    function Dc(e, n) {
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
      var u = e.updateQueue;
      if (u === null) return null;
      if (u = u.shared, (Pe & 2) !== 0) {
        var d = u.pending;
        return d === null ? n.next = n : (n.next = d.next, d.next = n), u.pending = n, dn(e, o);
      }
      return d = u.interleaved, d === null ? (n.next = n, ps(u)) : (n.next = d.next, d.next = n), u.interleaved = n, dn(e, o);
    }
    function Io(e, n, o) {
      if (n = n.updateQueue, n !== null && (n = n.shared, (o & 4194240) !== 0)) {
        var u = n.lanes;
        u &= e.pendingLanes, o |= u, n.lanes = o, Pl(e, o);
      }
    }
    function Rc(e, n) {
      var o = e.updateQueue, u = e.alternate;
      if (u !== null && (u = u.updateQueue, o === u)) {
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
          baseState: u.baseState,
          firstBaseUpdate: d,
          lastBaseUpdate: p,
          shared: u.shared,
          effects: u.effects
        }, e.updateQueue = o;
        return;
      }
      e = o.lastBaseUpdate, e === null ? o.firstBaseUpdate = n : e.next = n, o.lastBaseUpdate = n;
    }
    function Co(e, n, o, u) {
      var d = e.updateQueue;
      Nn = false;
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
          var W = E.lane, le = E.eventTime;
          if ((u & W) === W) {
            H !== null && (H = H.next = {
              eventTime: le,
              lane: 0,
              tag: E.tag,
              payload: E.payload,
              callback: E.callback,
              next: null
            });
            e: {
              var ae = e, fe = E;
              switch (W = n, le = o, fe.tag) {
                case 1:
                  if (ae = fe.payload, typeof ae == "function") {
                    $ = ae.call(le, $, W);
                    break e;
                  }
                  $ = ae;
                  break e;
                case 3:
                  ae.flags = ae.flags & -65537 | 128;
                case 0:
                  if (ae = fe.payload, W = typeof ae == "function" ? ae.call(le, $, W) : ae, W == null) break e;
                  $ = k({}, $, W);
                  break e;
                case 2:
                  Nn = true;
              }
            }
            E.callback !== null && E.lane !== 0 && (e.flags |= 64, W = d.effects, W === null ? d.effects = [
              E
            ] : W.push(E));
          } else le = {
            eventTime: le,
            lane: W,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          }, H === null ? (z = H = le, C = $) : H = H.next = le, x |= W;
          if (E = E.next, E === null) {
            if (E = d.shared.pending, E === null) break;
            W = E, E = W.next, W.next = null, d.lastBaseUpdate = W, d.shared.pending = null;
          }
        } while (true);
        if (H === null && (C = $), d.baseState = C, d.firstBaseUpdate = z, d.lastBaseUpdate = H, n = d.shared.interleaved, n !== null) {
          d = n;
          do
            x |= d.lane, d = d.next;
          while (d !== n);
        } else p === null && (d.shared.lanes = 0);
        Jn |= x, e.lanes = x, e.memoizedState = $;
      }
    }
    function Ac(e, n, o) {
      if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
        var u = e[n], d = u.callback;
        if (d !== null) {
          if (u.callback = null, u = o, typeof d != "function") throw Error(i(191, d));
          d.call(u);
        }
      }
    }
    var di = {}, Jt = Tn(di), pi = Tn(di), hi = Tn(di);
    function Kn(e) {
      if (e === di) throw Error(i(174));
      return e;
    }
    function ms(e, n) {
      switch (Oe(hi, n), Oe(pi, e), Oe(Jt, di), e = n.nodeType, e) {
        case 9:
        case 11:
          n = (n = n.documentElement) ? n.namespaceURI : J(null, "");
          break;
        default:
          e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = J(n, e);
      }
      Fe(Jt), Oe(Jt, n);
    }
    function Ir() {
      Fe(Jt), Fe(pi), Fe(hi);
    }
    function Oc(e) {
      Kn(hi.current);
      var n = Kn(Jt.current), o = J(n, e.type);
      n !== o && (Oe(pi, e), Oe(Jt, o));
    }
    function gs(e) {
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
    var ys = [];
    function vs() {
      for (var e = 0; e < ys.length; e++) ys[e]._workInProgressVersionPrimary = null;
      ys.length = 0;
    }
    var _o = V.ReactCurrentDispatcher, ws = V.ReactCurrentBatchConfig, Xn = 0, Ve = null, Ke = null, Je = null, Po = false, mi = false, gi = 0, Qm = 0;
    function lt() {
      throw Error(i(321));
    }
    function xs(e, n) {
      if (n === null) return false;
      for (var o = 0; o < n.length && o < e.length; o++) if (!Ut(e[o], n[o])) return false;
      return true;
    }
    function ks(e, n, o, u, d, p) {
      if (Xn = p, Ve = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, _o.current = e === null || e.memoizedState === null ? Zm : eg, e = o(u, d), mi) {
        p = 0;
        do {
          if (mi = false, gi = 0, 25 <= p) throw Error(i(301));
          p += 1, Je = Ke = null, n.updateQueue = null, _o.current = tg, e = o(u, d);
        } while (mi);
      }
      if (_o.current = Ro, n = Ke !== null && Ke.next !== null, Xn = 0, Je = Ke = Ve = null, Po = false, n) throw Error(i(300));
      return e;
    }
    function Ss() {
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
    function Mt() {
      if (Ke === null) {
        var e = Ve.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ke.next;
      var n = Je === null ? Ve.memoizedState : Je.next;
      if (n !== null) Je = n, Ke = e;
      else {
        if (e === null) throw Error(i(310));
        Ke = e, e = {
          memoizedState: Ke.memoizedState,
          baseState: Ke.baseState,
          baseQueue: Ke.baseQueue,
          queue: Ke.queue,
          next: null
        }, Je === null ? Ve.memoizedState = Je = e : Je = Je.next = e;
      }
      return Je;
    }
    function yi(e, n) {
      return typeof n == "function" ? n(e) : n;
    }
    function Es(e) {
      var n = Mt(), o = n.queue;
      if (o === null) throw Error(i(311));
      o.lastRenderedReducer = e;
      var u = Ke, d = u.baseQueue, p = o.pending;
      if (p !== null) {
        if (d !== null) {
          var x = d.next;
          d.next = p.next, p.next = x;
        }
        u.baseQueue = d = p, o.pending = null;
      }
      if (d !== null) {
        p = d.next, u = u.baseState;
        var E = x = null, C = null, z = p;
        do {
          var H = z.lane;
          if ((Xn & H) === H) C !== null && (C = C.next = {
            lane: 0,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          }), u = z.hasEagerState ? z.eagerState : e(u, z.action);
          else {
            var $ = {
              lane: H,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            };
            C === null ? (E = C = $, x = u) : C = C.next = $, Ve.lanes |= H, Jn |= H;
          }
          z = z.next;
        } while (z !== null && z !== p);
        C === null ? x = u : C.next = E, Ut(u, n.memoizedState) || (ht = true), n.memoizedState = u, n.baseState = x, n.baseQueue = C, o.lastRenderedState = u;
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
    function Is(e) {
      var n = Mt(), o = n.queue;
      if (o === null) throw Error(i(311));
      o.lastRenderedReducer = e;
      var u = o.dispatch, d = o.pending, p = n.memoizedState;
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
        u
      ];
    }
    function Lc() {
    }
    function zc(e, n) {
      var o = Ve, u = Mt(), d = n(), p = !Ut(u.memoizedState, d);
      if (p && (u.memoizedState = d, ht = true), u = u.queue, Cs(Fc.bind(null, o, u, e), [
        e
      ]), u.getSnapshot !== n || p || Je !== null && Je.memoizedState.tag & 1) {
        if (o.flags |= 2048, vi(9, bc.bind(null, o, u, d, n), void 0, null), Ze === null) throw Error(i(349));
        (Xn & 30) !== 0 || Mc(o, n, d);
      }
      return d;
    }
    function Mc(e, n, o) {
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
    function bc(e, n, o, u) {
      n.value = o, n.getSnapshot = u, jc(n) && Bc(e);
    }
    function Fc(e, n, o) {
      return o(function() {
        jc(n) && Bc(e);
      });
    }
    function jc(e) {
      var n = e.getSnapshot;
      e = e.value;
      try {
        var o = n();
        return !Ut(e, o);
      } catch {
        return true;
      }
    }
    function Bc(e) {
      var n = dn(e, 1);
      n !== null && qt(n, e, 1, -1);
    }
    function Uc(e) {
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
    function vi(e, n, o, u) {
      return e = {
        tag: e,
        create: n,
        destroy: o,
        deps: u,
        next: null
      }, n = Ve.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
      }, Ve.updateQueue = n, n.lastEffect = e.next = e) : (o = n.lastEffect, o === null ? n.lastEffect = e.next = e : (u = o.next, o.next = e, e.next = u, n.lastEffect = e)), e;
    }
    function Vc() {
      return Mt().memoizedState;
    }
    function No(e, n, o, u) {
      var d = Zt();
      Ve.flags |= e, d.memoizedState = vi(1 | n, o, void 0, u === void 0 ? null : u);
    }
    function Do(e, n, o, u) {
      var d = Mt();
      u = u === void 0 ? null : u;
      var p = void 0;
      if (Ke !== null) {
        var x = Ke.memoizedState;
        if (p = x.destroy, u !== null && xs(u, x.deps)) {
          d.memoizedState = vi(n, o, p, u);
          return;
        }
      }
      Ve.flags |= e, d.memoizedState = vi(1 | n, o, p, u);
    }
    function Wc(e, n) {
      return No(8390656, 8, e, n);
    }
    function Cs(e, n) {
      return Do(2048, 8, e, n);
    }
    function Hc(e, n) {
      return Do(4, 2, e, n);
    }
    function $c(e, n) {
      return Do(4, 4, e, n);
    }
    function qc(e, n) {
      if (typeof n == "function") return e = e(), n(e), function() {
        n(null);
      };
      if (n != null) return e = e(), n.current = e, function() {
        n.current = null;
      };
    }
    function Gc(e, n, o) {
      return o = o != null ? o.concat([
        e
      ]) : null, Do(4, 4, qc.bind(null, n, e), o);
    }
    function Ts() {
    }
    function Yc(e, n) {
      var o = Mt();
      n = n === void 0 ? null : n;
      var u = o.memoizedState;
      return u !== null && n !== null && xs(n, u[1]) ? u[0] : (o.memoizedState = [
        e,
        n
      ], e);
    }
    function Qc(e, n) {
      var o = Mt();
      n = n === void 0 ? null : n;
      var u = o.memoizedState;
      return u !== null && n !== null && xs(n, u[1]) ? u[0] : (e = e(), o.memoizedState = [
        e,
        n
      ], e);
    }
    function Kc(e, n, o) {
      return (Xn & 21) === 0 ? (e.baseState && (e.baseState = false, ht = true), e.memoizedState = o) : (Ut(o, n) || (o = Ta(), Ve.lanes |= o, Jn |= o, e.baseState = true), n);
    }
    function Km(e, n) {
      var o = Ae;
      Ae = o !== 0 && 4 > o ? o : 4, e(true);
      var u = ws.transition;
      ws.transition = {};
      try {
        e(false), n();
      } finally {
        Ae = o, ws.transition = u;
      }
    }
    function Xc() {
      return Mt().memoizedState;
    }
    function Xm(e, n, o) {
      var u = Ln(e);
      if (o = {
        lane: u,
        action: o,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Jc(e)) Zc(n, o);
      else if (o = Nc(e, n, o, u), o !== null) {
        var d = ft();
        qt(o, e, u, d), ef(o, n, u);
      }
    }
    function Jm(e, n, o) {
      var u = Ln(e), d = {
        lane: u,
        action: o,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Jc(e)) Zc(n, d);
      else {
        var p = e.alternate;
        if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
          var x = n.lastRenderedState, E = p(x, o);
          if (d.hasEagerState = true, d.eagerState = E, Ut(E, x)) {
            var C = n.interleaved;
            C === null ? (d.next = d, ps(n)) : (d.next = C.next, C.next = d), n.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
        o = Nc(e, n, d, u), o !== null && (d = ft(), qt(o, e, u, d), ef(o, n, u));
      }
    }
    function Jc(e) {
      var n = e.alternate;
      return e === Ve || n !== null && n === Ve;
    }
    function Zc(e, n) {
      mi = Po = true;
      var o = e.pending;
      o === null ? n.next = n : (n.next = o.next, o.next = n), e.pending = n;
    }
    function ef(e, n, o) {
      if ((o & 4194240) !== 0) {
        var u = n.lanes;
        u &= e.pendingLanes, o |= u, n.lanes = o, Pl(e, o);
      }
    }
    var Ro = {
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
      useEffect: Wc,
      useImperativeHandle: function(e, n, o) {
        return o = o != null ? o.concat([
          e
        ]) : null, No(4194308, 4, qc.bind(null, n, e), o);
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
        var u = Zt();
        return n = o !== void 0 ? o(n) : n, u.memoizedState = u.baseState = n, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n
        }, u.queue = e, e = e.dispatch = Xm.bind(null, Ve, e), [
          u.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var n = Zt();
        return e = {
          current: e
        }, n.memoizedState = e;
      },
      useState: Uc,
      useDebugValue: Ts,
      useDeferredValue: function(e) {
        return Zt().memoizedState = e;
      },
      useTransition: function() {
        var e = Uc(false), n = e[0];
        return e = Km.bind(null, e[1]), Zt().memoizedState = e, [
          n,
          e
        ];
      },
      useMutableSource: function() {
      },
      useSyncExternalStore: function(e, n, o) {
        var u = Ve, d = Zt();
        if (Be) {
          if (o === void 0) throw Error(i(407));
          o = o();
        } else {
          if (o = n(), Ze === null) throw Error(i(349));
          (Xn & 30) !== 0 || Mc(u, n, o);
        }
        d.memoizedState = o;
        var p = {
          value: o,
          getSnapshot: n
        };
        return d.queue = p, Wc(Fc.bind(null, u, p, e), [
          e
        ]), u.flags |= 2048, vi(9, bc.bind(null, u, p, o, n), void 0, null), o;
      },
      useId: function() {
        var e = Zt(), n = Ze.identifierPrefix;
        if (Be) {
          var o = fn, u = cn;
          o = (u & ~(1 << 32 - Bt(u) - 1)).toString(32) + o, n = ":" + n + "R" + o, o = gi++, 0 < o && (n += "H" + o.toString(32)), n += ":";
        } else o = Qm++, n = ":" + n + "r" + o.toString(32) + ":";
        return e.memoizedState = n;
      },
      unstable_isNewReconciler: false
    }, eg = {
      readContext: zt,
      useCallback: Yc,
      useContext: zt,
      useEffect: Cs,
      useImperativeHandle: Gc,
      useInsertionEffect: Hc,
      useLayoutEffect: $c,
      useMemo: Qc,
      useReducer: Es,
      useRef: Vc,
      useState: function() {
        return Es(yi);
      },
      useDebugValue: Ts,
      useDeferredValue: function(e) {
        var n = Mt();
        return Kc(n, Ke.memoizedState, e);
      },
      useTransition: function() {
        var e = Es(yi)[0], n = Mt().memoizedState;
        return [
          e,
          n
        ];
      },
      useMutableSource: Lc,
      useSyncExternalStore: zc,
      useId: Xc,
      unstable_isNewReconciler: false
    }, tg = {
      readContext: zt,
      useCallback: Yc,
      useContext: zt,
      useEffect: Cs,
      useImperativeHandle: Gc,
      useInsertionEffect: Hc,
      useLayoutEffect: $c,
      useMemo: Qc,
      useReducer: Is,
      useRef: Vc,
      useState: function() {
        return Is(yi);
      },
      useDebugValue: Ts,
      useDeferredValue: function(e) {
        var n = Mt();
        return Ke === null ? n.memoizedState = e : Kc(n, Ke.memoizedState, e);
      },
      useTransition: function() {
        var e = Is(yi)[0], n = Mt().memoizedState;
        return [
          e,
          n
        ];
      },
      useMutableSource: Lc,
      useSyncExternalStore: zc,
      useId: Xc,
      unstable_isNewReconciler: false
    };
    function Wt(e, n) {
      if (e && e.defaultProps) {
        n = k({}, n), e = e.defaultProps;
        for (var o in e) n[o] === void 0 && (n[o] = e[o]);
        return n;
      }
      return n;
    }
    function _s(e, n, o, u) {
      n = e.memoizedState, o = o(u, n), o = o == null ? n : k({}, n, o), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    var Ao = {
      isMounted: function(e) {
        return (e = e._reactInternals) ? Hn(e) === e : false;
      },
      enqueueSetState: function(e, n, o) {
        e = e._reactInternals;
        var u = ft(), d = Ln(e), p = pn(u, d);
        p.payload = n, o != null && (p.callback = o), n = Dn(e, p, d), n !== null && (qt(n, e, d, u), Io(n, e, d));
      },
      enqueueReplaceState: function(e, n, o) {
        e = e._reactInternals;
        var u = ft(), d = Ln(e), p = pn(u, d);
        p.tag = 1, p.payload = n, o != null && (p.callback = o), n = Dn(e, p, d), n !== null && (qt(n, e, d, u), Io(n, e, d));
      },
      enqueueForceUpdate: function(e, n) {
        e = e._reactInternals;
        var o = ft(), u = Ln(e), d = pn(o, u);
        d.tag = 2, n != null && (d.callback = n), n = Dn(e, d, u), n !== null && (qt(n, e, u, o), Io(n, e, u));
      }
    };
    function tf(e, n, o, u, d, p, x) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(u, p, x) : n.prototype && n.prototype.isPureReactComponent ? !ii(o, u) || !ii(d, p) : true;
    }
    function nf(e, n, o) {
      var u = false, d = _n, p = n.contextType;
      return typeof p == "object" && p !== null ? p = zt(p) : (d = pt(n) ? qn : ot.current, u = n.contextTypes, p = (u = u != null) ? yr(e, d) : _n), n = new n(o, p), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Ao, e.stateNode = n, n._reactInternals = e, u && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = d, e.__reactInternalMemoizedMaskedChildContext = p), n;
    }
    function rf(e, n, o, u) {
      e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(o, u), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(o, u), n.state !== e && Ao.enqueueReplaceState(n, n.state, null);
    }
    function Ps(e, n, o, u) {
      var d = e.stateNode;
      d.props = o, d.state = e.memoizedState, d.refs = {}, hs(e);
      var p = n.contextType;
      typeof p == "object" && p !== null ? d.context = zt(p) : (p = pt(n) ? qn : ot.current, d.context = yr(e, p)), d.state = e.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (_s(e, n, p, o), d.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (n = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), n !== d.state && Ao.enqueueReplaceState(d, d.state, null), Co(e, o, d, u), d.state = e.memoizedState), typeof d.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Cr(e, n) {
      try {
        var o = "", u = n;
        do
          o += ce(u), u = u.return;
        while (u);
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
    function Ns(e, n, o) {
      return {
        value: e,
        source: null,
        stack: o ?? null,
        digest: n ?? null
      };
    }
    function Ds(e, n) {
      try {
        console.error(n.value);
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    var ng = typeof WeakMap == "function" ? WeakMap : Map;
    function of(e, n, o) {
      o = pn(-1, o), o.tag = 3, o.payload = {
        element: null
      };
      var u = n.value;
      return o.callback = function() {
        jo || (jo = true, $s = u), Ds(e, n);
      }, o;
    }
    function lf(e, n, o) {
      o = pn(-1, o), o.tag = 3;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = n.value;
        o.payload = function() {
          return u(d);
        }, o.callback = function() {
          Ds(e, n);
        };
      }
      var p = e.stateNode;
      return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
        Ds(e, n), typeof u != "function" && (An === null ? An = /* @__PURE__ */ new Set([
          this
        ]) : An.add(this));
        var x = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: x !== null ? x : ""
        });
      }), o;
    }
    function sf(e, n, o) {
      var u = e.pingCache;
      if (u === null) {
        u = e.pingCache = new ng();
        var d = /* @__PURE__ */ new Set();
        u.set(n, d);
      } else d = u.get(n), d === void 0 && (d = /* @__PURE__ */ new Set(), u.set(n, d));
      d.has(o) || (d.add(o), e = gg.bind(null, e, n, o), n.then(e, e));
    }
    function uf(e) {
      do {
        var n;
        if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : true), n) return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function af(e, n, o, u, d) {
      return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (n = pn(-1, 1), n.tag = 2, Dn(o, n, 1))), o.lanes |= 1), e) : (e.flags |= 65536, e.lanes = d, e);
    }
    var rg = V.ReactCurrentOwner, ht = false;
    function ct(e, n, o, u) {
      n.child = e === null ? Pc(n, null, o, u) : kr(n, e.child, o, u);
    }
    function cf(e, n, o, u, d) {
      o = o.render;
      var p = n.ref;
      return Er(n, d), u = ks(e, n, o, u, p, d), o = Ss(), e !== null && !ht ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~d, hn(e, n, d)) : (Be && o && is(n), n.flags |= 1, ct(e, n, u, d), n.child);
    }
    function ff(e, n, o, u, d) {
      if (e === null) {
        var p = o.type;
        return typeof p == "function" && !Js(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (n.tag = 15, n.type = p, df(e, n, p, u, d)) : (e = $o(o.type, null, u, n, n.mode, d), e.ref = n.ref, e.return = n, n.child = e);
      }
      if (p = e.child, (e.lanes & d) === 0) {
        var x = p.memoizedProps;
        if (o = o.compare, o = o !== null ? o : ii, o(x, u) && e.ref === n.ref) return hn(e, n, d);
      }
      return n.flags |= 1, e = Mn(p, u), e.ref = n.ref, e.return = n, n.child = e;
    }
    function df(e, n, o, u, d) {
      if (e !== null) {
        var p = e.memoizedProps;
        if (ii(p, u) && e.ref === n.ref) if (ht = false, n.pendingProps = u = p, (e.lanes & d) !== 0) (e.flags & 131072) !== 0 && (ht = true);
        else return n.lanes = e.lanes, hn(e, n, d);
      }
      return Rs(e, n, o, u, d);
    }
    function pf(e, n, o) {
      var u = n.pendingProps, d = u.children, p = e !== null ? e.memoizedState : null;
      if (u.mode === "hidden") if ((n.mode & 1) === 0) n.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, Oe(_r, Ct), Ct |= o;
      else {
        if ((o & 1073741824) === 0) return e = p !== null ? p.baseLanes | o : o, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }, n.updateQueue = null, Oe(_r, Ct), Ct |= e, null;
        n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, u = p !== null ? p.baseLanes : o, Oe(_r, Ct), Ct |= u;
      }
      else p !== null ? (u = p.baseLanes | o, n.memoizedState = null) : u = o, Oe(_r, Ct), Ct |= u;
      return ct(e, n, d, o), n.child;
    }
    function hf(e, n) {
      var o = n.ref;
      (e === null && o !== null || e !== null && e.ref !== o) && (n.flags |= 512, n.flags |= 2097152);
    }
    function Rs(e, n, o, u, d) {
      var p = pt(o) ? qn : ot.current;
      return p = yr(n, p), Er(n, d), o = ks(e, n, o, u, p, d), u = Ss(), e !== null && !ht ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~d, hn(e, n, d)) : (Be && u && is(n), n.flags |= 1, ct(e, n, o, d), n.child);
    }
    function mf(e, n, o, u, d) {
      if (pt(o)) {
        var p = true;
        go(n);
      } else p = false;
      if (Er(n, d), n.stateNode === null) Lo(e, n), nf(n, o, u), Ps(n, o, u, d), u = true;
      else if (e === null) {
        var x = n.stateNode, E = n.memoizedProps;
        x.props = E;
        var C = x.context, z = o.contextType;
        typeof z == "object" && z !== null ? z = zt(z) : (z = pt(o) ? qn : ot.current, z = yr(n, z));
        var H = o.getDerivedStateFromProps, $ = typeof H == "function" || typeof x.getSnapshotBeforeUpdate == "function";
        $ || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (E !== u || C !== z) && rf(n, x, u, z), Nn = false;
        var W = n.memoizedState;
        x.state = W, Co(n, u, x, d), C = n.memoizedState, E !== u || W !== C || dt.current || Nn ? (typeof H == "function" && (_s(n, o, H, u), C = n.memoizedState), (E = Nn || tf(n, o, E, u, W, C, z)) ? ($ || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = u, n.memoizedState = C), x.props = u, x.state = C, x.context = z, u = E) : (typeof x.componentDidMount == "function" && (n.flags |= 4194308), u = false);
      } else {
        x = n.stateNode, Dc(e, n), E = n.memoizedProps, z = n.type === n.elementType ? E : Wt(n.type, E), x.props = z, $ = n.pendingProps, W = x.context, C = o.contextType, typeof C == "object" && C !== null ? C = zt(C) : (C = pt(o) ? qn : ot.current, C = yr(n, C));
        var le = o.getDerivedStateFromProps;
        (H = typeof le == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (E !== $ || W !== C) && rf(n, x, u, C), Nn = false, W = n.memoizedState, x.state = W, Co(n, u, x, d);
        var ae = n.memoizedState;
        E !== $ || W !== ae || dt.current || Nn ? (typeof le == "function" && (_s(n, o, le, u), ae = n.memoizedState), (z = Nn || tf(n, o, z, u, W, ae, C) || false) ? (H || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(u, ae, C), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(u, ae, C)), typeof x.componentDidUpdate == "function" && (n.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || E === e.memoizedProps && W === e.memoizedState || (n.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && W === e.memoizedState || (n.flags |= 1024), n.memoizedProps = u, n.memoizedState = ae), x.props = u, x.state = ae, x.context = C, u = z) : (typeof x.componentDidUpdate != "function" || E === e.memoizedProps && W === e.memoizedState || (n.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && W === e.memoizedState || (n.flags |= 1024), u = false);
      }
      return As(e, n, o, u, p, d);
    }
    function As(e, n, o, u, d, p) {
      hf(e, n);
      var x = (n.flags & 128) !== 0;
      if (!u && !x) return d && wc(n, o, false), hn(e, n, p);
      u = n.stateNode, rg.current = n;
      var E = x && typeof o.getDerivedStateFromError != "function" ? null : u.render();
      return n.flags |= 1, e !== null && x ? (n.child = kr(n, e.child, null, p), n.child = kr(n, null, E, p)) : ct(e, n, E, p), n.memoizedState = u.state, d && wc(n, o, true), n.child;
    }
    function gf(e) {
      var n = e.stateNode;
      n.pendingContext ? yc(e, n.pendingContext, n.pendingContext !== n.context) : n.context && yc(e, n.context, false), ms(e, n.containerInfo);
    }
    function yf(e, n, o, u, d) {
      return xr(), us(d), n.flags |= 256, ct(e, n, o, u), n.child;
    }
    var Os = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    };
    function Ls(e) {
      return {
        baseLanes: e,
        cachePool: null,
        transitions: null
      };
    }
    function vf(e, n, o) {
      var u = n.pendingProps, d = Ue.current, p = false, x = (n.flags & 128) !== 0, E;
      if ((E = x) || (E = e !== null && e.memoizedState === null ? false : (d & 2) !== 0), E ? (p = true, n.flags &= -129) : (e === null || e.memoizedState !== null) && (d |= 1), Oe(Ue, d & 1), e === null) return ss(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (x = u.children, e = u.fallback, p ? (u = n.mode, p = n.child, x = {
        mode: "hidden",
        children: x
      }, (u & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = x) : p = qo(x, u, 0, null), e = nr(e, u, o, null), p.return = n, e.return = n, p.sibling = e, n.child = p, n.child.memoizedState = Ls(o), n.memoizedState = Os, e) : zs(n, x));
      if (d = e.memoizedState, d !== null && (E = d.dehydrated, E !== null)) return ig(e, n, x, u, E, d, o);
      if (p) {
        p = u.fallback, x = n.mode, d = e.child, E = d.sibling;
        var C = {
          mode: "hidden",
          children: u.children
        };
        return (x & 1) === 0 && n.child !== d ? (u = n.child, u.childLanes = 0, u.pendingProps = C, n.deletions = null) : (u = Mn(d, C), u.subtreeFlags = d.subtreeFlags & 14680064), E !== null ? p = Mn(E, p) : (p = nr(p, x, o, null), p.flags |= 2), p.return = n, u.return = n, u.sibling = p, n.child = u, u = p, p = n.child, x = e.child.memoizedState, x = x === null ? Ls(o) : {
          baseLanes: x.baseLanes | o,
          cachePool: null,
          transitions: x.transitions
        }, p.memoizedState = x, p.childLanes = e.childLanes & ~o, n.memoizedState = Os, u;
      }
      return p = e.child, e = p.sibling, u = Mn(p, {
        mode: "visible",
        children: u.children
      }), (n.mode & 1) === 0 && (u.lanes = o), u.return = n, u.sibling = null, e !== null && (o = n.deletions, o === null ? (n.deletions = [
        e
      ], n.flags |= 16) : o.push(e)), n.child = u, n.memoizedState = null, u;
    }
    function zs(e, n) {
      return n = qo({
        mode: "visible",
        children: n
      }, e.mode, 0, null), n.return = e, e.child = n;
    }
    function Oo(e, n, o, u) {
      return u !== null && us(u), kr(n, e.child, null, o), e = zs(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
    }
    function ig(e, n, o, u, d, p, x) {
      if (o) return n.flags & 256 ? (n.flags &= -257, u = Ns(Error(i(422))), Oo(e, n, x, u)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (p = u.fallback, d = n.mode, u = qo({
        mode: "visible",
        children: u.children
      }, d, 0, null), p = nr(p, d, x, null), p.flags |= 2, u.return = n, p.return = n, u.sibling = p, n.child = u, (n.mode & 1) !== 0 && kr(n, e.child, null, x), n.child.memoizedState = Ls(x), n.memoizedState = Os, p);
      if ((n.mode & 1) === 0) return Oo(e, n, x, null);
      if (d.data === "$!") {
        if (u = d.nextSibling && d.nextSibling.dataset, u) var E = u.dgst;
        return u = E, p = Error(i(419)), u = Ns(p, u, void 0), Oo(e, n, x, u);
      }
      if (E = (x & e.childLanes) !== 0, ht || E) {
        if (u = Ze, u !== null) {
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
          d = (d & (u.suspendedLanes | x)) !== 0 ? 0 : d, d !== 0 && d !== p.retryLane && (p.retryLane = d, dn(e, d), qt(u, e, d, -1));
        }
        return Xs(), u = Ns(Error(i(421))), Oo(e, n, x, u);
      }
      return d.data === "$?" ? (n.flags |= 128, n.child = e.child, n = yg.bind(null, e), d._reactRetry = n, null) : (e = p.treeContext, It = Cn(d.nextSibling), Et = n, Be = true, Vt = null, e !== null && (Ot[Lt++] = cn, Ot[Lt++] = fn, Ot[Lt++] = Gn, cn = e.id, fn = e.overflow, Gn = n), n = zs(n, u.children), n.flags |= 4096, n);
    }
    function wf(e, n, o) {
      e.lanes |= n;
      var u = e.alternate;
      u !== null && (u.lanes |= n), ds(e.return, n, o);
    }
    function Ms(e, n, o, u, d) {
      var p = e.memoizedState;
      p === null ? e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: u,
        tail: o,
        tailMode: d
      } : (p.isBackwards = n, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = o, p.tailMode = d);
    }
    function xf(e, n, o) {
      var u = n.pendingProps, d = u.revealOrder, p = u.tail;
      if (ct(e, n, u.children, o), u = Ue.current, (u & 2) !== 0) u = u & 1 | 2, n.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && wf(e, o, n);
          else if (e.tag === 19) wf(e, o, n);
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
        u &= 1;
      }
      if (Oe(Ue, u), (n.mode & 1) === 0) n.memoizedState = null;
      else switch (d) {
        case "forwards":
          for (o = n.child, d = null; o !== null; ) e = o.alternate, e !== null && To(e) === null && (d = o), o = o.sibling;
          o = d, o === null ? (d = n.child, n.child = null) : (d = o.sibling, o.sibling = null), Ms(n, false, d, o, p);
          break;
        case "backwards":
          for (o = null, d = n.child, n.child = null; d !== null; ) {
            if (e = d.alternate, e !== null && To(e) === null) {
              n.child = d;
              break;
            }
            e = d.sibling, d.sibling = o, o = d, d = e;
          }
          Ms(n, true, o, null, p);
          break;
        case "together":
          Ms(n, false, null, null, void 0);
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
        for (e = n.child, o = Mn(e, e.pendingProps), n.child = o, o.return = n; e.sibling !== null; ) e = e.sibling, o = o.sibling = Mn(e, e.pendingProps), o.return = n;
        o.sibling = null;
      }
      return n.child;
    }
    function og(e, n, o) {
      switch (n.tag) {
        case 3:
          gf(n), xr();
          break;
        case 5:
          Oc(n);
          break;
        case 1:
          pt(n.type) && go(n);
          break;
        case 4:
          ms(n, n.stateNode.containerInfo);
          break;
        case 10:
          var u = n.type._context, d = n.memoizedProps.value;
          Oe(So, u._currentValue), u._currentValue = d;
          break;
        case 13:
          if (u = n.memoizedState, u !== null) return u.dehydrated !== null ? (Oe(Ue, Ue.current & 1), n.flags |= 128, null) : (o & n.child.childLanes) !== 0 ? vf(e, n, o) : (Oe(Ue, Ue.current & 1), e = hn(e, n, o), e !== null ? e.sibling : null);
          Oe(Ue, Ue.current & 1);
          break;
        case 19:
          if (u = (o & n.childLanes) !== 0, (e.flags & 128) !== 0) {
            if (u) return xf(e, n, o);
            n.flags |= 128;
          }
          if (d = n.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Oe(Ue, Ue.current), u) break;
          return null;
        case 22:
        case 23:
          return n.lanes = 0, pf(e, n, o);
      }
      return hn(e, n, o);
    }
    var kf, bs, Sf, Ef;
    kf = function(e, n) {
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
    }, Sf = function(e, n, o, u) {
      var d = e.memoizedProps;
      if (d !== u) {
        e = n.stateNode, Kn(Jt.current);
        var p = null;
        switch (o) {
          case "input":
            d = jr(e, d), u = jr(e, u), p = [];
            break;
          case "select":
            d = k({}, d, {
              value: void 0
            }), u = k({}, u, {
              value: void 0
            }), p = [];
            break;
          case "textarea":
            d = Vr(e, d), u = Vr(e, u), p = [];
            break;
          default:
            typeof d.onClick != "function" && typeof u.onClick == "function" && (e.onclick = po);
        }
        nt(o, u);
        var x;
        o = null;
        for (z in d) if (!u.hasOwnProperty(z) && d.hasOwnProperty(z) && d[z] != null) if (z === "style") {
          var E = d[z];
          for (x in E) E.hasOwnProperty(x) && (o || (o = {}), o[x] = "");
        } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (s.hasOwnProperty(z) ? p || (p = []) : (p = p || []).push(z, null));
        for (z in u) {
          var C = u[z];
          if (E = d == null ? void 0 : d[z], u.hasOwnProperty(z) && C !== E && (C != null || E != null)) if (z === "style") if (E) {
            for (x in E) !E.hasOwnProperty(x) || C && C.hasOwnProperty(x) || (o || (o = {}), o[x] = "");
            for (x in C) C.hasOwnProperty(x) && E[x] !== C[x] && (o || (o = {}), o[x] = C[x]);
          } else o || (p || (p = []), p.push(z, o)), o = C;
          else z === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, E = E ? E.__html : void 0, C != null && E !== C && (p = p || []).push(z, C)) : z === "children" ? typeof C != "string" && typeof C != "number" || (p = p || []).push(z, "" + C) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (s.hasOwnProperty(z) ? (C != null && z === "onScroll" && be("scroll", e), p || E === C || (p = [])) : (p = p || []).push(z, C));
        }
        o && (p = p || []).push("style", o);
        var z = p;
        (n.updateQueue = z) && (n.flags |= 4);
      }
    }, Ef = function(e, n, o, u) {
      o !== u && (n.flags |= 4);
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
          for (var u = null; o !== null; ) o.alternate !== null && (u = o), o = o.sibling;
          u === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : u.sibling = null;
      }
    }
    function st(e) {
      var n = e.alternate !== null && e.alternate.child === e.child, o = 0, u = 0;
      if (n) for (var d = e.child; d !== null; ) o |= d.lanes | d.childLanes, u |= d.subtreeFlags & 14680064, u |= d.flags & 14680064, d.return = e, d = d.sibling;
      else for (d = e.child; d !== null; ) o |= d.lanes | d.childLanes, u |= d.subtreeFlags, u |= d.flags, d.return = e, d = d.sibling;
      return e.subtreeFlags |= u, e.childLanes = o, n;
    }
    function lg(e, n, o) {
      var u = n.pendingProps;
      switch (os(n), n.tag) {
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
          return u = n.stateNode, Ir(), Fe(dt), Fe(ot), vs(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (e === null || e.child === null) && (xo(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Vt !== null && (Ys(Vt), Vt = null))), bs(e, n), st(n), null;
        case 5:
          gs(n);
          var d = Kn(hi.current);
          if (o = n.type, e !== null && n.stateNode != null) Sf(e, n, o, u, d), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
          else {
            if (!u) {
              if (n.stateNode === null) throw Error(i(166));
              return st(n), null;
            }
            if (e = Kn(Jt.current), xo(n)) {
              u = n.stateNode, o = n.type;
              var p = n.memoizedProps;
              switch (u[Xt] = n, u[ai] = p, e = (n.mode & 1) !== 0, o) {
                case "dialog":
                  be("cancel", u), be("close", u);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  be("load", u);
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < li.length; d++) be(li[d], u);
                  break;
                case "source":
                  be("error", u);
                  break;
                case "img":
                case "image":
                case "link":
                  be("error", u), be("load", u);
                  break;
                case "details":
                  be("toggle", u);
                  break;
                case "input":
                  Br(u, p), be("invalid", u);
                  break;
                case "select":
                  u._wrapperState = {
                    wasMultiple: !!p.multiple
                  }, be("invalid", u);
                  break;
                case "textarea":
                  Vi(u, p), be("invalid", u);
              }
              nt(o, p), d = null;
              for (var x in p) if (p.hasOwnProperty(x)) {
                var E = p[x];
                x === "children" ? typeof E == "string" ? u.textContent !== E && (p.suppressHydrationWarning !== true && fo(u.textContent, E, e), d = [
                  "children",
                  E
                ]) : typeof E == "number" && u.textContent !== "" + E && (p.suppressHydrationWarning !== true && fo(u.textContent, E, e), d = [
                  "children",
                  "" + E
                ]) : s.hasOwnProperty(x) && E != null && x === "onScroll" && be("scroll", u);
              }
              switch (o) {
                case "input":
                  Rt(u), Ui(u, p, true);
                  break;
                case "textarea":
                  Rt(u), Hi(u);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof p.onClick == "function" && (u.onclick = po);
              }
              u = d, n.updateQueue = u, u !== null && (n.flags |= 4);
            } else {
              x = d.nodeType === 9 ? d : d.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = F(o)), e === "http://www.w3.org/1999/xhtml" ? o === "script" ? (e = x.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof u.is == "string" ? e = x.createElement(o, {
                is: u.is
              }) : (e = x.createElement(o), o === "select" && (x = e, u.multiple ? x.multiple = true : u.size && (x.size = u.size))) : e = x.createElementNS(e, o), e[Xt] = n, e[ai] = u, kf(e, n, false, false), n.stateNode = e;
              e: {
                switch (x = Qt(o, u), o) {
                  case "dialog":
                    be("cancel", e), be("close", e), d = u;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    be("load", e), d = u;
                    break;
                  case "video":
                  case "audio":
                    for (d = 0; d < li.length; d++) be(li[d], e);
                    d = u;
                    break;
                  case "source":
                    be("error", e), d = u;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    be("error", e), be("load", e), d = u;
                    break;
                  case "details":
                    be("toggle", e), d = u;
                    break;
                  case "input":
                    Br(e, u), d = jr(e, u), be("invalid", e);
                    break;
                  case "option":
                    d = u;
                    break;
                  case "select":
                    e._wrapperState = {
                      wasMultiple: !!u.multiple
                    }, d = k({}, u, {
                      value: void 0
                    }), be("invalid", e);
                    break;
                  case "textarea":
                    Vi(e, u), d = Vr(e, u), be("invalid", e);
                    break;
                  default:
                    d = u;
                }
                nt(o, d), E = d;
                for (p in E) if (E.hasOwnProperty(p)) {
                  var C = E[p];
                  p === "style" ? vn(e, C) : p === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Ee(e, C)) : p === "children" ? typeof C == "string" ? (o !== "textarea" || C !== "") && _e(e, C) : typeof C == "number" && _e(e, "" + C) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (s.hasOwnProperty(p) ? C != null && p === "onScroll" && be("scroll", e) : C != null && L(e, p, C, x));
                }
                switch (o) {
                  case "input":
                    Rt(e), Ui(e, u, false);
                    break;
                  case "textarea":
                    Rt(e), Hi(e);
                    break;
                  case "option":
                    u.value != null && e.setAttribute("value", "" + ke(u.value));
                    break;
                  case "select":
                    e.multiple = !!u.multiple, p = u.value, p != null ? yn(e, !!u.multiple, p, false) : u.defaultValue != null && yn(e, !!u.multiple, u.defaultValue, true);
                    break;
                  default:
                    typeof d.onClick == "function" && (e.onclick = po);
                }
                switch (o) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u = !!u.autoFocus;
                    break e;
                  case "img":
                    u = true;
                    break e;
                  default:
                    u = false;
                }
              }
              u && (n.flags |= 4);
            }
            n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
          }
          return st(n), null;
        case 6:
          if (e && n.stateNode != null) Ef(e, n, e.memoizedProps, u);
          else {
            if (typeof u != "string" && n.stateNode === null) throw Error(i(166));
            if (o = Kn(hi.current), Kn(Jt.current), xo(n)) {
              if (u = n.stateNode, o = n.memoizedProps, u[Xt] = n, (p = u.nodeValue !== o) && (e = Et, e !== null)) switch (e.tag) {
                case 3:
                  fo(u.nodeValue, o, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== true && fo(u.nodeValue, o, (e.mode & 1) !== 0);
              }
              p && (n.flags |= 4);
            } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Xt] = n, n.stateNode = u;
          }
          return st(n), null;
        case 13:
          if (Fe(Ue), u = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Be && It !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) Cc(), xr(), n.flags |= 98560, p = false;
            else if (p = xo(n), u !== null && u.dehydrated !== null) {
              if (e === null) {
                if (!p) throw Error(i(318));
                if (p = n.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(i(317));
                p[Xt] = n;
              } else xr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
              st(n), p = false;
            } else Vt !== null && (Ys(Vt), Vt = null), p = true;
            if (!p) return n.flags & 65536 ? n : null;
          }
          return (n.flags & 128) !== 0 ? (n.lanes = o, n) : (u = u !== null, u !== (e !== null && e.memoizedState !== null) && u && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (Ue.current & 1) !== 0 ? Xe === 0 && (Xe = 3) : Xs())), n.updateQueue !== null && (n.flags |= 4), st(n), null);
        case 4:
          return Ir(), bs(e, n), e === null && si(n.stateNode.containerInfo), st(n), null;
        case 10:
          return fs(n.type._context), st(n), null;
        case 17:
          return pt(n.type) && mo(), st(n), null;
        case 19:
          if (Fe(Ue), p = n.memoizedState, p === null) return st(n), null;
          if (u = (n.flags & 128) !== 0, x = p.rendering, x === null) if (u) wi(p, false);
          else {
            if (Xe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
              if (x = To(e), x !== null) {
                for (n.flags |= 128, wi(p, false), u = x.updateQueue, u !== null && (n.updateQueue = u, n.flags |= 4), n.subtreeFlags = 0, u = o, o = n.child; o !== null; ) p = o, e = u, p.flags &= 14680066, x = p.alternate, x === null ? (p.childLanes = 0, p.lanes = e, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = x.childLanes, p.lanes = x.lanes, p.child = x.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = x.memoizedProps, p.memoizedState = x.memoizedState, p.updateQueue = x.updateQueue, p.type = x.type, e = x.dependencies, p.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), o = o.sibling;
                return Oe(Ue, Ue.current & 1 | 2), n.child;
              }
              e = e.sibling;
            }
            p.tail !== null && $e() > Pr && (n.flags |= 128, u = true, wi(p, false), n.lanes = 4194304);
          }
          else {
            if (!u) if (e = To(x), e !== null) {
              if (n.flags |= 128, u = true, o = e.updateQueue, o !== null && (n.updateQueue = o, n.flags |= 4), wi(p, true), p.tail === null && p.tailMode === "hidden" && !x.alternate && !Be) return st(n), null;
            } else 2 * $e() - p.renderingStartTime > Pr && o !== 1073741824 && (n.flags |= 128, u = true, wi(p, false), n.lanes = 4194304);
            p.isBackwards ? (x.sibling = n.child, n.child = x) : (o = p.last, o !== null ? o.sibling = x : n.child = x, p.last = x);
          }
          return p.tail !== null ? (n = p.tail, p.rendering = n, p.tail = n.sibling, p.renderingStartTime = $e(), n.sibling = null, o = Ue.current, Oe(Ue, u ? o & 1 | 2 : o & 1), n) : (st(n), null);
        case 22:
        case 23:
          return Ks(), u = n.memoizedState !== null, e !== null && e.memoizedState !== null !== u && (n.flags |= 8192), u && (n.mode & 1) !== 0 ? (Ct & 1073741824) !== 0 && (st(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : st(n), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(i(156, n.tag));
    }
    function sg(e, n) {
      switch (os(n), n.tag) {
        case 1:
          return pt(n.type) && mo(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 3:
          return Ir(), Fe(dt), Fe(ot), vs(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
        case 5:
          return gs(n), null;
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
          return fs(n.type._context), null;
        case 22:
        case 23:
          return Ks(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var zo = false, ut = false, ug = typeof WeakSet == "function" ? WeakSet : Set, ue = null;
    function Tr(e, n) {
      var o = e.ref;
      if (o !== null) if (typeof o == "function") try {
        o(null);
      } catch (u) {
        He(e, n, u);
      }
      else o.current = null;
    }
    function Fs(e, n, o) {
      try {
        o();
      } catch (u) {
        He(e, n, u);
      }
    }
    var If = false;
    function ag(e, n) {
      if (Kl = eo, e = tc(), Vl(e)) {
        if ("selectionStart" in e) var o = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
        else e: {
          o = (o = e.ownerDocument) && o.defaultView || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var d = u.anchorOffset, p = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType, p.nodeType;
            } catch {
              o = null;
              break e;
            }
            var x = 0, E = -1, C = -1, z = 0, H = 0, $ = e, W = null;
            t: for (; ; ) {
              for (var le; $ !== o || d !== 0 && $.nodeType !== 3 || (E = x + d), $ !== p || u !== 0 && $.nodeType !== 3 || (C = x + u), $.nodeType === 3 && (x += $.nodeValue.length), (le = $.firstChild) !== null; ) W = $, $ = le;
              for (; ; ) {
                if ($ === e) break t;
                if (W === o && ++z === d && (E = x), W === p && ++H === u && (C = x), (le = $.nextSibling) !== null) break;
                $ = W, W = $.parentNode;
              }
              $ = le;
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
      for (Xl = {
        focusedElem: e,
        selectionRange: o
      }, eo = false, ue = n; ue !== null; ) if (n = ue, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, ue = e;
      else for (; ue !== null; ) {
        n = ue;
        try {
          var ae = n.alternate;
          if ((n.flags & 1024) !== 0) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (ae !== null) {
                var fe = ae.memoizedProps, qe = ae.memoizedState, R = n.stateNode, P = R.getSnapshotBeforeUpdate(n.elementType === n.type ? fe : Wt(n.type, fe), qe);
                R.__reactInternalSnapshotBeforeUpdate = P;
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
        } catch (Q) {
          He(n, n.return, Q);
        }
        if (e = n.sibling, e !== null) {
          e.return = n.return, ue = e;
          break;
        }
        ue = n.return;
      }
      return ae = If, If = false, ae;
    }
    function xi(e, n, o) {
      var u = n.updateQueue;
      if (u = u !== null ? u.lastEffect : null, u !== null) {
        var d = u = u.next;
        do {
          if ((d.tag & e) === e) {
            var p = d.destroy;
            d.destroy = void 0, p !== void 0 && Fs(n, o, p);
          }
          d = d.next;
        } while (d !== u);
      }
    }
    function Mo(e, n) {
      if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
        var o = n = n.next;
        do {
          if ((o.tag & e) === e) {
            var u = o.create;
            o.destroy = u();
          }
          o = o.next;
        } while (o !== n);
      }
    }
    function js(e) {
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
    function Cf(e) {
      var n = e.alternate;
      n !== null && (e.alternate = null, Cf(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Xt], delete n[ai], delete n[ts], delete n[$m], delete n[qm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Tf(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function _f(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Tf(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Bs(e, n, o) {
      var u = e.tag;
      if (u === 5 || u === 6) e = e.stateNode, n ? o.nodeType === 8 ? o.parentNode.insertBefore(e, n) : o.insertBefore(e, n) : (o.nodeType === 8 ? (n = o.parentNode, n.insertBefore(e, o)) : (n = o, n.appendChild(e)), o = o._reactRootContainer, o != null || n.onclick !== null || (n.onclick = po));
      else if (u !== 4 && (e = e.child, e !== null)) for (Bs(e, n, o), e = e.sibling; e !== null; ) Bs(e, n, o), e = e.sibling;
    }
    function Us(e, n, o) {
      var u = e.tag;
      if (u === 5 || u === 6) e = e.stateNode, n ? o.insertBefore(e, n) : o.appendChild(e);
      else if (u !== 4 && (e = e.child, e !== null)) for (Us(e, n, o), e = e.sibling; e !== null; ) Us(e, n, o), e = e.sibling;
    }
    var rt = null, Ht = false;
    function Rn(e, n, o) {
      for (o = o.child; o !== null; ) Pf(e, n, o), o = o.sibling;
    }
    function Pf(e, n, o) {
      if (Kt && typeof Kt.onCommitFiberUnmount == "function") try {
        Kt.onCommitFiberUnmount(Yi, o);
      } catch {
      }
      switch (o.tag) {
        case 5:
          ut || Tr(o, n);
        case 6:
          var u = rt, d = Ht;
          rt = null, Rn(e, n, o), rt = u, Ht = d, rt !== null && (Ht ? (e = rt, o = o.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o)) : rt.removeChild(o.stateNode));
          break;
        case 18:
          rt !== null && (Ht ? (e = rt, o = o.stateNode, e.nodeType === 8 ? es(e.parentNode, o) : e.nodeType === 1 && es(e, o), Jr(e)) : es(rt, o.stateNode));
          break;
        case 4:
          u = rt, d = Ht, rt = o.stateNode.containerInfo, Ht = true, Rn(e, n, o), rt = u, Ht = d;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!ut && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
            d = u = u.next;
            do {
              var p = d, x = p.destroy;
              p = p.tag, x !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Fs(o, n, x), d = d.next;
            } while (d !== u);
          }
          Rn(e, n, o);
          break;
        case 1:
          if (!ut && (Tr(o, n), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
            u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
          } catch (E) {
            He(o, n, E);
          }
          Rn(e, n, o);
          break;
        case 21:
          Rn(e, n, o);
          break;
        case 22:
          o.mode & 1 ? (ut = (u = ut) || o.memoizedState !== null, Rn(e, n, o), ut = u) : Rn(e, n, o);
          break;
        default:
          Rn(e, n, o);
      }
    }
    function Nf(e) {
      var n = e.updateQueue;
      if (n !== null) {
        e.updateQueue = null;
        var o = e.stateNode;
        o === null && (o = e.stateNode = new ug()), n.forEach(function(u) {
          var d = vg.bind(null, e, u);
          o.has(u) || (o.add(u), u.then(d, d));
        });
      }
    }
    function $t(e, n) {
      var o = n.deletions;
      if (o !== null) for (var u = 0; u < o.length; u++) {
        var d = o[u];
        try {
          var p = e, x = n, E = x;
          e: for (; E !== null; ) {
            switch (E.tag) {
              case 5:
                rt = E.stateNode, Ht = false;
                break e;
              case 3:
                rt = E.stateNode.containerInfo, Ht = true;
                break e;
              case 4:
                rt = E.stateNode.containerInfo, Ht = true;
                break e;
            }
            E = E.return;
          }
          if (rt === null) throw Error(i(160));
          Pf(p, x, d), rt = null, Ht = false;
          var C = d.alternate;
          C !== null && (C.return = null), d.return = null;
        } catch (z) {
          He(d, n, z);
        }
      }
      if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Df(n, e), n = n.sibling;
    }
    function Df(e, n) {
      var o = e.alternate, u = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ($t(n, e), en(e), u & 4) {
            try {
              xi(3, e, e.return), Mo(3, e);
            } catch (fe) {
              He(e, e.return, fe);
            }
            try {
              xi(5, e, e.return);
            } catch (fe) {
              He(e, e.return, fe);
            }
          }
          break;
        case 1:
          $t(n, e), en(e), u & 512 && o !== null && Tr(o, o.return);
          break;
        case 5:
          if ($t(n, e), en(e), u & 512 && o !== null && Tr(o, o.return), e.flags & 32) {
            var d = e.stateNode;
            try {
              _e(d, "");
            } catch (fe) {
              He(e, e.return, fe);
            }
          }
          if (u & 4 && (d = e.stateNode, d != null)) {
            var p = e.memoizedProps, x = o !== null ? o.memoizedProps : p, E = e.type, C = e.updateQueue;
            if (e.updateQueue = null, C !== null) try {
              E === "input" && p.type === "radio" && p.name != null && Ur(d, p), Qt(E, x);
              var z = Qt(E, p);
              for (x = 0; x < C.length; x += 2) {
                var H = C[x], $ = C[x + 1];
                H === "style" ? vn(d, $) : H === "dangerouslySetInnerHTML" ? Ee(d, $) : H === "children" ? _e(d, $) : L(d, H, $, z);
              }
              switch (E) {
                case "input":
                  ir(d, p);
                  break;
                case "textarea":
                  Wi(d, p);
                  break;
                case "select":
                  var W = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var le = p.value;
                  le != null ? yn(d, !!p.multiple, le, false) : W !== !!p.multiple && (p.defaultValue != null ? yn(d, !!p.multiple, p.defaultValue, true) : yn(d, !!p.multiple, p.multiple ? [] : "", false));
              }
              d[ai] = p;
            } catch (fe) {
              He(e, e.return, fe);
            }
          }
          break;
        case 6:
          if ($t(n, e), en(e), u & 4) {
            if (e.stateNode === null) throw Error(i(162));
            d = e.stateNode, p = e.memoizedProps;
            try {
              d.nodeValue = p;
            } catch (fe) {
              He(e, e.return, fe);
            }
          }
          break;
        case 3:
          if ($t(n, e), en(e), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
            Jr(n.containerInfo);
          } catch (fe) {
            He(e, e.return, fe);
          }
          break;
        case 4:
          $t(n, e), en(e);
          break;
        case 13:
          $t(n, e), en(e), d = e.child, d.flags & 8192 && (p = d.memoizedState !== null, d.stateNode.isHidden = p, !p || d.alternate !== null && d.alternate.memoizedState !== null || (Hs = $e())), u & 4 && Nf(e);
          break;
        case 22:
          if (H = o !== null && o.memoizedState !== null, e.mode & 1 ? (ut = (z = ut) || H, $t(n, e), ut = z) : $t(n, e), en(e), u & 8192) {
            if (z = e.memoizedState !== null, (e.stateNode.isHidden = z) && !H && (e.mode & 1) !== 0) for (ue = e, H = e.child; H !== null; ) {
              for ($ = ue = H; ue !== null; ) {
                switch (W = ue, le = W.child, W.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    xi(4, W, W.return);
                    break;
                  case 1:
                    Tr(W, W.return);
                    var ae = W.stateNode;
                    if (typeof ae.componentWillUnmount == "function") {
                      u = W, o = W.return;
                      try {
                        n = u, ae.props = n.memoizedProps, ae.state = n.memoizedState, ae.componentWillUnmount();
                      } catch (fe) {
                        He(u, o, fe);
                      }
                    }
                    break;
                  case 5:
                    Tr(W, W.return);
                    break;
                  case 22:
                    if (W.memoizedState !== null) {
                      Of($);
                      continue;
                    }
                }
                le !== null ? (le.return = W, ue = le) : Of($);
              }
              H = H.sibling;
            }
            e: for (H = null, $ = e; ; ) {
              if ($.tag === 5) {
                if (H === null) {
                  H = $;
                  try {
                    d = $.stateNode, z ? (p = d.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (E = $.stateNode, C = $.memoizedProps.style, x = C != null && C.hasOwnProperty("display") ? C.display : null, E.style.display = At("display", x));
                  } catch (fe) {
                    He(e, e.return, fe);
                  }
                }
              } else if ($.tag === 6) {
                if (H === null) try {
                  $.stateNode.nodeValue = z ? "" : $.memoizedProps;
                } catch (fe) {
                  He(e, e.return, fe);
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
          $t(n, e), en(e), u & 4 && Nf(e);
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
              if (Tf(o)) {
                var u = o;
                break e;
              }
              o = o.return;
            }
            throw Error(i(160));
          }
          switch (u.tag) {
            case 5:
              var d = u.stateNode;
              u.flags & 32 && (_e(d, ""), u.flags &= -33);
              var p = _f(e);
              Us(e, p, d);
              break;
            case 3:
            case 4:
              var x = u.stateNode.containerInfo, E = _f(e);
              Bs(e, E, x);
              break;
            default:
              throw Error(i(161));
          }
        } catch (C) {
          He(e, e.return, C);
        }
        e.flags &= -3;
      }
      n & 4096 && (e.flags &= -4097);
    }
    function cg(e, n, o) {
      ue = e, Rf(e);
    }
    function Rf(e, n, o) {
      for (var u = (e.mode & 1) !== 0; ue !== null; ) {
        var d = ue, p = d.child;
        if (d.tag === 22 && u) {
          var x = d.memoizedState !== null || zo;
          if (!x) {
            var E = d.alternate, C = E !== null && E.memoizedState !== null || ut;
            E = zo;
            var z = ut;
            if (zo = x, (ut = C) && !z) for (ue = d; ue !== null; ) x = ue, C = x.child, x.tag === 22 && x.memoizedState !== null ? Lf(d) : C !== null ? (C.return = x, ue = C) : Lf(d);
            for (; p !== null; ) ue = p, Rf(p), p = p.sibling;
            ue = d, zo = E, ut = z;
          }
          Af(e);
        } else (d.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = d, ue = p) : Af(e);
      }
    }
    function Af(e) {
      for (; ue !== null; ) {
        var n = ue;
        if ((n.flags & 8772) !== 0) {
          var o = n.alternate;
          try {
            if ((n.flags & 8772) !== 0) switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ut || Mo(5, n);
                break;
              case 1:
                var u = n.stateNode;
                if (n.flags & 4 && !ut) if (o === null) u.componentDidMount();
                else {
                  var d = n.elementType === n.type ? o.memoizedProps : Wt(n.type, o.memoizedProps);
                  u.componentDidUpdate(d, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                }
                var p = n.updateQueue;
                p !== null && Ac(n, p, u);
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
                  Ac(n, x, o);
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
                    var H = z.memoizedState;
                    if (H !== null) {
                      var $ = H.dehydrated;
                      $ !== null && Jr($);
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
            ut || n.flags & 512 && js(n);
          } catch (W) {
            He(n, n.return, W);
          }
        }
        if (n === e) {
          ue = null;
          break;
        }
        if (o = n.sibling, o !== null) {
          o.return = n.return, ue = o;
          break;
        }
        ue = n.return;
      }
    }
    function Of(e) {
      for (; ue !== null; ) {
        var n = ue;
        if (n === e) {
          ue = null;
          break;
        }
        var o = n.sibling;
        if (o !== null) {
          o.return = n.return, ue = o;
          break;
        }
        ue = n.return;
      }
    }
    function Lf(e) {
      for (; ue !== null; ) {
        var n = ue;
        try {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              var o = n.return;
              try {
                Mo(4, n);
              } catch (C) {
                He(n, o, C);
              }
              break;
            case 1:
              var u = n.stateNode;
              if (typeof u.componentDidMount == "function") {
                var d = n.return;
                try {
                  u.componentDidMount();
                } catch (C) {
                  He(n, d, C);
                }
              }
              var p = n.return;
              try {
                js(n);
              } catch (C) {
                He(n, p, C);
              }
              break;
            case 5:
              var x = n.return;
              try {
                js(n);
              } catch (C) {
                He(n, x, C);
              }
          }
        } catch (C) {
          He(n, n.return, C);
        }
        if (n === e) {
          ue = null;
          break;
        }
        var E = n.sibling;
        if (E !== null) {
          E.return = n.return, ue = E;
          break;
        }
        ue = n.return;
      }
    }
    var fg = Math.ceil, bo = V.ReactCurrentDispatcher, Vs = V.ReactCurrentOwner, bt = V.ReactCurrentBatchConfig, Pe = 0, Ze = null, Ye = null, it = 0, Ct = 0, _r = Tn(0), Xe = 0, ki = null, Jn = 0, Fo = 0, Ws = 0, Si = null, mt = null, Hs = 0, Pr = 1 / 0, mn = null, jo = false, $s = null, An = null, Bo = false, On = null, Uo = 0, Ei = 0, qs = null, Vo = -1, Wo = 0;
    function ft() {
      return (Pe & 6) !== 0 ? $e() : Vo !== -1 ? Vo : Vo = $e();
    }
    function Ln(e) {
      return (e.mode & 1) === 0 ? 1 : (Pe & 2) !== 0 && it !== 0 ? it & -it : Ym.transition !== null ? (Wo === 0 && (Wo = Ta()), Wo) : (e = Ae, e !== 0 || (e = window.event, e = e === void 0 ? 16 : za(e.type)), e);
    }
    function qt(e, n, o, u) {
      if (50 < Ei) throw Ei = 0, qs = null, Error(i(185));
      Gr(e, o, u), ((Pe & 2) === 0 || e !== Ze) && (e === Ze && ((Pe & 2) === 0 && (Fo |= o), Xe === 4 && zn(e, it)), gt(e, u), o === 1 && Pe === 0 && (n.mode & 1) === 0 && (Pr = $e() + 500, yo && Pn()));
    }
    function gt(e, n) {
      var o = e.callbackNode;
      Yh(e, n);
      var u = Xi(e, e === Ze ? it : 0);
      if (u === 0) o !== null && Ea(o), e.callbackNode = null, e.callbackPriority = 0;
      else if (n = u & -u, e.callbackPriority !== n) {
        if (o != null && Ea(o), n === 1) e.tag === 0 ? Gm(Mf.bind(null, e)) : xc(Mf.bind(null, e)), Wm(function() {
          (Pe & 6) === 0 && Pn();
        }), o = null;
        else {
          switch (_a(u)) {
            case 1:
              o = Cl;
              break;
            case 4:
              o = Ia;
              break;
            case 16:
              o = Gi;
              break;
            case 536870912:
              o = Ca;
              break;
            default:
              o = Gi;
          }
          o = Hf(o, zf.bind(null, e));
        }
        e.callbackPriority = n, e.callbackNode = o;
      }
    }
    function zf(e, n) {
      if (Vo = -1, Wo = 0, (Pe & 6) !== 0) throw Error(i(327));
      var o = e.callbackNode;
      if (Nr() && e.callbackNode !== o) return null;
      var u = Xi(e, e === Ze ? it : 0);
      if (u === 0) return null;
      if ((u & 30) !== 0 || (u & e.expiredLanes) !== 0 || n) n = Ho(e, u);
      else {
        n = u;
        var d = Pe;
        Pe |= 2;
        var p = Ff();
        (Ze !== e || it !== n) && (mn = null, Pr = $e() + 500, er(e, n));
        do
          try {
            hg();
            break;
          } catch (E) {
            bf(e, E);
          }
        while (true);
        cs(), bo.current = p, Pe = d, Ye !== null ? n = 0 : (Ze = null, it = 0, n = Xe);
      }
      if (n !== 0) {
        if (n === 2 && (d = Tl(e), d !== 0 && (u = d, n = Gs(e, d))), n === 1) throw o = ki, er(e, 0), zn(e, u), gt(e, $e()), o;
        if (n === 6) zn(e, u);
        else {
          if (d = e.current.alternate, (u & 30) === 0 && !dg(d) && (n = Ho(e, u), n === 2 && (p = Tl(e), p !== 0 && (u = p, n = Gs(e, p))), n === 1)) throw o = ki, er(e, 0), zn(e, u), gt(e, $e()), o;
          switch (e.finishedWork = d, e.finishedLanes = u, n) {
            case 0:
            case 1:
              throw Error(i(345));
            case 2:
              tr(e, mt, mn);
              break;
            case 3:
              if (zn(e, u), (u & 130023424) === u && (n = Hs + 500 - $e(), 10 < n)) {
                if (Xi(e, 0) !== 0) break;
                if (d = e.suspendedLanes, (d & u) !== u) {
                  ft(), e.pingedLanes |= e.suspendedLanes & d;
                  break;
                }
                e.timeoutHandle = Zl(tr.bind(null, e, mt, mn), n);
                break;
              }
              tr(e, mt, mn);
              break;
            case 4:
              if (zn(e, u), (u & 4194240) === u) break;
              for (n = e.eventTimes, d = -1; 0 < u; ) {
                var x = 31 - Bt(u);
                p = 1 << x, x = n[x], x > d && (d = x), u &= ~p;
              }
              if (u = d, u = $e() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * fg(u / 1960)) - u, 10 < u) {
                e.timeoutHandle = Zl(tr.bind(null, e, mt, mn), u);
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
      return gt(e, $e()), e.callbackNode === o ? zf.bind(null, e) : null;
    }
    function Gs(e, n) {
      var o = Si;
      return e.current.memoizedState.isDehydrated && (er(e, n).flags |= 256), e = Ho(e, n), e !== 2 && (n = mt, mt = o, n !== null && Ys(n)), e;
    }
    function Ys(e) {
      mt === null ? mt = e : mt.push.apply(mt, e);
    }
    function dg(e) {
      for (var n = e; ; ) {
        if (n.flags & 16384) {
          var o = n.updateQueue;
          if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
            var d = o[u], p = d.getSnapshot;
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
      for (n &= ~Ws, n &= ~Fo, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Bt(n), u = 1 << o;
        e[o] = -1, n &= ~u;
      }
    }
    function Mf(e) {
      if ((Pe & 6) !== 0) throw Error(i(327));
      Nr();
      var n = Xi(e, 0);
      if ((n & 1) === 0) return gt(e, $e()), null;
      var o = Ho(e, n);
      if (e.tag !== 0 && o === 2) {
        var u = Tl(e);
        u !== 0 && (n = u, o = Gs(e, u));
      }
      if (o === 1) throw o = ki, er(e, 0), zn(e, n), gt(e, $e()), o;
      if (o === 6) throw Error(i(345));
      return e.finishedWork = e.current.alternate, e.finishedLanes = n, tr(e, mt, mn), gt(e, $e()), null;
    }
    function Qs(e, n) {
      var o = Pe;
      Pe |= 1;
      try {
        return e(n);
      } finally {
        Pe = o, Pe === 0 && (Pr = $e() + 500, yo && Pn());
      }
    }
    function Zn(e) {
      On !== null && On.tag === 0 && (Pe & 6) === 0 && Nr();
      var n = Pe;
      Pe |= 1;
      var o = bt.transition, u = Ae;
      try {
        if (bt.transition = null, Ae = 1, e) return e();
      } finally {
        Ae = u, bt.transition = o, Pe = n, (Pe & 6) === 0 && Pn();
      }
    }
    function Ks() {
      Ct = _r.current, Fe(_r);
    }
    function er(e, n) {
      e.finishedWork = null, e.finishedLanes = 0;
      var o = e.timeoutHandle;
      if (o !== -1 && (e.timeoutHandle = -1, Vm(o)), Ye !== null) for (o = Ye.return; o !== null; ) {
        var u = o;
        switch (os(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && mo();
            break;
          case 3:
            Ir(), Fe(dt), Fe(ot), vs();
            break;
          case 5:
            gs(u);
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
            fs(u.type._context);
            break;
          case 22:
          case 23:
            Ks();
        }
        o = o.return;
      }
      if (Ze = e, Ye = e = Mn(e.current, null), it = Ct = n, Xe = 0, ki = null, Ws = Fo = Jn = 0, mt = Si = null, Qn !== null) {
        for (n = 0; n < Qn.length; n++) if (o = Qn[n], u = o.interleaved, u !== null) {
          o.interleaved = null;
          var d = u.next, p = o.pending;
          if (p !== null) {
            var x = p.next;
            p.next = d, u.next = x;
          }
          o.pending = u;
        }
        Qn = null;
      }
      return e;
    }
    function bf(e, n) {
      do {
        var o = Ye;
        try {
          if (cs(), _o.current = Ro, Po) {
            for (var u = Ve.memoizedState; u !== null; ) {
              var d = u.queue;
              d !== null && (d.pending = null), u = u.next;
            }
            Po = false;
          }
          if (Xn = 0, Je = Ke = Ve = null, mi = false, gi = 0, Vs.current = null, o === null || o.return === null) {
            Xe = 1, ki = n, Ye = null;
            break;
          }
          e: {
            var p = e, x = o.return, E = o, C = n;
            if (n = it, E.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
              var z = C, H = E, $ = H.tag;
              if ((H.mode & 1) === 0 && ($ === 0 || $ === 11 || $ === 15)) {
                var W = H.alternate;
                W ? (H.updateQueue = W.updateQueue, H.memoizedState = W.memoizedState, H.lanes = W.lanes) : (H.updateQueue = null, H.memoizedState = null);
              }
              var le = uf(x);
              if (le !== null) {
                le.flags &= -257, af(le, x, E, p, n), le.mode & 1 && sf(p, z, n), n = le, C = z;
                var ae = n.updateQueue;
                if (ae === null) {
                  var fe = /* @__PURE__ */ new Set();
                  fe.add(C), n.updateQueue = fe;
                } else ae.add(C);
                break e;
              } else {
                if ((n & 1) === 0) {
                  sf(p, z, n), Xs();
                  break e;
                }
                C = Error(i(426));
              }
            } else if (Be && E.mode & 1) {
              var qe = uf(x);
              if (qe !== null) {
                (qe.flags & 65536) === 0 && (qe.flags |= 256), af(qe, x, E, p, n), us(Cr(C, E));
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
                  var R = of(p, C, n);
                  Rc(p, R);
                  break e;
                case 1:
                  E = C;
                  var P = p.type, A = p.stateNode;
                  if ((p.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && (An === null || !An.has(A)))) {
                    p.flags |= 65536, n &= -n, p.lanes |= n;
                    var Q = lf(p, E, n);
                    Rc(p, Q);
                    break e;
                  }
              }
              p = p.return;
            } while (p !== null);
          }
          Bf(o);
        } catch (he) {
          n = he, Ye === o && o !== null && (Ye = o = o.return);
          continue;
        }
        break;
      } while (true);
    }
    function Ff() {
      var e = bo.current;
      return bo.current = Ro, e === null ? Ro : e;
    }
    function Xs() {
      (Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4), Ze === null || (Jn & 268435455) === 0 && (Fo & 268435455) === 0 || zn(Ze, it);
    }
    function Ho(e, n) {
      var o = Pe;
      Pe |= 2;
      var u = Ff();
      (Ze !== e || it !== n) && (mn = null, er(e, n));
      do
        try {
          pg();
          break;
        } catch (d) {
          bf(e, d);
        }
      while (true);
      if (cs(), Pe = o, bo.current = u, Ye !== null) throw Error(i(261));
      return Ze = null, it = 0, Xe;
    }
    function pg() {
      for (; Ye !== null; ) jf(Ye);
    }
    function hg() {
      for (; Ye !== null && !jh(); ) jf(Ye);
    }
    function jf(e) {
      var n = Wf(e.alternate, e, Ct);
      e.memoizedProps = e.pendingProps, n === null ? Bf(e) : Ye = n, Vs.current = null;
    }
    function Bf(e) {
      var n = e;
      do {
        var o = n.alternate;
        if (e = n.return, (n.flags & 32768) === 0) {
          if (o = lg(o, n, Ct), o !== null) {
            Ye = o;
            return;
          }
        } else {
          if (o = sg(o, n), o !== null) {
            o.flags &= 32767, Ye = o;
            return;
          }
          if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
          else {
            Xe = 6, Ye = null;
            return;
          }
        }
        if (n = n.sibling, n !== null) {
          Ye = n;
          return;
        }
        Ye = n = e;
      } while (n !== null);
      Xe === 0 && (Xe = 5);
    }
    function tr(e, n, o) {
      var u = Ae, d = bt.transition;
      try {
        bt.transition = null, Ae = 1, mg(e, n, o, u);
      } finally {
        bt.transition = d, Ae = u;
      }
      return null;
    }
    function mg(e, n, o, u) {
      do
        Nr();
      while (On !== null);
      if ((Pe & 6) !== 0) throw Error(i(327));
      o = e.finishedWork;
      var d = e.finishedLanes;
      if (o === null) return null;
      if (e.finishedWork = null, e.finishedLanes = 0, o === e.current) throw Error(i(177));
      e.callbackNode = null, e.callbackPriority = 0;
      var p = o.lanes | o.childLanes;
      if (Qh(e, p), e === Ze && (Ye = Ze = null, it = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Bo || (Bo = true, Hf(Gi, function() {
        return Nr(), null;
      })), p = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || p) {
        p = bt.transition, bt.transition = null;
        var x = Ae;
        Ae = 1;
        var E = Pe;
        Pe |= 4, Vs.current = null, ag(e, o), Df(o, e), zm(Xl), eo = !!Kl, Xl = Kl = null, e.current = o, cg(o), Bh(), Pe = E, Ae = x, bt.transition = p;
      } else e.current = o;
      if (Bo && (Bo = false, On = e, Uo = d), p = e.pendingLanes, p === 0 && (An = null), Wh(o.stateNode), gt(e, $e()), n !== null) for (u = e.onRecoverableError, o = 0; o < n.length; o++) d = n[o], u(d.value, {
        componentStack: d.stack,
        digest: d.digest
      });
      if (jo) throw jo = false, e = $s, $s = null, e;
      return (Uo & 1) !== 0 && e.tag !== 0 && Nr(), p = e.pendingLanes, (p & 1) !== 0 ? e === qs ? Ei++ : (Ei = 0, qs = e) : Ei = 0, Pn(), null;
    }
    function Nr() {
      if (On !== null) {
        var e = _a(Uo), n = bt.transition, o = Ae;
        try {
          if (bt.transition = null, Ae = 16 > e ? 16 : e, On === null) var u = false;
          else {
            if (e = On, On = null, Uo = 0, (Pe & 6) !== 0) throw Error(i(331));
            var d = Pe;
            for (Pe |= 4, ue = e.current; ue !== null; ) {
              var p = ue, x = p.child;
              if ((ue.flags & 16) !== 0) {
                var E = p.deletions;
                if (E !== null) {
                  for (var C = 0; C < E.length; C++) {
                    var z = E[C];
                    for (ue = z; ue !== null; ) {
                      var H = ue;
                      switch (H.tag) {
                        case 0:
                        case 11:
                        case 15:
                          xi(8, H, p);
                      }
                      var $ = H.child;
                      if ($ !== null) $.return = H, ue = $;
                      else for (; ue !== null; ) {
                        H = ue;
                        var W = H.sibling, le = H.return;
                        if (Cf(H), H === z) {
                          ue = null;
                          break;
                        }
                        if (W !== null) {
                          W.return = le, ue = W;
                          break;
                        }
                        ue = le;
                      }
                    }
                  }
                  var ae = p.alternate;
                  if (ae !== null) {
                    var fe = ae.child;
                    if (fe !== null) {
                      ae.child = null;
                      do {
                        var qe = fe.sibling;
                        fe.sibling = null, fe = qe;
                      } while (fe !== null);
                    }
                  }
                  ue = p;
                }
              }
              if ((p.subtreeFlags & 2064) !== 0 && x !== null) x.return = p, ue = x;
              else e: for (; ue !== null; ) {
                if (p = ue, (p.flags & 2048) !== 0) switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xi(9, p, p.return);
                }
                var R = p.sibling;
                if (R !== null) {
                  R.return = p.return, ue = R;
                  break e;
                }
                ue = p.return;
              }
            }
            var P = e.current;
            for (ue = P; ue !== null; ) {
              x = ue;
              var A = x.child;
              if ((x.subtreeFlags & 2064) !== 0 && A !== null) A.return = x, ue = A;
              else e: for (x = P; ue !== null; ) {
                if (E = ue, (E.flags & 2048) !== 0) try {
                  switch (E.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mo(9, E);
                  }
                } catch (he) {
                  He(E, E.return, he);
                }
                if (E === x) {
                  ue = null;
                  break e;
                }
                var Q = E.sibling;
                if (Q !== null) {
                  Q.return = E.return, ue = Q;
                  break e;
                }
                ue = E.return;
              }
            }
            if (Pe = d, Pn(), Kt && typeof Kt.onPostCommitFiberRoot == "function") try {
              Kt.onPostCommitFiberRoot(Yi, e);
            } catch {
            }
            u = true;
          }
          return u;
        } finally {
          Ae = o, bt.transition = n;
        }
      }
      return false;
    }
    function Uf(e, n, o) {
      n = Cr(o, n), n = of(e, n, 1), e = Dn(e, n, 1), n = ft(), e !== null && (Gr(e, 1, n), gt(e, n));
    }
    function He(e, n, o) {
      if (e.tag === 3) Uf(e, e, o);
      else for (; n !== null; ) {
        if (n.tag === 3) {
          Uf(n, e, o);
          break;
        } else if (n.tag === 1) {
          var u = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (An === null || !An.has(u))) {
            e = Cr(o, e), e = lf(n, e, 1), n = Dn(n, e, 1), e = ft(), n !== null && (Gr(n, 1, e), gt(n, e));
            break;
          }
        }
        n = n.return;
      }
    }
    function gg(e, n, o) {
      var u = e.pingCache;
      u !== null && u.delete(n), n = ft(), e.pingedLanes |= e.suspendedLanes & o, Ze === e && (it & o) === o && (Xe === 4 || Xe === 3 && (it & 130023424) === it && 500 > $e() - Hs ? er(e, 0) : Ws |= o), gt(e, n);
    }
    function Vf(e, n) {
      n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = Ki, Ki <<= 1, (Ki & 130023424) === 0 && (Ki = 4194304)));
      var o = ft();
      e = dn(e, n), e !== null && (Gr(e, n, o), gt(e, o));
    }
    function yg(e) {
      var n = e.memoizedState, o = 0;
      n !== null && (o = n.retryLane), Vf(e, o);
    }
    function vg(e, n) {
      var o = 0;
      switch (e.tag) {
        case 13:
          var u = e.stateNode, d = e.memoizedState;
          d !== null && (o = d.retryLane);
          break;
        case 19:
          u = e.stateNode;
          break;
        default:
          throw Error(i(314));
      }
      u !== null && u.delete(n), Vf(e, o);
    }
    var Wf;
    Wf = function(e, n, o) {
      if (e !== null) if (e.memoizedProps !== n.pendingProps || dt.current) ht = true;
      else {
        if ((e.lanes & o) === 0 && (n.flags & 128) === 0) return ht = false, og(e, n, o);
        ht = (e.flags & 131072) !== 0;
      }
      else ht = false, Be && (n.flags & 1048576) !== 0 && kc(n, wo, n.index);
      switch (n.lanes = 0, n.tag) {
        case 2:
          var u = n.type;
          Lo(e, n), e = n.pendingProps;
          var d = yr(n, ot.current);
          Er(n, o), d = ks(null, n, u, e, d, o);
          var p = Ss();
          return n.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, pt(u) ? (p = true, go(n)) : p = false, n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, hs(n), d.updater = Ao, n.stateNode = d, d._reactInternals = n, Ps(n, u, e, o), n = As(null, n, u, true, p, o)) : (n.tag = 0, Be && p && is(n), ct(null, n, d, o), n = n.child), n;
        case 16:
          u = n.elementType;
          e: {
            switch (Lo(e, n), e = n.pendingProps, d = u._init, u = d(u._payload), n.type = u, d = n.tag = xg(u), e = Wt(u, e), d) {
              case 0:
                n = Rs(null, n, u, e, o);
                break e;
              case 1:
                n = mf(null, n, u, e, o);
                break e;
              case 11:
                n = cf(null, n, u, e, o);
                break e;
              case 14:
                n = ff(null, n, u, Wt(u.type, e), o);
                break e;
            }
            throw Error(i(306, u, ""));
          }
          return n;
        case 0:
          return u = n.type, d = n.pendingProps, d = n.elementType === u ? d : Wt(u, d), Rs(e, n, u, d, o);
        case 1:
          return u = n.type, d = n.pendingProps, d = n.elementType === u ? d : Wt(u, d), mf(e, n, u, d, o);
        case 3:
          e: {
            if (gf(n), e === null) throw Error(i(387));
            u = n.pendingProps, p = n.memoizedState, d = p.element, Dc(e, n), Co(n, u, null, o);
            var x = n.memoizedState;
            if (u = x.element, p.isDehydrated) if (p = {
              element: u,
              isDehydrated: false,
              cache: x.cache,
              pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
              transitions: x.transitions
            }, n.updateQueue.baseState = p, n.memoizedState = p, n.flags & 256) {
              d = Cr(Error(i(423)), n), n = yf(e, n, u, o, d);
              break e;
            } else if (u !== d) {
              d = Cr(Error(i(424)), n), n = yf(e, n, u, o, d);
              break e;
            } else for (It = Cn(n.stateNode.containerInfo.firstChild), Et = n, Be = true, Vt = null, o = Pc(n, null, u, o), n.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
            else {
              if (xr(), u === d) {
                n = hn(e, n, o);
                break e;
              }
              ct(e, n, u, o);
            }
            n = n.child;
          }
          return n;
        case 5:
          return Oc(n), e === null && ss(n), u = n.type, d = n.pendingProps, p = e !== null ? e.memoizedProps : null, x = d.children, Jl(u, d) ? x = null : p !== null && Jl(u, p) && (n.flags |= 32), hf(e, n), ct(e, n, x, o), n.child;
        case 6:
          return e === null && ss(n), null;
        case 13:
          return vf(e, n, o);
        case 4:
          return ms(n, n.stateNode.containerInfo), u = n.pendingProps, e === null ? n.child = kr(n, null, u, o) : ct(e, n, u, o), n.child;
        case 11:
          return u = n.type, d = n.pendingProps, d = n.elementType === u ? d : Wt(u, d), cf(e, n, u, d, o);
        case 7:
          return ct(e, n, n.pendingProps, o), n.child;
        case 8:
          return ct(e, n, n.pendingProps.children, o), n.child;
        case 12:
          return ct(e, n, n.pendingProps.children, o), n.child;
        case 10:
          e: {
            if (u = n.type._context, d = n.pendingProps, p = n.memoizedProps, x = d.value, Oe(So, u._currentValue), u._currentValue = x, p !== null) if (Ut(p.value, x)) {
              if (p.children === d.children && !dt.current) {
                n = hn(e, n, o);
                break e;
              }
            } else for (p = n.child, p !== null && (p.return = n); p !== null; ) {
              var E = p.dependencies;
              if (E !== null) {
                x = p.child;
                for (var C = E.firstContext; C !== null; ) {
                  if (C.context === u) {
                    if (p.tag === 1) {
                      C = pn(-1, o & -o), C.tag = 2;
                      var z = p.updateQueue;
                      if (z !== null) {
                        z = z.shared;
                        var H = z.pending;
                        H === null ? C.next = C : (C.next = H.next, H.next = C), z.pending = C;
                      }
                    }
                    p.lanes |= o, C = p.alternate, C !== null && (C.lanes |= o), ds(p.return, o, n), E.lanes |= o;
                    break;
                  }
                  C = C.next;
                }
              } else if (p.tag === 10) x = p.type === n.type ? null : p.child;
              else if (p.tag === 18) {
                if (x = p.return, x === null) throw Error(i(341));
                x.lanes |= o, E = x.alternate, E !== null && (E.lanes |= o), ds(x, o, n), x = p.sibling;
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
          return d = n.type, u = n.pendingProps.children, Er(n, o), d = zt(d), u = u(d), n.flags |= 1, ct(e, n, u, o), n.child;
        case 14:
          return u = n.type, d = Wt(u, n.pendingProps), d = Wt(u.type, d), ff(e, n, u, d, o);
        case 15:
          return df(e, n, n.type, n.pendingProps, o);
        case 17:
          return u = n.type, d = n.pendingProps, d = n.elementType === u ? d : Wt(u, d), Lo(e, n), n.tag = 1, pt(u) ? (e = true, go(n)) : e = false, Er(n, o), nf(n, u, d), Ps(n, u, d, o), As(null, n, u, true, e, o);
        case 19:
          return xf(e, n, o);
        case 22:
          return pf(e, n, o);
      }
      throw Error(i(156, n.tag));
    };
    function Hf(e, n) {
      return Sa(e, n);
    }
    function wg(e, n, o, u) {
      this.tag = e, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Ft(e, n, o, u) {
      return new wg(e, n, o, u);
    }
    function Js(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function xg(e) {
      if (typeof e == "function") return Js(e) ? 1 : 0;
      if (e != null) {
        if (e = e.$$typeof, e === ne) return 11;
        if (e === U) return 14;
      }
      return 2;
    }
    function Mn(e, n) {
      var o = e.alternate;
      return o === null ? (o = Ft(e.tag, n, e.key, e.mode), o.elementType = e.elementType, o.type = e.type, o.stateNode = e.stateNode, o.alternate = e, e.alternate = o) : (o.pendingProps = n, o.type = e.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = e.flags & 14680064, o.childLanes = e.childLanes, o.lanes = e.lanes, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, n = e.dependencies, o.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }, o.sibling = e.sibling, o.index = e.index, o.ref = e.ref, o;
    }
    function $o(e, n, o, u, d, p) {
      var x = 2;
      if (u = e, typeof e == "function") Js(e) && (x = 1);
      else if (typeof e == "string") x = 5;
      else e: switch (e) {
        case ee:
          return nr(o.children, d, p, n);
        case re:
          x = 8, d |= 8;
          break;
        case se:
          return e = Ft(12, o, n, d | 2), e.elementType = se, e.lanes = p, e;
        case q:
          return e = Ft(13, o, n, d), e.elementType = q, e.lanes = p, e;
        case te:
          return e = Ft(19, o, n, d), e.elementType = te, e.lanes = p, e;
        case K:
          return qo(o, d, p, n);
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case me:
              x = 10;
              break e;
            case X:
              x = 9;
              break e;
            case ne:
              x = 11;
              break e;
            case U:
              x = 14;
              break e;
            case ie:
              x = 16, u = null;
              break e;
          }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
      return n = Ft(x, o, n, d), n.elementType = e, n.type = u, n.lanes = p, n;
    }
    function nr(e, n, o, u) {
      return e = Ft(7, e, u, n), e.lanes = o, e;
    }
    function qo(e, n, o, u) {
      return e = Ft(22, e, u, n), e.elementType = K, e.lanes = o, e.stateNode = {
        isHidden: false
      }, e;
    }
    function Zs(e, n, o) {
      return e = Ft(6, e, null, n), e.lanes = o, e;
    }
    function eu(e, n, o) {
      return n = Ft(4, e.children !== null ? e.children : [], e.key, n), n.lanes = o, n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, n;
    }
    function kg(e, n, o, u, d) {
      this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _l(0), this.expirationTimes = _l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _l(0), this.identifierPrefix = u, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
    }
    function tu(e, n, o, u, d, p, x, E, C) {
      return e = new kg(e, n, o, E, C), n === 1 ? (n = 1, p === true && (n |= 8)) : n = 0, p = Ft(3, null, null, n), e.current = p, p.stateNode = e, p.memoizedState = {
        element: u,
        isDehydrated: o,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
      }, hs(p), e;
    }
    function Sg(e, n, o) {
      var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: O,
        key: u == null ? null : "" + u,
        children: e,
        containerInfo: n,
        implementation: o
      };
    }
    function $f(e) {
      if (!e) return _n;
      e = e._reactInternals;
      e: {
        if (Hn(e) !== e || e.tag !== 1) throw Error(i(170));
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
        if (pt(o)) return vc(e, o, n);
      }
      return n;
    }
    function qf(e, n, o, u, d, p, x, E, C) {
      return e = tu(o, u, true, e, d, p, x, E, C), e.context = $f(null), o = e.current, u = ft(), d = Ln(o), p = pn(u, d), p.callback = n ?? null, Dn(o, p, d), e.current.lanes = d, Gr(e, d, u), gt(e, u), e;
    }
    function Go(e, n, o, u) {
      var d = n.current, p = ft(), x = Ln(d);
      return o = $f(o), n.context === null ? n.context = o : n.pendingContext = o, n = pn(p, x), n.payload = {
        element: e
      }, u = u === void 0 ? null : u, u !== null && (n.callback = u), e = Dn(d, n, x), e !== null && (qt(e, d, x, p), Io(e, d, x)), x;
    }
    function Yo(e) {
      if (e = e.current, !e.child) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function Gf(e, n) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var o = e.retryLane;
        e.retryLane = o !== 0 && o < n ? o : n;
      }
    }
    function nu(e, n) {
      Gf(e, n), (e = e.alternate) && Gf(e, n);
    }
    function Eg() {
      return null;
    }
    var Yf = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function ru(e) {
      this._internalRoot = e;
    }
    Qo.prototype.render = ru.prototype.render = function(e) {
      var n = this._internalRoot;
      if (n === null) throw Error(i(409));
      Go(e, n, null, null);
    }, Qo.prototype.unmount = ru.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        Zn(function() {
          Go(null, e, null, null);
        }), n[un] = null;
      }
    };
    function Qo(e) {
      this._internalRoot = e;
    }
    Qo.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var n = Da();
        e = {
          blockedOn: null,
          target: e,
          priority: n
        };
        for (var o = 0; o < Sn.length && n !== 0 && n < Sn[o].priority; o++) ;
        Sn.splice(o, 0, e), o === 0 && Oa(e);
      }
    };
    function iu(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Ko(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Qf() {
    }
    function Ig(e, n, o, u, d) {
      if (d) {
        if (typeof u == "function") {
          var p = u;
          u = function() {
            var z = Yo(x);
            p.call(z);
          };
        }
        var x = qf(n, u, e, 0, null, false, false, "", Qf);
        return e._reactRootContainer = x, e[un] = x.current, si(e.nodeType === 8 ? e.parentNode : e), Zn(), x;
      }
      for (; d = e.lastChild; ) e.removeChild(d);
      if (typeof u == "function") {
        var E = u;
        u = function() {
          var z = Yo(C);
          E.call(z);
        };
      }
      var C = tu(e, 0, false, null, null, false, false, "", Qf);
      return e._reactRootContainer = C, e[un] = C.current, si(e.nodeType === 8 ? e.parentNode : e), Zn(function() {
        Go(n, C, o, u);
      }), C;
    }
    function Xo(e, n, o, u, d) {
      var p = o._reactRootContainer;
      if (p) {
        var x = p;
        if (typeof d == "function") {
          var E = d;
          d = function() {
            var C = Yo(x);
            E.call(C);
          };
        }
        Go(n, x, e, d);
      } else x = Ig(o, n, e, d, u);
      return Yo(x);
    }
    Pa = function(e) {
      switch (e.tag) {
        case 3:
          var n = e.stateNode;
          if (n.current.memoizedState.isDehydrated) {
            var o = qr(n.pendingLanes);
            o !== 0 && (Pl(n, o | 1), gt(n, $e()), (Pe & 6) === 0 && (Pr = $e() + 500, Pn()));
          }
          break;
        case 13:
          Zn(function() {
            var u = dn(e, 1);
            if (u !== null) {
              var d = ft();
              qt(u, e, 1, d);
            }
          }), nu(e, 1);
      }
    }, Nl = function(e) {
      if (e.tag === 13) {
        var n = dn(e, 134217728);
        if (n !== null) {
          var o = ft();
          qt(n, e, 134217728, o);
        }
        nu(e, 134217728);
      }
    }, Na = function(e) {
      if (e.tag === 13) {
        var n = Ln(e), o = dn(e, n);
        if (o !== null) {
          var u = ft();
          qt(o, e, n, u);
        }
        nu(e, n);
      }
    }, Da = function() {
      return Ae;
    }, Ra = function(e, n) {
      var o = Ae;
      try {
        return Ae = e, n();
      } finally {
        Ae = o;
      }
    }, kl = function(e, n, o) {
      switch (n) {
        case "input":
          if (ir(e, o), n = o.name, o.type === "radio" && n != null) {
            for (o = e; o.parentNode; ) o = o.parentNode;
            for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < o.length; n++) {
              var u = o[n];
              if (u !== e && u.form === e.form) {
                var d = ho(u);
                if (!d) throw Error(i(90));
                Vn(u), ir(u, d);
              }
            }
          }
          break;
        case "textarea":
          Wi(e, o);
          break;
        case "select":
          n = o.value, n != null && yn(e, !!o.multiple, n, false);
      }
    }, ma = Qs, ga = Zn;
    var Cg = {
      usingClientEntryPoint: false,
      Events: [
        ci,
        mr,
        ho,
        pa,
        ha,
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
      currentDispatcherRef: V.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(e) {
        return e = xa(e), e === null ? null : e.stateNode;
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
        Yi = Jo.inject(Tg), Kt = Jo;
      } catch {
      }
    }
    return yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cg, yt.createPortal = function(e, n) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!iu(n)) throw Error(i(200));
      return Sg(e, n, null, o);
    }, yt.createRoot = function(e, n) {
      if (!iu(e)) throw Error(i(299));
      var o = false, u = "", d = Yf;
      return n != null && (n.unstable_strictMode === true && (o = true), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), n = tu(e, 1, false, null, null, o, false, u, d), e[un] = n.current, si(e.nodeType === 8 ? e.parentNode : e), new ru(n);
    }, yt.findDOMNode = function(e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
      return e = xa(n), e = e === null ? null : e.stateNode, e;
    }, yt.flushSync = function(e) {
      return Zn(e);
    }, yt.hydrate = function(e, n, o) {
      if (!Ko(n)) throw Error(i(200));
      return Xo(null, e, n, true, o);
    }, yt.hydrateRoot = function(e, n, o) {
      if (!iu(e)) throw Error(i(405));
      var u = o != null && o.hydratedSources || null, d = false, p = "", x = Yf;
      if (o != null && (o.unstable_strictMode === true && (d = true), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (x = o.onRecoverableError)), n = qf(n, null, e, 1, o ?? null, d, false, p, x), e[un] = n.current, si(e), u) for (e = 0; e < u.length; e++) o = u[e], d = o._getVersion, d = d(o._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [
        o,
        d
      ] : n.mutableSourceEagerHydrationData.push(o, d);
      return new Qo(n);
    }, yt.render = function(e, n, o) {
      if (!Ko(n)) throw Error(i(200));
      return Xo(null, e, n, false, o);
    }, yt.unmountComponentAtNode = function(e) {
      if (!Ko(e)) throw Error(i(40));
      return e._reactRootContainer ? (Zn(function() {
        Xo(null, null, e, false, function() {
          e._reactRootContainer = null, e[un] = null;
        });
      }), true) : false;
    }, yt.unstable_batchedUpdates = Qs, yt.unstable_renderSubtreeIntoContainer = function(e, n, o, u) {
      if (!Ko(o)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return Xo(e, n, o, false, u);
    }, yt.version = "18.3.1-next-f1338f8080-20240426", yt;
  }
  var rd;
  function zg() {
    if (rd) return su.exports;
    rd = 1;
    function t() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
    }
    return t(), su.exports = Lg(), su.exports;
  }
  var id;
  function Mg() {
    if (id) return Zo;
    id = 1;
    var t = zg();
    return Zo.createRoot = t.createRoot, Zo.hydrateRoot = t.hydrateRoot, Zo;
  }
  var bg = Mg();
  const Fg = al(bg), jg = "modulepreload", Bg = function(t) {
    return "/offline-llm-knowledge-system/import/" + t;
  }, od = {}, Vu = function(r, i, l) {
    let s = Promise.resolve();
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
      s = c(i.map((m) => {
        if (m = Bg(m), m in od) return;
        od[m] = true;
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
    return s.then((c) => {
      for (const f of c || []) f.status === "rejected" && a(f.reason);
      return r().catch(a);
    });
  };
  var Nt = Uint8Array, Ar = Uint16Array, Ug = Int32Array, fp = new Nt([
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
  ]), dp = new Nt([
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
  ]), pp = function(t, r) {
    for (var i = new Ar(31), l = 0; l < 31; ++l) i[l] = r += 1 << t[l - 1];
    for (var s = new Ug(i[30]), l = 1; l < 30; ++l) for (var a = i[l]; a < i[l + 1]; ++a) s[a] = a - i[l] << 5 | l;
    return {
      b: i,
      r: s
    };
  }, hp = pp(fp, 2), mp = hp.b, Wg = hp.r;
  mp[28] = 258, Wg[258] = 28;
  var Hg = pp(dp, 0), $g = Hg.b, Nu = new Ar(32768);
  for (var je = 0; je < 32768; ++je) {
    var Fn = (je & 43690) >> 1 | (je & 21845) << 1;
    Fn = (Fn & 52428) >> 2 | (Fn & 13107) << 2, Fn = (Fn & 61680) >> 4 | (Fn & 3855) << 4, Nu[je] = ((Fn & 65280) >> 8 | (Fn & 255) << 8) >> 1;
  }
  var Di = (function(t, r, i) {
    for (var l = t.length, s = 0, a = new Ar(r); s < l; ++s) t[s] && ++a[t[s] - 1];
    var c = new Ar(r);
    for (s = 1; s < r; ++s) c[s] = c[s - 1] + a[s - 1] << 1;
    var f;
    if (i) {
      f = new Ar(1 << r);
      var h = 15 - r;
      for (s = 0; s < l; ++s) if (t[s]) for (var m = s << 4 | t[s], g = r - t[s], y = c[t[s] - 1]++ << g, v = y | (1 << g) - 1; y <= v; ++y) f[Nu[y] >> h] = m;
    } else for (f = new Ar(l), s = 0; s < l; ++s) t[s] && (f[s] = Nu[c[t[s] - 1]++] >> 15 - t[s]);
    return f;
  }), Mi = new Nt(288);
  for (var je = 0; je < 144; ++je) Mi[je] = 8;
  for (var je = 144; je < 256; ++je) Mi[je] = 9;
  for (var je = 256; je < 280; ++je) Mi[je] = 7;
  for (var je = 280; je < 288; ++je) Mi[je] = 8;
  var gp = new Nt(32);
  for (var je = 0; je < 32; ++je) gp[je] = 5;
  var qg = Di(Mi, 9, 1), Gg = Di(gp, 5, 1), cu = function(t) {
    for (var r = t[0], i = 1; i < t.length; ++i) t[i] > r && (r = t[i]);
    return r;
  }, Gt = function(t, r, i) {
    var l = r / 8 | 0;
    return (t[l] | t[l + 1] << 8) >> (r & 7) & i;
  }, fu = function(t, r) {
    var i = r / 8 | 0;
    return (t[i] | t[i + 1] << 8 | t[i + 2] << 16) >> (r & 7);
  }, Yg = function(t) {
    return (t + 7) / 8 | 0;
  }, Qg = function(t, r, i) {
    return (i == null || i > t.length) && (i = t.length), new Nt(t.subarray(r, i));
  }, Kg = [
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
  ], Yt = function(t, r, i) {
    var l = new Error(r || Kg[t]);
    if (l.code = t, Error.captureStackTrace && Error.captureStackTrace(l, Yt), !i) throw l;
    return l;
  }, Xg = function(t, r, i, l) {
    var s = t.length, a = 0;
    if (!s || r.f && !r.l) return i || new Nt(0);
    var c = !i, f = c || r.i != 2, h = r.i;
    c && (i = new Nt(s * 3));
    var m = function(Rt) {
      var Vn = i.length;
      if (Rt > Vn) {
        var ln = new Nt(Math.max(Vn * 2, Rt));
        ln.set(i), i = ln;
      }
    }, g = r.f || 0, y = r.p || 0, v = r.b || 0, w = r.l, I = r.d, N = r.m, D = r.n, T = s * 8;
    do {
      if (!w) {
        g = Gt(t, y, 1);
        var M = Gt(t, y + 1, 3);
        if (y += 3, M) if (M == 1) w = qg, I = Gg, N = 9, D = 5;
        else if (M == 2) {
          var O = Gt(t, y, 31) + 257, ee = Gt(t, y + 10, 15) + 4, re = O + Gt(t, y + 5, 31) + 1;
          y += 14;
          for (var se = new Nt(re), me = new Nt(19), X = 0; X < ee; ++X) me[Vg[X]] = Gt(t, y + X * 3, 7);
          y += ee * 3;
          for (var ne = cu(me), q = (1 << ne) - 1, te = Di(me, ne, 1), X = 0; X < re; ) {
            var U = te[Gt(t, y, q)];
            y += U & 15;
            var L = U >> 4;
            if (L < 16) se[X++] = L;
            else {
              var ie = 0, K = 0;
              for (L == 16 ? (K = 3 + Gt(t, y, 3), y += 2, ie = se[X - 1]) : L == 17 ? (K = 3 + Gt(t, y, 7), y += 3) : L == 18 && (K = 11 + Gt(t, y, 127), y += 7); K--; ) se[X++] = ie;
            }
          }
          var B = se.subarray(0, O), G = se.subarray(O);
          N = cu(B), D = cu(G), w = Di(B, N, 1), I = Di(G, D, 1);
        } else Yt(1);
        else {
          var L = Yg(y) + 4, V = t[L - 4] | t[L - 3] << 8, Z = L + V;
          if (Z > s) {
            h && Yt(0);
            break;
          }
          f && m(v + V), i.set(t.subarray(L, Z), v), r.b = v += V, r.p = y = Z * 8, r.f = g;
          continue;
        }
        if (y > T) {
          h && Yt(0);
          break;
        }
      }
      f && m(v + 131072);
      for (var k = (1 << N) - 1, _ = (1 << D) - 1, b = y; ; b = y) {
        var ie = w[fu(t, y) & k], S = ie >> 4;
        if (y += ie & 15, y > T) {
          h && Yt(0);
          break;
        }
        if (ie || Yt(2), S < 256) i[v++] = S;
        else if (S == 256) {
          b = y, w = null;
          break;
        } else {
          var oe = S - 254;
          if (S > 264) {
            var X = S - 257, ce = fp[X];
            oe = Gt(t, y, (1 << ce) - 1) + mp[X], y += ce;
          }
          var de = I[fu(t, y) & _], Ce = de >> 4;
          de || Yt(3), y += de & 15;
          var G = $g[Ce];
          if (Ce > 3) {
            var ce = dp[Ce];
            G += fu(t, y) & (1 << ce) - 1, y += ce;
          }
          if (y > T) {
            h && Yt(0);
            break;
          }
          f && m(v + 131072);
          var ke = v + oe;
          if (v < G) {
            var Te = a - G, We = Math.min(G, ke);
            for (Te + v < 0 && Yt(3); v < We; ++v) i[v] = l[Te + v];
          }
          for (; v < ke; ++v) i[v] = i[v - G];
        }
      }
      r.l = w, r.p = b, r.b = v, r.f = g, w && (g = 1, r.m = N, r.d = I, r.n = D);
    } while (!g);
    return v != i.length && c ? Qg(i, 0, v) : i.subarray(0, v);
  }, Jg = new Nt(0), Zg = function(t) {
    (t[0] != 31 || t[1] != 139 || t[2] != 8) && Yt(6, "invalid gzip data");
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
    return i + 8 > t.length && Yt(6, "invalid gzip data"), Xg(t.subarray(i, -8), {
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
  let yp;
  yp = {
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
  ck = {
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
  vp = Object.keys(yp);
  fk = function(t) {
    return t !== void 0 && vp.includes(t) ? yp[t] : void 0;
  };
  const iy = Date.now().toString().slice(5);
  let oy = 0;
  const ld = 1024, sd = BigInt(1e3), ud = BigInt(1e6), ad = BigInt(1e9), du = 65535;
  ly = function(t, r) {
    if (r.length < du) Array.prototype.push.apply(t, r);
    else {
      const i = r.length;
      for (let l = 0; l < i; l += du) Array.prototype.push.apply(t, r.slice(l, l + du));
    }
  };
  function sy(t, ...r) {
    return t.replace(/%(?:(?<position>\d+)\$)?(?<width>-?\d*\.?\d*)(?<type>[dfs])/g, function(...i) {
      const l = i[i.length - 1], { width: s, type: a, position: c } = l, f = c ? r[Number.parseInt(c) - 1] : r.shift(), h = s === "" ? 0 : Number.parseInt(s);
      switch (a) {
        case "d":
          return f.toString().padStart(h, "0");
        case "f": {
          let m = f;
          const [g, y] = s.split(".").map((v) => Number.parseFloat(v));
          return typeof y == "number" && y >= 0 && (m = m.toFixed(y)), typeof g == "number" && g >= 0 ? m.toString().padStart(h, "0") : m.toString();
        }
        case "s":
          return h < 0 ? f.toString().padEnd(-h, " ") : f.toString().padStart(h, " ");
        default:
          return f;
      }
    });
  }
  dk = function(t, r = 2) {
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
    ], s = Math.floor(Math.log(t) / Math.log(ld));
    return `${parseFloat((t / Math.pow(ld, s)).toFixed(i))} ${l[s]}`;
  };
  function uy() {
    return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
  }
  function ay() {
    return typeof process < "u" && process.release && process.release.name === "node";
  }
  function cd() {
    return BigInt(Math.floor(performance.now() * 1e6));
  }
  Wu = function(t) {
    return typeof t == "number" && (t = BigInt(t)), t < sd ? `${t}ns` : t < ud ? `${t / sd}\u03BCs` : t < ad ? `${t / ud}ms` : `${t / ad}s`;
  };
  Mr = function() {
    var _a;
    return uy() ? cd() : ay() || typeof process < "u" && typeof ((_a = process == null ? void 0 : process.hrtime) == null ? void 0 : _a.bigint) == "function" ? process.hrtime.bigint() : typeof performance < "u" ? cd() : BigInt(0);
  };
  cy = function() {
    return `${iy}-${oy++}`;
  };
  function pu(t, r) {
    return Object.hasOwn === void 0 ? Object.prototype.hasOwnProperty.call(t, r) ? t[r] : void 0 : Object.hasOwn(t, r) ? t[r] : void 0;
  }
  function wp(t, r) {
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
      for (const s of t[i]) {
        const a = r.get(s);
        a === i && (r.set(s, a + 1), l++);
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
    for (let s = 0; s < l; s++) {
      const a = r[s], c = a.split(".");
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
  function Hu(t, r) {
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
  xp = function(t, r) {
    const i = py[r];
    if (i === void 0) throw new Error(Me("INVALID_DISTANCE_SUFFIX", t).message);
    return t * i;
  };
  function kp(t, r) {
    t.hits = t.hits.map((i) => ({
      ...i,
      document: {
        ...i.document,
        ...r.reduce((l, s) => {
          const a = s.split("."), c = a.pop();
          let f = l;
          for (const h of a) f[h] = f[h] ?? {}, f = f[h];
          return f[c] = null, l;
        }, i.document)
      }
    }));
  }
  Ge = function(t) {
    var _a;
    return Array.isArray(t) ? t.some((r) => Ge(r)) : ((_a = t == null ? void 0 : t.constructor) == null ? void 0 : _a.name) === "AsyncFunction";
  };
  const fd = "intersection" in /* @__PURE__ */ new Set();
  dd = function(...t) {
    if (t.length === 0) return /* @__PURE__ */ new Set();
    if (t.length === 1) return t[0];
    if (t.length === 2) {
      const l = t[0], s = t[1];
      if (fd) return l.intersection(s);
      const a = /* @__PURE__ */ new Set(), c = l.size < s.size ? l : s, f = c === l ? s : l;
      for (const h of c) f.has(h) && a.add(h);
      return a;
    }
    const r = {
      index: 0,
      size: t[0].size
    };
    for (let l = 1; l < t.length; l++) t[l].size < r.size && (r.index = l, r.size = t[l].size);
    if (fd) {
      let l = t[r.index];
      for (let s = 0; s < t.length; s++) s !== r.index && (l = l.intersection(t[s]));
      return l;
    }
    const i = t[r.index];
    for (let l = 0; l < t.length; l++) {
      if (l === r.index) continue;
      const s = t[l];
      for (const a of i) s.has(a) || i.delete(a);
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
  function Sp(t) {
    if (typeof SharedArrayBuffer < "u" && typeof Atomics < "u") {
      const r = new Int32Array(new SharedArrayBuffer(4));
      if ((t > 0 && t < 1 / 0) === false) throw typeof t != "number" && typeof t != "bigint" ? TypeError("sleep: ms must be a number") : RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
      Atomics.wait(r, 0, 0, Number(t));
    } else if ((t > 0 && t < 1 / 0) === false) throw typeof t != "number" && typeof t != "bigint" ? TypeError("sleep: ms must be a number") : RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
  }
  const gy = vp.join(`
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
  Me = function(t, ...r) {
    const i = new Error(sy(yy[t] ?? `Unsupported Orama Error code: ${t}`, ...r));
    return i.code = t, "captureStackTrace" in Error.prototype && Error.captureStackTrace(i), i;
  };
  pk = function(t) {
    return {
      raw: Number(t),
      formatted: Wu(t)
    };
  };
  hk = function(t) {
    if (t.id) {
      if (typeof t.id != "string") throw Me("DOCUMENT_ID_MUST_BE_STRING", typeof t.id);
      return t.id;
    }
    return cy();
  };
  vy = function(t, r) {
    for (const [i, l] of Object.entries(r)) {
      const s = t[i];
      if (!(typeof s > "u") && !(l === "geopoint" && typeof s == "object" && typeof s.lon == "number" && typeof s.lat == "number") && !(l === "enum" && (typeof s == "string" || typeof s == "number"))) {
        if (l === "enum[]" && Array.isArray(s)) {
          const a = s.length;
          for (let c = 0; c < a; c++) if (typeof s[c] != "string" && typeof s[c] != "number") return i + "." + c;
          continue;
        }
        if (bi(l)) {
          const a = Ip(l);
          if (!Array.isArray(s) || s.length !== a) throw Me("INVALID_INPUT_VECTOR", i, a, s.length);
          continue;
        }
        if (cl(l)) {
          if (!Array.isArray(s)) return i;
          const a = Ep(l), c = s.length;
          for (let f = 0; f < c; f++) if (typeof s[f] !== a) return i + "." + f;
          continue;
        }
        if (typeof l == "object") {
          if (!s || typeof s != "object") return i;
          const a = vy(s, l);
          if (a) return i + "." + a;
          continue;
        }
        if (typeof s !== l) return i;
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
  bi = function(t) {
    return typeof t == "string" && /^vector\[\d+\]$/.test(t);
  };
  cl = function(t) {
    return typeof t == "string" && wy[t];
  };
  Ep = function(t) {
    return xy[t];
  };
  Ip = function(t) {
    const r = Number(t.slice(7, -1));
    switch (true) {
      case isNaN(r):
        throw Me("INVALID_VECTOR_VALUE", t);
      case r <= 0:
        throw Me("INVALID_VECTOR_SIZE", t);
      default:
        return r;
    }
  };
  Sy = function() {
    return {
      idToInternalId: /* @__PURE__ */ new Map(),
      internalIdToId: [],
      save: Cp,
      load: Tp
    };
  };
  function Cp(t) {
    return {
      internalIdToId: t.internalIdToId
    };
  }
  function Tp(t, r) {
    const { internalIdToId: i } = r;
    t.internalDocumentIDStore.idToInternalId.clear(), t.internalDocumentIDStore.internalIdToId = [];
    const l = i.length;
    for (let s = 0; s < l; s++) {
      const a = i[s];
      t.internalDocumentIDStore.idToInternalId.set(a, s + 1), t.internalDocumentIDStore.internalIdToId.push(a);
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
  mk = Object.freeze(Object.defineProperty({
    __proto__: null,
    createInternalDocumentIDStore: Sy,
    getDocumentIdFromInternalId: Fi,
    getInternalDocumentId: on,
    load: Tp,
    save: Cp
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  gk = [
    "tokenizer",
    "index",
    "documentsStore",
    "sorter",
    "pinning"
  ];
  yk = [
    "validateSchema",
    "getDocumentIndexId",
    "getDocumentProperties",
    "formatElapsedTime"
  ];
  ll = function(t, r, i, l) {
    if (t.some(Ge)) return (async () => {
      for (const a of t) await a(r, i, l);
    })();
    for (const a of t) a(r, i, l);
  };
  _p = function(t, r, i) {
    if (t.some(Ge)) return (async () => {
      for (const s of t) await s(r, i);
    })();
    for (const s of t) s(r, i);
  };
  function $u(t, r, i, l, s) {
    if (t.some(Ge)) return (async () => {
      for (const c of t) await c(r, i, l, s);
    })();
    for (const c of t) c(r, i, l, s);
  }
  function qu(t, r, i, l) {
    if (t.some(Ge)) return (async () => {
      for (const a of t) await a(r, i, l);
    })();
    for (const a of t) a(r, i, l);
  }
  vk = function(t, r) {
    if (t.some(Ge)) return (async () => {
      for (const l of t) await l(r);
    })();
    for (const l of t) l(r);
  };
  class _t {
    constructor(r, i) {
      __publicField(this, "k");
      __publicField(this, "v");
      __publicField(this, "l", null);
      __publicField(this, "r", null);
      __publicField(this, "h", 1);
      this.k = r, this.v = new Set(i);
    }
    updateHeight() {
      this.h = Math.max(_t.getHeight(this.l), _t.getHeight(this.r)) + 1;
    }
    static getHeight(r) {
      return r ? r.h : 0;
    }
    getBalanceFactor() {
      return _t.getHeight(this.l) - _t.getHeight(this.r);
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
      const i = new _t(r.k, r.v);
      return i.l = r.l ? _t.fromJSON(r.l) : null, i.r = r.r ? _t.fromJSON(r.r) : null, i.h = r.h, i;
    }
  }
  class fl {
    constructor(r, i) {
      __publicField(this, "root", null);
      __publicField(this, "insertCount", 0);
      r !== void 0 && i !== void 0 && (this.root = new _t(r, i));
    }
    insert(r, i, l = 1e3) {
      this.root = this.insertNode(this.root, r, i, l);
    }
    insertMultiple(r, i, l = 1e3) {
      for (const s of i) this.insert(r, s, l);
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
      return i.root = r.root ? _t.fromJSON(r.root) : null, i.insertCount = r.insertCount || 0, i;
    }
    insertNode(r, i, l, s) {
      if (r === null) return new _t(i, [
        l
      ]);
      const a = [];
      let c = r, f = null;
      for (; c !== null; ) if (a.push({
        parent: f,
        node: c
      }), i < c.k) if (c.l === null) {
        c.l = new _t(i, [
          l
        ]), a.push({
          parent: c,
          node: c.l
        });
        break;
      } else f = c, c = c.l;
      else if (i > c.k) if (c.r === null) {
        c.r = new _t(i, [
          l
        ]), a.push({
          parent: c,
          node: c.r
        });
        break;
      } else f = c, c = c.r;
      else return c.v.add(l), r;
      let h = false;
      this.insertCount++ % s === 0 && (h = true);
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
      ].filter((s) => s !== i)));
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
      let s = r;
      for (; s !== null && s.k !== i; ) l.push(s), i < s.k ? s = s.l : s = s.r;
      if (s === null) return r;
      if (s.l === null || s.r === null) {
        const a = s.l ? s.l : s.r;
        if (l.length === 0) r = a;
        else {
          const c = l[l.length - 1];
          c.l === s ? c.l = a : c.r = a;
        }
      } else {
        let a = s, c = s.r;
        for (; c.l !== null; ) a = c, c = c.l;
        s.k = c.k, s.v = c.v, a.l === c ? a.l = c.r : a.r = c.r, s = a;
      }
      l.push(s);
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
      const l = /* @__PURE__ */ new Set(), s = [];
      let a = this.root;
      for (; a || s.length > 0; ) {
        for (; a; ) s.push(a), a = a.l;
        if (a = s.pop(), a.k >= r && a.k <= i) for (const c of a.v) l.add(c);
        if (a.k > i) break;
        a = a.r;
      }
      return l;
    }
    greaterThan(r, i = false) {
      const l = /* @__PURE__ */ new Set(), s = [];
      let a = this.root;
      for (; a || s.length > 0; ) {
        for (; a; ) s.push(a), a = a.r;
        if (a = s.pop(), i && a.k >= r || !i && a.k > r) for (const c of a.v) l.add(c);
        else if (a.k <= r) break;
        a = a.l;
      }
      return l;
    }
    lessThan(r, i = false) {
      const l = /* @__PURE__ */ new Set(), s = [];
      let a = this.root;
      for (; a || s.length > 0; ) {
        for (; a; ) s.push(a), a = a.l;
        if (a = s.pop(), i && a.k <= r || !i && a.k < r) for (const c of a.v) l.add(c);
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
          const s = r[l], a = this.numberToDocumentId.get(s);
          return a ? Array.from(a) : [];
        }
        case "in": {
          const s = r[l], a = /* @__PURE__ */ new Set();
          for (const c of s) {
            const f = this.numberToDocumentId.get(c);
            if (f) for (const h of f) a.add(h);
          }
          return Array.from(a);
        }
        case "nin": {
          const s = new Set(r[l]), a = /* @__PURE__ */ new Set();
          for (const [c, f] of this.numberToDocumentId.entries()) if (!s.has(c)) for (const h of f) a.add(h);
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
      for (const [l, s] of r.numberToDocumentId) i.numberToDocumentId.set(l, new Set(s));
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
    const l = t.length, s = r.length;
    if (l === 0) return s <= i ? s : -1;
    if (s === 0) return l <= i ? l : -1;
    const a = Math.abs(l - s);
    if (t.startsWith(r)) return a <= i ? a : -1;
    if (r.startsWith(t)) return 0;
    if (a > i) return -1;
    const c = [];
    for (let f = 0; f <= l; f++) {
      c[f] = [
        f
      ];
      for (let h = 1; h <= s; h++) c[f][h] = f === 0 ? h : 0;
    }
    for (let f = 1; f <= l; f++) {
      let h = 1 / 0;
      for (let m = 1; m <= s; m++) t[f - 1] === r[m - 1] ? c[f][m] = c[f - 1][m - 1] : c[f][m] = Math.min(c[f - 1][m] + 1, c[f][m - 1] + 1, c[f - 1][m - 1] + 1), h = Math.min(h, c[f][m]);
      if (h > i) return -1;
    }
    return c[l][s] <= i ? c[l][s] : -1;
  }
  wk = function(t, r, i) {
    const l = Pp(t, r, i);
    return {
      distance: l,
      isBounded: l >= 0
    };
  };
  function pd(t, r, i) {
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
    findAllWords(r, i, l, s) {
      const a = [
        this
      ];
      for (; a.length > 0; ) {
        const c = a.pop();
        if (c.e) {
          const { w: f, d: h } = c;
          if (l && f !== i) continue;
          if (pu(r, f) !== null) if (s) if (Math.abs(i.length - f.length) <= s && pd(i, f, s).isBounded) r[f] = [];
          else continue;
          else r[f] = [];
          if (pu(r, f) != null && h.size > 0) {
            const m = r[f];
            for (const g of h) m.includes(g) || m.push(g);
          }
        }
        c.c.size > 0 && a.push(...c.c.values());
      }
      return r;
    }
    insert(r, i) {
      let l = this, s = 0;
      const a = r.length;
      for (; s < a; ) {
        const c = r[s], f = l.c.get(c);
        if (f) {
          const h = f.s, m = h.length;
          let g = 0;
          for (; g < m && s + g < a && h[g] === r[s + g]; ) g++;
          if (g === m) {
            if (l = f, s += g, s === a) {
              f.e || (f.e = true), f.addDocument(i);
              return;
            }
            continue;
          }
          const y = h.slice(0, g), v = h.slice(g), w = r.slice(s + g), I = new Bn(y[0], y, false);
          if (l.c.set(y[0], I), I.updateParent(l), f.s = v, f.k = v[0], I.c.set(v[0], f), f.updateParent(I), w) {
            const N = new Bn(w[0], w, true);
            N.addDocument(i), I.c.set(w[0], N), N.updateParent(I);
          } else I.e = true, I.addDocument(i);
          return;
        } else {
          const h = new Bn(c, r.slice(s), true);
          h.addDocument(i), l.c.set(c, h), h.updateParent(l);
          return;
        }
      }
      l.e || (l.e = true), l.addDocument(i);
    }
    _findLevenshtein(r, i, l, s, a) {
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
          if (y && (pd(r, y, s).isBounded && (a[y] = []), pu(a, y) !== void 0 && v.size > 0)) {
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
      const { term: i, exact: l, tolerance: s } = r;
      if (s && !l) {
        const a = {};
        return this._findLevenshtein(i, 0, s, s, a), a;
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
                return g.findAllWords(I, i, l, s), I;
              }
            } else return {};
            else return {};
          } else return {};
        }
        const h = {};
        return a.findAllWords(h, i, l, s), h;
      }
    }
    contains(r) {
      let i = this, l = 0;
      const s = r.length;
      for (; l < s; ) {
        const a = r[l], c = i.c.get(a);
        if (c) {
          const f = c.s, h = f.length;
          let m = 0;
          for (; m < h && l + m < s && f[m] === r[l + m]; ) m++;
          if (m < h) return false;
          l += h, i = c;
        } else return false;
      }
      return true;
    }
    removeWord(r) {
      if (!r) return false;
      let i = this;
      const l = r.length, s = [];
      for (let a = 0; a < l; a++) {
        const c = r[a];
        if (i.c.has(c)) {
          const f = i.c.get(c);
          s.push({
            parent: i,
            character: c
          }), a += f.s.length - 1, i = f;
        } else return false;
      }
      for (i.d.clear(), i.e = false; s.length > 0 && i.c.size === 0 && !i.e && i.d.size === 0; ) {
        const { parent: a, character: c } = s.pop();
        a.c.delete(c), i = a;
      }
      return true;
    }
    removeDocumentByWord(r, i, l = true) {
      if (!r) return true;
      let s = this;
      const a = r.length;
      for (let c = 0; c < a; c++) {
        const f = r[c];
        if (s.c.has(f)) {
          const h = s.c.get(f);
          c += h.s.length - 1, s = h, l && s.w !== r || s.removeDocument(i);
        } else return false;
      }
      return true;
    }
    static getCommonPrefix(r, i) {
      const l = Math.min(r.length, i.length);
      let s = 0;
      for (; s < l && r.charCodeAt(s) === i.charCodeAt(s); ) s++;
      return r.slice(0, s);
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
      return i.w = r.w, i.d = new Set(r.d), i.c = new Map(((_a = r == null ? void 0 : r.c) == null ? void 0 : _a.map(([l, s]) => [
        l,
        Bn.fromJSON(s)
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
      return i.w = r.w, i.s = r.s, i.e = r.e, i.k = r.k, i.d = new Set(r.d), i.c = new Map(((_a = r == null ? void 0 : r.c) == null ? void 0 : _a.map(([l, s]) => [
        l,
        Bn.fromJSON(s)
      ])) || []), i;
    }
    toJSON() {
      return super.toJSON();
    }
  }
  const Ey = 2, Iy = 6371e3;
  class Or {
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
      const l = new Or(r.point, r.docIDs);
      return l.parent = i, r.left && (l.left = Or.fromJSON(r.left, l)), r.right && (l.right = Or.fromJSON(r.right, l)), l;
    }
  }
  class Pt {
    constructor() {
      __publicField(this, "root");
      __publicField(this, "nodeMap");
      this.root = null, this.nodeMap = /* @__PURE__ */ new Map();
    }
    getPointKey(r) {
      return `${r.lon},${r.lat}`;
    }
    insert(r, i) {
      const l = this.getPointKey(r), s = this.nodeMap.get(l);
      if (s) {
        i.forEach((h) => s.docIDs.add(h));
        return;
      }
      const a = new Or(r, i);
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
      const l = this.getPointKey(r), s = this.nodeMap.get(l);
      s && (s.docIDs.delete(i), s.docIDs.size === 0 && (this.nodeMap.delete(l), this.deleteNode(s)));
    }
    deleteNode(r) {
      const i = r.parent, l = r.left ? r.left : r.right;
      l && (l.parent = i), i ? i.left === r ? i.left = l : i.right === r && (i.right = l) : (this.root = l, this.root && (this.root.parent = null));
    }
    searchByRadius(r, i, l = true, s = "asc", a = false) {
      const c = a ? Pt.vincentyDistance : Pt.haversineDistance, f = [
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
      return s && h.sort((m, g) => {
        const y = c(r, m.point), v = c(r, g.point);
        return s.toLowerCase() === "asc" ? y - v : v - y;
      }), h;
    }
    searchByPolygon(r, i = true, l = null, s = false) {
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
        const g = Pt.isPointInPolygon(r, h.point);
        (g && i || !g && !i) && c.push({
          point: h.point,
          docIDs: Array.from(h.docIDs)
        });
      }
      const f = Pt.calculatePolygonCentroid(r);
      if (l) {
        const h = s ? Pt.vincentyDistance : Pt.haversineDistance;
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
      const i = new Pt();
      return r.root && (i.root = Or.fromJSON(r.root), i.buildNodeMap(i.root)), i;
    }
    buildNodeMap(r) {
      if (r == null) return;
      const i = this.getPointKey(r.point);
      this.nodeMap.set(i, r), r.left && this.buildNodeMap(r.left), r.right && this.buildNodeMap(r.right);
    }
    static calculatePolygonCentroid(r) {
      let i = 0, l = 0, s = 0;
      const a = r.length;
      for (let f = 0, h = a - 1; f < a; h = f++) {
        const m = r[f].lon, g = r[f].lat, y = r[h].lon, v = r[h].lat, w = m * v - y * g;
        i += w, l += (m + y) * w, s += (g + v) * w;
      }
      i /= 2;
      const c = 6 * i;
      return l /= c, s /= c, {
        lon: l,
        lat: s
      };
    }
    static isPointInPolygon(r, i) {
      let l = false;
      const s = i.lon, a = i.lat, c = r.length;
      for (let f = 0, h = c - 1; f < c; h = f++) {
        const m = r[f].lon, g = r[f].lat, y = r[h].lon, v = r[h].lat;
        g > a != v > a && s < (y - m) * (a - g) / (v - g) + m && (l = !l);
      }
      return l;
    }
    static haversineDistance(r, i) {
      const l = Math.PI / 180, s = r.lat * l, a = i.lat * l, c = (i.lat - r.lat) * l, f = (i.lon - r.lon) * l, h = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(s) * Math.cos(a) * Math.sin(f / 2) * Math.sin(f / 2), m = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
      return Iy * m;
    }
    static vincentyDistance(r, i) {
      const s = 0.0033528106647474805, a = (1 - s) * 6378137, c = Math.PI / 180, f = r.lat * c, h = i.lat * c, m = (i.lon - r.lon) * c, g = Math.atan((1 - s) * Math.tan(f)), y = Math.atan((1 - s) * Math.tan(h)), v = Math.sin(g), w = Math.cos(g), I = Math.sin(y), N = Math.cos(y);
      let D = m, T, M = 1e3, L, V, Z, O, ee, re;
      do {
        const te = Math.sin(D), U = Math.cos(D);
        if (L = Math.sqrt(N * te * (N * te) + (w * I - v * N * U) * (w * I - v * N * U)), L === 0) return 0;
        V = v * I + w * N * U, Z = Math.atan2(L, V), O = w * N * te / L, ee = 1 - O * O, re = V - 2 * v * I / ee, isNaN(re) && (re = 0);
        const ie = s / 16 * ee * (4 + s * (4 - 3 * ee));
        T = D, D = m + (1 - ie) * s * O * (Z + ie * L * (re + ie * V * (-1 + 2 * re * re)));
      } while (Math.abs(D - T) > 1e-12 && --M > 0);
      if (M === 0) return NaN;
      const se = ee * (6378137 * 6378137 - a * a) / (a * a), me = 1 + se / 16384 * (4096 + se * (-768 + se * (320 - 175 * se))), X = se / 1024 * (256 + se * (-128 + se * (74 - 47 * se))), ne = X * L * (re + X / 4 * (V * (-1 + 2 * re * re) - X / 6 * re * (-3 + 4 * L * L) * (-3 + 4 * re * re)));
      return a * me * (Z - ne);
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
  function Cy(t, r, i, l, s, { k: a, b: c, d: f }) {
    return Math.log(1 + (i - r + 0.5) / (r + 0.5)) * (f + t * (a + 1)) / (t + a * (1 - c + c * l / s));
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
      const l = Np(i, this.size);
      this.vectors.set(r, [
        l,
        i
      ]);
    }
    remove(r) {
      this.vectors.delete(r);
    }
    find(r, i, l) {
      return r instanceof Float32Array || (r = new Float32Array(r)), _y(r, l, this.vectors, this.size, i);
    }
    toJSON() {
      const r = [];
      for (const [i, [l, s]] of this.vectors) r.push([
        i,
        [
          l,
          Array.from(s)
        ]
      ]);
      return {
        size: this.size,
        vectors: r
      };
    }
    static fromJSON(r) {
      const i = r, l = new ml(i.size);
      for (const [s, [a, c]] of i.vectors) l.vectors.set(s, [
        a,
        new Float32Array(c)
      ]);
      return l;
    }
  }
  function Np(t, r) {
    let i = 0;
    for (let l = 0; l < r; l++) i += t[l] * t[l];
    return Math.sqrt(i);
  }
  function _y(t, r, i, l, s) {
    const a = Np(t, l), c = [], f = r || i.keys();
    for (const h of f) {
      const m = i.get(h);
      if (!m) continue;
      const g = m[0], y = m[1];
      let v = 0;
      for (let I = 0; I < l; I++) v += t[I] * y[I];
      const w = v / (a * g);
      w >= s && c.push([
        h,
        w
      ]);
    }
    return c;
  }
  function Dp(t, r, i, l, s) {
    const a = on(t.sharedInternalDocumentStore, i);
    t.avgFieldLength[r] = ((t.avgFieldLength[r] ?? 0) * (s - 1) + l.length) / s, t.fieldLengths[r][a] = l.length, t.frequencies[r][a] = {};
  }
  function Rp(t, r, i, l, s) {
    let a = 0;
    for (const h of l) h === s && a++;
    const c = on(t.sharedInternalDocumentStore, i), f = a / l.length;
    t.frequencies[r][c][s] = f, s in t.tokenOccurrences[r] || (t.tokenOccurrences[r][s] = 0), t.tokenOccurrences[r][s] = (t.tokenOccurrences[r][s] ?? 0) + 1;
  }
  function Ap(t, r, i, l) {
    const s = on(t.sharedInternalDocumentStore, i);
    l > 1 ? t.avgFieldLength[r] = (t.avgFieldLength[r] * l - t.fieldLengths[r][s]) / (l - 1) : t.avgFieldLength[r] = void 0, t.fieldLengths[r][s] = void 0, t.frequencies[r][s] = void 0;
  }
  function Op(t, r, i) {
    t.tokenOccurrences[r][i]--;
  }
  function Gu(t, r, i, l, s = "") {
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
      const f = `${s}${s ? "." : ""}${a}`;
      if (typeof c == "object" && !Array.isArray(c)) {
        Gu(t, r, c, l, f);
        continue;
      }
      if (bi(c)) l.searchableProperties.push(f), l.searchablePropertiesWithTypes[f] = c, l.vectorIndexes[f] = {
        type: "Vector",
        node: new ml(Ip(c)),
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
              node: new Pt(),
              isArray: h
            };
            break;
          default:
            throw Me("INVALID_SCHEMA_TYPE", Array.isArray(c) ? "array" : c, f);
        }
        l.searchableProperties.push(f), l.searchablePropertiesWithTypes[f] = c;
      }
    }
    return l;
  }
  function Py(t, r, i, l, s, a, c, f) {
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
          const y = a.tokenize(h, s, i, false);
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
  function Lp(t, r, i, l, s, a, c, f, h, m, g) {
    if (bi(c)) return zp(r, i, a, l, s);
    const y = Py(t, r, i, s, f, h, m, g);
    if (!cl(c)) return y(a);
    const v = a, w = v.length;
    for (let I = 0; I < w; I++) y(v[I]);
  }
  function zp(t, r, i, l, s) {
    t.vectorIndexes[r].node.add(s, i);
  }
  function hd(t, r, i, l, s, a, c, f, h, m) {
    if (bi(c)) return r.vectorIndexes[i].node.remove(s), true;
    const { type: g, node: y } = r.indexes[i];
    switch (g) {
      case "AVL":
        return y.removeDocument(a, s), true;
      case "Bool":
        return y[a ? "true" : "false"].delete(s), true;
      case "Radix": {
        const v = h.tokenize(a, f, i);
        t.removeDocumentScoreParameters(r, i, l, m);
        for (const w of v) t.removeTokenScoreParameters(r, i, w), y.removeDocumentByWord(w, s);
        return true;
      }
      case "Flat":
        return y.removeDocument(s, a), true;
      case "BKD":
        return y.removeDocByID(a, s), false;
    }
  }
  function Mp(t, r, i, l, s, a, c, f, h, m) {
    if (!cl(c)) return hd(t, r, i, l, s, a, c, f, h, m);
    const g = Ep(c), y = a, v = y.length;
    for (let w = 0; w < v; w++) hd(t, r, i, l, s, y[w], g, f, h, m);
    return true;
  }
  function Yu(t, r, i, l, s, a, c, f, h, m) {
    var _a;
    const g = Array.from(l), y = t.avgFieldLength[r], v = t.fieldLengths[r], w = t.tokenOccurrences[r], I = t.frequencies[r], N = typeof w[i] == "number" ? w[i] ?? 0 : 0, D = g.length;
    for (let T = 0; T < D; T++) {
      const M = g[T];
      if (h && !h.has(M)) continue;
      m.has(M) || m.set(M, /* @__PURE__ */ new Map());
      const L = m.get(M);
      L.set(r, (L.get(r) || 0) + 1);
      const V = ((_a = I == null ? void 0 : I[M]) == null ? void 0 : _a[i]) ?? 0, Z = Cy(V, N, s, v[M], y, a);
      c.has(M) ? c.set(M, c.get(M) + Z * f) : c.set(M, Z * f);
    }
  }
  function bp(t, r, i, l, s, a, c, f, h, m, g, y = 0) {
    const v = i.tokenize(r, l), w = v.length || 1, I = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
    for (const L of s) {
      if (!(L in t.indexes)) continue;
      const V = t.indexes[L], { type: Z } = V;
      if (Z !== "Radix") throw Me("WRONG_SEARCH_PROPERTY_TYPE", L);
      const O = f[L] ?? 1;
      if (O <= 0) throw Me("INVALID_BOOST_VALUE", O);
      v.length === 0 && !r && v.push("");
      const ee = v.length;
      for (let re = 0; re < ee; re++) {
        const se = v[re], me = V.node.find({
          term: se,
          exact: a,
          tolerance: c
        }), X = Object.keys(me);
        X.length > 0 && N.set(se, true);
        const ne = X.length;
        for (let q = 0; q < ne; q++) {
          const te = X[q], U = me[te];
          Yu(t, L, te, U, m, h, D, O, g, I);
        }
      }
    }
    const T = Array.from(D.entries()).map(([L, V]) => [
      L,
      V
    ]).sort((L, V) => V[1] - L[1]);
    if (T.length === 0) return [];
    if (y === 1) return T;
    if (y === 0) {
      if (w === 1) return T;
      for (const V of v) if (!N.get(V)) return [];
      return T.filter(([V]) => {
        const Z = I.get(V);
        return Z ? Array.from(Z.values()).some((O) => O === w) : false;
      });
    }
    const M = T.filter(([L]) => {
      const V = I.get(L);
      return V ? Array.from(V.values()).some((Z) => Z === w) : false;
    });
    if (M.length > 0) {
      const L = T.filter(([Z]) => !M.some(([O]) => O === Z)), V = Math.ceil(L.length * y);
      return [
        ...M,
        ...L.slice(0, V)
      ];
    }
    return T;
  }
  function Ri(t, r, i, l) {
    if ("and" in i && i.and && Array.isArray(i.and)) {
      const c = i.and;
      if (c.length === 0) return /* @__PURE__ */ new Set();
      const f = c.map((h) => Ri(t, r, h, l));
      return dd(...f);
    }
    if ("or" in i && i.or && Array.isArray(i.or)) {
      const c = i.or;
      return c.length === 0 ? /* @__PURE__ */ new Set() : c.map((h) => Ri(t, r, h, l)).reduce((h, m) => el(h, m), /* @__PURE__ */ new Set());
    }
    if ("not" in i && i.not) {
      const c = i.not, f = /* @__PURE__ */ new Set(), h = t.sharedInternalDocumentStore;
      for (let g = 1; g <= h.internalIdToId.length; g++) f.add(g);
      const m = Ri(t, r, c, l);
      return my(f, m);
    }
    const s = Object.keys(i), a = s.reduce((c, f) => ({
      [f]: /* @__PURE__ */ new Set(),
      ...c
    }), {});
    for (const c of s) {
      const f = i[c];
      if (typeof t.indexes[c] > "u") throw Me("UNKNOWN_FILTER_PROPERTY", c);
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
          const { value: w, coordinates: I, unit: N = "m", inside: D = true, highPrecision: T = false } = f[v], M = xp(w, N), L = h.searchByRadius(I, M, D, void 0, T);
          a[c] = md(a[c], L);
        } else {
          const { coordinates: w, inside: I = true, highPrecision: N = false } = f[v], D = h.searchByPolygon(w, I, void 0, N);
          a[c] = md(a[c], D);
        }
        continue;
      }
      if (m === "Radix" && (typeof f == "string" || Array.isArray(f))) {
        for (const v of [
          f
        ].flat()) {
          const w = r.tokenize(v, l, c);
          for (const I of w) {
            const N = h.find({
              term: I,
              exact: true
            });
            a[c] = Ry(a[c], N);
          }
        }
        continue;
      }
      const y = Object.keys(f);
      if (y.length > 1) throw Me("INVALID_FILTER_OPERATION", y.length);
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
            const [N, D] = w;
            I = h.rangeSearch(N, D);
            break;
          }
          default:
            throw Me("INVALID_FILTER_OPERATION", v);
        }
        a[c] = el(a[c], I);
      }
    }
    return dd(...Object.values(a));
  }
  function Fp(t) {
    return t.searchableProperties;
  }
  function jp(t) {
    return t.searchablePropertiesWithTypes;
  }
  function Bp(t, r) {
    const { indexes: i, vectorIndexes: l, searchableProperties: s, searchablePropertiesWithTypes: a, frequencies: c, tokenOccurrences: f, avgFieldLength: h, fieldLengths: m } = r, g = {}, y = {};
    for (const v of Object.keys(i)) {
      const { node: w, type: I, isArray: N } = i[v];
      switch (I) {
        case "Radix":
          g[v] = {
            type: "Radix",
            node: pl.fromJSON(w),
            isArray: N
          };
          break;
        case "Flat":
          g[v] = {
            type: "Flat",
            node: dl.fromJSON(w),
            isArray: N
          };
          break;
        case "AVL":
          g[v] = {
            type: "AVL",
            node: fl.fromJSON(w),
            isArray: N
          };
          break;
        case "BKD":
          g[v] = {
            type: "BKD",
            node: Pt.fromJSON(w),
            isArray: N
          };
          break;
        case "Bool":
          g[v] = {
            type: "Bool",
            node: hl.fromJSON(w),
            isArray: N
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
      searchableProperties: s,
      searchablePropertiesWithTypes: a,
      frequencies: c,
      tokenOccurrences: f,
      avgFieldLength: h,
      fieldLengths: m
    };
  }
  function Up(t) {
    const { indexes: r, vectorIndexes: i, searchableProperties: l, searchablePropertiesWithTypes: s, frequencies: a, tokenOccurrences: c, avgFieldLength: f, fieldLengths: h } = t, m = {};
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
      searchablePropertiesWithTypes: s,
      frequencies: a,
      tokenOccurrences: c,
      avgFieldLength: f,
      fieldLengths: h
    };
  }
  Ny = function() {
    return {
      create: Gu,
      insert: Lp,
      remove: Mp,
      insertDocumentScoreParameters: Dp,
      insertTokenScoreParameters: Rp,
      removeDocumentScoreParameters: Ap,
      removeTokenScoreParameters: Op,
      calculateResultScores: Yu,
      search: bp,
      searchByWhereClause: Ri,
      getSearchableProperties: Fp,
      getSearchablePropertiesWithTypes: jp,
      load: Bp,
      save: Up
    };
  };
  function md(t, r) {
    t || (t = /* @__PURE__ */ new Set());
    const i = r.length;
    for (let l = 0; l < i; l++) {
      const s = r[l].docIDs, a = s.length;
      for (let c = 0; c < a; c++) t.add(s[c]);
    }
    return t;
  }
  function gd(t, r, i = false) {
    const l = i ? Pt.vincentyDistance : Pt.haversineDistance, s = [], a = [];
    for (const { point: h } of t) a.push(l(r, h));
    const c = Math.max(...a);
    let f = 0;
    for (const { docIDs: h } of t) {
      const m = a[f], g = c - m + 1;
      for (const y of h) s.push([
        y,
        g
      ]);
      f++;
    }
    return s.sort((h, m) => m[1] - h[1]), s;
  }
  function Dy(t, r) {
    const i = Object.keys(t);
    if (i.length !== 1) return {
      isGeoOnly: false
    };
    const l = i[0], s = t[l];
    if (typeof r.indexes[l] > "u") return {
      isGeoOnly: false
    };
    const { type: a } = r.indexes[l];
    return a === "BKD" && s && ("radius" in s || "polygon" in s) ? {
      isGeoOnly: true,
      geoProperty: l,
      geoOperation: s
    } : {
      isGeoOnly: false
    };
  }
  function Vp(t, r) {
    const i = t, l = Dy(r, i);
    if (!l.isGeoOnly || !l.geoProperty || !l.geoOperation) return null;
    const { node: s } = i.indexes[l.geoProperty], a = l.geoOperation, c = s;
    let f;
    if ("radius" in a) {
      const { value: h, coordinates: m, unit: g = "m", inside: y = true, highPrecision: v = false } = a.radius, w = m, I = xp(h, g);
      return f = c.searchByRadius(w, I, y, "asc", v), gd(f, w, v);
    } else if ("polygon" in a) {
      const { coordinates: h, inside: m = true, highPrecision: g = false } = a.polygon;
      f = c.searchByPolygon(h, m, "asc", g);
      const y = Pt.calculatePolygonCentroid(h);
      return gd(f, y, g);
    }
    return null;
  }
  function Ry(t, r) {
    t || (t = /* @__PURE__ */ new Set());
    const i = Object.keys(r), l = i.length;
    for (let s = 0; s < l; s++) {
      const a = r[i[s]], c = a.length;
      for (let f = 0; f < c; f++) t.add(a[f]);
    }
    return t;
  }
  xk = Object.freeze(Object.defineProperty({
    __proto__: null,
    calculateResultScores: Yu,
    create: Gu,
    createIndex: Ny,
    getSearchableProperties: Fp,
    getSearchablePropertiesWithTypes: jp,
    insert: Lp,
    insertDocumentScoreParameters: Dp,
    insertTokenScoreParameters: Rp,
    insertVector: zp,
    load: Bp,
    remove: Mp,
    removeDocumentScoreParameters: Ap,
    removeTokenScoreParameters: Op,
    save: Up,
    search: bp,
    searchByGeoWhereClause: Vp,
    searchByWhereClause: Ri
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function Ay(t) {
    return {
      sharedInternalDocumentStore: t,
      rules: /* @__PURE__ */ new Map()
    };
  }
  function Oy(t, r) {
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
  function My(t, r) {
    return t.rules.get(r);
  }
  function by(t) {
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
  function Wp(t, r) {
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
  kk = function() {
    return {
      create: Ay,
      addRule: Oy,
      updateRule: Ly,
      removeRule: zy,
      getRule: My,
      getAllRules: by,
      getMatchingRules: Wp,
      load: By,
      save: Uy
    };
  };
  Sk = function(t, r) {
    return t.documentsStore.get(t.data.docs, r);
  };
  Vy = function(t) {
    return t.documentsStore.count(t.data.docs);
  };
  Hp = function(t, r, i, l, s) {
    const a = t.validateSchema(r, t.schema);
    if (a) throw Me("SCHEMA_VALIDATION_FAILURE", a);
    return Ge(t.beforeInsert) || Ge(t.afterInsert) || Ge(t.index.beforeInsert) || Ge(t.index.insert) || Ge(t.index.afterInsert) ? $y(t, r, i, l, s) : qy(t, r, i, l, s);
  };
  const Wy = /* @__PURE__ */ new Set([
    "enum",
    "enum[]"
  ]), Hy = /* @__PURE__ */ new Set([
    "string",
    "number"
  ]);
  async function $y(t, r, i, l, s) {
    const { index: a, docs: c } = t.data, f = t.getDocumentIndexId(r);
    if (typeof f != "string") throw Me("DOCUMENT_ID_MUST_BE_STRING", typeof f);
    const h = on(t.internalDocumentIDStore, f);
    if (l || await ll(t.beforeInsert, t, f, r), !t.documentsStore.store(c, f, h, r)) throw Me("DOCUMENT_ALREADY_EXISTS", f);
    const m = t.documentsStore.count(c), g = t.index.getSearchableProperties(a), y = t.index.getSearchablePropertiesWithTypes(a), v = t.getDocumentProperties(r, g);
    for (const [w, I] of Object.entries(v)) {
      if (typeof I > "u") continue;
      const N = typeof I, D = y[w];
      $p(N, D, w, I);
    }
    return await Gy(t, f, g, v, m, i, r, s), l || await ll(t.afterInsert, t, f, r), f;
  }
  function qy(t, r, i, l, s) {
    const { index: a, docs: c } = t.data, f = t.getDocumentIndexId(r);
    if (typeof f != "string") throw Me("DOCUMENT_ID_MUST_BE_STRING", typeof f);
    const h = on(t.internalDocumentIDStore, f);
    if (l || ll(t.beforeInsert, t, f, r), !t.documentsStore.store(c, f, h, r)) throw Me("DOCUMENT_ALREADY_EXISTS", f);
    const m = t.documentsStore.count(c), g = t.index.getSearchableProperties(a), y = t.index.getSearchablePropertiesWithTypes(a), v = t.getDocumentProperties(r, g);
    for (const [w, I] of Object.entries(v)) {
      if (typeof I > "u") continue;
      const N = typeof I, D = y[w];
      $p(N, D, w, I);
    }
    return Yy(t, f, g, v, m, i, r, s), l || ll(t.afterInsert, t, f, r), f;
  }
  function $p(t, r, i, l) {
    if (!(ky(r) && typeof l == "object" && typeof l.lon == "number" && typeof l.lat == "number") && !(bi(r) && Array.isArray(l)) && !(cl(r) && Array.isArray(l)) && !(Wy.has(r) && Hy.has(t)) && t !== r) throw Me("INVALID_DOCUMENT_PROPERTY", i, r, t);
  }
  async function Gy(t, r, i, l, s, a, c, f) {
    var _a, _b, _c, _d2;
    for (const g of i) {
      const y = l[g];
      if (typeof y > "u") continue;
      const v = t.index.getSearchablePropertiesWithTypes(t.data.index)[g];
      await ((_b = (_a = t.index).beforeInsert) == null ? void 0 : _b.call(_a, t.data.index, g, r, y, v, a, t.tokenizer, s));
      const w = t.internalDocumentIDStore.idToInternalId.get(r);
      await t.index.insert(t.index, t.data.index, g, r, w, y, v, a, t.tokenizer, s, f), await ((_d2 = (_c = t.index).afterInsert) == null ? void 0 : _d2.call(_c, t.data.index, g, r, y, v, a, t.tokenizer, s));
    }
    const h = t.sorter.getSortableProperties(t.data.sorting), m = t.getDocumentProperties(c, h);
    for (const g of h) {
      const y = m[g];
      if (typeof y > "u") continue;
      const v = t.sorter.getSortablePropertiesWithTypes(t.data.sorting)[g];
      t.sorter.insert(t.data.sorting, g, r, y, v, a);
    }
  }
  function Yy(t, r, i, l, s, a, c, f) {
    var _a, _b, _c, _d2;
    for (const g of i) {
      const y = l[g];
      if (typeof y > "u") continue;
      const v = t.index.getSearchablePropertiesWithTypes(t.data.index)[g], w = on(t.internalDocumentIDStore, r);
      (_b = (_a = t.index).beforeInsert) == null ? void 0 : _b.call(_a, t.data.index, g, r, y, v, a, t.tokenizer, s), t.index.insert(t.index, t.data.index, g, r, w, y, v, a, t.tokenizer, s, f), (_d2 = (_c = t.index).afterInsert) == null ? void 0 : _d2.call(_c, t.data.index, g, r, y, v, a, t.tokenizer, s);
    }
    const h = t.sorter.getSortableProperties(t.data.sorting), m = t.getDocumentProperties(c, h);
    for (const g of h) {
      const y = m[g];
      if (typeof y > "u") continue;
      const v = t.sorter.getSortablePropertiesWithTypes(t.data.sorting)[g];
      t.sorter.insert(t.data.sorting, g, r, y, v, a);
    }
  }
  Qy = function(t, r, i, l, s, a) {
    return Ge(t.afterInsertMultiple) || Ge(t.beforeInsertMultiple) || Ge(t.index.beforeInsert) || Ge(t.index.insert) || Ge(t.index.afterInsert) ? qp(t, r, i, l, s, a) : Gp(t, r, i, l, s, a);
  };
  async function qp(t, r, i = 1e3, l, s, a = 0) {
    const c = [], f = async (m) => {
      const g = Math.min(m + i, r.length), y = r.slice(m, g);
      for (const v of y) {
        const w = {
          avlRebalanceThreshold: y.length
        }, I = await Hp(t, v, l, s, w);
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
          v > 0 && Sp(v);
        }
      }
    })(), s || await _p(t.afterInsertMultiple, t, r), c;
  }
  function Gp(t, r, i = 1e3, l, s, a = 0) {
    const c = [];
    let f = 0;
    function h() {
      const g = r.slice(f * i, (f + 1) * i);
      if (g.length === 0) return false;
      for (const y of g) {
        const v = {
          avlRebalanceThreshold: g.length
        }, w = Hp(t, y, l, s, v);
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
          w > 0 && Sp(w);
        }
      }
    }
    return m(), s || _p(t.afterInsertMultiple, t, r), c;
  }
  Ek = function(t, r, i, l, s, a) {
    return Ge(t.beforeInsert) || Ge(t.afterInsert) || Ge(t.index.beforeInsert) || Ge(t.index.insert) || Ge(t.index.afterInsert) ? qp(t, r, i, l, s, a) : Gp(t, r, i, l, s, a);
  };
  yd = "fulltext";
  Ky = "hybrid";
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
  function Qu(t, r, i) {
    const l = {}, s = r.map(([m]) => m), a = t.documentsStore.getMultiple(t.data.docs, s), c = Object.keys(i), f = t.index.getSearchablePropertiesWithTypes(t.data.index);
    for (const m of c) {
      let g;
      if (f[m] === "number") {
        const { ranges: y } = i[m], v = y.length, w = Array.from({
          length: v
        });
        for (let I = 0; I < v; I++) {
          const N = y[I];
          w[I] = [
            `${N.from}-${N.to}`,
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
        const v = y.includes(".") ? Hu(g, y) : g[y], w = f[y], I = l[y].values;
        switch (w) {
          case "number": {
            const N = i[y].ranges;
            vd(N, I)(v);
            break;
          }
          case "number[]": {
            const N = /* @__PURE__ */ new Set(), D = i[y].ranges, T = vd(D, I, N);
            for (const M of v) T(M);
            break;
          }
          case "boolean":
          case "enum":
          case "string": {
            wd(I, w)(v);
            break;
          }
          case "boolean[]":
          case "enum[]":
          case "string[]": {
            const T = wd(I, w === "boolean[]" ? "boolean" : "string", /* @__PURE__ */ new Set());
            for (const M of v) T(M);
            break;
          }
          default:
            throw Me("FACET_NOT_SUPPORTED", w);
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
  function vd(t, r, i) {
    return (l) => {
      for (const s of t) {
        const a = `${s.from}-${s.to}`;
        (i == null ? void 0 : i.has(a)) || l >= s.from && l <= s.to && (r[a] === void 0 ? r[a] = 1 : (r[a]++, i == null ? void 0 : i.add(a)));
      }
    };
  }
  function wd(t, r, i) {
    const l = r === "boolean" ? "false" : "";
    return (s) => {
      const a = (s == null ? void 0 : s.toString()) ?? l;
      (i == null ? void 0 : i.has(a)) || (t[a] = (t[a] ?? 0) + 1, i == null ? void 0 : i.add(a));
    };
  }
  const t0 = {
    reducer: (t, r, i, l) => (r[l] = i, r),
    getInitialValue: (t) => Array.from({
      length: t
    })
  }, xd = [
    "string",
    "number",
    "boolean"
  ];
  function Ku(t, r, i) {
    const l = i.properties, s = l.length, a = t.index.getSearchablePropertiesWithTypes(t.data.index);
    for (let T = 0; T < s; T++) {
      const M = l[T];
      if (typeof a[M] > "u") throw Me("UNKNOWN_GROUP_BY_PROPERTY", M);
      if (!xd.includes(a[M])) throw Me("INVALID_GROUP_BY_PROPERTY", M, xd.join(", "), a[M]);
    }
    const c = r.map(([T]) => Fi(t.internalDocumentIDStore, T)), f = t.documentsStore.getMultiple(t.data.docs, c), h = f.length, m = i.maxResult || Number.MAX_SAFE_INTEGER, g = [], y = {};
    for (let T = 0; T < s; T++) {
      const M = l[T], L = {
        property: M,
        perValue: {}
      }, V = /* @__PURE__ */ new Set();
      for (let Z = 0; Z < h; Z++) {
        const O = f[Z], ee = Hu(O, M);
        if (typeof ee > "u") continue;
        const re = typeof ee != "boolean" ? ee : "" + ee, se = L.perValue[re] ?? {
          indexes: [],
          count: 0
        };
        se.count >= m || (se.indexes.push(Z), se.count++, L.perValue[re] = se, V.add(ee));
      }
      g.push(Array.from(V)), y[M] = L;
    }
    const v = Yp(g), w = v.length, I = [];
    for (let T = 0; T < w; T++) {
      const M = v[T], L = M.length, V = {
        values: [],
        indexes: []
      }, Z = [];
      for (let O = 0; O < L; O++) {
        const ee = M[O], re = l[O];
        Z.push(y[re].perValue[typeof ee != "boolean" ? ee : "" + ee].indexes), V.values.push(ee);
      }
      V.indexes = fy(Z).sort((O, ee) => O - ee), V.indexes.length !== 0 && I.push(V);
    }
    const N = I.length, D = Array.from({
      length: N
    });
    for (let T = 0; T < N; T++) {
      const M = I[T], L = i.reduce || t0, V = M.indexes.map((re) => ({
        id: c[re],
        score: r[re][1],
        document: f[re]
      })), Z = L.reducer.bind(null, M.values), O = L.getInitialValue(M.indexes.length), ee = V.reduce(Z, O);
      D[T] = {
        values: M.values,
        result: ee
      };
    }
    return D;
  }
  function Yp(t, r = 0) {
    if (r + 1 === t.length) return t[r].map((a) => [
      a
    ]);
    const i = t[r], l = Yp(t, r + 1), s = [];
    for (const a of i) for (const c of l) {
      const f = [
        a
      ];
      ly(f, c), s.push(f);
    }
    return s;
  }
  function Xu(t, r, i, l) {
    const s = Wp(r, l);
    if (s.length === 0) return i;
    const a = s.flatMap((D) => D.consequence.promote);
    a.sort((D, T) => D.position - T.position);
    const c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set();
    for (const D of a) {
      const T = on(t.internalDocumentIDStore, D.doc_id);
      if (T !== void 0) {
        if (f.has(T)) {
          const M = f.get(T);
          D.position < M && f.set(T, D.position);
          continue;
        }
        h.has(D.position) || (c.add(T), f.set(T, D.position), h.add(D.position));
      }
    }
    if (f.size === 0) return i;
    const m = i.filter(([D]) => !c.has(D)), g = 1e6, y = [];
    for (const [D, T] of f.entries()) i.find(([L]) => L === D) ? y.push([
      D,
      g - T
    ]) : t.documentsStore.get(t.data.docs, D) && y.push([
      D,
      0
    ]);
    y.sort((D, T) => {
      const M = f.get(D[0]) ?? 1 / 0, L = f.get(T[0]) ?? 1 / 0;
      return M - L;
    });
    const v = [], w = /* @__PURE__ */ new Map();
    for (const D of y) {
      const T = f.get(D[0]);
      w.set(T, D);
    }
    let I = 0, N = 0;
    for (; N < m.length + y.length; ) if (w.has(N)) v.push(w.get(N)), N++;
    else if (I < m.length) v.push(m[I]), I++, N++;
    else break;
    for (const [D, T] of w.entries()) D >= v.length && v.push(T);
    return v;
  }
  function Qp(t, r, i) {
    const { term: l, properties: s } = r, a = t.data.index;
    let c = t.caches.propertiesToSearch;
    if (!c) {
      const y = t.index.getSearchablePropertiesWithTypes(a);
      c = t.index.getSearchableProperties(a), c = c.filter((v) => y[v].startsWith("string")), t.caches.propertiesToSearch = c;
    }
    if (s && s !== "*") {
      for (const y of s) if (!c.includes(y)) throw Me("UNKNOWN_INDEX", y, c.join(", "));
      c = c.filter((y) => s.includes(y));
    }
    const f = Object.keys(r.where ?? {}).length > 0;
    let h;
    f && (h = t.index.searchByWhereClause(a, t.tokenizer, r.where, i));
    let m;
    const g = r.threshold !== void 0 && r.threshold !== null ? r.threshold : 1;
    if (l || s) {
      const y = Vy(t);
      if (m = t.index.search(a, l || "", t.tokenizer, i, c, r.exact || false, r.tolerance || 0, r.boost || {}, o0(r.relevance), y, h, g), r.exact && l) {
        const v = l.trim().split(/\s+/);
        m = m.filter(([w]) => {
          const I = t.documentsStore.get(t.data.docs, w);
          if (!I) return false;
          for (const N of c) {
            const D = r0(I, N);
            if (typeof D == "string" && v.every((M) => new RegExp(`\\b${n0(M)}\\b`).test(D))) return true;
          }
          return false;
        });
      }
    } else if (f) {
      const y = Vp(a, r.where);
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
    for (const s of i) if (l && typeof l == "object" && s in l) l = l[s];
    else return;
    return l;
  }
  function i0(t, r, i) {
    var _a, _b;
    const l = Mr();
    function s() {
      const f = Object.keys(t.data.index.vectorIndexes), h = r.facets && Object.keys(r.facets).length > 0, { limit: m = 10, offset: g = 0, distinctOn: y, includeVectors: v = false } = r, w = r.preflight === true;
      let I = Qp(t, r, i);
      if (r.sortBy) if (typeof r.sortBy == "function") {
        const T = I.map(([V]) => V), L = t.documentsStore.getMultiple(t.data.docs, T).map((V, Z) => [
          I[Z][0],
          I[Z][1],
          V
        ]);
        L.sort(r.sortBy), I = L.map(([V, Z]) => [
          V,
          Z
        ]);
      } else I = t.sorter.sortBy(t.data.sorting, I, r.sortBy).map(([T, M]) => [
        on(t.internalDocumentIDStore, T),
        M
      ]);
      else I = I.sort(wp);
      I = Xu(t, t.data.pinning, I, r.term);
      let N;
      w || (N = y ? p0(t, I, g, m, y) : Xp(t, I, g, m));
      const D = {
        elapsed: {
          formatted: "",
          raw: 0
        },
        hits: [],
        count: I.length
      };
      if (typeof N < "u" && (D.hits = N.filter(Boolean), v || kp(D, f)), h) {
        const T = Qu(t, I, r.facets);
        D.facets = T;
      }
      return r.groupBy && (D.groups = Ku(t, I, r.groupBy)), D.elapsed = t.formatElapsedTime(Mr() - l), D;
    }
    async function a() {
      t.beforeSearch && await qu(t.beforeSearch, t, r, i);
      const f = s();
      return t.afterSearch && await $u(t.afterSearch, t, r, i, f), f;
    }
    return ((_a = t.beforeSearch) == null ? void 0 : _a.length) || ((_b = t.afterSearch) == null ? void 0 : _b.length) ? a() : s();
  }
  const hu = {
    k: 1.2,
    b: 0.75,
    d: 0.5
  };
  function o0(t) {
    const r = t ?? {};
    return r.k = r.k ?? hu.k, r.b = r.b ?? hu.b, r.d = r.d ?? hu.d, r;
  }
  function Kp(t, r, i) {
    const l = r.vector;
    if (l && (!("value" in l) || !("property" in l))) throw Me("INVALID_VECTOR_INPUT", Object.keys(l).join(", "));
    const s = t.data.index.vectorIndexes[l.property];
    if (!s) throw Me("UNKNOWN_VECTOR_PROPERTY", l.property);
    const a = s.node.size;
    if ((l == null ? void 0 : l.value.length) !== a) throw (l == null ? void 0 : l.property) === void 0 || (l == null ? void 0 : l.value.length) === void 0 ? Me("INVALID_INPUT_VECTOR", "undefined", a, "undefined") : Me("INVALID_INPUT_VECTOR", l.property, a, l.value.length);
    const c = t.data.index;
    let f;
    return Object.keys(r.where ?? {}).length > 0 && (f = t.index.searchByWhereClause(c, t.tokenizer, r.where, i)), s.node.find(l.value, r.similarity ?? Ty, f);
  }
  l0 = function(t, r, i = "english") {
    var _a, _b;
    const l = Mr();
    function s() {
      let f = Kp(t, r, i).sort(wp);
      f = Xu(t, t.data.pinning, f, void 0);
      let h = [];
      r.facets && Object.keys(r.facets).length > 0 && (h = Qu(t, f, r.facets));
      const g = r.vector.property, y = r.includeVectors ?? false, v = r.limit ?? 10, w = r.offset ?? 0, I = Array.from({
        length: v
      });
      for (let M = 0; M < v; M++) {
        const L = f[M + w];
        if (!L) break;
        const V = t.data.docs.docs[L[0]];
        if (V) {
          y || (V[g] = null);
          const Z = {
            id: Fi(t.internalDocumentIDStore, L[0]),
            score: L[1],
            document: V
          };
          I[M] = Z;
        }
      }
      let N = [];
      r.groupBy && (N = Ku(t, f, r.groupBy));
      const T = Mr() - l;
      return {
        count: f.length,
        hits: I.filter(Boolean),
        elapsed: {
          raw: Number(T),
          formatted: Wu(T)
        },
        ...h ? {
          facets: h
        } : {},
        ...N ? {
          groups: N
        } : {}
      };
    }
    async function a() {
      t.beforeSearch && await qu(t.beforeSearch, t, r, i);
      const f = s();
      return t.afterSearch && await $u(t.afterSearch, t, r, i, f), f;
    }
    return ((_a = t.beforeSearch) == null ? void 0 : _a.length) || ((_b = t.afterSearch) == null ? void 0 : _b.length) ? a() : s();
  };
  function s0(t, r, i) {
    const l = a0(Qp(t, r, i)), s = Kp(t, r, i), a = r.hybridWeights;
    return f0(l, s, r.term ?? "", a);
  }
  function u0(t, r, i) {
    var _a, _b;
    const l = Mr();
    function s() {
      let f = s0(t, r, i);
      f = Xu(t, t.data.pinning, f, r.term);
      let h;
      r.facets && Object.keys(r.facets).length > 0 && (h = Qu(t, f, r.facets));
      let g;
      r.groupBy && (g = Ku(t, f, r.groupBy));
      const y = r.offset ?? 0, v = r.limit ?? 10, w = Xp(t, f, y, v).filter(Boolean), I = Mr(), N = {
        count: f.length,
        elapsed: {
          raw: Number(I - l),
          formatted: Wu(I - l)
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
        kp(N, T);
      }
      return N;
    }
    async function a() {
      t.beforeSearch && await qu(t.beforeSearch, t, r, i);
      const f = s();
      return t.afterSearch && await $u(t.afterSearch, t, r, i, f), f;
    }
    return ((_a = t.beforeSearch) == null ? void 0 : _a.length) || ((_b = t.afterSearch) == null ? void 0 : _b.length) ? a() : s();
  }
  function Du(t) {
    return t[1];
  }
  function a0(t) {
    const r = Math.max.apply(Math, t.map(Du));
    return t.map(([i, l]) => [
      i,
      l / r
    ]);
  }
  function kd(t, r) {
    return t / r;
  }
  function c0(t, r) {
    return (i, l) => i * t + l * r;
  }
  function f0(t, r, i, l) {
    const s = Math.max.apply(Math, t.map(Du)), a = Math.max.apply(Math, r.map(Du)), c = l && l.text && l.vector, { text: f, vector: h } = c ? l : d0(), m = /* @__PURE__ */ new Map(), g = t.length, y = c0(f, h);
    for (let w = 0; w < g; w++) {
      const [I, N] = t[w], D = kd(N, s), T = y(D, 0);
      m.set(I, T);
    }
    const v = r.length;
    for (let w = 0; w < v; w++) {
      const [I, N] = r[w], D = kd(N, a), T = m.get(I) ?? 0;
      m.set(I, T + y(0, D));
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
  Sd = function(t, r, i) {
    const l = r.mode ?? yd;
    if (l === yd) return i0(t, r, i);
    if (l === Xy) return l0(t, r);
    if (l === Ky) return u0(t, r);
    throw Me("INVALID_SEARCH_MODE", l);
  };
  function p0(t, r, i, l, s) {
    const a = t.data.docs, c = /* @__PURE__ */ new Map(), f = [], h = /* @__PURE__ */ new Set(), m = r.length;
    let g = 0;
    for (let y = 0; y < m; y++) {
      const v = r[y];
      if (typeof v > "u") continue;
      const [w, I] = v;
      if (h.has(w)) continue;
      const N = t.documentsStore.get(a, w), D = Hu(N, s);
      if (!(typeof D > "u" || c.has(D)) && (c.set(D, true), g++, !(g <= i) && (f.push({
        id: Fi(t.internalDocumentIDStore, w),
        score: I,
        document: N
      }), h.add(w), g >= i + l))) break;
    }
    return f;
  }
  function Xp(t, r, i, l) {
    const s = t.data.docs, a = Array.from({
      length: l
    }), c = /* @__PURE__ */ new Set();
    for (let f = i; f < l + i; f++) {
      const h = r[f];
      if (typeof h > "u") break;
      const [m, g] = h;
      if (!c.has(m)) {
        const y = t.documentsStore.get(s, m);
        a[f] = {
          id: Fi(t.internalDocumentIDStore, m),
          score: g,
          document: y
        }, c.add(m);
      }
    }
    return a;
  }
  const Jp = "llm-import-export";
  async function h0() {
    return (await navigator.storage.getDirectory()).getDirectoryHandle(Jp, {
      create: true
    });
  }
  async function gl(t) {
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
    const l = await gl(t), s = r.split("/"), a = s.pop(), h = await (await (s.length > 0 ? await m0(l, s) : l).getFileHandle(a, {
      create: true
    })).createWritable(), m = i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength);
    await h.write(m), await h.close();
  }
  async function il(t, r) {
    const i = await gl(t), l = r.split("/"), s = l.pop();
    let a = i;
    for (const m of l) a = await a.getDirectoryHandle(m);
    const h = await (await (await a.getFileHandle(s)).getFile()).arrayBuffer();
    return new Uint8Array(h);
  }
  async function y0(t, r) {
    const i = await gl(t), l = r.split("/"), s = l.pop();
    let a = i;
    for (const f of l) a = await a.getDirectoryHandle(f);
    return (await a.getFileHandle(s)).getFile();
  }
  async function v0(t, r) {
    const i = await gl(t), l = r.split("/").filter(Boolean);
    let s = i;
    for (const c of l) s = await s.getDirectoryHandle(c);
    const a = [];
    for await (const [c] of s) a.push(c);
    return a;
  }
  async function w0() {
    try {
      await (await navigator.storage.getDirectory()).removeEntry(Jp, {
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
  function x0() {
    const [t, r] = pe.useState("idle"), [i, l] = pe.useState(0), [s, a] = pe.useState(null), [c, f] = pe.useState(null), [h, m] = pe.useState(null), [g, y] = pe.useState([]), [v, w] = pe.useState([]), I = pe.useCallback(async (D) => {
      try {
        a(null), r("extracting"), l(0), console.log("[Import] Handing zip to unzip-worker:", D.name, `(${(D.size / 1e9).toFixed(2)} GB)`);
        const T = new Worker(new URL("/offline-llm-knowledge-system/import/assets/unzip-worker-Sn3Djg93.js", import.meta.url), {
          type: "module"
        }), M = `extract-${Date.now()}`;
        let L = null;
        if (await new Promise((q, te) => {
          T.onmessage = (ie) => {
            const K = ie.data;
            if (K.id === M) switch (K.type) {
              case "EXTRACT_MANIFEST":
                L = K.manifest, m(K.manifest);
                break;
              case "EXTRACT_PROGRESS":
                l(K.percent), K.stage && r(K.stage);
                break;
              case "EXTRACT_DONE":
                T.terminate(), q();
                break;
              case "EXTRACT_ERROR":
                T.terminate(), te(new Error(K.error));
                break;
            }
          }, T.onerror = (ie) => {
            T.terminate(), te(new Error(ie.message ?? "Unzip worker crashed"));
          };
          const U = D.stream();
          T.postMessage({
            type: "EXTRACT",
            id: M,
            stream: U,
            fileSize: D.size
          }, {
            transfer: [
              U
            ]
          });
        }), !L) throw new Error("Manifest was not received from worker");
        const V = L;
        r("loading-index"), l(82), console.log("[Import] Loading Orama index from OPFS...");
        const Z = await il(V.manifest_hash, "chunks.json"), O = JSON.parse(new TextDecoder().decode(Z)), ee = await il(V.manifest_hash, "orama-index.json.gz").catch(() => null);
        ee && ty(ee);
        const re = await il(V.manifest_hash, "graph.json"), me = JSON.parse(new TextDecoder().decode(re)).edges;
        console.log(`[Import] Graph loaded: ${me.length} edges`);
        const { create: X } = await Vu(async () => {
          const { create: q } = await import("./index-a-vO-paZ.js");
          return {
            create: q
          };
        }, []), ne = await X({
          schema: {
            id: "string",
            source: "string",
            text: "string",
            vector: `vector[${V.embed_model.dimensions}]`
          },
          components: {
            tokenizer: {
              stemming: false
            }
          }
        });
        await Qy(ne, O.map((q) => ({
          id: q.id,
          source: q.source,
          text: q.text,
          vector: q.vector
        }))), y(O), w(me), f(ne), l(92), console.log("[Import] Orama index ready."), r("loading-model");
      } catch (T) {
        const M = T instanceof Error ? T.message : String(T);
        console.error("[Import] importZip error:", M), a(M), r("error");
      }
    }, []), N = pe.useCallback(async () => {
      try {
        await w0(), f(null), m(null), y([]), w([]), l(0), a(null), r("idle");
      } catch (D) {
        a(D instanceof Error ? D.message : String(D));
      }
    }, []);
    return {
      stage: t,
      progress: i,
      error: s,
      importZip: I,
      clearKnowledgeBase: N,
      oramaDb: c,
      manifest: h,
      chunks: g,
      graphEdges: v
    };
  }
  function k0({ onFile: t, disabled: r }) {
    const [i, l] = pe.useState(false), [s, a] = pe.useState(null), c = pe.useCallback((y) => {
      if (a(null), !y.name.endsWith(".zip")) {
        a("Please drop a .zip file");
        return;
      }
      t(y);
    }, [
      t
    ]), f = pe.useCallback((y) => {
      y.preventDefault(), y.stopPropagation(), r || l(true);
    }, [
      r
    ]), h = pe.useCallback((y) => {
      y.preventDefault(), y.stopPropagation(), l(false);
    }, []), m = pe.useCallback((y) => {
      if (y.preventDefault(), y.stopPropagation(), l(false), r) return;
      const v = y.dataTransfer.files[0];
      v && c(v);
    }, [
      r,
      c
    ]), g = pe.useCallback((y) => {
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
        s && j.jsx("p", {
          style: {
            color: "var(--danger)",
            marginTop: 12,
            fontSize: 13,
            textAlign: "center"
          },
          children: s
        })
      ]
    });
  }
  const S0 = {
    idle: "Waiting",
    extracting: "Extracting zip to storage...",
    caching: "Caching model files for offline use...",
    "loading-index": "Loading search index...",
    "loading-model": "Loading language model...",
    ready: "Ready",
    error: "Error"
  };
  function Ed({ stage: t, progress: r, error: i }) {
    const l = S0[t] ?? t;
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
          children: "Loading model weights \u2014 this may take a moment."
        })
      ]
    });
  }
  function E0(t, r) {
    const i = {};
    return (t[t.length - 1] === "" ? [
      ...t,
      ""
    ] : t).join((i.padRight ? " " : "") + "," + (i.padLeft === false ? "" : " ")).trim();
  }
  const I0 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, C0 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, T0 = {};
  function Id(t, r) {
    return (T0.jsx ? C0 : I0).test(t);
  }
  const _0 = /[ \t\n\f\r]/g;
  function P0(t) {
    return typeof t == "object" ? t.type === "text" ? Cd(t.value) : false : Cd(t);
  }
  function Cd(t) {
    return t.replace(_0, "") === "";
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
    for (const s of t) Object.assign(i, s.property), Object.assign(l, s.normal);
    return new ji(i, l, r);
  }
  function Ru(t) {
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
  let N0 = 0;
  const Se = rr(), Qe = rr(), Au = rr(), Y = rr(), Le = rr(), Lr = rr(), Tt = rr();
  function rr() {
    return 2 ** ++N0;
  }
  const Ou = Object.freeze(Object.defineProperty({
    __proto__: null,
    boolean: Se,
    booleanish: Qe,
    commaOrSpaceSeparated: Tt,
    commaSeparated: Lr,
    number: Y,
    overloadedBoolean: Au,
    spaceSeparated: Le
  }, Symbol.toStringTag, {
    value: "Module"
  })), mu = Object.keys(Ou);
  class Ju extends xt {
    constructor(r, i, l, s) {
      let a = -1;
      if (super(r, i), Td(this, "space", s), typeof l == "number") for (; ++a < mu.length; ) {
        const c = mu[a];
        Td(this, mu[a], (l & Ou[c]) === Ou[c]);
      }
    }
  }
  Ju.prototype.defined = true;
  function Td(t, r, i) {
    i && (t[r] = i);
  }
  function br(t) {
    const r = {}, i = {};
    for (const [l, s] of Object.entries(t.properties)) {
      const a = new Ju(l, t.transform(t.attributes || {}, l), s, t.space);
      t.mustUseProperty && t.mustUseProperty.includes(l) && (a.mustUseProperty = true), r[l] = a, i[Ru(l)] = l, i[Ru(a.attribute)] = l;
    }
    return new ji(r, i, t.space);
  }
  const eh = br({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Qe,
      ariaAutoComplete: null,
      ariaBusy: Qe,
      ariaChecked: Qe,
      ariaColCount: Y,
      ariaColIndex: Y,
      ariaColSpan: Y,
      ariaControls: Le,
      ariaCurrent: null,
      ariaDescribedBy: Le,
      ariaDetails: null,
      ariaDisabled: Qe,
      ariaDropEffect: Le,
      ariaErrorMessage: null,
      ariaExpanded: Qe,
      ariaFlowTo: Le,
      ariaGrabbed: Qe,
      ariaHasPopup: null,
      ariaHidden: Qe,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: Le,
      ariaLevel: Y,
      ariaLive: null,
      ariaModal: Qe,
      ariaMultiLine: Qe,
      ariaMultiSelectable: Qe,
      ariaOrientation: null,
      ariaOwns: Le,
      ariaPlaceholder: null,
      ariaPosInSet: Y,
      ariaPressed: Qe,
      ariaReadOnly: Qe,
      ariaRelevant: null,
      ariaRequired: Qe,
      ariaRoleDescription: Le,
      ariaRowCount: Y,
      ariaRowIndex: Y,
      ariaRowSpan: Y,
      ariaSelected: Qe,
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
  const D0 = br({
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
      contentEditable: Qe,
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
      download: Au,
      draggable: Qe,
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
      hidden: Au,
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
      spellCheck: Qe,
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
      value: Qe,
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
      scrolling: Qe,
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
  }), R0 = br({
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
  }), rh = br({
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
  }), ih = br({
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    properties: {
      xmlnsXLink: null,
      xmlns: null
    },
    space: "xmlns",
    transform: nh
  }), oh = br({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null
    },
    space: "xml",
    transform(t, r) {
      return "xml:" + r.slice(3).toLowerCase();
    }
  }), A0 = {
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
  }, O0 = /[A-Z]/g, _d = /-[a-z]/g, L0 = /^data[-\w.:]+$/i;
  function z0(t, r) {
    const i = Ru(r);
    let l = r, s = xt;
    if (i in t.normal) return t.property[t.normal[i]];
    if (i.length > 4 && i.slice(0, 4) === "data" && L0.test(r)) {
      if (r.charAt(4) === "-") {
        const a = r.slice(5).replace(_d, b0);
        l = "data" + a.charAt(0).toUpperCase() + a.slice(1);
      } else {
        const a = r.slice(4);
        if (!_d.test(a)) {
          let c = a.replace(O0, M0);
          c.charAt(0) !== "-" && (c = "-" + c), r = "data" + c;
        }
      }
      s = Ju;
    }
    return new s(l, r);
  }
  function M0(t) {
    return "-" + t.toLowerCase();
  }
  function b0(t) {
    return t.charAt(1).toUpperCase();
  }
  const F0 = Zp([
    eh,
    D0,
    rh,
    ih,
    oh
  ], "html"), Zu = Zp([
    eh,
    R0,
    rh,
    ih,
    oh
  ], "svg");
  function j0(t) {
    return t.join(" ").trim();
  }
  var Dr = {}, gu, Pd;
  function B0() {
    if (Pd) return gu;
    Pd = 1;
    var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, f = /^\s+|\s+$/g, h = `
`, m = "/", g = "*", y = "", v = "comment", w = "declaration";
    function I(D, T) {
      if (typeof D != "string") throw new TypeError("First argument must be a string");
      if (!D) return [];
      T = T || {};
      var M = 1, L = 1;
      function V(te) {
        var U = te.match(r);
        U && (M += U.length);
        var ie = te.lastIndexOf(h);
        L = ~ie ? te.length - ie : L + te.length;
      }
      function Z() {
        var te = {
          line: M,
          column: L
        };
        return function(U) {
          return U.position = new O(te), se(), U;
        };
      }
      function O(te) {
        this.start = te, this.end = {
          line: M,
          column: L
        }, this.source = T.source;
      }
      O.prototype.content = D;
      function ee(te) {
        var U = new Error(T.source + ":" + M + ":" + L + ": " + te);
        if (U.reason = te, U.filename = T.source, U.line = M, U.column = L, U.source = D, !T.silent) throw U;
      }
      function re(te) {
        var U = te.exec(D);
        if (U) {
          var ie = U[0];
          return V(ie), D = D.slice(ie.length), U;
        }
      }
      function se() {
        re(i);
      }
      function me(te) {
        var U;
        for (te = te || []; U = X(); ) U !== false && te.push(U);
        return te;
      }
      function X() {
        var te = Z();
        if (!(m != D.charAt(0) || g != D.charAt(1))) {
          for (var U = 2; y != D.charAt(U) && (g != D.charAt(U) || m != D.charAt(U + 1)); ) ++U;
          if (U += 2, y === D.charAt(U - 1)) return ee("End of comment missing");
          var ie = D.slice(2, U - 2);
          return L += 2, V(ie), D = D.slice(U), L += 2, te({
            type: v,
            comment: ie
          });
        }
      }
      function ne() {
        var te = Z(), U = re(l);
        if (U) {
          if (X(), !re(s)) return ee("property missing ':'");
          var ie = re(a), K = te({
            type: w,
            property: N(U[0].replace(t, y)),
            value: ie ? N(ie[0].replace(t, y)) : y
          });
          return re(c), K;
        }
      }
      function q() {
        var te = [];
        me(te);
        for (var U; U = ne(); ) U !== false && (te.push(U), me(te));
        return te;
      }
      return se(), q();
    }
    function N(D) {
      return D ? D.replace(f, y) : y;
    }
    return gu = I, gu;
  }
  var Nd;
  function U0() {
    if (Nd) return Dr;
    Nd = 1;
    var t = Dr && Dr.__importDefault || function(l) {
      return l && l.__esModule ? l : {
        default: l
      };
    };
    Object.defineProperty(Dr, "__esModule", {
      value: true
    }), Dr.default = i;
    const r = t(B0());
    function i(l, s) {
      let a = null;
      if (!l || typeof l != "string") return a;
      const c = (0, r.default)(l), f = typeof s == "function";
      return c.forEach((h) => {
        if (h.type !== "declaration") return;
        const { property: m, value: g } = h;
        f ? s(m, g, h) : g && (a = a || {}, a[m] = g);
      }), a;
    }
    return Dr;
  }
  var Ti = {}, Dd;
  function V0() {
    if (Dd) return Ti;
    Dd = 1, Object.defineProperty(Ti, "__esModule", {
      value: true
    }), Ti.camelCase = void 0;
    var t = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, i = /^[^-]+$/, l = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, a = function(m) {
      return !m || i.test(m) || t.test(m);
    }, c = function(m, g) {
      return g.toUpperCase();
    }, f = function(m, g) {
      return "".concat(g, "-");
    }, h = function(m, g) {
      return g === void 0 && (g = {}), a(m) ? m : (m = m.toLowerCase(), g.reactCompat ? m = m.replace(s, f) : m = m.replace(l, f), m.replace(r, c));
    };
    return Ti.camelCase = h, Ti;
  }
  var _i, Rd;
  function W0() {
    if (Rd) return _i;
    Rd = 1;
    var t = _i && _i.__importDefault || function(s) {
      return s && s.__esModule ? s : {
        default: s
      };
    }, r = t(U0()), i = V0();
    function l(s, a) {
      var c = {};
      return !s || typeof s != "string" || (0, r.default)(s, function(f, h) {
        f && h && (c[(0, i.camelCase)(f, a)] = h);
      }), c;
    }
    return l.default = l, _i = l, _i;
  }
  var H0 = W0();
  const $0 = al(H0), lh = sh("end"), ea = sh("start");
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
  function q0(t) {
    const r = ea(t), i = lh(t);
    if (r && i) return {
      start: r,
      end: i
    };
  }
  function Ai(t) {
    return !t || typeof t != "object" ? "" : "position" in t || "type" in t ? Ad(t.position) : "start" in t || "end" in t ? Ad(t) : "line" in t || "column" in t ? Lu(t) : "";
  }
  function Lu(t) {
    return Od(t && t.line) + ":" + Od(t && t.column);
  }
  function Ad(t) {
    return Lu(t && t.start) + "-" + Lu(t && t.end);
  }
  function Od(t) {
    return t && typeof t == "number" ? t : 1;
  }
  class at extends Error {
    constructor(r, i, l) {
      super(), typeof i == "string" && (l = i, i = void 0);
      let s = "", a = {}, c = false;
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
      }), typeof r == "string" ? s = r : !a.cause && r && (c = true, s = r.message, a.cause = r), !a.ruleId && !a.source && typeof l == "string") {
        const h = l.indexOf(":");
        h === -1 ? a.ruleId = l : (a.source = l.slice(0, h), a.ruleId = l.slice(h + 1));
      }
      if (!a.place && a.ancestors && a.ancestors) {
        const h = a.ancestors[a.ancestors.length - 1];
        h && (a.place = h.position);
      }
      const f = a.place && "start" in a.place ? a.place.start : a.place;
      this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = f ? f.column : void 0, this.fatal = void 0, this.file = "", this.message = s, this.line = f ? f.line : void 0, this.name = Ai(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = c && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
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
  const ta = {}.hasOwnProperty, G0 = /* @__PURE__ */ new Map(), Y0 = /[A-Z]/g, Q0 = /* @__PURE__ */ new Set([
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr"
  ]), K0 = /* @__PURE__ */ new Set([
    "td",
    "th"
  ]), uh = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function X0(t, r) {
    if (!r || r.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const i = r.filePath || void 0;
    let l;
    if (r.development) {
      if (typeof r.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
      l = ov(i, r.jsxDEV);
    } else {
      if (typeof r.jsx != "function") throw new TypeError("Expected `jsx` in production options");
      if (typeof r.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
      l = iv(i, r.jsx, r.jsxs);
    }
    const s = {
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
      schema: r.space === "svg" ? Zu : F0,
      stylePropertyNameCase: r.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: r.tableCellAlignToStyle !== false
    }, a = ah(s, t, void 0);
    return a && typeof a != "string" ? a : s.create(t, s.Fragment, {
      children: a || void 0
    }, void 0);
  }
  function ah(t, r, i) {
    if (r.type === "element") return J0(t, r, i);
    if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression") return Z0(t, r);
    if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement") return tv(t, r, i);
    if (r.type === "mdxjsEsm") return ev(t, r);
    if (r.type === "root") return nv(t, r, i);
    if (r.type === "text") return rv(t, r);
  }
  function J0(t, r, i) {
    const l = t.schema;
    let s = l;
    r.tagName.toLowerCase() === "svg" && l.space === "html" && (s = Zu, t.schema = s), t.ancestors.push(r);
    const a = fh(t, r.tagName, false), c = lv(t, r);
    let f = ra(t, r);
    return Q0.has(r.tagName) && (f = f.filter(function(h) {
      return typeof h == "string" ? !P0(h) : true;
    })), ch(t, c, a, r), na(c, f), t.ancestors.pop(), t.schema = l, t.create(r, a, c, i);
  }
  function Z0(t, r) {
    if (r.data && r.data.estree && t.evaluater) {
      const l = r.data.estree.body[0];
      return l.type, t.evaluater.evaluateExpression(l.expression);
    }
    zi(t, r.position);
  }
  function ev(t, r) {
    if (r.data && r.data.estree && t.evaluater) return t.evaluater.evaluateProgram(r.data.estree);
    zi(t, r.position);
  }
  function tv(t, r, i) {
    const l = t.schema;
    let s = l;
    r.name === "svg" && l.space === "html" && (s = Zu, t.schema = s), t.ancestors.push(r);
    const a = r.name === null ? t.Fragment : fh(t, r.name, true), c = sv(t, r), f = ra(t, r);
    return ch(t, c, a, r), na(c, f), t.ancestors.pop(), t.schema = l, t.create(r, a, c, i);
  }
  function nv(t, r, i) {
    const l = {};
    return na(l, ra(t, r)), t.create(r, t.Fragment, l, i);
  }
  function rv(t, r) {
    return r.value;
  }
  function ch(t, r, i, l) {
    typeof i != "string" && i !== t.Fragment && t.passNode && (r.node = l);
  }
  function na(t, r) {
    if (r.length > 0) {
      const i = r.length > 1 ? r : r[0];
      i && (t.children = i);
    }
  }
  function iv(t, r, i) {
    return l;
    function l(s, a, c, f) {
      const m = Array.isArray(c.children) ? i : r;
      return f ? m(a, c, f) : m(a, c);
    }
  }
  function ov(t, r) {
    return i;
    function i(l, s, a, c) {
      const f = Array.isArray(a.children), h = ea(l);
      return r(s, a, c, f, {
        columnNumber: h ? h.column - 1 : void 0,
        fileName: t,
        lineNumber: h ? h.line : void 0
      }, void 0);
    }
  }
  function lv(t, r) {
    const i = {};
    let l, s;
    for (s in r.properties) if (s !== "children" && ta.call(r.properties, s)) {
      const a = uv(t, s, r.properties[s]);
      if (a) {
        const [c, f] = a;
        t.tableCellAlignToStyle && c === "align" && typeof f == "string" && K0.has(r.tagName) ? l = f : i[c] = f;
      }
    }
    if (l) {
      const a = i.style || (i.style = {});
      a[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = l;
    }
    return i;
  }
  function sv(t, r) {
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
      const s = l.name;
      let a;
      if (l.value && typeof l.value == "object") if (l.value.data && l.value.data.estree && t.evaluater) {
        const f = l.value.data.estree.body[0];
        f.type, a = t.evaluater.evaluateExpression(f.expression);
      } else zi(t, r.position);
      else a = l.value === null ? true : l.value;
      i[s] = a;
    }
    return i;
  }
  function ra(t, r) {
    const i = [];
    let l = -1;
    const s = t.passKeys ? /* @__PURE__ */ new Map() : G0;
    for (; ++l < r.children.length; ) {
      const a = r.children[l];
      let c;
      if (t.passKeys) {
        const h = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
        if (h) {
          const m = s.get(h) || 0;
          c = h + "-" + m, s.set(h, m + 1);
        }
      }
      const f = ah(t, a, c);
      f !== void 0 && i.push(f);
    }
    return i;
  }
  function uv(t, r, i) {
    const l = z0(t.schema, r);
    if (!(i == null || typeof i == "number" && Number.isNaN(i))) {
      if (Array.isArray(i) && (i = l.commaSeparated ? E0(i) : j0(i)), l.property === "style") {
        let s = typeof i == "object" ? i : av(t, String(i));
        return t.stylePropertyNameCase === "css" && (s = cv(s)), [
          "style",
          s
        ];
      }
      return [
        t.elementAttributeNameCase === "react" && l.space ? A0[l.property] || l.property : l.attribute,
        i
      ];
    }
  }
  function av(t, r) {
    try {
      return $0(r, {
        reactCompat: true
      });
    } catch (i) {
      if (t.ignoreInvalidStyle) return {};
      const l = i, s = new at("Cannot parse `style` attribute", {
        ancestors: t.ancestors,
        cause: l,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw s.file = t.filePath || void 0, s.url = uh + "#cannot-parse-style-attribute", s;
    }
  }
  function fh(t, r, i) {
    let l;
    if (!i) l = {
      type: "Literal",
      value: r
    };
    else if (r.includes(".")) {
      const s = r.split(".");
      let a = -1, c;
      for (; ++a < s.length; ) {
        const f = Id(s[a]) ? {
          type: "Identifier",
          name: s[a]
        } : {
          type: "Literal",
          value: s[a]
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
    } else l = Id(r) && !/^[a-z]/.test(r) ? {
      type: "Identifier",
      name: r
    } : {
      type: "Literal",
      value: r
    };
    if (l.type === "Literal") {
      const s = l.value;
      return ta.call(t.components, s) ? t.components[s] : s;
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
  function cv(t) {
    const r = {};
    let i;
    for (i in t) ta.call(t, i) && (r[fv(i)] = t[i]);
    return r;
  }
  function fv(t) {
    let r = t.replace(Y0, dv);
    return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
  }
  function dv(t) {
    return "-" + t.toLowerCase();
  }
  const yu = {
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
  }, pv = {};
  function hv(t, r) {
    const i = pv, l = typeof i.includeImageAlt == "boolean" ? i.includeImageAlt : true, s = typeof i.includeHtml == "boolean" ? i.includeHtml : true;
    return dh(t, l, s);
  }
  function dh(t, r, i) {
    if (mv(t)) {
      if ("value" in t) return t.type === "html" && !i ? "" : t.value;
      if (r && "alt" in t && t.alt) return t.alt;
      if ("children" in t) return Ld(t.children, r, i);
    }
    return Array.isArray(t) ? Ld(t, r, i) : "";
  }
  function Ld(t, r, i) {
    const l = [];
    let s = -1;
    for (; ++s < t.length; ) l[s] = dh(t[s], r, i);
    return l.join("");
  }
  function mv(t) {
    return !!(t && typeof t == "object");
  }
  const zd = document.createElement("i");
  function ia(t) {
    const r = "&" + t + ";";
    zd.innerHTML = r;
    const i = zd.textContent;
    return i.charCodeAt(i.length - 1) === 59 && t !== "semi" || i === r ? false : i;
  }
  function rn(t, r, i, l) {
    const s = t.length;
    let a = 0, c;
    if (r < 0 ? r = -r > s ? 0 : s + r : r = r > s ? s : r, i = i > 0 ? i : 0, l.length < 1e4) c = Array.from(l), c.unshift(r, i), t.splice(...c);
    else for (i && t.splice(r, i); a < l.length; ) c = l.slice(a, a + 1e4), c.unshift(r, 0), t.splice(...c), a += 1e4, r += 1e4;
  }
  function jt(t, r) {
    return t.length > 0 ? (rn(t, t.length, 0, r), t) : r;
  }
  const Md = {}.hasOwnProperty;
  function gv(t) {
    const r = {};
    let i = -1;
    for (; ++i < t.length; ) yv(r, t[i]);
    return r;
  }
  function yv(t, r) {
    let i;
    for (i in r) {
      const s = (Md.call(t, i) ? t[i] : void 0) || (t[i] = {}), a = r[i];
      let c;
      if (a) for (c in a) {
        Md.call(s, c) || (s[c] = []);
        const f = a[c];
        vv(s[c], Array.isArray(f) ? f : f ? [
          f
        ] : []);
      }
    }
  }
  function vv(t, r) {
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
  const nn = Un(/[A-Za-z]/), Dt = Un(/[\dA-Za-z]/), wv = Un(/[#-'*+\--9=?A-Z^-~]/);
  function zu(t) {
    return t !== null && (t < 32 || t === 127);
  }
  const Mu = Un(/\d/), xv = Un(/[\dA-Fa-f]/), kv = Un(/[!-/:-@[-`{-~]/);
  function xe(t) {
    return t !== null && t < -2;
  }
  function wt(t) {
    return t !== null && (t < 0 || t === 32);
  }
  function Re(t) {
    return t === -2 || t === -1 || t === 32;
  }
  const Sv = Un(new RegExp("\\p{P}|\\p{S}", "u")), Ev = Un(/\s/);
  function Un(t) {
    return r;
    function r(i) {
      return i !== null && i > -1 && t.test(String.fromCharCode(i));
    }
  }
  function Fr(t) {
    const r = [];
    let i = -1, l = 0, s = 0;
    for (; ++i < t.length; ) {
      const a = t.charCodeAt(i);
      let c = "";
      if (a === 37 && Dt(t.charCodeAt(i + 1)) && Dt(t.charCodeAt(i + 2))) s = 2;
      else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (c = String.fromCharCode(a));
      else if (a > 55295 && a < 57344) {
        const f = t.charCodeAt(i + 1);
        a < 56320 && f > 56319 && f < 57344 ? (c = String.fromCharCode(a, f), s = 1) : c = "\uFFFD";
      } else c = String.fromCharCode(a);
      c && (r.push(t.slice(l, i), encodeURIComponent(c)), l = i + s + 1, c = ""), s && (i += s, s = 0);
    }
    return r.join("") + t.slice(l);
  }
  function ze(t, r, i, l) {
    const s = l ? l - 1 : Number.POSITIVE_INFINITY;
    let a = 0;
    return c;
    function c(h) {
      return Re(h) ? (t.enter(i), f(h)) : r(h);
    }
    function f(h) {
      return Re(h) && a++ < s ? (t.consume(h), f) : (t.exit(i), r(h));
    }
  }
  const Iv = {
    tokenize: Cv
  };
  function Cv(t) {
    const r = t.attempt(this.parser.constructs.contentInitial, l, s);
    let i;
    return r;
    function l(f) {
      if (f === null) {
        t.consume(f);
        return;
      }
      return t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), ze(t, r, "linePrefix");
    }
    function s(f) {
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
  const Tv = {
    tokenize: _v
  }, bd = {
    tokenize: Pv
  };
  function _v(t) {
    const r = this, i = [];
    let l = 0, s, a, c;
    return f;
    function f(L) {
      if (l < i.length) {
        const V = i[l];
        return r.containerState = V[1], t.attempt(V[0].continuation, h, m)(L);
      }
      return m(L);
    }
    function h(L) {
      if (l++, r.containerState._closeFlow) {
        r.containerState._closeFlow = void 0, s && M();
        const V = r.events.length;
        let Z = V, O;
        for (; Z--; ) if (r.events[Z][0] === "exit" && r.events[Z][1].type === "chunkFlow") {
          O = r.events[Z][1].end;
          break;
        }
        T(l);
        let ee = V;
        for (; ee < r.events.length; ) r.events[ee][1].end = {
          ...O
        }, ee++;
        return rn(r.events, Z + 1, 0, r.events.slice(V)), r.events.length = ee, m(L);
      }
      return f(L);
    }
    function m(L) {
      if (l === i.length) {
        if (!s) return v(L);
        if (s.currentConstruct && s.currentConstruct.concrete) return I(L);
        r.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
      }
      return r.containerState = {}, t.check(bd, g, y)(L);
    }
    function g(L) {
      return s && M(), T(l), v(L);
    }
    function y(L) {
      return r.parser.lazy[r.now().line] = l !== i.length, c = r.now().offset, I(L);
    }
    function v(L) {
      return r.containerState = {}, t.attempt(bd, w, I)(L);
    }
    function w(L) {
      return l++, i.push([
        r.currentConstruct,
        r.containerState
      ]), v(L);
    }
    function I(L) {
      if (L === null) {
        s && M(), T(0), t.consume(L);
        return;
      }
      return s = s || r.parser.flow(r.now()), t.enter("chunkFlow", {
        _tokenizer: s,
        contentType: "flow",
        previous: a
      }), N(L);
    }
    function N(L) {
      if (L === null) {
        D(t.exit("chunkFlow"), true), T(0), t.consume(L);
        return;
      }
      return xe(L) ? (t.consume(L), D(t.exit("chunkFlow")), l = 0, r.interrupt = void 0, f) : (t.consume(L), N);
    }
    function D(L, V) {
      const Z = r.sliceStream(L);
      if (V && Z.push(null), L.previous = a, a && (a.next = L), a = L, s.defineSkip(L.start), s.write(Z), r.parser.lazy[L.start.line]) {
        let O = s.events.length;
        for (; O--; ) if (s.events[O][1].start.offset < c && (!s.events[O][1].end || s.events[O][1].end.offset > c)) return;
        const ee = r.events.length;
        let re = ee, se, me;
        for (; re--; ) if (r.events[re][0] === "exit" && r.events[re][1].type === "chunkFlow") {
          if (se) {
            me = r.events[re][1].end;
            break;
          }
          se = true;
        }
        for (T(l), O = ee; O < r.events.length; ) r.events[O][1].end = {
          ...me
        }, O++;
        rn(r.events, re + 1, 0, r.events.slice(ee)), r.events.length = O;
      }
    }
    function T(L) {
      let V = i.length;
      for (; V-- > L; ) {
        const Z = i[V];
        r.containerState = Z[1], Z[0].exit.call(r, t);
      }
      i.length = L;
    }
    function M() {
      s.write([
        null
      ]), a = void 0, s = void 0, r.containerState._closeFlow = void 0;
    }
  }
  function Pv(t, r, i) {
    return ze(t, t.attempt(this.parser.constructs.document, r, i), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function Fd(t) {
    if (t === null || wt(t) || Ev(t)) return 1;
    if (Sv(t)) return 2;
  }
  function oa(t, r, i) {
    const l = [];
    let s = -1;
    for (; ++s < t.length; ) {
      const a = t[s].resolveAll;
      a && !l.includes(a) && (r = a(r, i), l.push(a));
    }
    return r;
  }
  const bu = {
    name: "attention",
    resolveAll: Nv,
    tokenize: Dv
  };
  function Nv(t, r) {
    let i = -1, l, s, a, c, f, h, m, g;
    for (; ++i < t.length; ) if (t[i][0] === "enter" && t[i][1].type === "attentionSequence" && t[i][1]._close) {
      for (l = i; l--; ) if (t[l][0] === "exit" && t[l][1].type === "attentionSequence" && t[l][1]._open && r.sliceSerialize(t[l][1]).charCodeAt(0) === r.sliceSerialize(t[i][1]).charCodeAt(0)) {
        if ((t[l][1]._close || t[i][1]._open) && (t[i][1].end.offset - t[i][1].start.offset) % 3 && !((t[l][1].end.offset - t[l][1].start.offset + t[i][1].end.offset - t[i][1].start.offset) % 3)) continue;
        h = t[l][1].end.offset - t[l][1].start.offset > 1 && t[i][1].end.offset - t[i][1].start.offset > 1 ? 2 : 1;
        const y = {
          ...t[l][1].end
        }, v = {
          ...t[i][1].start
        };
        jd(y, -h), jd(v, h), c = {
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
        }, s = {
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
            s,
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
        ]), m = jt(m, oa(r.parser.constructs.insideSpan.null, t.slice(l + 1, i), r)), m = jt(m, [
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
            s,
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
  function Dv(t, r) {
    const i = this.parser.constructs.attentionMarkers.null, l = this.previous, s = Fd(l);
    let a;
    return c;
    function c(h) {
      return a = h, t.enter("attentionSequence"), f(h);
    }
    function f(h) {
      if (h === a) return t.consume(h), f;
      const m = t.exit("attentionSequence"), g = Fd(h), y = !g || g === 2 && s || i.includes(h), v = !s || s === 2 && g || i.includes(l);
      return m._open = !!(a === 42 ? y : y && (s || !v)), m._close = !!(a === 42 ? v : v && (g || !y)), r(h);
    }
  }
  function jd(t, r) {
    t.column += r, t.offset += r, t._bufferIndex += r;
  }
  const Rv = {
    name: "autolink",
    tokenize: Av
  };
  function Av(t, r, i) {
    let l = 0;
    return s;
    function s(w) {
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
      return w === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(w), t.exit("autolinkMarker"), t.exit("autolink"), r) : w === null || w === 32 || w === 60 || zu(w) ? i(w) : (t.consume(w), h);
    }
    function m(w) {
      return w === 64 ? (t.consume(w), g) : wv(w) ? (t.consume(w), m) : i(w);
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
  const yl = {
    partial: true,
    tokenize: Ov
  };
  function Ov(t, r, i) {
    return l;
    function l(a) {
      return Re(a) ? ze(t, s, "linePrefix")(a) : s(a);
    }
    function s(a) {
      return a === null || xe(a) ? r(a) : i(a);
    }
  }
  const hh = {
    continuation: {
      tokenize: zv
    },
    exit: Mv,
    name: "blockQuote",
    tokenize: Lv
  };
  function Lv(t, r, i) {
    const l = this;
    return s;
    function s(c) {
      if (c === 62) {
        const f = l.containerState;
        return f.open || (t.enter("blockQuote", {
          _container: true
        }), f.open = true), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(c), t.exit("blockQuoteMarker"), a;
      }
      return i(c);
    }
    function a(c) {
      return Re(c) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(c), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), r) : (t.exit("blockQuotePrefix"), r(c));
    }
  }
  function zv(t, r, i) {
    const l = this;
    return s;
    function s(c) {
      return Re(c) ? ze(t, a, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(c) : a(c);
    }
    function a(c) {
      return t.attempt(hh, r, i)(c);
    }
  }
  function Mv(t) {
    t.exit("blockQuote");
  }
  const mh = {
    name: "characterEscape",
    tokenize: bv
  };
  function bv(t, r, i) {
    return l;
    function l(a) {
      return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(a), t.exit("escapeMarker"), s;
    }
    function s(a) {
      return kv(a) ? (t.enter("characterEscapeValue"), t.consume(a), t.exit("characterEscapeValue"), t.exit("characterEscape"), r) : i(a);
    }
  }
  const gh = {
    name: "characterReference",
    tokenize: Fv
  };
  function Fv(t, r, i) {
    const l = this;
    let s = 0, a, c;
    return f;
    function f(y) {
      return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(y), t.exit("characterReferenceMarker"), h;
    }
    function h(y) {
      return y === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(y), t.exit("characterReferenceMarkerNumeric"), m) : (t.enter("characterReferenceValue"), a = 31, c = Dt, g(y));
    }
    function m(y) {
      return y === 88 || y === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(y), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), a = 6, c = xv, g) : (t.enter("characterReferenceValue"), a = 7, c = Mu, g(y));
    }
    function g(y) {
      if (y === 59 && s) {
        const v = t.exit("characterReferenceValue");
        return c === Dt && !ia(l.sliceSerialize(v)) ? i(y) : (t.enter("characterReferenceMarker"), t.consume(y), t.exit("characterReferenceMarker"), t.exit("characterReference"), r);
      }
      return c(y) && s++ < a ? (t.consume(y), g) : i(y);
    }
  }
  const Bd = {
    partial: true,
    tokenize: Bv
  }, Ud = {
    concrete: true,
    name: "codeFenced",
    tokenize: jv
  };
  function jv(t, r, i) {
    const l = this, s = {
      partial: true,
      tokenize: Z
    };
    let a = 0, c = 0, f;
    return h;
    function h(O) {
      return m(O);
    }
    function m(O) {
      const ee = l.events[l.events.length - 1];
      return a = ee && ee[1].type === "linePrefix" ? ee[2].sliceSerialize(ee[1], true).length : 0, f = O, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), g(O);
    }
    function g(O) {
      return O === f ? (c++, t.consume(O), g) : c < 3 ? i(O) : (t.exit("codeFencedFenceSequence"), Re(O) ? ze(t, y, "whitespace")(O) : y(O));
    }
    function y(O) {
      return O === null || xe(O) ? (t.exit("codeFencedFence"), l.interrupt ? r(O) : t.check(Bd, N, V)(O)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
        contentType: "string"
      }), v(O));
    }
    function v(O) {
      return O === null || xe(O) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), y(O)) : Re(O) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), ze(t, w, "whitespace")(O)) : O === 96 && O === f ? i(O) : (t.consume(O), v);
    }
    function w(O) {
      return O === null || xe(O) ? y(O) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
        contentType: "string"
      }), I(O));
    }
    function I(O) {
      return O === null || xe(O) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), y(O)) : O === 96 && O === f ? i(O) : (t.consume(O), I);
    }
    function N(O) {
      return t.attempt(s, V, D)(O);
    }
    function D(O) {
      return t.enter("lineEnding"), t.consume(O), t.exit("lineEnding"), T;
    }
    function T(O) {
      return a > 0 && Re(O) ? ze(t, M, "linePrefix", a + 1)(O) : M(O);
    }
    function M(O) {
      return O === null || xe(O) ? t.check(Bd, N, V)(O) : (t.enter("codeFlowValue"), L(O));
    }
    function L(O) {
      return O === null || xe(O) ? (t.exit("codeFlowValue"), M(O)) : (t.consume(O), L);
    }
    function V(O) {
      return t.exit("codeFenced"), r(O);
    }
    function Z(O, ee, re) {
      let se = 0;
      return me;
      function me(U) {
        return O.enter("lineEnding"), O.consume(U), O.exit("lineEnding"), X;
      }
      function X(U) {
        return O.enter("codeFencedFence"), Re(U) ? ze(O, ne, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(U) : ne(U);
      }
      function ne(U) {
        return U === f ? (O.enter("codeFencedFenceSequence"), q(U)) : re(U);
      }
      function q(U) {
        return U === f ? (se++, O.consume(U), q) : se >= c ? (O.exit("codeFencedFenceSequence"), Re(U) ? ze(O, te, "whitespace")(U) : te(U)) : re(U);
      }
      function te(U) {
        return U === null || xe(U) ? (O.exit("codeFencedFence"), ee(U)) : re(U);
      }
    }
  }
  function Bv(t, r, i) {
    const l = this;
    return s;
    function s(c) {
      return c === null ? i(c) : (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), a);
    }
    function a(c) {
      return l.parser.lazy[l.now().line] ? i(c) : r(c);
    }
  }
  const vu = {
    name: "codeIndented",
    tokenize: Vv
  }, Uv = {
    partial: true,
    tokenize: Wv
  };
  function Vv(t, r, i) {
    const l = this;
    return s;
    function s(m) {
      return t.enter("codeIndented"), ze(t, a, "linePrefix", 5)(m);
    }
    function a(m) {
      const g = l.events[l.events.length - 1];
      return g && g[1].type === "linePrefix" && g[2].sliceSerialize(g[1], true).length >= 4 ? c(m) : i(m);
    }
    function c(m) {
      return m === null ? h(m) : xe(m) ? t.attempt(Uv, c, h)(m) : (t.enter("codeFlowValue"), f(m));
    }
    function f(m) {
      return m === null || xe(m) ? (t.exit("codeFlowValue"), c(m)) : (t.consume(m), f);
    }
    function h(m) {
      return t.exit("codeIndented"), r(m);
    }
  }
  function Wv(t, r, i) {
    const l = this;
    return s;
    function s(c) {
      return l.parser.lazy[l.now().line] ? i(c) : xe(c) ? (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), s) : ze(t, a, "linePrefix", 5)(c);
    }
    function a(c) {
      const f = l.events[l.events.length - 1];
      return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], true).length >= 4 ? r(c) : xe(c) ? s(c) : i(c);
    }
  }
  const Hv = {
    name: "codeText",
    previous: qv,
    resolve: $v,
    tokenize: Gv
  };
  function $v(t) {
    let r = t.length - 4, i = 3, l, s;
    if ((t[i][1].type === "lineEnding" || t[i][1].type === "space") && (t[r][1].type === "lineEnding" || t[r][1].type === "space")) {
      for (l = i; ++l < r; ) if (t[l][1].type === "codeTextData") {
        t[i][1].type = "codeTextPadding", t[r][1].type = "codeTextPadding", i += 2, r -= 2;
        break;
      }
    }
    for (l = i - 1, r++; ++l <= r; ) s === void 0 ? l !== r && t[l][1].type !== "lineEnding" && (s = l) : (l === r || t[l][1].type === "lineEnding") && (t[s][1].type = "codeTextData", l !== s + 2 && (t[s][1].end = t[l - 1][1].end, t.splice(s + 2, l - s - 2), r -= l - s - 2, l = s + 2), s = void 0);
    return t;
  }
  function qv(t) {
    return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function Gv(t, r, i) {
    let l = 0, s, a;
    return c;
    function c(y) {
      return t.enter("codeText"), t.enter("codeTextSequence"), f(y);
    }
    function f(y) {
      return y === 96 ? (t.consume(y), l++, f) : (t.exit("codeTextSequence"), h(y));
    }
    function h(y) {
      return y === null ? i(y) : y === 32 ? (t.enter("space"), t.consume(y), t.exit("space"), h) : y === 96 ? (a = t.enter("codeTextSequence"), s = 0, g(y)) : xe(y) ? (t.enter("lineEnding"), t.consume(y), t.exit("lineEnding"), h) : (t.enter("codeTextData"), m(y));
    }
    function m(y) {
      return y === null || y === 32 || y === 96 || xe(y) ? (t.exit("codeTextData"), h(y)) : (t.consume(y), m);
    }
    function g(y) {
      return y === 96 ? (t.consume(y), s++, g) : s === l ? (t.exit("codeTextSequence"), t.exit("codeText"), r(y)) : (a.type = "codeTextData", m(y));
    }
  }
  class Yv {
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
      const s = i || 0;
      this.setCursor(Math.trunc(r));
      const a = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
      return l && Pi(this.left, l), a.reverse();
    }
    pop() {
      return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(r) {
      this.setCursor(Number.POSITIVE_INFINITY), this.left.push(r);
    }
    pushMany(r) {
      this.setCursor(Number.POSITIVE_INFINITY), Pi(this.left, r);
    }
    unshift(r) {
      this.setCursor(0), this.right.push(r);
    }
    unshiftMany(r) {
      this.setCursor(0), Pi(this.right, r.reverse());
    }
    setCursor(r) {
      if (!(r === this.left.length || r > this.left.length && this.right.length === 0 || r < 0 && this.left.length === 0)) if (r < this.left.length) {
        const i = this.left.splice(r, Number.POSITIVE_INFINITY);
        Pi(this.right, i.reverse());
      } else {
        const i = this.right.splice(this.left.length + this.right.length - r, Number.POSITIVE_INFINITY);
        Pi(this.left, i.reverse());
      }
    }
  }
  function Pi(t, r) {
    let i = 0;
    if (r.length < 1e4) t.push(...r);
    else for (; i < r.length; ) t.push(...r.slice(i, i + 1e4)), i += 1e4;
  }
  function yh(t) {
    const r = {};
    let i = -1, l, s, a, c, f, h, m;
    const g = new Yv(t);
    for (; ++i < g.length; ) {
      for (; i in r; ) i = r[i];
      if (l = g.get(i), i && l[1].type === "chunkFlow" && g.get(i - 1)[1].type === "listItemPrefix" && (h = l[1]._tokenizer.events, a = 0, a < h.length && h[a][1].type === "lineEndingBlank" && (a += 2), a < h.length && h[a][1].type === "content")) for (; ++a < h.length && h[a][1].type !== "content"; ) h[a][1].type === "chunkText" && (h[a][1]._isInFirstContentOfListItem = true, a++);
      if (l[0] === "enter") l[1].contentType && (Object.assign(r, Qv(g, i)), i = r[i], m = true);
      else if (l[1]._container) {
        for (a = i, s = void 0; a--; ) if (c = g.get(a), c[1].type === "lineEnding" || c[1].type === "lineEndingBlank") c[0] === "enter" && (s && (g.get(s)[1].type = "lineEndingBlank"), c[1].type = "lineEnding", s = a);
        else if (!(c[1].type === "linePrefix" || c[1].type === "listItemIndent")) break;
        s && (l[1].end = {
          ...g.get(s)[1].start
        }, f = g.slice(s, i), f.unshift(l), g.splice(s, i - s + 1, f));
      }
    }
    return rn(t, 0, Number.POSITIVE_INFINITY, g.slice(0)), !m;
  }
  function Qv(t, r) {
    const i = t.get(r)[1], l = t.get(r)[2];
    let s = r - 1;
    const a = [];
    let c = i._tokenizer;
    c || (c = l.parser[i.contentType](i.start), i._contentTypeTextTrailing && (c._contentTypeTextTrailing = true));
    const f = c.events, h = [], m = {};
    let g, y, v = -1, w = i, I = 0, N = 0;
    const D = [
      N
    ];
    for (; w; ) {
      for (; t.get(++s)[1] !== w; ) ;
      a.push(s), w._tokenizer || (g = l.sliceStream(w), w.next || g.push(null), y && c.defineSkip(w.start), w._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = true), c.write(g), w._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = void 0)), y = w, w = w.next;
    }
    for (w = i; ++v < f.length; ) f[v][0] === "exit" && f[v - 1][0] === "enter" && f[v][1].type === f[v - 1][1].type && f[v][1].start.line !== f[v][1].end.line && (N = v + 1, D.push(N), w._tokenizer = void 0, w.previous = void 0, w = w.next);
    for (c.events = [], w ? (w._tokenizer = void 0, w.previous = void 0) : D.pop(), v = D.length; v--; ) {
      const T = f.slice(D[v], D[v + 1]), M = a.pop();
      h.push([
        M,
        M + T.length - 1
      ]), t.splice(M, 2, T);
    }
    for (h.reverse(), v = -1; ++v < h.length; ) m[I + h[v][0]] = I + h[v][1], I += h[v][1] - h[v][0] - 1;
    return m;
  }
  const Kv = {
    resolve: Jv,
    tokenize: Zv
  }, Xv = {
    partial: true,
    tokenize: e1
  };
  function Jv(t) {
    return yh(t), t;
  }
  function Zv(t, r) {
    let i;
    return l;
    function l(f) {
      return t.enter("content"), i = t.enter("chunkContent", {
        contentType: "content"
      }), s(f);
    }
    function s(f) {
      return f === null ? a(f) : xe(f) ? t.check(Xv, c, a)(f) : (t.consume(f), s);
    }
    function a(f) {
      return t.exit("chunkContent"), t.exit("content"), r(f);
    }
    function c(f) {
      return t.consume(f), t.exit("chunkContent"), i.next = t.enter("chunkContent", {
        contentType: "content",
        previous: i
      }), i = i.next, s;
    }
  }
  function e1(t, r, i) {
    const l = this;
    return s;
    function s(c) {
      return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), ze(t, a, "linePrefix");
    }
    function a(c) {
      if (c === null || xe(c)) return i(c);
      const f = l.events[l.events.length - 1];
      return !l.parser.constructs.disable.null.includes("codeIndented") && f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], true).length >= 4 ? r(c) : t.interrupt(l.parser.constructs.flow, i, r)(c);
    }
  }
  function vh(t, r, i, l, s, a, c, f, h) {
    const m = h || Number.POSITIVE_INFINITY;
    let g = 0;
    return y;
    function y(T) {
      return T === 60 ? (t.enter(l), t.enter(s), t.enter(a), t.consume(T), t.exit(a), v) : T === null || T === 32 || T === 41 || zu(T) ? i(T) : (t.enter(l), t.enter(c), t.enter(f), t.enter("chunkString", {
        contentType: "string"
      }), N(T));
    }
    function v(T) {
      return T === 62 ? (t.enter(a), t.consume(T), t.exit(a), t.exit(s), t.exit(l), r) : (t.enter(f), t.enter("chunkString", {
        contentType: "string"
      }), w(T));
    }
    function w(T) {
      return T === 62 ? (t.exit("chunkString"), t.exit(f), v(T)) : T === null || T === 60 || xe(T) ? i(T) : (t.consume(T), T === 92 ? I : w);
    }
    function I(T) {
      return T === 60 || T === 62 || T === 92 ? (t.consume(T), w) : w(T);
    }
    function N(T) {
      return !g && (T === null || T === 41 || wt(T)) ? (t.exit("chunkString"), t.exit(f), t.exit(c), t.exit(l), r(T)) : g < m && T === 40 ? (t.consume(T), g++, N) : T === 41 ? (t.consume(T), g--, N) : T === null || T === 32 || T === 40 || zu(T) ? i(T) : (t.consume(T), T === 92 ? D : N);
    }
    function D(T) {
      return T === 40 || T === 41 || T === 92 ? (t.consume(T), N) : N(T);
    }
  }
  function wh(t, r, i, l, s, a) {
    const c = this;
    let f = 0, h;
    return m;
    function m(w) {
      return t.enter(l), t.enter(s), t.consume(w), t.exit(s), t.enter(a), g;
    }
    function g(w) {
      return f > 999 || w === null || w === 91 || w === 93 && !h || w === 94 && !f && "_hiddenFootnoteSupport" in c.parser.constructs ? i(w) : w === 93 ? (t.exit(a), t.enter(s), t.consume(w), t.exit(s), t.exit(l), r) : xe(w) ? (t.enter("lineEnding"), t.consume(w), t.exit("lineEnding"), g) : (t.enter("chunkString", {
        contentType: "string"
      }), y(w));
    }
    function y(w) {
      return w === null || w === 91 || w === 93 || xe(w) || f++ > 999 ? (t.exit("chunkString"), g(w)) : (t.consume(w), h || (h = !Re(w)), w === 92 ? v : y);
    }
    function v(w) {
      return w === 91 || w === 92 || w === 93 ? (t.consume(w), f++, y) : y(w);
    }
  }
  function xh(t, r, i, l, s, a) {
    let c;
    return f;
    function f(v) {
      return v === 34 || v === 39 || v === 40 ? (t.enter(l), t.enter(s), t.consume(v), t.exit(s), c = v === 40 ? 41 : v, h) : i(v);
    }
    function h(v) {
      return v === c ? (t.enter(s), t.consume(v), t.exit(s), t.exit(l), r) : (t.enter(a), m(v));
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
  function Oi(t, r) {
    let i;
    return l;
    function l(s) {
      return xe(s) ? (t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), i = true, l) : Re(s) ? ze(t, l, i ? "linePrefix" : "lineSuffix")(s) : r(s);
    }
  }
  const t1 = {
    name: "definition",
    tokenize: r1
  }, n1 = {
    partial: true,
    tokenize: i1
  };
  function r1(t, r, i) {
    const l = this;
    let s;
    return a;
    function a(w) {
      return t.enter("definition"), c(w);
    }
    function c(w) {
      return wh.call(l, t, f, i, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(w);
    }
    function f(w) {
      return s = zr(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)), w === 58 ? (t.enter("definitionMarker"), t.consume(w), t.exit("definitionMarker"), h) : i(w);
    }
    function h(w) {
      return wt(w) ? Oi(t, m)(w) : m(w);
    }
    function m(w) {
      return vh(t, g, i, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(w);
    }
    function g(w) {
      return t.attempt(n1, y, y)(w);
    }
    function y(w) {
      return Re(w) ? ze(t, v, "whitespace")(w) : v(w);
    }
    function v(w) {
      return w === null || xe(w) ? (t.exit("definition"), l.parser.defined.push(s), r(w)) : i(w);
    }
  }
  function i1(t, r, i) {
    return l;
    function l(f) {
      return wt(f) ? Oi(t, s)(f) : i(f);
    }
    function s(f) {
      return xh(t, a, i, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(f);
    }
    function a(f) {
      return Re(f) ? ze(t, c, "whitespace")(f) : c(f);
    }
    function c(f) {
      return f === null || xe(f) ? r(f) : i(f);
    }
  }
  const o1 = {
    name: "hardBreakEscape",
    tokenize: l1
  };
  function l1(t, r, i) {
    return l;
    function l(a) {
      return t.enter("hardBreakEscape"), t.consume(a), s;
    }
    function s(a) {
      return xe(a) ? (t.exit("hardBreakEscape"), r(a)) : i(a);
    }
  }
  const s1 = {
    name: "headingAtx",
    resolve: u1,
    tokenize: a1
  };
  function u1(t, r) {
    let i = t.length - 2, l = 3, s, a;
    return t[l][1].type === "whitespace" && (l += 2), i - 2 > l && t[i][1].type === "whitespace" && (i -= 2), t[i][1].type === "atxHeadingSequence" && (l === i - 1 || i - 4 > l && t[i - 2][1].type === "whitespace") && (i -= l + 1 === i ? 2 : 4), i > l && (s = {
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
        s,
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
        s,
        r
      ]
    ])), t;
  }
  function a1(t, r, i) {
    let l = 0;
    return s;
    function s(g) {
      return t.enter("atxHeading"), a(g);
    }
    function a(g) {
      return t.enter("atxHeadingSequence"), c(g);
    }
    function c(g) {
      return g === 35 && l++ < 6 ? (t.consume(g), c) : g === null || wt(g) ? (t.exit("atxHeadingSequence"), f(g)) : i(g);
    }
    function f(g) {
      return g === 35 ? (t.enter("atxHeadingSequence"), h(g)) : g === null || xe(g) ? (t.exit("atxHeading"), r(g)) : Re(g) ? ze(t, f, "whitespace")(g) : (t.enter("atxHeadingText"), m(g));
    }
    function h(g) {
      return g === 35 ? (t.consume(g), h) : (t.exit("atxHeadingSequence"), f(g));
    }
    function m(g) {
      return g === null || g === 35 || wt(g) ? (t.exit("atxHeadingText"), f(g)) : (t.consume(g), m);
    }
  }
  const c1 = [
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
  ], Vd = [
    "pre",
    "script",
    "style",
    "textarea"
  ], f1 = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: h1,
    tokenize: m1
  }, d1 = {
    partial: true,
    tokenize: y1
  }, p1 = {
    partial: true,
    tokenize: g1
  };
  function h1(t) {
    let r = t.length;
    for (; r-- && !(t[r][0] === "enter" && t[r][1].type === "htmlFlow"); ) ;
    return r > 1 && t[r - 2][1].type === "linePrefix" && (t[r][1].start = t[r - 2][1].start, t[r + 1][1].start = t[r - 2][1].start, t.splice(r - 2, 2)), t;
  }
  function m1(t, r, i) {
    const l = this;
    let s, a, c, f, h;
    return m;
    function m(S) {
      return g(S);
    }
    function g(S) {
      return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(S), y;
    }
    function y(S) {
      return S === 33 ? (t.consume(S), v) : S === 47 ? (t.consume(S), a = true, N) : S === 63 ? (t.consume(S), s = 3, l.interrupt ? r : k) : nn(S) ? (t.consume(S), c = String.fromCharCode(S), D) : i(S);
    }
    function v(S) {
      return S === 45 ? (t.consume(S), s = 2, w) : S === 91 ? (t.consume(S), s = 5, f = 0, I) : nn(S) ? (t.consume(S), s = 4, l.interrupt ? r : k) : i(S);
    }
    function w(S) {
      return S === 45 ? (t.consume(S), l.interrupt ? r : k) : i(S);
    }
    function I(S) {
      const oe = "CDATA[";
      return S === oe.charCodeAt(f++) ? (t.consume(S), f === oe.length ? l.interrupt ? r : ne : I) : i(S);
    }
    function N(S) {
      return nn(S) ? (t.consume(S), c = String.fromCharCode(S), D) : i(S);
    }
    function D(S) {
      if (S === null || S === 47 || S === 62 || wt(S)) {
        const oe = S === 47, ce = c.toLowerCase();
        return !oe && !a && Vd.includes(ce) ? (s = 1, l.interrupt ? r(S) : ne(S)) : c1.includes(c.toLowerCase()) ? (s = 6, oe ? (t.consume(S), T) : l.interrupt ? r(S) : ne(S)) : (s = 7, l.interrupt && !l.parser.lazy[l.now().line] ? i(S) : a ? M(S) : L(S));
      }
      return S === 45 || Dt(S) ? (t.consume(S), c += String.fromCharCode(S), D) : i(S);
    }
    function T(S) {
      return S === 62 ? (t.consume(S), l.interrupt ? r : ne) : i(S);
    }
    function M(S) {
      return Re(S) ? (t.consume(S), M) : me(S);
    }
    function L(S) {
      return S === 47 ? (t.consume(S), me) : S === 58 || S === 95 || nn(S) ? (t.consume(S), V) : Re(S) ? (t.consume(S), L) : me(S);
    }
    function V(S) {
      return S === 45 || S === 46 || S === 58 || S === 95 || Dt(S) ? (t.consume(S), V) : Z(S);
    }
    function Z(S) {
      return S === 61 ? (t.consume(S), O) : Re(S) ? (t.consume(S), Z) : L(S);
    }
    function O(S) {
      return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? i(S) : S === 34 || S === 39 ? (t.consume(S), h = S, ee) : Re(S) ? (t.consume(S), O) : re(S);
    }
    function ee(S) {
      return S === h ? (t.consume(S), h = null, se) : S === null || xe(S) ? i(S) : (t.consume(S), ee);
    }
    function re(S) {
      return S === null || S === 34 || S === 39 || S === 47 || S === 60 || S === 61 || S === 62 || S === 96 || wt(S) ? Z(S) : (t.consume(S), re);
    }
    function se(S) {
      return S === 47 || S === 62 || Re(S) ? L(S) : i(S);
    }
    function me(S) {
      return S === 62 ? (t.consume(S), X) : i(S);
    }
    function X(S) {
      return S === null || xe(S) ? ne(S) : Re(S) ? (t.consume(S), X) : i(S);
    }
    function ne(S) {
      return S === 45 && s === 2 ? (t.consume(S), ie) : S === 60 && s === 1 ? (t.consume(S), K) : S === 62 && s === 4 ? (t.consume(S), _) : S === 63 && s === 3 ? (t.consume(S), k) : S === 93 && s === 5 ? (t.consume(S), G) : xe(S) && (s === 6 || s === 7) ? (t.exit("htmlFlowData"), t.check(d1, b, q)(S)) : S === null || xe(S) ? (t.exit("htmlFlowData"), q(S)) : (t.consume(S), ne);
    }
    function q(S) {
      return t.check(p1, te, b)(S);
    }
    function te(S) {
      return t.enter("lineEnding"), t.consume(S), t.exit("lineEnding"), U;
    }
    function U(S) {
      return S === null || xe(S) ? q(S) : (t.enter("htmlFlowData"), ne(S));
    }
    function ie(S) {
      return S === 45 ? (t.consume(S), k) : ne(S);
    }
    function K(S) {
      return S === 47 ? (t.consume(S), c = "", B) : ne(S);
    }
    function B(S) {
      if (S === 62) {
        const oe = c.toLowerCase();
        return Vd.includes(oe) ? (t.consume(S), _) : ne(S);
      }
      return nn(S) && c.length < 8 ? (t.consume(S), c += String.fromCharCode(S), B) : ne(S);
    }
    function G(S) {
      return S === 93 ? (t.consume(S), k) : ne(S);
    }
    function k(S) {
      return S === 62 ? (t.consume(S), _) : S === 45 && s === 2 ? (t.consume(S), k) : ne(S);
    }
    function _(S) {
      return S === null || xe(S) ? (t.exit("htmlFlowData"), b(S)) : (t.consume(S), _);
    }
    function b(S) {
      return t.exit("htmlFlow"), r(S);
    }
  }
  function g1(t, r, i) {
    const l = this;
    return s;
    function s(c) {
      return xe(c) ? (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), a) : i(c);
    }
    function a(c) {
      return l.parser.lazy[l.now().line] ? i(c) : r(c);
    }
  }
  function y1(t, r, i) {
    return l;
    function l(s) {
      return t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), t.attempt(yl, r, i);
    }
  }
  const v1 = {
    name: "htmlText",
    tokenize: w1
  };
  function w1(t, r, i) {
    const l = this;
    let s, a, c;
    return f;
    function f(k) {
      return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(k), h;
    }
    function h(k) {
      return k === 33 ? (t.consume(k), m) : k === 47 ? (t.consume(k), Z) : k === 63 ? (t.consume(k), L) : nn(k) ? (t.consume(k), re) : i(k);
    }
    function m(k) {
      return k === 45 ? (t.consume(k), g) : k === 91 ? (t.consume(k), a = 0, I) : nn(k) ? (t.consume(k), M) : i(k);
    }
    function g(k) {
      return k === 45 ? (t.consume(k), w) : i(k);
    }
    function y(k) {
      return k === null ? i(k) : k === 45 ? (t.consume(k), v) : xe(k) ? (c = y, K(k)) : (t.consume(k), y);
    }
    function v(k) {
      return k === 45 ? (t.consume(k), w) : y(k);
    }
    function w(k) {
      return k === 62 ? ie(k) : k === 45 ? v(k) : y(k);
    }
    function I(k) {
      const _ = "CDATA[";
      return k === _.charCodeAt(a++) ? (t.consume(k), a === _.length ? N : I) : i(k);
    }
    function N(k) {
      return k === null ? i(k) : k === 93 ? (t.consume(k), D) : xe(k) ? (c = N, K(k)) : (t.consume(k), N);
    }
    function D(k) {
      return k === 93 ? (t.consume(k), T) : N(k);
    }
    function T(k) {
      return k === 62 ? ie(k) : k === 93 ? (t.consume(k), T) : N(k);
    }
    function M(k) {
      return k === null || k === 62 ? ie(k) : xe(k) ? (c = M, K(k)) : (t.consume(k), M);
    }
    function L(k) {
      return k === null ? i(k) : k === 63 ? (t.consume(k), V) : xe(k) ? (c = L, K(k)) : (t.consume(k), L);
    }
    function V(k) {
      return k === 62 ? ie(k) : L(k);
    }
    function Z(k) {
      return nn(k) ? (t.consume(k), O) : i(k);
    }
    function O(k) {
      return k === 45 || Dt(k) ? (t.consume(k), O) : ee(k);
    }
    function ee(k) {
      return xe(k) ? (c = ee, K(k)) : Re(k) ? (t.consume(k), ee) : ie(k);
    }
    function re(k) {
      return k === 45 || Dt(k) ? (t.consume(k), re) : k === 47 || k === 62 || wt(k) ? se(k) : i(k);
    }
    function se(k) {
      return k === 47 ? (t.consume(k), ie) : k === 58 || k === 95 || nn(k) ? (t.consume(k), me) : xe(k) ? (c = se, K(k)) : Re(k) ? (t.consume(k), se) : ie(k);
    }
    function me(k) {
      return k === 45 || k === 46 || k === 58 || k === 95 || Dt(k) ? (t.consume(k), me) : X(k);
    }
    function X(k) {
      return k === 61 ? (t.consume(k), ne) : xe(k) ? (c = X, K(k)) : Re(k) ? (t.consume(k), X) : se(k);
    }
    function ne(k) {
      return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? i(k) : k === 34 || k === 39 ? (t.consume(k), s = k, q) : xe(k) ? (c = ne, K(k)) : Re(k) ? (t.consume(k), ne) : (t.consume(k), te);
    }
    function q(k) {
      return k === s ? (t.consume(k), s = void 0, U) : k === null ? i(k) : xe(k) ? (c = q, K(k)) : (t.consume(k), q);
    }
    function te(k) {
      return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? i(k) : k === 47 || k === 62 || wt(k) ? se(k) : (t.consume(k), te);
    }
    function U(k) {
      return k === 47 || k === 62 || wt(k) ? se(k) : i(k);
    }
    function ie(k) {
      return k === 62 ? (t.consume(k), t.exit("htmlTextData"), t.exit("htmlText"), r) : i(k);
    }
    function K(k) {
      return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(k), t.exit("lineEnding"), B;
    }
    function B(k) {
      return Re(k) ? ze(t, G, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(k) : G(k);
    }
    function G(k) {
      return t.enter("htmlTextData"), c(k);
    }
  }
  const la = {
    name: "labelEnd",
    resolveAll: E1,
    resolveTo: I1,
    tokenize: C1
  }, x1 = {
    tokenize: T1
  }, k1 = {
    tokenize: _1
  }, S1 = {
    tokenize: P1
  };
  function E1(t) {
    let r = -1;
    const i = [];
    for (; ++r < t.length; ) {
      const l = t[r][1];
      if (i.push(t[r]), l.type === "labelImage" || l.type === "labelLink" || l.type === "labelEnd") {
        const s = l.type === "labelImage" ? 4 : 2;
        l.type = "data", r += s;
      }
    }
    return t.length !== i.length && rn(t, 0, t.length, i), t;
  }
  function I1(t, r) {
    let i = t.length, l = 0, s, a, c, f;
    for (; i--; ) if (s = t[i][1], a) {
      if (s.type === "link" || s.type === "labelLink" && s._inactive) break;
      t[i][0] === "enter" && s.type === "labelLink" && (s._inactive = true);
    } else if (c) {
      if (t[i][0] === "enter" && (s.type === "labelImage" || s.type === "labelLink") && !s._balanced && (a = i, s.type !== "labelLink")) {
        l = 2;
        break;
      }
    } else s.type === "labelEnd" && (c = i);
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
    ]), f = jt(f, oa(r.parser.constructs.insideSpan.null, t.slice(a + l + 4, c - 3), r)), f = jt(f, [
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
  function C1(t, r, i) {
    const l = this;
    let s = l.events.length, a, c;
    for (; s--; ) if ((l.events[s][1].type === "labelImage" || l.events[s][1].type === "labelLink") && !l.events[s][1]._balanced) {
      a = l.events[s][1];
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
      return v === 40 ? t.attempt(x1, g, c ? g : y)(v) : v === 91 ? t.attempt(k1, g, c ? m : y)(v) : c ? g(v) : y(v);
    }
    function m(v) {
      return t.attempt(S1, g, y)(v);
    }
    function g(v) {
      return r(v);
    }
    function y(v) {
      return a._balanced = true, i(v);
    }
  }
  function T1(t, r, i) {
    return l;
    function l(y) {
      return t.enter("resource"), t.enter("resourceMarker"), t.consume(y), t.exit("resourceMarker"), s;
    }
    function s(y) {
      return wt(y) ? Oi(t, a)(y) : a(y);
    }
    function a(y) {
      return y === 41 ? g(y) : vh(t, c, f, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y);
    }
    function c(y) {
      return wt(y) ? Oi(t, h)(y) : g(y);
    }
    function f(y) {
      return i(y);
    }
    function h(y) {
      return y === 34 || y === 39 || y === 40 ? xh(t, m, i, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : g(y);
    }
    function m(y) {
      return wt(y) ? Oi(t, g)(y) : g(y);
    }
    function g(y) {
      return y === 41 ? (t.enter("resourceMarker"), t.consume(y), t.exit("resourceMarker"), t.exit("resource"), r) : i(y);
    }
  }
  function _1(t, r, i) {
    const l = this;
    return s;
    function s(f) {
      return wh.call(l, t, a, c, "reference", "referenceMarker", "referenceString")(f);
    }
    function a(f) {
      return l.parser.defined.includes(zr(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1))) ? r(f) : i(f);
    }
    function c(f) {
      return i(f);
    }
  }
  function P1(t, r, i) {
    return l;
    function l(a) {
      return t.enter("reference"), t.enter("referenceMarker"), t.consume(a), t.exit("referenceMarker"), s;
    }
    function s(a) {
      return a === 93 ? (t.enter("referenceMarker"), t.consume(a), t.exit("referenceMarker"), t.exit("reference"), r) : i(a);
    }
  }
  const N1 = {
    name: "labelStartImage",
    resolveAll: la.resolveAll,
    tokenize: D1
  };
  function D1(t, r, i) {
    const l = this;
    return s;
    function s(f) {
      return t.enter("labelImage"), t.enter("labelImageMarker"), t.consume(f), t.exit("labelImageMarker"), a;
    }
    function a(f) {
      return f === 91 ? (t.enter("labelMarker"), t.consume(f), t.exit("labelMarker"), t.exit("labelImage"), c) : i(f);
    }
    function c(f) {
      return f === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? i(f) : r(f);
    }
  }
  const R1 = {
    name: "labelStartLink",
    resolveAll: la.resolveAll,
    tokenize: A1
  };
  function A1(t, r, i) {
    const l = this;
    return s;
    function s(c) {
      return t.enter("labelLink"), t.enter("labelMarker"), t.consume(c), t.exit("labelMarker"), t.exit("labelLink"), a;
    }
    function a(c) {
      return c === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? i(c) : r(c);
    }
  }
  const wu = {
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
    tokenize: L1
  };
  function L1(t, r, i) {
    let l = 0, s;
    return a;
    function a(m) {
      return t.enter("thematicBreak"), c(m);
    }
    function c(m) {
      return s = m, f(m);
    }
    function f(m) {
      return m === s ? (t.enter("thematicBreakSequence"), h(m)) : l >= 3 && (m === null || xe(m)) ? (t.exit("thematicBreak"), r(m)) : i(m);
    }
    function h(m) {
      return m === s ? (t.consume(m), l++, h) : (t.exit("thematicBreakSequence"), Re(m) ? ze(t, f, "whitespace")(m) : f(m));
    }
  }
  const vt = {
    continuation: {
      tokenize: F1
    },
    exit: B1,
    name: "list",
    tokenize: b1
  }, z1 = {
    partial: true,
    tokenize: U1
  }, M1 = {
    partial: true,
    tokenize: j1
  };
  function b1(t, r, i) {
    const l = this, s = l.events[l.events.length - 1];
    let a = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], true).length : 0, c = 0;
    return f;
    function f(w) {
      const I = l.containerState.type || (w === 42 || w === 43 || w === 45 ? "listUnordered" : "listOrdered");
      if (I === "listUnordered" ? !l.containerState.marker || w === l.containerState.marker : Mu(w)) {
        if (l.containerState.type || (l.containerState.type = I, t.enter(I, {
          _container: true
        })), I === "listUnordered") return t.enter("listItemPrefix"), w === 42 || w === 45 ? t.check(ol, i, m)(w) : m(w);
        if (!l.interrupt || w === 49) return t.enter("listItemPrefix"), t.enter("listItemValue"), h(w);
      }
      return i(w);
    }
    function h(w) {
      return Mu(w) && ++c < 10 ? (t.consume(w), h) : (!l.interrupt || c < 2) && (l.containerState.marker ? w === l.containerState.marker : w === 41 || w === 46) ? (t.exit("listItemValue"), m(w)) : i(w);
    }
    function m(w) {
      return t.enter("listItemMarker"), t.consume(w), t.exit("listItemMarker"), l.containerState.marker = l.containerState.marker || w, t.check(yl, l.interrupt ? i : g, t.attempt(z1, v, y));
    }
    function g(w) {
      return l.containerState.initialBlankLine = true, a++, v(w);
    }
    function y(w) {
      return Re(w) ? (t.enter("listItemPrefixWhitespace"), t.consume(w), t.exit("listItemPrefixWhitespace"), v) : i(w);
    }
    function v(w) {
      return l.containerState.size = a + l.sliceSerialize(t.exit("listItemPrefix"), true).length, r(w);
    }
  }
  function F1(t, r, i) {
    const l = this;
    return l.containerState._closeFlow = void 0, t.check(yl, s, a);
    function s(f) {
      return l.containerState.furtherBlankLines = l.containerState.furtherBlankLines || l.containerState.initialBlankLine, ze(t, r, "listItemIndent", l.containerState.size + 1)(f);
    }
    function a(f) {
      return l.containerState.furtherBlankLines || !Re(f) ? (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, c(f)) : (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, t.attempt(M1, r, c)(f));
    }
    function c(f) {
      return l.containerState._closeFlow = true, l.interrupt = void 0, ze(t, t.attempt(vt, r, i), "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(f);
    }
  }
  function j1(t, r, i) {
    const l = this;
    return ze(t, s, "listItemIndent", l.containerState.size + 1);
    function s(a) {
      const c = l.events[l.events.length - 1];
      return c && c[1].type === "listItemIndent" && c[2].sliceSerialize(c[1], true).length === l.containerState.size ? r(a) : i(a);
    }
  }
  function B1(t) {
    t.exit(this.containerState.type);
  }
  function U1(t, r, i) {
    const l = this;
    return ze(t, s, "listItemPrefixWhitespace", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function s(a) {
      const c = l.events[l.events.length - 1];
      return !Re(a) && c && c[1].type === "listItemPrefixWhitespace" ? r(a) : i(a);
    }
  }
  const Wd = {
    name: "setextUnderline",
    resolveTo: V1,
    tokenize: W1
  };
  function V1(t, r) {
    let i = t.length, l, s, a;
    for (; i--; ) if (t[i][0] === "enter") {
      if (t[i][1].type === "content") {
        l = i;
        break;
      }
      t[i][1].type === "paragraph" && (s = i);
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
    return t[s][1].type = "setextHeadingText", a ? (t.splice(s, 0, [
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
  function W1(t, r, i) {
    const l = this;
    let s;
    return a;
    function a(m) {
      let g = l.events.length, y;
      for (; g--; ) if (l.events[g][1].type !== "lineEnding" && l.events[g][1].type !== "linePrefix" && l.events[g][1].type !== "content") {
        y = l.events[g][1].type === "paragraph";
        break;
      }
      return !l.parser.lazy[l.now().line] && (l.interrupt || y) ? (t.enter("setextHeadingLine"), s = m, c(m)) : i(m);
    }
    function c(m) {
      return t.enter("setextHeadingLineSequence"), f(m);
    }
    function f(m) {
      return m === s ? (t.consume(m), f) : (t.exit("setextHeadingLineSequence"), Re(m) ? ze(t, h, "lineSuffix")(m) : h(m));
    }
    function h(m) {
      return m === null || xe(m) ? (t.exit("setextHeadingLine"), r(m)) : i(m);
    }
  }
  const H1 = {
    tokenize: $1
  };
  function $1(t) {
    const r = this, i = t.attempt(yl, l, t.attempt(this.parser.constructs.flowInitial, s, ze(t, t.attempt(this.parser.constructs.flow, s, t.attempt(Kv, s)), "linePrefix")));
    return i;
    function l(a) {
      if (a === null) {
        t.consume(a);
        return;
      }
      return t.enter("lineEndingBlank"), t.consume(a), t.exit("lineEndingBlank"), r.currentConstruct = void 0, i;
    }
    function s(a) {
      if (a === null) {
        t.consume(a);
        return;
      }
      return t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), r.currentConstruct = void 0, i;
    }
  }
  const q1 = {
    resolveAll: Sh()
  }, G1 = kh("string"), Y1 = kh("text");
  function kh(t) {
    return {
      resolveAll: Sh(t === "text" ? Q1 : void 0),
      tokenize: r
    };
    function r(i) {
      const l = this, s = this.parser.constructs[t], a = i.attempt(s, c, f);
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
        const y = s[g];
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
      let s = -1, a;
      for (; ++s <= i.length; ) a === void 0 ? i[s] && i[s][1].type === "data" && (a = s, s++) : (!i[s] || i[s][1].type !== "data") && (s !== a + 2 && (i[a][1].end = i[s - 1][1].end, i.splice(a + 2, s - a - 2), s = a + 2), a = void 0);
      return t ? t(i, l) : i;
    }
  }
  function Q1(t, r) {
    let i = 0;
    for (; ++i <= t.length; ) if ((i === t.length || t[i][1].type === "lineEnding") && t[i - 1][1].type === "data") {
      const l = t[i - 1][1], s = r.sliceStream(l);
      let a = s.length, c = -1, f = 0, h;
      for (; a--; ) {
        const m = s[a];
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
  const K1 = {
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
  }, X1 = {
    91: t1
  }, J1 = {
    [-2]: vu,
    [-1]: vu,
    32: vu
  }, Z1 = {
    35: s1,
    42: ol,
    45: [
      Wd,
      ol
    ],
    60: f1,
    61: Wd,
    95: ol,
    96: Ud,
    126: Ud
  }, ew = {
    38: gh,
    92: mh
  }, tw = {
    [-5]: wu,
    [-4]: wu,
    [-3]: wu,
    33: N1,
    38: gh,
    42: bu,
    60: [
      Rv,
      v1
    ],
    91: R1,
    92: [
      o1,
      mh
    ],
    93: la,
    95: bu,
    96: Hv
  }, nw = {
    null: [
      bu,
      q1
    ]
  }, rw = {
    null: [
      42,
      95
    ]
  }, iw = {
    null: []
  }, ow = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers: rw,
    contentInitial: X1,
    disable: iw,
    document: K1,
    flow: Z1,
    flowInitial: J1,
    insideSpan: nw,
    string: ew,
    text: tw
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function lw(t, r, i) {
    let l = {
      _bufferIndex: -1,
      _index: 0,
      line: i && i.line || 1,
      column: i && i.column || 1,
      offset: i && i.offset || 0
    };
    const s = {}, a = [];
    let c = [], f = [];
    const h = {
      attempt: ee(Z),
      check: ee(O),
      consume: M,
      enter: L,
      exit: V,
      interrupt: ee(O, {
        interrupt: true
      })
    }, m = {
      code: null,
      containerState: {},
      defineSkip: N,
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
    function y(X) {
      return c = jt(c, X), D(), c[c.length - 1] !== null ? [] : (re(r, 0), m.events = oa(a, m.events, m), m.events);
    }
    function v(X, ne) {
      return uw(w(X), ne);
    }
    function w(X) {
      return sw(c, X);
    }
    function I() {
      const { _bufferIndex: X, _index: ne, line: q, column: te, offset: U } = l;
      return {
        _bufferIndex: X,
        _index: ne,
        line: q,
        column: te,
        offset: U
      };
    }
    function N(X) {
      s[X.line] = X.column, me();
    }
    function D() {
      let X;
      for (; l._index < c.length; ) {
        const ne = c[l._index];
        if (typeof ne == "string") for (X = l._index, l._bufferIndex < 0 && (l._bufferIndex = 0); l._index === X && l._bufferIndex < ne.length; ) T(ne.charCodeAt(l._bufferIndex));
        else T(ne);
      }
    }
    function T(X) {
      g = g(X);
    }
    function M(X) {
      xe(X) ? (l.line++, l.column = 1, l.offset += X === -3 ? 2 : 1, me()) : X !== -1 && (l.column++, l.offset++), l._bufferIndex < 0 ? l._index++ : (l._bufferIndex++, l._bufferIndex === c[l._index].length && (l._bufferIndex = -1, l._index++)), m.previous = X;
    }
    function L(X, ne) {
      const q = ne || {};
      return q.type = X, q.start = I(), m.events.push([
        "enter",
        q,
        m
      ]), f.push(q), q;
    }
    function V(X) {
      const ne = f.pop();
      return ne.end = I(), m.events.push([
        "exit",
        ne,
        m
      ]), ne;
    }
    function Z(X, ne) {
      re(X, ne.from);
    }
    function O(X, ne) {
      ne.restore();
    }
    function ee(X, ne) {
      return q;
      function q(te, U, ie) {
        let K, B, G, k;
        return Array.isArray(te) ? b(te) : "tokenize" in te ? b([
          te
        ]) : _(te);
        function _(de) {
          return Ce;
          function Ce(ke) {
            const Te = ke !== null && de[ke], We = ke !== null && de.null, Rt = [
              ...Array.isArray(Te) ? Te : Te ? [
                Te
              ] : [],
              ...Array.isArray(We) ? We : We ? [
                We
              ] : []
            ];
            return b(Rt)(ke);
          }
        }
        function b(de) {
          return K = de, B = 0, de.length === 0 ? ie : S(de[B]);
        }
        function S(de) {
          return Ce;
          function Ce(ke) {
            return k = se(), G = de, de.partial || (m.currentConstruct = de), de.name && m.parser.constructs.disable.null.includes(de.name) ? ce() : de.tokenize.call(ne ? Object.assign(Object.create(m), ne) : m, h, oe, ce)(ke);
          }
        }
        function oe(de) {
          return X(G, k), U;
        }
        function ce(de) {
          return k.restore(), ++B < K.length ? S(K[B]) : ie;
        }
      }
    }
    function re(X, ne) {
      X.resolveAll && !a.includes(X) && a.push(X), X.resolve && rn(m.events, ne, m.events.length - ne, X.resolve(m.events.slice(ne), m)), X.resolveTo && (m.events = X.resolveTo(m.events, m));
    }
    function se() {
      const X = I(), ne = m.previous, q = m.currentConstruct, te = m.events.length, U = Array.from(f);
      return {
        from: te,
        restore: ie
      };
      function ie() {
        l = X, m.previous = ne, m.currentConstruct = q, m.events.length = te, f = U, me();
      }
    }
    function me() {
      l.line in s && l.column < 2 && (l.column = s[l.line], l.offset += s[l.line] - 1);
    }
  }
  function sw(t, r) {
    const i = r.start._index, l = r.start._bufferIndex, s = r.end._index, a = r.end._bufferIndex;
    let c;
    if (i === s) c = [
      t[i].slice(l, a)
    ];
    else {
      if (c = t.slice(i, s), l > -1) {
        const f = c[0];
        typeof f == "string" ? c[0] = f.slice(l) : c.shift();
      }
      a > 0 && c.push(t[s].slice(0, a));
    }
    return c;
  }
  function uw(t, r) {
    let i = -1;
    const l = [];
    let s;
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
          if (!r && s) continue;
          c = " ";
          break;
        }
        default:
          c = String.fromCharCode(a);
      }
      s = a === -2, l.push(c);
    }
    return l.join("");
  }
  function aw(t) {
    const l = {
      constructs: gv([
        ow,
        ...(t || {}).extensions || []
      ]),
      content: s(Iv),
      defined: [],
      document: s(Tv),
      flow: s(H1),
      lazy: {},
      string: s(G1),
      text: s(Y1)
    };
    return l;
    function s(a) {
      return c;
      function c(f) {
        return lw(l, a, f);
      }
    }
  }
  function cw(t) {
    for (; !yh(t); ) ;
    return t;
  }
  const Hd = /[\0\t\n\r]/g;
  function fw() {
    let t = 1, r = "", i = true, l;
    return s;
    function s(a, c, f) {
      const h = [];
      let m, g, y, v, w;
      for (a = r + (typeof a == "string" ? a.toString() : new TextDecoder(c || void 0).decode(a)), y = 0, r = "", i && (a.charCodeAt(0) === 65279 && y++, i = void 0); y < a.length; ) {
        if (Hd.lastIndex = y, m = Hd.exec(a), v = m && m.index !== void 0 ? m.index : a.length, w = a.charCodeAt(v), !m) {
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
  const dw = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function pw(t) {
    return t.replace(dw, hw);
  }
  function hw(t, r, i) {
    if (r) return r;
    if (i.charCodeAt(0) === 35) {
      const s = i.charCodeAt(1), a = s === 120 || s === 88;
      return ph(i.slice(a ? 2 : 1), a ? 16 : 10);
    }
    return ia(i) || t;
  }
  const Eh = {}.hasOwnProperty;
  function mw(t, r, i) {
    return r && typeof r == "object" && (i = r, r = void 0), gw(i)(cw(aw(i).document().write(fw()(t, r, true))));
  }
  function gw(t) {
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
        autolinkProtocol: se,
        autolinkEmail: se,
        atxHeading: a(Br),
        blockQuote: a(We),
        characterEscape: se,
        characterReference: se,
        codeFenced: a(Rt),
        codeFencedFenceInfo: c,
        codeFencedFenceMeta: c,
        codeIndented: a(Rt, c),
        codeText: a(Vn, c),
        codeTextData: se,
        data: se,
        codeFlowValue: se,
        definition: a(ln),
        definitionDestinationString: c,
        definitionLabelString: c,
        definitionTitleString: c,
        emphasis: a(jr),
        hardBreakEscape: a(Ur),
        hardBreakTrailing: a(Ur),
        htmlFlow: a(ir, c),
        htmlFlowData: se,
        htmlText: a(ir, c),
        htmlTextData: se,
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
        thematicBreak: a(Hi)
      },
      exit: {
        atxHeading: h(),
        atxHeadingSequence: Z,
        autolink: h(),
        autolinkEmail: Te,
        autolinkProtocol: ke,
        blockQuote: h(),
        characterEscapeValue: me,
        characterReferenceMarkerHexadecimal: ce,
        characterReferenceMarkerNumeric: ce,
        characterReferenceValue: de,
        characterReference: Ce,
        codeFenced: h(D),
        codeFencedFence: N,
        codeFencedFenceInfo: w,
        codeFencedFenceMeta: I,
        codeFlowValue: me,
        codeIndented: h(T),
        codeText: h(U),
        codeTextData: me,
        data: me,
        definition: h(),
        definitionDestinationString: V,
        definitionLabelString: M,
        definitionTitleString: L,
        emphasis: h(),
        hardBreakEscape: h(ne),
        hardBreakTrailing: h(ne),
        htmlFlow: h(q),
        htmlFlowData: me,
        htmlText: h(te),
        htmlTextData: me,
        image: h(K),
        label: G,
        labelText: B,
        lineEnding: X,
        link: h(ie),
        listItem: h(),
        listOrdered: h(),
        listUnordered: h(),
        paragraph: h(),
        referenceString: oe,
        resourceDestinationString: k,
        resourceTitleString: _,
        resource: b,
        setextHeading: h(re),
        setextHeadingLineSequence: ee,
        setextHeadingText: O,
        strong: h(),
        thematicBreak: h()
      }
    };
    Ih(r, (t || {}).mdastExtensions || []);
    const i = {};
    return l;
    function l(F) {
      let J = {
        type: "root",
        children: []
      };
      const ve = {
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
        const tt = Ee.pop();
        _e = s(F, tt, _e);
      }
      for (_e = -1; ++_e < F.length; ) {
        const tt = r[F[_e][0]];
        Eh.call(tt, F[_e][1].type) && tt[F[_e][1].type].call(Object.assign({
          sliceSerialize: F[_e][2].sliceSerialize
        }, ve), F[_e][1]);
      }
      if (ve.tokenStack.length > 0) {
        const tt = ve.tokenStack[ve.tokenStack.length - 1];
        (tt[1] || $d).call(ve, void 0, tt[0]);
      }
      for (J.position = {
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
      }, _e = -1; ++_e < r.transforms.length; ) J = r.transforms[_e](J) || J;
      return J;
    }
    function s(F, J, ve) {
      let Ee = J - 1, _e = -1, tt = false, sn, At, vn, Wn;
      for (; ++Ee <= ve; ) {
        const nt = F[Ee];
        switch (nt[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            nt[0] === "enter" ? _e++ : _e--, Wn = void 0;
            break;
          }
          case "lineEndingBlank": {
            nt[0] === "enter" && (sn && !Wn && !_e && !vn && (vn = Ee), Wn = void 0);
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            Wn = void 0;
        }
        if (!_e && nt[0] === "enter" && nt[1].type === "listItemPrefix" || _e === -1 && nt[0] === "exit" && (nt[1].type === "listUnordered" || nt[1].type === "listOrdered")) {
          if (sn) {
            let Qt = Ee;
            for (At = void 0; Qt--; ) {
              const kt = F[Qt];
              if (kt[1].type === "lineEnding" || kt[1].type === "lineEndingBlank") {
                if (kt[0] === "exit") continue;
                At && (F[At][1].type = "lineEndingBlank", tt = true), kt[1].type = "lineEnding", At = Qt;
              } else if (!(kt[1].type === "linePrefix" || kt[1].type === "blockQuotePrefix" || kt[1].type === "blockQuotePrefixWhitespace" || kt[1].type === "blockQuoteMarker" || kt[1].type === "listItemIndent")) break;
            }
            vn && (!At || vn < At) && (sn._spread = true), sn.end = Object.assign({}, At ? F[At][1].start : nt[1].end), F.splice(At || Ee, 0, [
              "exit",
              sn,
              nt[2]
            ]), Ee++, ve++;
          }
          if (nt[1].type === "listItemPrefix") {
            const Qt = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, nt[1].start),
              end: void 0
            };
            sn = Qt, F.splice(Ee, 0, [
              "enter",
              Qt,
              nt[2]
            ]), Ee++, ve++, vn = void 0, Wn = true;
          }
        }
      }
      return F[J][1]._spread = tt, ve;
    }
    function a(F, J) {
      return ve;
      function ve(Ee) {
        f.call(this, F(Ee), Ee), J && J.call(this, Ee);
      }
    }
    function c() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function f(F, J, ve) {
      this.stack[this.stack.length - 1].children.push(F), this.stack.push(F), this.tokenStack.push([
        J,
        ve || void 0
      ]), F.position = {
        start: jn(J.start),
        end: void 0
      };
    }
    function h(F) {
      return J;
      function J(ve) {
        F && F.call(this, ve), m.call(this, ve);
      }
    }
    function m(F, J) {
      const ve = this.stack.pop(), Ee = this.tokenStack.pop();
      if (Ee) Ee[0].type !== F.type && (J ? J.call(this, F, Ee[0]) : (Ee[1] || $d).call(this, F, Ee[0]));
      else throw new Error("Cannot close `" + F.type + "` (" + Ai({
        start: F.start,
        end: F.end
      }) + "): it\u2019s not open");
      ve.position.end = jn(F.end);
    }
    function g() {
      return hv(this.stack.pop());
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
    function N() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }
    function D() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.value = F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }
    function T() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.value = F.replace(/(\r?\n|\r)$/g, "");
    }
    function M(F) {
      const J = this.resume(), ve = this.stack[this.stack.length - 1];
      ve.label = J, ve.identifier = zr(this.sliceSerialize(F)).toLowerCase();
    }
    function L() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.title = F;
    }
    function V() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.url = F;
    }
    function Z(F) {
      const J = this.stack[this.stack.length - 1];
      if (!J.depth) {
        const ve = this.sliceSerialize(F).length;
        J.depth = ve;
      }
    }
    function O() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function ee(F) {
      const J = this.stack[this.stack.length - 1];
      J.depth = this.sliceSerialize(F).codePointAt(0) === 61 ? 1 : 2;
    }
    function re() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function se(F) {
      const ve = this.stack[this.stack.length - 1].children;
      let Ee = ve[ve.length - 1];
      (!Ee || Ee.type !== "text") && (Ee = Wi(), Ee.position = {
        start: jn(F.start),
        end: void 0
      }, ve.push(Ee)), this.stack.push(Ee);
    }
    function me(F) {
      const J = this.stack.pop();
      J.value += this.sliceSerialize(F), J.position.end = jn(F.end);
    }
    function X(F) {
      const J = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const ve = J.children[J.children.length - 1];
        ve.position.end = jn(F.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && r.canContainEols.includes(J.type) && (se.call(this, F), me.call(this, F));
    }
    function ne() {
      this.data.atHardBreak = true;
    }
    function q() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.value = F;
    }
    function te() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.value = F;
    }
    function U() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.value = F;
    }
    function ie() {
      const F = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const J = this.data.referenceType || "shortcut";
        F.type += "Reference", F.referenceType = J, delete F.url, delete F.title;
      } else delete F.identifier, delete F.label;
      this.data.referenceType = void 0;
    }
    function K() {
      const F = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const J = this.data.referenceType || "shortcut";
        F.type += "Reference", F.referenceType = J, delete F.url, delete F.title;
      } else delete F.identifier, delete F.label;
      this.data.referenceType = void 0;
    }
    function B(F) {
      const J = this.sliceSerialize(F), ve = this.stack[this.stack.length - 2];
      ve.label = pw(J), ve.identifier = zr(J).toLowerCase();
    }
    function G() {
      const F = this.stack[this.stack.length - 1], J = this.resume(), ve = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, ve.type === "link") {
        const Ee = F.children;
        ve.children = Ee;
      } else ve.alt = J;
    }
    function k() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.url = F;
    }
    function _() {
      const F = this.resume(), J = this.stack[this.stack.length - 1];
      J.title = F;
    }
    function b() {
      this.data.inReference = void 0;
    }
    function S() {
      this.data.referenceType = "collapsed";
    }
    function oe(F) {
      const J = this.resume(), ve = this.stack[this.stack.length - 1];
      ve.label = J, ve.identifier = zr(this.sliceSerialize(F)).toLowerCase(), this.data.referenceType = "full";
    }
    function ce(F) {
      this.data.characterReferenceType = F.type;
    }
    function de(F) {
      const J = this.sliceSerialize(F), ve = this.data.characterReferenceType;
      let Ee;
      ve ? (Ee = ph(J, ve === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Ee = ia(J);
      const _e = this.stack[this.stack.length - 1];
      _e.value += Ee;
    }
    function Ce(F) {
      const J = this.stack.pop();
      J.position.end = jn(F.end);
    }
    function ke(F) {
      me.call(this, F);
      const J = this.stack[this.stack.length - 1];
      J.url = this.sliceSerialize(F);
    }
    function Te(F) {
      me.call(this, F);
      const J = this.stack[this.stack.length - 1];
      J.url = "mailto:" + this.sliceSerialize(F);
    }
    function We() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function Rt() {
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
    function Wi() {
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
      Array.isArray(l) ? Ih(t, l) : yw(t, l);
    }
  }
  function yw(t, r) {
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
  function $d(t, r) {
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
  function vw(t) {
    const r = this;
    r.parser = i;
    function i(l) {
      return mw(l, {
        ...r.data("settings"),
        ...t,
        extensions: r.data("micromarkExtensions") || [],
        mdastExtensions: r.data("fromMarkdownExtensions") || []
      });
    }
  }
  function ww(t, r) {
    const i = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: t.wrap(t.all(r), true)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function xw(t, r) {
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
  function kw(t, r) {
    const i = r.value ? r.value + `
` : "", l = {}, s = r.lang ? r.lang.split(/\s+/) : [];
    s.length > 0 && (l.className = [
      "language-" + s[0]
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
  function Sw(t, r) {
    const i = {
      type: "element",
      tagName: "del",
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function Ew(t, r) {
    const i = {
      type: "element",
      tagName: "em",
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function Iw(t, r) {
    const i = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", l = String(r.identifier).toUpperCase(), s = Fr(l.toLowerCase()), a = t.footnoteOrder.indexOf(l);
    let c, f = t.footnoteCounts.get(l);
    f === void 0 ? (f = 0, t.footnoteOrder.push(l), c = t.footnoteOrder.length) : c = a + 1, f += 1, t.footnoteCounts.set(l, f);
    const h = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + i + "fn-" + s,
        id: i + "fnref-" + s + (f > 1 ? "-" + f : ""),
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
  function Cw(t, r) {
    const i = {
      type: "element",
      tagName: "h" + r.depth,
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function Tw(t, r) {
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
    const s = t.all(r), a = s[0];
    a && a.type === "text" ? a.value = "[" + a.value : s.unshift({
      type: "text",
      value: "["
    });
    const c = s[s.length - 1];
    return c && c.type === "text" ? c.value += l : s.push({
      type: "text",
      value: l
    }), s;
  }
  function _w(t, r) {
    const i = String(r.identifier).toUpperCase(), l = t.definitionById.get(i);
    if (!l) return Ch(t, r);
    const s = {
      src: Fr(l.url || ""),
      alt: r.alt
    };
    l.title !== null && l.title !== void 0 && (s.title = l.title);
    const a = {
      type: "element",
      tagName: "img",
      properties: s,
      children: []
    };
    return t.patch(r, a), t.applyData(r, a);
  }
  function Pw(t, r) {
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
  function Nw(t, r) {
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
  function Dw(t, r) {
    const i = String(r.identifier).toUpperCase(), l = t.definitionById.get(i);
    if (!l) return Ch(t, r);
    const s = {
      href: Fr(l.url || "")
    };
    l.title !== null && l.title !== void 0 && (s.title = l.title);
    const a = {
      type: "element",
      tagName: "a",
      properties: s,
      children: t.all(r)
    };
    return t.patch(r, a), t.applyData(r, a);
  }
  function Rw(t, r) {
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
  function Aw(t, r, i) {
    const l = t.all(r), s = i ? Ow(i) : Th(r), a = {}, c = [];
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
      (s || f !== 0 || g.type !== "element" || g.tagName !== "p") && c.push({
        type: "text",
        value: `
`
      }), g.type === "element" && g.tagName === "p" && !s ? c.push(...g.children) : c.push(g);
    }
    const h = l[l.length - 1];
    h && (s || h.type !== "element" || h.tagName !== "p") && c.push({
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
  function Lw(t, r) {
    const i = {}, l = t.all(r);
    let s = -1;
    for (typeof r.start == "number" && r.start !== 1 && (i.start = r.start); ++s < l.length; ) {
      const c = l[s];
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
  function zw(t, r) {
    const i = {
      type: "element",
      tagName: "p",
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function Mw(t, r) {
    const i = {
      type: "root",
      children: t.wrap(t.all(r))
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function bw(t, r) {
    const i = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function Fw(t, r) {
    const i = t.all(r), l = i.shift(), s = [];
    if (l) {
      const c = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: t.wrap([
          l
        ], true)
      };
      t.patch(r.children[0], c), s.push(c);
    }
    if (i.length > 0) {
      const c = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: t.wrap(i, true)
      }, f = ea(r.children[1]), h = lh(r.children[r.children.length - 1]);
      f && h && (c.position = {
        start: f,
        end: h
      }), s.push(c);
    }
    const a = {
      type: "element",
      tagName: "table",
      properties: {},
      children: t.wrap(s, true)
    };
    return t.patch(r, a), t.applyData(r, a);
  }
  function jw(t, r, i) {
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
  function Bw(t, r) {
    const i = {
      type: "element",
      tagName: "td",
      properties: {},
      children: t.all(r)
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  const qd = 9, Gd = 32;
  function Uw(t) {
    const r = String(t), i = /\r?\n|\r/g;
    let l = i.exec(r), s = 0;
    const a = [];
    for (; l; ) a.push(Yd(r.slice(s, l.index), s > 0, true), l[0]), s = l.index + l[0].length, l = i.exec(r);
    return a.push(Yd(r.slice(s), s > 0, false)), a.join("");
  }
  function Yd(t, r, i) {
    let l = 0, s = t.length;
    if (r) {
      let a = t.codePointAt(l);
      for (; a === qd || a === Gd; ) l++, a = t.codePointAt(l);
    }
    if (i) {
      let a = t.codePointAt(s - 1);
      for (; a === qd || a === Gd; ) s--, a = t.codePointAt(s - 1);
    }
    return s > l ? t.slice(l, s) : "";
  }
  function Vw(t, r) {
    const i = {
      type: "text",
      value: Uw(String(r.value))
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  function Ww(t, r) {
    const i = {
      type: "element",
      tagName: "hr",
      properties: {},
      children: []
    };
    return t.patch(r, i), t.applyData(r, i);
  }
  const Hw = {
    blockquote: ww,
    break: xw,
    code: kw,
    delete: Sw,
    emphasis: Ew,
    footnoteReference: Iw,
    heading: Cw,
    html: Tw,
    imageReference: _w,
    image: Pw,
    inlineCode: Nw,
    linkReference: Dw,
    link: Rw,
    listItem: Aw,
    list: Lw,
    paragraph: zw,
    root: Mw,
    strong: bw,
    table: Fw,
    tableCell: Bw,
    tableRow: jw,
    text: Vw,
    thematicBreak: Ww,
    toml: tl,
    yaml: tl,
    definition: tl,
    footnoteDefinition: tl
  };
  function tl() {
  }
  const _h = -1, vl = 0, Li = 1, sl = 2, sa = 3, ua = 4, aa = 5, ca = 6, Ph = 7, Nh = 8, Qd = typeof self == "object" ? self : globalThis, $w = (t, r) => {
    const i = (s, a) => (t.set(a, s), s), l = (s) => {
      if (t.has(s)) return t.get(s);
      const [a, c] = r[s];
      switch (a) {
        case vl:
        case _h:
          return i(c, s);
        case Li: {
          const f = i([], s);
          for (const h of c) f.push(l(h));
          return f;
        }
        case sl: {
          const f = i({}, s);
          for (const [h, m] of c) f[l(h)] = l(m);
          return f;
        }
        case sa:
          return i(new Date(c), s);
        case ua: {
          const { source: f, flags: h } = c;
          return i(new RegExp(f, h), s);
        }
        case aa: {
          const f = i(/* @__PURE__ */ new Map(), s);
          for (const [h, m] of c) f.set(l(h), l(m));
          return f;
        }
        case ca: {
          const f = i(/* @__PURE__ */ new Set(), s);
          for (const h of c) f.add(l(h));
          return f;
        }
        case Ph: {
          const { name: f, message: h } = c;
          return i(new Qd[f](h), s);
        }
        case Nh:
          return i(BigInt(c), s);
        case "BigInt":
          return i(Object(BigInt(c)), s);
        case "ArrayBuffer":
          return i(new Uint8Array(c).buffer, c);
        case "DataView": {
          const { buffer: f } = new Uint8Array(c);
          return i(new DataView(f), c);
        }
      }
      return i(new Qd[a](c), s);
    };
    return l;
  }, Kd = (t) => $w(/* @__PURE__ */ new Map(), t)(0), Rr = "", { toString: qw } = {}, { keys: Gw } = Object, Ni = (t) => {
    const r = typeof t;
    if (r !== "object" || !t) return [
      vl,
      r
    ];
    const i = qw.call(t).slice(8, -1);
    switch (i) {
      case "Array":
        return [
          Li,
          Rr
        ];
      case "Object":
        return [
          sl,
          Rr
        ];
      case "Date":
        return [
          sa,
          Rr
        ];
      case "RegExp":
        return [
          ua,
          Rr
        ];
      case "Map":
        return [
          aa,
          Rr
        ];
      case "Set":
        return [
          ca,
          Rr
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
      Ph,
      i
    ] : [
      sl,
      i
    ];
  }, nl = ([t, r]) => t === vl && (r === "function" || r === "symbol"), Yw = (t, r, i, l) => {
    const s = (c, f) => {
      const h = l.push(c) - 1;
      return i.set(f, h), h;
    }, a = (c) => {
      if (i.has(c)) return i.get(c);
      let [f, h] = Ni(c);
      switch (f) {
        case vl: {
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
              return s([
                _h
              ], c);
          }
          return s([
            f,
            g
          ], c);
        }
        case Li: {
          if (h) {
            let v = c;
            return h === "DataView" ? v = new Uint8Array(c.buffer) : h === "ArrayBuffer" && (v = new Uint8Array(c)), s([
              h,
              [
                ...v
              ]
            ], c);
          }
          const g = [], y = s([
            f,
            g
          ], c);
          for (const v of c) g.push(a(v));
          return y;
        }
        case sl: {
          if (h) switch (h) {
            case "BigInt":
              return s([
                h,
                c.toString()
              ], c);
            case "Boolean":
            case "Number":
            case "String":
              return s([
                h,
                c.valueOf()
              ], c);
          }
          if (r && "toJSON" in c) return a(c.toJSON());
          const g = [], y = s([
            f,
            g
          ], c);
          for (const v of Gw(c)) (t || !nl(Ni(c[v]))) && g.push([
            a(v),
            a(c[v])
          ]);
          return y;
        }
        case sa:
          return s([
            f,
            c.toISOString()
          ], c);
        case ua: {
          const { source: g, flags: y } = c;
          return s([
            f,
            {
              source: g,
              flags: y
            }
          ], c);
        }
        case aa: {
          const g = [], y = s([
            f,
            g
          ], c);
          for (const [v, w] of c) (t || !(nl(Ni(v)) || nl(Ni(w)))) && g.push([
            a(v),
            a(w)
          ]);
          return y;
        }
        case ca: {
          const g = [], y = s([
            f,
            g
          ], c);
          for (const v of c) (t || !nl(Ni(v))) && g.push(a(v));
          return y;
        }
      }
      const { message: m } = c;
      return s([
        f,
        {
          name: h,
          message: m
        }
      ], c);
    };
    return a;
  }, Xd = (t, { json: r, lossy: i } = {}) => {
    const l = [];
    return Yw(!(r || i), !!r, /* @__PURE__ */ new Map(), l)(t), l;
  }, ul = typeof structuredClone == "function" ? (t, r) => r && ("json" in r || "lossy" in r) ? Kd(Xd(t, r)) : structuredClone(t) : (t, r) => Kd(Xd(t, r));
  function Qw(t, r) {
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
  function Kw(t, r) {
    return "Back to reference " + (t + 1) + (r > 1 ? "-" + r : "");
  }
  function Xw(t) {
    const r = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", i = t.options.footnoteBackContent || Qw, l = t.options.footnoteBackLabel || Kw, s = t.options.footnoteLabel || "Footnotes", a = t.options.footnoteLabelTagName || "h2", c = t.options.footnoteLabelProperties || {
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
      const I = [], N = t.footnoteCounts.get(y);
      for (; N !== void 0 && ++w <= N; ) {
        I.length > 0 && I.push({
          type: "text",
          value: " "
        });
        let M = typeof i == "string" ? i : i(h, w);
        typeof M == "string" && (M = {
          type: "text",
          value: M
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
          children: Array.isArray(M) ? M : [
            M
          ]
        });
      }
      const D = g[g.length - 1];
      if (D && D.type === "element" && D.tagName === "p") {
        const M = D.children[D.children.length - 1];
        M && M.type === "text" ? M.value += " " : D.children.push({
          type: "text",
          value: " "
        }), D.children.push(...I);
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
              value: s
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
    if (t == null) return tx;
    if (typeof t == "function") return wl(t);
    if (typeof t == "object") return Array.isArray(t) ? Jw(t) : Zw(t);
    if (typeof t == "string") return ex(t);
    throw new Error("Expected function, string, or object as test");
  });
  function Jw(t) {
    const r = [];
    let i = -1;
    for (; ++i < t.length; ) r[i] = Dh(t[i]);
    return wl(l);
    function l(...s) {
      let a = -1;
      for (; ++a < r.length; ) if (r[a].apply(this, s)) return true;
      return false;
    }
  }
  function Zw(t) {
    const r = t;
    return wl(i);
    function i(l) {
      const s = l;
      let a;
      for (a in t) if (s[a] !== r[a]) return false;
      return true;
    }
  }
  function ex(t) {
    return wl(r);
    function r(i) {
      return i && i.type === t;
    }
  }
  function wl(t) {
    return r;
    function r(i, l, s) {
      return !!(nx(i) && t.call(this, i, typeof l == "number" ? l : void 0, s || void 0));
    }
  }
  function tx() {
    return true;
  }
  function nx(t) {
    return t !== null && typeof t == "object" && "type" in t;
  }
  const Rh = [], rx = true, Jd = false, ix = "skip";
  function ox(t, r, i, l) {
    let s;
    typeof r == "function" && typeof i != "function" ? (l = i, i = r) : s = r;
    const a = Dh(s), c = l ? -1 : 1;
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
        let w = Rh, I, N, D;
        if ((!r || a(h, m, g[g.length - 1] || void 0)) && (w = lx(i(h, g)), w[0] === Jd)) return w;
        if ("children" in h && h.children) {
          const T = h;
          if (T.children && w[0] !== ix) for (N = (l ? T.children.length : -1) + c, D = g.concat(T); N > -1 && N < T.children.length; ) {
            const M = T.children[N];
            if (I = f(M, N, D)(), I[0] === Jd) return I;
            N = typeof I[1] == "number" ? I[1] : N + c;
          }
        }
        return w;
      }
    }
  }
  function lx(t) {
    return Array.isArray(t) ? t : typeof t == "number" ? [
      rx,
      t
    ] : t == null ? Rh : [
      t
    ];
  }
  function Ah(t, r, i, l) {
    let s, a, c;
    typeof r == "function" && typeof i != "function" ? (a = void 0, c = r, s = i) : (a = r, c = i, s = l), ox(t, a, f, s);
    function f(h, m) {
      const g = m[m.length - 1], y = g ? g.children.indexOf(h) : void 0;
      return c(h, y, g);
    }
  }
  const Fu = {}.hasOwnProperty, sx = {};
  function ux(t, r) {
    const i = r || sx, l = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = {
      ...Hw,
      ...i.handlers
    }, f = {
      all: m,
      applyData: cx,
      definitionById: l,
      footnoteById: s,
      footnoteCounts: a,
      footnoteOrder: [],
      handlers: c,
      one: h,
      options: i,
      patch: ax,
      wrap: dx
    };
    return Ah(t, function(g) {
      if (g.type === "definition" || g.type === "footnoteDefinition") {
        const y = g.type === "definition" ? l : s, v = String(g.identifier).toUpperCase();
        y.has(v) || y.set(v, g);
      }
    }), f;
    function h(g, y) {
      const v = g.type, w = f.handlers[v];
      if (Fu.call(f.handlers, v) && w) return w(f, g, y);
      if (f.options.passThrough && f.options.passThrough.includes(v)) {
        if ("children" in g) {
          const { children: N, ...D } = g, T = ul(D);
          return T.children = f.all(g), T;
        }
        return ul(g);
      }
      return (f.options.unknownHandler || fx)(f, g, y);
    }
    function m(g) {
      const y = [];
      if ("children" in g) {
        const v = g.children;
        let w = -1;
        for (; ++w < v.length; ) {
          const I = f.one(v[w], g);
          if (I) {
            if (w && v[w - 1].type === "break" && (!Array.isArray(I) && I.type === "text" && (I.value = Zd(I.value)), !Array.isArray(I) && I.type === "element")) {
              const N = I.children[0];
              N && N.type === "text" && (N.value = Zd(N.value));
            }
            Array.isArray(I) ? y.push(...I) : y.push(I);
          }
        }
      }
      return y;
    }
  }
  function ax(t, r) {
    t.position && (r.position = q0(t));
  }
  function cx(t, r) {
    let i = r;
    if (t && t.data) {
      const l = t.data.hName, s = t.data.hChildren, a = t.data.hProperties;
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
      i.type === "element" && a && Object.assign(i.properties, ul(a)), "children" in i && i.children && s !== null && s !== void 0 && (i.children = s);
    }
    return i;
  }
  function fx(t, r) {
    const i = r.data || {}, l = "value" in r && !(Fu.call(i, "hProperties") || Fu.call(i, "hChildren")) ? {
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
  function dx(t, r) {
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
  function Zd(t) {
    let r = 0, i = t.charCodeAt(r);
    for (; i === 9 || i === 32; ) r++, i = t.charCodeAt(r);
    return t.slice(r);
  }
  function ep(t, r) {
    const i = ux(t, r), l = i.one(t, void 0), s = Xw(i), a = Array.isArray(l) ? {
      type: "root",
      children: l
    } : l || {
      type: "root",
      children: []
    };
    return s && a.children.push({
      type: "text",
      value: `
`
    }, s), a;
  }
  function px(t, r) {
    return t && "run" in t ? async function(i, l) {
      const s = ep(i, {
        file: l,
        ...r
      });
      await t.run(s, l);
    } : function(i, l) {
      return ep(i, {
        file: l,
        ...t || r
      });
    };
  }
  function tp(t) {
    if (t) throw t;
  }
  var xu, np;
  function hx() {
    if (np) return xu;
    np = 1;
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, l = Object.getOwnPropertyDescriptor, s = function(m) {
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
    return xu = function h() {
      var m, g, y, v, w, I, N = arguments[0], D = 1, T = arguments.length, M = false;
      for (typeof N == "boolean" && (M = N, N = arguments[1] || {}, D = 2), (N == null || typeof N != "object" && typeof N != "function") && (N = {}); D < T; ++D) if (m = arguments[D], m != null) for (g in m) y = f(N, g), v = f(m, g), N !== v && (M && v && (a(v) || (w = s(v))) ? (w ? (w = false, I = y && s(y) ? y : []) : I = y && a(y) ? y : {}, c(N, {
        name: g,
        newValue: h(M, I, v)
      })) : typeof v < "u" && c(N, {
        name: g,
        newValue: v
      }));
      return N;
    }, xu;
  }
  var mx = hx();
  const ku = al(mx);
  function ju(t) {
    if (typeof t != "object" || t === null) return false;
    const r = Object.getPrototypeOf(t);
    return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
  }
  function gx() {
    const t = [], r = {
      run: i,
      use: l
    };
    return r;
    function i(...s) {
      let a = -1;
      const c = s.pop();
      if (typeof c != "function") throw new TypeError("Expected function as last argument, not " + c);
      f(null, ...s);
      function f(h, ...m) {
        const g = t[++a];
        let y = -1;
        if (h) {
          c(h);
          return;
        }
        for (; ++y < s.length; ) (m[y] === null || m[y] === void 0) && (m[y] = s[y]);
        s = m, g ? yx(g, f)(...m) : c(null, ...m);
      }
    }
    function l(s) {
      if (typeof s != "function") throw new TypeError("Expected `middelware` to be a function, not " + s);
      return t.push(s), r;
    }
  }
  function yx(t, r) {
    let i;
    return l;
    function l(...c) {
      const f = t.length > c.length;
      let h;
      f && c.push(s);
      try {
        h = t.apply(this, c);
      } catch (m) {
        const g = m;
        if (f && i) throw g;
        return s(g);
      }
      f || (h && h.then && typeof h.then == "function" ? h.then(a, s) : h instanceof Error ? s(h) : a(h));
    }
    function s(c, ...f) {
      i || (i = true, r(c, ...f));
    }
    function a(c) {
      s(null, c);
    }
  }
  const tn = {
    basename: vx,
    dirname: wx,
    extname: xx,
    join: kx,
    sep: "/"
  };
  function vx(t, r) {
    if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
    Bi(t);
    let i = 0, l = -1, s = t.length, a;
    if (r === void 0 || r.length === 0 || r.length > t.length) {
      for (; s--; ) if (t.codePointAt(s) === 47) {
        if (a) {
          i = s + 1;
          break;
        }
      } else l < 0 && (a = true, l = s + 1);
      return l < 0 ? "" : t.slice(i, l);
    }
    if (r === t) return "";
    let c = -1, f = r.length - 1;
    for (; s--; ) if (t.codePointAt(s) === 47) {
      if (a) {
        i = s + 1;
        break;
      }
    } else c < 0 && (a = true, c = s + 1), f > -1 && (t.codePointAt(s) === r.codePointAt(f--) ? f < 0 && (l = s) : (f = -1, l = c));
    return i === l ? l = c : l < 0 && (l = t.length), t.slice(i, l);
  }
  function wx(t) {
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
  function xx(t) {
    Bi(t);
    let r = t.length, i = -1, l = 0, s = -1, a = 0, c;
    for (; r--; ) {
      const f = t.codePointAt(r);
      if (f === 47) {
        if (c) {
          l = r + 1;
          break;
        }
        continue;
      }
      i < 0 && (c = true, i = r + 1), f === 46 ? s < 0 ? s = r : a !== 1 && (a = 1) : s > -1 && (a = -1);
    }
    return s < 0 || i < 0 || a === 0 || a === 1 && s === i - 1 && s === l + 1 ? "" : t.slice(s, i);
  }
  function kx(...t) {
    let r = -1, i;
    for (; ++r < t.length; ) Bi(t[r]), t[r] && (i = i === void 0 ? t[r] : i + "/" + t[r]);
    return i === void 0 ? "." : Sx(i);
  }
  function Sx(t) {
    Bi(t);
    const r = t.codePointAt(0) === 47;
    let i = Ex(t, !r);
    return i.length === 0 && !r && (i = "."), i.length > 0 && t.codePointAt(t.length - 1) === 47 && (i += "/"), r ? "/" + i : i;
  }
  function Ex(t, r) {
    let i = "", l = 0, s = -1, a = 0, c = -1, f, h;
    for (; ++c <= t.length; ) {
      if (c < t.length) f = t.codePointAt(c);
      else {
        if (f === 47) break;
        f = 47;
      }
      if (f === 47) {
        if (!(s === c - 1 || a === 1)) if (s !== c - 1 && a === 2) {
          if (i.length < 2 || l !== 2 || i.codePointAt(i.length - 1) !== 46 || i.codePointAt(i.length - 2) !== 46) {
            if (i.length > 2) {
              if (h = i.lastIndexOf("/"), h !== i.length - 1) {
                h < 0 ? (i = "", l = 0) : (i = i.slice(0, h), l = i.length - 1 - i.lastIndexOf("/")), s = c, a = 0;
                continue;
              }
            } else if (i.length > 0) {
              i = "", l = 0, s = c, a = 0;
              continue;
            }
          }
          r && (i = i.length > 0 ? i + "/.." : "..", l = 2);
        } else i.length > 0 ? i += "/" + t.slice(s + 1, c) : i = t.slice(s + 1, c), l = c - s - 1;
        s = c, a = 0;
      } else f === 46 && a > -1 ? a++ : a = -1;
    }
    return i;
  }
  function Bi(t) {
    if (typeof t != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(t));
  }
  const Ix = {
    cwd: Cx
  };
  function Cx() {
    return "/";
  }
  function Bu(t) {
    return !!(t !== null && typeof t == "object" && "href" in t && t.href && "protocol" in t && t.protocol && t.auth === void 0);
  }
  function Tx(t) {
    if (typeof t == "string") t = new URL(t);
    else if (!Bu(t)) {
      const r = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + t + "`");
      throw r.code = "ERR_INVALID_ARG_TYPE", r;
    }
    if (t.protocol !== "file:") {
      const r = new TypeError("The URL must be of scheme file");
      throw r.code = "ERR_INVALID_URL_SCHEME", r;
    }
    return _x(t);
  }
  function _x(t) {
    if (t.hostname !== "") {
      const l = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw l.code = "ERR_INVALID_FILE_URL_HOST", l;
    }
    const r = t.pathname;
    let i = -1;
    for (; ++i < r.length; ) if (r.codePointAt(i) === 37 && r.codePointAt(i + 1) === 50) {
      const l = r.codePointAt(i + 2);
      if (l === 70 || l === 102) {
        const s = new TypeError("File URL path must not include encoded / characters");
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
      }
    }
    return decodeURIComponent(r);
  }
  const Su = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ];
  class Oh {
    constructor(r) {
      let i;
      r ? Bu(r) ? i = {
        path: r
      } : typeof r == "string" || Px(r) ? i = {
        value: r
      } : i = r : i = {}, this.cwd = "cwd" in i ? "" : Ix.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
      let l = -1;
      for (; ++l < Su.length; ) {
        const a = Su[l];
        a in i && i[a] !== void 0 && i[a] !== null && (this[a] = a === "history" ? [
          ...i[a]
        ] : i[a]);
      }
      let s;
      for (s in i) Su.includes(s) || (this[s] = i[s]);
    }
    get basename() {
      return typeof this.path == "string" ? tn.basename(this.path) : void 0;
    }
    set basename(r) {
      Iu(r, "basename"), Eu(r, "basename"), this.path = tn.join(this.dirname || "", r);
    }
    get dirname() {
      return typeof this.path == "string" ? tn.dirname(this.path) : void 0;
    }
    set dirname(r) {
      rp(this.basename, "dirname"), this.path = tn.join(r || "", this.basename);
    }
    get extname() {
      return typeof this.path == "string" ? tn.extname(this.path) : void 0;
    }
    set extname(r) {
      if (Eu(r, "extname"), rp(this.dirname, "extname"), r) {
        if (r.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
        if (r.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = tn.join(this.dirname, this.stem + (r || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(r) {
      Bu(r) && (r = Tx(r)), Iu(r, "path"), this.path !== r && this.history.push(r);
    }
    get stem() {
      return typeof this.path == "string" ? tn.basename(this.path, this.extname) : void 0;
    }
    set stem(r) {
      Iu(r, "stem"), Eu(r, "stem"), this.path = tn.join(this.dirname || "", r + (this.extname || ""));
    }
    fail(r, i, l) {
      const s = this.message(r, i, l);
      throw s.fatal = true, s;
    }
    info(r, i, l) {
      const s = this.message(r, i, l);
      return s.fatal = void 0, s;
    }
    message(r, i, l) {
      const s = new at(r, i, l);
      return this.path && (s.name = this.path + ":" + s.name, s.file = this.path), s.fatal = false, this.messages.push(s), s;
    }
    toString(r) {
      return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(r || void 0).decode(this.value);
    }
  }
  function Eu(t, r) {
    if (t && t.includes(tn.sep)) throw new Error("`" + r + "` cannot be a path: did not expect `" + tn.sep + "`");
  }
  function Iu(t, r) {
    if (!t) throw new Error("`" + r + "` cannot be empty");
  }
  function rp(t, r) {
    if (!t) throw new Error("Setting `" + r + "` requires `path` to be set too");
  }
  function Px(t) {
    return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
  }
  const Nx = (function(t) {
    const l = this.constructor.prototype, s = l[t], a = function() {
      return s.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, l), a;
  }), Dx = {}.hasOwnProperty;
  class fa extends Nx {
    constructor() {
      super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = gx();
    }
    copy() {
      const r = new fa();
      let i = -1;
      for (; ++i < this.attachers.length; ) {
        const l = this.attachers[i];
        r.use(...l);
      }
      return r.data(ku(true, {}, this.namespace)), r;
    }
    data(r, i) {
      return typeof r == "string" ? arguments.length === 2 ? (_u("data", this.frozen), this.namespace[r] = i, this) : Dx.call(this.namespace, r) && this.namespace[r] || void 0 : r ? (_u("data", this.frozen), this.namespace = r, this) : this.namespace;
    }
    freeze() {
      if (this.frozen) return this;
      const r = this;
      for (; ++this.freezeIndex < this.attachers.length; ) {
        const [i, ...l] = this.attachers[this.freezeIndex];
        if (l[0] === false) continue;
        l[0] === true && (l[0] = void 0);
        const s = i.call(r, ...l);
        typeof s == "function" && this.transformers.use(s);
      }
      return this.frozen = true, this.freezeIndex = Number.POSITIVE_INFINITY, this;
    }
    parse(r) {
      this.freeze();
      const i = rl(r), l = this.parser || this.Parser;
      return Cu("parse", l), l(String(i), i);
    }
    process(r, i) {
      const l = this;
      return this.freeze(), Cu("process", this.parser || this.Parser), Tu("process", this.compiler || this.Compiler), i ? s(void 0, i) : new Promise(s);
      function s(a, c) {
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
      return this.freeze(), Cu("processSync", this.parser || this.Parser), Tu("processSync", this.compiler || this.Compiler), this.process(r, s), op("processSync", "process", i), l;
      function s(a, c) {
        i = true, tp(a), l = c;
      }
    }
    run(r, i, l) {
      ip(r), this.freeze();
      const s = this.transformers;
      return !l && typeof i == "function" && (l = i, i = void 0), l ? a(void 0, l) : new Promise(a);
      function a(c, f) {
        const h = rl(i);
        s.run(r, h, m);
        function m(g, y, v) {
          const w = y || r;
          g ? f(g) : c ? c(w) : l(void 0, w, v);
        }
      }
    }
    runSync(r, i) {
      let l = false, s;
      return this.run(r, i, a), op("runSync", "run", l), s;
      function a(c, f) {
        tp(c), s = f, l = true;
      }
    }
    stringify(r, i) {
      this.freeze();
      const l = rl(i), s = this.compiler || this.Compiler;
      return Tu("stringify", s), ip(r), s(r, l);
    }
    use(r, ...i) {
      const l = this.attachers, s = this.namespace;
      if (_u("use", this.frozen), r != null) if (typeof r == "function") h(r, i);
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
        f(m.plugins), m.settings && (s.settings = ku(true, s.settings, m.settings));
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
          const N = l[v][1];
          ju(N) && ju(w) && (w = ku(true, N, w)), l[v] = [
            m,
            w,
            ...I
          ];
        }
      }
    }
  }
  const Rx = new fa().freeze();
  function Cu(t, r) {
    if (typeof r != "function") throw new TypeError("Cannot `" + t + "` without `parser`");
  }
  function Tu(t, r) {
    if (typeof r != "function") throw new TypeError("Cannot `" + t + "` without `compiler`");
  }
  function _u(t, r) {
    if (r) throw new Error("Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
  function ip(t) {
    if (!ju(t) || typeof t.type != "string") throw new TypeError("Expected node, got `" + t + "`");
  }
  function op(t, r, i) {
    if (!i) throw new Error("`" + t + "` finished async. Use `" + r + "` instead");
  }
  function rl(t) {
    return Ax(t) ? t : new Oh(t);
  }
  function Ax(t) {
    return !!(t && typeof t == "object" && "message" in t && "messages" in t);
  }
  function Ox(t) {
    return typeof t == "string" || Lx(t);
  }
  function Lx(t) {
    return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
  }
  const zx = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", lp = [], sp = {
    allowDangerousHtml: true
  }, Mx = /^(https?|ircs?|mailto|xmpp)$/i, bx = [
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
  function Fx(t) {
    const r = jx(t), i = Bx(t);
    return Ux(r.runSync(r.parse(i), i), t);
  }
  function jx(t) {
    const r = t.rehypePlugins || lp, i = t.remarkPlugins || lp, l = t.remarkRehypeOptions ? {
      ...t.remarkRehypeOptions,
      ...sp
    } : sp;
    return Rx().use(vw).use(i).use(px, l).use(r);
  }
  function Bx(t) {
    const r = t.children || "", i = new Oh();
    return typeof r == "string" && (i.value = r), i;
  }
  function Ux(t, r) {
    const i = r.allowedElements, l = r.allowElement, s = r.components, a = r.disallowedElements, c = r.skipHtml, f = r.unwrapDisallowed, h = r.urlTransform || Vx;
    for (const g of bx) Object.hasOwn(r, g.from) && ("" + g.from + (g.to ? "use `" + g.to + "` instead" : "remove it") + zx + g.id, void 0);
    return Ah(t, m), X0(t, {
      Fragment: j.Fragment,
      components: s,
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
        for (w in yu) if (Object.hasOwn(yu, w) && Object.hasOwn(g.properties, w)) {
          const I = g.properties[w], N = yu[w];
          (N === null || N.includes(g.tagName)) && (g.properties[w] = h(String(I || ""), w, g));
        }
      }
      if (g.type === "element") {
        let w = i ? !i.includes(g.tagName) : a ? a.includes(g.tagName) : false;
        if (!w && l && typeof y == "number" && (w = !l(g, y, v)), w && v && typeof y == "number") return f && g.children ? v.children.splice(y, 1, ...g.children) : v.children.splice(y, 1), y;
      }
    }
  }
  function Vx(t) {
    const r = t.indexOf(":"), i = t.indexOf("?"), l = t.indexOf("#"), s = t.indexOf("/");
    return r === -1 || s !== -1 && r > s || i !== -1 && r > i || l !== -1 && r > l || Mx.test(t.slice(0, r)) ? t : "";
  }
  function Wx() {
    const [t, r] = pe.useState(null), [i, l] = pe.useState(false), s = pe.useRef(null), a = pe.useRef(null), c = pe.useCallback(async (h) => {
      if (s.current) {
        console.log("[WebLLM] Engine already exists (singleton), skipping load");
        return;
      }
      if (a.current) return console.log("[WebLLM] Load already in progress, awaiting shared promise"), a.current;
      const m = h.chat_model.name;
      return console.log("[WebLLM] Loading model from pre-populated cache:", m), l(true), a.current = (async () => {
        try {
          const { CreateWebWorkerMLCEngine: g } = await Vu(async () => {
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
          s.current = v, r(v), console.log("[WebLLM] Engine ready (worker)");
        } catch (g) {
          throw a.current = null, l(false), g;
        }
        l(false);
      })(), a.current;
    }, []), f = pe.useCallback(async (h, m) => {
      var _a, _b;
      const g = s.current;
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
  function Hx() {
    const [t, r] = pe.useState(null), [i, l] = pe.useState(false), s = pe.useRef(null), a = pe.useRef(null), c = pe.useCallback(async (h) => {
      if (s.current) {
        console.log("[Wllama] Engine already loaded, skipping");
        return;
      }
      return a.current ? (console.log("[Wllama] Load in progress, awaiting shared promise"), a.current) : (l(true), console.log("[Wllama] Loading CPU model:", h.chat_model.name), a.current = (async () => {
        var _a;
        try {
          const { Wllama: m } = await Vu(async () => {
            const { Wllama: N } = await import("./index-frnsqqtI.js");
            return {
              Wllama: N
            };
          }, []), g = "/offline-llm-knowledge-system/import/", y = new m({
            "single-thread/wllama.wasm": `${g}wllama-wasm/single-thread/wllama.wasm`,
            "multi-thread/wllama.wasm": `${g}wllama-wasm/multi-thread/wllama.wasm`
          }), w = (await v0(h.manifest_hash, "model")).find((N) => N.endsWith(".gguf"));
          if (!w) throw new Error("No .gguf file found in model/ directory");
          console.log("[Wllama] Reading GGUF from OPFS:", w);
          const I = await y0(h.manifest_hash, `model/${w}`);
          console.log("[Wllama] GGUF size:", (I.size / 1e6).toFixed(1), "MB"), await y.loadModel([
            I
          ], {
            n_ctx: 2048,
            n_batch: 128,
            n_threads: Math.min(navigator.hardwareConcurrency || 4, 4)
          }), console.log("[Wllama] Model loaded, template:", (_a = y.getChatTemplate()) == null ? void 0 : _a.slice(0, 100)), s.current = y, r(y);
        } catch (m) {
          throw a.current = null, l(false), m;
        }
        l(false);
      })(), a.current);
    }, []), f = pe.useCallback(async (h, m) => {
      const g = s.current;
      if (!g) throw new Error("Wllama engine not loaded");
      const y = h.map((w) => ({
        role: w.role,
        content: w.content
      }));
      let v = "";
      await g.createChatCompletion(y, {
        nPredict: 512,
        sampling: {
          temp: 0.7,
          top_p: 0.9,
          top_k: 40,
          penalty_repeat: 1.1
        },
        useCache: true,
        onNewToken: (w, I, N) => {
          const D = N.slice(v.length);
          v = N, D && m(D);
        }
      });
    }, []);
    return {
      engine: t,
      loading: i,
      loadModel: c,
      chat: f
    };
  }
  function $x() {
    const t = Wx(), r = Hx(), i = pe.useRef(null), [l, s] = pe.useState(null), a = pe.useCallback(async (m) => {
      const g = m.chat_model.engine ?? "webllm";
      return i.current = g, s(g), g === "wllama" ? r.loadModel(m) : t.loadModel(m);
    }, [
      t.loadModel,
      r.loadModel
    ]), c = pe.useCallback(async (m, g) => i.current === "wllama" ? r.chat(m, g) : t.chat(m, g), [
      t.chat,
      r.chat
    ]), f = i.current === "wllama" ? r.engine : t.engine, h = i.current === "wllama" ? r.loading : t.loading;
    return {
      engine: f,
      loading: h,
      engineType: l,
      loadModel: a,
      chat: c
    };
  }
  function qx(t) {
    async function r(i, l) {
      if (!t) return [];
      try {
        return (await Sd(t, {
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
          return (await Sd(t, {
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
  function Gx() {
    const t = pe.useRef(null), r = pe.useRef(false), i = pe.useRef(/* @__PURE__ */ new Map());
    return pe.useEffect(() => {
      const s = new Worker(new URL("/offline-llm-knowledge-system/import/assets/embed-query-worker-Cgwmtpnr.js", import.meta.url), {
        type: "module"
      });
      return t.current = s, s.onmessage = (a) => {
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
      }, s.onerror = (a) => {
        console.error("[EmbedWorker] uncaught error:", a);
      }, s.postMessage({
        type: "INIT"
      }), () => {
        s.terminate(), t.current = null, r.current = false;
      };
    }, []), {
      embedQuery: pe.useCallback(async (s) => {
        const a = t.current;
        if (!a) return console.warn("[EmbedWorker] worker not available, using zero vector"), new Array(384).fill(0);
        const c = `eq-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        return new Promise((f) => {
          i.current.set(c, {
            resolve: f
          }), a.postMessage({
            type: "EMBED_QUERY",
            id: c,
            text: s
          }), setTimeout(() => {
            i.current.has(c) && (console.warn("[EmbedWorker] timeout for query:", s), i.current.delete(c), f(new Array(384).fill(0)));
          }, 1e4);
        });
      }, [])
    };
  }
  const Yx = 14e3, up = 1100, ap = 300, Qx = 3200, Kx = 7e3, Xx = 3500, Jx = " Write in complete sentences. Do not repeat the question. If the documents do not contain the answer, say so.";
  function Zx(t) {
    const r = t.split(/\n##|\n#|\n-\s|\n\*/)[0].trim();
    return (r.length > ap ? r.slice(0, ap).trimEnd() + "\u2026" : r) + Jx;
  }
  function cp(t, r, i) {
    const l = [];
    let s = 0;
    for (let a = 0; a < t.length; a++) {
      const c = t[a].text.length > up ? t[a].text.slice(0, up).trimEnd() + "\u2026" : t[a].text, f = `[${i} ${a + 1} \u2014 ${t[a].source}]
${c}`;
      if (s + f.length > r) break;
      l.push(f), s += f.length;
    }
    return l.join(`

`);
  }
  function Pu(t, r, i, l, s) {
    var _a, _b;
    const a = ((_a = l == null ? void 0 : l.system_instructions) == null ? void 0 : _a.trim()) || "You are a helpful assistant.", c = Zx(a), f = (s == null ? void 0 : s.wikiContent) ? `[WIKI]
${s.wikiContent.slice(0, Qx)}` : "", h = ((_b = s == null ? void 0 : s.graphChunks) == null ? void 0 : _b.length) ? `[GRAPH CONTEXT]
${cp(s.graphChunks, Kx, "GRAPH")}` : "", m = i.length ? `[RETRIEVED DOCS]
${cp(i, Xx, "DOC")}` : "", g = [
      f,
      h,
      m
    ].filter(Boolean), y = g.length > 0 ? `${g.join(`

`)}

Question: ${r}` : r;
    let v = t.map((N) => ({
      role: N.role,
      content: N.content
    }));
    const w = (N) => c.length + N.reduce((D, T) => D + T.content.length, 0) + y.length;
    for (; w(v) > Yx && v.length >= 2; ) v = v.slice(2), console.log("[chatMessages] History trimmed: dropped oldest message pair, remaining:", v.length);
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
  function ek(t) {
    const r = /* @__PURE__ */ new Map();
    for (const i of t) r.has(i.a) || r.set(i.a, []), r.has(i.b) || r.set(i.b, []), r.get(i.a).push(i.b), r.get(i.b).push(i.a);
    return r;
  }
  function tk(t, r, i = 2) {
    const l = new Set(r);
    let s = [
      ...r
    ];
    for (let a = 0; a < i; a++) {
      const c = [];
      for (const f of s) for (const h of t.get(f) ?? []) l.has(h) || (l.add(h), c.push(h));
      if (s = c, s.length === 0) break;
    }
    return l;
  }
  function nk(t, r) {
    return t.filter((i) => r.has(i.id));
  }
  function rk(t) {
    return t.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase().slice(0, 80);
  }
  async function ik(t, r, i, l, s) {
    var _a, _b, _c;
    const c = `wiki/${rk(t)}.md`;
    try {
      const m = await il(r, c), g = new TextDecoder().decode(m);
      return console.log(`[wikiCache] hit: ${c} (${g.length} chars)`), g;
    } catch {
    }
    const f = `Write a concise 3-5 sentence reference summary for "${t}". Be factual and specific. Use only information from the excerpts below. Do not repeat the instructions.

Excerpts:
${l.slice(0, 2e3)}

Summary:`;
    let h = "";
    try {
      s === "wllama" ? (h = await i.createChatCompletion([
        {
          role: "user",
          content: f
        }
      ], {
        nPredict: 200,
        sampling: {
          temp: 0.1
        }
      }), h = (h || "").trim()) : h = ((_c = (_b = (_a = (await i.chat.completions.create({
        messages: [
          {
            role: "user",
            content: f
          }
        ],
        max_tokens: 200,
        temperature: 0.1
      })).choices[0]) == null ? void 0 : _a.message) == null ? void 0 : _b.content) == null ? void 0 : _c.trim()) ?? "";
    } catch (m) {
      return console.warn("[wikiCache] synthesis failed:", m), "";
    }
    if (!h) return "";
    try {
      await g0(r, c, new TextEncoder().encode(h)), console.log(`[wikiCache] written: ${c} (${h.length} chars)`);
    } catch (m) {
      console.warn("[wikiCache] OPFS write failed (non-fatal):", m);
    }
    return h;
  }
  function ok({ oramaDb: t, manifest: r, onClear: i, chunks: l, graphEdges: s }) {
    const [a, c] = pe.useState([]), f = pe.useRef([]);
    pe.useEffect(() => {
      f.current = a;
    }, [
      a
    ]);
    const [h, m] = pe.useState(""), [g, y] = pe.useState(false), [v, w] = pe.useState(false), [I, N] = pe.useState(null), D = pe.useRef(null), T = pe.useRef(null), { engine: M, loading: L, engineType: V, loadModel: Z, chat: O } = $x(), { search: ee } = qx(t), { embedQuery: re } = Gx(), se = pe.useMemo(() => s.length > 0 ? ek(s) : /* @__PURE__ */ new Map(), [
      s
    ]);
    pe.useEffect(() => {
      M && !v && w(true);
    }, [
      M,
      v
    ]), pe.useEffect(() => {
      r && Z(r).catch((q) => N(q instanceof Error ? q.message : String(q)));
    }, [
      r,
      Z
    ]), pe.useEffect(() => {
      var _a;
      (_a = D.current) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth"
      });
    }, [
      a
    ]);
    const me = pe.useCallback(async () => {
      var _a, _b;
      const q = h.trim();
      if (!q || g || !M && !v) return;
      m(""), y(true);
      const te = {
        role: "user",
        content: q
      };
      c((ie) => [
        ...ie,
        te
      ]);
      const U = {
        role: "assistant",
        content: "",
        sources: [],
        streaming: true
      };
      c((ie) => [
        ...ie,
        U
      ]);
      try {
        const ie = await re(q), K = await ee(q, ie);
        let B = [];
        if (se.size > 0 && l.length > 0) {
          const S = K.map((de) => de.id), oe = tk(se, S, 2), ce = new Set(S);
          B = nk(l, oe).filter((de) => !ce.has(de.id));
        }
        let G = "";
        if (M && r && K.length > 0) {
          const S = K[0].source, oe = K.map((ce) => ce.text).join(`

`);
          G = await ik(S, r.manifest_hash, M, oe, V);
        }
        c((S) => {
          const oe = [
            ...S
          ], ce = oe[oe.length - 1];
          return ce.role === "assistant" && (oe[oe.length - 1] = {
            ...ce,
            sources: K
          }), oe;
        });
        const k = a.filter((S) => !(S.role === "assistant" && S.content.startsWith("Error:"))).map((S) => ({
          role: S.role,
          content: S.content
        })), _ = Pu(k, q, K, r, {
          wikiContent: G,
          graphChunks: B
        });
        console.group("[Chat] Sending to model"), console.log("Query:", q), console.log(`RAG chunks (${K.length}):`, K.map((S) => ({
          source: S.source,
          preview: S.text.slice(0, 100)
        }))), console.log(`Graph chunks (${B.length}):`, B.map((S) => ({
          source: S.source,
          preview: S.text.slice(0, 100)
        }))), console.log(`Wiki content (${G.length} chars):`, G.slice(0, 200)), console.log("System prompt:", (_b = (_a = _[0]) == null ? void 0 : _a.content) == null ? void 0 : _b.slice(0, 500)), console.log("Full messages:", JSON.stringify(_, null, 2)), console.groupEnd();
        let b = "";
        await O(_, (S) => {
          b += S, c((oe) => {
            const ce = [
              ...oe
            ], de = ce[ce.length - 1];
            return de.role === "assistant" && (ce[ce.length - 1] = {
              ...de,
              content: b,
              streaming: true
            }), ce;
          });
        }), c((S) => {
          const oe = [
            ...S
          ], ce = oe[oe.length - 1];
          return ce.role === "assistant" && (oe[oe.length - 1] = {
            ...ce,
            streaming: false
          }), oe;
        });
      } catch (ie) {
        const K = ie instanceof Error ? ie.message : String(ie);
        c((B) => {
          const G = [
            ...B
          ], k = G[G.length - 1];
          return k.role === "assistant" && (G[G.length - 1] = {
            ...k,
            content: `Error: ${K}`,
            streaming: false
          }), G;
        });
      } finally {
        y(false);
      }
    }, [
      h,
      g,
      M,
      v,
      re,
      ee,
      O,
      a,
      se,
      l,
      r
    ]), X = pe.useCallback((q) => {
      q.key === "Enter" && !q.shiftKey && (q.preventDefault(), me());
    }, [
      me
    ]), ne = pe.useCallback(() => {
      window.confirm("Clear the knowledge base? You will need to import a zip again.") && i();
    }, [
      i
    ]);
    return pe.useEffect(() => {
      const q = (K) => M ? t ? true : (console.error(`[kb.${K}] No knowledge base loaded`), false) : (console.error(`[kb.${K}] Engine not loaded yet`), false), te = async (K) => {
        const B = await re(K);
        return ee(K, B);
      }, U = async (K) => {
        var _a, _b;
        if (!q("ask")) return "";
        console.time("[kb.ask] total");
        const B = await te(K), G = Pu([], K, B, r);
        console.log("[kb.ask] messages:", JSON.stringify(G, null, 2));
        let k = "";
        if (V === "wllama") await O(G, (_) => {
          k += _;
        });
        else {
          const _ = await M.chat.completions.create({
            messages: G,
            stream: true,
            max_tokens: 512
          });
          for await (const b of _) {
            const S = ((_b = (_a = b.choices[0]) == null ? void 0 : _a.delta) == null ? void 0 : _b.content) ?? "";
            S && (k += S);
          }
        }
        return console.timeEnd("[kb.ask] total"), console.log("[kb.ask] answer:", k), k;
      }, ie = {
        ask: U,
        search: async (K) => {
          if (!q("search")) return [];
          const B = await te(K);
          return console.table(B.map((G, k) => ({
            doc: k + 1,
            source: G.source,
            chars: G.text.length,
            preview: G.text.slice(0, 120).replace(/\n/g, " ")
          }))), B;
        },
        prompt: async (K) => {
          if (!q("prompt")) return null;
          const B = await te(K), G = Pu([], K, B, r);
          return console.group("[kb.prompt] Full message array"), G.forEach((k, _) => console.log(`[${_}] ${k.role} (${k.content.length} chars):
${k.content}`)), console.groupEnd(), G;
        },
        history: () => {
          const K = f.current;
          return K.length === 0 ? (console.log("[kb.history] No messages yet"), []) : (console.table(K.map((B, G) => ({
            "#": G,
            role: B.role,
            chars: B.content.length,
            preview: B.content.slice(0, 100).replace(/\n/g, " ")
          }))), K);
        },
        batch: async (K) => {
          if (!q("batch")) return;
          console.log(`[kb.batch] Running ${K.length} questions...`);
          const B = [];
          for (const G of K) {
            const k = Date.now(), _ = await U(G);
            B.push({
              question: G,
              answer: _.slice(0, 120),
              ms: Date.now() - k
            });
          }
          return console.table(B), B;
        }
      };
      window.kb = ie, window.askchat = U, console.log("%c[kb] Console API ready", "color: #4ade80; font-weight: bold", `
  kb.ask("question")          \u2192 search + LLM answer`, `
  kb.search("question")       \u2192 show retrieved chunks`, `
  kb.prompt("question")       \u2192 show full prompt without calling LLM`, `
  kb.history()                \u2192 show current chat history`, `
  kb.batch(["q1","q2"])       \u2192 run multiple questions`, `
  askchat("question")         \u2192 alias for kb.ask()`);
    }, [
      M,
      t,
      r,
      re,
      ee,
      V,
      O
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
                  children: v ? `Chat ready${V === "wllama" ? " (CPU)" : V === "webllm" ? " (GPU)" : ""}` : L ? V === "wllama" ? "Loading model (CPU)..." : "Uploading to GPU..." : "Initializing"
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
              onClick: ne,
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
            a.map((q, te) => j.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: q.role === "user" ? "flex-end" : "flex-start",
                gap: 6
              },
              children: [
                j.jsx("div", {
                  className: q.role === "assistant" ? "markdown" : void 0,
                  style: {
                    maxWidth: "75%",
                    padding: "10px 14px",
                    borderRadius: q.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background: q.role === "user" ? "var(--accent)" : "var(--surface)",
                    color: "var(--text)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    wordBreak: "break-word",
                    border: q.role === "assistant" ? "1px solid var(--border)" : "none"
                  },
                  children: q.role === "assistant" ? q.content ? j.jsxs(j.Fragment, {
                    children: [
                      j.jsx(Fx, {
                        children: q.content
                      }),
                      q.streaming && j.jsx("span", {
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
                  }) : q.streaming ? j.jsx("span", {
                    style: {
                      color: "var(--muted)"
                    },
                    children: "..."
                  }) : "" : j.jsx("span", {
                    style: {
                      whiteSpace: "pre-wrap"
                    },
                    children: q.content
                  })
                }),
                q.role === "assistant" && q.sources && q.sources.length > 0 && !q.streaming && j.jsxs("div", {
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
                    q.sources.map((U, ie) => j.jsxs("div", {
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
                            U.source,
                            U.page ? ` p.${U.page}` : ""
                          ]
                        }),
                        j.jsxs("span", {
                          style: {
                            marginLeft: 6
                          },
                          children: [
                            U.text.slice(0, 120),
                            U.text.length > 120 ? "..." : ""
                          ]
                        })
                      ]
                    }, ie))
                  ]
                })
              ]
            }, te)),
            j.jsx("div", {
              ref: D
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
                onChange: (q) => m(q.target.value),
                onKeyDown: X,
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
                onClick: me,
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
  function lk(t) {
    return t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : t < 1024 * 1024 * 1024 ? `${(t / (1024 * 1024)).toFixed(1)} MB` : `${(t / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  }
  function sk(t) {
    return t.loading ? "\u2026" : t.used === 0 ? "empty" : `${lk(t.used)} used`;
  }
  function uk() {
    const [t, r] = pe.useState({
      used: 0,
      quota: 0,
      loading: true
    }), i = pe.useCallback(async () => {
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
    return pe.useEffect(() => {
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
  function ak() {
    const { stage: t, progress: r, error: i, importZip: l, clearKnowledgeBase: s, oramaDb: a, manifest: c, chunks: f, graphEdges: h } = x0(), { info: m, refresh: g } = uk(), [y, v] = pe.useState(false), [w, I] = pe.useState("functional"), N = pe.useCallback((M) => {
      M.target.dataset.backdrop && v(false);
    }, []), D = t === "extracting" || t === "caching" || t === "loading-index", T = t === "loading-model" || t === "ready";
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
          onClick: N,
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
                ].map((M) => j.jsx("button", {
                  style: De.tab(w === M),
                  onClick: () => I(M),
                  children: M === "functional" ? "What it does" : "How it works"
                }, M))
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
                          children: "Chat model (GPU or CPU)"
                        }),
                        "GPU models: WebLLM loads safetensors from Cache API via WebGPU. CPU models: wllama loads GGUF from OPFS via llama.cpp WASM \u2014 works everywhere, no GPU needed."
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
                    await s(), g();
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
                    sk(m)
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
                j.jsx(k0, {
                  onFile: l,
                  disabled: false
                })
              ]
            }),
            D && j.jsx("div", {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 40
              },
              children: j.jsx(Ed, {
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
                j.jsx(Ed, {
                  stage: t,
                  progress: r,
                  error: i
                }),
                j.jsx("button", {
                  onClick: s,
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
            T && j.jsx(ok, {
              oramaDb: a,
              manifest: c,
              onClear: s,
              chunks: f,
              graphEdges: h
            })
          ]
        })
      ]
    });
  }
  Fg.createRoot(document.getElementById("root")).render(j.jsx(Rg.StrictMode, {
    children: j.jsx(ak, {})
  }));
})();
export {
  Ek as A,
  Sd as B,
  wk as C,
  xp as D,
  dk as E,
  yk as F,
  Wu as G,
  Mr as H,
  my as I,
  dd as J,
  el as K,
  Ky as L,
  yd as M,
  Xy as N,
  gk as O,
  Vy as P,
  Sk as Q,
  Qy as R,
  vp as S,
  l0 as T,
  __tla,
  fk as a,
  ck as b,
  Me as c,
  dy as d,
  hk as e,
  pk as f,
  on as g,
  Sy as h,
  bi as i,
  Ny as j,
  kk as k,
  Ep as l,
  Ip as m,
  xk as n,
  mk as o,
  cl as p,
  ky as q,
  vk as r,
  ly as s,
  Ge as t,
  cy as u,
  vy as v,
  Fi as w,
  ll as x,
  _p as y,
  Hp as z
};
