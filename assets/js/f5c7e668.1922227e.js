"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[379],{34006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=(n(95657),["components"]),s={id:"subscriptions",title:"Subscriptions"},p=void 0,l={unversionedId:"schema-generator/execution/subscriptions",id:"schema-generator/execution/subscriptions",title:"Subscriptions",description:"Subscriptions are supported with graphql-java. See their documentation first:",source:"@site/docs/schema-generator/execution/subscriptions.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/subscriptions",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/subscriptions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/optional-undefined-arguments"},next:{title:"Introspection",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/introspection"}},u={},d=[{value:"Flow Support",id:"flow-support",level:2},{value:"Subscription Hooks",id:"subscription-hooks",level:2},{value:"<code>willResolveMonad</code>",id:"willresolvemonad",level:3},{value:"<code>didGenerateSubscriptionType</code>",id:"didgeneratesubscriptiontype",level:3},{value:"<code>isValidSubscriptionReturnType</code>",id:"isvalidsubscriptionreturntype",level:3},{value:"Server Implementation",id:"server-implementation",level:2}],c={toc:d},h="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)(h,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Subscriptions are supported with ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-java"),". See their documentation first:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/subscriptions"},"https://www.graphql-java.com/documentation/subscriptions")),(0,a.kt)("p",null,"To make a function a subscription function you just have to have the return type wrapped in an implementation of a\nreactive-streams ",(0,a.kt)("inlineCode",{parentName:"p"},"Publisher<T>"),". As an example, here is a function that uses Spring WebFlux to return a random number every\nsecond. Since ",(0,a.kt)("inlineCode",{parentName:"p"},"Flux")," is an implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"Publisher")," this is a valid method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun counter(): Flux<Int> = Flux.interval(Duration.ofSeconds(1)).map { Random.nextInt() }\n")),(0,a.kt)("p",null,"Then in the ",(0,a.kt)("inlineCode",{parentName:"p"},"toSchema")," method you just have to provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"List<TopLevelObject>")," the same way as queries and mutations\nare provided with the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscriptions")," argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"toSchema(\n    config = schemaConfig,\n    queries = queries.toTopLevelObjects(),\n    mutations = mutations.toTopLevelObjects(),\n    subscriptions = subscriptions.toTopLevelObjects()\n)\n")),(0,a.kt)("h2",{id:"flow-support"},"Flow Support"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," provides support for Kotlin ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," through ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionSchemaGeneratorHooks")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionExecutionStrategy"),".\nBoth hooks and execution strategy have to be configured in order to support ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," in your GraphQL server."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionSchemaGeneratorHooks")," are custom hooks that provide support for using ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," return type within the\nGraphQL server."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionExecutionStrategy")," is a reimplementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-java")," default ",(0,a.kt)("inlineCode",{parentName:"p"},"SubscriptionExecutionStrategy"),"\nthat adds support for handling Kotlin ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," types. Thanks to the Kotlin coroutines interoperability, this strategy works\nwith any ",(0,a.kt)("inlineCode",{parentName:"p"},"Publisher")," and will automatically convert any ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow"),"s to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Publisher"),"."),(0,a.kt)("h2",{id:"subscription-hooks"},"Subscription Hooks"),(0,a.kt)("h3",{id:"willresolvemonad"},(0,a.kt)("inlineCode",{parentName:"h3"},"willResolveMonad")),(0,a.kt)("p",null,"This hooks is called before resolving Kotlin return type to a GraphQL type and can be used to provide support for additional\nmonads (e.g. Kotlin ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow"),")."),(0,a.kt)("h3",{id:"didgeneratesubscriptiontype"},(0,a.kt)("inlineCode",{parentName:"h3"},"didGenerateSubscriptionType")),(0,a.kt)("p",null,"This hook is called after a new subscription type is generated but before it is added to the schema. The other generator\nhooks are still called so you can add logic for the types and validation of subscriptions the same as queries and mutations."),(0,a.kt)("h3",{id:"isvalidsubscriptionreturntype"},(0,a.kt)("inlineCode",{parentName:"h3"},"isValidSubscriptionReturnType")),(0,a.kt)("p",null,"This hook is called when generating the functions for each subscription. It allows for changing the rules of what classes\ncan be used as the return type. By default, graphql-java supports ",(0,a.kt)("inlineCode",{parentName:"p"},"org.reactivestreams.Publisher"),"."),(0,a.kt)("p",null,"To effectively use this hook, you should also override the ",(0,a.kt)("inlineCode",{parentName:"p"},"willResolveMonad")," hook to support the additional subscription\nreturn type. Your GraphQL server may also require a custom subscription execution strategy in order to process it at runtime."),(0,a.kt)("h2",{id:"server-implementation"},"Server Implementation"),(0,a.kt)("p",null,"The server that runs your GraphQL schema will have to support some method for subscriptions, like WebSockets.\n",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a default WebSocket based implementation. See more details in the\n",(0,a.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/server/server-subscriptions"},"server documentation"),"."))}m.isMDXComponent=!0}}]);