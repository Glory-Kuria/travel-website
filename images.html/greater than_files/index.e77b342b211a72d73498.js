(window.webpackJsonp=window.webpackJsonp||[]).push([[17,22],{1440:function(t,e,r){var content=r(1444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("76eebff0",content,!0,{sourceMap:!1})},1443:function(t,e,r){"use strict";r(1440)},1444:function(t,e,r){var n=r(9)((function(i){return i[1]}));n.push([t.i,".ouch__intersection-observer{display:flex;flex-direction:column;height:100%;width:100%}.ouch__intersection-observer-trigger{align-items:center;display:flex;flex-grow:1;justify-content:center;padding:0;width:100%}.ouch__intersection-observer .loader{margin:0 auto}",""]),n.locals={},t.exports=n},1446:function(t,e,r){var content=r(1457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("0bf3da8c",content,!0,{sourceMap:!1})},1447:function(t,e,r){var content=r(1459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("b82094f6",content,!0,{sourceMap:!1})},1448:function(t,e,r){"use strict";var n=r(81),o={name:"IntersectionObserver",props:{displayLoader:{type:Boolean,default:!0}},data:function(){return{intersectionObserver:null}},mounted:function(){var t=this;this.intersectionObserver=new IntersectionObserver((function(){t.debouncedEmit()}),{rootMargin:"0px",threshold:1}),this.intersectionObserver.observe(this.$refs.iotrigger)},methods:{debouncedEmit:r.n(n).a.debounce((function(){this.displayLoader&&this.$emit("infinite")}),300,{leading:!0,trailing:!1})},beforeDestroy:function(){this.intersectionObserver.disconnect()}},c=(r(1443),r(2)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ouch__intersection-observer"},[t._t("default"),e("div",{ref:"iotrigger",staticClass:"ouch__intersection-observer-trigger"},[t.displayLoader?e("ouch-loader",{attrs:{size:24,width:2}}):t._e()],1)],2)}),[],!1,null,null,null);e.a=component.exports},1452:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));r(15),r(12),r(13),r(6),r(17),r(14),r(18);var n=r(4),o=r(7);r(47);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,d,y,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,o=e.store,c=e.perPage,d=[],y={page:1,per_page:void 0===c?4:c},t.prev=3,t.next=6,o.dispatch("cache/get",{key:l(l({},y),{},{keyType:"style-sets"})});case 6:if(!(f=t.sent)){t.next=11;break}d=f,t.next=15;break;case 11:return t.next=13,n.$setsRepository.index(y);case 13:d=t.sent,o.dispatch("cache/set",{key:l(l({},y),{},{keyType:"style-sets"}),value:d});case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(3),console.error(t.t0);case 20:return t.abrupt("return",(null===(r=d)||void 0===r?void 0:r.sets)||[]);case 21:case"end":return t.stop()}}),t,null,[[3,17]])})))).apply(this,arguments)}},1456:function(t,e,r){"use strict";r(1446)},1457:function(t,e,r){var n=r(9)((function(i){return i[1]}));n.push([t.i,".styleset-placeholder[data-v-0035fc87]{border-radius:21px 21px 16px 16px;cursor:pointer;display:flex;flex-direction:column;padding:8px 8px 15px;position:relative;transition:all .2s ease-out}.styleset-placeholder__preview[data-v-0035fc87]{border:none;bottom:0;left:0;overflow:hidden;padding:16px;position:absolute;right:0;top:0;width:100%}.styleset-placeholder__preview-wrapper[data-v-0035fc87]{border:1px solid rgba(0,0,0,.03);border-radius:16px;height:0;padding-bottom:100%;position:relative}",""]),n.locals={},t.exports=n},1458:function(t,e,r){"use strict";r(1447)},1459:function(t,e,r){var n=r(9)((function(i){return i[1]}));n.push([t.i,".stylesets[data-v-bcc39672]{cursor:pointer;margin-left:-8px;width:calc(100% + 16px)}.stylesets[data-v-bcc39672] ::-webkit-scrollbar{display:none}.stylesets__btn[data-v-bcc39672] button{padding:12px 32px 12px 40px!important}.stylesets__grid[data-v-bcc39672]{grid-gap:17px 16px;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}@media(min-width:1296px){.stylesets__grid[data-v-bcc39672]{grid-template-columns:repeat(4,1fr)}}@media(max-width:360px){.stylesets__grid[data-v-bcc39672]{grid-template-columns:repeat(auto-fit,minmax(296px,1fr))}}.stylesets__monthly-count[data-v-bcc39672]{color:#4d4d4d;font-size:14px;font-weight:400;line-height:20px;margin-top:8px;opacity:.5;text-align:center}.stylesets__show-more[data-v-bcc39672]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-top:40px}",""]),n.locals={},t.exports=n},1474:function(t,e,r){var content=r(1543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("a9bd68ea",content,!0,{sourceMap:!1})},1475:function(t,e,r){var content=r(1545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("7bb4402f",content,!0,{sourceMap:!1})},1515:function(t,e,r){"use strict";r.r(e);r(15),r(12),r(13),r(6),r(17),r(14),r(18);var n=r(11),o=r(4),c=(r(44),r(20),r(30),r(29)),l={name:"OuchStyleSetPlaceholder",props:{item:{type:[Object,Number],default:function(){}}},computed:{previewStyles:function(){var t;return{background:"".concat(null===(t=this.item)||void 0===t?void 0:t.backgroundColor)}}}},d=(r(1456),r(2)),y=Object(d.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"styleset-placeholder"},[t("div",{staticClass:"styleset-placeholder__preview-wrapper",style:this.previewStyles})])}),[],!1,null,"0035fc87",null).exports,f=r(27);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"OuchStyleSets",components:{OuchStylesetPlaceholder:y},props:{compact:{type:Boolean,default:!1},stylesets:{type:Array,default:function(){return[]}},stylesPerMonth:{type:Number,default:0}},computed:v(v({},Object(f.e)({windowWidth:function(t){return t.windowWidth}})),{},{placeholders:function(){return this.compact?c.v:[].concat(Object(n.a)(c.v),Object(n.a)(c.v))},stylesetsClasses:function(){return{compact:this.compact}},visibleStylesets:function(){return this.compact?Object(n.a)(this.stylesets).slice(0,this.windowWidth<=1296?c.p:c.p+1):Object(n.a)(this.stylesets)}})},_=(r(1458),Object(d.a)(m,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"stylesets",class:t.stylesetsClasses},[e("div",{staticClass:"stylesets__grid"},[t.stylesets.length?t._l(t.visibleStylesets,(function(t,r){return e("ouch-styleset",{key:r,attrs:{item:t,url:"/illustrations/styles/".concat(t.pretty_id)}})})):t._l(t.placeholders,(function(t,r){return e("ouch-styleset-placeholder",{key:r,attrs:{item:t}})}))],2),t.compact?e("nuxt-link",{staticClass:"stylesets__show-more",attrs:{to:"/illustrations/styles"}},[e("ouch-button",{staticClass:"stylesets__btn",attrs:{"right-icon":"arrow-right-v2",size:"xl",type:"primary"}},[t._v(t._s(t.$t("OUCH_V2.STYLES_LIST.EXPLORE")))]),t.stylesPerMonth?e("div",{staticClass:"stylesets__monthly-count"},[t._v("+"+t._s(t.$t("OUCH_V2.STYLES_LIST.COUNT_THIS_MONTH",{count:t.stylesPerMonth})))]):t._e()],1):t._e()],1)}),[],!1,null,"bcc39672",null));e.default=_.exports},1542:function(t,e,r){"use strict";r(1474)},1543:function(t,e,r){var n=r(9)((function(i){return i[1]}));n.push([t.i,".ouch-styles-dropdown[data-v-09d11729]{margin-bottom:32px;max-width:240px}@media(max-width:695px){.ouch-styles-dropdown[data-v-09d11729]{max-width:100vw}}.ouch-styles-dropdown[data-v-09d11729] .active-item{padding:8px}.ouch-styles-dropdown[data-v-09d11729] .dropdown-item .icon{display:block}.ouch-styles-dropdown[data-v-09d11729] .dropdown-content{overflow-y:scroll;scrollbar-width:none}.ouch-styles-dropdown[data-v-09d11729] .dropdown-content::-webkit-scrollbar{display:none}.ouch-styles-dropdown__title-icon[data-v-09d11729]{height:24px;margin-right:8px;width:24px}.ouch-styles-dropdown__title-wrapper[data-v-09d11729]{align-items:center;display:flex}",""]),n.locals={},t.exports=n},1544:function(t,e,r){"use strict";r(1475)},1545:function(t,e,r){var n=r(9)((function(i){return i[1]}));n.push([t.i,".styles-page[data-v-f695c446]{padding:80px 140px 56px;width:100%}@media(max-width:1440px){.styles-page[data-v-f695c446]{padding-left:32px;padding-right:32px}}@media(max-width:920px){.styles-page[data-v-f695c446]{padding-left:20px;padding-right:20px}}.styles-page hr[data-v-f695c446]{background:rgba(0,0,0,.08);height:1px;margin:113px 0 112px;width:100%}.styles-page .seo-header[data-v-f695c446]{margin-bottom:48px}.styles-page[data-v-f695c446] .ouch__intersection-observer{position:relative}.styles-page[data-v-f695c446] .ouch__intersection-observer-trigger{bottom:20%;position:absolute}.styles-page[data-v-f695c446] .ouch-loader{opacity:0}",""]),n.locals={},t.exports=n},1656:function(t,e,r){"use strict";r.r(e);r(15),r(12),r(13),r(6),r(17),r(14),r(18);var n=r(11),o=r(4),c=r(7),l=(r(20),r(47),r(27)),d=r(1448),y=r(1452),f=(r(93),r(702)),h={name:"OuchStyleCard",components:{OuchDropdown:f.a},data:function(){return{forceDropdownClose:!1,page:0,styles:[],total:0}},computed:{formattedStyles:function(){return Object(n.a)(this.styles).sort((function(a,b){return a.title.localeCompare(b.title)}))}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getStyles();case 2:r=e.sent,o=r.styles,c=r.total,t.styles=[].concat(Object(n.a)(t.styles),Object(n.a)(o)),t.total=c,t.page++;case 8:if(t.styles.length<t.total){e.next=0;break}case 9:case"end":return e.stop()}}),e)})))()},methods:{getStyles:function(){var t=this;return new Promise(function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(r){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$stylesRepository.index({fields:"styles(title,pretty_id), total",page:t.page+1,per_page:100});case 3:n=e.sent,o=n.styles,c=n.total,r({styles:o,total:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r({styles:[],total:0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())},onSelect:function(style){this.forceDropdownClose=!this.forceDropdownClose,this.$router.push("/illustrations/style--".concat(style.pretty_id))}}},v=h,m=(r(1542),r(2)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("ouch-dropdown",{staticClass:"ouch-styles-dropdown",attrs:{"force-close":t.forceDropdownClose},scopedSlots:t._u([{key:"active",fn:function(){return[e("div",{staticClass:"ouch-styles-dropdown__title-wrapper"},[e("div",{staticClass:"ouch-styles-dropdown__title-icon",domProps:{innerHTML:t._s(t.$icons["search-dark"])}}),e("div",{staticClass:"ouch-styles-dropdown__title"},[t._v("Alphabetic list of styles")])])]},proxy:!0},{key:"content",fn:function(){return t._l(t.formattedStyles,(function(style,r){return e("div",{key:style.pretty_id,staticClass:"dropdown-item",on:{click:function(e){return t.onSelect(style)}}},[e("a",{attrs:{href:"/illustrations/style--".concat(style.pretty_id)},on:{click:function(t){return t.preventDefault(),function(){}.apply(null,arguments)}}},[t._v(t._s(style.title))]),e("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.$icons.external)}})])}))},proxy:!0}])})}),[],!1,null,"09d11729",null),_=component.exports,x=r(1515);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={name:"StylesPage",components:{OuchStylesDropdown:_,ouchIntersectionObserver:d.a,OuchStylesets:x.default},layout:"content",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.app,o=[],e.prev=2,e.next=5,Object(y.a)({app:n,store:r,perPage:16});case 5:o=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("cannot get stylesets");case 11:return r.dispatch("updateSEO",{title:n.i18n.t("OUCH_V2.SEO.INDEX.TITLE"),description:n.i18n.t("OUCH_V2.SEO.INDEX.DESCRIPTION"),image:"".concat("https://maxst.icons8.com","/vue-static/ouch/seo/opengraph.png")}),e.abrupt("return",{stylesets:o});case 13:case"end":return e.stop()}}),e,null,[[2,8]])})))()},data:function(){return{styles:{items:[],loading:!1,page:0,total:0}}},computed:w(w({},Object(l.e)({user:function(t){return t.auth.user}})),{},{canLoadMore:function(){return this.styles.total>this.styles.items.length},isAdmin:function(){var t;return null===(t=this.user)||void 0===t?void 0:t.isAdmin}}),mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("updateSEO",{title:t.$i18n.t("OUCH_V2.CURATED_SETS_LIST.SEO.MAIN_PAGE.TITLE"),description:t.$i18n.t("OUCH_V2.CURATED_SETS_LIST.SEO.MAIN_PAGE.DESCRIPTION"),image:"".concat("https://maxst.icons8.com","/vue-static/ouch/seo/opengraph.png")});case 2:t.loadMoreStyles();case 3:case"end":return e.stop()}}),e)})))()},methods:{loadMoreStyles:function(){this.styles.loading||this.fetchStyles({retry:!0})},fetchStyles:function(){var t=arguments,e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c,l,d,y,f,h,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=(t.length>0&&void 0!==t[0]?t[0]:{}).retry,c=void 0!==o&&o,e.styles.page++,l={illustrations_count:3,page:e.styles.page,per_page:9},e.styles.loading=!0,r.prev=4,r.next=7,e.$store.dispatch("cache/get",{key:w(w({},l),{},{keyType:"styles-previews"})});case 7:if(!(y=r.sent)){r.next=12;break}d=w({},y),r.next=16;break;case 12:return r.next=14,e.$stylesRepository.index(l,"previews");case 14:d=r.sent,e.$store.dispatch("cache/set",{key:w(w({},l),{},{keyType:"styles-previews"}),value:d});case 16:h=(f=d).total,v=f.styles,e.styles.total=h,e.styles.items=[].concat(Object(n.a)(e.styles.items),Object(n.a)(v)),c&&e.fetchStyles(),r.next=25;break;case 22:r.prev=22,r.t0=r.catch(4),console.log("cannot get styles previews");case 25:return r.prev=25,e.styles.loading=!1,r.finish(25);case 28:case"end":return r.stop()}}),r,null,[[4,22,25,28]])})))()}}},S=j,k=(r(1544),Object(m.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"styles-page container"},[t.stylesets.length?[e("ouch-seo-header",{attrs:{description:t.$t("OUCH.STYLES.STYLEPAGE_DESCRIPTION"),title:t.$t("OUCH_V2.HEADER.STYLES")}})]:[e("div",{staticClass:"placeholder-header placeholder-header--styles"}),e("div",{staticClass:"placeholder-header placeholder-header--styles-text"})],e("ouch-stylesets",{attrs:{stylesets:t.stylesets}}),e("hr"),e("client-only",[e("ouch-intersection-observer",{attrs:{"display-loader":t.canLoadMore},on:{infinite:t.loadMoreStyles}},[t.isAdmin?e("ouch-styles-dropdown"):t._e(),e("ouch-styles",{attrs:{styles:t.styles.items}})],1)],1)],2)}),[],!1,null,"f695c446",null));e.default=k.exports}}]);