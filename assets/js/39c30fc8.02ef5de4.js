"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4870],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(t),d=a,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1876:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"graphql-server",title:"GraphQLServer"},s=void 0,p={unversionedId:"server/graphql-server",id:"version-5.x.x/server/graphql-server",title:"GraphQLServer",description:"graphql-kotlin-server provides common code and basic interfaces to setup a GraphQL server in any framework.",source:"@site/versioned_docs/version-5.x.x/server/graphql-server.md",sourceDirName:"server",slug:"/server/graphql-server",permalink:"/graphql-kotlin/docs/5.x.x/server/graphql-server",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/server/graphql-server.md",tags:[],version:"5.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1650972687,formattedLastUpdatedAt:"4/26/2022",frontMatter:{id:"graphql-server",title:"GraphQLServer"},sidebar:"version-5.x.x/docs",previous:{title:"Federation Tracing",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/federation/federation-tracing"},next:{title:"GraphQLRequestParser",permalink:"/graphql-kotlin/docs/5.x.x/server/graphql-request-parser"}},c={},u=[{value:"<code>GraphQLServer</code>",id:"graphqlserver",level:2}],h={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," provides common code and basic interfaces to setup a GraphQL server in any framework."),(0,o.kt)("p",null,"The official reference implementations are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/graphql-kotlin/docs/5.x.x/server/spring-server/spring-overview"},"graphql-kotlin-spring-server"))),(0,o.kt)("p",null,"We recommend using one of the implementations as the common code has very little logic but you can still use the common\npackage to create implementation for other libraries (Ktor, Spark, etc)."),(0,o.kt)("p",null,"There are demos of how to use these server libraries in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/examples")," folder of the repo."),(0,o.kt)("h2",{id:"graphqlserver"},(0,o.kt)("inlineCode",{parentName:"h2"},"GraphQLServer")),(0,o.kt)("p",null,"The top level object in the common package is ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLServer<T>"),".\nThis class is open for extensions and requires that you specify the type of the http requests you will be handling."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("a",{parentName:"li",href:"https://spring.io/reactive"},"Spring Reactive")," we would define a ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQLServer<ServerRequest>")),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("a",{parentName:"li",href:"https://ktor.io/"},"Ktor")," we would define a ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQLServer<ApplicationRequest>"))),(0,o.kt)("p",null,"In its simplest form, a GraphQL server has the following responsibilties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Parse the GraphQL request info from the HTTP request"),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQLContext")," object from the HTTP request to be used during execution"),(0,o.kt)("li",{parentName:"ul"},"Send the request and the context to the GraphQL schema to execute and get a response (may contain ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"errors"),")"),(0,o.kt)("li",{parentName:"ul"},"Send the reponse back to the client over HTTP")),(0,o.kt)("p",null,"Most of the logic in a GraphQL server that is specific to your application is already in the schema, so if we have interfaces for all these\ncommon functions, we can abstract away the library specific features."),(0,o.kt)("p",null,"The one method we don't have an interface for is sending back the response to the client. Once you get the response back from ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLServer"),",\nwe leave the rest up to your application to call it's server specific methods to encode and send the response."))}d.isMDXComponent=!0}}]);