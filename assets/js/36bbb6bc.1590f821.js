"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},46461:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={id:"ktor-graphql-context",title:"Generating GraphQL Context"},l=void 0,c={unversionedId:"server/ktor-server/ktor-graphql-context",id:"server/ktor-server/ktor-graphql-context",title:"Generating GraphQL Context",description:"graphql-kotlin-ktor-server provides a Ktor specific implementation of GraphQLContextFactory",source:"@site/docs/server/ktor-server/ktor-graphql-context.md",sourceDirName:"server/ktor-server",slug:"/server/ktor-server/ktor-graphql-context",permalink:"/graphql-kotlin/docs/server/ktor-server/ktor-graphql-context",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/ktor-server/ktor-graphql-context.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1695080947,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{id:"ktor-graphql-context",title:"Generating GraphQL Context"},sidebar:"docs",previous:{title:"Writing Schemas with Ktor",permalink:"/graphql-kotlin/docs/server/ktor-server/ktor-schema"},next:{title:"HTTP request and response",permalink:"/graphql-kotlin/docs/server/ktor-server/ktor-http-request-response"}},s={},u=[{value:"Federated Context",id:"federated-context",level:2}],d={toc:u},h="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(h,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-server")," provides a Ktor specific implementation of ",(0,a.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-context-factory"},"GraphQLContextFactory"),"\nand the context."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"KtorGraphQLContextFactory")," - Generates GraphQL context map with federated tracing information per request")),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-server"),", you should extend ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultKtorGraphQLContextFactory")," to automatically\nsupport federated tracing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class CustomGraphQLContextFactory : DefaultKtorGraphQLContextFactory() {\n    override suspend fun generateContext(request: ApplicationRequest): GraphQLContext =\n        super.generateContext(request).plus(\n            mapOf("myCustomValue" to (request.headers["my-custom-header"] ?: "defaultContext"))\n        )\n}\n\nfun Application.graphQLModule() {\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(...)\n        }\n        server {\n            contextFactory = CustomGraphQLContextFactory()\n        }\n    }\n    routing {\n        graphQLPostRoute()\n    }\n}\n')),(0,a.kt)("p",null,"Once your application is configured to build your custom GraphQL context, you can then access it through a data fetching\nenvironment argument. While executing the query, data fetching environment will be automatically injected to the function input arguments.\nThis argument will not appear in the GraphQL schema."),(0,a.kt)("p",null,"For more details, see the ",(0,a.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/contextual-data"},"Contextual Data Documentation"),"."),(0,a.kt)("h2",{id:"federated-context"},"Federated Context"),(0,a.kt)("p",null,"If you need ",(0,a.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing"},"federation tracing support"),", you can set the appropriate\n",(0,a.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/ktor-server/ktor-configuration"},"configuration properties"),". The provided ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultKtorGraphQLContextFactory")," populates the required\ninformation for federated tracing, so as long as you extend this context class you will maintain feature support."))}f.isMDXComponent=!0}}]);