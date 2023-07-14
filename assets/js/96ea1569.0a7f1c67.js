"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6056],{63465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=(r(95657),["components"]),s={id:"type-resolution",title:"Federated Type Resolution",original_id:"type-resolution"},d=void 0,p={unversionedId:"federated/type-resolution",id:"version-3.x.x/federated/type-resolution",title:"Federated Type Resolution",description:"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of",source:"@site/versioned_docs/version-3.x.x/federated/type-resolution.md",sourceDirName:"federated",slug:"/federated/type-resolution",permalink:"/graphql-kotlin/docs/3.x.x/federated/type-resolution",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/federated/type-resolution.md",tags:[],version:"3.x.x",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"type-resolution",title:"Federated Type Resolution",original_id:"type-resolution"},sidebar:"version-3.x.x/docs",previous:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-directives"},next:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview"}},l={},u=[{value:"<code>_entities</code> query",id:"_entities-query",level:2},{value:"Federated Type Resolver",id:"federated-type-resolver",level:3}],c={toc:u},h="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of\nthe GraphQL schema from a corresponding query, mutation or subscription root type. Since federated GraphQL types might\nbe accessed outside of the query path we need a mechanism to access them in a consistent manner."),(0,i.kt)("h2",{id:"_entities-query"},(0,i.kt)("inlineCode",{parentName:"h2"},"_entities")," query"),(0,i.kt)("p",null,"Federated GraphQL server provides custom ",(0,i.kt)("inlineCode",{parentName:"p"},"_entities")," query that allow retrieving any of the federated extended types.\n",(0,i.kt)("inlineCode",{parentName:"p"},"_entities"),' query accept list of "representation" objects that provide all required fields to resolve the type and\nreturn an ',(0,i.kt)("inlineCode",{parentName:"p"},"_Entity")," union type of all supported federated types. Representation objects are just a map of all the fields\nreferenced in ",(0,i.kt)("inlineCode",{parentName:"p"},"@key")," directive as well as target ",(0,i.kt)("inlineCode",{parentName:"p"},"__typename")," information. If federated query type fragments also\nreference fields with ",(0,i.kt)("inlineCode",{parentName:"p"},"@requires")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@provides")," directives then those referenced fields should also be specified in\nthe target representation object."),(0,i.kt)("p",null,">"," NOTE: ",(0,i.kt)("inlineCode",{parentName:"p"},"_entities")," queries are automatically generated by the federated gateway and their usage is transparent for the\n",">"," gateway clients."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"\nquery ($_representations: [_Any!]!) {\n  _entities(representations: $_representations) {\n    ... on SomeFederatedType {\n      fieldA\n      fieldB\n    }\n  }\n}\n\n")),(0,i.kt)("h3",{id:"federated-type-resolver"},"Federated Type Resolver"),(0,i.kt)("p",null,"In order to simplify the integrations, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," provides default ",(0,i.kt)("inlineCode",{parentName:"p"},"_entities")," query resolver that\nrelies on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/execution/FederatedTypeRegistry.kt"},"FederatedTypeRegistry"),"\nto retrieve\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/execution/FederatedTypeResolver.kt"},"FederatedTypeResolver"),"\nthat is used to resolve target object. When configuring the federated schema generator hooks you have to explicitly\nprovide those resolver mappings to the configuration."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FederatedTypeResolver")," accepts a list of representations of the target types which should be resolved in the same order\nas they were specified in the list of representations. Each passed in representation should either be resolved to a\ntarget entity or NULL if entity cannot be resolved."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nval productResolver = object: FederatedTypeResolver<Product> {\n    override suspend fun resolve(representations: List<Map<String, Any>>): List<Product?> = representations.map {\n        val id = it["id"]?.toString()?.toIntOrNull()\n        // instantiate product using id\n    }\n}\n// federated type registry provides mapping between target __typename and the corresponding type resolver\nval federatedTypeRegistry = FederatedTypeRegistry(mapOf("Product" to productResolver))\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = FederatedSchemaGeneratorHooks(federatedTypeRegistry))\nval schema = toFederatedSchema(config)\n\n')))}f.isMDXComponent=!0}}]);