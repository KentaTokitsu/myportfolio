(window.webpackJsonp = window.webpackJsonp || []).push([
  [3], {
    102: function(t, e, n) {
      "use strict";
      n.d(e, "a", (function() {
        return f
      })), n.d(e, "b", (function() {
        return h
      }));
      n(10), n(19), n(15), n(34), n(35), n(36), n(37), n(27), n(16);
      var r = n(4),
        o = n(88);

      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }
      var l = {
          breakPoints: [],
          colors: [],
          fonts: [],
          head: {
            meta: "",
            title: ""
          },
          info: {
            created_at: 0,
            updated_at: 0,
            type: "web",
            version: ""
          },
          pages: [],
          resources: {}
        },
        d = function(t) {
          var e = function(t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2 ? c(source, !0).forEach((function(e) {
                Object(r.a)(t, e, source[e])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(source).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
              }))
            }
            return t
          }({}, l, {}, t);
          return {
            breakPoints: e.breakPoints,
            colors: e.colors,
            fonts: e.fonts,
            head: e.head,
            info: e.info,
            pages: e.pages,
            resources: e.resources
          }
        },
        f = function t(view) {
          if ("action" in view || (view.action = {}), "children" in view || (view.children = []), "uuid" in view || (view.uuid = o.a.getUUID()), "children" in view)
            for (var e = 0; e < view.children.length; e++) t(view.children[e])
        },
        h = function(t) {
          for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "web", i = 0; i < t.pages.length; i++) t.pages[i].view && f(t.pages[i].view);
          return t.info.type = e || "iphone", d(t)
        }
    },
    109: function(t, e, n) {
      var content = n(282);
      "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(42).default)("79a56328", content, !0, {
        sourceMap: !1
      })
    },
    110: function(t, e, n) {
      var content = n(307);
      "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(42).default)("f56683a4", content, !0, {
        sourceMap: !1
      })
    },
    111: function(t, e, n) {
      var content = n(310);
      "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(42).default)("69c72228", content, !0, {
        sourceMap: !1
      })
    },
    112: function(t, e, n) {
      var content = n(313);
      "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(42).default)("52ec9e96", content, !0, {
        sourceMap: !1
      })
    },
    113: function(t, e, n) {
      var content = n(319);
      "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(42).default)("e2520c64", content, !0, {
        sourceMap: !1
      })
    },
    114: function(t, e, n) {
      var content = n(322);
      "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(42).default)("605a2d2f", content, !0, {
        sourceMap: !1
      })
    },
    115: function(t, e, n) {
      var content = n(324);
      "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(42).default)("5191a868", content, !0, {
        sourceMap: !1
      })
    },
    116: function(t, e, n) {
      var content = n(332);
      "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(42).default)("5be9726a", content, !0, {
        sourceMap: !1
      })
    },
    117: function(t, e, n) {
      var content = n(334);
      "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(42).default)("72daabed", content, !0, {
        sourceMap: !1
      })
    },
    118: function(t, e, n) {
      var content = n(336);
      "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(42).default)("6d4e8b07", content, !0, {
        sourceMap: !1
      })
    },
    121: function(t, e, n) {
      "use strict";
      n(10), n(45), n(54), n(19), n(15), n(83), n(21), n(47), n(11), n(97), n(28), n(16), n(32);
      var r = n(0),
        o = window.requestIdleCallback || function(t) {
          var e = Date.now();
          return setTimeout((function() {
            t({
              didTimeout: !1,
              timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - e))
              }
            })
          }), 1)
        },
        c = window.cancelIdleCallback || function(t) {
          clearTimeout(t)
        },
        l = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
          t.forEach((function(t) {
            var e = t.intersectionRatio,
              link = t.target;
            e <= 0 || link.__prefetch()
          }))
        }));
      e.a = {
        name: "NuxtLink",
        extends: r.default.component("RouterLink"),
        props: {
          prefetch: {
            type: Boolean,
            default: !0
          },
          noPrefetch: {
            type: Boolean,
            default: !1
          }
        },
        mounted: function() {
          this.prefetch && !this.noPrefetch && (this.handleId = o(this.observe, {
            timeout: 2e3
          }))
        },
        beforeDestroy: function() {
          c(this.handleId), this.__observed && (l.unobserve(this.$el), delete this.$el.__prefetch)
        },
        methods: {
          observe: function() {
            l && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), l.observe(this.$el), this.__observed = !0)
          },
          shouldPrefetch: function() {
            return this.getPrefetchComponents().length > 0
          },
          canPrefetch: function() {
            var t = navigator.connection;
            return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
          },
          getPrefetchComponents: function() {
            return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
              return t.components.default
            })).filter((function(t) {
              return "function" == typeof t && !t.options && !t.__prefetched
            }))
          },
          prefetchLink: function() {
            if (this.canPrefetch()) {
              l.unobserve(this.$el);
              var t = this.getPrefetchComponents(),
                e = !0,
                n = !1,
                r = void 0;
              try {
                for (var o, c = t[Symbol.iterator](); !(e = (o = c.next()).done); e = !0) {
                  var d = o.value,
                    f = d();
                  f instanceof Promise && f.catch((function() {})), d.__prefetched = !0
                }
              } catch (t) {
                n = !0, r = t
              } finally {
                try {
                  e || null == c.return || c.return()
                } finally {
                  if (n) throw r
                }
              }
            }
          }
        }
      }
    },
    167: function(t, e, n) {
      "use strict";
      e.a = {}
    },
    171: function(t, e, n) {
      "use strict";
      n(62);
      var r = n(0),
        o = (n(10), n(45), n(54), n(18), n(19), n(15), n(63), n(21), n(55), n(51), n(34), n(35), n(36), n(37), n(27), n(11), n(22), n(28), n(98), n(43), n(56), n(286), n(16), n(32), n(49)),
        c = (n(50), n(9)),
        l = n(4),
        d = n(210),
        f = (n(83), n(304), n(219), n(97), {
          canUseWebP: function() {
            return new Promise((function(t) {
              var img = new Image;
              img.onload = function() {
                t(!!(img.height > 0 && img.width > 0))
              }, img.onerror = function() {
                t(!1)
              }, img.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=="
            }))
          },
          placeholderImage: function(t) {
            var e = t.width,
              n = t.height;
            return "data:image/svg+xml;charset=utf-8,%3Csvg width='".concat(e, "' height='").concat(n, "' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E")
          },
          isOptimizing: function(t) {
            return /^https:\/\/storage\.googleapis\.com\/[^/]+\/projects\/[^/]+\/s-\d+x\d+_.+\.(jpg|png|gif|svg)$/.test(t)
          },
          getParameters: function() {
            return {
              width: 0,
              height: 0,
              variations: [{
                flag: "s",
                exists: !1,
                size: 600,
                append: "_small"
              }, {
                flag: "m",
                exists: !1,
                size: 1200,
                append: "_middle"
              }, {
                flag: "r",
                exists: !1,
                size: 1800,
                append: "_regular"
              }],
              webp: !1
            }
          },
          parseSource: function(t) {
            var e = this.getParameters(),
              n = t.substr(t.lastIndexOf("/") + 1).split("_"),
              r = !0,
              o = !1,
              c = void 0;
            try {
              for (var l, d = n[Symbol.iterator](); !(r = (l = d.next()).done); r = !0) {
                var param = l.value,
                  f = param.match(/s-(\d+)x(\d+)/);
                f && (e.width = Number(f[1]), e.height = Number(f[2]));
                var h = param.match(/v-(\w+)/);
                if (h) {
                  var m = !0,
                    v = !1,
                    y = void 0;
                  try {
                    for (var x, w = e.variations[Symbol.iterator](); !(m = (x = w.next()).done); m = !0) {
                      var k = x.value;
                      k.exists = h[1].includes(k.flag)
                    }
                  } catch (t) {
                    v = !0, y = t
                  } finally {
                    try {
                      m || null == w.return || w.return()
                    } finally {
                      if (v) throw y
                    }
                  }
                }
                "webp" === param && (e.webp = !0)
              }
            } catch (t) {
              o = !0, c = t
            } finally {
              try {
                r || null == d.return || d.return()
              } finally {
                if (o) throw c
              }
            }
            return e
          },
          append: function(t, e, n) {
            var r = !0,
              o = !1,
              c = void 0;
            try {
              for (var l, d = t.variations[Symbol.iterator](); !(r = (l = d.next()).done); r = !0) {
                var f = l.value;
                if (this.isCoveredSize(f, t, e, n)) return f.append
              }
            } catch (t) {
              o = !0, c = t
            } finally {
              try {
                r || null == d.return || d.return()
              } finally {
                if (o) throw c
              }
            }
            return ""
          },
          isCoveredSize: function(t, e, n, r) {
            if (!t.exists) return !1;
            var o = t.size,
              c = t.size;
            return e.width < e.height && (o = Math.ceil(t.size / e.height * e.width)), e.width > e.height && (c = Math.ceil(t.size / e.width * e.height)), n <= o && r <= c
          },
          getContentSource: function(t, e, n, r, o) {
            var c = this.append(t, n, r),
              l = t.webp && e;
            return o.replace(/(_small|_middle|_regular)?.(jpg|png|gif|svg)$/, c + (l ? ".webp" : ".$2"))
          }
        }),
        h = r.default.extend({
          name: "ButtonSpinner",
          props: {
            color: {
              type: String,
              required: !0
            }
          },
          computed: {
            spinnerStyle: function() {
              return {
                color: this.color
              }
            }
          }
        }),
        m = (n(306), n(2)),
        v = Object(m.a)(h, (function() {
          var t = this.$createElement;
          return (this._self._c || t)("div", {
            staticClass: "spinner",
            style: this.spinnerStyle
          })
        }), [], !1, null, "1b5e7ece", null).exports;

      function y(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }

      function x(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? y(source, !0).forEach((function(e) {
            Object(l.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : y(source).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      var w = function(t) {
          return t.replace(/\/$/, "")
        },
        k = {
          icon: ["icon", "material-icons"],
          "icon-fa": ["icon", "fa"],
          image: ["image"],
          text: ["text"],
          button: ["button"]
        },
        O = r.default.extend({
          name: "RenderDomRenderer",
          props: {
            view: {
              type: Object,
              required: !0
            },
            rootOptions: {
              type: Object,
              required: !0
            },
            hasAnchorParent: {
              type: Boolean,
              required: !1
            },
            hasFormParent: {
              type: Boolean,
              required: !1
            },
            loading: {
              type: Boolean,
              required: !1
            }
          },
          data: function() {
            return {
              submitLoading: !1,
              contentSrc: "",
              debounceTimer: 0,
              onLazyLoad: !1,
              canUseWebP: !1
            }
          },
          computed: {
            renderTag: function() {
              return this.isImg ? "img" : this.isLink || this.isAnchorLink || this.isExternalLink ? "a" : this.view.isList ? "ul" : this.view.isListItem ? "li" : this.isIframe ? "div" : this.isInput ? "input" : this.view.tag
            },
            attrs: function() {
              var t, e = {};
              if (this.isInput && (e.autocomplete = "off"), !this.hasAnchorParent)
                if (this.isExternalLink) e.href = this.compileTemplate(this.content.href), this.view.studioDom.attrs && "_blank" === this.view.studioDom.attrs.target && (e.rel = "noopener");
                else if (this.isLink) {
                var path = String(this.action.val).replace(/^\//, "");
                e.href = [this.rootOptions.basePath, path].join("/")
              } else this.isAnchorLink && (e.href = "#".concat(this.action.val));
              if (this.isImg) {
                var n = this.getImgSrc();
                e = x({}, e, {
                  alt: this.content.alt || null,
                  src: n
                })
              }
              return "" !== this.view.id && (e.id = this.view.id), x({}, this.view.studioDom.attrs, {}, e, (t = {}, Object(l.a)(t, "data-s-".concat(this.uuid), ""), Object(l.a)(t, "data-rid", this._uid), Object(l.a)(t, "class", this.classes), t))
            },
            onEvent: function() {
              return !this.hasAnchorParent && (this.isLink || this.isModalLink || this.isAnchorLink || this.isClose) ? {
                click: this.onClick
              } : this.isForm ? {
                submit: this.onSubmit
              } : {}
            },
            domProps: function() {
              return this.isText ? {
                innerHTML: (text = this.compileTemplate(this.contentData), text.replace(/<(.*?)>/g, (function(t, e) {
                  return /^br$/.test(e) ? t : "&lt;".concat(e, "&gt;")
                })))
              } : this.isIcon ? {
                innerHTML: this.content.data
              } : this.isIframe ? {
                innerHTML: this.content.data || ""
              } : {};
              var text
            },
            classes: function() {
              var t = ["sd"].concat(Object(c.a)(k[this.contentType] || []));
              return this.isIconFa && t.push(this.contentData), "fixed" === this.view.style.position && t.push("fixed"), (this.isLink || this.isModalLink || this.isClose) && t.push("link"), this.isButton && this.submitLoading && t.push("disable"), this.hasFormParent && "button" === this.inputType && this.loading && t.push("submitLoading"), t.join(" ")
            },
            content: function() {
              return this.view.content
            },
            contentType: function() {
              return this.view.contentType
            },
            contentData: function() {
              return this.content.data || ""
            },
            isText: function() {
              return "text" === this.contentType
            },
            isImg: function() {
              return "img" === this.contentType
            },
            isImage: function() {
              return "image" === this.contentType
            },
            isIcon: function() {
              return "icon" === this.contentType
            },
            isIconFa: function() {
              return "icon-fa" === this.contentType
            },
            isForm: function() {
              return "form" === this.contentType
            },
            isButton: function() {
              return "button" === this.contentType
            },
            isIframe: function() {
              return /iframe/.test(this.contentType)
            },
            isInput: function() {
              return /input/.test(this.contentType)
            },
            isExternalLink: function() {
              return void 0 !== this.content.href
            },
            inputType: function() {
              return "input" === this.contentType ? "text" : this.contentType.replace("input-", "")
            },
            action: function() {
              return this.view.action
            },
            actionType: function() {
              return this.view.action.type || ""
            },
            isLink: function() {
              return "link" === this.actionType
            },
            isAnchorLink: function() {
              return "anchorLink" === this.actionType
            },
            isModalLink: function() {
              return "modal" === this.actionType
            },
            isClose: function() {
              return "close" === this.actionType
            },
            uuid: function() {
              return this.view.uuid || this._uid
            },
            isImageOptimizing: function() {
              if (this.rootOptions.isPreview || !this.isImg && !this.isImage || !this.content.src) return !1;
              var t = this.compileTemplate(this.content.src);
              return f.isOptimizing(t)
            },
            contentImage: function() {
              if (!this.isImageOptimizing || !this.content.src) return f.getParameters();
              var t = this.compileTemplate(this.content.src);
              return f.parseSource(t)
            },
            devicePixelRatio: function() {
              return this.$store.getters["device/pixelRatio"]
            },
            windowInnerWidth: function() {
              return this.$store.getters["device/innerWidth"]
            }
          },
          watch: {
            devicePixelRatio: function() {
              this.debounceTimer && window.clearTimeout(this.debounceTimer), this.debounceTimer = window.setTimeout(this.optimizeImageResolution, 500)
            },
            windowInnerWidth: function() {
              this.debounceTimer && window.clearTimeout(this.debounceTimer), this.debounceTimer = window.setTimeout(this.optimizeImageResolution, 500)
            }
          },
          mounted: function() {
            return regeneratorRuntime.async((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, regeneratorRuntime.awrap(f.canUseWebP());
                case 2:
                  this.canUseWebP = t.sent, this.optimizeImageResolution(), this.createObserver();
                case 5:
                case "end":
                  return t.stop()
              }
            }), null, this)
          },
          methods: {
            getImgSrc: function() {
              return this.isImageOptimizing ? this.contentSrc && (this.isImage || this.onLazyLoad || !this.rootOptions.canLazyload) ? this.contentSrc : f.placeholderImage(this.contentImage) : this.content.src ? this.compileTemplate(this.content.src) : "https://storage.googleapis.com/studio-front/default-img.png"
            },
            intersectionCallback: function() {
              (this.isImage || this.isImg) && (this.onLazyLoad = !0), this.isModalLink && void 0 !== this.action.val && this.rootOptions.prefetchModal({
                id: this.action.val
              }), this.isLink && void 0 !== this.action.val && this.rootOptions.prefetchPage({
                path: this.action.val
              })
            },
            createObserver: function() {
              var t = this;
              if (this.isImage || this.isImg || this.isLink || this.isModalLink)
                if (this.rootOptions.canLazyload) {
                  new IntersectionObserver((function(e, n) {
                    e.forEach((function(e) {
                      e.isIntersecting && (n.unobserve(t.$el), t.intersectionCallback())
                    }))
                  }), {
                    rootMargin: "200px"
                  }).observe(this.$el)
                } else this.intersectionCallback()
            },
            optimizeImageResolution: function() {
              if (this.isImageOptimizing && this.content.src) {
                var t = this.$el.getBoundingClientRect(),
                  e = t.width,
                  n = t.height,
                  r = e * this.devicePixelRatio,
                  o = n * this.devicePixelRatio,
                  c = this.compileTemplate(this.content.src);
                this.contentSrc = f.getContentSource(this.contentImage, this.canUseWebP, r, o, c)
              } else this.contentSrc = ""
            },
            getVNodeChildren: function(t) {
              var e = this;
              if (this.hasFormParent && "button" === this.inputType && this.loading) return this.getLoadingButtonChildren(t);
              if (this.isIframe) return [];
              var n = this.hasAnchorParent || this.isExternalLink || this.isLink || this.isAnchorLink || this.isClose || this.isModalLink,
                r = this.hasFormParent || this.isForm,
                o = this.loading || this.submitLoading,
                l = this.view.children.map((function(c) {
                  return t("RenderDomRenderer", {
                    props: {
                      view: c,
                      rootOptions: e.rootOptions,
                      hasAnchorParent: n,
                      hasFormParent: r,
                      loading: o
                    },
                    key: c.renderId
                  })
                }));
              if (this.isImage && (!this.rootOptions.canLazyload || this.onLazyLoad)) {
                var d = this.getImgSrc(),
                  f = d ? '.sd[data-rid="'.concat(this._uid, '"]:before { background-image: url(').concat(d, ") }") : "";
                return [].concat(Object(c.a)(l), [t("style", {}, f)])
              }
              return l
            },
            getLoadingButtonChildren: function(t) {
              var e = this.view.children.reduce((function(t, e) {
                return e.style ? e.style.color : t
              }), "#ffffff");
              return [t(v, {
                props: {
                  color: e
                }
              })]
            },
            scroll: function(t) {
              this.$scrollTo(t, 500, {
                easing: "ease-in-out"
              })
            },
            onClick: function(t) {
              if (this.isClose) this.rootOptions.popModal();
              else if (this.isModalLink && void 0 !== this.action.val) this.rootOptions.pushModal({
                id: this.action.val
              });
              else if (this.isAnchorLink) location.hash === this.attrs.href && this.scroll(this.attrs.href);
              else if (this.isLink) {
                if (t.altKey || t.ctrlKey || t.metaKey || t.shiftKey) return;
                if (t.preventDefault(), this.rootOptions.popModal(), void 0 === this.attrs.href) return;
                var e = this.attrs.href.split("#"),
                  n = Object(o.a)(e, 2),
                  r = n[0],
                  c = n[1],
                  l = location,
                  d = l.pathname,
                  f = l.hash,
                  path = w(r);
                if (path !== w(d)) return void this.$router.push({
                  path: r,
                  hash: c
                });
                var h = d.match(/\/$/);
                this.$router.push({
                  path: path + (h ? "/" : ""),
                  hash: c
                }), void 0 === c && "" === f ? this.scroll("body") : "#".concat(c) === f && this.scroll(f)
              }
            },
            onSubmit: function(t) {
              var e, r, o, c, l, f, h, m, v, y, w, k, O, j, _ = this;
              return regeneratorRuntime.async((function(P) {
                for (;;) switch (P.prev = P.next) {
                  case 0:
                    if (t.preventDefault(), t.target) {
                      P.next = 3;
                      break
                    }
                    return P.abrupt("return");
                  case 3:
                    for (e = t.target, n(308), r = new FormData(e), o = [], c = !0, l = !1, f = void 0, P.prev = 10, h = r.entries()[Symbol.iterator](); !(c = (m = h.next()).done); c = !0) v = m.value, o.push(v);
                    P.next = 18;
                    break;
                  case 14:
                    P.prev = 14, P.t0 = P.catch(10), l = !0, f = P.t0;
                  case 18:
                    P.prev = 18, P.prev = 19, c || null == h.return || h.return();
                  case 21:
                    if (P.prev = 21, !l) {
                      P.next = 24;
                      break
                    }
                    throw f;
                  case 24:
                    return P.finish(21);
                  case 25:
                    return P.finish(18);
                  case 26:
                    if (this.submitLoading = !0, y = this.rootOptions.projectId, P.prev = 28, y) {
                      P.next = 32;
                      break
                    }
                    return this.$notify({
                      group: "form-error-message",
                      text: "Project not found."
                    }), P.abrupt("return");
                  case 32:
                    return P.next = 34, regeneratorRuntime.awrap(d.a.postForm({
                      projectId: y,
                      formObject: {
                        form_name: e.getAttribute("name"),
                        data: o,
                        is_preview: this.rootOptions.isPreview
                      }
                    }));
                  case 34:
                    if (e.reset(), !(w = this.content.formSuccessPageId)) {
                      P.next = 48;
                      break
                    }
                    if (k = this.$store.getters["product/pagesMap"], !(O = k[w])) {
                      P.next = 48;
                      break
                    }
                    if ("modal" !== O.type) {
                      P.next = 43;
                      break
                    }
                    return this.rootOptions.pushModal({
                      id: w
                    }), P.abrupt("return");
                  case 43:
                    return j = "/" === w ? void 0 : w, this.rootOptions.popModal(), this.$router.push({
                      name: this.$route.name,
                      params: x({}, this.$route.params, {
                        pageId: j
                      })
                    }), P.abrupt("return");
                  case 48:
                    this.$notify({
                      group: "form-success-message",
                      text: "Succeeded to submit the form"
                    }), P.next = 54;
                    break;
                  case 51:
                    P.prev = 51, P.t1 = P.catch(28), this.$notify({
                      group: "form-error-message",
                      text: "Failed to submit the form"
                    });
                  case 54:
                    return P.prev = 54, setTimeout((function() {
                      _.submitLoading = !1
                    }), 200), P.finish(54);
                  case 57:
                  case "end":
                    return P.stop()
                }
              }), null, this, [
                [10, 14, 18, 26],
                [19, , 21, 25],
                [28, 51, 54, 57]
              ])
            },
            compileTemplate: function(t) {
              return function(t, data) {
                return t.replace(/{{(.*?)}}/g, (function(t, e) {
                  var n = e.trim().split(".").reduce((function(t, e) {
                    return t && t[e]
                  }), data);
                  return null == n ? t : "" == n ? "&nbsp;" : n
                }))
              }(t, this.view.rm)
            }
          },
          render: function(t) {
            return t(this.renderTag, {
              attrs: this.attrs,
              on: this.onEvent,
              domProps: this.domProps
            }, this.getVNodeChildren(t))
          }
        }),
        j = (n(309), Object(m.a)(O, void 0, void 0, !1, null, null, null).exports),
        _ = {
          name: "BodyStyle",
          props: {
            view: {
              type: Object,
              required: !0
            }
          },
          computed: {
            baseBackground: function() {
              if (this.view.style) return this.view.style.background
            },
            styleText: function() {
              return "body { background: ".concat(this.baseBackground, "; transition: background 0.5s cubic-bezier(0.4, 0.4, 0, 1); }")
            }
          },
          render: function(t) {
            return t("style", this.styleText)
          }
        },
        P = Object(m.a)(_, void 0, void 0, !1, null, null, null).exports,
        S = r.default.component("StyleRenderer", {
          functional: !0,
          props: {
            styleText: {
              type: String,
              required: !0
            }
          },
          render: function(t, e) {
            return t("style", e.props.styleText)
          }
        }),
        C = n(256),
        I = n.n(C),
        T = n(88);

      function R(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }

      function D(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? R(source, !0).forEach((function(e) {
            Object(l.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : R(source).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      var L = {
          left: "flex-start",
          right: "flex-end",
          center: "center"
        },
        $ = function(style) {
          return Object(c.a)(Object.keys(style).filter((function(t) {
            return /^@.+/.test(t)
          }))).reduce((function(t, e) {
            return D({}, t, Object(l.a)({}, e, E(style[e])))
          }), E(style))
        },
        E = function(style) {
          var t = L[style.textAlign];
          return t ? D({}, style, {
            justifyContent: t
          }) : style
        },
        M = function(style, t) {
          var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          return style ? ".sd[data-s-".concat(t, "]").concat(e, " { ").concat(T.a.objToCss(style), " }") : null
        },
        A = r.default.extend({
          name: "PublishStudioStyle",
          components: {
            BodyStyle: P,
            StyleRenderer: S
          },
          props: {
            view: {
              type: Object,
              required: !0
            },
            breakPoints: {
              type: Array,
              required: !1,
              default: function() {
                return []
              }
            },
            isModal: {
              type: Boolean,
              required: !1,
              default: !1
            }
          },
          computed: {
            cssObjectMap: function() {
              return function t(view) {
                var e = view.content && "text" === view.content.type,
                  s = I()(view.style);
                return s = T.a.adjustMarginPercent(s), e && (s = $(s)), D(Object(l.a)({}, view.uuid, s), view.children && view.children.reduce((function(e, n) {
                  return D({}, e, {}, t(n))
                }), {}))
              }(this.view)
            }
          },
          methods: {
            getStyleText: function(t) {
              return function(t) {
                var style = t.style,
                  e = t.uuid,
                  n = t.breakPoints,
                  r = void 0 === n ? [] : n,
                  o = t.isModal,
                  l = void 0 !== o && o,
                  d = [":before", ":hover", ":focus", ":active"].map((function(t) {
                    return M(style[t], e, t)
                  })),
                  f = style[":placeholderShown"],
                  h = f ? ["::-webkit-input-placeholder", ":-moz-placeholder", "::-moz-placeholder", ":-ms-input-placeholder"].map((function(t) {
                    return M(f, e, t)
                  })) : [],
                  m = r.map((function(t) {
                    var n = style["@".concat(t.name)];
                    return n && "@media screen and (max-width: ".concat(t.maxWidth, "px){ ").concat(M(n, e), " }")
                  }));
                return [M(style, e)].concat(Object(c.a)(d), Object(c.a)(h), Object(c.a)(l ? [] : m)).filter((function(t) {
                  return t
                })).join("\n")
              }({
                style: t.style,
                uuid: t.uuid,
                breakPoints: this.breakPoints,
                isModal: this.isModal
              })
            }
          }
        }),
        z = (n(312), Object(m.a)(A, (function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("transition", [n("div", {
            staticClass: "publish-studio-style"
          }, [t._l(t.cssObjectMap, (function(style, e) {
            return n("StyleRenderer", {
              key: e,
              attrs: {
                styleText: t.getStyleText({
                  style: style,
                  uuid: e
                })
              }
            })
          })), n("BodyStyle", {
            attrs: {
              view: t.view
            }
          })], 2)])
        }), [], !1, null, null, null).exports),
        N = (n(314), n(206), n(315), n(85), n(74)),
        B = n(120),
        F = {
          box: ["div", "nav", "header", "footer", "section", "article", "main", "ul", "li"],
          text: ["p", "h1", "h2", "h3", "h4", "h5", "li"],
          input: ["input", "button", "textarea"],
          image: ["image"],
          icon: ["i"],
          form: ["form"]
        },
        U = function() {
          function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(N.a)(this, t), this.uuid = e.uuid, this.name = e.name || "", this.tagName = e.tagName || "", this.children = e.children || [], this.content = e.content || {
              type: ""
            }, this.style = e.style, this.action = e.action, this.attrs = e.attrs, this.id = e.id
          }
          return Object(B.a)(t, [{
            key: "hasChildren",
            value: function() {
              return this.children.length > 0
            }
          }, {
            key: "trueTag",
            value: function() {
              return this.isLinkTag() ? "a" : this.isImg() ? "img" : this.tagName || this.defaultTag()
            }
          }, {
            key: "type",
            value: function() {
              return this.content.type
            }
          }, {
            key: "isBox",
            value: function() {
              return !this.type() || "box" === this.type()
            }
          }, {
            key: "isText",
            value: function() {
              return "text" === this.type()
            }
          }, {
            key: "isImage",
            value: function() {
              return "image" === this.type()
            }
          }, {
            key: "isImg",
            value: function() {
              return "img" === this.type()
            }
          }, {
            key: "isIframe",
            value: function() {
              return "iframe" === this.type()
            }
          }, {
            key: "isInput",
            value: function() {
              return "input" === this.type()
            }
          }, {
            key: "isTextarea",
            value: function() {
              return "textarea" === this.type()
            }
          }, {
            key: "isButton",
            value: function() {
              return "button" === this.type()
            }
          }, {
            key: "isForm",
            value: function() {
              return "form" === this.type()
            }
          }, {
            key: "isIcon",
            value: function() {
              return "icon" === this.type() || "icon-fa" === this.type()
            }
          }, {
            key: "isIconFa",
            value: function() {
              return "icon-fa" === this.type()
            }
          }, {
            key: "isAnchor",
            value: function() {
              return this.content.href
            }
          }, {
            key: "isLink",
            value: function() {
              var t = this;
              return this.hasOwnProperty("action") && ["link", "anchorLink"].some((function(a) {
                return t.action && t.action.type === a
              }))
            }
          }, {
            key: "isLinkTag",
            value: function() {
              return this.isAnchor() || this.isLink()
            }
          }, {
            key: "isCloseLink",
            value: function() {
              return !(!this.action || !this.action.hasOwnProperty("type")) && "close" === this.action.type
            }
          }, {
            key: "isAnchorLink",
            value: function() {
              return !(!this.action || !this.action.hasOwnProperty("type")) && "anchorLink" === this.action.type
            }
          }, {
            key: "isPageLink",
            value: function() {
              return !(!this.action || !this.action.hasOwnProperty("type")) && "link" === this.action.type
            }
          }, {
            key: "isModalLink",
            value: function() {
              return !(!this.action || !this.action.hasOwnProperty("type")) && "modal" === this.action.type
            }
          }, {
            key: "isLinked",
            value: function() {
              return this.isAnchor || this.isPageLink || this.isModalLink || this.isCloseLink || this.isAnchorLink
            }
          }, {
            key: "defaultTag",
            value: function() {
              return this.isText() ? "p" : this.isBox() || this.isImage() ? "div" : this.isIcon() ? "i" : this.isInput() ? "input" : this.isTextarea() ? "textarea" : this.isButton() ? "button" : this.isForm() ? "form" : this.isIframe() ? "iframe" : "div"
            }
          }, {
            key: "iframeType",
            value: function() {
              if ("iframe" === this.type()) {
                var code = this.content.data,
                  t = "custom";
                return /https:\/\/www\.google\.com\/maps\/embed\?.*/.test(code) && (t = "googlemaps"), /https:\/\/www\.youtube(-nocookie)?\.com\/embed\/.*/.test(code) && (t = "youtube"), /https:\/\/open\.spotify\.com\/embed.*/.test(code) && (t = "spotify"), /https:\/\/player\.vimeo\.com\/video\/.*/.test(code) && (t = "vimeo"), /https:\/\/www\.figma\.com\/file\/.*/.test(code) && (t = "figma"), /https:\/\/xd\.adobe\.com\/embed\/.*/.test(code) && (t = "xd"), /\/\/codepen\.io\/.*/.test(code) && (t = "codepen"), /https:\/\/www\.slideshare\.net\/slideshow\/embed_code\/.*/.test(code) && (t = "slideshare"), t
              }
            }
          }, {
            key: "getStyle",
            value: function() {
              return this.style || {}
            }
          }, {
            key: "isFixed",
            value: function() {
              return "fixed" === this.getStyle().position
            }
          }, {
            key: "isAbsolute",
            value: function() {
              return "absolute" === this.getStyle().position
            }
          }, {
            key: "isFixedOrAbsolute",
            value: function() {
              return /fixed|absolute/.test(this.getStyle().position)
            }
          }, {
            key: "selectableTags",
            value: function() {
              return this.isLinkTag() ? [] : this.isText() ? F.text : this.isIcon() || this.isIconFa() ? F.icon : this.isForm() ? F.form : F.box
            }
          }], [{
            key: "tagList",
            value: function() {
              return F
            }
          }]), t
        }(),
        W = (n(316), function t(e) {
          var n = e.renderDom;
          Object(N.a)(this, t);
          var r = !0,
            o = !1,
            c = void 0;
          try {
            for (var l, d = n.defs[Symbol.iterator](); !(r = (l = d.next()).done); r = !0) {
              var f = l.value;
              switch (f.type) {
                case "method":
                  break;
                case "getter":
                  this.__defineGetter__(f.key, new Function(String(f.function)));
                  break;
                default:
                  this[f.key] = f.value
              }
            }
          } catch (t) {
            o = !0, c = t
          } finally {
            try {
              r || null == d.return || d.return()
            } finally {
              if (o) throw c
            }
          }
          for (var h in n.state) try {
            this[h] = n.state[h]
          } finally {}
          for (var m in n.props) {
            var v = n.props[m],
              y = n.parent && n.parent.rm && v.split(".").reduce((function(t, e) {
                return t && t[e]
              }), n.parent.rm);
            void 0 !== y && (this[m] = y)
          }
        });
      n(47), n(64);

      function H(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }

      function J(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? H(source, !0).forEach((function(e) {
            Object(l.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : H(source).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }

      function V(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }

      function G(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? V(source, !0).forEach((function(e) {
            Object(l.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : V(source).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      var K = ["", "box", "image", "button", "form"],
        Z = {
          box: "div",
          text: "p",
          image: "div",
          img: "img",
          icon: "i",
          "icon-fa": "i",
          textarea: "textarea",
          button: "button",
          form: "form",
          iframe: "iframe",
          component: "div",
          list: "ul",
          switch: "div"
        },
        Y = function() {
          function t(e) {
            var n = e.studioDom,
              r = e.parent,
              o = e.index,
              c = e.indexList,
              l = e.renderPage,
              d = e.renderSite,
              f = e.rssMap;
            Object(N.a)(this, t), this.studioDom = n, r && (this.parent = r), this.index = o || 0, this.indexList = c || [], l && (this.renderPage = l), d && (this.renderSite = d), f && (this.rssMap = f)
          }
          return Object(B.a)(t, [{
            key: "clone",
            value: function() {
              return new t({
                studioDom: this.studioDom,
                parent: this.parent
              })
            }
          }, {
            key: "hasSize",
            value: function() {
              var style = this.style;
              return style && style.width && "auto" !== style.width && style.height && "auto" !== style.height || !1
            }
          }, {
            key: "hasEffect",
            value: function() {
              if ("image" === this.studioDom.type) return !0;
              var style = this.style;
              return style && ["opacity", "margin", "padding", "background", "border", "borderLeft", "borderTop", "borderRight", "borderBottom", "borderRadius", "boxShadow"].some((function(param) {
                return void 0 !== style[param]
              })) || !1
            }
          }, {
            key: "firstChild",
            value: function() {
              return this.children[0]
            }
          }, {
            key: "toJsonDom",
            value: function() {
              return JSON.stringify(this.studioDom)
            }
          }, {
            key: "next",
            value: function(t) {
              return X(this, 1, t)
            }
          }, {
            key: "prev",
            value: function(t) {
              return X(this, -1, t)
            }
          }, {
            key: "hasStyle",
            value: function() {
              return Object.keys(this.style).length > 1
            }
          }, {
            key: "srcStudioDom",
            value: function() {
              return this.studioDom
            }
          }, {
            key: "srcUuid",
            value: function() {
              return this.uuid
            }
          }, {
            key: "studioDomIndex",
            value: function() {
              var t = this.parent && this.parent.studioDom.children;
              return t ? t.map((function(t) {
                return t.uuid
              })).indexOf(this.srcUuid()) : 0
            }
          }, {
            key: "canAdd",
            value: function() {
              var t = this;
              return K.some((function(e) {
                return e === t.contentType
              }))
            }
          }, {
            key: "copiedStudioDom",
            value: function() {
              return function t(e) {
                return J({}, e, {
                  uuid: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("").reduce((function(t, e) {
                    return t + ("x" === e ? Math.floor(16 * Math.random()).toString(16) : "y" === e ? Math.floor(4 * Math.random() + 8).toString(16) : e)
                  }), ""),
                  children: (e.children || []).map((function(e) {
                    return t(e)
                  }))
                })
              }(JSON.parse(JSON.stringify(this.studioDom)))
            }
          }, {
            key: "conditionalStyle",
            value: function(t) {
              var style = this.style;
              return t.reduceRight((function(t, e) {
                return G({}, t, {}, style[e])
              }), style)
            }
          }, {
            key: "getStudioDom",
            value: function() {
              return new U(this.studioDom)
            }
          }, {
            key: "checkAncestors",
            value: function(t) {
              return !this.isRoot && function e(n) {
                return t(n) || !n.isRoot && e(n.parent)
              }(this.parent)
            }
          }, {
            key: "myListContainer",
            value: function() {
              return !this.isRoot && function t(e) {
                return e.isList ? e : !e.isRoot && t(e.parent)
              }(this.parent)
            }
          }, {
            key: "children",
            get: function() {
              var e = this,
                n = this.studioDom.children || [];
              switch (this.type) {
                case "list":
                  if (!this.rm || !n[0]) return [];
                  var r = this.rm,
                    o = r.list,
                    l = r.maxLength,
                    d = Array.isArray(o) ? o : [],
                    f = Number(l);
                  return (isNaN(f) ? d : d.slice(0, Math.max(1, f))).map((function(r, o) {
                    return new t({
                      studioDom: n[0],
                      parent: e,
                      index: o,
                      indexList: [].concat(Object(c.a)(e.indexList), [o])
                    })
                  }));
                case "switch":
                  return this.rm && this.rm.condition ? [new t({
                    studioDom: n[0],
                    parent: this,
                    indexList: this.indexList
                  })] : [];
                default:
                  return n.map((function(n, r) {
                    return new t({
                      studioDom: n,
                      parent: e,
                      index: r,
                      indexList: e.indexList
                    })
                  }))
              }
            }
          }, {
            key: "rm",
            get: function() {
              return this.isRoot ? {
                $site: this.renderSite && this.renderSite.rm,
                $page: this.renderPage && this.renderPage.rm,
                $rss: this.rssMap
              } : this.isComponent || this.isList || this.isListItem || this.isSwitch ? new W({
                renderDom: this
              }) : this.isSwitchItem ? this.parent && this.parent.parent && this.parent.parent.rm : this.parent && this.parent.rm
            }
          }, {
            key: "defs",
            get: function() {
              return this.isSwitch ? [{
                key: "condition",
                type: "boolean",
                uid: "switch_condition"
              }] : this.isList ? [{
                key: "list",
                type: "array",
                uid: "list_list"
              }] : this.studioDom.defs || []
            }
          }, {
            key: "renderId",
            get: function() {
              return this.indexList.map((function(i) {
                return "".concat(i, "_")
              })).join("") + this.studioDom.uuid
            }
          }, {
            key: "id",
            get: function() {
              return this.studioDom.id || ""
            }
          }, {
            key: "isRoot",
            get: function() {
              return !this.parent
            }
          }, {
            key: "uuid",
            get: function() {
              return this.studioDom.uuid || ""
            }
          }, {
            key: "parentRenderId",
            get: function() {
              return this.parent && this.parent.renderId || void 0
            }
          }, {
            key: "action",
            get: function() {
              return G({
                type: "",
                val: ""
              }, this.studioDom.action)
            }
          }, {
            key: "content",
            get: function() {
              return G({
                type: ""
              }, this.studioDom.content)
            }
          }, {
            key: "contentType",
            get: function() {
              return this.content.type || "box"
            }
          }, {
            key: "type",
            get: function() {
              return this.studioDom.type || "box"
            }
          }, {
            key: "style",
            get: function() {
              return this.studioDom.style || {}
            }
          }, {
            key: "isSwitch",
            get: function() {
              return "switch" === this.type
            }
          }, {
            key: "isSwitchItem",
            get: function() {
              return this.parent && "switch" === this.parent.type || !1
            }
          }, {
            key: "isList",
            get: function() {
              return "list" === this.type
            }
          }, {
            key: "isListItem",
            get: function() {
              return this.parent && "list" === this.parent.type || !1
            }
          }, {
            key: "isOwnList",
            get: function() {
              return this.isList && !this.props.list
            }
          }, {
            key: "isComponent",
            get: function() {
              return "component" === this.type
            }
          }, {
            key: "props",
            get: function() {
              return this.studioDom.props || {}
            }
          }, {
            key: "state",
            get: function() {
              if (this.isListItem) {
                var t = this.indexList[0];
                return G({}, this.parent && this.parent.rm && this.parent.rm.list[t], {}, this.studioDom.state)
              }
              return this.studioDom.state || {}
            }
          }, {
            key: "tag",
            get: function() {
              return this.studioDom.tagName || Z[this.contentType] || "div"
            }
          }, {
            key: "position",
            get: function() {
              return this.style && this.style.position || "relative"
            }
          }, {
            key: "hasChildren",
            get: function() {
              return this.children.length > 0
            }
          }, {
            key: "scopeRoot",
            get: function() {
              return this.isRoot ? this : function t(e) {
                return e.isRoot ? e : e.isComponent || e.isList || e.isListItem || e.isSwitch ? e : (e.isSwitchItem && t(e.parent && e.parent.parent), t(e.parent))
              }(this.parent)
            }
          }, {
            key: "isLayer",
            get: function() {
              var style = this.style;
              return style && /fixed|absolute/.test(String(style.position)) || !1
            }
          }]), t
        }(),
        X = function(t, e, n) {
          if (t.parent) {
            var r = t.index + e,
              o = t.parent.children;
            if (!n) {
              var c = o.length;
              r = (r + c) % c
            }
            return o[r]
          }
        },
        Q = {
          opacity: 1,
          transform: "none"
        },
        tt = r.default.extend({
          name: "DesignCanvasModal",
          components: {
            RenderDomRenderer: j
          },
          props: {
            rootOptions: {
              type: Object,
              required: !0
            },
            page: {
              type: Object,
              required: !0
            },
            rssMap: {
              type: Object,
              required: !1,
              default: void 0
            }
          },
          computed: {
            rootRenderDom: function() {
              var t = this.page.view;
              return new Y({
                studioDom: t,
                rssMap: this.rssMap
              })
            },
            background: function() {
              return this.page.view.style && this.page.view.style.background || null
            },
            transition: function() {
              var t = this.page.view.transition;
              return t || Q
            },
            isNone: function() {
              var t = this;
              return Object.keys(Q).every((function(e) {
                return t.transition[e] === Q[e]
              }))
            },
            base: function() {
              return this.$refs.base
            },
            canvas: function() {
              return this.$refs.canvas
            }
          },
          mounted: function() {
            var t = this;
            this.updateTransition(this.transition), requestAnimationFrame((function() {
              t.updateTransition(Q)
            }))
          },
          beforeDestroy: function() {
            this.updateTransition(this.transition)
          },
          methods: {
            updateTransition: function(t) {
              this.base.style.opacity = this.canvas.style.opacity = String(t.opacity), this.canvas.style.transform = t.transform
            },
            offModal: function() {
              this.$store.dispatch("product/popModal")
            }
          }
        }),
        et = (n(318), Object(m.a)(tt, (function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "design-canvas__modal",
            class: {
              isNone: this.isNone
            }
          }, [e("div", {
            ref: "base",
            staticClass: "design-canvas__modal__base",
            style: {
              background: this.background
            },
            on: {
              click: this.offModal
            }
          }), this._v(" "), e("div", {
            ref: "canvas",
            staticClass: "studio-canvas"
          }, [e("RenderDomRenderer", {
            attrs: {
              view: this.rootRenderDom,
              rootOptions: this.rootOptions
            }
          })], 1)])
        }), [], !1, null, null, null).exports),
        nt = [function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("p", [this._v("\n      Designed with\n      "), e("img", {
            attrs: {
              src: n(320)
            }
          })])
        }],
        it = r.default.extend({
          name: "StudioBanner",
          computed: {
            href: function() {
              var t = document.domain + location.pathname;
              return "https://studio.design/?utm_source=".concat(t, "&utm_medium=STUDIO%20Banner&utm_campaign=STUDIO%20Banner")
            }
          }
        }),
        ot = (n(321), Object(m.a)(it, (function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "studio__banner"
          }, [e("a", {
            staticClass: "logo",
            attrs: {
              href: this.href,
              target: "_blank"
            }
          }, [this._m(0)])])
        }), nt, !1, null, "1df1af0a", null).exports),
        at = r.default.extend({
          name: "TypeSquareController",
          props: {
            fonts: {
              type: Array,
              required: !0
            },
            selectedPage: {
              type: Object,
              required: !0
            },
            modalPages: {
              type: Array,
              required: !0
            }
          },
          computed: {
            viewList: function() {
              var t = [];
              return [].concat(Object(c.a)(this.modalPages), [this.selectedPage]).forEach((function(e) {
                return function e(view) {
                  t.push(view), (view.children || []).forEach((function(t) {
                    return e(t)
                  }))
                }(e.view)
              })), t
            },
            tsFonts: function() {
              return (this.fonts || []).filter((function(t) {
                return "typesquare" === t.vendor
              })).map((function(t) {
                return t.family
              }))
            },
            tsText: function() {
              var t = this;
              return this.viewList.filter((function(view) {
                return view.content && "text" === view.content.type && view.style && void 0 !== view.style.fontFamily || !1
              })).filter((function(view) {
                return t.tsFonts.includes(view.style.fontFamily.replace(/'/g, ""))
              })).map((function(view) {
                return "".concat(view.style.fontFamily).concat(view.content.data)
              })).join("")
            }
          },
          watch: {
            tsText: {
              handler: function() {
                this.loadTsFont()
              }
            }
          },
          mounted: function() {
            this.loadTsFont()
          },
          methods: {
            loadTsFont: function() {
              var t = window.Ts;
              t && (t.loadFont(), document.querySelectorAll("input, textarea").forEach((function(t) {
                "ts-unused" === t.style.fontFamily && (t.style.fontFamily = "")
              })))
            }
          }
        }),
        st = Object(m.a)(at, (function() {
          var t = this.$createElement;
          return (this._self._c || t)("div")
        }), [], !1, null, null, null).exports,
        ct = r.default.extend({
          components: {
            RenderDomRenderer: j,
            PublishStudioStyle: z,
            StudioBanner: ot,
            DesignCanvasModal: et,
            TypeSquareController: st
          },
          props: {
            isPreview: {
              type: Boolean,
              required: !0
            },
            basePath: {
              type: String,
              required: !0
            },
            displayBadge: {
              type: Boolean,
              required: !0
            },
            selectedPage: {
              type: Object,
              required: !0
            },
            rssMap: {
              type: Object,
              required: !1,
              default: void 0
            }
          },
          computed: {
            canLazyload: function() {
              return !this.isPreview && "IntersectionObserver" in window
            },
            rootRenderDom: function() {
              return new Y({
                studioDom: this.selectedPage.view,
                rssMap: this.rssMap
              })
            },
            rootOptions: function() {
              var t = this;
              return {
                isPreview: this.isPreview,
                basePath: this.basePath,
                resources: this.$store.getters["product/product"].resources,
                projectId: this.$store.getters["project/project"].id,
                popModal: function() {
                  return t.$store.dispatch("product/popModal")
                },
                pushModal: function(e) {
                  var n = e.id;
                  return t.$store.dispatch("product/pushModal", {
                    id: n
                  })
                },
                prefetchModal: function(e) {
                  var n = e.id;
                  return t.$store.dispatch("product/prefetchModal", {
                    id: n
                  })
                },
                prefetchPage: function(e) {
                  var path = e.path;
                  return t.$store.dispatch("product/prefetchPage", {
                    path: path
                  })
                },
                canLazyload: this.canLazyload
              }
            },
            modalPages: function() {
              return this.$store.getters["product/modalPages"]
            },
            breakPoints: function() {
              return this.$store.getters["product/breakPoints"]
            },
            fonts: function() {
              return this.$store.getters["product/fonts"]
            },
            hasTypeSquare: function() {
              return this.fonts.some((function(t) {
                return "typesquare" === t.vendor
              }))
            }
          },
          beforeMount: function() {
            var t = this;
            this.$store.dispatch("device/setInnerSize", {
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight
            }), this.$store.dispatch("device/setPixelRatio", {
              pixelRatio: window.devicePixelRatio
            }), window.addEventListener("resize", (function() {
              t.$store.dispatch("device/setInnerSize", {
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
              })
            })), window.matchMedia("screen and (min-resolution: 2dppx)").addListener((function() {
              t.$store.dispatch("device/setPixelRatio", {
                pixelRatio: window.devicePixelRatio
              })
            }))
          },
          mounted: function() {
            history.scrollRestoration = "manual"
          }
        }),
        ut = (n(323), Object(m.a)(ct, (function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", {
            staticClass: "StudioCanvas"
          }, [n("transition-group", {
            staticClass: "modals"
          }, t._l(t.modalPages, (function(e) {
            return n("DesignCanvasModal", {
              key: e.uuid,
              attrs: {
                page: e,
                rssMap: t.rssMap,
                rootOptions: Object.assign({}, t.rootOptions, {
                  canLazyload: !1
                })
              }
            })
          })), 1), t._v(" "), n("RenderDomRenderer", {
            attrs: {
              view: t.rootRenderDom,
              rootOptions: t.rootOptions
            }
          }), t._v(" "), n("PublishStudioStyle", {
            attrs: {
              view: t.selectedPage.view,
              breakPoints: t.breakPoints
            }
          }), t._v(" "), t._l(t.modalPages, (function(e) {
            return n("PublishStudioStyle", {
              key: e.uuid,
              attrs: {
                view: e.view,
                breakPoints: t.breakPoints,
                isModal: !0
              }
            })
          })), t._v(" "), t.displayBadge ? n("StudioBanner") : t._e(), t._v(" "), t.hasTypeSquare ? n("TypeSquareController", {
            attrs: {
              fonts: t.fonts,
              selectedPage: t.selectedPage,
              modalPages: t.modalPages
            }
          }) : t._e()], 2)
        }), [], !1, null, null, null));
      e.a = ut.exports
    },
    172: function(t, e, n) {
      "use strict";
      var r = n(0).default.extend({
          name: "FormMessage"
        }),
        o = (n(281), n(2)),
        component = Object(o.a)(r, (function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("client-only", [n("div", {
            staticClass: "form-messages"
          }, [n("notifications", {
            attrs: {
              group: "form-error-message",
              position: "top center",
              width: "380px",
              duration: 2e3,
              "animation-name": "form"
            },
            scopedSlots: t._u([{
              key: "body",
              fn: function(e) {
                return [n("div", {
                  staticClass: "form-message"
                }, [n("i", {
                  staticClass: "error"
                }), n("div", {
                  staticClass: "error-message",
                  domProps: {
                    innerHTML: t._s(e.item.text)
                  }
                })])]
              }
            }])
          }), n("notifications", {
            attrs: {
              group: "form-success-message",
              position: "top center",
              width: "380px",
              duration: 2e3,
              "animation-name": "form"
            },
            scopedSlots: t._u([{
              key: "body",
              fn: function(e) {
                return [n("div", {
                  staticClass: "form-message"
                }, [n("i", {
                  staticClass: "success"
                }), n("div", {
                  staticClass: "success-message",
                  domProps: {
                    innerHTML: t._s(e.item.text)
                  }
                })])]
              }
            }])
          })], 1)])
        }), [], !1, null, null, null);
      e.a = component.exports
    },
    210: function(t, e, n) {
      "use strict";
      n(18);
      var r = n(14),
        o = n.n(r);
      o.a.defaults.withCredentials = !0, e.a = {
        getToken: function(t) {
          return o.a.post("".concat("https://api.studio.design/api", "/v2/previews/").concat(t, "/token"))
        },
        postForm: function(t) {
          var e = t.projectId,
            n = t.formObject;
          return o.a.post("".concat("https://api.studio.design/api", "/v2/projects/").concat(e, "/form"), n)
        }
      }
    },
    258: function(t, e) {},
    260: function(t, e, n) {
      t.exports = n(261)
    },
    261: function(t, e, n) {
      "use strict";
      n.r(e),
        function(t) {
          n(10), n(45), n(54), n(18), n(19), n(15), n(83), n(21), n(62), n(51), n(27), n(11), n(22), n(97), n(28), n(98), n(16), n(32);
          var e = n(57),
            r = (n(50), n(137), n(268), n(274), n(275), n(0)),
            o = n(253),
            c = n(167),
            l = n(3),
            d = n(66),
            f = n(121);
          r.default.component(f.a.name, f.a), r.default.component("NLink", f.a), t.fetch || (t.fetch = o.a);
          var h, m, v = [],
            y = window.__NUXT__ || {};
          Object.assign(r.default.config, {
            silent: !0,
            performance: !1
          });
          var x = r.default.config.errorHandler || console.error;

          function w(t, e, n) {
            var r = function(component) {
              var t = function(component, t) {
                if (!component || !component.options || !component.options[t]) return {};
                var option = component.options[t];
                if ("function" == typeof option) {
                  for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
                  return option.apply(void 0, n)
                }
                return option
              }(component, "transition", e, n) || {};
              return "string" == typeof t ? {
                name: t
              } : t
            };
            return t.map((function(t) {
              var e = Object.assign({}, r(t));
              if (n && n.matched.length && n.matched[0].components.default) {
                var o = r(n.matched[0].components.default);
                Object.keys(o).filter((function(t) {
                  return o[t] && t.toLowerCase().includes("leave")
                })).forEach((function(t) {
                  e[t] = o[t]
                }))
              }
              return e
            }))
          }

          function k(t, e, n) {
            this._pathChanged = Boolean(h.nuxt.err) || e.path !== t.path, this._queryChanged = JSON.stringify(t.query) !== JSON.stringify(e.query), this._diffQuery = this._queryChanged ? Object(l.g)(t.query, e.query) : [];
            try {
              n()
            } catch (l) {
              var r = l || {},
                o = r.statusCode || r.status || r.response && r.response.status || 500,
                c = r.message || "";
              if (/^Loading( CSS)? chunk (\d)+ failed\./.test(c)) return void window.location.reload(!0);
              this.error({
                statusCode: o,
                message: c
              }), this.$nuxt.$emit("routeChanged", t, e, r), n()
            }
          }

          function O(t, e) {
            return y.serverRendered && e && Object(l.a)(t, e), t._Ctor = t, t
          }

          function j(t) {
            var path = Object(l.d)(t.options.base, t.options.mode);
            return Object(l.c)(t.match(path), (function(t, e, n, r, o) {
              var c;
              return regeneratorRuntime.async((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if ("function" != typeof t || t.options) {
                      e.next = 4;
                      break
                    }
                    return e.next = 3, regeneratorRuntime.awrap(t());
                  case 3:
                    t = e.sent;
                  case 4:
                    return c = O(Object(l.m)(t), y.data ? y.data[o] : null), n.components[r] = c, e.abrupt("return", c);
                  case 7:
                  case "end":
                    return e.stop()
                }
              }))
            }))
          }

          function _(t, e, n) {
            var r = this,
              o = [],
              d = !1;
            if (void 0 !== n && (o = [], (n = Object(l.m)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function(t) {
                t.options.middleware && (o = o.concat(t.options.middleware))
              }))), o = o.map((function(t) {
                return "function" == typeof t ? t : ("function" != typeof c.a[t] && (d = !0, r.error({
                  statusCode: 500,
                  message: "Unknown middleware " + t
                })), c.a[t])
              })), !d) return Object(l.j)(o, e)
          }

          function P(t, e, n) {
            var r, o, c, f, m, y, x, k, O, j, P, S, C, I, T, R, D, L = this;
            return regeneratorRuntime.async((function($) {
              for (;;) switch ($.prev = $.next) {
                case 0:
                  if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                    $.next = 2;
                    break
                  }
                  return $.abrupt("return", n());
                case 2:
                  return t === e ? v = [] : (r = [], v = Object(l.e)(e, r).map((function(t, i) {
                    return Object(l.b)(e.matched[r[i]].path)(e.params)
                  }))), o = !1, c = function(path) {
                    o || (o = !0, n(path))
                  }, $.next = 7, regeneratorRuntime.awrap(Object(l.n)(h, {
                    route: t,
                    from: e,
                    next: c.bind(this)
                  }));
                case 7:
                  if (this._dateLastError = h.nuxt.dateErr, this._hadError = Boolean(h.nuxt.err), f = [], (m = Object(l.e)(t, f)).length) {
                    $.next = 25;
                    break
                  }
                  return $.next = 14, regeneratorRuntime.awrap(_.call(this, m, h.context));
                case 14:
                  if (!o) {
                    $.next = 16;
                    break
                  }
                  return $.abrupt("return");
                case 16:
                  return $.next = 18, regeneratorRuntime.awrap(this.loadLayout("function" == typeof d.a.layout ? d.a.layout(h.context) : d.a.layout));
                case 18:
                  return y = $.sent, $.next = 21, regeneratorRuntime.awrap(_.call(this, m, h.context, y));
                case 21:
                  if (!o) {
                    $.next = 23;
                    break
                  }
                  return $.abrupt("return");
                case 23:
                  return h.context.error({
                    statusCode: 404,
                    message: "This page could not be found"
                  }), $.abrupt("return", n());
                case 25:
                  return m.forEach((function(t) {
                    t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                  })), this.setTransitions(w(m, t, e)), $.prev = 27, $.next = 30, regeneratorRuntime.awrap(_.call(this, m, h.context));
                case 30:
                  if (!o) {
                    $.next = 32;
                    break
                  }
                  return $.abrupt("return");
                case 32:
                  if (!h.context._errored) {
                    $.next = 34;
                    break
                  }
                  return $.abrupt("return", n());
                case 34:
                  return "function" == typeof(x = m[0].options.layout) && (x = x(h.context)), $.next = 38, regeneratorRuntime.awrap(this.loadLayout(x));
                case 38:
                  return x = $.sent, $.next = 41, regeneratorRuntime.awrap(_.call(this, m, h.context, x));
                case 41:
                  if (!o) {
                    $.next = 43;
                    break
                  }
                  return $.abrupt("return");
                case 43:
                  if (!h.context._errored) {
                    $.next = 45;
                    break
                  }
                  return $.abrupt("return", n());
                case 45:
                  k = !0, $.prev = 46, O = !0, j = !1, P = void 0, $.prev = 50, S = m[Symbol.iterator]();
                case 52:
                  if (O = (C = S.next()).done) {
                    $.next = 64;
                    break
                  }
                  if ("function" == typeof(I = C.value).options.validate) {
                    $.next = 56;
                    break
                  }
                  return $.abrupt("continue", 61);
                case 56:
                  return $.next = 58, regeneratorRuntime.awrap(I.options.validate(h.context));
                case 58:
                  if (k = $.sent) {
                    $.next = 61;
                    break
                  }
                  return $.abrupt("break", 64);
                case 61:
                  O = !0, $.next = 52;
                  break;
                case 64:
                  $.next = 70;
                  break;
                case 66:
                  $.prev = 66, $.t0 = $.catch(50), j = !0, P = $.t0;
                case 70:
                  $.prev = 70, $.prev = 71, O || null == S.return || S.return();
                case 73:
                  if ($.prev = 73, !j) {
                    $.next = 76;
                    break
                  }
                  throw P;
                case 76:
                  return $.finish(73);
                case 77:
                  return $.finish(70);
                case 78:
                  $.next = 84;
                  break;
                case 80:
                  return $.prev = 80, $.t1 = $.catch(46), this.error({
                    statusCode: $.t1.statusCode || "500",
                    message: $.t1.message
                  }), $.abrupt("return", n());
                case 84:
                  if (k) {
                    $.next = 87;
                    break
                  }
                  return this.error({
                    statusCode: 404,
                    message: "This page could not be found"
                  }), $.abrupt("return", n());
                case 87:
                  return $.next = 89, regeneratorRuntime.awrap(Promise.all(m.map((function(n, i) {
                    if (n._path = Object(l.b)(t.matched[f[i]].path)(t.params), n._dataRefresh = !1, L._pathChanged && L._queryChanged || n._path !== v[i]) n._dataRefresh = !0;
                    else if (!L._pathChanged && L._queryChanged) {
                      var r = n.options.watchQuery;
                      !0 === r ? n._dataRefresh = !0 : Array.isArray(r) ? n._dataRefresh = r.some((function(t) {
                        return L._diffQuery[t]
                      })) : "function" == typeof r && (T || (T = Object(l.f)(t)), n._dataRefresh = r.apply(T[i], [t.query, e.query]))
                    }
                    if (L._hadError || !L._isMounted || n._dataRefresh) {
                      var o = [],
                        c = n.options.asyncData && "function" == typeof n.options.asyncData,
                        d = Boolean(n.options.fetch);
                      if (c) {
                        var m = Object(l.l)(n.options.asyncData, h.context).then((function(t) {
                          Object(l.a)(n, t)
                        }));
                        o.push(m)
                      }
                      if (L.$loading.manual = !1 === n.options.loading, d) {
                        var p = n.options.fetch(h.context);
                        p && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {})), o.push(p)
                      }
                      return Promise.all(o)
                    }
                  }))));
                case 89:
                  o || n(), $.next = 106;
                  break;
                case 92:
                  if ($.prev = 92, $.t2 = $.catch(27), "ERR_REDIRECT" !== (R = $.t2 || {}).message) {
                    $.next = 97;
                    break
                  }
                  return $.abrupt("return", this.$nuxt.$emit("routeChanged", t, e, R));
                case 97:
                  return v = [], Object(l.i)(R), "function" == typeof(D = d.a.layout) && (D = D(h.context)), $.next = 103, regeneratorRuntime.awrap(this.loadLayout(D));
                case 103:
                  this.error(R), this.$nuxt.$emit("routeChanged", t, e, R), n();
                case 106:
                case "end":
                  return $.stop()
              }
            }), null, this, [
              [27, 92],
              [46, 80],
              [50, 66, 70, 78],
              [71, , 73, 77]
            ])
          }

          function S(t, n) {
            Object(l.c)(t, (function(t, n, o, c) {
              return "object" !== Object(e.a)(t) || t.options || ((t = r.default.extend(t))._Ctor = t, o.components[c] = t), t
            }))
          }

          function C(t) {
            this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
            var e = this.$options.nuxt.err ? d.a.layout : t.matched[0].components.default.options.layout;
            "function" == typeof e && (e = e(h.context)), this.setLayout(e)
          }

          function I(t, e) {
            var n = this;
            if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
              var o = Object(l.f)(t),
                c = Object(l.e)(t);
              r.default.nextTick((function() {
                o.forEach((function(t, i) {
                  if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                    var e = t.constructor.options.data.call(t);
                    for (var n in e) r.default.set(t.$data, n, e[n]);
                    window.$nuxt.$nextTick((function() {
                      window.$nuxt.$emit("triggerScroll")
                    }))
                  }
                })), C.call(n, t)
              }))
            }
          }

          function T(t) {
            window.onNuxtReadyCbs.forEach((function(e) {
              "function" == typeof e && e(t)
            })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), m.afterEach((function(e, n) {
              r.default.nextTick((function() {
                return t.$nuxt.$emit("routeChanged", e, n)
              }))
            }))
          }
          Object(d.b)().then((function(t) {
            var e, n, o, c, d;
            return regeneratorRuntime.async((function(f) {
              for (;;) switch (f.prev = f.next) {
                case 0:
                  return h = t.app, m = t.router, t.store, e = new r.default(h), n = y.layout || "default", f.next = 7, regeneratorRuntime.awrap(e.loadLayout(n));
                case 7:
                  return e.setLayout(n), o = function() {
                    e.$mount("#__nuxt"), m.afterEach(S), m.afterEach(I.bind(e)), r.default.nextTick((function() {
                      T(e)
                    }))
                  }, f.next = 11, regeneratorRuntime.awrap(Promise.all(j(m)));
                case 11:
                  if (c = f.sent, e.setTransitions = e.$options.nuxt.setTransitions.bind(e), c.length && (e.setTransitions(w(c, m.currentRoute)), v = m.currentRoute.matched.map((function(t) {
                      return Object(l.b)(t.path)(m.currentRoute.params)
                    }))), e.$loading = {}, y.error && e.error(y.error), m.beforeEach(k.bind(e)), m.beforeEach(P.bind(e)), !y.serverRendered) {
                    f.next = 21;
                    break
                  }
                  return o(), f.abrupt("return");
                case 21:
                  d = function() {
                    S(m.currentRoute, m.currentRoute), C.call(e, m.currentRoute), o()
                  }, P.call(e, m.currentRoute, m.currentRoute, (function(path) {
                    if (path) {
                      var t = m.afterEach((function(e, n) {
                        t(), d()
                      }));
                      m.push(path, void 0, (function(t) {
                        t && x(t)
                      }))
                    } else d()
                  }));
                case 23:
                case "end":
                  return f.stop()
              }
            }))
          })).catch(x)
        }.call(this, n(17))
    },
    281: function(t, e, n) {
      "use strict";
      var r = n(109);
      n.n(r).a
    },
    282: function(t, e, n) {
      e = t.exports = n(41)(!1);
      var r = n(283),
        o = r(n(284)),
        c = r(n(285));
      e.push([t.i, ".notifications .notification-wrapper{overflow:visible}.notifications .form-message{overflow:visible;margin:10px;width:calc(100% - 20px);-webkit-transition:.5s cubic-bezier(.4,.4,0,1);transition:.5s cubic-bezier(.4,.4,0,1);box-shadow:0 0 15px rgba(0,0,0,.14);border-radius:6px;background-color:#fff;padding:15px;-webkit-box-align:center;align-items:center;align-content:center;-webkit-box-pack:left;justify-content:left;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-transition:.4s linear;transition:.4s linear}.notifications .form-message i{width:16px;height:16px;border-radius:50%;background-repeat:no-repeat;background-position:50%;margin-right:10px}.notifications .form-message i.error{background-color:#fd5c5c;background-image:url(" + o + ")}.notifications .form-message i.success{background-color:#67c23a;background-image:url(" + c + ")}.notifications .form-message div{letter-spacing:0;line-height:1;font-size:14px}.notifications .form-message div.error-message{color:red}.notifications .form-message div.success-message{color:#67c23a}.notifications .form-enter-active,.notifications .form-leave-active{-webkit-transition:.5s cubic-bezier(.4,.4,0,1);transition:.5s cubic-bezier(.4,.4,0,1)}.notifications .form-enter,.notifications .form-leave-to{-webkit-transform:translateY(-60px);transform:translateY(-60px);opacity:0}", ""])
    },
    284: function(t, e) {
      t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCAwTDYgNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49ImJldmVsIi8+CjxwYXRoIGQ9Ik02IDBMMCA2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0iYmV2ZWwiLz4KPC9zdmc+Cg=="
    },
    285: function(t, e) {
      t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCAyLjY2NjY3TDIgNC42NjY2N0w1LjMzMzMzIDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMzMzNSAyKSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
    },
    3: function(t, e, n) {
      "use strict";
      n.d(e, "i", (function() {
        return h
      })), n.d(e, "a", (function() {
        return m
      })), n.d(e, "m", (function() {
        return v
      })), n.d(e, "e", (function() {
        return y
      })), n.d(e, "f", (function() {
        return x
      })), n.d(e, "c", (function() {
        return w
      })), n.d(e, "h", (function() {
        return O
      })), n.d(e, "n", (function() {
        return j
      })), n.d(e, "j", (function() {
        return _
      })), n.d(e, "l", (function() {
        return P
      })), n.d(e, "d", (function() {
        return S
      })), n.d(e, "b", (function() {
        return C
      })), n.d(e, "g", (function() {
        return I
      })), n.d(e, "k", (function() {
        return T
      }));
      n(10), n(18), n(19), n(15), n(206), n(63), n(21), n(55), n(85), n(208), n(47), n(51), n(34), n(35), n(36), n(37), n(27), n(11), n(140), n(22), n(64), n(28), n(276), n(43), n(141), n(56), n(279), n(16), n(32);
      var r = n(49),
        o = n(57),
        c = (n(50), n(4)),
        l = n(0);

      function d(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }

      function f(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? d(source, !0).forEach((function(e) {
            Object(c.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(source).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }

      function h(t) {
        l.default.config.errorHandler && l.default.config.errorHandler(t)
      }

      function m(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n = t.options._originDataFn || t.options.data || function() {
            return {}
          };
          t.options._originDataFn = n, t.options.data = function() {
            var data = n.call(this, this);
            return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), f({}, data, {}, e)
          }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
        }
      }

      function v(t) {
        return t.options && t._Ctor === t ? t : (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = l.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file), t)
      }

      function y(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
        return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
          return Object.keys(t[n]).map((function(o) {
            return e && e.push(r), t[n][o]
          }))
        })))
      }

      function x(t) {
        return y(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
      }

      function w(t, e) {
        return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
          return Object.keys(t.components).reduce((function(r, o) {
            return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
          }), [])
        })))
      }

      function k(t, e) {
        return Promise.all(w(t, (function(t, n, r, o) {
          return regeneratorRuntime.async((function(c) {
            for (;;) switch (c.prev = c.next) {
              case 0:
                if ("function" != typeof t || t.options) {
                  c.next = 4;
                  break
                }
                return c.next = 3, regeneratorRuntime.awrap(t());
              case 3:
                t = c.sent;
              case 4:
                return r.components[o] = t = v(t), c.abrupt("return", "function" == typeof e ? e(t, n, r, o) : t);
              case 6:
              case "end":
                return c.stop()
            }
          }))
        })))
      }

      function O(t) {
        return regeneratorRuntime.async((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (t) {
                e.next = 2;
                break
              }
              return e.abrupt("return");
            case 2:
              return e.next = 4, regeneratorRuntime.awrap(k(t));
            case 4:
              return e.abrupt("return", f({}, t, {
                meta: y(t).map((function(e, n) {
                  return f({}, e.options.meta, {}, (t.matched[n] || {}).meta)
                }))
              }));
            case 5:
            case "end":
              return e.stop()
          }
        }))
      }

      function j(t, e) {
        var n, c, l, d;
        return regeneratorRuntime.async((function(f) {
          for (;;) switch (f.prev = f.next) {
            case 0:
              return t.context || (t.context = {
                isStatic: !1,
                isDev: !1,
                isHMR: !1,
                app: t,
                store: t.store,
                payload: e.payload,
                error: e.error,
                base: "/",
                env: {
                  apiBaseUrl: "https://api.studio.design/api",
                  previewBaseUrl: "https://preview.studio.design",
                  facebookAppId: "569471266584583",
                  firebaseApiKey: "AIzaSyBkjSUz89vvvl35U-EErvfHXLhsDakoNNg",
                  firebaseAuthDomain: "studio-7e371.firebaseapp.com",
                  firebaseDatabaseURL: "https://studio-7e371.firebaseio.com",
                  firebaseStorageBucket: "studio-7e371.appspot.com",
                  firebaseMessagingSenderId: "373326844567",
                  studioDomain: ".studio.design",
                  googleAnalyticsTrackingID: "UA-90080275-5"
                }
              }, e.req && (t.context.req = e.req), e.res && (t.context.res = e.res), e.ssrContext && (t.context.ssrContext = e.ssrContext), t.context.redirect = function(e, path, n) {
                if (e) {
                  t.context._redirected = !0;
                  var r = Object(o.a)(path);
                  if ("number" == typeof e || "undefined" !== r && "object" !== r || (n = path || {}, path = e, r = Object(o.a)(path), e = 302), "object" === r && (path = t.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = E(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                  t.context.next({
                    path: path,
                    query: n,
                    status: e
                  })
                }
              }, t.context.nuxtState = window.__NUXT__), f.next = 3, regeneratorRuntime.awrap(Promise.all([O(e.route), O(e.from)]));
            case 3:
              n = f.sent, c = Object(r.a)(n, 2), l = c[0], d = c[1], e.route && (t.context.route = l), e.from && (t.context.from = d), t.context.next = e.next, t.context._redirected = !1, t.context._errored = !1, t.context.isHMR = !1, t.context.params = t.context.route.params || {}, t.context.query = t.context.route.query || {};
            case 15:
            case "end":
              return f.stop()
          }
        }))
      }

      function _(t, e) {
        return !t.length || e._redirected || e._errored ? Promise.resolve() : P(t[0], e).then((function() {
          return _(t.slice(1), e)
        }))
      }

      function P(t, e) {
        var n;
        return (n = 2 === t.length ? new Promise((function(n) {
          t(e, (function(t, data) {
            t && e.error(t), n(data = data || {})
          }))
        })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
      }

      function S(base, t) {
        var path = decodeURI(window.location.pathname);
        return "hash" === t ? window.location.hash.replace(/^#\//, "") : (base && 0 === path.indexOf(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash)
      }

      function C(t, e) {
        return function(t) {
          for (var e = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(o.a)(t[i]) && (e[i] = new RegExp("^(?:" + t[i].pattern + ")$"));
          return function(n, r) {
            for (var path = "", data = n || {}, o = (r || {}).pretty ? D : encodeURIComponent, c = 0; c < t.length; c++) {
              var l = t[c];
              if ("string" != typeof l) {
                var d = data[l.name || "pathMatch"],
                  f = void 0;
                if (null == d) {
                  if (l.optional) {
                    l.partial && (path += l.prefix);
                    continue
                  }
                  throw new TypeError('Expected "' + l.name + '" to be defined')
                }
                if (Array.isArray(d)) {
                  if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                  if (0 === d.length) {
                    if (l.optional) continue;
                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                  }
                  for (var h = 0; h < d.length; h++) {
                    if (f = o(d[h]), !e[c].test(f)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`");
                    path += (0 === h ? l.prefix : l.delimiter) + f
                  }
                } else {
                  if (f = l.asterisk ? D(d, !0) : o(d), !e[c].test(f)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                  path += l.prefix + f
                }
              } else path += l
            }
            return path
          }
        }(function(t, e) {
          var n, r = [],
            o = 0,
            c = 0,
            path = "",
            l = e && e.delimiter || "/";
          for (; null != (n = R.exec(t));) {
            var d = n[0],
              f = n[1],
              h = n.index;
            if (path += t.slice(c, h), c = h + d.length, f) path += f[1];
            else {
              var m = t[c],
                v = n[2],
                y = n[3],
                x = n[4],
                w = n[5],
                k = n[6],
                O = n[7];
              path && (r.push(path), path = "");
              var j = null != v && null != m && m !== v,
                _ = "+" === k || "*" === k,
                P = "?" === k || "*" === k,
                S = n[2] || l,
                pattern = x || w;
              r.push({
                name: y || o++,
                prefix: v || "",
                delimiter: S,
                optional: P,
                repeat: _,
                partial: j,
                asterisk: Boolean(O),
                pattern: pattern ? $(pattern) : O ? ".*" : "[^" + L(S) + "]+?"
              })
            }
          }
          c < t.length && (path += t.substr(c));
          path && r.push(path);
          return r
        }(t, e))
      }

      function I(t, e) {
        var n = {},
          r = f({}, t, {}, e);
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n
      }

      function T(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t;
        else try {
          e = JSON.stringify(t, null, 2)
        } catch (n) {
          e = "[".concat(t.constructor.name, "]")
        }
        return f({}, t, {
          message: e,
          statusCode: t.statusCode || t.status || t.response && t.response.status || 500
        })
      }
      window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
        window.onNuxtReadyCbs.push(t)
      };
      var R = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

      function D(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(n, (function(t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase()
        }))
      }

      function L(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
      }

      function $(t) {
        return t.replace(/([=!:$/()])/g, "\\$1")
      }

      function E(t, e) {
        var n, o = t.indexOf("://"); - 1 !== o ? (n = t.substring(0, o), t = t.substring(o + 3)) : t.startsWith("//") && (t = t.substring(2));
        var c, l = t.split("/"),
          d = (n ? n + "://" : "//") + l.shift(),
          path = l.filter(Boolean).join("/");
        if (2 === (l = path.split("#")).length) {
          var f = l,
            h = Object(r.a)(f, 2);
          path = h[0], c = h[1]
        }
        return d += path ? "/" + path : "", e && "{}" !== JSON.stringify(e) && (d += (2 === t.split("?").length ? "&" : "?") + function(t) {
          return Object.keys(t).sort().map((function(e) {
            var n = t[e];
            return null == n ? "" : Array.isArray(n) ? n.slice().map((function(t) {
              return [e, "=", t].join("")
            })).join("&") : e + "=" + n
          })).filter(Boolean).join("&")
        }(e)), d += c ? "#" + c : ""
      }
    },
    306: function(t, e, n) {
      "use strict";
      var r = n(110);
      n.n(r).a
    },
    307: function(t, e, n) {
      (t.exports = n(41)(!1)).push([t.i, '.spinner[data-v-1b5e7ece]{width:16px;height:16px;-webkit-animation:loading-spin-data-v-1b5e7ece 1s linear infinite;animation:loading-spin-data-v-1b5e7ece 1s linear infinite;pointer-events:none}.spinner[data-v-1b5e7ece]:before{opacity:.2;border-bottom:2px solid transparent;border-right:2px solid transparent;border-color:transparent currentcolor currentcolor transparent}.spinner[data-v-1b5e7ece]:after,.spinner[data-v-1b5e7ece]:before{content:"";border-style:solid;border-width:2px;width:100%;height:100%;border-radius:50%;position:absolute}.spinner[data-v-1b5e7ece]:after{opacity:1;border-left:2px solid transparent;border-top:2px solid transparent;border-color:currentcolor transparent transparent currentcolor}@-webkit-keyframes loading-spin-data-v-1b5e7ece{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-spin-data-v-1b5e7ece{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}', ""])
    },
    309: function(t, e, n) {
      "use strict";
      var r = n(111);
      n.n(r).a
    },
    310: function(t, e, n) {
      (t.exports = n(41)(!1)).push([t.i, '.sd{z-index:0;pointer-events:all;flex-wrap:nowrap;-webkit-overflow-scrolling:touch;display:-webkit-box;display:flex;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;align-content:center;-webkit-box-align:center;align-items:center;overflow:hidden}.sd::-webkit-scrollbar{display:none}input,textarea{-webkit-appearance:none}iframe{height:100%;width:100%}.image{position:relative}.image:before{content:"";top:0;left:0;width:100%;height:100%;position:absolute;border-radius:inherit;z-index:-2;pointer-events:none;background-size:cover;background-position:50%}.sd .icon,.sd .text{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;align-content:center;-webkit-box-pack:center;justify-content:center;overflow:visible}a,a.icon,a.text{-webkit-tap-highlight-color:rgba(0,0,0,.15)}.fixed{z-index:2}.button{-webkit-transition:.4s cubic-bezier(.4,.4,0,1);transition:.4s cubic-bezier(.4,.4,0,1)}.button,.link{cursor:pointer}.submitLoading{opacity:.5!important;pointer-events:none!important}', ""])
    },
    312: function(t, e, n) {
      "use strict";
      var r = n(112);
      n.n(r).a
    },
    313: function(t, e, n) {
      (t.exports = n(41)(!1)).push([t.i, ".publish-studio-style{-webkit-transition:.4s cubic-bezier(.4,.4,0,1);transition:.4s cubic-bezier(.4,.4,0,1)}", ""])
    },
    318: function(t, e, n) {
      "use strict";
      var r = n(113);
      n.n(r).a
    },
    319: function(t, e, n) {
      (t.exports = n(41)(!1)).push([t.i, ".design-canvas__modal{z-index:2;position:fixed;width:100%;height:100%;-webkit-transition:.4s cubic-bezier(.4,.4,0,1);transition:.4s cubic-bezier(.4,.4,0,1)}.design-canvas__modal.isNone{-webkit-transition:none;transition:none}.design-canvas__modal.v-enter-active .studio-canvas,.design-canvas__modal.v-leave-active .studio-canvas{-webkit-transition:.4s cubic-bezier(.4,.4,0,1);transition:.4s cubic-bezier(.4,.4,0,1)}.design-canvas__modal.v-enter-active .studio-canvas *,.design-canvas__modal.v-leave-active .studio-canvas *{-webkit-transition:none!important;transition:none!important}.design-canvas__modal .design-canvas__modal__base{top:0;left:0;position:fixed;width:100%;height:100%;-webkit-transition:.4s cubic-bezier(.4,.4,0,1);transition:.4s cubic-bezier(.4,.4,0,1)}.design-canvas__modal .studio-canvas{pointer-events:none;height:100%}.design-canvas__modal .studio-canvas>*{background:none!important;pointer-events:none}", ""])
    },
    320: function(t, e, n) {
      t.exports = n.p + "img/4ffb001.svg"
    },
    321: function(t, e, n) {
      "use strict";
      var r = n(114);
      n.n(r).a
    },

    323: function(t, e, n) {
      "use strict";
      var r = n(115);
      n.n(r).a
    },
    324: function(t, e, n) {
      (t.exports = n(41)(!1)).push([t.i, '@font-face{font-family:grandam;src:url(https://storage.googleapis.com/studio-front/fonts/grandam.ttf) format("truetype");font-style:normal;font-weight:400}.StudioCanvas{height:auto;min-height:100vh;display:-webkit-box;display:flex}.StudioCanvas>.sd{overflow-x:visible!important;overflow-y:visible!important;min-height:100vh}a,abbr,address,article,aside,audio,b,blockquote,body,button,canvas,caption,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,input,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,samp,section,small,span,strong,sub,summary,sup,table,tbody,td,textarea,tfoot,th,thead,time,tr,ul,var,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;list-style:none;font-family:Lato,Noto Sans Japanese;text-decoration:none;-webkit-font-smoothing:antialiased;box-sizing:border-box;-webkit-transition:.3s cubic-bezier(.4,.4,0,1);transition:.3s cubic-bezier(.4,.4,0,1);letter-spacing:0;font-weight:400;color:#333;-webkit-box-flex:0;flex:none;flex-wrap:wrap;-webkit-box-pack:start;justify-content:flex-start;align-content:flex-start;-webkit-backface-visibility:hidden}body{line-height:1}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}ins{text-decoration:none}ins,mark{background-color:#ff9;color:#000}mark{font-style:italic;font-weight:700}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}textarea{resize:none}.clearfix:after{content:"";clear:both;display:block}', ""])
    },
    330: function(t, e, n) {
      t.exports = n.p + "img/d208f32.png"
    },
    331: function(t, e, n) {
      "use strict";
      var r = n(116);
      n.n(r).a
    },
    332: function(t, e, n) {
      (t.exports = n(41)(!1)).push([t.i, ".container[data-v-7bda267c]{-webkit-transition:none;transition:none}.container.page-enter[data-v-7bda267c],.container.page-leave-to[data-v-7bda267c]{opacity:0}.container.page-enter-active[data-v-7bda267c],.container.page-leave-active[data-v-7bda267c]{-webkit-transition:.3s cubic-bezier(.4,.4,0,1);transition:.3s cubic-bezier(.4,.4,0,1)}", ""])
    },
    333: function(t, e, n) {
      "use strict";
      var r = n(117);
      n.n(r).a
    },
    334: function(t, e, n) {
      (t.exports = n(41)(!1)).push([t.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""])
    },
    335: function(t, e, n) {
      "use strict";
      var r = n(118);
      n.n(r).a
    },
    336: function(t, e, n) {
      (t.exports = n(41)(!1)).push([t.i, "html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}", ""])
    },
    355: function(t, e) {},
    357: function(t, e) {},
    381: function(t, e) {},
    396: function(t, e, n) {
      "use strict";
      n.r(e), n.d(e, "state", (function() {
        return r
      })), n.d(e, "getters", (function() {
        return o
      })), n.d(e, "mutations", (function() {
        return c
      })), n.d(e, "actions", (function() {
        return l
      }));
      var r = function() {
          return {
            pixelRatio: 2,
            innerWidth: 0,
            innerHeight: 0
          }
        },
        o = {
          pixelRatio: function(t) {
            return t.pixelRatio
          },
          innerWidth: function(t) {
            return t.innerWidth
          },
          innerHeight: function(t) {
            return t.innerHeight
          }
        },
        c = {
          setPixelRatio: function(t, e) {
            var n = e.pixelRatio;
            t.pixelRatio = n
          },
          setInnerSize: function(t, e) {
            var n = e.innerWidth,
              r = e.innerHeight;
            t.innerWidth = n, t.innerHeight = r
          }
        },
        l = {
          setPixelRatio: function(t, e) {
            (0, t.commit)("setPixelRatio", {
              pixelRatio: e.pixelRatio
            })
          },
          setInnerSize: function(t, e) {
            (0, t.commit)("setInnerSize", {
              innerWidth: e.innerWidth,
              innerHeight: e.innerHeight
            })
          }
        }
    },
    397: function(t, e, n) {
      "use strict";
      n.r(e), n.d(e, "state", (function() {
        return m
      })), n.d(e, "getters", (function() {
        return v
      })), n.d(e, "mutations", (function() {
        return y
      })), n.d(e, "actions", (function() {
        return x
      }));
      n(10), n(18), n(19), n(122), n(15), n(21), n(55), n(85), n(62), n(208), n(34), n(35), n(36), n(37), n(27), n(11), n(16), n(50);
      var r = n(4),
        o = n(14),
        c = n.n(o),
        l = n(102),
        d = n(86);

      function f(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }

      function h(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? f(source, !0).forEach((function(e) {
            Object(r.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(source).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      var m = function() {
          return {
            product: null,
            isLoaded: !1,
            selectedModalIds: []
          }
        },
        v = {
          isLoaded: function(t) {
            return t.isLoaded
          },
          product: function(t) {
            return t.product
          },
          breakPoints: function(t) {
            return t.product && t.product.breakPoints ? t.product.breakPoints.slice().sort((function(a, b) {
              return b.maxWidth - a.maxWidth
            })) : []
          },
          fonts: function(t) {
            return t.product && t.product.fonts || []
          },
          hasTypeSquare: function(t, e) {
            return (e.fonts || []).some((function(t) {
              return "typesquare" === t.vendor
            }))
          },
          pages: function(t) {
            return t.product ? t.product.pages : []
          },
          pagesMap: function(t, e) {
            return e.pages.reduce((function(t, e) {
              return h({}, t, Object(r.a)({}, e.id, e))
            }), {})
          },
          modalPages: function(t, e) {
            return t.selectedModalIds.map((function(t) {
              return e.pagesMap[t]
            })).filter(Boolean)
          },
          rssMap: function(t) {
            var e = t.product && t.product.resources && t.product.resources.rssList;
            return e ? e.reduce((function(t, e) {
              return h({}, t, Object(r.a)({}, e.id, e.response || {
                items: []
              }))
            }), {}) : null
          }
        },
        y = {
          setProduct: function(t, e) {
            var n = e.product;
            t.product = n, t.isLoaded = !0
          },
          setPageView: function(t, e) {
            var n = e.uuid,
              r = e.pageView;
            if (t.product) {
              var o = t.product.pages.find((function(t) {
                return t.uuid === n
              }));
              o && (o.view = r)
            }
          },
          pushModal: function(t, e) {
            var n = e.id;
            t.selectedModalIds.push(n)
          },
          popModal: function(t) {
            t.selectedModalIds.pop()
          }
        },
        x = {
          fetchPageViewData: function(t, e) {
            var n, r, o, d, f;
            return regeneratorRuntime.async((function(h) {
              for (;;) switch (h.prev = h.next) {
                case 0:
                  return n = t.dispatch, r = t.rootState, o = e.uuid, d = r.project.project.snapshot_path, h.next = 5, regeneratorRuntime.awrap(c.a.get("".concat(d, "page-views/").concat(o, ".json"), {
                    withCredentials: !1
                  }));
                case 5:
                  f = h.sent.data, Object(l.a)(f), n("setPageView", {
                    uuid: o,
                    pageView: f
                  });
                case 8:
                case "end":
                  return h.stop()
              }
            }))
          },
          prefetchPage: function(t, e) {
            var n, r, path, o;
            return regeneratorRuntime.async((function(c) {
              for (;;) switch (c.prev = c.next) {
                case 0:
                  if (n = t.getters, r = t.dispatch, path = e.path, !(o = Object(d.a)(n.pages, path)) || o.view) {
                    c.next = 6;
                    break
                  }
                  return c.next = 6, regeneratorRuntime.awrap(r("fetchPageViewData", {
                    uuid: o.uuid
                  }));
                case 6:
                case "end":
                  return c.stop()
              }
            }))
          },
          prefetchModal: function(t, e) {
            var n, r, o, c;
            return regeneratorRuntime.async((function(l) {
              for (;;) switch (l.prev = l.next) {
                case 0:
                  if (n = t.getters, r = t.dispatch, o = e.id, !(c = n.pagesMap[o]) || c.view) {
                    l.next = 6;
                    break
                  }
                  return l.next = 6, regeneratorRuntime.awrap(r("fetchPageViewData", {
                    uuid: c.uuid
                  }));
                case 6:
                case "end":
                  return l.stop()
              }
            }))
          },
          pushModal: function(t, e) {
            var n, r, o, c, l;
            return regeneratorRuntime.async((function(d) {
              for (;;) switch (d.prev = d.next) {
                case 0:
                  if (n = t.commit, r = t.getters, o = t.dispatch, c = e.id, l = r.pagesMap[c]) {
                    d.next = 6;
                    break
                  }
                  return console.error("modalPage ".concat(c, " not found.")), d.abrupt("return");
                case 6:
                  if (l.view) {
                    d.next = 9;
                    break
                  }
                  return d.next = 9, regeneratorRuntime.awrap(o("fetchPageViewData", {
                    uuid: l.uuid
                  }));
                case 9:
                  n("pushModal", {
                    id: c
                  });
                case 10:
                case "end":
                  return d.stop()
              }
            }))
          },
          popModal: function(t) {
            (0, t.commit)("popModal", {})
          },
          setProduct: function(t, e) {
            (0, t.commit)("setProduct", {
              product: e.product
            })
          },
          setPageView: function(t, e) {
            (0, t.commit)("setPageView", {
              uuid: e.uuid,
              pageView: e.pageView
            })
          }
        }
    },
    398: function(t, e, n) {
      "use strict";
      n.r(e), n.d(e, "state", (function() {
        return r
      })), n.d(e, "getters", (function() {
        return o
      })), n.d(e, "mutations", (function() {
        return c
      })), n.d(e, "actions", (function() {
        return l
      }));
      var r = function() {
          return {
            project: {
              id: "",
              name: "",
              type: "",
              customDomain: "",
              displayBadge: !1,
              integrations: []
            }
          }
        },
        o = {
          project: function(t) {
            return t.project
          }
        },
        c = {
          setProject: function(t, e) {
            var n = e.project;
            t.project = n
          }
        },
        l = {}
    },
    399: function(t, e, n) {
      "use strict";
      n.r(e);
      n(10), n(18), n(19), n(15), n(21), n(85), n(51), n(34), n(35), n(36), n(37), n(27), n(11), n(140), n(22), n(64), n(28), n(98), n(43), n(16), n(32);
      var r = n(4),
        o = (n(50), n(14)),
        c = n.n(o),
        l = (n(55), n(337), n(49)),
        d = n(57);

      function f(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }
      var h = function t(data) {
          return data && "object" === Object(d.a)(data) ? Array.isArray(data) ? data.map((function(e) {
            return t(e)
          })) : Object.entries(data).reduce((function(e, n) {
            var o = Object(l.a)(n, 2),
              c = o[0],
              d = o[1];
            return function(t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? f(source, !0).forEach((function(e) {
                  Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(source).forEach((function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
              }
              return t
            }({}, e, Object(r.a)({}, function(t) {
              return t.replace(/^([0-9])/, "_$1").replace(/[^0-9a-zA-Z_$]/g, "_")
            }(c), t(d)))
          }), {}) : data
        },
        m = n(102);
      n(47), Object.prototype.toString;

      function v(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }

      function y(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? v(source, !0).forEach((function(e) {
            Object(r.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : v(source).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      n.d(e, "actions", (function() {
        return _
      })), c.a.defaults.withCredentials = !0;
      var x = {
          items: []
        },
        w = function(t) {
          var e, r, o, c;
          return regeneratorRuntime.async((function(l) {
            for (;;) switch (l.prev = l.next) {
              case 0:
                if (e = 25, t && t.rssList) {
                  l.next = 3;
                  break
                }
                return l.abrupt("return", t);
              case 3:
                return r = n(339), o = t.rssList, l.next = 7, regeneratorRuntime.awrap(Promise.all(o.map((function(t) {
                  return r.toJson(t.url).catch((function() {
                    return x
                  }))
                }))));
              case 7:
                return c = l.sent, l.abrupt("return", y({}, t, {
                  rssList: o.map((function(t, i) {
                    var n = h(c[i]),
                      r = n.items.slice(0, e);
                    return y({}, t, {
                      response: y({}, n, {
                        items: r
                      })
                    })
                  }))
                }));
              case 9:
              case "end":
                return l.stop()
            }
          }))
        },
        k = function(t) {
          if (!t.isAxiosError) return null;
          var e = t.response;
          return e ? e.status : null
        },
        O = function(t) {
          return !!t && 4 === Math.floor(t / 100)
        },
        j = function(data) {
          var t;
          return regeneratorRuntime.async((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!data.snapshot_data) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return", data);
              case 2:
                if (!data.snapshot_path) {
                  e.next = 7;
                  break
                }
                return e.next = 5, regeneratorRuntime.awrap(c.a.get("".concat(data.snapshot_path, "index.json")));
              case 5:
                return t = e.sent, e.abrupt("return", y({}, data, {
                  snapshot_data: t.data
                }));
              case 7:
                throw new Error("invalid data");
              case 8:
              case "end":
                return e.stop()
            }
          }))
        },
        _ = {
          nuxtServerInit: function(t, e) {
            var r, o, l, d, f, h, v, x, _, P, S, C, I, T, R, D, L, $, E, data, M, A, z, N, B, path, F;
            return regeneratorRuntime.async((function(U) {
              for (;;) switch (U.prev = U.next) {
                case 0:
                  if (r = t.commit, o = t.dispatch, l = e.req, d = e.route, f = e.app, h = e.redirect, v = e.res, x = d.matched[0]) {
                    U.next = 5;
                    break
                  }
                  return U.abrupt("return");
                case 5:
                  if (_ = x.name, void 0 !== _ && /^(Publish|PublishedSite)$/.test(_)) {
                    U.next = 9;
                    break
                  }
                  return U.abrupt("return");
                case 9:
                  if (U.prev = 9, S = "Publish" === _, C = new RegExp("".concat(".studio.design", "$")), I = void 0 !== l.headers.host && C.test(l.headers.host), !S) {
                    U.next = 21;
                    break
                  }
                  return T = l.headers.host || "", R = I ? {
                    subdomain: T.replace(C, "")
                  } : {
                    custom_domain: T
                  }, U.next = 18, regeneratorRuntime.awrap(c.a.get("".concat("https://api.studio.design/api", "/v2/publish"), {
                    params: R
                  }));
                case 18:
                  P = U.sent.data, U.next = 28;
                  break;
                case 21:
                  return D = d.params.host, L = D.match(/(.*)\.studio\.design$/), $ = "https://api.studio.design/api/v2/publish", E = L ? "".concat($, "?subdomain=").concat(L[1]) : "".concat($, "?custom_domain=").concat(D), U.next = 27, regeneratorRuntime.awrap(c.a.get(E));
                case 27:
                  P = U.sent.data;
                case 28:
                  return U.next = 30, regeneratorRuntime.awrap(j(P.data));
                case 30:
                  if (data = U.sent, !(S && I && data.custom_domain)) {
                    U.next = 33;
                    break
                  }
                  return U.abrupt("return", h(302, "https://".concat(data.custom_domain)));
                case 33:
                  return M = {
                    id: data.project_id,
                    name: data.project_name,
                    type: data.project_type,
                    customDomain: data.custom_domain,
                    iconImage: data.project_icon_image,
                    coverImage: data.project_cover_image,
                    displayBadge: data.project_display_badge,
                    integrations: data.project_integrations,
                    snapshot_path: data.snapshot_path
                  }, r("project/setProject", {
                    project: M
                  }), U.next = 37, regeneratorRuntime.awrap(Object(m.b)(data.snapshot_data, data.project_type));
                case 37:
                  return A = U.sent, U.next = 40, regeneratorRuntime.awrap(w(A.resources));
                case 40:
                  z = U.sent, o("product/setProduct", {
                    product: y({}, A, {
                      resources: z
                    })
                  }), U.next = 63;
                  break;
                case 44:
                  if (U.prev = 44, U.t0 = U.catch(9), N = k(U.t0), !O(N)) {
                    U.next = 55;
                    break
                  }
                  return console.log("Project not found."), v.statusCode = N, U.next = 52, regeneratorRuntime.awrap(n.e(2).then(n.t.bind(null, 552, 3)));
                case 52:
                  return B = U.sent, r("product/setProduct", {
                    product: B
                  }), U.abrupt("return");
                case 55:
                  return path = l.headers.host + d.path, f.$sentry.captureMessage("⚠️ SSR failed!: ".concat(path)), f.$sentry.captureException(U.t0), v.statusCode = 500, U.next = 61, regeneratorRuntime.awrap(n.e(11).then(n.t.bind(null, 553, 3)));
                case 61:
                  F = U.sent, r("product/setProduct", {
                    product: F
                  });
                case 63:
                case "end":
                  return U.stop()
              }
            }), null, null, [
              [9, 44]
            ])
          }
        }
    },
    66: function(t, e, n) {
      "use strict";
      n(10), n(19), n(15), n(21), n(47), n(51), n(34), n(35), n(36), n(37), n(27), n(11), n(16), n(50);
      var r = n(4),
        o = n(0),
        c = n(254),
        l = n(168),
        d = n.n(l),
        f = n(75),
        h = n.n(f),
        m = (n(18), n(62), n(9)),
        v = n(119),
        y = n.n(v),
        x = n(169),
        w = (n(122), n(172)),
        k = n(171),
        O = (n(22), n(141), {
          name: "GoogleAnalytics",
          props: {
            code: {
              type: String,
              required: !0
            }
          },
          mounted: function() {
            var t = window;
            if ("function" == typeof t.ga) this.pageView(t);
            else {
              t.GoogleAnalyticsObject = "ga", t.ga = t.ga || function() {
                (t.ga.q = t.ga.q || []).push(arguments)
              }, t.ga.l = 1 * new Date;
              var e = document,
                n = e.createElement("script"),
                script = e.getElementsByTagName("script")[0];
              n.async = !0, n.src = "https://www.google-analytics.com/analytics.js", script.parentNode.insertBefore(n, script), this.create(t), this.pageView(t)
            }
          },
          methods: {
            pageView: function(t) {
              this.code && (t.ga("projectTracker.set", "page", t.location.pathname + t.location.search + t.location.hash), t.ga("projectTracker.send", "pageview")), t.ga("set", "page", t.location.pathname + t.location.search + t.location.hash), t.ga("send", "pageview")
            },
            create: function(t) {
              this.code && t.ga("create", this.code, "auto", {
                name: "projectTracker"
              }), t.ga("create", "UA-90080275-5", "auto")
            }
          }
        }),
        j = n(2),
        _ = Object(j.a)(O, (function() {
          var t = this.$createElement;
          return (this._self._c || t)("div")
        }), [], !1, null, null, null).exports,
        P = {
          name: "GoogleTagManager",
          props: {
            code: {
              type: String,
              required: !0
            }
          },
          mounted: function() {
            if (this.code && !window.dataLayer) {
              var t = document,
                e = t.createElement("script");
              e.id = "s-google-tag-manager", e.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','".concat(this.code, "');");
              var script = t.getElementsByTagName("script")[0];
              script.parentNode.insertBefore(e, script)
            }
          }
        },
        S = Object(j.a)(P, (function() {
          var t = this.$createElement;
          return (this._self._c || t)("div")
        }), [], !1, null, null, null).exports,
        C = {
          name: "Intercom",
          props: {
            code: {
              type: String,
              required: !0
            }
          },
          mounted: function() {
            var t = window,
              e = t.Intercom;

            function n(t) {
              var e = document,
                s = e.createElement("script");
              s.type = "text/javascript", s.async = !0, s.src = "https://widget.intercom.io/widget/".concat(t);
              var n = e.getElementsByTagName("script")[0];
              n.parentNode.insertBefore(s, n)
            }
            if (t.intercomSettings = {
                app_id: this.code
              }, "function" == typeof e) e("reattach_activator"), e("update", t.intercomSettings);
            else {
              var i = function i() {
                i.c(arguments)
              };
              i.q = [], i.c = function(t) {
                i.q.push(t)
              }, t.Intercom = i, t.attachEvent ? t.attachEvent("onload", n(this.code)) : t.addEventListener("load", n(this.code), !1)
            }
          }
        },
        I = Object(j.a)(C, (function() {
          var t = this.$createElement;
          return (this._self._c || t)("div")
        }), [], !1, null, null, null).exports,
        T = {
          name: "FacebookPixel",
          props: {
            code: {
              type: String,
              required: !0
            }
          },
          mounted: function() {
            var t = window;
            if (!t.fbq) {
              var e = t.fbq = function() {
                e.callMethod ? e.callMethod.apply(e, arguments) : e.queue.push(arguments)
              };
              t._fbq || (t._fbq = e), e.push = e, e.loaded = !0, e.version = "2.0", e.queue = [];
              var n = document.createElement("script");
              n.async = !0, n.src = "https://connect.facebook.net/en_US/fbevents.js";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(n, s), this.init(t)
            }
          },
          methods: {
            init: function(t) {
              t.fbq("init", this.code), t.fbq("track", "PageView")
            }
          }
        },
        R = Object(j.a)(T, (function() {
          var t = this.$createElement;
          return (this._self._c || t)("div")
        }), [], !1, null, null, null).exports,
        D = {
          name: "Channel",
          props: {
            code: {
              type: String,
              required: !0
            }
          },
          mounted: function() {
            this.code && (window.channelPluginSettings = {
              pluginKey: this.code
            }, function() {
              var t = window;
              if (t.ChannelIO) return (window.console.error || window.console.log || function() {})("ChannelIO script included twice.");
              var e = function t() {
                t.c(arguments)
              };

              function n() {
                if (!t.ChannelIOInitialized) {
                  t.ChannelIOInitialized = !0;
                  var s = document.createElement("script");
                  s.type = "text/javascript", s.async = !0, s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js", s.charset = "UTF-8";
                  var e = document.getElementsByTagName("script")[0];
                  e.parentNode.insertBefore(s, e)
                }
              }
              e.q = [], e.c = function(t) {
                e.q.push(t)
              }, t.ChannelIO = e, "complete" === document.readyState ? n() : window.attachEvent ? window.attachEvent("onload", n) : (window.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1))
            }())
          }
        },
        L = Object(j.a)(D, (function() {
          var t = this.$createElement;
          return (this._self._c || t)("div")
        }), [], !1, null, null, null).exports,
        $ = (n(28), n(32), n(325), "saffid");

      function E() {
        "" !== M() && function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 90,
            r = new Date;
          r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
          var o = r.toUTCString();
          document.cookie = "".concat(t, "=").concat(e, "; expires=").concat(o, " ; path=/; domain=").concat(".studio.design", ";")
        }($, M())
      }

      function M() {
        try {
          var t = new URLSearchParams(window.location.search);
          return null === t.get($) ? "" : t.get($)
        } catch (t) {
          return console.error(t), ""
        }
      }
      var A = n(86);

      function z(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }
      var N = o.default.extend({
          components: {
            RenderCanvas: k.a,
            GoogleAnalytics: _,
            GoogleTagManager: S,
            Intercom: I,
            FacebookPixel: R,
            Channel: L,
            FormMessage: w.a
          },
          data: function() {
            return {
              url: ""
            }
          },
          computed: {
            project: function() {
              return this.$store.getters["project/project"]
            },
            product: function() {
              return this.$store.getters["product/product"]
            },
            selectedPage: function() {
              var t = this.product;
              return t ? Object(A.a)(t.pages, this.$route.params.pageId) : null
            },
            rssMap: function() {
              return this.$store.getters["product/rssMap"]
            },
            integrations: function() {
              return this.project ? this.project.integrations : []
            },
            googleAnalytics: function() {
              return this.findIntegration("google-analytics")
            },
            googleTagManager: function() {
              return this.findIntegration("google-tag-manager")
            },
            searchConsole: function() {
              return this.findIntegration("search-console")
            },
            intercom: function() {
              return this.findIntegration("intercom")
            },
            facebookPixel: function() {
              return this.findIntegration("facebook-pixel")
            },
            channel: function() {
              return this.findIntegration("channel")
            }
          },
          asyncData: function(t) {
            t.req, t.route
          },
          head: function() {
            var t = this.selectedPage;
            if (!t) return {};
            var e = this.project,
              n = this.product,
              o = Object(A.b)(e, n, t),
              c = this.url,
              code = this.searchConsole.code;
            return function(t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? z(source, !0).forEach((function(e) {
                  Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : z(source).forEach((function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
              }
              return t
            }({}, o, {
              meta: [].concat(Object(m.a)(o.meta || []), [{
                hid: "ogUrl",
                property: "og:url",
                content: c
              }, {
                hid: "searchConsole",
                name: "google-site-verification",
                content: "".concat(code)
              }])
            })
          },
          mounted: function() {
            return regeneratorRuntime.async((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (E(), this.selectedPage) {
                    t.next = 3;
                    break
                  }
                  return t.abrupt("return");
                case 3:
                  return t.next = 5, regeneratorRuntime.awrap(this.getPageData(this.selectedPage));
                case 5:
                case "end":
                  return t.stop()
              }
            }), null, this)
          },
          methods: {
            getPageData: function(t) {
              return regeneratorRuntime.async((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.view) {
                      e.next = 2;
                      break
                    }
                    return e.abrupt("return");
                  case 2:
                    return e.next = 4, regeneratorRuntime.awrap(this.$store.dispatch("product/fetchPageViewData", {
                      uuid: t.uuid
                    }));
                  case 4:
                  case "end":
                    return e.stop()
                }
              }), null, this)
            },
            findIntegration: function(t) {
              var e = this.integrations.find((function(e) {
                return e.integration_name === t
              }));
              return e || {
                integration_name: "",
                code: ""
              }
            }
          }
        }),
        B = (n(331), Object(j.a)(N, (function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("client-only", [t.selectedPage ? n("div", {
            staticClass: "container"
          }, [n("FormMessage"), t._v(" "), t.selectedPage.view ? n("RenderCanvas", {
            attrs: {
              isPreview: !1,
              basePath: "",
              selectedPage: t.selectedPage,
              displayBadge: t.project.displayBadge,
              rssMap: t.rssMap
            }
          }) : t._e(), t._v(" "), n("GoogleAnalytics", {
            attrs: {
              code: t.googleAnalytics.code
            }
          }), t._v(" "), t.googleTagManager ? n("GoogleTagManager", {
            attrs: {
              code: t.googleTagManager.code
            }
          }) : t._e(), t._v(" "), t.intercom.code ? n("Intercom", {
            attrs: {
              code: t.intercom.code
            }
          }) : t._e(), t._v(" "), t.facebookPixel.code ? n("FacebookPixel", {
            attrs: {
              code: t.facebookPixel.code
            }
          }) : t._e(), t._v(" "), t.channel.code ? n("Channel", {
            attrs: {
              code: t.channel.code
            }
          }) : t._e()], 1) : t._e()])
        }), [], !1, null, "7bda267c", null).exports);
      o.default.use(x.a);
      var F = function(t) {
        return t.then((function(t) {
          return t.default || t
        }))
      };
      var U = function(t, e, n) {
        if (e.path === t.path && e.hash !== t.hash) {
          var r = t.hash || "body";
          return y.a.scrollTo(r, 500, {
            easing: "ease-in-out"
          }), !1
        }
        var o = !1;
        return t.matched.length < 2 ? o = {
          x: 0,
          y: 0
        } : t.matched.some((function(t) {
          return t.components.default.options.scrollToTop
        })) && (o = {
          x: 0,
          y: 0
        }), n && (o = n), new Promise((function(e) {
          window.$nuxt.$once("triggerScroll", (function() {
            requestAnimationFrame((function() {
              t.hash && document.querySelector(t.hash) && (o = {
                selector: t.hash
              }), e(o)
            }))
          }))
        }))
      };

      function W(t) {
        if (!["preview.studio.design", "preview.staging.studio.design", "localhost:3000", "localhost"].some((function(e) {
            return e === t
          }))) return [{
          path: "/:pageId*",
          name: "Publish",
          component: B
        }];
        var e = [{
          path: "/404",
          name: "NotFound",
          component: function() {
            return F(n.e(9).then(n.bind(null, 557)))
          }
        }, {
          path: "/live/:previewId/:pageId*",
          name: "Live",
          component: function() {
            return F(Promise.all([n.e(0), n.e(1), n.e(7)]).then(n.bind(null, 554)))
          }
        }, {
          path: "/templates/:templateId/:pageId*",
          name: "Templates",
          component: function() {
            return F(Promise.all([n.e(0), n.e(1), n.e(8)]).then(n.bind(null, 556)))
          }
        }];
        return e
      }

      function H(t) {
        return function(t) {
          var e = W(t ? t.req.headers.host : location.hostname);
          return new x.a({
            mode: "history",
            routes: e,
            scrollBehavior: U
          })
        }(t)
      }
      var J = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: {
              type: String,
              default: ""
            },
            keepAlive: Boolean,
            keepAliveProps: {
              type: Object,
              default: void 0
            }
          },
          render: function(t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props;
            data.nuxtChild = !0;
            for (var o = n, c = n.$nuxt.nuxt.transitions, l = n.$nuxt.nuxt.defaultTransition, d = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && d++, n = n.$parent;
            data.nuxtChildDepth = d;
            var f = c[d] || l,
              h = {};
            V.forEach((function(t) {
              void 0 !== f[t] && (h[t] = f[t])
            }));
            var m = {};
            G.forEach((function(t) {
              "function" == typeof f[t] && (m[t] = f[t].bind(o))
            }));
            var v = m.beforeEnter;
            if (m.beforeEnter = function(t) {
                if (window.$nuxt.$nextTick((function() {
                    window.$nuxt.$emit("triggerScroll")
                  })), v) return v.call(o, t)
              }, !1 === f.css) {
              var y = m.leave;
              (!y || y.length < 2) && (m.leave = function(t, e) {
                y && y.call(o, t), o.$nextTick(e)
              })
            }
            var x = t("routerView", data);
            return r.keepAlive && (x = t("keep-alive", {
              props: r.keepAliveProps
            }, [x])), t("transition", {
              props: h,
              on: m
            }, [x])
          }
        },
        V = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
        G = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
        K = {
          name: "NuxtError",
          props: {
            error: {
              type: Object,
              default: null
            }
          },
          head: function() {
            return {
              title: this.message,
              meta: [{
                name: "viewport",
                content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
              }]
            }
          },
          computed: {
            statusCode: function() {
              return this.error && this.error.statusCode || 500
            },
            message: function() {
              return this.error.message || "Error"
            }
          }
        },
        Z = (n(333), Object(j.a)(K, (function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", {
            staticClass: "__nuxt-error-page"
          }, [n("div", {
            staticClass: "error"
          }, [n("svg", {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "90",
              height: "90",
              fill: "#DBE1EC",
              viewBox: "0 0 48 48"
            }
          }, [n("path", {
            attrs: {
              d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
            }
          })]), t._v(" "), n("div", {
            staticClass: "title"
          }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? n("p", {
            staticClass: "description"
          }, [n("NuxtLink", {
            staticClass: "error-link",
            attrs: {
              to: "/"
            }
          }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
        }), [function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "logo"
          }, [e("a", {
            attrs: {
              href: "https://nuxtjs.org",
              target: "_blank",
              rel: "noopener"
            }
          }, [this._v("Nuxt.js")])])
        }], !1, null, null, null).exports),
        Y = (n(64), n(43), n(49)),
        X = n(3),
        Q = {
          name: "Nuxt",
          components: {
            NuxtChild: J,
            NuxtError: Z
          },
          props: {
            nuxtChildKey: {
              type: String,
              default: void 0
            },
            keepAlive: Boolean,
            keepAliveProps: {
              type: Object,
              default: void 0
            },
            name: {
              type: String,
              default: "default"
            }
          },
          errorCaptured: function(t) {
            this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
          },
          computed: {
            routerViewKey: function() {
              if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(X.b)(this.$route.matched[0].path)(this.$route.params);
              var t = Object(Y.a)(this.$route.matched, 1)[0];
              if (!t) return this.$route.path;
              var e = t.components.default;
              if (e && e.options) {
                var n = e.options;
                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
              }
              return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
            }
          },
          beforeCreate: function() {
            o.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
          },
          render: function(t) {
            var e = this;
            return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
              return e.errorFromNuxtError = !1
            })), t("div", {}, [t("h2", "An error occured while showing the error page"), t("p", "Unfortunately an error occured and while showing the error page another error occured"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
              props: {
                to: "/"
              }
            }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
              return e.displayingNuxtError = !1
            })), t(Z, {
              props: {
                error: this.nuxt.err
              }
            })) : t("NuxtChild", {
              key: this.routerViewKey,
              props: this.$props
            })
          }
        },
        tt = (n(335), {
          _default: Object(j.a)({}, (function() {
            var t = this.$createElement;
            return (this._self._c || t)("nuxt")
          }), [], !1, null, null, null).exports
        }),
        et = {
          head: {
            title: "STUDIO - The UI Design Tool",
            meta: [{
              charset: "utf-8"
            }, {
              hid: "viewport",
              name: "viewport",
              content: "width=device-width, initial-scale=1"
            }, {
              hid: "appleMobileWebAppCapable",
              name: "apple-mobile-web-app-capable",
              content: "yes"
            }, {
              hid: "appleMobileWebAppStatusBarStyle",
              name: "apple-mobile-web-app-status-bar-style",
              content: "black-translucent"
            }, {
              hid: "appleMobileWebAppTitle",
              name: "apple-mobile-web-app-title",
              content: "STUDIO"
            }, {
              hid: "ogDescription",
              property: "og:description",
              content: ""
            }, {
              hid: "ogSiteName",
              property: "og:site_name",
              content: "STUDIO"
            }, {
              hid: "ogType",
              property: "og:type",
              content: "website"
            }],
            link: [{
              hid: "favicon",
              rel: "icon",
              type: "image/png",
              href: "https://storage.googleapis.com/studio-front/favicon.png"
            }, {
              hid: "appleTouchIcon",
              rel: "apple-touch-icon",
              type: "image/png",
              href: "/apple-touch-icon.png"
            }],
            style: [],
            script: []
          },
          render: function(t, e) {
            var n = t(this.layout || "nuxt"),
              r = t("div", {
                domProps: {
                  id: "__layout"
                },
                key: this.layoutName
              }, [n]),
              o = t("transition", {
                props: {
                  name: "layout",
                  mode: "out-in"
                },
                on: {
                  beforeEnter: function(t) {
                    window.$nuxt.$nextTick((function() {
                      window.$nuxt.$emit("triggerScroll")
                    }))
                  }
                }
              }, [r]);
            return t("div", {
              domProps: {
                id: "__nuxt"
              }
            }, [o])
          },
          data: function() {
            return {
              isOnline: !0,
              layout: null,
              layoutName: ""
            }
          },
          beforeCreate: function() {
            o.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
          },
          created: function() {
            o.default.prototype.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
          },
          computed: {
            isOffline: function() {
              return !this.isOnline
            }
          },
          methods: {
            refreshOnlineStatus: function() {
              void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
            },
            refresh: function() {
              var t, e, n = this;
              return regeneratorRuntime.async((function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if ((t = Object(X.f)(this.$route)).length) {
                      r.next = 3;
                      break
                    }
                    return r.abrupt("return");
                  case 3:
                    return e = t.map((function(t) {
                      var p = [];
                      return t.$options.fetch && p.push(Object(X.l)(t.$options.fetch, n.context)), t.$options.asyncData && p.push(Object(X.l)(t.$options.asyncData, n.context).then((function(e) {
                        for (var n in e) o.default.set(t.$data, n, e[n])
                      }))), Promise.all(p)
                    })), r.prev = 4, r.next = 7, regeneratorRuntime.awrap(Promise.all(e));
                  case 7:
                    r.next = 13;
                    break;
                  case 9:
                    r.prev = 9, r.t0 = r.catch(4), Object(X.i)(r.t0), this.error(r.t0);
                  case 13:
                  case "end":
                    return r.stop()
                }
              }), null, this, [
                [4, 9]
              ])
            },
            setLayout: function(t) {
              return t && tt["_" + t] || (t = "default"), this.layoutName = t, this.layout = tt["_" + t], this.layout
            },
            loadLayout: function(t) {
              return t && tt["_" + t] || (t = "default"), Promise.resolve(tt["_" + t])
            }
          }
        },
        nt = (n(45), n(54), n(83), n(56), n(170));
      o.default.use(nt.a);
      var it = ["state", "getters", "actions", "mutations"],
        ot = {};
      (ot = function(t, e) {
        if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
        return "function" != typeof t && (t = Object.assign({}, t)), st(t, e)
      }(n(399), "store/index.ts")).modules = ot.modules || {}, ct(n(396), "device.ts"), ct(n(397), "product.ts"), ct(n(398), "project.ts");
      var at = ot instanceof Function ? ot : function() {
        return new nt.a.Store(Object.assign({
          strict: !1
        }, ot))
      };

      function st(t, e) {
        if (t.state && "function" != typeof t.state) {
          console.warn("'state' should be a method that returns an object in ".concat(e));
          var n = Object.assign({}, t.state);
          t = Object.assign({}, t, {
            state: function() {
              return n
            }
          })
        }
        return t
      }

      function ct(t, e) {
        t = t.default || t;
        var n = e.replace(/\.(js|mjs|ts)$/, "").split("/"),
          r = n[n.length - 1],
          o = "store/".concat(e);
        if (t = "state" === r ? function(t, e) {
            if ("function" != typeof t) {
              console.warn("".concat(e, " should export a method that returns an object"));
              var n = Object.assign({}, t);
              return function() {
                return n
              }
            }
            return st(t, e)
          }(t, o) : st(t, o), it.includes(r)) {
          var c = r;
          pt(ut(ot, n, {
            isProperty: !0
          }), t, c)
        } else {
          "index" === r && (n.pop(), r = n[n.length - 1]);
          var l = ut(ot, n),
            d = !0,
            f = !1,
            h = void 0;
          try {
            for (var m, v = it[Symbol.iterator](); !(d = (m = v.next()).done); d = !0) {
              var y = m.value;
              pt(l, t[y], y)
            }
          } catch (t) {
            f = !0, h = t
          } finally {
            try {
              d || null == v.return || v.return()
            } finally {
              if (f) throw h
            }
          }!1 === t.namespaced && delete l.namespaced
        }
      }

      function ut(t, e) {
        var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).isProperty,
          r = void 0 !== n && n;
        if (!e.length || r && 1 === e.length) return t;
        var o = e.shift();
        return t.modules[o] = t.modules[o] || {}, t.modules[o].namespaced = !0, t.modules[o].modules = t.modules[o].modules || {}, ut(t.modules[o], e, {
          isProperty: r
        })
      }

      function pt(t, e, n) {
        e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
      }
      n(258);
      for (var lt = n(14), ft = n.n(lt), ht = {
          setBaseURL: function(t) {
            this.defaults.baseURL = t
          },
          setHeader: function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
              r = !0,
              o = !1,
              c = void 0;
            try {
              for (var l, d = (Array.isArray(n) ? n : [n])[Symbol.iterator](); !(r = (l = d.next()).done); r = !0) {
                var f = l.value;
                if (!e) return void delete this.defaults.headers[f][t];
                this.defaults.headers[f][t] = e
              }
            } catch (t) {
              o = !0, c = t
            } finally {
              try {
                r || null == d.return || d.return()
              } finally {
                if (o) throw c
              }
            }
          },
          setToken: function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
              r = t ? (e ? e + " " : "") + t : null;
            this.setHeader("Authorization", r, n)
          },
          onRequest: function(t) {
            this.interceptors.request.use((function(e) {
              return t(e) || e
            }))
          },
          onResponse: function(t) {
            this.interceptors.response.use((function(e) {
              return t(e) || e
            }))
          },
          onRequestError: function(t) {
            this.interceptors.request.use(void 0, (function(e) {
              return t(e) || Promise.reject(e)
            }))
          },
          onResponseError: function(t) {
            this.interceptors.response.use(void 0, (function(e) {
              return t(e) || Promise.reject(e)
            }))
          },
          onError: function(t) {
            this.onRequestError(t), this.onResponseError(t)
          }
        }, mt = function() {
          var t = bt[gt];
          ht["$" + t] = function() {
            return this[t].apply(this, arguments).then((function(t) {
              return t && t.data
            }))
          }
        }, gt = 0, bt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; gt < bt.length; gt++) mt();
      var vt = function(t, e) {
        var n = {
          baseURL: "http://localhost:80/",
          headers: {
            common: {
              Accept: "application/json, text/plain, */*"
            },
            delete: {},
            get: {},
            head: {},
            post: {},
            put: {},
            patch: {}
          }
        };
        n.headers.common = t.req && t.req.headers ? Object.assign({}, t.req.headers) : {}, delete n.headers.common.accept, delete n.headers.common.host, delete n.headers.common["cf-ray"], delete n.headers.common["cf-connecting-ip"], delete n.headers.common["content-length"], delete n.headers.common["content-md5"], delete n.headers.common["content-type"];
        var r = ft.a.create(n);
        r.CancelToken = ft.a.CancelToken, r.isCancel = ft.a.isCancel,
          function(t) {
            for (var e in ht) t[e] = ht[e].bind(t)
          }(r),
          function(t, e) {
            var n = {
                finish: function() {},
                start: function() {},
                fail: function() {},
                set: function() {}
              },
              r = function() {
                return window.$nuxt && window.$nuxt.$loading && window.$nuxt.$loading.set ? window.$nuxt.$loading : n
              },
              o = 0;
            t.onRequest((function(t) {
              t && !1 === t.progress || o++
            })), t.onResponse((function(t) {
              t && t.config && !1 === t.config.progress || --o <= 0 && (o = 0, r().finish())
            })), t.onError((function(t) {
              t && t.config && !1 === t.config.progress || (o--, ft.a.isCancel(t) || (r().fail(), r().finish()))
            }));
            var c = function(t) {
              if (o) {
                var progress = 100 * t.loaded / (t.total * o);
                r().set(Math.min(100, progress))
              }
            };
            t.defaults.onUploadProgress = c, t.defaults.onDownloadProgress = c
          }(r), t.$axios = r, e("axios", r)
      };
      o.default.use(y.a, {});
      var yt = n(259),
        xt = n.n(yt);

      function wt(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }

      function kt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? wt(source, !0).forEach((function(e) {
            Object(r.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : wt(source).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      o.default.use(xt.a), n.d(e, "b", (function() {
        return jt
      })), n.d(e, "a", (function() {
        return Z
      })), o.default.component(d.a.name, d.a), o.default.component(h.a.name, kt({}, h.a, {
        render: function(t, e) {
          return h.a._warned || (h.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), h.a.render(t, e)
        }
      })), o.default.component(J.name, J), o.default.component("NChild", J), o.default.component(Q.name, Q), o.default.use(c.a, {
        keyName: "head",
        attribute: "data-n-head",
        ssrAttribute: "data-n-head-ssr",
        tagIDKeyName: "hid"
      });
      var Ot = {
        name: "page",
        mode: "out-in",
        appear: !1,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to"
      };

      function jt(t) {
        var e, n, r, c, l, d, path, f;
        return regeneratorRuntime.async((function(h) {
          for (;;) switch (h.prev = h.next) {
            case 0:
              return h.next = 2, regeneratorRuntime.awrap(H(t));
            case 2:
              return e = h.sent, (n = at(t)).$router = e, r = n.registerModule, n.registerModule = function(path, t, e) {
                return r.call(n, path, t, Object.assign({
                  preserveState: !0
                }, e))
              }, c = kt({
                store: n,
                router: e,
                nuxt: {
                  defaultTransition: Ot,
                  transitions: [Ot],
                  setTransitions: function(t) {
                    return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                      return t = t ? "string" == typeof t ? Object.assign({}, Ot, {
                        name: t
                      }) : Object.assign({}, Ot, t) : Ot
                    })), this.$options.nuxt.transitions = t, t
                  },
                  err: null,
                  dateErr: null,
                  error: function(e) {
                    e = e || null, c.context._errored = Boolean(e), e = e ? Object(X.k)(e) : null;
                    var n = this.nuxt || this.$options.nuxt;
                    return n.dateErr = Date.now(), n.err = e, t && (t.nuxt.error = e), e
                  }
                }
              }, et), n.app = c, l = t ? t.next : function(t) {
                return c.router.push(t)
              }, t ? d = e.resolve(t.url).route : (path = Object(X.d)(e.options.base), d = e.resolve(path).route), h.next = 13, regeneratorRuntime.awrap(Object(X.n)(c, {
                store: n,
                route: d,
                next: l,
                error: c.nuxt.error.bind(c),
                payload: t ? t.payload : void 0,
                req: t ? t.req : void 0,
                res: t ? t.res : void 0,
                beforeRenderFns: t ? t.beforeRenderFns : void 0,
                ssrContext: t
              }));
            case 13:
              f = function(t, e) {
                if (!t) throw new Error("inject(key, value) has no key provided");
                if (void 0 === e) throw new Error("inject(key, value) has no value provided");
                c[t = "$" + t] = e, n[t] = c[t];
                var r = "__nuxt_" + t + "_installed__";
                o.default[r] || (o.default[r] = !0, o.default.use((function() {
                  o.default.prototype.hasOwnProperty(t) || Object.defineProperty(o.default.prototype, t, {
                    get: function() {
                      return this.$root.$options[t]
                    }
                  })
                })))
              }, window.__NUXT__ && window.__NUXT__.state && n.replaceState(window.__NUXT__.state), h.next = 18;
              break;
            case 18:
              h.next = 21;
              break;
            case 21:
              if ("function" != typeof vt) {
                h.next = 24;
                break
              }
              return h.next = 24, regeneratorRuntime.awrap(vt(c.context, f));
            case 24:
              h.next = 27;
              break;
            case 27:
              h.next = 30;
              break;
            case 30:
              h.next = 33;
              break;
            case 33:
              return h.abrupt("return", {
                store: n,
                app: c,
                router: e
              });
            case 34:
            case "end":
              return h.stop()
          }
        }))
      }
    },
    86: function(t, e, n) {
      "use strict";
      n.d(e, "a", (function() {
        return c
      })), n.d(e, "b", (function() {
        return l
      }));
      n(10), n(45), n(18), n(19), n(122), n(63), n(21), n(55), n(62), n(51), n(221), n(140), n(22), n(64), n(43), n(56);
      var r = n(9),
        o = {
          "facebook-pixel": function(code) {
            return {
              id: "facebook-pixel",
              innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id='.concat(code, '&ev=PageView&noscript=1"/>'),
              body: !0
            }
          },
          "google-tag-manager": function(code) {
            return {
              id: "noscripts-google-tag-manager",
              innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id='.concat(code, '" height="0" width="0" style="display:none;visibility:hidden"></iframe>'),
              body: !0
            }
          }
        },
        c = function(t, e) {
          return t.find((function(t) {
            var n = String(t.id).split("/").map((function(t) {
              return (e = t, e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).replace(/^:[^:]+/, "[^/]+");
              var e
            })).join("/");
            return new RegExp("^".concat(n, "/?$")).test(e)
          })) || t.find((function(t) {
            return "/" === t.id
          })) || t[0]
        },
        l = function(t, e, n) {
          var o = t.name,
            c = n.head,
            l = e.head,
            d = l && l.title || o,
            w = c && c.title || d,
            k = h(c, l, t.coverImage),
            O = m(l),
            j = v(c, l);
          return {
            title: w,
            meta: [{
              hid: "ogSiteName",
              property: "og:site_name",
              content: "".concat(d)
            }, {
              hid: "ogTitle",
              property: "og:title",
              content: "".concat(w)
            }, {
              hid: "ogImage",
              property: "og:image",
              content: k
            }, {
              hid: "ogDescription",
              property: "og:description",
              content: "".concat(j)
            }, {
              hid: "description",
              name: "description",
              content: "".concat(j)
            }, {
              hid: "twitterCard",
              property: "twitter:card",
              content: "summary_large_image"
            }, {
              hid: "twitterImage",
              property: "twitter:image",
              content: k
            }, {
              hid: "appleMobileWebAppTitle",
              name: "apple-mobile-web-app-title",
              content: "".concat(w)
            }],
            link: [].concat(Object(r.a)(f(e.fonts)), [{
              rel: "stylesheet",
              href: "/css/font-awesome.min.css"
            }, {
              hid: "materialicon",
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/icon?family=Material+Icons"
            }, {
              hid: "favicon",
              rel: "icon",
              type: "image/png",
              href: O
            }, {
              hid: "appleTouchIcon",
              rel: "apple-touch-icon",
              type: "image/png",
              href: O
            }]),
            script: y(e.fonts),
            noscript: x(t.integrations)
          }
        },
        d = function(t) {
          return t.variants ? t.variants.map((function(t) {
            var e = parseInt(t) || 400,
              n = /italic/.test(t);
            return "".concat(e).concat(n ? "i" : "")
          })).join(",") : ""
        },
        f = function(t) {
          return (t || []).filter((function(t) {
            return "google" === t.vendor
          })).map((function(t) {
            return {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css?family=".concat(t.family, ":").concat(d(t))
            }
          }))
        },
        h = function(t, e, r) {
          return t && t.meta && t.meta["og:image"] ? t.meta["og:image"] : e && e.meta && e.meta["og:image"] ? e.meta["og:image"] : r || n(330)
        },
        m = function(t) {
          return t && t.favicon ? t.favicon : "https://storage.googleapis.com/studio-front/favicon.png"
        },
        v = function(t, e) {
          return t && t.meta && t.meta.description ? t.meta.description : e && e.meta && e.meta.description ? e.meta.description : ""
        },
        y = function(t) {
          return (t || []).some((function(t) {
            return "typesquare" === t.vendor
          })) ? [{
            src: "//typesquare.com/3/tsst/script/ja/typesquare.js?5ad00062415c46a09fd67fd7ac1e024a"
          }] : []
        },
        x = function(t) {
          return t.reduce((function(t, e) {
            var n = e.integration_name,
              code = e.code,
              r = o[n];
            return r && t.push(r(code)), t
          }), [])
        }
    },
    88: function(t, e, n) {
      "use strict";
      n(10), n(45), n(54), n(18), n(15), n(63), n(21), n(85), n(47), n(11), n(221), n(22), n(64), n(28), n(43), n(56), n(16), n(32);
      var r = n(9),
        o = n(257),
        c = n.n(o),
        l = {
          textOrientation: ["webkit"],
          writingMode: ["ms"]
        };
      e.a = {
        getUniqueStr: function(t) {
          var strong = 1e3;
          return t && (strong = t), (new Date).getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
        },
        getUUID: function() {
          for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split(""), i = 0, e = t.length; i < e; i++) switch (t[i]) {
            case "x":
              t[i] = Math.floor(16 * Math.random()).toString(16);
              break;
            case "y":
              t[i] = (Math.floor(4 * Math.random()) + 8).toString(16)
          }
          return t.join("")
        },
        CamelToChain: function(p) {
          return p.replace(/([A-Z])/g, (function(s) {
            return "-" + s.charAt(0).toLowerCase()
          }))
        },
        adjustMarginPercent: function(style) {
          for (var s = c()({}, {
              "@mobile": {},
              "@tablet": {},
              "@small": {}
            }, style), t = ["@mobile", "@tablet", "@small"], e = "", i = 0; i <= t.length; i++) {
            var n = t[t.length - i],
              r = n ? s[n] : s;
            e = r.width || e;
            var o = i ? t.slice(-i) : [],
              l = this.stringToMargin(this.getStyleProperty(s, "margin", o)),
              d = l.left + l.right;
            /%/.test(e) ? (r.width = d > 0 ? "calc(".concat(e, " - ").concat(d, "px)") : e, r.maxWidth = r.width) : r.maxWidth = d > 0 ? "calc(100% - ".concat(d, "px)") : "100%"
          }
          for (var f = "", h = 0; h <= t.length; h++) {
            var m = t[t.length - h],
              v = m ? s[m] : s;
            if (f = v.height || f, /%/.test(f)) {
              var y = h ? t.slice(-h) : [],
                x = this.stringToMargin(this.getStyleProperty(s, "margin", y)),
                w = x.top + x.bottom;
              v.height = w > 0 ? "calc(".concat(f, " - ").concat(w, "px)") : f
            }
          }
          return s
        },
        getStyleProperty: function(style, t, e) {
          if (e.length > 0) {
            var n = !0,
              r = !1,
              o = void 0;
            try {
              for (var c, l = e[Symbol.iterator](); !(n = (c = l.next()).done); n = !0) {
                var d = c.value;
                if (style.hasOwnProperty(d) && t in style[d]) return style[d][t]
              }
            } catch (t) {
              r = !0, o = t
            } finally {
              try {
                n || null == l.return || l.return()
              } finally {
                if (r) throw o
              }
            }
          }
          return style.hasOwnProperty(t) ? style[t] : {
            opacity: "1",
            background: "none",
            color: "#333333",
            boxShadow: "none",
            fontWeight: 400,
            fontSize: "16px",
            margin: "0px 0px 0px 0px",
            padding: "0px 0px 0px 0px",
            flex: "none",
            height: "auto",
            width: "auto"
          } [t]
        },
        objToCss: function(t) {
          var e = this;
          if (void 0 === t) return "";
          var n = "",
            o = function(o) {
              if (/:|@/.test(o)) return "continue";
              var c = t[o];
              if (void 0 === c) return "continue";
              [null].concat(Object(r.a)(l[o] || [])).forEach((function(t) {
                var r = t ? "-".concat(t, "-").concat(o) : o;
                n += "  ".concat(e.CamelToChain(r), ": ").concat(c, ";\n")
              }))
            };
          for (var c in t) o(c);
          return n
        },
        radiusToString: function(t, e) {
          return 1 === e ? "".concat(t.leftTop) : 4 === e ? "".concat(t.leftTop, " ").concat(t.rightTop, " ").concat(t.rightBottom, " ").concat(t.leftBottom) : void 0
        },
        stringToMargin: function(t) {
          return this.stringToPadding(t)
        },
        marginToString: function(t, e) {
          return 1 === e ? "".concat(t.bottom, "px") : 2 === e ? "".concat(t.bottom, "px ").concat(t.right, "px") : 3 === e ? "".concat(t.top, "px ").concat(t.right, "px ").concat(t.bottom, "px") : 4 === e ? "".concat(t.top, "px ").concat(t.right, "px ").concat(t.bottom, "px ").concat(t.left, "px") : void 0
        },
        stringToPadding: function(t) {
          var e = 0,
            n = 0,
            r = 0,
            o = 0,
            c = t.split(" ").map((function(t) {
              return parseInt(t, 10)
            }));
          if (1 === c.length) {
            var l = [c[0], c[0], c[0], c[0]];
            e = l[0], n = l[1], r = l[2], o = l[3]
          }
          if (2 === c.length) {
            var d = [c[0], c[0]];
            e = d[0], r = d[1];
            var f = [c[1], c[1]];
            o = f[0], n = f[1]
          }
          if (3 === c.length) {
            e = c[0];
            var h = [c[1], c[1]];
            o = h[0], n = h[1], r = c[2]
          }
          return 4 === c.length && (e = c[0], n = c[1], r = c[2], o = c[3]), {
            top: e,
            right: n,
            bottom: r,
            left: o
          }
        },
        paddingToString: function(t, e) {
          return 1 === e ? "".concat(t.top, "px") : 2 === e ? "".concat(t.top, "px ").concat(t.left, "px") : 3 === e ? "".concat(t.top, "px ").concat(t.left, "px ").concat(t.bottom, "px") : 4 === e ? "".concat(t.top, "px ").concat(t.right, "px ").concat(t.bottom, "px ").concat(t.left, "px") : void 0
        }
      }
    }
  },
  [
    [260, 5, 4, 6]
  ]
]);
