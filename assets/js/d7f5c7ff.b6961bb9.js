"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},72041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"fetching-data",title:"Fetching Data"},c=void 0,p={unversionedId:"schema-generator/execution/fetching-data",id:"version-6.x.x/schema-generator/execution/fetching-data",title:"Fetching Data",description:"Each field exposed in the GraphQL schema has a corresponding resolver (aka data fetcher) associated with it. graphql-kotlin-schema-generator generates the GraphQL schema",source:"@site/versioned_docs/version-6.x.x/schema-generator/execution/fetching-data.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/fetching-data",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/execution/fetching-data",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/execution/fetching-data.md",tags:[],version:"6.x.x",lastUpdatedBy:"Adrian Witaszak",lastUpdatedAt:1696885167,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"fetching-data",title:"Fetching Data"},sidebar:"docs",previous:{title:"Advanced Features",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/advanced-features"},next:{title:"Async Models",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/execution/async-models"}},s={},u=[{value:"Customizing Default Behavior",id:"customizing-default-behavior",level:3}],d={toc:u},h="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each field exposed in the GraphQL schema has a corresponding resolver (aka data fetcher) associated with it. ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," generates the GraphQL schema\ndirectly from the source code, automatically mapping all the fields either to use\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/execution/FunctionDataFetcher.kt"},"FunctionDataFetcher"),"\nto resolve underlying functions or the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/execution/PropertyDataFetcher.kt"},"PropertyDataFetcher"),"\nto read a value from an underlying Kotlin property."),(0,o.kt)("p",null,"While all the fields in a GraphQL schema are resolved independently to produce a final result, whether a field is backed by a function or a property can have significant\nperformance repercussions. For example, given the following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  product(id: ID!): Product\n}\n\ntype Product {\n  id: ID!\n  name: String!\n  reviews: [Review!]!\n}\n\ntype Review {\n  id: ID!\n  text: String!\n}\n")),(0,o.kt)("p",null,"We can define ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Product(val id: ID, val name: String, reviews: List<Review>)\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Product(val id: ID, val name: String) {\n  suspend fun reviews(): List<Reviews> {\n     // logic to fetch reviews here\n  }\n}\n")),(0,o.kt)("p",null,"If we expose the ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews")," field as a property it will always be populated regardless whether or not your client actually asks for it. On the other hand if ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews")," is backed\nby a function, it will only be called if your client asks for this data. In order to minimize the over-fetching of data from your underlying data sources we recommend to\nexpose all your GraphQL fields that require some additional computations through functions."),(0,o.kt)("h3",{id:"customizing-default-behavior"},"Customizing Default Behavior"),(0,o.kt)("p",null,"You can provide your own custom data fetchers to resolve functions and properties by providing an instance of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/execution/KotlinDataFetcherFactoryProvider.kt#L31"},"KotlinDataFetcherFactoryProvider"),"\nto your ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/SchemaGeneratorConfig.kt"},"SchemaGeneratorConfig"),"."),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server/spring-server"},"spring example app")," for an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomDataFetcherFactoryProvider"),"."))}m.isMDXComponent=!0}}]);