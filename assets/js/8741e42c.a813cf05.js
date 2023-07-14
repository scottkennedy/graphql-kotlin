"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8457],{84689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),o=(a(95657),["components"]),l={id:"graphql-request-handler",title:"GraphQLRequestHandler"},i=void 0,p={unversionedId:"server/graphql-request-handler",id:"version-6.x.x/server/graphql-request-handler",title:"GraphQLRequestHandler",description:"The GraphQLRequestHandler is an open and extendable class that contains the basic logic to get a GraphQLResponse.",source:"@site/versioned_docs/version-6.x.x/server/graphql-request-handler.md",sourceDirName:"server",slug:"/server/graphql-request-handler",permalink:"/graphql-kotlin/docs/server/graphql-request-handler",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/server/graphql-request-handler.md",tags:[],version:"6.x.x",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"graphql-request-handler",title:"GraphQLRequestHandler"},sidebar:"docs",previous:{title:"GraphQLContextFactory",permalink:"/graphql-kotlin/docs/server/graphql-context-factory"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/server/server-subscriptions"}},d={},h=[],c={toc:h},u="wrapper";function g(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLRequestHandler")," is an open and extendable class that contains the basic logic to get a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLResponse"),"."),(0,s.kt)("p",null,"It requires a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," and a ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/data-loader/"},"KotlinDataLoaderRegistryFactory")," in the constructor.\nFor each request, it accepts a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLRequest")," and an optional ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-context-factory"},"GraphQLContext"),",\nand calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"KotlinDataLoaderRegistryFactory")," to generate a new ",(0,s.kt)("inlineCode",{parentName:"p"},"KotlinDataLoaderRegistry"),". Then all of these objects are sent to the schema for\nexecution and the result is mapped to a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLResponse"),"."),(0,s.kt)("p",null,"There shouldn't be much need to change this class but if you wanted to add custom logic\nor logging it is possible to override it or just create your own."))}g.isMDXComponent=!0}}]);