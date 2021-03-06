(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{30:function(e,n,t){e.exports=t(60)},35:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(25),i=t.n(o),c=(t(35),t(2)),l=t(5),u=t.n(l),s=t(10),g=t(4),d=t(11),p=t.n(d),f=t(3),m=t(6),h={AUD:{name:"Australian Dollar"},BGN:{name:"Bulgarian Lev"},BRL:{name:"Brazilian Real"},CAD:{name:"Canadian Dollar"},CHF:{name:"Swiss Franc"},CNY:{name:"Chinese Yen"},CZK:{name:"Czech Koruna"},DKK:{name:"Danish Krone"},EUR:{name:"Euro"},GBP:{name:"British Pound"},HKD:{name:"Hong Kong Dollar"},HRK:{name:"Croatian Kuna"},HUF:{name:"Hungarian Forint"},IDR:{name:"Indonesian Rupiah"},ILS:{name:"Israeli Shekel"},INR:{name:"Indian Rupee"},ISK:{name:"Icelandic Krona"},JPY:{name:"Japanese Yen"},KRW:{name:"South Korean Won"},MXN:{name:"Mexican Peso"},MYR:{name:"Malaysian Ringgit"},NOK:{name:"Norwegian Krone"},NZD:{name:"New Zealand Dollar"},PHP:{name:"Philippene Peso"},PLN:{name:"Polish Zloty"},RON:{name:"Romanian Leu"},RUB:{name:"Russian Ruble"},SEK:{name:"Swedish Krona"},SGD:{name:"Singapore Dollar"},THB:{name:"Thai Bhat"},TRY:{name:"Turkish Lira"},USD:{name:"United States Dollar"},ZAR:{name:"South African Rand"}};function x(){var e=Object(c.a)(["\n    position: relative;\n    border-top: 1px solid silver;\n    border-radius: 0px;\n    transition: 0.3s;\n    background: rgba(255,255,255,0.7);\n    box-sizing: border-box;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    width: 270px;\n    height: 60px;\n    border: none;\n    background: white;\n    padding: 10px;\n    &:hover{\n        background: lightblue;\n        cursor: pointer;\n    }\n    .currency-tags{\n        width: fit-content;\n        padding-left: 20px;\n        display: flex;\n        flex-direction: column;\n        p:first-of-type{\n            font-size: 20px;\n            font-weight: bold;\n            margin: 0;\n        }\n        p{\n            font-size: 14px;\n            font-weight: regular;\n            letter-spacing: 1.2px;\n        }\n    }\n"]);return x=function(){return e},e}var y=f.a.div(x()),b={width:"50px",height:"100%"};var v=function(e){return r.a.createElement(y,{onClick:e.clicked},r.a.createElement(m.a,{style:b,svg:!0,countryCode:e.code.slice(0,2)}),r.a.createElement("div",{className:"currency-tags"},r.a.createElement("p",null,e.code),r.a.createElement("p",null,h[e.code].name)))},E=t(8);function w(){var e=Object(c.a)(["\n    width: 270px;\n    height: 60px;\n    border-radius: 5px;\n    border: none;\n    background: white;\n    padding: 10px;\n    margin-top: 10px;\n    font-size: 20px;\n    font-weight: regular;\n    font-family: 'Helvetica Neue';\n"]);return w=function(){return e},e}function S(){var e=Object(c.a)(["\n    position: absolute;\n    top: 60px;\n    left: 0;\n    width: 270px;\n    overflow: scroll;\n    z-index: 100;\n    background: none;\n    border-radius: 5px;\n    transition: 0.2s;\n    height: ","\n"]);return S=function(){return e},e}function C(){var e=Object(c.a)(["\n    position: relative;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    width: 270px;\n    height: 60px;\n    border-radius: 5px;\n    border: none;\n    background: white;\n    padding: 10px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.31);\n    .currency-tags{\n        width: fit-content;\n        padding-left: 20px;\n        display: flex;\n        flex-direction: column;\n        p:first-of-type{\n            font-size: 20px;\n            font-weight: bold;\n            margin: 0;\n        }\n        p{\n            font-size: 14px;\n            font-weight: regular;\n            letter-spacing: 1.2px;\n        }\n    }\n    svg{\n        position: absolute;\n        align-self: center;\n        width: 30px;\n        right: 15px;\n        transition: 0.3s;\n        &:hover{\n            cursor: pointer;\n            transform: scale(1.2);\n        }\n    }\n"]);return C=function(){return e},e}function O(){var e=Object(c.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n"]);return O=function(){return e},e}var j={width:"50px",height:"100%"},k=f.a.div(O()),B=f.a.div(C()),R=f.a.div(S(),(function(e){return e.toggle?"240px":"0px"})),N=f.a.input(w()),D=function(e){var n=Object(a.useState)({toggleSelling:!1,toggleBuying:!1}),t=Object(g.a)(n,2),o=t[0],i=t[1],c=Object(a.useState)(e.initialRate),l=Object(g.a)(c,2),d=l[0],f=l[1],x=Object(a.useState)("1.00"),y=Object(g.a)(x,2),b=y[0],w=y[1],S=Object(a.useState)((Number(b)*d).toFixed(2)),C=Object(g.a)(S,2),O=C[0],D=C[1],K=Object(a.useState)({flag:"GB",currencyCode:"GBP",currency:"British Pounds"}),P=Object(g.a)(K,2),H=P[0],z=P[1],I=Object(a.useState)({flag:"EU",currencyCode:"EUR",currency:"Euro"}),U=Object(g.a)(I,2),F=U[0],M=U[1],A=function(e,n){(function(){var t=Object(s.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p()("https://api.exchangeratesapi.io/latest?base=".concat(e,"&symbols=").concat(n));case 2:a=t.sent,f(Object.values(a.data.rates)[0]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),D((b*d).toFixed(2))};return r.a.createElement(k,null,r.a.createElement(B,null,r.a.createElement(m.a,{style:j,svg:!0,countryCode:H.flag}),r.a.createElement("div",{className:"currency-tags"},r.a.createElement("p",null,H.currencyCode),r.a.createElement("p",null,H.currency)),r.a.createElement(E.a,{style:{transform:o.toggleSelling?"rotate(180deg)":"rotate(0deg)"},onClick:function(){return i((function(e){return{toggleSelling:!e.toggleSelling,toggleBuying:e.toggleBuying}}))}}),r.a.createElement(R,{toggle:o.toggleSelling},e.rateData.map((function(e){return r.a.createElement(v,{key:Math.random(),clicked:function(){return z({flag:(n=e).slice(0,2),currencyCode:n,currency:h[n].name}),A(n,F.currencyCode),void i((function(e){return{toggleSelling:!1,toggleBuying:e.toggleBuying}}));var n},code:e})})))),r.a.createElement(E.b,{style:j,onClick:function(){M(H),z(F),A(H.currencyCode,F.currencyCode)}}),r.a.createElement(B,null,r.a.createElement(m.a,{style:j,svg:!0,countryCode:F.flag}),r.a.createElement("div",{className:"currency-tags"},r.a.createElement("p",null,F.currencyCode),r.a.createElement("p",null,F.currency)),r.a.createElement(E.a,{style:{transform:o.toggleBuying?"rotate(180deg)":"rotate(0deg)"},onClick:function(){return i((function(e){return{toggleSelling:e.toggleSelling,toggleBuying:!e.toggleBuying}}))}}),r.a.createElement(R,{toggle:o.toggleBuying},e.rateData.map((function(e){return r.a.createElement(v,{key:Math.random(),clicked:function(){return M({flag:(n=e).slice(0,2),currencyCode:n,currency:h[n].name}),A(H.currencyCode,n),void i((function(e){return{toggleSelling:e.toggleSelling,toggleBuying:!1}}));var n},code:e})})))),r.a.createElement(N,{focus:!0,type:"text",value:b,onChange:function(e){D((e.target.value*d).toFixed(2)),w(e.target.value)}}),r.a.createElement(E.b,{style:j}),r.a.createElement(N,{type:"text",value:O,onChange:function(e){w((e.target.value/d).toFixed(2)),D(e.target.value)}}))};function K(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin: 200px auto;\n    p {\n        font-family: 'Helvetica Neue';\n        font-size: 20px;\n        font-weight: 300;\n        text-align: left;\n        margin-bottom: 20px;\n    }\n"]);return K=function(){return e},e}function P(){var e=Object(a.useState)((function(){return localStorage.getItem("rates")||{}})),n=Object(g.a)(e,2),t=n[0];n[1];Object(a.useEffect)((function(){0!==Object.keys(t).length?console.log("Using local storage"):(console.log("calling api"),function(){var e=Object(s.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://api.exchangeratesapi.io/latest?base=GBP");case 2:n=e.sent,localStorage.setItem("rates",JSON.stringify(n.data.rates));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[t]);var o=JSON.parse(t),i=[];for(var c in o)i.push(c);return i.sort(),r.a.createElement(H,null,r.a.createElement("p",null,"Select the currency you have and the currency you would like to buy."),r.a.createElement(D,{rateData:i,initialRate:o.EUR}))}var H=f.a.div(K()),z=function(){return r.a.createElement("h2",null,"Currency Calculator")};function I(){return r.a.createElement("h2",null,"Historical Rates")}t(59);function U(){var e=Object(c.a)(["\n  display: block;\n  width: 650px;\n  margin: auto;\n  padding: 0;\n  text-align: center;\n  h1 {\n    margin-top: 50px;\n    font-family: 'Helvetica Neue';\n    font-weight: 300;\n    letter-spacing: 1.2px;\n  }\n"]);return U=function(){return e},e}var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null,r.a.createElement("h1",null,"Currency Converter"),r.a.createElement(P,null),r.a.createElement(z,null),r.a.createElement(I,null)))},M=f.a.main(U());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.fa686f15.chunk.js.map