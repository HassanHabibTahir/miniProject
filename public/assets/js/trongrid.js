! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("trongrid", [], e) : "object" == typeof exports ? exports.trongrid = e() : t.trongrid = e()
}(window, function() {
    return function(t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var i in t) n.d(r, i, function(e) {
                    return t[e]
                }.bind(null, i));
            return r
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 17)
    }([function(t, e) {
        t.exports = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function(t, e) {
        function n(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        t.exports = function(t, e, r) {
            return e && n(t.prototype, e), r && n(t, r), t
        }
    }, function(t, e, n) {
        var r = n(6),
            i = n(10);
        t.exports = function(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? i(t) : e
        }
    }, function(t, e) {
        function n(e) {
            return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, n(e)
        }
        t.exports = n
    }, function(t, e, n) {
        var r = n(11);
        t.exports = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && r(t, e)
        }
    }, function(t, e, n) {
        t.exports = n(12)
    }, function(t, e) {
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function r(e) {
            return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) {
                return n(t)
            } : t.exports = r = function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
            }, r(e)
        }
        t.exports = r
    }, function(t, e) {
        function n(t, e, n, r, i, o, a) {
            try {
                var s = t[o](a),
                    u = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(u) : Promise.resolve(u).then(r, i)
        }
        t.exports = function(t) {
            return function() {
                var e = this,
                    r = arguments;
                return new Promise(function(i, o) {
                    var a = t.apply(e, r);

                    function s(t) {
                        n(a, i, o, s, u, "next", t)
                    }

                    function u(t) {
                        n(a, i, o, s, u, "throw", t)
                    }
                    s(void 0)
                })
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            return (e, ...n) => (function(t, ...e) {
                return new Promise((n, r) => {
                    t(...e, (t, e) => {
                        t ? r(t) : n(e)
                    })
                })
            })(e.bind(t), ...n)
        }
    }, function(t, e, n) {
        var r = n(14),
            i = n(15),
            o = n(16);
        t.exports = function(t, e) {
            return r(t) || i(t, e) || o()
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
    }, function(t, e) {
        function n(e, r) {
            return t.exports = n = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            }, n(e, r)
        }
        t.exports = n
    }, function(t, e, n) {
        var r = function() {
                return this || "object" == typeof self && self
            }() || Function("return this")(),
            i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
            o = i && r.regeneratorRuntime;
        if (r.regeneratorRuntime = void 0, t.exports = n(13), i) r.regeneratorRuntime = o;
        else try {
            delete r.regeneratorRuntime
        } catch (t) {
            r.regeneratorRuntime = void 0
        }
    }, function(t, e) {
        ! function(e) {
            "use strict";
            var n, r = Object.prototype,
                i = r.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                a = o.iterator || "@@iterator",
                s = o.asyncIterator || "@@asyncIterator",
                u = o.toStringTag || "@@toStringTag",
                c = "object" == typeof t,
                l = e.regeneratorRuntime;
            if (l) c && (t.exports = l);
            else {
                (l = e.regeneratorRuntime = c ? t.exports : {}).wrap = w;
                var f = "suspendedStart",
                    h = "suspendedYield",
                    v = "executing",
                    d = "completed",
                    p = {},
                    m = {};
                m[a] = function() {
                    return this
                };
                var y = Object.getPrototypeOf,
                    g = y && y(y(A([])));
                g && g !== r && i.call(g, a) && (m = g);
                var b = j.prototype = k.prototype = Object.create(m);
                E.prototype = b.constructor = j, j.constructor = E, j[u] = E.displayName = "GeneratorFunction", l.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === E || "GeneratorFunction" === (e.displayName || e.name))
                }, l.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, j) : (t.__proto__ = j, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(b), t
                }, l.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, P(_.prototype), _.prototype[s] = function() {
                    return this
                }, l.AsyncIterator = _, l.async = function(t, e, n, r) {
                    var i = new _(w(t, e, n, r));
                    return l.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                        return t.done ? t.value : i.next()
                    })
                }, P(b), b[u] = "Generator", b[a] = function() {
                    return this
                }, b.toString = function() {
                    return "[object Generator]"
                }, l.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, l.values = A, L.prototype = {
                    constructor: L,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(T), !t)
                            for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(r, i) {
                            return s.type = "throw", s.arg = t, e.next = r, i && (e.method = "next", e.arg = n), !!i
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return r("end");
                            if (a.tryLoc <= this.prev) {
                                var u = i.call(a, "catchLoc"),
                                    c = i.call(a, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), T(n), p
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    T(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: A(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = n), p
                    }
                }
            }

            function w(t, e, n, r) {
                var i = e && e.prototype instanceof k ? e : k,
                    o = Object.create(i.prototype),
                    a = new L(r || []);
                return o._invoke = function(t, e, n) {
                    var r = f;
                    return function(i, o) {
                        if (r === v) throw new Error("Generator is already running");
                        if (r === d) {
                            if ("throw" === i) throw o;
                            return S()
                        }
                        for (n.method = i, n.arg = o;;) {
                            var a = n.delegate;
                            if (a) {
                                var s = O(a, n);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === f) throw r = d, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = v;
                            var u = x(t, e, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? d : h, u.arg === p) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (r = d, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }(t, n, a), o
            }

            function x(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            function k() {}

            function E() {}

            function j() {}

            function P(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function _(t) {
                var e;
                this._invoke = function(n, r) {
                    function o() {
                        return new Promise(function(e, o) {
                            ! function e(n, r, o, a) {
                                var s = x(t[n], t, r);
                                if ("throw" !== s.type) {
                                    var u = s.arg,
                                        c = u.value;
                                    return c && "object" == typeof c && i.call(c, "__await") ? Promise.resolve(c.__await).then(function(t) {
                                        e("next", t, o, a)
                                    }, function(t) {
                                        e("throw", t, o, a)
                                    }) : Promise.resolve(c).then(function(t) {
                                        u.value = t, o(u)
                                    }, function(t) {
                                        return e("throw", t, o, a)
                                    })
                                }
                                a(s.arg)
                            }(n, r, e, o)
                        })
                    }
                    return e = e ? e.then(o, o) : o()
                }
            }

            function O(t, e) {
                var r = t.iterator[e.method];
                if (r === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = n, O(t, e), "throw" === e.method)) return p;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var i = x(r, t.iterator, e.arg);
                if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, p;
                var o = i.arg;
                return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, p) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p)
            }

            function I(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function T(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function L(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(I, this), this.reset(!0)
            }

            function A(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            o = function e() {
                                for (; ++r < t.length;)
                                    if (i.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = n, e.done = !0, e
                            };
                        return o.next = o
                    }
                }
                return {
                    next: S
                }
            }

            function S() {
                return {
                    value: n,
                    done: !0
                }
            }
        }(function() {
            return this || "object" == typeof self && self
        }() || Function("return this")())
    }, function(t, e) {
        t.exports = function(t) {
            if (Array.isArray(t)) return t
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }
    }, function(t, e) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var r, i, o, a, s, u, c, l, f, h = n(6),
            v = n.n(h),
            d = n(0),
            p = n.n(d),
            m = n(1),
            y = n.n(m),
            g = n(2),
            b = n.n(g),
            w = n(3),
            x = n.n(w),
            k = n(4),
            E = n.n(k),
            j = function() {
                function t(e) {
                    p()(this, t), this.tronGrid = e, this.apiNode = e.tronWeb.eventServer
                }
                return y()(t, [{
                    key: "_httpClient",
                    value: function(t, e, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "get";
                        !e.experimental && this.tronGrid.experimental && (e.experimental = this.tronGrid.experimental), this.apiNode.request(t, e, r).then(function(t) {
                            e.only_data_and_fingerprint ? n(null, t.data, t.meta.fingerprint) : n(null, t)
                        }).catch(function(t) {
                            return n(t)
                        })
                    }
                }, {
                    key: "get",
                    value: function(t, e, n) {
                        return this._httpClient(t, e, n, "get")
                    }
                }, {
                    key: "post",
                    value: function() {}
                }, {
                    key: "put",
                    value: function() {}
                }, {
                    key: "del",
                    value: function() {}
                }]), t
            }(),
            P = function() {
                function t(e) {
                    p()(this, t), r = e.tronWeb, i = r.utils
                }
                return y()(t, [{
                    key: "validatePageData",
                    value: function(t) {
                        if (!t) throw new Error("Invalid data provided.");
                        if ("string" != typeof t && "object" !== v()(t)) throw new Error("Invalid data format provided.");
                        if ("string" == typeof t && -1 === t.indexOf("fingerprint")) throw new Error("It's the last page or missed fingerprint in the links.");
                        if (!("object" !== v()(t) || t.meta && t.meta.fingerprint)) throw new Error("It's the last page or missed fingerprint in the json.")
                    }
                }, {
                    key: "validateAddress",
                    value: function(t) {
                        if (!r.isAddress(t)) throw new Error("Invalid address provided.")
                    }
                }, {
                    key: "validateAssetIdentifier",
                    value: function(t) {
                        if (!t || /[^a-zA-Z0-9_]+/.test(t)) throw new Error("Invalid identifier provided.")
                    }
                }, {
                    key: "validateBlockNumber",
                    value: function(t) {
                        if ("latest" !== t && (!t || /[^0-9]/.test(t.toString()))) throw new Error("Invalid block number provided.")
                    }
                }, {
                    key: "validateTransactionId",
                    value: function(t) {
                        if (!/^[a-z0-9]{64}/.test(t)) throw new Error("Invalid transaction id provided.")
                    }
                }, {
                    key: "validateOptions",
                    value: function(t) {
                        if (t.limit && (!i.isInteger(t.limit) || t.limit < 0 || t.limit > 200)) throw new Error("Limit should be a number between 0 and 200.");
                        if (t.blockNumber && !t.eventName) throw new Error("Usage of block number filtering requires an event name.");
                        if (t.minBlockTimestamp && !i.isInteger(t.minBlockTimestamp)) throw new Error("Invalid minBlockTimestamp provided.");
                        if (t.maxBlockTimestamp && !i.isInteger(t.maxBlockTimestamp) && "now" !== t.maxBlockTimestamp) throw new Error("Invalid maxBlockTimestamp provided.")
                    }
                }]), t
            }(),
            _ = n(8),
            O = n.n(_),
            I = function t(e) {
                if (p()(this, t), !(e && e instanceof M)) throw new Error("Expected instance of TronGrid");
                this.tronGrid = e, this.tronWeb = e.tronWeb, this.injectPromise = O()(this), this.apiNode = this.tronWeb.eventServer, this.utils = this.tronWeb.utils, this.validator = new P(e), this.APIClient = new j(e)
            },
            T = function(t) {
                function e(t) {
                    var n;
                    return p()(this, e), n = b()(this, x()(e).call(this, t)), o = n.utils, n
                }
                return E()(e, t), y()(e, [{
                    key: "get",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return o.isFunction(e) && (n = e, e = {}), n ? (this.validator.validateAddress(t), 34 !== t.length && (t = this.tronWeb.address.fromHex(t)), this.APIClient.get("v1/accounts/".concat(t), e, n)) : this.injectPromise(this.get, t, e)
                    }
                }, {
                    key: "getTransactions",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return o.isFunction(e) && (n = e, e = {}), n ? (this.validator.validateAddress(t), 34 !== t.length && (t = this.tronWeb.address.fromHex(t)), this.APIClient.get("v1/accounts/".concat(t, "/transactions"), e, n)) : this.injectPromise(this.getTransactions, t, e)
                    }
                }, {
                    key: "getTrc20Transactions",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return o.isFunction(e) && (n = e, e = {}), n ? (this.validator.validateAddress(t), 34 !== t.length && (t = this.tronWeb.address.fromHex(t)), this.APIClient.get("v1/accounts/".concat(t, "/transactions/trc20"), e, n)) : this.injectPromise(this.getTrc20Transactions, t, e)
                    }
                }]), e
            }(I),
            L = function(t) {
                function e(t) {
                    var n;
                    return p()(this, e), n = b()(this, x()(e).call(this, t)), a = n.utils, n
                }
                return E()(e, t), y()(e, [{
                    key: "get",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (a.isFunction(e) && (n = e, e = {}), this.validator.validateAssetIdentifier(t), !n) return this.injectPromise(this.get, t, e);
                        this.tronGrid.experimental && (e.experimental = this.tronGrid.experimental), this.APIClient.get("v1/assets/".concat(t), e, n)
                    }
                }, {
                    key: "getList",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return a.isFunction(e) && (n = e, e = {}), this.validator.validateAssetIdentifier(t), this.validator.validateOptions(e), n ? this.APIClient.get("v1/assets/".concat(t, "/list"), e, n) : this.injectPromise(this.getList, t, e)
                    }
                }, {
                    key: "getAll",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return a.isFunction(t) && (e = t, t = {}), this.validator.validateOptions(t), e ? this.APIClient.get("v1/assets", t, e) : this.injectPromise(this.getAll, t)
                    }
                }]), e
            }(I),
            A = function(t) {
                function e(t) {
                    var n;
                    return p()(this, e), n = b()(this, x()(e).call(this, t)), s = n.utils, n
                }
                return E()(e, t), y()(e, [{
                    key: "getEvents",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "latest",
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return s.isFunction(e) && (n = e, e = {}), n ? (this.validator.validateBlockNumber(t), this.APIClient.get("v1/blocks/".concat(t, "/events"), e, n)) : this.injectPromise(this.getEvents, t, e)
                    }
                }]), e
            }(I),
            S = n(5),
            F = n.n(S),
            N = n(9),
            C = n.n(N),
            G = n(7),
            W = n.n(G),
            B = function(t) {
                function e(t) {
                    var n;
                    return p()(this, e), n = b()(this, x()(e).call(this, t)), u = n.utils, n
                }
                return E()(e, t), y()(e, [{
                    key: "getEvents",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return u.isFunction(e) && (n = e, e = {}), n ? (this.validator.validateAddress(t), this.validator.validateOptions(e), t = this.tronWeb.address.fromHex(t), this.APIClient.get("v1/contracts/".concat(t, "/events"), e, n)) : this.injectPromise(this.getEvents, t, e)
                    }
                }, {
                    key: "getTrc20Tokens",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return u.isFunction(e) && (n = e, e = {}), n ? (this.validator.validateAddress(t), t = this.tronWeb.address.fromHex(t), this.APIClient.get("v1/contracts/".concat(t, "/tokens"), e, n)) : this.injectPromise(this.getTrc20Tokens, t, e)
                    }
                }, {
                    key: "watchEvent",
                    value: function() {
                        var t = W()(F.a.mark(function t(e, n) {
                            var r, i, o, a, s, c, l, f = this,
                                h = arguments;
                            return F.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = h.length > 2 && void 0 !== h[2] ? h[2] : {}, i = h.length > 3 && void 0 !== h[3] && h[3], o = !1, a = !1, s = Date.now() - 1e3, u.isFunction(r) && (i = r, r = {}), u.isFunction(i)) {
                                            t.next = 8;
                                            break
                                        }
                                        throw new Error("Invalid callback function provided");
                                    case 8:
                                        return c = function() {
                                            var t = W()(F.a.mark(function t() {
                                                var i, o, u, c, l, h;
                                                return F.a.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (t.prev = 0, !(r = Object.assign({
                                                                    eventName: n,
                                                                    minBlockTimestamp: s,
                                                                    orderBy: "timestamp,desc"
                                                                }, r)).only_data_and_fingerprint) {
                                                                t.next = 8;
                                                                break
                                                            }
                                                            return t.next = 5, f.getEvents(e, r);
                                                        case 5:
                                                            i = t.sent, t.next = 12;
                                                            break;
                                                        case 8:
                                                            return t.next = 10, f.getEvents(e, r);
                                                        case 10:
                                                            o = t.sent, i = o.data;
                                                        case 12:
                                                            return u = i.sort(function(t, e) {
                                                                return e.block_timestamp - t.block_timestamp
                                                            }), c = C()(u, 1), l = c[0], h = i.filter(function(t, e) {
                                                                return !i.slice(0, e).some(function(e) {
                                                                    return JSON.stringify(e) == JSON.stringify(t)
                                                                }) && (!a || t.block_timestamp > a)
                                                            }), l && (a = l.block_timestamp), t.abrupt("return", h);
                                                        case 18:
                                                            return t.prev = 18, t.t0 = t.catch(0), t.abrupt("return", Promise.reject(t.t0));
                                                        case 21:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }, t, null, [
                                                    [0, 18]
                                                ])
                                            }));
                                            return function() {
                                                return t.apply(this, arguments)
                                            }
                                        }(), l = function() {
                                            o && clearInterval(o), o = setInterval(function() {
                                                c().then(function(t) {
                                                    return t.forEach(function(t) {
                                                        i(null, t)
                                                    })
                                                }).catch(function(t) {
                                                    return i(t)
                                                })
                                            }, 3e3)
                                        }, t.next = 12, c();
                                    case 12:
                                        return l(), t.abrupt("return", {
                                            start: l(),
                                            stop: function() {
                                                o && (clearInterval(o), o = !1)
                                            }
                                        });
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]), e
            }(I),
            R = function(t) {
                function e(t) {
                    var n;
                    return p()(this, e), n = b()(this, x()(e).call(this, t)), c = n.utils, n
                }
                return E()(e, t), y()(e, [{
                    key: "getEvents",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return c.isFunction(e) && (n = e, e = {}), n ? (this.validator.validateTransactionId(t), this.APIClient.get("v1/transactions/".concat(t, "/events"), e, n)) : this.injectPromise(this.getEvents, t, e)
                    }
                }]), e
            }(I),
            H = function(t) {
                function e(t) {
                    var n;
                    return p()(this, e), n = b()(this, x()(e).call(this, t)), l = n.utils, f = n.tronGrid.account, n
                }
                return E()(e, t), y()(e, [{
                    key: "setExperimental",
                    value: function(t) {
                        this.tronGrid.setExperimental(t)
                    }
                }, {
                    key: "getTransactions",
                    value: function() {
                        var t = W()(F.a.mark(function t() {
                            var e, n, r, i, o, a, s = arguments;
                            return F.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e = s.length > 0 && void 0 !== s[0] ? s[0] : this.tronWeb.defaultAddress.hex, n = s.length > 1 && void 0 !== s[1] ? s[1] : "all", r = s.length > 2 && void 0 !== s[2] ? s[2] : 20, i = s.length > 3 && void 0 !== s[3] ? s[3] : 0, o = s.length > 4 && void 0 !== s[4] && s[4], l.isFunction(i) && (o = i), l.isFunction(r) && (o = r, r = 20), l.isFunction(n) && (o = n, n = "all"), l.isFunction(e) && (o = e, e = this.tronWeb.defaultAddress.hex), a = {
                                            limit: r,
                                            only_data_and_fingerprint: !0
                                        }, "to" === n ? a.only_to = !0 : "from" === n && (a.only_from = !0), t.abrupt("return", f.getTransactions(e, a, o));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }]), e
            }(I);
        n.d(e, "default", function() {
            return M
        });
        var M = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (p()(this, t), !e) throw new Error("Expected instance of TronWeb");
                this.tronWeb = e, this.utils = e.utils, this.account = new T(this), this.asset = new L(this), this.block = new A(this), this.contract = new B(this), this.transaction = new R(this), this.apiClient = new j(this), this.validator = new P(this), this.injectPromise = O()(this), this.experimental = void 0
            }
            return y()(t, [{
                key: "setExperimental",
                value: function(t) {
                    this.experimental = t
                }
            }, {
                key: "pluginInterface",
                value: function(t) {
                    t.experimental && t.experimental;
                    var e = new H(this);
                    return e.setExperimental(t.experimental), {
                        requires: "^2.2.4",
                        components: {
                            trx: {
                                getTransactionsRelated: e.getTransactions
                            }
                        }
                    }
                }
            }, {
                key: "nextPage",
                value: function(t, e) {
                    return e ? (this.validator.validatePageData(t), "string" == typeof t ? this.apiClient.get(t, {}, e) : "object" === v()(t) ? this.apiClient.get(t.meta.links.next, {}, e) : void 0) : this.injectPromise(this.nextPage, t)
                }
            }]), t
        }()
    }]).default
});
//# sourceMappingURL=trongrid.js.map