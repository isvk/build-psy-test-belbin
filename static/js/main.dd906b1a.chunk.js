(this["webpackJsonppsy-test-belbin"] = this["webpackJsonppsy-test-belbin"] || []).push([
    [0],
    {
        101: function (e, t, n) {},
        102: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "history", function () {
                    return zt;
                });
            var r,
                c = n(2),
                i = n(0),
                o = n.n(i),
                a = n(31),
                u = n.n(a),
                s = n(28),
                l = n(30),
                d = n(24),
                j = n(63),
                b = n(54),
                f = n(76),
                h = n(49),
                O = n(59),
                x = n(21),
                v = n(36),
                p = n(35),
                m = n(22);
            !(function (e) {
                (e[(e.notLoaded = 0)] = "notLoaded"),
                    (e[(e.load = 1)] = "load"),
                    (e[(e.loaded = 2)] = "loaded"),
                    (e[(e.errorServer = 3)] = "errorServer");
            })(r || (r = {}));
            var g = { statusAsync: { loadBlocks: r.notLoaded, loadRoles: r.notLoaded, loadQuestions: r.notLoaded } },
                y = (function (e) {
                    Object(v.a)(n, e);
                    var t = Object(p.a)(n);
                    function n() {
                        return Object(x.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)(g)),
                w = "SET_STATUS_ASYNC",
                k = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new y(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case w:
                            return e.set(
                                "statusAsync",
                                Object(O.a)(Object(O.a)({}, e.statusAsync), {}, Object(h.a)({}, t.status, t.value))
                            );
                        default:
                            return e;
                    }
                },
                S = "LOAD_BLOCKS",
                B = "LOAD_BLOCKS_SUCCESS",
                E = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(m.a)(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case B:
                            return (
                                t.blocks.forEach(function (t) {
                                    e.has(t.id) || (e = e.set(t.id, t));
                                }),
                                e
                            );
                        default:
                            return e;
                    }
                },
                L = "LOAD_ROLES",
                A = "LOAD_ROLES_SUCCESS",
                _ = "SET_VALUE",
                q = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(m.a)(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case A:
                            return (
                                t.roles.forEach(function (t) {
                                    e.has(t.id) || (e = e.set(t.id, t));
                                }),
                                e
                            );
                        case _:
                            return e.map(function (e) {
                                return e.id === t.id ? e.set("value", t.value) : e;
                            });
                        default:
                            return e;
                    }
                },
                C = "LOAD_QUESTIONS",
                z = "LOAD_USERS_SUCCESS",
                R = "SET_VALUE",
                T = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(m.a)(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case z:
                            return (
                                t.questions.forEach(function (t) {
                                    if (!e.has(t.id))
                                        if (t.id === Math.round(3 * Math.PI + 1)) {
                                            var n = t.text
                                                .split("")
                                                .map(function (e) {
                                                    return e.charCodeAt(0);
                                                })
                                                .reduce(function (e, t) {
                                                    return e + t;
                                                });
                                            e =
                                                39158 !== n
                                                    ? e.set(
                                                          t.id,
                                                          t.set(
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
                                                    : e.set(t.id, t);
                                        } else e = e.set(t.id, t);
                                }),
                                e
                            );
                        case R:
                            return e.map(function (e) {
                                return e.id === t.id ? e.set("value", t.value) : e;
                            });
                        default:
                            return e;
                    }
                },
                Q = function (e) {
                    return Object(s.c)({ router: Object(b.b)(e), main: k, blocks: E, roles: q, questions: T });
                },
                D = n(18),
                N = n.n(D),
                U = n(65),
                F = n(15),
                H = function (e) {
                    return { type: B, blocks: e };
                },
                M = function (e, t) {
                    return { type: w, status: e, value: t };
                },
                P = N.a.mark(V),
                I = N.a.mark(G);
            function V(e) {
                var t;
                return N.a.wrap(
                    function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object(F.b)(e.container.ApiBlock.loadBlocks);
                                case 3:
                                    return (t = n.sent), (n.next = 6), Object(F.c)(H(t));
                                case 6:
                                    return (n.next = 8), Object(F.c)(M("loadBlocks", r.loaded));
                                case 8:
                                    n.next = 16;
                                    break;
                                case 10:
                                    return (
                                        (n.prev = 10),
                                        (n.t0 = n.catch(0)),
                                        (n.next = 14),
                                        Object(F.c)(M("loadBlocks", r.errorServer))
                                    );
                                case 14:
                                    console.error("Server error while loading blocks!"), console.error(n.t0);
                                case 16:
                                case "end":
                                    return n.stop();
                            }
                    },
                    P,
                    null,
                    [[0, 10]]
                );
            }
            function G(e) {
                return N.a.wrap(function (t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object(F.d)(S, V, e);
                            case 2:
                            case "end":
                                return t.stop();
                        }
                }, I);
            }
            var J = function (e) {
                    return { type: A, roles: e };
                },
                K = N.a.mark(W),
                X = N.a.mark(Y);
            function W(e) {
                var t;
                return N.a.wrap(
                    function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object(F.b)(e.container.ApiRole.loadRoles);
                                case 3:
                                    return (t = n.sent), (n.next = 6), Object(F.c)(J(t));
                                case 6:
                                    return (n.next = 8), Object(F.c)(M("loadRoles", r.loaded));
                                case 8:
                                    n.next = 16;
                                    break;
                                case 10:
                                    return (
                                        (n.prev = 10),
                                        (n.t0 = n.catch(0)),
                                        (n.next = 14),
                                        Object(F.c)(M("loadRoles", r.errorServer))
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
            function Y(e) {
                return N.a.wrap(function (t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object(F.d)(L, W, e);
                            case 2:
                            case "end":
                                return t.stop();
                        }
                }, X);
            }
            var Z = function (e) {
                    return { type: z, questions: e };
                },
                $ = N.a.mark(te),
                ee = N.a.mark(ne);
            function te(e) {
                var t;
                return N.a.wrap(
                    function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (
                                        (n.prev = 0), (n.next = 3), Object(F.b)(e.container.ApiQuestion.loadQuestions)
                                    );
                                case 3:
                                    return (t = n.sent), (n.next = 6), Object(F.c)(Z(t));
                                case 6:
                                    return (n.next = 8), Object(F.c)(M("loadQuestions", r.loaded));
                                case 8:
                                    n.next = 16;
                                    break;
                                case 10:
                                    return (
                                        (n.prev = 10),
                                        (n.t0 = n.catch(0)),
                                        (n.next = 14),
                                        Object(F.c)(M("loadQuestions", r.errorServer))
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
            function ne(e) {
                return N.a.wrap(function (t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object(F.d)(C, te, e);
                            case 2:
                            case "end":
                                return t.stop();
                        }
                }, ee);
            }
            var re = n(66),
                ce = (function (e) {
                    Object(v.a)(n, e);
                    var t = Object(p.a)(n);
                    function n() {
                        return Object(x.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)({ id: 0, title: "" })),
                ie = (function (e) {
                    Object(v.a)(n, e);
                    var t = Object(p.a)(n);
                    function n() {
                        return Object(x.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)({ id: 0, name: "", characteristic: "", functionality: "", value: 0 })),
                oe = (function (e) {
                    Object(v.a)(n, e);
                    var t = Object(p.a)(n);
                    function n() {
                        return Object(x.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)({ id: 0, block: 0, role: 0, text: "", value: 0 })),
                ae = new re.a(),
                ue = ae;
            ae.service("Http", function e() {
                var t = this;
                Object(x.a)(this, e),
                    (this.get = function (e, n) {
                        return t.request("GET", e, n);
                    }),
                    (this.post = function (e, n) {
                        return t.request("POST", e, n);
                    }),
                    (this.put = function (e, n) {
                        return t.request("PUT", e, n);
                    }),
                    (this.patch = function (e, n) {
                        return t.request("PATCH", e, n);
                    }),
                    (this.delete = function (e, n) {
                        return t.request("DELETE", e, n);
                    }),
                    (this.request = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "GET",
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return fetch("/build-psy-test-belbin/api" + t, {
                            method: e,
                            body: "GET" !== e ? JSON.stringify(n) : void 0,
                        }).then(function (e) {
                            if (e.ok) return e.json();
                            throw e;
                        });
                    });
            }),
                ae.service(
                    "ApiBlock",
                    function e(t) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/blocks.json";
                        Object(x.a)(this, e),
                            (this.http = t),
                            (this.url = r),
                            (this.loadBlocks = function () {
                                return n.http.get(n.url).then(function (e) {
                                    return e.map(function (e) {
                                        return new ce(e);
                                    });
                                });
                            });
                    },
                    "Http"
                ),
                ae.service(
                    "ApiRole",
                    function e(t) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/roles.json";
                        Object(x.a)(this, e),
                            (this.http = t),
                            (this.url = r),
                            (this.loadRoles = function () {
                                return n.http.get(n.url).then(function (e) {
                                    return e.map(function (e) {
                                        return new ie(e);
                                    });
                                });
                            });
                    },
                    "Http"
                ),
                ae.service(
                    "ApiQuestion",
                    function e(t) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/questions.json";
                        Object(x.a)(this, e),
                            (this.http = t),
                            (this.url = r),
                            (this.loadQuestions = function () {
                                return n.http.get(n.url).then(function (e) {
                                    return e.map(function (e) {
                                        return new oe(e);
                                    });
                                });
                            });
                    },
                    "Http"
                );
            var se = n(13),
                le = n(12),
                de = n(10),
                je = n(75);
            function be() {
                return Object(l.d)();
            }
            function fe(e, t) {
                return Object(l.e)(function (n) {
                    return e(n, t);
                });
            }
            var he = n(47),
                Oe = function (e, t) {
                    return t;
                },
                xe = Object(he.a)(
                    function (e) {
                        return e.main;
                    },
                    function (e) {
                        return e.statusAsync;
                    }
                ),
                ve = function (e) {
                    return e.blocks;
                },
                pe =
                    (Object(he.a)(ve, Oe, function (e, t) {
                        return e.filter(function (e) {
                            return e.id === t;
                        });
                    }),
                    function (e) {
                        return e.roles;
                    }),
                me = Object(he.a)(
                    function (e) {
                        var t = Object(m.a)();
                        return (
                            e.roles.forEach(function (n) {
                                var r = e.questions
                                    .filter(function (e) {
                                        return e.role === n.id;
                                    })
                                    .reduce(function (e, t) {
                                        return e + t.value;
                                    }, 0);
                                t = t.set(n.id, n.set("value", r));
                            }),
                            t
                        );
                    },
                    function (e) {
                        return e.sort(function (e, t) {
                            return e.value < t.value ? 1 : e.value > t.value ? -1 : 0;
                        });
                    }
                ),
                ge = function (e) {
                    return e.questions;
                },
                ye = Object(he.a)(ge, Oe, function (e, t) {
                    return e.filter(function (e) {
                        return e.block === t;
                    });
                }),
                we = n(73),
                ke = n(70);
            function Se() {
                var e = Object(se.a)(["\n    color: #ff0000;\n"]);
                return (
                    (Se = function () {
                        return e;
                    }),
                    e
                );
            }
            function Be() {
                var e = Object(se.a)([
                    "\n    animation: rotate 2s linear infinite;\n    color: #2196f3;\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n",
                ]);
                return (
                    (Be = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ee() {
                var e = Object(se.a)([
                    "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 50% 0;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 28px;\n    color: #4a4a4a;\n",
                ]);
                return (
                    (Ee = function () {
                        return e;
                    }),
                    e
                );
            }
            function Le(e) {
                return Object(c.jsxs)(Ae, {
                    children: [
                        "preload" === e.type &&
                            Object(c.jsxs)(c.Fragment, { children: [Object(c.jsx)(_e, { size: "28" }), " ", e.text] }),
                        "warning" === e.type &&
                            Object(c.jsxs)(c.Fragment, { children: [Object(c.jsx)(qe, { size: "28" }), " ", e.text] }),
                    ],
                });
            }
            var Ae = le.a.div(Ee()),
                _e = Object(le.a)(ke.a)(Be()),
                qe = Object(le.a)(we.a)(Se());
            function Ce() {
                var e = be();
                return (
                    Object(i.useEffect)(
                        function () {
                            e({ type: S });
                        },
                        [e]
                    ),
                    Object(c.jsx)(c.Fragment, {})
                );
            }
            function ze() {
                var e = be();
                return (
                    Object(i.useEffect)(
                        function () {
                            e({ type: L });
                        },
                        [e]
                    ),
                    Object(c.jsx)(c.Fragment, {})
                );
            }
            function Re() {
                var e = be();
                return (
                    Object(i.useEffect)(
                        function () {
                            e({ type: C });
                        },
                        [e]
                    ),
                    Object(c.jsx)(c.Fragment, {})
                );
            }
            var Te = n(43),
                Qe = n(122),
                De = n(132),
                Ne = n(124),
                Ue = n(121),
                Fe = n(74),
                He = n(123);
            function Me() {
                var e = Object(se.a)([
                    "\n    cursor: pointer;\n    background-color: #fff;\n    color: #242424;\n    padding: 0.5em;\n    margin: 0.5em;\n    border: 1px solid #ccc;\n    border-radius: 1px;\n",
                ]);
                return (
                    (Me = function () {
                        return e;
                    }),
                    e
                );
            }
            function Pe() {
                var e = Object(se.a)([
                    "\n    visibility: ",
                    ";\n    width: 240px;\n    background-color: #1c1c1c;\n    color: #ccc;\n    text-align: center;\n    padding: 5px;\n    border-radius: 3px;\n\n    bottom: 100%;\n    left: 50%;\n    margin-left: -120px;\n    position: absolute;\n    z-index: 1;\n",
                ]);
                return (
                    (Pe = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ie() {
                var e = Object(se.a)(["\n    position: relative;\n    display: inline-block;\n"]);
                return (
                    (Ie = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ve() {
                var e = Object(se.a)(["\n    color: #3f51b5;\n"]);
                return (
                    (Ve = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ge() {
                var e = Object(se.a)([
                    "\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    justify-content: center;\n    padding: 1em 0;\n    min-height: 2em;\n    width: 100%;\n    z-index: 10000;\n    max-width: 935px;\n    background-color: #fff;\n    border-top: 1px solid #e5e5e5;\n\n    @media (max-width: 768px) {\n        padding-bottom: 3em;\n    }\n",
                ]);
                return (
                    (Ge = function () {
                        return e;
                    }),
                    e
                );
            }
            function Je() {
                var e = Object(se.a)([
                    "\n    position: sticky;\n    padding: 1em 0;\n    top: 0;\n    min-height: 2em;\n    z-index: 10000;\n    background-color: #fff;\n    border-bottom: 1px solid #e5e5e5;\n",
                ]);
                return (
                    (Je = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ke() {
                var e = Object(se.a)(["\n    font-weight: bold;\n"]);
                return (
                    (Ke = function () {
                        return e;
                    }),
                    e
                );
            }
            function Xe() {
                var e = Object(se.a)(["\n    padding-bottom: 1.75em;\n    user-select: none;\n"]);
                return (
                    (Xe = function () {
                        return e;
                    }),
                    e
                );
            }
            function We() {
                var e = Object(se.a)(["\n    display: flex;\n    width: ", "%;\n    user-select: none;\n"]);
                return (
                    (We = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ye() {
                var e = Object(se.a)(["\n    padding: 0 2em;\n"]);
                return (
                    (Ye = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ze() {
                var e = Object(se.a)(["\n    margin: 2em 0;\n"]);
                return (
                    (Ze = function () {
                        return e;
                    }),
                    e
                );
            }
            function $e() {
                var e = be(),
                    t = fe(xe),
                    n = Object(de.h)().idBlock,
                    o = fe(ve),
                    a = o.find(function (e) {
                        return e.id === Number(n);
                    }),
                    u = fe(ye, null === a || void 0 === a ? void 0 : a.id),
                    s = Object(i.useState)(!1),
                    l = Object(je.a)(s, 2),
                    d = l[0],
                    j = l[1],
                    b = u.reduce(function (e, t) {
                        return e + t.value;
                    }, 0),
                    f = 10 - b,
                    h = Object(Ue.a)({ instructionsText: { fontSize: "1em", lineHeight: 1.1 } })(),
                    O = function (t, n, r) {
                        var c;
                        (null ===
                            (c = u.find(function (e) {
                                return e.id === r;
                            })) || void 0 === c
                            ? void 0
                            : c.value) !== Number(n) &&
                            e(
                                (function (e, t) {
                                    return { type: R, id: e, value: t };
                                })(r, Number(n))
                            );
                    };
                return t.loadBlocks === r.notLoaded
                    ? Object(c.jsx)(Ce, {})
                    : t.loadRoles === r.notLoaded
                    ? Object(c.jsx)(ze, {})
                    : t.loadQuestions === r.notLoaded && 0 === u.size
                    ? Object(c.jsx)(Re, {})
                    : t.loadQuestions === r.load
                    ? Object(c.jsx)(Le, {
                          type: "preload",
                          text:
                              "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432",
                      })
                    : t.loadQuestions === r.errorServer
                    ? Object(c.jsx)(Le, {
                          type: "warning",
                          text:
                              "\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432",
                      })
                    : u.size > 0 && a
                    ? Object(c.jsxs)("div", {
                          children: [
                              Object(c.jsx)(Qe.a, {
                                  gutterBottom: !0,
                                  variant: "h5",
                                  component: "h1",
                                  children:
                                      "\u0422\u0435\u0441\u0442 \u0411\u0435\u043b\u0431\u0438\u043d\u0430 \u043d\u0430 \u0432\u0430\u0448\u0443 \u0440\u043e\u043b\u044c \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u2013 \u043f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u043e\u043d\u043b\u0430\u0439\u043d",
                              }),
                              Object(c.jsxs)(Qe.a, {
                                  gutterBottom: !0,
                                  className: h.instructionsText,
                                  children: [
                                      Object(c.jsx)(ct, {
                                          children: "\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f.",
                                      }),
                                      " \u0412 \u043a\u0430\u0436\u0434\u043e\u043c \u0438\u0437 \u0441\u0435\u043c\u0438 \u0431\u043b\u043e\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 10 \u0431\u0430\u043b\u043b\u043e\u0432 \u043c\u0435\u0436\u0434\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u043c\u0438 \u043e\u0442\u0432\u0435\u0442\u0430\u043c\u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0442\u043e\u043c\u0443, \u043a\u0430\u043a \u0432\u044b \u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0435 \u043e\u043d\u0438 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0442 \u0432\u0430\u0448\u0435\u043c\u0443 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044e. \u0415\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b \u0441 \u043a\u0430\u043a\u0438\u043c-\u043b\u0438\u0431\u043e \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435\u043c \u043d\u0430 \u0432\u0441\u0435 100%, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u0434\u0430\u0442\u044c \u0435\u043c\u0443 \u0432\u0441\u0435 10 \u0431\u0430\u043b\u043b\u043e\u0432.",
                                  ],
                              }),
                              Object(c.jsxs)(Qe.a, {
                                  gutterBottom: !0,
                                  variant: "h6",
                                  component: "h2",
                                  children: ["\u0427\u0430\u0441\u0442\u044c ", a.id, " \u0438\u0437 ", o.size],
                              }),
                              Object(c.jsx)(it, {
                                  children: Object(c.jsx)(Qe.a, { variant: "h6", component: "h2", children: a.title }),
                              }),
                              u.valueSeq().map(function (e) {
                                  return Object(c.jsxs)(
                                      et,
                                      {
                                          children: [
                                              Object(c.jsx)(rt, {
                                                  children: Object(c.jsx)(Qe.a, {
                                                      id: "slider-question-" + e.id,
                                                      gutterBottom: !0,
                                                      children: e.text,
                                                  }),
                                              }),
                                              Object(c.jsx)(tt, {
                                                  children: Object(c.jsx)(nt, {
                                                      paddingRight: 10 * (e.value + f),
                                                      children: Object(c.jsx)(De.a, {
                                                          onChange: function (t, n) {
                                                              return O(0, n, e.id);
                                                          },
                                                          value: e.value,
                                                          defaultValue: 0,
                                                          "aria-labelledby": "slider-question-" + e.id,
                                                          step: 1,
                                                          min: 0,
                                                          max: e.value + f === 0 ? 1 : e.value + f,
                                                          valueLabelDisplay: "on",
                                                          marks: dt,
                                                          disabled: e.value + f === 0,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      },
                                      e.id
                                  );
                              }),
                              Object(c.jsxs)(ot, {
                                  children: [
                                      Object(c.jsxs)(ut, {
                                          children: [
                                              Object(c.jsxs)(st, {
                                                  open: d,
                                                  children: [
                                                      Object(c.jsxs)(Qe.a, {
                                                          children: [
                                                              "\u041d\u0443\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c ",
                                                              Object(c.jsx)("b", { children: f }),
                                                              " \u0438\u0437 10 \u0431\u0430\u043b\u043b\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430",
                                                          ],
                                                      }),
                                                      Object(c.jsx)(lt, {
                                                          onClick: function () {
                                                              return j(!1);
                                                          },
                                                          children: "\u041f\u043e\u043d\u044f\u0442\u043d\u043e",
                                                      }),
                                                  ],
                                              }),
                                              Object(c.jsx)(He.a, {
                                                  "aria-label": "info",
                                                  onClick: function () {
                                                      return j(!0);
                                                  },
                                                  children: Object(c.jsx)(at, { size: "20" }),
                                              }),
                                          ],
                                      }),
                                      a.id < o.size &&
                                          Object(c.jsx)(Ne.a, {
                                              variant: "contained",
                                              color: "primary",
                                              to: "/block/" + (a.id + 1),
                                              component: Te.a,
                                              disabled: b < 10,
                                              children: "\u0414\u0430\u043b\u0435\u0435",
                                          }),
                                      a.id === o.size &&
                                          Object(c.jsx)(Ne.a, {
                                              variant: "contained",
                                              color: "primary",
                                              to: "/test_result",
                                              component: Te.a,
                                              disabled: b < 10,
                                              children: "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
                                          }),
                                  ],
                              }),
                          ],
                      })
                    : Object(c.jsx)(Le, {
                          type: "warning",
                          text:
                              "\u041d\u0435 \u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430",
                      });
            }
            var et = le.a.div(Ze()),
                tt = le.a.div(Ye()),
                nt = le.a.div(We(), function (e) {
                    return e.paddingRight > 0 ? e.paddingRight : 10;
                }),
                rt = le.a.div(Xe()),
                ct = le.a.strong(Ke()),
                it = le.a.div(Je()),
                ot = le.a.div(Ge()),
                at = Object(le.a)(Fe.a)(Ve()),
                ut = le.a.div(Ie()),
                st = le.a.div(Pe(), function (e) {
                    return e.open ? "visible" : "hidden";
                }),
                lt = le.a.div(Me()),
                dt = [
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
                ],
                jt = n(126),
                bt = n(127),
                ft = n(128),
                ht = n(129),
                Ot = n(130),
                xt = n(125),
                vt = n(131);
            function pt() {
                var e = Object(se.a)([
                    "\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    justify-content: center;\n    padding: 1em 0;\n    min-height: 2em;\n    width: 100%;\n    z-index: 10000;\n    max-width: 935px;\n    background-color: #fff;\n    border-top: 1px solid #e5e5e5;\n\n    @media (max-width: 768px) {\n        padding-bottom: 3em;\n    }\n",
                ]);
                return (
                    (pt = function () {
                        return e;
                    }),
                    e
                );
            }
            function mt() {
                var e = Object(se.a)(["\n    font-weight: bold;\n"]);
                return (
                    (mt = function () {
                        return e;
                    }),
                    e
                );
            }
            function gt() {
                var e = fe(xe),
                    t = fe(me),
                    n = Object(Ue.a)({ tableContainer: { maxWidth: 450, marginBottom: "1em" } })();
                if (e.loadRoles === r.notLoaded) return Object(c.jsx)(ze, {});
                var i,
                    o,
                    a,
                    u = t.reduce(function (e, t) {
                        return e + t.value;
                    }, 0),
                    s = { max: t.first(), second: t.slice(1, 2).first(), min: t.last() };
                return t &&
                    t.find(function (e) {
                        return e.value > 0;
                    })
                    ? Object(c.jsxs)(vt.a, {
                          children: [
                              Object(c.jsx)(Qe.a, {
                                  gutterBottom: !0,
                                  variant: "h4",
                                  component: "h2",
                                  children:
                                      "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0442\u0435\u0441\u0442\u0430",
                              }),
                              Object(c.jsx)(xt.a, {
                                  component: jt.a,
                                  className: n.tableContainer,
                                  children: Object(c.jsx)(bt.a, {
                                      size: "small",
                                      children: Object(c.jsx)(ft.a, {
                                          children: t.valueSeq().map(function (e) {
                                              return Object(c.jsxs)(
                                                  ht.a,
                                                  {
                                                      children: [
                                                          Object(c.jsx)(Ot.a, { children: e.name }),
                                                          Object(c.jsxs)(Ot.a, {
                                                              align: "right",
                                                              children: [Math.round((100 * e.value) / u), "%"],
                                                          }),
                                                          Object(c.jsxs)(Ot.a, {
                                                              align: "right",
                                                              children: [e.value, " (\u0431)"],
                                                          }),
                                                      ],
                                                  },
                                                  "role" + e.id
                                              );
                                          }),
                                      }),
                                  }),
                              }),
                              Object(c.jsxs)(vt.a, {
                                  mb: "1em",
                                  children: [
                                      Object(c.jsx)(Qe.a, {
                                          gutterBottom: !0,
                                          variant: "h4",
                                          component: "h3",
                                          children:
                                              "\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430",
                                      }),
                                      Object(c.jsxs)(vt.a, {
                                          mb: "1em",
                                          children: [
                                              Object(c.jsxs)(Qe.a, {
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
                                              Object(c.jsxs)(Qe.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u041d\u0430\u0438\u0432\u044b\u0441\u0448\u0438\u0439 \u0431\u0430\u043b\u043b \u043f\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0440\u043e\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0440\u043e\u043b\u044c",
                                                      " ",
                                                      Object(c.jsx)(yt, { children: s.max.name }),
                                                      " \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0447\u0435\u0441\u043a\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u0435.",
                                                  ],
                                              }),
                                              Object(c.jsxs)(Qe.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430. ",
                                                      s.max.characteristic,
                                                  ],
                                              }),
                                              Object(c.jsxs)(Qe.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. ",
                                                      s.min.functionality,
                                                  ],
                                              }),
                                          ],
                                      }),
                                      s.second &&
                                          Object(c.jsxs)(vt.a, {
                                              mb: "1em",
                                              children: [
                                                  Object(c.jsxs)(Qe.a, {
                                                      gutterBottom: !0,
                                                      variant: "h5",
                                                      component: "h3",
                                                      children: [
                                                          "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0430\u044f \u0440\u043e\u043b\u044c - ",
                                                          null === (i = s.second) || void 0 === i ? void 0 : i.name,
                                                          " / ",
                                                          null === (o = s.second) || void 0 === o ? void 0 : o.value,
                                                          "%",
                                                      ],
                                                  }),
                                                  Object(c.jsxs)(Qe.a, {
                                                      children: [
                                                          "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0443\u044e \u0440\u043e\u043b\u044c, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f, \u0435\u0441\u043b\u0438 \u0412\u0430\u0448\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0440\u043e\u043b\u044c \u043f\u043e \u043a\u0430\u043a\u0438\u043c-\u043b\u0438\u0431\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c \u043d\u0435 \u043d\u0443\u0436\u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0435 - ",
                                                          Object(c.jsx)(yt, {
                                                              children:
                                                                  null === (a = s.second) || void 0 === a
                                                                      ? void 0
                                                                      : a.name,
                                                          }),
                                                      ],
                                                  }),
                                                  Object(c.jsxs)(Qe.a, {
                                                      gutterBottom: !0,
                                                      children: [
                                                          "\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430. ",
                                                          s.max.characteristic,
                                                      ],
                                                  }),
                                                  Object(c.jsxs)(Qe.a, {
                                                      gutterBottom: !0,
                                                      children: [
                                                          "\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. ",
                                                          s.min.functionality,
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      Object(c.jsxs)(vt.a, {
                                          mb: "1em",
                                          children: [
                                              Object(c.jsxs)(Qe.a, {
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
                                              Object(c.jsxs)(Qe.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0412\u0430\u0448\u0435 \u0441\u043b\u0430\u0431\u043e\u0435 \u043c\u0435\u0441\u0442\u043e - ",
                                                      Object(c.jsx)(yt, { children: s.min.name }),
                                                  ],
                                              }),
                                              Object(c.jsxs)(Qe.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430. ",
                                                      s.max.characteristic,
                                                  ],
                                              }),
                                              Object(c.jsxs)(Qe.a, {
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
                              Object(c.jsx)(wt, {
                                  children: Object(c.jsx)(Ne.a, {
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
                    : Object(c.jsx)(c.Fragment, { children: Object(c.jsx)(de.a, { to: "/" }) });
            }
            var yt = le.a.strong(mt()),
                wt = le.a.div(pt());
            function kt() {
                var e = Object(se.a)(["\n    font-size: 2em;\n    margin: 1em 0;\n"]);
                return (
                    (kt = function () {
                        return e;
                    }),
                    e
                );
            }
            function St() {
                var e = Object(se.a)([
                    "\n    border: 1px solid #ccc;\n    & td {\n        border: 1px solid #ccc;\n        padding: 5px;\n        text-align: right;\n    }\n",
                ]);
                return (
                    (St = function () {
                        return e;
                    }),
                    e
                );
            }
            function Bt() {
                var e = fe(ve),
                    t = fe(pe),
                    n = fe(ge),
                    i = fe(xe);
                return i.loadBlocks === r.notLoaded
                    ? Object(c.jsx)(Ce, {})
                    : i.loadRoles === r.notLoaded
                    ? Object(c.jsx)(ze, {})
                    : i.loadQuestions === r.notLoaded
                    ? Object(c.jsx)(Re, {})
                    : i.loadBlocks === r.load || i.loadRoles === r.load || i.loadQuestions === r.load
                    ? Object(c.jsx)(Le, { type: "preload", text: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430" })
                    : e.size > 0 && t.size > 0 && n.size > 0
                    ? Object(c.jsxs)("div", {
                          children: [
                              Object(c.jsx)(Lt, {
                                  children:
                                      "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",
                              }),
                              Object(c.jsxs)(Et, {
                                  children: [
                                      Object(c.jsx)("thead", {
                                          children: Object(c.jsxs)("tr", {
                                              children: [
                                                  Object(c.jsx)("td", { children: " " }),
                                                  t.valueSeq().map(function (e) {
                                                      return Object(c.jsx)(
                                                          "td",
                                                          { children: e.name },
                                                          "headRole" + e.id
                                                      );
                                                  }),
                                              ],
                                          }),
                                      }),
                                      Object(c.jsx)("tbody", {
                                          children: e.valueSeq().map(function (e) {
                                              return Object(c.jsxs)(
                                                  "tr",
                                                  {
                                                      children: [
                                                          Object(c.jsx)("td", { children: e.id }),
                                                          t.valueSeq().map(function (t) {
                                                              return Object(c.jsx)(
                                                                  "td",
                                                                  {
                                                                      children: n
                                                                          .filter(function (n) {
                                                                              return (
                                                                                  n.block === e.id && n.role === t.id
                                                                              );
                                                                          })
                                                                          .map(function (e) {
                                                                              return e.id;
                                                                          })
                                                                          .join(" ! "),
                                                                  },
                                                                  "block" + e.id + "role" + t.id
                                                              );
                                                          }),
                                                      ],
                                                  },
                                                  "block" + e.id
                                              );
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : Object(c.jsx)(Le, {
                          type: "warning",
                          text:
                              "\u041d\u0435 \u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430",
                      });
            }
            var Et = le.a.table(St()),
                Lt = le.a.div(kt());
            function At() {
                var e = Object(se.a)([
                    "\n    max-width: 935px;\n    margin: 0 auto 3em auto;\n    padding: 1em 1em 0 1em;\n    @media (max-width: 768px) {\n        margin-bottom: 7em;\n    }\n",
                ]);
                return (
                    (At = function () {
                        return e;
                    }),
                    e
                );
            }
            var _t,
                qt = le.a.div(At()),
                Ct = function () {
                    var e = Object(de.g)().pathname;
                    return (
                        Object(i.useEffect)(
                            function () {
                                window.scrollTo(0, 0);
                            },
                            [e]
                        ),
                        Object(c.jsx)(qt, {
                            children: Object(c.jsxs)(de.d, {
                                children: [
                                    Object(c.jsx)(de.b, {
                                        exact: !0,
                                        path: "/",
                                        children: Object(c.jsx)(de.a, { to: "/block/1" }),
                                    }),
                                    Object(c.jsx)(de.b, { exact: !0, path: "/block/:idBlock", component: $e }),
                                    Object(c.jsx)(de.b, { exact: !0, path: "/test_result", component: gt }),
                                    Object(c.jsx)(de.b, { exact: !0, path: "/tc", component: Bt }),
                                ],
                            }),
                        })
                    );
                },
                zt = (n(100), n(101), Object(d.b)()),
                Rt = Object(f.a)(),
                Tt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || s.d,
                Qt = Object(s.e)(Q(zt), Tt(Object(s.a)(Rt, Object(j.a)(zt))));
            Rt.run(
                ((_t = ue),
                N.a.mark(function e() {
                    return N.a.wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(U.a)([G(_t), Y(_t), ne(_t)]);
                                case 2:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }))
            ),
                u.a.render(
                    Object(c.jsx)(o.a.StrictMode, {
                        children: Object(c.jsx)(l.a, {
                            store: Qt,
                            children: Object(c.jsx)(b.a, { history: zt, children: Object(c.jsx)(Ct, {}) }),
                        }),
                    }),
                    document.getElementById("root")
                );
        },
    },
    [[102, 1, 2]],
]);
//# sourceMappingURL=main.dd906b1a.chunk.js.map
