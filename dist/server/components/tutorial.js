exports.ids = [2];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tutorial.vue?vue&type=template&id=0179488b&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('main',[_vm._ssrNode("<div class=\"a-spacing-large\"></div> "),_vm._ssrNode("<div class=\"container-fluid browsing-history\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-8 col-8\">","</div>",[_vm._ssrNode("<h1 class=\"a-size-large a-spacing-none a-text-normal\">All Products</h1> "),_c('nuxt-link',{staticClass:"a-button-buy-again",attrs:{"to":"/products"}},[_vm._v("Add a New Product")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"a-button-history margin-right-10",attrs:{"to":"/category"}},[_vm._v("Add a New Category")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"a-button-history margin-right-10",attrs:{"to":"/owner"}},[_vm._v("Add a New Owner")])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid browsing-history\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l(_vm.products,function(product,index){return _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb\">","</div>",[_vm._ssrNode("<div class=\"history-box\">","</div>",[_vm._ssrNode("<a href=\"#\" class=\"a-link-normal\"><img"+_vm._ssrAttr("src",product.photo)+" class=\"img-fluid\"></a> <div class=\"a-spacing-top-base asin-title\"><span class=\"a-text-normal\"><div class=\"p13n-sc-truncated\">"+_vm._ssrEscape(_vm._s(product.title))+"</div></span></div> <div class=\"a-row\"><a href=\"#\"><i class=\"fas fa-star\"></i> <i class=\"fas fa-star\"></i> <i class=\"fas fa-star\"></i> <i class=\"fas fa-star\"></i> <i class=\"fas fa-star\"></i></a> <span class=\"a-letter-space\"></span> <span class=\"a-color-tertiary a-size-small asin-reviews\">(1732)</span></div> <div class=\"a-row\"><span class=\"a-size-base a-color-price\"><span class=\"p13n-sc-price\">"+_vm._ssrEscape("$"+_vm._s(product.price))+"</span></span></div> "),_vm._ssrNode("<div class=\"a-row\">","</div>",[_c('nuxt-link',{staticClass:"a-button-history margin-right-10",attrs:{"to":`/products/${product._id}`}},[_vm._v("Update")]),_vm._ssrNode(" <a href=\"#\" class=\"a-button-history margin-right-10\">Delete</a>")],2)],2)]);}),0)])],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Tutorial.vue?vue&type=template&id=0179488b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tutorial.vue?vue&type=script&lang=js&
/* harmony default export */ var Tutorialvue_type_script_lang_js_ = ({name:'NuxtTutorial',async asyncData({$axios}){try{let response=await $axios.$get("http://localhost:3000/api/products");console.log(response);return{products:response.products};}catch(error){}},methods:{async onDeleteProduct(id,index){try{let response=await this.$axios.$delete(`http://localhost:3000/api/products/${id}`);if(response.status){this.products.splice(index,1);}}catch(error){console.log(error);}}}});
// CONCATENATED MODULE: ./components/Tutorial.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tutorialvue_type_script_lang_js_ = (Tutorialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Tutorial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tutorialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1a3a43f2"
  
)

/* harmony default export */ var Tutorial = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tutorial.js.map