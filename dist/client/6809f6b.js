(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{327:function(t,r,e){"use strict";e.r(r);var n=e(32),c=(e(160),e(60),{name:"NuxtTutorial",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function r(){var e,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.$axios,r.prev=1,r.next=4,e.$get("http://localhost:3000/api/products");case 4:return n=r.sent,console.log(n),r.abrupt("return",{products:n.products});case 9:r.prev=9,r.t0=r.catch(1);case 11:case"end":return r.stop()}}),r,null,[[1,9]])})))()},methods:{onDeleteProduct:function(t,r){var e=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.$delete("http://localhost:3000/api/products/".concat(t));case 3:n.sent.status&&e.products.splice(r,1),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}}),o=e(66),component=Object(o.a)(c,(function(){var t=this,r=t._self._c;return r("main",[r("div",{staticClass:"a-spacing-large"}),t._v(" "),r("div",{staticClass:"container-fluid browsing-history"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8 col-8"},[r("h1",{staticClass:"a-size-large a-spacing-none a-text-normal"},[t._v("All Products")]),t._v(" "),r("nuxt-link",{staticClass:"a-button-buy-again",attrs:{to:"/products"}},[t._v("Add a New Product")]),t._v(" "),r("nuxt-link",{staticClass:"a-button-history margin-right-10",attrs:{to:"/category"}},[t._v("Add a New Category")]),t._v(" "),r("nuxt-link",{staticClass:"a-button-history margin-right-10",attrs:{to:"/owner"}},[t._v("Add a New Owner")])],1)])]),t._v(" "),r("div",{staticClass:"container-fluid browsing-history"},[r("div",{staticClass:"row"},t._l(t.products,(function(e,n){return r("div",{key:n,staticClass:"col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb"},[r("div",{staticClass:"history-box"},[r("a",{staticClass:"a-link-normal",attrs:{href:"#"}},[r("img",{staticClass:"img-fluid",attrs:{src:e.photo}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-base asin-title"},[r("span",{staticClass:"a-text-normal"},[r("div",{staticClass:"p13n-sc-truncated"},[t._v(t._s(e.title))])])]),t._v(" "),t._m(0,!0),t._v(" "),r("div",{staticClass:"a-row"},[r("span",{staticClass:"a-size-base a-color-price"},[r("span",{staticClass:"p13n-sc-price"},[t._v("$"+t._s(e.price))])])]),t._v(" "),r("div",{staticClass:"a-row"},[r("nuxt-link",{staticClass:"a-button-history margin-right-10",attrs:{to:"/products/".concat(e._id)}},[t._v("Update")]),t._v(" "),r("a",{staticClass:"a-button-history margin-right-10",attrs:{href:"#"},on:{click:function(r){return t.onDeleteProduct(e._id,n)}}},[t._v("Delete")])],1)])])})),0)])])}),[function(){var t=this,r=t._self._c;return r("div",{staticClass:"a-row"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"})]),t._v(" "),r("span",{staticClass:"a-letter-space"}),t._v(" "),r("span",{staticClass:"a-color-tertiary a-size-small asin-reviews"},[t._v("(1732)")])])}],!1,null,null,null);r.default=component.exports}}]);