"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2590],{82270:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=(t(95657),["components"]),s={id:"spring-schema",title:"Writing Schemas with Spring",original_id:"spring-schema"},p=void 0,l={unversionedId:"spring-server/spring-schema",id:"version-3.x.x/spring-server/spring-schema",title:"Writing Schemas with Spring",description:"In order to expose your queries, mutations and/or subscriptions in the GraphQL schema you need to create beans that",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-schema.md",sourceDirName:"spring-server",slug:"/spring-server/spring-schema",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-schema",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-schema.md",tags:[],version:"3.x.x",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"spring-schema",title:"Writing Schemas with Spring",original_id:"spring-schema"},sidebar:"version-3.x.x/docs",previous:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-properties"},next:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"}},u={},c=[{value:"Spring Query Beans",id:"spring-query-beans",level:2},{value:"Spring Data Fetcher",id:"spring-data-fetcher",level:2},{value:"Spring BeanFactoryAware",id:"spring-beanfactoryaware",level:2}],g={toc:c},d="wrapper";function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to expose your queries, mutations and/or subscriptions in the GraphQL schema you need to create beans that\nimplement corresponding marker interface and they will be automatically picked up by ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),"\nauto-configuration library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass MyAwesomeQuery : Query {\n  fun myAwesomeQuery(): Widget { ... }\n}\n\n@Component\nclass MyAwesomeMutation : Mutation {\n  fun myAwesomeMutation(widget: Widget): Widget { ... }\n}\n\n@Component\nclass MyAwesomeSubscription : Subscription {\n  fun myAwesomeSubscription(): Publisher<Widget> { ... }\n}\n\ndata class Widget(val id: Int, val value: String)\n")),(0,i.kt)("p",null,"will result in a Spring Boot reactive GraphQL web application with following schema."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n\ntype Query {\n  myAwesomeQuery: Widget!\n}\n\ntype Mutation {\n  myAwesomeMutation(widget: WidgetInput!): Widget!\n}\n\ntype Subscription {\n  myAwesomeSubscription: Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n\ninput WidgetInput {\n  id: Int!\n  value: String!\n}\n")),(0,i.kt)("h2",{id:"spring-query-beans"},"Spring Query Beans"),(0,i.kt)("p",null,"Spring will automatically autowire dependent beans to our Spring query beans. Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/"},"Spring Documentation")," for details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass WidgetQuery(private val repository: WidgetRepository) : Query {\n    fun getWidget(id: Int): Widget = repository.findWidget(id)\n}\n")),(0,i.kt)("h2",{id:"spring-data-fetcher"},"Spring Data Fetcher"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides Spring aware data fetcher that automatically autowires Spring beans when they are\nspecified as function arguments. ",(0,i.kt)("inlineCode",{parentName:"p"},"@Autowired")," arguments should be explicitly excluded from the GraphQL schema by also\nspecifying ",(0,i.kt)("inlineCode",{parentName:"p"},"@GraphQLIgnore"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass SpringQuery : Query {\n    fun getWidget(@GraphQLIgnore @Autowired repository: WidgetRepository, id: Int): Widget = repository.findWidget(id)\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: if you are using custom data fetcher make sure that you extend ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringDataFetcher")," instead of a base ",(0,i.kt)("inlineCode",{parentName:"p"},"FunctionDataFetcher"),".")),(0,i.kt)("h2",{id:"spring-beanfactoryaware"},"Spring BeanFactoryAware"),(0,i.kt)("p",null,"You can use Spring beans to wire different objects together at runtime. Instead of autowiring specific beans as properties,\nyou can also dynamically resolve beans by using bean factories. There is an example of how to set this up in the example\napp in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/TopLevelBeanFactoryQuery.kt"},"TopLevelBeanFactoryQuery.kt"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Component\nclass UsersQuery : Query, BeanFactoryAware {\n    private lateinit var beanFactory: BeanFactory\n\n    @GraphQLIgnore\n    override fun setBeanFactory(beanFactory: BeanFactory) {\n        this.beanFactory = beanFactory\n    }\n\n    fun findUser(id: String): SubQuery = beanFactory.getBean(User::class.java, id)\n}\n\n@Component\n@Scope("prototype")\nclass User @Autowired(required = false) constructor(private val userId: String) {\n\n    @Autowired\n    private lateinit var service: PhotoService\n\n    fun photos(numberOfPhotos: Int): List<Photo> = service.findPhotos(userId, numberOfPhotos)\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We have examples of these techniques implemented in Spring boot in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/NestedQueries.kt"},"example\napp"),"."))}m.isMDXComponent=!0}}]);