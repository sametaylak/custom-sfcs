import{normalizeComponent,createInjector}from"vue-runtime-helpers";//
//
//
//
//
var script={name:"CustomButton",methods:{onClick(){this.$emit("click")}}};/* script */const __vue_script__=script;/* template */var __vue_render__=function(){var d=this,a=d.$createElement,b=d._self._c||a;return b("button",{on:{click:d.onClick}},[d._t("default")],2)},__vue_staticRenderFns__=[];/* style */const __vue_inject_styles__=function(b){b&&b("data-v-4e019815_0",{source:"button[data-v-4e019815]{background:red}",map:void 0,media:void 0})},__vue_scope_id__="data-v-4e019815",__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,"data-v-4e019815",!1,void 0,!1,createInjector,void 0,void 0);//
var script$1={name:"CustomCounter",components:{CustomButton:__vue_component__},data(){return{count:0}},methods:{onIncreaseClick(){this.count++},onDecreaseClick(){this.count--}}};/* script */const __vue_script__$1=script$1;/* template */var __vue_render__$1=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",[c("custom-button",{on:{click:a.onIncreaseClick}},[a._v("\n        Increase\n    ")]),a._v(" "),c("custom-button",{on:{click:a.onDecreaseClick}},[a._v("\n        Decrease\n    ")]),a._v(" "),c("span",[a._v(a._s(a.count))])],1)},__vue_staticRenderFns__$1=[];/* style */const __vue_inject_styles__$1=void 0,__vue_scope_id__$1=void 0,__vue_module_identifier__$1=void 0,__vue_is_functional_template__$1=!1,__vue_component__$1=normalizeComponent({render:__vue_render__$1,staticRenderFns:__vue_staticRenderFns__$1},void 0,__vue_script__$1,__vue_scope_id__$1,__vue_is_functional_template__$1,__vue_module_identifier__$1,!1,void 0,void 0,void 0);/* scoped */export default __vue_component__$1;
