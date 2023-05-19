"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3270],{98546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=(r(95657),["components"]),p={id:"spring-graphql-context",title:"Generating GraphQL Context"},s=void 0,l={unversionedId:"server/spring-server/spring-graphql-context",id:"version-6.x.x/server/spring-server/spring-graphql-context",title:"Generating GraphQL Context",description:"graphql-kotlin-spring-server provides a Spring specific implementation of GraphQLContextFactory",source:"@site/versioned_docs/version-6.x.x/server/spring-server/spring-graphql-context.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-graphql-context",permalink:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/server/spring-server/spring-graphql-context.md",tags:[],version:"6.x.x",lastUpdatedBy:"Maxim Ignatiev",lastUpdatedAt:1684514798,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"spring-graphql-context",title:"Generating GraphQL Context"},sidebar:"docs",previous:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/server/spring-server/spring-schema"},next:{title:"HTTP Request and Response",permalink:"/graphql-kotlin/docs/server/spring-server/spring-http-request-response"}},d={},c=[{value:"Federated Context",id:"federated-context",level:2}],g={toc:c},u="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(u,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a Spring specific implementation of ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-context-factory"},"GraphQLContextFactory"),"\nand the context."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SpringGraphQLContext")," ",(0,i.kt)("strong",{parentName:"li"},"(deprecated)")," - Implements the Spring ",(0,i.kt)("inlineCode",{parentName:"li"},"ServerRequest")," and federation tracing ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTPRequestHeaders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SpringGraphQLContextFactory")," - Generates GraphQL context map with federated tracing information per request")),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),", you should extend ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultSpringGraphQLContextFactory")," to automatically\nsupport federated tracing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Component\nclass MyGraphQLContextFactory : DefaultSpringGraphQLContextFactory() {\n    override suspend fun generateContextMap(request: ServerRequest): Map<*, Any> = super.generateContextMap(request) + mapOf(\n        "myCustomValue" to (request.headers().firstHeader("MyHeader") ?: "defaultContext")\n    )\n}\n')),(0,i.kt)("p",null,"Once your application is configured to build your custom GraphQL context map, you can then access it through a data fetching\nenvironment argument. While executing the query, data fetching environment will be automatically injected to the function input arguments.\nThis argument will not appear in the GraphQL schema."),(0,i.kt)("p",null,"For more details, see the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/contextual-data"},"Contextual Data Documentation"),"."),(0,i.kt)("h2",{id:"federated-context"},"Federated Context"),(0,i.kt)("p",null,"If you need ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing"},"federation tracing support"),", you can set the appropriate ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-properties"},"configuration properties"),".\nThe provided ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultSpringGraphQLContextFactory")," populates the required information for federated tracing, so as long as\nyou extend this context class you will maintain feature support."))}h.isMDXComponent=!0}}]);