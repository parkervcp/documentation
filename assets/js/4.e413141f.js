(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8,10,11,13,25,26,27],{313:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},314:function(t,e,s){var n=s(26),i="["+s(313)+"]",r=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),o=function(t){return function(e){var s=String(n(e));return 1&t&&(s=s.replace(r,"")),2&t&&(s=s.replace(a,"")),s}};t.exports={start:o(1),end:o(2),trim:o(3)}},315:function(t,e,s){"use strict";var n=s(0),i=s(49).find,r=s(73),a=s(20),o=!0,c=a("find");"find"in[]&&Array(1).find((function(){o=!1})),n({target:"Array",proto:!0,forced:o||!c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("find")},318:function(t,e,s){"use strict";s.r(e);var n={name:"VersionSelectItem",props:{version:{type:Object,required:!0}},computed:{classes:function(){return{deprecated:["text-orange"],current:["text-green-dark"],stable:["text-green-dark"],beta:["text-blue"]}[this.version.status]||["text-grey"]}}},i=s(46),r=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inline-block"},[this._v("\n  "+this._s(this.version.name)+"\n  "),e("span",{staticClass:"rounded-full ml-2",class:this.classes},[this._v(this._s(this.version.status))])])}),[],!1,null,null,null);e.default=r.exports},319:function(t,e,s){"use strict";s.r(e);s(47),s(309);var n=s(308);function i(t,e,s,n){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}},s)}function r(t,e,s,a,o){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||c>o?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(n.e)(a,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[i(t,s+"#"+e.slug,e.title,l),r(t,e.children,s,a,o,c+1)])})))}var a={functional:!0,props:["item"],render:function(t,e){var s=e.parent,a=s.$page,o=s.$site,c=s.$route,l=e.props.item,u=Object(n.e)(c,l.path),d="auto"===l.type?u||l.children.some((function(t){return Object(n.e)(c,l.basePath+"#"+t.slug)})):u,h=i(t,l.path,l.title||l.path,d),p=null!=a.frontmatter.sidebarDepth?a.frontmatter.sidebarDepth:o.themeConfig.sidebarDepth,f=null==p?1:p,v=!!o.themeConfig.displayAllHeaders;return"auto"===l.type?[h,r(t,l.children,l.basePath,c,f)]:(d||v)&&l.headers&&!n.d.test(l.path)?[h,r(t,Object(n.c)(l.headers),l.path,c,f)]:h}},o=s(46),c=Object(o.a)(a,void 0,void 0,!1,null,null,null);e.default=c.exports},324:function(t,e,s){"use strict";var n=s(5),i=s(4),r=s(74),a=s(11),o=s(9),c=s(18),l=s(177),u=s(53),d=s(2),h=s(31),p=s(54).f,f=s(21).f,v=s(8).f,g=s(314).trim,m=i.Number,b=m.prototype,_="Number"==c(h(b)),y=function(t){var e,s,n,i,r,a,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=g(l)).charCodeAt(0))||45===e){if(88===(s=l.charCodeAt(2))||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+l}for(a=(r=l.slice(2)).length,o=0;o<a;o++)if((c=r.charCodeAt(o))<48||c>i)return NaN;return parseInt(r,n)}return+l};if(r("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var C,k=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof k&&(_?d((function(){b.valueOf.call(s)})):"Number"!=c(s))?l(new m(y(e)),s,k):y(e)},x=n?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)o(m,C=x[S])&&!o(k,C)&&v(k,C,f(m,C));k.prototype=b,b.constructor=k,a(i,"Number",k)}},325:function(t,e,s){"use strict";s.r(e);s(315),s(103),s(324);var n={name:"VersionSelect",components:{VersionSelectItem:s(318).default},props:{versions:{type:Array,required:!0},tabindex:{type:Number,required:!1,default:0},value:{type:String,required:!1}},data:function(){var t=this;return{selected:this.versions.find((function(e){return e.name===t.value}))||(this.versions.length>0?this.versions[0]:null),open:!1}},watch:{value:function(t,e){var s=this;if(t!==e){var n=this.versions.find((function(t){return t.name===s.value}));n&&(this.selected=n)}}},mounted:function(){this.$emit("input",this.selected.name)}},i=s(46),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"version-select custom-select",attrs:{tabindex:t.tabindex},on:{blur:function(e){t.open=!1}}},[s("div",{staticClass:"selected",class:{open:t.open},on:{click:function(e){t.open=!t.open}}},[s("VersionSelectItem",{attrs:{version:t.selected}}),t._v(" "),s("span",{staticClass:"arrow"})],1),t._v(" "),s("div",{staticClass:"items",class:{hidden:!t.open}},t._l(t.versions,(function(e){return s("div",{key:e.name,staticClass:"item",on:{click:function(s){t.selected=e,t.open=!1,t.$emit("input",e.name)}}},[s("VersionSelectItem",{attrs:{version:e}})],1)})),0)])}),[],!1,null,null,null);e.default=r.exports},326:function(t,e,s){"use strict";var n=s(0),i=s(314).trim;n({target:"String",proto:!0,forced:s(327)("trim")},{trim:function(){return i(this)}})},327:function(t,e,s){var n=s(2),i=s(313);t.exports=function(t){return n((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},328:function(t,e,s){"use strict";var n,i=s(0),r=s(21).f,a=s(10),o=s(109),c=s(26),l=s(110),u=s(23),d="".endsWith,h=Math.min,p=l("endsWith");i({target:"String",proto:!0,forced:!!(u||p||(n=r(String.prototype,"endsWith"),!n||n.writable))&&!p},{endsWith:function(t){var e=String(c(this));o(t);var s=arguments.length>1?arguments[1]:void 0,n=a(e.length),i=void 0===s?n:h(a(s),n),r=String(t);return d?d.call(e,r,i):e.slice(i-r.length,i)===r}})},330:function(t,e,s){"use strict";s.r(e);var n=s(329),i=s.n(n);if("undefined"!=typeof window)s(335);var r={props:{options:{type:Object,default:function(){return{}}}},mounted:function(){this.create()},destroyed:function(){i()(this.$el).slick("unslick")},methods:{create:function(){var t=i()(this.$el);t.on("afterChange",this.onAfterChange),t.on("beforeChange",this.onBeforeChange),t.on("breakpoint",this.onBreakpoint),t.on("destroy",this.onDestroy),t.on("edge",this.onEdge),t.on("init",this.onInit),t.on("reInit",this.onReInit),t.on("setPosition",this.onSetPosition),t.on("swipe",this.onSwipe),t.on("lazyLoaded",this.onLazyLoaded),t.on("lazyLoadError",this.onLazyLoadError),t.slick(this.options)},destroy:function(){var t=i()(this.$el);t.off("afterChange",this.onAfterChange),t.off("beforeChange",this.onBeforeChange),t.off("breakpoint",this.onBreakpoint),t.off("destroy",this.onDestroy),t.off("edge",this.onEdge),t.off("init",this.onInit),t.off("reInit",this.onReInit),t.off("setPosition",this.onSetPosition),t.off("swipe",this.onSwipe),t.off("lazyLoaded",this.onLazyLoaded),t.off("lazyLoadError",this.onLazyLoadError),i()(this.$el).slick("unslick")},reSlick:function(){this.destroy(),this.create()},next:function(){i()(this.$el).slick("slickNext")},prev:function(){i()(this.$el).slick("slickPrev")},pause:function(){i()(this.$el).slick("slickPause")},play:function(){i()(this.$el).slick("slickPlay")},goTo:function(t,e){i()(this.$el).slick("slickGoTo",t,e)},currentSlide:function(){return i()(this.$el).slick("slickCurrentSlide")},add:function(t,e,s){i()(this.$el).slick("slickAdd",t,e,s)},remove:function(t,e){i()(this.$el).slick("slickRemove",t,e)},filter:function(t){i()(this.$el).slick("slickFilter",t)},unfilter:function(){i()(this.$el).slick("slickUnfilter")},getOption:function(t){i()(this.$el).slick("slickGetOption",t)},setOption:function(t,e,s){i()(this.$el).slick("slickSetOption",t,e,s)},setPosition:function(){i()(this.$el).slick("setPosition")},onAfterChange:function(t,e,s){this.$emit("afterChange",t,e,s)},onBeforeChange:function(t,e,s,n){this.$emit("beforeChange",t,e,s,n)},onBreakpoint:function(t,e,s){this.$emit("breakpoint",t,e,s)},onDestroy:function(t,e){this.$emit("destroy",t,e)},onEdge:function(t,e,s){this.$emit("edge",t,e,s)},onInit:function(t,e){this.$emit("init",t,e)},onReInit:function(t,e){this.$emit("reInit",t,e)},onSetPosition:function(t,e){this.$emit("setPosition",t,e)},onSwipe:function(t,e,s){this.$emit("swipe",t,e,s)},onLazyLoaded:function(t,e,s,n){this.$emit("lazyLoaded",t,e,s,n)},onLazyLoadError:function(t,e,s,n){this.$emit("lazyLoadError",t,e,s,n)}}},a=s(46),o=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)}),[],!1,null,null,null);e.default=o.exports},331:function(t,e,s){"use strict";s.r(e);s(176),s(326);var n={data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site,s=e.pages,n=e.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},a=[],o=0;o<s.length&&!(a.length>=n);o++){var c=s[o];if(this.getPageLocalePath(c)===i)if(r(c))a.push(c);else if(c.headers)for(var l=0;l<c.headers.length&&!(a.length>=n);l++){var u=c.headers[l];r(u)&&a.push(Object.assign({},c,{path:c.path+"#"+u.slug,header:u}))}}return a}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},i=s(46),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-box"},[s("input",{attrs:{"aria-label":"Search",placeholder:"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?s("div",{staticClass:"suggestion-container",on:{mouseleave:t.unfocus}},[s("div",{staticClass:"suggestion-padding"}),t._v(" "),s("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight}},t._l(t.suggestions,(function(e,n){return s("li",{staticClass:"suggestion",class:{focused:n===t.focusIndex},on:{mousedown:function(e){return t.go(n)},mouseenter:function(e){return t.focus(n)}}},[s("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[s("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?s("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0)]):t._e()])}),[],!1,null,null,null);e.default=r.exports},333:function(t,e,s){"use strict";s.r(e);s(315),s(176),s(47),s(103),s(48),s(328),s(310),s(108);var n=s(319),i=s(317),r=s(325),a={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:n.default,DropdownTransition:i.default,VersionSelect:r.default},data:function(){var t=this.item.versions.length>0,e="";if(t&&(e=this.item.currentVersion||this.item.versions[0].name,this.$router.currentRoute.path.startsWith(this.item.path))){var s=this.$router.currentRoute.path.split("/")[2];e=~this.item.versions.map((function(t){return t.name})).indexOf(s)?s:this.item.currentVersion}return{isVersioned:t,versionSelect:e}},watch:{versionSelect:function(t,e){if(e!==t&&this.$router.currentRoute.path.startsWith(this.item.path)&&this.selectedVersion.children.length>0){var s=this.$router.currentRoute.path;s=s.substr(s.indexOf(e)+e.length),this.$router.push(this.selectedVersion.children.find((function(t){return t.path.endsWith(s)}))||this.selectedVersion.children[0])}},$route:function(t,e){if(this.isVersioned&&t.path.startsWith(this.item.path)){var s=t.path.split("/")[2];~this.item.versions.map((function(t){return t.name})).indexOf(s)&&(this.versionSelect=s)}}},computed:{selectedVersion:function(){var t=this;return this.item.versions.find((function(e){return e.name===t.versionSelect}))},children:function(){return this.isVersioned?this.selectedVersion.children:this.item.children}}},o=s(46),c=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[s("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[s("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?s("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e(),t._v(" "),t.isVersioned?s("VersionSelect",{staticClass:"float-right",attrs:{versions:t.item.versions},model:{value:t.versionSelect,callback:function(e){t.versionSelect=e},expression:"versionSelect"}}):t._e()],1),t._v(" "),s("DropdownTransition",[t.open||!t.collapsable?s("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.children,(function(t){return s("li",[s("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null);e.default=c.exports},334:function(t,e,s){"use strict";s.r(e);var n=s(46),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[s("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[s("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.default=i.exports},336:function(t,e,s){},337:function(t,e,s){},341:function(t,e,s){"use strict";s.r(e);var n=s(316),i=s(330),r={components:{NavLink:n.default,Slick:i.default},data:function(){return{slickOptions:{slidesToShow:1,centerMode:!0,centerPadding:"0",speed:1e3,autoplay:!0,variableWidth:!0,arrows:!1,dots:!0,pauseOnHover:!1,pauseOnDotsHover:!0}}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},a=s(46),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"header section bg-blue text-grey-lightest less-padding emphasize"},[s("div",{staticClass:"container z-10"},[s("div",{staticClass:"text-center"},[t._m(0),t._v(" "),s("div",{staticClass:"mt-4"},[s("a",{staticClass:"btn hidden md:inline-block",attrs:{href:"https://demo.pterodactyl.io",target:"_blank",rel:"nofollow noopener"}},[t._v("Demo")]),t._v(" "),s("router-link",{staticClass:"btn inline-block",attrs:{to:"/panel/getting_started.html"}},[t._v("Get started")])],1)])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"section bg-white"},[s("div",{staticClass:"text-center"},[s("h1",[t._v("Screenshots")]),t._v(" "),s("div",{staticClass:"screenshots"},[s("slick",{ref:"slick",attrs:{options:t.slickOptions}},[s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png"}})])])],1)])]),t._v(" "),s("div",{staticClass:"section bg-blue text-grey-lightest"},[s("div",{staticClass:"container text-center"},[s("h1",[t._v("Get Started")]),t._v(" "),s("p",{staticClass:"m-4"},[t._v("Ready to fly on the Pterodactyl?")]),t._v(" "),s("div",{staticClass:"mt-4"},[s("router-link",{staticClass:"btn inline-block",attrs:{to:"/project/introduction.html"}},[t._v("About the project")]),t._v(" "),s("a",{staticClass:"btn inline-block",attrs:{href:"https://pterodactyl.io/discord"}},[t._v("Discord")])],1)])]),t._v(" "),s("div",{staticClass:"section bg-black text-grey-lighter text-sm less-padding"},[s("div",{staticClass:"container text-center"},[s("div",[s("img",{staticClass:"w-16",attrs:{src:t.$withBase("pterodactyl-flat.svg")}})]),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"footer"},[t._v("MIT Licensed | Copyright © 2015 - 2020 Dane Everitt & Contributors.")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"max-w-xl w-full inline-block",attrs:{src:"https://cdn.pterodactyl.io/logos/new/pterodactyl_logo_transparent.png",alt:"Pterodactyl"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section bg-white"},[e("div",{staticClass:"container text-center"},[e("h1",{staticClass:"text-blue mb-4"},[this._v("Pterodactyl Panel")]),this._v(" "),e("h3",{staticClass:"border-0 font-normal leading-normal mx-auto",staticStyle:{"max-width":"50rem"}},[this._v("\n                Pterodactyl is an open-source game server management panel built with PHP 7, React, and Go.\n                Designed with security in mind, Pterodactyl runs all game servers in isolated Docker containers\n                while exposing a beautiful and intuitive UI to end users.\n            ")]),this._v(" "),e("h3",{staticClass:"border-0 leading-normal mx-auto mt-4",staticStyle:{"max-width":"50rem"}},[this._v("\n                Stop settling for less. Make game servers a first class citizen on your platform.\n            ")]),this._v(" "),e("img",{staticClass:"max-w-lg w-full m-4 inline-block",attrs:{src:"https://cdn.pterodactyl.io/site-assets/mockup-macbook-grey-1.0.png"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section bg-blue text-grey-lightest"},[s("div",{staticClass:"container text-center"},[s("h1",{staticClass:"mb-4"},[t._v("Why Pterodactyl")]),t._v(" "),s("div",{staticClass:"flex flex-wrap"},[s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-lock"})]),t._v(" "),s("h3",[t._v("Security First")]),t._v(" "),s("p",[t._v("Security is a first-class citizen on this platform with bcrypt hashing, AES-256-CBC encryption, and HTTPS support out of the box.")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-beaker"})]),t._v(" "),s("h3",[t._v("Modern Tooling")]),t._v(" "),s("p",[t._v("Built on a modern stack utilizing the best design practices that make it easy to jump in and make modifications.")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-anchor"})]),t._v(" "),s("h3",[t._v("Docker to the Core")]),t._v(" "),s("p",[t._v("All servers run in isolated Docker containers that limit attack vectors, provide strict resource limits, and provide environments tailored to each specific game.")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-wallet"})]),t._v(" "),s("h3",[t._v("Free & Open Source")]),t._v(" "),s("p",[t._v("Pterodactyl is 100% free and licensed under a MIT license. All of our code is completely open source as well.")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-browser"})]),t._v(" "),s("h3",[t._v("User Friendly")]),t._v(" "),s("p",[t._v("Save the furious clicking and screaming for Overwatch. Pterodactyl's interface is designed so well even Hanzo can use it.")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-expand"})]),t._v(" "),s("h3",[t._v("Scalable")]),t._v(" "),s("p",[t._v("Whether you're a hosting company, the next Hyplex, or just some dudes playing video games, we've got you covered.")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left md:flex"},[s("div",{staticClass:"flex-none w-full md:w-1/2 md:pr-12"},[s("p",{staticClass:"my-4"},[t._v("\n                        There are tons of options out there when it comes to self-hosted game management panels. However, you will find no panel that can compete with Pterodactyl in terms of features, customization, stability, and most of all: price.\n                    ")]),t._v(" "),s("p",{staticClass:"my-4"},[t._v("\n                        We're committed to building the best software that we can, and have been working with game management panels for almost five years now. We've seen games change, and are committed to making the most flexible, lightweight, and future proof panel that we can.\n                    ")])]),t._v(" "),s("div",{staticClass:"hidden md:block md:flex-1 md:pr-12"},[s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://blog.pterodactyl.io/"}},[t._v("Blog")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://github.com/pterodactyl"}},[t._v("GitHub")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://paypal.me/PterodactylSoftware",target:"_blank"}},[t._v("Support Pterodactyl")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"/panel/troubleshooting.html"}},[t._v("Troubleshooting")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://github.com/parkervcp/eggs"}},[t._v("Additional Game Configurations")])])]),t._v(" "),s("div",{staticClass:"text-center mt-8 md:flex-1 md:mt-0"},[s("a",{attrs:{href:"https://pterodactyl.io/discord",target:"_blank",rel:"nofollow noopener"}},[s("img",{staticClass:"w-3/4",attrs:{src:"https://cdn.pterodactyl.io/site-assets/discord.png"}})])])])}],!1,null,null,null);e.default=o.exports},342:function(t,e,s){"use strict";s.r(e);var n=s(334),i=s(331),r=s(332),a={components:{SidebarButton:n.default,NavLinks:r.default,SearchBox:i.default},computed:{}},o=s(46),c=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"nav"},[s("SidebarButton",{staticClass:"block md:hidden flex-no-shrink",on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),s("div",{staticClass:"logo-container"},[s("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?s("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo)}}):t._e(),t._v(" "),t.$siteTitle?s("span",{staticClass:"site-name hidden md:inline",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()])],1),t._v(" "),s("div",{staticClass:"w-full"},[s("div",{staticClass:"flex"},[s("SearchBox"),t._v(" "),s("NavLinks",{staticClass:"hidden md:flex"})],1)])],1)}),[],!1,null,null,null);e.default=c.exports},343:function(t,e,s){"use strict";s.r(e);s(50),s(75),s(48),s(69),s(51);var n=s(44),i=s(308);function r(t,e,s){var i=[];e.forEach((function(t){"group"===t.type?i.push.apply(i,Object(n.a)(t.children||[])):i.push(t)}));for(var r=0;r<i.length;r++){var a=i[r];if("page"===a.type&&a.path===t.path)return i[r+s]}}var a={props:["sidebarItems"],computed:{lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,s=this.$page.frontmatter.prev;return!1===s?void 0:s?Object(i.l)(this.$site.pages,s,this.$route.path):(t=this.$page,e=this.sidebarItems,r(t,e,-1))},next:function(){var t,e,s=this.$page.frontmatter.next;return!1===s?void 0:s?Object(i.l)(this.$site.pages,s,this.$route.path):(t=this.$page,e=this.sidebarItems,r(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,s=t.editLinks,n=t.docsDir,r=void 0===n?"":n,a=t.docsBranch,o=void 0===a?"master":a,c=t.docsRepo,l=void 0===c?e:c,u=Object(i.i)(this.$page.path);return i.a.test(u)?u+="README.md":u+=".md",l&&s?this.createEditLink(e,l,r,o,u):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,s,n,r){return/bitbucket.org/.test(t)?(i.j.test(e)?e:t).replace(i.a,"")+"/".concat(n)+(s?"/"+s.replace(i.a,""):"")+r+"?mode=edit&spa=0&at=".concat(n,"&fileviewer=file-view-default"):(i.j.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit/".concat(n)+(s?"/"+s.replace(i.a,""):"")+r}}},o=s(46),c=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[t._t("top"),t._v(" "),s("Content",{staticClass:"content",attrs:{custom:!1}}),t._v(" "),s("div",{staticClass:"page-edit"},[t.editLink?s("div",{staticClass:"edit-link"},[s("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),s("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?s("div",{staticClass:"last-updated"},[s("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?s("div",{staticClass:"page-nav"},[s("p",{staticClass:"inner"}),t._v(" "),s("div",{staticClass:"prev"},[t.prev?s("span",[t._v("\n        ←\n        "),t.prev?s("router-link",{attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e()]),t._v(" "),s("div",{staticClass:"next"},[t.next?s("span",[t.next?s("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("→\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=c.exports},344:function(t,e,s){"use strict";s.r(e);s(309);var n=s(333),i=s(319),r=s(332),a=s(308);var o={components:{SidebarGroup:n.default,SidebarLink:i.default,NavLinks:r.default},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var s=0;s<e.length;s++){var n=e[s];if("group"===n.type&&n.children.some((function(e){return Object(a.e)(t,e.path)})))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(a.e)(this.$route,t.path)}}},c=s(46),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("NavLinks",{staticClass:"block md:hidden"}),t._v(" "),t._t("top"),t._v(" "),t.items.length?s("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,n){return s("li",{key:e.path},["group"===e.type?s("SidebarGroup",{attrs:{item:e,first:0===n,open:n===t.openGroupIndex,collapsable:e.collapsable},on:{toggle:function(e){return t.toggleGroup(n)}}}):s("SidebarLink",{attrs:{item:e}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=l.exports},345:function(t,e,s){var n,i;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(i="function"==typeof(n=function(){var t,e,s={version:"0.2.0"},n=s.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(t,e,s){return t<e?e:t>s?s:t}function r(t){return 100*(-1+t)}s.configure=function(t){var e,s;for(e in t)void 0!==(s=t[e])&&t.hasOwnProperty(e)&&(n[e]=s);return this},s.status=null,s.set=function(t){var e=s.isStarted();t=i(t,n.minimum,1),s.status=1===t?null:t;var c=s.render(!e),l=c.querySelector(n.barSelector),u=n.speed,d=n.easing;return c.offsetWidth,a((function(e){""===n.positionUsing&&(n.positionUsing=s.getPositioningCSS()),o(l,function(t,e,s){var i;return(i="translate3d"===n.positionUsing?{transform:"translate3d("+r(t)+"%,0,0)"}:"translate"===n.positionUsing?{transform:"translate("+r(t)+"%,0)"}:{"margin-left":r(t)+"%"}).transition="all "+e+"ms "+s,i}(t,u,d)),1===t?(o(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){o(c,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){s.remove(),e()}),u)}),u)):setTimeout(e,u)})),this},s.isStarted=function(){return"number"==typeof s.status},s.start=function(){s.status||s.set(0);var t=function(){setTimeout((function(){s.status&&(s.trickle(),t())}),n.trickleSpeed)};return n.trickle&&t(),this},s.done=function(t){return t||s.status?s.inc(.3+.5*Math.random()).set(1):this},s.inc=function(t){var e=s.status;return e?("number"!=typeof t&&(t=(1-e)*i(Math.random()*e,.1,.95)),e=i(e+t,0,.994),s.set(e)):s.start()},s.trickle=function(){return s.inc(Math.random()*n.trickleRate)},t=0,e=0,s.promise=function(n){return n&&"resolved"!==n.state()?(0===e&&s.start(),t++,e++,n.always((function(){0==--e?(t=0,s.done()):s.set((t-e)/t)})),this):this},s.render=function(t){if(s.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=n.template;var i,a=e.querySelector(n.barSelector),c=t?"-100":r(s.status||0),u=document.querySelector(n.parent);return o(a,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),n.showSpinner||(i=e.querySelector(n.spinnerSelector))&&h(i),u!=document.body&&l(u,"nprogress-custom-parent"),u.appendChild(e),e},s.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(n.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&h(t)},s.isRendered=function(){return!!document.getElementById("nprogress")},s.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var a=function(){var t=[];function e(){var s=t.shift();s&&s(e)}return function(s){t.push(s),1==t.length&&e()}}(),o=function(){var t=["Webkit","O","Moz","ms"],e={};function s(s){return s=s.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()})),e[s]||(e[s]=function(e){var s=document.body.style;if(e in s)return e;for(var n,i=t.length,r=e.charAt(0).toUpperCase()+e.slice(1);i--;)if((n=t[i]+r)in s)return n;return e}(s))}function n(t,e,n){e=s(e),t.style[e]=n}return function(t,e){var s,i,r=arguments;if(2==r.length)for(s in e)void 0!==(i=e[s])&&e.hasOwnProperty(s)&&n(t,s,i);else n(t,r[1],r[2])}}();function c(t,e){return("string"==typeof t?t:d(t)).indexOf(" "+e+" ")>=0}function l(t,e){var s=d(t),n=s+e;c(s,e)||(t.className=n.substring(1))}function u(t,e){var s,n=d(t);c(t,e)&&(s=n.replace(" "+e+" "," "),t.className=s.substring(1,s.length-1))}function d(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function h(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return s})?n.call(e,s,e,t):n)||(t.exports=i)},346:function(t,e,s){"use strict";var n=s(336);s.n(n).a},347:function(t,e,s){"use strict";var n=s(337);s.n(n).a},361:function(t,e,s){"use strict";s.r(e);s(103);var n=s(1),i=s(345),r=s.n(i),a=s(341),o=s(342),c=s(343),l=s(344),u=s(308),d={components:{Home:a.default,Page:c.default,Sidebar:l.default,Navbar:o.default},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(u.m)(this.$page,this.$route,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),r.a.configure({showSpinner:!1}),this.$router.beforeEach((function(t,e,s){t.path===e.path||n.a.component(t.name)||r.a.start(),s()})),this.$router.afterEach((function(){r.a.done(),t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},h=(s(346),s(347),s(46)),p=Object(h.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?s("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),s("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),s("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.layout?s("div",{staticClass:"custom-layout"},[s(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?s("Home"):s("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null);e.default=p.exports}}]);