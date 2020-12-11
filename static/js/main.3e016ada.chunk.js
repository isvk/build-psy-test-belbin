(this["webpackJsonppsy-test-belbin"] = this["webpackJsonppsy-test-belbin"] || []).push([
    [0],
    {
        95: function (e, t, n) {},
        96: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "history", function () {
                    return Ot;
                });
            var r,
                c = n(3),
                a = n(0),
                i = n.n(a),
                o = n(31),
                u = n.n(o),
                s = n(28),
                l = n(30),
                d = n(24),
                j = n(63),
                b = n(54),
                h = n(74),
                f = n(48),
                O = n(59),
                v = n(21),
                x = n(35),
                p = n(34),
                m = n(22);
            !(function (e) {
                (e[(e.notLoaded = 0)] = "notLoaded"),
                    (e[(e.load = 1)] = "load"),
                    (e[(e.loaded = 2)] = "loaded"),
                    (e[(e.errorServer = 3)] = "errorServer");
            })(r || (r = {}));
            var g = { statusAsync: { loadBlocks: r.notLoaded, loadRoles: r.notLoaded, loadQuestions: r.notLoaded } },
                y = (function (e) {
                    Object(x.a)(n, e);
                    var t = Object(p.a)(n);
                    function n() {
                        return Object(v.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)(g)),
                S = "SET_STATUS_ASYNC",
                k = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new y(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case S:
                            return e.set(
                                "statusAsync",
                                Object(O.a)(Object(O.a)({}, e.statusAsync), {}, Object(f.a)({}, t.status, t.value))
                            );
                        default:
                            return e;
                    }
                },
                w = "LOAD_BLOCKS",
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
                R = "LOAD_QUESTIONS",
                C = "LOAD_USERS_SUCCESS",
                T = "SET_VALUE",
                z = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(m.a)(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case C:
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
                        case T:
                            return e.map(function (e) {
                                return e.id === t.id ? e.set("value", t.value) : e;
                            });
                        default:
                            return e;
                    }
                },
                Q = function (e) {
                    return Object(s.c)({ router: Object(b.b)(e), main: k, blocks: E, roles: q, questions: z });
                },
                D = n(16),
                U = n.n(D),
                N = n(65),
                F = n(13),
                H = function (e) {
                    return { type: B, blocks: e };
                },
                M = function (e, t) {
                    return { type: S, status: e, value: t };
                },
                P = U.a.mark(V),
                I = U.a.mark(G);
            function V(e) {
                var t;
                return U.a.wrap(
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
                return U.a.wrap(function (t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object(F.d)(w, V, e);
                            case 2:
                            case "end":
                                return t.stop();
                        }
                }, I);
            }
            var J = function (e) {
                    return { type: A, roles: e };
                },
                K = U.a.mark(W),
                X = U.a.mark(Y);
            function W(e) {
                var t;
                return U.a.wrap(
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
                return U.a.wrap(function (t) {
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
                    return { type: C, questions: e };
                },
                $ = U.a.mark(te),
                ee = U.a.mark(ne);
            function te(e) {
                var t;
                return U.a.wrap(
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
                return U.a.wrap(function (t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object(F.d)(R, te, e);
                            case 2:
                            case "end":
                                return t.stop();
                        }
                }, ee);
            }
            var re = n(66),
                ce = (function (e) {
                    Object(x.a)(n, e);
                    var t = Object(p.a)(n);
                    function n() {
                        return Object(v.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)({ id: 0, title: "" })),
                ae = (function (e) {
                    Object(x.a)(n, e);
                    var t = Object(p.a)(n);
                    function n() {
                        return Object(v.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)({ id: 0, name: "", characteristic: "", functionality: "", value: 0 })),
                ie = (function (e) {
                    Object(x.a)(n, e);
                    var t = Object(p.a)(n);
                    function n() {
                        return Object(v.a)(this, n), t.apply(this, arguments);
                    }
                    return n;
                })(Object(m.b)({ id: 0, block: 0, role: 0, text: "", value: 0 })),
                oe = new re.a(),
                ue = oe;
            oe.service("Http", function e() {
                var t = this;
                Object(v.a)(this, e),
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
                        return fetch("/api" + t, { method: e, body: "GET" !== e ? JSON.stringify(n) : void 0 }).then(
                            function (e) {
                                if (e.ok) return e.json();
                                throw e;
                            }
                        );
                    });
            }),
                oe.service(
                    "ApiBlock",
                    function e(t) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/blocks.json";
                        Object(v.a)(this, e),
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
                oe.service(
                    "ApiRole",
                    function e(t) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/roles.json";
                        Object(v.a)(this, e),
                            (this.http = t),
                            (this.url = r),
                            (this.loadRoles = function () {
                                return n.http.get(n.url).then(function (e) {
                                    return e.map(function (e) {
                                        return new ae(e);
                                    });
                                });
                            });
                    },
                    "Http"
                ),
                oe.service(
                    "ApiQuestion",
                    function e(t) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/questions.json";
                        Object(v.a)(this, e),
                            (this.http = t),
                            (this.url = r),
                            (this.loadQuestions = function () {
                                return n.http.get(n.url).then(function (e) {
                                    return e.map(function (e) {
                                        return new ie(e);
                                    });
                                });
                            });
                    },
                    "Http"
                );
            var se = n(17),
                le = n(14),
                de = n(9);
            function je() {
                return Object(l.d)();
            }
            function be(e, t) {
                return Object(l.e)(function (n) {
                    return e(n, t);
                });
            }
            var he = n(46),
                fe = function (e, t) {
                    return t;
                },
                Oe = Object(he.a)(
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
                xe =
                    (Object(he.a)(ve, fe, function (e, t) {
                        return e.filter(function (e) {
                            return e.id === t;
                        });
                    }),
                    function (e) {
                        return e.roles;
                    }),
                pe = Object(he.a)(
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
                me = function (e) {
                    return e.questions;
                },
                ge = Object(he.a)(me, fe, function (e, t) {
                    return e.filter(function (e) {
                        return e.block === t;
                    });
                }),
                ye = n(73),
                Se = n(70);
            function ke() {
                var e = Object(se.a)(["\n    color: #ff0000;\n"]);
                return (
                    (ke = function () {
                        return e;
                    }),
                    e
                );
            }
            function we() {
                var e = Object(se.a)([
                    "\n    animation: rotate 2s linear infinite;\n    color: #2196f3;\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n",
                ]);
                return (
                    (we = function () {
                        return e;
                    }),
                    e
                );
            }
            function Be() {
                var e = Object(se.a)([
                    "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 50% 0;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 28px;\n    color: #4a4a4a;\n",
                ]);
                return (
                    (Be = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ee(e) {
                return Object(c.jsxs)(Le, {
                    children: [
                        "preload" === e.type &&
                            Object(c.jsxs)(c.Fragment, { children: [Object(c.jsx)(Ae, { size: "28" }), " ", e.text] }),
                        "warning" === e.type &&
                            Object(c.jsxs)(c.Fragment, { children: [Object(c.jsx)(_e, { size: "28" }), " ", e.text] }),
                    ],
                });
            }
            var Le = le.a.div(Be()),
                Ae = Object(le.a)(Se.a)(we()),
                _e = Object(le.a)(ye.a)(ke());
            function qe() {
                var e = je();
                return (
                    Object(a.useEffect)(
                        function () {
                            e({ type: w });
                        },
                        [e]
                    ),
                    Object(c.jsx)(c.Fragment, {})
                );
            }
            function Re() {
                var e = je();
                return (
                    Object(a.useEffect)(
                        function () {
                            e({ type: L });
                        },
                        [e]
                    ),
                    Object(c.jsx)(c.Fragment, {})
                );
            }
            function Ce() {
                var e = je();
                return (
                    Object(a.useEffect)(
                        function () {
                            e({ type: R });
                        },
                        [e]
                    ),
                    Object(c.jsx)(c.Fragment, {})
                );
            }
            var Te = n(42),
                ze = n(117),
                Qe = n(127),
                De = n(126);
            function Ue() {
                var e = Object(se.a)(["\n    display: flex;\n    align-items: flex-end;\n    padding-right: 1em;\n"]);
                return (
                    (Ue = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ne() {
                var e = Object(se.a)(["\n    display: flex;\n    justify-content: flex-end;\n    margin: 1em 0;\n"]);
                return (
                    (Ne = function () {
                        return e;
                    }),
                    e
                );
            }
            function Fe() {
                var e = Object(se.a)(["\n    padding-bottom: 1.75em;\n    user-select: none;\n"]);
                return (
                    (Fe = function () {
                        return e;
                    }),
                    e
                );
            }
            function He() {
                var e = Object(se.a)(["\n    display: flex;\n    width: ", "%;\n    user-select: none;\n"]);
                return (
                    (He = function () {
                        return e;
                    }),
                    e
                );
            }
            function Me() {
                var e = Object(se.a)(["\n    margin: 2em 0;\n"]);
                return (
                    (Me = function () {
                        return e;
                    }),
                    e
                );
            }
            function Pe() {
                var e = je(),
                    t = be(Oe),
                    n = Object(de.h)().idBlock,
                    a = be(ve),
                    i = a.find(function (e) {
                        return e.id === Number(n);
                    }),
                    o = be(ge, null === i || void 0 === i ? void 0 : i.id),
                    u = o.reduce(function (e, t) {
                        return e + t.value;
                    }, 0),
                    s = 10 - u,
                    l = function (t, n, r) {
                        var c;
                        (null ===
                            (c = o.find(function (e) {
                                return e.id === r;
                            })) || void 0 === c
                            ? void 0
                            : c.value) !== Number(n) &&
                            e(
                                (function (e, t) {
                                    return { type: T, id: e, value: t };
                                })(r, Number(n))
                            );
                    };
                return t.loadBlocks === r.notLoaded
                    ? Object(c.jsx)(qe, {})
                    : t.loadRoles === r.notLoaded
                    ? Object(c.jsx)(Re, {})
                    : t.loadQuestions === r.notLoaded && 0 === o.size
                    ? Object(c.jsx)(Ce, {})
                    : t.loadQuestions === r.load
                    ? Object(c.jsx)(Ee, {
                          type: "preload",
                          text:
                              "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432",
                      })
                    : t.loadQuestions === r.errorServer
                    ? Object(c.jsx)(Ee, {
                          type: "warning",
                          text:
                              "\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432",
                      })
                    : o.size > 0 && i
                    ? Object(c.jsxs)("div", {
                          children: [
                              Object(c.jsx)(ze.a, {
                                  gutterBottom: !0,
                                  variant: "h5",
                                  component: "h1",
                                  children:
                                      "\u0422\u0435\u0441\u0442 \u0411\u0435\u043b\u0431\u0438\u043d\u0430 \u043d\u0430 \u0432\u0430\u0448\u0443 \u0440\u043e\u043b\u044c \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u2013 \u043f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u043e\u043d\u043b\u0430\u0439\u043d",
                              }),
                              Object(c.jsxs)(ze.a, {
                                  gutterBottom: !0,
                                  variant: "h6",
                                  component: "h2",
                                  children: ["\u0427\u0430\u0441\u0442\u044c ", i.id, " \u0438\u0437 ", a.size],
                              }),
                              Object(c.jsx)(ze.a, {
                                  gutterBottom: !0,
                                  variant: "h6",
                                  component: "h2",
                                  children: i.title,
                              }),
                              o.valueSeq().map(function (e) {
                                  return Object(c.jsxs)(
                                      Ie,
                                      {
                                          children: [
                                              Object(c.jsx)(Ge, {
                                                  children: Object(c.jsx)(ze.a, {
                                                      id: "slider-question-" + e.id,
                                                      gutterBottom: !0,
                                                      children: e.text,
                                                  }),
                                              }),
                                              Object(c.jsx)(Ve, {
                                                  paddingRight: 10 * (e.value + s),
                                                  children: Object(c.jsx)(Qe.a, {
                                                      onChange: function (t, n) {
                                                          return l(0, n, e.id);
                                                      },
                                                      value: e.value,
                                                      defaultValue: 0,
                                                      "aria-labelledby": "slider-question-" + e.id,
                                                      step: 1,
                                                      min: 0,
                                                      max: e.value + s === 0 ? 1 : e.value + s,
                                                      valueLabelDisplay: "on",
                                                      marks: Xe,
                                                      disabled: e.value + s === 0,
                                                  }),
                                              }),
                                          ],
                                      },
                                      e.id
                                  );
                              }),
                              Object(c.jsxs)(Je, {
                                  children: [
                                      u < 10 &&
                                          Object(c.jsx)(Ke, {
                                              children: Object(c.jsxs)(ze.a, {
                                                  children: [
                                                      "\u041d\u0443\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c ",
                                                      s,
                                                      " \u0438\u0437 10 \u0431\u0430\u043b\u043b\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430",
                                                  ],
                                              }),
                                          }),
                                      i.id < a.size &&
                                          Object(c.jsx)(De.a, {
                                              variant: "contained",
                                              color: "primary",
                                              to: "/block/" + (i.id + 1),
                                              component: Te.a,
                                              disabled: u < 10,
                                              children: "\u0414\u0430\u043b\u0435\u0435",
                                          }),
                                      i.id === a.size &&
                                          Object(c.jsx)(De.a, {
                                              variant: "contained",
                                              color: "primary",
                                              to: "/test_result",
                                              component: Te.a,
                                              disabled: u < 10,
                                              children: "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
                                          }),
                                  ],
                              }),
                          ],
                      })
                    : Object(c.jsx)(Ee, {
                          type: "warning",
                          text:
                              "\u041d\u0435 \u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430",
                      });
            }
            var Ie = le.a.div(Me()),
                Ve = le.a.div(He(), function (e) {
                    return e.paddingRight > 0 ? e.paddingRight : 10;
                }),
                Ge = le.a.div(Fe()),
                Je = le.a.div(Ne()),
                Ke = le.a.div(Ue()),
                Xe = [
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
                We = n(120),
                Ye = n(121),
                Ze = n(122),
                $e = n(123),
                et = n(124),
                tt = n(119),
                nt = n(125),
                rt = n(118);
            function ct() {
                var e = Object(se.a)(["\n    font-weight: bold;\n"]);
                return (
                    (ct = function () {
                        return e;
                    }),
                    e
                );
            }
            function at() {
                var e = be(Oe),
                    t = be(pe),
                    n = Object(rt.a)({ tableContainer: { maxWidth: 450, marginBottom: "1em" } })();
                if (e.loadRoles === r.notLoaded) return Object(c.jsx)(Re, {});
                var a,
                    i,
                    o,
                    u = t.reduce(function (e, t) {
                        return e + t.value;
                    }, 0),
                    s = { max: t.first(), second: t.slice(0, 1).first(), min: t.last() };
                return t &&
                    t.find(function (e) {
                        return e.value > 0;
                    })
                    ? Object(c.jsxs)(nt.a, {
                          children: [
                              Object(c.jsx)(ze.a, {
                                  gutterBottom: !0,
                                  variant: "h4",
                                  component: "h2",
                                  children:
                                      "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0442\u0435\u0441\u0442\u0430",
                              }),
                              Object(c.jsx)(tt.a, {
                                  component: We.a,
                                  className: n.tableContainer,
                                  children: Object(c.jsx)(Ye.a, {
                                      size: "small",
                                      children: Object(c.jsx)(Ze.a, {
                                          children: t.valueSeq().map(function (e) {
                                              return Object(c.jsxs)(
                                                  $e.a,
                                                  {
                                                      children: [
                                                          Object(c.jsx)(et.a, { children: e.name }),
                                                          Object(c.jsxs)(et.a, {
                                                              align: "right",
                                                              children: [Math.round((100 * e.value) / u), "%"],
                                                          }),
                                                          Object(c.jsxs)(et.a, {
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
                              Object(c.jsxs)(nt.a, {
                                  mb: "1em",
                                  children: [
                                      Object(c.jsx)(ze.a, {
                                          gutterBottom: !0,
                                          variant: "h4",
                                          component: "h3",
                                          children:
                                              "\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430",
                                      }),
                                      Object(c.jsxs)(nt.a, {
                                          mb: "1em",
                                          children: [
                                              Object(c.jsxs)(ze.a, {
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
                                              Object(c.jsxs)(ze.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u041d\u0430\u0438\u0432\u044b\u0441\u0448\u0438\u0439 \u0431\u0430\u043b\u043b \u043f\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0440\u043e\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0440\u043e\u043b\u044c",
                                                      " ",
                                                      Object(c.jsx)(it, { children: s.max.name }),
                                                      " \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0447\u0435\u0441\u043a\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u0435.",
                                                  ],
                                              }),
                                              Object(c.jsxs)(ze.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430. ",
                                                      s.max.characteristic,
                                                  ],
                                              }),
                                              Object(c.jsxs)(ze.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. ",
                                                      s.min.functionality,
                                                  ],
                                              }),
                                          ],
                                      }),
                                      s.second &&
                                          Object(c.jsxs)(nt.a, {
                                              mb: "1em",
                                              children: [
                                                  Object(c.jsxs)(ze.a, {
                                                      gutterBottom: !0,
                                                      variant: "h5",
                                                      component: "h3",
                                                      children: [
                                                          "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0430\u044f \u0440\u043e\u043b\u044c - ",
                                                          null === (a = s.second) || void 0 === a ? void 0 : a.name,
                                                          " / ",
                                                          null === (i = s.second) || void 0 === i ? void 0 : i.value,
                                                          "%",
                                                      ],
                                                  }),
                                                  Object(c.jsxs)(ze.a, {
                                                      children: [
                                                          "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0443\u044e \u0440\u043e\u043b\u044c, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f, \u0435\u0441\u043b\u0438 \u0412\u0430\u0448\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0440\u043e\u043b\u044c \u043f\u043e \u043a\u0430\u043a\u0438\u043c-\u043b\u0438\u0431\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c \u043d\u0435 \u043d\u0443\u0436\u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0435 - ",
                                                          null === (o = s.second) || void 0 === o ? void 0 : o.name,
                                                      ],
                                                  }),
                                                  Object(c.jsxs)(ze.a, {
                                                      gutterBottom: !0,
                                                      children: [
                                                          "\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430. ",
                                                          s.max.characteristic,
                                                      ],
                                                  }),
                                                  Object(c.jsxs)(ze.a, {
                                                      gutterBottom: !0,
                                                      children: [
                                                          "\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. ",
                                                          s.min.functionality,
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      Object(c.jsxs)(nt.a, {
                                          mb: "1em",
                                          children: [
                                              Object(c.jsxs)(ze.a, {
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
                                              Object(c.jsxs)(ze.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0412\u0430\u0448\u0435 \u0441\u043b\u0430\u0431\u043e\u0435 \u043c\u0435\u0441\u0442\u043e - ",
                                                      Object(c.jsx)(it, { children: s.min.name }),
                                                  ],
                                              }),
                                              Object(c.jsxs)(ze.a, {
                                                  gutterBottom: !0,
                                                  children: [
                                                      "\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430. ",
                                                      s.max.characteristic,
                                                  ],
                                              }),
                                              Object(c.jsxs)(ze.a, {
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
                          ],
                      })
                    : Object(c.jsx)(c.Fragment, { children: Object(c.jsx)(de.a, { to: "/" }) });
            }
            var it = le.a.strong(ct());
            function ot() {
                var e = Object(se.a)(["\n    font-size: 2em;\n    margin: 1em 0;\n"]);
                return (
                    (ot = function () {
                        return e;
                    }),
                    e
                );
            }
            function ut() {
                var e = Object(se.a)([
                    "\n    border: 1px solid #ccc;\n    & td {\n        border: 1px solid #ccc;\n        padding: 5px;\n        text-align: right;\n    }\n",
                ]);
                return (
                    (ut = function () {
                        return e;
                    }),
                    e
                );
            }
            function st() {
                var e = be(ve),
                    t = be(xe),
                    n = be(me),
                    a = be(Oe);
                return a.loadBlocks === r.notLoaded
                    ? Object(c.jsx)(qe, {})
                    : a.loadRoles === r.notLoaded
                    ? Object(c.jsx)(Re, {})
                    : a.loadQuestions === r.notLoaded
                    ? Object(c.jsx)(Ce, {})
                    : a.loadBlocks === r.load || a.loadRoles === r.load || a.loadQuestions === r.load
                    ? Object(c.jsx)(Ee, { type: "preload", text: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430" })
                    : e.size > 0 && t.size > 0 && n.size > 0
                    ? Object(c.jsxs)("div", {
                          children: [
                              Object(c.jsx)(dt, {
                                  children:
                                      "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",
                              }),
                              Object(c.jsxs)(lt, {
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
                    : Object(c.jsx)(Ee, {
                          type: "warning",
                          text:
                              "\u041d\u0435 \u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430",
                      });
            }
            var lt = le.a.table(ut()),
                dt = le.a.div(ot());
            function jt() {
                var e = Object(se.a)(["\n    max-width: 935px;\n    margin: 0 auto;\n    padding: 0 1em;\n"]);
                return (
                    (jt = function () {
                        return e;
                    }),
                    e
                );
            }
            var bt,
                ht = le.a.div(jt()),
                ft = function () {
                    var e = Object(de.g)().pathname;
                    return (
                        Object(a.useEffect)(
                            function () {
                                window.scrollTo(0, 0);
                            },
                            [e]
                        ),
                        Object(c.jsx)(ht, {
                            children: Object(c.jsxs)(de.d, {
                                children: [
                                    Object(c.jsx)(de.b, {
                                        exact: !0,
                                        path: "/",
                                        children: Object(c.jsx)(de.a, { to: "/block/1" }),
                                    }),
                                    Object(c.jsx)(de.b, { exact: !0, path: "/block/:idBlock", component: Pe }),
                                    Object(c.jsx)(de.b, { exact: !0, path: "/test_result", component: at }),
                                    Object(c.jsx)(de.b, { exact: !0, path: "/tc", component: st }),
                                ],
                            }),
                        })
                    );
                },
                Ot = (n(94), n(95), Object(d.b)()),
                vt = Object(h.a)(),
                xt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || s.d,
                pt = Object(s.e)(Q(Ot), xt(Object(s.a)(vt, Object(j.a)(Ot))));
            vt.run(
                ((bt = ue),
                U.a.mark(function e() {
                    return U.a.wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(N.a)([G(bt), Y(bt), ne(bt)]);
                                case 2:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }))
            ),
                u.a.render(
                    Object(c.jsx)(i.a.StrictMode, {
                        children: Object(c.jsx)(l.a, {
                            store: pt,
                            children: Object(c.jsx)(b.a, { history: Ot, children: Object(c.jsx)(ft, {}) }),
                        }),
                    }),
                    document.getElementById("root")
                );
        },
    },
    [[96, 1, 2]],
]);
//# sourceMappingURL=main.3e016ada.chunk.js.map
