"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[703],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={id:"spring-graphql-context",title:"Generating GraphQL Context"},s=void 0,l={unversionedId:"server/spring-server/spring-graphql-context",id:"server/spring-server/spring-graphql-context",title:"Generating GraphQL Context",description:"graphql-kotlin-spring-server provides a Spring specific implementation of GraphQLContextFactory",source:"@site/docs/server/spring-server/spring-graphql-context.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-graphql-context",permalink:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-graphql-context.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1650972687,formattedLastUpdatedAt:"4/26/2022",frontMatter:{id:"spring-graphql-context",title:"Generating GraphQL Context"},sidebar:"docs",previous:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/server/spring-server/spring-schema"},next:{title:"HTTP Request and Response",permalink:"/graphql-kotlin/docs/server/spring-server/spring-http-request-response"}},c={},u=[{value:"Federated Context",id:"federated-context",level:2}],d={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a Spring specific implementation of ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-context-factory"},"GraphQLContextFactory"),"\nand the context."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SpringGraphQLContext")," ",(0,o.kt)("strong",{parentName:"li"},"(deprecated)")," - Implements the Spring ",(0,o.kt)("inlineCode",{parentName:"li"},"ServerRequest")," and federation tracing ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTPRequestHeaders")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SpringGraphQLContextFactory")," - Generates GraphQL context map with federated tracing information per request")),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),", you should extend ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultSpringGraphQLContextFactory")," to automatically\nsupport federated tracing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Component\nclass MyGraphQLContextFactory : DefaultSpringGraphQLContextFactory() {\n    override suspend fun generateContextMap(request: ServerRequest): Map<*, Any> = super.generateContextMap(request) + mapOf(\n        "myCustomValue" to (request.headers().firstHeader("MyHeader") ?: "defaultContext")\n    )\n}\n')),(0,o.kt)("p",null,"Once your application is configured to build your custom GraphQL context map, you can then access it through a data fetching\nenvironment argument. While executing the query, data fetching environment will be automatically injected to the function input arguments.\nThis argument will not appear in the GraphQL schema."),(0,o.kt)("p",null,"For more details, see the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/contextual-data"},"Contextual Data Documentation"),"."),(0,o.kt)("h2",{id:"federated-context"},"Federated Context"),(0,o.kt)("p",null,"If you need ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing"},"federation tracing support"),", you can set the appropriate ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-properties"},"configuration properties"),".\nThe provided ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultSpringGraphQLContextFactory")," populates the required information for federated tracing, so as long as\nyou extend this context class you will maintain feature support."))}g.isMDXComponent=!0}}]);