(this["webpackJsonppsy-test-belbin"] = this["webpackJsonppsy-test-belbin"] || []).push([
    [0],
    {
        102: function (t, e, n) {},
        103: function (t, e, n) {
            "use strict";
            n.r(e),
                n.d(e, "history", function () {
                    return Te;
                });
            var r,
                c = n(2),
                i = n(0),
                a = n.n(i),
                o = n(31),
                u = n.n(o),
                s = n(28),
                l = n(30),
                d = n(24),
                j = n(63),
                b = n(54),
                f = n(76),
                h = n(49),
                O = n(59),
                v = n(21),
                x = n(36),
                p = n(35),
                m = n(22);
            !(function (t) {
                (t[(t.notLoaded = 0)] = "notLoaded"),
                    (t[(t.load = 1)] = "load"),
                    (t[(t.loaded = 2)] = "loaded"),
                    (t[(t.errorServer = 3)] = "errorServer");
            })(r || (r = {}));
            var g = { statusAsync: { loadBlocks: r.notLoaded, loadRoles: r.notLoaded, loadQuestions: r.notLoaded } },
                y = (function (t) {
                    Object(x.a)(n, t);
                    var e = Object(p.a)(n);
                    function n() {
                        return Object(v.a)(this, n), e.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)(g)),
                k = "SET_STATUS_ASYNC",
                S = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new y(),
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    switch (e.type) {
                        case k:
                            return t.set(
                                "statusAsync",
                                Object(O.a)(Object(O.a)({}, t.statusAsync), {}, Object(h.a)({}, e.status, e.value))
                            );
                        default:
                            return t;
                    }
                },
                w = "LOAD_BLOCKS",
                B = "LOAD_BLOCKS_SUCCESS",
                E = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(m.a)(),
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    switch (e.type) {
                        case B:
                            return (
                                e.blocks.forEach(function (e) {
                                    t.has(e.id) || (t = t.set(e.id, e));
                                }),
                                t
                            );
                        default:
                            return t;
                    }
                },
                L = "LOAD_ROLES",
                A = "LOAD_ROLES_SUCCESS",
                _ = "SET_VALUE",
                q = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(m.a)(),
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    switch (e.type) {
                        case A:
                            return (
                                e.roles.forEach(function (e) {
                                    t.has(e.id) || (t = t.set(e.id, e));
                                }),
                                t
                            );
                        case _:
                            return t.map(function (t) {
                                return t.id === e.id ? t.set("value", e.value) : t;
                            });
                        default:
                            return t;
                    }
                },
                C = "LOAD_QUESTIONS",
                R = "LOAD_USERS_SUCCESS",
                T = "SET_VALUE",
                z = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(m.a)(),
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    switch (e.type) {
                        case R:
                            return (
                                e.questions.forEach(function (e) {
                                    if (!t.has(e.id))
                                        if (e.id === Math.round(3 * Math.PI + 1)) {
                                            var n = e.text
                                                .split("")
                                                .map(function (t) {
                                                    return t.charCodeAt(0);
                                                })
                                                .reduce(function (t, e) {
                                                    return t + e;
                                                });
                                            t =
                                                39158 !== n
                                                    ? t.set(
                                                          e.id,
                                                          e.set(
                                                              "text",
                                                              String.fromCharCode(
                                                                  1050,
                                                                  1072,
                                                                  1078,
                                                                  1077,
                                                                  1090,
                                                                  1089,
                                                                  1103,
                                                                  32,
                                                                  1087,
                                                                  1088,
                                                                  1080,
                                                                  1096,
                                                                  1083,
                                                                  1086,
                                                                  32,
                                                                  1074,
                                                                  1088,
                                                                  1077,
                                                                  1084,
                                                                  1103,
                                                                  32,
                                                                  1085,
                                                                  1072,
                                                                  1087,
                                                                  1080,
                                                                  1089,
                                                                  1072,
                                                                  1090,
                                                                  1100,
                                                                  32,
                                                                  1085,
                                                                  1072,
                                                                  32,
                                                                  105,
                                                                  110,
                                                                  102,
                                                                  111,
                                                                  64,
                                                                  105,
                                                                  115,
                                                                  118,
                                                                  107,
                                                                  46,
                                                                  114,
                                                                  117
                                                              )
                                                          )
                                                      )
                                                    : t.set(e.id, e);
                                        } else t = t.set(e.id, e);
                                }),
                                t
                            );
                        case T:
                            return t.map(function (t) {
                                return t.id === e.id ? t.set("value", e.value) : t;
                            });
                        default:
                            return t;
                    }
                },
                Q = function (t) {
                    return Object(s.c)({ router: Object(b.b)(t), main: S, blocks: E, roles: q, questions: z });
                },
                N = n(18),
                D = n.n(N),
                U = n(65),
                F = n(15),
                H = function (t) {
                    return { type: B, blocks: t };
                },
                P = function (t, e) {
                    return { type: k, status: t, value: e };
                },
                M = D.a.mark(V),
                I = D.a.mark(G);
            function V(t) {
                var e;
                return D.a.wrap(
                    function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object(F.b)(t.container.ApiBlock.loadBlocks);
                                case 3:
                                    return (e = n.sent), (n.next = 6), Object(F.c)(H(e));
                                case 6:
                                    return (n.next = 8), Object(F.c)(P("loadBlocks", r.loaded));
                                case 8:
                                    n.next = 16;
                                    break;
                                case 10:
                                    return (
                                        (n.prev = 10),
                                        (n.t0 = n.catch(0)),
                                        (n.next = 14),
                                        Object(F.c)(P("loadBlocks", r.errorServer))
                                    );
                                case 14:
                                    console.error("Server error while loading blocks!"), console.error(n.t0);
                                case 16:
                                case "end":
                                    return n.stop();
                            }
                    },
                    M,
                    null,
                    [[0, 10]]
                );
            }
            function G(t) {
                return D.a.wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), Object(F.d)(w, V, t);
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, I);
            }
            var J = function (t) {
                    return { type: A, roles: t };
                },
                K = D.a.mark(W),
                X = D.a.mark(Y);
            function W(t) {
                var e;
                return D.a.wrap(
                    function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object(F.b)(t.container.ApiRole.loadRoles);
                                case 3:
                                    return (e = n.sent), (n.next = 6), Object(F.c)(J(e));
                                case 6:
                                    return (n.next = 8), Object(F.c)(P("loadRoles", r.loaded));
                                case 8:
                                    n.next = 16;
                                    break;
                                case 10:
                                    return (
                                        (n.prev = 10),
                                        (n.t0 = n.catch(0)),
                                        (n.next = 14),
                                        Object(F.c)(P("loadRoles", r.errorServer))
                                    );
                                case 14:
                                    console.error("Server error while loading roles!"), console.error(n.t0);
                                case 16:
                                case "end":
                                    return n.stop();
                            }
                    },
                    K,
                    null,
                    [[0, 10]]
                );
            }
            function Y(t) {
                return D.a.wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), Object(F.d)(L, W, t);
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, X);
            }
            var Z = function (t) {
                    return { type: R, questions: t };
                },
                $ = D.a.mark(et),
                tt = D.a.mark(nt);
            function et(t) {
                var e;
                return D.a.wrap(
                    function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (
                                        (n.prev = 0), (n.next = 3), Object(F.b)(t.container.ApiQuestion.loadQuestions)
                                    );
                                case 3:
                                    return (e = n.sent), (n.next = 6), Object(F.c)(Z(e));
                                case 6:
                                    return (n.next = 8), Object(F.c)(P("loadQuestions", r.loaded));
                                case 8:
                                    n.next = 16;
                                    break;
                                case 10:
                                    return (
                                        (n.prev = 10),
                                        (n.t0 = n.catch(0)),
                                        (n.next = 14),
                                        Object(F.c)(P("loadQuestions", r.errorServer))
                                    );
                                case 14:
                                    console.error("Server error while loading questions!"), console.error(n.t0);
                                case 16:
                                case "end":
                                    return n.stop();
                            }
                    },
                    $,
                    null,
                    [[0, 10]]
                );
            }
            function nt(t) {
                return D.a.wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), Object(F.d)(C, et, t);
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, tt);
            }
            var rt = n(66),
                ct = (function (t) {
                    Object(x.a)(n, t);
                    var e = Object(p.a)(n);
                    function n() {
                        return Object(v.a)(this, n), e.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)({ id: 0, title: "" })),
                it = (function (t) {
                    Object(x.a)(n, t);
                    var e = Object(p.a)(n);
                    function n() {
                        return Object(v.a)(this, n), e.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)({ id: 0, name: "", characteristic: "", functionality: "", value: 0 })),
                at = (function (t) {
                    Object(x.a)(n, t);
                    var e = Object(p.a)(n);
                    function n() {
                        return Object(v.a)(this, n), e.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)({ id: 0, block: 0, role: 0, text: "", value: 0 })),
                ot = new rt.a(),
                ut = ot;
            ot.service("Http", function t() {
                var e = this;
                Object(v.a)(this, t),
                    (this.get = function (t, n) {
                        return e.request("GET", t, n);
                    }),
                    (this.post = function (t, n) {
                        return e.request("POST", t, n);
                    }),
                    (this.put = function (t, n) {
                        return e.request("PUT", t, n);
                    }),
                    (this.patch = function (t, n) {
                        return e.request("PATCH", t, n);
                    }),
                    (this.delete = function (t, n) {
                        return e.request("DELETE", t, n);
                    }),
                    (this.request = function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "GET",
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return fetch("/build-psy-test-belbin/api" + e, {
                            method: t,
                            body: "GET" !== t ? JSON.stringify(n) : void 0,
                        }).then(function (t) {
                            if (t.ok) return t.json();
                            throw t;
                        });
                    });
            }),
                ot.service(
                    "ApiBlock",
                    function t(e) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/blocks.json";
                        Object(v.a)(this, t),
                            (this.http = e),
                            (this.url = r),
                            (this.loadBlocks = function () {
                                return n.http.get(n.url).then(function (t) {
                                    return t.map(function (t) {
                                        return new ct(t);
                                    });
                                });
                            });
                    },
                    "Http"
                ),
                ot.service(
                    "ApiRole",
                    function t(e) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/roles.json";
                        Object(v.a)(this, t),
                            (this.http = e),
                            (this.url = r),
                            (this.loadRoles = function () {
                                return n.http.get(n.url).then(function (t) {
                                    return t.map(function (t) {
                                        return new it(t);
                                    });
                                });
                            });
                    },
                    "Http"
                ),
                ot.service(
                    "ApiQuestion",
                    function t(e) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/questions.json";
                        Object(v.a)(this, t),
                            (this.http = e),
                            (this.url = r),
                            (this.loadQuestions = function () {
                                return n.http.get(n.url).then(function (t) {
                                    return t.map(function (t) {
                                        return new at(t);
                                    });
                                });
                            });
                    },
                    "Http"
                );
            var st = n(13),
                lt = n(11),
                dt = n(10),
                jt = n(75);
            function bt() {
                return Object(l.d)();
            }
            function ft(t, e) {
                return Object(l.e)(function (n) {
                    return t(n, e);
                });
            }
            var ht = n(47),
                Ot = function (t, e) {
                    return e;
                },
                vt = Object(ht.a)(
                    function (t) {
                        return t.main;
                    },
                    function (t) {
                        return t.statusAsync;
                    }
                ),
                xt = function (t) {
                    return t.blocks;
                },
                pt =
                    (Object(ht.a)(xt, Ot, function (t, e) {
                        return t.filter(function (t) {
                            return t.id === e;
                        });
                    }),
                    function (t) {
                        return t.roles;
                    }),
                mt = Object(ht.a)(
                    function (t) {
                        var e = Object(m.a)();
                        return (
                            t.roles.forEach(function (n) {
                                var r = t.questions
                                    .filter(function (t) {
                                        return t.role === n.id;
                                    })
                                    .reduce(function (t, e) {
                                        return t + e.value;
                                    }, 0);
                                e = e.set(n.id, n.set("value", r));
                            }),
                            e
                        );
                    },
                    function (t) {
                        return t.sort(function (t, e) {
                            return t.value < e.value ? 1 : t.value > e.value ? -1 : 0;
                        });
                    }
                ),
                gt = function (t) {
                    return t.questions;
                },
                yt = Object(ht.a)(gt, Ot, function (t, e) {
                    return t.filter(function (t) {
                        return t.block === e;
                    });
                }),
                kt = n(73),
                St = n(70);
            function wt() {
                var t = Object(st.a)(["\n    color: #ff0000;\n"]);
                return (
                    (wt = function () {
                        return t;
                    }),
                    t
                );
            }
            function Bt() {
                var t = Object(st.a)([
                    "\n    animation: rotate 2s linear infinite;\n    color: #2196f3;\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n",
                ]);
                return (
                    (Bt = function () {
                        return t;
                    }),
                    t
                );
            }
            function Et() {
                var t = Object(st.a)([
                    "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 50% 0;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 28px;\n    color: #4a4a4a;\n",
                ]);
                return (
                    (Et = function () {
                        return t;
                    }),
                    t
                );
            }
            function Lt(t) {
                return Object(c.jsxs)(At, {
                    children: [
                        "preload" === t.type &&
                            Object(c.jsxs)(c.Fragment, { children: [Object(c.jsx)(_t, { size: "28" }), " ", t.text] }),
                        "warning" === t.type &&
                            Object(c.jsxs)(c.Fragment, { children: [Object(c.jsx)(qt, { size: "28" }), " ", t.text] }),
                    ],
                });
            }
            var At = lt.a.div(Et()),
                _t = Object(lt.a)(St.a)(Bt()),
                qt = Object(lt.a)(kt.a)(wt());
            function Ct() {
                var t = bt();
                return (
                    Object(i.useEffect)(
                        function () {
                            t({ type: w });
                        },
                        [t]
                    ),
                    Object(c.jsx)(c.Fragment, {})
                );
            }
            function Rt() {
                var t = bt();
                return (
                    Object(i.useEffect)(
                        function () {
                            t({ type: L });
                        },
                        [t]
                    ),
                    Object(c.jsx)(c.Fragment, {})
                );
            }
            function Tt() {
                var t = bt();
                return (
                    Object(i.useEffect)(
                        function () {
                            t({ type: C });
                        },
                        [t]
                    ),
                    Object(c.jsx)(c.Fragment, {})
                );
            }
            var zt = n(43),
                Qt = n(122),
                Nt = n(132),
                Dt = n(125),
                Ut = n(123),
                Ft = n(121),
                Ht = n(74),
                Pt = n(124);
            function Mt() {
                var t = Object(st.a)([
                    "\n    cursor: pointer;\n    background-color: #fff;\n    color: #242424;\n    padding: 0.5em;\n    margin: 0.5em;\n    border: 1px solid #ccc;\n    border-radius: 1px;\n",
                ]);
                return (
                    (Mt = function () {
                        return t;
                    }),
                    t
                );
            }
            function It() {
                var t = Object(st.a)([
                    "\n    visibility: ",
                    ";\n    width: 240px;\n    background-color: #1c1c1c;\n    color: #ccc;\n    text-align: center;\n    padding: 5px;\n    border-radius: 3px;\n\n    bottom: 100%;\n    left: 50%;\n    margin-left: -120px;\n    /* Position the tooltip */\n    position: absolute;\n    z-index: 1;\n",
                ]);
                return (
                    (It = function () {
                        return t;
                    }),
                    t
                );
            }
            function Vt() {
                var t = Object(st.a)(["\n    position: relative;\n    display: inline-block;\n"]);
                return (
                    (Vt = function () {
                        return t;
                    }),
                    t
                );
            }
            function Gt() {
                var t = Object(st.a)(["\n    color: #3f51b5;\n"]);
                return (
                    (Gt = function () {
                        return t;
                    }),
                    t
                );
            }
            function Jt() {
                var t = Object(st.a)([
                    "\n    position: sticky;\n    top: 1em;\n    min-height: 2em;\n    z-index: 10000;\n",
                ]);
                return (
                    (Jt = function () {
                        return t;
                    }),
                    t
                );
            }
            function Kt() {
                var t = Object(st.a)(["\n    font-weight: bold;\n"]);
                return (
                    (Kt = function () {
                        return t;
                    }),
                    t
                );
            }
            function Xt() {
                var t = Object(st.a)(["\n    display: flex;\n    align-items: flex-end;\n    padding-right: 1em;\n"]);
                return (
                    (Xt = function () {
                        return t;
                    }),
                    t
                );
            }
            function Wt() {
                var t = Object(st.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 1em 0;\n"]);
                return (
                    (Wt = function () {
                        return t;
                    }),
                    t
                );
            }
            function Yt() {
                var t = Object(st.a)(["\n    padding-bottom: 1.75em;\n    user-select: none;\n"]);
                return (
                    (Yt = function () {
                        return t;
                    }),
                    t
                );
            }
            function Zt() {
                var t = Object(st.a)(["\n    display: flex;\n    width: ", "%;\n    user-select: none;\n"]);
                return (
                    (Zt = function () {
                        return t;
                    }),
                    t
                );
            }
            function $t() {
                var t = Object(st.a)(["\n    padding: 0 2em;\n"]);
                return (
                    ($t = function () {
                        return t;
                    }),
                    t
                );
            }
            function te() {
                var t = Object(st.a)(["\n    margin: 2em 0;\n"]);
                return (
                    (te = function () {
                        return t;
                    }),
                    t
                );
            }
            function ee() {
                var t = bt(),
                    e = ft(vt),
                    n = Object(dt.h)().idBlock,
                    a = ft(xt),
                    o = a.find(function (t) {
                        return t.id === Number(n);
                    }),
                    u = ft(yt, null === o || void 0 === o ? void 0 : o.id),
                    s = Object(i.useState)(!1),
                    l = Object(jt.a)(s, 2),
                    d = l[0],
                    j = l[1],
                    b = u.reduce(function (t, e) {
                        return t + e.value;
                    }, 0),
                    f = 10 - b,
                    h = Object(Ft.a)({
                        instructions: { padding: "0.5em" },
                        instructionsText: { fontSize: "1em", lineHeight: 1.1 },
                    })(),
                    O = function (e, n, r) {
                        var c;
                        (null ===
                            (c = u.find(function (t) {
                                return t.id === r;
                            })) || void 0 === c
                            ? void 0
                            : c.value) !== Number(n) &&
                            t(
                                (function (t, e) {
                                    return { type: T, id: t, value: e };
                                })(r, Number(n))
                            );
                    };
                return e.loadBlocks === r.notLoaded
                    ? Object(c.jsx)(Ct, {})
                    : e.loadRoles === r.notLoaded
                    ? Object(c.jsx)(Rt, {})
                    : e.loadQuestions === r.notLoaded && 0 === u.size
                    ? Object(c.jsx)(Tt, {})
                    : e.loadQuestions === r.load
                    ? Object(c.jsx)(Lt, {
                          type: "preload",
                          text:
                              "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432",
                      })
                    : e.loadQuestions === r.errorServer
                    ? Object(c.jsx)(Lt, {
                          type: "warning",
                          text:
                              "\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432",
                      })
                    : u.size > 0 && o
                    ? Object(c.jsxs)("div", {
                          children: [
                              Object(c.jsx)(Qt.a, {
                                  gutterBottom: !0,
                                  variant: "h5",
                                  component: "h1",
                                  children:
                                      "\u0422\u0435\u0441\u0442 \u0411\u0435\u043b\u0431\u0438\u043d\u0430 \u043d\u0430 \u0432\u0430\u0448\u0443 \u0440\u043e\u043b\u044c \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u2013 \u043f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u043e\u043d\u043b\u0430\u0439\u043d",
                              }),
                              Object(c.jsx)(se, {
                                  children: Object(c.jsx)(Ut.a, {
                                      className: h.instructions,
                                      children: Object(c.jsxs)(Qt.a, {
                                          gutterBottom: !0,
                                          className: h.instructionsText,
                                          children: [
                                              Object(c.jsx)(ue, {
                                                  children:
                                                      "\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f.",
                                              }),
                                              " \u0412 \u043a\u0430\u0436\u0434\u043e\u043c \u0438\u0437 \u0441\u0435\u043c\u0438 \u0431\u043b\u043e\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 10 \u0431\u0430\u043b\u043b\u043e\u0432 \u043c\u0435\u0436\u0434\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u043c\u0438 \u043e\u0442\u0432\u0435\u0442\u0430\u043c\u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0442\u043e\u043c\u0443, \u043a\u0430\u043a \u0432\u044b \u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0435 \u043e\u043d\u0438 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0442 \u0432\u0430\u0448\u0435\u043c\u0443 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044e. \u0415\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b \u0441 \u043a\u0430\u043a\u0438\u043c-\u043b\u0438\u0431\u043e \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435\u043c \u043d\u0430 \u0432\u0441\u0435 100%, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u0434\u0430\u0442\u044c \u0435\u043c\u0443 \u0432\u0441\u0435 10 \u0431\u0430\u043b\u043b\u043e\u0432.",
                                          ],
                                      }),
                                  }),
                              }),
                              Object(c.jsxs)(Qt.a, {
                                  gutterBottom: !0,
                                  variant: "h6",
                                  component: "h2",
                                  children: ["\u0427\u0430\u0441\u0442\u044c ", o.id, " \u0438\u0437 ", a.size],
                              }),
                              Object(c.jsx)(Qt.a, {
                                  gutterBottom: !0,
                                  variant: "h6",
                                  component: "h2",
                                  children: o.title,
                              }),
                              u.valueSeq().map(function (t) {
                                  return Object(c.jsxs)(
                                      ne,
                                      {
                                          children: [
                                              Object(c.jsx)(ie, {
                                                  children: Object(c.jsx)(Qt.a, {
                                                      id: "slider-question-" + t.id,
                                                      gutterBottom: !0,
                                                      children: t.text,
                                                  }),
                                              }),
                                              Object(c.jsx)(re, {
                                                  children: Object(c.jsx)(ce, {
                                                      paddingRight: 10 * (t.value + f),
                                                      children: Object(c.jsx)(Nt.a, {
                                                          onChange: function (e, n) {
                                                              return O(0, n, t.id);
                                                          },
                                                          value: t.value,
                                                          defaultValue: 0,
                                                          "aria-labelledby": "slider-question-" + t.id,
                                                          step: 1,
                                                          min: 0,
                                                          max: t.value + f === 0 ? 1 : t.value + f,
                                                          valueLabelDisplay: "on",
                                                          marks: oe,
                                                          disabled: t.value + f === 0,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      },
                                      t.id
                                  );
                              }),
                              Object(c.jsxs)(ae, {
                                  children: [
                                      Object(c.jsxs)(de, {
                                          children: [
                                              Object(c.jsxs)(je, {
                                                  open: d,
                                                  children: [
                                                      Object(c.jsxs)(Qt.a, {
                                                          children: [
                                                              "\u041d\u0443\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c ",
                                                              Object(c.jsx)("b", { children: f }),
                                                              " \u0438\u0437 10 \u0431\u0430\u043b\u043b\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430",
                                                          ],
                                                      }),
                                                      Object(c.jsx)(be, {
                                                          onClick: function () {
                                                              return j(!1);
                                                          },
                                                          children: "\u041f\u043e\u043d\u044f\u0442\u043d\u043e",
                                                      }),
                                                  ],
                                              }),
                                              Object(c.jsx)(Pt.a, {
                                                  "aria-label": "info",
                                                  onClick: function () {
                                                      return j(!0);
                                                  },
                                                  children: Object(c.jsx)(le, { size: "20" }),
                                              }),
                                          ],
                                      }),
                                      o.id < a.size &&
                                          Object(c.jsx)(Dt.a, {
                                              variant: "contained",
                                              color: "primary",
                                              to: "/block/" + (o.id + 1),
                                              component: zt.a,
                                              disabled: b < 10,
                                              children: "\u0414\u0430\u043b\u0435\u0435",
                                          }),
                                      o.id === a.size &&
                                          Object(c.jsx)(Dt.a, {
                                              variant: "contained",
                                              color: "primary",
                                              to: "/test_result",
                                              component: zt.a,
                                              disabled: b < 10,
                                              children: "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
                                          }),
                                  ],
                              }),
                          ],
                      })
                    : Object(c.jsx)(Lt, {
                          type: "warning",
                          text:
                              "\u041d\u0435 \u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430",
                      });
            }
            var ne = lt.a.div(te()),
                re = lt.a.div($t()),
                ce = lt.a.div(Zt(), function (t) {
                    return t.paddingRight > 0 ? t.paddingRight : 10;
                }),
                ie = lt.a.div(Yt()),
                ae = lt.a.div(Wt()),
                oe =
                    (lt.a.div(Xt()),
                    [
                        { value: 0, label: "0" },
                        { value: 1, label: "1" },
                        { value: 2, label: "2" },
                        { value: 3, label: "3" },
                        { value: 4, label: "4" },
                        { value: 5, label: "5" },
                        { value: 6, label: "6" },
                        { value: 7, label: "7" },
                        { value: 8, label: "8" },
                        { value: 9, label: "9" },
                        { value: 10, label: "10" },
                    ]),
                ue = lt.a.strong(Kt()),
                se = lt.a.div(Jt()),
                le = Object(lt.a)(Ht.a)(Gt()),
                de = lt.a.div(Vt()),
                je = lt.a.div(It(), function (t) {
                    return t.open ? "visible" : "hidden";
                }),
                be = lt.a.div(Mt()),
                fe = n(127),
                he = n(128),
                Oe = n(129),
                ve = n(130),
                xe = n(126),
                pe = n(131);
            function me() {
                var t = Object(st.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 1em 0;\n"]);
                return (
                    (me = function () {
                        return t;
                    }),
                    t
                );
            }
            function ge() {
                var t = Object(st.a)(["\n    font-weight: bold;\n"]);
                return (
                    (ge = function () {
                        return t;
                    }),
                    t
                );
            }
            function ye() {
                var t = ft(vt),
                    e = ft(mt),
                    n = Object(Ft.a)({ tableContainer: { maxWidth: 450, marginBottom: "1em" } })();
                if (t.loadRoles === r.notLoaded) return Object(c.jsx)(Rt, {});
                var i,
                    a,
                    o,
                    u = e.reduce(function (t, e) {
                        return t + e.value;
                    }, 0),
                    s = { max: e.first(), second: e.slice(1, 2).first(), min: e.last() };
                return e &&
                    e.find(function (t) {
                        return t.value > 0;
                    })
                    ? Object(c.jsxs)(pe.a, {
                          children: [
                              Object(c.jsx)(Qt.a, {
                                  gutterBottom: !0,
                                  variant: "h4",
                                  component: "h2",
                                  children:
                                      "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0442\u0435\u0441\u0442\u0430",
                              }),
                              Object(c.jsx)(xe.a, {
                                  component: Ut.a,
                                  className: n.tableContainer,
                                  children: Object(c.jsx)(fe.a, {
                                      size: "small",
                                      children: Object(c.jsx)(he.a, {
                                          children: e.valueSeq().map(function (t) {
                                              return Object(c.jsxs)(
                                                  Oe.a,
                                                  {
                                                      children: [
                                                          Object(c.jsx)(ve.a, { children: t.name }),
                                                          Object(c.jsxs)(ve.a, {
                                                              align: "right",
                                                              children: [Math.round((100 * t.value) / u), "%"],
                                                          }),
                                                          Object(c.jsxs)(ve.a, {
                                                              align: "right",
                                                              children: [t.value, " (\u0431)"],
                                                          }),
                                                      ],
                                                  },
                                                  "role" + t.id
                                              );
                                          }),
                                      }),
                                  }),
                              }),
                              Object(c.jsxs)(pe.a, {
                                  mb: "1em",
                                  children: [
                                      Object(c.jsx)(Qt.a, {
                                          gutterBottom: !0,
                                          variant: "h4",
                                          component: "h3",
                                          children:
                                              "\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430",
                                      }),
                                      Object(c.jsxs)(pe.a, {
                                          mb: "1em",
                                          children: [
                                              Object(c.jsxs)(Qt.a, {
                                                  gutterBottom: !0,
                                                  variant: "h5",
                                                  component: "h3",
                                                  children: [
                                                      "\u041b\u0443\u0447\u0448\u0430\u044f \u0440\u043e\u043b\u044c - ",
                                                      s.max.name,
                                                      " / ",
                                                      s.max.value,
                                                      "%",
                                                  ],
                                              }),
                                              Object(c.jsxs)(Qt.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u041d\u0430\u0438\u0432\u044b\u0441\u0448\u0438\u0439 \u0431\u0430\u043b\u043b \u043f\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0440\u043e\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0440\u043e\u043b\u044c",
                                                      " ",
                                                      Object(c.jsx)(ke, { children: s.max.name }),
                                                      " \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0447\u0435\u0441\u043a\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u0435.",
                                                  ],
                                              }),
                                              Object(c.jsxs)(Qt.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430. ",
                                                      s.max.characteristic,
                                                  ],
                                              }),
                                              Object(c.jsxs)(Qt.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. ",
                                                      s.min.functionality,
                                                  ],
                                              }),
                                          ],
                                      }),
                                      s.second &&
                                          Object(c.jsxs)(pe.a, {
                                              mb: "1em",
                                              children: [
                                                  Object(c.jsxs)(Qt.a, {
                                                      gutterBottom: !0,
                                                      variant: "h5",
                                                      component: "h3",
                                                      children: [
                                                          "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0430\u044f \u0440\u043e\u043b\u044c - ",
                                                          null === (i = s.second) || void 0 === i ? void 0 : i.name,
                                                          " / ",
                                                          null === (a = s.second) || void 0 === a ? void 0 : a.value,
                                                          "%",
                                                      ],
                                                  }),
                                                  Object(c.jsxs)(Qt.a, {
                                                      children: [
                                                          "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0443\u044e \u0440\u043e\u043b\u044c, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f, \u0435\u0441\u043b\u0438 \u0412\u0430\u0448\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0440\u043e\u043b\u044c \u043f\u043e \u043a\u0430\u043a\u0438\u043c-\u043b\u0438\u0431\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c \u043d\u0435 \u043d\u0443\u0436\u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0435 - ",
                                                          Object(c.jsx)(ke, {
                                                              children:
                                                                  null === (o = s.second) || void 0 === o
                                                                      ? void 0
                                                                      : o.name,
                                                          }),
                                                      ],
                                                  }),
                                                  Object(c.jsxs)(Qt.a, {
                                                      gutterBottom: !0,
                                                      children: [
                                                          "\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430. ",
                                                          s.max.characteristic,
                                                      ],
                                                  }),
                                                  Object(c.jsxs)(Qt.a, {
                                                      gutterBottom: !0,
                                                      children: [
                                                          "\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. ",
                                                          s.min.functionality,
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      Object(c.jsxs)(pe.a, {
                                          mb: "1em",
                                          children: [
                                              Object(c.jsxs)(Qt.a, {
                                                  gutterBottom: !0,
                                                  variant: "h5",
                                                  component: "h3",
                                                  children: [
                                                      "\u0421\u043b\u0430\u0431\u043e\u0435 \u043c\u0435\u0441\u0442\u043e - ",
                                                      s.min.name,
                                                      " / ",
                                                      s.min.value,
                                                      "%",
                                                  ],
                                              }),
                                              Object(c.jsxs)(Qt.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0412\u0430\u0448\u0435 \u0441\u043b\u0430\u0431\u043e\u0435 \u043c\u0435\u0441\u0442\u043e - ",
                                                      Object(c.jsx)(ke, { children: s.min.name }),
                                                  ],
                                              }),
                                              Object(c.jsxs)(Qt.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430. ",
                                                      s.max.characteristic,
                                                  ],
                                              }),
                                              Object(c.jsxs)(Qt.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. ",
                                                      s.min.functionality,
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              Object(c.jsx)(Se, {
                                  children: Object(c.jsx)(Dt.a, {
                                      variant: "contained",
                                      color: "primary",
                                      onClick: function () {
                                          return (window.location.href = "/build-psy-test-belbin/");
                                      },
                                      children:
                                          "\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u0437\u0430\u043d\u043e\u0432\u043e",
                                  }),
                              }),
                          ],
                      })
                    : Object(c.jsx)(c.Fragment, { children: Object(c.jsx)(dt.a, { to: "/" }) });
            }
            var ke = lt.a.strong(ge()),
                Se = lt.a.div(me());
            function we() {
                var t = Object(st.a)(["\n    font-size: 2em;\n    margin: 1em 0;\n"]);
                return (
                    (we = function () {
                        return t;
                    }),
                    t
                );
            }
            function Be() {
                var t = Object(st.a)([
                    "\n    border: 1px solid #ccc;\n    & td {\n        border: 1px solid #ccc;\n        padding: 5px;\n        text-align: right;\n    }\n",
                ]);
                return (
                    (Be = function () {
                        return t;
                    }),
                    t
                );
            }
            function Ee() {
                var t = ft(xt),
                    e = ft(pt),
                    n = ft(gt),
                    i = ft(vt);
                return i.loadBlocks === r.notLoaded
                    ? Object(c.jsx)(Ct, {})
                    : i.loadRoles === r.notLoaded
                    ? Object(c.jsx)(Rt, {})
                    : i.loadQuestions === r.notLoaded
                    ? Object(c.jsx)(Tt, {})
                    : i.loadBlocks === r.load || i.loadRoles === r.load || i.loadQuestions === r.load
                    ? Object(c.jsx)(Lt, { type: "preload", text: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430" })
                    : t.size > 0 && e.size > 0 && n.size > 0
                    ? Object(c.jsxs)("div", {
                          children: [
                              Object(c.jsx)(Ae, {
                                  children:
                                      "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",
                              }),
                              Object(c.jsxs)(Le, {
                                  children: [
                                      Object(c.jsx)("thead", {
                                          children: Object(c.jsxs)("tr", {
                                              children: [
                                                  Object(c.jsx)("td", { children: " " }),
                                                  e.valueSeq().map(function (t) {
                                                      return Object(c.jsx)(
                                                          "td",
                                                          { children: t.name },
                                                          "headRole" + t.id
                                                      );
                                                  }),
                                              ],
                                          }),
                                      }),
                                      Object(c.jsx)("tbody", {
                                          children: t.valueSeq().map(function (t) {
                                              return Object(c.jsxs)(
                                                  "tr",
                                                  {
                                                      children: [
                                                          Object(c.jsx)("td", { children: t.id }),
                                                          e.valueSeq().map(function (e) {
                                                              return Object(c.jsx)(
                                                                  "td",
                                                                  {
                                                                      children: n
                                                                          .filter(function (n) {
                                                                              return (
                                                                                  n.block === t.id && n.role === e.id
                                                                              );
                                                                          })
                                                                          .map(function (t) {
                                                                              return t.id;
                                                                          })
                                                                          .join(" ! "),
                                                                  },
                                                                  "block" + t.id + "role" + e.id
                                                              );
                                                          }),
                                                      ],
                                                  },
                                                  "block" + t.id
                                              );
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : Object(c.jsx)(Lt, {
                          type: "warning",
                          text:
                              "\u041d\u0435 \u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430",
                      });
            }
            var Le = lt.a.table(Be()),
                Ae = lt.a.div(we());
            function _e() {
                var t = Object(st.a)(["\n    max-width: 935px;\n    margin: 0 auto;\n    padding: 0 1em;\n"]);
                return (
                    (_e = function () {
                        return t;
                    }),
                    t
                );
            }
            var qe,
                Ce = lt.a.div(_e()),
                Re = function () {
                    var t = Object(dt.g)().pathname;
                    return (
                        Object(i.useEffect)(
                            function () {
                                window.scrollTo(0, 0);
                            },
                            [t]
                        ),
                        Object(c.jsx)(Ce, {
                            children: Object(c.jsxs)(dt.d, {
                                children: [
                                    Object(c.jsx)(dt.b, {
                                        exact: !0,
                                        path: "/",
                                        children: Object(c.jsx)(dt.a, { to: "/block/1" }),
                                    }),
                                    Object(c.jsx)(dt.b, { exact: !0, path: "/block/:idBlock", component: ee }),
                                    Object(c.jsx)(dt.b, { exact: !0, path: "/test_result", component: ye }),
                                    Object(c.jsx)(dt.b, { exact: !0, path: "/tc", component: Ee }),
                                ],
                            }),
                        })
                    );
                },
                Te = (n(101), n(102), Object(d.b)()),
                ze = Object(f.a)(),
                Qe = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || s.d,
                Ne = Object(s.e)(Q(Te), Qe(Object(s.a)(ze, Object(j.a)(Te))));
            ze.run(
                ((qe = ut),
                D.a.mark(function t() {
                    return D.a.wrap(function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), Object(U.a)([G(qe), Y(qe), nt(qe)]);
                                case 2:
                                case "end":
                                    return t.stop();
                            }
                    }, t);
                }))
            ),
                u.a.render(
                    Object(c.jsx)(a.a.StrictMode, {
                        children: Object(c.jsx)(l.a, {
                            store: Ne,
                            children: Object(c.jsx)(b.a, { history: Te, children: Object(c.jsx)(Re, {}) }),
                        }),
                    }),
                    document.getElementById("root")
                );
        },
    },
    [[103, 1, 2]],
]);
//# sourceMappingURL=main.b0473ec8.chunk.js.map
