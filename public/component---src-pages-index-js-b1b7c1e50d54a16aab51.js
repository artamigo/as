(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t.n(n),r=t(0),s=t.n(r),o=(t(149),t(154)),i=t.n(o),c=t(162),m=t(152),u=(t(150),function(e){return s.a.createElement("header",{id:"header",className:"alt"},s.a.createElement("h1",null,"Armando "),s.a.createElement("h1",null,"& Susana"),s.a.createElement("p",null,"18 de Mayo de 2019"))}),d=t(166),M=t.n(d),p=t(35),E=t.n(p),w=t(180),L=t.n(w),y=t(4),g=t.n(y),N=function(e){return e.children},h=function(e){function a(){var a;return(a=e.call(this)||this).handleClick=a.handleClick.bind(E()(a)),a}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){L.a.polyfill()},t.handleClick=function(e){e.preventDefault();var a=0,t=!0,n=this.props,l=n.type,r=n.element,s=n.offset,o=n.timeout;if(l&&r)switch(l){case"class":t=!!(a=document.getElementsByClassName(r)[0]);break;case"id":t=!!(a=document.getElementById(r))}t?this.scrollTo(a,s,o):console.log("Element not found: "+r)},t.scrollTo=function(e,a,t){void 0===a&&(a=0),void 0===t&&(t=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;t?setTimeout(function(){window.scroll({top:n+a,left:0,behavior:"smooth"})},t):window.scroll({top:n+a,left:0,behavior:"smooth"})},t.render=function(){return s.a.createElement(N,null,"object"==typeof this.props.children?s.a.cloneElement(this.props.children,{onClick:this.handleClick}):s.a.createElement("span",{onClick:this.handleClick},this.props.children))},a}(s.a.Component);h.propTypes={type:g.a.string,element:g.a.string,offset:g.a.number,timeout:g.a.number,children:g.a.node.isRequired};var j=h,f=function(e){return s.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},s.a.createElement(M.a,{items:["intro","first","second","trd","cta","five"],currentClassName:"is-active",offset:-300},s.a.createElement("li",null,s.a.createElement(j,{type:"id",element:"intro"},s.a.createElement("a",{href:"#"},"Nos Casamos"))),s.a.createElement("li",null,s.a.createElement(j,{type:"id",element:"first"},s.a.createElement("a",{href:"#"},"Lugar"))),s.a.createElement("li",null,s.a.createElement(j,{type:"id",element:"second"},s.a.createElement("a",{href:"#"},"¿Qué me pongo?"))),s.a.createElement("li",null,s.a.createElement(j,{type:"id",element:"trd"},s.a.createElement("a",{href:"#"},"¿Y... a qué hora llego?"))),s.a.createElement("li",null,s.a.createElement(j,{type:"id",element:"cta"},s.a.createElement("a",{href:"#"},"Regalos"))),s.a.createElement("li",null,s.a.createElement(j,{type:"id",element:"five"},s.a.createElement("a",{href:"#"},"Redes Sociales")))))},D=t(181),C=t.n(D),x=function(e){function a(a){var t;return(t=e.call(this,a)||this)._handleWaypointEnter=function(){t.setState(function(){return{stickyNav:!1}})},t._handleWaypointLeave=function(){t.setState(function(){return{stickyNav:!0}})},t.state={stickyNav:!1},t}return l()(a,e),a.prototype.render=function(){return s.a.createElement(m.a,null,s.a.createElement(i.a,{title:"Armando & Susana"}),s.a.createElement(u,null),s.a.createElement(c.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),s.a.createElement(f,{sticky:this.state.stickyNav}),s.a.createElement("div",{id:"main"},s.a.createElement("section",{id:"intro",className:"main"},s.a.createElement("div",{className:"spotlight"},s.a.createElement("div",{className:"content"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"Nos Casamos")),s.a.createElement("p",null,"Algunos se habrán sorprendido por saber, que contra todo pronóstico y rompiendo quinielas, dentro de pocos días nos casaremos."),s.a.createElement("p",null,"Se preguntarán el por qué de tan repentina decisión. La verdad… es que después de 16 años de ponernos de acuerdo y desacuerdo, de idealizar y buscar el momento perfecto. Comprendimos que el momento perfecto es “ahora”. Ahora que estamos plenos, felices y enamorados."),s.a.createElement("p",null,"Nos gustaría que ustedes, que han sido parte de esta historia, nos acompañen a celebrar este momento tan especial.")),s.a.createElement("span",{className:"image"},s.a.createElement("img",{src:C.a,alt:""})))),s.a.createElement("section",{id:"first",className:"main special"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"Lugar")),s.a.createElement("div",{className:"direccion-conainer"},s.a.createElement("div",{style:{flex:1,justifyContent:"center",display:"flex",flexDirection:"column",margin:"20px"}},s.a.createElement("p",null,"Hemos elegido un bonito jardín, ubicado en la granja “El Profe”, cerca de Valladolid. Aproximadamente a 20 min del centro de Aguascalientes. Te anexamos la direccion 👇 y el mapa 🗺️ para que no te pierdas."),s.a.createElement("h2",null,"Dirección"),s.a.createElement("p",{style:{textAlign:"center",margin:0}},"Camino Río San Pedro #196, El Maguey."),s.a.createElement("p",{style:{textAlign:"center",margin:0}},'Granja "El Profe".'),s.a.createElement("p",{style:{textAlign:"center",margin:0}},"Jesus María, Aguascalientes.")),s.a.createElement("div",{className:"map"},s.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d59193.30628802942!2d-102.32046801828386!3d21.989013924106906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x8429ee66c314de7d%3A0xdff547d2b8c845ce!2sAltaria+Mall%2C+Troje+de+Alonso%2C+Aguascalientes+Municipality%2C+Aguascalientes%2C+Mexico!3m2!1d21.924259!2d-102.2896449!4m3!3m2!1d22.025617!2d-102.30960499999999!5e0!3m2!1sen!2sus!4v1557010191858!5m2!1sen!2sus",frameborder:"0",allowfullscreen:!0})))),s.a.createElement("section",{id:"second",className:"main special"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"¿Qué me pongo?"),s.a.createElement("p",{style:{maxWidth:"500px",margin:"auto",marginBottom:"10px"}}," No te estreses! Queremos que te sientas códomo(a). Guarda el smoking y vestido largo. Una vestimenta casual 👗 es excelente para la ocasión."),s.a.createElement("p",{style:{maxWidth:"500px",margin:"auto"}}," La recepción será en un jardín, así que no olvides tus 🕶 y 👡🥿 cómodos en el caso de las mujeres."))),s.a.createElement("section",{id:"trd",className:"main special"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"¿Y... a qué hora llego?"),s.a.createElement("p",{style:{maxWidth:"500px",margin:"auto",marginBottom:"10px"}},"Estaremos listos para recibirte en punto de las 14:00 hrs. ☀️ con unos deliciosos bocadillos y bebidas refrescantes 🍻🍸🍹 de bienvenida. "))),s.a.createElement("section",{id:"cta",className:"main special"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"Regalos"),s.a.createElement("p",{style:{maxWidth:"500px",margin:"auto",marginBottom:"10px"}},"Nuestro camino de regreso a casa 🗽 será largo y el espacio muy reducido. Así que no te preocupes por llevar algún 🎁. El mejor regalo es que nos acompañes y celebres este día con nosotros 🍾🥂."))),s.a.createElement("section",null,s.a.createElement("h2",null,"Los esperamos!"))))},a}(s.a.Component);a.default=x},148:function(e,a,t){var n;e.exports=(n=t(151))&&n.default||n},149:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(4),s=t.n(r);t(33),t(148),l.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},150:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+"},151:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),s=t.n(r),o=t(55),i=t(2),c=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=c},152:function(e,a,t){"use strict";var n=t(7),l=t.n(n),r=t(0),s=t.n(r),o=(t(153),t(149),t(150),function(e){return s.a.createElement("footer",{id:"footer"})}),i=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={loading:"is-loading"},t}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"body "+this.state.loading},s.a.createElement("div",{id:"wrapper"},e,s.a.createElement(o,null)))},a}(s.a.Component);a.a=i},181:function(e,a,t){e.exports=t.p+"static/01-8ef8451733c8882cd400e8a44b17f083.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-b1b7c1e50d54a16aab51.js.map