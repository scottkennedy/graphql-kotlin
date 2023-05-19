"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4177],{91239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),s=(n(95657),["components"]),p={id:"spring-subscriptions",title:"Subscriptions"},a=void 0,l={unversionedId:"server/spring-server/spring-subscriptions",id:"version-4.x.x/server/spring-server/spring-subscriptions",title:"Subscriptions",description:"_To see more details on how to implement subscriptions in your schema, see the schema generator docs on executing subscriptions.",source:"@site/versioned_docs/version-4.x.x/server/spring-server/spring-subscriptions.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-subscriptions",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-subscriptions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/spring-server/spring-subscriptions.md",tags:[],version:"4.x.x",lastUpdatedBy:"Maxim Ignatiev",lastUpdatedAt:1684514798,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"spring-subscriptions",title:"Subscriptions"},sidebar:"version-4.x.x/docs",previous:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-properties"},next:{title:"Client Overview",permalink:"/graphql-kotlin/docs/4.x.x/client/client-overview"}},c={},d=[{value:"Flow Support",id:"flow-support",level:2},{value:"<code>graphql-ws</code> subprotocol",id:"graphql-ws-subprotocol",level:2},{value:"Subscription Hooks",id:"subscription-hooks",level:2},{value:"<code>onConnect</code>",id:"onconnect",level:3},{value:"<code>onOperation</code>",id:"onoperation",level:3},{value:"<code>onOperationComplete</code>",id:"onoperationcomplete",level:3},{value:"<code>onDisconnect</code>",id:"ondisconnect",level:3},{value:"Example",id:"example",level:2}],u={toc:d},h="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"To see more details on how to implement subscriptions in your schema, see the schema generator docs on ",(0,i.kt)("a",{parentName:"em",href:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/subscriptions"},"executing subscriptions"),".\nThis page lists the ",(0,i.kt)("inlineCode",{parentName:"em"},"graphql-kotlin-spring-server")," specific features.")),(0,i.kt)("h2",{id:"flow-support"},"Flow Support"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides automatic support for Kotlin ",(0,i.kt)("inlineCode",{parentName:"p"},"Flow")," through ",(0,i.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionExecutionStrategy"),"\nthat supports existing ",(0,i.kt)("inlineCode",{parentName:"p"},"Publisher"),"s and relies on Kotlin reactive-streams interop to convert ",(0,i.kt)("inlineCode",{parentName:"p"},"Flow")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Publisher"),"."),(0,i.kt)("h2",{id:"graphql-ws-subprotocol"},(0,i.kt)("inlineCode",{parentName:"h2"},"graphql-ws")," subprotocol"),(0,i.kt)("p",null,"We have implemented subscriptions in Spring WebSockets following the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql-ws")," subprotocol")," defined by Apollo.\nThis requires that your client send and parse messages in a specific format."),(0,i.kt)("p",null,"If you would like to implement your own subscription handler, you can provide a primary spring bean for ",(0,i.kt)("inlineCode",{parentName:"p"},"HandlerMapping")," that overrides the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-beans"},"default one")," which sets the url for subscriptions to the Apollo subscription handler."),(0,i.kt)("h2",{id:"subscription-hooks"},"Subscription Hooks"),(0,i.kt)("p",null,"In line with the Apollo protocol, we have implemented hooks to execute functions at different stages of the connection lifecycle.\nIf you would like to implement your own subscription hooks, you can provide a primary spring bean for ",(0,i.kt)("inlineCode",{parentName:"p"},"ApolloSubscriptionHooks")," that overrides the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-beans"},"default one")," which do not perform any actions."),(0,i.kt)("h3",{id:"onconnect"},(0,i.kt)("inlineCode",{parentName:"h3"},"onConnect")),(0,i.kt)("p",null,"Allows validation of connectionParams prior to starting the connection.\nYou can reject the connection by throwing an exception.\nIf you need to forward state to execution, update and return the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-graphql-context"},"GraphQLContext"),"."),(0,i.kt)("h3",{id:"onoperation"},(0,i.kt)("inlineCode",{parentName:"h3"},"onOperation")),(0,i.kt)("p",null,"Called when the client executes a GraphQL operation. The context can not be updated here, it is read only."),(0,i.kt)("h3",{id:"onoperationcomplete"},(0,i.kt)("inlineCode",{parentName:"h3"},"onOperationComplete")),(0,i.kt)("p",null,"Called when client's unsubscribes"),(0,i.kt)("h3",{id:"ondisconnect"},(0,i.kt)("inlineCode",{parentName:"h3"},"onDisconnect")),(0,i.kt)("p",null,"Called when the client disconnects"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"You can see an example implementation of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/server/spring-server/src/main/kotlin/com/expediagroup/graphql/examples/server/spring/subscriptions/SimpleSubscription.kt"},"example app"),"."))}m.isMDXComponent=!0}}]);