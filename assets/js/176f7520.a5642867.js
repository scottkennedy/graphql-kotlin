"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4472],{43455:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),s=(o(95657),["components"]),p={id:"spring-subscriptions",title:"Subscriptions"},a=void 0,l={unversionedId:"server/spring-server/spring-subscriptions",id:"server/spring-server/spring-subscriptions",title:"Subscriptions",description:"_To see more details on how to implement subscriptions in your schema, see the schema generator docs on executing subscriptions.",source:"@site/docs/server/spring-server/spring-subscriptions.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-subscriptions",permalink:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-subscriptions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"spring-subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-properties"},next:{title:"Ktor Server Overview",permalink:"/graphql-kotlin/docs/7.x.x/server/ktor-server/ktor-overview"}},c={},d=[{value:"Flow Support",id:"flow-support",level:2},{value:"Subscription Protocols",id:"subscription-protocols",level:2},{value:"<code>graphql-transport-ws</code> subprotocol",id:"graphql-transport-ws-subprotocol",level:3},{value:"(deprecated) <code>subscriptions-transport-ws</code> subprotocol",id:"deprecated-subscriptions-transport-ws-subprotocol",level:3},{value:"Subscription Hooks",id:"subscription-hooks",level:2},{value:"<code>onConnect</code> / <code>onConnectWithContext</code>",id:"onconnect--onconnectwithcontext",level:3},{value:"<code>onOperation</code> / <code>onOperationWithContext</code>",id:"onoperation--onoperationwithcontext",level:3},{value:"<code>onOperationComplete</code>",id:"onoperationcomplete",level:3},{value:"<code>onDisconnect</code>",id:"ondisconnect",level:3},{value:"Example",id:"example",level:2}],u={toc:d},h="wrapper";function m(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)(h,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"To see more details on how to implement subscriptions in your schema, see the schema generator docs on ",(0,i.kt)("a",{parentName:"em",href:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/subscriptions"},"executing subscriptions"),".\nThis page lists the ",(0,i.kt)("inlineCode",{parentName:"em"},"graphql-kotlin-spring-server")," specific features.")),(0,i.kt)("h2",{id:"flow-support"},"Flow Support"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides automatic support for Kotlin ",(0,i.kt)("inlineCode",{parentName:"p"},"Flow")," by automatically configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionSchemaGeneratorHooks"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionExecutionStrategy")," beans."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you define your subscriptions using Kotlin ",(0,i.kt)("inlineCode",{parentName:"p"},"Flow"),", make sure to extend ",(0,i.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionSchemaGeneratorHooks")," whenever you need to provide some custom hooks.")),(0,i.kt)("h2",{id:"subscription-protocols"},"Subscription Protocols"),(0,i.kt)("h3",{id:"graphql-transport-ws-subprotocol"},(0,i.kt)("inlineCode",{parentName:"h3"},"graphql-transport-ws")," subprotocol"),(0,i.kt)("p",null,"We have implemented subscriptions in Spring WebSockets following the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql-transport-ws")," subprotocol"),"\nfrom ",(0,i.kt)("a",{parentName:"p",href:"https://the-guild.dev/"},"The Guild"),". This requires that your client send and parse messages in a specific format.\nSee protocol documentation for expected messages."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-transport-ws")," is the default subscription protocol that is enabled by default."),(0,i.kt)("h3",{id:"deprecated-subscriptions-transport-ws-subprotocol"},"(deprecated) ",(0,i.kt)("inlineCode",{parentName:"h3"},"subscriptions-transport-ws")," subprotocol"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"subscriptions-transport-ws")," was deprecated in favor of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql-transport-ws")," protocol"),".")),(0,i.kt)("p",null,"We have implemented subscriptions in Spring WebSockets following the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md"},(0,i.kt)("inlineCode",{parentName:"a"},"subscriptions-transport-ws")," subprotocol"),"\ndefined by ",(0,i.kt)("a",{parentName:"p",href:"https://www.apollographql.com/"},"Apollo"),". This requires that your client send and parse messages in a specific\nformat. See protocol documentation for expected messages."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"subscription-transport-ws")," is deprecated. In order to use it, you need to explicitly opt-in by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql.subscriptions.protocol=APOLLO_SUBSCRIPTIONS_WS"),"\nconfiguration property. Support for this protocol will be removed in the next major release."),(0,i.kt)("h2",{id:"subscription-hooks"},"Subscription Hooks"),(0,i.kt)("p",null,"In line with the Apollo protocol, we have implemented hooks to execute functions at different stages of the connection lifecycle.\nIf you would like to implement your own subscription hooks, you can provide a primary spring bean for ",(0,i.kt)("inlineCode",{parentName:"p"},"ApolloSubscriptionHooks")," that overrides the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-beans"},"default one")," which do not perform any actions."),(0,i.kt)("h3",{id:"onconnect--onconnectwithcontext"},(0,i.kt)("inlineCode",{parentName:"h3"},"onConnect")," / ",(0,i.kt)("inlineCode",{parentName:"h3"},"onConnectWithContext")),(0,i.kt)("p",null,"Allows validation of connectionParams prior to starting the connection.\nYou can reject the connection by throwing an exception.\nIf you need to forward state to execution, update and return the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-graphql-context"},"GraphQLContext"),"."),(0,i.kt)("h3",{id:"onoperation--onoperationwithcontext"},(0,i.kt)("inlineCode",{parentName:"h3"},"onOperation")," / ",(0,i.kt)("inlineCode",{parentName:"h3"},"onOperationWithContext")),(0,i.kt)("p",null,"Called when the client executes a GraphQL operation. The context can not be updated here, it is read only."),(0,i.kt)("h3",{id:"onoperationcomplete"},(0,i.kt)("inlineCode",{parentName:"h3"},"onOperationComplete")),(0,i.kt)("p",null,"Called when client's unsubscribes"),(0,i.kt)("h3",{id:"ondisconnect"},(0,i.kt)("inlineCode",{parentName:"h3"},"onDisconnect")),(0,i.kt)("p",null,"Called when the client disconnects"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"You can see an example implementation of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/server/spring-server/src/main/kotlin/com/expediagroup/graphql/examples/server/spring/subscriptions/SimpleSubscription.kt"},"example app"),"."))}m.isMDXComponent=!0}}]);