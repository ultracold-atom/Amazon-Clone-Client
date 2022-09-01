exports.ids = [5];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/owner.vue?vue&type=template&id=c8d63f30&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('main',[_vm._ssrNode("<div class=\"container-fluid c-section\"><div class=\"row\"><div class=\"col-sm-3\"></div> <div class=\"col-sm-6\"><div class=\"a-spacing-top-medium\"></div> <h2>Add a New Owner</h2> <form><div class=\"a-spacing-top-medium\"><label>Name</label> <input"+_vm._ssrAttr("value",_vm.name)+" class=\"a-input-text\" style=\"width:100%\"></div> <div class=\"a-spacing-top-medium\"><label>About</label> <input"+_vm._ssrAttr("value",_vm.about)+" class=\"a-input-text\" style=\"width:100%\"></div> <div class=\"a-spacing-top-medium\"><label style=\"margin-bottom:0px\">Add Photo </label> <div class=\"a-row a-spacing-top-medium\"><label class=\"choosefile-button\"><i class=\"fal fa-plus\"></i> <input type=\"file\"> <p style=\"margin-top: -60px\">"+_vm._ssrEscape(_vm._s(_vm.fileName))+"</p></label></div></div> <hr> <div class=\"a-spacing-top-large\"><span class=\"a-button-register\"><span class=\"a-button-inner\"><span class=\"a-button-text\">Add Owner</span></span></span></div></form> <br> <ul class=\"list-group-item\">"+_vm._ssrList(_vm.owners,function(owner){return"<li>"+_vm._ssrEscape(_vm._s(owner.name))+"</li>";})+"</ul></div> <div class=\"col-sm-3\"></div></div></div>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/owner.vue?vue&type=template&id=c8d63f30&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/owner.vue?vue&type=script&lang=js&
/* harmony default export */ var ownervue_type_script_lang_js_ = ({async asyncData({$axios}){try{let response=await $axios.$get("http://localhost:3000/api/owners");return{owners:response.owners};}catch(error){console.log(error);}},data(){return{name:"",about:"",selectedFile:null,fileName:""};},methods:{async onAddOwner(){try{let data=new FormData();data.append("name",this.name);data.append("about",this.about);data.append("photo",this.selectedFile,this.selectedFile.name);let response=await this.$axios.$post("http://localhost:3000/api/owners",data);this.owners.push({name:this.name});}catch(error){console.log(error);}},onFileSelected(e){this.selectedFile=e.target.files[0];this.fileName=e.target.files[0].name;}}});
// CONCATENATED MODULE: ./pages/owner.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ownervue_type_script_lang_js_ = (ownervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/owner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ownervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5302e589"
  
)

/* harmony default export */ var owner = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=owner.js.map