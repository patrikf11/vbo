(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vbo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"#fcb69f",dark:"",src:"https://picsum.photos/900/60?random"}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.reload}},[a("v-icon",[t._v("mdi-sync")])],1)],1),a("v-main",{attrs:{app:""}},[a(t.page,{tag:"component"})],1),a("v-footer",{attrs:{app:"",bottom:"",padless:""}},[a("v-col",{staticClass:"text-center text-capitalize",attrs:{cols:"12"}},[t._v(" "+t._s(t.dt)+" ")])],1),a("v-navigation-drawer",{attrs:{absolute:"",bottom:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.pages,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-title",[t._v(t._s(e.page))])],1)})),1)],1)],1)],1)},o=[],i=a("5530"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.bmeLoading?t._e():a("v-container",[t.grr?a("v-row",{staticClass:"flex-nowrap justify-center"},t._l(Object.values(t.bmeKind),(function(e){return a("GaugeWindowItem",{key:e.name,attrs:{src:t.getGaugeData(e)}})})),1):t._e(),t.grr?t._e():a("v-row",{staticClass:"flex-nowrap justify-center",model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[a("v-window",{attrs:{reverse:""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(Object.values(t.bmeKind),(function(e){return a("v-window-item",{key:e.name},[a("v-col",[a("GaugeWindowItem",{attrs:{src:t.getGaugeData(e)}})],1)],1)})),1)],1),t.grr?t._e():a("v-card-actions",{staticClass:"justify-space-between",staticStyle:{"flex-direction":"column"}},[a("v-item-group",{staticClass:"text-center",attrs:{mandatory:""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(Object.values(t.bmeKind),(function(e){return a("v-item",{key:e.name,scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active,r=e.toggle;return[a("v-btn",{attrs:{"input-value":n,icon:""},on:{click:r}},[a("v-icon",[t._v("mdi-record")])],1)]}}],null,!0)})})),1)],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"text-center"},[a("RadialGauge",{attrs:{value:t.val,options:t.opts}})],1)},u=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("canvas",{staticClass:"canvas-gauges"})},f=[],p=(a("a9e3"),a("af13")),v={name:"RadialGauge",props:{value:Number,options:{type:Object,default:function(){return{}}}},data:function(){return{chart:null}},mounted:function(){this.chart=new p["RadialGauge"](Object.assign({},this.options,{renderTo:this.$el,value:this.value})).draw(),this.chart.value=this.value},beforeDestroy:function(){this.chart.destroy()},watch:{value:function(t){this.chart.value=t},options:function(){this.chart.update(this.options)}}},m=v,b=a("2877"),h=Object(b["a"])(m,d,f,!1,null,null,null),j=h.exports,g={name:"GaugeCard",props:{src:{type:Object,default:function(){return{dta:[],opts:{}}}},header:null},data:function(){return{}},computed:{opts:function(){var t;return(null===(t=this.src)||void 0===t?void 0:t.opts)||{}},val:function(){var t,e,a,n;return null!==(t=this.src)&&void 0!==t&&null!==(e=t.dta)&&void 0!==e&&e.value?1*(null===(a=this.src)||void 0===a||null===(n=a.dta)||void 0===n?void 0:n.value):0}},components:{RadialGauge:j}},y=g,k=a("6544"),w=a.n(k),O=a("a523"),V=Object(b["a"])(y,l,u,!1,null,null,null),_=V.exports;w()(V,{VContainer:O["a"]});var x=a("2f62"),C=a("bee2"),E=a("d4ec"),T=a("ade3"),P=(a("b0c0"),Object(C["a"])((function t(e,a){Object(E["a"])(this,t),this.name=e,this.apiKey=a})));Object(T["a"])(P,"PRESSURE",new P("pressure","field2")),Object(T["a"])(P,"TEMPERATURE",new P("temperature","field1")),Object(T["a"])(P,"HUMIDITY",new P("humidity","field3"));var S=Object(C["a"])((function t(e,a){Object(E["a"])(this,t),this.name=e,this.apiKey=a}));Object(T["a"])(S,"VOLTAGE",new S("voltage","field1")),Object(T["a"])(S,"CURRENT",new S("current","field2")),Object(T["a"])(S,"POWER",new S("power","field5")),Object(T["a"])(S,"TEMPERATURE",new S("temperature","field8"));var z=a("2909"),A=a("2ef0"),L={units:"",title:"",height:250,width:250,minValue:0,maxValue:0,strokeTicks:!0,colorBar:"white",barProgress:!1,colorBarProgress:"blue",highlights:[],minorTicks:0,majorTicks:[],colorPlate:"#fff",borderShadowWidth:0,borders:!1,needleType:"arrow",needleShadow:!0,needleWidth:2,needleCircleSize:7,needleCircleOuter:!0,needleCircleInner:!0,numberSide:"left",needleSide:"left",animationDuration:1500,animationRule:"bounce",barWidth:15,valueBox:!0,valueBoxStroke:5,valueTextShadow:!0,valueDec:2,valueInt:1,barBeginCircle:0,fontNumbersSize:28,fontUnitsSize:25,fontValueSize:30};function I(t,e){var a=1*e,n=1*t;return a<n?[{from:e,to:t,color:"red"}]:a>n?[{from:t,to:e,color:"blue"}]:[]}function R(t,e,a){var n,r,o,i=Object(A["cloneDeep"])(L);P.PRESSURE.name==t.name&&(i.units="hPa",i.title="Pressure.",i.minValue=960,i.maxValue=1060,i.minorTicks=10,i.fontNumbersSize=20,i.majorTicks=["","970","980","990","1000","","1020","1030","1040","1050",""],i.highlights=[],(n=i.highlights).push.apply(n,Object(z["a"])(I(e,a))));P.HUMIDITY.name==t.name&&(i.units="%RH",i.title="Humidity.",i.minValue=0,i.maxValue=100,i.minorTicks=5,i.majorTicks=["0","","20","","40","","60","","80","","100"],i.highlights=[],(r=i.highlights).push.apply(r,Object(z["a"])(I(e,a))));P.TEMPERATURE.name==t.name&&(i.units="°C",i.title="Temp.",i.minValue=-40,i.maxValue=40,i.highlights=[{from:-40,to:-15,color:"lightblue"},{from:30,to:40,color:"red"}],i.minorTicks=3,i.majorTicks=["","-30","-20","-10","","10","20","30",""],(o=i.highlights).push.apply(o,Object(z["a"])(I(e,a))));return i}function D(t,e){return{dta:e,opts:R(t,null===e||void 0===e?void 0:e.value,null===e||void 0===e?void 0:e.prevValue)}}var M={name:"Weather",data:function(){return{model:1,bmeKind:P}},methods:{getGaugeData:function(t){return D(t,this.getBMECurrent(t))}},computed:Object(i["a"])(Object(i["a"])({},Object(x["b"])(["bmeLoading","getBMECurrent"])),{},{grr:function(){return this.$vuetify.breakpoint.smAndUp}}),mounted:function(){},created:function(){},components:{GaugeWindowItem:_}},B=M,G=a("8336"),U=a("99d9"),K=a("62ad"),H=a("132d"),$=a("d903"),W=a("604c"),N=a("0fd9"),q=a("f665"),F=a("1e6c"),J=Object(b["a"])(B,s,c,!1,null,null,null),Y=J.exports;w()(J,{VBtn:G["a"],VCardActions:U["a"],VCol:K["a"],VContainer:O["a"],VIcon:H["a"],VItem:$["a"],VItemGroup:W["b"],VRow:N["a"],VWindow:q["a"],VWindowItem:F["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"pa-4":""}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:t.cols}},[a("v-card",{staticClass:"pb-4"},[a("v-card-title",[t._v(" Solar array status ")]),a("Chart",{attrs:{chartData:t.getChartData(t.victronKind.VOLTAGE),height:t.h}})],1)],1),a("v-col",{attrs:{cols:t.cols}},[a("v-card",[a("v-card-title",[t._v(" Voltage ")]),a("Chart",{attrs:{chartData:t.getChartData(t.victronKind.VOLTAGE),height:t.h}})],1)],1)],1)],1)},X=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-container",style:t.grr},[a("canvas",{ref:"canvas",staticClass:"vue-chart-js"})])},tt=[],et=(a("99af"),a("30ef")),at=a.n(et),nt={name:"Chart",props:{height:{type:String,default:""},width:{type:String,default:""},chartData:{type:Object,default:function(){return{}}}},data:function(){return{chart:null}},mounted:function(){var t=this.$refs.canvas;this.chart=new at.a(t,this.chartData)},methods:{},beforeDestroy:function(){this.chart.destroy()},computed:{grr:function(){return"position: relative; height:".concat(this.height,"; width:").concat(this.width)}},watch:{chartData:function(t){this.chart.options=t.options,this.chart.data=t.data,this.chart.update()}}},rt=nt,ot=Object(b["a"])(rt,Z,tt,!1,null,null,null),it=ot.exports,st=(a("d81d"),a("b166")),ct=a("e3ee"),lt=a("0f39"),ut={type:"line",data:{datasets:[{label:"Temperature",data:[15,20,40,41],fill:!1}],labels:["January","","March","April"]},options:{maintainAspectRatio:!1,responsive:!0,legend:{display:!1},elements:{point:{radius:0}},scales:{xAxes:[{type:"time",time:{unit:"hour",displayFormats:{hour:"HH:mm"}},scaleLabel:{display:!0,labelString:"tiden"}}]}}};function dt(t){var e=Object(A["cloneDeep"])(ut),a=t.map((function(t){var e;return(null!==(e=t.value)&&void 0!==e?e:0)/1e3})),n=t.map((function(t){return Object(st["a"])(Object(ct["a"])(t.dt),"HH:mm",{locale:lt["a"]})})),r=t.map((function(t){return t.dt}));return console.log(n),e.data={datasets:[{label:"Voltage",data:a,fill:!1}],labels:r},e.options.scales.x={title:{display:!0,text:"Month",color:"#911"}},e}function ft(t){console.log(t)}var pt={name:"Solar",data:function(){return{victronKind:S}},methods:{getChartData:function(t){var e=e=this.getVictronHist(t);return ft(this.getVictronPayload),dt(e)||{}}},computed:Object(i["a"])(Object(i["a"])({},Object(x["b"])(["getVictronCurrent","getVictronHist","getVictronPayload"])),{},{cols:function(){return this.$vuetify.breakpoint.smAndUp?6:12},h:function(){return this.$vuetify.breakpoint.smAndUp?"75vh":"35vh"}}),components:{Chart:it}},vt=pt,mt=a("b0af"),bt=Object(b["a"])(vt,Q,X,!1,null,null,null),ht=bt.exports;w()(bt,{VCard:mt["a"],VCardTitle:U["b"],VCol:K["a"],VContainer:O["a"],VRow:N["a"]});var jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h3",[t._v("About something")]),a("p",[t._v(" But for now mostly nothing ")])])},gt=[],yt={name:"About",data:function(){return{n:null,n1:null,n2:null}},methods:{upd:function(t){this.name=t.target.value}}},kt=yt,wt=Object(b["a"])(kt,jt,gt,!1,null,null,null),Ot=wt.exports;w()(wt,{VContainer:O["a"]});var Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h3",[a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{"x-small":""}},"v-btn",r,!1),n),[t._v(" keyboardvariants ")])]}}])},[a("v-list",[a("v-list-item-group",{model:{value:t.variant,callback:function(e){t.variant=e},expression:"variant"}},t._l(t.opts,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-action",[a("v-list-item-title",[t._v(t._s(e.type)+"-"+t._s(e.inputmode)+" ")])],1)],1)})),1)],1)],1),t._v(" Input keyboard test")],1),a("v-divider"),t._v(" Using vue databinding "),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.type)+"-"+t._s(t.inputmode)+" ")]),a("v-col",{attrs:{cols:"3"}},["checkbox"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticStyle:{background:"aliceblue"},attrs:{inputmode:t.inputmode,type:"checkbox"},domProps:{checked:Array.isArray(t.val)?t._i(t.val,null)>-1:t.val},on:{change:function(e){var a=t.val,n=e.target,r=!!n.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);n.checked?i<0&&(t.val=a.concat([o])):i>-1&&(t.val=a.slice(0,i).concat(a.slice(i+1)))}else t.val=r}}}):"radio"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticStyle:{background:"aliceblue"},attrs:{inputmode:t.inputmode,type:"radio"},domProps:{checked:t._q(t.val,null)},on:{change:function(e){t.val=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticStyle:{background:"aliceblue"},attrs:{inputmode:t.inputmode,type:t.type},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}})]),a("v-col",{attrs:{cols:"3"}},[t._v(" == "+t._s(t.val))])],1),a("v-divider"),t._v(" Using input events "),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.type)+"-"+t._s(t.inputmode)+" ")]),a("v-col",{attrs:{cols:"3"}},[a("input",{staticStyle:{background:"aliceblue"},attrs:{type:t.type,inputmode:t.inputmode},on:{input:function(e){return t.handleInput(e)}}})]),a("v-col",{attrs:{cols:"3"}},[t._v(" == "+t._s(t.inputVal)+" ")])],1),a("v-divider")],1)},_t=[],xt={name:"About",data:function(){return{val:null,variant:0,opts:[{id:0,type:" ",inputmode:" "},{id:1,type:"text",inputmode:"numeric"},{id:2,type:"text",inputmode:"decimal"},{id:3,type:"number",inputmode:"numeric"},{id:4,type:"number",inputmode:"decimal"}],inputVal:null}},methods:{handleInput:function(t){this.inputVal=t.target.value}},computed:{type:function(){var t;return null===(t=this.opts[this.variant])||void 0===t?void 0:t.type},inputmode:function(){var t;return null===(t=this.opts[this.variant])||void 0===t?void 0:t.inputmode}}},Ct=xt,Et=a("ce7e"),Tt=a("8860"),Pt=a("da13"),St=a("1800"),zt=a("1baa"),At=a("5d23"),Lt=a("e449"),It=Object(b["a"])(Ct,Vt,_t,!1,null,null,null),Rt=It.exports;w()(It,{VBtn:G["a"],VCol:K["a"],VContainer:O["a"],VDivider:Et["a"],VList:Tt["a"],VListItem:Pt["a"],VListItemAction:St["a"],VListItemGroup:zt["a"],VListItemTitle:At["a"],VMenu:Lt["a"],VRow:N["a"]});a("fb6a"),a("d3b7");var Dt,Mt,Bt="fetchBME",Gt="fetchVictron",Ut="loadingBME",Kt="loadingVictron";function Ht(t,e){return t.bmePayload.map((function(t){return{value:t[e],dt:null===t||void 0===t?void 0:t.created_at}}))}function $t(t,e){return t.victronPayload.map((function(t){return{value:t[e],dt:null===t||void 0===t?void 0:t.created_at}}))}function Wt(t,e){var a=t.bmePayload.slice(-1)[0],n=t.bmePayload.slice(-13,-12)[0],r=a&&a[e]?a[e]:0,o=n&&n[e]?n[e]:0;return{value:r,prevValue:o,dt:null===a||void 0===a?void 0:a.created_at}}function Nt(t,e){var a=t.victronPayload.slice(-1)[0],n=t.victronPayload.slice(-13,-12)[0],r=a&&a[e]?a[e]:0,o=n&&n[e]?n[e]:0;return{value:r,prevValue:o,dt:null===a||void 0===a?void 0:a.created_at}}n["a"].use(x["a"]);var qt=new x["a"].Store({state:{bmePayload:[],victronPayload:[],bmeLoading:!0,victronLoading:!0},getters:{getBMECurrent:function(t){return function(e){return Wt(t,e.apiKey)}},getVictronCurrent:function(t){return function(e){return Nt(t,e.apiKey)}},getBMEHist:function(t){return function(e){return Ht(t,e.apiKey)}},getVictronHist:function(t){return function(e){return $t(t,e.apiKey)}},getVictronPayload:function(t){return t.victronPayload},bmeLoading:function(t){return t.bmeLoading},count:function(t){return t.count}},mutations:(Dt={},Object(T["a"])(Dt,Bt,(function(t,e){t.bmePayload=e})),Object(T["a"])(Dt,Gt,(function(t,e){t.victronPayload=e})),Object(T["a"])(Dt,Ut,(function(t,e){t.bmeLoading=e})),Object(T["a"])(Dt,Kt,(function(t,e){t.victronLoading=e})),Dt),actions:(Mt={},Object(T["a"])(Mt,Bt,(function(t){t.commit(Ut,!0),fetch("https://api.thingspeak.com/channels/586281/feeds.json?results=20&format=json").then((function(t){return t.json()})).then((function(e){return t.commit(Bt,e.feeds)})).catch((function(t){return console.log(t.statusText)})),t.commit(Ut,!1)})),Object(T["a"])(Mt,Gt,(function(t){t.commit(Kt,!0),fetch("https://api.thingspeak.com/channels/1095413/feeds.json?results=600&format=json").then((function(t){return t.json()})).then((function(e){return t.commit(Gt,e.feeds)})).catch((function(t){return console.log(t.statusText)})),t.commit(Kt,!1)})),Mt)}),Ft=qt,Jt={name:"App",data:function(){return{drawer:!1,group:0,bmeKind:P,pages:[{id:0,page:"Weather"},{id:1,page:"Solar"},{id:2,page:"About"},{id:3,page:"Test"}]}},computed:Object(i["a"])(Object(i["a"])({},Object(x["b"])(["bmeLoading","getBMECurrent"])),{},{dt:function(){var t=this.getBMECurrent(this.bmeKind.TEMPERATURE);return null!==t&&void 0!==t&&t.dt?Object(st["a"])(Object(ct["a"])(null===t||void 0===t?void 0:t.dt),"HH:mm EEEE, d LLLL",{locale:lt["a"]}):""},page:function(){return this.pages[this.group].page}}),methods:{reload:function(){console.log("fetching data TODO rewrite handling"),Ft.dispatch({type:Bt}),Ft.dispatch({type:Gt}),console.log("fetching data done")}},components:{Weather:Y,About:Ot,Solar:ht,Test:Rt},watch:{group:function(){this.drawer=!1}},mounted:function(){this.reload()}},Yt=Jt,Qt=a("7496"),Xt=a("40dc"),Zt=a("5bc1"),te=a("553a"),ee=a("f6c4"),ae=a("f774"),ne=a("2fa4"),re=Object(b["a"])(Yt,r,o,!1,null,null,null),oe=re.exports;w()(re,{VApp:Qt["a"],VAppBar:Xt["a"],VAppBarNavIcon:Zt["a"],VBtn:G["a"],VCol:K["a"],VFooter:te["a"],VIcon:H["a"],VList:Tt["a"],VListItem:Pt["a"],VListItemGroup:zt["a"],VListItemTitle:At["a"],VMain:ee["a"],VNavigationDrawer:ae["a"],VSpacer:ne["a"]});var ie=a("f309");n["a"].use(ie["a"]);var se=new ie["a"]({}),ce=a("a3cb");n["a"].config.productionTip=!1,n["a"].use(ce["a"]),new n["a"]({store:Ft,vuetify:se,render:function(t){return t(oe)}}).$mount("#app")}});
//# sourceMappingURL=app.3c731020.js.map