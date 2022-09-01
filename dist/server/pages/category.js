exports.ids = [3];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/category.vue?vue&type=template&id=3d58b97a&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('main',[_vm._ssrNode("<div class=\"container-fluid c-section\"><div class=\"row\"><div class=\"col-sm-3\"></div> <div class=\"col-sm-6\"><div class=\"a-spacing-top-medium\"></div> <h2>Add a New Category</h2> <form><div class=\"a-spacing-top-medium\"><label>Type</label> <input"+_vm._ssrAttr("value",_vm.type)+" class=\"a-input-text\" style=\"width:100%\"></div> <hr> <div class=\"a-spacing-top-large\"><span class=\"a-button-register\"><span class=\"a-button-inner\"><span class=\"a-button-text\">Add Category</span></span></span></div></form> <br> <ul class=\"list-group-item\">"+_vm._ssrList(_vm.categories,function(category){return"<li>"+_vm._ssrEscape(_vm._s(category.type))+"</li>";})+"</ul></div> <div class=\"col-sm-3\"></div></div></div>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/category.vue?vue&type=template&id=3d58b97a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/category.vue?vue&type=script&lang=js&
/* harmony default export */ var categoryvue_type_script_lang_js_ = ({async asyncData({$axios}){try{let response=await $axios.$get("http://localhost:3000/api/categories");return{categories:response.categories};}catch(error){console.log(error);}},data(){return{type:""};},methods:{async onAddCategory(){try{let data={type:this.type};let response=await this.$axios.$post("http://localhost:3000/api/categories",data);if(response.status){this.categories.push(data);}}catch(error){console.log(error);}}}});
// CONCATENATED MODULE: ./pages/category.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_categoryvue_type_script_lang_js_ = (categoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/category.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_categoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "be2ea3d0"
  
)

/* harmony default export */ var category = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=category.js.map