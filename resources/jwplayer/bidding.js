!function(e) {
    var t = {};
    function r(n) {
        if (t[n])
            return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = e,
    r.c = t,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                r.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "",
    r(r.s = 12)
}([function(e, t, r) {
    "use strict";
    r.r(t),
    r.d(t, "_setEventEmitter", (function() {
        return y
    }
    )),
    r.d(t, "internal", (function() {
        return O
    }
    )),
    r.d(t, "getPrebidInternal", (function() {
        return I
    }
    )),
    r.d(t, "bind", (function() {
        return x
    }
    )),
    r.d(t, "getUniqueIdentifierStr", (function() {
        return C
    }
    )),
    r.d(t, "generateUUID", (function() {
        return T
    }
    )),
    r.d(t, "getBidIdParameter", (function() {
        return _
    }
    )),
    r.d(t, "tryAppendQueryString", (function() {
        return A
    }
    )),
    r.d(t, "parseQueryStringParameters", (function() {
        return k
    }
    )),
    r.d(t, "transformAdServerTargetingObj", (function() {
        return P
    }
    )),
    r.d(t, "getAdUnitSizes", (function() {
        return R
    }
    )),
    r.d(t, "parseSizesInput", (function() {
        return U
    }
    )),
    r.d(t, "parseGPTSingleSizeArray", (function() {
        return D
    }
    )),
    r.d(t, "parseGPTSingleSizeArrayToRtbSize", (function() {
        return B
    }
    )),
    r.d(t, "getWindowTop", (function() {
        return q
    }
    )),
    r.d(t, "getWindowSelf", (function() {
        return M
    }
    )),
    r.d(t, "getWindowLocation", (function() {
        return z
    }
    )),
    r.d(t, "logMessage", (function() {
        return F
    }
    )),
    r.d(t, "logInfo", (function() {
        return W
    }
    )),
    r.d(t, "logWarn", (function() {
        return V
    }
    )),
    r.d(t, "logError", (function() {
        return G
    }
    )),
    r.d(t, "prefixLog", (function() {
        return L
    }
    )),
    r.d(t, "hasConsoleLogger", (function() {
        return K
    }
    )),
    r.d(t, "debugTurnedOn", (function() {
        return Y
    }
    )),
    r.d(t, "createInvisibleIframe", (function() {
        return X
    }
    )),
    r.d(t, "getParameterByName", (function() {
        return J
    }
    )),
    r.d(t, "isA", (function() {
        return Q
    }
    )),
    r.d(t, "isFn", (function() {
        return $
    }
    )),
    r.d(t, "isStr", (function() {
        return Z
    }
    )),
    r.d(t, "isArray", (function() {
        return ee
    }
    )),
    r.d(t, "isNumber", (function() {
        return te
    }
    )),
    r.d(t, "isPlainObject", (function() {
        return re
    }
    )),
    r.d(t, "isBoolean", (function() {
        return ne
    }
    )),
    r.d(t, "isEmpty", (function() {
        return ie
    }
    )),
    r.d(t, "isEmptyStr", (function() {
        return ae
    }
    )),
    r.d(t, "_each", (function() {
        return oe
    }
    )),
    r.d(t, "contains", (function() {
        return de
    }
    )),
    r.d(t, "_map", (function() {
        return se
    }
    )),
    r.d(t, "hasOwn", (function() {
        return ce
    }
    )),
    r.d(t, "insertElement", (function() {
        return ue
    }
    )),
    r.d(t, "waitForElementToLoad", (function() {
        return pe
    }
    )),
    r.d(t, "triggerPixel", (function() {
        return le
    }
    )),
    r.d(t, "callBurl", (function() {
        return fe
    }
    )),
    r.d(t, "insertHtmlIntoIframe", (function() {
        return be
    }
    )),
    r.d(t, "insertUserSyncIframe", (function() {
        return me
    }
    )),
    r.d(t, "createTrackPixelHtml", (function() {
        return ge
    }
    )),
    r.d(t, "createTrackPixelIframeHtml", (function() {
        return ve
    }
    )),
    r.d(t, "getValueString", (function() {
        return ye
    }
    )),
    r.d(t, "uniques", (function() {
        return he
    }
    )),
    r.d(t, "flatten", (function() {
        return Oe
    }
    )),
    r.d(t, "getBidRequest", (function() {
        return je
    }
    )),
    r.d(t, "getKeys", (function() {
        return Ie
    }
    )),
    r.d(t, "getValue", (function() {
        return Ee
    }
    )),
    r.d(t, "getKeyByValue", (function() {
        return we
    }
    )),
    r.d(t, "getBidderCodes", (function() {
        return xe
    }
    )),
    r.d(t, "isGptPubadsDefined", (function() {
        return Se
    }
    )),
    r.d(t, "isApnGetTagDefined", (function() {
        return Ce
    }
    )),
    r.d(t, "getHighestCpm", (function() {
        return Te
    }
    )),
    r.d(t, "getOldestHighestCpmBid", (function() {
        return _e
    }
    )),
    r.d(t, "getLatestHighestCpmBid", (function() {
        return Ae
    }
    )),
    r.d(t, "shuffle", (function() {
        return Pe
    }
    )),
    r.d(t, "adUnitsFilter", (function() {
        return Re
    }
    )),
    r.d(t, "deepClone", (function() {
        return Ue
    }
    )),
    r.d(t, "inIframe", (function() {
        return De
    }
    )),
    r.d(t, "isSafariBrowser", (function() {
        return Be
    }
    )),
    r.d(t, "replaceAuctionPrice", (function() {
        return Ne
    }
    )),
    r.d(t, "replaceClickThrough", (function() {
        return qe
    }
    )),
    r.d(t, "timestamp", (function() {
        return Me
    }
    )),
    r.d(t, "getPerformanceNow", (function() {
        return ze
    }
    )),
    r.d(t, "hasDeviceAccess", (function() {
        return Fe
    }
    )),
    r.d(t, "checkCookieSupport", (function() {
        return We
    }
    )),
    r.d(t, "delayExecution", (function() {
        return Ve
    }
    )),
    r.d(t, "groupBy", (function() {
        return Ge
    }
    )),
    r.d(t, "getDefinedParams", (function() {
        return Le
    }
    )),
    r.d(t, "isValidMediaTypes", (function() {
        return He
    }
    )),
    r.d(t, "getUserConfiguredParams", (function() {
        return Ke
    }
    )),
    r.d(t, "getOrigin", (function() {
        return Ye
    }
    )),
    r.d(t, "getDNT", (function() {
        return Xe
    }
    )),
    r.d(t, "isAdUnitCodeMatchingSlot", (function() {
        return Qe
    }
    )),
    r.d(t, "isSlotMatchingAdUnitCode", (function() {
        return $e
    }
    )),
    r.d(t, "getGptSlotInfoForAdUnitCode", (function() {
        return Ze
    }
    )),
    r.d(t, "unsupportedBidderMessage", (function() {
        return et
    }
    )),
    r.d(t, "isInteger", (function() {
        return tt
    }
    )),
    r.d(t, "convertCamelToUnderscore", (function() {
        return rt
    }
    )),
    r.d(t, "cleanObj", (function() {
        return nt
    }
    )),
    r.d(t, "pick", (function() {
        return it
    }
    )),
    r.d(t, "transformBidderParamKeywords", (function() {
        return at
    }
    )),
    r.d(t, "convertTypes", (function() {
        return ot
    }
    )),
    r.d(t, "isArrayOfNums", (function() {
        return dt
    }
    )),
    r.d(t, "fill", (function() {
        return st
    }
    )),
    r.d(t, "chunk", (function() {
        return ct
    }
    )),
    r.d(t, "getMinValueFromArray", (function() {
        return ut
    }
    )),
    r.d(t, "getMaxValueFromArray", (function() {
        return pt
    }
    )),
    r.d(t, "compareOn", (function() {
        return lt
    }
    )),
    r.d(t, "parseQS", (function() {
        return ft
    }
    )),
    r.d(t, "formatQS", (function() {
        return bt
    }
    )),
    r.d(t, "parseUrl", (function() {
        return mt
    }
    )),
    r.d(t, "buildUrl", (function() {
        return gt
    }
    )),
    r.d(t, "deepEqual", (function() {
        return vt
    }
    )),
    r.d(t, "mergeDeep", (function() {
        return yt
    }
    )),
    r.d(t, "cyrb53Hash", (function() {
        return ht
    }
    )),
    r.d(t, "getWindowFromDocument", (function() {
        return Ot
    }
    )),
    r.d(t, "safeJSONParse", (function() {
        return jt
    }
    ));
    var n = r(2)
      , i = r(1)
      , a = r(11)
      , o = r.n(a)
      , d = r(3)
      , s = r(4)
      , c = r(6);
    r.d(t, "deepAccess", (function() {
        return c.a
    }
    ));
    var u = r(10);
    r.d(t, "deepSetValue", (function() {
        return u.a
    }
    ));
    var p, l = Object.prototype.toString, f = Boolean(window.console), b = Boolean(f && window.console.log), m = Boolean(f && window.console.info), g = Boolean(f && window.console.warn), v = Boolean(f && window.console.error);
    function y(e) {
        p = e
    }
    function h() {
        null != p && p.apply(void 0, arguments)
    }
    var O = {
        checkCookieSupport: We,
        createTrackPixelIframeHtml: ve,
        getWindowSelf: M,
        getWindowTop: q,
        getWindowLocation: z,
        insertUserSyncIframe: me,
        insertElement: ue,
        isFn: $,
        triggerPixel: le,
        logError: G,
        logWarn: V,
        logMessage: F,
        logInfo: W,
        parseQS: ft,
        formatQS: bt,
        deepEqual: vt
    }
      , j = {};
    function I() {
        return j
    }
    var E, w = {}, x = function(e, t) {
        return t
    }
    .bind(null, 1, w)() === w ? Function.prototype.bind : function(e) {
        var t = this
          , r = Array.prototype.slice.call(arguments, 1);
        return function() {
            return t.apply(e, r.concat(Array.prototype.slice.call(arguments)))
        }
    }
    , S = (E = 0,
    function() {
        return ++E
    }
    );
    function C() {
        return S() + Math.random().toString(16).substr(2)
    }
    function T(e) {
        return e ? (e ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, T)
    }
    function _(e, t) {
        return t && t[e] ? t[e] : ""
    }
    function A(e, t, r) {
        return r ? e + t + "=" + encodeURIComponent(r) + "&" : e
    }
    function k(e) {
        var t = "";
        for (var r in e)
            e.hasOwnProperty(r) && (t += r + "=" + encodeURIComponent(e[r]) + "&");
        return t = t.replace(/&$/, "")
    }
    function P(e) {
        return e && Object.getOwnPropertyNames(e).length > 0 ? Ie(e).map((function(t) {
            return t + "=" + encodeURIComponent(Ee(e, t))
        }
        )).join("&") : ""
    }
    function R(e) {
        if (e) {
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var r = e.mediaTypes.banner.sizes;
                Array.isArray(r[0]) ? t = r : t.push(r)
            } else
                Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }
    }
    function U(e) {
        var t = [];
        if ("string" == typeof e) {
            var r = e.split(",")
              , n = /^(\d)+x(\d)+$/i;
            if (r)
                for (var i in r)
                    ce(r, i) && r[i].match(n) && t.push(r[i])
        } else if ("object" == typeof e) {
            var a = e.length;
            if (a > 0)
                if (2 === a && "number" == typeof e[0] && "number" == typeof e[1])
                    t.push(D(e));
                else
                    for (var o = 0; o < a; o++)
                        t.push(D(e[o]))
        }
        return t
    }
    function D(e) {
        if (N(e))
            return e[0] + "x" + e[1]
    }
    function B(e) {
        if (N(e))
            return {
                w: e[0],
                h: e[1]
            }
    }
    function N(e) {
        return ee(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
    }
    function q() {
        return window.top
    }
    function M() {
        return window.self
    }
    function z() {
        return window.location
    }
    function F() {
        Y() && b && console.log.apply(console, H(arguments, "MESSAGE:"))
    }
    function W() {
        Y() && m && console.info.apply(console, H(arguments, "INFO:"))
    }
    function V() {
        Y() && g && console.warn.apply(console, H(arguments, "WARNING:")),
        h(s.EVENTS.AUCTION_DEBUG, {
            type: "WARNING",
            arguments: arguments
        })
    }
    function G() {
        Y() && v && console.error.apply(console, H(arguments, "ERROR:")),
        h(s.EVENTS.AUCTION_DEBUG, {
            type: "ERROR",
            arguments: arguments
        })
    }
    function L(e) {
        function t(t) {
            return function() {
                for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                    n[i] = arguments[i];
                t.apply(void 0, [e].concat(n))
            }
        }
        return {
            logError: t(G),
            logWarn: t(V),
            logMessage: t(F),
            logInfo: t(W)
        }
    }
    function H(e, t) {
        e = [].slice.call(e);
        var r = i.b.getCurrentBidder();
        return t && e.unshift(t),
        r && e.unshift(n("#aaa")),
        e.unshift(n("#3b88c3")),
        e.unshift("%cPrebid" + (r ? "%c" + r : "")),
        e;
        function n(e) {
            return "display: inline-block; color: #fff; background: " + e + "; padding: 1px 4px; border-radius: 3px;"
        }
    }
    function K() {
        return b
    }
    function Y() {
        return !!i.b.getConfig("debug")
    }
    function X() {
        var e = document.createElement("iframe");
        return e.id = C(),
        e.height = 0,
        e.width = 0,
        e.border = "0px",
        e.hspace = "0",
        e.vspace = "0",
        e.marginWidth = "0",
        e.marginHeight = "0",
        e.style.border = "0",
        e.scrolling = "no",
        e.frameBorder = "0",
        e.src = "about:blank",
        e.style.display = "none",
        e
    }
    function J(e) {
        return ft(z().search)[e] || ""
    }
    function Q(e, t) {
        return l.call(e) === "[object " + t + "]"
    }
    function $(e) {
        return Q(e, "Function")
    }
    function Z(e) {
        return Q(e, "String")
    }
    function ee(e) {
        return Q(e, "Array")
    }
    function te(e) {
        return Q(e, "Number")
    }
    function re(e) {
        return Q(e, "Object")
    }
    function ne(e) {
        return Q(e, "Boolean")
    }
    function ie(e) {
        if (!e)
            return !0;
        if (ee(e) || Z(e))
            return !(e.length > 0);
        for (var t in e)
            if (hasOwnProperty.call(e, t))
                return !1;
        return !0
    }
    function ae(e) {
        return Z(e) && (!e || 0 === e.length)
    }
    function oe(e, t) {
        if (!ie(e)) {
            if ($(e.forEach))
                return e.forEach(t, this);
            var r = 0
              , n = e.length;
            if (n > 0)
                for (; r < n; r++)
                    t(e[r], r, e);
            else
                for (r in e)
                    hasOwnProperty.call(e, r) && t.call(this, e[r], r)
        }
    }
    function de(e, t) {
        if (ie(e))
            return !1;
        if ($(e.indexOf))
            return -1 !== e.indexOf(t);
        for (var r = e.length; r--; )
            if (e[r] === t)
                return !0;
        return !1
    }
    function se(e, t) {
        if (ie(e))
            return [];
        if ($(e.map))
            return e.map(t);
        var r = [];
        return oe(e, (function(n, i) {
            r.push(t(n, i, e))
        }
        )),
        r
    }
    function ce(e, t) {
        return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
    }
    function ue(e, t, r, n) {
        var i;
        t = t || document,
        i = r ? t.getElementsByTagName(r) : t.getElementsByTagName("head");
        try {
            if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                i = i[0];
                var a = n ? null : i.firstChild;
                return i.insertBefore(e, a)
            }
        } catch (e) {}
    }
    function pe(e, t) {
        var r = null;
        return new Promise((function(n) {
            var i = function t() {
                e.removeEventListener("load", t),
                e.removeEventListener("error", t),
                null != r && window.clearTimeout(r),
                n()
            };
            e.addEventListener("load", i),
            e.addEventListener("error", i),
            null != t && (r = window.setTimeout(i, t))
        }
        ))
    }
    function le(e, t, r) {
        var n = new Image;
        t && O.isFn(t) && pe(n, r).then(t),
        n.src = e
    }
    function fe(e) {
        var t = e.source
          , r = e.burl;
        t === s.S2S.SRC && r && O.triggerPixel(r)
    }
    function be(e) {
        if (e) {
            var t = document.createElement("iframe");
            t.id = C(),
            t.width = 0,
            t.height = 0,
            t.hspace = "0",
            t.vspace = "0",
            t.marginWidth = "0",
            t.marginHeight = "0",
            t.style.display = "none",
            t.style.height = "0px",
            t.style.width = "0px",
            t.scrolling = "no",
            t.frameBorder = "0",
            t.allowtransparency = "true",
            O.insertElement(t, document, "body"),
            t.contentWindow.document.open(),
            t.contentWindow.document.write(e),
            t.contentWindow.document.close()
        }
    }
    function me(e, t, r) {
        var n = O.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin")
          , i = document.createElement("div");
        i.innerHTML = n;
        var a = i.firstChild;
        t && O.isFn(t) && pe(a, r).then(t),
        O.insertElement(a, document, "html", !0)
    }
    function ge(e) {
        if (!e)
            return "";
        var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
        return t += '<img src="' + encodeURI(e) + '"></div>'
    }
    function ve(e, t, r) {
        return void 0 === t && (t = !0),
        void 0 === r && (r = ""),
        e ? (t && (e = encodeURI(e)),
        r && (r = 'sandbox="' + r + '"'),
        "<iframe " + r + ' id="' + C() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : ""
    }
    function ye(e, t, r) {
        return null == t ? r : Z(t) ? t : te(t) ? t.toString() : void O.logWarn("Unsuported type for param: " + e + " required type: String")
    }
    function he(e, t, r) {
        return r.indexOf(e) === t
    }
    function Oe(e, t) {
        return e.concat(t)
    }
    function je(e, t) {
        var r;
        if (e)
            return t.some((function(t) {
                var n = Object(d.b)(t.bids, (function(t) {
                    return ["bidId", "adId", "bid_id"].some((function(r) {
                        return t[r] === e
                    }
                    ))
                }
                ));
                return n && (r = n),
                n
            }
            )),
            r
    }
    function Ie(e) {
        return Object.keys(e)
    }
    function Ee(e, t) {
        return e[t]
    }
    function we(e, t) {
        for (var r in e)
            if (e.hasOwnProperty(r) && e[r] === t)
                return r
    }
    function xe(e) {
        return void 0 === e && (e = jwpb.adUnits),
        e.map((function(e) {
            return e.bids.map((function(e) {
                return e.bidder
            }
            )).reduce(Oe, [])
        }
        )).reduce(Oe, []).filter(he)
    }
    function Se() {
        if (window.googletag && $(window.googletag.pubads) && $(window.googletag.pubads().getSlots))
            return !0
    }
    function Ce() {
        if (window.apntag && $(window.apntag.getTag))
            return !0
    }
    var Te = ke("timeToRespond", (function(e, t) {
        return e > t
    }
    ))
      , _e = ke("responseTimestamp", (function(e, t) {
        return e > t
    }
    ))
      , Ae = ke("responseTimestamp", (function(e, t) {
        return e < t
    }
    ));
    function ke(e, t) {
        return function(r, n) {
            return r.cpm === n.cpm ? t(r[e], n[e]) ? n : r : r.cpm < n.cpm ? n : r
        }
    }
    function Pe(e) {
        for (var t = e.length; t > 0; ) {
            var r = Math.floor(Math.random() * t)
              , n = e[--t];
            e[t] = e[r],
            e[r] = n
        }
        return e
    }
    function Re(e, t) {
        return Object(d.c)(e, t && t.adUnitCode)
    }
    function Ue(e) {
        return o()(e)
    }
    function De() {
        try {
            return O.getWindowSelf() !== O.getWindowTop()
        } catch (e) {
            return !0
        }
    }
    function Be() {
        return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
    }
    function Ne(e, t) {
        if (e)
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
    }
    function qe(e, t) {
        if (e && t && "string" == typeof t)
            return e.replace(/\${CLICKTHROUGH}/g, t)
    }
    function Me() {
        return (new Date).getTime()
    }
    function ze() {
        return window.performance && window.performance.now && window.performance.now() || 0
    }
    function Fe() {
        return !1 !== i.b.getConfig("deviceAccess")
    }
    function We() {
        if (window.navigator.cookieEnabled || document.cookie.length)
            return !0
    }
    function Ve(e, t) {
        if (t < 1)
            throw new Error("numRequiredCalls must be a positive number. Got " + t);
        var r = 0;
        return function() {
            ++r === t && e.apply(this, arguments)
        }
    }
    function Ge(e, t) {
        return e.reduce((function(e, r) {
            return (e[r[t]] = e[r[t]] || []).push(r),
            e
        }
        ), {})
    }
    function Le(e, t) {
        return t.filter((function(t) {
            return e[t]
        }
        )).reduce((function(t, r) {
            var i;
            return Object(n.default)(t, ((i = {})[r] = e[r],
            i))
        }
        ), {})
    }
    function He(e) {
        var t = ["banner", "native", "video"];
        return !!Object.keys(e).every((function(e) {
            return Object(d.c)(t, e)
        }
        )) && (!e.video || !e.video.context || Object(d.c)(["instream", "outstream", "adpod"], e.video.context))
    }
    function Ke(e, t, r) {
        return e.filter((function(e) {
            return e.code === t
        }
        )).map((function(e) {
            return e.bids
        }
        )).reduce(Oe, []).filter((function(e) {
            return e.bidder === r
        }
        )).map((function(e) {
            return e.params || {}
        }
        ))
    }
    function Ye() {
        return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
    }
    function Xe() {
        return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
    }
    var Je = function(e, t) {
        return e.getAdUnitPath() === t || e.getSlotElementId() === t
    };
    function Qe(e) {
        return function(t) {
            return Je(e, t)
        }
    }
    function $e(e) {
        return function(t) {
            return Je(t, e)
        }
    }
    function Ze(e) {
        var t;
        return Se() && (t = Object(d.b)(window.googletag.pubads().getSlots(), $e(e))),
        t ? {
            gptSlot: t.getAdUnitPath(),
            divId: t.getSlotElementId()
        } : {}
    }
    function et(e, t) {
        var r = Object.keys(e.mediaTypes || {
            banner: "banner"
        }).join(", ");
        return "\n    " + e.code + " is a " + r + " ad unit\n    containing bidders that don't support " + r + ": " + t + ".\n    This bidder won't fetch demand.\n  "
    }
    function tt(e) {
        return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }
    function rt(e) {
        return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
            return "_" + t.toLowerCase()
        }
        )).replace(/^_/, "")
    }
    function nt(e) {
        return Object.keys(e).reduce((function(t, r) {
            return void 0 !== e[r] && (t[r] = e[r]),
            t
        }
        ), {})
    }
    function it(e, t) {
        return "object" != typeof e ? {} : t.reduce((function(r, n, i) {
            if ("function" == typeof n)
                return r;
            var a = n
              , o = n.match(/^(.+?)\sas\s(.+?)$/i);
            o && (n = o[1],
            a = o[2]);
            var d = e[n];
            return "function" == typeof t[i + 1] && (d = t[i + 1](d, r)),
            void 0 !== d && (r[a] = d),
            r
        }
        ), {})
    }
    function at(e, t) {
        void 0 === t && (t = "keywords");
        var r = [];
        return oe(e, (function(e, n) {
            if (ee(e)) {
                var i = [];
                oe(e, (function(e) {
                    ((e = ye(t + "." + n, e)) || "" === e) && i.push(e)
                }
                )),
                e = i
            } else {
                if (!Z(e = ye(t + "." + n, e)))
                    return;
                e = [e]
            }
            r.push({
                key: n,
                value: e
            })
        }
        )),
        r
    }
    function ot(e, t) {
        return Object.keys(e).forEach((function(r) {
            var n, i;
            t[r] && ($(e[r]) ? t[r] = e[r](t[r]) : t[r] = (n = e[r],
            i = t[r],
            "string" === n ? i && i.toString() : "number" === n ? Number(i) : i),
            isNaN(t[r]) && delete t.key)
        }
        )),
        t
    }
    function dt(e, t) {
        return ee(e) && (!t || e.length === t) && e.every((function(e) {
            return tt(e)
        }
        ))
    }
    function st(e, t) {
        for (var r = [], n = 0; n < t; n++) {
            var i = re(e) ? Ue(e) : e;
            r.push(i)
        }
        return r
    }
    function ct(e, t) {
        for (var r = [], n = 0; n < Math.ceil(e.length / t); n++) {
            var i = n * t
              , a = i + t;
            r.push(e.slice(i, a))
        }
        return r
    }
    function ut(e) {
        return Math.min.apply(Math, e)
    }
    function pt(e) {
        return Math.max.apply(Math, e)
    }
    function lt(e) {
        return function(t, r) {
            return t[e] < r[e] ? 1 : t[e] > r[e] ? -1 : 0
        }
    }
    function ft(e) {
        return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
            var r = t.split("=")
              , n = r[0]
              , i = r[1];
            return /\[\]$/.test(n) ? (e[n = n.replace("[]", "")] = e[n] || [],
            e[n].push(i)) : e[n] = i || "",
            e
        }
        ), {}) : {}
    }
    function bt(e) {
        return Object.keys(e).map((function(t) {
            return Array.isArray(e[t]) ? e[t].map((function(e) {
                return t + "[]=" + e
            }
            )).join("&") : t + "=" + e[t]
        }
        )).join("&")
    }
    function mt(e, t) {
        var r = document.createElement("a");
        t && "noDecodeWholeURL"in t && t.noDecodeWholeURL ? r.href = e : r.href = decodeURIComponent(e);
        var n = t && "decodeSearchAsString"in t && t.decodeSearchAsString;
        return {
            href: r.href,
            protocol: (r.protocol || "").replace(/:$/, ""),
            hostname: r.hostname,
            port: +r.port,
            pathname: r.pathname.replace(/^(?!\/)/, "/"),
            search: n ? r.search : O.parseQS(r.search || ""),
            hash: (r.hash || "").replace(/^#/, ""),
            host: r.host || window.location.host
        }
    }
    function gt(e) {
        return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + O.formatQS(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
    }
    function vt(e, t, r) {
        var n = (void 0 === r ? {} : r).checkTypes
          , i = void 0 !== n && n;
        if (e === t)
            return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t || i && e.constructor !== t.constructor)
            return !1;
        if (Object.keys(e).length !== Object.keys(t).length)
            return !1;
        for (var a in e) {
            if (!t.hasOwnProperty(a))
                return !1;
            if (!vt(e[a], t[a], {
                checkTypes: i
            }))
                return !1
        }
        return !0
    }
    function yt(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
            r[i - 1] = arguments[i];
        if (!r.length)
            return e;
        var a = r.shift();
        if (re(e) && re(a)) {
            var o = function(t) {
                var r;
                if (re(a[t]))
                    e[t] || Object(n.default)(e, ((r = {})[t] = {},
                    r)),
                    yt(e[t], a[t]);
                else if (ee(a[t])) {
                    var i;
                    if (e[t])
                        ee(e[t]) && a[t].forEach((function(r) {
                            for (var n = 1, i = 0; i < e[t].length; i++)
                                if (vt(e[t][i], r)) {
                                    n = 0;
                                    break
                                }
                            n && e[t].push(r)
                        }
                        ));
                    else
                        Object(n.default)(e, ((i = {})[t] = [].concat(a[t]),
                        i))
                } else {
                    var o;
                    Object(n.default)(e, ((o = {})[t] = a[t],
                    o))
                }
            };
            for (var d in a)
                o(d)
        }
        return yt.apply(void 0, [e].concat(r))
    }
    function ht(e, t) {
        void 0 === t && (t = 0);
        for (var r, n = function(e, t) {
            if ($(Math.imul))
                return Math.imul(e, t);
            var r = (4194303 & e) * (t |= 0);
            return 4290772992 & e && (r += (4290772992 & e) * t | 0),
            0 | r
        }, i = 3735928559 ^ t, a = 1103547991 ^ t, o = 0; o < e.length; o++)
            i = n(i ^ (r = e.charCodeAt(o)), 2654435761),
            a = n(a ^ r, 1597334677);
        return i = n(i ^ i >>> 16, 2246822507) ^ n(a ^ a >>> 13, 3266489909),
        (4294967296 * (2097151 & (a = n(a ^ a >>> 16, 2246822507) ^ n(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString()
    }
    function Ot(e) {
        return e ? e.defaultView : null
    }
    function jt(e) {
        try {
            return JSON.parse(e)
        } catch (e) {}
    }
}
, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return f
    }
    )),
    r.d(t, "b", (function() {
        return v
    }
    ));
    var n = r(8)
      , i = r(2)
      , a = r(9)
      , o = r(3)
      , d = r(0)
      , s = r(6)
      , c = r(4)
      , u = ["fpd"]
      , p = "TRUE" === Object(d.getParameterByName)(c.DEBUG_MODE).toUpperCase()
      , l = window.location.origin
      , f = "random"
      , b = {};
    b[f] = !0,
    b.fixed = !0;
    var m = f
      , g = {
        LOW: "low",
        MEDIUM: "medium",
        HIGH: "high",
        AUTO: "auto",
        DENSE: "dense",
        CUSTOM: "custom"
    };
    var v = function() {
        var e, t, r, c = [], f = null;
        function v() {
            e = {};
            var n = {
                _debug: p,
                get debug() {
                    return this._debug
                },
                set debug(e) {
                    this._debug = e
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                    return this._bidderTimeout
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e
                },
                _publisherDomain: l,
                get publisherDomain() {
                    return this._publisherDomain
                },
                set publisherDomain(e) {
                    this._publisherDomain = e
                },
                _priceGranularity: g.MEDIUM,
                set priceGranularity(e) {
                    s(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : g.MEDIUM : Object(d.isPlainObject)(e) && (this._customPriceBucket = e,
                    this._priceGranularity = g.CUSTOM,
                    Object(d.logMessage)("Using custom price granularity")))
                },
                get priceGranularity() {
                    return this._priceGranularity
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity
                },
                set mediaTypePriceGranularity(e) {
                    var t = this;
                    this._mediaTypePriceGranularity = Object.keys(e).reduce((function(r, n) {
                        return s(e[n]) ? "string" == typeof e ? r[n] = i(e[n]) ? e[n] : t._priceGranularity : Object(d.isPlainObject)(e) && (r[n] = e[n],
                        Object(d.logMessage)("Using custom price granularity for " + n)) : Object(d.logWarn)("Invalid price granularity for media type: " + n),
                        r
                    }
                    ), {})
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                    return this._sendAllBids
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e
                },
                _useBidCache: !1,
                get useBidCache() {
                    return this._useBidCache
                },
                set useBidCache(e) {
                    this._useBidCache = e
                },
                _deviceAccess: !0,
                get deviceAccess() {
                    return this._deviceAccess
                },
                set deviceAccess(e) {
                    this._deviceAccess = e
                },
                _bidderSequence: m,
                get bidderSequence() {
                    return this._bidderSequence
                },
                set bidderSequence(e) {
                    b[e] ? this._bidderSequence = e : Object(d.logWarn)("Invalid order: " + e + ". Bidder Sequence was not set.")
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                    return this._timeoutBuffer
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e
                },
                _maxNestedIframes: 10,
                get maxNestedIframes() {
                    return this._maxNestedIframes
                },
                set maxNestedIframes(e) {
                    this._maxNestedIframes = e
                },
                _auctionOptions: {},
                get auctionOptions() {
                    return this._auctionOptions
                },
                set auctionOptions(e) {
                    (function(e) {
                        if (!Object(d.isPlainObject)(e))
                            return Object(d.logWarn)("Auction Options must be an object"),
                            !1;
                        for (var t = 0, r = Object.keys(e); t < r.length; t++) {
                            var n = r[t];
                            if ("secondaryBidders" !== n && "suppressStaleRender" !== n)
                                return Object(d.logWarn)("Auction Options given an incorrect param: " + n),
                                !1;
                            if ("secondaryBidders" === n) {
                                if (!Object(d.isArray)(e[n]))
                                    return Object(d.logWarn)("Auction Options " + n + " must be of type Array"),
                                    !1;
                                if (!e[n].every(d.isStr))
                                    return Object(d.logWarn)("Auction Options " + n + " must be only string"),
                                    !1
                            } else if ("suppressStaleRender" === n && !Object(d.isBoolean)(e[n]))
                                return Object(d.logWarn)("Auction Options " + n + " must be of type boolean"),
                                !1
                        }
                        return !0
                    }
                    )(e) && (this._auctionOptions = e)
                }
            };
            function i(e) {
                return Object(o.b)(Object.keys(g), (function(t) {
                    return e === g[t]
                }
                ))
            }
            function s(e) {
                if (!e)
                    return Object(d.logError)("Prebid Error: no value passed to `setPriceGranularity()`"),
                    !1;
                if ("string" == typeof e)
                    i(e) || Object(d.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                else if (Object(d.isPlainObject)(e) && !Object(a.b)(e))
                    return Object(d.logError)("Invalid custom price value passed to `setPriceGranularity()`"),
                    !1;
                return !0
            }
            t && E(Object.keys(t).reduce((function(e, r) {
                return t[r] !== n[r] && (e[r] = n[r] || {}),
                e
            }
            ), {})),
            t = n,
            r = {}
        }
        function y() {
            if (f && r && Object(d.isPlainObject)(r[f])) {
                var e = r[f]
                  , n = new Set(Object.keys(t).concat(Object.keys(e)));
                return Object(o.a)(n).reduce((function(r, n) {
                    return void 0 === e[n] ? r[n] = t[n] : void 0 === t[n] ? r[n] = e[n] : Object(d.isPlainObject)(e[n]) ? r[n] = Object(d.mergeDeep)({}, t[n], e[n]) : r[n] = e[n],
                    r
                }
                ), {})
            }
            return Object(i.default)({}, t)
        }
        function h(e) {
            var t = {};
            return Object.keys(e).forEach((function(r) {
                var n = "context" === r ? "site" : r;
                t[n] = "site" === n || "user" === n ? Object.keys(e[r]).reduce((function(t, n) {
                    var i;
                    "data" === n ? Object(d.mergeDeep)(t, {
                        ext: {
                            data: e[r][n]
                        }
                    }) : Object(d.mergeDeep)(t, ((i = {})[n] = e[r][n],
                    i));
                    return t
                }
                ), {}) : e[r]
            }
            )),
            t
        }
        function O(e) {
            var t = {};
            return Object.keys(e).filter((function(e) {
                return "context" === e
            }
            )).forEach((function(r) {
                Object.keys(e[r]).forEach((function(n) {
                    var i;
                    "data" === n ? Object(d.mergeDeep)(t, {
                        ext: {
                            data: e[r][n]
                        }
                    }) : "object" != typeof e[r][n] || Array.isArray(e[r][n]) ? Object(d.mergeDeep)(t, {
                        ext: {
                            data: (i = {},
                            i[n.toLowerCase()] = e[r][n],
                            i)
                        }
                    }) : Object.keys(e[r][n]).forEach((function(i) {
                        var a, o;
                        Object(d.mergeDeep)(t, {
                            ext: {
                                data: (o = {},
                                o[n.toLowerCase()] = (a = {},
                                a[i.toLowerCase()] = e[r][n][i],
                                a),
                                o)
                            }
                        })
                    }
                    ))
                }
                ))
            }
            )),
            t
        }
        function j(r) {
            if (Object(d.isPlainObject)(r)) {
                var n = Object.keys(r)
                  , a = {};
                n.forEach((function(n) {
                    var o = "fpd" === n ? "ortb2" : n
                      , s = "fpd" === n ? h(r[n]) : r[n];
                    Object(d.isPlainObject)(e[o]) && Object(d.isPlainObject)(s) && (s = Object(i.default)({}, e[o], s)),
                    a[o] = t[o] = s
                }
                )),
                E(a)
            } else
                Object(d.logError)("setConfig options must be an object")
        }
        function I(e, t) {
            var r = t;
            if ("string" != typeof e && (r = e,
            e = "*"),
            "function" == typeof r) {
                var n = {
                    topic: e,
                    callback: r
                };
                return c.push(n),
                function() {
                    c.splice(c.indexOf(n), 1)
                }
            }
            Object(d.logError)("listener must be a function")
        }
        function E(e) {
            var t = Object.keys(e);
            c.filter((function(e) {
                return Object(o.c)(t, e.topic)
            }
            )).forEach((function(t) {
                var r;
                t.callback(((r = {})[t.topic] = e[t.topic],
                r))
            }
            )),
            c.filter((function(e) {
                return "*" === e.topic
            }
            )).forEach((function(t) {
                return t.callback(e)
            }
            ))
        }
        function w(e, t) {
            void 0 === t && (t = !1);
            try {
                !function(e) {
                    if (!Object(d.isPlainObject)(e))
                        throw "setBidderConfig bidder options must be an object";
                    if (!Array.isArray(e.bidders) || !e.bidders.length)
                        throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                    if (!Object(d.isPlainObject)(e.config))
                        throw "setBidderConfig bidder options must contain a config object"
                }(e),
                e.bidders.forEach((function(n) {
                    r[n] || (r[n] = {}),
                    Object.keys(e.config).forEach((function(i) {
                        var a = "fpd" === i ? "ortb2" : i
                          , o = "fpd" === i ? h(e.config[i]) : e.config[i];
                        if (Object(d.isPlainObject)(o)) {
                            var s = t ? d.mergeDeep : Object.assign;
                            r[n][a] = s({}, r[n][a] || {}, o)
                        } else
                            r[n][a] = o
                    }
                    ))
                }
                ))
            } catch (e) {
                Object(d.logError)(e)
            }
        }
        function x(e, t) {
            f = e;
            try {
                return t()
            } finally {
                S()
            }
        }
        function S() {
            f = null
        }
        return v(),
        {
            getCurrentBidder: function() {
                return f
            },
            resetBidder: S,
            getConfig: function() {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? Object(s.a)(y(), e) : y()
                }
                return I.apply(void 0, arguments)
            },
            readConfig: function() {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0]
                      , t = Object(d.deepClone)(y());
                    return e ? Object(s.a)(t, e) : t
                }
                return I.apply(void 0, arguments)
            },
            setConfig: j,
            mergeConfig: function(e) {
                if (Object(d.isPlainObject)(e)) {
                    var t = Object.keys(e).reduce((function(t, r) {
                        var n = y()[r] || {};
                        return t[r] = Object(d.mergeDeep)(n, e[r]),
                        t
                    }
                    ), {});
                    return j(Object(i.default)({}, t)),
                    t
                }
                Object(d.logError)("mergeConfig input must be an object")
            },
            setDefaults: function(r) {
                Object(d.isPlainObject)(e) ? (Object(i.default)(e, r),
                Object(i.default)(t, r)) : Object(d.logError)("defaults must be an object")
            },
            resetConfig: v,
            runWithBidder: x,
            callbackWithBidder: function(e) {
                return function(t) {
                    return function() {
                        if ("function" == typeof t) {
                            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                                n[i] = arguments[i];
                            return x(e, d.bind.call.apply(d.bind, [t, this].concat(n)))
                        }
                        Object(d.logWarn)("config.callbackWithBidder callback is not a function")
                    }
                }
            },
            setBidderConfig: w,
            getBidderConfig: function() {
                return r
            },
            mergeBidderConfig: function(e) {
                return w(e, !0)
            },
            convertAdUnitFpd: function(e) {
                var t = [];
                return e.forEach((function(e) {
                    e.fpd ? (e.ortb2Imp ? Object(d.mergeDeep)(e.ortb2Imp, O(e.fpd)) : e.ortb2Imp = O(e.fpd),
                    t.push(function(e) {
                        e.fpd;
                        return Object(n.a)(e, u)
                    }(e))) : t.push(e)
                }
                )),
                t
            },
            getLegacyFpd: function(e) {
                if ("object" == typeof e) {
                    var t = {};
                    return Object.keys(e).forEach((function(r) {
                        var n = "site" === r ? "context" : r;
                        t[n] = "context" === n || "user" === n ? Object.keys(e[r]).filter((function(e) {
                            return "data" !== e
                        }
                        )).reduce((function(t, n) {
                            var i;
                            "ext" === n ? Object(d.mergeDeep)(t, e[r][n]) : Object(d.mergeDeep)(t, ((i = {})[n] = e[r][n],
                            i));
                            return t
                        }
                        ), {}) : e[r]
                    }
                    )),
                    t
                }
            },
            getLegacyImpFpd: function(e) {
                if ("object" == typeof e) {
                    var t = {};
                    return Object(s.a)(e, "ext.data") && Object.keys(e.ext.data).forEach((function(r) {
                        if ("pbadslot" === r)
                            Object(d.mergeDeep)(t, {
                                context: {
                                    pbAdSlot: e.ext.data[r]
                                }
                            });
                        else if ("adserver" === r)
                            Object(d.mergeDeep)(t, {
                                context: {
                                    adServer: e.ext.data[r]
                                }
                            });
                        else {
                            var n;
                            Object(d.mergeDeep)(t, {
                                context: {
                                    data: (n = {},
                                    n[r] = e.ext.data[r],
                                    n)
                                }
                            })
                        }
                    }
                    )),
                    t
                }
            }
        }
    }()
}
, function(e, t, r) {
    "use strict";
    function n() {
        return (n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ).apply(this, arguments)
    }
    r.r(t),
    r.d(t, "default", (function() {
        return n
    }
    ))
}
, function(e, t, r) {
    "use strict";
    function n(e, t, r) {
        return e && e.includes(t, r) || !1
    }
    function i() {
        return Array.from.apply(Array, arguments)
    }
    function a(e, t, r) {
        return e && e.find(t, r)
    }
    r.d(t, "c", (function() {
        return n
    }
    )),
    r.d(t, "a", (function() {
        return i
    }
    )),
    r.d(t, "b", (function() {
        return a
    }
    ))
}
, function(e) {
    e.exports = JSON.parse('{"JSON_MAPPING":{"PL_CODE":"code","PL_SIZE":"sizes","PL_BIDS":"bids","BD_BIDDER":"bidder","BD_ID":"paramsd","BD_PL_ID":"placementId","ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"CB":{"TYPE":{"ALL_BIDS_BACK":"allRequestedBidsBack","AD_UNIT_BIDS_BACK":"adUnitBidsBack","BID_WON":"bidWon","REQUEST_BIDS":"requestBids"}},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent"},"AD_RENDER_FAILED_REASON":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain"},"DEFAULT_TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"NATIVE_KEYS":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"S2S":{"SRC":"s2s","DEFAULT_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/openrtb2/auction","SYNCED_BIDDERS_KEY":"pbjsSyncs"},"BID_STATUS":{"BID_TARGETING_SET":"targetingSet","RENDERED":"rendered","BID_REJECTED":"bidRejected"}}')
}
, function(e, t, r) {
    "use strict";
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    t.__esModule = !0,
    t.on = t.off = t.getEvents = t.get = t.emit = void 0;
    var i = s(r(2))
      , a = function(e, t) {
        if (!t && e && e.__esModule)
            return e;
        if (null === e || "object" !== n(e) && "function" != typeof e)
            return {
                default: e
            };
        var r = d(t);
        if (r && r.has(e))
            return r.get(e);
        var i = {}
          , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                s && (s.get || s.set) ? Object.defineProperty(i, o, s) : i[o] = e[o]
            }
        i.default = e,
        r && r.set(e, i);
        return i
    }(r(0))
      , o = s(r(4));
    function d(e) {
        if ("function" != typeof WeakMap)
            return null;
        var t = new WeakMap
          , r = new WeakMap;
        return (d = function(e) {
            return e ? r : t
        }
        )(e)
    }
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = Array.prototype.slice
      , u = Array.prototype.push
      , p = a._map(o.default.EVENTS, (function(e) {
        return e
    }
    ))
      , l = o.default.EVENT_ID_PATHS
      , f = []
      , b = function() {
        var e = {}
          , t = {};
        function r(t, r) {
            a.logMessage("Emitting event for: " + t);
            var n = r[0] || {}
              , i = n[l[t]]
              , o = e[t] || {
                que: []
            }
              , d = a._map(o, (function(e, t) {
                return t
            }
            ))
              , s = [];
            f.push({
                eventType: t,
                args: n,
                id: i,
                elapsedTime: a.getPerformanceNow()
            }),
            i && a.contains(d, i) && u.apply(s, o[i].que),
            u.apply(s, o.que),
            a._each(s, (function(e) {
                if (e)
                    try {
                        e.apply(null, r)
                    } catch (e) {
                        a.logError("Error executing handler:", "events.js", e)
                    }
            }
            ))
        }
        return t.on = function(t, r, n) {
            if (function(e) {
                return a.contains(p, e)
            }(t)) {
                var i = e[t] || {
                    que: []
                };
                n ? (i[n] = i[n] || {
                    que: []
                },
                i[n].que.push(r)) : i.que.push(r),
                e[t] = i
            } else
                a.logError("Wrong event name : " + t + " Valid event names :" + p)
        }
        ,
        t.emit = function(e) {
            var t = c.call(arguments, 1);
            r(e, t)
        }
        ,
        t.off = function(t, r, n) {
            var i = e[t];
            a.isEmpty(i) || a.isEmpty(i.que) && a.isEmpty(i[n]) || n && (a.isEmpty(i[n]) || a.isEmpty(i[n].que)) || (n ? a._each(i[n].que, (function(e) {
                var t = i[n].que;
                e === r && t.splice(t.indexOf(e), 1)
            }
            )) : a._each(i.que, (function(e) {
                var t = i.que;
                e === r && t.splice(t.indexOf(e), 1)
            }
            )),
            e[t] = i)
        }
        ,
        t.get = function() {
            return e
        }
        ,
        t.getEvents = function() {
            var e = [];
            return a._each(f, (function(t) {
                var r = (0,
                i.default)({}, t);
                e.push(r)
            }
            )),
            e
        }
        ,
        t
    }();
    a._setEventEmitter(b.emit.bind(b));
    var m = b.on
      , g = b.off
      , v = b.get
      , y = b.getEvents
      , h = b.emit;
    t.emit = h,
    t.getEvents = y,
    t.get = v,
    t.off = g,
    t.on = m
}
, function(e, t, r) {
    "use strict";
    function n(e, t, r, n, i) {
        for (t = t.split ? t.split(".") : t,
        n = 0; n < t.length; n++)
            e = e ? e[t[n]] : i;
        return e === i ? r : e
    }
    r.d(t, "a", (function() {
        return n
    }
    ))
}
, function(e, t) {
    /*
* @license MIT
* Fun Hooks v0.9.10
* (c) @snapwich
*/
    d.SYNC = 1,
    d.ASYNC = 2,
    d.QUEUE = 4;
    var r = Object.freeze({
        useProxy: !0,
        ready: 0
    })
      , n = new WeakMap
      , i = "2,1,0" === [1].reduce((function(e, t, r) {
        return [e, t, r]
    }
    ), 2).toString() ? Array.prototype.reduce : function(e, t) {
        var r, n = Object(this), i = n.length >>> 0, a = 0;
        if (t)
            r = t;
        else {
            for (; a < i && !(a in n); )
                a++;
            r = n[a++]
        }
        for (; a < i; )
            a in n && (r = e(r, n[a], a, n)),
            a++;
        return r
    }
    ;
    function a(e, t) {
        return Array.prototype.slice.call(e, t)
    }
    var o = Object.assign || function(e) {
        return i.call(a(arguments, 1), (function(e, t) {
            return t && Object.keys(t).forEach((function(r) {
                e[r] = t[r]
            }
            )),
            e
        }
        ), e)
    }
    ;
    function d(e) {
        var t, s = {}, c = [];
        function u(e, t) {
            return "function" == typeof e ? b.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? b.apply(null, arguments) : "object" == typeof e ? p.apply(null, arguments) : void 0
        }
        function p(e, t, r) {
            var n = !0;
            void 0 === t && (t = Object.getOwnPropertyNames(e),
            n = !1);
            var i = {}
              , a = ["constructor"];
            do {
                (t = t.filter((function(t) {
                    return !("function" != typeof e[t] || -1 !== a.indexOf(t) || t.match(/^_/))
                }
                ))).forEach((function(t) {
                    var n = t.split(":")
                      , a = n[0]
                      , o = n[1] || "sync";
                    if (!i[a]) {
                        var d = e[a];
                        i[a] = e[a] = b(o, d, r ? [r, a] : void 0)
                    }
                }
                )),
                e = Object.getPrototypeOf(e)
            } while (n && e);
            return i
        }
        function l(e) {
            var r = Array.isArray(e) ? e : e.split(".");
            return i.call(r, (function(n, i, a) {
                var o = n[i]
                  , d = !1;
                return o || (a === r.length - 1 ? (t || c.push((function() {
                    d || console.warn("fun-hooks: referenced '" + e + "' but it was never created")
                }
                )),
                n[i] = f((function(e) {
                    n[i] = e,
                    d = !0
                }
                ))) : n[i] = {})
            }
            ), s)
        }
        function f(e) {
            var t = []
              , r = []
              , i = function() {}
              , a = {
                before: function(e, r) {
                    return s.call(this, t, "before", e, r)
                },
                after: function(e, t) {
                    return s.call(this, r, "after", e, t)
                },
                getHooks: function(e) {
                    var n = t.concat(r);
                    "object" == typeof e && (n = n.filter((function(t) {
                        return Object.keys(e).every((function(r) {
                            return t[r] === e[r]
                        }
                        ))
                    }
                    )));
                    try {
                        o(n, {
                            remove: function() {
                                return n.forEach((function(e) {
                                    e.remove()
                                }
                                )),
                                this
                            }
                        })
                    } catch (e) {
                        console.error("error adding `remove` to array, did you modify Array.prototype?")
                    }
                    return n
                },
                removeAll: function() {
                    return this.getHooks().remove()
                }
            }
              , d = {
                install: function(n, a, o) {
                    this.type = n,
                    i = o,
                    o(t, r),
                    e && e(a)
                }
            };
            return n.set(a.after, d),
            a;
            function s(e, n, a, o) {
                var d = {
                    hook: a,
                    type: n,
                    priority: o || 10,
                    remove: function() {
                        var n = e.indexOf(d);
                        -1 !== n && (e.splice(n, 1),
                        i(t, r))
                    }
                };
                return e.push(d),
                e.sort((function(e, t) {
                    return t.priority - e.priority
                }
                )),
                i(t, r),
                this
            }
        }
        function b(r, i, s) {
            var u = i.after && n.get(i.after);
            if (u) {
                if (u.type !== r)
                    throw "fun-hooks: recreated hookable with different type";
                return i
            }
            var p, b, m = s ? l(s) : f(), g = {
                get: function(e, t) {
                    return m[t] || Reflect.get.apply(Reflect, arguments)
                }
            };
            return t || c.push(v),
            e.useProxy && "function" == typeof Proxy && Proxy.revocable ? b = new Proxy(i,g) : o(b = function() {
                return g.apply ? g.apply(i, this, a(arguments)) : i.apply(this, arguments)
            }
            , m),
            n.get(b.after).install(r, b, (function(e, t) {
                var n, i = [];
                e.length || t.length ? (e.forEach(o),
                n = i.push(void 0) - 1,
                t.forEach(o),
                p = function(e, t, o) {
                    var d, s = 0, c = "async" === r && "function" == typeof o[o.length - 1] && o.pop();
                    function u(e) {
                        "sync" === r ? d = e : c && c.apply(null, arguments)
                    }
                    function p(e) {
                        if (i[s]) {
                            var n = a(arguments);
                            return p.bail = u,
                            n.unshift(p),
                            i[s++].apply(t, n)
                        }
                        "sync" === r ? d = e : c && c.apply(null, arguments)
                    }
                    return i[n] = function() {
                        var n = a(arguments, 1);
                        "async" === r && c && (delete p.bail,
                        n.push(p));
                        var i = e.apply(t, n);
                        "sync" === r && p(i)
                    }
                    ,
                    p.apply(null, o),
                    d
                }
                ) : p = void 0;
                function o(e) {
                    i.push(e.hook)
                }
                v()
            }
            )),
            b;
            function v() {
                !t && ("sync" !== r || e.ready & d.SYNC) && ("async" !== r || e.ready & d.ASYNC) ? "sync" !== r && e.ready & d.QUEUE ? g.apply = function() {
                    var e = arguments;
                    c.push((function() {
                        b.apply(e[1], e[2])
                    }
                    ))
                }
                : g.apply = function() {
                    throw "fun-hooks: hooked function not ready"
                }
                : g.apply = p
            }
        }
        return (e = o({}, r, e)).ready ? u.ready = function() {
            t = !0,
            function(e) {
                for (var t; t = e.shift(); )
                    t()
            }(c)
        }
        : t = !0,
        u.get = l,
        u
    }
    e.exports = d
}
, function(e, t, r) {
    "use strict";
    function n(e, t) {
        if (null == e)
            return {};
        var r, n, i = {}, a = Object.keys(e);
        for (n = 0; n < a.length; n++)
            r = a[n],
            t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
    }
    r.d(t, "a", (function() {
        return n
    }
    ))
}
, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return u
    }
    )),
    r.d(t, "b", (function() {
        return l
    }
    ));
    var n = r(3)
      , i = r(0)
      , a = {
        buckets: [{
            max: 5,
            increment: .5
        }]
    }
      , o = {
        buckets: [{
            max: 20,
            increment: .1
        }]
    }
      , d = {
        buckets: [{
            max: 20,
            increment: .01
        }]
    }
      , s = {
        buckets: [{
            max: 3,
            increment: .01
        }, {
            max: 8,
            increment: .05
        }, {
            max: 20,
            increment: .5
        }]
    }
      , c = {
        buckets: [{
            max: 5,
            increment: .05
        }, {
            max: 10,
            increment: .1
        }, {
            max: 20,
            increment: .5
        }]
    };
    function u(e, t, r) {
        void 0 === r && (r = 1);
        var n = parseFloat(e);
        return isNaN(n) && (n = ""),
        {
            low: "" === n ? "" : p(e, a, r),
            med: "" === n ? "" : p(e, o, r),
            high: "" === n ? "" : p(e, d, r),
            auto: "" === n ? "" : p(e, c, r),
            dense: "" === n ? "" : p(e, s, r),
            custom: "" === n ? "" : p(e, t, r)
        }
    }
    function p(e, t, r) {
        var i = "";
        if (!l(t))
            return i;
        var a = t.buckets.reduce((function(e, t) {
            return e.max > t.max ? e : t
        }
        ), {
            max: 0
        })
          , o = 0
          , d = Object(n.b)(t.buckets, (function(t) {
            if (e > a.max * r) {
                var n = t.precision;
                void 0 === n && (n = 2),
                i = (t.max * r).toFixed(n)
            } else {
                if (e <= t.max * r && e >= o * r)
                    return t.min = o,
                    t;
                o = t.max
            }
        }
        ));
        return d && (i = function(e, t, r) {
            var n = void 0 !== t.precision ? t.precision : 2
              , i = t.increment * r
              , a = t.min * r
              , o = Math.pow(10, n + 2)
              , d = (e * o - a * o) / (i * o)
              , s = Math.floor(d) * i + a;
            return (s = Number(s.toFixed(10))).toFixed(n)
        }(e, d, r)),
        i
    }
    function l(e) {
        if (Object(i.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets))
            return !1;
        var t = !0;
        return e.buckets.forEach((function(e) {
            e.max && e.increment || (t = !1)
        }
        )),
        t
    }
}
, function(e, t, r) {
    "use strict";
    t.a = function(e, t, r) {
        t.split && (t = t.split("."));
        for (var n, i = 0, a = t.length, o = e; i < a; ++i)
            n = o[t[i]],
            o = o[t[i]] = i === a - 1 ? r : null != n ? n : !~t[i + 1].indexOf(".") && +t[i + 1] > -1 ? [] : {}
    }
}
, function(e, t) {
    e.exports = function e(t) {
        var r = Array.isArray(t) ? [] : {};
        for (var n in t) {
            var i = t[n];
            r[n] = i && "object" == typeof i ? e(i) : i
        }
        return r
    }
}
, function(e, t, r) {
    "use strict";
    r.r(t),
    r.d(t, "pluginClass", (function() {
        return lu
    }
    ));
    var n = {};
    r.r(n),
    r.d(n, "code", (function() {
        return pa
    }
    )),
    r.d(n, "generate", (function() {
        return la
    }
    )),
    r.d(n, "validate", (function() {
        return fa
    }
    ));
    var i = {};
    r.r(i),
    r.d(i, "code", (function() {
        return Wa
    }
    )),
    r.d(i, "generate", (function() {
        return Va
    }
    )),
    r.d(i, "validate", (function() {
        return La
    }
    ));
    var a = {};
    r.r(a),
    r.d(a, "code", (function() {
        return Za
    }
    )),
    r.d(a, "generate", (function() {
        return eo
    }
    )),
    r.d(a, "validate", (function() {
        return to
    }
    ));
    var o = {};
    r.r(o),
    r.d(o, "code", (function() {
        return oo
    }
    )),
    r.d(o, "generate", (function() {
        return so
    }
    )),
    r.d(o, "validate", (function() {
        return co
    }
    ));
    var d = {};
    r.r(d),
    r.d(d, "code", (function() {
        return So
    }
    )),
    r.d(d, "generate", (function() {
        return Co
    }
    )),
    r.d(d, "validate", (function() {
        return To
    }
    ));
    var s = {};
    r.r(s),
    r.d(s, "code", (function() {
        return hd
    }
    )),
    r.d(s, "generate", (function() {
        return Od
    }
    )),
    r.d(s, "validate", (function() {
        return jd
    }
    ));
    var c = {};
    r.r(c),
    r.d(c, "code", (function() {
        return Id
    }
    )),
    r.d(c, "generate", (function() {
        return Ed
    }
    )),
    r.d(c, "validate", (function() {
        return wd
    }
    ));
    var u = {};
    r.r(u),
    r.d(u, "code", (function() {
        return Hd
    }
    )),
    r.d(u, "generate", (function() {
        return Kd
    }
    )),
    r.d(u, "validate", (function() {
        return Yd
    }
    ));
    var p = {};
    r.r(p),
    r.d(p, "code", (function() {
        return Zd
    }
    )),
    r.d(p, "generate", (function() {
        return es
    }
    )),
    r.d(p, "validate", (function() {
        return ts
    }
    ));
    var l = {};
    r.r(l),
    r.d(l, "code", (function() {
        return rs
    }
    )),
    r.d(l, "generate", (function() {
        return ns
    }
    )),
    r.d(l, "validate", (function() {
        return is
    }
    ));
    var f = {};
    r.r(f),
    r.d(f, "code", (function() {
        return Ms
    }
    )),
    r.d(f, "generate", (function() {
        return zs
    }
    )),
    r.d(f, "validate", (function() {
        return Fs
    }
    ));
    var b = {};
    r.r(b),
    r.d(b, "code", (function() {
        return tc
    }
    )),
    r.d(b, "generate", (function() {
        return rc
    }
    )),
    r.d(b, "validate", (function() {
        return nc
    }
    ));
    var m = {};
    r.r(m),
    r.d(m, "code", (function() {
        return ic
    }
    )),
    r.d(m, "generate", (function() {
        return ac
    }
    )),
    r.d(m, "validate", (function() {
        return oc
    }
    ));
    var g = {};
    r.r(g),
    r.d(g, "code", (function() {
        return dc
    }
    )),
    r.d(g, "generate", (function() {
        return sc
    }
    )),
    r.d(g, "validate", (function() {
        return cc
    }
    ));
    var v = {};
    r.r(v),
    r.d(v, "code", (function() {
        return fc
    }
    )),
    r.d(v, "generate", (function() {
        return bc
    }
    )),
    r.d(v, "validate", (function() {
        return mc
    }
    ));
    var y = {};
    r.r(y),
    r.d(y, "code", (function() {
        return Oc
    }
    )),
    r.d(y, "generate", (function() {
        return jc
    }
    )),
    r.d(y, "validate", (function() {
        return Ic
    }
    ));
    var h = {};
    r.r(h),
    r.d(h, "code", (function() {
        return Ec
    }
    )),
    r.d(h, "generate", (function() {
        return wc
    }
    )),
    r.d(h, "validate", (function() {
        return xc
    }
    ));
    var O = {};
    r.r(O),
    r.d(O, "code", (function() {
        return Sc
    }
    )),
    r.d(O, "generate", (function() {
        return Cc
    }
    )),
    r.d(O, "validate", (function() {
        return Tc
    }
    ));
    var j = {};
    r.r(j),
    r.d(j, "code", (function() {
        return Hc
    }
    )),
    r.d(j, "generate", (function() {
        return Kc
    }
    )),
    r.d(j, "validate", (function() {
        return Yc
    }
    ));
    var I = r(2);
    function E() {
        return window.jwpb
    }
    window.jwpb = window.jwpb || {},
    window.jwpb.cmd = window.jwpb.cmd || [],
    window.jwpb.que = window.jwpb.que || [],
    window._pbjsGlobals = window._pbjsGlobals || [],
    window._pbjsGlobals.push("jwpb");
    var w = r(0)
      , x = r(6)
      , S = r(5)
      , C = r(3)
      , T = r(9)
      , _ = r(1)
      , A = k();
    function k(e, t) {
        void 0 === e && (e = 3e3);
        var r = void 0 === t ? {} : t
          , n = r.request
          , i = r.done;
        return function(t, r, a, o) {
            void 0 === o && (o = {});
            try {
                var d, s = o.method || (a ? "POST" : "GET"), c = document.createElement("a");
                c.href = t;
                var u = "object" == typeof r && null !== r ? r : {
                    success: function() {
                        Object(w.logMessage)("xhr success")
                    },
                    error: function(e) {
                        Object(w.logError)("xhr error", null, e)
                    }
                };
                if ("function" == typeof r && (u.success = r),
                (d = new window.XMLHttpRequest).onreadystatechange = function() {
                    if (4 === d.readyState) {
                        "function" == typeof i && i(c.origin);
                        var e = d.status;
                        e >= 200 && e < 300 || 304 === e ? u.success(d.responseText, d) : u.error(d.statusText, d)
                    }
                }
                ,
                _.b.getConfig("disableAjaxTimeout") || (d.ontimeout = function() {
                    Object(w.logError)("  xhr timeout after ", d.timeout, "ms")
                }
                ),
                "GET" === s && a) {
                    var p = Object(w.parseUrl)(t, o);
                    Object(I.default)(p.search, a),
                    t = Object(w.buildUrl)(p)
                }
                d.open(s, t, !0),
                _.b.getConfig("disableAjaxTimeout") || (d.timeout = e),
                o.withCredentials && (d.withCredentials = !0),
                Object(w._each)(o.customHeaders, (function(e, t) {
                    d.setRequestHeader(t, e)
                }
                )),
                o.preflight && d.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                d.setRequestHeader("Content-Type", o.contentType || "text/plain"),
                "function" == typeof n && n(c.origin),
                "POST" === s && a ? d.send(a) : d.send()
            } catch (e) {
                Object(w.logError)("xhr construction", e),
                "object" == typeof r && null !== r && r.error(e)
            }
        }
    }
    function P(e, t) {
        var r, n, i = (void 0 === t ? {} : t).index, a = void 0 === i ? ht.index : i, o = e.vastXml ? e.vastXml : (r = e.vastUrl,
        n = e.vastImpUrl,
        '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + r + "]]></VASTAdTagURI>\n        <Impression>" + (n ? "<![CDATA[" + n + "]]>" : "") + "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"), d = a.getAuction(e), s = {
            type: "xml",
            value: o,
            ttlseconds: Number(e.ttl)
        };
        return _.b.getConfig("cache.vasttrack") && (s.bidder = e.bidder,
        s.bidid = e.requestId,
        s.aid = e.auctionId),
        null != d && (s.timestamp = d.getAuctionStart()),
        "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (s.key = e.customCacheKey),
        s
    }
    function R(e, t) {
        var r = {
            puts: e.map(P)
        };
        A(_.b.getConfig("cache.url"), function(e) {
            return {
                success: function(t) {
                    var r;
                    try {
                        r = JSON.parse(t).responses
                    } catch (t) {
                        return void e(t, [])
                    }
                    r ? e(null, r) : e(new Error("The cache server didn't respond with a responses property."), [])
                },
                error: function(t, r) {
                    e(new Error("Error storing video ad in the cache: " + t + ": " + JSON.stringify(r)), [])
                }
            }
        }(t), JSON.stringify(r), {
            contentType: "text/plain",
            withCredentials: !0
        })
    }
    var U = new WeakMap
      , D = ["adloox", "criteo", "outstream", "adagio", "browsi", "brandmetrics", "justtag", "akamaidap", "ftrackId", "inskin", "hadron", "medianet"];
    function B(e, t, r, n) {
        if (t && e) {
            if (Object(C.c)(D, t)) {
                n || (n = document);
                var i = d(n, e);
                if (i)
                    return r && "function" == typeof r && (i.loaded ? r() : i.callbacks.push(r)),
                    i.tag;
                var a = U.get(n) || {}
                  , o = {
                    loaded: !1,
                    tag: null,
                    callbacks: []
                };
                return a[e] = o,
                U.set(n, a),
                r && "function" == typeof r && o.callbacks.push(r),
                Object(w.logWarn)("module " + t + " is loading external JavaScript"),
                function(t, r, n) {
                    n || (n = document);
                    var i = n.createElement("script");
                    i.type = "text/javascript",
                    i.async = !0;
                    var a = d(n, e);
                    a && (a.tag = i);
                    i.readyState ? i.onreadystatechange = function() {
                        "loaded" !== i.readyState && "complete" !== i.readyState || (i.onreadystatechange = null,
                        r())
                    }
                    : i.onload = function() {
                        r()
                    }
                    ;
                    return i.src = t,
                    Object(w.insertElement)(i, n),
                    i
                }(e, (function() {
                    o.loaded = !0;
                    try {
                        for (var e = 0; e < o.callbacks.length; e++)
                            o.callbacks[e]()
                    } catch (e) {
                        Object(w.logError)("Error executing callback", "adloader.js:loadExternalScript", e)
                    }
                }
                ), n)
            }
            Object(w.logError)(t + " not whitelisted for loading external JavaScript")
        } else
            Object(w.logError)("cannot load external script without url and moduleCode");
        function d(e, t) {
            var r = U.get(e);
            return r && r[t] ? r[t] : null
        }
    }
    function N(e) {
        var t = this
          , r = e.url
          , n = e.config
          , i = e.id
          , a = e.callback
          , o = e.loaded
          , d = e.adUnitCode;
        this.url = r,
        this.config = n,
        this.handlers = {},
        this.id = i,
        this.loaded = o,
        this.cmd = [],
        this.push = function(e) {
            "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : Object(w.logError)("Commands given to Renderer.push must be wrapped in a function")
        }
        ,
        this.callback = a || function() {
            t.loaded = !0,
            t.process()
        }
        ,
        this.render = function() {
            var e = this
              , t = arguments
              , n = function() {
                e._render ? e._render.apply(e, t) : Object(w.logWarn)("No render function was provided, please use .setRender on the renderer")
            };
            z(d) ? (Object(w.logWarn)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit " + d),
            n()) : (this.cmd.unshift(n),
            B(r, "outstream", this.callback, this.documentContext))
        }
        .bind(this)
    }
    function q(e) {
        return !(!e || !e.url)
    }
    function M(e, t, r) {
        var n = null;
        e.config && e.config.documentResolver && (n = e.config.documentResolver(t, document, r)),
        n || (n = document),
        e.documentContext = n,
        e.render(t, e.documentContext)
    }
    function z(e) {
        var t = jwpb.adUnits
          , r = Object(C.b)(t, (function(t) {
            return t.code === e
        }
        ));
        if (!r)
            return !1;
        var n = Object(x.a)(r, "renderer")
          , i = !!(n && n.url && n.render)
          , a = Object(x.a)(r, "mediaTypes.video.renderer")
          , o = !!(a && a.url && a.render);
        return !!(i && !0 !== n.backupOnly || o && !0 !== a.backupOnly)
    }
    N.install = function(e) {
        return new N({
            url: e.url,
            config: e.config,
            id: e.id,
            callback: e.callback,
            loaded: e.loaded,
            adUnitCode: e.adUnitCode
        })
    }
    ,
    N.prototype.getConfig = function() {
        return this.config
    }
    ,
    N.prototype.setRender = function(e) {
        this._render = e
    }
    ,
    N.prototype.setEventHandlers = function(e) {
        this.handlers = e
    }
    ,
    N.prototype.handleVideoEvent = function(e) {
        var t = e.id
          , r = e.eventName;
        "function" == typeof this.handlers[r] && this.handlers[r](),
        Object(w.logMessage)("Prebid Renderer event for id " + t + " type " + r)
    }
    ,
    N.prototype.process = function() {
        for (; this.cmd.length > 0; )
            try {
                this.cmd.shift().call()
            } catch (e) {
                Object(w.logError)("Error processing Renderer command: ", e)
            }
    }
    ;
    var F = r(7)
      , W = r.n(F);
    function V(e) {
        var t = (void 0 === e ? {} : e).promiseFactory
          , r = {};
        function n(e) {
            return function(t) {
                "function" == typeof r[e] ? r[e](t) : r[e] || (r[e] = !0,
                r[2] = t)
            }
        }
        return {
            promise: (void 0 === t ? function(e) {
                return new Promise(e)
            }
            : t)((function(e, t) {
                null != r[0] ? e(r[2]) : null != r[1] ? t(r[2]) : (r[0] = e,
                r[1] = t)
            }
            )),
            resolve: n(0),
            reject: n(1)
        }
    }
    var G, L = W()({
        ready: W.a.SYNC | W.a.ASYNC | W.a.QUEUE
    }), H = V();
    L.ready = (G = L.ready,
    function() {
        try {
            return G.apply(L, arguments)
        } finally {
            H.resolve()
        }
    }
    );
    var K = H.promise
      , Y = L.get;
    var X = {};
    function J(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
            r[n - 1] = arguments[n];
        var i = X[e];
        if (i)
            return i.apply(void 0, r);
        Y(e).before((function(e, t) {
            t.push(r),
            e(t)
        }
        ))
    }
    var Q = r(4)
      , $ = new (function() {
        function e(e, t) {
            this.getSettings = e,
            this.defaultScope = t
        }
        var t = e.prototype;
        return t.get = function(e, t) {
            var r = this.getOwn(e, t);
            return void 0 === r && (r = this.getOwn(null, t)),
            r
        }
        ,
        t.getOwn = function(e, t) {
            return e = this.resolveScope(e),
            Object(x.a)(this.getSettings(), e + "." + t)
        }
        ,
        t.getScopes = function() {
            var e = this;
            return Object.keys(this.getSettings()).filter((function(t) {
                return t !== e.defaultScope
            }
            ))
        }
        ,
        t.settingsFor = function(e) {
            return Object(w.mergeDeep)({}, this.ownSettingsFor(null), this.ownSettingsFor(e))
        }
        ,
        t.ownSettingsFor = function(e) {
            return e = this.resolveScope(e),
            this.getSettings()[e] || {}
        }
        ,
        t.resolveScope = function(e) {
            return null == e ? this.defaultScope : e
        }
        ,
        e
    }())((function() {
        return E().bidderSettings || {}
    }
    ),Q.JSON_MAPPING.BD_SETTING_STANDARD)
      , Z = ["core", "prebid-module"]
      , ee = [];
    function te(e, t) {
        var r = void 0 === e ? {} : e
          , n = r.gvlid
          , i = r.moduleName
          , a = r.bidderCode
          , o = r.moduleType
          , d = (void 0 === t ? {} : t).bidderSettings
          , s = void 0 === d ? $ : d;
        function c(e) {
            if (Object(C.c)(Z, o)) {
                return e({
                    valid: !0
                })
            }
            if (function() {
                if (null == a)
                    return !1;
                var e = s.get(a, "storageAllowed");
                return null != e && !e
            }()) {
                Object(w.logInfo)("bidderSettings denied access to device storage for bidder '" + a + "'");
                return e({
                    valid: !1
                })
            }
            var t;
            return re(n, a || i, o, {
                hasEnforcementHook: !1
            }, (function(r) {
                if (r && r.hasEnforcementHook)
                    t = e(r);
                else {
                    var n = {
                        hasEnforcementHook: !1,
                        valid: Object(w.hasDeviceAccess)()
                    };
                    t = e(n)
                }
            }
            )),
            t
        }
        var u = function(e) {
            var t = function(e) {
                if (e && e.valid)
                    try {
                        return !!window.localStorage
                    } catch (e) {
                        Object(w.logError)("Local storage api disabled")
                    }
                return !1
            };
            if (!e || "function" != typeof e)
                return c(t);
            ee.push((function() {
                var r = c(t);
                e(r)
            }
            ))
        };
        return {
            setCookie: function(e, t, r, n, i, a) {
                var o = function(a) {
                    if (a && a.valid) {
                        var o = i && "" !== i ? " ;domain=" + encodeURIComponent(i) : ""
                          , d = r && "" !== r ? " ;expires=" + r : ""
                          , s = null != n && "none" == n.toLowerCase() ? "; Secure" : "";
                        document.cookie = e + "=" + encodeURIComponent(t) + d + "; path=/" + o + (n ? "; SameSite=" + n : "") + s
                    }
                };
                if (!a || "function" != typeof a)
                    return c(o);
                ee.push((function() {
                    var e = c(o);
                    a(e)
                }
                ))
            },
            getCookie: function(e, t) {
                var r = function(t) {
                    if (t && t.valid) {
                        var r = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                        return r ? decodeURIComponent(r[2]) : null
                    }
                    return null
                };
                if (!t || "function" != typeof t)
                    return c(r);
                ee.push((function() {
                    var e = c(r);
                    t(e)
                }
                ))
            },
            localStorageIsEnabled: function(e) {
                var t = function(e) {
                    if (e && e.valid)
                        try {
                            return localStorage.setItem("prebid.cookieTest", "1"),
                            "1" === localStorage.getItem("prebid.cookieTest")
                        } catch (e) {} finally {
                            try {
                                localStorage.removeItem("prebid.cookieTest")
                            } catch (e) {}
                        }
                    return !1
                };
                if (!e || "function" != typeof e)
                    return c(t);
                ee.push((function() {
                    var r = c(t);
                    e(r)
                }
                ))
            },
            cookiesAreEnabled: function(e) {
                var t = function(e) {
                    return !(!e || !e.valid) && (!!Object(w.checkCookieSupport)() || (window.document.cookie = "prebid.cookieTest",
                    -1 !== window.document.cookie.indexOf("prebid.cookieTest")))
                };
                if (!e || "function" != typeof e)
                    return c(t);
                ee.push((function() {
                    var r = c(t);
                    e(r)
                }
                ))
            },
            setDataInLocalStorage: function(e, t, r) {
                var n = function(r) {
                    r && r.valid && u() && window.localStorage.setItem(e, t)
                };
                if (!r || "function" != typeof r)
                    return c(n);
                ee.push((function() {
                    var e = c(n);
                    r(e)
                }
                ))
            },
            getDataFromLocalStorage: function(e, t) {
                var r = function(t) {
                    return t && t.valid && u() ? window.localStorage.getItem(e) : null
                };
                if (!t || "function" != typeof t)
                    return c(r);
                ee.push((function() {
                    var e = c(r);
                    t(e)
                }
                ))
            },
            removeDataFromLocalStorage: function(e, t) {
                var r = function(t) {
                    t && t.valid && u() && window.localStorage.removeItem(e)
                };
                if (!t || "function" != typeof t)
                    return c(r);
                ee.push((function() {
                    var e = c(r);
                    t(e)
                }
                ))
            },
            hasLocalStorage: u,
            findSimilarCookies: function(e, t) {
                var r = function(t) {
                    if (t && t.valid) {
                        var r = [];
                        if (Object(w.hasDeviceAccess)())
                            for (var n = document.cookie.split(";"); n.length; ) {
                                var i = n.pop()
                                  , a = i.indexOf("=");
                                a = a < 0 ? i.length : a,
                                decodeURIComponent(i.slice(0, a).replace(/^\s+/, "")).indexOf(e) >= 0 && r.push(decodeURIComponent(i.slice(a + 1)))
                            }
                        return r
                    }
                };
                if (!t || "function" != typeof t)
                    return c(r);
                ee.push((function() {
                    var e = c(r);
                    t(e)
                }
                ))
            }
        }
    }
    var re = L("async", (function(e, t, r, n, i) {
        i(n)
    }
    ), "validateStorageEnforcement");
    function ne(e) {
        return te({
            moduleName: e,
            moduleType: "core"
        })
    }
    function ie(e) {
        var t = void 0 === e ? {} : e
          , r = t.gvlid
          , n = t.moduleName
          , i = t.bidderCode
          , a = t.moduleType;
        if (arguments.length > 1 || arguments.length > 0 && !Object(w.isPlainObject)(arguments[0]))
            throw new Error("Invalid invocation for getStorageManager");
        return te({
            gvlid: r,
            moduleName: n,
            bidderCode: i,
            moduleType: a
        })
    }
    _.b.setDefaults({
        userSync: Object(w.deepClone)({
            syncEnabled: !0,
            filterSettings: {
                image: {
                    bidders: "*",
                    filter: "include"
                }
            },
            syncsPerBidder: 5,
            syncDelay: 3e3,
            auctionDelay: 0
        })
    });
    var ae = ne("usersync");
    var oe = !Object(w.isSafariBrowser)() && ae.cookiesAreEnabled()
      , de = function(e) {
        var t = {}
          , r = {
            image: [],
            iframe: []
        }
          , n = new Set
          , i = {}
          , a = {
            image: !0,
            iframe: !1
        }
          , o = e.config;
        function d() {
            if (o.syncEnabled && e.browserSupportsCookies) {
                try {
                    !function() {
                        if (!a.iframe)
                            return;
                        s(r.iframe, (function(e) {
                            var t = e[0]
                              , n = e[1];
                            Object(w.logMessage)("Invoking iframe user sync for bidder: " + t),
                            Object(w.insertUserSyncIframe)(n),
                            function(e, t) {
                                e.image = e.image.filter((function(e) {
                                    return e[0] !== t
                                }
                                ))
                            }(r, t)
                        }
                        ))
                    }(),
                    function() {
                        if (!a.image)
                            return;
                        s(r.image, (function(e) {
                            var t = e[0]
                              , r = e[1];
                            Object(w.logMessage)("Invoking image pixel user sync for bidder: " + t),
                            Object(w.triggerPixel)(r)
                        }
                        ))
                    }()
                } catch (e) {
                    return Object(w.logError)("Error firing user syncs", e)
                }
                r = {
                    image: [],
                    iframe: []
                }
            }
        }
        function s(e, t) {
            Object(w.shuffle)(e).forEach((function(e) {
                t(e),
                n.add(e[0])
            }
            ))
        }
        function c(e, t) {
            var r = o.filterSettings;
            if (function(e, t) {
                if (e.all && e[t])
                    return Object(w.logWarn)('Detected presence of the "filterSettings.all" and "filterSettings.' + t + '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'),
                    !1;
                var r = e.all ? e.all : e[t]
                  , n = e.all ? "all" : t;
                if (!r)
                    return !1;
                var i = r.filter
                  , a = r.bidders;
                if (i && "include" !== i && "exclude" !== i)
                    return Object(w.logWarn)('UserSync "filterSettings.' + n + ".filter\" setting '" + i + "' is not a valid option; use either 'include' or 'exclude'."),
                    !1;
                if ("*" !== a && !(Array.isArray(a) && a.length > 0 && a.every((function(e) {
                    return Object(w.isStr)(e) && "*" !== e
                }
                ))))
                    return Object(w.logWarn)('Detected an invalid setup in userSync "filterSettings.' + n + ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."),
                    !1;
                return !0
            }(r, e)) {
                a[e] = !0;
                var n = r.all ? r.all : r[e]
                  , i = "*" === n.bidders ? [t] : n.bidders;
                return {
                    include: function(e, t) {
                        return !Object(C.c)(e, t)
                    },
                    exclude: function(e, t) {
                        return Object(C.c)(e, t)
                    }
                }[n.filter || "include"](i, t)
            }
            return !a[e]
        }
        return _.b.getConfig("userSync", (function(e) {
            if (e.userSync) {
                var t = e.userSync.filterSettings;
                Object(w.isPlainObject)(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                    bidders: "*",
                    filter: "include"
                }))
            }
            o = Object(I.default)(o, e.userSync)
        }
        )),
        t.registerSync = function(e, a, d) {
            return n.has(a) ? Object(w.logMessage)('already fired syncs for "' + a + '", ignoring registerSync call') : o.syncEnabled && Object(w.isArray)(r[e]) ? a ? 0 !== o.syncsPerBidder && Number(i[a]) >= o.syncsPerBidder ? Object(w.logWarn)('Number of user syncs exceeded for "' + a + '"') : t.canBidderRegisterSync(e, a) ? (r[e].push([a, d]),
            void (i = function(e, t) {
                return e[t] ? e[t] += 1 : e[t] = 1,
                e
            }(i, a))) : Object(w.logWarn)('Bidder "' + a + '" not permitted to register their "' + e + '" userSync pixels.') : Object(w.logWarn)("Bidder is required for registering sync") : Object(w.logWarn)('User sync type "' + e + '" not supported')
        }
        ,
        t.syncUsers = function(e) {
            if (void 0 === e && (e = 0),
            e)
                return setTimeout(d, Number(e));
            d()
        }
        ,
        t.triggerUserSyncs = function() {
            o.enableOverride && t.syncUsers()
        }
        ,
        t.canBidderRegisterSync = function(e, t) {
            return !o.filterSettings || !c(e, t)
        }
        ,
        t
    }({
        config: _.b.getConfig("userSync"),
        browserSupportsCookies: oe
    })
      , se = [];
    function ce(e, t) {
        return e.labelAll ? {
            labelAll: !0,
            labels: e.labelAll,
            activeLabels: t
        } : {
            labelAll: !1,
            labels: e.labelAny,
            activeLabels: t
        }
    }
    function ue(e, t, r, n) {
        var i = void 0 === e ? {} : e
          , a = i.labels
          , o = void 0 === a ? [] : a
          , d = i.labelAll
          , s = void 0 !== d && d
          , c = i.activeLabels
          , u = void 0 === c ? [] : c;
        void 0 === n && (n = se);
        var p = pe(n);
        t = Object(w.isPlainObject)(t) ? Object(w.deepClone)(t) : r ? {
            banner: {
                sizes: r
            }
        } : {};
        var l = Object(x.a)(t, "banner.sizes");
        p.shouldFilter && l && (t.banner.sizes = l.filter((function(e) {
            return p.sizesSupported[e]
        }
        )));
        var f = Object.keys(t)
          , b = {
            active: f.every((function(e) {
                return "banner" !== e
            }
            )) || f.some((function(e) {
                return "banner" === e
            }
            )) && Object(x.a)(t, "banner.sizes.length") > 0 && (0 === o.length || !s && (o.some((function(e) {
                return p.labels[e]
            }
            )) || o.some((function(e) {
                return Object(C.c)(u, e)
            }
            ))) || s && o.reduce((function(e, t) {
                return e ? p.labels[t] || Object(C.c)(u, t) : e
            }
            ), !0)),
            mediaTypes: t
        };
        return l && l.length !== t.banner.sizes.length && (b.filterResults = {
            before: l,
            after: t.banner.sizes
        }),
        b
    }
    function pe(e) {
        return e.reduce((function(e, t) {
            if ("object" == typeof t && "string" == typeof t.mediaQuery && t.mediaQuery.length > 0) {
                var r = !1;
                try {
                    r = Object(w.getWindowTop)().matchMedia(t.mediaQuery).matches
                } catch (e) {
                    Object(w.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"),
                    r = matchMedia(t.mediaQuery).matches
                }
                r && (Array.isArray(t.sizesSupported) && (e.shouldFilter = !0),
                ["labels", "sizesSupported"].forEach((function(r) {
                    return (t[r] || []).forEach((function(t) {
                        return e[r][t] = !0
                    }
                    ))
                }
                )))
            } else
                Object(w.logWarn)('sizeConfig rule missing required property "mediaQuery"');
            return e
        }
        ), {
            labels: {},
            sizesSupported: {},
            shouldFilter: !1
        })
    }
    function le(e) {
        var t = e;
        return {
            callBids: function() {},
            setBidderCode: function(e) {
                t = e
            },
            getBidderCode: function() {
                return t
            }
        }
    }
    function fe(e, t) {
        var r = void 0 === t ? {} : t
          , n = r.src
          , i = void 0 === n ? "client" : n
          , a = r.bidder
          , o = void 0 === a ? "" : a
          , d = r.bidId
          , s = r.transactionId
          , c = r.auctionId
          , u = i
          , p = e || 0;
        this.bidderCode = o,
        this.width = 0,
        this.height = 0,
        this.statusMessage = function() {
            switch (p) {
            case 0:
                return "Pending";
            case 1:
                return "Bid available";
            case 2:
                return "Bid returned empty or error response";
            case 3:
                return "Bid timed out"
            }
        }(),
        this.adId = Object(w.getUniqueIdentifierStr)(),
        this.requestId = d,
        this.transactionId = s,
        this.auctionId = c,
        this.mediaType = "banner",
        this.source = u,
        this.getStatusCode = function() {
            return p
        }
        ,
        this.getSize = function() {
            return this.width + "x" + this.height
        }
        ,
        this.getIdentifiers = function() {
            return {
                src: this.source,
                bidder: this.bidderCode,
                bidId: this.requestId,
                transactionId: this.transactionId,
                auctionId: this.auctionId
            }
        }
    }
    function be(e, t) {
        return new fe(e,t)
    }
    _.b.getConfig("sizeConfig", (function(e) {
        return function(e) {
            se = e
        }(e.sizeConfig)
    }
    ));
    var me = "native"
      , ge = "video"
      , ve = "banner"
      , ye = "adpod"
      , he = ne("bidderFactory")
      , Oe = ["cpm", "ttl", "creativeId", "netRevenue", "currency"];
    function je(e) {
        var t = Array.isArray(e.supportedMediaTypes) ? {
            supportedMediaTypes: e.supportedMediaTypes
        } : void 0;
        function r(e) {
            var r = Ie(e);
            Qe.registerBidAdapter(r, e.code, t)
        }
        r(e),
        Array.isArray(e.aliases) && e.aliases.forEach((function(t) {
            var n, i, a = t;
            Object(w.isPlainObject)(t) && (a = t.code,
            n = t.gvlid,
            i = t.skipPbsAliasing),
            Qe.aliasRegistry[a] = e.code,
            r(Object(I.default)({}, e, {
                code: a,
                gvlid: n,
                skipPbsAliasing: i
            }))
        }
        ))
    }
    function Ie(e) {
        return Object(I.default)(new le(e.code), {
            getSpec: function() {
                return Object.freeze(e)
            },
            registerSyncs: t,
            callBids: function(n, i, a, o, d, s) {
                if (Array.isArray(n.bids)) {
                    var c = {}
                      , u = []
                      , p = n.bids.filter(r);
                    if (0 !== p.length) {
                        var l = {};
                        p.forEach((function(e) {
                            l[e.bidId] = e,
                            e.adUnitCode || (e.adUnitCode = e.placementCode)
                        }
                        )),
                        Ee(e, p, n, o, s, {
                            onRequest: function(e) {
                                return S.emit(Q.EVENTS.BEFORE_BIDDER_HTTP, n, e)
                            },
                            onResponse: function(t) {
                                d(e.code),
                                u.push(t)
                            },
                            onError: function(t, r) {
                                d(e.code),
                                Qe.callBidderError(e.code, r, n),
                                S.emit(Q.EVENTS.BIDDER_ERROR, {
                                    error: r,
                                    bidderRequest: n
                                }),
                                Object(w.logError)("Server call for " + e.code + " failed: " + t + " " + r.status + ". Continuing without bids.")
                            },
                            onBid: function(t) {
                                var r = l[t.requestId];
                                if (r) {
                                    if (t.adapterCode = r.bidder,
                                    function(e, t) {
                                        var r = $.get(t, "allowAlternateBidderCodes")
                                          , n = $.get(t, "allowedAlternateBidderCodes");
                                        if (e && t && t !== e && (void 0 !== r && !r || Object(w.isArray)(n) && "*" !== n[0] && !n.includes(e)))
                                            return !0;
                                        return !1
                                    }(t.bidderCode, r.bidder))
                                        return void Object(w.logWarn)(t.bidderCode + " is not a registered partner or known bidder of " + r.bidder + ", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings.");
                                    t.originalCpm = t.cpm,
                                    t.originalCurrency = t.currency,
                                    t.meta = t.meta || Object(I.default)({}, t[r.bidder]);
                                    var n = Object(I.default)(be(Q.STATUS.GOOD, r), t);
                                    !function(e, t) {
                                        c[e] = !0,
                                        xe(e, t) && i(e, t)
                                    }(r.adUnitCode, n)
                                } else
                                    Object(w.logWarn)("Bidder " + e.code + " made bid for unknown request ID: " + t.requestId + ". Ignoring.")
                            },
                            onCompletion: f
                        })
                    } else
                        f()
                }
                function f() {
                    a(),
                    _.b.runWithBidder(e.code, (function() {
                        S.emit(Q.EVENTS.BIDDER_DONE, n),
                        t(u, n.gdprConsent, n.uspConsent)
                    }
                    ))
                }
            }
        });
        function t(t, r, n) {
            we(e, t, r, n)
        }
        function r(t) {
            return !!e.isBidRequestValid(t) || (Object(w.logWarn)("Invalid bid sent to bidder " + e.code + ": " + JSON.stringify(t)),
            !1)
        }
    }
    var Ee = L("sync", (function(e, t, r, n, i, a) {
        var o = a.onRequest
          , d = a.onResponse
          , s = a.onError
          , c = a.onBid
          , u = a.onCompletion
          , p = e.buildRequests(t, r);
        if (p && 0 !== p.length) {
            Array.isArray(p) || (p = [p]);
            var l = Object(w.delayExecution)(u, p.length);
            p.forEach((function(t) {
                var r = i((function(r, n) {
                    try {
                        r = JSON.parse(r)
                    } catch (e) {}
                    var i;
                    r = {
                        body: r,
                        headers: {
                            get: n.getResponseHeader.bind(n)
                        }
                    },
                    d(r);
                    try {
                        i = e.interpretResponse(r, t)
                    } catch (t) {
                        return Object(w.logError)("Bidder " + e.code + " failed to interpret the server's response. Continuing without bids", null, t),
                        void l()
                    }
                    i && (Object(w.isArray)(i) ? i.forEach(c) : c(i)),
                    l()
                }
                ))
                  , a = i((function(e, t) {
                    s(e, t),
                    l()
                }
                ));
                switch (o(t),
                t.method) {
                case "GET":
                    n("" + t.url + function(e) {
                        if (e)
                            return "?" + ("object" == typeof e ? Object(w.parseQueryStringParameters)(e) : e);
                        return ""
                    }(t.data), {
                        success: r,
                        error: a
                    }, void 0, Object(I.default)({
                        method: "GET",
                        withCredentials: !0
                    }, t.options));
                    break;
                case "POST":
                    n(t.url, {
                        success: r,
                        error: a
                    }, "string" == typeof t.data ? t.data : JSON.stringify(t.data), Object(I.default)({
                        method: "POST",
                        contentType: "text/plain",
                        withCredentials: !0
                    }, t.options));
                    break;
                default:
                    Object(w.logWarn)("Skipping invalid request from " + e.code + ". Request type " + t.type + " must be GET or POST"),
                    l()
                }
            }
            ))
        } else
            u()
    }
    ), "processBidderRequests")
      , we = L("async", (function(e, t, r, n) {
        var i = _.b.getConfig("userSync.aliasSyncEnabled");
        if (e.getUserSyncs && (i || !Qe.aliasRegistry[e.code])) {
            var a = _.b.getConfig("userSync.filterSettings")
              , o = e.getUserSyncs({
                iframeEnabled: !(!a || !a.iframe && !a.all),
                pixelEnabled: !(!a || !a.image && !a.all)
            }, t, r, n);
            o && (Array.isArray(o) || (o = [o]),
            o.forEach((function(t) {
                de.registerSync(t.type, e.code, t.url)
            }
            )))
        }
    }
    ), "registerSyncs");
    function xe(e, t, r) {
        var n, i = (void 0 === r ? {} : r).index, a = void 0 === i ? ht.index : i;
        function o(e) {
            return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e
        }
        return e ? t ? (n = Object.keys(t),
        Oe.every((function(e) {
            return Object(C.c)(n, e) && !Object(C.c)([void 0, null], t[e])
        }
        )) ? "native" !== t.mediaType || function(e, t) {
            var r = (void 0 === t ? {} : t).index
              , n = void 0 === r ? ht.index : r;
            if (!Object(x.a)(e, "native.clickUrl"))
                return !1;
            var i = n.getAdUnit(e).nativeParams;
            if (!i)
                return !0;
            var a = Object.keys(i).filter((function(e) {
                return i[e].required
            }
            ))
              , o = Object.keys(e.native).filter((function(t) {
                return e.native[t]
            }
            ));
            return a.every((function(e) {
                return Object(C.c)(o, e)
            }
            ))
        }(t, {
            index: a
        }) ? "video" !== t.mediaType || function(e, t) {
            var r = (void 0 === t ? {} : t).index
              , n = void 0 === r ? ht.index : r
              , i = Object(x.a)(n.getMediaTypes(e), "video")
              , a = i && Object(x.a)(i, "context")
              , o = n.getAdUnit(e);
            return $e(e, o, i, a)
        }(t, {
            index: a
        }) ? !("banner" === t.mediaType && !function(e, t, r) {
            var n = (void 0 === r ? {} : r).index
              , i = void 0 === n ? ht.index : n;
            if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10)))
                return t.width = parseInt(t.width, 10),
                t.height = parseInt(t.height, 10),
                !0;
            var a = i.getBidRequest(t)
              , o = i.getMediaTypes(t)
              , d = a && a.sizes || o && o.banner && o.banner.sizes
              , s = Object(w.parseSizesInput)(d);
            if (1 === s.length) {
                var c = s[0].split("x")
                  , u = c[0]
                  , p = c[1];
                return t.width = parseInt(u, 10),
                t.height = parseInt(p, 10),
                !0
            }
            return !1
        }(0, t, {
            index: a
        })) || (Object(w.logError)(o("Banner bids require a width and height")),
        !1) : (Object(w.logError)(o("Video bid does not have required vastUrl or renderer property")),
        !1) : (Object(w.logError)(o("Native bid missing some required properties.")),
        !1) : (Object(w.logError)(o("Bidder " + t.bidderCode + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")),
        !1)) : (Object(w.logWarn)("Some adapter tried to add an undefined bid for " + e + "."),
        !1) : (Object(w.logWarn)("No adUnitCode was supplied to addBidResponse."),
        !1)
    }
    Y("checkAdUnitSetup").before((function(e, t) {
        if (!_.b.getConfig("adpod.brandCategoryExclusion"))
            return e.call(this, t);
        t.filter((function(e) {
            return Object(x.a)(e, "mediaTypes.video.context") === ye
        }
        )).map((function(e) {
            return e.bids.map((function(e) {
                return e.bidder
            }
            ))
        }
        )).reduce(w.flatten, []).filter(w.uniques).forEach((function(e) {
            var t = Qe.getBidAdapter(e);
            if (t.getSpec().getMappingFileInfo) {
                var r = t.getSpec().getMappingFileInfo()
                  , n = r.refreshInDays ? r.refreshInDays : 1
                  , i = r.localStorageKey ? r.localStorageKey : t.getSpec().code
                  , a = he.getDataFromLocalStorage(i);
                try {
                    (!(a = a ? JSON.parse(a) : void 0) || Object(w.timestamp)() > a.lastUpdated + 24 * n * 60 * 60 * 1e3) && A(r.url, {
                        success: function(t) {
                            try {
                                t = JSON.parse(t);
                                var r = {
                                    lastUpdated: Object(w.timestamp)(),
                                    mapping: t.mapping
                                };
                                he.setDataInLocalStorage(i, JSON.stringify(r))
                            } catch (t) {
                                Object(w.logError)("Failed to parse " + e + " bidder translation mapping file")
                            }
                        },
                        error: function() {
                            Object(w.logError)("Failed to load " + e + " bidder translation file")
                        }
                    })
                } catch (t) {
                    Object(w.logError)("Failed to parse " + e + " bidder translation mapping file")
                }
            }
        }
        )),
        e.call(this, t)
    }
    ));
    var Se = {};
    function Ce(e, t, r) {
        var n = function(e, t) {
            var r = Se[e] = Se[e] || {
                bidders: {}
            };
            return t ? r.bidders[t] = r.bidders[t] || {} : r
        }(e, r);
        return n[t] = (n[t] || 0) + 1,
        n[t]
    }
    var Te = {
        incrementRequestsCounter: function(e) {
            return Ce(e, "requestsCounter")
        },
        incrementBidderRequestsCounter: function(e, t) {
            return Ce(e, "requestsCounter", t)
        },
        incrementBidderWinsCounter: function(e, t) {
            return Ce(e, "winsCounter", t)
        },
        getRequestsCounter: function(e) {
            return Object(x.a)(Se, e + ".requestsCounter") || 0
        },
        getBidderRequestsCounter: function(e, t) {
            return Object(x.a)(Se, e + ".bidders." + t + ".requestsCounter") || 0
        },
        getBidderWinsCounter: function(e, t) {
            return Object(x.a)(Se, e + ".bidders." + t + ".winsCounter") || 0
        }
    };
    var _e = function(e) {
        function t(e) {
            var t = _.b.getConfig("pageUrl");
            if (t)
                return t;
            try {
                var r = e.querySelector("link[rel='canonical']");
                if (null !== r)
                    return r.href
            } catch (e) {}
            return null
        }
        return function() {
            var r, n, i, a = [], o = function(e) {
                try {
                    if (!e.location.ancestorOrigins)
                        return;
                    return e.location.ancestorOrigins
                } catch (e) {}
            }(e), d = _.b.getConfig("maxNestedIframes"), s = !1, c = 0, u = !1, p = !1;
            do {
                var l = r
                  , f = p
                  , b = void 0
                  , m = !1
                  , g = null;
                p = !1,
                r = r ? r.parent : e;
                try {
                    b = r.location.href || null
                } catch (e) {
                    m = !0
                }
                if (m)
                    if (f) {
                        var v = l.context;
                        try {
                            n = g = v.sourceUrl,
                            u = !0,
                            r === e.top && (s = !0),
                            v.canonicalUrl && (i = v.canonicalUrl)
                        } catch (e) {}
                    } else {
                        Object(w.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                        try {
                            var y = l.document.referrer;
                            y && (g = y,
                            r === e.top && (s = !0))
                        } catch (e) {}
                        !g && o && o[c - 1] && (g = o[c - 1]),
                        g && !u && (n = g)
                    }
                else {
                    if (b && (n = g = b,
                    u = !1,
                    r === e.top)) {
                        s = !0;
                        var h = t(r.document);
                        h && (i = h)
                    }
                    r.context && r.context.sourceUrl && (p = !0)
                }
                a.push(g),
                c++
            } while (r !== e.top && c < d);
            return a.reverse(),
            {
                referer: n || null,
                reachedTop: s,
                isAmp: u,
                numIframes: c - 1,
                stack: a,
                canonicalUrl: i || null
            }
        }
    }(window);
    function Ae(e, t) {
        return (Ae = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function ke(e, t) {
        e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        Ae(e, t)
    }
    function Pe(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var Re = function() {
        function e() {
            this.enabled = !1,
            this.ready = !1,
            this._promise = null,
            this.reset()
        }
        var t, r, n, i = e.prototype;
        return i.reset = function() {
            var e = this;
            this.promise = new Promise((function(t) {
                e.resolve = function(r) {
                    e.ready = !0,
                    e.data = r,
                    t(r)
                }
            }
            )),
            this.enabled = !1,
            this.data = null,
            this.ready = !1,
            this.generatedTime = null
        }
        ,
        i.enable = function() {
            this.enabled = !0
        }
        ,
        i.setConsentData = function(e, t) {
            void 0 === t && (t = Object(w.timestamp)()),
            this.generatedTime = t,
            this.resolve(e)
        }
        ,
        i.getConsentData = function() {
            return this.data
        }
        ,
        t = e,
        (r = [{
            key: "promise",
            get: function() {
                return this.ready ? Promise.resolve(this.data) : (this.enabled || this.resolve(null),
                this._promise)
            },
            set: function(e) {
                this._promise = e
            }
        }]) && Pe(t.prototype, r),
        n && Pe(t, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e
    }()
      , Ue = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return ke(t, e),
        t.prototype.getConsentMeta = function() {
            var e = this.getConsentData();
            if (e && this.generatedTime)
                return {
                    usp: e,
                    generatedAt: this.generatedTime
                }
        }
        ,
        t
    }(Re)
      , De = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return ke(t, e),
        t.prototype.getConsentMeta = function() {
            var e = this.getConsentData();
            if (e && e.vendorData && this.generatedTime)
                return {
                    gdprApplies: e.gdprApplies,
                    consentStringSize: Object(w.isStr)(e.vendorData.tcString) ? e.vendorData.tcString.length : 0,
                    generatedAt: this.generatedTime,
                    apiVersion: e.apiVersion
                }
        }
        ,
        t
    }(Re)
      , Be = "client"
      , Ne = "server"
      , qe = {}
      , Me = qe.bidderRegistry = {}
      , ze = qe.aliasRegistry = {}
      , Fe = [];
    _.b.getConfig("s2sConfig", (function(e) {
        e && e.s2sConfig && (Fe = Object(w.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig])
    }
    ));
    var We = {};
    var Ve = L("sync", (function(e) {
        var t = e.bidderCode
          , r = e.auctionId
          , n = e.bidderRequestId
          , i = e.adUnits
          , a = e.src;
        return i.reduce((function(e, i) {
            return e.push(i.bids.filter((function(e) {
                return e.bidder === t
            }
            )).reduce((function(e, t) {
                var o = null == (t = Object(I.default)({}, t, Object(w.getDefinedParams)(i, ["nativeParams", "ortb2Imp", "mediaType", "renderer", "storedAuctionResponse"]))).mediaTypes ? i.mediaTypes : t.mediaTypes;
                return Object(w.isValidMediaTypes)(o) ? t = Object(I.default)({}, t, {
                    mediaTypes: o
                }) : Object(w.logError)("mediaTypes is not correctly configured for adunit " + i.code),
                e.push(Object(I.default)({}, t, {
                    adUnitCode: i.code,
                    transactionId: i.transactionId,
                    sizes: Object(x.a)(o, "banner.sizes") || Object(x.a)(o, "video.playerSize") || [],
                    bidId: t.bid_id || Object(w.getUniqueIdentifierStr)(),
                    bidderRequestId: n,
                    auctionId: r,
                    src: a,
                    bidRequestsCount: Te.getRequestsCounter(i.code),
                    bidderRequestsCount: Te.getBidderRequestsCounter(i.code, t.bidder),
                    bidderWinsCount: Te.getBidderWinsCounter(i.code, t.bidder)
                })),
                e
            }
            ), [])),
            e
        }
        ), []).reduce(w.flatten, []).filter((function(e) {
            return "" !== e
        }
        ))
    }
    ), "getBids");
    var Ge = L("sync", (function(e, t, r) {
        var n = (void 0 === r ? {} : r).getS2SBidders;
        if (null == t)
            return e;
        var i = (void 0 === n ? Ye : n)(t);
        return e.filter((function(e) {
            return i.has(e.bidder)
        }
        ))
    }
    ), "filterBidsForAdUnit");
    var Le = new De
      , He = new Ue
      , Ke = L("sync", (function(e, t) {
        return function(e, t) {
            return e.reduce((function(e, r) {
                var n = ue(ce(r, t), r.mediaTypes, r.sizes)
                  , i = n.active
                  , a = n.mediaTypes
                  , o = n.filterResults;
                return i ? (o && Object(w.logInfo)('Size mapping filtered adUnit "' + r.code + '" banner sizes from ', o.before, "to ", o.after),
                r.mediaTypes = a,
                r.bids = r.bids.reduce((function(e, n) {
                    var i = ue(ce(n, t), r.mediaTypes)
                      , a = i.active
                      , o = i.mediaTypes
                      , d = i.filterResults;
                    return a ? (d && (Object(w.logInfo)('Size mapping filtered adUnit "' + r.code + '" bidder "' + n.bidder + '" banner sizes from ', d.before, "to ", d.after),
                    n.mediaTypes = o),
                    e.push(n)) : Object(w.logInfo)('Size mapping deactivated adUnit "' + r.code + '" bidder "' + n.bidder + '"'),
                    e
                }
                ), []),
                e.push(r)) : Object(w.logInfo)('Size mapping disabled adUnit "' + r.code + '"'),
                e
            }
            ), [])
        }(e, t)
    }
    ), "setupAdUnitMediaTypes");
    function Ye(e) {
        Object(w.isArray)(e) || (e = [e]);
        var t = new Set([null]);
        return e.filter((function(e) {
            return e && e.enabled
        }
        )).flatMap((function(e) {
            return e.bidders
        }
        )).forEach((function(e) {
            return t.add(e)
        }
        )),
        t
    }
    var Xe = L("sync", (function(e, t, r) {
        var n, i = (void 0 === r ? {} : r).getS2SBidders, a = (void 0 === i ? Ye : i)(t);
        return Object(w.getBidderCodes)(e).reduce((function(e, t) {
            return e[a.has(t) ? Ne : Be].push(t),
            e
        }
        ), ((n = {})[Be] = [],
        n[Ne] = [],
        n))
    }
    ), "partitionBidders");
    function Je(e, t, r) {
        try {
            var n = Me[e].getSpec();
            n && n[t] && "function" == typeof n[t] && (Object(w.logInfo)("Invoking " + e + "." + t),
            _.b.runWithBidder(e, w.bind.call(n[t], n, r)))
        } catch (r) {
            Object(w.logWarn)("Error calling " + t + " of " + e)
        }
    }
    qe.makeBidRequests = L("sync", (function(e, t, r, n, i) {
        S.emit(Q.EVENTS.BEFORE_REQUEST_BIDS, e),
        function(e) {
            e.forEach((function(e) {
                var t = e.nativeParams || Object(x.a)(e, "mediaTypes.native");
                t && (e.nativeParams = function(e) {
                    if (e && e.type && function(e) {
                        if (!e || !Object(C.c)(Object.keys(It), e))
                            return Object(w.logError)(e + " nativeParam is not supported"),
                            !1;
                        return !0
                    }(e.type))
                        return It[e.type];
                    return e
                }(t))
            }
            ))
        }(e),
        e = Ke(e, i);
        var a = Xe(e, Fe)
          , o = a[Be]
          , d = a[Ne];
        _.b.getConfig("bidderSequence") === _.a && (o = Object(w.shuffle)(o));
        var s = _e()
          , c = [];
        Fe.forEach((function(n) {
            if (n && n.enabled) {
                var i = function(e, t) {
                    var r = Object(w.deepClone)(e);
                    return r.forEach((function(e) {
                        e.bids = Ge(e.bids, t).map((function(e) {
                            return e.bid_id = Object(w.getUniqueIdentifierStr)(),
                            e
                        }
                        ))
                    }
                    )),
                    r = r.filter((function(e) {
                        return 0 !== e.bids.length
                    }
                    ))
                }(e, n)
                  , a = Object(w.generateUUID)();
                d.forEach((function(e) {
                    var o = Object(w.getUniqueIdentifierStr)()
                      , d = {
                        bidderCode: e,
                        auctionId: r,
                        bidderRequestId: o,
                        uniquePbsTid: a,
                        bids: Ve({
                            bidderCode: e,
                            auctionId: r,
                            bidderRequestId: o,
                            adUnits: Object(w.deepClone)(i),
                            src: Q.S2S.SRC
                        }),
                        auctionStart: t,
                        timeout: n.timeout,
                        src: Q.S2S.SRC,
                        refererInfo: s
                    };
                    0 !== d.bids.length && c.push(d)
                }
                )),
                i.forEach((function(e) {
                    var t = e.bids.filter((function(e) {
                        return Object(C.b)(c, (function(t) {
                            return Object(C.b)(t.bids, (function(t) {
                                return t.bidId === e.bid_id
                            }
                            ))
                        }
                        ))
                    }
                    ));
                    e.bids = t
                }
                )),
                c.forEach((function(e) {
                    void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = i.filter((function(e) {
                        return e.bids.length > 0
                    }
                    )))
                }
                ))
            }
        }
        ));
        var u = function(e) {
            var t = Object(w.deepClone)(e);
            return t.forEach((function(e) {
                e.bids = Ge(e.bids, null)
            }
            )),
            t = t.filter((function(e) {
                return 0 !== e.bids.length
            }
            ))
        }(e);
        return o.forEach((function(e) {
            var a = Object(w.getUniqueIdentifierStr)()
              , o = {
                bidderCode: e,
                auctionId: r,
                bidderRequestId: a,
                bids: Ve({
                    bidderCode: e,
                    auctionId: r,
                    bidderRequestId: a,
                    adUnits: Object(w.deepClone)(u),
                    labels: i,
                    src: "client"
                }),
                auctionStart: t,
                timeout: n,
                refererInfo: s
            }
              , d = Me[e];
            d || Object(w.logError)("Trying to make a request for bidder that does not exist: " + e),
            d && o.bids && 0 !== o.bids.length && c.push(o)
        }
        )),
        Le.getConsentData() && c.forEach((function(e) {
            e.gdprConsent = Le.getConsentData()
        }
        )),
        He.getConsentData() && c.forEach((function(e) {
            e.uspConsent = He.getConsentData()
        }
        )),
        c
    }
    ), "makeBidRequests"),
    qe.callBids = function(e, t, r, n, i, a, o) {
        if (t.length) {
            var d = t.reduce((function(e, t) {
                return e[Number(void 0 !== t.src && t.src === Q.S2S.SRC)].push(t),
                e
            }
            ), [[], []])
              , s = d[0]
              , c = d[1]
              , u = [];
            c.forEach((function(e) {
                for (var t = -1, r = 0; r < u.length; ++r)
                    if (e.uniquePbsTid === u[r].uniquePbsTid) {
                        t = r;
                        break
                    }
                t <= -1 && u.push(e)
            }
            ));
            var p = 0
              , l = Object(w.generateUUID)();
            Fe.forEach((function(e) {
                if (e && u[p] && Ye(e).has(u[p].bidderCode)) {
                    var t = k(a, i ? {
                        request: i.request.bind(null, "s2s"),
                        done: i.done
                    } : void 0)
                      , o = e.bidders
                      , d = Me[e.adapter]
                      , s = u[p].uniquePbsTid
                      , f = u[p].adUnitsS2SCopy
                      , b = c.filter((function(e) {
                        return e.uniquePbsTid === s
                    }
                    ));
                    if (d) {
                        var m = {
                            tid: l,
                            ad_units: f,
                            s2sConfig: e
                        };
                        if (m.ad_units.length) {
                            var g = b.map((function(e) {
                                return e.start = Object(w.timestamp)(),
                                n.bind(e)
                            }
                            ))
                              , v = Object(w.getBidderCodes)(m.ad_units).filter((function(e) {
                                return o.includes(e)
                            }
                            ));
                            Object(w.logMessage)("CALLING S2S HEADER BIDDERS ==== " + (v.length > 0 ? v.join(", ") : 'No bidder specified, using "ortb2Imp" definition(s) only')),
                            b.forEach((function(e) {
                                S.emit(Q.EVENTS.BID_REQUESTED, Object(I.default)({}, e, {
                                    tid: l
                                }))
                            }
                            )),
                            d.callBids(m, c, r, (function() {
                                return g.forEach((function(e) {
                                    return e()
                                }
                                ))
                            }
                            ), t)
                        }
                    } else
                        Object(w.logError)("missing " + e.adapter);
                    p++
                }
            }
            )),
            s.forEach((function(e) {
                e.start = Object(w.timestamp)();
                var t = Me[e.bidderCode];
                _.b.runWithBidder(e.bidderCode, (function() {
                    Object(w.logMessage)("CALLING BIDDER"),
                    S.emit(Q.EVENTS.BID_REQUESTED, e)
                }
                ));
                var d = k(a, i ? {
                    request: i.request.bind(null, e.bidderCode),
                    done: i.done
                } : void 0)
                  , s = n.bind(e);
                try {
                    _.b.runWithBidder(e.bidderCode, w.bind.call(t.callBids, t, e, r, s, d, o, _.b.callbackWithBidder(e.bidderCode)))
                } catch (t) {
                    Object(w.logError)(e.bidderCode + " Bid Adapter emitted an uncaught error when parsing their bidRequest", {
                        e: t,
                        bidRequest: e
                    }),
                    s()
                }
            }
            ))
        } else
            Object(w.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
    }
    ,
    qe.videoAdapters = [],
    qe.registerBidAdapter = function(e, t, r) {
        var n = (void 0 === r ? {} : r).supportedMediaTypes
          , i = void 0 === n ? [] : n;
        e && t ? "function" == typeof e.callBids ? (Me[t] = e,
        Object(C.c)(i, "video") && qe.videoAdapters.push(t),
        Object(C.c)(i, "native") && Ot.push(t)) : Object(w.logError)("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : Object(w.logError)("bidAdapter or bidderCode not specified")
    }
    ,
    qe.aliasBidAdapter = function(e, t, r) {
        if (void 0 === Me[t]) {
            var n = Me[e];
            if (void 0 === n) {
                var i = [];
                Fe.forEach((function(r) {
                    if (r.bidders && r.bidders.length) {
                        var n = r && r.bidders;
                        r && Object(C.c)(n, t) ? ze[t] = e : i.push(e)
                    }
                }
                )),
                i.forEach((function(e) {
                    Object(w.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                }
                ))
            } else
                try {
                    var a, o = function(e) {
                        var t = [];
                        return Object(C.c)(qe.videoAdapters, e) && t.push("video"),
                        Object(C.c)(Ot, e) && t.push("native"),
                        t
                    }(e);
                    if (n.constructor.prototype != Object.prototype)
                        (a = new n.constructor).setBidderCode(t);
                    else {
                        var d = n.getSpec()
                          , s = r && r.gvlid
                          , c = r && r.skipPbsAliasing;
                        a = Ie(Object(I.default)({}, d, {
                            code: t,
                            gvlid: s,
                            skipPbsAliasing: c
                        })),
                        ze[t] = e
                    }
                    qe.registerBidAdapter(a, t, {
                        supportedMediaTypes: o
                    })
                } catch (t) {
                    Object(w.logError)(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
        } else
            Object(w.logMessage)('alias name "' + t + '" has been already specified.')
    }
    ,
    qe.registerAnalyticsAdapter = function(e) {
        var t = e.adapter
          , r = e.code
          , n = e.gvlid;
        t && r ? "function" == typeof t.enableAnalytics ? (t.code = r,
        We[r] = {
            adapter: t,
            gvlid: n
        }) : Object(w.logError)('Prebid Error: Analytics adaptor error for analytics "' + r + '"\n        analytics adapter must implement an enableAnalytics() function') : Object(w.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified")
    }
    ,
    qe.enableAnalytics = function(e) {
        Object(w.isArray)(e) || (e = [e]),
        Object(w._each)(e, (function(e) {
            var t = We[e.provider];
            t && t.adapter ? t.adapter.enableAnalytics(e) : Object(w.logError)("Prebid Error: no analytics adapter found in registry for '" + e.provider + "'.")
        }
        ))
    }
    ,
    qe.getBidAdapter = function(e) {
        return Me[e]
    }
    ,
    qe.getAnalyticsAdapter = function(e) {
        return We[e]
    }
    ,
    qe.callTimedOutBidders = function(e, t, r) {
        t = t.map((function(t) {
            return t.params = Object(w.getUserConfiguredParams)(e, t.adUnitCode, t.bidder),
            t.timeout = r,
            t
        }
        )),
        t = Object(w.groupBy)(t, "bidder"),
        Object.keys(t).forEach((function(e) {
            Je(e, "onTimeout", t[e])
        }
        ))
    }
    ,
    qe.callBidWonBidder = function(e, t, r) {
        t.params = Object(w.getUserConfiguredParams)(r, t.adUnitCode, t.bidder),
        Te.incrementBidderWinsCounter(t.adUnitCode, t.bidder),
        Je(e, "onBidWon", t)
    }
    ,
    qe.callSetTargetingBidder = function(e, t) {
        Je(e, "onSetTargeting", t)
    }
    ,
    qe.callBidViewableBidder = function(e, t) {
        Je(e, "onBidViewable", t)
    }
    ,
    qe.callBidderError = function(e, t, r) {
        Je(e, "onBidderError", {
            error: t,
            bidderRequest: r
        })
    }
    ;
    var Qe = qe;
    var $e = L("sync", (function(e, t, r, n) {
        return r && "outstream" !== n ? _.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(w.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with jwpb.setConfig({ cache: {url: "..."} });\n      '),
        !1) : "outstream" !== n || !!(e.renderer || t && t.renderer || r.renderer)
    }
    ), "checkVideoBidSetup")
      , Ze = de.syncUsers;
    S.on(Q.EVENTS.BID_ADJUSTMENT, (function(e) {
        !function(e) {
            var t = e.bidderCode
              , r = e.cpm
              , n = $.get(t || null, "bidCpmAdjustment");
            if (n && "function" == typeof n)
                try {
                    r = n(e.cpm, Object(I.default)({}, e))
                } catch (e) {
                    Object(w.logError)("Error during bid adjustment", "bidmanager.js", e)
                }
            r >= 0 && (e.cpm = r)
        }(e)
    }
    ));
    var et = {}
      , tt = {}
      , rt = [];
    function nt(e) {
        var t, r, n, i, a = e.adUnits, o = e.adUnitCodes, d = e.callback, s = e.cbTimeout, c = e.labels, u = e.auctionId, p = a, l = c, f = o, b = [], m = [], g = [], v = u || Object(w.generateUUID)(), y = d, h = s, O = [], j = new Set;
        function E() {
            return {
                auctionId: v,
                timestamp: t,
                auctionEnd: r,
                auctionStatus: n,
                adUnits: p,
                adUnitCodes: f,
                labels: l,
                bidderRequests: b,
                noBids: g,
                bidsReceived: m,
                winningBids: O,
                timeout: h
            }
        }
        function A(e, t) {
            if (t && clearTimeout(i),
            void 0 === r) {
                var o = [];
                e && (Object(w.logMessage)("Auction " + v + " timedOut"),
                d = j,
                (o = b.map((function(e) {
                    return (e.bids || []).filter((function(e) {
                        return !d.has(e.bidder)
                    }
                    ))
                }
                )).reduce(w.flatten, [])).length && S.emit(Q.EVENTS.BID_TIMEOUT, o)),
                n = "completed",
                r = Date.now(),
                S.emit(Q.EVENTS.AUCTION_END, E()),
                ot(p, (function() {
                    try {
                        if (null != y) {
                            var t = f
                              , r = m.filter(w.bind.call(w.adUnitsFilter, this, t)).reduce(mt, {});
                            y.apply(jwpb, [r, e, v]),
                            y = null
                        }
                    } catch (e) {
                        Object(w.logError)("Error executing bidsBackHandler", null, e)
                    } finally {
                        o.length && Qe.callTimedOutBidders(a, o, h);
                        var n = _.b.getConfig("userSync") || {};
                        n.enableOverride || Ze(n.syncDelay)
                    }
                }
                ))
            }
            var d
        }
        function k() {
            _.b.resetBidder(),
            Object(w.logInfo)("Bids Received for Auction with id: " + v, m),
            n = "completed",
            A(!1, !0)
        }
        function P(e) {
            j.add(e)
        }
        function R(e) {
            var t = this;
            e.forEach((function(e) {
                var t;
                t = e,
                b = b.concat(t)
            }
            ));
            var r = {}
              , a = {
                bidRequests: e,
                run: function() {
                    var a, s;
                    a = A.bind(null, !0),
                    s = setTimeout(a, h),
                    i = s,
                    n = "inProgress",
                    S.emit(Q.EVENTS.AUCTION_INIT, E());
                    var c = function(e, t, r) {
                        var n = (void 0 === r ? {} : r).index
                          , i = void 0 === n ? ht.index : n
                          , a = 0
                          , o = !1
                          , d = new Set
                          , s = {}
                          , c = {};
                        function u() {
                            a--,
                            o && 0 === a && e()
                        }
                        function p(e, r) {
                            s[r.requestId] = !0,
                            a++;
                            var n = function(e, t) {
                                var r = e.adUnitCode
                                  , n = e.bid
                                  , i = e.auctionId
                                  , a = (void 0 === t ? {} : t).index
                                  , o = void 0 === a ? ht.index : a
                                  , d = o.getBidderRequest(n)
                                  , s = d && d.start || n.requestTimestamp
                                  , c = Object(I.default)({}, n, {
                                    auctionId: i,
                                    responseTimestamp: Object(w.timestamp)(),
                                    requestTimestamp: s,
                                    cpm: parseFloat(n.cpm) || 0,
                                    bidder: n.bidderCode,
                                    adUnitCode: r
                                });
                                c.timeToRespond = c.responseTimestamp - c.requestTimestamp,
                                S.emit(Q.EVENTS.BID_ADJUSTMENT, c);
                                var u = o.getAdUnit(c).renderer
                                  , p = c.mediaType
                                  , l = o.getMediaTypes(c)
                                  , f = l && l[p]
                                  , b = f && f.renderer
                                  , m = null;
                                b && b.url && b.render && (!0 !== b.backupOnly || !n.renderer) ? m = b : u && u.url && u.render && (!0 !== u.backupOnly || !n.renderer) && (m = u);
                                m && (c.renderer = N.install({
                                    url: m.url,
                                    config: m.options
                                }),
                                c.renderer.setRender(m.render));
                                var g = ut(n.mediaType, l, _.b.getConfig("mediaTypePriceGranularity"))
                                  , v = Object(T.a)(c.cpm, "object" == typeof g ? g : _.b.getConfig("customPriceBucket"), _.b.getConfig("currency.granularityMultiplier"));
                                return c.pbLg = v.low,
                                c.pbMg = v.med,
                                c.pbHg = v.high,
                                c.pbAg = v.auto,
                                c.pbDg = v.dense,
                                c.pbCg = v.custom,
                                c
                            }({
                                adUnitCode: e,
                                bid: r,
                                auctionId: t.getAuctionId()
                            });
                            "video" === n.mediaType ? function(e, t, r, n) {
                                var i = (void 0 === n ? {} : n).index
                                  , a = void 0 === i ? ht.index : i
                                  , o = !0
                                  , d = Object(x.a)(a.getMediaTypes({
                                    requestId: t.originalRequestId || t.requestId,
                                    transactionId: t.transactionId
                                }), "video")
                                  , s = d && Object(x.a)(d, "context");
                                _.b.getConfig("cache.url") && "outstream" !== s && (!t.videoCacheKey || _.b.getConfig("cache.ignoreBidderCacheKey") ? (o = !1,
                                ct(e, t, r, d)) : t.vastUrl || (Object(w.logError)("videoCacheKey specified but not required vastUrl for video bid"),
                                o = !1));
                                o && (st(e, t),
                                r())
                            }(t, n, u) : (st(t, n),
                            u())
                        }
                        function l() {
                            var r = t.getBidRequests()
                              , n = _.b.getConfig("auctionOptions");
                            if (d.add(this),
                            n && !Object(w.isEmpty)(n)) {
                                var i = n.secondaryBidders;
                                i && !r.every((function(e) {
                                    return Object(C.c)(i, e.bidderCode)
                                }
                                )) && (r = r.filter((function(e) {
                                    return !Object(C.c)(i, e.bidderCode)
                                }
                                )))
                            }
                            o = r.every((function(e) {
                                return d.has(e)
                            }
                            )),
                            this.bids.forEach((function(e) {
                                s[e.bidId] || (t.addNoBid(e),
                                S.emit(Q.EVENTS.NO_BID, e))
                            }
                            )),
                            o && 0 === a && e()
                        }
                        return {
                            addBidResponse: function(e, t) {
                                var r, n, a = i.getBidderRequest(t);
                                r = a && a.bidderRequestId || "",
                                n = it.call({
                                    dispatch: p
                                }, e, t),
                                null == c[r] && (c[r] = Promise.resolve()),
                                c[r] = c[r].then((function() {
                                    return Promise.resolve(n).catch((function() {}
                                    ))
                                }
                                ))
                            },
                            adapterDone: function() {
                                !function(e, r) {
                                    var n = e.timeout;
                                    (null == n || n > t.getTimeout()) && (n = t.getTimeout());
                                    var i = t.getAuctionStart() + n - Date.now()
                                      , a = c[e.bidderRequestId]
                                      , o = c[""];
                                    (null != a || null != o) && i > 0 ? Promise.race([new Promise((function(e) {
                                        return setTimeout(e, i)
                                    }
                                    )), Promise.resolve(o).then((function() {
                                        return a
                                    }
                                    ))]).then(r) : r()
                                }(this, l.bind(this))
                            }
                        }
                    }(k, t);
                    Qe.callBids(p, e, c.addBidResponse, c.adapterDone, {
                        request: function(e, t) {
                            d(et, t),
                            d(r, e),
                            tt[e] || (tt[e] = {
                                SRA: !0,
                                origin: t
                            }),
                            r[e] > 1 && (tt[e].SRA = !1)
                        },
                        done: function(e) {
                            et[e]--,
                            rt[0] && o(rt[0]) && rt.shift()
                        }
                    }, h, P)
                }
            };
            function o(e) {
                var t = !0
                  , r = _.b.getConfig("maxRequestsPerOrigin") || 4;
                return e.bidRequests.some((function(e) {
                    var n = 1
                      , i = void 0 !== e.src && e.src === Q.S2S.SRC ? "s2s" : e.bidderCode;
                    return tt[i] && (!1 === tt[i].SRA && (n = Math.min(e.bids.length, r)),
                    et[tt[i].origin] + n > r && (t = !1)),
                    !t
                }
                )),
                t && e.run(),
                t
            }
            function d(e, t) {
                void 0 === e[t] ? e[t] = 1 : e[t]++
            }
            o(a) || (Object(w.logWarn)("queueing auction due to limited endpoint capacity"),
            rt.push(a))
        }
        return {
            addBidReceived: function(e) {
                m = m.concat(e)
            },
            addNoBid: function(e) {
                g = g.concat(e)
            },
            executeCallback: A,
            callBids: function() {
                n = "started",
                t = Date.now();
                var e = Qe.makeBidRequests(p, t, v, h, l);
                Object(w.logInfo)("Bids Requested for Auction with id: " + v, e),
                e.length < 1 ? (Object(w.logWarn)("No valid bid requests returned for auction"),
                k()) : at.call({
                    dispatch: R,
                    context: this
                }, e)
            },
            addWinningBid: function(e) {
                O = O.concat(e),
                Qe.callBidWonBidder(e.bidder, e, a)
            },
            setBidTargeting: function(e) {
                Qe.callSetTargetingBidder(e.bidder, e)
            },
            getWinningBids: function() {
                return O
            },
            getAuctionStart: function() {
                return t
            },
            getTimeout: function() {
                return h
            },
            getAuctionId: function() {
                return v
            },
            getAuctionStatus: function() {
                return n
            },
            getAdUnits: function() {
                return p
            },
            getAdUnitCodes: function() {
                return f
            },
            getBidRequests: function() {
                return b
            },
            getBidsReceived: function() {
                return m
            },
            getNoBids: function() {
                return g
            }
        }
    }
    var it = L("sync", (function(e, t) {
        this.dispatch.call(null, e, t)
    }
    ), "addBidResponse")
      , at = L("sync", (function(e) {
        this.dispatch.call(this.context, e)
    }
    ), "addBidderRequests")
      , ot = L("async", (function(e, t) {
        t && t()
    }
    ), "bidsBackCallback");
    function dt(e, t) {
        t.timeToRespond > e.getTimeout() + _.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
    }
    function st(e, t) {
        !function(e) {
            var t, r = !0 === $.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0;
            e.bidderCode && (r || e.dealId) && (t = function(e, t, r) {
                var n = (void 0 === r ? {} : r).index
                  , i = void 0 === n ? ht.index : n;
                if (!t)
                    return {};
                var a = i.getBidRequest(t)
                  , o = {}
                  , d = ft(t.mediaType, e);
                bt(o, d, t, a),
                e && $.getOwn(e, Q.JSON_MAPPING.ADSERVER_TARGETING) && (bt(o, $.ownSettingsFor(e), t, a),
                t.sendStandardTargeting = $.get(e, "sendStandardTargeting"));
                t.native && (o = Object(I.default)({}, o, function(e, t) {
                    var r = (void 0 === t ? {} : t).index
                      , n = void 0 === r ? ht.index : r
                      , i = {}
                      , a = n.getAdUnit(e);
                    Object(x.a)(a, "nativeParams.rendererUrl") ? e.native.rendererUrl = Et(a.nativeParams.rendererUrl) : Object(x.a)(a, "nativeParams.adTemplate") && (e.native.adTemplate = Et(a.nativeParams.adTemplate));
                    var o = !1 !== Object(x.a)(a, "nativeParams.sendTargetingKeys")
                      , d = function(e) {
                        var t = {};
                        Object(x.a)(e, "nativeParams.ext") && Object.keys(e.nativeParams.ext).forEach((function(e) {
                            t[e] = "hb_native_" + e
                        }
                        ));
                        return Object(I.default)({}, Q.NATIVE_KEYS, t)
                    }(a)
                      , s = Object(I.default)({}, e.native, e.native.ext);
                    return delete s.ext,
                    Object.keys(s).forEach((function(t) {
                        var r = d[t]
                          , n = Et(e.native[t]) || Et(Object(x.a)(e, "native.ext." + t));
                        if ("adTemplate" !== t && r && n) {
                            var s = Object(x.a)(a, "nativeParams." + t + ".sendId");
                            if ("boolean" != typeof s && (s = Object(x.a)(a, "nativeParams.ext." + t + ".sendId")),
                            s)
                                n = r + ":" + e.adId;
                            var c = Object(x.a)(a, "nativeParams." + t + ".sendTargetingKeys");
                            "boolean" != typeof c && (c = Object(x.a)(a, "nativeParams.ext." + t + ".sendTargetingKeys")),
                            ("boolean" == typeof c ? c : o) && (i[r] = n)
                        }
                    }
                    )),
                    i
                }(t)));
                return o
            }(e.bidderCode, e));
            e.adserverTargeting = Object(I.default)(e.adserverTargeting || {}, t)
        }(t),
        S.emit(Q.EVENTS.BID_RESPONSE, t),
        e.addBidReceived(t),
        dt(e, t)
    }
    var ct = L("async", (function(e, t, r, n) {
        R([t], (function(n, i) {
            var a;
            n ? (Object(w.logWarn)("Failed to save to the video cache: " + n + ". Video bid must be discarded."),
            dt(e, t)) : "" === i[0].uuid ? (Object(w.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."),
            dt(e, t)) : (t.videoCacheKey = i[0].uuid,
            t.vastUrl || (t.vastUrl = (a = t.videoCacheKey,
            _.b.getConfig("cache.url") + "?uuid=" + a)),
            st(e, t),
            r())
        }
        ))
    }
    ), "callPrebidCache");
    function ut(e, t, r) {
        if (e && r) {
            if (e === ge) {
                var n = Object(x.a)(t, ge + ".context", "instream");
                if (r[ge + "-" + n])
                    return r[ge + "-" + n]
            }
            return r[e]
        }
    }
    var pt = function(e) {
        return function(t) {
            var r = e || function(e, t) {
                var r = (void 0 === t ? {} : t).index
                  , n = void 0 === r ? ht.index : r
                  , i = ut(e.mediaType, n.getMediaTypes(e), _.b.getConfig("mediaTypePriceGranularity"));
                return "string" == typeof e.mediaType && i ? "string" == typeof i ? i : "custom" : _.b.getConfig("priceGranularity")
            }(t);
            return r === Q.GRANULARITY_OPTIONS.AUTO ? t.pbAg : r === Q.GRANULARITY_OPTIONS.DENSE ? t.pbDg : r === Q.GRANULARITY_OPTIONS.LOW ? t.pbLg : r === Q.GRANULARITY_OPTIONS.MEDIUM ? t.pbMg : r === Q.GRANULARITY_OPTIONS.HIGH ? t.pbHg : r === Q.GRANULARITY_OPTIONS.CUSTOM ? t.pbCg : void 0
        }
    };
    function lt(e, t) {
        return {
            key: e,
            val: "function" == typeof t ? function(e, r) {
                return t(e, r)
            }
            : function(e) {
                return Object(w.getValue)(e, t)
            }
        }
    }
    function ft(e, t) {
        var r = Q.TARGETING_KEYS
          , n = Object(I.default)({}, $.settingsFor(null));
        if (n[Q.JSON_MAPPING.ADSERVER_TARGETING] || (n[Q.JSON_MAPPING.ADSERVER_TARGETING] = function() {
            var e = Q.TARGETING_KEYS;
            return [lt(e.BIDDER, "bidderCode"), lt(e.AD_ID, "adId"), lt(e.PRICE_BUCKET, pt()), lt(e.SIZE, "size"), lt(e.DEAL, "dealId"), lt(e.SOURCE, "source"), lt(e.FORMAT, "mediaType"), lt(e.ADOMAIN, (function(e) {
                return e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0 ? e.meta.advertiserDomains[0] : ""
            }
            ))]
        }()),
        "video" === e) {
            var i = n[Q.JSON_MAPPING.ADSERVER_TARGETING].slice();
            if (n[Q.JSON_MAPPING.ADSERVER_TARGETING] = i,
            [r.UUID, r.CACHE_ID].forEach((function(e) {
                void 0 === Object(C.b)(i, (function(t) {
                    return t.key === e
                }
                )) && i.push(lt(e, "videoCacheKey"))
            }
            )),
            _.b.getConfig("cache.url") && (!t || !1 !== $.get(t, "sendStandardTargeting"))) {
                var a = Object(w.parseUrl)(_.b.getConfig("cache.url"));
                void 0 === Object(C.b)(i, (function(e) {
                    return e.key === r.CACHE_HOST
                }
                )) && i.push(lt(r.CACHE_HOST, (function(e) {
                    return Object(x.a)(e, "adserverTargeting." + r.CACHE_HOST) ? e.adserverTargeting[r.CACHE_HOST] : a.hostname
                }
                )))
            }
        }
        return n
    }
    function bt(e, t, r, n) {
        var i = t[Q.JSON_MAPPING.ADSERVER_TARGETING];
        return r.size = r.getSize(),
        Object(w._each)(i, (function(i) {
            var a = i.key
              , o = i.val;
            if (e[a] && Object(w.logWarn)("The key: " + a + " is being overwritten"),
            Object(w.isFn)(o))
                try {
                    o = o(r, n)
                } catch (e) {
                    Object(w.logError)("bidmanager", "ERROR", e)
                }
            (void 0 === t.suppressEmptyKeys || !0 !== t.suppressEmptyKeys) && a !== Q.TARGETING_KEYS.DEAL || !Object(w.isEmptyStr)(o) && null != o ? e[a] = o : Object(w.logInfo)("suppressing empty key '" + a + "' from adserver targeting")
        }
        )),
        e
    }
    function mt(e, t) {
        return e[t.adUnitCode] || (e[t.adUnitCode] = {
            bids: []
        }),
        e[t.adUnitCode].bids.push(t),
        e
    }
    function gt(e) {
        Object(I.default)(this, {
            getAuction: function(t) {
                var r = t.auctionId;
                if (null != r)
                    return e().find((function(e) {
                        return e.getAuctionId() === r
                    }
                    ))
            },
            getAdUnit: function(t) {
                var r = t.transactionId;
                if (null != r)
                    return e().flatMap((function(e) {
                        return e.getAdUnits()
                    }
                    )).find((function(e) {
                        return e.transactionId === r
                    }
                    ))
            },
            getMediaTypes: function(e) {
                var t = e.transactionId
                  , r = e.requestId;
                if (null != r) {
                    var n = this.getBidRequest({
                        requestId: r
                    });
                    if (null != n && (null == t || n.transactionId === t))
                        return n.mediaTypes
                } else if (null != t) {
                    var i = this.getAdUnit({
                        transactionId: t
                    });
                    if (null != i)
                        return i.mediaTypes
                }
            },
            getBidderRequest: function(t) {
                var r = t.requestId
                  , n = t.bidderRequestId;
                if (null != r || null != n) {
                    var i = e().flatMap((function(e) {
                        return e.getBidRequests()
                    }
                    ));
                    return null != n && (i = i.filter((function(e) {
                        return e.bidderRequestId === n
                    }
                    ))),
                    null == r ? i[0] : i.find((function(e) {
                        return e.bids && null != e.bids.find((function(e) {
                            return e.bidId === r
                        }
                        ))
                    }
                    ))
                }
            },
            getBidRequest: function(t) {
                var r = t.requestId;
                if (null != r)
                    return e().flatMap((function(e) {
                        return e.getBidRequests()
                    }
                    )).flatMap((function(e) {
                        return e.bids
                    }
                    )).find((function(e) {
                        return e && e.bidId === r
                    }
                    ))
            }
        })
    }
    var vt, yt, ht = (vt = [],
    (yt = {}).addWinningBid = function(e) {
        var t = Object(C.b)(vt, (function(t) {
            return t.getAuctionId() === e.auctionId
        }
        ));
        t ? (e.status = Q.BID_STATUS.RENDERED,
        t.addWinningBid(e)) : Object(w.logWarn)("Auction not found when adding winning bid")
    }
    ,
    yt.getAllWinningBids = function() {
        return vt.map((function(e) {
            return e.getWinningBids()
        }
        )).reduce(w.flatten, [])
    }
    ,
    yt.getBidsRequested = function() {
        return vt.map((function(e) {
            return e.getBidRequests()
        }
        )).reduce(w.flatten, [])
    }
    ,
    yt.getNoBids = function() {
        return vt.map((function(e) {
            return e.getNoBids()
        }
        )).reduce(w.flatten, [])
    }
    ,
    yt.getBidsReceived = function() {
        return vt.map((function(e) {
            if ("completed" === e.getAuctionStatus())
                return e.getBidsReceived()
        }
        )).reduce(w.flatten, []).filter((function(e) {
            return e
        }
        ))
    }
    ,
    yt.getAllBidsForAdUnitCode = function(e) {
        return vt.map((function(e) {
            return e.getBidsReceived()
        }
        )).reduce(w.flatten, []).filter((function(t) {
            return t && t.adUnitCode === e
        }
        ))
    }
    ,
    yt.getAdUnits = function() {
        return vt.map((function(e) {
            return e.getAdUnits()
        }
        )).reduce(w.flatten, [])
    }
    ,
    yt.getAdUnitCodes = function() {
        return vt.map((function(e) {
            return e.getAdUnitCodes()
        }
        )).reduce(w.flatten, []).filter(w.uniques)
    }
    ,
    yt.createAuction = function(e) {
        var t = nt({
            adUnits: e.adUnits,
            adUnitCodes: e.adUnitCodes,
            callback: e.callback,
            cbTimeout: e.cbTimeout,
            labels: e.labels,
            auctionId: e.auctionId
        });
        return function(e) {
            vt.push(e)
        }(t),
        t
    }
    ,
    yt.findBidByAdId = function(e) {
        return Object(C.b)(vt.map((function(e) {
            return e.getBidsReceived()
        }
        )).reduce(w.flatten, []), (function(t) {
            return t.adId === e
        }
        ))
    }
    ,
    yt.getStandardBidderAdServerTargeting = function() {
        return ft()[Q.JSON_MAPPING.ADSERVER_TARGETING]
    }
    ,
    yt.setStatusForBids = function(e, t) {
        var r = yt.findBidByAdId(e);
        if (r && (r.status = t),
        r && t === Q.BID_STATUS.BID_TARGETING_SET) {
            var n = Object(C.b)(vt, (function(e) {
                return e.getAuctionId() === r.auctionId
            }
            ));
            n && n.setBidTargeting(r)
        }
    }
    ,
    yt.getLastAuctionId = function() {
        return vt.length && vt[vt.length - 1].getAuctionId()
    }
    ,
    yt.clearAllAuctions = function() {
        vt.length = 0
    }
    ,
    yt.index = new gt((function() {
        return vt
    }
    )),
    yt), Ot = [], jt = Object.keys(Q.NATIVE_KEYS).map((function(e) {
        return Q.NATIVE_KEYS[e]
    }
    )), It = {
        image: {
            image: {
                required: !0
            },
            title: {
                required: !0
            },
            sponsoredBy: {
                required: !0
            },
            clickUrl: {
                required: !0
            },
            body: {
                required: !1
            },
            icon: {
                required: !1
            }
        }
    };
    function Et(e) {
        return "object" == typeof e && e.url ? e.url : e
    }
    var wt = Q.EVENTS
      , xt = wt.AD_RENDER_FAILED
      , St = wt.AD_RENDER_SUCCEEDED;
    function Ct(e) {
        var t = e.reason
          , r = e.message
          , n = e.bid
          , i = e.id
          , a = {
            reason: t,
            message: r
        };
        n && (a.bid = n),
        i && (a.adId = i),
        Object(w.logError)(r),
        S.emit(xt, a)
    }
    function Tt(e) {
        var t = e.doc
          , r = e.bid
          , n = e.id
          , i = {
            doc: t
        };
        r && (i.bid = r),
        n && (i.adId = n),
        S.emit(St, i)
    }
    var _t = Q.EVENTS.BID_WON
      , At = Q.EVENTS.STALE_RENDER
      , kt = {
        "Prebid Request": function(e, t, r) {
            if (null == r)
                return void Ct({
                    reason: Q.AD_RENDER_FAILED_REASON.CANNOT_FIND_AD,
                    message: "Cannot find ad '" + t.adId + "' for cross-origin render request",
                    id: t.adId
                });
            if (r.status === Q.BID_STATUS.RENDERED && (Object(w.logWarn)("Ad id " + r.adId + " has been rendered before"),
            S.emit(At, r),
            Object(x.a)(_.b.getConfig("auctionOptions"), "suppressStaleRender")))
                return;
            try {
                !function(e, t) {
                    var r = e.adId
                      , n = e.ad
                      , i = e.adUrl
                      , a = e.width
                      , o = e.height
                      , d = e.renderer
                      , s = e.cpm
                      , c = e.originalCpm;
                    q(d) ? M(d, e) : r && (Rt(e),
                    t({
                        message: "Prebid Response",
                        ad: Object(w.replaceAuctionPrice)(n, c || s),
                        adUrl: Object(w.replaceAuctionPrice)(i, c || s),
                        adId: r,
                        width: a,
                        height: o
                    }))
                }(r, e)
            } catch (e) {
                return void Ct({
                    reason: Q.AD_RENDER_FAILED_REASON.EXCEPTION,
                    message: e.message,
                    id: t.adId,
                    bid: r
                })
            }
            ht.addWinningBid(r),
            S.emit(_t, r)
        },
        "Prebid Native": function(e, t, r) {
            if (null == r)
                return void Object(w.logError)("Cannot find ad '" + t.adId + "' for x-origin event request");
            switch (t.action) {
            case "assetRequest":
                e(function(e, t) {
                    var r = {
                        message: "assetResponse",
                        adId: e.adId,
                        assets: []
                    };
                    return t.native.hasOwnProperty("adTemplate") && (r.adTemplate = Et(t.native.adTemplate)),
                    t.native.hasOwnProperty("rendererUrl") && (r.rendererUrl = Et(t.native.rendererUrl)),
                    e.assets.forEach((function(e) {
                        var n = Object(w.getKeyByValue)(Q.NATIVE_KEYS, e)
                          , i = Et(t.native[n]);
                        r.assets.push({
                            key: n,
                            value: i
                        })
                    }
                    )),
                    r
                }(t, r));
                break;
            case "allAssetRequest":
                e(function(e, t) {
                    var r = {
                        message: "assetResponse",
                        adId: e.adId,
                        assets: []
                    };
                    return Object.keys(t.native).forEach((function(e, n) {
                        if ("adTemplate" === e && t.native[e])
                            r.adTemplate = Et(t.native[e]);
                        else if ("rendererUrl" === e && t.native[e])
                            r.rendererUrl = Et(t.native[e]);
                        else if ("ext" === e)
                            Object.keys(t.native[e]).forEach((function(n) {
                                if (t.native[e][n]) {
                                    var i = Et(t.native[e][n]);
                                    r.assets.push({
                                        key: n,
                                        value: i
                                    })
                                }
                            }
                            ));
                        else if (t.native[e] && Q.NATIVE_KEYS.hasOwnProperty(e)) {
                            var i = Et(t.native[e]);
                            r.assets.push({
                                key: e,
                                value: i
                            })
                        }
                    }
                    )),
                    r
                }(t, r));
                break;
            case "resizeNativeHeight":
                r.height = t.height,
                r.width = t.width,
                Rt(r);
                break;
            default:
                if ("click" === function(e, t) {
                    var r;
                    return "click" === e.action ? r = t.native && t.native.clickTrackers : (r = t.native && t.native.impressionTrackers,
                    t.native && t.native.javascriptTrackers && Object(w.insertHtmlIntoIframe)(t.native.javascriptTrackers)),
                    (r || []).forEach(w.triggerPixel),
                    e.action
                }(t, r))
                    return;
                ht.addWinningBid(r),
                S.emit(_t, r)
            }
        },
        "Prebid Event": function(e, t, r) {
            if (null == r)
                return void Object(w.logError)("Cannot find ad '" + t.adId + "' for x-origin event request");
            if (r.status !== Q.BID_STATUS.RENDERED)
                return void Object(w.logWarn)("Received x-origin event request without corresponding render request for ad '" + t.adId + "'");
            switch (t.event) {
            case Q.EVENTS.AD_RENDER_FAILED:
                Ct({
                    bid: r,
                    id: t.adId,
                    reason: t.info.reason,
                    message: t.info.message
                });
                break;
            case Q.EVENTS.AD_RENDER_SUCCEEDED:
                Tt({
                    doc: null,
                    bid: r,
                    id: t.adId
                });
                break;
            default:
                Object(w.logError)("Received x-origin event request for unsupported event: '" + t.event + "' (adId: '" + t.adId + "')")
            }
        }
    };
    function Pt(e) {
        var t = e.message ? "message" : "data"
          , r = {};
        try {
            r = JSON.parse(e[t])
        } catch (e) {
            return
        }
        if (r && r.adId && r.message) {
            var n = Object(C.b)(ht.getBidsReceived(), (function(e) {
                return e.adId === r.adId
            }
            ));
            kt.hasOwnProperty(r.message) && kt[r.message](function(e) {
                return null == e.origin && 0 === e.ports.length ? function() {
                    var e = "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                    throw Object(w.logError)(e),
                    new Error(e)
                }
                : e.ports.length > 0 ? function(t) {
                    e.ports[0].postMessage(JSON.stringify(t))
                }
                : function(t) {
                    e.source.postMessage(JSON.stringify(t), e.origin)
                }
            }(e), r, n)
        }
    }
    function Rt(e) {
        var t = e.adId
          , r = e.adUnitCode
          , n = e.width
          , i = e.height;
        ["div", "iframe"].forEach((function(e) {
            var a = function(e) {
                var n = function(e, t) {
                    return Object(w.isGptPubadsDefined)() ? function(e) {
                        var t = Object(C.b)(window.googletag.pubads().getSlots(), (function(t) {
                            return Object(C.b)(t.getTargetingKeys(), (function(r) {
                                return Object(C.c)(t.getTargeting(r), e)
                            }
                            ))
                        }
                        ));
                        return t ? t.getSlotElementId() : null
                    }(e) : Object(w.isApnGetTagDefined)() ? function(e) {
                        var t = window.apntag.getTag(e);
                        return t && t.targetId
                    }(t) : t
                }(t, r)
                  , i = document.getElementById(n);
                return i && i.querySelector(e)
            }(e + ':not([style*="display: none"])');
            if (a) {
                var o = a.style;
                o.width = n + "px",
                o.height = i + "px"
            } else
                Object(w.logWarn)("Unable to locate matching page element for adUnitCode " + r + ".  Can't resize it to ad's dimensions.  Please review setup.")
        }
        ))
    }
    var Ut = []
      , Dt = Object.keys(Q.TARGETING_KEYS).map((function(e) {
        return Q.TARGETING_KEYS[e]
    }
    ))
      , Bt = function(e) {
        return e.responseTimestamp + 1e3 * e.ttl - 1e3 > Object(w.timestamp)()
    }
      , Nt = function(e) {
        return e && (e.status && !Object(C.c)([Q.BID_STATUS.RENDERED], e.status) || !e.status)
    }
      , qt = L("sync", (function(e, t, r, n) {
        if (void 0 === r && (r = 0),
        void 0 === n && (n = !1),
        !n) {
            var i = []
              , a = _.b.getConfig("sendBidsControl.dealPrioritization")
              , o = Object(w.groupBy)(e, "adUnitCode");
            return Object.keys(o).forEach((function(e) {
                var n = []
                  , d = Object(w.groupBy)(o[e], "bidderCode");
                Object.keys(d).forEach((function(e) {
                    return n.push(d[e].reduce(t))
                }
                )),
                r > 0 ? (n = a ? n.sort(Mt(!0)) : n.sort((function(e, t) {
                    return t.cpm - e.cpm
                }
                )),
                i.push.apply(i, n.slice(0, r))) : i.push.apply(i, n)
            }
            )),
            i
        }
        return e
    }
    ));
    function Mt(e) {
        return void 0 === e && (e = !1),
        function(t, r) {
            return void 0 !== t.adserverTargeting.hb_deal && void 0 === r.adserverTargeting.hb_deal ? -1 : void 0 === t.adserverTargeting.hb_deal && void 0 !== r.adserverTargeting.hb_deal ? 1 : e ? r.cpm - t.cpm : r.adserverTargeting.hb_pb - t.adserverTargeting.hb_pb
        }
    }
    var zt, Ft, Wt = function(e) {
        var t = {}
          , r = {};
        function n(e, t) {
            return e.adserverTargeting && t && (Object(w.isArray)(t) && Object(C.c)(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)
        }
        function i(t) {
            return "string" == typeof t ? [t] : Object(w.isArray)(t) ? t : e.getAdUnitCodes() || []
        }
        function a() {
            var t = e.getBidsReceived();
            if (_.b.getConfig("useBidCache")) {
                var n = _.b.getConfig("bidCacheFilterFunction");
                "function" == typeof n && (t = t.filter((function(e) {
                    return r[e.adUnitCode] === e.auctionId || !!n(e)
                }
                )))
            } else
                t = t.filter((function(e) {
                    return r[e.adUnitCode] === e.auctionId
                }
                ));
            return t = t.filter((function(e) {
                return Object(x.a)(e, "video.context") !== ye
            }
            )).filter((function(e) {
                return "banner" !== e.mediaType || function(e, t) {
                    void 0 === t && (t = se);
                    var r = pe(t);
                    return !r.shouldFilter || !!r.sizesSupported[e]
                }([e.width, e.height])
            }
            )).filter(Nt).filter(Bt),
            qt(t, w.getOldestHighestCpmBid)
        }
        function o(e, r) {
            var n = t.getWinningBids(e, r)
              , i = d();
            return n = n.map((function(e) {
                var t;
                return (t = {})[e.adUnitCode] = Object.keys(e.adserverTargeting).filter((function(t) {
                    return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === i.indexOf(t)
                }
                )).reduce((function(t, r) {
                    var n, i = [e.adserverTargeting[r]], a = ((n = {})[r.substring(0, 20)] = i,
                    n);
                    if (r === Q.TARGETING_KEYS.DEAL) {
                        var o, d = ((o = {})[(r + "_" + e.bidderCode).substring(0, 20)] = i,
                        o);
                        return [].concat(t, [a, d])
                    }
                    return [].concat(t, [a])
                }
                ), []),
                t
            }
            ))
        }
        function d() {
            return e.getStandardBidderAdServerTargeting().map((function(e) {
                return e.key
            }
            )).concat(Dt).filter(w.uniques)
        }
        function s(e, t, r, n) {
            return Object.keys(t.adserverTargeting).filter(c()).forEach((function(r) {
                e.length && e.filter(function(e) {
                    return function(r) {
                        return r.adUnitCode === t.adUnitCode && r.adserverTargeting[e]
                    }
                }(r)).forEach(function(e) {
                    return function(r) {
                        Object(w.isArray)(r.adserverTargeting[e]) || (r.adserverTargeting[e] = [r.adserverTargeting[e]]),
                        r.adserverTargeting[e] = r.adserverTargeting[e].concat(t.adserverTargeting[e]).filter(w.uniques),
                        delete t.adserverTargeting[e]
                    }
                }(r))
            }
            )),
            e.push(t),
            e
        }
        function c() {
            var e = d().concat(jt);
            return function(t) {
                return -1 === e.indexOf(t)
            }
        }
        function u(e) {
            var t;
            return (t = {})[e.adUnitCode] = Object.keys(e.adserverTargeting).filter(c()).map((function(t) {
                var r;
                return (r = {})[t.substring(0, 20)] = [e.adserverTargeting[t]],
                r
            }
            )),
            t
        }
        function p(e, t) {
            return t.map((function(t) {
                var r;
                return (r = {})[(t + "_" + e.bidderCode).substring(0, 20)] = [e.adserverTargeting[t]],
                r
            }
            ))
        }
        return t.setLatestAuctionForAdUnit = function(e, t) {
            r[e] = t
        }
        ,
        t.resetPresetTargeting = function(t, r) {
            if (Object(w.isGptPubadsDefined)()) {
                var n = i(t)
                  , a = e.getAdUnits().filter((function(e) {
                    return Object(C.c)(n, e.code)
                }
                ))
                  , o = Ut.reduce((function(e, t) {
                    return e[t] = null,
                    e
                }
                ), {});
                window.googletag.pubads().getSlots().forEach((function(e) {
                    var t = Object(w.isFn)(r) && r(e);
                    a.forEach((function(r) {
                        (r.code === e.getAdUnitPath() || r.code === e.getSlotElementId() || Object(w.isFn)(t) && t(r.code)) && e.updateTargetingFromMap(o)
                    }
                    ))
                }
                ))
            }
        }
        ,
        t.resetPresetTargetingAST = function(e) {
            i(e).forEach((function(e) {
                var t = window.apntag.getTag(e);
                if (t && t.keywords) {
                    var r = Object.keys(t.keywords)
                      , n = {};
                    r.forEach((function(e) {
                        Object(C.c)(Ut, e.toLowerCase()) || (n[e] = t.keywords[e])
                    }
                    )),
                    window.apntag.modifyTag(e, {
                        keywords: n
                    })
                }
            }
            ))
        }
        ,
        t.getAllTargeting = function(t, r) {
            void 0 === r && (r = a());
            var d = i(t)
              , c = o(d, r).concat(function(e, t) {
                return t.filter((function(t) {
                    return Object(C.c)(e, t.adUnitCode)
                }
                )).map((function(e) {
                    return Object(I.default)({}, e)
                }
                )).reduce(s, []).map(u).filter((function(e) {
                    return e
                }
                ))
            }(d, r)).concat(_.b.getConfig("enableSendAllBids") ? function(e, t) {
                var r = Dt.concat(jt)
                  , i = _.b.getConfig("sendBidsControl.bidLimit")
                  , a = qt(t, w.getHighestCpm, i)
                  , o = _.b.getConfig("targetingControls.allowSendAllBidsTargetingKeys")
                  , d = o ? o.map((function(e) {
                    return Q.TARGETING_KEYS[e]
                }
                )) : r;
                return a.map((function(t) {
                    var i;
                    if (n(t, e))
                        return (i = {})[t.adUnitCode] = p(t, r.filter((function(e) {
                            return void 0 !== t.adserverTargeting[e] && -1 !== d.indexOf(e)
                        }
                        ))),
                        i
                }
                )).filter((function(e) {
                    return e
                }
                ))
            }(d, r) : function(e, t) {
                if (!0 === _.b.getConfig("targetingControls.alwaysIncludeDeals")) {
                    var r = Dt.concat(jt);
                    return qt(t, w.getHighestCpm).map((function(t) {
                        var i;
                        if (t.dealId && n(t, e))
                            return (i = {})[t.adUnitCode] = p(t, r.filter((function(e) {
                                return void 0 !== t.adserverTargeting[e]
                            }
                            ))),
                            i
                    }
                    )).filter((function(e) {
                        return e
                    }
                    ))
                }
                return []
            }(d, r)).concat(function(t) {
                function r(e) {
                    return Object(x.a)(e, Q.JSON_MAPPING.ADSERVER_TARGETING)
                }
                return e.getAdUnits().filter((function(e) {
                    return Object(C.c)(t, e.code) && r(e)
                }
                )).map((function(e) {
                    var t;
                    return (t = {})[e.code] = function(e) {
                        var t = r(e);
                        return Object.keys(t).map((function(e) {
                            var r;
                            return Object(w.isStr)(t[e]) && (t[e] = t[e].split(",").map((function(e) {
                                return e.trim()
                            }
                            ))),
                            Object(w.isArray)(t[e]) || (t[e] = [t[e]]),
                            (r = {})[e] = t[e],
                            r
                        }
                        ))
                    }(e),
                    t
                }
                ))
            }(d));
            c.map((function(e) {
                Object.keys(e).map((function(t) {
                    e[t].map((function(e) {
                        -1 === Ut.indexOf(Object.keys(e)[0]) && (Ut = Object.keys(e).concat(Ut))
                    }
                    ))
                }
                ))
            }
            ));
            var l = Object.keys(Object(I.default)({}, Q.DEFAULT_TARGETING_KEYS, Q.NATIVE_KEYS))
              , f = _.b.getConfig("targetingControls.allowTargetingKeys")
              , b = _.b.getConfig("targetingControls.addTargetingKeys");
            if (null != b && null != f)
                throw new Error('Only one of "targetingControls.allowTargetingKeys" or "targetingControls.addTargetingKeys" can be set');
            f = null != b ? l.concat(b) : f || l,
            Array.isArray(f) && f.length > 0 && (c = function(e, t) {
                var r = Object(I.default)({}, Q.TARGETING_KEYS, Q.NATIVE_KEYS)
                  , n = Object.keys(r)
                  , i = {};
                Object(w.logInfo)("allowTargetingKeys - allowed keys [ " + t.map((function(e) {
                    return r[e]
                }
                )).join(", ") + " ]"),
                e.map((function(e) {
                    var a = Object.keys(e)[0]
                      , o = e[a].filter((function(e) {
                        var a = Object.keys(e)[0]
                          , o = 0 === n.filter((function(e) {
                            return 0 === a.indexOf(r[e])
                        }
                        )).length || Object(C.b)(t, (function(e) {
                            var t = r[e];
                            return 0 === a.indexOf(t)
                        }
                        ));
                        return i[a] = !o,
                        o
                    }
                    ));
                    e[a] = o
                }
                ));
                var a = Object.keys(i).filter((function(e) {
                    return i[e]
                }
                ));
                return Object(w.logInfo)("allowTargetingKeys - removed keys [ " + a.join(", ") + " ]"),
                e.filter((function(e) {
                    return e[Object.keys(e)[0]].length > 0
                }
                ))
            }(c, f)),
            c = function(e) {
                return e.map((function(e) {
                    var t;
                    return (t = {})[Object.keys(e)[0]] = e[Object.keys(e)[0]].map((function(e) {
                        var t;
                        return (t = {})[Object.keys(e)[0]] = e[Object.keys(e)[0]].join(","),
                        t
                    }
                    )).reduce((function(e, t) {
                        return Object(I.default)(t, e)
                    }
                    ), {}),
                    t
                }
                )).reduce((function(e, t) {
                    var r = Object.keys(t)[0];
                    return e[r] = Object(I.default)({}, e[r], t[r]),
                    e
                }
                ), {})
            }(c);
            var m = _.b.getConfig("targetingControls.auctionKeyMaxChars");
            return m && (Object(w.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of " + m + " characters.  Running checks on auction keys..."),
            c = function(e, t) {
                var r = Object(w.deepClone)(e);
                return Object.keys(r).map((function(e) {
                    return {
                        adUnitCode: e,
                        adserverTargeting: r[e]
                    }
                }
                )).sort(Mt()).reduce((function(e, n, i, a) {
                    var o, d = (o = n.adserverTargeting,
                    Object.keys(o).reduce((function(e, t) {
                        return e + (t + "%3d") + encodeURIComponent(o[t]) + "%26"
                    }
                    ), ""));
                    i + 1 === a.length && (d = d.slice(0, -3));
                    var s = n.adUnitCode
                      , c = d.length;
                    return c <= t ? (t -= c,
                    Object(w.logInfo)("AdUnit '" + s + "' auction keys comprised of " + c + " characters.  Deducted from running threshold; new limit is " + t, r[s]),
                    e[s] = r[s]) : Object(w.logWarn)("The following keys for adUnitCode '" + s + "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was " + c + ", the current allotted amount was " + t + ".\n", r[s]),
                    i + 1 === a.length && 0 === Object.keys(e).length && Object(w.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),
                    e
                }
                ), {})
            }(c, m)),
            d.forEach((function(e) {
                c[e] || (c[e] = {})
            }
            )),
            c
        }
        ,
        _.b.getConfig("targetingControls", (function(e) {
            null != Object(x.a)(e, "targetingControls.allowTargetingKeys") && null != Object(x.a)(e, "targetingControls.addTargetingKeys") && Object(w.logError)('Only one of "targetingControls.allowTargetingKeys" or "targetingControls.addTargetingKeys" can be set')
        }
        )),
        t.setTargetingForGPT = function(e, t) {
            window.googletag.pubads().getSlots().forEach((function(r) {
                Object.keys(e).filter(t ? t(r) : Object(w.isAdUnitCodeMatchingSlot)(r)).forEach((function(t) {
                    Object.keys(e[t]).forEach((function(r) {
                        var n = e[t][r];
                        "string" == typeof n && -1 !== n.indexOf(",") && (n = n.split(",")),
                        e[t][r] = n
                    }
                    )),
                    Object(w.logMessage)("Attempting to set targeting-map for slot: " + r.getSlotElementId() + " with targeting-map:", e[t]),
                    r.updateTargetingFromMap(e[t])
                }
                ))
            }
            ))
        }
        ,
        t.getWinningBids = function(e, t) {
            void 0 === t && (t = a());
            var r = i(e);
            return t.filter((function(e) {
                return Object(C.c)(r, e.adUnitCode)
            }
            )).filter((function(e) {
                return !0 === $.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0
            }
            )).map((function(e) {
                return e.adUnitCode
            }
            )).filter(w.uniques).map((function(e) {
                return t.filter((function(t) {
                    return t.adUnitCode === e ? t : null
                }
                )).reduce(w.getHighestCpm)
            }
            ))
        }
        ,
        t.setTargetingForAst = function(e) {
            var r = t.getAllTargeting(e);
            try {
                t.resetPresetTargetingAST(e)
            } catch (e) {
                Object(w.logError)("unable to reset targeting for AST" + e)
            }
            Object.keys(r).forEach((function(e) {
                return Object.keys(r[e]).forEach((function(t) {
                    if (Object(w.logMessage)("Attempting to set targeting for targetId: " + e + " key: " + t + " value: " + r[e][t]),
                    Object(w.isStr)(r[e][t]) || Object(w.isArray)(r[e][t])) {
                        var n = {};
                        t.search(/pt[0-9]/) < 0 ? n[t.toUpperCase()] = r[e][t] : n[t] = r[e][t],
                        window.apntag.setKeywords(e, n, {
                            overrideKeyValue: !0
                        })
                    }
                }
                ))
            }
            ))
        }
        ,
        t.isApntagDefined = function() {
            if (window.apntag && Object(w.isFn)(window.apntag.setKeywords))
                return !0
        }
        ,
        t
    }(ht), Vt = Object(w.prefixLog)("DEBUG:"), Gt = Vt.logWarn, Lt = Vt.logMessage, Ht = [function(e) {
        Yt(),
        function(e) {
            zt = Zt.bind(e),
            it.before(zt, 5),
            Ft = er.bind(e),
            at.before(Ft, 5)
        }(e)
    }
    ], Kt = [Yt];
    function Yt() {
        it.getHooks({
            hook: zt
        }).remove(),
        at.getHooks({
            hook: Ft
        }).remove()
    }
    function Xt(e, t) {
        void 0 === t && (t = !1),
        _.b.setConfig({
            debug: !0
        }),
        Ht.forEach((function(t) {
            return t(e)
        }
        )),
        Lt("bidder overrides enabled" + (t ? " from session" : ""))
    }
    function Jt(e, t, r) {
        return !(!e.bidder || e.bidder === t) || !(!e.adUnitCode || e.adUnitCode === r)
    }
    function Qt(e, t) {
        return Array.isArray(e) && -1 === e.indexOf(t)
    }
    function $t(e, t, r) {
        return Object.keys(e).filter((function(e) {
            return -1 === ["adUnitCode", "bidder"].indexOf(e)
        }
        )).reduce((function(t, n) {
            return Lt("bidder overrides changed '" + t.adUnitCode + "/" + t.bidderCode + "' " + r + "." + n + " from '" + t[n] + ".js' to '" + e[n] + "'"),
            t[n] = e[n],
            t.isDebug = !0,
            t
        }
        ), t)
    }
    function Zt(e, t, r) {
        Qt(this.bidders, r.bidderCode) ? Gt("bidder '" + r.bidderCode + "' excluded from auction by bidder overrides") : (Array.isArray(this.bids) && this.bids.forEach((function(e) {
            Jt(e, r.bidderCode, t) || $t(e, r, "bidder")
        }
        )),
        e(t, r))
    }
    function er(e, t) {
        var r = this
          , n = t.filter((function(e) {
            return !Qt(r.bidders, e.bidderCode) || (Gt("bidRequest '" + e.bidderCode + "' excluded from auction by bidder overrides"),
            !1)
        }
        ));
        Array.isArray(r.bidRequests) && n.forEach((function(e) {
            r.bidRequests.forEach((function(t) {
                e.bids.forEach((function(r) {
                    Jt(t, e.bidderCode, r.adUnitCode) || $t(t, r, "bidRequest")
                }
                ))
            }
            ))
        }
        )),
        e(n)
    }
    var tr = L("sync", (function(e, t) {
        var r = (void 0 === t ? {} : t).sessionStorage
          , n = void 0 === r ? window.sessionStorage : r;
        if (e.enabled)
            try {
                n.setItem("jwpb:debugging", JSON.stringify(e))
            } catch (e) {}
        else
            try {
                n.removeItem("jwpb:debugging")
            } catch (e) {}
    }
    ));
    function rr(e, t) {
        var r = (void 0 === t ? {} : t).sessionStorage
          , n = void 0 === r ? window.sessionStorage : r;
        tr(e, {
            sessionStorage: n
        }),
        e.enabled ? Xt(e) : (Kt.forEach((function(e) {
            return e()
        }
        )),
        Lt("bidder overrides disabled"))
    }
    _.b.getConfig("debugging", (function(e) {
        return rr(e.debugging)
    }
    ));
    var nr = E()
      , ir = de.triggerUserSyncs
      , ar = Q.EVENTS
      , or = ar.ADD_AD_UNITS
      , dr = ar.BID_WON
      , sr = ar.REQUEST_BIDS
      , cr = ar.SET_TARGETING
      , ur = ar.STALE_RENDER
      , pr = Q.AD_RENDER_FAILED_REASON
      , lr = pr.PREVENT_WRITING_ON_MAIN_DOCUMENT
      , fr = pr.NO_AD
      , br = pr.EXCEPTION
      , mr = pr.CANNOT_FIND_AD
      , gr = pr.MISSING_DOC_OR_ADID
      , vr = {
        bidWon: function(e) {
            var t = ht.getBidsRequested().map((function(e) {
                return e.bids.map((function(e) {
                    return e.adUnitCode
                }
                ))
            }
            )).reduce(w.flatten).filter(w.uniques);
            if (!Object(w.contains)(t, e))
                return void Object(w.logError)('The "' + e + '" placement is not defined.');
            return !0
        }
    };
    function yr(e, t, r) {
        e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t,
        e.defaultView.frameElement.height = r)
    }
    function hr(e, t) {
        var r = [];
        return Object(w.isArray)(e) && (t ? e.length === t : e.length > 0) && (e.every((function(e) {
            return Object(w.isArrayOfNums)(e, 2)
        }
        )) ? r = e : Object(w.isArrayOfNums)(e, 2) && r.push(e)),
        r
    }
    function Or(e) {
        var t = Object(w.deepClone)(e)
          , r = t.mediaTypes.banner
          , n = hr(r.sizes);
        return n.length > 0 ? (r.sizes = n,
        t.sizes = n) : (Object(w.logError)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),
        delete t.mediaTypes.banner),
        t
    }
    function jr(e) {
        var t = Object(w.deepClone)(e)
          , r = t.mediaTypes.video;
        if (r.playerSize) {
            var n = "number" == typeof r.playerSize[0] ? 2 : 1
              , i = hr(r.playerSize, n);
            i.length > 0 ? (2 === n && Object(w.logInfo)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."),
            r.playerSize = i,
            t.sizes = i) : (Object(w.logError)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),
            delete t.mediaTypes.video.playerSize)
        }
        return t
    }
    function Ir(e) {
        var t = Object(w.deepClone)(e)
          , r = t.mediaTypes.native;
        return r.image && r.image.sizes && !Array.isArray(r.image.sizes) && (Object(w.logError)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),
        delete t.mediaTypes.native.image.sizes),
        r.image && r.image.aspect_ratios && !Array.isArray(r.image.aspect_ratios) && (Object(w.logError)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),
        delete t.mediaTypes.native.image.aspect_ratios),
        r.icon && r.icon.sizes && !Array.isArray(r.icon.sizes) && (Object(w.logError)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),
        delete t.mediaTypes.native.icon.sizes),
        t
    }
    function Er(e, t) {
        var r = Object(x.a)(e, "mediaTypes." + t + ".pos");
        if (!Object(w.isNumber)(r) || isNaN(r) || !isFinite(r)) {
            var n = "Value of property 'pos' on ad unit " + e.code + " should be of type: Number";
            Object(w.logWarn)(n),
            S.emit(Q.EVENTS.AUCTION_DEBUG, {
                type: "WARNING",
                arguments: n
            }),
            delete e.mediaTypes[t].pos
        }
        return e
    }
    function wr(e) {
        var t = function(t) {
            return "adUnit.code '" + e.code + "' " + t
        }
          , r = e.mediaTypes
          , n = e.bids;
        return null == n || Object(w.isArray)(n) ? null == n && null == e.ortb2Imp ? (Object(w.logError)(t("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction")),
        null) : r && 0 !== Object.keys(r).length ? (null == e.ortb2Imp || null != n && 0 !== n.length || (e.bids = [{
            bidder: null
        }],
        Object(w.logMessage)(t("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"))),
        e) : (Object(w.logError)(t("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.")),
        null) : (Object(w.logError)(t("defines 'adUnit.bids' that is not an array. Removing adUnit from auction")),
        null)
    }
    !function(e) {
        var t;
        try {
            e = e || window.sessionStorage,
            t = JSON.parse(e.getItem("jwpb:debugging"))
        } catch (e) {}
        t && Xt(t, !0)
    }(),
    nr.bidderSettings = nr.bidderSettings || {},
    nr.libLoaded = !0,
    nr.version = "v6.29.0",
    Object(w.logInfo)("Prebid.js v6.29.0 loaded"),
    nr.installedModules = nr.installedModules || [],
    nr.adUnits = nr.adUnits || [],
    nr.triggerUserSyncs = ir;
    var xr = L("sync", (function(e) {
        var t = [];
        return e.forEach((function(e) {
            if (null != (e = wr(e))) {
                var r, n, i, a = e.mediaTypes;
                a.banner && (r = Or(e),
                a.banner.hasOwnProperty("pos") && (r = Er(r, "banner"))),
                a.video && (n = jr(r || e),
                a.video.hasOwnProperty("pos") && (n = Er(n, "video"))),
                a.native && (i = Ir(n || (r || e)));
                var o = Object(I.default)({}, r, n, i);
                t.push(o)
            }
        }
        )),
        t
    }
    ), "checkAdUnitSetup");
    function Sr(e) {
        var t = ht[e]().filter(w.bind.call(w.adUnitsFilter, this, ht.getAdUnitCodes()))
          , r = ht.getLastAuctionId();
        return t.map((function(e) {
            return e.adUnitCode
        }
        )).filter(w.uniques).map((function(e) {
            return t.filter((function(t) {
                return t.auctionId === r && t.adUnitCode === e
            }
            ))
        }
        )).filter((function(e) {
            return e && e[0] && e[0].adUnitCode
        }
        )).map((function(e) {
            var t;
            return (t = {})[e[0].adUnitCode] = {
                bids: e
            },
            t
        }
        )).reduce((function(e, t) {
            return Object(I.default)(e, t)
        }
        ), {})
    }
    function Cr(e, t, r) {
        var n = t.querySelector(r);
        e.parentNode && e.parentNode === n || Object(w.insertElement)(e, t, r)
    }
    nr.getAdserverTargetingForAdUnitCodeStr = function(e) {
        if (Object(w.logInfo)("Invoking jwpb.getAdserverTargetingForAdUnitCodeStr", arguments),
        e) {
            var t = nr.getAdserverTargetingForAdUnitCode(e);
            return Object(w.transformAdServerTargetingObj)(t)
        }
        Object(w.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
    }
    ,
    nr.getHighestUnusedBidResponseForAdUnitCode = function(e) {
        if (e) {
            var t = ht.getAllBidsForAdUnitCode(e).filter(Nt).filter(Bt);
            return t.length ? t.reduce(w.getHighestCpm) : {}
        }
        Object(w.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")
    }
    ,
    nr.getAdserverTargetingForAdUnitCode = function(e) {
        return nr.getAdserverTargeting(e)[e]
    }
    ,
    nr.getAdserverTargeting = function(e) {
        return Object(w.logInfo)("Invoking jwpb.getAdserverTargeting", arguments),
        Wt.getAllTargeting(e)
    }
    ,
    nr.getConsentMetadata = function() {
        return Object(w.logInfo)("Invoking jwpb.getConsentMetadata"),
        {
            gdpr: Le.getConsentMeta(),
            usp: He.getConsentMeta(),
            coppa: !!_.b.getConfig("coppa")
        }
    }
    ,
    nr.getNoBids = function() {
        return Object(w.logInfo)("Invoking jwpb.getNoBids", arguments),
        Sr("getNoBids")
    }
    ,
    nr.getNoBidsForAdUnitCode = function(e) {
        return {
            bids: ht.getNoBids().filter((function(t) {
                return t.adUnitCode === e
            }
            ))
        }
    }
    ,
    nr.getBidResponses = function() {
        return Object(w.logInfo)("Invoking jwpb.getBidResponses", arguments),
        Sr("getBidsReceived")
    }
    ,
    nr.getBidResponsesForAdUnitCode = function(e) {
        return {
            bids: ht.getBidsReceived().filter((function(t) {
                return t.adUnitCode === e
            }
            ))
        }
    }
    ,
    nr.setTargetingForGPTAsync = function(e, t) {
        if (Object(w.logInfo)("Invoking jwpb.setTargetingForGPTAsync", arguments),
        Object(w.isGptPubadsDefined)()) {
            var r = Wt.getAllTargeting(e);
            Wt.resetPresetTargeting(e, t),
            Wt.setTargetingForGPT(r, t),
            Object.keys(r).forEach((function(e) {
                Object.keys(r[e]).forEach((function(t) {
                    "hb_adid" === t && ht.setStatusForBids(r[e][t], Q.BID_STATUS.BID_TARGETING_SET)
                }
                ))
            }
            )),
            S.emit(cr, r)
        } else
            Object(w.logError)("window.googletag is not defined on the page")
    }
    ,
    nr.setTargetingForAst = function(e) {
        Object(w.logInfo)("Invoking jwpb.setTargetingForAn", arguments),
        Wt.isApntagDefined() ? (Wt.setTargetingForAst(e),
        S.emit(cr, Wt.getAllTargeting())) : Object(w.logError)("window.apntag is not defined on the page")
    }
    ,
    nr.renderAd = L("async", (function(e, t, r) {
        if (Object(w.logInfo)("Invoking jwpb.renderAd", arguments),
        Object(w.logMessage)("Calling renderAd with adId :" + t),
        e && t)
            try {
                var n = ht.findBidByAdId(t);
                if (n) {
                    var i = !0;
                    if (n && n.status === Q.BID_STATUS.RENDERED && (Object(w.logWarn)("Ad id " + n.adId + " has been rendered before"),
                    S.emit(ur, n),
                    Object(x.a)(_.b.getConfig("auctionOptions"), "suppressStaleRender") && (i = !1)),
                    i) {
                        if (n.ad = Object(w.replaceAuctionPrice)(n.ad, n.originalCpm || n.cpm),
                        n.adUrl = Object(w.replaceAuctionPrice)(n.adUrl, n.originalCpm || n.cpm),
                        r && r.clickThrough) {
                            var a = r.clickThrough;
                            n.ad = Object(w.replaceClickThrough)(n.ad, a),
                            n.adUrl = Object(w.replaceClickThrough)(n.adUrl, a)
                        }
                        ht.addWinningBid(n),
                        S.emit(dr, n);
                        var o = n.height
                          , d = n.width
                          , s = n.ad
                          , c = n.mediaType
                          , u = n.adUrl
                          , p = n.renderer
                          , l = document.createComment("Creative " + n.creativeId + " served by " + n.bidder + " Prebid.js Header Bidding");
                        if (Object(w.insertElement)(l, e, "html"),
                        q(p))
                            M(p, n, e),
                            Cr(l, e, "html"),
                            Tt({
                                doc: e,
                                bid: n,
                                id: t
                            });
                        else if (e === document && !Object(w.inIframe)() || "video" === c) {
                            var f = "Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.";
                            Ct({
                                reason: lr,
                                message: f,
                                bid: n,
                                id: t
                            })
                        } else if (s)
                            e.write(s),
                            e.close(),
                            yr(e, d, o),
                            Cr(l, e, "html"),
                            Object(w.callBurl)(n),
                            Tt({
                                doc: e,
                                bid: n,
                                id: t
                            });
                        else if (u) {
                            var b = Object(w.createInvisibleIframe)();
                            b.height = o,
                            b.width = d,
                            b.style.display = "inline",
                            b.style.overflow = "hidden",
                            b.src = u,
                            Object(w.insertElement)(b, e, "body"),
                            yr(e, d, o),
                            Cr(l, e, "html"),
                            Object(w.callBurl)(n),
                            Tt({
                                doc: e,
                                bid: n,
                                id: t
                            })
                        } else {
                            var m = "Error trying to write ad. No ad for bid response id: " + t;
                            Ct({
                                reason: fr,
                                message: m,
                                bid: n,
                                id: t
                            })
                        }
                    }
                } else {
                    var g = "Error trying to write ad. Cannot find ad by given id : " + t;
                    Ct({
                        reason: mr,
                        message: g,
                        id: t
                    })
                }
            } catch (e) {
                var v = "Error trying to write ad Id :" + t + " to the page:" + e.message;
                Ct({
                    reason: br,
                    message: v,
                    id: t
                })
            }
        else {
            var y = "Error trying to write ad Id :" + t + " to the page. Missing document or adId";
            Ct({
                reason: gr,
                message: y,
                id: t
            })
        }
    }
    )),
    nr.removeAdUnit = function(e) {
        (Object(w.logInfo)("Invoking jwpb.removeAdUnit", arguments),
        e) ? (Object(w.isArray)(e) ? e : [e]).forEach((function(e) {
            for (var t = nr.adUnits.length - 1; t >= 0; t--)
                nr.adUnits[t].code === e && nr.adUnits.splice(t, 1)
        }
        )) : nr.adUnits = []
    }
    ,
    nr.requestBids = L("async", (function(e) {
        var t = void 0 === e ? {} : e
          , r = t.bidsBackHandler
          , n = t.timeout
          , i = t.adUnits
          , a = t.adUnitCodes
          , o = t.labels
          , d = t.auctionId;
        S.emit(sr);
        var s = n || _.b.getConfig("bidderTimeout");
        i = i && _.b.convertAdUnitFpd(Object(w.isArray)(i) ? i : [i]) || nr.adUnits,
        Object(w.logInfo)("Invoking jwpb.requestBids", arguments);
        var c = Ye(_.b.getConfig("s2sConfig") || []);
        if (i = xr(i),
        a && a.length ? i = i.filter((function(e) {
            return Object(C.c)(a, e.code)
        }
        )) : a = i && i.map((function(e) {
            return e.code
        }
        )),
        i.forEach((function(e) {
            var t = Object.keys(e.mediaTypes || {
                banner: "banner"
            })
              , r = e.bids.map((function(e) {
                return e.bidder
            }
            ))
              , n = Qe.bidderRegistry
              , i = r.filter((function(e) {
                return !c.has(e)
            }
            ));
            e.transactionId = Object(w.generateUUID)(),
            i.forEach((function(r) {
                var i = n[r]
                  , a = i && i.getSpec && i.getSpec()
                  , o = a && a.supportedMediaTypes || ["banner"];
                t.some((function(e) {
                    return Object(C.c)(o, e)
                }
                )) ? Te.incrementBidderRequestsCounter(e.code, r) : (Object(w.logWarn)(Object(w.unsupportedBidderMessage)(e, r)),
                e.bids = e.bids.filter((function(e) {
                    return e.bidder !== r
                }
                )))
            }
            )),
            Te.incrementRequestsCounter(e.code)
        }
        )),
        i && 0 !== i.length) {
            var u = ht.createAuction({
                adUnits: i,
                adUnitCodes: a,
                callback: r,
                cbTimeout: s,
                labels: o,
                auctionId: d
            })
              , p = i.length;
            p > 15 && Object(w.logInfo)("Current auction " + u.getAuctionId() + " contains " + p + " adUnits.", i),
            a.forEach((function(e) {
                return Wt.setLatestAuctionForAdUnit(e, u.getAuctionId())
            }
            )),
            u.callBids()
        } else if (Object(w.logMessage)("No adUnits configured. No bids requested."),
        "function" == typeof r)
            try {
                r()
            } catch (e) {
                Object(w.logError)("Error executing bidsBackHandler", null, e)
            }
    }
    )),
    nr.requestBids.before((function(e, t) {
        function r(e) {
            for (var t; t = e.shift(); )
                t()
        }
        r(ee),
        r(Tr),
        e.call(this, t)
    }
    ), 49),
    nr.addAdUnits = function(e) {
        Object(w.logInfo)("Invoking jwpb.addAdUnits", arguments),
        nr.adUnits.push.apply(nr.adUnits, _.b.convertAdUnitFpd(Object(w.isArray)(e) ? e : [e])),
        S.emit(or)
    }
    ,
    nr.onEvent = function(e, t, r) {
        Object(w.logInfo)("Invoking jwpb.onEvent", arguments),
        Object(w.isFn)(t) ? !r || vr[e].call(null, r) ? S.on(e, t, r) : Object(w.logError)('The id provided is not valid for event "' + e + '" and no handler was set.') : Object(w.logError)('The event handler provided is not a function and was not set on event "' + e + '".')
    }
    ,
    nr.offEvent = function(e, t, r) {
        Object(w.logInfo)("Invoking jwpb.offEvent", arguments),
        r && !vr[e].call(null, r) || S.off(e, t, r)
    }
    ,
    nr.getEvents = function() {
        return Object(w.logInfo)("Invoking jwpb.getEvents"),
        S.getEvents()
    }
    ,
    nr.registerBidAdapter = function(e, t) {
        Object(w.logInfo)("Invoking jwpb.registerBidAdapter", arguments);
        try {
            Qe.registerBidAdapter(e(), t)
        } catch (e) {
            Object(w.logError)("Error registering bidder adapter : " + e.message)
        }
    }
    ,
    nr.registerAnalyticsAdapter = function(e) {
        Object(w.logInfo)("Invoking jwpb.registerAnalyticsAdapter", arguments);
        try {
            Qe.registerAnalyticsAdapter(e)
        } catch (e) {
            Object(w.logError)("Error registering analytics adapter : " + e.message)
        }
    }
    ,
    nr.createBid = function(e) {
        return Object(w.logInfo)("Invoking jwpb.createBid", arguments),
        be(e)
    }
    ;
    var Tr = []
      , _r = L("async", (function(e) {
        e && !Object(w.isEmpty)(e) ? (Object(w.logInfo)("Invoking jwpb.enableAnalytics for: ", e),
        Qe.enableAnalytics(e)) : Object(w.logError)("jwpb.enableAnalytics should be called with option {}")
    }
    ), "enableAnalyticsCb");
    function Ar(e) {
        e.forEach((function(e) {
            if (void 0 === e.called)
                try {
                    e.call(),
                    e.called = !0
                } catch (e) {
                    Object(w.logError)("Error processing command :", "prebid.js", e)
                }
        }
        ))
    }
    nr.enableAnalytics = function(e) {
        Tr.push(_r.bind(this, e))
    }
    ,
    nr.aliasBidder = function(e, t, r) {
        Object(w.logInfo)("Invoking jwpb.aliasBidder", arguments),
        e && t ? Qe.aliasBidAdapter(e, t, r) : Object(w.logError)("bidderCode and alias must be passed as arguments", "jwpb.aliasBidder")
    }
    ,
    nr.getAllWinningBids = function() {
        return ht.getAllWinningBids()
    }
    ,
    nr.getAllPrebidWinningBids = function() {
        return ht.getBidsReceived().filter((function(e) {
            return e.status === Q.BID_STATUS.BID_TARGETING_SET
        }
        ))
    }
    ,
    nr.getHighestCpmBids = function(e) {
        return Wt.getWinningBids(e)
    }
    ,
    nr.markWinningBidAsUsed = function(e) {
        var t = [];
        e.adUnitCode && e.adId ? t = ht.getBidsReceived().filter((function(t) {
            return t.adId === e.adId && t.adUnitCode === e.adUnitCode
        }
        )) : e.adUnitCode ? t = Wt.getWinningBids(e.adUnitCode) : e.adId ? t = ht.getBidsReceived().filter((function(t) {
            return t.adId === e.adId
        }
        )) : Object(w.logWarn)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."),
        t.length > 0 && (t[0].status = Q.BID_STATUS.RENDERED)
    }
    ,
    nr.getConfig = _.b.getConfig,
    nr.readConfig = _.b.readConfig,
    nr.mergeConfig = _.b.mergeConfig,
    nr.mergeBidderConfig = _.b.mergeBidderConfig,
    nr.setConfig = _.b.setConfig,
    nr.setBidderConfig = _.b.setBidderConfig,
    nr.que.push((function() {
        window.addEventListener("message", Pt, !1)
    }
    )),
    nr.cmd.push = function(e) {
        if ("function" == typeof e)
            try {
                e.call()
            } catch (e) {
                Object(w.logError)("Error processing command :", e.message, e.stack)
            }
        else
            Object(w.logError)("Commands written into jwpb.cmd.push must be wrapped in a function")
    }
    ,
    nr.que.push = nr.cmd.push,
    nr.processQueue = function() {
        L.ready(),
        Ar(nr.que),
        Ar(nr.cmd)
    }
    ;
    var kr, Pr, Rr, Ur, Dr, Br = nr, Nr = {
        value: !0,
        definedInConfig: !1
    }, qr = 0, Mr = !1, zr = {
        iab: function(e) {
            var t = e.onSuccess
              , r = e.onError
              , n = e.width
              , i = e.height;
            function a(e, n) {
                Object(w.logInfo)("Received a response from CMP", e),
                n ? !1 !== e.gdprApplies && "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || Vr(e, {
                    onSuccess: t,
                    onError: r
                }) : r("CMP unable to register callback function.  Please check CMP setup.")
            }
            var o = function() {
                var e = {};
                function n() {
                    e.getConsentData && e.getVendorConsents && (Object(w.logInfo)("Received all requested responses from CMP", e),
                    Vr(e, {
                        onSuccess: t,
                        onError: r
                    }))
                }
                return {
                    consentDataCallback: function(t) {
                        e.getConsentData = t,
                        n()
                    },
                    vendorConsentsCallback: function(t) {
                        e.getVendorConsents = t,
                        n()
                    }
                }
            }()
              , d = {}
              , s = function() {
                for (var e, t, r = window; !e; ) {
                    try {
                        if ("function" == typeof r.__tcfapi || "function" == typeof r.__cmp) {
                            "function" == typeof r.__tcfapi ? (qr = 2,
                            t = r.__tcfapi) : (qr = 1,
                            t = r.__cmp),
                            e = r;
                            break
                        }
                    } catch (e) {}
                    try {
                        if (r.frames.__tcfapiLocator) {
                            qr = 2,
                            e = r;
                            break
                        }
                    } catch (e) {}
                    try {
                        if (r.frames.__cmpLocator) {
                            qr = 1,
                            e = r;
                            break
                        }
                    } catch (e) {}
                    if (r === window.top)
                        break;
                    r = r.parent
                }
                return {
                    cmpFrame: e,
                    cmpFunction: t
                }
            }()
              , c = s.cmpFrame
              , u = s.cmpFunction;
            if (!c)
                return r("CMP not found.");
            Object(w.isFn)(u) ? (Object(w.logInfo)("Detected CMP API is directly accessible, calling it now..."),
            1 === qr ? (u("getConsentData", null, o.consentDataCallback),
            u("getVendorConsents", null, o.vendorConsentsCallback)) : 2 === qr && u("addEventListener", qr, a)) : 1 === qr && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? (Object(w.logInfo)("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."),
            p("getConsentData", o.consentDataCallback),
            p("getVendorConsents", o.vendorConsentsCallback)) : (Object(w.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."),
            1 === qr ? (l("getConsentData", c, o.consentDataCallback),
            l("getVendorConsents", c, o.vendorConsentsCallback)) : 2 === qr && l("addEventListener", c, a));
            function p(e, t) {
                window.$sf.ext.register(n, i, (function(r, n) {
                    if ("cmpReturn" === r) {
                        var i = "getConsentData" === e ? n.vendorConsentData : n.vendorConsents;
                        t(i)
                    }
                }
                )),
                window.$sf.ext.cmp(e)
            }
            function l(e, t, r) {
                var n = 2 === qr ? "__tcfapi" : "__cmp"
                  , i = n + "Call";
                function a(e) {
                    var t = n + "Return"
                      , r = "string" == typeof e.data && Object(C.c)(e.data, t) ? JSON.parse(e.data) : e.data;
                    if (r[t] && r[t].callId) {
                        var i = r[t];
                        void 0 !== d[i.callId] && d[i.callId](i.returnValue, i.success)
                    }
                }
                2 === qr ? (window[n] = function(e, r, n, a) {
                    var o, s = Math.random() + "", c = ((o = {})[i] = {
                        command: e,
                        version: r,
                        parameter: a,
                        callId: s
                    },
                    o);
                    d[s] = n,
                    t.postMessage(c, "*")
                }
                ,
                window.addEventListener("message", a, !1),
                window[n](e, qr, r)) : (window[n] = function(e, r, n) {
                    var a, o = Math.random() + "", s = ((a = {})[i] = {
                        command: e,
                        parameter: r,
                        callId: o
                    },
                    a);
                    d[o] = n,
                    t.postMessage(s, "*")
                }
                ,
                window.addEventListener("message", a, !1),
                window[n](e, void 0, r))
            }
        },
        static: function(e) {
            var t = e.onSuccess
              , r = e.onError;
            Vr(Ur, {
                onSuccess: t,
                onError: r
            })
        }
    };
    function Fr(e, t, r) {
        void 0 === t && (t = 1),
        void 0 === r && (r = 1);
        var n = !1
          , i = null;
        function a(t, r, a) {
            if (null != i && clearTimeout(i),
            n = !0,
            Le.setConsentData(t),
            null != e) {
                for (var o = arguments.length, d = new Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
                    d[s - 3] = arguments[s];
                e.apply(void 0, [r, a].concat(d))
            }
        }
        if (Object(C.c)(Object.keys(zr), kr)) {
            var o = {
                onSuccess: function(e) {
                    return a(e, !1)
                },
                onError: function(e) {
                    var t = null
                      , r = !0;
                    Nr.value && 1 === qr && (t = Gr(void 0),
                    r = !1);
                    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                        i[o - 1] = arguments[o];
                    a.apply(void 0, [t, r, e].concat(i))
                }
            };
            zr[kr](Object(I.default)({
                width: t,
                height: r
            }, o)),
            n || (0 === Pr ? Vr(void 0, o) : i = setTimeout((function() {
                2 === qr ? a(Gr(void 0), !1, "No response from CMP, continuing auction...") : o.onError("CMP workflow exceeded timeout threshold.")
            }
            ), Pr))
        } else
            a(null, !1, "CMP framework (" + kr + ") is not a supported framework.  Aborting consentManagement module and resuming auction.")
    }
    function Wr(e, t) {
        (function() {
            if (Dr)
                return Object(w.logInfo)("User consent information already known.  Pulling internally stored information..."),
                function(e) {
                    e(!1)
                }
                ;
            var e = t.adUnits || jwpb.adUnits
              , r = 1
              , n = 1;
            if (Array.isArray(e) && e.length > 0) {
                var i, a, o = Object(w.getAdUnitSizes)(e[0]);
                r = (null == o || null == (i = o[0]) ? void 0 : i[0]) || 1,
                n = (null == o || null == (a = o[0]) ? void 0 : a[1]) || 1
            }
            return function(e) {
                Fr(e, r, n)
            }
        }
        )()((function(r, n) {
            if (n) {
                var i = w.logWarn;
                1 !== qr || r ? r && (i = w.logError,
                n += " Canceling auction as per consentManagement config.") : n += " 'allowAuctionWithoutConsent' activated.";
                for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), d = 2; d < a; d++)
                    o[d - 2] = arguments[d];
                i.apply(void 0, [n].concat(o))
            }
            r ? "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : Object(w.logError)("Error executing bidsBackHandler") : e.call(this, t)
        }
        ))
    }
    function Vr(e, t) {
        var r = t.onSuccess
          , n = t.onError;
        "static" === kr && 2 === (qr = e.getConsentData ? 1 : e.getTCData ? 2 : 0) && (e = e.getTCData);
        var i = 1 === qr ? function(e) {
            var t = e && e.getConsentData && e.getConsentData.gdprApplies;
            return !("boolean" == typeof t && (!0 !== t || Object(w.isStr)(e.getConsentData.consentData) && Object(w.isPlainObject)(e.getVendorConsents) && Object.keys(e.getVendorConsents).length > 1))
        }
        : 2 === qr ? function() {
            var t = e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : Rr
              , r = e && e.tcString;
            return !("boolean" == typeof t && (!0 !== t || Object(w.isStr)(r)))
        }
        : null;
        Object(w.isFn)(i) ? i(e) ? n("CMP returned unexpected value during lookup process.", e) : r(Gr(e)) : n("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", e)
    }
    function Gr(e) {
        return 1 === qr ? Dr = {
            consentString: e ? e.getConsentData.consentData : void 0,
            vendorData: e ? e.getVendorConsents : void 0,
            gdprApplies: e ? e.getConsentData.gdprApplies : Rr
        } : (Dr = {
            consentString: e ? e.tcString : void 0,
            vendorData: e || void 0,
            gdprApplies: e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : Rr
        },
        e && e.addtlConsent && Object(w.isStr)(e.addtlConsent) && (Dr.addtlConsent = e.addtlConsent)),
        Dr.apiVersion = qr,
        Dr
    }
    _.b.getConfig("consentManagement", (function(e) {
        return function(e) {
            (e = e && (e.gdpr || e.usp ? e.gdpr : e)) && "object" == typeof e ? (Object(w.isStr)(e.cmpApi) ? kr = e.cmpApi : (kr = "iab",
            Object(w.logInfo)("consentManagement config did not specify cmp.  Using system default setting (iab).")),
            Object(w.isNumber)(e.timeout) ? Pr = e.timeout : (Pr = 1e4,
            Object(w.logInfo)("consentManagement config did not specify timeout.  Using system default setting (10000).")),
            "boolean" == typeof e.allowAuctionWithoutConsent && (Nr.value = e.allowAuctionWithoutConsent,
            Nr.definedInConfig = !0),
            Rr = !0 === e.defaultGdprScope,
            Object(w.logInfo)("consentManagement module has been activated..."),
            "static" === kr && (Object(w.isPlainObject)(e.consentData) ? (Ur = e.consentData,
            Pr = 0) : Object(w.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),
            Mr || jwpb.requestBids.before(Wr, 50),
            Mr = !0,
            Le.enable(),
            Fr(),
            Nr.definedInConfig && 2 === qr ? Object(w.logWarn)("'allowAuctionWithoutConsent' ignored for TCF 2") : Nr.definedInConfig || 1 !== qr || Object(w.logInfo)("'allowAuctionWithoutConsent' using system default: (true).")) : Object(w.logWarn)("consentManagement config not defined, exiting consent manager")
        }(e.consentManagement)
    }
    )),
    window.jwpb.installedModules.push("consentManagement");
    var Lr, Hr, Kr = r(10), Yr = {
        appnexus: {
            adapter: "prebidServer",
            enabled: !0,
            endpoint: {
                p1Consent: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                noP1Consent: "https://prebid.adnxs-simple.com/pbs/v1/openrtb2/auction"
            },
            syncEndpoint: {
                p1Consent: "https://prebid.adnxs.com/pbs/v1/cookie_sync",
                noP1Consent: "https://prebid.adnxs-simple.com/pbs/v1/cookie_sync"
            },
            timeout: 1e3
        },
        appnexuspsp: {
            adapter: "prebidServer",
            enabled: !0,
            endpoint: {
                p1Consent: "https://ib.adnxs.com/openrtb2/prebid",
                noP1Consent: "https://ib.adnxs-simple.com/openrtb2/prebid"
            },
            timeout: 1e3
        },
        rubicon: {
            adapter: "prebidServer",
            enabled: !0,
            endpoint: {
                p1Consent: "https://prebid-server.rubiconproject.com/openrtb2/auction",
                noP1Consent: "https://prebid-server.rubiconproject.com/openrtb2/auction"
            },
            syncEndpoint: {
                p1Consent: "https://prebid-server.rubiconproject.com/cookie_sync",
                noP1Consent: "https://prebid-server.rubiconproject.com/cookie_sync"
            },
            timeout: 500
        },
        openx: {
            adapter: "prebidServer",
            enabled: !0,
            endpoint: {
                p1Consent: "https://prebid.openx.net/openrtb2/auction",
                noP1Consent: "https://prebid.openx.net/openrtb2/auction"
            },
            syncEndpoint: {
                p1Consent: "https://prebid.openx.net/cookie_sync",
                noP1Consent: "https://prebid.openx.net/cookie_sync"
            },
            timeout: 1e3
        }
    }, Xr = _.b.getConfig, Jr = Q.S2S.SRC, Qr = 0, $r = {
        bidders: Object.freeze([]),
        timeout: 1e3,
        syncTimeout: 1e3,
        maxBids: 1,
        adapter: "prebidServer",
        allowUnknownBidderCodes: !1,
        adapterOptions: {},
        syncUrlModifier: {}
    };
    function Zr(e) {
        if (e) {
            var t = Array.isArray(e) ? e : [e]
              , r = [];
            return t.every((function(t, n, i) {
                if ((function(e) {
                    ["endpoint", "syncEndpoint"].forEach((function(t) {
                        if (Object(w.isStr)(e[t])) {
                            var r = e[t];
                            e[t] = {
                                p1Consent: r,
                                noP1Consent: r
                            }
                        }
                        !Object(w.isPlainObject)(e[t]) || e[t].p1Consent && e[t].noP1Consent || ["p1Consent", "noP1Consent"].forEach((function(r) {
                            e[t][r] || Object(w.logWarn)("s2sConfig." + t + "." + r + " not defined.  PBS request will be skipped in some P1 scenarios.")
                        }
                        ))
                    }
                    ))
                }(e),
                !1 !== function(e) {
                    if (e.defaultVendor) {
                        var t = e.defaultVendor
                          , r = Object.keys(e);
                        if (!Yr[t])
                            return Object(w.logError)("Incorrect or unavailable prebid server default vendor option: " + t),
                            !1;
                        Object.keys(Yr[t]).forEach((function(n) {
                            $r[n] !== e[n] && Object(C.c)(r, n) || (e[n] = Yr[t][n])
                        }
                        ))
                    }
                    return e.enabled = "boolean" == typeof e.enabled && e.enabled
                }(t)) && !1 !== function(e) {
                    var t = Object.keys(e);
                    if (["accountId", "endpoint"].filter((function(e) {
                        return !Object(C.c)(t, e) && (Object(w.logError)(e + " missing in server to server config"),
                        !0)
                    }
                    )).length > 0)
                        return !1
                }(t))
                    return Array.isArray(t.bidders) && (i[n].bidders = t.bidders.filter((function(e) {
                        return -1 === r.indexOf(e) && (r.push(e),
                        !0)
                    }
                    ))),
                    !0;
                return Object(w.logWarn)("prebidServer: s2s config is disabled"),
                !1
            }
            )) ? Lr = t : void 0
        }
    }
    function en(e, t) {
        if (0 !== e.length) {
            var r = e.shift();
            r.no_cookie ? function(e, t, r, n, i) {
                i.syncUrlModifier && "function" == typeof i.syncUrlModifier[r] && (t = i.syncUrlModifier[r](e, t, r));
                !function(e, t, r, n, i) {
                    t ? "image" === e || "redirect" === e ? (Object(w.logMessage)('Invoking image pixel user sync for bidder: "' + r + '"'),
                    Object(w.triggerPixel)(t, n, i)) : "iframe" === e ? (Object(w.logMessage)('Invoking iframe user sync for bidder: "' + r + '"'),
                    Object(w.insertUserSyncIframe)(t, n, i)) : (Object(w.logError)('User sync type "' + e + '" not supported for bidder: "' + r + '"'),
                    n()) : (Object(w.logError)('No sync url for bidder "' + r + '": ' + t),
                    n())
                }(e, t, r, n, i.syncTimeout)
            }(r.usersync.type, r.usersync.url, r.bidder, w.bind.call(en, null, e, t), t) : en(e, t)
        }
    }
    _.b.setDefaults({
        s2sConfig: $r
    }),
    Xr("s2sConfig", (function(e) {
        return Zr(e.s2sConfig)
    }
    ));
    var tn = {
        sponsoredBy: 1,
        body: 2,
        rating: 3,
        likes: 4,
        downloads: 5,
        price: 6,
        salePrice: 7,
        phone: 8,
        address: 9,
        body2: 10,
        cta: 12
    }
      , rn = Object.keys(tn)
      , nn = {
        icon: 1,
        image: 3
    }
      , an = {
        img: 1,
        js: 2
    };
    [tn, nn, {
        impression: 1,
        "viewable-mrc50": 2,
        "viewable-mrc100": 3,
        "viewable-video50": 4
    }, an].forEach((function(e) {
        Object.keys(e).forEach((function(t) {
            e[e[t]] = t
        }
        ))
    }
    ));
    var on = {}
      , dn = {};
    function sn(e, t, r, n) {
        this.s2sBidRequest = e,
        this.bidderRequests = t,
        this.adUnits = r,
        this.s2sConfig = e.s2sConfig,
        this.requestedBidders = n,
        this.bidIdMap = {},
        this.adUnitsByImp = {},
        this.impRequested = {},
        this.auctionId = t.map((function(e) {
            return e.auctionId
        }
        )).reduce((function(e, t) {
            return (null == e || e === t) && t
        }
        )),
        this.requestTimestamp = Object(w.timestamp)()
    }
    function cn(e) {
        var t, r, n = function(e, t) {
            if ([e, t].every(w.isStr))
                return dn["" + e + t]
        }(e.auctionId, e.adId);
        Object(w.isStr)(n) && (Object(w.logMessage)('Invoking image pixel for wurl on BID_WIN: "' + n + '"'),
        Object(w.triggerPixel)(n),
        t = e.auctionId,
        r = e.adId,
        [t, r].every(w.isStr) && (dn["" + t + r] = void 0))
    }
    function un(e, t) {
        return function(e) {
            var t = !0;
            return e && e.gdprApplies && 2 === e.apiVersion && (t = !(!0 !== Object(x.a)(e, "vendorData.purpose.consents.1"))),
            t
        }(t) ? e.p1Consent : e.noP1Consent
    }
    function pn(e) {
        var t, r;
        return Array.isArray(e) && e.length > 0 && (t = e[0].gdprConsent,
        r = e[0].uspConsent),
        {
            gdprConsent: t,
            uspConsent: r
        }
    }
    Object(I.default)(sn.prototype, {
        buildRequest: function() {
            var e = this
              , t = this.s2sBidRequest
              , r = this.bidderRequests
              , n = this.adUnits
              , i = this.s2sConfig
              , a = this.requestedBidders
              , o = []
              , d = {}
              , s = r[0]
              , c = new Set;
            if (n.forEach((function(t) {
                t.bids.forEach((function(e) {
                    null != e.mediaTypes && Object(w.logWarn)("Prebid Server adapter does not (yet) support bidder-specific mediaTypes for the same adUnit. Size mapping configuration will be ignored for adUnit: " + t.code + ", bidder: " + e.bidder)
                }
                ));
                for (var n = t.code, a = 1; c.has(n); )
                    a++,
                    n = t.code + "-" + a;
                c.add(n),
                e.adUnitsByImp[n] = t;
                var u, p = t.nativeParams;
                if (p) {
                    var l = -1;
                    try {
                        u = on[n] = Object.keys(p).reduce((function(e, t) {
                            var r = p[t];
                            function n(e) {
                                return l++,
                                Object(I.default)({
                                    required: r.required ? 1 : 0,
                                    id: Object(w.isNumber)(r.id) ? l = r.id : l
                                }, e ? Object(w.cleanObj)(e) : {})
                            }
                            switch (t) {
                            case "image":
                            case "icon":
                                var i = nn[t]
                                  , a = Object(w.cleanObj)({
                                    type: i,
                                    w: Object(x.a)(r, "sizes.0"),
                                    h: Object(x.a)(r, "sizes.1"),
                                    wmin: Object(x.a)(r, "aspect_ratios.0.min_width"),
                                    hmin: Object(x.a)(r, "aspect_ratios.0.min_height")
                                });
                                if (!(a.w && a.h || a.hmin && a.wmin))
                                    throw "invalid img sizes (must provide sizes or min_height & min_width if using aspect_ratios)";
                                if (Array.isArray(r.aspect_ratios)) {
                                    var o = r.aspect_ratios.filter((function(e) {
                                        return e.ratio_width && e.ratio_height
                                    }
                                    )).map((function(e) {
                                        return e.ratio_width + ":" + e.ratio_height
                                    }
                                    ));
                                    o.length > 0 && (a.ext = {
                                        aspectratios: o
                                    })
                                }
                                e.push(n({
                                    img: a
                                }));
                                break;
                            case "title":
                                if (!r.len)
                                    throw "invalid title.len";
                                e.push(n({
                                    title: {
                                        len: r.len
                                    }
                                }));
                                break;
                            default:
                                var d = tn[t];
                                d && e.push(n({
                                    data: {
                                        type: d,
                                        len: r.len
                                    }
                                }))
                            }
                            return e
                        }
                        ), [])
                    } catch (e) {
                        Object(w.logError)("error creating native request: " + String(e))
                    }
                }
                var f = Object(x.a)(t, "mediaTypes.video")
                  , b = Object(x.a)(t, "mediaTypes.banner");
                t.bids.forEach((function(t) {
                    if (e.setBidRequestId(n, t.bidder, t.bid_id),
                    Qe.aliasRegistry[t.bidder]) {
                        var r = Qe.bidderRegistry[t.bidder];
                        r && !r.getSpec().skipPbsAliasing && (d[t.bidder] = Qe.aliasRegistry[t.bidder])
                    }
                }
                ));
                var m = {};
                if (b && b.sizes) {
                    var g = Object(w.parseSizesInput)(b.sizes).map((function(e) {
                        var t = e.split("x")
                          , r = t[0]
                          , n = t[1];
                        return {
                            w: parseInt(r, 10),
                            h: parseInt(n, 10)
                        }
                    }
                    ));
                    m.banner = {
                        format: g
                    },
                    b.pos && (m.banner.pos = b.pos)
                }
                if (Object(w.isEmpty)(f) || ("outstream" !== f.context || f.renderer || t.renderer ? ("instream" !== f.context || f.hasOwnProperty("placement") || (f.placement = 1),
                m.video = Object.keys(f).filter((function(e) {
                    return "context" !== e
                }
                )).reduce((function(e, t) {
                    return "playerSize" === t ? (e.w = Object(x.a)(f, t + ".0.0"),
                    e.h = Object(x.a)(f, t + ".0.1")) : e[t] = f[t],
                    e
                }
                ), {})) : Object(w.logError)("Outstream bid without renderer cannot be sent to Prebid Server.")),
                u)
                    try {
                        m.native = {
                            request: JSON.stringify({
                                context: 1,
                                plcmttype: 1,
                                eventtrackers: [{
                                    event: 1,
                                    methods: [1]
                                }],
                                assets: u
                            }),
                            ver: "1.2"
                        }
                    } catch (e) {
                        Object(w.logError)("error creating native request: " + String(e))
                    }
                var v = t.bids.reduce((function(e, n) {
                    if (null == n.bidder)
                        return e;
                    var a = Qe.bidderRegistry[n.bidder];
                    return a && a.getSpec().transformBidParams && (n.params = a.getSpec().transformBidParams(n.params, !0, t, r)),
                    e[n.bidder] = i.adapterOptions && i.adapterOptions[n.bidder] ? Object(I.default)({}, n.params, i.adapterOptions[n.bidder]) : n.params,
                    e
                }
                ), Object(I.default)({}, Object(x.a)(t, "ortb2Imp.ext")))
                  , y = Object(I.default)({}, t.ortb2Imp, {
                    id: n,
                    ext: v,
                    secure: i.secure
                })
                  , h = Object(I.default)({}, Object(x.a)(t, "ortb2Imp.ext.data"));
                Object.keys(h).forEach((function(e) {
                    "pbadslot" === e ? "string" == typeof h[e] && h[e] ? Object(Kr.a)(y, "ext.data.pbadslot", h[e]) : delete y.ext.data.pbadslot : "adserver" === e ? ["name", "adslot"].forEach((function(e) {
                        var t = Object(x.a)(h, "adserver." + e);
                        "string" == typeof t && t && Object(Kr.a)(y, "ext.data.adserver." + e.toLowerCase(), t)
                    }
                    )) : Object(Kr.a)(y, "ext.data." + e, h[e])
                }
                )),
                Object(w.mergeDeep)(y, m);
                var O = Object(C.b)(s.bids, (function(e) {
                    return e.adUnitCode === t.code && e.storedAuctionResponse
                }
                ));
                O && Object(Kr.a)(y, "ext.prebid.storedauctionresponse.id", O.storedAuctionResponse.toString());
                var j, S, T = (j = "function" != typeof E().convertCurrency ? function(e) {
                    return e
                }
                : function(e, t, r) {
                    if (t === r)
                        return e;
                    var n = null;
                    try {
                        n = E().convertCurrency(e, t, r)
                    } catch (e) {}
                    return n
                }
                ,
                S = _.b.getConfig("currency.adServerCurrency") || "USD",
                t.bids.map((function(t) {
                    return e.getBidRequest(y.id, t.bidder)
                }
                )).map((function(e) {
                    if (e && "function" == typeof e.getFloor)
                        try {
                            var t = e.getFloor({
                                currency: S
                            })
                              , r = t.currency
                              , n = t.floor;
                            return {
                                currency: r,
                                floor: parseFloat(n)
                            }
                        } catch (e) {
                            Object(w.logError)("PBS: getFloor threw an error: ", e)
                        }
                }
                )).reduce((function(e, t) {
                    if ((null == t || null == t.currency || null == t.floor || isNaN(t.floor)) && (e.min = null),
                    null === e.min)
                        return e;
                    if (null == e.ref)
                        e.ref = e.min = t;
                    else {
                        var r = j(t.floor, t.currency, e.ref.currency);
                        null != r && r < e.ref.floor && (e.ref.floor = r,
                        e.min = t)
                    }
                    return e
                }
                ), {}).min);
                T && (y.bidfloor = T.floor,
                y.bidfloorcur = T.currency),
                (y.banner || y.video || y.native) && o.push(y)
            }
            )),
            o.length) {
                var u = {
                    id: s.auctionId,
                    source: {
                        tid: t.tid
                    },
                    tmax: i.timeout,
                    imp: o,
                    test: 0,
                    ext: {
                        prebid: {
                            auctiontimestamp: s.auctionStart,
                            targeting: {
                                includewinners: !0,
                                includebidderkeys: !1
                            }
                        }
                    }
                };
                "object" == typeof Object(x.a)(s, "bids.0.floorData") && (u.ext.prebid.floors = {
                    enabled: !1
                }),
                u.ext.prebid = Object(I.default)(u.ext.prebid, {
                    channel: {
                        name: "pbjs",
                        version: jwpb.version
                    }
                }),
                Xr("debug") && (u.ext.prebid = Object(I.default)(u.ext.prebid, {
                    debug: !0
                })),
                i.extPrebid && "object" == typeof i.extPrebid && (u.ext.prebid = Object(w.mergeDeep)(u.ext.prebid, i.extPrebid));
                var p = _.b.getConfig("currency.adServerCurrency");
                p && "string" == typeof p ? u.cur = [p] : Array.isArray(p) && p.length && (u.cur = [p[0]]),
                function(e, t, r) {
                    e && ("object" == typeof _.b.getConfig("app") ? (e.app = _.b.getConfig("app"),
                    e.app.publisher = {
                        id: r
                    }) : (e.site = {},
                    Object(w.isPlainObject)(_.b.getConfig("site")) && (e.site = _.b.getConfig("site")),
                    Object(x.a)(e.site, "publisher.id") || Object(Kr.a)(e.site, "publisher.id", r),
                    e.site.page || (e.site.page = t)),
                    "object" == typeof _.b.getConfig("device") && (e.device = _.b.getConfig("device")),
                    e.device || (e.device = {}),
                    e.device.w || (e.device.w = window.innerWidth),
                    e.device.h || (e.device.h = window.innerHeight))
                }(u, r[0].refererInfo.referer, i.accountId);
                var l = Object(x.a)(r, "0.bids.0.schain");
                l && (u.source.ext = {
                    schain: l
                }),
                Object(w.isEmpty)(d) || (u.ext.prebid.aliases = Object(I.default)({}, u.ext.prebid.aliases, d));
                var f = Object(x.a)(r, "0.bids.0.userIdAsEids");
                Object(w.isArray)(f) && f.length > 0 && Object(Kr.a)(u, "user.ext.eids", f),
                Object(w.isArray)(Hr) && Hr.length > 0 && (a && Object(w.isArray)(a) && Hr.forEach((function(e) {
                    e.bidders && (e.bidders = e.bidders.filter((function(e) {
                        return Object(C.c)(a, e)
                    }
                    )))
                }
                )),
                Object(Kr.a)(u, "ext.prebid.data.eidpermissions", Hr));
                var b = _.b.getConfig("multibid");
                if (b && Object(Kr.a)(u, "ext.prebid.multibid", b.reduce((function(e, t) {
                    var r = {};
                    return Object.keys(t).forEach((function(e) {
                        r[e.toLowerCase()] = t[e]
                    }
                    )),
                    e.push(r),
                    e
                }
                ), [])),
                r) {
                    var m;
                    if (s.gdprConsent)
                        "boolean" == typeof s.gdprConsent.gdprApplies && (m = s.gdprConsent.gdprApplies ? 1 : 0),
                        Object(Kr.a)(u, "regs.ext.gdpr", m),
                        Object(Kr.a)(u, "user.ext.consent", s.gdprConsent.consentString),
                        s.gdprConsent.addtlConsent && "string" == typeof s.gdprConsent.addtlConsent && Object(Kr.a)(u, "user.ext.ConsentedProvidersSettings.consented_providers", s.gdprConsent.addtlConsent);
                    s.uspConsent && Object(Kr.a)(u, "regs.ext.us_privacy", s.uspConsent)
                }
                !0 === Xr("coppa") && Object(Kr.a)(u, "regs.coppa", 1);
                var g = Xr("ortb2") || {};
                return Object(w.mergeDeep)(u, g),
                function(e) {
                    var t = _.b.getBidderConfig()
                      , r = Object.keys(t).reduce((function(e, r) {
                        var n = t[r];
                        if (n.ortb2) {
                            var i = Object(w.mergeDeep)({}, n.ortb2);
                            e.push({
                                bidders: [r],
                                config: {
                                    ortb2: i
                                }
                            })
                        }
                        return e
                    }
                    ), []);
                    r.length && Object(Kr.a)(e, "ext.prebid.bidderconfig", r)
                }(u),
                u.imp.forEach((function(t) {
                    return e.impRequested[t.id] = t
                }
                )),
                u
            }
            Object(w.logError)("Request to Prebid Server rejected due to invalid media type(s) in adUnit.")
        },
        interpretResponse: function(e) {
            var t = this
              , r = this.bidderRequests
              , n = this.s2sConfig
              , i = [];
            return [["errors", "serverErrors"], ["responsetimemillis", "serverResponseTimeMs"]].forEach((function(t) {
                return function(e, t, r, n) {
                    var i = Object(x.a)(t, "ext." + r);
                    i && Object.keys(i).forEach((function(t) {
                        var r = Object(C.b)(e, (function(e) {
                            return e.bidderCode === t
                        }
                        ));
                        r && (r[n] = i[t])
                    }
                    ))
                }(r, e, t[0], t[1])
            }
            )),
            e.seatbid && e.seatbid.forEach((function(r) {
                (r.bid || []).forEach((function(a) {
                    var o = t.getBidRequest(a.impid, r.seat);
                    if (null == o) {
                        if (!n.allowUnknownBidderCodes)
                            return void Object(w.logWarn)("PBS adapter received bid from unknown bidder (" + r.seat + "), but 's2sConfig.allowUnknownBidderCodes' is not set. Ignoring bid.");
                        o = t.getBidRequest(a.impid, null)
                    }
                    var d = a.price
                      , s = be(0 !== d ? Q.STATUS.GOOD : Q.STATUS.NO_BID, {
                        bidder: r.seat,
                        src: Jr,
                        bidId: o ? o.bidId || o.bid_Id : null,
                        transactionId: t.adUnitsByImp[a.impid].transactionId,
                        auctionId: t.auctionId
                    });
                    s.requestTimestamp = t.requestTimestamp,
                    s.cpm = d;
                    var c = Object(x.a)(e, ["ext", "responsetimemillis", r.seat].join("."));
                    o && c && (o.serverResponseTimeMs = c);
                    var u, p, l, f = Object(x.a)(a, "ext.prebid.bidid");
                    Object(w.isStr)(f) && (s.pbsBidId = f),
                    Object(w.isStr)(Object(x.a)(a, "ext.prebid.events.win")) && (u = t.auctionId,
                    p = s.adId,
                    l = Object(x.a)(a, "ext.prebid.events.win"),
                    [u, p].every(w.isStr) && (dn["" + u + p] = l));
                    var b = Object(x.a)(a, "ext.prebid.targeting");
                    if (Object(w.isPlainObject)(b) && (Object(w.isStr)(Object(x.a)(a, "ext.prebid.events.win")) && (b = Object(w.getDefinedParams)(b, Object.keys(b).filter((function(e) {
                        return -1 === e.indexOf("hb_winurl") && -1 === e.indexOf("hb_bidid")
                    }
                    )))),
                    s.adserverTargeting = b),
                    s.seatBidId = a.id,
                    Object(x.a)(a, "ext.prebid.type") === ge) {
                        s.mediaType = ge;
                        var m = t.impRequested[a.impid]
                          , g = [m.video.w, m.video.h];
                        s.playerWidth = g[0],
                        s.playerHeight = g[1],
                        a.ext.prebid.cache && "object" == typeof a.ext.prebid.cache.vastXml && a.ext.prebid.cache.vastXml.cacheId && a.ext.prebid.cache.vastXml.url ? (s.videoCacheKey = a.ext.prebid.cache.vastXml.cacheId,
                        s.vastUrl = a.ext.prebid.cache.vastXml.url) : b && b.hb_uuid && b.hb_cache_host && b.hb_cache_path && (s.videoCacheKey = b.hb_uuid,
                        s.vastUrl = "https://" + b.hb_cache_host + b.hb_cache_path + "?uuid=" + b.hb_uuid),
                        a.adm && (s.vastXml = a.adm),
                        !s.vastUrl && a.nurl && (s.vastUrl = a.nurl)
                    } else if (Object(x.a)(a, "ext.prebid.type") === me) {
                        var v, y;
                        s.mediaType = me,
                        y = "string" == typeof a.adm ? s.adm = JSON.parse(a.adm) : s.adm = a.adm;
                        var h = ((v = {})[an.img] = y.imptrackers || [],
                        v[an.js] = y.jstracker ? [y.jstracker] : [],
                        v);
                        if (y.eventtrackers && y.eventtrackers.forEach((function(e) {
                            switch (e.method) {
                            case an.img:
                                h[an.img].push(e.url);
                                break;
                            case an.js:
                                h[an.js].push(e.url)
                            }
                        }
                        )),
                        Object(w.isPlainObject)(y) && Array.isArray(y.assets)) {
                            var O = on[a.impid];
                            s.native = Object(w.cleanObj)(y.assets.reduce((function(e, t) {
                                var r = O[t.id];
                                return Object(w.isPlainObject)(t.img) ? e[r.img.type ? nn[r.img.type] : "image"] = Object(w.pick)(t.img, ["url", "w as width", "h as height"]) : Object(w.isPlainObject)(t.title) ? e.title = t.title.text : Object(w.isPlainObject)(t.data) && rn.forEach((function(n) {
                                    tn[n] === r.data.type && (e[n] = t.data.value)
                                }
                                )),
                                e
                            }
                            ), Object(w.cleanObj)({
                                clickUrl: y.link,
                                clickTrackers: Object(x.a)(y, "link.clicktrackers"),
                                impressionTrackers: h[an.img],
                                javascriptTrackers: h[an.js]
                            })))
                        } else
                            Object(w.logError)("prebid server native response contained no assets")
                    } else
                        a.adm && a.nurl ? (s.ad = a.adm,
                        s.ad += Object(w.createTrackPixelHtml)(decodeURIComponent(a.nurl))) : a.adm ? s.ad = a.adm : a.nurl && (s.adUrl = a.nurl);
                    s.width = a.w,
                    s.height = a.h,
                    a.dealid && (s.dealId = a.dealid),
                    s.creative_id = a.crid,
                    s.creativeId = a.crid,
                    a.burl && (s.burl = a.burl),
                    s.currency = e.cur ? e.cur : "USD",
                    s.meta = {};
                    var j = Object(x.a)(a, "ext.prebid.meta");
                    j && Object(w.isPlainObject)(j) && (s.meta = Object(w.deepClone)(j)),
                    a.adomain && (s.meta.advertiserDomains = a.adomain);
                    var I = n.defaultTtl || 60;
                    s.ttl = a.exp ? a.exp : I,
                    s.netRevenue = !a.netRevenue || a.netRevenue,
                    i.push({
                        adUnit: t.adUnitsByImp[a.impid].code,
                        bid: s
                    })
                }
                ))
            }
            )),
            i
        },
        setBidRequestId: function(e, t, r) {
            this.bidIdMap[this.impBidderKey(e, t)] = r
        },
        getBidRequest: function(e, t) {
            var r = this.impBidderKey(e, t);
            return this.bidIdMap[r] && Object(w.getBidRequest)(this.bidIdMap[r], this.bidderRequests)
        },
        impBidderKey: function(e, t) {
            return "" + e + t
        }
    });
    var ln = L("sync", (function(e, t, r, n) {
        var i = n.onResponse
          , a = n.onError
          , o = n.onBid
          , d = pn(t).gdprConsent
          , s = Object(w.deepClone)(e.ad_units)
          , c = s.map((function(e) {
            return e.bids.map((function(e) {
                return e.bidder
            }
            )).filter(w.uniques)
        }
        )).reduce(w.flatten, []).filter(w.uniques)
          , u = new sn(e,t,s,c)
          , p = u.buildRequest()
          , l = p && JSON.stringify(p);
        Object(w.logInfo)("BidRequest: " + l);
        var f = un(e.s2sConfig.endpoint, d);
        p && l && f ? r(f, {
            success: function(e) {
                var t;
                try {
                    t = JSON.parse(e),
                    u.interpretResponse(t).forEach(o)
                } catch (e) {
                    Object(w.logError)(e)
                }
                !t || t.status && Object(C.c)(t.status, "Error") ? (Object(w.logError)("error parsing response: ", t ? t.status : "not valid JSON"),
                i(!1, c)) : i(!0, c)
            },
            error: a
        }, l, {
            contentType: "text/plain",
            withCredentials: !0
        }) : Object(w.logError)("PBS request not made.  Check endpoints.")
    }
    ), "processPBSRequest");
    Object(w.getPrebidInternal)().setEidPermissions = function(e) {
        Hr = e
    }
    ,
    Qe.registerBidAdapter(new function() {
        var e = new le("prebidServer");
        return e.callBids = function(e, t, r, n, i) {
            var a = pn(t)
              , o = a.gdprConsent
              , d = a.uspConsent;
            if (Array.isArray(Lr)) {
                if (e.s2sConfig && e.s2sConfig.syncEndpoint && un(e.s2sConfig.syncEndpoint, o))
                    !function(e, t, r, n) {
                        if (Lr.length !== Qr) {
                            Qr++;
                            var i = {
                                uuid: Object(w.generateUUID)(),
                                bidders: e,
                                account: n.accountId
                            }
                              , a = n.userSyncLimit;
                            Object(w.isNumber)(a) && a > 0 && (i.limit = a),
                            t && (i.gdpr = t.gdprApplies ? 1 : 0,
                            !1 !== t.gdprApplies && (i.gdpr_consent = t.consentString)),
                            r && (i.us_privacy = r),
                            "boolean" == typeof n.coopSync && (i.coopSync = n.coopSync);
                            var o = JSON.stringify(i);
                            A(un(n.syncEndpoint, t), (function(e) {
                                try {
                                    en((e = JSON.parse(e)).bidder_status, n)
                                } catch (e) {
                                    Object(w.logError)(e)
                                }
                            }
                            ), o, {
                                contentType: "text/plain",
                                withCredentials: !0
                            })
                        }
                    }(e.s2sConfig.bidders.map((function(e) {
                        return Qe.aliasRegistry[e] || e
                    }
                    )).filter((function(e, t, r) {
                        return r.indexOf(e) === t
                    }
                    )), o, d, e.s2sConfig);
                ln(e, t, i, {
                    onResponse: function(e, r) {
                        e && t.forEach((function(e) {
                            return S.emit(Q.EVENTS.BIDDER_DONE, e)
                        }
                        )),
                        n(),
                        function(e, t, r) {
                            e.forEach((function(e) {
                                var n = Qe.getBidAdapter(e);
                                n && n.registerSyncs && _.b.runWithBidder(e, w.bind.call(n.registerSyncs, n, [], t, r))
                            }
                            ))
                        }(r, o, d)
                    },
                    onError: n,
                    onBid: function(e) {
                        var t = e.adUnit
                          , n = e.bid;
                        xe(t, n) && r(t, n)
                    }
                })
            }
        }
        ,
        S.on(Q.EVENTS.BID_WON, cn),
        Object(I.default)(this, {
            callBids: e.callBids,
            setBidderCode: e.setBidderCode,
            type: Jr
        })
    }
    , "prebidServer"),
    window.jwpb.installedModules.push("prebidServerBidAdapter");
    var fn = {
        trustpid: {
            source: "trustpid.com",
            atype: 1,
            getValue: function(e) {
                return e
            }
        },
        intentIqId: {
            source: "intentiq.com",
            atype: 1
        },
        naveggId: {
            source: "navegg.com",
            atype: 1
        },
        justId: {
            source: "justtag.com",
            atype: 1
        },
        pubcid: {
            source: "pubcid.org",
            atype: 1
        },
        tdid: {
            source: "adserver.org",
            atype: 1,
            getUidExt: function() {
                return {
                    rtiPartner: "TDID"
                }
            }
        },
        id5id: {
            getValue: function(e) {
                return e.uid
            },
            source: "id5-sync.com",
            atype: 1,
            getUidExt: function(e) {
                if (e.ext)
                    return e.ext
            }
        },
        ftrackId: {
            source: "flashtalking.com",
            atype: 1,
            getValue: function(e) {
                return e.uid
            },
            getUidExt: function(e) {
                if (e.ext)
                    return e.ext
            }
        },
        parrableId: {
            source: "parrable.com",
            atype: 1,
            getValue: function(e) {
                return e.eid ? e.eid : e.ccpaOptout ? "" : null
            },
            getUidExt: function(e) {
                var t = Object(w.pick)(e, ["ibaOptout", "ccpaOptout"]);
                if (Object.keys(t).length)
                    return t
            }
        },
        idl_env: {
            source: "liveramp.com",
            atype: 3
        },
        lipb: {
            getValue: function(e) {
                return e.lipbid
            },
            source: "liveintent.com",
            atype: 3,
            getEidExt: function(e) {
                if (Array.isArray(e.segments) && e.segments.length)
                    return {
                        segments: e.segments
                    }
            }
        },
        britepoolid: {
            source: "britepool.com",
            atype: 3
        },
        dmdId: {
            source: "hcn.health",
            atype: 3
        },
        lotamePanoramaId: {
            source: "crwdcntrl.net",
            atype: 1
        },
        criteoId: {
            source: "criteo.com",
            atype: 1
        },
        merkleId: {
            atype: 3,
            getSource: function(e) {
                var t;
                return null != e && null != (t = e.ext) && t.ssp ? e.ext.ssp + ".merkleinc.com" : "merkleinc.com"
            },
            getValue: function(e) {
                return e.id
            },
            getUidExt: function(e) {
                return e.keyID ? {
                    keyID: e.keyID
                } : e.ext ? e.ext : void 0
            }
        },
        netId: {
            source: "netid.de",
            atype: 1
        },
        IDP: {
            source: "zeotap.com",
            atype: 1
        },
        hadronId: {
            source: "audigent.com",
            atype: 1
        },
        haloId: {
            source: "audigent.com",
            atype: 1
        },
        quantcastId: {
            source: "quantcast.com",
            atype: 1
        },
        nextrollId: {
            source: "nextroll.com",
            atype: 1
        },
        idx: {
            source: "idx.lat",
            atype: 1
        },
        connectid: {
            source: "verizonmedia.com",
            atype: 3
        },
        fabrickId: {
            source: "neustar.biz",
            atype: 1
        },
        mwOpenLinkId: {
            source: "mediawallahscript.com",
            atype: 1
        },
        tapadId: {
            source: "tapad.com",
            atype: 1
        },
        novatiq: {
            getValue: function(e) {
                return e.snowflake
            },
            source: "novatiq.com",
            atype: 1
        },
        uid2: {
            source: "uidapi.com",
            atype: 3,
            getValue: function(e) {
                return e.id
            }
        },
        dapId: {
            source: "akamai.com",
            atype: 1
        },
        deepintentId: {
            source: "deepintent.com",
            atype: 3
        },
        admixerId: {
            source: "admixer.net",
            atype: 3
        },
        adtelligentId: {
            source: "adtelligent.com",
            atype: 3
        },
        amxId: {
            source: "amxrtb.com",
            atype: 1
        },
        publinkId: {
            source: "epsilon.com",
            atype: 3
        },
        kpuid: {
            source: "kpuid.com",
            atype: 3
        },
        imuid: {
            source: "intimatemerger.com",
            atype: 1
        },
        connectId: {
            source: "yahoo.com",
            atype: 3
        },
        qid: {
            source: "adquery.io",
            atype: 1
        },
        dacId: {
            source: "impact-ad.jp",
            atype: 1
        },
        "33acrossId": {
            source: "33across.com",
            atype: 1,
            getValue: function(e) {
                return e.envelope
            }
        },
        gravitompId: {
            source: "gravito.net",
            atype: 1
        }
    };
    function bn(e, t) {
        var r = fn[t];
        if (r && e) {
            var n = {};
            n.source = Object(w.isFn)(r.getSource) ? r.getSource(e) : r.source;
            var i = Object(w.isFn)(r.getValue) ? r.getValue(e) : e;
            if (Object(w.isStr)(i)) {
                var a = {
                    id: i,
                    atype: r.atype
                };
                if (Object(w.isFn)(r.getUidExt)) {
                    var o = r.getUidExt(e);
                    o && (a.ext = o)
                }
                if (n.uids = [a],
                Object(w.isFn)(r.getEidExt)) {
                    var d = r.getEidExt(e);
                    d && (n.ext = d)
                }
                return n
            }
        }
        return null
    }
    function mn(e) {
        var t = []
          , r = function(r) {
            if (e.hasOwnProperty(r))
                if ("pubProvidedId" === r)
                    t = t.concat(e.pubProvidedId);
                else if (Array.isArray(e[r]))
                    e[r].forEach((function(e, n, i) {
                        var a = bn(e, r);
                        a && t.push(a)
                    }
                    ));
                else {
                    var n = bn(e[r], r);
                    n && t.push(n)
                }
        };
        for (var n in e)
            r(n);
        return t
    }
    var gn, vn, yn, hn, On, jn = L("sync", (function() {}
    )), In = "_pbjs_userid_consent_data", En = 30, wn = ne("userid"), xn = [], Sn = !1, Cn = [], Tn = [], _n = [];
    function An(e, t) {
        var r = e.config.storage
          , n = "function" == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null;
        try {
            var i = Object(w.isPlainObject)(t) ? JSON.stringify(t) : t
              , a = new Date(Date.now() + 864e5 * r.expires).toUTCString();
            "cookie" === r.type ? (wn.setCookie(r.name, i, a, "Lax", n),
            "number" == typeof r.refreshInSeconds && wn.setCookie(r.name + "_last", (new Date).toUTCString(), a, "Lax", n)) : "html5" === r.type && (wn.setDataInLocalStorage(r.name + "_exp", a),
            wn.setDataInLocalStorage(r.name, encodeURIComponent(i)),
            "number" == typeof r.refreshInSeconds && wn.setDataInLocalStorage(r.name + "_last", (new Date).toUTCString()))
        } catch (e) {
            Object(w.logError)(e)
        }
    }
    function kn(e) {
        var t, r = Object(w.getPrebidInternal)().setEidPermissions;
        "function" == typeof r && Object(w.isArray)(e) && r((t = [],
        e.filter((function(e) {
            return Object(w.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
        }
        )).forEach((function(e) {
            Object.keys(e.idObj).forEach((function(r) {
                Object(x.a)(e, "config.bidders") && Array.isArray(e.config.bidders) && Object(x.a)(fn, r + ".source") && t.push({
                    source: fn[r].source,
                    bidders: e.config.bidders
                })
            }
            ))
        }
        )),
        t))
    }
    function Pn(e, t) {
        void 0 === t && (t = void 0);
        var r, n = t ? e.name + "_" + t : e.name;
        try {
            if ("cookie" === e.type)
                r = wn.getCookie(n);
            else if ("html5" === e.type) {
                var i = wn.getDataFromLocalStorage(e.name + "_exp");
                "" === i ? r = wn.getDataFromLocalStorage(n) : i && new Date(i).getTime() - Date.now() > 0 && (r = decodeURIComponent(wn.getDataFromLocalStorage(n)))
            }
            "string" == typeof r && "{" === r.trim().charAt(0) && (r = JSON.parse(r))
        } catch (e) {
            Object(w.logError)(e)
        }
        return r
    }
    function Rn(e) {
        var t = {
            consentString: "",
            gdprApplies: !1,
            apiVersion: 0
        };
        return e && (t.consentString = e.consentString,
        t.gdprApplies = e.gdprApplies,
        t.apiVersion = e.apiVersion),
        Object(w.cyrb53Hash)(JSON.stringify(t))
    }
    function Un(e) {
        if (void 0 === e && (e = window.location.hostname),
        !wn.cookiesAreEnabled())
            return e;
        var t, r, n = e.split(".");
        if (2 == n.length)
            return e;
        var i = -2
          , a = "_rdc" + Date.now();
        do {
            t = n.slice(i).join(".");
            var o = new Date(Object(w.timestamp)() + 1e4).toUTCString();
            wn.setCookie(a, "writeable", o, "Lax", t, void 0),
            "writeable" === wn.getCookie(a, void 0) ? (r = !1,
            wn.setCookie(a, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, t, void 0)) : (i += -1,
            r = Math.abs(i) <= n.length)
        } while (r);
        return t
    }
    function Dn(e, t) {
        var r = function() {};
        t && (r = Object(w.delayExecution)((function() {
            clearTimeout(void 0),
            t()
        }
        ), e.length)),
        e.forEach((function(e) {
            try {
                e.callback((function(t) {
                    t ? (e.config.storage && An(e, t),
                    e.idObj = e.submodule.decode(t, e.config)) : Object(w.logInfo)("User ID: " + e.submodule.name + " - request id responded with an empty value"),
                    r()
                }
                ))
            } catch (t) {
                Object(w.logError)("Error in userID module '" + e.submodule.name + "':", t),
                r()
            }
            e.callback = void 0
        }
        ))
    }
    function Bn(e, t) {
        [e].some((function(e) {
            return !Array.isArray(e) || !e.length
        }
        )) || e.forEach((function(e) {
            e.bids && Object(w.isArray)(e.bids) && e.bids.forEach((function(e) {
                var r = function(e, t) {
                    return Array.isArray(e) && e.length && t ? e.filter((function(e) {
                        return !e.config.bidders || !Object(w.isArray)(e.config.bidders) || Object(C.c)(e.config.bidders, t)
                    }
                    )).filter((function(e) {
                        return Object(w.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                    }
                    )).reduce((function(e, t) {
                        return Object.keys(t.idObj).forEach((function(r) {
                            e[r] = t.idObj[r]
                        }
                        )),
                        e
                    }
                    ), {}) : {}
                }(t, e.bidder);
                Object.keys(r).length && (e.userId = r,
                e.userIdAsEids = mn(r))
            }
            ))
        }
        ))
    }
    function Nn(e) {
        return new Promise((function(t) {
            return setTimeout(t, e)
        }
        ))
    }
    var qn, Mn = {};
    function zn() {
        var e = hn && (Vn() || []).find((function(e) {
            return e.source === hn
        }
        ));
        if (e && "string" == typeof Object(x.a)(e, "uids.0.id")) {
            var t = e.uids[0].id.replace(/[\W_]/g, "");
            if (t.length >= 32 && t.length <= 150)
                return t;
            Object(w.logWarn)("User ID - Googletag Publisher Provided ID for " + hn + " is not between 32 and 150 characters - " + t)
        }
    }
    function Fn(e, t, r) {
        var n = this
          , i = (void 0 === r ? {} : r).delay
          , a = void 0 === i ? Nn : i;
        Promise.race([Xn(), a(yn)]).then((function() {
            Bn(t.adUnits || E().adUnits, gn);
            var r = zn();
            r && (Object(w.isGptPubadsDefined)() ? window.googletag.pubads().setPublisherProvidedId(r) : (window.googletag = window.googletag || {},
            window.googletag.cmd = window.googletag.cmd || [],
            window.googletag.cmd.push((function() {
                window.googletag.pubads().setPublisherProvidedId(r)
            }
            )))),
            e.call(n, t)
        }
        ))
    }
    function Wn() {
        return e = gn,
        Array.isArray(e) && e.length ? e.filter((function(e) {
            return Object(w.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
        }
        )).reduce((function(e, t) {
            return Object.keys(t.idObj).forEach((function(r) {
                e[r] = t.idObj[r]
            }
            )),
            e
        }
        ), {}) : {};
        var e
    }
    function Vn() {
        return mn(Wn())
    }
    function Gn(e) {
        return mn(function(e, t) {
            if (!Array.isArray(e) || !e.length)
                return {};
            var r = e.filter((function(e) {
                var r;
                return Object(w.isPlainObject)(e.idObj) && Object.keys(e.idObj).length && (null == (r = fn[Object.keys(e.idObj)[0]]) ? void 0 : r.source) === t
            }
            ));
            return Object(w.isEmpty)(r) ? [] : r[0].idObj
        }(gn, e))[0]
    }
    function Ln(e, t, r) {
        return qn().then((function() {
            var n = {};
            if (Object(w.isFn)(r)) {
                Object(w.logInfo)("User ID - Getting encrypted signal from custom function : " + r.name + " & source : " + e + " ");
                var i = r(e);
                n[e] = i ? Hn(i) : null
            } else {
                var a = Gn(e);
                Object(w.logInfo)("User ID - Getting encrypted signal for eids :" + JSON.stringify(a)),
                Object(w.isEmpty)(a) || (n[a.source] = !0 === t ? Hn(a) : a.uids[0].id)
            }
            return Object(w.logInfo)("User ID - Fetching encrypted eids: " + n[e]),
            n[e]
        }
        ))
    }
    function Hn(e, t) {
        void 0 === t && (t = 1);
        var r = "";
        switch (t) {
        case 1:
            r = "object" == typeof e ? window.btoa(JSON.stringify(e)) : window.btoa(e)
        }
        return t + "||" + r
    }
    function Kn() {
        if (Object(w.isGptPubadsDefined)()) {
            window.googletag.encryptedSignalProviders = window.googletag.encryptedSignalProviders || [];
            var e = _.b.getConfig("userSync.encryptedSignalSources");
            if (e) {
                var t = e.registerDelay || 0;
                setTimeout((function() {
                    e.sources && e.sources.forEach((function(e) {
                        var t = e.source
                          , r = e.encrypt
                          , n = e.customFunc;
                        t.forEach((function(e) {
                            window.googletag.encryptedSignalProviders.push({
                                id: e,
                                collectorFunction: function() {
                                    return Ln(e, r, n)
                                }
                            })
                        }
                        ))
                    }
                    ))
                }
                ), t)
            } else
                Object(w.logWarn)("User ID - ESP : encryptedSignalSources config not defined under userSync Object")
        }
    }
    function Yn(e, t) {
        var r = (void 0 === e ? {} : e).submoduleNames;
        return qn({
            refresh: !0,
            submoduleNames: r
        }).then((function() {
            return t && Object(w.isFn)(t) && t(),
            Wn()
        }
        ))
    }
    function Xn() {
        return qn().then((function() {
            return Wn()
        }
        ), (function(e) {
            return e === Mn ? Xn() : Promise.reject(e)
        }
        ))
    }
    var Jn, Qn, $n, Zn = L("sync", (function(e, t) {
        return {
            userIdModules: e,
            hasValidated: t && t.hasValidated
        }
    }
    ), "validateGdprEnforcement");
    function ei(e, t, r, n) {
        if (e.config.storage) {
            var i, a = Pn(e.config.storage), o = !1;
            if ("number" == typeof e.config.storage.refreshInSeconds) {
                var d = new Date(Pn(e.config.storage, "last"));
                o = d && Date.now() - d.getTime() > 1e3 * e.config.storage.refreshInSeconds
            }
            !a || o || n || !function(e, t) {
                return null != e && e === Rn(t)
            }(r, t) ? i = e.submodule.getId(e.config, t, a) : "function" == typeof e.submodule.extendId && (i = e.submodule.extendId(e.config, t, a)),
            Object(w.isPlainObject)(i) && (i.id && (An(e, i.id),
            a = i.id),
            "function" == typeof i.callback && (e.callback = i.callback)),
            a && (e.idObj = e.submodule.decode(a, e.config))
        } else if (e.config.value)
            e.idObj = e.config.value;
        else {
            var s = e.submodule.getId(e.config, t, void 0);
            Object(w.isPlainObject)(s) && ("function" == typeof s.callback && (e.callback = s.callback),
            s.id && (e.idObj = e.submodule.decode(s.id, e.config)))
        }
    }
    function ti(e, t, r, n) {
        void 0 === n && (n = !1);
        var i = Zn(t, r)
          , a = i.userIdModules;
        if (!i.hasValidated && !function(e) {
            if (e && "boolean" == typeof e.gdprApplies && e.gdprApplies) {
                if (!e.consentString)
                    return !1;
                if (1 === e.apiVersion && !1 === Object(x.a)(e, "vendorData.purposeConsents.1"))
                    return !1;
                if (2 === e.apiVersion && !1 === Object(x.a)(e, "vendorData.purpose.consents.1"))
                    return !1
            }
            return !0
        }(r))
            return Object(w.logWarn)("User ID - gdpr permission not valid for local storage or cookies, exit module"),
            [];
        var o = function() {
            try {
                return wn.getCookie(In)
            } catch (e) {
                Object(w.logError)(e)
            }
        }();
        !function(e) {
            try {
                var t = new Date(Date.now() + 864e5 * En).toUTCString();
                wn.setCookie(In, Rn(e), t, "Lax")
            } catch (e) {
                Object(w.logError)(e)
            }
        }(r);
        var d = a.reduce((function(e, t) {
            try {
                ei(t, r, o, n),
                e.push(t)
            } catch (e) {
                Object(w.logError)("Error in userID module '" + t.submodule.name + "':", e)
            }
            return e
        }
        ), []);
        return d.length && kn(d),
        d.forEach(ri.bind(null, e)),
        d
    }
    function ri(e, t) {
        for (var r = !1, n = 0; n < e.length; n++)
            if (t.config.name.toLowerCase() === e[n].config.name.toLowerCase()) {
                r = !0,
                e[n] = t;
                break
            }
        r || e.push(t)
    }
    function ni() {
        var e, t, r = (e = Tn,
        t = xn,
        Array.isArray(e) ? e.reduce((function(e, r) {
            return !r || Object(w.isEmptyStr)(r.name) || (!r.storage || Object(w.isEmptyStr)(r.storage.type) || Object(w.isEmptyStr)(r.storage.name) || -1 === t.indexOf(r.storage.type) ? Object(w.isPlainObject)(r.value) ? e.push(r) : r.storage || r.value || e.push(r) : e.push(r)),
            e
        }
        ), []) : []);
        if (r.length) {
            var n = _n.filter((function(e) {
                return !Object(C.b)(Cn, (function(t) {
                    return t.name === e.name
                }
                ))
            }
            ));
            Cn.splice(0, Cn.length),
            n.map((function(e) {
                var t = Object(C.b)(r, (function(t) {
                    return t.name && (t.name.toLowerCase() === e.name.toLowerCase() || e.aliasName && t.name.toLowerCase() === e.aliasName.toLowerCase())
                }
                ));
                return t && e.name !== t.name && (t.name = e.name),
                e.findRootDomain = Un,
                t ? {
                    submodule: e,
                    config: t,
                    callback: void 0,
                    idObj: void 0
                } : null
            }
            )).filter((function(e) {
                return null !== e
            }
            )).forEach((function(e) {
                return Cn.push(e)
            }
            )),
            !Sn && Cn.length && (E().requestBids.before(Fn, 40),
            jn.after((function(e) {
                return e(zn())
            }
            )),
            Object(w.logInfo)("User ID - usersync config updated for " + Cn.length + " submodules: ", Cn.map((function(e) {
                return e.submodule.name
            }
            ))),
            Sn = !0)
        }
    }
    Jn = _.b,
    $n = (void 0 === Qn ? {} : Qn).delay,
    hn = void 0,
    Cn = [],
    Tn = [],
    Sn = !1,
    gn = [],
    qn = function(e) {
        var t, r = (void 0 === e ? {} : e).delay, n = void 0 === r ? Nn : r, i = V(), a = V(), o = !1;
        function d(e) {
            return null != t && t.reject(Mn),
            t = V(),
            Promise.race([e, t.promise])
        }
        var s = gn
          , c = Cn;
        function u(e) {
            return function() {
                if (s === gn && c === Cn)
                    return e.apply(void 0, arguments)
            }
        }
        var p = d(Promise.all([K, i.promise]).then((function() {
            return Le.promise
        }
        )).then(u((function(e) {
            ti(s, c, e)
        }
        ))).then((function() {
            return a.promise
        }
        )).then(u((function() {
            var e = s.filter((function(e) {
                return Object(w.isFn)(e.callback)
            }
            ));
            if (e.length)
                return new Promise((function(t) {
                    return Dn(e, t)
                }
                ))
        }
        ))));
        return function(e) {
            var t = void 0 === e ? {} : e
              , r = t.refresh
              , l = void 0 !== r && r
              , f = t.submoduleNames
              , b = void 0 === f ? null : f
              , m = t.ready;
            return void 0 !== m && m && !o && (o = !0,
            i.resolve(),
            yn > 0 ? a.resolve() : S.on(Q.EVENTS.AUCTION_END, (function e() {
                S.off(Q.EVENTS.AUCTION_END, e),
                n(vn).then(a.resolve)
            }
            ))),
            l && (p = d(p.catch((function() {
                return null
            }
            )).then((function() {
                return Le.promise
            }
            )).then(u((function(e) {
                var t = ti(s, c.filter((function(e) {
                    return null == b || b.includes(e.submodule.name)
                }
                )), e, !0).filter((function(e) {
                    return null != e.callback
                }
                ));
                if (t.length)
                    return new Promise((function(e) {
                        return Dn(t, e)
                    }
                    ))
            }
            ))))),
            p
        }
    }({
        delay: void 0 === $n ? Nn : $n
    }),
    null != On && On(),
    _n = [],
    -1 !== (xn = [wn.localStorageIsEnabled() ? "html5" : null, wn.cookiesAreEnabled() ? "cookie" : null].filter((function(e) {
        return null !== e
    }
    ))).indexOf("cookie") && wn.getCookie("_pbjs_id_optout") ? Object(w.logInfo)("User ID - opt-out cookie found, exit module") : -1 !== xn.indexOf("html5") && wn.getDataFromLocalStorage("_pbjs_id_optout") ? Object(w.logInfo)("User ID - opt-out localStorage found, exit module") : (On = Jn.getConfig("userSync", (function(e) {
        var t = e.userSync;
        hn = t.ppid,
        t && t.userIds && (Tn = t.userIds,
        vn = Object(w.isNumber)(t.syncDelay) ? t.syncDelay : 500,
        yn = Object(w.isNumber)(t.auctionDelay) ? t.auctionDelay : 0,
        ni(),
        qn({
            ready: !0
        }))
    }
    )),
    E().getUserIds = Wn,
    E().getUserIdsAsEids = Vn,
    E().getEncryptedEidsForSource = Ln,
    E().registerSignalSources = Kn,
    E().refreshUserIds = Yn,
    E().getUserIdsAsync = Xn,
    E().getUserIdsAsEidBySource = Gn),
    function(e, t, r) {
        var n = (void 0 === r ? {} : r).postInstallAllowed
          , i = void 0 !== n && n;
        L("async", (function(r) {
            r.forEach((function(e) {
                return t.apply(void 0, e)
            }
            )),
            i && (X[e] = t)
        }
        ), e)([])
    }("userId", (function(e) {
        Object(C.b)(_n, (function(t) {
            return t.name === e.name
        }
        )) || (_n.push(e),
        ni())
    }
    )),
    window.jwpb.installedModules.push("userId");
    var ii, ai, oi, di, si = {
        purpose1: {
            id: 1,
            name: "storage"
        },
        purpose2: {
            id: 2,
            name: "basicAds"
        },
        purpose7: {
            id: 7,
            name: "measurement"
        }
    }, ci = ["fpid-module"], ui = [{
        purpose: "storage",
        enforcePurpose: !0,
        enforceVendor: !0,
        vendorExceptions: []
    }, {
        purpose: "basicAds",
        enforcePurpose: !0,
        enforceVendor: !0,
        vendorExceptions: []
    }], pi = [], li = [], fi = [], bi = !1, mi = {
        getGvlidForBidAdapter: function(e) {
            var t = null;
            if (e = e || _.b.getCurrentBidder()) {
                var r = Qe.getBidAdapter(e);
                r && r.getSpec && (t = r.getSpec().gvlid)
            }
            return t
        },
        getGvlidForUserIdModule: function(e) {
            return "object" == typeof e ? e.gvlid : null
        },
        getGvlidForAnalyticsAdapter: function(e) {
            return Qe.getAnalyticsAdapter(e) && (Qe.getAnalyticsAdapter(e).gvlid || null)
        }
    };
    function gi(e) {
        var t = null;
        if (e) {
            var r = _.b.getConfig("gvlMapping")
              , n = "string" == typeof e ? e : e.name;
            if (r && r[n])
                return t = r[n];
            t = mi.getGvlidForBidAdapter(n) || mi.getGvlidForUserIdModule(e) || mi.getGvlidForAnalyticsAdapter(n)
        }
        return t
    }
    function vi(e, t, r, n, i) {
        var a = si[Object.keys(si).filter((function(t) {
            return si[t].name === e.purpose
        }
        ))[0]].id;
        if (Object(C.c)(e.vendorExceptions || [], r))
            return !0;
        var o = Object(x.a)(t, "vendorData.purpose.consents." + a)
          , d = Object(x.a)(t, "vendorData.vendor.consents." + n)
          , s = Object(x.a)(t, "vendorData.purpose.legitimateInterests." + a)
          , c = Object(C.c)(ci, i)
          , u = !1 === e.enforcePurpose || !0 === o
          , p = !1 === e.enforceVendor || !0 === d || !0 === c;
        return 2 === a ? u && p || !0 === s : u && p
    }
    function yi(e, t, r, n, i) {
        if (i = Object(I.default)({}, {
            hasEnforcementHook: !0
        }),
        Object(w.hasDeviceAccess)()) {
            var a = Le.getConsentData();
            if (a && a.gdprApplies)
                if (2 === a.apiVersion) {
                    var o = _.b.getCurrentBidder();
                    t = o && o != r && Qe.aliasRegistry[o] === r ? gi(o) : gi(r) || t;
                    var d = r || o;
                    vi(ii, a, d, t, n) ? (i.valid = !0,
                    e.call(this, t, r, n, i)) : (d && Object(w.logWarn)("TCF2 denied device access for " + d),
                    i.valid = !1,
                    pi.push(d),
                    e.call(this, t, r, n, i))
                } else
                    i.valid = !0,
                    e.call(this, t, r, n, i);
            else
                i.valid = !0,
                e.call(this, t, r, n, i)
        } else
            Object(w.logWarn)("Device access is disabled by Publisher"),
            i.valid = !1,
            e.call(this, t, r, n, i)
    }
    function hi(e) {
        for (var t = Le.getConsentData(), r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
            n[i - 1] = arguments[i];
        if (t && t.gdprApplies)
            if (2 === t.apiVersion) {
                var a = _.b.getCurrentBidder()
                  , o = gi(a)
                  , d = vi(ii, t, a, o);
                d ? e.call.apply(e, [this].concat(n)) : (Object(w.logWarn)("User sync not allowed for " + a),
                pi.push(a))
            } else
                e.call.apply(e, [this].concat(n));
        else
            e.call.apply(e, [this].concat(n))
    }
    function Oi(e, t, r) {
        if (r && r.gdprApplies)
            if (2 === r.apiVersion) {
                var n = t.map((function(e) {
                    var t = gi(e.submodule)
                      , n = e.submodule.name;
                    if (vi(ii, r, n, t))
                        return e;
                    Object(w.logWarn)("User denied permission to fetch user id for " + n + " User id module"),
                    pi.push(n)
                }
                )).filter((function(e) {
                    return e
                }
                ));
                e.call(this, n, Object(I.default)({}, r, {
                    hasValidated: !0
                }))
            } else
                e.call(this, t, r);
        else
            e.call(this, t, r)
    }
    function ji(e, t) {
        for (var r = Le.getConsentData(), n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
            i[a - 2] = arguments[a];
        r && r.gdprApplies && 2 === r.apiVersion ? (t.forEach((function(e) {
            e.bids = e.bids.filter((function(e) {
                var t = e.bidder
                  , n = gi(t);
                if (Object(C.c)(li, t))
                    return !1;
                var i = !!vi(ai, r, t, n);
                return i || (Object(w.logWarn)("TCF2 blocked auction for " + t),
                li.push(t)),
                i
            }
            ))
        }
        )),
        e.call.apply(e, [this, t].concat(i))) : e.call.apply(e, [this, t].concat(i))
    }
    function Ii(e, t) {
        var r = Le.getConsentData();
        r && r.gdprApplies && 2 === r.apiVersion ? (Object(w.isArray)(t) || (t = [t]),
        t = t.filter((function(e) {
            var t = e.provider
              , n = gi(t)
              , i = !!vi(oi, r, t, n);
            return i || (fi.push(t),
            Object(w.logWarn)("TCF2 blocked analytics adapter " + e.provider)),
            i
        }
        )),
        e.call(this, t)) : e.call(this, t)
    }
    S.on(Q.EVENTS.AUCTION_END, (function() {
        var e = function(e) {
            return e.filter((function(t, r) {
                return null !== t && e.indexOf(t) === r
            }
            ))
        }
          , t = {
            storageBlocked: e(pi),
            biddersBlocked: e(li),
            analyticsBlocked: e(fi)
        };
        S.emit(Q.EVENTS.TCF2_ENFORCEMENT, t)
    }
    ));
    var Ei = function(e) {
        return e.purpose === si.purpose1.name
    }
      , wi = function(e) {
        return e.purpose === si.purpose2.name
    }
      , xi = function(e) {
        return e.purpose === si.purpose7.name
    };
    _.b.getConfig("consentManagement", (function(e) {
        return function(e) {
            var t = Object(x.a)(e, "gdpr.rules");
            t ? di = t : (Object(w.logWarn)("TCF2: enforcing P1 and P2 by default"),
            di = ui),
            ii = Object(C.b)(di, Ei),
            ai = Object(C.b)(di, wi),
            oi = Object(C.b)(di, xi),
            ii || (ii = ui[0]),
            ai || (ai = ui[1]),
            ii && !bi && (bi = !0,
            re.before(yi, 49),
            we.before(hi, 48),
            Y("validateGdprEnforcement").before(Oi, 47)),
            ai && Y("makeBidRequests").before(ji),
            oi && Y("enableAnalyticsCb").before(Ii)
        }(e.consentManagement)
    }
    )),
    window.jwpb.installedModules.push("gdprEnforcement");
    var Si, Ci = ie({
        gvlid: 887,
        moduleName: "uid2"
    }), Ti = (Si = "UID2: ",
    function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        w.logInfo.apply(void 0, [Si + " "].concat(t))
    }
    );
    J("userId", {
        name: "uid2",
        gvlid: 887,
        decode: function(e) {
            return e ? function(e) {
                var t = {};
                if (e) {
                    var r = {
                        id: e
                    };
                    return t.uid2 = r,
                    Ti("Decoded value " + JSON.stringify(t)),
                    t
                }
            }(e) : void 0
        },
        getId: function(e, t) {
            Ti("Creating UID 2.0");
            var r = (Ci.cookiesAreEnabled() ? Ci.getCookie("__uid2_advertising_token") : null) || (Ci.localStorageIsEnabled() ? Ci.getDataFromLocalStorage("__uid2_advertising_token") : null);
            return Ti("The advertising token: " + r),
            {
                id: r
            }
        }
    }),
    window.jwpb.installedModules.push("uid2IdSystem");
    var _i = E();
    var Ai, ki, Pi = {
        env: "vp",
        gdfp_req: 1,
        output: "vast",
        unviewed_position_start: 1
    }, Ri = {};
    function Ui(e, t, r) {
        if (!_.b.getConfig("cache.url"))
            if (Object(x.a)(t, r + ".description_url"))
                Object(w.logError)("input cannnot contain description_url");
            else {
                var n = e && e.vastUrl;
                if (n)
                    return encodeURIComponent(n)
            }
    }
    function Di(e, t, r) {
        var n, i = e && e.adserverTargeting || {}, a = {}, o = t && t.adUnit;
        if (o) {
            var d = Wt.getAllTargeting(o.code);
            a = d ? d[o.code] : {}
        }
        var s = Object(I.default)({}, {
            hb_uuid: e && e.videoCacheKey
        }, {
            hb_cache_id: e && e.videoCacheKey
        }, a, i);
        S.emit(Q.EVENTS.SET_TARGETING, ((n = {})[o.code] = s,
        n));
        var c = Object(x.a)(t, "params.cust_params")
          , u = Object(I.default)({}, s, c)
          , p = encodeURIComponent(Object(w.formatQS)(u));
        return r && (p = r + "%26" + p),
        p
    }
    _.b.getConfig("brandCategoryTranslation.translationFile") && Y("registerAdserver").before((function(e) {
        e.call(this, "dfp")
    }
    )),
    function(e, t) {
        _i.adServers = _i.adServers || {},
        _i.adServers[e] = _i.adServers[e] || {},
        Object.keys(t).forEach((function(r) {
            _i.adServers[e][r] ? Object(w.logWarn)("Attempting to add an already registered function property " + r + " for AdServer " + e + ".") : _i.adServers[e][r] = t[r]
        }
        ))
    }("dfp", {
        buildVideoUrl: function(e) {
            if (e.params || e.url) {
                var t = e.adUnit
                  , r = e.bid || Wt.getWinningBids(t.code)[0]
                  , n = {};
                if (e.url && (n = Object(w.parseUrl)(e.url, {
                    noDecodeWholeURL: !0
                }),
                Object(w.isEmpty)(e.params)))
                    return function(e, t, r) {
                        var n = Ui(t, e, "search");
                        n && (e.search.description_url = n);
                        return e.search.cust_params = Di(t, r, e.search.cust_params),
                        Object(w.buildUrl)(e)
                    }(n, r, e);
                var i = {
                    correlator: Date.now(),
                    sz: Object(w.parseSizesInput)(Object(x.a)(t, "mediaTypes.video.playerSize")).join("|"),
                    url: encodeURIComponent(location.href)
                }
                  , a = n.search
                  , o = a && a.sz;
                o && (i.sz = o + "|" + i.sz);
                var d = Di(r, e, a && a.cust_params)
                  , s = Object(I.default)({}, Pi, n.search, i, e.params, {
                    cust_params: d
                })
                  , c = Ui(r, e, "params");
                c && (s.description_url = c);
                var u = Le.getConsentData();
                u && ("boolean" == typeof u.gdprApplies && (s.gdpr = Number(u.gdprApplies)),
                u.consentString && (s.gdpr_consent = u.consentString),
                u.addtlConsent && (s.addtl_consent = u.addtlConsent));
                var p = He.getConsentData();
                if (p && (s.us_privacy = p),
                !s.ppid) {
                    var l = jn();
                    null != l && (s.ppid = l)
                }
                return Object(w.buildUrl)(Object(I.default)({
                    protocol: "https",
                    host: "securepubads.g.doubleclick.net",
                    pathname: "/gampad/ads"
                }, n, {
                    search: s
                }))
            }
            Object(w.logError)("A params object or a url is required to use jwpb.adServers.dfp.buildVideoUrl")
        },
        buildAdpodVideoUrl: function(e) {
            var t = void 0 === e ? {} : e
              , r = t.code
              , n = t.params
              , i = t.callback;
            if (n && i) {
                var a = {
                    correlator: Date.now(),
                    sz: function(e) {
                        var t = ht.getAdUnits().filter((function(t) {
                            return t.code === e
                        }
                        ))
                          , r = Object(x.a)(t[0], "mediaTypes.video.playerSize");
                        return Object(w.parseSizesInput)(r).join("|")
                    }(r),
                    url: encodeURIComponent(location.href)
                };
                Ri.getTargeting({
                    codes: [r],
                    callback: function(e, t) {
                        var o;
                        if (e)
                            return void i(e, null);
                        var d = ((o = {})[Ri.TARGETING_KEY_PB_CAT_DUR] = void 0,
                        o[Ri.TARGETING_KEY_CACHE_ID] = void 0,
                        o)
                          , s = {};
                        t[r] && (s = t[r].reduce((function(e, t) {
                            return Object.keys(t)[0] === Ri.TARGETING_KEY_PB_CAT_DUR ? e[Ri.TARGETING_KEY_PB_CAT_DUR] = void 0 !== e[Ri.TARGETING_KEY_PB_CAT_DUR] ? e[Ri.TARGETING_KEY_PB_CAT_DUR] + "," + t[Ri.TARGETING_KEY_PB_CAT_DUR] : t[Ri.TARGETING_KEY_PB_CAT_DUR] : Object.keys(t)[0] === Ri.TARGETING_KEY_CACHE_ID && (e[Ri.TARGETING_KEY_CACHE_ID] = t[Ri.TARGETING_KEY_CACHE_ID]),
                            e
                        }
                        ), d));
                        var c = encodeURIComponent(Object(w.formatQS)(s))
                          , u = Object(I.default)({}, Pi, a, n, {
                            cust_params: c
                        })
                          , p = Le.getConsentData();
                        p && ("boolean" == typeof p.gdprApplies && (u.gdpr = Number(p.gdprApplies)),
                        p.consentString && (u.gdpr_consent = p.consentString),
                        p.addtlConsent && (u.addtl_consent = p.addtlConsent));
                        var l = He.getConsentData();
                        l && (u.us_privacy = l);
                        var f = Object(w.buildUrl)({
                            protocol: "https",
                            host: "securepubads.g.doubleclick.net",
                            pathname: "/gampad/ads",
                            search: u
                        });
                        i(null, f)
                    }
                })
            } else
                Object(w.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl")
        },
        getAdpodTargeting: function(e) {
            return Ri.getTargeting(e)
        }
    }),
    J("adpod", Ri),
    window.jwpb.installedModules.push("dfpAdServerVideo");
    var Bi, Ni = ["video/mp4", "video/ogg", "video/webm", "video/aac", "application/vnd.apple.mpegurl"], qi = function(e) {
        return "https://vpb-" + e + ".jwplayer.com/"
    }, Mi = qi("cache") + "cache", zi = qi("server"), Fi = {
        adtelligent: "Adtelligent",
        appnexus: "AppNexus",
        districtm: "DistrictM",
        emx: "EMX",
        mediagrid: "MediaGrid",
        medianet: "MediaNet",
        indexexchange: "IndexExchange",
        jwdemand: "jwdemand",
        onevideo: "OneVideo",
        openx: "OpenX",
        pubmatic: "PubMatic",
        rubicon: "Rubicon",
        smartadserver: "SmartAdServer",
        sonobi: "Sonobi",
        spotx: "SpotX",
        synacormedia: "SynacorMedia",
        unruly: "Unruly",
        videobyte: "VideoByte",
        yahoossp: "YahooSSP"
    }, Wi = ["Adtelligent", "AppNexus", "DistrictM", "EMX", "IndexExchange", "jwdemand", "MediaNet", "MediaGrid", "OneVideo", "OpenX", "PubMatic", "Rubicon", "SmartAdServer", "Sonobi", "SpotX", "SynacorMedia", "Unruly", "VideoByte", "YahooSSP"], Vi = ((Ai = {})[["dfp"]] = Wi,
    Ai[["jwp"]] = Wi,
    Ai[["jwpdfp"]] = Wi,
    Ai[["jwpspotx"]] = ["SpotX"],
    Ai), Gi = ["sonobi", "smartadserver", "videobyte", "openx", "unruly"], Li = 2, Hi = 7, Ki = 2, Yi = 3, Xi = 5, Ji = 6, Qi = 7, $i = 8, Zi = 1, ea = 2, ta = 3, ra = ((ki = {})[["noBid"]] = 0,
    ki[["bid"]] = 1,
    ki[["timeout"]] = 2,
    ki[["invalid"]] = 3,
    ki[["abort"]] = 4,
    ki[["error"]] = 5,
    ki[["blocked"]] = 6,
    ki), na = ["", 1, 2], ia = {
        default: (Bi = 0,
        function() {
            return "ghb" + na[Bi++ % na.length] + ".adtelligent.com"
        }
        ),
        navelix: function() {
            return "ghb.hb.navelix.com"
        },
        appaloosa: function() {
            return "ghb.hb.appaloosa.media"
        },
        onefiftytwomedia: function() {
            return "ghb.ads.152media.com"
        },
        bidsxchange: function() {
            return "ghb.hbd.bidsxchange.com"
        },
        streamkey: function() {
            return "ghb.hb.streamkey.net"
        },
        janet: function() {
            return "ghb.bidder.jmgads.com"
        },
        pgam: function() {
            return "ghb.pgamssp.com"
        }
    }, aa = {}, oa = {
        code: "adtelligent",
        gvlid: 410,
        aliases: ["onefiftytwomedia", "selectmedia", "appaloosa", "bidsxchange", "streamkey", "janet", {
            code: "navelix",
            gvlid: 380
        }, "pgam"],
        supportedMediaTypes: [ge, ve],
        isBidRequestValid: function(e) {
            return !!Object(x.a)(e, "params.aid")
        },
        getUserSyncs: function(e, t) {
            var r = [];
            function n(t) {
                var n = t.cookieURLs
                  , i = t.cookieURLSTypes || [];
                Array.isArray(n) && n.forEach((function(t, n) {
                    var a = i[n] || "image";
                    !e.pixelEnabled && "image" === a || !e.iframeEnabled && "iframe" === a || aa[t] || (aa[t] = !0,
                    r.push({
                        type: a,
                        url: t
                    }))
                }
                ))
            }
            return (e.pixelEnabled || e.iframeEnabled) && Object(w.isArray)(t) && t.forEach((function(e) {
                e.body && (Object(w.isArray)(e.body) ? e.body.forEach((function(e) {
                    n(e)
                }
                )) : n(e.body))
            }
            )),
            r
        },
        buildRequests: function(e, t) {
            var r = _.b.getConfig(t.bidderCode)
              , n = Object(x.a)(r, "chunkSize", 10)
              , i = function(e, t) {
                var r = {
                    Domain: Object(x.a)(t, "refererInfo.referer")
                };
                !0 === _.b.getConfig("coppa") && (r.Coppa = 1);
                Object(x.a)(t, "gdprConsent.gdprApplies") && (r.GDPR = 1,
                r.GDPRConsent = Object(x.a)(t, "gdprConsent.consentString"));
                Object(x.a)(t, "uspConsent") && (r.USP = Object(x.a)(t, "uspConsent"));
                Object(x.a)(e[0], "schain") && (r.Schain = Object(x.a)(e[0], "schain"));
                Object(x.a)(e[0], "userId") && (r.UserIds = Object(x.a)(e[0], "userId"));
                Object(x.a)(e[0], "userIdAsEids") && (r.UserEids = Object(x.a)(e[0], "userIdAsEids"));
                window.adtDmp && window.adtDmp.ready && (r.DMPId = window.adtDmp.getUID());
                for (var n = [], i = 0, a = e.length; i < a; i++) {
                    var o = sa(e[i]);
                    n.push(o)
                }
                return {
                    tag: r,
                    bids: n
                }
            }(e, t)
              , a = i.tag
              , o = i.bids
              , d = Object(w.chunk)(o, n);
            return Object(w._map)(d, (function(e) {
                return {
                    data: Object(I.default)({}, a, {
                        BidRequests: e
                    }),
                    adapterRequest: t,
                    method: "POST",
                    url: (r = t.bidderCode,
                    n = r.split("_")[0],
                    "https://" + (ia[n] || ia.default)() + "/v2/auction/")
                };
                var r, n
            }
            ))
        },
        interpretResponse: function(e, t) {
            var r = t.adapterRequest;
            e = e.body;
            var n = [];
            return Object(w.isArray)(e) ? (e.forEach((function(e) {
                n = Object(w.flatten)(n, da(e, r))
            }
            )),
            n) : da(e, r)
        },
        transformBidParams: function(e) {
            return Object(w.convertTypes)({
                aid: "number"
            }, e)
        }
    };
    function da(e, t) {
        var r = !e || !Object(w.isArray)(e.bids)
          , n = [];
        return r || e.bids.forEach((function(e) {
            var r = Object(C.b)(t.bids, (function(t) {
                return t.bidId === e.requestId
            }
            ));
            if (0 !== e.cpm && void 0 !== r) {
                var i = function(e, t) {
                    var r = (a = t,
                    Object(x.a)(a, "mediaTypes.video") ? ge : ve)
                      , n = Object(x.a)(t, "mediaTypes.video.context")
                      , i = {
                        requestId: e.requestId,
                        creativeId: e.cmpId,
                        height: e.height,
                        currency: e.cur,
                        width: e.width,
                        cpm: e.cpm,
                        netRevenue: !0,
                        mediaType: r,
                        ttl: 300,
                        meta: {
                            advertiserDomains: e.adomain || []
                        }
                    };
                    var a;
                    if (r === ve)
                        return Object(I.default)(i, {
                            ad: e.ad,
                            adUrl: e.adUrl
                        });
                    n === ye && Object(I.default)(i, {
                        meta: {
                            primaryCatId: e.primaryCatId
                        },
                        video: {
                            context: ye,
                            durationSeconds: e.durationSeconds
                        }
                    });
                    Object(I.default)(i, {
                        vastUrl: e.vastUrl
                    }),
                    "outstream" === n && Object(I.default)(i, {
                        adResponse: e,
                        renderer: ca(e.requestId, t.params)
                    });
                    return i
                }(e, r);
                n.push(i)
            }
        }
        )),
        n
    }
    function sa(e) {
        var t = Object(x.a)(e, "mediaTypes.video") ? ge : "display"
          , r = t === ge ? Object(x.a)(e, "mediaTypes.video.playerSize") : Object(x.a)(e, "mediaTypes.banner.sizes")
          , n = {
            CallbackId: e.bidId,
            Aid: e.params.aid,
            AdType: t,
            Sizes: Object(w.parseSizesInput)(r).join(",")
        };
        (n.PlacementId = e.adUnitCode,
        e.params.iframe && (n.AdmType = "iframe"),
        e.params.vpb_placement_id && (n.PlacementId = e.params.vpb_placement_id),
        t === ge) && (Object(x.a)(e, "mediaTypes.video.context") === ye && (n.Adpod = Object(x.a)(e, "mediaTypes.video")));
        return n
    }
    function ca(e, t) {
        var r = N.install({
            id: e,
            url: "https://player.adtelligent.com/outstream-unit/2.01/outstream.min.js",
            config: t.outstream || {},
            loaded: !1
        });
        return r.setRender(ua),
        r
    }
    function ua(e) {
        e.renderer.push((function() {
            var t = Object(I.default)({}, e.renderer.getConfig(), {
                width: e.width,
                height: e.height,
                vastUrl: e.vastUrl,
                elId: e.adUnitCode
            });
            window.VOutstreamAPI.initOutstreams([t])
        }
        ))
    }
    je(oa),
    window.jwpb.installedModules.push("adtelligentBidAdapter");
    var pa = oa.code;
    function la(e, t) {
        return {
            bidder: pa,
            params: {
                aid: parseInt(t.id)
            }
        }
    }
    function fa(e) {
        return !!e && void 0 !== e.id
    }
    var ba = ["id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset"]
      , ma = ["minduration", "maxduration", "skip", "skipafter", "playbackmethod", "api"]
      , ga = ["age", "externalUid", "segments", "gender", "dnt", "language"]
      , va = ["geo", "device_id"]
      , ya = ["enabled", "dongle", "member_id", "debug_timeout"]
      , ha = {
        playback_method: {
            unknown: 0,
            auto_play_sound_on: 1,
            auto_play_sound_off: 2,
            click_to_play: 3,
            mouse_over: 4,
            auto_play_sound_unknown: 5
        },
        context: {
            unknown: 0,
            pre_roll: 1,
            mid_roll: 2,
            post_roll: 3,
            outstream: 4,
            "in-banner": 5
        }
    }
      , Oa = {
        body: "description",
        body2: "desc2",
        cta: "ctatext",
        image: {
            serverName: "main_image",
            requiredParams: {
                required: !0
            }
        },
        icon: {
            serverName: "icon",
            requiredParams: {
                required: !0
            }
        },
        sponsoredBy: "sponsored_by",
        privacyLink: "privacy_link",
        salePrice: "saleprice",
        displayUrl: "displayurl"
    }
      , ja = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/
      , Ia = ie({
        gvlid: 32,
        bidderCode: "appnexus"
    })
      , Ea = {
        code: "appnexus",
        gvlid: 32,
        aliases: [{
            code: "appnexusAst",
            gvlid: 32
        }, {
            code: "brealtime"
        }, {
            code: "emxdigital",
            gvlid: 183
        }, {
            code: "pagescience"
        }, {
            code: "defymedia"
        }, {
            code: "gourmetads"
        }, {
            code: "matomy"
        }, {
            code: "featureforward"
        }, {
            code: "oftmedia"
        }, {
            code: "districtm",
            gvlid: 144
        }, {
            code: "adasta"
        }, {
            code: "beintoo",
            gvlid: 618
        }],
        supportedMediaTypes: [ve, ge, me],
        isBidRequestValid: function(e) {
            return !!(e.params.placementId || e.params.member && e.params.invCode)
        },
        buildRequests: function(e, t) {
            var r = e.map(Ta)
              , n = Object(C.b)(e, Aa)
              , i = {};
            !0 === _.b.getConfig("coppa") && (i = {
                coppa: !0
            }),
            n && Object.keys(n.params.user).filter((function(e) {
                return Object(C.c)(ga, e)
            }
            )).forEach((function(e) {
                var t = Object(w.convertCamelToUnderscore)(e);
                if ("segments" === e && Object(w.isArray)(n.params.user[e])) {
                    var r = [];
                    n.params.user[e].forEach((function(e) {
                        Object(w.isNumber)(e) ? r.push({
                            id: e
                        }) : Object(w.isPlainObject)(e) && r.push(e)
                    }
                    )),
                    i[t] = r
                } else
                    "segments" !== e && (i[t] = n.params.user[e])
            }
            ));
            var a, o = Object(C.b)(e, Pa);
            o && o.params && o.params.app && (a = {},
            Object.keys(o.params.app).filter((function(e) {
                return Object(C.c)(va, e)
            }
            )).forEach((function(e) {
                return a[e] = o.params.app[e]
            }
            )));
            var d, s = Object(C.b)(e, Ra);
            s && s.params && o.params.app && o.params.app.id && (d = {
                appid: s.params.app.id
            });
            var c = {}
              , u = {}
              , p = Ia.getCookie("apn_prebid_debug") || null;
            if (p)
                try {
                    c = JSON.parse(p)
                } catch (e) {
                    Object(w.logError)("AppNexus Debug Auction Cookie Error:\n\n" + e)
                }
            else {
                var l = Object(C.b)(e, Ua);
                l && l.debug && (c = l.debug)
            }
            c && c.enabled && Object.keys(c).filter((function(e) {
                return Object(C.c)(ya, e)
            }
            )).forEach((function(e) {
                u[e] = c[e]
            }
            ));
            var f = Object(C.b)(e, ka)
              , b = f ? parseInt(f.params.member, 10) : 0
              , m = e[0].schain
              , g = Object(C.b)(e, Ba)
              , v = {
                tags: [].concat(r),
                user: i,
                sdk: {
                    source: "pbjs",
                    version: "6.29.0"
                },
                schain: m
            };
            g && (v.iab_support = {
                omidpn: "Appnexus",
                omidpv: "6.29.0"
            }),
            b > 0 && (v.member_id = b),
            o && (v.device = a),
            s && (v.app = d);
            var y = _.b.getConfig("appnexusAuctionKeywords");
            if (Object(w.isPlainObject)(y)) {
                var h = Object(w.transformBidderParamKeywords)(y);
                h.length > 0 && h.forEach(xa),
                v.keywords = h
            }
            if (_.b.getConfig("adpod.brandCategoryExclusion") && (v.brand_category_uniqueness = !0),
            u.enabled && (v.debug = u,
            Object(w.logInfo)("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))),
            t && t.gdprConsent && (v.gdpr_consent = {
                consent_string: t.gdprConsent.consentString,
                consent_required: t.gdprConsent.gdprApplies
            },
            t.gdprConsent.addtlConsent && -1 !== t.gdprConsent.addtlConsent.indexOf("~"))) {
                var O = t.gdprConsent.addtlConsent
                  , j = O.substring(O.indexOf("~") + 1);
                v.gdpr_consent.addtl_consent = j.split(".").map((function(e) {
                    return parseInt(e, 10)
                }
                ))
            }
            if (t && t.uspConsent && (v.us_privacy = t.uspConsent),
            t && t.refererInfo) {
                var I = {
                    rd_ref: encodeURIComponent(t.refererInfo.referer),
                    rd_top: t.refererInfo.reachedTop,
                    rd_ifs: t.refererInfo.numIframes,
                    rd_stk: t.refererInfo.stack.map((function(e) {
                        return encodeURIComponent(e)
                    }
                    )).join(",")
                }
                  , E = _.b.getConfig("pageUrl");
                Object(w.isStr)(E) && "" !== E && (I.rd_can = E),
                v.referrer_detection = I
            }
            if (Object(C.b)(e, Da) && e.filter(Da).forEach((function(e) {
                var t = function(e, t) {
                    var r = t.mediaTypes.video
                      , n = r.durationRangeSec
                      , i = r.requireExactDuration
                      , a = function(e) {
                        var t = e.adPodDurationSec
                          , r = e.durationRangeSec
                          , n = e.requireExactDuration
                          , i = Object(w.getMinValueFromArray)(r)
                          , a = Math.floor(t / i);
                        return n ? Math.max(a, r.length) : a
                    }(t.mediaTypes.video)
                      , o = Object(w.getMaxValueFromArray)(n)
                      , d = e.filter((function(e) {
                        return e.uuid === t.bidId
                    }
                    ))
                      , s = w.fill.apply(void 0, d.concat([a]));
                    if (i) {
                        var c = Math.ceil(a / n.length)
                          , u = Object(w.chunk)(s, c);
                        n.forEach((function(e, t) {
                            u[t].map((function(t) {
                                Na(t, "minduration", e),
                                Na(t, "maxduration", e)
                            }
                            ))
                        }
                        ))
                    } else
                        s.map((function(e) {
                            return Na(e, "maxduration", o)
                        }
                        ));
                    return s
                }(r, e)
                  , n = v.tags.filter((function(t) {
                    return t.uuid !== e.bidId
                }
                ));
                v.tags = [].concat(n, t)
            }
            )),
            e[0].userId) {
                var S = [];
                za(S, Object(x.a)(e[0], "userId.flocId.id"), "chrome.com", null),
                za(S, Object(x.a)(e[0], "userId.criteoId"), "criteo.com", null),
                za(S, Object(x.a)(e[0], "userId.netId"), "netid.de", null),
                za(S, Object(x.a)(e[0], "userId.idl_env"), "liveramp.com", null),
                za(S, Object(x.a)(e[0], "userId.tdid"), "adserver.org", "TDID"),
                za(S, Object(x.a)(e[0], "userId.uid2.id"), "uidapi.com", "UID2"),
                e[0].userId.pubProvidedId && e[0].userId.pubProvidedId.forEach((function(e) {
                    e.uids.forEach((function(t) {
                        S.push({
                            source: e.source,
                            id: t.id
                        })
                    }
                    ))
                }
                )),
                S.length && (v.eids = S)
            }
            return r[0].publisher_id && (v.publisher_id = r[0].publisher_id),
            function(e, t) {
                var r = []
                  , n = {
                    withCredentials: !0
                }
                  , i = "https://ib.adnxs.com/ut/v3/prebid";
                Ca(t) || (i = "https://ib.adnxs-simple.com/ut/v3/prebid");
                "TRUE" !== Object(w.getParameterByName)("apn_test").toUpperCase() && !0 !== _.b.getConfig("apn_test") || (n.customHeaders = {
                    "X-Is-Test": 1
                });
                if (e.tags.length > 15) {
                    var a = Object(w.deepClone)(e);
                    Object(w.chunk)(e.tags, 15).forEach((function(e) {
                        a.tags = e;
                        var o = JSON.stringify(a);
                        r.push({
                            method: "POST",
                            url: i,
                            data: o,
                            bidderRequest: t,
                            options: n
                        })
                    }
                    ))
                } else {
                    var o = JSON.stringify(e);
                    r = {
                        method: "POST",
                        url: i,
                        data: o,
                        bidderRequest: t,
                        options: n
                    }
                }
                return r
            }(v, t)
        },
        interpretResponse: function(e, t) {
            var r = this
              , n = t.bidderRequest;
            e = e.body;
            var i = [];
            if (!e || e.error) {
                var a = "in response for " + n.bidderCode + " adapter";
                return e && e.error && (a += ": " + e.error),
                Object(w.logError)(a),
                i
            }
            if (e.tags && e.tags.forEach((function(e) {
                var t, a = (t = e) && t.ads && t.ads.length && Object(C.b)(t.ads, (function(e) {
                    return e.rtb
                }
                ));
                if (a && ((!0 === $.get(n.bidderCode, "allowZeroCpmBids") ? a.cpm >= 0 : a.cpm > 0) && Object(C.c)(r.supportedMediaTypes, a.ad_type))) {
                    var o = function(e, t, r) {
                        var n = Object(w.getBidRequest)(e.uuid, [r])
                          , i = {
                            requestId: e.uuid,
                            cpm: t.cpm,
                            creativeId: t.creative_id,
                            dealId: t.deal_id,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 300,
                            adUnitCode: n.adUnitCode,
                            appnexus: {
                                buyerMemberId: t.buyer_member_id,
                                dealPriority: t.deal_priority,
                                dealCode: t.deal_code
                            }
                        };
                        t.adomain && (i.meta = Object(I.default)({}, i.meta, {
                            advertiserDomains: []
                        }));
                        t.advertiser_id && (i.meta = Object(I.default)({}, i.meta, {
                            advertiserId: t.advertiser_id
                        }));
                        t.buyer_member_id && (i.meta = Object(I.default)({}, i.meta, {
                            dchain: function(e) {
                                return {
                                    ver: "1.0",
                                    complete: 0,
                                    nodes: [{
                                        bsid: e.buyer_member_id.toString()
                                    }]
                                }
                            }(t)
                        }));
                        t.brand_id && (i.meta = Object(I.default)({}, i.meta, {
                            brandId: t.brand_id
                        }));
                        if (t.rtb.video) {
                            switch (Object(I.default)(i, {
                                width: t.rtb.video.player_width,
                                height: t.rtb.video.player_height,
                                vastImpUrl: t.notify_url,
                                ttl: 3600
                            }),
                            Object(x.a)(n, "mediaTypes.video.context")) {
                            case ye:
                                var a = function(e, t) {
                                    var r = Qe.getBidAdapter(e);
                                    if (r.getSpec().getMappingFileInfo) {
                                        var n = r.getSpec().getMappingFileInfo()
                                          , i = n.localStorageKey ? n.localStorageKey : r.getBidderCode()
                                          , a = he.getDataFromLocalStorage(i);
                                        if (a) {
                                            try {
                                                a = JSON.parse(a)
                                            } catch (t) {
                                                Object(w.logError)("Failed to parse " + e + " mapping data stored in local storage")
                                            }
                                            return a.mapping[t] ? a.mapping[t] : null
                                        }
                                    }
                                }(n.bidder, t.brand_category_id);
                                i.meta = Object(I.default)({}, i.meta, {
                                    primaryCatId: a
                                });
                                var o = t.deal_priority;
                                i.video = {
                                    context: ye,
                                    durationSeconds: Math.floor(t.rtb.video.duration_ms / 1e3),
                                    dealTier: o
                                },
                                i.vastUrl = t.rtb.video.asset_url;
                                break;
                            case "outstream":
                                if (i.adResponse = e,
                                i.adResponse.ad = i.adResponse.ads[0],
                                i.adResponse.ad.video = i.adResponse.ad.rtb.video,
                                i.vastXml = t.rtb.video.content,
                                t.renderer_url) {
                                    var d = Object(C.b)(r.bids, (function(t) {
                                        return t.bidId === e.uuid
                                    }
                                    ))
                                      , s = Object(x.a)(d, "mediaTypes.video.renderer.options");
                                    s || (s = Object(x.a)(d, "renderer.options")),
                                    i.renderer = function(e, t, r) {
                                        void 0 === r && (r = {});
                                        var n = N.install({
                                            id: t.renderer_id,
                                            url: t.renderer_url,
                                            config: r,
                                            loaded: !1,
                                            adUnitCode: e
                                        });
                                        try {
                                            n.setRender(qa)
                                        } catch (e) {
                                            Object(w.logWarn)("Prebid Error calling setRender on renderer", e)
                                        }
                                        return n.setEventHandlers({
                                            impression: function() {
                                                return Object(w.logMessage)("AppNexus outstream video impression event")
                                            },
                                            loaded: function() {
                                                return Object(w.logMessage)("AppNexus outstream video loaded event")
                                            },
                                            ended: function() {
                                                Object(w.logMessage)("AppNexus outstream renderer video event"),
                                                document.querySelector("#" + e).style.display = "none"
                                            }
                                        }),
                                        n
                                    }(i.adUnitCode, t, s)
                                }
                                break;
                            case "instream":
                                i.vastUrl = t.notify_url + "&redir=" + encodeURIComponent(t.rtb.video.asset_url)
                            }
                        } else if (t.rtb[me]) {
                            var c = t.rtb[me]
                              , u = t.viewability.config.replace("src=", "data-src=")
                              , p = c.javascript_trackers;
                            null == p ? p = u : Object(w.isStr)(p) ? p = [p, u] : p.push(u),
                            i[me] = {
                                title: c.title,
                                body: c.desc,
                                body2: c.desc2,
                                cta: c.ctatext,
                                rating: c.rating,
                                sponsoredBy: c.sponsored,
                                privacyLink: c.privacy_link,
                                address: c.address,
                                downloads: c.downloads,
                                likes: c.likes,
                                phone: c.phone,
                                price: c.price,
                                salePrice: c.saleprice,
                                clickUrl: c.link.url,
                                displayUrl: c.displayurl,
                                clickTrackers: c.link.click_trackers,
                                impressionTrackers: c.impression_trackers,
                                javascriptTrackers: p
                            },
                            c.main_img && (i.native.image = {
                                url: c.main_img.url,
                                height: c.main_img.height,
                                width: c.main_img.width
                            }),
                            c.icon && (i.native.icon = {
                                url: c.icon.url,
                                height: c.icon.height,
                                width: c.icon.width
                            })
                        } else {
                            Object(I.default)(i, {
                                width: t.rtb.banner.width,
                                height: t.rtb.banner.height,
                                ad: t.rtb.banner.content
                            });
                            try {
                                if (t.rtb.trackers)
                                    for (var l = 0; l < t.rtb.trackers[0].impression_urls.length; l++) {
                                        var f = t.rtb.trackers[0].impression_urls[l]
                                          , b = Object(w.createTrackPixelHtml)(f);
                                        i.ad += b
                                    }
                            } catch (e) {
                                Object(w.logError)("Error appending tracking pixel", e)
                            }
                        }
                        return i
                    }(e, a, n);
                    o.mediaType = function(e) {
                        var t = e.ad_type;
                        return t === ge ? ge : t === me ? me : ve
                    }(a),
                    i.push(o)
                }
            }
            )),
            e.debug && e.debug.debug_info) {
                var o = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                o = o.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""),
                Object(w.logMessage)("https://console.appnexus.com/docs/understanding-the-debug-auction"),
                Object(w.logMessage)(o)
            }
            return i
        },
        getMappingFileInfo: function() {
            return {
                url: "https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json",
                refreshInDays: 2
            }
        },
        getUserSyncs: function(e, t, r) {
            if (e.iframeEnabled && Ca({
                gdprConsent: r
            }))
                return [{
                    type: "iframe",
                    url: "https://acdn.adnxs.com/dmp/async_usersync.html"
                }]
        },
        transformBidParams: function(e, t, r, n) {
            var i = w.transformBidderParamKeywords;
            if (!0 === t) {
                var a = null
                  , o = _.b.getConfig("s2sConfig");
                Object(w.isPlainObject)(o) ? a = Object(x.a)(o, "endpoint.p1Consent") : Object(w.isArray)(o) && o.forEach((function(e) {
                    Object(C.c)(e.bidders, r.bids[0].bidder) && (a = Object(x.a)(e, "endpoint.p1Consent"))
                }
                )),
                a && a.match("/openrtb2/prebid") && (i = Fa)
            }
            return e = Object(w.convertTypes)({
                member: "string",
                invCode: "string",
                placementId: "number",
                keywords: i,
                publisherId: "number"
            }, e),
            t && (e.use_pmt_rule = "boolean" == typeof e.usePaymentRule && e.usePaymentRule,
            e.usePaymentRule && delete e.usePaymentRule,
            wa(e.keywords) && e.keywords.forEach(xa),
            Object.keys(e).forEach((function(t) {
                var r = Object(w.convertCamelToUnderscore)(t);
                r !== t && (e[r] = e[t],
                delete e[t])
            }
            ))),
            e
        },
        onBidWon: function(e) {
            e.native && function(e) {
                var t = function(e) {
                    var t;
                    if (Object(w.isStr)(e) && Sa(e))
                        t = e;
                    else if (Object(w.isArray)(e))
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            Sa(n) && (t = n)
                        }
                    return t
                }(e.native.javascriptTrackers);
                if (t)
                    for (var r = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, n = function(e) {
                        var t = e.indexOf('src="') + 5
                          , r = e.indexOf('"', t);
                        return e.substring(t, r)
                    }(t), i = n.replace("dom_id=%native_dom_id%", r), a = document.getElementsByTagName("iframe"), o = !1, d = 0; d < a.length && !o; d++) {
                        var s = a[d];
                        try {
                            var c = s.contentDocument || s.contentWindow.document;
                            if (c)
                                for (var u = c.getElementsByTagName("script"), p = 0; p < u.length && !o; p++) {
                                    var l = u[p];
                                    l.getAttribute("data-src") == n && (l.setAttribute("src", i),
                                    l.setAttribute("data-src", ""),
                                    l.removeAttribute && l.removeAttribute("data-src"),
                                    o = !0)
                                }
                        } catch (e) {
                            if (!(e instanceof DOMException && "SecurityError" === e.name))
                                throw e
                        }
                    }
            }(e)
        }
    };
    function wa(e) {
        return !!(Object(w.isArray)(e) && e.length > 0)
    }
    function xa(e) {
        wa(e.value) && "" === e.value[0] && delete e.value
    }
    function Sa(e) {
        var t = e.match(ja)
          , r = null != t && t.length >= 1
          , n = e.match("trk.js")
          , i = null != n && n.length >= 1;
        return e.startsWith("<script") && i && r
    }
    function Ca(e) {
        var t = !0;
        return e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (t = !(!0 !== Object(x.a)(e.gdprConsent, "vendorData.purpose.consents.1"))),
        t
    }
    function Ta(e) {
        var t = {};
        t.sizes = _a(e.sizes),
        t.primary_size = t.sizes[0],
        t.ad_types = [],
        t.uuid = e.bidId,
        e.params.placementId ? t.id = parseInt(e.params.placementId, 10) : t.code = e.params.invCode,
        t.allow_smaller_sizes = e.params.allowSmallerSizes || !1,
        t.use_pmt_rule = e.params.usePaymentRule || !1,
        t.prebid = !0,
        t.disable_psa = !0;
        var r = function(e) {
            if (!Object(w.isFn)(e.getFloor))
                return e.params.reserve ? e.params.reserve : null;
            var t = e.getFloor({
                currency: "USD",
                mediaType: "*",
                size: "*"
            });
            if (Object(w.isPlainObject)(t) && !isNaN(t.floor) && "USD" === t.currency)
                return t.floor;
            return null
        }(e);
        if (r && (t.reserve = r),
        e.params.position)
            t.position = {
                above: 1,
                below: 2
            }[e.params.position] || 0;
        else {
            var n = Object(x.a)(e, "mediaTypes.banner.pos") || Object(x.a)(e, "mediaTypes.video.pos");
            0 !== n && 1 !== n && 3 !== n || (t.position = 3 === n ? 2 : n)
        }
        if (e.params.trafficSourceCode && (t.traffic_source_code = e.params.trafficSourceCode),
        e.params.privateSizes && (t.private_sizes = _a(e.params.privateSizes)),
        e.params.supplyType && (t.supply_type = e.params.supplyType),
        e.params.pubClick && (t.pubclick = e.params.pubClick),
        e.params.extInvCode && (t.ext_inv_code = e.params.extInvCode),
        e.params.publisherId && (t.publisher_id = parseInt(e.params.publisherId, 10)),
        e.params.externalImpId && (t.external_imp_id = e.params.externalImpId),
        !Object(w.isEmpty)(e.params.keywords)) {
            var i = Object(w.transformBidderParamKeywords)(e.params.keywords);
            i.length > 0 && i.forEach(xa),
            t.keywords = i
        }
        var a, o, d = Object(x.a)(e, "ortb2Imp.ext.data.pbadslot");
        if (d && (t.gpid = d),
        (e.mediaType === me || Object(x.a)(e, "mediaTypes." + me)) && (t.ad_types.push(me),
        0 === t.sizes.length && (t.sizes = _a([1, 1])),
        e.nativeParams)) {
            var s = (a = e.nativeParams,
            o = {},
            Object.keys(a).forEach((function(e) {
                var t = Oa[e] && Oa[e].serverName || Oa[e] || e
                  , r = Oa[e] && Oa[e].requiredParams;
                if (o[t] = Object(I.default)({}, r, a[e]),
                (t === Oa.image.serverName || t === Oa.icon.serverName) && o[t].sizes) {
                    var n = o[t].sizes;
                    (Object(w.isArrayOfNums)(n) || Object(w.isArray)(n) && n.length > 0 && n.every((function(e) {
                        return Object(w.isArrayOfNums)(e)
                    }
                    ))) && (o[t].sizes = _a(o[t].sizes))
                }
                t === Oa.privacyLink && (o.privacy_supported = !0)
            }
            )),
            o);
            t[me] = {
                layouts: [s]
            }
        }
        var c = Object(x.a)(e, "mediaTypes." + ge)
          , u = Object(x.a)(e, "mediaTypes.video.context");
        t.hb_source = c && "adpod" === u ? 7 : 1,
        (e.mediaType === ge || c) && t.ad_types.push(ge),
        (e.mediaType === ge || c && "outstream" !== u) && (t.require_asset_url = !0),
        e.params.video && (t.video = {},
        Object.keys(e.params.video).filter((function(e) {
            return Object(C.c)(ba, e)
        }
        )).forEach((function(r) {
            switch (r) {
            case "context":
            case "playback_method":
                var n = e.params.video[r];
                n = Object(w.isArray)(n) ? n[0] : n,
                t.video[r] = ha[r][n];
                break;
            case "frameworks":
                break;
            default:
                t.video[r] = e.params.video[r]
            }
        }
        )),
        e.params.video.frameworks && Object(w.isArray)(e.params.video.frameworks) && (t.video_frameworks = e.params.video.frameworks)),
        c && (t.video = t.video || {},
        Object.keys(c).filter((function(e) {
            return Object(C.c)(ma, e)
        }
        )).forEach((function(e) {
            switch (e) {
            case "minduration":
            case "maxduration":
                "number" != typeof t.video[e] && (t.video[e] = c[e]);
                break;
            case "skip":
                "boolean" != typeof t.video.skippable && (t.video.skippable = 1 === c[e]);
                break;
            case "skipafter":
                "number" != typeof t.video.skipoffset && (t.video.skippoffset = c[e]);
                break;
            case "playbackmethod":
                if ("number" != typeof t.video.playback_method) {
                    var r = c[e];
                    (r = Object(w.isArray)(r) ? r[0] : r) >= 1 && r <= 4 && (t.video.playback_method = r)
                }
                break;
            case "api":
                if (!t.video_frameworks && Object(w.isArray)(c[e])) {
                    var n = c[e].map((function(e) {
                        var t = 4 === e ? 5 : 5 === e ? 4 : e;
                        if (t >= 1 && t <= 5)
                            return t
                    }
                    )).filter((function(e) {
                        return e
                    }
                    ));
                    t.video_frameworks = n
                }
            }
        }
        ))),
        e.renderer && (t.video = Object(I.default)({}, t.video, {
            custom_renderer_present: !0
        })),
        e.params.frameworks && Object(w.isArray)(e.params.frameworks) && (t.banner_frameworks = e.params.frameworks);
        var p = Object(C.b)(ht.getAdUnits(), (function(t) {
            return e.transactionId === t.transactionId
        }
        ));
        return p && p.mediaTypes && p.mediaTypes.banner && t.ad_types.push(ve),
        0 === t.ad_types.length && delete t.ad_types,
        t
    }
    function _a(e) {
        var t = []
          , r = {};
        if (Object(w.isArray)(e) && 2 === e.length && !Object(w.isArray)(e[0]))
            r.width = parseInt(e[0], 10),
            r.height = parseInt(e[1], 10),
            t.push(r);
        else if ("object" == typeof e)
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (r = {}).width = parseInt(i[0], 10),
                r.height = parseInt(i[1], 10),
                t.push(r)
            }
        return t
    }
    function Aa(e) {
        return !!e.params.user
    }
    function ka(e) {
        return !!parseInt(e.params.member, 10)
    }
    function Pa(e) {
        if (e.params)
            return !!e.params.app
    }
    function Ra(e) {
        return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
    }
    function Ua(e) {
        return !!e.debug
    }
    function Da(e) {
        return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === ye
    }
    function Ba(e) {
        var t = !1
          , r = e.params
          , n = e.params.video;
        return r.frameworks && Object(w.isArray)(r.frameworks) && (t = Object(C.c)(e.params.frameworks, 6)),
        !t && n && n.frameworks && Object(w.isArray)(n.frameworks) && (t = Object(C.c)(e.params.video.frameworks, 6)),
        t
    }
    function Na(e, t, r) {
        Object(w.isEmpty)(e.video) && (e.video = {}),
        e.video[t] = r
    }
    function qa(e, t) {
        !function(e) {
            try {
                var t = document.getElementById(e).querySelectorAll("div[id^='google_ads']");
                t[0] && t[0].style.setProperty("display", "none")
            } catch (e) {}
        }(e.adUnitCode),
        function(e) {
            try {
                var t = document.getElementById(e).querySelectorAll("script[id^='sas_script']");
                t[0].nextSibling && "iframe" === t[0].nextSibling.localName && t[0].nextSibling.style.setProperty("display", "none")
            } catch (e) {}
        }(e.adUnitCode),
        e.renderer.push((function() {
            (Object(w.getWindowFromDocument)(t) || window).ANOutstreamVideo.renderAd({
                tagId: e.adResponse.tag_id,
                sizes: [e.getSize().split("x")],
                targetId: e.adUnitCode,
                uuid: e.adResponse.uuid,
                adResponse: e.adResponse,
                rendererOptions: e.renderer.getConfig()
            }, Ma.bind(null, e))
        }
        ))
    }
    function Ma(e, t, r) {
        e.renderer.handleVideoEvent({
            id: t,
            eventName: r
        })
    }
    function za(e, t, r, n) {
        return t && (n ? e.push({
            source: r,
            id: t,
            rti_partner: n
        }) : e.push({
            source: r,
            id: t
        })),
        e
    }
    function Fa(e) {
        var t = "";
        return Object.keys(e).forEach((function(r) {
            Object(w.isStr)(e[r]) ? "" !== e[r] ? t += r + "=" + e[r] + "," : t += r + "," : Object(w.isArray)(e[r]) && ("" === e[r][0] ? t += r + "," : e[r].forEach((function(e) {
                t += r + "=" + e + ","
            }
            )))
        }
        )),
        t = t.substring(0, t.length - 1)
    }
    je(Ea),
    window.jwpb.installedModules.push("appnexusBidAdapter");
    var Wa = Ea.code;
    function Va(e, t, r, n) {
        var i = e.settings
          , a = e.params
          , o = {
            placementId: parseInt(t.id),
            member: "" + t.member,
            invCode: "" + t.invCode,
            publisherId: parseInt(t.publisherId),
            allowSmallerSizes: !0
        }
          , d = i.floorPriceCents;
        void 0 !== d && (o.reserve = d / 100);
        var s = t.optionalParams;
        s && Object(I.default)(o, s),
        o.video = {
            id: r.id,
            context: Ga(n.placement, eu(a.offset))
        };
        var c = [];
        n.api.forEach((function(e) {
            var t = e === Hi ? 6 : e;
            c.push(t)
        }
        )),
        c.length && (o.video.frameworks = c);
        var u = a.jwpseg;
        return u && u.length && (o.keywords = {
            jwpseg: u
        }),
        {
            bidder: Wa,
            params: o
        }
    }
    function Ga(e, t) {
        return 3 === e ? "outstream" : 0 === t ? "pre_roll" : -2 === t ? "post_roll" : "mid_roll"
    }
    function La(e) {
        return !!e && (void 0 !== e.id || void 0 !== e.member && void 0 !== e.invCode)
    }
    var Ha = "https://dmx.districtm.io/b/v1"
      , Ka = {
        code: "districtmDMX",
        gvlid: 144,
        aliases: ["dmx"],
        supportedFormat: [ve, ge],
        supportedMediaTypes: [ge, ve],
        isBidRequestValid: function(e) {
            return !!e.params.memberid
        },
        interpretResponse: function(e, t) {
            return (e = e.body || {}).seatbid && Object(w.isArray)(e.seatbid) ? e.seatbid.reduce((function(e, r) {
                var n = r.bid.reduce((function(e, r) {
                    if (e.price < r.price) {
                        var n = function(e, t) {
                            return t.bidderRequest.bids.filter((function(t) {
                                return t.bidId === e
                            }
                            ))[0]
                        }(r.impid, t)
                          , i = (d = n.sizes,
                        (s = {}).width = Xa(d)[0],
                        s.height = Xa(d)[1],
                        s)
                          , a = i.width
                          , o = i.height;
                        return r.cpm = parseFloat(r.price).toFixed(2),
                        r.bidId = r.impid,
                        r.requestId = r.impid,
                        r.width = r.w || a,
                        r.height = r.h || o,
                        r.ttl = 300,
                        r.mediaType = n.mediaTypes && n.mediaTypes.video ? "video" : "banner",
                        "video" === r.mediaType && (r.vastXml = function(e, t) {
                            try {
                                var r = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/
                                  , n = e.match(r)
                                  , i = n[0]
                                  , a = n[1];
                                if (e = e.replace(r, ""),
                                i && a) {
                                    var o = "<Impression><![CDATA[" + a + "]]></Impression>";
                                    e = e.replace("</Impression>", "</Impression>" + o)
                                }
                                return e
                            } catch (r) {
                                if (!t)
                                    return e;
                                var d = "<Impression><![CDATA[" + t + "]]></Impression>";
                                return e = e.replace("</Impression>", "</Impression>" + d)
                            }
                        }(r.adm, r.nurl),
                        r.ttl = 3600),
                        r.dealid && (r.dealId = r.dealid),
                        r.uuid = r.bidId,
                        r.ad = r.adm,
                        r.netRevenue = !0,
                        r.creativeId = r.crid,
                        r.currency = "USD",
                        r.meta = r.meta || {},
                        r.adomain && r.adomain.length > 0 && (r.meta.advertiserDomains = r.adomain),
                        r
                    }
                    return e.cpm = e.price,
                    e;
                    var d, s
                }
                ), {
                    price: 0
                });
                return n.adm && e.push(n),
                e
            }
            ), []).filter((function(e) {
                return !!e.bidId
            }
            )) : []
        },
        buildRequests: function(e, t) {
            var r = _.b.getConfig("bidderTimeout")
              , n = null
              , i = {
                id: Object(w.generateUUID)(),
                cur: ["USD"],
                tmax: r - 300,
                test: this.test() || 0,
                site: {
                    publisher: {
                        id: String(e[0].params.memberid) || null
                    }
                }
            };
            try {
                var a = _.b.getConfig("dmx");
                i.user = a.user || {};
                var o = a.site || {};
                i.site = Object(I.default)({}, i.site, o)
            } catch (e) {}
            var d = [];
            e[0] && e[0].userId && (Ja(d, Object(x.a)(e[0], "userId.idl_env"), "liveramp.com", 1),
            Ja(d, Object(x.a)(e[0], "userId.id5id.uid"), "id5-sync.com", 1),
            Ja(d, Object(x.a)(e[0], "userId.pubcid"), "pubcid.org", 1),
            Ja(d, Object(x.a)(e[0], "userId.tdid"), "adserver.org", 1),
            Ja(d, Object(x.a)(e[0], "userId.criteoId"), "criteo.com", 1),
            Ja(d, Object(x.a)(e[0], "userId.britepoolid"), "britepool.com", 1),
            Ja(d, Object(x.a)(e[0], "userId.lipb.lipbid"), "liveintent.com", 1),
            Ja(d, Object(x.a)(e[0], "userId.intentiqid"), "intentiq.com", 1),
            Ja(d, Object(x.a)(e[0], "userId.lotamePanoramaId"), "lotame.com", 1),
            Ja(d, Object(x.a)(e[0], "userId.parrableId"), "parrable.com", 1),
            Ja(d, Object(x.a)(e[0], "userId.netId"), "netid.de", 1),
            i.user = i.user || {},
            i.user.ext = i.user.ext || {},
            i.user.ext.eids = d),
            i.test || delete i.test,
            t.gdprConsent && (i.regs = {},
            i.regs.ext = {},
            i.regs.ext.gdpr = !0 === t.gdprConsent.gdprApplies ? 1 : 0,
            !0 === t.gdprConsent.gdprApplies && (i.user = {},
            i.user.ext = {},
            i.user.ext.consent = t.gdprConsent.consentString)),
            i.regs = i.regs || {},
            i.regs.coppa = !0 === _.b.getConfig("coppa") ? 1 : 0,
            t && t.uspConsent && (i.regs = i.regs || {},
            i.regs.ext = i.regs.ext || {},
            i.regs.ext.us_privacy = t.uspConsent);
            try {
                n = e[0].schain,
                i.source = {},
                i.source.ext = {},
                i.source.ext.schain = n || {}
            } catch (e) {}
            var s = e.map((function(e) {
                var t = {};
                return t.id = e.bidId,
                t.tagid = String(e.params.dmxid || e.adUnitCode),
                t.secure = 1,
                t.bidfloor = function(e) {
                    var t = null;
                    if ("function" == typeof e.getFloor) {
                        var r = e.getFloor({
                            currency: "USD",
                            mediaType: e.mediaTypes.video ? "video" : "banner",
                            size: e.sizes.map((function(e) {
                                return {
                                    w: e[0],
                                    h: e[1]
                                }
                            }
                            ))
                        });
                        "object" != typeof r || "USD" !== r.currency || isNaN(parseFloat(r.floor)) || (t = parseFloat(r.floor))
                    }
                    return null !== t ? t : e.params.floor
                }(e),
                e.mediaTypes && e.mediaTypes.video ? t.video = {
                    topframe: 1,
                    skip: e.mediaTypes.video.skip || 0,
                    linearity: e.mediaTypes.video.linearity || 1,
                    minduration: e.mediaTypes.video.minduration || 5,
                    maxduration: e.mediaTypes.video.maxduration || 60,
                    playbackmethod: e.mediaTypes.video.playbackmethod || [2],
                    api: Qa(e.mediaTypes.video),
                    mimes: e.mediaTypes.video.mimes || ["video/mp4"],
                    protocols: $a(e.mediaTypes.video),
                    h: e.mediaTypes.video.playerSize[0][1],
                    w: e.mediaTypes.video.playerSize[0][0]
                } : t.banner = {
                    topframe: 1,
                    w: Ya(e.sizes, "w"),
                    h: Ya(e.sizes, "h"),
                    format: Ya(e.sizes).map((function(e) {
                        return {
                            w: e[0],
                            h: e[1]
                        }
                    }
                    )).filter((function(e) {
                        return "number" == typeof e.w && "number" == typeof e.h
                    }
                    ))
                },
                t
            }
            ));
            return s.length <= 5 ? (i.imp = s,
            {
                method: "POST",
                url: Ha,
                data: JSON.stringify(i),
                bidderRequest: t
            }) : function(e, t, r, n) {
                var i = [];
                for (; 0 !== e.length; )
                    e.length >= 5 ? i.push(e.splice(0, 5)) : i.push(e.splice(0, e.length));
                return i.map((function(e) {
                    return t.imp = e,
                    {
                        method: "POST",
                        url: n,
                        data: JSON.stringify(t),
                        bidderRequest: r
                    }
                }
                ))
            }(s, i, t, Ha)
        },
        test: function() {
            return -1 !== window.location.href.indexOf("dmTest=true") ? 1 : 0
        },
        getUserSyncs: function(e, t, r, n) {
            var i = []
              , a = "https://cdn.districtm.io/ids/index.html";
            if (r && r.gdprApplies && "string" == typeof r.consentString && i.push(["gdpr", r.consentString]),
            n && i.push(["ccpa", n]),
            i.length > 0 && (a += "?" + i.map((function(e) {
                return e.join("=")
            }
            )).join("&")),
            e.iframeEnabled)
                return [{
                    type: "iframe",
                    url: a
                }]
        }
    };
    function Ya(e, t) {
        var r = function(e, t) {
            var r = e.filter((function(e) {
                return -1 === t.map((function(e) {
                    return e.size[0] + "x" + e.size[1]
                }
                )).indexOf(e[0] + "x" + e[1])
            }
            ))
              , n = e.reduce((function(e, r) {
                return 0 === e.length ? (e.push(r),
                e) : (e.push(r),
                (e = (e = t.filter((function(t) {
                    return -1 !== e.map((function(e) {
                        return e[0] + "x" + e[1]
                    }
                    )).indexOf(t.size[0] + "x" + t.size[1])
                }
                ))).sort((function(e, t) {
                    return t.s - e.s
                }
                ))).map((function(e) {
                    return e.size
                }
                )))
            }
            ), []);
            return i = [].concat(n, r),
            i.filter((function(e, t) {
                return i.map((function(e) {
                    return e[0] + "x" + e[1]
                }
                )).indexOf(e[0] + "x" + e[1]) === t
            }
            ));
            var i
        }(e, [{
            size: [300, 250],
            s: 100
        }, {
            size: [728, 90],
            s: 95
        }, {
            size: [320, 50],
            s: 90
        }, {
            size: [160, 600],
            s: 88
        }, {
            size: [300, 600],
            s: 85
        }, {
            size: [300, 50],
            s: 80
        }, {
            size: [970, 250],
            s: 75
        }, {
            size: [970, 90],
            s: 60
        }]);
        switch (t) {
        case "w":
            return r[0][0] || 0;
        case "h":
            return r[0][1] || 0;
        case "size":
        default:
            return r
        }
    }
    function Xa(e) {
        return Array.isArray(e) && Array.isArray(e[0]) ? e[0] : e
    }
    function Ja(e, t, r, n) {
        Object(w.isStr)(t) && Array.isArray(e) && e.push({
            source: r,
            uids: [{
                id: t,
                atype: n
            }]
        })
    }
    function Qa(e) {
        var t = e.api;
        return t && Array.isArray(t) && t.length > 0 ? t : [2]
    }
    function $a(e) {
        var t = e.protocols;
        return t && Array.isArray(t) && t.length > 0 ? t : [2, 3, 5, 6, 7, 8]
    }
    je(Ka),
    window.jwpb.installedModules.push("districtmDMXBidAdapter");
    var Za = Ka.code;
    function eo(e, t) {
        var r = {
            dmxid: parseInt(t.id),
            memberid: parseInt(t.pubid)
        }
          , n = e.settings.floorPriceCents;
        return void 0 !== n && (r.floor = n / 100),
        {
            bidder: Za,
            params: r
        }
    }
    function to(e) {
        return void 0 === e && (e = {}),
        !!e && void 0 !== e.id && void 0 !== e.pubid
    }
    var ro = "https://js.brealtime.com/outstream/1.30.0/bundle.js"
      , no = [{
        key: "idl_env",
        source: "liveramp.com",
        rtiPartner: "idl",
        queryParam: "idl"
    }, {
        key: "uid2.id",
        source: "uidapi.com",
        rtiPartner: "UID2",
        queryParam: "uid2"
    }]
      , io = {
        validateSizes: function(e) {
            return Object(w.isArray)(e) && void 0 !== e[0] ? e.every((function(e) {
                return Object(w.isArray)(e) && 2 === e.length
            }
            )) : (Object(w.logWarn)("emx_digital: Sizes should be an array"),
            !1)
        },
        checkVideoContext: function(e) {
            return e && e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context && ("instream" === e.mediaTypes.video.context || "outstream" === e.mediaTypes.video.context)
        },
        buildBanner: function(e) {
            var t = [];
            return t = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes ? e.mediaTypes.banner.sizes : e.sizes,
            io.validateSizes(t) || (Object(w.logWarn)("emx_digital: could not detect mediaType banner sizes. Assigning to bid sizes instead"),
            t = e.sizes),
            {
                format: t.map((function(e) {
                    return {
                        w: e[0],
                        h: e[1]
                    }
                }
                )),
                w: t[0][0],
                h: t[0][1]
            }
        },
        formatVideoResponse: function(e, t, r) {
            (e.vastXml = t.adm,
            r.bidderRequest && r.bidderRequest.bids && r.bidderRequest.bids.length > 0) && (Object(C.b)(r.bidderRequest.bids, (function(t) {
                return e.requestId && t.bidId && e.requestId === t.bidId && t.mediaTypes && t.mediaTypes.video && "outstream" === t.mediaTypes.video.context
            }
            )) && (e.renderer = io.createRenderer(e, {
                id: t.id,
                url: ro
            })));
            return e
        },
        isMobile: function() {
            return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)
        },
        isConnectedTV: function() {
            return /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)
        },
        getDevice: function() {
            return {
                ua: navigator.userAgent,
                js: 1,
                dnt: "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack || "1" === navigator.msDoNotTrack ? 1 : 0,
                h: screen.height,
                w: screen.width,
                devicetype: io.isMobile() ? 1 : io.isConnectedTV() ? 3 : 2,
                language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
            }
        },
        cleanProtocols: function(e) {
            return e.protocols && Object(C.c)(e.protocols, 7) && (Object(w.logWarn)("emx_digital: VAST 4.0 is currently not supported. This protocol has been filtered out of the request."),
            e.protocols = e.protocols.filter((function(e) {
                return 7 !== e
            }
            ))),
            e
        },
        outstreamRender: function(e) {
            e.renderer.push((function() {
                var t = e && e.params && e.params[0] && e.params[0].video ? e.params[0].video : {};
                window.emxVideoQueue = window.emxVideoQueue || [],
                window.queueEmxVideo({
                    id: e.adUnitCode,
                    adsResponses: e.vastXml,
                    options: t
                }),
                window.emxVideoReady && window.videojs && window.emxVideoReady()
            }
            ))
        },
        createRenderer: function(e, t) {
            var r = N.install({
                id: t.id,
                url: ro,
                loaded: !1
            });
            try {
                r.setRender(io.outstreamRender)
            } catch (e) {
                Object(w.logWarn)("Prebid Error calling setRender on renderer", e)
            }
            return r
        },
        buildVideo: function(e) {
            var t = Object(I.default)(e.mediaTypes.video, e.params.video);
            return Object(w.isArray)(e.mediaTypes.video.playerSize[0]) ? (t.w = e.mediaTypes.video.playerSize[0][0],
            t.h = e.mediaTypes.video.playerSize[0][1]) : (t.w = e.mediaTypes.video.playerSize[0],
            t.h = e.mediaTypes.video.playerSize[1]),
            io.cleanProtocols(t)
        },
        parseResponse: function(e) {
            try {
                return decodeURIComponent(e.replace(/%(?![0-9][0-9a-fA-F]+)/g, "%25"))
            } catch (e) {
                Object(w.logError)("emx_digitalBidAdapter", "error", e)
            }
        },
        getReferrer: function() {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        },
        getSite: function(e) {
            return {
                domain: Object(w.parseUrl)(e.referer).hostname,
                page: e.referer,
                ref: io.getReferrer()
            }
        },
        getGdpr: function(e, t) {
            return e.gdprConsent && (t.regs = {
                ext: {
                    gdpr: !0 === e.gdprConsent.gdprApplies ? 1 : 0
                }
            }),
            e.gdprConsent && e.gdprConsent.gdprApplies && (t.user = {
                ext: {
                    consent: e.gdprConsent.consentString
                }
            }),
            t
        },
        getSupplyChain: function(e, t) {
            return e.bids[0] && e.bids[0].schain && (t.source = {
                ext: {
                    schain: e.bids[0].schain
                }
            }),
            t
        },
        getEids: function(e) {
            return no.map(io.getUserId(e)).filter((function(e) {
                return e
            }
            ))
        },
        getUserId: function(e) {
            return function(t) {
                var r = t.key
                  , n = t.source
                  , i = t.rtiPartner
                  , a = Object(x.a)(e, "userId." + r);
                return a ? io.formatEid(a, n, i) : null
            }
        },
        formatEid: function(e, t, r) {
            return {
                source: t,
                uids: [{
                    id: e,
                    ext: {
                        rtiPartner: r
                    }
                }]
            }
        }
    }
      , ao = {
        code: "emx_digital",
        gvlid: 183,
        supportedMediaTypes: [ve, ge],
        isBidRequestValid: function(e) {
            if (!e || !e.params)
                return Object(w.logWarn)("emx_digital: Missing bid or bid params."),
                !1;
            if ("emx_digital" !== e.bidder)
                return Object(w.logWarn)('emx_digital: Must use "emx_digital" as bidder code.'),
                !1;
            if (!e.params.tagid || !Object(w.isStr)(e.params.tagid))
                return Object(w.logWarn)("emx_digital: Missing tagid param or tagid present and not type String."),
                !1;
            var t;
            if (e.mediaTypes && e.mediaTypes.banner) {
                if (t = e.mediaTypes.banner.sizes ? e.mediaTypes.banner.sizes : e.sizes,
                !io.validateSizes(t))
                    return Object(w.logWarn)("emx_digital: Missing sizes in bid"),
                    !1
            } else if (e.mediaTypes && e.mediaTypes.video) {
                if (!io.checkVideoContext(e))
                    return Object(w.logWarn)("emx_digital: Missing video context: instream or outstream"),
                    !1;
                if (!e.mediaTypes.video.playerSize)
                    return Object(w.logWarn)("emx_digital: Missing video playerSize"),
                    !1
            }
            return !0
        },
        buildRequests: function(e, t) {
            var r = []
              , n = "https://hb.emxdgt.com?t=" + (t.timeout || "") + "&ts=" + Date.now() + "&src=pbjs"
              , i = location.protocol.indexOf("https") > -1 ? 1 : 0
              , a = io.getDevice()
              , o = io.getSite(t.refererInfo);
            Object(w._each)(e, (function(e) {
                var t = Object(w.getBidIdParameter)("tagid", e.params)
                  , n = parseFloat(function(e) {
                    if (!Object(w.isFn)(e.getFloor))
                        return parseFloat(Object(w.getBidIdParameter)("bidfloor", e.params));
                    var t = e.getFloor({
                        currency: "USD",
                        mediaType: "*",
                        size: "*"
                    });
                    if (Object(w.isPlainObject)(t) && !isNaN(t.floor) && "USD" === t.currency)
                        return t.floor;
                    return null
                }(e)) || 0
                  , a = !!e.mediaTypes.video
                  , o = {
                    id: e.bidId,
                    tid: e.transactionId,
                    tagid: t,
                    secure: i
                }
                  , d = Object(x.a)(e, "ortb2Imp.ext.data.adserver.adslot");
                d || (d = Object(x.a)(e, "ortb2Imp.ext.data.pbadslot")),
                d && (o.ext = {
                    gpid: d.toString()
                });
                var s = a ? {
                    video: io.buildVideo(e)
                } : {
                    banner: io.buildBanner(e)
                }
                  , c = n > 0 ? {
                    bidfloor: n,
                    bidfloorcur: "USD"
                } : {}
                  , u = Object(I.default)(o, s, c);
                r.push(u)
            }
            ));
            var d = {
                id: t.auctionId,
                imp: r,
                device: a,
                site: o,
                cur: "USD",
                version: "1.5.1"
            };
            if (d = io.getGdpr(t, Object(I.default)({}, d)),
            d = io.getSupplyChain(t, Object(I.default)({}, d)),
            t && t.uspConsent && (d.us_privacy = t.uspConsent),
            t.userId) {
                var s = io.getEids(t);
                s.length > 0 && (d.user && d.user.ext ? d.user.ext.eids = s : d.user = {
                    ext: {
                        eids: s
                    }
                })
            }
            return {
                method: "POST",
                url: n,
                data: JSON.stringify(d),
                options: {
                    withCredentials: !0
                },
                bidderRequest: t
            }
        },
        interpretResponse: function(e, t) {
            var r = []
              , n = e.body || {};
            return n.seatbid && n.seatbid.length > 0 && n.seatbid[0].bid && n.seatbid.forEach((function(e) {
                e = e.bid[0];
                var n = !1
                  , i = io.parseResponse(e.adm) || ""
                  , a = {
                    requestId: e.id,
                    cpm: e.price,
                    width: e.w,
                    height: e.h,
                    creativeId: e.crid || e.id,
                    dealId: e.dealid || null,
                    currency: "USD",
                    netRevenue: !0,
                    ttl: e.ttl,
                    ad: i
                };
                e.adm && e.adm.indexOf("<?xml version=") > -1 && (n = !0,
                a = io.formatVideoResponse(a, Object(I.default)({}, e), t)),
                a.mediaType = n ? ge : ve,
                e.adomain && e.adomain.length && (a.meta = {
                    advertiserDomains: e.adomain
                }),
                r.push(a)
            }
            )),
            r
        },
        getUserSyncs: function(e, t, r, n) {
            var i = [];
            if (e.iframeEnabled) {
                var a = "https://biddr.brealtime.com/check.html";
                r && "string" == typeof r.consentString && ("boolean" == typeof r.gdprApplies ? a += "?gdpr=" + Number(r.gdprApplies) + "&gdpr_consent=" + r.consentString : a += "?gdpr_consent=" + r.consentString),
                i.push({
                    type: "iframe",
                    url: a
                })
            }
            return i
        }
    };
    je(ao),
    window.jwpb.installedModules.push("emx_digitalBidAdapter");
    var oo = ao.code;
    function so(e, t, r, n) {
        var i = {
            tagid: "" + t.id,
            content: r
        }
          , a = {
            mimes: n.mimes,
            minduration: n.minduration,
            maxduration: n.maxduration,
            protocols: n.protocols,
            startdelay: n.startdelay,
            placement: n.placement,
            linearity: n.linearity,
            playbackmethod: n.playbackmethod,
            api: n.api
        }
          , o = e.settings.floorPriceCents;
        void 0 !== o && (i.bidfloor = o / 100);
        var d = n.skip;
        if (void 0 !== d) {
            a.skip = d;
            var s = n.skipmin
              , c = n.skipafter;
            void 0 !== s && (a.skipmin = s),
            void 0 !== c && (a.skipafter = c)
        }
        var u = e.params.jwpseg;
        return Array.isArray(u) && u.length && (a.ext = {
            custom: {
                jwpseg: u
            }
        }),
        i.video = a,
        {
            bidder: oo,
            params: i
        }
    }
    function co(e) {
        return void 0 === e && (e = {}),
        void 0 !== e.id
    }
    Br.bidderSettings[oo] = {
        sendStandardTargeting: !1,
        adserverTargeting: [{
            key: "vpb_emx_bid",
            val: function(e) {
                return Zc(Br.getConfig("priceGranularity"), e)
            }
        }, {
            key: "vpb_emx_key",
            val: function(e) {
                return e.videoCacheKey
            }
        }]
    };
    var uo = r(8)
      , po = ["mind", "maxd", "size"]
      , lo = "https://x.bidswitch.net/sync?ssp=themediagrid"
      , fo = !1
      , bo = "Bid from response has no adm parameter - "
      , mo = "Bid from response has no price parameter - "
      , go = "Bid from response has wrong content_type parameter - "
      , vo = "Array of bid objects is empty"
      , yo = "Seatbid array from response has empty item"
      , ho = "Response is empty"
      , Oo = "Response has empty seatbid array"
      , jo = "Seatbid from response has no array of bid objects - "
      , Io = ["mimes", "protocols", "startdelay", "placement", "linearity", "skip", "skipmin", "skipafter", "sequence", "battr", "maxextended", "minbitrate", "maxbitrate", "boxingallowed", "playbackmethod", "playbackend", "delivery", "pos", "companionad", "api", "companiontype"]
      , Eo = {
        code: "gridNM",
        supportedMediaTypes: [ge],
        isBidRequestValid: function(e) {
            var t = !(e.params.source && Object(w.isStr)(e.params.source) && e.params.secid && Object(w.isStr)(e.params.secid) && e.params.pubid && Object(w.isStr)(e.params.pubid))
              , r = Object(x.a)(e, "mediaTypes.video") || {}
              , n = Object(x.a)(e, "params.video") || {}
              , i = n.protocols
              , a = void 0 === i ? r.protocols : i
              , o = n.mimes
              , d = void 0 === o ? r.mimes : o;
            return t || (t = !a || !d),
            t || (t = !Object(w.isArray)(d) || !d.length || d.filter((function(e) {
                return !(e && Object(w.isStr)(e))
            }
            )).length) || (t = !Object(w.isArray)(a) || !a.length || a.filter((function(e) {
                return !(Object(w.isNumber)(e) && e > 0 && !(e % 1))
            }
            )).length),
            !t
        },
        buildRequests: function(e, t) {
            var r = e || []
              , n = []
              , i = t || {}
              , a = i.bidderRequestId
              , o = i.auctionId
              , d = i.gdprConsent
              , s = i.uspConsent
              , c = i.timeout
              , u = i.refererInfo
              , p = u ? encodeURIComponent(u.referer) : "";
            return r.forEach((function(e) {
                var t, r, i = e.schain, u = e.userIdAsEids;
                a || (a = e.bidderRequestId),
                o || (o = e.auctionId);
                var l = e.params
                  , f = l.floorcpm
                  , b = l.pubdata
                  , m = l.source
                  , g = l.secid
                  , v = l.pubid
                  , y = l.content
                  , h = l.video
                  , O = e.mediaTypes
                  , j = e.bidId
                  , I = e.adUnitCode
                  , E = e.rtd
                  , x = e.ortb2Imp
                  , S = e.sizes
                  , C = function(e, t, r) {
                    var n = e.video ? "video" : "banner";
                    if ("function" == typeof t.getFloor) {
                        var i = t.getFloor({
                            currency: "USD",
                            mediaType: n,
                            size: t.sizes.map((function(e) {
                                return {
                                    w: e[0],
                                    h: e[1]
                                }
                            }
                            ))
                        });
                        "object" != typeof i || "USD" !== i.currency || isNaN(parseFloat(i.floor)) || (r = Math.max(r, parseFloat(i.floor)))
                    }
                    return r
                }(O || {}, e, Object(w.isNumber)(f) && f)
                  , T = E && E.jwplayer && E.jwplayer.targeting
                  , A = b && b.jwpseg || T && T.segments
                  , k = y || T && T.content
                  , P = {
                    id: j.toString(),
                    tagid: g.toString(),
                    video: xo(h, S, O && O.video),
                    ext: {
                        divid: I.toString()
                    }
                };
                x && x.ext && x.ext.data && (P.ext.data = x.ext.data,
                P.ext.data.adserver && P.ext.data.adserver.adslot ? P.ext.gpid = P.ext.data.adserver.adslot.toString() : P.ext.gpid = x.ext.data.pbadslot && x.ext.data.pbadslot.toString()),
                C && (P.bidfloor = C);
                var R = [P]
                  , U = {
                    tid: o && o.toString(),
                    ext: {
                        wrapper: "Prebid_js",
                        wrapper_version: "6.29.0"
                    }
                };
                i && (U.ext.schain = i);
                var D = _.b.getConfig("bidderTimeout") || c
                  , B = c ? Math.min(D, c) : D
                  , N = {
                    id: a && a.toString(),
                    site: {
                        page: p,
                        publisher: {
                            id: v
                        }
                    },
                    source: U,
                    tmax: B,
                    imp: R
                };
                k && (N.site.content = k),
                A && A.length && (t = {
                    data: [{
                        name: "iow_labs_pub_data",
                        segment: A.map((function(e) {
                            return {
                                name: "jwpseg",
                                value: e
                            }
                        }
                        ))
                    }]
                }),
                d && d.consentString && (r = {
                    consent: d.consentString
                }),
                u && u.length && ((r = r || {}).eids = [].concat(u)),
                r && Object.keys(r).length && ((t = t || {}).ext = r),
                t && (N.user = t),
                d && d.gdprApplies && (N.regs = {
                    ext: {
                        gdpr: d.gdprApplies ? 1 : 0
                    }
                }),
                s && (N.regs || (N.regs = {
                    ext: {}
                }),
                N.regs.ext.us_privacy = s),
                !0 === _.b.getConfig("coppa") && (N.regs || (N.regs = {}),
                N.regs.coppa = 1),
                n.push({
                    method: "POST",
                    url: "https://grid.bidswitch.net/hbjson?no_mapping=1&sp=" + m,
                    bid: e,
                    data: N
                })
            }
            )),
            n
        },
        interpretResponse: function(e, t) {
            var r, n = [];
            if ((e = e && e.body) ? e.seatbid && !e.seatbid.length && (r = Oo) : r = ho,
            !r && e.seatbid) {
                var i = function(e) {
                    e ? e.bid ? e.bid[0] || Object(w.logError)(vo) : Object(w.logError)(jo + JSON.stringify(e)) : Object(w.logError)(yo);
                    return e && e.bid && e.bid[0]
                }(e.seatbid[0]);
                if (i && (i.adm || i.nurl ? i.price ? "video" !== i.content_type && (r = go + i.content_type) : r = mo + JSON.stringify(i) : r = bo + JSON.stringify(i),
                !r)) {
                    var a = t.bid
                      , o = {
                        requestId: a.bidId,
                        cpm: i.price,
                        width: i.w,
                        height: i.h,
                        creativeId: i.auid || a.bidderRequestId,
                        currency: "USD",
                        netRevenue: !0,
                        ttl: 360,
                        dealId: i.dealid,
                        mediaType: ge,
                        meta: {
                            advertiserDomains: i.adomain ? i.adomain : []
                        }
                    };
                    i.adm ? (o.vastXml = i.adm,
                    o.adResponse = {
                        content: o.vastXml
                    }) : i.nurl && (o.vastUrl = i.nurl),
                    a.renderer || a.mediaTypes && a.mediaTypes.video && "outstream" !== a.mediaTypes.video.context || (o.renderer = function(e, t) {
                        var r = N.install({
                            id: t.id,
                            url: t.url,
                            loaded: !1
                        });
                        try {
                            r.setRender(wo)
                        } catch (e) {
                            Object(w.logWarn)("Prebid Error calling setRender on renderer", e)
                        }
                        return r
                    }(0, {
                        id: a.bidId,
                        url: "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"
                    })),
                    n.push(o)
                }
            }
            return r && Object(w.logError)(r),
            n
        },
        getUserSyncs: function(e, t, r, n) {
            if (!fo && e.pixelEnabled) {
                var i = "";
                return r && "string" == typeof r.consentString && ("boolean" == typeof r.gdprApplies ? i += "&gdpr=" + Number(r.gdprApplies) + "&gdpr_consent=" + r.consentString : i += "&gdpr_consent=" + r.consentString),
                n && (i += "&us_privacy=" + n),
                fo = !0,
                {
                    type: "image",
                    url: lo + i
                }
            }
        }
    };
    function wo(e) {
        e.renderer.push((function() {
            window.ANOutstreamVideo.renderAd({
                targetId: e.adUnitCode,
                adResponse: e.adResponse
            })
        }
        ))
    }
    function xo(e, t, r) {
        var n = e.mind
          , i = e.maxd
          , a = e.size
          , o = Object(uo.a)(e, po);
        if (void 0 === r && (r = {}),
        Io.forEach((function(e) {
            !(e in o) && e in r && (o[e] = r[e])
        }
        )),
        a && Object(w.isStr)(a)) {
            var d = a.split("x");
            2 === d.length && parseInt(d[0]) && parseInt(d[1]) && (o.w = parseInt(d[0]),
            o.h = parseInt(d[1]))
        }
        if (!o.w || !o.h) {
            var s = r.playerSize && 2 === r.playerSize.length ? r.playerSize : t;
            if (s) {
                var c = s[0];
                c && Object(I.default)(o, Object(w.parseGPTSingleSizeArrayToRtbSize)(c))
            }
        }
        var u = r.durationRangeSec || []
          , p = n || u[0] || r.minduration
          , l = i || u[1] || r.maxduration;
        return p && (o.minduration = p),
        l && (o.maxduration = l),
        o
    }
    je(Eo),
    window.jwpb.installedModules.push("gridNMBidAdapter");
    var So = Eo.code;
    function Co(e, t, r, n) {
        var i = e.params
          , a = e.settings
          , o = {
            source: "jwp",
            secid: "" + t.id,
            pubid: "" + t.pubid,
            content: r
        }
          , d = n.playerSize
          , s = {
            mimes: n.mimes,
            mind: n.minduration,
            maxd: n.maxduration,
            protocols: n.protocols,
            startdelay: n.startdelay,
            placement: n.placement,
            linearity: n.linearity,
            playbackmethod: n.playbackmethod,
            api: n.api,
            size: d[0] + "x" + d[1]
        }
          , c = a.floorPriceCents;
        void 0 !== c && (o.floorcpm = c / 100);
        var u = n.skip;
        if (void 0 !== u) {
            s.skip = u;
            var p = n.skipmin
              , l = n.skipafter;
            void 0 !== p && (s.skipmin = p),
            void 0 !== l && (s.skipafter = l)
        }
        var f = i.jwpseg;
        return Array.isArray(f) && f.length && (o.pubdata = {
            jwpseg: f
        }),
        o.video = s,
        {
            bidder: So,
            params: o
        }
    }
    function To(e) {
        return void 0 === e && (e = {}),
        void 0 !== e.pubid
    }
    function _o(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (r)
            return (r = r.call(e)).next.bind(r);
        if (Array.isArray(e) || (r = function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Ao(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r)
                return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return Ao(e, t)
        }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0;
            return function() {
                return n >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[n++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function Ao(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r];
        return n
    }
    Br.bidderSettings[So] = {
        sendStandardTargeting: !1,
        adserverTargeting: [{
            key: "vpb_mediagrid_bid",
            val: function(e) {
                return Zc(Br.getConfig("priceGranularity"), e)
            }
        }, {
            key: "vpb_mediagrid_key",
            val: function(e) {
                return e.videoCacheKey
            }
        }]
    };
    var ko = [ve, ge]
      , Po = [300, 250]
      , Ro = {
        JPY: 1
    }
      , Uo = "p"
      , Do = "x"
      , Bo = 1
      , No = 2
      , qo = 3
      , Mo = 4
      , zo = 5
      , Fo = 6
      , Wo = 7
      , Vo = 8
      , Go = 9
      , Lo = {
        SITE: ["id", "name", "domain", "cat", "sectioncat", "pagecat", "page", "ref", "search", "mobile", "privacypolicy", "publisher", "content", "keywords", "ext"],
        USER: ["id", "buyeruid", "yob", "gender", "keywords", "customdata", "geo", "data", "ext"]
    }
      , Ho = {
        "liveramp.com": "idl",
        "netid.de": "NETID",
        "neustar.biz": "fabrickId",
        "zeotap.com": "zeotapIdPlus",
        "uidapi.com": "UID2",
        "adserver.org": "TDID",
        "id5-sync.com": "",
        "crwdcntrl.net": "",
        "epsilon.com": "",
        "audigent.com": "",
        "pubcid.org": "",
        "trustpid.com": ""
    }
      , Ko = ["britepoolid", "lipbid", "criteoId", "merkleId", "parrableId", "connectid", "tapadId", "quantcastId", "flocId", "pubProvidedId"]
      , Yo = ["mimes", "minduration", "maxduration"]
      , Xo = ["mimes", "minduration", "maxduration", "protocols", "protocol", "startdelay", "placement", "linearity", "skip", "skipmin", "skipafter", "sequence", "battr", "maxextended", "minbitrate", "maxbitrate", "boxingallowed", "playbackmethod", "playbackend", "delivery", "pos", "companionad", "api", "companiontype", "ext", "playerSize", "w", "h"]
      , Jo = !1
      , Qo = ie({
        gvlid: 10,
        bidderCode: "ix"
    })
      , $o = 2;
    function Zo(e) {
        var t = ed(e)
          , r = Object(x.a)(e, "mediaTypes.video")
          , n = Object(x.a)(e, "params.video");
        if (ad(r, n).length)
            return {};
        for (var i in t.video = n ? Object(w.deepClone)(e.params.video) : {},
        r)
            -1 === Xo.indexOf(i) || t.video.hasOwnProperty(i) || (t.video[i] = r[i]);
        if (t.video.minduration > t.video.maxduration)
            return Object(w.logError)("IX Bid Adapter: video minduration [" + t.video.minduration + "] cannot be greater than video maxduration [" + t.video.maxduration + "]", {
                bidder: "ix",
                code: Go
            }),
            {};
        var a = n && n.context || r && r.context;
        if (a && !t.video.hasOwnProperty("placement") && ("instream" === a ? t.video.placement = 1 : "outstream" === a ? t.video.placement = 4 : Object(w.logWarn)("IX Bid Adapter: Video context '" + a + "' is not supported")),
        !t.video.w || !t.video.h) {
            var o = od(Object(x.a)(t, "video.playerSize")) || od(Object(x.a)(e, "params.size"));
            if (!o)
                return Object(w.logWarn)("IX Bid Adapter: Video size is missing in [mediaTypes.video] missing"),
                {};
            t.video.w = o[0],
            t.video.h = o[1],
            Object(x.a)(t, "ext.sid") || (t.ext.sid = Object(w.parseGPTSingleSizeArray)(o))
        }
        return td(e, t, ge),
        t
    }
    function ed(e) {
        var t = {};
        return t.id = e.bidId,
        t.ext = {},
        t.ext.siteID = e.params.siteId.toString(),
        !e.params.hasOwnProperty("id") || "string" != typeof e.params.id && "number" != typeof e.params.id || (t.ext.sid = String(e.params.id)),
        t
    }
    function td(e, t, r) {
        var n = null
          , i = null;
        if (e.params.bidFloor && e.params.bidFloorCur && (n = {
            floor: e.params.bidFloor,
            currency: e.params.bidFloorCur
        }),
        Object(w.isFn)(e.getFloor)) {
            var a = "*"
              , o = "*";
            if (r && Object(w.contains)(ko, r)) {
                var d = t[r];
                a = r,
                o = [d.w, d.h]
            }
            try {
                i = e.getFloor({
                    mediaType: a,
                    size: o
                })
            } catch (e) {
                Object(w.logWarn)("priceFloors module call getFloor failed, error : ", e)
            }
        }
        i ? (t.bidfloor = i.floor,
        t.bidfloorcur = i.currency,
        t.ext.fl = Uo) : n && (t.bidfloor = n.floor,
        t.bidfloorcur = n.currency,
        t.ext.fl = Do)
    }
    function rd(e, t, r) {
        var n = {}
          , i = !(!Object(x.a)(e, "exp") || !Object(w.isInteger)(e.exp))
          , a = Object(x.a)(e, "dealid") || Object(x.a)(e, "ext.dealid");
        return Ro.hasOwnProperty(t) ? n.cpm = e.price / Ro[t] : n.cpm = e.price / 100,
        n.requestId = e.impid,
        a && (n.dealId = a),
        n.netRevenue = !0,
        n.currency = t,
        n.creativeId = e.hasOwnProperty("crid") ? e.crid : "-",
        e.mtype == $o ? n.vastXml = e.adm : e.ext && e.ext.vasturl && (n.vastUrl = e.ext.vasturl),
        e.ext && e.ext.vasturl || e.mtype == $o ? (n.width = r.video.w,
        n.height = r.video.h,
        n.mediaType = ge,
        n.mediaTypes = r.mediaTypes,
        n.ttl = i ? e.exp : 3600) : (n.ad = e.adm,
        n.width = e.w,
        n.height = e.h,
        n.mediaType = ve,
        n.ttl = i ? e.exp : 300),
        n.meta = {},
        n.meta.networkId = Object(x.a)(e, "ext.dspid"),
        n.meta.brandId = Object(x.a)(e, "ext.advbrandid"),
        n.meta.brandName = Object(x.a)(e, "ext.advbrand"),
        e.adomain && e.adomain.length > 0 && (n.meta.advertiserDomains = e.adomain),
        n
    }
    function nd(e) {
        return Array.isArray(e) && 2 === e.length && Object(w.isInteger)(e[0]) && Object(w.isInteger)(e[1])
    }
    function id(e, t) {
        if (void 0 === e && (e = []),
        void 0 === t && (t = []),
        nd(e))
            return e[0] === t[0] && e[1] === t[1];
        for (var r = 0; r < e.length; r++)
            if (e[r][0] === t[0] && e[r][1] === t[1])
                return !0;
        return !1
    }
    function ad(e, t) {
        var r = [];
        e || Object(w.logWarn)("IX Bid Adapter: mediaTypes.video is the preferred location for video params in ad unit");
        for (var n, i = _o(Yo); !(n = i()).done; ) {
            var a = n.value
              , o = e && e.hasOwnProperty(a)
              , d = t && t.hasOwnProperty(a);
            o || d || r.push("IX Bid Adapter: " + a + " is not included in either the adunit or params level")
        }
        var s = e && e.hasOwnProperty("protocol")
          , c = e && e.hasOwnProperty("protocols")
          , u = t && t.hasOwnProperty("protocol")
          , p = t && t.hasOwnProperty("protocols");
        return s || c || u || p || r.push("IX Bid Adapter: protocol/protcols is not included in either the adunit or params level"),
        r
    }
    function od(e) {
        return void 0 === e && (e = []),
        nd(e) ? e : !!nd(e[0]) && e[0]
    }
    function dd(e, t, r) {
        if (e)
            return Object(I.default)({}, Object(C.b)(r, (function(t) {
                return t.bidId === e
            }
            )), Object(C.b)(t, (function(t) {
                return t.id === e
            }
            )))
    }
    function sd(e, t, r, n) {
        var i = "https://htlb.casalemedia.com/openrtb/pbjs"
          , a = function(e, t) {
            var r = []
              , n = {};
            if (Object(w.isArray)(e))
                for (var i, a = _o(e); !(i = a()).done; ) {
                    var o = i.value;
                    Ho.hasOwnProperty(o.source) && Object(x.a)(o, "uids.0") && (n[o.source] = !0,
                    "" != Ho[o.source] && (o.uids[0].ext = {
                        rtiPartner: Ho[o.source]
                    }),
                    delete o.uids[0].atype,
                    r.push(o))
                }
            if (t && t.id && t.version) {
                var d = {
                    source: "chrome.com",
                    uids: [{
                        id: t.id,
                        ext: {
                            rtiPartner: "flocId",
                            ver: t.version
                        }
                    }]
                };
                r.push(d),
                n["chrome.com"] = !0
            }
            return {
                toSend: r,
                seenSources: n
            }
        }(Object(x.a)(e, "0.userIdAsEids"), Object(x.a)(e, "0.userId.flocId"))
          , o = a.toSend
          , d = function() {
            var e = _.b.getConfig("pageUrl");
            try {
                return new URL(e).href
            } catch (t) {
                return void Object(w.logWarn)("IX Bid Adapter: invalid pageUrl config property value set: " + e)
            }
        }() || Object(x.a)(t, "refererInfo.referer");
        if (window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
            var s = window.headertag.getIdentityInfo();
            if (s && "object" == typeof s)
                for (var c in s)
                    if (s.hasOwnProperty(c)) {
                        var u = s[c];
                        !u.responsePending && u.data && "object" == typeof u.data && Object.keys(u.data).length && !a.seenSources[u.data.source] && o.push(u.data)
                    }
        }
        if (t && "roundel" === t.bidderCode && !a.seenSources["liveramp.com"])
            return [];
        var p = {};
        p.id = e[0].bidderRequestId.toString(),
        p.site = {},
        p.ext = {},
        p.ext.source = "prebid",
        p.ext.ixdiag = {},
        p.ext.ixdiag.msd = 0,
        p.ext.ixdiag.msi = 0,
        p.imp = [],
        p.at = 1;
        var l = function(e) {
            for (var t = e.map((function(e) {
                return e.transactionId
            }
            )).filter((function(e, t, r) {
                return r.indexOf(e) === t
            }
            )), r = {
                mfu: 0,
                bu: 0,
                iu: 0,
                nu: 0,
                ou: 0,
                allu: 0,
                ren: !1,
                version: "6.29.0",
                userIds: cd(e[0]),
                url: window.location.href.split("?")[0]
            }, n = function(n) {
                a = e.filter((function(e) {
                    return e.transactionId === t[n]
                }
                ))[0],
                Object(x.a)(a, "mediaTypes") && (Object.keys(a.mediaTypes).length > 1 && r.mfu++,
                Object(x.a)(a, "mediaTypes.native") && r.nu++,
                Object(x.a)(a, "mediaTypes.banner") && r.bu++,
                "outstream" === Object(x.a)(a, "mediaTypes.video.context") && (r.ou++,
                vd(a) && (r.ren = !0)),
                "instream" === Object(x.a)(a, "mediaTypes.video.context") && r.iu++,
                r.allu++)
            }, i = 0; i < t.length; i++) {
                var a;
                n(i)
            }
            return r
        }(e);
        for (var f in l)
            p.ext.ixdiag[f] = l[f];
        var b = function() {
            if (!Qo.localStorageIsEnabled())
                return;
            var e, t = {};
            try {
                e = JSON.parse(Qo.getDataFromLocalStorage("ixdiag") || "{}")
            } catch (e) {
                return Object(w.logError)("ix can not read ixdiag from localStorage."),
                null
            }
            return Object.keys(e).forEach((function(r) {
                Object.keys(e[r]).forEach((function(n) {
                    "number" == typeof e[r][n] && (t[n] = t[n] ? t[n] + e[r][n] : e[r][n])
                }
                ))
            }
            )),
            t
        }();
        if (Object(w.isEmpty)(b) || (p.ext.ixdiag.err = b),
        e[0].schain && (p.source = {
            ext: {
                schain: e[0].schain
            }
        }),
        o.length > 0 && (p.user = {},
        p.user.eids = o),
        document.referrer && "" !== document.referrer && (p.site.ref = document.referrer),
        t) {
            if (t.gdprConsent) {
                var m = t.gdprConsent;
                m.hasOwnProperty("gdprApplies") && (p.regs = {
                    ext: {
                        gdpr: m.gdprApplies ? 1 : 0
                    }
                }),
                m.hasOwnProperty("consentString") && (p.user = p.user || {},
                p.user.ext = {
                    consent: m.consentString || ""
                },
                m.hasOwnProperty("addtlConsent") && m.addtlConsent && (p.user.ext.consented_providers_settings = {
                    consented_providers: m.addtlConsent
                }))
            }
            t.uspConsent && Object(Kr.a)(p, "regs.ext.us_privacy", t.uspConsent),
            d && (p.site.page = d)
        }
        _.b.getConfig("coppa") && Object(Kr.a)(p, "regs.coppa", 1);
        var g = {};
        g.s = e[0].params.siteId,
        g.v = n,
        g.ac = "j",
        g.sd = 1,
        8.1 === n && (g.nf = 1);
        var v = t && t.bidderCode || "ix"
          , y = _.b.getConfig(v)
          , h = []
          , O = 0
          , j = Object.keys(r)
          , E = ("" + i + Object(w.parseQueryStringParameters)(Object(I.default)({}, g, {
            r: JSON.stringify(p)
        }))).length;
        if (E > 8e3)
            return Object(w.logError)("IX Bid Adapter: Base request size has exceeded maximum request size.", {
                bidder: "ix",
                code: Wo
            }),
            h;
        var S = E
          , C = 0
          , T = !1;
        if (y) {
            if ("object" == typeof y.firstPartyData) {
                var A = y.firstPartyData
                  , k = "?";
                for (var P in A)
                    A.hasOwnProperty(P) && (k += encodeURIComponent(P) + "=" + encodeURIComponent(A[P]) + "&");
                k = k.slice(0, -1),
                (C = encodeURIComponent(k).length) < 8e3 ? ("page"in p.site ? p.site.page += k : p.site.page = k,
                S += C) : Object(w.logError)("IX Bid Adapter: IX config FPD request size has exceeded maximum request size.", {
                    bidder: "ix",
                    code: Fo
                })
            }
            "number" == typeof y.timeout && (g.t = y.timeout),
            "boolean" == typeof y.detectMissingSizes ? p.ext.ixdiag.dms = y.detectMissingSizes : p.ext.ixdiag.dms = !0
        }
        for (var R = function(t) {
            if (S >= 8e3 || h.length >= 4)
                return "break";
            for (var n = r[j[t]], a = n.missingCount, o = void 0 === a ? 0 : a, d = n.missingImps, s = void 0 === d ? [] : d, c = n.ixImps, u = !1, l = 8e3 - S, f = {
                ixImps: void 0 === c ? [] : c,
                missingBannerImpressions: s
            }, b = Object.keys(f).map((function(e) {
                return f[e]
            }
            )).filter((function(e) {
                return Array.isArray(e)
            }
            )).reduce((function(e, t) {
                return e.concat.apply(e, t)
            }
            ), []), m = encodeURIComponent(JSON.stringify({
                impressionObjects: b
            })).length; b.length && m > l; )
                u = !0,
                b.pop(),
                m = encodeURIComponent(JSON.stringify({
                    impressionObjects: b
                })).length;
            var v = r[j[t]].gpid
              , y = r[j[t]].dfp_ad_unit_code;
            if (b.length && ve in b[0]) {
                var x = b[0]
                  , C = {
                    id: x.id,
                    banner: {
                        topframe: x.banner.topframe,
                        format: b.map((function(e) {
                            var t = e.banner;
                            return {
                                w: t.w,
                                h: t.h,
                                ext: e.ext
                            }
                        }
                        ))
                    }
                };
                (y || v) && (C.ext = {},
                C.ext.dfp_ad_unit_code = y,
                C.ext.gpid = v),
                "bidfloor"in b[0] && (C.bidfloor = b[0].bidfloor),
                "bidfloorcur"in b[0] && (C.bidfloorcur = b[0].bidfloorcur),
                p.imp.push(C),
                p.ext.ixdiag.msd += o,
                p.ext.ixdiag.msi += s.length
            } else {
                var A;
                b.forEach((function(e) {
                    return Object(Kr.a)(e, "ext.gpid", v)
                }
                )),
                (A = p.imp).push.apply(A, b)
            }
            S += m;
            var k = _.b.getConfig("ortb2") || {};
            if (!Object(w.isEmpty)(k) && !T) {
                p.ext.ixdiag.fpd = !0;
                var P = Object(I.default)({}, k.site || k.context);
                Object.keys(P).forEach((function(e) {
                    -1 === Lo.SITE.indexOf(e) && delete P[e]
                }
                ));
                var R = Object(I.default)({}, k.user);
                Object.keys(R).forEach((function(e) {
                    -1 === Lo.USER.indexOf(e) && delete R[e]
                }
                ));
                var U = Object(w.deepClone)(p);
                if (U.site = Object(w.mergeDeep)({}, U.site, P),
                U.user = Object(w.mergeDeep)({}, U.user, R),
                ("" + i + Object(w.parseQueryStringParameters)(Object(I.default)({}, g, {
                    r: JSON.stringify(U)
                }))).length < 8e3) {
                    p.site = Object(w.mergeDeep)({}, p.site, P),
                    p.user = Object(w.mergeDeep)({}, p.user, R),
                    T = !0;
                    var D = encodeURIComponent(JSON.stringify(Object(I.default)({}, P, R))).length;
                    S += D
                } else
                    Object(w.logError)("IX Bid Adapter: FPD request size has exceeded maximum request size.", {
                        bidder: "ix",
                        code: Vo
                    })
            }
            var B = t === j.length - 1;
            if (u || B) {
                var N = Object(w.deepClone)(g);
                B && !O || (p.ext.ixdiag.sn = O,
                N.sn = O),
                O++,
                N.r = JSON.stringify(p),
                h.push({
                    method: "GET",
                    url: i,
                    data: N,
                    validBidRequests: e
                }),
                S = E,
                p.imp = [],
                p.ext.ixdiag.msd = 0,
                p.ext.ixdiag.msi = 0,
                T = !1
            }
        }, U = 0; U < j.length; U++) {
            if ("break" === R(U))
                break
        }
        return h
    }
    function cd(e) {
        var t = e.userId || {};
        return Ko.filter((function(e) {
            return t[e]
        }
        ))
    }
    function ud(e, t) {
        if (t)
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                if (t[0] === n[0] && t[1] === n[1]) {
                    e.splice(r, 1);
                    break
                }
            }
    }
    function pd(e, t) {
        var r = Zo(e);
        0 != Object.keys(r).length && (t[e.transactionId] = {},
        t[e.transactionId].ixImps = [],
        t[e.transactionId].ixImps.push(r),
        t[e.transactionId].gpid = Object(x.a)(e, "ortb2Imp.ext.gpid"))
    }
    function ld(e, t, r) {
        var n = Object(I.default)({}, {
            detectMissingSizes: !0
        }, _.b.getConfig("ix"))
          , i = function(e) {
            var t = ed(e);
            t.banner = {};
            var r = Object(x.a)(e, "params.size");
            return r && (t.banner.w = r[0],
            t.banner.h = r[1],
            Object(x.a)(t, "ext.sid") || (t.ext.sid = Object(w.parseGPTSingleSizeArray)(r))),
            t.banner.topframe = Object(w.inIframe)() ? 0 : 1,
            td(e, t, ve),
            t
        }(e)
          , a = id(Object(x.a)(e, "mediaTypes.banner.sizes"), Object(x.a)(e, "params.size"));
        r.hasOwnProperty(e.transactionId) || (r[e.transactionId] = {}),
        r[e.transactionId].gpid = Object(x.a)(e, "ortb2Imp.ext.gpid"),
        r[e.transactionId].dfp_ad_unit_code = Object(x.a)(e, "ortb2Imp.ext.data.adserver.adslot"),
        a && (r[e.transactionId].hasOwnProperty("ixImps") || (r[e.transactionId].ixImps = []),
        r[e.transactionId].ixImps.push(i)),
        n.hasOwnProperty("detectMissingSizes") && n.detectMissingSizes && function(e, t, r) {
            var n = e.transactionId;
            if (t.hasOwnProperty(n)) {
                var i = [];
                t[n].hasOwnProperty("missingSizes") && (i = t[n].missingSizes),
                ud(i, e.params.size),
                t[n].missingSizes = i
            } else if (Object(x.a)(e, "mediaTypes.banner.sizes")) {
                var a = Object(w.deepClone)(e.mediaTypes.banner.sizes);
                ud(a, e.params.size);
                var o = {
                    missingSizes: a,
                    impression: r
                };
                t[n] = o
            }
        }(e, t, i)
    }
    function fd(e, t, r) {
        var n = Object(w.deepClone)(t);
        return n.ext.sid = Object(w.parseGPTSingleSizeArray)(r),
        n.banner.w = r[0],
        n.banner.h = r[1],
        td(e, n, ve),
        n
    }
    function bd(e) {
        if ("ERROR" === e.type && e.arguments && e.arguments[1] && "ix" === e.arguments[1].bidder) {
            var t = {
                hasEnforcementHook: !1,
                valid: Object(w.hasDeviceAccess)()
            };
            re(10, "ix", "bid-adapter", t, (function(t) {
                t.valid && function(e) {
                    if (Qo.localStorageIsEnabled()) {
                        var t;
                        try {
                            t = JSON.parse(Qo.getDataFromLocalStorage("ixdiag") || "{}")
                        } catch (e) {
                            Object(w.logWarn)("ix can not read ixdiag from localStorage.")
                        }
                        var r = new Date;
                        if (Object.keys(t).map((function(e) {
                            var n = new Date(e);
                            n.setDate(n.getDate() + 7) - r < 0 && delete t[e]
                        }
                        )),
                        "ERROR" === e.type && e.arguments && e.arguments[1] && "ix" === e.arguments[1].bidder) {
                            var n = r.toISOString().slice(0, 10)
                              , i = e.arguments[1].code;
                            i && (t[n] = t[n] || {},
                            Number(t[n][i]) || (t[n][i] = 0),
                            t[n][i]++)
                        }
                        Qo.setDataInLocalStorage("ixdiag", JSON.stringify(t))
                    }
                }(e)
            }
            ))
        }
    }
    function md(e) {
        e.renderer.push((function() {
            var t = e.adUnitCode
              , r = document.getElementById(t) ? t : Object(w.getGptSlotInfoForAdUnitCode)(t).divId;
            r ? window.createIXPlayer(r, e) : Object(w.logWarn)("IX Bid Adapter: adUnitCode: " + r + " not found on page.")
        }
        ))
    }
    function gd(e, t) {
        var r = N.install({
            id: e,
            url: t,
            loaded: !1
        });
        try {
            r.setRender(md)
        } catch (e) {
            return Object(w.logWarn)("Prebid Error calling setRender on renderer", e),
            null
        }
        return t ? r : (Object(w.logWarn)("Outstream renderer URL not found"),
        null)
    }
    function vd(e) {
        if ("outstream" !== Object(x.a)(e, "mediaTypes.video.context"))
            return !1;
        var t = Object(x.a)(e, "mediaTypes.video.renderer");
        return t || (t = Object(x.a)(e, "renderer")),
        !!("object" != typeof t || !t.url || !t.render) || t.backupOnly
    }
    var yd = {
        code: "ix",
        gvlid: 10,
        aliases: [{
            code: "roundel",
            gvlid: 10,
            skipPbsAliasing: !1
        }],
        supportedMediaTypes: ko,
        isBidRequestValid: function(e) {
            Jo || (S.on(Q.EVENTS.AUCTION_DEBUG, bd),
            S.on(Q.EVENTS.AD_RENDER_FAILED, bd),
            Jo = !0);
            var t, r, n = Object(x.a)(e, "params.video"), i = Object(x.a)(e, "params.size"), a = Object(x.a)(e, "mediaTypes.banner.sizes"), o = Object(x.a)(e, "mediaTypes.video"), d = Object(x.a)(e, "mediaTypes.video.playerSize"), s = e.params.hasOwnProperty("bidFloor"), c = e.params.hasOwnProperty("bidFloorCur");
            if (e.hasOwnProperty("mediaType") && !Object(w.contains)(ko, e.mediaType))
                return Object(w.logWarn)("IX Bid Adapter: media type is not supported."),
                !1;
            if (Object(x.a)(e, "mediaTypes.banner") && !a)
                return !1;
            if (i) {
                var u = od(i);
                if (!u)
                    return Object(w.logError)("IX Bid Adapter: size has invalid format.", {
                        bidder: "ix",
                        code: Bo
                    }),
                    !1;
                if (!id(e.sizes, u) && !id(d, u) && !id(a, u))
                    return Object(w.logError)("IX Bid Adapter: bid size is not included in ad unit sizes or player size.", {
                        bidder: "ix",
                        code: No
                    }),
                    !1
            }
            if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId)
                return Object(w.logError)("IX Bid Adapter: siteId must be string or number type.", {
                    bidder: "ix",
                    code: Mo
                }),
                !1;
            if ("string" != typeof e.params.siteId && isNaN(Number(e.params.siteId)))
                return Object(w.logError)("IX Bid Adapter: siteId must valid value", {
                    bidder: "ix",
                    code: Mo
                }),
                !1;
            if ((s || c) && !(s && c && (t = e.params.bidFloor,
            r = e.params.bidFloorCur,
            Boolean("number" == typeof t && "string" == typeof r && r.match(/^[A-Z]{3}$/)))))
                return Object(w.logError)("IX Bid Adapter: bidFloor / bidFloorCur parameter has invalid format.", {
                    bidder: "ix",
                    code: zo
                }),
                !1;
            if (o && n) {
                var p = ad(o, n);
                if (p.length)
                    return p.forEach((function(e) {
                        Object(w.logError)(e, {
                            bidder: "ix",
                            code: qo
                        })
                    }
                    )),
                    !1
            }
            var l = Zo(e).video;
            if ("outstream" === Object(x.a)(e, "mediaTypes.video.context") && vd(e) && l) {
                var f = Object(x.a)(l, "playerSize")[0];
                if (!(f[0] >= Po[0] && f[1] >= Po[1]))
                    return Object(w.logError)("IX Bid Adapter: " + d + " is an invalid size for IX outstream renderer"),
                    !1
            }
            return !0
        },
        buildRequests: function(e, t) {
            var r = []
              , n = {}
              , i = {}
              , a = {}
              , o = {};
            for (var d in e.forEach((function(e) {
                var t = Object.keys(Object(x.a)(e, "mediaTypes", {}));
                switch (function(e) {
                    return Object(x.a)(e, "mediaTypes.video") && Zo(e).video ? ge : ve
                }(e)) {
                case ve:
                    ld(e, o, n);
                    break;
                case ge:
                    pd(e, i)
                }
                Object(C.c)(t, ve) && Object(C.c)(t, ge) && (a[e.transactionId] = e)
            }
            )),
            Object.keys(a).forEach((function(e) {
                var t = a[e];
                n[e] || ld(t, o, n),
                i[e] || pd(t, i)
            }
            )),
            o)
                if (o.hasOwnProperty(d)) {
                    var s = o[d].missingSizes;
                    n.hasOwnProperty(d) || (n[d] = {}),
                    n[d].hasOwnProperty("missingImps") || (n[d].missingImps = [],
                    n[d].missingCount = 0);
                    for (var c = o[d].impression, u = 0; u < s.length; u++) {
                        var p = fd(e[0], c, s[u]);
                        n[d].missingImps.push(p),
                        n[d].missingCount++
                    }
                }
            return Object.keys(n).length > 0 && r.push.apply(r, sd(e, t, n, 7.2)),
            Object.keys(i).length > 0 && r.push.apply(r, sd(e, t, i, 8.1)),
            r
        },
        interpretResponse: function(e, t) {
            var r = []
              , n = null;
            if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid"))
                return r;
            for (var i = e.body, a = i.seatbid, o = 0; o < a.length; o++)
                if (a[o].hasOwnProperty("bid")) {
                    for (var d = a[o].bid, s = JSON.parse(t.data.r), c = 0; c < d.length; c++) {
                        var u = dd(d[c].impid, s.imp, t.validBidRequests);
                        if ((n = rd(d[c], i.cur, u)).mediaType === ge && vd(u)) {
                            var p = Object(x.a)(i, "ext.videoplayerurl");
                            if (n.renderer = gd(d[c].bidId, p),
                            !n.renderer)
                                continue
                        }
                        r.push(n)
                    }
                    if (Object(x.a)(s, "ext.ixdiag.err") && Qo.localStorageIsEnabled())
                        try {
                            Qo.removeDataFromLocalStorage("ixdiag")
                        } catch (e) {
                            Object(w.logError)("ix can not clear ixdiag from localStorage.")
                        }
                }
            return r
        },
        transformBidParams: function(e, t) {
            return Object(w.convertTypes)({
                siteID: "number"
            }, e)
        },
        getUserSyncs: function(e, t) {
            return e.iframeEnabled ? [{
                type: "iframe",
                url: "https://js-sec.indexww.com/um/ixmatch.html"
            }] : []
        }
    };
    je(yd),
    window.jwpb.installedModules.push("ixBidAdapter");
    var hd = yd.code;
    function Od(e, t, r, n) {
        var i = {
            mimes: n.mimes,
            minduration: n.minduration,
            maxduration: n.maxduration,
            protocols: n.protocols,
            linearity: n.linearity,
            placement: n.placement,
            playbackmethod: n.playbackmethod,
            startdelay: n.startdelay,
            api: n.api
        }
          , a = n.skip;
        if (void 0 !== a) {
            i.skip = a;
            var o = n.skipmin
              , d = n.skipafter;
            void 0 !== o && (i.skipmin = o),
            void 0 !== d && (i.skipafter = d)
        }
        var s = e.params.jwpseg
          , c = t.optionalParams || {};
        return Array.isArray(s) && s.length && (c.jwpseg = s),
        e.engine.setConfig({
            ix: {
                firstPartyData: c
            }
        }),
        {
            bidder: hd,
            params: {
                id: "JWPlayer",
                siteId: t.id,
                size: n.playerSize,
                video: i,
                content: r
            }
        }
    }
    function jd(e) {
        return void 0 === e && (e = {}),
        void 0 !== e.id
    }
    var Id = "jwplayer";
    function Ed(e, t, r, n) {
        t.id = t.placementId;
        var i = Va(e, t, r, n);
        return i.bidder = Id,
        i
    }
    function wd(e) {
        return !!e && void 0 !== e.placementId
    }
    var xd = 0
      , Sd = 1
      , Cd = 2
      , Td = "client_timeout"
      , _d = "client_bid_won"
      , Ad = _e()
      , kd = {};
    function Pd() {
        try {
            return window.top.document.referrer
        } catch (e) {
            return document.referrer
        }
    }
    function Rd(e) {
        var t = {
            domain: (e = e || {}).domain || kd.urlData.domain,
            page: e.page || kd.urlData.page,
            ref: e.ref || Pd(),
            isTop: e.isTop || kd.urlData.isTop
        };
        return Object(I.default)(t, function() {
            if (kd.pageMeta)
                return kd.pageMeta;
            var e = Ud('link[rel="canonical"]', "href")
              , t = Ud('meta[property="og:url"]', "content")
              , r = Ud('meta[name="twitter:url"]', "content");
            return kd.pageMeta = Object(I.default)({}, e && {
                canonical_url: e
            }, t && {
                og_url: t
            }, r && {
                twitter_url: r
            }),
            kd.pageMeta
        }())
    }
    function Ud(e, t) {
        var r, n, i = function(e, t) {
            try {
                var r = Object(w.getWindowTop)().document.querySelector(e);
                if (null !== r && r[t])
                    return r[t]
            } catch (e) {}
        }(e, t);
        return i && (r = i,
        (n = Object(w.getWindowTop)().document.createElement("a")).href = r,
        n.href)
    }
    function Dd(e, t) {
        return e.filter((function(e) {
            return e.type === t
        }
        ))
    }
    function Bd(e) {
        return {
            w: parseInt(e[0], 10),
            h: parseInt(e[1], 10)
        }
    }
    function Nd(e, t) {
        var r = Object(x.a)(e, "params")
          , n = Object(x.a)(t, "gdprConsent")
          , i = Object(x.a)(t, "uspConsent")
          , a = Object(x.a)(e, "userId")
          , o = Object(x.a)(e, "schain") || {}
          , d = Ld.getWindowSize()
          , s = !(!n || !n.gdprApplies)
          , c = !!i
          , u = !!_.b.getConfig("coppa");
        return Object(I.default)({}, {
            customer_id: r.cid
        }, {
            prebid_version: jwpb.version
        }, {
            gdpr_applies: s
        }, s && {
            gdpr_consent_string: n.consentString || ""
        }, {
            usp_applies: c
        }, c && {
            usp_consent_string: i || ""
        }, {
            coppa_applies: u
        }, -1 !== d.w && -1 !== d.h && {
            screen: d
        }, a && {
            user_id: a
        }, jwpb.medianetGlobals.analyticsEnabled && {
            analytics: !0
        }, !Object(w.isEmpty)(o) && {
            schain: o
        })
    }
    function qd(e) {
        var t = {
            id: e.bidId,
            ext: {
                dfp_id: e.adUnitCode,
                display_count: e.bidRequestsCount
            },
            all: e.params
        };
        e.ortb2Imp && (t.ortb2Imp = e.ortb2Imp);
        var r, n = Object(x.a)(e, "mediaTypes.banner.sizes") || [], i = Object(x.a)(e, "mediaTypes.video") || {}, a = Object(x.a)(e, "params.video") || {}, o = Object(I.default)({}, a, i);
        if (Object(w.isEmpty)(o) || (t.video = o),
        n.length > 0 && (t.banner = (r = n,
        Object(w.isArray)(r) && 2 === r.length && !Object(w.isArray)(r[0]) ? [Bd(r)] : r.map((function(e) {
            return Bd(e)
        }
        )))),
        e.nativeParams)
            try {
                t.native = JSON.stringify(e.nativeParams)
            } catch (e) {
                Object(w.logError)("medianet : Incorrect JSON : bidRequest.nativeParams")
            }
        e.params.crid && (t.tagid = e.params.crid.toString());
        var d = parseFloat(e.params.bidfloor || e.params.bidFloor);
        d && (t.bidfloor = d);
        var s = function(e) {
            var t = document.getElementById(e);
            if (!t && -1 !== e.indexOf("/")) {
                var r = Object(w.getGptSlotInfoForAdUnitCode)(e).divId;
                Object(w.isStr)(r) && (t = document.getElementById(r))
            }
            if (t && t.getBoundingClientRect) {
                var n = t.getBoundingClientRect()
                  , i = {};
                return i.top_left = {
                    y: n.top,
                    x: n.left
                },
                i.bottom_right = {
                    y: n.bottom,
                    x: n.right
                },
                i
            }
            return null
        }(e.adUnitCode);
        if (s && t.banner && 0 !== t.banner.length) {
            var c = function(e) {
                return {
                    top_left: {
                        x: e.top_left.x + window.pageXOffset,
                        y: e.top_left.y + window.pageYOffset
                    },
                    bottom_right: {
                        x: e.bottom_right.x + window.pageXOffset,
                        y: e.bottom_right.y + window.pageYOffset
                    }
                }
            }(s);
            t.ext.coordinates = c,
            t.ext.viewability = Fd(s.top_left, zd(t.banner)),
            Fd(c.top_left, zd(t.banner)) > .5 ? t.ext.visibility = Sd : t.ext.visibility = Cd
        } else
            t.ext.visibility = xd;
        var u = function(e) {
            var t = [];
            "function" == typeof e.getFloor && [ve, ge, me].forEach((function(r) {
                e.mediaTypes.hasOwnProperty(r) && (r == ve ? e.mediaTypes.banner.sizes.forEach((function(n) {
                    Md(e, r, n, t)
                }
                )) : Md(e, r, "*", t))
            }
            ));
            return t
        }(e);
        return u && u.length > 0 && (t.bidfloors = u),
        t
    }
    function Md(e, t, r, n) {
        var i = e.getFloor({
            currency: "USD",
            mediaType: t,
            size: r
        });
        r.length > 1 && (i.size = r),
        i.mediaType = t,
        n.push(i)
    }
    function zd(e) {
        return e.reduce((function(e, t) {
            return t.h * t.w < e.h * e.w ? t : e
        }
        ))
    }
    function Fd(e, t) {
        var r = t.w * t.h
          , n = Ld.getWindowSize()
          , i = {
            x: e.x + t.w,
            y: e.y + t.h
        };
        return 0 === r || -1 === n.w || -1 === n.h ? 0 : function(e, t, r, n) {
            if (e.x > n.x || t.x < r.x || e.y > n.y || t.y < r.y)
                return 0;
            return (Math.min(t.x, n.x) - Math.max(e.x, r.x)) * (Math.min(t.y, n.y) - Math.max(e.y, r.y))
        }(e, i, {
            x: 0,
            y: 0
        }, {
            x: n.w,
            y: n.h
        }) / r
    }
    function Wd(e, t) {
        t = Object(w.isArray)(t) && t || [];
        var r = {
            logid: "kfk",
            evtid: "projectevents",
            project: "prebid"
        };
        return r.acid = Object(x.a)(t, "0.auctionId") || "",
        r.cid = jwpb.medianetGlobals.cid || "",
        r.crid = t.map((function(e) {
            return Object(x.a)(e, "params.0.crid") || e.adUnitCode
        }
        )).join("|"),
        r.adunit_count = t.length || 0,
        r.dn = kd.urlData.domain || "",
        r.requrl = kd.urlData.page || "",
        r.istop = kd.urlData.isTop || "",
        r.event = e.name || "",
        r.value = e.value || "",
        r.rd = e.related_data || "",
        r
    }
    function Vd(e, t) {
        var r = {
            protocol: "https",
            hostname: "qsearch-a.akamaihd.net/log",
            search: Wd(e, t)
        };
        Object(w.triggerPixel)(Object(w.buildUrl)(r))
    }
    function Gd(e) {
        var t, r = Object(x.a)(e, "context") || "", n = Object(x.a)(e, "vto");
        "outstream" == r && n && (e.renderer = ((t = N.install({
            url: "https://prebid.media.net/video/bundle.js"
        })).setRender((function(e) {
            window.mnet.queue.push((function() {
                var t = {
                    width: e.width,
                    height: e.height,
                    vastTimeout: e.vto,
                    maxAllowedVastTagRedirects: e.mavtr,
                    allowVpaid: e.avp,
                    autoPlay: e.ap,
                    preload: e.pl,
                    mute: e.mt
                }
                  , r = e.dfp_id
                  , n = Object(w.getGptSlotInfoForAdUnitCode)(r).divId || r;
                window.mnet.mediaNetoutstreamPlayer(e, n, t)
            }
            ))
        }
        )),
        t))
    }
    window.mnet = window.mnet || {},
    window.mnet.queue = window.mnet.queue || [],
    kd.urlData = {
        domain: Object(w.parseUrl)(Ad.referer, {
            noDecodeWholeURL: !0
        }).hostname,
        page: Ad.referer,
        isTop: Ad.reachedTop
    },
    jwpb.medianetGlobals = jwpb.medianetGlobals || {};
    var Ld = {
        code: "medianet",
        gvlid: 142,
        supportedMediaTypes: [ve, me, ge],
        isBidRequestValid: function(e) {
            return e.params ? e.params.cid && Object(w.isStr)(e.params.cid) && !Object(w.isEmptyStr)(e.params.cid) ? (Object(I.default)(jwpb.medianetGlobals, !jwpb.medianetGlobals.cid && {
                cid: e.params.cid
            }),
            !0) : (Object(w.logError)("medianet : cid should be a string"),
            !1) : (Object(w.logError)("medianet : Missing bid parameters"),
            !1)
        },
        buildRequests: function(e, t) {
            var r, n = function(e, t) {
                return {
                    site: Rd(e[0].params.site),
                    ext: Nd(e[0], t),
                    id: e[0].auctionId,
                    imp: e.map((function(e) {
                        return qd(e)
                    }
                    )),
                    tmax: t.timeout || _.b.getConfig("bidderTimeout")
                }
            }(e, t);
            return {
                method: "POST",
                url: (r = n.ext.customer_id,
                "https://prebid.media.net/rtb/prebid?cid=" + encodeURIComponent(r)),
                data: JSON.stringify(n)
            }
        },
        interpretResponse: function(e, t) {
            var r = [];
            if (!e || !e.body)
                return Object(w.logInfo)("medianet : response is empty"),
                r;
            var n = e.body.bidList;
            return Object(w.isArray)(n) && 0 !== n.length ? ((r = n.filter((function(e) {
                return function(e) {
                    return !1 === e.no_bid && parseFloat(e.cpm) > 0
                }(e)
            }
            ))).forEach(Gd),
            r) : (Object(w.logInfo)("medianet : no bids"),
            r)
        },
        getUserSyncs: function(e, t) {
            var r, n = (r = t,
            !Object(w.isEmpty)(r) && r[0].body && r[0].body.ext && Object(w.isArray)(r[0].body.ext.csUrl) ? r[0].body.ext.csUrl : []);
            return e.iframeEnabled ? Dd(n, "iframe") : e.pixelEnabled ? Dd(n, "image") : void 0
        },
        onTimeout: function(e) {
            try {
                Vd({
                    name: Td,
                    value: e.length,
                    related_data: e[0].timeout || _.b.getConfig("bidderTimeout")
                }, e)
            } catch (e) {}
        },
        onBidWon: function(e) {
            try {
                Vd({
                    name: _d,
                    value: e.cpm
                }, [e])
            } catch (e) {}
        },
        clearMnData: function() {
            kd = {}
        },
        getWindowSize: function() {
            return {
                w: window.screen.width || -1,
                h: window.screen.height || -1
            }
        }
    };
    je(Ld),
    window.jwpb.installedModules.push("medianetBidAdapter");
    var Hd = Ld.code;
    function Kd(e, t, r) {
        var n = {
            cid: "" + t.pubid,
            crid: "" + t.id,
            site: {
                content: r
            }
        }
          , i = e.settings.floorPriceCents;
        void 0 !== i && (n.bidfloor = i / 100);
        var a = e.params.jwpseg;
        return Array.isArray(a) && a.length && (n.ccd = a),
        {
            bidder: Hd,
            params: n
        }
    }
    function Yd(e) {
        return !!e && void 0 !== e.pubid && void 0 !== e.id
    }
    var Xd = {
        code: "oneVideo",
        VERSION: "3.1.2",
        ENDPOINT: "https://ads.adaptv.advertising.com/rtb/openrtb?ext_id=",
        E2ETESTENDPOINT: "https://ads-wc.v.ssp.yahoo.com/rtb/openrtb?ext_id=",
        SYNC_ENDPOINT1: "https://pixel.advertising.com/ups/57304/sync?gdpr=&gdpr_consent=&_origin=0&redir=true",
        SYNC_ENDPOINT2: "https://match.adsrvr.org/track/cmf/generic?ttd_pid=adaptv&ttd_tpi=1",
        supportedMediaTypes: ["video", "banner"],
        gvlid: 25,
        isBidRequestValid: function(e) {
            if ("oneVideo" !== e.bidder || void 0 === e.params)
                return !1;
            if (e.params && e.params.video && e.params.video.e2etest)
                return !0;
            if (void 0 === e.mediaTypes.video && void 0 === e.mediaTypes.banner)
                return Object(w.logError)("Failed validation: adUnit mediaTypes.video OR mediaTypes.banner not declared"),
                !1;
            if (e.mediaTypes.video) {
                if (void 0 === e.mediaTypes.video.playerSize && e.params.video && (void 0 === e.params.video.playerWidth || void 0 === e.params.video.playerHeight))
                    return Object(w.logError)("Failed validation: Player size not declared in either mediaTypes.playerSize OR bid.params.video.plauerWidth & bid.params.video.playerHeight."),
                    !1;
                if (void 0 === e.mediaTypes.video.mimes && (!e.params.video || void 0 === e.params.video.mimes))
                    return Object(w.logError)("Failed validation: adUnit mediaTypes.mimes OR params.video.mimes not declared"),
                    !1;
                if ("outstream" === e.mediaTypes.video.context && e.params.video && 1 === e.params.video.display)
                    return Object(w.logError)("Failed validation: Dynamic Ad Placement cannot be used with context Outstream (params.video.display=1)"),
                    !1
            }
            return void 0 !== e.params.pubId || (Object(w.logError)("Failed validation: Adapter cannot send requests without bid.params.pubId"),
            !1)
        },
        buildRequests: function(e, t) {
            var r = t ? t.gdprConsent : null;
            return e.map((function(e) {
                var n = Xd.ENDPOINT
                  , i = e.params.pubId;
                return e.params.video.e2etest && (n = Xd.E2ETESTENDPOINT,
                i = "HBExchange"),
                {
                    method: "POST",
                    url: n + i,
                    data: $d(e, r, t),
                    bidRequest: e
                }
            }
            ))
        },
        interpretResponse: function(e, t) {
            var r, n, i, a = t.bidRequest;
            try {
                r = (e = e.body).seatbid[0].bid[0]
            } catch (t) {
                e = null
            }
            return e && r && (r.adm || r.nurl) && r.price ? (n = Jd(a.sizes),
            (i = {
                requestId: a.bidId,
                bidderCode: Xd.code,
                cpm: r.price,
                creativeId: r.crid,
                width: n.width,
                height: n.height,
                currency: e.cur,
                ttl: a.params.video.ttl > 0 && a.params.video.ttl <= 3600 ? a.params.video.ttl : 300,
                netRevenue: !0,
                adUnitCode: a.adUnitCode,
                meta: {
                    advertiserDomains: r.adomain
                }
            }).mediaType = a.mediaTypes.banner ? "banner" : "video",
            r.nurl ? i.vastUrl = r.nurl : r.adm && 1 === a.params.video.display ? i.ad = r.adm : r.adm && (i.vastXml = r.adm),
            a.mediaTypes.video && (i.renderer = "outstream" === a.mediaTypes.video.context ? function(e, t) {
                e.renderer || (e.renderer = {},
                e.renderer.url = "https://cdn.vidible.tv/prod/hb-outstream-renderer/renderer.js",
                e.renderer.render = function(e) {
                    setTimeout((function() {
                        o2PlayerRender(e)
                    }
                    ), 700)
                }
                )
            }(a) : void 0),
            i) : (Object(w.logWarn)("No valid bids from " + Xd.code + " bidder"),
            [])
        },
        getUserSyncs: function(e, t, r) {
            void 0 === r && (r = {});
            var n = r
              , i = n.gdprApplies
              , a = n.consentString
              , o = void 0 === a ? "" : a;
            if (e.pixelEnabled)
                return [{
                    type: "image",
                    url: Xd.SYNC_ENDPOINT1
                }, {
                    type: "image",
                    url: "https://sync-tm.everesttech.net/upi/pid/m7y5t93k?gdpr=" + (i ? 1 : 0) + "&gdpr_consent=" + o + "&redir=https%3A%2F%2Fpixel.advertising.com%2Fups%2F55986%2Fsync%3Fuid%3D%24%7BUSER_ID%7D%26_origin%3D0" + encodeURI("&gdpr=" + (i ? 1 : 0) + "&gdpr_consent=" + o)
                }, {
                    type: "image",
                    url: Xd.SYNC_ENDPOINT2
                }]
        }
    };
    function Jd(e) {
        var t = Object(w.parseSizesInput)(e)
          , r = t.length ? t[0].split("x") : []
          , n = r[0]
          , i = r[1];
        return {
            width: parseInt(n, 10) || void 0,
            height: parseInt(i, 10) || void 0
        }
    }
    function Qd(e) {
        return !(!e || !e.gdprApplies)
    }
    function $d(e, t, r) {
        var n = r.refererInfo.referer
          , i = e.params.site && e.params.site.page ? e.params.site.page : n.href
          , a = e.params.site && e.params.site.referrer ? e.params.site.referrer : r.refererInfo.referer
          , o = {
            currency: e.params.cur || "USD",
            mediaType: "video",
            size: "*"
        }
          , d = {
            id: Object(w.generateUUID)(),
            at: 2,
            imp: [{
                id: "1",
                secure: "https:" === document.location.protocol,
                ext: {
                    hb: 1,
                    prebidver: "6.29.0",
                    adapterver: Xd.VERSION
                }
            }],
            site: {
                page: i,
                ref: a
            },
            device: {
                ua: navigator.userAgent
            },
            tmax: 200
        };
        if (null == e.params.video.display || 1 != e.params.video.display) {
            if (d.imp[0].video = {
                linearity: 1
            },
            e.params.video.playerWidth && e.params.video.playerHeight)
                d.imp[0].video.w = e.params.video.playerWidth,
                d.imp[0].video.h = e.params.video.playerHeight;
            else {
                var s = Jd(e.mediaTypes.video.playerSize);
                d.imp[0].video.w = s.width,
                d.imp[0].video.h = s.height
            }
            e.params.video.mimes ? d.imp[0].video.mimes = e.params.video.mimes : d.imp[0].video.mimes = e.mediaTypes.video.mimes,
            (e.mediaTypes.video.maxbitrate || e.params.video.maxbitrate) && (d.imp[0].video.maxbitrate = e.params.video.maxbitrate || e.mediaTypes.video.maxbitrate),
            (e.mediaTypes.video.maxduration || e.params.video.maxduration) && (d.imp[0].video.maxduration = e.params.video.maxduration || e.mediaTypes.video.maxduration),
            (e.mediaTypes.video.minduration || e.params.video.minduration) && (d.imp[0].video.minduration = e.params.video.minduration || e.mediaTypes.video.minduration),
            (e.mediaTypes.video.api || e.params.video.api) && (d.imp[0].video.api = e.params.video.api || e.mediaTypes.video.api),
            (e.mediaTypes.video.delivery || e.params.video.delivery) && (d.imp[0].video.delivery = e.params.video.delivery || e.mediaTypes.video.delivery),
            (e.mediaTypes.video.position || e.params.video.position) && (d.imp[0].video.pos = e.params.video.position || e.mediaTypes.video.position),
            (e.mediaTypes.video.playbackmethod || e.params.video.playbackmethod) && (d.imp[0].video.playbackmethod = e.params.video.playbackmethod || e.mediaTypes.video.playbackmethod),
            (e.mediaTypes.video.placement || e.params.video.placement) && (d.imp[0].video.placement = e.params.video.placement || e.mediaTypes.video.placement),
            e.params.video.rewarded && (d.imp[0].ext.rewarded = e.params.video.rewarded),
            (e.mediaTypes.video.linearity || e.params.video.linearity) && (d.imp[0].video.linearity = e.params.video.linearity || e.mediaTypes.video.linearity || 1),
            (e.mediaTypes.video.protocols || e.params.video.protocols) && (d.imp[0].video.protocols = e.params.video.protocols || e.mediaTypes.video.protocols || [2, 5])
        } else
            1 == e.params.video.display && (o.mediaType = "banner",
            d.imp[0].banner = {
                mimes: e.params.video.mimes,
                w: e.params.video.playerWidth,
                h: e.params.video.playerHeight,
                pos: e.params.video.position
            },
            e.params.video.placement && (d.imp[0].banner.placement = e.params.video.placement),
            e.params.video.maxduration && (d.imp[0].banner.ext = d.imp[0].banner.ext || {},
            d.imp[0].banner.ext.maxduration = e.params.video.maxduration),
            e.params.video.minduration && (d.imp[0].banner.ext = d.imp[0].banner.ext || {},
            d.imp[0].banner.ext.minduration = e.params.video.minduration));
        if (Object(w.isFn)(e.getFloor)) {
            var c = e.getFloor(o);
            d.imp[0].bidfloor = c.floor,
            d.cur = c.currency
        } else
            d.imp[0].bidfloor = e.params.bidfloor;
        if (e.params.video.inventoryid && (d.imp[0].ext.inventoryid = e.params.video.inventoryid),
        e.params.video.sid ? (d.source = {
            ext: {
                schain: {
                    complete: 1,
                    nodes: [{
                        sid: e.params.video.sid,
                        rid: d.id
                    }]
                }
            }
        },
        1 == e.params.video.hp && (d.source.ext.schain.nodes[0].hp = e.params.video.hp)) : e.schain && (d.source = {
            ext: {
                schain: e.schain
            }
        },
        d.source.ext.schain.nodes[0].rid = d.id),
        e.params.site && e.params.site.id && (d.site.id = e.params.site.id),
        (Qd(t) || r && r.uspConsent) && (d.regs = {
            ext: {}
        },
        Qd(t) && (d.regs.ext.gdpr = 1),
        t && t.consentString && (d.user = {
            ext: {
                consent: t.consentString
            }
        }),
        r && r.uspConsent && (d.regs.ext.us_privacy = r.uspConsent)),
        e.params.video.e2etest && (Object(w.logMessage)("E2E test mode enabled: \n The following parameters are being overridden by e2etest mode:\n* bidfloor:null\n* width:300\n* height:250\n* mimes: video/mp4, application/javascript\n* api:2\n* site.page/ref: verizonmedia.com\n* tmax:1000"),
        d.imp[0].bidfloor = null,
        d.imp[0].video.w = 300,
        d.imp[0].video.h = 250,
        d.imp[0].video.mimes = ["video/mp4", "application/javascript"],
        d.imp[0].video.api = [2],
        d.site.page = "https://verizonmedia.com",
        d.site.ref = "https://verizonmedia.com",
        d.tmax = 1e3),
        e.params.video.custom && Object(w.isPlainObject)(e.params.video.custom))
            for (var u in d.imp[0].ext.custom = {},
            e.params.video.custom)
                (Object(w.isStr)(e.params.video.custom[u]) || Object(w.isNumber)(e.params.video.custom[u])) && (d.imp[0].ext.custom[u] = e.params.video.custom[u]);
        if (e.params.video.content && Object(w.isPlainObject)(e.params.video.content)) {
            d.site.content = {};
            var p = ["id", "title", "series", "season", "genre", "contentrating", "language"]
              , l = ["episode", "prodq", "context", "livestream", "len"]
              , f = ["cat"]
              , b = ["ext"];
            for (var m in e.params.video.content)
                p.indexOf(m) > -1 && Object(w.isStr)(e.params.video.content[m]) || l.indexOf(m) > -1 && Object(w.isNumber)(e.params.video.content[m]) || b.indexOf(m) > -1 && Object(w.isPlainObject)(e.params.video.content[m]) || f.indexOf(m) > -1 && Object(w.isArray)(e.params.video.content[m]) && e.params.video.content[m].every((function(e) {
                    return Object(w.isStr)(e)
                }
                )) ? d.site.content[m] = e.params.video.content[m] : Object(w.logMessage)("oneVideo bid adapter validation error: ", m, " is either not supported is OpenRTB V2.5 or value is undefined")
        }
        return d
    }
    je(Xd),
    window.jwpb.installedModules.push("oneVideoBidAdapter");
    var Zd = Xd.code;
    function es(e, t, r, n) {
        var i = n.playerSize
          , a = {
            playerWidth: i[0],
            playerHeight: i[1],
            mimes: n.mimes,
            protocols: n.protocols,
            api: n.api,
            playbackmethod: n.playbackmethod,
            minduration: n.minduration,
            maxduration: n.maxduration,
            placement: n.placement,
            inventoryid: t.id,
            content: r
        }
          , o = {
            pubId: "" + t.pubid
        }
          , d = e.settings.floorPriceCents;
        void 0 !== d && (o.bidfloor = d / 100);
        var s = n.pos;
        return void 0 !== s && (a.position = s),
        o.video = a,
        {
            bidder: Zd,
            params: o
        }
    }
    function ts(e) {
        return void 0 === e && (e = {}),
        !!e && void 0 !== e.pubid
    }
    var rs = "openx";
    function ns(e, t, r, n) {
        var i = {
            unit: "" + t.id,
            video: n
        }
          , a = t.delDomain;
        a && (i.delDomain = "" + a);
        var o = t.platform;
        o && (i.platform = "" + o);
        var d = e.settings.floorPriceCents;
        return void 0 !== d && (i.customFloor = d / 100),
        {
            bidder: rs,
            params: i
        }
    }
    function is(e) {
        return !!e && void 0 !== e.id && (void 0 !== e.delDomain || void 0 !== e.platform)
    }
    var as = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js")
      , os = {
        kadpageurl: "",
        gender: "",
        yob: "",
        lat: "",
        lon: "",
        wiid: "",
        profId: "",
        verId: ""
    }
      , ds = "number"
      , ss = "string"
      , cs = "boolean"
      , us = "array"
      , ps = {
        mimes: us,
        minduration: ds,
        maxduration: ds,
        startdelay: ds,
        playbackmethod: us,
        api: us,
        protocols: us,
        w: ds,
        h: ds,
        battr: us,
        linearity: ds,
        placement: ds,
        minbitrate: ds,
        maxbitrate: ds,
        skip: ds
    }
      , ls = {
        TITLE: {
            ID: 1,
            KEY: "title",
            TYPE: 0
        },
        IMAGE: {
            ID: 2,
            KEY: "image",
            TYPE: 0
        },
        ICON: {
            ID: 3,
            KEY: "icon",
            TYPE: 0
        },
        SPONSOREDBY: {
            ID: 4,
            KEY: "sponsoredBy",
            TYPE: 1
        },
        BODY: {
            ID: 5,
            KEY: "body",
            TYPE: 2
        },
        CLICKURL: {
            ID: 6,
            KEY: "clickUrl",
            TYPE: 0
        },
        VIDEO: {
            ID: 7,
            KEY: "video",
            TYPE: 0
        },
        EXT: {
            ID: 8,
            KEY: "ext",
            TYPE: 0
        },
        DATA: {
            ID: 9,
            KEY: "data",
            TYPE: 0
        },
        LOGO: {
            ID: 10,
            KEY: "logo",
            TYPE: 0
        },
        SPONSORED: {
            ID: 11,
            KEY: "sponsored",
            TYPE: 1
        },
        DESC: {
            ID: 12,
            KEY: "data",
            TYPE: 2
        },
        RATING: {
            ID: 13,
            KEY: "rating",
            TYPE: 3
        },
        LIKES: {
            ID: 14,
            KEY: "likes",
            TYPE: 4
        },
        DOWNLOADS: {
            ID: 15,
            KEY: "downloads",
            TYPE: 5
        },
        PRICE: {
            ID: 16,
            KEY: "price",
            TYPE: 6
        },
        SALEPRICE: {
            ID: 17,
            KEY: "saleprice",
            TYPE: 7
        },
        PHONE: {
            ID: 18,
            KEY: "phone",
            TYPE: 8
        },
        ADDRESS: {
            ID: 19,
            KEY: "address",
            TYPE: 9
        },
        DESC2: {
            ID: 20,
            KEY: "desc2",
            TYPE: 10
        },
        DISPLAYURL: {
            ID: 21,
            KEY: "displayurl",
            TYPE: 11
        },
        CTA: {
            ID: 22,
            KEY: "cta",
            TYPE: 12
        }
    }
      , fs = 1
      , bs = 2
      , ms = 3
      , gs = [{
        id: ls.SPONSOREDBY.ID,
        required: !0,
        data: {
            type: 1
        }
    }, {
        id: ls.TITLE.ID,
        required: !0
    }, {
        id: ls.IMAGE.ID,
        required: !0
    }]
      , vs = {
        1: "PMP",
        5: "PREF",
        6: "PMPG"
    }
      , ys = 1
      , hs = 2
      , Os = {
        bootstrapPlayer: function(e) {
            var t = {
                code: e.adUnitCode
            };
            if (e.vastXml ? t.vastXml = e.vastXml : e.vastUrl && (t.vastUrl = e.vastUrl),
            e.vastXml || e.vastUrl) {
                for (var r, n = Os.getRendererId("pubmatic", e.rendererCode), i = document.getElementById(e.adUnitCode), a = 0; a < window.bluebillywig.renderers.length; a++)
                    if (window.bluebillywig.renderers[a]._id === n) {
                        r = window.bluebillywig.renderers[a];
                        break
                    }
                r ? r.bootstrap(t, i) : Object(w.logWarn)("PubMatic: : Couldn't find a renderer with " + n)
            } else
                Object(w.logWarn)("PubMatic: : No vastXml or vastUrl on bid, bailing...")
        },
        newRenderer: function(e, t) {
            var r = as.replace("$RENDERER", e)
              , n = N.install({
                url: r,
                loaded: !1,
                adUnitCode: t
            });
            try {
                n.setRender(Os.outstreamRender)
            } catch (e) {
                Object(w.logWarn)("PubMatic: : Error tying to setRender on renderer", e)
            }
            return n
        },
        outstreamRender: function(e) {
            e.renderer.push((function() {
                Os.bootstrapPlayer(e)
            }
            ))
        },
        getRendererId: function(e, t) {
            return e + "-" + t
        }
    }
      , js = [ve, ge, me]
      , Is = 0
      , Es = !1
      , ws = {}
      , xs = {};
    function Ss(e, t) {
        if (Object(w.isStr)(t))
            switch (e) {
            case "pmzoneid":
                return t.split(",").slice(0, 50).map((function(e) {
                    return e.trim()
                }
                )).join();
            case "kadfloor":
            case "lat":
            case "lon":
                return parseFloat(t) || void 0;
            case "yob":
                return parseInt(t) || void 0;
            default:
                return t
            }
        else
            t && Object(w.logWarn)("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + typeof t)
    }
    function Cs(e) {
        var t;
        e.params.adUnit = "",
        e.params.adUnitIndex = "0",
        e.params.width = 0,
        e.params.height = 0,
        e.params.adSlot = (t = e.params.adSlot,
        Object(w.isStr)(t) ? t.replace(/^\s+/g, "").replace(/\s+$/g, "") : (t && Object(w.logWarn)("pubmatic: adSlot must be a string. Ignoring adSlot"),
        ""));
        var r = e.params.adSlot
          , n = r.split(":");
        if (r = n[0],
        2 == n.length && (e.params.adUnitIndex = n[1]),
        n = r.split("@"),
        e.params.adUnit = n[0],
        n.length > 1) {
            if (2 != (n = n[1].split("x")).length)
                return void Object(w.logWarn)("PubMatic: AdSlot Error: adSlot not in required format");
            e.params.width = parseInt(n[0], 10),
            e.params.height = parseInt(n[1], 10)
        } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(ve) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
            for (var i = 0, a = []; i < e.mediaTypes.banner.sizes.length; i++)
                2 === e.mediaTypes.banner.sizes[i].length && a.push(e.mediaTypes.banner.sizes[i]);
            e.mediaTypes.banner.sizes = a,
            e.mediaTypes.banner.sizes.length >= 1 && (e.params.width = e.mediaTypes.banner.sizes[0][0],
            e.params.height = e.mediaTypes.banner.sizes[0][1],
            e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
        }
    }
    function Ts(e, t, r) {
        var n, i = "Ignoring param key: " + e + ", expects " + r + ", found " + typeof t;
        switch (r) {
        case cs:
            n = w.isBoolean;
            break;
        case ds:
            n = w.isNumber;
            break;
        case ss:
            n = w.isStr;
            break;
        case us:
            n = w.isArray
        }
        if (n(t))
            return t;
        Object(w.logWarn)("PubMatic: " + i)
    }
    function _s(e, t) {
        var r = e.KEY;
        return {
            id: e.ID,
            required: t[r].required ? 1 : 0,
            data: {
                type: e.TYPE,
                len: t[r].len,
                ext: t[r].ext
            }
        }
    }
    function As(e) {
        var t = {
            assets: []
        };
        for (var r in e) {
            if (e.hasOwnProperty(r)) {
                var n = {};
                if (!(t.assets && t.assets.length > 0 && t.assets.hasOwnProperty(r)))
                    switch (r) {
                    case ls.TITLE.KEY:
                        e[r].len || e[r].length ? n = {
                            id: ls.TITLE.ID,
                            required: e[r].required ? 1 : 0,
                            title: {
                                len: e[r].len || e[r].length,
                                ext: e[r].ext
                            }
                        } : Object(w.logWarn)("PubMatic: Error: Title Length is required for native ad: " + JSON.stringify(e));
                        break;
                    case ls.IMAGE.KEY:
                        e[r].sizes && e[r].sizes.length > 0 ? n = {
                            id: ls.IMAGE.ID,
                            required: e[r].required ? 1 : 0,
                            img: {
                                type: ms,
                                w: e[r].w || e[r].width || (e[r].sizes ? e[r].sizes[0] : void 0),
                                h: e[r].h || e[r].height || (e[r].sizes ? e[r].sizes[1] : void 0),
                                wmin: e[r].wmin || e[r].minimumWidth || (e[r].minsizes ? e[r].minsizes[0] : void 0),
                                hmin: e[r].hmin || e[r].minimumHeight || (e[r].minsizes ? e[r].minsizes[1] : void 0),
                                mimes: e[r].mimes,
                                ext: e[r].ext
                            }
                        } : Object(w.logWarn)("PubMatic: Error: Image sizes is required for native ad: " + JSON.stringify(e));
                        break;
                    case ls.ICON.KEY:
                        e[r].sizes && e[r].sizes.length > 0 ? n = {
                            id: ls.ICON.ID,
                            required: e[r].required ? 1 : 0,
                            img: {
                                type: fs,
                                w: e[r].w || e[r].width || (e[r].sizes ? e[r].sizes[0] : void 0),
                                h: e[r].h || e[r].height || (e[r].sizes ? e[r].sizes[1] : void 0)
                            }
                        } : Object(w.logWarn)("PubMatic: Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                        break;
                    case ls.VIDEO.KEY:
                        n = {
                            id: ls.VIDEO.ID,
                            required: e[r].required ? 1 : 0,
                            video: {
                                minduration: e[r].minduration,
                                maxduration: e[r].maxduration,
                                protocols: e[r].protocols,
                                mimes: e[r].mimes,
                                ext: e[r].ext
                            }
                        };
                        break;
                    case ls.EXT.KEY:
                        n = {
                            id: ls.EXT.ID,
                            required: e[r].required ? 1 : 0
                        };
                        break;
                    case ls.LOGO.KEY:
                        n = {
                            id: ls.LOGO.ID,
                            required: e[r].required ? 1 : 0,
                            img: {
                                type: bs,
                                w: e[r].w || e[r].width || (e[r].sizes ? e[r].sizes[0] : void 0),
                                h: e[r].h || e[r].height || (e[r].sizes ? e[r].sizes[1] : void 0)
                            }
                        };
                        break;
                    case ls.SPONSOREDBY.KEY:
                    case ls.BODY.KEY:
                    case ls.RATING.KEY:
                    case ls.LIKES.KEY:
                    case ls.DOWNLOADS.KEY:
                    case ls.PRICE.KEY:
                    case ls.SALEPRICE.KEY:
                    case ls.PHONE.KEY:
                    case ls.ADDRESS.KEY:
                    case ls.DESC2.KEY:
                    case ls.DISPLAYURL.KEY:
                    case ls.CTA.KEY:
                        n = _s(xs[r], e)
                    }
            }
            n && n.id && (t.assets[t.assets.length] = n)
        }
        var i = gs.length
          , a = 0;
        return gs.forEach((function(e) {
            for (var r = t.assets.length, n = 0; n < r; n++)
                if (e.id == t.assets[n].id) {
                    a++;
                    break
                }
        }
        )),
        Es = i != a,
        t
    }
    function ks(e) {
        var t, r = e.mediaTypes.banner.sizes, n = [];
        if (void 0 !== r && Object(w.isArray)(r)) {
            if (t = {},
            e.params.width || e.params.height)
                t.w = e.params.width,
                t.h = e.params.height;
            else {
                if (0 === r.length)
                    return t = void 0,
                    Object(w.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."),
                    t;
                t.w = parseInt(r[0][0], 10),
                t.h = parseInt(r[0][1], 10),
                r = r.splice(1, r.length - 1)
            }
            r.length > 0 && (n = [],
            r.forEach((function(e) {
                e.length > 1 && n.push({
                    w: e[0],
                    h: e[1]
                })
            }
            )),
            n.length > 0 && (t.format = n)),
            t.pos = 0,
            t.topframe = Object(w.inIframe)() ? 0 : 1
        } else
            Object(w.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."),
            t = void 0;
        return t
    }
    function Ps(e) {
        var t, r = Object(w.mergeDeep)(Object(x.a)(e.mediaTypes, "video"), e.params.video);
        if (void 0 !== r) {
            for (var n in t = {},
            function(e, t) {
                Object(x.a)(e, "placement") || Object(w.logWarn)("Video.Placement param missing for " + t)
            }(r, e.adUnitCode),
            ps)
                r.hasOwnProperty(n) && (t[n] = Ts(n, r[n], ps[n]));
            Object(w.isArray)(e.mediaTypes.video.playerSize[0]) ? (t.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10),
            t.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : Object(w.isNumber)(e.mediaTypes.video.playerSize[0]) && (t.w = parseInt(e.mediaTypes.video.playerSize[0], 10),
            t.h = parseInt(e.mediaTypes.video.playerSize[1], 10))
        } else
            t = void 0,
            Object(w.logWarn)("PubMatic: Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
        return t
    }
    function Rs(e, t, r) {
        var n = t.rtd && t.rtd.jwplayer && t.rtd.jwplayer.targeting || void 0
          , i = "";
        if (void 0 !== n && "" !== n && n.hasOwnProperty("segments")) {
            var a, o = n.segments.length;
            i += "jw-id=" + n.content.id;
            for (var d = 0; d < o; d++)
                i += "|jw-" + n.segments[d] + "=1";
            r ? void 0 === e.dctr || 0 == e.dctr.length ? e.dctr = i : e.dctr += "|" + i : (a = e.ext) && void 0 === a.key_val ? a.key_val = i : a.key_val += "|" + i
        }
    }
    function Us(e, t) {
        var r, n, i = {}, a = {}, o = e.hasOwnProperty("sizes") ? e.sizes : [], d = "", s = [];
        if (function(e, t) {
            t.params.deals && (Object(w.isArray)(t.params.deals) ? t.params.deals.forEach((function(t) {
                Object(w.isStr)(t) && t.length > 3 ? (e.pmp || (e.pmp = {
                    private_auction: 0,
                    deals: []
                }),
                e.pmp.deals.push({
                    id: t
                })) : Object(w.logWarn)("PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + t)
            }
            )) : Object(w.logWarn)("PubMatic: Error: bid.params.deals should be an array of strings."))
        }(i = {
            id: e.bidId,
            tagid: e.params.adUnit || void 0,
            bidfloor: Ss("kadfloor", e.params.kadfloor),
            secure: 1,
            ext: {
                pmZoneId: Ss("pmzoneid", e.params.pmzoneid)
            },
            bidfloorcur: e.params.currency ? Ss("currency", e.params.currency) : "USD"
        }, e),
        function(e, t) {
            var r, n = "";
            if (t.params.dctr)
                if (n = t.params.dctr,
                Object(w.isStr)(n) && n.length > 0) {
                    var i = n.split("|");
                    n = "",
                    i.forEach((function(e) {
                        n += e.length > 0 ? e.trim() + "|" : ""
                    }
                    )),
                    r = n.length,
                    "|" === n.substring(r, r - 1) && (n = n.substring(0, r - 1)),
                    e.ext.key_val = n.trim()
                } else
                    Object(w.logWarn)("PubMatic: Ignoring param : dctr with value : " + n + ", expects string-value, found empty or non-string value")
        }(i, e),
        Rs(i, e),
        e.hasOwnProperty("mediaTypes"))
            for (d in e.mediaTypes)
                switch (d) {
                case ve:
                    void 0 !== (r = ks(e)) && (i.banner = r);
                    break;
                case me:
                    a.request = JSON.stringify(As(e.nativeParams)),
                    Es ? Object(w.logWarn)("PubMatic: Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : i.native = a;
                    break;
                case ge:
                    void 0 !== (n = Ps(e)) && (i.video = n)
                }
        else
            r = {
                pos: 0,
                w: e.params.width,
                h: e.params.height,
                topframe: Object(w.inIframe)() ? 0 : 1
            },
            Object(w.isArray)(o) && o.length > 1 && ((o = o.splice(1, o.length - 1)).forEach((function(e) {
                s.push({
                    w: e[0],
                    h: e[1]
                })
            }
            )),
            r.format = s),
            i.banner = r;
        return function(e, t) {
            var r = Object(I.default)({}, Object(x.a)(t, "ortb2Imp.ext.data"));
            Object.keys(r).forEach((function(t) {
                "pbadslot" === t ? "string" == typeof r[t] && r[t] && Object(Kr.a)(e, "ext.data.pbadslot", r[t]) : "adserver" === t ? ["name", "adslot"].forEach((function(t) {
                    var n = Object(x.a)(r, "adserver." + t);
                    "string" == typeof n && n && (Object(Kr.a)(e, "ext.data.adserver." + t.toLowerCase(), n),
                    "adslot" === t && Object(Kr.a)(e, "ext.dfp_ad_unit_code", n))
                }
                )) : Object(Kr.a)(e, "ext.data." + t, r[t])
            }
            ))
        }(i, e),
        function(e, t) {
            var r = -1;
            "function" != typeof t.getFloor || _.b.getConfig("pubmatic.disableFloors") || [ve, ge, me].forEach((function(n) {
                if (e.hasOwnProperty(n)) {
                    var i = [];
                    "banner" === n && (e[n].w && e[n].h && i.push([e[n].w, e[n].h]),
                    Object(w.isArray)(e[n].format) && e[n].format.forEach((function(e) {
                        return i.push([e.w, e.h])
                    }
                    ))),
                    0 === i.length && i.push("*"),
                    i.forEach((function(i) {
                        var a = t.getFloor({
                            currency: e.bidfloorcur,
                            mediaType: n,
                            size: i
                        });
                        if (Object(w.logInfo)("PubMatic: ", "floor from floor module returned for mediatype:", n, " and size:", i, " is: currency", a.currency, "floor", a.floor),
                        "object" == typeof a && a.currency === e.bidfloorcur && !isNaN(parseInt(a.floor))) {
                            var o = parseFloat(a.floor);
                            Object(w.logInfo)("PubMatic: ", "floor from floor module:", o, "previous floor value", r, "Min:", Math.min(o, r)),
                            r = -1 === r ? o : Math.min(o, r),
                            Object(w.logInfo)("PubMatic: ", "new floor value:", r)
                        }
                    }
                    ))
                }
            }
            ));
            e.bidfloor && (Object(w.logInfo)("PubMatic: ", "floor from floor module:", r, "impObj.bidfloor", e.bidfloor, "Max:", Math.max(r, e.bidfloor)),
            r = Math.max(r, e.bidfloor));
            e.bidfloor = !isNaN(r) && r > 0 ? r : void 0,
            Object(w.logInfo)("PubMatic: ", "new impObj.bidfloor value:", e.bidfloor)
        }(i, e),
        i.hasOwnProperty(ve) || i.hasOwnProperty(me) || i.hasOwnProperty(ge) ? i : void 0
    }
    function Ds(e, t) {
        var r = null
          , n = Object(x.a)(e, "0.userId.flocId");
        if (n && n.id)
            switch (t) {
            case hs:
                r = {
                    id: "FLOC",
                    name: "FLOC",
                    ext: {
                        ver: n.version
                    },
                    segment: [{
                        id: n.id,
                        name: "chrome.com",
                        value: n.id.toString()
                    }]
                };
                break;
            case ys:
            default:
                r = {
                    source: "chrome.com",
                    uids: [{
                        atype: 1,
                        id: n.id,
                        ext: {
                            ver: n.version
                        }
                    }]
                }
            }
        return r
    }
    function Bs(e, t) {
        (t = t.filter((function(e) {
            return "string" == typeof e || (Object(w.logWarn)("PubMatic: acat: Each category should be a string, ignoring category: " + e),
            !1)
        }
        )).map((function(e) {
            return e.trim()
        }
        )).filter((function(e, t, r) {
            return r.indexOf(e) === t
        }
        ))).length > 0 && (Object(w.logWarn)("PubMatic: acat: Selected: ", t),
        e.ext.acat = t)
    }
    function Ns(e) {
        return !0 === Object(w.isArray)(e) && e.length > 0
    }
    Object(w._each)(ls, (function(e) {
        ws[e.ID] = e.KEY
    }
    )),
    Object(w._each)(ls, (function(e) {
        xs[e.KEY] = e
    }
    ));
    var qs = {
        code: "pubmatic",
        gvlid: 76,
        supportedMediaTypes: [ve, ge, me],
        isBidRequestValid: function(e) {
            if (e && e.params) {
                if (!Object(w.isStr)(e.params.publisherId))
                    return Object(w.logWarn)("PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)),
                    !1;
                if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(ge)) {
                    var t = Object(x.a)(e.mediaTypes, "video.mimes")
                      , r = Object(x.a)(e, "params.video.mimes");
                    if (!1 === Ns(t) && !1 === Ns(r))
                        return Object(w.logWarn)("PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)),
                        !1;
                    if (!e.mediaTypes[ge].hasOwnProperty("context"))
                        return Object(w.logError)("PubMatic: : no context specified in bid. Rejecting bid: ", e),
                        !1;
                    if ("outstream" === e.mediaTypes[ge].context && !Object(w.isStr)(e.params.outstreamAU) && !e.hasOwnProperty("renderer") && !e.mediaTypes[ge].hasOwnProperty("renderer"))
                        return e.mediaTypes.hasOwnProperty(ve) || e.mediaTypes.hasOwnProperty(me) ? (delete e.mediaTypes[ge],
                        Object(w.logWarn)('PubMatic: : for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: ', e),
                        !0) : (Object(w.logError)('PubMatic: : for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: ', e),
                        !1)
                }
                return !0
            }
            return !1
        },
        buildRequests: function(e, t) {
            var r, n, i, a, o;
            t && t.refererInfo && (o = t.refererInfo);
            var d, s = function(e) {
                return {
                    pageURL: e && e.referer ? e.referer : window.location.href,
                    refURL: window.document.referrer
                }
            }(o), c = function(e) {
                return {
                    id: "" + (new Date).getTime(),
                    at: 1,
                    cur: ["USD"],
                    imp: [],
                    site: {
                        page: e.pageURL,
                        ref: e.refURL,
                        publisher: {}
                    },
                    device: {
                        ua: navigator.userAgent,
                        js: 1,
                        dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                        h: screen.height,
                        w: screen.width,
                        language: navigator.language
                    },
                    user: {},
                    ext: {}
                }
            }(s), u = "", p = [], l = [], f = [];
            if (e.forEach((function(e) {
                if ((d = Object(w.deepClone)(e)).params.adSlot = d.params.adSlot || "",
                Cs(d),
                d.mediaTypes && d.mediaTypes.hasOwnProperty("video") || d.params.hasOwnProperty("video"))
                    ;
                else if (!(d.hasOwnProperty("mediaTypes") && d.mediaTypes.hasOwnProperty(me) || 0 !== d.params.width || 0 !== d.params.height))
                    return void Object(w.logWarn)("PubMatic: Skipping the non-standard adslot: ", d.params.adSlot, JSON.stringify(d));
                s.pubId = s.pubId || d.params.publisherId,
                (s = function(e, t) {
                    var r, n, i;
                    for (r in t.kadpageurl || (t.kadpageurl = t.pageURL),
                    os)
                        os.hasOwnProperty(r) && (n = e[r]) && ("object" == typeof (i = os[r]) && (n = i.f(n, t)),
                        Object(w.isStr)(n) ? t[r] = n : Object(w.logWarn)("PubMatic: Ignoring param : " + r + " with value : " + os[r] + ", expects string-value, found " + typeof n));
                    return t
                }(d.params, s)).transactionId = d.transactionId,
                "" === u ? u = d.params.currency || void 0 : d.params.hasOwnProperty("currency") && u !== d.params.currency && Object(w.logWarn)("PubMatic: Currency specifier ignored. Only one currency permitted."),
                d.params.currency = u,
                d.params.hasOwnProperty("dctr") && Object(w.isStr)(d.params.dctr) && p.push(d.params.dctr),
                d.params.hasOwnProperty("bcat") && Object(w.isArray)(d.params.bcat) && (l = l.concat(d.params.bcat)),
                d.params.hasOwnProperty("acat") && Object(w.isArray)(d.params.acat) && (f = f.concat(d.params.acat));
                var t = Us(d);
                t && c.imp.push(t)
            }
            )),
            0 != c.imp.length) {
                var b, m;
                c.site.publisher.id = s.pubId.trim(),
                Is = s.pubId.trim(),
                c.ext.wrapper = {},
                c.ext.wrapper.profile = parseInt(s.profId) || void 0,
                c.ext.wrapper.version = parseInt(s.verId) || void 0,
                c.ext.wrapper.wiid = s.wiid || t.auctionId,
                c.ext.wrapper.wv = "prebid_prebid_6.29.0",
                c.ext.wrapper.transactionId = s.transactionId,
                c.ext.wrapper.wp = "pbjs",
                t && t.bidderCode && (c.ext.allowAlternateBidderCodes = $.get(t.bidderCode, "allowAlternateBidderCodes"),
                c.ext.allowedAlternateBidderCodes = $.get(t.bidderCode, "allowedAlternateBidderCodes")),
                c.user.gender = s.gender ? s.gender.trim() : void 0,
                c.user.geo = {},
                c.user.geo.lat = Ss("lat", s.lat),
                c.user.geo.lon = Ss("lon", s.lon),
                c.user.yob = Ss("yob", s.yob),
                c.device.geo = c.user.geo,
                c.site.page = s.kadpageurl.trim() || c.site.page.trim(),
                c.site.domain = (b = c.site.page,
                (m = document.createElement("a")).href = b,
                m.hostname),
                "object" == typeof _.b.getConfig("content") && (c.site.content = _.b.getConfig("content")),
                "object" == typeof _.b.getConfig("device") && (c.device = Object(I.default)(c.device, _.b.getConfig("device"))),
                Object(Kr.a)(c, "source.tid", s.transactionId),
                -1 !== window.location.href.indexOf("pubmaticTest=true") && (c.test = 1),
                e[0].schain && Object(Kr.a)(c, "source.ext.schain", e[0].schain),
                t && t.gdprConsent && (Object(Kr.a)(c, "user.ext.consent", t.gdprConsent.consentString),
                Object(Kr.a)(c, "regs.ext.gdpr", t.gdprConsent.gdprApplies ? 1 : 0)),
                t && t.uspConsent && Object(Kr.a)(c, "regs.ext.us_privacy", t.uspConsent),
                !0 === _.b.getConfig("coppa") && Object(Kr.a)(c, "regs.coppa", 1),
                function(e, t) {
                    var r = Object(x.a)(t, "0.userIdAsEids")
                      , n = Ds(t, ys);
                    n && (r || (r = []),
                    r.push(n)),
                    Object(w.isArray)(r) && r.length > 0 && Object(Kr.a)(e, "user.eids", r)
                }(c, e),
                function(e, t) {
                    var r = Ds(t, hs);
                    r && (e.user || (e.user = {}),
                    e.user.data || (e.user.data = []),
                    e.user.data.push(r))
                }(c, e);
                var g = _.b.getConfig("ortb2") || {};
                if (g.site && Object(w.mergeDeep)(c, {
                    site: g.site
                }),
                g.user && Object(w.mergeDeep)(c, {
                    user: g.user
                }),
                g.bcat && (l = l.concat(g.bcat)),
                null != (r = g.ext) && null != (n = r.prebid) && null != (i = n.bidderparams) && null != (a = i[t.bidderCode]) && a.acat) {
                    var v = g.ext.prebid.bidderparams[t.bidderCode].acat;
                    Bs(c, v)
                } else
                    f.length && Bs(c, f);
                return function(e, t) {
                    (t = t.filter((function(e) {
                        return "string" == typeof e || (Object(w.logWarn)("PubMatic: bcat: Each category should be a string, ignoring category: " + e),
                        !1)
                    }
                    )).map((function(e) {
                        return e.trim()
                    }
                    )).filter((function(e, t, r) {
                        if (e.length > 3)
                            return r.indexOf(e) === t;
                        Object(w.logWarn)("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                    }
                    ))).length > 0 && (Object(w.logWarn)("PubMatic: bcat: Selected: ", t),
                    e.bcat = t)
                }(c, l),
                "object" == typeof _.b.getConfig("app") && (c.app = _.b.getConfig("app"),
                c.app.publisher = c.site.publisher,
                c.app.ext = c.site.ext || void 0,
                "object" != typeof c.app.content && (c.app.content = c.site.content || void 0),
                delete c.site),
                {
                    method: "POST",
                    url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                    data: JSON.stringify(c),
                    bidderRequest: t
                }
            }
        },
        interpretResponse: function(e, t) {
            var r = []
              , n = "USD"
              , i = JSON.parse(t.data)
              , a = i.site && i.site.ref ? i.site.ref : "";
            try {
                e.body && e.body.seatbid && Object(w.isArray)(e.body.seatbid) && (n = e.body.cur || n,
                e.body.seatbid.forEach((function(e) {
                    e.bid && Object(w.isArray)(e.bid) && e.bid.forEach((function(o) {
                        var d = {
                            requestId: o.impid,
                            cpm: (parseFloat(o.price) || 0).toFixed(2),
                            width: o.w,
                            height: o.h,
                            creativeId: o.crid || o.id,
                            dealId: o.dealid,
                            currency: n,
                            netRevenue: !0,
                            ttl: 300,
                            referrer: a,
                            ad: o.adm,
                            pm_seat: e.seat || null,
                            pm_dspid: o.ext && o.ext.dspid ? o.ext.dspid : null,
                            partnerImpId: o.id || ""
                        };
                        i.imp && i.imp.length > 0 && i.imp.forEach((function(e) {
                            if (o.impid === e.id)
                                switch (function(e, t) {
                                    if (e.ext && null != e.ext.bidtype)
                                        t.mediaType = js[e.ext.bidtype];
                                    else {
                                        Object(w.logInfo)("PubMatic: bid.ext.bidtype does not exist, checking alternatively for mediaType");
                                        var r = e.adm
                                          , n = ""
                                          , i = new RegExp(/VAST\s+version/);
                                        if (r.indexOf('span class="PubAPIAd"') >= 0)
                                            t.mediaType = ve;
                                        else if (i.test(r))
                                            t.mediaType = ge;
                                        else
                                            try {
                                                (n = JSON.parse(r.replace(/\\/g, ""))) && n.native && (t.mediaType = me)
                                            } catch (e) {
                                                Object(w.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + r)
                                            }
                                    }
                                }(o, d),
                                d.mediaType) {
                                case ve:
                                    break;
                                case ge:
                                    d.width = o.hasOwnProperty("w") ? o.w : e.video.w,
                                    d.height = o.hasOwnProperty("h") ? o.h : e.video.h,
                                    d.vastXml = o.adm,
                                    function(e, t) {
                                        var r, n, i;
                                        if (t.bidderRequest && t.bidderRequest.bids) {
                                            for (var a = 0; a < t.bidderRequest.bids.length; a++)
                                                t.bidderRequest.bids[a].bidId === e.requestId && (r = t.bidderRequest.bids[a].params,
                                                n = t.bidderRequest.bids[a].mediaTypes[ge].context,
                                                i = t.bidderRequest.bids[a].adUnitCode);
                                            n && "outstream" === n && r && r.outstreamAU && i && (e.rendererCode = r.outstreamAU,
                                            e.renderer = Os.newRenderer(e.rendererCode, i))
                                        }
                                    }(d, t);
                                    break;
                                case me:
                                    !function(e, t) {
                                        if (t.native = {},
                                        e.hasOwnProperty("adm")) {
                                            var r = "";
                                            try {
                                                r = JSON.parse(e.adm.replace(/\\/g, ""))
                                            } catch (e) {
                                                return void Object(w.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + t.adm)
                                            }
                                            if (r && r.native && r.native.assets && r.native.assets.length > 0) {
                                                t.mediaType = me;
                                                for (var n = 0, i = r.native.assets.length; n < i; n++)
                                                    switch (r.native.assets[n].id) {
                                                    case ls.TITLE.ID:
                                                        t.native.title = r.native.assets[n].title && r.native.assets[n].title.text;
                                                        break;
                                                    case ls.IMAGE.ID:
                                                        t.native.image = {
                                                            url: r.native.assets[n].img && r.native.assets[n].img.url,
                                                            height: r.native.assets[n].img && r.native.assets[n].img.h,
                                                            width: r.native.assets[n].img && r.native.assets[n].img.w
                                                        };
                                                        break;
                                                    case ls.ICON.ID:
                                                        t.native.icon = {
                                                            url: r.native.assets[n].img && r.native.assets[n].img.url,
                                                            height: r.native.assets[n].img && r.native.assets[n].img.h,
                                                            width: r.native.assets[n].img && r.native.assets[n].img.w
                                                        };
                                                        break;
                                                    case ls.SPONSOREDBY.ID:
                                                    case ls.BODY.ID:
                                                    case ls.LIKES.ID:
                                                    case ls.DOWNLOADS.ID:
                                                    case ls.PRICE:
                                                    case ls.SALEPRICE.ID:
                                                    case ls.PHONE.ID:
                                                    case ls.ADDRESS.ID:
                                                    case ls.DESC2.ID:
                                                    case ls.CTA.ID:
                                                    case ls.RATING.ID:
                                                    case ls.DISPLAYURL.ID:
                                                        t.native[ws[r.native.assets[n].id]] = r.native.assets[n].data && r.native.assets[n].data.value
                                                    }
                                                t.native.clickUrl = r.native.link && r.native.link.url,
                                                t.native.clickTrackers = r.native.link && r.native.link.clicktrackers || [],
                                                t.native.impressionTrackers = r.native.imptrackers || [],
                                                t.native.jstracker = r.native.jstracker || [],
                                                t.width || (t.width = 0),
                                                t.height || (t.height = 0)
                                            }
                                        }
                                    }(o, d)
                                }
                        }
                        )),
                        o.ext && o.ext.deal_channel && (d.dealChannel = vs[o.ext.deal_channel] || null),
                        d.meta = {},
                        o.ext && o.ext.dspid && (d.meta.networkId = o.ext.dspid),
                        o.ext && o.ext.advid && (d.meta.buyerId = o.ext.advid),
                        o.adomain && o.adomain.length > 0 && (d.meta.advertiserDomains = o.adomain,
                        d.meta.clickUrl = o.adomain[0]),
                        e.ext && e.ext.buyid && (d.adserverTargeting = {
                            hb_buyid_pubmatic: e.ext.buyid
                        }),
                        o.ext && o.ext.marketplace && (d.bidderCode = o.ext.marketplace),
                        r.push(d)
                    }
                    ))
                }
                )))
            } catch (e) {
                Object(w.logError)(e)
            }
            return r
        },
        getUserSyncs: function(e, t, r, n) {
            var i = "" + Is;
            return r && (i += "&gdpr=" + (r.gdprApplies ? 1 : 0),
            i += "&gdpr_consent=" + encodeURIComponent(r.consentString || "")),
            n && (i += "&us_privacy=" + encodeURIComponent(n)),
            !0 === _.b.getConfig("coppa") && (i += "&coppa=1"),
            e.iframeEnabled ? [{
                type: "iframe",
                url: "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" + i
            }] : [{
                type: "image",
                url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
            }]
        },
        transformBidParams: function(e, t, r, n) {
            return Rs(e, r.bids[0], !0),
            Object(w.convertTypes)({
                publisherId: "string",
                adSlot: "string"
            }, e)
        }
    };
    je(qs),
    window.jwpb.installedModules.push("pubmaticBidAdapter");
    var Ms = qs.code;
    function zs(e, t, r, n) {
        var i = {
            mimes: n.mimes,
            minduration: n.minduration,
            maxduration: n.maxduration,
            protocols: n.protocols,
            startdelay: n.startdelay,
            placement: n.placement,
            linearity: n.linearity,
            playbackmethod: n.playbackmethod,
            api: n.api
        }
          , a = n.skip;
        void 0 !== a && (i.skippable = !!a);
        var o = {
            publisherId: "" + t.pubid,
            adSlot: "" + t.id,
            content: r
        };
        t.optionalParams && Object(I.default)(o, t.optionalParams);
        var d = e.params.jwpseg;
        Array.isArray(d) && d.length && (o.dctr = "jwpseg=" + d.join(","));
        var s = e.settings
          , c = s.floorPriceCents
          , u = s.floorPriceCurrency;
        return void 0 !== c && (o.kadfloor = "" + c / 100),
        u && (o.currency = u),
        o.video = i,
        {
            bidder: Ms,
            params: o
        }
    }
    function Fs(e) {
        return void 0 === e && (e = {}),
        void 0 !== e.id && void 0 !== e.pubid
    }
    Br.bidderSettings[Ms] = {
        sendStandardTargeting: !1,
        adserverTargeting: [{
            key: "vpb_pubmatic_bid",
            val: function(e) {
                return Zc(Br.getConfig("priceGranularity"), e)
            }
        }, {
            key: "vpb_pubmatic_key",
            val: function(e) {
                return e.videoCacheKey
            }
        }]
    };
    var Ws = {};
    _.b.getConfig("rubicon", (function(e) {
        Object(w.mergeDeep)(Ws, e.rubicon)
    }
    ));
    var Vs = {
        1: "468x60",
        2: "728x90",
        5: "120x90",
        7: "125x125",
        8: "120x600",
        9: "160x600",
        10: "300x600",
        13: "200x200",
        14: "250x250",
        15: "300x250",
        16: "336x280",
        17: "240x400",
        19: "300x100",
        31: "980x120",
        32: "250x360",
        33: "180x500",
        35: "980x150",
        37: "468x400",
        38: "930x180",
        39: "750x100",
        40: "750x200",
        41: "750x300",
        42: "2x4",
        43: "320x50",
        44: "300x50",
        48: "300x300",
        53: "1024x768",
        54: "300x1050",
        55: "970x90",
        57: "970x250",
        58: "1000x90",
        59: "320x80",
        60: "320x150",
        61: "1000x1000",
        64: "580x500",
        65: "640x480",
        66: "930x600",
        67: "320x480",
        68: "1800x1000",
        72: "320x320",
        73: "320x160",
        78: "980x240",
        79: "980x300",
        80: "980x400",
        83: "480x300",
        85: "300x120",
        90: "548x150",
        94: "970x310",
        95: "970x100",
        96: "970x210",
        101: "480x320",
        102: "768x1024",
        103: "480x280",
        105: "250x800",
        108: "320x240",
        113: "1000x300",
        117: "320x100",
        125: "800x250",
        126: "200x600",
        144: "980x600",
        145: "980x150",
        152: "1000x250",
        156: "640x320",
        159: "320x250",
        179: "250x600",
        195: "600x300",
        198: "640x360",
        199: "640x200",
        213: "1030x590",
        214: "980x360",
        221: "1x1",
        229: "320x180",
        230: "2000x1400",
        232: "580x400",
        234: "6x6",
        251: "2x2",
        256: "480x820",
        257: "400x600",
        258: "500x200",
        259: "998x200",
        264: "970x1000",
        265: "1920x1080",
        274: "1800x200",
        278: "320x500",
        282: "320x400",
        288: "640x380",
        548: "500x1000",
        550: "980x480",
        552: "300x200",
        558: "640x640",
        562: "300x431",
        564: "320x431",
        566: "320x300",
        568: "300x150",
        570: "300x125",
        572: "250x350",
        574: "620x891",
        576: "610x877",
        578: "980x552",
        580: "505x656"
    };
    Object(w._each)(Vs, (function(e, t) {
        return Vs[e] = t
    }
    ));
    var Gs = {
        code: "rubicon",
        gvlid: 52,
        supportedMediaTypes: [ve, ge],
        isBidRequestValid: function(e) {
            if ("object" != typeof e.params)
                return !1;
            for (var t = 0, r = ["accountId", "siteId", "zoneId"]; t < r.length; t++)
                if (e.params[r[t]] = parseInt(e.params[r[t]]),
                isNaN(e.params[r[t]]))
                    return Object(w.logError)("Rubicon: wrong format of accountId or siteId or zoneId."),
                    !1;
            var n = Js(e, !0);
            return !!n && ("video" !== n || function(e) {
                var t = !0
                  , r = Object.prototype.toString.call([])
                  , n = Object.prototype.toString.call(0)
                  , i = {
                    mimes: r,
                    protocols: r,
                    linearity: n,
                    api: r
                };
                return Object.keys(i).forEach((function(r) {
                    Object.prototype.toString.call(Object(x.a)(e, "mediaTypes.video." + r)) !== i[r] && (t = !1,
                    Object(w.logError)("Rubicon: mediaTypes.video." + r + " is required and must be of type: " + i[r]))
                }
                )),
                t
            }(e))
        },
        buildRequests: function(e, t) {
            var r = []
              , n = e.filter((function(e) {
                return "video" === Js(e)
            }
            )).map((function(e) {
                var r;
                e.startTime = (new Date).getTime();
                var n, i = {
                    id: e.transactionId,
                    test: _.b.getConfig("debug") ? 1 : 0,
                    cur: ["USD"],
                    source: {
                        tid: e.transactionId
                    },
                    tmax: t.timeout,
                    imp: [{
                        exp: _.b.getConfig("s2sConfig.defaultTtl"),
                        id: e.adUnitCode,
                        secure: 1,
                        ext: (r = {},
                        r[e.bidder] = e.params,
                        r),
                        video: Object(x.a)(e, "mediaTypes.video") || {}
                    }],
                    ext: {
                        prebid: {
                            channel: {
                                name: "pbjs",
                                version: jwpb.version
                            },
                            cache: {
                                vastxml: {
                                    returnCreative: !0 === Ws.returnVast
                                }
                            },
                            targeting: {
                                includewinners: !0,
                                includebidderkeys: !1,
                                pricegranularity: Qs(_.b)
                            },
                            bidders: {
                                rubicon: {
                                    integration: Ws.int_type || "pbjs"
                                }
                            }
                        }
                    }
                };
                "rubicon" !== e.bidder && (i.ext.prebid.aliases = ((n = {})[e.bidder] = "rubicon",
                n));
                var a, o, d = E().installedModules;
                if (!d || d.length && -1 === d.indexOf("rubiconAnalyticsAdapter") || Object(Kr.a)(i, "ext.prebid.analytics", {
                    rubicon: {
                        "client-analytics": !0
                    }
                }),
                "function" != typeof e.getFloor || Ws.disableFloors)
                    a = parseFloat(Object(x.a)(e, "params.floor"));
                else {
                    var s;
                    try {
                        s = e.getFloor({
                            currency: "USD",
                            mediaType: "video",
                            size: Ks(e, "video")
                        })
                    } catch (e) {
                        Object(w.logError)("Rubicon: getFloor threw an error: ", e)
                    }
                    a = "object" != typeof s || "USD" !== s.currency || isNaN(parseInt(s.floor)) ? void 0 : parseFloat(s.floor)
                }
                (isNaN(a) || (i.imp[0].bidfloor = a),
                "object" == typeof e.floorData && (i.ext.prebid.floors = {
                    enabled: !1
                }),
                i.imp[0].ext[e.bidder].video.size_id = function(e) {
                    var t = parseInt(Object(x.a)(e, "params.video.size_id"));
                    if (!isNaN(t))
                        return t;
                    return "outstream" === Object(x.a)(e, "mediaTypes." + ge + ".context") ? 203 : 201
                }(e),
                function(e, t, r) {
                    if (!e)
                        return;
                    "object" == typeof _.b.getConfig("app") ? e.app = _.b.getConfig("app") : e.site = {
                        page: Ls(t, r)
                    };
                    "object" == typeof _.b.getConfig("device") && (e.device = _.b.getConfig("device"));
                    t.params.video.language && ["site", "device"].forEach((function(r) {
                        e[r] && ("site" === r ? e[r].content = Object(I.default)({
                            language: t.params.video.language
                        }, e[r].content) : e[r] = Object(I.default)({
                            language: t.params.video.language
                        }, e[r]))
                    }
                    ))
                }(i, e, t),
                function(e, t) {
                    "object" == typeof e.imp[0].video && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = t.params.video.skip);
                    "object" == typeof e.imp[0].video && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = t.params.video.skipdelay);
                    "object" == typeof e.imp[0].video && void 0 === e.imp[0].video.pos && ("atf" === t.params.position ? e.imp[0].video.pos = 1 : "btf" === t.params.position && (e.imp[0].video.pos = 3));
                    var r = Ks(t, "video");
                    e.imp[0].video.w = r[0],
                    e.imp[0].video.h = r[1]
                }(i, e),
                t.gdprConsent) && ("boolean" == typeof t.gdprConsent.gdprApplies && (o = t.gdprConsent.gdprApplies ? 1 : 0),
                Object(Kr.a)(i, "regs.ext.gdpr", o),
                Object(Kr.a)(i, "user.ext.consent", t.gdprConsent.consentString));
                t.uspConsent && Object(Kr.a)(i, "regs.ext.us_privacy", t.uspConsent);
                var c = Object(x.a)(t, "bids.0.userIdAsEids");
                c && c.length && Object(Kr.a)(i, "user.ext.eids", c);
                var u = _.b.getConfig("user.id");
                u && Object(Kr.a)(i, "user.id", u),
                !0 === _.b.getConfig("coppa") && Object(Kr.a)(i, "regs.coppa", 1),
                e.schain && $s(e.schain) && Object(Kr.a)(i, "source.ext.schain", e.schain);
                var p = _.b.getConfig("multibid");
                return p && Object(Kr.a)(i, "ext.prebid.multibid", p.reduce((function(e, t) {
                    var r = {};
                    return Object.keys(t).forEach((function(e) {
                        r[e.toLowerCase()] = t[e]
                    }
                    )),
                    e.push(r),
                    e
                }
                ), [])),
                Ys(e, ge, i),
                e.storedAuctionResponse && Object(Kr.a)(i.imp[0], "ext.prebid.storedauctionresponse.id", e.storedAuctionResponse.toString()),
                Object(Kr.a)(i.imp[0], "ext.prebid.auctiontimestamp", t.auctionStart),
                {
                    method: "POST",
                    url: "https://" + (Ws.videoHost || "prebid-server") + ".rubiconproject.com/openrtb2/auction",
                    data: i,
                    bidRequest: e
                }
            }
            ));
            if (!0 !== Ws.singleRequest)
                r = n.concat(e.filter((function(e) {
                    return "banner" === Js(e)
                }
                )).map((function(e) {
                    var r = Gs.createSlotParams(e, t);
                    return {
                        method: "GET",
                        url: "https://" + (Ws.bannerHost || "fastlane") + ".rubiconproject.com/a/api/fastlane.json",
                        data: Gs.getOrderedParams(r).reduce((function(e, t) {
                            var n = r[t];
                            return Object(w.isStr)(n) && "" !== n || Object(w.isNumber)(n) ? "" + e + Zs(t, n) + "&" : e
                        }
                        ), "") + "slots=1&rand=" + Math.random(),
                        bidRequest: e
                    }
                }
                )));
            else {
                var i = e.filter((function(e) {
                    return "banner" === Js(e)
                }
                )).reduce((function(e, t) {
                    return (e[t.params.siteId] = e[t.params.siteId] || []).push(t),
                    e
                }
                ), {});
                r = n.concat(Object.keys(i).reduce((function(e, r) {
                    var n, a;
                    return (n = i[r],
                    a = 10,
                    n.map((function(e, t) {
                        return t % a == 0 ? n.slice(t, t + a) : null
                    }
                    )).filter((function(e) {
                        return e
                    }
                    ))).forEach((function(r) {
                        var n = Gs.combineSlotUrlParams(r.map((function(e) {
                            return Gs.createSlotParams(e, t)
                        }
                        )));
                        e.push({
                            method: "GET",
                            url: "https://" + (Ws.bannerHost || "fastlane") + ".rubiconproject.com/a/api/fastlane.json",
                            data: Gs.getOrderedParams(n).reduce((function(e, t) {
                                var r = n[t];
                                return Object(w.isStr)(r) && "" !== r || Object(w.isNumber)(r) ? "" + e + Zs(t, r) + "&" : e
                            }
                            ), "") + "slots=" + r.length + "&rand=" + Math.random(),
                            bidRequest: r
                        })
                    }
                    )),
                    e
                }
                ), []))
            }
            return r
        },
        getOrderedParams: function(e) {
            var t = /^tg_v/
              , r = /^tg_i/
              , n = /^eid_|^tpid_/
              , i = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain"].concat(Object.keys(e).filter((function(e) {
                return n.test(e)
            }
            ))).concat(["x_liverampidl", "ppuid", "rf", "p_geo.latitude", "p_geo.longitude", "kw"]).concat(Object.keys(e).filter((function(e) {
                return t.test(e)
            }
            ))).concat(Object.keys(e).filter((function(e) {
                return r.test(e)
            }
            ))).concat(["tk_flint", "x_source.tid", "l_pb_bid_id", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
            return i.concat(Object.keys(e).filter((function(e) {
                return -1 === i.indexOf(e)
            }
            )))
        },
        combineSlotUrlParams: function(e) {
            if (1 === e.length)
                return e[0];
            var t = e.reduce((function(t, r, n) {
                return Object.keys(r).forEach((function(i) {
                    t.hasOwnProperty(i) || (t[i] = new Array(e.length)),
                    t[i].splice(n, 1, r[i])
                }
                )),
                t
            }
            ), {})
              , r = new RegExp("^([^;]*)(;\\1)+$");
            return Object.keys(t).forEach((function(e) {
                var n = t[e].join(";")
                  , i = n.match(r);
                t[e] = i ? i[1] : n
            }
            )),
            t
        },
        createSlotParams: function(e, t) {
            e.startTime = (new Date).getTime();
            var r = e.params
              , n = Ks(e, "banner")
              , i = r.latLong || []
              , a = i[0]
              , o = i[1]
              , d = {
                account_id: r.accountId,
                site_id: r.siteId,
                zone_id: r.zoneId,
                size_id: n[0],
                alt_size_ids: n.slice(1).join(",") || void 0,
                rp_floor: (r.floor = parseFloat(r.floor)) >= .01 ? r.floor : void 0,
                rp_secure: "1",
                tk_flint: (Ws.int_type || "pbjs_lite") + "_v6.29.0",
                "x_source.tid": e.transactionId,
                l_pb_bid_id: e.bidId,
                "x_source.pchain": r.pchain,
                p_screen_res: [window.screen.width, window.screen.height].join("x"),
                tk_user_key: r.userId,
                "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                "p_geo.longitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                "tg_fl.eid": e.code,
                rf: Ls(e, t)
            };
            if ("function" == typeof e.getFloor && !Ws.disableFloors) {
                var s;
                try {
                    s = e.getFloor({
                        currency: "USD",
                        mediaType: "banner",
                        size: "*"
                    })
                } catch (e) {
                    Object(w.logError)("Rubicon: getFloor threw an error: ", e)
                }
                d.rp_hard_floor = "object" != typeof s || "USD" !== s.currency || isNaN(parseInt(s.floor)) ? void 0 : s.floor
            }
            var c = {
                1: "atf",
                3: "btf"
            }[Object(x.a)(e, "mediaTypes.banner.pos")] || "";
            d.p_pos = "atf" === r.position || "btf" === r.position ? r.position : c;
            var u = _.b.getConfig("user.id");
            return u && (d.ppuid = u),
            e.userIdAsEids && e.userIdAsEids.forEach((function(e) {
                try {
                    if ("adserver.org" === e.source ? (d.tpid_tdid = e.uids[0].id,
                    d["eid_adserver.org"] = e.uids[0].id) : "liveintent.com" === e.source ? (d["tpid_liveintent.com"] = e.uids[0].id,
                    d["eid_liveintent.com"] = e.uids[0].id,
                    e.ext && Array.isArray(e.ext.segments) && e.ext.segments.length && (d["tg_v.LIseg"] = e.ext.segments.join(","))) : "liveramp.com" === e.source ? d.x_liverampidl = e.uids[0].id : "id5-sync.com" === e.source ? d["eid_id5-sync.com"] = e.uids[0].id + "^" + e.uids[0].atype + "^" + (e.uids[0].ext && e.uids[0].ext.linkType || "") : d["eid_" + e.source] = e.uids[0].id + "^" + (e.uids[0].atype || ""),
                    !d.ppuid) {
                        var t = Object(C.b)(e.uids, (function(e) {
                            return e.ext && "ppuid" === e.ext.stype
                        }
                        ));
                        t && t.id && (d.ppuid = t.id)
                    }
                } catch (t) {
                    Object(w.logWarn)("Rubicon: error reading eid:", e, t)
                }
            }
            )),
            t.gdprConsent && ("boolean" == typeof t.gdprConsent.gdprApplies && (d.gdpr = Number(t.gdprConsent.gdprApplies)),
            d.gdpr_consent = t.gdprConsent.consentString),
            t.uspConsent && (d.us_privacy = encodeURIComponent(t.uspConsent)),
            d.rp_maxbids = t.bidLimit || 1,
            Ys(e, ve, d),
            !0 === _.b.getConfig("coppa") && (d.coppa = 1),
            e.schain && $s(e.schain) && (d.rp_schain = Gs.serializeSupplyChain(e.schain)),
            d
        },
        serializeSupplyChain: function(e) {
            if (!$s(e))
                return "";
            var t = e.ver
              , r = e.complete
              , n = e.nodes;
            return t + "," + r + "!" + Gs.serializeSupplyChainNodes(n)
        },
        serializeSupplyChainNodes: function(e) {
            var t = ["asi", "sid", "hp", "rid", "name", "domain"];
            return e.map((function(e) {
                return t.map((function(t) {
                    return encodeURIComponent(e[t] || "")
                }
                )).join(",")
            }
            )).join("!")
        },
        interpretResponse: function(e, t) {
            var r = t.bidRequest;
            if (!(e = e.body) || "object" != typeof e)
                return [];
            if (e.seatbid) {
                var n = Object(x.a)(e, "ext.errors.rubicon");
                Array.isArray(n) && n.length > 0 && Object(w.logWarn)("Rubicon: Error in video response");
                var i = [];
                return e.seatbid.forEach((function(t) {
                    (t.bid || []).forEach((function(n) {
                        var a = {
                            requestId: r.bidId,
                            currency: e.cur || "USD",
                            creativeId: n.crid,
                            cpm: n.price || 0,
                            bidderCode: t.seat,
                            ttl: 300,
                            netRevenue: !1 !== Ws.netRevenue,
                            width: n.w || Object(x.a)(r, "mediaTypes.video.w") || Object(x.a)(r, "params.video.playerWidth"),
                            height: n.h || Object(x.a)(r, "mediaTypes.video.h") || Object(x.a)(r, "params.video.playerHeight")
                        };
                        n.id && (a.seatBidId = n.id),
                        n.dealid && (a.dealId = n.dealid),
                        n.adomain && Object(Kr.a)(a, "meta.advertiserDomains", Array.isArray(n.adomain) ? n.adomain : [n.adomain]),
                        Object(x.a)(n, "ext.bidder.rp.advid") && Object(Kr.a)(a, "meta.advertiserId", n.ext.bidder.rp.advid);
                        var o = Object(x.a)(e, "ext.responsetimemillis.rubicon");
                        if (r && o && (r.serverResponseTimeMs = o),
                        Object(x.a)(n, "ext.prebid.type") === ge) {
                            a.mediaType = ge,
                            Object(Kr.a)(a, "meta.mediaType", ge);
                            var d = Object(x.a)(n, "ext.prebid.targeting");
                            d && "object" == typeof d && (a.adserverTargeting = d),
                            n.ext.prebid.cache && "object" == typeof n.ext.prebid.cache.vastXml && n.ext.prebid.cache.vastXml.cacheId && n.ext.prebid.cache.vastXml.url ? a.vastUrl = n.ext.prebid.cache.vastXml.url : d && d.hb_uuid && d.hb_cache_host && d.hb_cache_path && (a.vastUrl = "https://" + d.hb_cache_host + d.hb_cache_path + "?uuid=" + d.hb_uuid),
                            n.adm && (a.vastXml = n.adm),
                            n.nurl && (a.vastUrl = n.nurl),
                            !a.vastUrl && n.nurl && (a.vastUrl = n.nurl),
                            "outstream" === Object(x.a)(r, "mediaTypes.video.context").toLowerCase() && (a.renderer = function(e) {
                                var t = N.install({
                                    id: e.adId,
                                    url: Ws.rendererUrl || "https://video-outstream.rubiconproject.com/apex-2.2.1.js",
                                    config: Ws.rendererConfig || {},
                                    loaded: !1,
                                    adUnitCode: e.adUnitCode
                                });
                                try {
                                    t.setRender(Hs)
                                } catch (e) {
                                    Object(w.logWarn)("Prebid Error calling setRender on renderer", e)
                                }
                                return t
                            }(a))
                        } else
                            Object(w.logWarn)("Rubicon: video response received non-video media type");
                        i.push(a)
                    }
                    ))
                }
                )),
                i
            }
            var a, o = e.ads, d = 0;
            return "object" != typeof r || Array.isArray(r) || "video" !== Js(r) || "object" != typeof o || (o = o[r.adUnitCode]),
            !Array.isArray(o) || o.length < 1 ? [] : o.reduce((function(t, n, i) {
                if (n.impression_id && a === n.impression_id ? d++ : a = n.impression_id,
                "ok" !== n.status)
                    return t;
                var o, s = Array.isArray(r) ? r[i - d] : r;
                if (s && "object" == typeof s) {
                    var c = {
                        requestId: s.bidId,
                        currency: "USD",
                        creativeId: n.creative_id || (n.network || "") + "-" + (n.advertiser || ""),
                        cpm: n.cpm || 0,
                        dealId: n.deal,
                        ttl: 300,
                        netRevenue: !1 !== Ws.netRevenue,
                        rubicon: {
                            advertiserId: n.advertiser,
                            networkId: n.network
                        },
                        meta: {
                            advertiserId: n.advertiser,
                            networkId: n.network,
                            mediaType: ve
                        }
                    };
                    if (n.creative_type && (c.mediaType = n.creative_type),
                    n.adomain && (c.meta.advertiserDomains = Array.isArray(n.adomain) ? n.adomain : [n.adomain]),
                    n.creative_type === ge)
                        c.width = s.params.video.playerWidth,
                        c.height = s.params.video.playerHeight,
                        c.vastUrl = n.creative_depot_url,
                        c.impression_id = n.impression_id;
                    else {
                        c.ad = (o = n.script,
                        "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='" + n.impression_id + "'>\n<script type='text/javascript'>" + o + "<\/script>\n</div>\n</body>\n</html>");
                        var u = Vs[n.size_id].split("x").map((function(e) {
                            return Number(e)
                        }
                        ));
                        c.width = u[0],
                        c.height = u[1]
                    }
                    c.rubiconTargeting = (Array.isArray(n.targeting) ? n.targeting : []).reduce((function(e, t) {
                        return e[t.key] = t.values[0],
                        e
                    }
                    ), {
                        rpfl_elemid: s.adUnitCode
                    }),
                    t.push(c)
                } else
                    Object(w.logError)("Rubicon: bidRequest undefined at index position:" + i, r, e);
                return t
            }
            ), []).sort((function(e, t) {
                return (t.cpm || 0) - (e.cpm || 0)
            }
            ))
        },
        getUserSyncs: function(e, t, r, n) {
            if (!ec && e.iframeEnabled) {
                var i = {};
                return r && ("boolean" == typeof r.gdprApplies && (i.gdpr = Number(r.gdprApplies)),
                "string" == typeof r.consentString && (i.gdpr_consent = r.consentString)),
                n && (i.us_privacy = encodeURIComponent(n)),
                i = Object.keys(i).length ? "?" + Object(w.formatQS)(i) : "",
                ec = !0,
                {
                    type: "iframe",
                    url: "https://" + (Ws.syncHost || "eus") + ".rubiconproject.com/usync.html" + i
                }
            }
        },
        transformBidParams: function(e, t) {
            return Object(w.convertTypes)({
                accountId: "number",
                siteId: "number",
                zoneId: "number"
            }, e)
        }
    };
    function Ls(e, t) {
        var r = _.b.getConfig("pageUrl");
        return e.params.referrer ? r = e.params.referrer : r || (r = t.refererInfo.referer),
        e.params.secure ? r.replace(/^http:/i, "https:") : r
    }
    function Hs(e) {
        var t, r = document.getElementById(e.adUnitCode);
        (t = r.querySelector("div[id^='google_ads']")) && t.style.setProperty("display", "none"),
        function(e) {
            var t = e.querySelector("script[id^='sas_script']")
              , r = t && t.nextSibling;
            r && "iframe" === r.localName && r.style.setProperty("display", "none")
        }(r);
        var n = e.renderer.getConfig();
        e.renderer.push((function() {
            window.MagniteApex.renderAd({
                width: e.width,
                height: e.height,
                vastUrl: e.vastUrl,
                placement: {
                    attachTo: r,
                    align: n.align || "center",
                    position: n.position || "append"
                },
                closeButton: n.closeButton || !1,
                label: n.label || void 0,
                collapse: n.collapse || !0
            })
        }
        ))
    }
    function Ks(e, t) {
        var r = e.params;
        if ("video" === t) {
            var n = [];
            return r.video && r.video.playerWidth && r.video.playerHeight ? n = [r.video.playerWidth, r.video.playerHeight] : Array.isArray(Object(x.a)(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? n = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && e.sizes.length > 0 && Array.isArray(e.sizes[0]) && e.sizes[0].length > 1 && (n = e.sizes[0]),
            n
        }
        var i = [];
        return Array.isArray(r.sizes) ? i = r.sizes : void 0 !== Object(x.a)(e, "mediaTypes.banner.sizes") ? i = Xs(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && e.sizes.length > 0 ? i = Xs(e.sizes) : Object(w.logWarn)("Rubicon: no sizes are setup or found"),
        function(e) {
            var t = [15, 2, 9];
            return e.sort((function(e, r) {
                var n = t.indexOf(e)
                  , i = t.indexOf(r);
                return n > -1 || i > -1 ? -1 === n ? 1 : -1 === i ? -1 : n - i : e - r
            }
            ))
        }(i)
    }
    function Ys(e, t, r) {
        var n = {
            user: {
                ext: {
                    data: Object(I.default)({}, e.params.visitor)
                }
            },
            site: {
                ext: {
                    data: Object(I.default)({}, e.params.inventory)
                }
            }
        };
        e.params.keywords && (n.site.keywords = Object(w.isArray)(e.params.keywords) ? e.params.keywords.join(",") : e.params.keywords);
        var i = Object(w.mergeDeep)({}, _.b.getConfig("ortb2") || {}, n)
          , a = Object(x.a)(e.ortb2Imp, "ext.data") || {}
          , o = Object(x.a)(e, "ortb2Imp.ext.gpid")
          , d = {
            user: [4],
            site: [1, 2, 5, 6]
        }
          , s = {
            user: "tg_v.",
            site: "tg_i.",
            adserver: "tg_i.dfp_ad_unit_code",
            pbadslot: "tg_i.pbadslot",
            keywords: "kw"
        }
          , c = function(e, t, n, i) {
            void 0 === i && (i = !0);
            var a = function(e, t, r) {
                if ("data" === t && Array.isArray(e))
                    return e.filter((function(e) {
                        return e.segment && Object(x.a)(e, "ext.segtax") && d[r] && -1 !== d[r].indexOf(Object(x.a)(e, "ext.segtax"))
                    }
                    )).map((function(e) {
                        var t = e.segment.filter((function(e) {
                            return e.id
                        }
                        )).reduce((function(e, t) {
                            return e.push(t.id),
                            e
                        }
                        ), []);
                        if (t.length > 0)
                            return t.toString()
                    }
                    )).toString();
                if ("object" != typeof e || Array.isArray(e)) {
                    if (void 0 !== e)
                        return Array.isArray(e) ? e.filter((function(e) {
                            if ("object" != typeof e && void 0 !== e)
                                return e.toString();
                            Object(w.logWarn)("Rubicon: Filtered value: ", e, "for key", t, ": Expected value to be string, integer, or an array of strings/ints")
                        }
                        )).toString() : e.toString()
                } else
                    Object(w.logWarn)("Rubicon: Filtered FPD key: ", t, ": Expected value to be string, integer, or an array of strings/ints")
            }(e, n, t)
              , o = s[n] && i ? "" + s[n] : "data" === n ? s[t] + "iab" : "" + s[t] + n;
            r[o] = r[o] ? r[o].concat(",", a) : a
        };
        t === ve ? (["site", "user"].forEach((function(e) {
            Object.keys(i[e]).forEach((function(t) {
                "site" === e && "content" === t && i[e][t].data ? c(i[e][t].data, e, "data") : "ext" !== t ? c(i[e][t], e, t) : i[e][t].data && Object.keys(i[e].ext.data).forEach((function(t) {
                    c(i[e].ext.data[t], e, t, !1)
                }
                ))
            }
            ))
        }
        )),
        Object.keys(a).forEach((function(e) {
            "adserver" !== e ? c(a[e], "site", e) : "gam" === a[e].name && c(a[e].adslot, name, e)
        }
        )),
        o && (r.p_gpid = o),
        r["tg_i.pbadslot"] && delete r["tg_i.dfp_ad_unit_code"]) : (Object.keys(a).length && Object(w.mergeDeep)(r.imp[0].ext, {
            data: a
        }),
        o && (r.imp[0].ext.gpid = o),
        Object(w.mergeDeep)(r, i))
    }
    function Xs(e) {
        return Object(w.parseSizesInput)(e).reduce((function(e, t) {
            var r = parseInt(Vs[t], 10);
            return r && e.push(r),
            e
        }
        ), [])
    }
    function Js(e, t) {
        return void 0 === t && (t = !1),
        r = e,
        "object" == typeof Object(x.a)(r, "params.video") && void 0 !== Object(x.a)(r, "mediaTypes." + ge) ? -1 === ["outstream", "instream"].indexOf(Object(x.a)(e, "mediaTypes." + ge + ".context")) ? void (t && Object(w.logError)("Rubicon: mediaTypes.video.context must be outstream or instream")) : Ks(e, "video").length < 2 ? void (t && Object(w.logError)("Rubicon: could not determine the playerSize of the video")) : (t && Object(w.logMessage)("Rubicon: making video request for adUnit", e.adUnitCode),
        "video") : 0 === Ks(e, "banner").length ? void (t && Object(w.logError)("Rubicon: could not determine the sizes for banner request")) : (t && Object(w.logMessage)("Rubicon: making banner request for adUnit", e.adUnitCode),
        "banner");
        var r
    }
    function Qs(e) {
        return {
            ranges: {
                low: [{
                    max: 5,
                    increment: .5
                }],
                medium: [{
                    max: 20,
                    increment: .1
                }],
                high: [{
                    max: 20,
                    increment: .01
                }],
                auto: [{
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }],
                dense: [{
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }],
                custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
            }[e.getConfig("priceGranularity")]
        }
    }
    function $s(e) {
        var t = !1
          , r = ["asi", "sid", "hp"];
        return e.nodes ? ((t = e.nodes.reduce((function(e, t) {
            return e ? r.every((function(e) {
                return t.hasOwnProperty(e)
            }
            )) : e
        }
        ), !0)) || Object(w.logError)("Rubicon: required schain params missing"),
        t) : t
    }
    function Zs(e, t) {
        return "rp_schain" === e ? "rp_schain=" + t : e + "=" + encodeURIComponent(t)
    }
    var ec = !1;
    je(Gs),
    window.jwpb.installedModules.push("rubiconBidAdapter");
    var tc = Gs.code;
    function rc(e, t) {
        var r = {
            accountId: "" + t.pubid,
            siteId: "" + t.siteId,
            zoneId: "" + t.zoneId
        }
          , n = {}
          , i = e.player
          , a = i.getAudioTracks();
        if (a && a.length) {
            var o = a[i.getCurrentAudioTrack()];
            n.language = o.language
        }
        var d = e.settings.floorPriceCents;
        return void 0 !== d && (r.floor = d / 100),
        r.video = n,
        {
            bidder: tc,
            params: r
        }
    }
    function nc(e) {
        return !!e && void 0 !== e.pubid && void 0 !== e.siteId && void 0 !== e.zoneId
    }
    var ic = "smartadserver";
    function ac(e, t) {
        var r = {
            networkId: parseInt(t.networkId)
        }
          , n = parseInt(t.siteId);
        n && (r.siteId = n);
        var i = parseInt(t.pageId);
        i && (r.pageId = i);
        var a = parseInt(t.formatId);
        a && (r.formatId = a);
        var o = e.settings.floorPriceCents;
        return void 0 !== o && (r.bidfloor = o / 100),
        {
            bidder: ic,
            params: r
        }
    }
    function oc(e) {
        if (!e)
            return !1;
        var t = void 0 !== e.siteId && void 0 !== e.pageId && void 0 !== e.formatId
          , r = void 0 === e.siteId && void 0 === e.pageId && void 0 === e.formatId;
        return void 0 !== e.networkId && (t || r)
    }
    var dc = "sonobi";
    function sc(e, t) {
        var r = {
            TagID: "" + t.id
        }
          , n = e.settings.floorPriceCents;
        return void 0 !== n && (r.floor = n / 100),
        {
            bidder: dc,
            params: r
        }
    }
    function cc(e) {
        return !!e && void 0 !== e.id
    }
    var uc = {
        consented_providers: ["3", "7", "11", "12", "15", "20", "22", "35", "43", "46", "48", "55", "57", "61", "62", "66", "70", "80", "83", "85", "86", "89", "93", "108", "122", "124", "125", "126", "131", "134", "135", "136", "143", "144", "147", "149", "153", "154", "159", "161", "162", "165", "167", "171", "178", "184", "188", "192", "195", "196", "202", "209", "211", "218", "221", "228", "229", "230", "236", "239", "241", "253", "255", "259", "266", "271", "272", "274", "286", "291", "294", "303", "308", "310", "311", "313", "314", "316", "317", "322", "323", "327", "336", "338", "340", "348", "350", "358", "359", "363", "367", "370", "371", "384", "385", "389", "393", "394", "397", "398", "407", "414", "415", "424", "429", "430", "432", "436", "438", "440", "442", "443", "445", "448", "449", "453", "459", "479", "482", "486", "491", "492", "494", "495", "503", "505", "510", "522", "523", "528", "537", "540", "550", "559", "560", "568", "571", "574", "575", "576", "584", "585", "587", "588", "590", "591", "592", "595", "609", "621", "624", "723", "725", "733", "737", "776", "780", "782", "787", "797", "798", "802", "803", "814", "817", "820", "821", "827", "829", "839", "853", "864", "867", "874", "899", "904", "922", "926", "931", "932", "933", "938", "955", "973", "976", "979", "981", "985", "987", "991", "1003", "1024", "1025", "1027", "1028", "1029", "1033", "1034", "1040", "1047", "1048", "1051", "1052", "1053", "1054", "1062", "1063", "1067", "1072", "1085", "1092", "1095", "1097", "1099", "1100", "1107", "1126", "1127", "1143", "1149", "1152", "1162", "1166", "1167", "1170", "1171", "1172", "1188", "1192", "1199", "1201", "1204", "1205", "1211", "1212", "1215", "1220", "1225", "1226", "1227", "1230", "1232", "1236", "1241", "1248", "1250", "1252", "1268", "1275", "1276", "1284", "1286", "1298", "1301", "1307", "1312", "1313", "1317", "1329", "1336", "1344", "1345", "1356", "1362", "1365", "1375", "1403", "1409", "1411", "1415", "1416", "1419", "1423", "1440", "1442", "1449", "1451", "1455", "1456", "1468", "1496", "1503", "1509", "1512", "1514", "1517", "1520", "1525", "1540", "1547", "1548", "1555", "1558", "1570", "1575", "1577", "1579", "1583", "1584", "1591", "1598", "1603", "1608", "1613", "1616", "1626", "1631", "1633", "1638", "1642", "1648", "1651", "1652", "1653", "1660", "1665", "1667", "1669", "1671", "1674", "1677", "1678", "1682", "1684", "1697", "1703", "1705", "1716", "1720", "1721", "1722", "1725", "1732", "1733", "1735", "1739", "1741", "1745", "1750", "1753", "1760", "1765", "1769", "1776", "1780", "1782", "1786", "1791", "1794", "1799", "1800", "1801", "1810", "1827", "1831", "1832", "1834", "1837", "1840", "1843", "1844", "1845", "1858", "1859", "1863", "1866", "1870", "1872", "1875", "1878", "1880", "1882", "1883", "1889", "1892", "1896", "1898", "1899", "1902", "1905", "1911", "1922", "1928", "1929", "1934", "1942", "1943", "1944", "1945", "1958", "1960", "1962", "1963", "1964", "1967", "1968", "1978", "1985", "1986", "1987", "1998", "2003", "2007", "2012", "2013", "2027", "2035", "2038", "2039", "2044", "2047", "2052", "2056", "2059", "2062", "2064", "2068", "2070", "2072", "2078", "2079", "2084", "2088", "2090", "2095", "2100", "2103", "2107", "2109", "2113", "2115", "2121", "2127", "2130", "2133", "2137", "2140", "2141", "2145", "2147", "2150", "2156", "2166", "2170", "2171", "2176", "2177", "2179", "2183", "2186", "2192", "2198", "2202", "2205", "2214", "2216", "2219", "2220", "2222", "2223", "2224", "2225", "2227", "2228", "2234", "2238", "2247", "2251", "2253", "2262", "2264", "2271", "2276", "2278", "2279", "2282", "2290", "2292", "2295", "2299", "2305", "2306", "2310", "2311", "2312", "2315", "2320", "2325", "2328", "2331", "2334", "2335", "2336", "2337", "2343", "2346", "2354", "2357", "2358", "2359", "2366", "2370", "2373", "2376", "2377", "2380", "2382", "2387", "2389", "2392", "2394", "2400", "2403", "2405", "2406", "2407", "2410", "2411", "2413", "2414", "2415", "2416", "2418", "2422", "2425", "2427", "2435", "2437", "2440", "2441", "2447", "2453", "2459", "2461", "2462", "2464", "2467", "2468", "2472", "2477", "2481", "2484", "2486", "2492", "2493", "2496", "2497", "2498", "2499", "2504", "2506", "2510", "2511", "2512", "2517", "2526", "2527", "2531", "2532", "2534", "2542", "2544", "2552", "2555", "2559", "2563", "2564", "2567", "2568", "2569", "2571", "2572", "2573", "2575", "2577", "2579", "2583", "2584", "2586", "2589", "2595", "2596", "2597", "2601", "2604", "2605", "2609", "2610", "2612", "2614", "2621", "2622", "2624", "2628", "2629", "2632", "2634", "2636", "2639", "2643", "2645", "2646", "2647", "2649", "2650", "2651", "2652", "2656", "2657", "2658", "2660", "2661", "2662", "2663", "2664", "2669", "2670", "2673", "2676", "2677", "2678", "2681", "2682", "2684", "2685", "2686", "2689", "2690", "2691", "2695", "2698", "2699", "2702", "2704", "2705", "2706", "2707", "2709", "2710", "2713", "2714", "2727", "2729", "2739", "2758", "2765", "2766", "2767", "2768", "2770", "2771", "2772", "2776", "2777", "2778", "2779", "2780", "2783", "2784", "2786", "2787", "2791", "2792", "2793", "2797", "2798", "2801", "2802", "2803", "2805", "2808", "2809", "2810", "2811", "2812", "2813", "2814", "2817", "2818", "2824", "2826", "2827", "2829", "2830", "2831", "2832", "2834", "2836", "2838", "2840", "2842", "2843", "2844", "2850", "2851", "2852", "2854", "2858", "2860", "2862", "2864", "2865", "2866", "2867", "2868", "2869", "2871"]
    }
      , pc = {
        code: "spotx",
        gvlid: 165,
        supportedMediaTypes: [ge],
        isBidRequestValid: function(e) {
            if (e && "object" != typeof e.params)
                return Object(w.logError)("spotx: params is not defined or is incorrect in the bidder settings."),
                !1;
            if (!Object(x.a)(e, "mediaTypes.video"))
                return Object(w.logError)("spotx: mediaTypes.video is not present in the bidder settings."),
                !1;
            var t = Object(x.a)(e, "mediaTypes.video.playerSize");
            if (!t || !Object(w.isArray)(t))
                return Object(w.logError)("spotx: mediaTypes.video.playerSize is not defined in the bidder settings."),
                !1;
            if (!Object(w.getBidIdParameter)("channel_id", e.params))
                return Object(w.logError)("spotx: channel_id is not present in bidder params"),
                !1;
            if (("outstream" == Object(x.a)(e, "mediaTypes.video.context") || "outstream" == Object(x.a)(e, "params.ad_unit")) && !Object(w.getBidIdParameter)("outstream_function", e.params)) {
                if (!Object(w.getBidIdParameter)("outstream_options", e.params))
                    return Object(w.logError)("spotx: please define outstream_options parameter or override the default SpotX outstream rendering by defining your own Outstream function using field outstream_function."),
                    !1;
                if (!Object(w.getBidIdParameter)("slot", e.params.outstream_options))
                    return Object(w.logError)("spotx: please define parameter slot in outstream_options object in the configuration."),
                    !1
            }
            return !0
        },
        buildRequests: function(e, t) {
            var r = t.refererInfo.referer
              , n = !!r.match(/^https:/);
            return e.map((function(e) {
                var i;
                i = Object(w.getBidIdParameter)("page", e.params) ? Object(w.getBidIdParameter)("page", e.params) : _.b.getConfig("pageUrl") ? _.b.getConfig("pageUrl") : r;
                var a = Object(w.getBidIdParameter)("channel_id", e.params)
                  , o = null
                  , d = Object(x.a)(e, "mediaTypes.video.playerSize")
                  , s = d[0][0]
                  , c = d[0][1]
                  , u = n || (Object(w.getBidIdParameter)("secure", e.params) ? 1 : 0)
                  , p = {
                    sdk_name: "Prebid 1+",
                    versionOrtb: "2.3"
                };
                if ("" != Object(w.getBidIdParameter)("hide_skin", e.params) && (p.hide_skin = +!!Object(w.getBidIdParameter)("hide_skin", e.params)),
                "" != Object(w.getBidIdParameter)("ad_volume", e.params) && (p.ad_volume = Object(w.getBidIdParameter)("ad_volume", e.params)),
                "" != Object(w.getBidIdParameter)("ad_unit", e.params) && (p.ad_unit = Object(w.getBidIdParameter)("ad_unit", e.params)),
                "" != Object(w.getBidIdParameter)("outstream_options", e.params) && (p.outstream_options = Object(w.getBidIdParameter)("outstream_options", e.params)),
                "" != Object(w.getBidIdParameter)("outstream_function", e.params) && (p.outstream_function = Object(w.getBidIdParameter)("outstream_function", e.params)),
                "" != Object(w.getBidIdParameter)("custom", e.params) && (p.custom = Object(w.getBidIdParameter)("custom", e.params)),
                "" != Object(w.getBidIdParameter)("pre_market_bids", e.params) && Object(w.isArray)(Object(w.getBidIdParameter)("pre_market_bids", e.params))) {
                    var l = Object(w.getBidIdParameter)("pre_market_bids", e.params);
                    for (var f in p.pre_market_bids = [],
                    l) {
                        var b = l[f]
                          , m = "";
                        b.vast_url ? m = '<?xml version="1.0" encoding="utf-8"?><VAST version="2.0"><Ad><Wrapper><VASTAdTagURI>' + b.vast_url + "</VASTAdTagURI></Wrapper></Ad></VAST>" : b.vast_string && (m = b.vast_string),
                        p.pre_market_bids.push({
                            id: b.deal_id,
                            seatbid: [{
                                bid: [{
                                    impid: Date.now(),
                                    dealid: b.deal_id,
                                    price: b.price,
                                    adm: m
                                }]
                            }],
                            cur: b.currency,
                            ext: {
                                event_log: [{}]
                            }
                        })
                    }
                }
                var g = Object(w.getBidIdParameter)("mimes", e.params) || ["application/javascript", "video/mp4", "video/webm"]
                  , v = {
                    id: e.bidId,
                    secure: u,
                    video: {
                        w: s,
                        h: c,
                        ext: p,
                        mimes: g
                    }
                };
                if (Object(w.isFn)(e.getFloor)) {
                    var y = e.getFloor({
                        currency: "USD",
                        mediaType: "video",
                        size: "*"
                    });
                    "USD" === y.currency && (v.bidfloor = y.floor)
                } else
                    "" != Object(w.getBidIdParameter)("price_floor", e.params) && (v.bidfloor = Object(w.getBidIdParameter)("price_floor", e.params));
                "" != Object(w.getBidIdParameter)("start_delay", e.params) && (v.video.startdelay = 0 + Boolean(Object(w.getBidIdParameter)("start_delay", e.params))),
                "" != Object(w.getBidIdParameter)("min_duration", e.params) && (v.video.minduration = Object(w.getBidIdParameter)("min_duration", e.params)),
                "" != Object(w.getBidIdParameter)("max_duration", e.params) && (v.video.maxduration = Object(w.getBidIdParameter)("max_duration", e.params)),
                "" != Object(w.getBidIdParameter)("placement_type", e.params) && (v.video.ext.placement = Object(w.getBidIdParameter)("placement_type", e.params)),
                "" != Object(w.getBidIdParameter)("position", e.params) && (v.video.ext.pos = Object(w.getBidIdParameter)("position", e.params)),
                e.crumbs && e.crumbs.pubcid && (o = e.crumbs.pubcid);
                var h = navigator.language ? "language" : "userLanguage"
                  , O = {
                    id: a,
                    imp: v,
                    site: {
                        id: "",
                        page: i,
                        content: "content"
                    },
                    device: {
                        h: screen.height,
                        w: screen.width,
                        dnt: Object(w.getDNT)() ? 1 : 0,
                        language: navigator[h].split("-")[0],
                        make: navigator.vendor ? navigator.vendor : "",
                        ua: navigator.userAgent
                    },
                    ext: {
                        wrap_response: 1
                    }
                };
                _.b.getConfig("cache") && _.b.getConfig("cache.url") && !0 === _.b.getConfig("cache.ignoreBidderCacheKey") && (O.ext.wrap_response = 0),
                Object(w.getBidIdParameter)("number_of_ads", e.params) && (O.ext.number_of_ads = Object(w.getBidIdParameter)("number_of_ads", e.params));
                var j = {};
                1 == Object(w.getBidIdParameter)("spotx_all_google_consent", e.params) && (j.consented_providers_settings = uc),
                t && t.gdprConsent && (j.consent = t.gdprConsent.consentString,
                void 0 !== t.gdprConsent.gdprApplies && Object(Kr.a)(O, "regs.ext.gdpr", t.gdprConsent.gdprApplies ? 1 : 0)),
                t && t.uspConsent && Object(Kr.a)(O, "regs.ext.us_privacy", t.uspConsent),
                Object(x.a)(e, "userId.id5id.uid") && (j.eids = j.eids || [],
                j.eids.push({
                    source: "id5-sync.com",
                    uids: [{
                        id: e.userId.id5id.uid,
                        ext: e.userId.id5id.ext || {}
                    }]
                })),
                o && (j.fpc = o),
                e && e.schain && (O.source = {
                    ext: {
                        schain: e.schain
                    }
                }),
                e && e.userId && e.userId.tdid && (j.eids = j.eids || [],
                j.eids.push({
                    source: "adserver.org",
                    uids: [{
                        id: e.userId.tdid,
                        ext: {
                            rtiPartner: "TDID"
                        }
                    }]
                })),
                Object(w.isEmpty)(j) || (O.user = {
                    ext: j
                });
                return {
                    method: "POST",
                    url: "https://search.spotxchange.com/openrtb/2.3/dados/" + a + "?src_sys=prebid",
                    data: O,
                    bidRequest: t
                }
            }
            ))
        },
        interpretResponse: function(e, t) {
            var r = []
              , n = e.body;
            return n && Object(w.isArray)(n.seatbid) && Object(w._each)(n.seatbid, (function(e) {
                Object(w._each)(e.bid, (function(e) {
                    var i = {};
                    for (var a in t.bidRequest.bids)
                        e.impid == t.bidRequest.bids[a].bidId && (i = t.bidRequest.bids[a]);
                    Object(w._each)(i.params.pre_market_bids, (function(t) {
                        t.deal_id == e.id && (e.price = t.price,
                        n.cur = t.currency)
                    }
                    ));
                    var o = {
                        requestId: i.bidId,
                        currency: n.cur || "USD",
                        cpm: e.price,
                        creativeId: e.crid || "",
                        dealId: e.dealid || "",
                        ttl: 360,
                        netRevenue: !0,
                        channel_id: n.id,
                        mediaType: ge,
                        width: e.w,
                        height: e.h
                    };
                    _.b.getConfig("cache") && _.b.getConfig("cache.url") && !0 === _.b.getConfig("cache.ignoreBidderCacheKey") ? o.vastXml = e.adm : (o.cache_key = e.ext.cache_key,
                    o.vastUrl = "https://search.spotxchange.com/ad/vast.html?key=" + e.ext.cache_key,
                    o.videoCacheKey = e.ext.cache_key),
                    o.meta = o.meta || {},
                    e && e.adomain && e.adomain.length > 0 && (o.meta.advertiserDomains = e.adomain);
                    var d = Object(x.a)(i, "mediaTypes.video.context")
                      , s = Object(x.a)(i, "params.ad_unit");
                    if ("outstream" == d || "outstream" == s) {
                        var c = Object(x.a)(i, "mediaTypes.video.playerSize")
                          , u = N.install({
                            id: 0,
                            url: "/",
                            config: {
                                adText: "SpotX Outstream Video Ad via Prebid.js",
                                player_width: c[0][0],
                                player_height: c[0][1],
                                content_page_url: Object(x.a)(t, "data.site.page"),
                                ad_mute: +!!Object(x.a)(i, "params.ad_mute"),
                                hide_skin: +!!Object(x.a)(i, "params.hide_skin"),
                                outstream_options: Object(x.a)(i, "params.outstream_options"),
                                outstream_function: Object(x.a)(i, "params.outstream_function")
                            }
                        });
                        try {
                            u.setRender(lc),
                            u.setEventHandlers({
                                impression: function() {
                                    return Object(w.logMessage)("SpotX outstream video impression event")
                                },
                                loaded: function() {
                                    return Object(w.logMessage)("SpotX outstream video loaded event")
                                },
                                ended: function() {
                                    Object(w.logMessage)("SpotX outstream renderer video event")
                                }
                            })
                        } catch (e) {
                            Object(w.logWarn)("Prebid Error calling setRender or setEventHandlers on renderer", e)
                        }
                        o.renderer = u
                    }
                    r.push(o)
                }
                ))
            }
            )),
            r
        }
    };
    function lc(e) {
        var t = function(e) {
            var t = Object(w.getBidIdParameter)("slot", e.renderer.config.outstream_options);
            Object(w.logMessage)("[SPOTX][renderer] Handle SpotX outstream renderer");
            var r = window.document.createElement("script");
            r.type = "text/javascript",
            r.src = "https://js.spotx.tv/easi/v1/" + e.channel_id + ".js";
            var n = {};
            n["data-spotx_channel_id"] = "" + e.channel_id,
            n["data-spotx_vast_url"] = "" + e.vastUrl,
            n["data-spotx_content_page_url"] = e.renderer.config.content_page_url,
            n["data-spotx_ad_unit"] = "incontent",
            Object(w.logMessage)("[SPOTX][renderer] Default behavior"),
            Object(w.getBidIdParameter)("ad_mute", e.renderer.config.outstream_options) && (n["data-spotx_ad_mute"] = "1"),
            n["data-spotx_collapse"] = "0",
            n["data-spotx_autoplay"] = "1",
            n["data-spotx_blocked_autoplay_override_mode"] = "1",
            n["data-spotx_video_slot_can_autoplay"] = "1";
            var i = Object(w.getBidIdParameter)("playersize_auto_adapt", e.renderer.config.outstream_options);
            if (i && Object(w.isBoolean)(i) && !0 === i) {
                var a = e.width && Object(w.isNumber)(e.width) && e.height && Object(w.isNumber)(e.height) ? e.width / e.height : 4 / 3
                  , o = window.document.getElementById(t).clientWidth
                  , d = e.renderer.config.player_width
                  , s = e.renderer.config.player_height
                  , c = 0
                  , u = 0;
                o < d && (s = (d = o) / a),
                a <= 1 ? (c = Math.round(s * a),
                u = s) : (c = d,
                u = Math.round(d / a)),
                n["data-spotx_content_width"] = "" + c,
                n["data-spotx_content_height"] = "" + u
            }
            var p = Object(w.getBidIdParameter)("custom_override", e.renderer.config.outstream_options);
            if (p && Object(w.isPlainObject)(p))
                for (var l in Object(w.logMessage)("[SPOTX][renderer] Custom behavior."),
                p)
                    p.hasOwnProperty(l) && ("channel_id" === l || "vast_url" === l || "content_page_url" === l || "ad_unit" === l ? Object(w.logWarn)("[SPOTX][renderer] Custom behavior: following option cannot be overridden: " + l) : n["data-spotx_" + l] = p[l]);
            for (var f in n)
                n.hasOwnProperty(f) && r.setAttribute(f, n[f]);
            return r
        }(e);
        if (null != e.renderer.config.outstream_function && "function" == typeof e.renderer.config.outstream_function)
            e.renderer.config.outstream_function(e, t);
        else
            try {
                var r = Object(w.getBidIdParameter)("in_iframe", e.renderer.config.outstream_options);
                if (r && "IFRAME" == window.document.getElementById(r).nodeName) {
                    var n = window.document.getElementById(r)
                      , i = n.contentDocument;
                    !i && n.contentWindow && (i = n.contentWindow.document),
                    i.body.appendChild(t)
                } else {
                    var a = Object(w.getBidIdParameter)("slot", e.renderer.config.outstream_options);
                    a && window.document.getElementById(a) ? window.document.getElementById(a).appendChild(t) : window.document.getElementsByTagName("head")[0].appendChild(t)
                }
            } catch (e) {
                Object(w.logError)("[SPOTX][renderer] Error:" + e.message)
            }
    }
    je(pc),
    window.jwpb.installedModules.push("spotxBidAdapter");
    var fc = pc.code;
    function bc(e, t, r, n) {
        var i = {
            content: r,
            channel_id: t.id,
            ad_unit: n.context,
            ad_volume: e.player.getVolume(),
            hide_skin: !0,
            start_delay: n.startdelay,
            min_duration: n.minduration,
            max_duration: n.maxduration
        }
          , a = n.mimes
          , o = t.optionalParams;
        if (o && (Object(I.default)(i, o),
        o.no_vpaid_ads)) {
            var d = a.indexOf("application/javascript");
            a.splice(d, 1)
        }
        i.mimes = a;
        var s = e.settings.floorPriceCents;
        t.passFloorPrice && void 0 !== s && (i.price_floor = s / 100);
        var c = e.params.jwpseg;
        return Array.isArray(c) && c.length && (i.custom = {
            jwpseg: c
        }),
        {
            bidder: fc,
            params: i
        }
    }
    function mc(e) {
        return void 0 === e && (e = {}),
        void 0 !== e.id
    }
    Br.bidderSettings[fc] = {
        sendStandardTargeting: !1,
        adserverTargeting: [{
            key: "spotx_bid",
            val: function(e) {
                return Zc(Br.getConfig("priceGranularity"), e)
            }
        }, {
            key: "spotx_ad_key",
            val: function(e) {
                return e.videoCacheKey
            }
        }]
    };
    var gc = ["minduration", "maxduration", "startdelay", "placement", "linearity", "mimes", "protocols", "api"]
      , vc = ["1x1", "1x2"]
      , yc = {
        code: "synacormedia",
        supportedMediaTypes: [ve, ge],
        sizeMap: {},
        isVideoBid: function(e) {
            return void 0 !== e.mediaTypes && e.mediaTypes.hasOwnProperty("video")
        },
        isBidRequestValid: function(e) {
            var t = e && e.params && (e.params.hasOwnProperty("placementId") || e.params.hasOwnProperty("tagId")) && e.params.hasOwnProperty("seatId")
              , r = e && Object(w.getAdUnitSizes)(e).filter((function(e) {
                return -1 === vc.indexOf(e.join("x"))
            }
            )).length > 0;
            return !(!t || !r)
        },
        buildRequests: function(e, t) {
            var r = this;
            if (e && e.length && t) {
                var n = t.refererInfo
                  , i = {
                    id: t.auctionId,
                    site: {
                        domain: _.b.getConfig("publisherDomain") || location.hostname,
                        page: n.referer,
                        ref: document.referrer
                    },
                    device: {
                        ua: navigator.userAgent
                    },
                    imp: []
                }
                  , a = e[0].schain;
                a && (i.source = {
                    ext: {
                        schain: a
                    }
                });
                var o = null;
                if (e.forEach((function(e, t) {
                    if (o && o !== e.params.seatId)
                        Object(w.logWarn)("Synacormedia: there is an inconsistent seatId: " + e.params.seatId + " but only sending bid requests for " + o + ", you should double check your configuration");
                    else {
                        o = e.params.seatId;
                        var n = e.params.tagId || e.params.placementId
                          , a = parseInt(e.params.pos, 10);
                        isNaN(a) && (Object(w.logWarn)("Synacormedia: there is an invalid POS: " + e.params.pos),
                        a = 0);
                        var d = r.isVideoBid(e) ? "video" : "banner"
                          , s = Object(w.getAdUnitSizes)(e).filter((function(e) {
                            return -1 === vc.indexOf(e.join("x"))
                        }
                        ))
                          , c = [];
                        "banner" === d ? c = r.buildBannerImpressions(s, e, n, a, d) : "video" === d && (c = r.buildVideoImpressions(s, e, n, a, d)),
                        c.length > 0 && c.forEach((function(t) {
                            var r = Object(x.a)(e, "ortb2Imp.ext");
                            r && Object(Kr.a)(t, "ext", r),
                            i.imp.push(t)
                        }
                        ))
                    }
                }
                )),
                t && t.uspConsent && Object(Kr.a)(i, "regs.ext.us_privacy", t.uspConsent),
                e[0] && e[0].userIdAsEids && Array.isArray(e[0].userIdAsEids)) {
                    var d = e[0].userIdAsEids;
                    d.length && Object(Kr.a)(i, "user.ext.eids", d)
                }
                return i.imp.length && o ? {
                    method: "POST",
                    url: "https://" + o + ".technoratimedia.com/openrtb/bids/" + o + "?src=prebid_prebid_6.29.0",
                    data: i,
                    options: {
                        contentType: "application/json",
                        withCredentials: !0
                    }
                } : void 0
            }
        },
        buildBannerImpressions: function(e, t, r, n, i) {
            var a = []
              , o = [];
            if (e.forEach((function(e, t) {
                e && 2 === e.length && a.push({
                    w: e[0],
                    h: e[1]
                })
            }
            )),
            a.length > 0) {
                var d = {
                    id: "" + i.substring(0, 1) + t.bidId,
                    banner: {
                        format: a,
                        pos: n
                    },
                    tagid: r
                }
                  , s = hc(t, "banner", "*");
                isNaN(s) && Object(w.logWarn)("Synacormedia: there is an invalid bid floor: " + t.params.bidfloor),
                null === s || isNaN(s) || (d.bidfloor = s),
                o.push(d)
            }
            return o
        },
        buildVideoImpressions: function(e, t, r, n, i) {
            var a = this
              , o = [];
            return e.forEach((function(e, d) {
                if (e && 2 == e.length) {
                    var s = e[0]
                      , c = e[1]
                      , u = {
                        id: "" + i.substring(0, 1) + t.bidId + "-" + s + "x" + c,
                        tagid: r
                    }
                      , p = hc(t, "video", e);
                    isNaN(p) && Object(w.logWarn)("Synacormedia: there is an invalid bid floor: " + t.params.bidfloor),
                    null === p || isNaN(p) || (u.bidfloor = p);
                    var l = {
                        w: s,
                        h: c,
                        pos: n
                    };
                    t.mediaTypes.video && (t.params.video || (t.params.video = {}),
                    a.setValidVideoParams(t.mediaTypes.video, t.params.video)),
                    t.params.video && a.setValidVideoParams(t.params.video, l),
                    u[i] = l,
                    o.push(u)
                }
            }
            )),
            o
        },
        setValidVideoParams: function(e, t) {
            Object.keys(e).filter((function(t) {
                return Object(C.c)(gc, t) && null !== e[t] && (!isNaN(parseInt(e[t], 10)) || !(e[t].length < 1))
            }
            )).forEach((function(r) {
                return t[r] = Array.isArray(e[r]) ? e[r] : parseInt(e[r], 10)
            }
            ))
        },
        interpretResponse: function(e, t) {
            var r = function(e, t) {
                return t ? t.replace(/\${AUCTION_PRICE}/g, e.price) : t
            };
            if (e.body && "object" == typeof e.body) {
                var n = e.body
                  , i = n.id
                  , a = n.seatbid
                  , o = [];
                return i && a && a.forEach((function(e) {
                    e.bid.forEach((function(n) {
                        var i = r(n, n.adm)
                          , a = r(n, n.nurl)
                          , d = n.impid.match(/^([vb])([\w\d]+)/)
                          , s = d[1]
                          , c = d[2]
                          , u = n.h
                          , p = n.w
                          , l = "v" === s
                          , f = "b" === s;
                        (!u || !p) && t.data && t.data.imp && t.data.imp.length > 0 && t.data.imp.forEach((function(e) {
                            if (n.impid === e.id)
                                if (l)
                                    u = e.video.h,
                                    p = e.video.w;
                                else if (f) {
                                    var t = 1
                                      , r = 1;
                                    e.banner.format && e.banner.format.length > 0 && (t = e.banner.format[0].h,
                                    r = e.banner.format[0].w),
                                    u = t,
                                    p = r
                                } else
                                    u = 1,
                                    p = 1
                        }
                        ));
                        var b = 420;
                        if (n.ext && n.ext["imds.tv"] && n.ext["imds.tv"].ttl) {
                            var m = parseInt(n.ext["imds.tv"].ttl, 10);
                            b = !isNaN(m) && m > 0 ? m : 420
                        }
                        var g = b;
                        if (n.exp) {
                            var v = parseInt(n.exp, 10);
                            g = !isNaN(v) && v > 0 ? Math.min(v, b) : b
                        }
                        var y = {
                            requestId: c,
                            cpm: parseFloat(n.price),
                            width: parseInt(p, 10),
                            height: parseInt(u, 10),
                            creativeId: e.seat + "_" + n.crid,
                            currency: "USD",
                            netRevenue: !0,
                            mediaType: l ? ge : ve,
                            ad: i,
                            ttl: g
                        };
                        if (null == n.adomain && null == n.adomain || (y.meta = {
                            advertiserDomains: n.adomain
                        }),
                        l) {
                            var h = a.match(/ID=([^&]*)&?/)[1];
                            _.b.getConfig("cache.url") || (y.videoCacheKey = encodeURIComponent(h)),
                            y.vastUrl = a
                        }
                        o.push(y)
                    }
                    ))
                }
                )),
                o
            }
            Object(w.logWarn)("Synacormedia: server returned empty/non-json response: " + JSON.stringify(e.body))
        },
        getUserSyncs: function(e, t) {
            var r = [];
            return e.iframeEnabled ? r.push({
                type: "iframe",
                url: "https://ad-cdn.technoratimedia.com/html/usersync.html?src=prebid_prebid_6.29.0"
            }) : Object(w.logWarn)("Synacormedia: Please enable iframe based user sync."),
            r
        }
    };
    function hc(e, t, r) {
        if (!Object(w.isFn)(e.getFloor))
            return e.params.bidfloor ? parseFloat(e.params.bidfloor) : null;
        var n = e.getFloor({
            currency: "USD",
            mediaType: t,
            size: r
        });
        return Object(w.isPlainObject)(n) && !isNaN(n.floor) && "USD" === n.currency ? n.floor : null
    }
    je(yc),
    window.jwpb.installedModules.push("synacormediaBidAdapter");
    var Oc = yc.code;
    function jc(e, t, r, n) {
        var i = e.params.jwpseg;
        if (Array.isArray(i) && i.length) {
            var a = i.map((function(e) {
                return {
                    value: e
                }
            }
            ));
            r.data = [{
                name: "jwpseg",
                segment: a
            }]
        }
        var o = {
            seatId: "" + t.pubid,
            placementId: "" + t.id,
            video: {
                mimes: n.mimes,
                minduration: n.minduration,
                maxduration: n.maxduration,
                protocols: n.protocols,
                startdelay: n.startdelay,
                placement: n.placement,
                linearity: n.linearity,
                playbackmethod: n.playbackmethod,
                api: n.api
            },
            content: r
        }
          , d = n.pos;
        void 0 !== d && (o.pos = d);
        var s = e.settings.floorPriceCents;
        return void 0 !== s && (o.bidfloor = s / 100),
        {
            bidder: Oc,
            params: o
        }
    }
    function Ic(e) {
        return !!e && void 0 !== e.pubid && void 0 !== e.id
    }
    var Ec = "unruly";
    function wc(e, t, r) {
        var n = {
            siteid: parseInt(t.pubid),
            content: r
        }
          , i = e.params.jwpseg;
        return Array.isArray(i) && i.length && (n.jwpseg = i),
        {
            bidder: Ec,
            mediaType: "video",
            params: n
        }
    }
    function xc(e) {
        return !!e && void 0 !== e.pubid
    }
    var Sc = "videobyte";
    function Cc(e, t) {
        var r = {
            pubId: "" + t.pubId
        }
          , n = t.placementId;
        n && (r.placementId = "" + n);
        var i = t.nid;
        i && (r.nid = "" + i);
        var a = e.settings.floorPriceCents;
        return void 0 !== a && (r.bidfloor = a / 100),
        {
            bidder: Sc,
            params: r
        }
    }
    function Tc(e) {
        return !!e && void 0 !== e.pubId
    }
    var _c = ["admixer.net", "adserver.org", "adtelligent.com", "akamai.com", "amxrtb.com", "audigent.com", "britepool.com", "criteo.com", "crwdcntrl.net", "deepintent.com", "hcn.health", "id5-sync.com", "idx.lat", "intentiq.com", "intimatemerger.com", "liveintent.com", "liveramp.com", "mediawallahscript.com", "merkleinc.com", "netid.de", "neustar.biz", "nextroll.com", "novatiq.com", "parrable.com", "pubcid.org", "quantcast.com", "quantcast.com", "tapad.com", "uidapi.com", "verizonmedia.com", "yahoo.com", "zeotap.com"];
    function Ac(e) {
        return {
            w: parseInt(e[0]),
            h: parseInt(e[1])
        }
    }
    function kc(e) {
        return Object(w.isArray)(e) && 2 === e.length && !Object(w.isArray)(e[0]) ? [Ac(e)] : e.map(Ac)
    }
    function Pc(e) {
        return Object(w.isArray)(Object(x.a)(e, "userIdAsEids")) ? e.userIdAsEids.filter((function(e) {
            return -1 !== _c.indexOf(e.source)
        }
        )) : []
    }
    function Rc(e) {
        return Object(x.a)(e, "params.bidOverride.imp.secure") || "https:" === document.location.protocol ? 1 : 0
    }
    function Uc(e) {
        var t;
        return Object(x.a)(e, "params.pubId") ? t = !0 : Object(x.a)(e, "params.dcn") && Object(x.a)(e, "params.pos") && (t = !1),
        t
    }
    function Dc() {
        var e = _.b.getConfig("yahoossp.mode");
        return void 0 === (e = e ? e.toLowerCase() : void 0) || e === ve ? ve : e === ge ? ge : "all" === e ? "*" : void 0
    }
    function Bc(e) {
        var t = Dc()
          , r = {
            currency: Object(x.a)(e, "params.bidOverride.cur") || "USD",
            mediaType: t,
            size: "*"
        };
        return !!Object(w.isFn)(e.getFloor) && e.getFloor(r)
    }
    function Nc(e, t, r, n) {
        var i = Object(I.default)({}, n);
        for (var a in r)
            switch (e) {
            case "string":
                -1 !== t.indexOf(a) && Object(w.isStr)(r[a]) && (i[a] = r[a]);
                break;
            case "number":
                -1 !== t.indexOf(a) && Object(w.isNumber)(r[a]) && (i[a] = r[a]);
                break;
            case "array":
                -1 !== t.indexOf(a) && Object(w.isArray)(r[a]) && (i[a] = r[a]);
                break;
            case "object":
                -1 !== t.indexOf(a) && Object(w.isPlainObject)(r[a]) && (i[a] = r[a]);
                break;
            case "objectAllKeys":
                Object(w.isPlainObject)(r) && (i[a] = r[a])
            }
        return i
    }
    function qc(e) {
        var t = _.b.getConfig("yahoossp.ttl");
        return Mc(t || Object(x.a)(e, "params.ttl"))
    }
    function Mc(e) {
        return Object(w.isNumber)(e) && e > 0 && e < 3600 ? e : 300
    }
    function zc(e) {
        return Object(w.isStr)(e) && e.length > 0
    }
    function Fc(e, t) {
        if (e) {
            var r = {
                id: Object(w.generateUUID)(),
                cur: [Bc(e).currency || Object(x.a)(t, "params.bidOverride.cur") || "USD"],
                imp: [],
                site: {
                    page: Object(x.a)(e, "refererInfo.referer")
                },
                device: {
                    dnt: 0,
                    ua: navigator.userAgent,
                    ip: Object(x.a)(t, "params.bidOverride.device.ip") || Object(x.a)(t, "params.ext.ip") || void 0
                },
                regs: {
                    ext: {
                        us_privacy: e.uspConsent ? e.uspConsent : "",
                        gdpr: e.gdprConsent && e.gdprConsent.gdprApplies ? 1 : 0
                    }
                },
                source: {
                    ext: {
                        hb: 1,
                        adapterver: "1.0.2",
                        prebidver: "6.29.0",
                        integration: {
                            name: "prebid.js",
                            ver: "6.29.0"
                        }
                    },
                    fd: 1
                },
                user: {
                    ext: {
                        consent: e.gdprConsent && e.gdprConsent.gdprApplies ? e.gdprConsent.consentString : "",
                        eids: Pc(t)
                    }
                }
            };
            return !0 === Uc(t) ? (r.site.publisher = {
                id: t.params.pubId
            },
            (Object(x.a)(t, "params.bidOverride.site.id") || Object(x.a)(t, "params.siteId")) && (r.site.id = Object(x.a)(t, "params.bidOverride.site.id") || t.params.siteId)) : r.site.id = t.params.dcn,
            _.b.getConfig("ortb2") && (r = function(e, t) {
                var r = _.b.getConfig("ortb2")
                  , n = Object(x.a)(r, "site") || void 0
                  , i = Object(x.a)(n, "content") || void 0
                  , a = Object(x.a)(n, "content.data") || void 0
                  , o = Object(x.a)(r, "app.content") || void 0
                  , d = Object(x.a)(r, "app.content.data") || void 0
                  , s = Object(x.a)(r, "user") || void 0;
                if (n && Object(w.isPlainObject)(n)) {
                    e.site = Nc("string", ["name", "domain", "page", "ref", "keywords", "search"], n, e.site),
                    e.site = Nc("array", ["cat", "sectioncat", "pagecat"], n, e.site),
                    e.site = Nc("object", ["ext"], n, e.site)
                }
                if (i && Object(w.isPlainObject)(i)) {
                    e.site.content = Nc("string", ["id", "title", "series", "season", "genre", "contentrating", "language"], i, e.site.content),
                    e.site.content = Nc("number", ["episode", "prodq", "context", "livestream", "len"], i, e.site.content),
                    e.site.content = Nc("array", ["cat"], i, e.site.content),
                    e.site.content = Nc("object", ["ext"], i, e.site.content),
                    a && Object(w.isArray)(a) && a.every((function(t) {
                        var r = {};
                        r = Nc("string", ["id", "name"], t, r),
                        r = Nc("array", ["segment"], t, r),
                        r = Nc("object", ["ext"], t, r),
                        e.site.content.data = [],
                        e.site.content.data.push(r)
                    }
                    ))
                }
                o && Object(w.isPlainObject)(o) && d && Object(w.isArray)(d) && d.every((function(t) {
                    var r = {};
                    r = Nc("string", ["id", "name"], t, r),
                    r = Nc("array", ["segment"], t, r),
                    r = Nc("object", ["ext"], t, r),
                    e.app = {
                        content: {
                            data: []
                        }
                    },
                    e.app.content.data.push(r)
                }
                ));
                if (s && Object(w.isPlainObject)(s)) {
                    e.user = Nc("string", ["id", "buyeruid", "gender", "keywords", "customdata"], s, e.user),
                    e.user = Nc("number", ["yob"], s, e.user),
                    e.user = Nc("array", ["data"], s, e.user),
                    e.user.ext = Nc("object", ["ext"], s, e.user.ext)
                }
                return e
            }(r)),
            Object(x.a)(t, "schain") && (r.source.ext.schain = t.schain,
            r.source.ext.schain.nodes[0].rid = r.id),
            r
        }
    }
    function Wc(e, t) {
        var r = Dc();
        if (t && e) {
            var n = {
                id: e.bidId,
                secure: Rc(e),
                bidfloor: Bc(e).floor || Object(x.a)(e, "params.bidOverride.imp.bidfloor")
            };
            if (!e.mediaTypes.banner || void 0 !== r && r !== ve && "*" !== r || (n.banner = {
                mimes: e.mediaTypes.banner.mimes || ["text/html", "text/javascript", "application/javascript", "image/jpg"],
                format: kc(e.sizes)
            },
            e.mediaTypes.banner.pos && (n.banner.pos = e.mediaTypes.banner.pos)),
            e.mediaTypes.video && (r === ge || "*" === r)) {
                var i = kc(e.mediaTypes.video.playerSize);
                n.video = {
                    mimes: Object(x.a)(e, "params.bidOverride.imp.video.mimes") || e.mediaTypes.video.mimes || ["video/mp4", "application/javascript"],
                    w: Object(x.a)(e, "params.bidOverride.imp.video.w") || i[0].w,
                    h: Object(x.a)(e, "params.bidOverride.imp.video.h") || i[0].h,
                    maxbitrate: Object(x.a)(e, "params.bidOverride.imp.video.maxbitrate") || e.mediaTypes.video.maxbitrate || void 0,
                    maxduration: Object(x.a)(e, "params.bidOverride.imp.video.maxduration") || e.mediaTypes.video.maxduration || void 0,
                    minduration: Object(x.a)(e, "params.bidOverride.imp.video.minduration") || e.mediaTypes.video.minduration || void 0,
                    api: Object(x.a)(e, "params.bidOverride.imp.video.api") || e.mediaTypes.video.api || [2],
                    delivery: Object(x.a)(e, "params.bidOverride.imp.video.delivery") || e.mediaTypes.video.delivery || void 0,
                    pos: Object(x.a)(e, "params.bidOverride.imp.video.pos") || e.mediaTypes.video.pos || void 0,
                    playbackmethod: Object(x.a)(e, "params.bidOverride.imp.video.playbackmethod") || e.mediaTypes.video.playbackmethod || void 0,
                    placement: Object(x.a)(e, "params.bidOverride.imp.video.placement") || e.mediaTypes.video.placement || void 0,
                    linearity: Object(x.a)(e, "params.bidOverride.imp.video.linearity") || e.mediaTypes.video.linearity || 1,
                    protocols: Object(x.a)(e, "params.bidOverride.imp.video.protocols") || e.mediaTypes.video.protocols || [2, 5],
                    startdelay: Object(x.a)(e, "params.bidOverride.imp.video.startdelay") || e.mediaTypes.video.startdelay || 0,
                    rewarded: Object(x.a)(e, "params.bidOverride.imp.video.rewarded") || void 0
                }
            }
            if (n.ext = {
                dfp_ad_unit_code: e.adUnitCode
            },
            Object(x.a)(e, "params.kvp") && Object(w.isPlainObject)(e.params.kvp))
                for (var a in n.ext.kvs = {},
                e.params.kvp)
                    if (Object(w.isStr)(e.params.kvp[a]) || Object(w.isNumber)(e.params.kvp[a]))
                        n.ext.kvs[a] = e.params.kvp[a];
                    else if (Object(w.isArray)(e.params.kvp[a])) {
                        var o = e.params.kvp[a];
                        (o.every((function(e) {
                            return Object(w.isStr)(e)
                        }
                        )) || o.every((function(e) {
                            return Object(w.isNumber)(e)
                        }
                        ))) && (n.ext.kvs[a] = e.params.kvp[a])
                    }
            Object(x.a)(e, "ortb2Imp.ext.data") && Object(w.isPlainObject)(e.ortb2Imp.ext.data) && (n.ext.data = e.ortb2Imp.ext.data),
            Object(x.a)(e, "ortb2Imp.instl") && Object(w.isNumber)(e.ortb2Imp.instl) && 1 === e.ortb2Imp.instl && (n.instl = e.ortb2Imp.instl),
            !1 === Uc(e) ? (n.tagid = e.params.pos,
            n.ext.pos = e.params.pos) : Object(x.a)(e, "params.placementId") && (n.tagid = e.params.placementId),
            t.imp.push(n)
        }
    }
    function Vc(e) {
        var t = e.payload
          , r = e.requestOptions
          , n = e.bidderRequest
          , i = Uc(n)
          , a = _.b.getConfig("yahoossp.endpoint") || "https://c2shb.pubgw.yahoo.com/bidRequest";
        if (!0 === i && (a = _.b.getConfig("yahoossp.endpoint") || "https://c2shb.pubgw.yahoo.com/admax/bid/partners/PBJS"),
        !0 === Object(x.a)(n, "params.testing.e2etest"))
            if (Object(w.logInfo)("yahoossp adapter e2etest mode is active"),
            r.withCredentials = !1,
            !0 === i)
                t.site.id = "1234567";
            else {
                var o = Dc();
                t.site.id = "8a969516017a7a396ec539d97f540011",
                t.imp.forEach((function(e) {
                    e.ext.e2eTestMode = !0,
                    o === ve ? e.tagid = "8a969978017a7aaabab4ab0bc01a0009" : o === ge ? e.tagid = "8a96958a017a7a57ac375d50c0c700cc" : (Object(w.logWarn)('yahoossp adapter e2etest mode does not support yahoossp.mode="all". \n Please specify either "banner" or "video"'),
                    Object(w.logWarn)("yahoossp adapter e2etest mode: Please make sure your adUnit matches the yahoossp.mode video or banner"))
                }
                ))
            }
        return {
            url: a,
            method: "POST",
            data: t,
            options: r,
            bidderRequest: n
        }
    }
    var Gc = {
        code: "yahoossp",
        gvlid: 25,
        aliases: [],
        supportedMediaTypes: [ve, ge],
        isBidRequestValid: function(e) {
            var t = e.params;
            return !0 === Object(x.a)(t, "testing.e2etest") || (!(!Object(w.isPlainObject)(t) || !(zc(t.pubId) || zc(t.dcn) && zc(t.pos))) || (Object(w.logWarn)("yahoossp bidder params missing or incorrect, please pass object with either: dcn & pos OR pubId"),
            !1))
        },
        buildRequests: function(e, t) {
            if (!Object(w.isEmpty)(e) && !Object(w.isEmpty)(t)) {
                var r = {
                    contentType: "application/json",
                    customHeaders: {
                        "x-openrtb-version": "2.5"
                    }
                };
                r.withCredentials = function(e) {
                    return !(e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion) || !0 === Object(x.a)(e.gdprConsent, "vendorData.purpose.consents.1")
                }(t);
                var n = function(e) {
                    var t = Dc()
                      , r = [];
                    return t === ve ? r = e.filter((function(e) {
                        return Object.keys(e.mediaTypes).some((function(e) {
                            return e === ve
                        }
                        ))
                    }
                    )) : t === ge ? r = e.filter((function(e) {
                        return Object.keys(e.mediaTypes).some((function(e) {
                            return e === ge
                        }
                        ))
                    }
                    )) : "*" === t && (r = e.filter((function(e) {
                        return Object.keys(e.mediaTypes).some((function(e) {
                            return e === ve || e === ge
                        }
                        ))
                    }
                    ))),
                    r
                }(e);
                if (!0 === _.b.getConfig("yahoossp.singleRequestMode")) {
                    var i = Fc(t, n[0]);
                    return n.forEach((function(e) {
                        Wc(e, i)
                    }
                    )),
                    Vc({
                        payload: i,
                        requestOptions: r,
                        bidderRequest: t
                    })
                }
                return n.map((function(e) {
                    var n = Fc(t, e);
                    return Wc(e, n),
                    Vc({
                        payload: n,
                        requestOptions: r,
                        bidderRequest: e
                    })
                }
                ))
            }
            Object(w.logWarn)('yahoossp Adapter: buildRequests called with either empty "validBidRequests" or "bidderRequest"')
        },
        interpretResponse: function(e, t) {
            t.data;
            var r = t.bidderRequest
              , n = [];
            return e.body && Array.isArray(e.body.seatbid) ? (e.body.seatbid.forEach((function(e) {
                var t;
                try {
                    t = e.bid[0]
                } catch (e) {
                    return n
                }
                var i = t.ext && t.ext.encp ? t.ext.encp : t.price
                  , a = {
                    adId: Object(x.a)(t, "adId") ? t.adId : t.impid || t.crid,
                    adUnitCode: r.adUnitCode,
                    requestId: t.impid,
                    cpm: i,
                    width: t.w,
                    height: t.h,
                    creativeId: t.crid || 0,
                    currency: t.cur || "USD",
                    dealId: t.dealid ? t.dealid : null,
                    netRevenue: !0,
                    ttl: qc(r),
                    meta: {
                        advertiserDomains: t.adomain
                    }
                }
                  , o = function(e) {
                    var t = e.adm;
                    return -1 !== t.indexOf("o2playerSettings") || -1 !== t.indexOf("YAHOO.VideoPlatform.VideoPlayer") || -1 !== t.indexOf("AdPlacement") ? ve : -1 !== t.indexOf("VAST") ? ge : void 0
                }(t);
                o === ve ? (a.mediaType = ve,
                a.ad = t.adm,
                a.meta.mediaType = ve) : o === ge && (a.mediaType = ge,
                a.meta.mediaType = ge,
                a.vastXml = t.adm,
                t.nurl && (a.vastUrl = t.nurl)),
                "outstream" !== Object(x.a)(r, "mediaTypes.video.context") || r.renderer || (a.renderer = function(e, t) {
                    var r = N.install({
                        url: "https://cdn.vidible.tv/prod/hb-outstream-renderer/renderer.js",
                        loaded: !1,
                        adUnitCode: e.adUnitCode
                    });
                    try {
                        r.setRender((function(t) {
                            setTimeout((function() {
                                o2PlayerRender(t)
                            }
                            ), Object(x.a)(e, "params.testing.renderer.setTimeout") || 700)
                        }
                        ))
                    } catch (e) {
                        Object(w.logWarn)("yahoossp renderer error: setRender() failed", e)
                    }
                    return r
                }(r) || void 0),
                n.push(a)
            }
            )),
            n) : n
        },
        getUserSyncs: function(e, t, r, n) {
            var i = !Object(w.isEmpty)(t) && t[0].body;
            return i && i.ext && i.ext.pixels ? function(e, t) {
                var r = /\w*(?=\s)/
                  , n = /src=("|')(.*?)\1/
                  , i = [];
                if (t) {
                    var a = t.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
                    a && a.forEach((function(t) {
                        var a = t.match(r)[0]
                          , o = t.match(n)[2];
                        if (a && o) {
                            var d = "img" === a.toLowerCase() ? "image" : "iframe";
                            if (!e.iframeEnabled && "iframe" === d || !e.pixelEnabled && "image" === d)
                                return;
                            i.push({
                                type: d,
                                url: o
                            })
                        }
                    }
                    ))
                }
                return i
            }(e, i.ext.pixels) : []
        }
    };
    je(Gc),
    window.jwpb.installedModules.push("yahoosspBidAdapter");
    var Lc, Hc = Gc.code;
    function Kc(e, t) {
        e.engine.setConfig({
            yahoossp: {
                mode: "video"
            }
        });
        var r = {
            pubId: "" + t.pubid
        }
          , n = t.siteId;
        n && (r.siteId = "" + n);
        var i = t.id;
        i && (r.placementId = "" + i);
        var a = e.settings.floorPriceCents;
        return void 0 !== a && (r.bidOverride = {
            imp: {
                bidfloor: a / 100
            }
        }),
        {
            bidder: Hc,
            params: r
        }
    }
    function Yc(e) {
        return e && e.pubid
    }
    var Xc = ((Lc = {})[["Adtelligent"]] = n,
    Lc[["AppNexus"]] = i,
    Lc[["DistrictM"]] = a,
    Lc[["EMX"]] = o,
    Lc[["IndexExchange"]] = s,
    Lc[["jwdemand"]] = c,
    Lc[["MediaNet"]] = u,
    Lc[["MediaGrid"]] = d,
    Lc[["OneVideo"]] = p,
    Lc[["OpenX"]] = l,
    Lc[["PubMatic"]] = f,
    Lc[["Rubicon"]] = b,
    Lc[["SmartAdServer"]] = m,
    Lc[["Sonobi"]] = g,
    Lc[["SpotX"]] = v,
    Lc[["SynacorMedia"]] = y,
    Lc[["Unruly"]] = h,
    Lc[["VideoByte"]] = O,
    Lc[["YahooSSP"]] = j,
    Lc);
    var Jc = function(e) {
        var t = Fi[e.toLowerCase()]
          , r = Xc[t];
        if (r)
            return r.code
    };
    function Qc(e, t, r, n) {
        void 0 === n && (n = {});
        var i = e.createElement(t);
        return i.appendChild(e.createCDATASection(r)),
        Object.keys(n).forEach((function(e) {
            i.setAttribute(e, n[e])
        }
        )),
        i
    }
    function $c(e) {
        void 0 === e && (e = []);
        var t = document.createElement("video");
        return e.filter((function(e) {
            return t.canPlayType(e)
        }
        )).concat("application/javascript")
    }
    function Zc(e, t) {
        return e === Q.GRANULARITY_OPTIONS.DENSE ? t.pbDg : e === Q.GRANULARITY_OPTIONS.LOW ? t.pbLg : e === Q.GRANULARITY_OPTIONS.MEDIUM ? t.pbMg : e === Q.GRANULARITY_OPTIONS.HIGH ? t.pbHg : e === Q.GRANULARITY_OPTIONS.CUSTOM ? t.pbCg : t.pbAg
    }
    function eu(e) {
        if ("start" === e || "0%" === e || !e || "pre" === e || "00:00:00" === e)
            return 0;
        if ("end" === e || "100%" === e || "post" === e)
            return -2;
        if ("string" == typeof e && e.indexOf("%") >= 0)
            return -1;
        var t = parseInt(e);
        return t >= 0 ? t : -1
    }
    function tu(e) {
        return "jwp" === e || "jwpdfp" === e || "jwpspotx" === e
    }
    var ru = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    function nu(e) {
        var t = e.gdpr;
        if (t) {
            var r = t.rules;
            r && 0 !== r.length && r.forEach((function(e) {
                var t = e.vendorExceptions;
                t && (e.vendorExceptions = t.map((function(e) {
                    return Jc(e) || e
                }
                )))
            }
            ))
        }
    }
    var iu = Q.EVENTS.AUCTION_INIT
      , au = Q.EVENTS.BID_ADJUSTMENT
      , ou = Q.EVENTS.BID_REQUESTED
      , du = Q.EVENTS.BID_RESPONSE
      , su = Q.EVENTS.BID_TIMEOUT
      , cu = Q.EVENTS.NO_BID
      , uu = Q.EVENTS.TCF2_ENFORCEMENT;
    var pu = function() {
        function e(e, t, r, n, i) {
            var a, o, d, s, c, u = this;
            this.id = n.id || e.utils.genId(12),
            this.player = e,
            this.engine = t,
            this.settings = (a = r.settings || {},
            o = Object(I.default)({}, a),
            d = o.floorPriceCurrency,
            s = o.mediationLayerAdServer,
            c = o.floorPriceCents,
            Vi[s] || (o.mediationLayerAdServer = s = "jwp"),
            "jwpspotx" === s ? c = 1 : "jwp" !== s && "jwpdfp" !== s || (c = +c || 0),
            o.floorPriceCents = c,
            d ? d = d.toUpperCase() : void 0 !== c && (d = "USD"),
            o.floorPriceCurrency = d,
            o),
            this.bidderConfigs = function(e, t) {
                var r = e.floorPriceCents
                  , n = e.mediationLayerAdServer;
                return tu(n) && isNaN(parseFloat(r)) ? [] : t.filter((function(e) {
                    var t = e.name;
                    return t = Fi[t.toLowerCase()],
                    -1 !== Vi[n].indexOf(t)
                }
                )).map((function(e) {
                    var t = Fi[e.name.toLowerCase()];
                    return Object(I.default)(e, e.custom_params, {
                        name: t
                    })
                }
                ))
            }(this.settings, r.bidders || []),
            this.params = n,
            this.utils = i,
            this.tcData = null,
            this.bidStateMap = this.bidderConfigs.reduce((function(e, t) {
                return e[t.name] = Object(I.default)({}, t),
                e
            }
            ), {}),
            this.auctionStart = null,
            this.hasWinner = "jwp" === this.settings.mediationLayerAdServer,
            this.trackingPixelUrls = null,
            this._auctionStartHandler = this._auctionStartHandler.bind(this),
            this._bidAdjustmentHandler = this._bidAdjustmentHandler.bind(this),
            this._bidRequestedHandler = this._bidRequestedHandler.bind(this),
            this._bidResponseHandler = this._bidResponseHandler.bind(this),
            this._bidTimeoutHandler = this._bidTimeoutHandler.bind(this),
            this._tcf2EnforcementHandler = this._tcf2EnforcementHandler.bind(this),
            this._noBidHandler = this._noBidHandler.bind(this),
            this._auctionAborted = new Promise((function(e) {
                u._abortAuction = e
            }
            )).then((function() {
                return u.updateStateForAllBids({
                    result: "abort"
                }),
                t.getBidResponsesForAdUnitCode(u.id).bids
            }
            ))
        }
        var t = e.prototype;
        return t.init = function() {
            var e = this
              , t = this.player
              , r = this.engine
              , n = this.params
              , i = this.getMediaId()
              , a = function(e) {
                if (e && e.length)
                    return e.reduce((function(e, t) {
                        return e.push({
                            id: t,
                            value: t
                        }),
                        e
                    }
                    ), [])
            }(n.jwpseg)
              , o = [t.getWidth(), t.getHeight()]
              , d = this._getOrtbVideoParams(t, n, o)
              , s = this.urlParts = this.utils.getURLParts()
              , c = {
                publisherDomain: s.domain,
                pageUrl: s.url
            }
              , u = function(e, t) {
                if (e || t) {
                    var r = {}
                      , n = {
                        name: "jwplayer.com",
                        ext: {}
                    };
                    return e && (r.id = "jw_" + e,
                    n.ext.cids = [e]),
                    t && (n.ext.segtax = 502,
                    n.segment = t),
                    r.data = [n],
                    {
                        site: {
                            content: r
                        }
                    }
                }
            }(i, a);
            u && (c.ortb2 = u);
            var p = u ? u.site.content : {
                id: ""
            };
            r.setConfig(c);
            var l = t.getPlugin("jwpsrv");
            l && l.getTrackingPixelURLs && (this.trackingPixelURLs = l.getTrackingPixelURLs()),
            this.bidStateMap = {};
            var f = this.bidderConfigs.reduce((function(t, r) {
                var n = r.name
                  , i = Xc[n]
                  , a = i ? i.code : n
                  , o = {
                    bidder: a
                };
                return i && i.validate(r) ? t.push(i.generate(e, r, p, d)) : (o.result = "invalid",
                o.timeForBidResponse = 0),
                e.bidStateMap[a] = Object(I.default)({}, r),
                e.updateBid(a, o),
                t
            }
            ), []);
            r.addAdUnits({
                code: this.id,
                sizes: o,
                bids: f,
                mediaTypes: {
                    video: d
                }
            })
        }
        ,
        t.getMediaId = function() {
            var e = this.player.getPlaylistItem();
            return e && e.mediaid
        }
        ,
        t._getOrtbVideoParams = function(e, t, r) {
            var n, i, a, o, d, s = {
                context: "instream",
                playerSize: r,
                mimes: $c(Ni),
                protocols: [Ki, Yi, Qi, Xi, Ji, $i],
                playbackmethod: [(n = e.getConfig() || {},
                i = n.autoplay,
                a = n.mute,
                o = n.autoplayAdsMuted,
                i ? a || o ? ea : Zi : ta)],
                api: [Li],
                startdelay: eu(t.offset),
                placement: t.placement,
                linearity: 1,
                minduration: 3,
                maxduration: 300
            };
            d = t.adClient,
            void 0 !== window.OmidSessionClient && "vast" === d && s.api.push(Hi),
            e.getFullscreen() && (s.pos = 7);
            var c = t.skipoffset;
            if (void 0 !== c) {
                var u = c >= 0;
                s.skip = u ? 1 : 0,
                u && (s.skipmin = c + 2,
                s.skipafter = c)
            }
            return s
        }
        ,
        t.getEventObject = function() {
            var e = this.settings
              , t = e.floorPriceCents
              , r = e.floorPriceCurrency
              , n = e.mediationLayerAdServer
              , i = this.bidStateMap
              , a = {
                bidsVersion: "6.0.2",
                mediationLayerAdServer: n,
                bidders: Object.keys(i).map((function(e) {
                    return Object(I.default)({}, i[e])
                }
                )),
                bidTimeout: this.engine.getConfig("bidderTimeout"),
                floorPriceCurrency: r
            }
              , o = this.tcData;
            o && (a.tcData = o),
            "jwp" !== n && "jwpdfp" !== n || (a.floorPriceCents = t);
            var d = a.bidders.reduce((function(e, t) {
                return t.timeForVPBCache && (e.total += t.timeForVPBCache,
                e.count += 1),
                e
            }
            ), {
                total: 0,
                count: 0
            });
            return d.count && (a.timeForVPBCache = d.total / d.count),
            a
        }
        ,
        t._auctionStartHandler = function(e) {
            var t = e.timestamp;
            this.auctionStart = t
        }
        ,
        t._bidAdjustmentHandler = function(e) {
            if (e.adUnitCode === this.id) {
                var t = e.cpm
                  , r = e.originalCpm
                  , n = {
                    priceInCents: 100 * t,
                    grossPriceInCents: parseFloat(r) !== parseFloat(t) ? 100 * r : void 0,
                    timeForBidResponse: e.timeToRespond
                }
                  , i = e.bidder;
                if (!e.videoCacheKey) {
                    e.meta = e.meta || {};
                    var a = this.player
                      , o = this.settings;
                    if (this.hasWinner = this.hasWinner || n.priceInCents >= o.floorPriceCents && tu(o.mediationLayerAdServer),
                    this.hasWinner)
                        e.meta.vastUrl = e.vastUrl,
                        e.vastUrl = e.videoCacheKey = !0;
                    else {
                        var d = n.cacheKey = e.customCacheKey = e.customCacheKey || a.utils.genId(12);
                        e.meta.vpbCacheStart = ru();
                        var s = e.vastXml || function(e, t) {
                            return '\n<VAST version="4.0">\n    <Ad id="' + e + '">\n        <Wrapper>\n            <AdSystem version="6.0.2">JWP</AdSystem>\n            <VASTAdTagURI><![CDATA[' + t + "]]></VASTAdTagURI>\n        </Wrapper>\n    </Ad>\n</VAST>\n"
                        }(d, e.vastUrl)
                          , c = this.bidStateMap[i]
                          , u = c ? c.name : i
                          , p = this.getTrackingPings(u, d)
                          , l = p.impressionPing
                          , f = p.errorPing;
                        e.vastXml = this.appendPings(s, d, l, f)
                    }
                }
                this.updateBid(i, n)
            }
        }
        ,
        t.getTrackingPings = function(e, t) {
            var r = this.trackingPixelURLs;
            if (!r)
                return {};
            var n = r.impression
              , i = r.error
              , a = this.getQueryParam("vck", t) + this.getQueryParam("vcb", e);
            return {
                impressionPing: this.getPingWithParams(n, a),
                errorPing: this.getPingWithParams(i, a)
            }
        }
        ,
        t.getPingWithParams = function(e, t) {
            if (e)
                return e + t
        }
        ,
        t.getQueryParam = function(e, t) {
            return "&" + e + "=" + t
        }
        ,
        t._bidRequestedHandler = function(e) {
            var t = this.engine
              , r = e.refererInfo
              , n = e.gdprConsent
              , i = this.urlParts.url;
            r && i && (r.referer = i);
            var a = n && n.vendorData;
            if (a) {
                var o = a.cmpId
                  , d = a.cmpStatus
                  , s = a.cmpVersion
                  , c = a.eventStatus
                  , u = a.gdprApplies
                  , p = a.isServiceSpecific
                  , l = a.useNonStandardStacks;
                this.tcData = {
                    cmpId: o,
                    cmpStatus: d,
                    cmpVersion: s,
                    eventStatus: c,
                    gdprApplies: u,
                    isServiceSpecific: p,
                    useNonStandardStacks: l
                }
            }
            t.offEvent(ou, this._bidRequestedHandler)
        }
        ,
        t._bidResponseHandler = function(e) {
            if (e.adUnitCode === this.id) {
                var t = {
                    dealId: e.dealId,
                    priceCurrency: e.currency,
                    result: "bid",
                    requestId: e.requestId
                }
                  , r = e.meta && e.meta.vpbCacheStart;
                if (r) {
                    var n = ru() - r;
                    t.timeForBidResponse = e.timeToRespond + n,
                    t.timeForVPBCache = n
                }
                this.updateBid(e.bidder, t, r)
            }
        }
        ,
        t._bidTimeoutHandler = function(e) {
            var t = this
              , r = ru() - this.auctionStart;
            e.forEach((function(e) {
                e.adUnitCode === t.id && t.updateBid(e.bidder, {
                    result: "timeout",
                    timeForBidResponse: r
                })
            }
            ))
        }
        ,
        t._tcf2EnforcementHandler = function(e) {
            var t = this;
            e.biddersBlocked.forEach((function(e) {
                return t.updateBid(e, {
                    result: "blocked"
                })
            }
            ))
        }
        ,
        t._noBidHandler = function(e) {
            if (e.adUnitCode === this.id) {
                var t = ru() - this.auctionStart;
                this.updateBid(e.bidder, {
                    result: "noBid",
                    timeForBidResponse: t
                })
            }
        }
        ,
        t.start = function() {
            var e = this
              , t = this.engine
              , r = new Promise((function(r) {
                t.onEvent(iu, e._auctionStartHandler),
                t.onEvent(ou, e._bidRequestedHandler),
                t.onEvent(au, e._bidAdjustmentHandler),
                t.onEvent(du, e._bidResponseHandler),
                t.onEvent(su, e._bidTimeoutHandler),
                t.onEvent(uu, e._tcf2EnforcementHandler),
                t.onEvent(cu, e._noBidHandler);
                var n = e.id;
                t.requestBids({
                    adUnitCodes: [n],
                    bidsBackHandler: function(e) {
                        var t = e && e[n] || {};
                        r(t.bids)
                    }
                })
            }
            ));
            return Promise.race([r, this._auctionAborted]).then((function(r) {
                return t.offEvent(iu, e._auctionStartHandler),
                t.offEvent(ou, e._bidRequestedHandler),
                t.offEvent(au, e._bidAdjustmentHandler),
                t.offEvent(du, e._bidResponseHandler),
                t.offEvent(su, e._bidTimeoutHandler),
                t.offEvent(uu, e._tcf2EnforcementHandler),
                t.offEvent(cu, e._noBidHandler),
                e.auctionEndHandler(r)
            }
            )).then((function(e) {
                return {
                    result: e
                }
            }
            ))
        }
        ,
        t.auctionEndHandler = function(e) {
            void 0 === e && (e = []);
            var t = ru() - this.auctionStart
              , r = this.engine
              , n = this.id
              , i = this.settings
              , a = i.floorPriceCents
              , o = i.mediationLayerAdServer
              , d = tu(o);
            this.updateBids(e, {
                result: "bid"
            }),
            this.updateStateForAllBids((function(e) {
                var r = e.result
                  , n = e.cacheKey
                  , i = {
                    result: "error",
                    code: !r && n ? 599 : void 0,
                    timeForBidResponse: t
                };
                return d && (i.winner = !1),
                i
            }
            ));
            var s, c, u, p, l = r.getHighestCpmBids(n), f = l && l.length && l[0];
            if (d && f && 100 * f.cpm >= a) {
                this.updateBid(f.bidder, {
                    winner: !0
                }, !0);
                var b = f.meta && f.meta.hasOwnProperty("vastUrl");
                return {
                    adm: f.vastXml,
                    tag: b && f.meta ? f.meta.vastUrl : f.vastUrl
                }
            }
            if (f && function(e) {
                return "dfp" === e || "jwpdfp" === e
            }(o)) {
                var m = this.params;
                this.updateBids(e, (function(e) {
                    return {
                        custParams: e.adserverTargeting
                    }
                }
                ));
                var g = {
                    adUnit: (c = r.adUnits,
                    u = "code",
                    p = n,
                    c.filter((function(e) {
                        return e[u] === p
                    }
                    ))[0]),
                    url: m.tag
                }
                  , v = (s = m.jwpseg) && s.length ? s.reduce((function(e, t) {
                    var r = t - 8e7;
                    return r >= 20 && r <= 90 && e.push(r),
                    e
                }
                ), []) : [];
                return v.length && (g.params = {
                    cust_params: {
                        hb_jwvb: v.toString()
                    }
                }),
                {
                    tag: r.adServers.dfp.buildVideoUrl(g),
                    custParams: r.getAdserverTargetingForAdUnitCode(n)
                }
            }
            return null
        }
        ,
        t.appendPings = function(e, t, r, n) {
            if (!r || !n)
                return e;
            var i = this.player.utils.parseXML(e);
            if (!i)
                return e;
            for (var a, o = i.querySelectorAll("InLine,Wrapper"), d = 0; d < o.length; d += 1)
                o[d].appendChild(Qc(i, "Impression", r, {
                    id: t
                })),
                o[d].appendChild(Qc(i, "Error", n));
            return (a = i).outerHTML || (new XMLSerializer).serializeToString(a)
        }
        ,
        t.updateBid = function(e, t, r, n) {
            void 0 === t && (t = {}),
            void 0 === r && (r = !1);
            var i = "function" == typeof t ? t(n) : t;
            i.result && void 0 === i.code && (i.code = ra[i.result]);
            var a = this.bidStateMap[e];
            a ? Object(I.default)(a, r ? i : Object(I.default)({}, i, a)) : this.bidStateMap[e] = Object(I.default)({
                name: e,
                bidder: e,
                external: !0
            }, i)
        }
        ,
        t.updateStateForAllBids = function(e) {
            var t = this
              , r = this.bidStateMap;
            Object.keys(r).forEach((function(n) {
                t.updateBid(n, e, !1, r[n])
            }
            ))
        }
        ,
        t.updateBids = function(e, t, r) {
            var n = this;
            e.forEach((function(e) {
                return n.updateBid(e.bidder, t, r, e)
            }
            ))
        }
        ,
        t.stop = function() {
            this._abortAuction()
        }
        ,
        t.timeout = function() {}
        ,
        e
    }()
      , lu = function(e, t) {
        void 0 === t && (t = {});
        var r = t.settings || {}
          , n = r.buckets
          , i = r.bidTimeout
          , a = r.sendAllBids
          , o = r.consentManagement;
        n = Array.isArray(n) && n.length ? n : [{
            increment: .01,
            max: 100
        }],
        i = void 0 === i ? 3e3 : Math.max(i, 2e3);
        var d, s = function(e, t) {
            if (e && t) {
                var r = new t(e);
                return r && r.token && r.token()
            }
        }(e.getConfig().key, e.utils.key), c = {
            bidderTimeout: i,
            cache: {
                url: Mi,
                ignoreBidderCacheKey: !0
            },
            debug: !1,
            priceGranularity: {
                buckets: (d = n,
                d.map((function(e) {
                    return Object(I.default)({
                        increment: .01,
                        max: 1 / 0
                    }, e)
                }
                )))
            },
            userSync: {
                filterSettings: {
                    all: {
                        bidders: "*",
                        filter: "include"
                    }
                },
                userIds: [{
                    name: "uid2"
                }],
                syncDelay: 1e3
            },
            s2sConfig: {
                accountId: s,
                bidders: Gi,
                timeout: 2500,
                enabled: !0,
                endpoint: zi + "openrtb2/auction",
                syncEndpoint: zi + "cookie_sync"
            },
            targetingControls: {
                allowTargetingKeys: ["BIDDER", "AD_ID", "PRICE_BUCKET", "SIZE", "DEAL", "SOURCE", "FORMAT", "UUID", "CACHE_ID", "CACHE_HOST", "ADOMAIN"]
            }
        };
        void 0 !== a && (c.enableSendAllBids = a);
        var u = function() {
            try {
                return null !== (t = document.documentElement).getAttribute("⚡") || null !== t.getAttribute("amp") || (e = document.location.search,
                /isAMP=true/.test(e))
            } catch (e) {
                return !1
            }
            var e, t
        }();
        u && (c.ortb2 = {
            site: {
                ext: {
                    amp: 1
                }
            }
        }),
        void 0 !== o && Object.keys(o).length > 0 && !u && (nu(o),
        c.consentManagement = o),
        Br.setConfig(c),
        Br.processQueue(),
        Br.aliasBidder(Wa, Id, {
            gvlid: 1046
        });
        var p = {};
        return {
            createNewBid: function(r, n) {
                var i = new pu(e,Br,t,r,n);
                return p[i.id] = i,
                i
            },
            getBid: function(e) {
                return p[e]
            },
            getEngine: function() {
                return Br
            },
            version: "6.0.2"
        }
    };

}
]);
