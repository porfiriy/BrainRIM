'use strict';
var aa = "function" == typeof Object.create ? Object.create : function (a) {
   function b() { }
   b.prototype = a;
   return new b
}
   , ba;
if ("function" == typeof Object.setPrototypeOf)
   ba = Object.setPrototypeOf;
else {
   var ca;
   a: {
      var da = {
         Za: !0
      }
         , ea = {};
      try {
         ea.__proto__ = da;
         ca = ea.Za;
         break a
      } catch (a) { }
      ca = !1
   }
   ba = ca ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b)
         throw new TypeError(a + " is not extensible");
      return a
   }
      : null
}
var fa = ba;
function c(a, b) {
   a.prototype = aa(b.prototype);
   a.prototype.constructor = a;
   if (fa)
      fa(a, b);
   else
      for (var e in b)
         if ("prototype" != e)
            if (Object.defineProperties) {
               var g = Object.getOwnPropertyDescriptor(b, e);
               g && Object.defineProperty(a, e, g)
            } else
               a[e] = b[e];
   a.mb = b.prototype
}
var ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, e) {
   a != Array.prototype && a != Object.prototype && (a[b] = e.value)
}
   , d = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
function ia() {
   ia = function () { }
      ;
   d.Symbol || (d.Symbol = ja)
}
var ja = function () {
   var a = 0;
   return function (b) {
      return "jscomp_symbol_" + (b || "") + a++
   }
}();
function ka() {
   ia();
   var a = d.Symbol.iterator;
   a || (a = d.Symbol.iterator = d.Symbol("iterator"));
   "function" != typeof Array.prototype[a] && ha(Array.prototype, a, {
      configurable: !0,
      writable: !0,
      value: function () {
         return la(this)
      }
   });
   ka = function () { }
}
function la(a) {
   var b = 0;
   return ma(function () {
      return b < a.length ? {
         done: !1,
         value: a[b++]
      } : {
         done: !0
      }
   })
}
function ma(a) {
   ka();
   a = {
      next: a
   };
   a[d.Symbol.iterator] = function () {
      return this
   }
      ;
   return a
}
function f(a, b) {
   if (b) {
      var e = d;
      a = a.split(".");
      for (var g = 0; g < a.length - 1; g++) {
         var h = a[g];
         h in e || (e[h] = {});
         e = e[h]
      }
      a = a[a.length - 1];
      g = e[a];
      b = b(g);
      b != g && null != b && ha(e, a, {
         configurable: !0,
         writable: !0,
         value: b
      })
   }
}
f("Number.MAX_SAFE_INTEGER", function () {
   return 9007199254740991
});
f("String.prototype.endsWith", function (a) {
   return a ? a : function (a, e) {
      if (null == this)
         throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
      if (a instanceof RegExp)
         throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
      var b = this + "";
      a += "";
      void 0 === e && (e = b.length);
      e = Math.max(0, Math.min(e | 0, b.length));
      for (var h = a.length; 0 < h && 0 < e;)
         if (b[--e] != a[--h])
            return !1;
      return 0 >= h
   }
});
function na(a, b) {
   ka();
   a instanceof String && (a += "");
   var e = 0
      , g = {
         next: function () {
            if (e < a.length) {
               var h = e++;
               return {
                  value: b(h, a[h]),
                  done: !1
               }
            }
            g.next = function () {
               return {
                  done: !0,
                  value: void 0
               }
            }
               ;
            return g.next()
         }
      };
   g[Symbol.iterator] = function () {
      return g
   }
      ;
   return g
}
f("Array.prototype.keys", function (a) {
   return a ? a : function () {
      return na(this, function (a) {
         return a
      })
   }
});
f("Object.values", function (a) {
   return a ? a : function (a) {
      var b = [], g;
      for (g in a)
         Object.prototype.hasOwnProperty.call(a, g) && b.push(a[g]);
      return b
   }
});
function oa(a, b, e, g, h, m, r, t) {
   var n = {
      V: !1
   }
      , y = (a - r) * (g - t) - (b - t) * (e - r)
      , G = (a - h) * (g - m) - (b - m) * (e - h);
   0 > y * G && (h = (h - a) * (t - b) - (m - b) * (r - a),
      y = h + G - y,
      0 > h * y && (n.time = h / (h - y),
         n.x = a + n.time * (e - a),
         n.y = b + n.time * (g - b),
         n.V = !0));
   return n
}
function k(a, b) {
   return a.x * b.x + a.y * b.y
}
function pa() {
   if (void 0 === window || void 0 === window.localStorage)
      return 0;
   var a = window.localStorage.getItem("best_" + l);
   return null !== a ? parseInt(a, 10) : 0
}
function qa() {
   var a = "EASY MODE";
   1 === l ? a = "HARD MODE" : 2 === l && (a = "ULTRA MEGA MODE");
   return a
}
function ra() {
   p.B.setTransform(1, 0, 0, 1, 0, 0)
}
function sa() {
   p.B.setTransform(1, 0, 0, 1, 0, 0);
   p.B.translate(.5 * q, .5 * u);
   p.B.translate(-v + v * Math.random() * 2, -v + v * Math.random() * 2);
   p.B.scale(w, -w)
}
var v = 0
   , ta = 0
   , x = 0
   , ua = 0;
function va(a) {
   0 < x && (x -= a,
      v = Math.max(x / ua * ta, 0))
}
var w = 1
   , A = 0;
function B(a) {
   0 < A && (A -= a,
      a = A / .2,
      w = Math.max(1 + a * a * a * .15, 1))
}
var C = [];
function wa(a) {
   C.forEach(function (b, e) {
      var g = b.ma / .5
         , h = 1 - g * g * g
         , m = b.x + Math.cos(b.Na) * b.Ja * h
         , r = b.y + Math.sin(b.Na) * b.Ja * h;
      h = b.angle + 1 * Math.PI * h;
      0 == e % 2 && (h = -h);
      p.B.globalAlpha = .25 > g ? g / .25 : 1;
      p.B.save();
      p.B.translate(m, r);
      p.B.rotate(h);
      e = p.B.lineWidth;
      p.B.lineWidth = 4;
      p.B.strokeStyle = "#08F";
      p.B.shadowColor = "#08F";
      p.B.beginPath();
      p.B.moveTo(-6, 0);
      p.B.lineTo(6, 0);
      p.B.stroke();
      p.B.restore();
      p.B.lineWidth = e;
      p.B.globalAlpha = 1;
      b.ma -= a;
      0 >= b.ma && (b.S = !0)
   });
   C = C.filter(function (a) {
      return !0 !== a.S
   })
}
function xa(a, b) {
   for (var e = 0; 10 > e; e++)
      C.push({
         x: a,
         y: b,
         ma: .5,
         S: !1,
         angle: Math.random() * Math.PI * 2,
         Na: 360 * Math.random() * Math.PI / 180,
         Ja: 15 + 40 * Math.random()
      })
}
function D() {
   this.oa = this.na = this.ea = this.da = this.y = this.x = 0;
   this.H = 12;
   this.speed = 0 === l ? 250 : 400;
   this.hb = .2;
   this.$ = Number.MAX_SAFE_INTEGER;
   this.T = this.K = 0;
   this.Z = this.Sa;
   this.sa = {
      x: 0,
      y: 0
   };
   this.Ia = 1500;
   this.R = !1;
   this.angle = 0;
   this.Y = 180;
   this.Xa = this.Ua = 0;
   var a = ya(this.T, this.K);
   this.x = a.x;
   this.y = a.y;
   this.na = this.x;
   this.oa = this.y;
   this.da = this.x;
   this.ea = this.y;
   this.Ta = this.x;
   this.Wa = this.y
}
D.prototype.update = function (a) {
   this.na = this.da;
   this.oa = this.ea;
   this.da = this.x;
   this.ea = this.y;
   this.angle += this.Y * a;
   void 0 !== this.Z && this.Z(a)
}
   ;
D.prototype.Sa = function (a) {
   var b = this;
   this.K += this.speed * a;
   0 > this.K && (this.K += E.O[this.T]);
   this.K %= E.O[this.T];
   var e = ya(this.T, this.K);
   this.x = e.x;
   this.y = e.y;
   this.Ua = e.ya;
   this.Xa = e.Ca;
   p.entities.forEach(function (a) {
      a instanceof F && (a = oa(b.na, b.oa, b.x, b.y, a.va, a.za, a.wa, a.Aa),
         a.V && (xa(a.x, a.y),
            b.U()))
   });
   if (!this.R) {
      this.$ += a;
      if (p.M || p.W.space)
         this.$ = 0;
      this.$ <= this.hb && (this.sa = {
         x: e.Pa * this.Ia,
         y: e.Qa * this.Ia
      },
         this.Ta = this.x,
         this.Wa = this.y,
         this.Z = this.fb,
         H("a", 5, .01),
         H("a#", 5, .01, .01),
         H("b", 5, .01, .02))
   }
}
   ;
D.prototype.fb = function (a) {
   var b = this;
   this.x += this.sa.x * a;
   this.y += this.sa.y * a;
   p.entities.forEach(function (a) {
      a instanceof F && (a = oa(b.na, b.oa, b.x, b.y, a.va, a.za, a.wa, a.Aa),
         a.V && (xa(a.x, a.y),
            b.U()))
   });
   (this.x < .5 * -q - this.H || this.x > .5 * q + this.H || this.y < .5 * -u - this.H || this.y > .5 * u + this.H) && this.U();
   if (!this.R && (p.entities.forEach(function (a) {
      if (a instanceof I) {
         var e = b.da
            , g = b.ea
            , h = b.x
            , n = b.y
            , y = a.x
            , G = a.y;
         var z = {
            x: h - e,
            y: n - g
         };
         e = {
            x: y - e,
            y: G - g
         };
         h = {
            x: y - h,
            y: G - n
         };
         n = k(e, z);
         0 >= n ? z = k(e, e) : (z = k(z, z),
            z = n >= z ? k(h, h) : k(e, e) - n * n / z);
         z <= a.cb && a.U()
      }
   }),
      a = za(this.da, this.ea, this.x, this.y),
      a.V)) {
      var e = a.x - this.Ta
         , g = a.y - this.Wa;
      5 < e * e + g * g && (this.K = a.ab,
         this.T = a.group,
         a = ya(this.T, this.K),
         this.x = a.x,
         this.y = a.y,
         this.$ = Number.MAX_SAFE_INTEGER,
         this.Z = this.Sa,
         0 > a.ya * this.Ua + a.Ca * this.Xa && (this.speed = -this.speed),
         v = ta = 2.5,
         x = ua = .15,
         H("a", 4, .01),
         H("a#", 4, .01, .01))
   }
}
   ;
D.prototype.$a = function () { }
   ;
D.prototype.ca = function () {
   if (!this.R) {
      p.B.save();
      p.B.translate(this.x, this.y);
      p.B.rotate(this.angle);
      var a = p.B.lineWidth;
      p.B.lineWidth = 4;
      p.B.strokeStyle = "#08F";
      p.B.shadowColor = "#08F";
      p.B.beginPath();
      p.B.rect(.5 * -this.H, .5 * -this.H, this.H, this.H);
      p.B.stroke();
      p.B.restore();
      p.B.lineWidth = a
   }
}
   ;
D.prototype.U = function () {
   J = Math.max(J - 1, 0);
   this.R = !0;
   this.Z = this.$a;
   v = ta = 5;
   x = ua = .2;
   H("a", 1, .2, 0, "square");
   var a = p;
   if (a.ka && a.G) {
      var b = a.G.createBufferSource();
      b.buffer = a.Oa;
      b.loop = !0;
      b.start(a.G.currentTime + 0);
      b.stop(a.G.currentTime + 0 + .05);
      b.connect(a.G.destination)
   }
}
   ;
function I(a, b, e, g, h) {
   this.xa = a;
   this.Ba = b;
   this.x = a;
   this.y = b;
   this.H = 8;
   this.Ha = 20;
   this.cb = this.Ha * this.Ha;
   this.angle = 0;
   this.Y = 180;
   this.active = !0;
   this.offset = void 0 !== e ? e : 0;
   this.ja = void 0 !== g ? g * Math.PI / 180 : 0;
   this.Ra = void 0 !== h ? h * Math.PI / 180 : 0;
   this.fa = 0;
   this.Ea = .5
}
I.prototype.update = function (a) {
   this.angle -= this.Y * a;
   if (0 !== this.offset) {
      var b = Math.sin(this.ja);
      this.x = this.xa + Math.cos(this.ja) * this.offset;
      this.y = this.Ba + b * this.offset;
      0 !== this.Ra && (this.ja += this.Ra * a)
   }
   this.active || (this.fa += a)
}
   ;
I.prototype.ca = function () {
   if (this.active || this.fa < this.Ea) {
      var a = p.B.globalAlpha
         , b = 1;
      if (!this.active) {
         var e = 1 - this.fa / this.Ea;
         e *= e * e * e * e;
         b += 3 * (1 - e);
         p.B.globalAlpha = e
      }
      p.B.save();
      p.B.translate(this.x, this.y);
      p.B.rotate(this.angle * Math.PI / 180);
      p.B.scale(b, b);
      p.B.lineWidth = 2;
      p.B.strokeStyle = "#FF0";
      p.B.shadowColor = "#FF0";
      p.B.beginPath();
      p.B.rect(.5 * -this.H, .5 * -this.H, this.H, this.H);
      p.B.stroke();
      p.B.restore();
      p.B.globalAlpha = a
   }
}
   ;
I.prototype.U = function () {
   this.active && (this.active = !1,
      H("g", 7, .025))
}
   ;
function F(a, b, e, g, h, m, r, t, n) {
   this.xa = a;
   this.Ba = b;
   this.length = e;
   this.ga = .5 * e;
   this.angle = void 0 !== g ? g * Math.PI / 180 : 0;
   this.Y = void 0 !== h ? h * Math.PI / 180 : 0;
   this.Va = void 0 !== m ? m : 0;
   this.Ya = void 0 !== r ? r : 0;
   this.ba = void 0 !== t ? t : 0;
   this.eb = void 0 !== n ? n : 0;
   this.P = this.ba;
   this.ia = this.ha = !0;
   this.pa = 0;
   Aa(this)
}
F.prototype.update = function (a) {
   var b = !1;
   0 !== this.Y && (this.angle += this.Y * a,
      b = !0);
   0 === this.Va && 0 === this.Ya || 0 === this.ba || (this.pa = this.ha ? this.ia ? 1 - this.P / this.ba : this.P / this.ba : this.ia ? 0 : 1,
      this.P -= a,
      0 >= this.P && (this.ha ? (this.P = this.eb,
         this.ia = !this.ia) : this.P = this.ba,
         this.ha = !this.ha),
      b = !0);
   b && Aa(this)
}
   ;
function Aa(a) {
   var b = Math.cos(a.angle)
      , e = Math.sin(a.angle)
      , g = a.xa + a.Va * a.pa
      , h = a.Ba + a.Ya * a.pa;
   a.va = g - b * a.ga;
   a.za = h - e * a.ga;
   a.wa = g + b * a.ga;
   a.Aa = h + e * a.ga
}
F.prototype.ca = function () {
   p.B.save();
   p.B.lineWidth = 2;
   p.B.strokeStyle = "#F00";
   p.B.shadowColor = "#F00";
   p.B.beginPath();
   p.B.moveTo(this.va, this.za);
   p.B.lineTo(this.wa, this.Aa);
   p.B.stroke();
   p.B.restore()
}
   ;
function Ba(a) {
   wa(a);
   ra();
   2 == l && (a = u - 30,
      p.B.fillStyle = "#FFF",
      p.B.fillRect(10, a, E.N / E.L * (q - 20), 20));
   p.B.shadowColor = "#FFF";
   K({
      text: "LEVEL " + (L + 1) + " - " + (E ? E.name : ""),
      x: 10,
      y: 30,
      fontSize: 24,
      fontStyle: "bold"
   });
   K({
      text: "BEST: " + (pa() + 1),
      x: 10,
      y: 50,
      fontSize: 15,
      fontStyle: "bold",
      color: "#FFF"
   });
   if (2 === l)
      p.B.shadowColor = "#08F",
         K({
            text: "UNLIMITED LIVES",
            x: 630,
            y: 25,
            fontSize: 15,
            fontStyle: "bold",
            color: "#08F",
            textAlign: "right"
         }),
         K({
            text: "PRESS [ESC] TO QUIT",
            x: 630,
            y: 45,
            fontSize: 15,
            fontStyle: "bold",
            color: "#08F",
            textAlign: "right"
         });
   else {
      a = 0 === l ? 10 : 5;
      for (var b = 0 === l ? 440 : 536, e = 0; e < a; e++)
         e < J ? (p.B.lineWidth = 3,
            p.B.strokeStyle = "#08F",
            p.B.shadowColor = "#08F",
            p.B.save(),
            p.B.translate(b + 4 + 20 * e, 18),
            p.B.beginPath(),
            p.B.rect(-5, -5, 10, 10),
            p.B.stroke(),
            p.B.restore()) : (p.B.shadowColor = "#F00",
               K({
                  text: "x",
                  x: b + 19.6 * e,
                  y: 30,
                  fontSize: 24,
                  fontStyle: "bold",
                  color: "#F00"
               }))
   }
   p.state === Ca && (19 === L ? (p.B.shadowColor = "#555",
      p.B.fillStyle = "#555",
      p.B.fillRect(0, 100, q, 110),
      a = 250 > Date.now() % 500 ? "#08F" : "#FF0",
      p.B.shadowColor = a,
      K({
         text: "CONGRATULATIONS!",
         x: .5 * q,
         y: 150,
         fontSize: 40,
         fontStyle: "bold",
         color: a,
         textAlign: "center"
      }),
      p.B.shadowColor = "#FFF",
      K({
         text: qa() + " COMPLETE",
         x: .5 * q,
         y: 180,
         fontSize: 20,
         fontStyle: "bold",
         color: "#FFF",
         textAlign: "center"
      }),
      K({
         text: "CLICK TO QUIT TO MAIN MENU",
         x: .5 * q,
         y: 200,
         fontSize: 14,
         fontStyle: "bold",
         color: "#FFF",
         textAlign: "center"
      })) : (p.B.shadowColor = "#333",
         p.B.fillStyle = "#333",
         p.B.fillRect(0, 52, q, 140),
         p.B.shadowColor = "#F00",
         K({
            text: "GAME OVER",
            x: .5 * q,
            y: 100,
            fontSize: 40,
            fontStyle: "bold",
            color: "#F00",
            textAlign: "center"
         }),
         p.B.shadowColor = "#FFF",
         K({
            text: qa(),
            x: .5 * q,
            y: 130,
            fontSize: 20,
            fontStyle: "bold",
            color: "#FFF",
            textAlign: "center"
         }),
         K({
            text: "SCORE: " + (L + 1),
            x: .5 * q,
            y: 155,
            fontSize: 20,
            fontStyle: "bold",
            color: "#FFF",
            textAlign: "center"
         }),
         K({
            text: "BEST: " + (pa() + 1),
            x: .5 * q,
            y: 180,
            fontSize: 20,
            fontStyle: "bold",
            color: "#FFF",
            textAlign: "center"
         })))
}
var M = [{
   text: "EASY MODE",
   width: 255,
   ra: "(SLOW SPEED + 10 LIVES)"
}, {
   text: "HARD MODE",
   width: 260,
   ra: "(FAST SPEED + 5 LIVES)"
}, {
   text: "ULTRA MEGA MODE",
   width: 388,
   ra: "(FAST SPEED + TIMED LEVELS)"
}]
   , Da = -1;
function N(a) {
   O(a);
   p.B.save();
   ra();
   p.B.shadowColor = "#08F";
   K({
      text: "OFF THE LINE",
      x: 15,
      y: 10,
      fontSize: 70,
      fontStyle: "bold italic",
      color: "#08F",
      textAlign: "left",
      textBaseline: "top"
   });
   p.B.shadowColor = "#08F";
   K({
      text: "A GAME BY BRYAN PERFETTO",
      x: 25,
      y: 85,
      fontSize: 20,
      fontStyle: "bold italic",
      color: "#08F",
      textAlign: "left",
      textBaseline: "top"
   });
   a = -1;
   for (var b = 0; b < M.length; b++) {
      var e = p.aa.y >= 350 + 40 * b && p.aa.y < 350 + 40 * (b + 1) && 0 <= p.aa.x && p.aa.x < M[b].width
         , g = e ? "#FF0" : "#FFF";
      p.B.shadowColor = g;
      K({
         text: M[b].text,
         x: 15,
         y: 350 + 40 * b,
         fontSize: 35,
         fontStyle: "bold italic",
         color: g,
         textAlign: "left",
         textBaseline: "top"
      });
      e && (a = b,
         p.B.shadowColor = "#888",
         K({
            text: M[b].ra,
            x: -15 + M[b].width,
            y: 40 * b + 362,
            fontSize: 12,
            fontStyle: "bold italic",
            color: "#888",
            textAlign: "left",
            textBaseline: "top"
         }))
   }
   p.B.restore();
   a !== Da && (-1 !== a && H("a", 5, .025),
      Da = a);
   -1 !== a && p.M && (l = a,
      J = 0 === l ? 10 : 5,
      L = 0,
      Ea(),
      p.M = !1,
      p.B.shadowBlur = 0,
      p.state = Fa,
      p.la = Ba)
}
function Fa(a) {
   p.B.shadowBlur = 10;
   O(a);
   p.W.escape && 2 === l && (p.entities = [],
      p.M = !1,
      p.B.shadowBlur = 20,
      p.state = N,
      p.la = void 0,
      H("a", 4, .05, 0),
      H("b", 4, .05, .05));
   if (P.R || Ga())
      if (Ha -= a,
         0 >= Ha)
         if (Ga() && 19 === L) {
            p.state = Ca;
            for (var b = 0; 3 > b; b++)
               H("d", 5, .05, .3 * b),
                  H("e", 5, .05, .3 * b + .05),
                  H("g", 5, .05, .3 * b + .1),
                  H("a", 5, .05, .3 * b + .15),
                  H("b", 5, .05, .3 * b + .2),
                  H("d", 5, .05, .3 * b + .25);
            H("c", 6, .5, .9)
         } else
            0 === J && 2 !== l ? (p.state = Ca,
               H("a#", 4, .05, 0),
               H("g", 4, .05, .05),
               H("e", 4, .05, .1),
               H("d", 4, .15, .15)) : (P.R || (L = (L + 1) % 20),
                  Ea());
   va(a);
   B(a);
   sa()
}
function Ea() {
   var a = L;
   p.entities = [];
   w = 1.15;
   A = .2;
   B(0);
   va(0);
   B(0);
   sa();
   0 == a ? E = new Q : 1 == a ? E = new R : 2 == a ? E = new S : 3 == a ? E = new T : 4 == a ? E = new U : 5 == a ? E = new V : 6 == a ? E = new W : 7 == a ? E = new X : 8 == a ? E = new Ia : 9 == a ? E = new Ja : 10 == a ? E = new Ka : 11 == a ? E = new La : 12 == a ? E = new Ma : 13 == a ? E = new Na : 14 == a ? E = new Oa : 15 == a ? E = new Pa : 16 == a ? E = new Qa : 17 == a ? E = new Ra : 18 == a ? E = new Sa : 19 == a && (E = new Ta);
   Y(E);
   P = new D;
   Y(P);
   Ha = 1;
   void 0 !== window && void 0 !== window.localStorage && window.localStorage.setItem("best_" + l, Math.max(L.toString(), pa()));
   H("d", 4, .05, 0);
   H("e", 4, .05, .05);
   H("g", 4, .05, .1);
   H("a#", 4, .15, .15)
}
function Ca(a) {
   O(a);
   p.M && (p.entities = [],
      p.M = !1,
      p.B.shadowBlur = 20,
      p.state = N,
      p.la = void 0,
      H("a", 4, .05, 0),
      H("b", 4, .05, .05));
   va(a);
   B(a);
   sa()
}
var Ua = []
   , Va = 400
   , Wa = 4E3
   , Xa = 2;
function O(a) {
   p.W.s && (p.ka = !p.ka);
   p.B.save();
   ra();
   for (var b = 0; b < Xa; b++)
      Ua.push({
         x: q,
         y: Math.random() * u,
         S: !1
      });
   p.B.lineWidth = 2;
   p.B.strokeStyle = p.state === N || p.state === Ya ? "#111" : "#090909";
   b = p.B.shadowBlur;
   p.B.shadowBlur = 0;
   Ua.forEach(function (b) {
      b.x -= Wa * a;
      b.x < -Va && (b.S = !0);
      p.B.beginPath();
      p.B.moveTo(b.x, b.y);
      p.B.lineTo(b.x + Va, b.y);
      p.B.stroke()
   });
   Ua = Ua.filter(function (a) {
      return !0 !== a.S
   });
   p.B.restore();
   p.B.shadowBlur = b
}
function Z() {
   this.A = [];
   this.J = [];
   this.O = [];
   this.C = [];
   this.N = this.L = 7;
   this.F();
   for (var a = 0; a < this.A.length; a++) {
      this.O.push(0);
      this.J.push([]);
      for (var b = 0; b < this.A[a].length - 1; b++) {
         var e = this.A[a][b + 1].x - this.A[a][b].x
            , g = this.A[a][b + 1].y - this.A[a][b].y;
         e = Math.sqrt(e * e + g * g);
         this.O[a] += e;
         this.J[a].push(e)
      }
      b = this.A[a][0].x - this.A[a][this.A[a].length - 1].x;
      e = this.A[a][0].y - this.A[a][this.A[a].length - 1].y;
      b = Math.sqrt(b * b + e * e);
      this.O[a] += b;
      this.J[a].push(b)
   }
   this.D()
}
Z.prototype.F = function () { }
   ;
Z.prototype.D = function () { }
   ;
Z.prototype.update = function (a) {
   2 != l || Ga() || P.R || (this.N = Math.max(this.N - a, 0),
      0 >= this.N && (xa(P.x, P.y),
         P.U()))
}
   ;
Z.prototype.ca = function () {
   p.B.lineWidth = 2;
   p.B.strokeStyle = "#FFF";
   p.B.shadowColor = "#FFF";
   for (var a = 0; a < this.A.length; a++) {
      p.B.beginPath();
      p.B.moveTo(this.A[a][0].x, this.A[a][0].y);
      for (var b = 1; b < this.A[a].length; b++)
         p.B.lineTo(this.A[a][b].x, this.A[a][b].y);
      p.B.lineTo(this.A[a][0].x, this.A[a][0].y);
      p.B.stroke()
   }
}
   ;
function ya(a, b) {
   var e = E;
   b %= e.O[a];
   for (var g = 0, h = 0; h < e.J[a].length; h++) {
      var m = g + e.J[a][h];
      if (b >= g && b < m) {
         var r = (b - g) / e.J[a][h];
         g = h;
         m = (h + 1) % e.A[a].length;
         var t = e.A[a][m].x - e.A[a][g].x
            , n = e.A[a][m].y - e.A[a][g].y;
         b = e.A[a][g].x + t * r;
         r = e.A[a][g].y + n * r;
         if (void 0 !== e.C[a] && void 0 !== e.C[a][h])
            return {
               x: b,
               y: r,
               Pa: e.C[a][h].x,
               Qa: e.C[a][h].y,
               ya: t,
               Ca: n
            };
         t = (e.A[a][m].x - e.A[a][g].x) / e.J[a][h];
         a = (e.A[a][m].y - e.A[a][g].y) / e.J[a][h];
         return {
            x: b,
            y: r,
            Pa: a,
            Qa: -t,
            ya: t,
            Ca: a
         }
      }
      g = m
   }
   return {
      x: e.A[0][0].x,
      y: e.A[0][0].y
   }
}
function za(a, b, e, g) {
   for (var h = E, m = 0; m < h.J.length; m++)
      for (var r = 0, t = 0; t < h.J[m].length; t++) {
         var n = t
            , y = (t + 1) % h.A[m].length;
         n = oa(h.A[m][n].x, h.A[m][n].y, h.A[m][y].x, h.A[m][y].y, a, b, e, g);
         if (n.V)
            return n.ab = r + h.J[m][t] * n.time,
               n.group = m,
               n;
         r += h.J[m][t]
      }
   return {
      V: !1
   }
}
function Ga() {
   var a = !0;
   p.entities.forEach(function (b) {
      b instanceof I && b.active && (a = !1)
   });
   return a
}
function Q(a) {
   Z.apply(this, arguments)
}
c(Q, Z);
Q.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -100,
      y: 100
   });
   this.A[0].push({
      x: 100,
      y: 100
   });
   this.A[0].push({
      x: 100,
      y: -100
   });
   this.A[0].push({
      x: -100,
      y: -100
   });
   this.name = "THE BOX"
}
   ;
Q.prototype.D = function () {
   Y(new I(0, 0));
   Y(new I(-50, 0));
   Y(new I(50, 0));
   Y(new I(-25, 0));
   Y(new I(25, 0));
   Y(new I(0, 50));
   Y(new I(-50, 50));
   Y(new I(50, 50));
   Y(new I(-25, 50));
   Y(new I(25, 50));
   Y(new I(0, -50));
   Y(new I(-50, -50));
   Y(new I(50, -50));
   Y(new I(-25, -50));
   Y(new I(25, -50))
}
   ;
function R(a) {
   Z.apply(this, arguments)
}
c(R, Z);
R.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -200,
      y: 100
   });
   this.A[0].push({
      x: 200,
      y: 100
   });
   this.A[0].push({
      x: 200,
      y: -100
   });
   this.A[0].push({
      x: -200,
      y: -100
   });
   this.name = "PEGBOARD"
}
   ;
R.prototype.D = function () {
   for (var a = [-150, -75, 0, 75, 150], b = [-60, -20, 20, 60], e = 0; e < b.length; e++)
      for (var g = 0; g < a.length; g++)
         Y(new I(a[g], b[e]))
}
   ;
function S(a) {
   Z.apply(this, arguments)
}
c(S, Z);
S.prototype.F = function () {
   this.A.push([]);
   for (var a = 4 * Math.PI / 180, b = 0; 90 > b; b++) {
      var e = 2 * Math.PI - b * a;
      this.A[0].push({
         x: 150 * Math.cos(e),
         y: 150 * Math.sin(e)
      })
   }
   this.name = "ORBIT"
}
   ;
S.prototype.D = function () {
   Y(new I(0, 0));
   Y(new I(0, 0, 50, 90, 70));
   Y(new I(0, 0, 100, 90, 70));
   Y(new I(0, 0, 50, 270, 70));
   Y(new I(0, 0, 100, 270, 70))
}
   ;
function T(a) {
   Z.apply(this, arguments)
}
c(T, Z);
T.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -60,
      y: 150
   });
   this.A[0].push({
      x: 60,
      y: 150
   });
   this.A[0].push({
      x: 60,
      y: -150
   });
   this.A[0].push({
      x: -60,
      y: -150
   });
   this.name = "NEEDLE"
}
   ;
T.prototype.D = function () {
   Y(new I(0, 0));
   Y(new I(0, 50));
   Y(new I(0, -50));
   Y(new F(-40, 25, 40, 0));
   Y(new F(40, -25, 40, 0));
   Y(new F(40, 75, 40, 0));
   Y(new F(-40, -75, 40, 0))
}
   ;
function U(a) {
   Z.apply(this, arguments)
}
c(U, Z);
U.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -200,
      y: 0
   });
   this.A[0].push({
      x: 0,
      y: 200
   });
   this.A[0].push({
      x: 200,
      y: 0
   });
   this.A[0].push({
      x: 0,
      y: -200
   });
   this.N = this.L = 12;
   this.name = "PATIENCE"
}
   ;
U.prototype.D = function () {
   Y(new F(0, 0, 250, 0, 40));
   Y(new I(0, 120));
   Y(new I(30, 90));
   Y(new I(60, 60));
   Y(new I(90, 30));
   Y(new I(-30, 90));
   Y(new I(-60, 60));
   Y(new I(-90, 30));
   Y(new I(-120, 0));
   Y(new I(-90, -30));
   Y(new I(-60, -60));
   Y(new I(-30, -90));
   Y(new I(0, -120));
   Y(new I(30, -90));
   Y(new I(60, -60));
   Y(new I(90, -30));
   Y(new I(120, 0))
}
   ;
function V(a) {
   Z.apply(this, arguments)
}
c(V, Z);
V.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -200,
      y: 200
   });
   this.A[0].push({
      x: -50,
      y: 200
   });
   this.A[0].push({
      x: -50,
      y: 20
   });
   this.A[0].push({
      x: 200,
      y: 20
   });
   this.A[0].push({
      x: 200,
      y: -200
   });
   this.A[0].push({
      x: 50,
      y: -200
   });
   this.A[0].push({
      x: 50,
      y: -20
   });
   this.A[0].push({
      x: -200,
      y: -20
   });
   this.name = "BOOMERANG"
}
   ;
V.prototype.D = function () {
   Y(new I(0, 0));
   Y(new I(-30, 0));
   Y(new I(-60, 0));
   Y(new I(30, 0));
   Y(new I(60, 0));
   Y(new I(90, 0));
   Y(new I(-90, 0));
   Y(new I(120, 0));
   Y(new I(-120, 0));
   Y(new F(-125, 160, 150));
   Y(new F(125, -160, 150));
   Y(new I(-125, 180));
   Y(new I(125, -180));
   Y(new F(-60, 40, 40, 90));
   Y(new F(60, -40, 40, 90))
}
   ;
function W(a) {
   Z.apply(this, arguments)
}
c(W, Z);
W.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: 50,
      y: -100
   });
   this.A[0].push({
      x: -50,
      y: -100
   });
   this.C.push([]);
   this.C[0].push({
      x: 0,
      y: 1
   });
   this.C[0].push({
      x: 0,
      y: 1
   });
   this.A.push([]);
   this.A[1].push({
      x: -125,
      y: 100
   });
   this.A[1].push({
      x: -25,
      y: 100
   });
   this.C.push([]);
   this.C[1].push({
      x: 0,
      y: -1
   });
   this.C[1].push({
      x: 0,
      y: -1
   });
   this.A.push([]);
   this.A[2].push({
      x: 125,
      y: 100
   });
   this.A[2].push({
      x: 25,
      y: 100
   });
   this.C.push([]);
   this.C[2].push({
      x: 0,
      y: -1
   });
   this.C[2].push({
      x: 0,
      y: -1
   });
   this.name = "SPLITTER"
}
   ;
W.prototype.D = function () {
   Y(new I(-35, -50));
   Y(new I(-35, -25));
   Y(new I(-35, 0));
   Y(new I(-35, 25));
   Y(new I(-35, 50));
   Y(new I(35, -50));
   Y(new I(35, -25));
   Y(new I(35, 0));
   Y(new I(35, 25));
   Y(new I(35, 50))
}
   ;
function X(a) {
   Z.apply(this, arguments)
}
c(X, Z);
X.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -250,
      y: -100
   });
   this.A[0].push({
      x: 250,
      y: -100
   });
   this.C.push([]);
   this.C[0].push({
      x: 0,
      y: 1
   });
   this.C[0].push({
      x: 0,
      y: 1
   });
   this.A.push([]);
   this.A[1].push({
      x: -140,
      y: 100
   });
   this.A[1].push({
      x: -110,
      y: 100
   });
   this.C.push([]);
   this.C[1].push({
      x: 0,
      y: -1
   });
   this.C[1].push({
      x: 0,
      y: -1
   });
   this.A.push([]);
   this.A[2].push({
      x: 140,
      y: 100
   });
   this.A[2].push({
      x: 110,
      y: 100
   });
   this.C.push([]);
   this.C[2].push({
      x: 0,
      y: -1
   });
   this.C[2].push({
      x: 0,
      y: -1
   });
   this.A.push([]);
   this.A[3].push({
      x: -15,
      y: 100
   });
   this.A[3].push({
      x: 15,
      y: 100
   });
   this.C.push([]);
   this.C[3].push({
      x: 0,
      y: -1
   });
   this.C[3].push({
      x: 0,
      y: -1
   });
   this.N = this.L = 12;
   this.name = "TRIPLE SHOT"
}
   ;
X.prototype.D = function () {
   Y(new I(-125, -50));
   Y(new I(-125, 0));
   Y(new I(-125, 50));
   Y(new I(0, -50));
   Y(new I(0, 0));
   Y(new I(0, 50));
   Y(new I(125, -50));
   Y(new I(125, 0));
   Y(new I(125, 50))
}
   ;
function Ia(a) {
   Z.apply(this, arguments)
}
c(Ia, Z);
Ia.prototype.F = function () {
   this.A.push([]);
   for (var a = 150, b = 90, e = 360 / b * Math.PI / 180, g = 0; g < b; g++) {
      var h = 2 * Math.PI - g * e;
      this.A[0].push({
         x: Math.cos(h) * a,
         y: Math.sin(h) * a
      })
   }
   this.A.push([]);
   a = 100;
   b = 45;
   e = 360 / b * Math.PI / 180;
   for (g = 0; g < b; g++)
      h = g * e,
         this.A[1].push({
            x: Math.cos(h) * a,
            y: Math.sin(h) * a
         });
   this.name = "DONUT"
}
   ;
Ia.prototype.D = function () {
   Y(new I(0, 115));
   Y(new I(0, 135));
   Y(new I(0, -115));
   Y(new I(0, -135));
   Y(new I(115, 0));
   Y(new I(135, 0));
   Y(new I(-115, 0));
   Y(new I(-135, 0));
   Y(new F(81, 81, 140, -45));
   Y(new F(-81, 81, 140, 45));
   Y(new F(81, -81, 140, 45));
   Y(new F(-81, -81, 140, -45))
}
   ;
function Ja(a) {
   Z.apply(this, arguments)
}
c(Ja, Z);
Ja.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -300,
      y: 100
   });
   this.A[0].push({
      x: -300,
      y: -100
   });
   this.C.push([]);
   this.C[0].push({
      x: 1,
      y: 0
   });
   this.C[0].push({
      x: 1,
      y: 0
   });
   this.A.push([]);
   this.A[1].push({
      x: 300,
      y: 100
   });
   this.A[1].push({
      x: 300,
      y: -100
   });
   this.C.push([]);
   this.C[1].push({
      x: -1,
      y: 0
   });
   this.C[1].push({
      x: -1,
      y: 0
   });
   this.name = "LONG DISTANCE"
}
   ;
Ja.prototype.D = function () {
   Y(new I(-50, 0));
   Y(new I(50, 0));
   Y(new I(100, 0));
   Y(new I(-100, 0));
   Y(new I(200, 0));
   Y(new I(-200, 0));
   Y(new I(250, 0));
   Y(new I(-250, 0));
   Y(new F(0, -100, 75, 90, 0, 0, 200, 1, .5));
   Y(new F(-150, -100, 75, 90, 0, 0, 200, 1.5, .5));
   Y(new F(150, -100, 75, 90, 0, 0, 200, .5, .5))
}
   ;
function Ra(a) {
   Z.apply(this, arguments)
}
c(Ra, Z);
Ra.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -300,
      y: 0
   });
   this.A[0].push({
      x: -225,
      y: 0
   });
   this.A[0].push({
      x: -225,
      y: 50
   });
   this.A[0].push({
      x: 225,
      y: 50
   });
   this.A[0].push({
      x: 225,
      y: 0
   });
   this.A[0].push({
      x: 300,
      y: 0
   });
   this.A[0].push({
      x: 225,
      y: 0
   });
   this.A[0].push({
      x: 225,
      y: -50
   });
   this.A[0].push({
      x: -225,
      y: -50
   });
   this.A[0].push({
      x: -225,
      y: 0
   });
   this.name = "CIRCUIT"
}
   ;
Ra.prototype.D = function () {
   for (var a = 0; 6 > a; a++)
      Y(new I(-125 + 50 * a, 30)),
         Y(new I(-125 + 50 * a, 0)),
         Y(new I(-125 + 50 * a, -30));
   Y(new F(0, -50, 50, 90));
   Y(new F(-50, 50, 50, 90));
   Y(new F(50, 50, 50, 90));
   Y(new F(-100, -50, 50, 90));
   Y(new F(100, -50, 50, 90));
   Y(new F(-150, 50, 50, 90));
   Y(new F(150, 50, 50, 90))
}
   ;
function Oa(a) {
   Z.apply(this, arguments)
}
c(Oa, Z);
Oa.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -225,
      y: 150
   });
   this.A[0].push({
      x: -225,
      y: 50
   });
   this.A[0].push({
      x: -125,
      y: 50
   });
   this.A[0].push({
      x: -125,
      y: 150
   });
   this.A.push([]);
   this.A[1].push({
      x: 175,
      y: 125
   });
   this.A[1].push({
      x: 175,
      y: 75
   });
   this.A[1].push({
      x: 225,
      y: 75
   });
   this.A[1].push({
      x: 225,
      y: 125
   });
   this.A.push([]);
   this.A[2].push({
      x: 150,
      y: -75
   });
   this.A[2].push({
      x: 150,
      y: -125
   });
   this.A[2].push({
      x: 200,
      y: -125
   });
   this.A[2].push({
      x: 200,
      y: -75
   });
   this.A.push([]);
   this.A[3].push({
      x: -200,
      y: -85
   });
   this.A[3].push({
      x: -200,
      y: -110
   });
   this.A[3].push({
      x: -175,
      y: -110
   });
   this.A[3].push({
      x: -175,
      y: -85
   });
   this.name = "QUADS"
}
   ;
Oa.prototype.D = function () {
   for (var a = 0; 5 > a; a++)
      Y(new I(-75 + 50 * a, 100));
   for (a = 0; 6 > a; a++)
      Y(new I(-135 + 50 * a, -97.5));
   for (a = 0; 2 > a; a++)
      Y(new I(-187.5, 10 - 50 * a));
   for (a = 0; 3 > a; a++)
      Y(new I(187.5, 50 - 50 * a))
}
   ;
function La(a) {
   Z.apply(this, arguments)
}
c(La, Z);
La.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -300,
      y: 100
   });
   this.A[0].push({
      x: -145,
      y: 100
   });
   this.A[0].push({
      x: -135,
      y: 80
   });
   this.A[0].push({
      x: -115,
      y: 80
   });
   this.A[0].push({
      x: -105,
      y: 100
   });
   this.A[0].push({
      x: 105,
      y: 100
   });
   this.A[0].push({
      x: 115,
      y: 80
   });
   this.A[0].push({
      x: 135,
      y: 80
   });
   this.A[0].push({
      x: 145,
      y: 100
   });
   this.A[0].push({
      x: 300,
      y: 100
   });
   this.A[0].push({
      x: 300,
      y: 20
   });
   this.A[0].push({
      x: 280,
      y: 10
   });
   this.A[0].push({
      x: 280,
      y: -10
   });
   this.A[0].push({
      x: 300,
      y: -20
   });
   this.A[0].push({
      x: 300,
      y: -100
   });
   this.A[0].push({
      x: 145,
      y: -100
   });
   this.A[0].push({
      x: 135,
      y: -80
   });
   this.A[0].push({
      x: 115,
      y: -80
   });
   this.A[0].push({
      x: 105,
      y: -100
   });
   this.A[0].push({
      x: -105,
      y: -100
   });
   this.A[0].push({
      x: -115,
      y: -80
   });
   this.A[0].push({
      x: -135,
      y: -80
   });
   this.A[0].push({
      x: -145,
      y: -100
   });
   this.A[0].push({
      x: -300,
      y: -100
   });
   this.A[0].push({
      x: -300,
      y: -20
   });
   this.A[0].push({
      x: -280,
      y: -10
   });
   this.A[0].push({
      x: -280,
      y: 10
   });
   this.A[0].push({
      x: -300,
      y: 20
   });
   this.name = "RAZOR"
}
   ;
La.prototype.D = function () {
   for (var a = 0; 10 > a; a++)
      Y(new I(-225 + 50 * a, 0));
   Y(new I(-125, 40));
   Y(new I(-125, -40));
   Y(new I(125, 40));
   Y(new I(125, -40))
}
   ;
function Ta(a) {
   Z.apply(this, arguments)
}
c(Ta, Z);
Ta.prototype.F = function () {
   this.A.push([]);
   this.C.push([]);
   for (var a = 8 * Math.PI / 180, b = 0; 45 > b; b++) {
      var e = b * a;
      this.A[0].push({
         x: 70 * Math.cos(e),
         y: 70 * Math.sin(e)
      })
   }
   this.A.push([]);
   this.A[1].push({
      x: -300,
      y: 50
   });
   this.A[1].push({
      x: -300,
      y: -50
   });
   this.C.push([]);
   this.C[1].push({
      x: 1,
      y: 0
   });
   this.C[1].push({
      x: 1,
      y: 0
   });
   this.A.push([]);
   this.A[2].push({
      x: 215,
      y: -135
   });
   this.A[2].push({
      x: 135,
      y: -215
   });
   this.C.push([]);
   this.C[2].push({
      x: -.707,
      y: .707
   });
   this.C[2].push({
      x: -.707,
      y: .707
   });
   this.A.push([]);
   this.A[3].push({
      x: 175,
      y: 125
   });
   this.A[3].push({
      x: 125,
      y: 175
   });
   this.C.push([]);
   this.C[3].push({
      x: -.707,
      y: -.707
   });
   this.C[3].push({
      x: -.707,
      y: -.707
   });
   this.name = "ALIENS"
}
   ;
Ta.prototype.D = function () {
   Y(new I(-112, 0));
   Y(new I(-162, 0));
   Y(new I(-212, 0));
   Y(new I(-262, 0));
   Y(new I(80, -80));
   Y(new I(110, -110));
   Y(new I(140, -140));
   Y(new I(85, 85));
   Y(new I(120, 120));
   Y(new F(-188, 150, 75, 90, 0, 0, -300, .5, .5));
   Y(new F(0, 205, 75, -45, 0, 215, -215, .5, .5))
}
   ;
function Ka(a) {
   Z.apply(this, arguments)
}
c(Ka, Z);
Ka.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -280,
      y: 150
   });
   this.A[0].push({
      x: -280,
      y: -150
   });
   this.A[0].push({
      x: -260,
      y: -150
   });
   this.A[0].push({
      x: -260,
      y: 150
   });
   this.A.push([]);
   this.A[1].push({
      x: -100,
      y: 100
   });
   this.A[1].push({
      x: -100,
      y: -100
   });
   this.A[1].push({
      x: -80,
      y: -100
   });
   this.A[1].push({
      x: -80,
      y: 100
   });
   this.A.push([]);
   this.A[2].push({
      x: 80,
      y: 50
   });
   this.A[2].push({
      x: 80,
      y: -50
   });
   this.A[2].push({
      x: 100,
      y: -50
   });
   this.A[2].push({
      x: 100,
      y: 50
   });
   this.A.push([]);
   this.A[3].push({
      x: 260,
      y: 25
   });
   this.A[3].push({
      x: 260,
      y: -25
   });
   this.A[3].push({
      x: 280,
      y: -25
   });
   this.A[3].push({
      x: 280,
      y: 25
   });
   this.name = "BAR GAPS"
}
   ;
Ka.prototype.D = function () {
   Y(new I(-130, 0));
   Y(new I(-180, 0));
   Y(new I(-230, 0));
   Y(new I(-130, 80));
   Y(new I(-180, 80));
   Y(new I(-230, 80));
   Y(new I(-130, -80));
   Y(new I(-180, -80));
   Y(new I(-230, -80));
   Y(new I(-50, -30));
   Y(new I(0, -30));
   Y(new I(50, -30));
   Y(new I(-50, 30));
   Y(new I(0, 30));
   Y(new I(50, 30));
   Y(new I(130, 0));
   Y(new I(180, 0));
   Y(new I(230, 0))
}
   ;
function Pa(a) {
   Z.apply(this, arguments)
}
c(Pa, Z);
Pa.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -275,
      y: -200
   });
   this.A[0].push({
      x: -250,
      y: -200
   });
   this.C.push([]);
   this.C[0].push({
      x: 0,
      y: 1
   });
   this.C[0].push({
      x: 0,
      y: 1
   });
   this.A.push([]);
   this.A[1].push({
      x: -275,
      y: 0
   });
   this.A[1].push({
      x: -250,
      y: 25
   });
   this.C.push([]);
   this.C[1].push({
      x: .707,
      y: -.707
   });
   this.C[1].push({
      x: .707,
      y: -.707
   });
   this.A.push([]);
   this.A[2].push({
      x: -150,
      y: -200
   });
   this.A[2].push({
      x: -25,
      y: -200
   });
   this.C.push([]);
   this.C[2].push({
      x: 0,
      y: 1
   });
   this.C[2].push({
      x: 0,
      y: 1
   });
   this.A.push([]);
   this.A[3].push({
      x: -75,
      y: 100
   });
   this.A[3].push({
      x: -50,
      y: 125
   });
   this.C.push([]);
   this.C[3].push({
      x: .707,
      y: -.707
   });
   this.C[3].push({
      x: .707,
      y: -.707
   });
   this.A.push([]);
   this.A[4].push({
      x: 160,
      y: -200
   });
   this.A[4].push({
      x: 285,
      y: -200
   });
   this.C.push([]);
   this.C[4].push({
      x: 0,
      y: 1
   });
   this.C[4].push({
      x: 0,
      y: 1
   });
   this.A.push([]);
   this.A[5].push({
      x: 160,
      y: 180
   });
   this.A[5].push({
      x: 285,
      y: 180
   });
   this.C.push([]);
   this.C[5].push({
      x: 0,
      y: -1
   });
   this.C[5].push({
      x: 0,
      y: -1
   });
   this.N = this.L = 12;
   this.name = "ZIG ZAG"
}
   ;
Pa.prototype.D = function () {
   for (var a = 0; 3 > a; a++)
      Y(new I(-262, -150 + 50 * a));
   for (a = 1; 4 > a; a++)
      Y(new I(-262 + 50 * a, 12 - 50 * a));
   for (a = 0; 5 > a; a++)
      Y(new I(-62, -150 + 50 * a));
   for (a = 1; 6 > a; a++)
      Y(new I(-62 + 50 * a, 112 - 50 * a));
   for (a = 0; 7 > a; a++)
      Y(new I(222, -150 + 50 * a));
   Y(new F(-225, -75, 100, 0, -180));
   Y(new F(-12, 0, 125, 0, 180));
   Y(new F(222, 50, 100, 0, 0, -100, 0, 1, .5));
   Y(new F(222, -50, 100, 0, 0, 100, 0, 1, .5))
}
   ;
function Ma(a) {
   Z.apply(this, arguments)
}
c(Ma, Z);
Ma.prototype.F = function () {
   this.A.push([]);
   for (var a = 4 * Math.PI / 180, b = 0; 22.5 > b; b++) {
      var e = 1.745 * Math.PI - b * a;
      this.A[0].push({
         x: 300 * Math.cos(e),
         y: 300 * Math.sin(e) + 150
      })
   }
   this.A[0].push({
      x: -50,
      y: 150
   });
   this.A[0].push({
      x: 50,
      y: 150
   });
   this.name = "SHELL"
}
   ;
Ma.prototype.D = function () {
   var a = -60
      , b = 95
      , e = 50
      , g = Math.cos(235 * Math.PI / 180) * e;
   e *= Math.sin(235 * Math.PI / 180);
   for (var h = 0; 4 > h; h++)
      Y(new I(-a - g * h, b + e * h)),
         Y(new I(a + g * h, b + e * h));
   a = -17;
   b = 85;
   e = 50;
   g = Math.cos(255 * Math.PI / 180) * e;
   e *= Math.sin(255 * Math.PI / 180);
   for (h = 0; 4 > h; h++)
      Y(new I(-a - g * h, b + e * h)),
         Y(new I(a + g * h, b + e * h));
   Y(new F(0, 0, 150, 90));
   Y(new F(75, 20, 150, -60));
   Y(new F(-75, 20, 150, 60))
}
   ;
function Qa(a) {
   Z.apply(this, arguments)
}
c(Qa, Z);
Qa.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -250,
      y: 0
   });
   this.A[0].push({
      x: -250,
      y: 50
   });
   this.A[0].push({
      x: 250,
      y: 50
   });
   this.A[0].push({
      x: -250,
      y: 50
   });
   this.C.push([]);
   this.C[0].push({
      x: 1,
      y: 0
   });
   this.C[0].push({
      x: 0,
      y: -1
   });
   this.C[0].push({
      x: 0,
      y: -1
   });
   this.C[0].push({
      x: 1,
      y: 0
   });
   this.A.push([]);
   this.A[1].push({
      x: 250,
      y: 0
   });
   this.A[1].push({
      x: 250,
      y: -50
   });
   this.A[1].push({
      x: -250,
      y: -50
   });
   this.A[1].push({
      x: 250,
      y: -50
   });
   this.C.push([]);
   this.C[1].push({
      x: -1,
      y: 0
   });
   this.C[1].push({
      x: 0,
      y: 1
   });
   this.C[1].push({
      x: 0,
      y: 1
   });
   this.C[1].push({
      x: -1,
      y: 0
   });
   this.name = "X FACTOR"
}
   ;
Qa.prototype.D = function () {
   Y(new I(0, -25));
   Y(new I(0, 25));
   Y(new I(100, -25));
   Y(new I(100, 25));
   Y(new I(-100, -25));
   Y(new I(-100, 25));
   Y(new I(200, -25));
   Y(new I(200, 25));
   Y(new I(-200, -25));
   Y(new I(-200, 25));
   Y(new F(200, 0, 80, 0, 270, -400, 0, .75, 0));
   Y(new F(200, 0, 80, 90, 270, -400, 0, .75, 0))
}
   ;
function Sa(a) {
   Z.apply(this, arguments)
}
c(Sa, Z);
Sa.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -150,
      y: 150
   });
   this.A[0].push({
      x: -200,
      y: 150
   });
   this.A[0].push({
      x: -200,
      y: 100
   });
   this.A[0].push({
      x: -200,
      y: 150
   });
   this.C.push([]);
   this.C[0].push({
      x: 0,
      y: -1
   });
   this.C[0].push({
      x: 1,
      y: 0
   });
   this.C[0].push({
      x: 1,
      y: 0
   });
   this.C[0].push({
      x: 0,
      y: -1
   });
   this.A.push([]);
   this.A[1].push({
      x: -150,
      y: 0
   });
   this.A[1].push({
      x: -200,
      y: 0
   });
   this.A[1].push({
      x: -200,
      y: 50
   });
   this.A[1].push({
      x: -200,
      y: 0
   });
   this.C.push([]);
   this.C[1].push({
      x: 0,
      y: 1
   });
   this.C[1].push({
      x: 1,
      y: 0
   });
   this.C[1].push({
      x: 1,
      y: 0
   });
   this.C[1].push({
      x: 0,
      y: 1
   });
   this.A.push([]);
   this.A[2].push({
      x: 150,
      y: 50
   });
   this.A[2].push({
      x: 200,
      y: 50
   });
   this.A[2].push({
      x: 200,
      y: 0
   });
   this.A[2].push({
      x: 200,
      y: 50
   });
   this.C.push([]);
   this.C[2].push({
      x: 0,
      y: -1
   });
   this.C[2].push({
      x: -1,
      y: 0
   });
   this.C[2].push({
      x: -1,
      y: 0
   });
   this.C[2].push({
      x: 0,
      y: -1
   });
   this.A.push([]);
   this.A[3].push({
      x: 150,
      y: -100
   });
   this.A[3].push({
      x: 200,
      y: -100
   });
   this.A[3].push({
      x: 200,
      y: -50
   });
   this.A[3].push({
      x: 200,
      y: -100
   });
   this.C.push([]);
   this.C[3].push({
      x: 0,
      y: 1
   });
   this.C[3].push({
      x: -1,
      y: 0
   });
   this.C[3].push({
      x: -1,
      y: 0
   });
   this.C[3].push({
      x: 0,
      y: 1
   });
   this.A.push([]);
   this.A[4].push({
      x: -150,
      y: -50
   });
   this.A[4].push({
      x: -200,
      y: -50
   });
   this.A[4].push({
      x: -200,
      y: -100
   });
   this.A[4].push({
      x: -200,
      y: -50
   });
   this.C.push([]);
   this.C[4].push({
      x: 0,
      y: -1
   });
   this.C[4].push({
      x: 1,
      y: 0
   });
   this.C[4].push({
      x: 1,
      y: 0
   });
   this.C[4].push({
      x: 0,
      y: -1
   });
   this.A.push([]);
   this.A[5].push({
      x: -150,
      y: -200
   });
   this.A[5].push({
      x: -200,
      y: -200
   });
   this.A[5].push({
      x: -200,
      y: -150
   });
   this.A[5].push({
      x: -200,
      y: -200
   });
   this.C.push([]);
   this.C[5].push({
      x: 0,
      y: 1
   });
   this.C[5].push({
      x: 1,
      y: 0
   });
   this.C[5].push({
      x: 1,
      y: 0
   });
   this.C[5].push({
      x: 0,
      y: 1
   });
   this.A.push([]);
   this.A[6].push({
      x: 150,
      y: -200
   });
   this.A[6].push({
      x: 200,
      y: -200
   });
   this.A[6].push({
      x: 200,
      y: -150
   });
   this.A[6].push({
      x: 200,
      y: -200
   });
   this.C.push([]);
   this.C[6].push({
      x: 0,
      y: 1
   });
   this.C[6].push({
      x: -1,
      y: 0
   });
   this.C[6].push({
      x: -1,
      y: 0
   });
   this.C[6].push({
      x: 0,
      y: 1
   });
   this.N = this.L = 12;
   this.name = "SNAKE"
}
   ;
Sa.prototype.D = function () {
   Y(new I(-175, 125));
   Y(new I(-175, 75));
   Y(new I(-175, 25));
   for (var a = 0; 7 > a; a++)
      Y(new I(-125 + 50 * a, 25)),
         Y(new I(-125 + 50 * a, -75)),
         Y(new I(-125 + 50 * a, -175));
   Y(new I(175, -25));
   Y(new I(-175, -75));
   Y(new I(-175, -125));
   Y(new I(-175, -175));
   Y(new F(0, -25, 150, 0, 180))
}
   ;
function Na(a) {
   Z.apply(this, arguments)
}
c(Na, Z);
Na.prototype.F = function () {
   this.A.push([]);
   this.A[0].push({
      x: -100,
      y: 100
   });
   this.A[0].push({
      x: 100,
      y: 100
   });
   this.A[0].push({
      x: 100,
      y: -100
   });
   this.A[0].push({
      x: -100,
      y: -100
   });
   this.name = "REVENGE OF THE BOX"
}
   ;
Na.prototype.D = function () {
   Y(new I(0, 0));
   Y(new I(-50, 0));
   Y(new I(50, 0));
   Y(new I(-25, 0));
   Y(new I(25, 0));
   Y(new I(0, 50));
   Y(new I(-50, 50));
   Y(new I(50, 50));
   Y(new I(-25, 50));
   Y(new I(25, 50));
   Y(new I(0, -50));
   Y(new I(-50, -50));
   Y(new I(50, -50));
   Y(new I(-25, -50));
   Y(new I(25, -50));
   Y(new F(-32, 32, 50, 0, 180));
   Y(new F(38, -50, 50, 90, 0, 0, 50, 1, .5))
}
   ;
function Za() {
   var a = q
      , b = u;
   this.canvas = document.createElement("canvas");
   this.canvas.setAttribute("width", a);
   this.canvas.setAttribute("height", b);
   this.canvas.style.width = 1 * a + "px";
   this.canvas.style.height = 1 * b + "px";
   this.canvas.style.backgroundColor = "black";
   document.getElementById("game").appendChild(this.canvas);
   this.B = this.canvas.getContext("2d");
   this.width = a;
   this.height = b;
   this.scale = 1;
   this.entities = [];
   this.Fa = this.qa = !1;
   $a(this);
   ab(this);
   bb(this);
   this.Ga(performance.now())
}
function bb(a) {
   a.I = {};
   [].forEach(function (b) {
      a.I[b] = {};
      a.I[b].loaded = !1;
      b.endsWith(".png") || b.endsWith(".jpg") ? (a.I[b].data = new Image,
         a.I[b].data.onload = function () {
            return a.I[b].loaded = !0
         }
         ,
         a.I[b].data.src = b) : b.endsWith(".wav") || b.endsWith(".mp3") ? (a.I[b].data = new Audio,
            a.I[b].data.src = b,
            a.I[b].data.load(),
            a.I[b].loaded = !0) : console.assert(!1, "Unable to load " + b + " - unknown type")
   })
}
function cb(a) {
   return 0 < Object.keys(a.I).length && 0 == Object.values(a.I).every(function (a) {
      return a.loaded
   })
}
Za.prototype.Ga = function (a) {
   window.requestAnimationFrame(this.Ga.bind(this));
   if (!cb(this)) {
      var b = Math.min((a - (this.gb || a)) / 1E3, .2);
      this.gb = a;
      this.B.clearRect(-this.width, -this.height, 2 * this.width, 2 * this.height);
      void 0 !== this.state && this.state(b);
      db(this);
      eb(this, b);
      fb(this);
      void 0 !== this.la && this.la(b);
      gb(this)
   }
}
   ;
function Y(a) {
   var b = p;
   Object.defineProperty(a, "z", {
      set: function (e) {
         a.Da = e;
         b.qa = !0
      },
      get: function () {
         return a.Da
      }
   });
   a.Da = 0 < b.entities.length ? b.entities[b.entities.length - 1].z + 1 : 0;
   b.entities.push(a)
}
function eb(a, b) {
   a.entities.forEach(function (a) {
      void 0 !== a.update && a.update(b)
   });
   a.Fa && (a.entities = a.entities.filter(function (a) {
      return !0 !== a.S
   }),
      a.Fa = !1)
}
function fb(a) {
   a.entities.forEach(function (a) {
      void 0 !== a.ca && a.ca()
   })
}
function db(a) {
   a.qa && (a.entities.sort(function (a, e) {
      return a.z - e.z
   }),
      a.qa = !1)
}
function K(a) {
   var b = p
      , e = void 0 !== a.angle ? a.angle * Math.PI / 180 : 0
      , g = void 0 !== a.bb ? a.bb : "Arial"
      , h = void 0 !== a.fontSize ? a.fontSize : 12
      , m = void 0 !== a.fontStyle ? a.fontStyle : ""
      , r = void 0 !== a.color ? a.color : "#FFF"
      , t = void 0 !== a.textAlign ? a.textAlign.toLowerCase() : "left"
      , n = void 0 !== a.textBaseline ? a.textBaseline.toLowerCase() : "bottom";
   b.B.save();
   b.B.translate(a.x, a.y);
   b.B.rotate(e);
   b.B.font = m + " " + h + "px " + g;
   b.B.fillStyle = r;
   b.B.textAlign = t;
   b.B.textBaseline = n;
   b.B.fillText(a.text, 0, 0);
   b.B.restore()
}
function ab(a) {
   a.ka = !0;
   a.jb = {
      c: 16.35,
      "c#": 17.32,
      d: 18.35,
      "d#": 19.45,
      e: 20.6,
      f: 21.83,
      "f#": 23.12,
      g: 24.5,
      "g#": 25.96,
      a: 27.5,
      "a#": 29.14,
      b: 30.87
   };
   window.addEventListener("click", function () {
      if (a.G)
         a.G.resume();
      else {
         a.G = new (window.AudioContext || window.webkitAudioContext);
         var b = 12 * a.G.sampleRate;
         a.Oa = a.G.createBuffer(1, b, a.G.sampleRate);
         a.ib = a.Oa.getChannelData(0);
         for (var e = 0; e < b; e++)
            a.ib[e] = -1 + 2 * Math.random()
      }
   })
}
function H(a, b, e, g, h) {
   var m = p;
   if (m.ka && m.G) {
      var r = m.G.createOscillator();
      a = m.jb[a.toLowerCase()];
      void 0 !== b && (a *= Math.pow(2, b));
      r.type = void 0 !== h ? h : "sine";
      r.frequency.setValueAtTime(a, m.G.currentTime);
      void 0 !== e && (e *= 2);
      void 0 !== g && (g *= 2);
      r.connect(m.G.destination);
      r.start(m.G.currentTime + (void 0 !== g ? g : 0));
      r.stop(m.G.currentTime + (void 0 !== g ? g : 0) + (void 0 !== e ? e : .2))
   }
}
function $a(a) {
   a.aa = {
      x: 0,
      y: 0
   };
   a.X = {
      x: 0,
      y: 0
   };
   a.Ka = !1;
   a.La = !1;
   a.M = !1;
   a.Ma = !1;
   window.addEventListener("mousemove", function (b) {
      a.X.x += b.kb;
      a.X.y += b.lb;
      var e = a.canvas.getBoundingClientRect();
      a.aa = {
         x: b.clientX - e.left,
         y: b.clientY - e.top
      }
   });
   window.addEventListener("mousedown", function (b) {
      0 === b.button ? (a.Ka = !0,
         a.M = !0) : 2 === b.button && (a.La = !0,
            a.Ma = !0)
   });
   window.addEventListener("mouseup", function (b) {
      0 === b.button ? a.Ka = !1 : 2 === b.button && (a.La = !1)
   });
   window.addEventListener("touchstart", a.ua, !0);
   window.addEventListener("touchmove", a.ua, !0);
   window.addEventListener("touchend", a.ua, !0);
   a.ta = {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      e: "e",
      f: "f",
      g: "g",
      h: "h",
      i: "i",
      j: "j",
      k: "k",
      l: "l",
      m: "m",
      n: "n",
      o: "o",
      p: "p",
      q: "q",
      r: "r",
      s: "s",
      t: "t",
      u: "u",
      v: "v",
      w: "w",
      x: "x",
      y: "y",
      z: "z",
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      arrowup: "up",
      arrowdown: "down",
      arrowleft: "left",
      arrowright: "right",
      " ": "space",
      escape: "escape",
      control: "ctrl",
      shift: "shift",
      alt: "alt",
      tab: "tab",
      enter: "enter",
      backspace: "backspace"
   };
   a.keys = {};
   a.W = {};
   Object.keys(a.ta).forEach(function (b) {
      return a.keys[b] = !1
   });
   window.addEventListener("keydown", function (b) {
      hb(a, b, !0)
   });
   window.addEventListener("keyup", function (b) {
      hb(a, b, !1)
   })
}
Za.prototype.ua = function (a) {
   var b = a.changedTouches[0];
   switch (a.type) {
      case "touchstart":
         var e = "mousedown";
         break;
      case "touchend":
         e = "mouseup";
         break;
      case "touchmove":
         e = "mousemove";
         break;
      default:
         return
   }
   var g = document.createEvent("MouseEvent");
   g.initMouseEvent(e, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
   b.target.dispatchEvent(g);
   a.preventDefault()
}
   ;
function hb(a, b, e) {
   var g = b.key.toLowerCase();
   void 0 !== a.ta[g] && (g = a.ta[g],
      a.W[g] = !1 === a.keys[g] || void 0 === a.keys[g],
      a.keys[g] = e,
      "up" !== g && "down" !== g && "left" !== g && "right" !== g || b.preventDefault())
}
function gb(a) {
   a.X.x = 0;
   a.X.y = 0;
   a.M = !1;
   a.Ma = !1;
   Object.keys(a.W).forEach(function (b) {
      a.W[b] = !1
   })
}
var q = 640
   , u = 480
   , p = new Za;
p.state = Ya;
var E, P, L = 0, Ha = 0, J = 5, l = 0;
function Ya(a) {
   O(a);
   p.M && (p.state = N,
      p.M = !1,
      H("a", 4, .05, 0),
      H("b", 4, .05, .05));
   p.B.shadowBlur = 20;
   p.B.shadowColor = "#08F";
   K({
      text: "CLICK TO PLAY",
      x: .5 * q,
      y: .5 * u,
      fontSize: 20,
      fontStyle: "bold",
      color: "#08F",
      textAlign: "center"
   })
}
;
