exports.ids = [7];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/index.vue?vue&type=template&id=f12873fc&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('main',[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-3\"></div> "),_vm._ssrNode("<div class=\"col-sm-6\">","</div>",[_vm._ssrNode("<div class=\"a-section\">","</div>",[_vm._ssrNode("<div class=\"a-spacing-top-medium\"></div> <h2 style=\"text-align: center\">Add a new Product</h2> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"a-spacing-top-medium\">","</div>",[_vm._ssrNode("<label>Category</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:_vm.categoryID,expression:"categoryID"}],staticClass:"a-select-option",on:{"change":function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.categoryID=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},_vm._l(_vm.categories,function(category){return _c('option',{key:category._id,domProps:{"value":category._id}},[_vm._v(_vm._s(category.type))]);}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"a-spacing-top-medium\">","</div>",[_vm._ssrNode("<label>Owner</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:_vm.ownerID,expression:"ownerID"}],staticClass:"a-select-option",on:{"change":function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.ownerID=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},_vm._l(_vm.owners,function(owner){return _c('option',{key:owner._id,domProps:{"value":owner._id}},[_vm._v(_vm._s(owner.name))]);}),0)],2),_vm._ssrNode(" <div class=\"a-spacing-top-medium\"><label style=\"margin-bottom: 0px;\">Title</label> <input type=\"text\""+_vm._ssrAttr("value",_vm.title)+" class=\"a-input-text\" style=\"width: 100%\"></div> <div class=\"a-spacing-top-medium\"><label style=\"margin-bottom: 0px;\">Price</label> <input type=\"number\""+_vm._ssrAttr("value",_vm.price)+" class=\"a-input-text\" style=\"width: 100%\"></div> <div class=\"a-spacing-top-medium\"><label style=\"margin-bottom: 0px;\">Stock Quantity</label> <input type=\"number\""+_vm._ssrAttr("value",_vm.stockQuantity)+" class=\"a-input-text\" style=\"width: 100%\"></div> <div class=\"a-spacing-top-medium\"><label style=\"margin-bottom: 0px;\">Description</label> <textarea placeholder=\"Provide details such as a product description\" style=\"width: 100%\">"+_vm._ssrEscape(_vm._s(_vm.description))+"</textarea></div> <div class=\"a-spacing-top-medium\"><label style=\"margin-bottom: 0px;\">Add Photo</label> <div class=\"a-row a-spacing-top-medium\"><label class=\"choosefile-button\"><i class=\"fal fa-plus\"></i> <input type=\"file\"> <p style=\"margin-top: -70px\">"+_vm._ssrEscape(_vm._s(_vm.fileName))+"</p></label></div></div> <hr> <div class=\"a-spacing-top-large\"><span class=\"a-button-register\"><span class=\"a-button-inner\"><span class=\"a-button-text\">Add product</span></span></span></div>")],2)],2)]),_vm._ssrNode(" <div class=\"col-sm-3\"></div>")],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/products/index.vue?vue&type=template&id=f12873fc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/index.vue?vue&type=script&lang=js&
/* harmony default export */ var productsvue_type_script_lang_js_ = ({async asyncData({$axios}){try{let categories=$axios.$get("http://localhost:3000/api/categories");let owners=$axios.$get("http://localhost:3000/api/owners");const[catResponse,ownerResponse]=await Promise.all([categories,owners]);console.log(catResponse);return{categories:catResponse.categories,owners:ownerResponse.owners};}catch(err){console.log(err);}},data(){return{categoryID:null,ownerID:null,title:"",price:0,description:"",selectedFile:null,stockQuantity:1,fileName:""};},methods:{onFileSelected(event){this.selectedFile=event.target.files[0];console.log(this.selectedFile);this.fileName=event.target.files[0].name;},async onAddProduct(){let data=new FormData();data.append("title",this.title);data.append("price",this.price);data.append("description",this.description);data.append("ownerID",this.ownerID);data.append("stockQuantity",this.stockQuantity);data.append("categoryID",this.categoryID);data.append("photo",this.selectedFile,this.selectedFile.name);let result=await this.$axios.$post("http://localhost:3000/api/products",data);this.$router.push("/");}}});
// CONCATENATED MODULE: ./pages/products/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_productsvue_type_script_lang_js_ = (productsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/products/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1c7871f4"
  
)

/* harmony default export */ var products = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map