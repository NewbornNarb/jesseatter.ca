(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6],{245:function(t,e,n){t.exports=n.p+"img/logo.21c2790.svg"},252:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(132),n(37),n(28),n(26),n(60),n(86);var r=n(0);function o(t){return r.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var r=n.props,data=n.data,o=n.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,data,o)}})}},256:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{logo:Boolean,float:Boolean}}),o=n(58),c=n(85),l=n.n(c),d=n(350),v=n(349),m=n(337),f=n(342),h=n(250),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{color:"transparent",flat:"",absolute:t.float}},[t.logo?r("v-toolbar-title",[r("router-link",{attrs:{to:"/"}},[r("v-img",{attrs:{src:n(245),width:"80px",height:"50px",contain:""}})],1)],1):t._e(),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{text:"",to:"/renders"}},[t._v("Renders")]),t._v(" "),r("v-btn",{attrs:{text:"",href:"/resume.pdf",target:"__blank"}},[t._v("Resume")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBar:d.a,VBtn:v.a,VImg:m.a,VSpacer:f.a,VToolbarItems:h.a,VToolbarTitle:h.b})},257:function(t,e,n){"use strict";n.r(e);n(56);var r=n(0).a.extend({data:function(){return{copied:!1}},methods:{copy:function(){var t=this;navigator.clipboard.writeText("j.atter66@gmail.com"),this.copied=!0,setTimeout((function(){return t.copied=!1}),800)}}}),o=n(58),c=n(85),l=n.n(c),d=n(349),v=n(343),m=n(352),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-center justify-center my-5",staticStyle:{width:"100%"}},[n("v-btn",{attrs:{icon:"",href:"https://www.linkedin.com/in/jesseatter/",target:"__blank"}},[n("v-icon",[t._v("mdi-linkedin")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",href:"https://www.artstation.com/jesseatter",target:"__blank"}},[n("v-icon",[t._v("mdi-artstation")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",href:"https://www.instagram.com/jesse_atter/",target:"__blank"}},[n("v-icon",[t._v("mdi-instagram")])],1),t._v(" "),n("span",{staticClass:"ml-1 mr-2"},[t._v("|")]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{text:""},on:{click:t.copy}},[t._v("j.atter66@gmail.com")])]},proxy:!0}]),model:{value:t.copied,callback:function(e){t.copied=e},expression:"copied"}},[t._v(" "),n("span",[t._v("Copied!")])])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VIcon:v.a,VTooltip:m.a})},258:function(t,e,n){t.exports=n.p+"img/frog.ce08887.png"},336:function(t,e,n){"use strict";n(251);var r=n(252);e.a=Object(r.a)("layout")},351:function(t,e,n){"use strict";n.r(e);var r=n(58),o=n(85),c=n.n(o),l=n(349),d=n(343),v=n(337),m=n(336),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Menu",{attrs:{float:""}}),t._v(" "),r("v-img",{attrs:{width:"100%",height:"100vh",src:n(258)}},[r("v-layout",{staticStyle:{"background-color":"rgba(0,0,0,0.4)"},attrs:{column:"","fill-height":"","justify-center":"","align-center":""}},[r("div",{staticClass:"d-flex align-center"},[r("v-layout",{staticClass:"pr-5",staticStyle:{"border-right":"5px dotted white"},attrs:{column:"","align-end":""}},[r("v-img",{staticClass:"d-block d-sm-none",attrs:{src:n(245),width:"80px",contain:""}}),t._v(" "),r("v-img",{staticClass:"d-none d-sm-block d-md-none",attrs:{src:n(245),width:"150px",contain:""}}),t._v(" "),r("v-img",{staticClass:"d-none d-md-block",attrs:{src:n(245),width:"200px",contain:""}}),t._v(" "),r("span",{staticClass:"text-h5 text-sm-h3 text-md-h2 font-weight-bold"},[r("span",{staticClass:"font"},[t._v("Jesse Atter")])])],1),t._v(" "),r("v-layout",{staticClass:"pl-5",attrs:{column:""}},[r("span",{staticClass:"text-h6 text-sm-h5 text-md-h4"},[r("span",{staticClass:"font"},[t._v("Modelling,")])]),t._v(" "),r("span",{staticClass:"text-h6 text-sm-h5 text-md-h4"},[r("span",{staticClass:"font"},[t._v("Texturing,")])]),t._v(" "),r("span",{staticClass:"text-h6 text-sm-h5 text-md-h4"},[r("span",{staticClass:"font"},[t._v("Rendering.")])])])],1),t._v(" "),r("div",{staticClass:"d-flex align-center"},[r("v-btn",{attrs:{icon:"",href:"https://www.linkedin.com/in/jesseatter/",target:"__blank"}},[r("v-icon",[t._v("mdi-linkedin")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",href:"https://www.artstation.com/jesseatter",target:"__blank"}},[r("v-icon",[t._v("mdi-artstation")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",href:"https://www.instagram.com/jesse_atter/",target:"__blank"}},[r("v-icon",[t._v("mdi-instagram")])],1)],1),t._v(" "),r("div",{staticClass:"d-flex align-center justify-center mb-5",staticStyle:{position:"absolute",bottom:"0",width:"100%"}},[r("v-btn",{attrs:{icon:"",href:"#demo"}},[r("v-icon",{attrs:{size:"28pt"}},[t._v("mdi-chevron-down")])],1)],1)])],1),t._v(" "),r("v-img",{attrs:{id:"demo",width:"100%",height:"100vh"}},[r("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube-nocookie.com/embed/sXxoB6n5PJc?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Menu:n(256).default,Footer:n(257).default}),c()(component,{VBtn:l.a,VIcon:d.a,VImg:v.a,VLayout:m.a})}}]);