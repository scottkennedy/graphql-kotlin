"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[591],{87523:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),i=(t(95657),["components"]),l={id:"data-loader",title:"Data Loaders"},d=void 0,s={unversionedId:"server/data-loader/data-loader",id:"server/data-loader/data-loader",title:"Data Loaders",description:"Data Loaders are a popular caching pattern from the JavaScript GraphQL implementation.",source:"@site/docs/server/data-loader/data-loader.md",sourceDirName:"server/data-loader",slug:"/server/data-loader/",permalink:"/graphql-kotlin/docs/7.x.x/server/data-loader/",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/data-loader/data-loader.md",tags:[],version:"current",lastUpdatedBy:"Maxim Ignatiev",lastUpdatedAt:1684514798,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"data-loader",title:"Data Loaders"},sidebar:"docs",previous:{title:"Automatic Persisted Queries (APQ)",permalink:"/graphql-kotlin/docs/7.x.x/server/automatic-persisted-queries/"},next:{title:"Data Loader Instrumentations",permalink:"/graphql-kotlin/docs/7.x.x/server/data-loader/data-loader-instrumentation"}},p={},u=[{value:"<code>KotlinDataLoader</code>",id:"kotlindataloader",level:2},{value:"<code>KotlinDataLoaderRegistryFactory</code>",id:"kotlindataloaderregistryfactory",level:2},{value:"<code>KotlinDataLoaderRegistry</code>",id:"kotlindataloaderregistry",level:2},{value:"<code>getValueFromDataLoader</code>",id:"getvaluefromdataloader",level:2},{value:"DataLoaders and Coroutines",id:"dataloaders-and-coroutines",level:2},{value:"Example",id:"example",level:3}],c={toc:u},h="wrapper";function m(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data Loaders are a popular caching pattern from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/dataloader"},"JavaScript GraphQL implementation"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," provides ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v16/batching/"},"support for this pattern"),"\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistry"),"."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," allows you to abstract the schema generation and data fetching code, you may not even need\ndata loaders if instead you have some persistant cache on your server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class User(val id: ID) {\n    // The friendService and userService, which have nothing to do with GraphQL,\n    // should be concerned with caching and batch calls instead of your schema classes\n    fun getFriends(): List<User> {\n        val friends: List<ID> = friendService.getFriends(id)\n        return userService.getUsers(friends)\n    }\n\n}\n")),(0,o.kt)("p",null,"If you still want to use data loaders though, they are supported through the common interfaces."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-dataloader")," module provides convenient abstractions over the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/java-dataloader"},"java-dataloader"),"."),(0,o.kt)("h2",{id:"kotlindataloader"},(0,o.kt)("inlineCode",{parentName:"h2"},"KotlinDataLoader")),(0,o.kt)("p",null,"To help in the registration of ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaders"),", we have created an interface ",(0,o.kt)("inlineCode",{parentName:"p"},"KotlinDataLoader"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface KotlinDataLoader<K, V> {\n    val dataLoaderName: String\n    fun getDataLoader(): DataLoader<K, V>\n}\n")),(0,o.kt)("p",null,"This allows for library users to still have full control over the creation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," and its various configuration\noptions but also allows common server code to handle the registration, generation and execution of the request."),(0,o.kt)("h2",{id:"kotlindataloaderregistryfactory"},(0,o.kt)("inlineCode",{parentName:"h2"},"KotlinDataLoaderRegistryFactory")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/server/graphql-request-handler"},"GraphQLRequestHandler")," accepts an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"KotlinDataLoaderRegistryFactory"),".\nwhich generates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"KotlinDataLoaderRegistry")," on every request. The registry is a map of a unique data loader names to a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," object that handles the cache for an output type in your graph.\nA ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," caches the types by some unique value, usually by the type id, and can handle different types of batch requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class UserDataLoader : KotlinDataLoader<ID, User> {\n    override val dataLoaderName = "UserDataLoader"\n    override fun getDataLoader() = DataLoaderFactory.newDataLoader<ID, User> { ids ->\n        CompletableFuture.supplyAsync {\n            ids.map { id -> userService.getUser(id) }\n        }\n    }\n}\n\nclass FriendsDataLoader : KotlinDataLoader<ID, List<User>> {\n    override val dataLoaderName = "FriendsDataLoader"\n    override fun getDataLoader() = DataLoaderFactory.newDataLoader<ID, User>(\n        { ids ->\n            CompletableFuture.supplyAsync {\n                ids.map { id ->\n                    val friends: List<ID> = friendService.getFriends(id)\n                    userService.getUsers(friends)\n                }\n            }\n        },\n        DataLoaderOptions.newOptions().setCachingEnabled(false)\n    )\n}\n\nval dataLoaderRegistryFactory = KotlinDataLoaderRegistryFactory(\n    UserDataLoader(), FriendsDataLoader()\n)\n\nval dataLoaderRegistry = dataLoaderRegistryFactory.generate()\n')),(0,o.kt)("h2",{id:"kotlindataloaderregistry"},(0,o.kt)("inlineCode",{parentName:"h2"},"KotlinDataLoaderRegistry")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/executions/graphql-kotlin-dataloader/src/main/kotlin/com/expediagroup/graphql/dataloader/KotlinDataLoaderRegistry.kt"},"KotlinDataLoaderRegistry"),"\nis a decorator of the original ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/java-dataloader/blob/master/src/main/java/org/dataloader/DataLoaderRegistry.java"},"DataLoaderRegistry"),"\nthat keeps track of all underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),"s futures. By keeping track of to cache map containing returned futures,\nwe get more granular control when to dispatch data loader calls."),(0,o.kt)("h2",{id:"getvaluefromdataloader"},(0,o.kt)("inlineCode",{parentName:"h2"},"getValueFromDataLoader")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," includes a helpful extension function on the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," so that you can easily retrieve values from the data loaders in your schema code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class User(val id: ID) {\n    @GraphQLDescription("Get the users friends using data loader")\n    fun getFriends(dataFetchingEnvironment: DataFetchingEnvironment): CompletableFuture<List<User>> {\n        return dataFetchingEnvironment.getValueFromDataLoader("FriendsDataLoader", id)\n    }\n}\n')),(0,o.kt)("h2",{id:"dataloaders-and-coroutines"},"DataLoaders and Coroutines"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"s for scheduling and asynchronously executing GraphQL operations.\nWhile we can provide native support for coroutines for data fetchers (aka field resolvers) because they are resolved\nindependently, we cannot easily provide native support for the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," pattern as it relies\non ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," state machine internals and we cannot update it to use coroutines without fully rewriting\nGraphQL Java execution engine."),(0,o.kt)("p",null,"If you would like to use ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," pattern in your project, you have to update your data fetchers (aka field resolvers) to return\n",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," from the invoked ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),"."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Consider the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"fragment UserFragment on User {\n    id\n    name\n}\nquery GetUsersFriends {\n    user_1: user(id: 1) {\n        ...UserFragment\n    }\n    user_2: user(id: 2) {\n        ...UserFragment\n    }\n}\n")),(0,o.kt)("p",null,"And the corresponding code that will autogenerate schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyQuery(\n    private val userService: UserService\n) : Query {\n    suspend fun getUser(id: Int): User = userService.getUser(id)\n}\n\nclass UserService {\n    suspend fun getUser(id: Int): User = // async logic to get user\n    suspend fun getUsers(ids: List<Int>): List<User> = // async logic to get users\n}\n")),(0,o.kt)("p",null,"When we execute the above query, we will end up calling ",(0,o.kt)("inlineCode",{parentName:"p"},"UserService#getUser")," twice which will result in two independent\ndownstream service/database calls. This problem is called N+1 problem. By using ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," pattern,\nwe can solve this problem and only make a single downstream request/query."),(0,o.kt)("p",null,"Lets create the ",(0,o.kt)("inlineCode",{parentName:"p"},"UserDataLoader"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class UserDataLoader : KotlinDataLoader<ID, User> {\n    override val dataLoaderName = "UserDataLoader" // 1\n    override fun getDataLoader() = // 2\n        DataLoaderFactory.newDataLoader<Int, User> { ids, batchLoaderEnvironment ->\n            val coroutineScope = // 3\n                batchLoaderEnvironment.getGraphQLContext()?.get<CoroutineScope>()\n                    ?: CoroutineScope(EmptyCoroutineContext) // 4\n\n            coroutineScope.future { // 5\n                userService.getUsers(ids)\n            }\n        }\n}\n\n')),(0,o.kt)("p",null,"There are some things going on here:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We define the ",(0,o.kt)("inlineCode",{parentName:"li"},"UserDataLoader"),' with name "UserDataLoader".'),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"KotlinDataLoader#getDataLoader()")," method returns a ",(0,o.kt)("inlineCode",{parentName:"li"},"DataLoader<Int, User>"),", which ",(0,o.kt)("inlineCode",{parentName:"li"},"BatchLoader")," function should return a ",(0,o.kt)("inlineCode",{parentName:"li"},"List<User>"),"."),(0,o.kt)("li",{parentName:"ol"},"Given that we ",(0,o.kt)("strong",{parentName:"li"},"don't want")," to change our ",(0,o.kt)("inlineCode",{parentName:"li"},"UserService")," async model that is using coroutines, we need a ",(0,o.kt)("inlineCode",{parentName:"li"},"CoroutineScope"),", ",(0,o.kt)("a",{parentName:"li",href:"../../schema-generator/execution/async-models/#coroutines"},"which is conveniently available")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQLContext")," and accessible through ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/executions/graphql-kotlin-dataloader-instrumentation/src/main/kotlin/com/expediagroup/graphql/dataloader/instrumentation/extensions/BatchLoaderEnvironmentExtensions.kt#L43"},(0,o.kt)("inlineCode",{parentName:"a"},"DataFetchingEnvironment#getGraphQLContext()"))," extension function."),(0,o.kt)("li",{parentName:"ol"},"After retrieving the ",(0,o.kt)("inlineCode",{parentName:"li"},"CoroutineScope")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"batchLoaderEnvironment")," we will be able to execute the ",(0,o.kt)("inlineCode",{parentName:"li"},"userService.getUsers(ids)")," suspendable function."),(0,o.kt)("li",{parentName:"ol"},"We interoperate the suspendable function result to a ",(0,o.kt)("inlineCode",{parentName:"li"},"CompletableFuture")," using ",(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-jdk8/kotlinx.coroutines.future/future.html"},"coroutineScope.future"),".")),(0,o.kt)("p",null,"Finally, we need to update ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," field resolver, to return the ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture<User>")," from the invoked ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),".\nMake sure to update method signature to also accept the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataFetchingEnvironment")," as you need to pass it to ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader#load")," method to be able to execute the request in appropriate coroutine scope."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyQuery(\n    private val userService: UserService\n) : Query {\n    fun getUser(id: Int, dataFetchingEnvironment: DataFetchingEnvironment): CompletableFuture<User> =\n        dataFetchingEnvironment\n            .getDataLoader<Int, Mission>("UserDataLoader")\n            .load(id, dataFetchingEnvironment)\n}\n\nclass UserService {\n    suspend fun getUser(id: Int): User {\n        // logic to get user\n    }\n    suspend fun getUsers(ids: List<Int>): List<User> {\n        // logic to get users, this method is called from the DataLoader\n    }\n}\n')))}m.isMDXComponent=!0}}]);