(function (t) { function e(e) { for (var s, i, l = e[0], r = e[1], c = e[2], d = 0, p = []; d < l.length; d++)i = l[d], Object.prototype.hasOwnProperty.call(n, i) && n[i] && p.push(n[i][0]), n[i] = 0; for (s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]); u && u(e); while (p.length) p.shift()(); return o.push.apply(o, c || []), a() } function a() { for (var t, e = 0; e < o.length; e++) { for (var a = o[e], s = !0, l = 1; l < a.length; l++) { var r = a[l]; 0 !== n[r] && (s = !1) } s && (o.splice(e--, 1), t = i(i.s = a[0])) } return t } var s = {}, n = { app: 0 }, o = []; function i(e) { if (s[e]) return s[e].exports; var a = s[e] = { i: e, l: !1, exports: {} }; return t[e].call(a.exports, a, a.exports, i), a.l = !0, a.exports } i.m = t, i.c = s, i.d = function (t, e, a) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a }) }, i.r = function (t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function (t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && "object" === typeof t && t && t.__esModule) return t; var a = Object.create(null); if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var s in t) i.d(a, s, function (e) { return t[e] }.bind(null, s)); return a }, i.n = function (t) { var e = t && t.__esModule ? function () { return t["default"] } : function () { return t }; return i.d(e, "a", e), e }, i.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "/"; var l = window["webpackJsonp"] = window["webpackJsonp"] || [], r = l.push.bind(l); l.push = e, l = l.slice(); for (var c = 0; c < l.length; c++)e(l[c]); var u = r; o.push([0, "chunk-vendors"]), a() })({ 0: function (t, e, a) { t.exports = a("56d7") }, "08fb": function (t, e, a) { "use strict"; a("1545") }, 1: function (t, e) { }, 1545: function (t, e, a) { }, 2407: function (t, e, a) { "use strict"; a("477e") }, "42dc": function (t, e, a) { "use strict"; a("f6d1") }, "477e": function (t, e, a) { }, "56d7": function (t, e, a) { "use strict"; a.r(e); a("cadf"), a("551c"), a("f751"), a("097d"); var s = a("2b0e"), n = a("28dd"), o = (a("f9e3"), a("2dd8"), function () { var t = this, e = t._self._c; return e("div", { staticClass: "app" }, [e("app-header"), e("div", { staticClass: "container-lg cotainer-app" }, [e("div", { staticClass: "main-image" }), e("div", { staticClass: "search-page" }, [e("nav-bar", { attrs: { userInput: t.input }, on: { changedValue: function (e) { t.input = e }, submitValue: t.searchBooks, inputCleared: function (e) { t.input = e } } }), e("div", { directives: [{ name: "show", rawName: "v-show", value: t.books.length || t.textMore, expression: "books.length || textMore" }], staticClass: "book__more" }, [e("span", [t._v('Результаты по запросу "' + t._s(t.inputSearch) + '"\n\t\t\t\t')]), e("span", [t._v("Найдено: " + t._s(t.books.length))])]), e("div", { staticClass: "selects__form" }, [t.books.length ? e("select", { directives: [{ name: "model", rawName: "v-model", value: t.selectedItem, expression: "selectedItem" }], staticClass: "form-select", attrs: { name: "type" }, on: { change: [function (e) { var a = Array.prototype.filter.call(e.target.options, (function (t) { return t.selected })).map((function (t) { var e = "_value" in t ? t._value : t.value; return e })); t.selectedItem = e.target.multiple ? a : a[0] }, t.updateOption] } }, [e("option", { attrs: { value: "all", disabled: "", hidden: "", selected: "" } }, [t._v("Тип печати")]), e("option", { attrs: { value: "all", selected: "" } }, [t._v("Все")]), e("option", { attrs: { value: "books" } }, [t._v("Книги")]), e("option", { attrs: { value: "magazines" } }, [t._v("Журналы")])]) : t._e(), t.books.length ? e("select", { directives: [{ name: "model", rawName: "v-model", value: t.selectedSort, expression: "selectedSort" }], staticClass: "form-select", attrs: { name: "cort" }, on: { change: [function (e) { var a = Array.prototype.filter.call(e.target.options, (function (t) { return t.selected })).map((function (t) { var e = "_value" in t ? t._value : t.value; return e })); t.selectedSort = e.target.multiple ? a : a[0] }, t.updateSort] } }, [e("option", { attrs: { value: "relevance", disabled: "", hidden: "", selected: "" } }, [t._v("Сортировка")]), e("option", { attrs: { value: "relevance" } }, [t._v("По релевантности")]), e("option", { attrs: { value: "newest" } }, [t._v("От новых к старым")])]) : t._e(), t.books.length ? e("select", { directives: [{ name: "model", rawName: "v-model", value: t.selectedFilter, expression: "selectedFilter" }], staticClass: "form-select", attrs: { name: "filter" }, on: { change: [function (e) { var a = Array.prototype.filter.call(e.target.options, (function (t) { return t.selected })).map((function (t) { var e = "_value" in t ? t._value : t.value; return e })); t.selectedFilter = e.target.multiple ? a : a[0] }, t.updateFilter] } }, [e("option", { attrs: { value: "partial", disabled: "", hidden: "", selected: "" } }, [t._v("Фильтрация")]), e("option", { attrs: { value: "partial" } }, [t._v("По умолчанию")]), e("option", { attrs: { value: "free-ebooks" } }, [t._v("Полный обзор")]), e("option", { attrs: { value: "ebooks" } }, [t._v("Элекронные книги")])]) : t._e()]), e("book-results", { attrs: { input: t.input, books: t.books } }), t.books.length ? e("div", { staticClass: "count-pages" }, [e("ul", { staticClass: "pagging__list" }, [e("li", [e("span", { staticClass: "pagging__item item_1 page_active", on: { click: this.changePage } }, [t._v("1")])]), e("li", [e("span", { staticClass: "pagging__item item_2", on: { click: this.changePage } }, [t._v("2")])]), e("li", [e("span", { staticClass: "pagging__item item_3", on: { click: this.changePage } }, [t._v("3")])]), e("li", [e("span", { staticClass: "pagging__item item_4", on: { click: this.changePage } }, [t._v("4")])]), e("li", [e("span", { staticClass: "pagging__item item_5", on: { click: this.changePage } }, [t._v("5")])]), e("li", [e("span", { staticClass: "pagging__item item_all", on: { click: this.changePage } }, [t._v("След")])])])]) : t._e()], 1), e("main")])], 1) }), i = [], l = (a("ac4d"), a("8a81"), a("5df3"), a("1c4c"), a("7f7f"), a("6b54"), function () { var t = this, e = t._self._c; return e("nav", { staticClass: "navbar" }, [e("form", { on: { submit: function (t) { t.preventDefault() } } }, [e("div", { staticClass: "input-field" }, [e("input", { staticClass: "form-control", attrs: { autofocus: "", tabindex: "0", name: "input", placeholder: "Введите название произведения или автора", type: "search", autocomplete: "off" }, domProps: { value: t.userInput }, on: { input: t.valueChange, keyup: function (e) { return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.submitValue.apply(null, arguments) } } }), e("label", { staticClass: "label-icon", attrs: { for: "search" }, on: { click: t.submitValue } }, [e("i", { staticClass: "material-icons" }, [t._v("search")])])])])]) }), r = [], c = { name: "nav-bar", props: ["userInput"], data: function () { return { input: "" } }, mounted: function () { document.documentElement.clientWidth < 426 ? (document.documentElement.classList.add("mobile"), document.getElementsByName("input")[0].placeholder = "Введите название книги") : document.documentElement.classList.remove("mobile") }, methods: { valueChange: function (t) { this.input = t.target.value, this.$emit("changedValue", this.input) }, submitValue: function (t) { "" != this.input ? this.$emit("submitValue") : M.toast({ html: "No search value entered" }) }, clearInput: function (t) { this.input = "", this.$emit("inputCleared", this.input) } } }, u = c, d = (a("f69c"), a("2877")), p = Object(d["a"])(u, l, r, !1, null, null, null), f = p.exports, v = (a("a481"), function () { var t = this, e = t._self._c; return e("div", { staticClass: "book-results" }, [e("div", { staticClass: "cards" }, t._l(t.books, (function (s) { return e("div", { key: s.id, staticClass: "cards__item card", attrs: { id: s.id } }, [e("div", { staticClass: "cards__image" }, [s.volumeInfo.imageLinks ? e("img", { staticClass: "activator", attrs: { src: s.volumeInfo.imageLinks.thumbnail + "&zoom=1" } }) : e("img", { attrs: { src: a("58f1") } })]), e("div", { staticClass: "cards__content" }, [s.volumeInfo.title ? e("div", { staticClass: "cards__title font-weight-bold", on: { click: function (e) { return t.showModal(s.id) } } }, [t._v(t._s(s.volumeInfo.title.length > 60 ? s.volumeInfo.title.slice(0, 60).trim() + "..." : s.volumeInfo.title))]) : t._e(), s.volumeInfo.authors ? e("p", [e("span", { staticClass: "font-weight-bold" }, [t._v("Автор")]), t._v(": " + t._s(s.volumeInfo.authors[0]) + "\n\t\t\t\t")]) : t._e(), s.volumeInfo.publishedDate ? e("p", [e("span", { staticClass: "font-weight-bold" }, [t._v("Дата\n\t\t\t\t\t\tпубликации: ")]), t._v(" " + t._s(s.volumeInfo.publishedDate.replace(/\-/g, ".")) + "\n\t\t\t\t")]) : t._e(), e("div", { staticStyle: { flex: "1 1 auto" } }), e("button", { staticClass: "card__more font-weight-bold btn btn-primary", on: { click: function (e) { return t.showModal(s.id) } } }, [t._v("\n\t\t\t\t\tПодробнее\n\t\t\t\t")]), e("modal", { ref: "modal_id_" + s.id, refInFor: !0, attrs: { book: s }, on: { close: t.closeModal } })], 1)]) })), 0)]) }), m = [], h = function () { var t = this, e = t._self._c; return t.isVisible ? e("div", { staticClass: "modal-backdrop", staticStyle: { opacity: "1" } }, [e("div", { staticClass: "modal", attrs: { role: "dialog", "aria-labelledby": "modalTitle", "aria-describedby": "modalDescription" } }, [e("header", { staticClass: "modal-header", attrs: { id: "modalTitle" } }, [e("button", { staticClass: "btn-closed", attrs: { type: "button" }, on: { click: t.close } }, [e("span", [t._v("×")])])]), e("section", { staticClass: "modal-body", attrs: { id: "modalDescription" } }, [t._t("body", (function () { return [e("div", { staticClass: "modal-body__content" }, [t.book.volumeInfo.title ? e("div", { staticClass: "cards__title font-weight-bold" }, [t._v(t._s(t.book.volumeInfo.title) + "\n\t\t\t\t\t")]) : t._e(), t.book.volumeInfo.authors ? e("p", [e("span", { staticClass: "font-weight-bold" }, [t._v("Автор")]), t._v(": " + t._s(t.book.volumeInfo.authors[0]) + "\n\t\t\t\t\t")]) : t._e(), e("p", { staticClass: "text-card-text" }, [e("span", { staticClass: "font-weight-bold" }, [t._v("Издатель:")]), t._v("\n\t\t\t\t\t\t" + t._s(t.book.volumeInfo.publisher) + "\n\t\t\t\t\t")]), t.book.volumeInfo.publishedDate ? e("p", [e("span", { staticClass: "font-weight-bold" }, [t._v("Дата\n\t\t\t\t\t\t\tпубликации: ")]), t._v(" " + t._s(t.book.volumeInfo.publishedDate.replace(/\-/g, ".")) + "\n\t\t\t\t\t")]) : t._e(), t.book.volumeInfo.description ? e("p", { staticClass: "modal-body__description" }, [t._v("\n\t\t\t\t\t\t" + t._s(t.book.volumeInfo.description) + "\n\t\t\t\t\t")]) : t._e(), e("div", { staticStyle: { flex: "1 1 auto" } }), e("div", { staticClass: "modal-body__btn" }, [e("a", { staticClass: "btn btn-primary-modal", attrs: { href: t.book.accessInfo.webReaderLink, target: "_blank" } }, [t._v("Читать\n\t\t\t\t\t\t\tкнигу")]), e("a", { staticClass: "btn btn-primary-modal", attrs: { href: t.book.saleInfo.buyLink, target: "_blank" } }, [t._v("Купить книгу")])])]), e("div", { staticClass: "modal-body__image" }, [t.book.volumeInfo.imageLinks ? e("img", { staticClass: "activator", attrs: { src: t.book.volumeInfo.imageLinks.thumbnail } }) : e("img", { attrs: { src: a("58f1") } }), e("p", [t.book.volumeInfo.pageCount ? e("span", [t._v("\n\t\t\t\t\t\t\t" + t._s(t.book.volumeInfo.pageCount + " " + t.getNoun(t.book.volumeInfo.pageCount, "страница", "страницы", "страниц")) + "\n\n\t\t\t\t\t\t")]) : e("span", { staticClass: "not-found" }, [t._v("Количество страниц неизвестно")])])])] }))], 2)])]) : t._e() }, g = [], _ = { name: "modal", props: ["book"], data: function () { return { isVisible: !1 } }, methods: { show: function () { this.isVisible = !0 }, close: function () { this.$emit("close"), this.isVisible = !1 }, getNoun: function (t, e, a, s) { var n = Math.abs(t); return n %= 100, n >= 5 && n <= 20 ? s : (n %= 10, 1 === n ? e : n >= 2 && n <= 4 ? a : s) } } }, b = _, k = (a("2407"), Object(d["a"])(b, h, g, !1, null, null, null)), y = k.exports, C = { name: "book-results", components: { modal: y }, props: ["input", "books"], data: function () { return { isModalVisible: !1 } }, beforeRouteEnter: function () { document.documentElement.classList.remove("open-modal") }, methods: { showModal: function (t) { var e = this.$refs["modal_id_" + t]; e && e[0].show(), document.documentElement.classList.add("open-modal") }, closeModal: function () { this.isModalVisible = !1, document.documentElement.classList.remove("open-modal") } } }, w = C, I = (a("42dc"), Object(d["a"])(w, v, m, !1, null, null, null)), P = I.exports, S = function () { var t = this; t._self._c; return t._m(0) }, x = [function () { var t = this, e = t._self._c; return e("div", { staticClass: "header" }, [e("div", { staticClass: "container-lg" }, [e("div", { staticClass: "header__row" }, [e("a", { staticClass: "header__logo", attrs: { href: "https://danil1101.github.io/BookSearch/" } }, [e("img", { staticClass: "header__logo", attrs: { src: a("d7f8"), alt: "" } }), e("div", [t._v("Books Search")])]), e("div", { staticClass: "header__list" }, [e("a", { staticClass: "header__item", attrs: { href: "https://github.com/danil1101/BookSearch", target: "_blank" } }, [t._v("GitHub")])])])])]) }], O = { name: "app-header", data: function () { return {} } }, A = O, L = (a("08fb"), Object(d["a"])(A, S, x, !1, null, "077a27bd", null)), j = L.exports; function B(t, e) { var a = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!a) { if (Array.isArray(t) || (a = V(t)) || e && t && "number" === typeof t.length) { a && (t = a); var s = 0, n = function () { }; return { s: n, n: function () { return s >= t.length ? { done: !0 } : { done: !1, value: t[s++] } }, e: function (t) { throw t }, f: n } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var o, i = !0, l = !1; return { s: function () { a = a.call(t) }, n: function () { var t = a.next(); return i = t.done, t }, e: function (t) { l = !0, o = t }, f: function () { try { i || null == a.return || a.return() } finally { if (l) throw o } } } } function V(t, e) { if (t) { if ("string" === typeof t) return T(t, e); var a = Object.prototype.toString.call(t).slice(8, -1); return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? T(t, e) : void 0 } } function T(t, e) { (null == e || e > t.length) && (e = t.length); for (var a = 0, s = new Array(e); a < e; a++)s[a] = t[a]; return s } var E = { components: { AppHeader: j, NavBar: f, BookResults: P }, props: ["userInput"], data: function () { return { input: "", books: [], loading: !1, isTyping: !1, title: "", inputSearch: "", textMore: !1, countPage: "0", selectedItem: "all", selectedFilter: "partial", selectedSort: "relevance" } }, watch: { input: function () { this.isTyping = !0; var t = this; setTimeout((function () { t.isTyping = !1 }), 500) } }, methods: { isClassPageActive: function () { var t = document.querySelectorAll(".page_active"); if (t) { var e, a = B(t); try { for (a.s(); !(e = a.n()).done;) { var s = e.value; s.classList.remove("page_active") } } catch (n) { a.e(n) } finally { a.f() } } window.scrollTo(0, -200) }, changePage: function (t) { t.target.closest(".item_1") ? (this.countPage = 0, this.isClassPageActive(), t.target.classList.add("page_active")) : t.target.closest(".item_2") ? (this.countPage = 41, this.isClassPageActive(), t.target.classList.add("page_active")) : t.target.closest(".item_3") ? (this.countPage = 81, this.isClassPageActive(), t.target.classList.add("page_active")) : t.target.closest(".item_4") ? (this.countPage = 121, this.isClassPageActive(), t.target.classList.add("page_active")) : t.target.closest(".item_5") ? (this.countPage = 141, this.isClassPageActive(), t.target.classList.add("page_active")) : t.target.closest(".item_all") && (this.countPage += 41, this.isClassPageActive(), t.target.classList.add("page_active")), this.searchBooks() }, updateOption: function (t) { this.selectedItem = t.target.value, this.searchBooks() }, updateSort: function (t) { this.selectedSort = t.target.value, this.searchBooks() }, updateFilter: function (t) { this.selectedFilter = t.target.value, this.searchBooks() }, searchBooks: function (t) { var e = this; this.loading = !0; var a = this.input, s = "https://www.googleapis.com/books/v1/volumes?q=".concat(a, "&maxResults=40&startIndex=").concat(this.countPage, "&filter=").concat(this.selectedFilter, "&printType=").concat(this.selectedItem, "&orderBy=").concat(this.selectedSort); console.log(s), this.$http.get(s).then((function (t) { e.books = t.body.items, e.inputSearch = e.input })).then((function () { var t = document.querySelectorAll(".carousel"); M.Carousel.init(t); e.loading = !1, e.results = !0 })).catch((function (t) { e.loading = !1, console.log(t), M.toast({ html: "Oops! Something went wrong!" }) })) } } }, F = E, N = (a("abab"), Object(d["a"])(F, o, i, !1, null, null, null)), $ = N.exports; s["a"].use(n["a"]), s["a"].config.productionTip = !1, new s["a"]({ render: function (t) { return t($) } }).$mount("#app") }, "58f1": function (t, e, a) { t.exports = a.p + "img/no-img.34c75f05.png" }, a00b: function (t, e, a) { }, abab: function (t, e, a) { "use strict"; a("cedb") }, cedb: function (t, e, a) { }, d7f8: function (t, e, a) { t.exports = a.p + "BookSearch/img/audiobooks.2cbb7624.png" }, f69c: function (t, e, a) { "use strict"; a("a00b") }, f6d1: function (t, e, a) { } });
//# sourceMappingURL=app.2691d361.js.map