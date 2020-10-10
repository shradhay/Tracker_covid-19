(this.webpackJsonpcovid_19_tracker=this.webpackJsonpcovid_19_tracker||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),l=(a(100),a(24)),s=a(37),i=a.n(s),u=a(65),m=a(20),f=a(238),d=a(240),h=a(241),v=a(89),p=a(233),E=a(237),b=(a(102),function(e){var t=e.title,a=e.cases,n=e.total,r=e.active,o=e.isRed,s=Object(v.a)(e,["title","cases","total","active","isRed"]);return c.a.createElement("div",null,c.a.createElement(p.a,Object(l.a)({className:"infoBox",onClick:s.onClick},"className","infoBox ".concat(r&&"infoBox--selected"," ").concat(o&&"infoBox--red")),c.a.createElement(E.a,{className:"infoBox_title",color:"textSecondary"},t),c.a.createElement("h2",{className:"infoBox_cases"},a),c.a.createElement(E.a,{className:"infoBox_total",color:"textSecondary"},n," Total")))}),g=(a(106),a(244)),j=a(245),O=(a(107),a(88)),y=a(14),w=a.n(y),N=a(242),x=a(243),_={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},C=function(e){var t=Object(O.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t};var k=function(e){var t=e.countries,a=e.casesType,n=e.center,r=e.zoom;return c.a.createElement("div",{className:"map"},c.a.createElement(g.a,{className:"leaflet-div",center:n,zoom:r},c.a.createElement(j.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return c.a.createElement(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:_[t].hex,fillColor:_[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*_[t].multiplier},c.a.createElement(x.a,null,c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info-name"},e.country),c.a.createElement("div",{className:"info-confirmed"},"Cases: ",w()(e.cases).format("0,0")),c.a.createElement("div",{className:"info-recovered"},"Recovered: ",w()(e.recovered).format("0,0")),c.a.createElement("div",{className:"info-deaths"},"Deaths: ",w()(e.deaths).format("0,0")))))}))}(t,a)))},S=a(239);a(108);var B=function(e){var t=e.countries;return c.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return c.a.createElement("tr",null,c.a.createElement("td",null,t),c.a.createElement("td",null,c.a.createElement("strong",null,w()(a).format("0,0"))))})))};a(109);function R(){return c.a.createElement("div",{className:"LineGraph"},c.a.createElement("ul",null,c.a.createElement("li",null,"Use Mask"),c.a.createElement("li",null," Follow Social Distancing"),c.a.createElement("li",null,"Wash hand Frequently")))}a(206);var I=a(87),D=a.n(I),W=function(){var e,t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)("worldwide"),v=Object(m.a)(s,2),E=v[0],g=v[1],j=Object(n.useState)({}),O=Object(m.a)(j,2),y=O[0],N=O[1],x=Object(n.useState)([]),_=Object(m.a)(x,2),I=_[0],W=_[1],z=Object(n.useState)({lat:20.5937,lng:78.9629}),M=Object(m.a)(z,2),T=M[0],F=(M[1],Object(n.useState)(3)),q=Object(m.a)(F,2),J=q[0],L=q[1],A=Object(n.useState)([]),G=Object(m.a)(A,2),K=G[0],U=G[1],V=Object(n.useState)("cases"),$=Object(m.a)(V,2),H=$[0],P=$[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){N(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=C(e);o(t),U(e),W(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var Q=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){g(a),N(e),L(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app_left"},c.a.createElement("div",{className:"app_header"},c.a.createElement("img",{src:D.a,alt:"corona_img"}),c.a.createElement("h1",null," ",c.a.createElement("span",null,"COVID-19")," TRACKER"),c.a.createElement(f.a,{className:"app_dropdown"},c.a.createElement(d.a,{variant:"outlined",value:E,onChange:Q},c.a.createElement(h.a,{value:"worldwide",onChange:Q},"Worldwide"),r.map((function(e){return c.a.createElement(h.a,{value:e.value},e.name)}))))),c.a.createElement("div",{className:"app_stats"},c.a.createElement(b,{onClick:function(e){return P("cases")},title:"Coronavirus Cases",isRed:!0,cases:w()(y.todayCases).format("0,0"),total:w()(y.cases).format("0,0")}),c.a.createElement(b,{onClick:function(e){return P("recovered")},title:"Recovered",cases:w()(y.todayRecovered).format("0,0"),total:w()(y.recovered).format("0,0")}),c.a.createElement(b,(e={title:"Deaths"},Object(l.a)(e,"title","Deaths"),Object(l.a)(e,"isRed",!0),Object(l.a)(e,"onClick",(function(e){return P("deaths")})),Object(l.a)(e,"cases",w()(y.todayDeaths).format("0,0")),Object(l.a)(e,"total",w()(y.deaths).format("0,0")),e))),c.a.createElement(k,{countries:K,casesType:H,center:T,zoom:J})),c.a.createElement(p.a,{className:"app_right"},c.a.createElement(S.a,{className:"app_right_card"},c.a.createElement("h3",null," Live cases by country "),c.a.createElement("h3",null," Worldwide country "),c.a.createElement(B,{countries:I}),c.a.createElement("br",null),c.a.createElement("h3",null,"Instruction"),c.a.createElement("br",null),c.a.createElement(R,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){e.exports=a.p+"static/media/corona.ece115d1.png"},95:function(e,t,a){e.exports=a(207)}},[[95,1,2]]]);
//# sourceMappingURL=main.1a3ca6ec.chunk.js.map