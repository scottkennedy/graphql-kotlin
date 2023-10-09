"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5018],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,h=c["".concat(i,".").concat(u)]||c[u]||d[u]||p;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<p;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(87462),n=a(63366),p=(a(67294),a(3905)),o=["components"],l={id:"examples",title:"Examples",original_id:"examples"},i=void 0,s={unversionedId:"examples",id:"version-3.x.x/examples",title:"Examples",description:"A collection of example apps that use graphql-kotlin libraries to test and demonstrate usages can be found in the examples module.",source:"@site/versioned_docs/version-3.x.x/examples.md",sourceDirName:".",slug:"/examples",permalink:"/graphql-kotlin/docs/3.x.x/examples",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/examples.md",tags:[],version:"3.x.x",lastUpdatedBy:"Adrian Witaszak",lastUpdatedAt:1696885167,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"examples",title:"Examples",original_id:"examples"},sidebar:"version-3.x.x/docs",previous:{title:"Getting Started",permalink:"/graphql-kotlin/docs/3.x.x/"},next:{title:"Blogs & Videos",permalink:"/graphql-kotlin/docs/3.x.x/blogs-and-videos"}},m={},c=[{value:"Client Example",id:"client-example",level:2},{value:"Spring Server Example",id:"spring-server-example",level:2},{value:"Federation Example",id:"federation-example",level:2},{value:"Spark Example",id:"spark-example",level:2}],d={toc:c},u="wrapper";function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,p.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"A collection of example apps that use graphql-kotlin libraries to test and demonstrate usages can be found in the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples"},"examples module"),"."),(0,p.kt)("h2",{id:"client-example"},"Client Example"),(0,p.kt)("p",null,"A ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," can be generated using the Maven and Gradle plugins in ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-plugins"),". For examples see the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples/client"},"examples/client")," folder."),(0,p.kt)("h2",{id:"spring-server-example"},"Spring Server Example"),(0,p.kt)("p",null,"One way to run a GraphQL server is with ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot"},"Spring Boot"),". A sample Spring\nBoot app that uses ",(0,p.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Spring\nWebflux")," together with\n",(0,p.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/prisma/graphql-playground"},"graphql-playground")," is provided as\na ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples/spring"},"examples/spring"),". All the examples used\nin this documentation should be available in the sample app."),(0,p.kt)("p",null,"In order to run it you can run\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/Application.kt"},"Application.kt"),"\ndirectly from your IDE. Alternatively you can also use the Spring Boot plugin from the command line."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n./gradlew bootRun\n\n")),(0,p.kt)("p",null,"Once the app has started you can explore the example schema by opening Playground endpoint at\nhttp:."),(0,p.kt)("h2",{id:"federation-example"},"Federation Example"),(0,p.kt)("p",null,"There is also an example of ",(0,p.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"},"Apollo Federation")," with two Spring Boot apps using `` and an Apollo Gateway app in Nodejs that exposes a single federated schema in ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples/federation"},"examples/federation"),"\nproject. Please refer to the README files for details on how to run each application."),(0,p.kt)("h2",{id:"spark-example"},"Spark Example"),(0,p.kt)("p",null,"The spark example provides a demonstration of delivering a GraphQL service via the ",(0,p.kt)("a",{parentName:"p",href:"http://sparkjava.com/"},"Spark HTTP framework"),". This example also demonstrates how to include ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/java-dataloader"},"``")," in your query execution. This example can be found at ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples/spark"},"examples/spark")))}h.isMDXComponent=!0}}]);