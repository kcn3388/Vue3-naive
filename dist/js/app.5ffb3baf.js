(function(){"use strict";var e={4215:function(e,t,n){var r=n(9963),o=n(5397),i=n(6252);function u(e,t,n,r,o,u){const l=(0,i.up)("n-global-style"),c=(0,i.up)("E503"),s=(0,i.up)("E404"),a=(0,i.up)("E403"),p=(0,i.up)("E500"),d=(0,i.up)("n-dialog-provider"),f=(0,i.up)("n-notification-provider"),v=(0,i.up)("n-message-provider"),k=(0,i.up)("n-loading-bar-provider"),w=(0,i.up)("n-config-provider");return(0,i.wg)(),(0,i.j4)(w,{theme:e.darkTheme},{default:(0,i.w5)((()=>[(0,i.Wm)(l),(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>["503"==e.url?((0,i.wg)(),(0,i.j4)("div",{key:0,class:"errormsg",url:e.url},[(0,i.Wm)(c)],8,["url"])):(0,i.kq)("",!0),"404"==e.url?((0,i.wg)(),(0,i.j4)("div",{key:1,class:"errormsg",url:e.url},[(0,i.Wm)(s)],8,["url"])):(0,i.kq)("",!0),"403"==e.url?((0,i.wg)(),(0,i.j4)("div",{key:2,class:"errormsg",url:e.url},[(0,i.Wm)(a)],8,["url"])):(0,i.kq)("",!0),"500"==e.url?((0,i.wg)(),(0,i.j4)("div",{key:3,class:"errormsg",url:e.url},[(0,i.Wm)(p)],8,["url"])):(0,i.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["theme"])}const l=(0,i.Uk)("要不要听听歌呢");function c(e,t,n,r,o,u){const c=(0,i.up)("n-button"),s=(0,i.up)("n-result");return(0,i.wg)(),(0,i.j4)(s,{status:"error",title:"503 服务器娘挂了",description:"QAQ我吃不下了啦！"},{footer:(0,i.w5)((()=>[(0,i.Wm)(c,{type:"primary",onClick:e.handleClick},{default:(0,i.w5)((()=>[l])),_:1},8,["onClick"])])),_:1})}var s=(0,i.aZ)({setup(){function e(){window.open("https://res.kcn3388.club/music.html","_blank")}return{handleClick:e}}});s.render=c;var a=s;const p=(0,i.Uk)("听个歌转换一下心情吧"),d=(0,i.Uk)(" 愿你能善待服务器娘。（PS：996是违法的） ");function f(e,t,n,r,o,u){const l=(0,i.up)("n-button"),c=(0,i.up)("n-popconfirm"),s=(0,i.up)("n-result");return(0,i.wg)(),(0,i.j4)(s,{status:"404",title:"404 服务器娘受不了跑路了",description:"你们这样压榨是不人道的"},{footer:(0,i.w5)((()=>[(0,i.Wm)(c,{onPositiveClick:e.handlePositiveClick,onNegativeClick:e.handleNegativeClick,"positive-text":"我会善待服务器娘的","negative-text":"我觉得不行"},{trigger:(0,i.w5)((()=>[(0,i.Wm)(l,{type:"warning"},{default:(0,i.w5)((()=>[p])),_:1})])),default:(0,i.w5)((()=>[d])),_:1},8,["onPositiveClick","onNegativeClick"])])),_:1})}var v=n(3359),k=(0,i.aZ)({setup(){const e=(0,v.U)();return{handlePositiveClick(){window.open("https://res.kcn3388.club/music.html","_blank")},handleNegativeClick(){e.error("愿主赦免你的灵魂")}}}});k.render=f;var w=k;const m=(0,i.Uk)("放轻松"),g=(0,i.Wm)("span",null,"反正不放轻松你也做不了什么，来听歌吧",-1);function h(e,t,n,r,o,u){const l=(0,i.up)("n-button"),c=(0,i.up)("n-popover"),s=(0,i.up)("n-result");return(0,i.wg)(),(0,i.j4)(s,{status:"403",title:"403 禁止访问",description:"马卡洛夫：没有，滚吧"},{footer:(0,i.w5)((()=>[(0,i.Wm)(c,{trigger:"hover"},{trigger:(0,i.w5)((()=>[(0,i.Wm)(l,{type:"info",onClick:e.handleClick},{default:(0,i.w5)((()=>[m])),_:1},8,["onClick"])])),default:(0,i.w5)((()=>[g])),_:1})])),_:1})}var b=(0,i.aZ)({setup(){function e(){window.open("https://res.kcn3388.club/music.html","_blank")}return{handleClick:e}}});b.render=h;var y=b;const _=(0,i.Uk)("点击散财消灾。没钱？那还是听歌吧");function C(e,t,n,r,o,u){const l=(0,i.up)("n-button"),c=(0,i.up)("n-dropdown"),s=(0,i.up)("n-result");return(0,i.wg)(),(0,i.j4)(s,{status:"500",title:"500 服务器娘炸毛了",description:"你可能需要更关心一点自己的员工"},{footer:(0,i.w5)((()=>[(0,i.Wm)(c,{onSelect:e.handleSelect,trigger:"click",options:e.options},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{type:"error"},{default:(0,i.w5)((()=>[_])),_:1})])),_:1},8,["onSelect","options"])])),_:1})}var j=n(2262),W=n(6828),O=(0,i.aZ)({setup(){const e=(0,j.iH)(!1),t=(0,W.R)();return{options:[{label:"破财消灾",key:!0},{label:"没钱，听歌",key:!1}],showDropdown:e,handleSelect(e){1==e?t.error({title:"我觉得不行",content:"别傻了，你以为你真的有钱吗，还是听歌吧",positiveText:"嗯",onPositiveClick:()=>{window.open("https://res.kcn3388.club/music.html","_blank")}}):t.success({title:"我觉得行",content:"你也就只能听听歌了",positiveText:"嗯",onPositiveClick:()=>{window.open("https://res.kcn3388.club/music.html","_blank")}})}}}});O.render=C;var P=O,S=n(286),E=(0,i.aZ)({components:{E503:a,E404:w,E403:y,E500:P},setup(){var e=window.location.href.split("?")[1];return{darkTheme:S.$,url:e}}});E.render=u;var x=E;const T=(0,r.ri)(x);T.use(o.Z),T.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var l=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(l=!1,i<u&&(u=i));l&&(e.splice(s--,1),t=o())}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],l=r[1],c=r[2],s=0;for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var a=c(n);for(t&&t(r);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[u[s]]=0;return n.O(a)},r=self["webpackChunknaive"]=self["webpackChunknaive"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4215)}));r=n.O(r)})();
//# sourceMappingURL=app.5ffb3baf.js.map