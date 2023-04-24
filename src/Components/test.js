(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[687], { 14168: function (n, t, e) { (window.__NEXT_P = window.__NEXT_P || []).push(["/mint", function () { return e(51363) }]) }, 53606: function (n, t, e) { "use strict"; var i = e(7297), r = e(85893), o = e(67294), a = e(16829), s = e(61079); function c() { var n = (0, i.Z)(["\n  position: relative;\n  display:flex;\n  justify-content: center;\n  align-items:center;\n  height:100%;\n  background:none;\n"]); return c = function () { return n }, n } function l() { var n = (0, i.Z)(["\n  position: relative;\n  display:flex;\n  flex-direction:column;\n  height:600px;\n  width:375px;\n  overflow:hidden;\n  background:black;\n"]); return l = function () { return n }, n } t.Z = function (n) { var t = n.children; return (0, r.jsx)(u, { children: (0, r.jsx)(d, { children: (0, r.jsx)(o.Suspense, { fallback: (0, r.jsx)(s.Z, {}), children: t }) }) }) }; var u = a.Z.div(c()), d = a.Z.div(l()) }, 51363: function (n, t, e) { "use strict"; e.r(t), e.d(t, { MintRoot: function () { return Gn }, default: function () { return Hn } }); var i = e(85893), r = e(9008), o = e.n(r), a = e(67294), s = e(4480), c = e(45989), l = e(53322), u = e(57647), d = e(47568), f = e(70655), p = e(57594), h = e(41799), m = e(69396), x = e(29815), g = e(74420), v = e(59917), b = e(5056), y = "9", w = (0, s.nZ)({ key: "mintTransactions", get: function (n) { var t = n.get, e = t(p.J4), i = t((0, u.Z)("".concat(e, "_mintTransactions_").concat(y))); return i ? JSON.parse(i) : [] }, set: function (n, t) { var e = n.set, i = (0, n.get)(p.J4); Array.isArray(t) && e((0, u.Z)("".concat(i, "_mintTransactions_").concat(y)), JSON.stringify(t)) } }), j = (0, s.nZ)({ key: "namedMintTransactions", get: function (n) { var t = n.get, e = t(w), i = t((0, s.Qz)(e.map((function (n) { return Z(n.mintAddress) })))); return e.map((function (n, t) { return (0, m.Z)((0, h.Z)({}, n), { name: "hasValue" === i[t].state ? i[t].contents : null }) })) } }), Z = (0, s.xu)({ key: "transactionNftName", effects: function (n) { return [function (t) { var e = t.setSelf; if (!n) return e(null); var i = function (n) { return function (n) { return N.apply(this, arguments) }(n).catch((function (t) { return console.error(t), new Promise((function (t) { setTimeout((function () { console.log("retry", n), t(i(n)) }), 5e3) })) })) }, r = window.localStorage.getItem("txinfo_".concat(n, "_").concat(y)); if (r) return console.log("transactionNftName", r), void e(r); console.log("transactionNftName fetch"), i(n).then((function (t) { console.log("transactionNftName", t), window.localStorage.setItem("txinfo_".concat(n, "_").concat(y), t), e(t) })) }] } }); function N() { return (N = (0, d.Z)((function (n) { var t, e, i; return (0, f.__generator)(this, (function (r) { switch (r.label) { case 0: return t = window.xnft.solana.connection._rpcEndpoint, e = (0, b.B)((0, x.Z)(t && !t.includes("xnfts.dev") ? [t] : []), "confirmed"), [4, new g.I(e).nfts().findByMint({ mintAddress: new v.PublicKey(n) })]; case 1: if (!(i = r.sent()).name) throw "Name not found"; return [2, i.name] } })) }))).apply(this, arguments) } var k = (0, s.nZ)({ key: "availableWLNftsAtom", get: function (n) { var t = n.get; t(p.J4); var e = t(p.tf), i = t(w); return e ? e.filter((function (n) { return !i.find((function (t) { return (null === n || void 0 === n ? void 0 : n.account.mint) === t.wlMintAddress })) })) : null } }), C = (0, s.nZ)({ key: "transactionsToRender", get: function () { var n = (0, d.Z)((function (n) { var t, e, i; return (0, f.__generator)(this, (function (r) { return t = n.get, e = t(p.Sj), i = t(j), e ? [2, i.filter((function (n) { return !e.find((function (t) { return (null === t || void 0 === t ? void 0 : t.account.mint) === n.mintAddress })) }))] : [2, null] })) })); return function (t) { return n.apply(this, arguments) } }() }), M = ((0, l.G0)([(0, l.i0)("countdown"), (0, l.i0)("chat"), (0, l.i0)("mint")]), (0, s.cn)({ key: "timeRefresh", default: 0 })), I = ((0, s.cn)({ key: "test", default: null }), (0, s.cn)({ key: "testHasChatCompleted", default: "false" }), (0, s.nZ)({ key: "isPublicMintLive", get: function (n) { return (0, n.get)(M), new Date("2023-04-20T23:00:00Z").getTime() < Date.now() && !0 } })), _ = (0, s.nZ)({ key: "isWLMintLive", get: function (n) { return (0, n.get)(M), new Date("2023-04-19T23:00:00Z").getTime() < Date.now() } }), S = (0, s.nZ)({ key: "mintcurrentStateAtom", get: function (n) { var t, e = n.get, i = e(I), r = e(_), o = e(k), a = e((0, u.Z)("hasChatCompleted2")); if (r && (null !== (t = null === o || void 0 === o ? void 0 : o.length) && void 0 !== t ? t : 0) > 0) { var s = new Date("2023-04-20T23:00:00Z").getTime() - 9e5 < Date.now(); return (null === a || void 0 === a ? void 0 : a.startsWith("true")) || i || s ? "mint" : "chat" } return i ? "mint" : "countdown" } }), T = e(16381), J = (e(11263), e(99534)), A = e(828), F = e(7297), E = e(16829), D = e(98130), L = e(29630), z = new v.PublicKey("Ce3RbcLkSTEoCXFwHjRWDx5BRnSTw7vpoD6wBVBGrmn5"), P = (0, s.cn)({ key: "remainingNfts", effects: [function (n) { var t = n.setSelf; L.l.then((function () { var n = window.xnft.solana.connection._rpcEndpoint, e = (0, b.B)((0, x.Z)(n && !n.includes("xnfts.dev") ? [n] : []), "confirmed"), i = g.I.make(e); setInterval((function () { i.candyMachines().findByAddress({ address: z }).then((function (n) { t(n.itemsRemaining.toNumber()) })) }), 1e3) })), t(-1) }] }), B = e(48475); function W() { var n = (0, F.Z)(['\n  font-size: 14px;\n  font-family: "Inter", sans-serif;\n  font-weight: 600;\n  text-transform: uppercase;\n']); return W = function () { return n }, n } function R() { var n = (0, F.Z)(['\n  font-size: 14px;\n  font-family: "Inter", sans-serif;\n  text-transform: uppercase;\n  padding-top:4px;\n']); return R = function () { return n }, n } function O() { var n = (0, F.Z)(['\n    fontFamily: "Oswald", sans-serif;\n    font-size: 48px;\n\n    span {\n      display:inline-block;\n      width:66px;\n      text-align:center;\n      position:relative;\n    }\n\n    & span:first-of-type {      \n      text-align: right;\n      padding-right:6px;\n      &:after {\n        content: ":";\n        position:absolute;\n        right: -7px;\n      }\n    }\n\n    & span:last-child {      \n      text-align: left;\n      padding-left:6px;\n      &:after {\n        content: ":";\n        position:absolute;\n        left: -7px;\n      }\n    }\n\n    & span:not(:last-child) {      \n     \n    }\n  ']); return O = function () { return n }, n } var G = new Date("2023-04-20T23:00:00Z"), K = new Date("2023-04-19T23:00:00Z"), H = a.memo((function () { var n, t = (0, s.Zl)(M), e = (0, s.sJ)(I), r = (0, s.sJ)(_), o = (0, s.sJ)(k), a = (0, s.sJ)(P), c = G, l = "Public Mint in:", u = !1; (null !== (n = null === o || void 0 === o ? void 0 : o.length) && void 0 !== n ? n : 0) > 0 && !r && (c = K, l = "Madlist Mint"), e && (u = !0, l = "Public Mint Live", 0 === a && (u = !1, l = "Public Mint Sold Out!")); return (0, i.jsxs)(V, { inverted: u, onClick: function () { }, children: [(0, i.jsx)(U, { children: l }), e ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(Y, { children: a >= 0 ? a : "..." }), (0, i.jsx)(Q, { children: "Mad Lads Remaining" })] }) : (0, i.jsx)(q, { date: c, wlLive: r, onComplete: function () { return t((function (n) { return n + 1 })) } }, c)] }) })), V = (0, E.Z)("div")((function (n) { var t = n.inverted; return "\n  position:absolute;\n  top: 56px;\n  left: 56px;\n  right: 56px;\n  z-index:99;\n\n  background: ".concat(t ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.85)", ";\n  color: ").concat(t ? "black" : "white", ";\n\n  border-radius: 16px;\n  padding: 24px 32px;\n\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items:center;\n\n  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);\n") })), U = (0, E.Z)("div")(W()), Q = (0, E.Z)("div")(R()), X = Math.ceil(10 * Math.random()); function q(n) { var t = n.date, e = n.wlLive, r = (0, J.Z)(n, ["date", "wlLive"]), o = (0, s.sJ)(_), c = (0, A.Z)((0, s.FV)((0, u.Z)("hasRefreshed_".concat("2023-04-20T23:00:00Z"))), 2), l = c[0], d = c[1]; return (0, a.createElement)(D.ZP, (0, m.Z)((0, h.Z)({}, r), { key: o ? "wl" : "public", date: t, intervalDelay: 0, precision: 3, autoStart: !0, renderer: function (n) { var t = []; return (n.hours > 0 || n.days > 0) && t.push((0, i.jsx)("span", { children: "0".concat(n.hours + 24 * n.days).slice(-2) }, "hrs")), t.push((0, i.jsx)("span", { children: "0".concat(n.minutes).slice(-2) }, "min")), t.push((0, i.jsx)("span", { children: "0".concat(n.seconds).slice(-2) }, "sec")), n.hours <= 0 && n.days <= 0 && t.push((0, i.jsx)("span", { children: "0".concat(n.total.toString().slice(-3, -1)).slice(-2) }, "ms")), e && 0 === n.hours && 0 === n.days && n.minutes <= 2 && n.seconds % X === 0 && "true" !== l && (d("true"), (0, B.b)()), (0, i.jsx)(Y, { children: t }) } })) } var Y = (0, E.Z)("div")(O()), $ = e(25716), nn = e.n($), tn = (0, s.cn)({ key: "gmAtom", default: !1 }), en = (0, s.cn)({ key: "gmCountAtom", default: 1 }), rn = (0, s.cn)({ key: "guessCountAtom", default: 1 }), on = ((0, s.cn)({ key: "isMadAtom", default: !1 }), ["Nah, that's not it.", "Incorrect feeling, my friend.", "Not even close, bro.", "Try again, pal.", "Not the feeling I'm experiencing today.", "Sorry, still not the correct feeling.", "Not even in the same ballpark.", "Not the feeling I'm having right now.", "Better luck next time, man.", "Not even remotely close.", "No, that's not the feeling I had.", "Not the feeling I'm feeling today.", "Still not the right feeling.", "Incorrect guess, buddy.", "Not the feeling I'm experiencing at all.", "Not even in the same category.", "No, that's not it this time.", "Sorry, not the feeling I had.", "Not the feeling I'm feeling now.", "Try again, mate.", "Not even close to my feeling right now.", "Not the correct feeling, bro.", "Keep trying, pal!", "Not the feeling I'm having, mate.", "Incorrect feeling, bro.",
 "Try again, my friend.", "Not even close to the right feeling.", 
 "Better luck next guess, man.", "No, not even close to my feeling.", 
 "Incorrect guess, man.", "Try again, pal.", "Not even in the same universe.", 
 "Not even in the same dimension.", "Incorrect feeling, my man.",
  "Not even in the same stratosphere.", "Better luck next guess, buddy.",
  
  
  
  
  "No, not the feeling I had.", "Sorry, still not the right feeling.", "Not the feeling I'm having, bro.", "No, that's not the feeling I had.", "Still not the correct feeling, buddy.", "Not the feeling I'm experiencing today.", "Not the feeling I'm feeling right now.", "Better luck next time, mate.", "Not even close to my feeling today.", "Not the feeling I'm experiencing at all."]), an = 500 + 2e3 * Math.random(), sn = function (n) { var t = n.createChatBotMessage, e = n.setState, r = n.children, o = (0, A.Z)((0, s.FV)(tn), 2), c = (o[0], o[1], { handleNoGM: function (n) { var i = t("gm " + new Array(n).fill("gm").join(" "), { delay: an }); e((function (n) { return console.log(n), (0, m.Z)((0, h.Z)({}, n), { messages: (0, x.Z)(n.messages).concat([i]) }) })) }, handleFirstGMWithWL: function () { var n = t("LFG! How are we feeling today?", { delay: an }); e((function (t) { return (0, m.Z)((0, h.Z)({}, t), { messages: (0, x.Z)(t.messages).concat([n]) }) })) }, handleWrongGuess: function () { var n = t(on[Math.floor(Math.random() * on.length)] + " How are we feeling today?", { delay: an }); e((function (t) { return (0, m.Z)((0, h.Z)({}, t), { messages: (0, x.Z)(t.messages).concat([n]) }) })) }, handleWLMint: function () { e((function (n) { return (0, m.Z)((0, h.Z)({}, n), { messages: (0, x.Z)(n.messages).concat([t("WAO! That's it, go ahead.", { delay: an, widget: "wlMint", payload: { text: "WL Mint" } })]) }) })) }, handleBailout: function () { e((function (n) { return (0, m.Z)((0, h.Z)({}, n), { messages: (0, x.Z)(n.messages).concat([t("WE'RE FOCKING MAD HERE! You will learn in time.", { delay: an, widget: "wlMint", payload: { text: "WL Mint" } })]) }) })) } }); return (0, i.jsx)(i.Fragment, { children: a.Children.map(r, (function (n) { return a.cloneElement(n, { actions: c }) })) }) }, cn = function () { var n = (0, d.Z)((function (n) { var t, e, i; return (0, f.__generator)(this, (function (r) { switch (r.label) { case 0: return t = (new TextEncoder).encode(n), [4, crypto.subtle.digest("SHA-256", t)]; case 1: return e = r.sent(), i = Array.from(new Uint8Array(e)), [2, i.map((function (n) { return n.toString(16).padStart(2, "0") })).join("")] } })) })); return function (t) { return n.apply(this, arguments) } }(), ln = function (n) { var t = n.children, e = n.actions, r = (0, A.Z)((0, s.FV)(tn), 2), o = r[0], c = r[1], l = (0, A.Z)((0, s.FV)(rn), 2), u = l[0], p = l[1], h = (0, A.Z)((0, s.FV)(en), 2), m = h[0], x = h[1]; if (!(0, s.sJ)(k)) return null; var g = function () { var n = (0, d.Z)((function (n) { var t; return (0, f.__generator)(this, (function (i) { switch (i.label) { case 0: if (t = "gm" === n.toLowerCase(), !o && !t) return p((function (n) { return n + 1 })), [2, e.handleNoGM(u)]; if (!o && t) c(!0); else if (o && t) return [2, e.handleNoGM(0)]; return !o && t ? [2, e.handleFirstGMWithWL()] : [4, cn(n.toLowerCase())]; case 1: return "44bd7689d01a3a5d88bf29065c93232cbcca75d1781f838d73778aa0eaad813f" === i.sent() ? [2, e.handleWLMint()] : m >= 10 ? [2, e.handleBailout()] : (x((function (n) { return n + 1 })), [2, e.handleWrongGuess()]) } })) })); return function (t) { return n.apply(this, arguments) } }(); return (0, i.jsx)(i.Fragment, { children: a.Children.map(t, (function (n) { return a.cloneElement(n, { parse: g, actions: e }) })) }) }, un = e(57150), dn = (e(39936), e(69661)), fn = e(11496), pn = e(7816); function hn() { var n = (0, F.Z)(["\n  background: rgba(0,0,0,0.2);\n  border-radius: 6px;\n  padding:12px;\n  display:flex;\n  justify-content:center;\n"]); return hn = function () { return n }, n } function mn() { var n = (0, F.Z)(['\n  position:relative;\n  height:100%;\n  width:100%;\n\n  & .react-chatbot-kit-chat-container {\n    height:100%;\n    width:100%;\n  }\n  & .react-chatbot-kit-chat-inner-container {\n    height:100%;\n    display:flex;\n    flex-direction: column;\n    border-radius:0px;\n  }\n\n  & .react-chatbot-kit-chat-message-container {\n    display:flex;\n    flex-direction: column;\n    flex-grow:1;\n    height:auto;\n    padding:0px 12px;\n    justify-content: flex-end;\n    margin-right: -15px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n\n  & .react-chatbot-kit-user-chat-message-container {\n    flex-direction: row-reverse;\n    margin:8px 0px;\n  }\n  & .react-chatbot-kit-chat-bot-message-container {\n    margin:8px 0px;\n  }\n  & .react-chatbot-kit-chat-bot-message {\n    margin: 0px;\n    width: inherit;\n    line-break:anywhere;\n  }\n\n\n  & .react-chatbot-kit-chat-input-form {\n    flex-direction: row-reverse;\n\n    & button {\n      background: #F8F8F9;\n      cursor:pointer;\n      border-top-left-radius:8px;\n      border-bottom-left-radius:8px;\n      width:50px;\n      \n      &:hover {\n        background: #ccc;\n      }\n\n      svg {\n        display:none;\n      }\n\n      &:before {\n        content:"+";\n        color: #4E5768;\n        opacity: 0.7;\n        font-size:32px;\n      }\n    }\n  }\n\n  & .react-chatbot-kit-chat-input-container {\n    position:relative;\n    padding:0px 12px 12px 12px;\n    border:0px;\n    fley-direction:row-reverse;\n  }\n\n\n  & .react-chatbot-kit-chat-input {\n    outline: 0px;\n    background: #F8F8F9;\n    border-top-right-radius:8px;\n    border-bottom-right-radius:8px;\n    border:0px;\n    padding:20px 20px 20px 0px;\n    font-size:14px;\n  }\n']); return mn = function () { return n }, n } var xn = "mad_mintbot", gn = function () { var n = (0, s.Zl)((0, u.Z)("hasChatCompleted2")); return (0, a.useEffect)((function () { setTimeout((function () { n("true") }), 500) }), []), null }; function vn() { return (0, i.jsxs)("div", { style: { display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Inter, sans-serif", color: "#4E5768", fontSize: "16px", lineHeight: "24px", padding: "16px 4px" }, children: [(0, i.jsx)(dn.Z, { alt: "Avatar", src: "https://swr.xnfts.dev/avatars/philipp", sx: { marginRight: "8px", width: "24px", height: "24px" } }), (0, i.jsx)("div", { style: { paddingBottom: "3px", fontWeight: "bold" }, children: "@".concat(xn) })] }) } function bn(n) { var t, e = n.username, r = n.message, o = (0, a.useState)("initial"), s = o[0], c = o[1]; return (0, a.useEffect)((function () { e === xn ? "initial" !== s ? "loading" !== s || setTimeout((function () { return c("done") }), 500 + 2e3 * Math.random()) : setTimeout((function () { return c("loading") }), 0) : setTimeout((function () { return c("done") }), 0) }), [s]), "initial" ==