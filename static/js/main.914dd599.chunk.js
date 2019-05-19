(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(55),c=a.n(o),s=(a(66),a(56)),l=a(59),m=a(13),i=a(14),u=a(18),h=a(15),p=a(19),v=a(12),f=a(58),d=function(e){return e>=75?"#31cb00":e<75&&e>=30?"#e6d506":"#f70304"},b=function(e){var t=e.percent;return r.a.createElement(f.a,{percent:t,strokeWidth:"4",trailColor:"#fff",strokeColor:d(t)})},g=(a(106),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).takeDamage=function(e){var t=a.state.hp-e;a.setState({hp:t,damage:""})},a.restoreLife=function(e){var t=a.state.hp,n=Number(t)+Number(e);a.setState({hp:n,restore:""})},a.onInputChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.state={hp:a.props.totalHp,damage:"",restore:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.position,o=t.totalHp,c=this.state,s=c.hp,l=c.damage,m=c.restore,i=s*o/100;return r.a.createElement("div",{className:"monster"},r.a.createElement("p",{className:"monster__name"},"".concat(a," ").concat(n)),r.a.createElement("div",{className:"monster__lifebar-container"},r.a.createElement(b,{percent:i})," ",r.a.createElement("span",{className:"monster__hp"},s)),r.a.createElement("div",{className:"monster__hp-buttons"},r.a.createElement("button",{className:"btn__hp-handler btn__hp-handler--minus",onClick:function(){return e.takeDamage(1)}},"-1"),r.a.createElement("button",{className:"btn__hp-handler btn__hp-handler--plus",onClick:function(){return e.restoreLife(1)}},"+1")),r.a.createElement("div",{className:"monster__life-handler"},r.a.createElement("input",{type:"number","aria-label":"damage",name:"damage",placeholder:"How much damage",value:l,onChange:this.onInputChange,className:"monster__input-damage"}),r.a.createElement("button",{className:"btn__hp-damage",onClick:function(){return e.takeDamage(l)}},"Damage")),r.a.createElement("div",{className:"monster__life-handler"},r.a.createElement("input",{type:"number",name:"restore",placeholder:"How much to restore",value:m,onChange:this.onInputChange,className:"monster__input-restore"}),r.a.createElement("button",{className:"btn__hp-restore",onClick:function(){return e.restoreLife(m)}},"Restore")))}}]),t}(r.a.PureComponent));function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var _=r.a.createElement("path",{d:"M151 7C71 7 7 71 7 150v117c0 19 15 33 33 33h36v74c0 8 6 15 15 15h120c8 0 15-7 15-15v-74h35c18 0 33-14 33-33V150C294 71 230 7 151 7",fill:"#999"}),C=r.a.createElement("path",{d:"M151 7V0C68 0 0 67 0 150v117c0 22 18 40 40 40h29v67c0 12 10 22 22 22h120c12 0 22-10 22-22v-67h28c22 0 40-18 40-40V150C301 67 234 0 151 0v14a136 136 0 0 1 136 136v117a26 26 0 0 1-26 27h-35a7 7 0 0 0-7 6v74c0 5-4 8-8 8H91c-5 0-9-3-9-8v-74a7 7 0 0 0-6-6H40a26 26 0 0 1-26-27V150A136 136 0 0 1 151 14z",fill:"#54596e"}),j=r.a.createElement("path",{d:"M151 14A136 136 0 0 0 14 150v25a143 143 0 0 1 273 0v-25A136 136 0 0 0 151 14",fill:"#8b8c90"}),y=r.a.createElement("g",{fill:"#54596e"},r.a.createElement("path",{d:"M151 7C71 7 7 71 7 150v68c0-15 3-30 7-43v-25a136 136 0 0 1 233-96c25 24 40 58 40 96v25c5 13 7 28 7 43v-68C294 71 230 7 151 7"}),r.a.createElement("path",{d:"M274 242c0-23-30-52-53-52s-40 18-40 40 18 41 40 41 53-7 53-29zm0 0M31 242c0-23 29-52 52-52s40 18 40 40c0 23-18 41-40 41s-52-7-52-29zm0 0M103 369v20a7 7 0 1 0 14 0v-20a7 7 0 0 0-14 0M130 369v20a7 7 0 0 0 14 0v-20a7 7 0 1 0-14 0M157 369v20a7 7 0 1 0 14 0v-20a7 7 0 0 0-14 0M185 369v20a7 7 0 0 0 13 0v-20a7 7 0 1 0-13 0M147 265l-19 29c-2 3 0 6 3 6h39c3 0 5-3 4-6l-20-29c-1-3-5-3-7 0zm0 0"})),N=function(e){var t=e.svgRef,a=O(e,["svgRef"]);return r.a.createElement("svg",E({viewBox:"-47 0 395 396",ref:t},a),_,C,j,y)},k=r.a.forwardRef(function(e,t){return r.a.createElement(N,E({svgRef:t},e))}),w=(a.p,function(e){var t=e.monsters,a=e.onRemove;return t.map(function(e,t){return r.a.createElement("section",{className:"monster-list card",key:e.id},r.a.createElement("button",{"aria-label":"remove ".concat(e.name," ").concat(t+1),type:"button",onClick:function(){return a(e.id)},className:"btn__remove-monster"},r.a.createElement(k,null)),r.a.createElement(g,Object.assign({},e,{position:t+1})))})}),M=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).onInputChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.state={},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.onAddMonster;return r.a.createElement("form",{className:"card"},r.a.createElement("input",{type:"text","aria-label":"monster name",placeholder:"name",name:"name",onChange:this.onInputChange,tabIndex:"0",autoFocus:!0}),r.a.createElement("input",{type:"number","aria-label":"monster hp",placeholder:"hp",name:"totalHp",onChange:this.onInputChange}),r.a.createElement("button",{className:"btn",type:"button",onClick:function(){return t(e.state)}},"Add"))}}]),t}(r.a.PureComponent),I=a(57),S=a.n(I),H=(a(107),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).addMonster=function(t){var a=e.state.monsters;e.setState({monsters:[].concat(Object(l.a)(a),[Object(s.a)({id:S()()},t)])})},e.removeMonster=function(t){var a=e.state.monsters;e.setState({monsters:a.filter(function(e){return e.id!==t})})},e.state={monsters:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.monsters;return r.a.createElement("div",{className:"monster-list-container"},r.a.createElement(M,{onAddMonster:this.addMonster}),r.a.createElement(w,{monsters:e,onRemove:this.removeMonster}))}}]),t}(r.a.PureComponent));var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"Monster Manager")),r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e,t,a){e.exports=a(108)},66:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.914dd599.chunk.js.map