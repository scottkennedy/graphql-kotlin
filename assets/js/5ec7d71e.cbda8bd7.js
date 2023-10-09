"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6140],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(f,s(s({ref:r},c),{},{components:t})):n.createElement(f,s({ref:r},c))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37110:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),s=["components"],a={id:"server-subscriptions",title:"Subscriptions"},p=void 0,l={unversionedId:"server/server-subscriptions",id:"server/server-subscriptions",title:"Subscriptions",description:"GraphQL Kotlin provides WebSocket subscription support with the generic Flow based implementation of [GraphQL WS subscription",source:"@site/docs/server/server-subscriptions.md",sourceDirName:"server",slug:"/server/server-subscriptions",permalink:"/graphql-kotlin/docs/server/server-subscriptions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/server-subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Adrian Witaszak",lastUpdatedAt:1696885167,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"server-subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/server/graphql-request-handler"},next:{title:"Automatic Persisted Queries (APQ)",permalink:"/graphql-kotlin/docs/server/automatic-persisted-queries/"}},c={},u=[],d={toc:u},m="wrapper";function f(e){var r=e.components,t=(0,i.Z)(e,s);return(0,o.kt)(m,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL Kotlin provides ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocket")," subscription support with the generic ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," based implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md"},(0,o.kt)("inlineCode",{parentName:"a"},"GraphQL WS")," subscription\nprotocol"),". Server implementations should extend generic abstract ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLWebSocketServer<Session, Message>")," class and fill server\nspecific details on how to read incoming messages from the WebSocket session as well as how to send responses back to the client."),(0,o.kt)("p",null,"If you are using one of the official server implementations for GraphQL Kotlin, it will have subscription handling setup for you."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-spring-server")," ",(0,o.kt)("a",{parentName:"li",href:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions"},"subscriptions")),(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-ktor-server")," ",(0,o.kt)("a",{parentName:"li",href:"/graphql-kotlin/docs/server/ktor-server/ktor-subscriptions"},"subscriptions"))))}f.isMDXComponent=!0}}]);