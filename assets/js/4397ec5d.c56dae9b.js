"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1133],{91511:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var t=n(87462),r=n(63366),l=(n(67294),n(3905)),s=(n(95657),["components"]),i={id:"scalars",title:"Scalars"},o=void 0,p={unversionedId:"schema-generator/writing-schemas/scalars",id:"schema-generator/writing-schemas/scalars",title:"Scalars",description:"Primitive Types",source:"@site/docs/schema-generator/writing-schemas/scalars.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/scalars",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/scalars",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/scalars.md",tags:[],version:"current",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"scalars",title:"Scalars"},sidebar:"docs",previous:{title:"Arguments",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/arguments"},next:{title:"Enums",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/enums"}},u={},c=[{value:"Primitive Types",id:"primitive-types",level:2},{value:"GraphQL ID",id:"graphql-id",level:2},{value:"Custom Scalars",id:"custom-scalars",level:2},{value:"Inline Value Classes",id:"inline-value-classes",level:3},{value:"Representing Unwrapped Value Classes in the Schema as the Underlying Type",id:"representing-unwrapped-value-classes-in-the-schema-as-the-underlying-type",level:4},{value:"Representing Unwrapped Value Classes in the Schema as a Custom Scalar Type",id:"representing-unwrapped-value-classes-in-the-schema-as-a-custom-scalar-type",level:4},{value:"Representing Value Classes in the Schema as Objects",id:"representing-value-classes-in-the-schema-as-objects",level:4},{value:"Common Issues",id:"common-issues",level:2},{value:"Extended Scalars",id:"extended-scalars",level:3},{value:"<code>TypeNotSupportedException</code>",id:"typenotsupportedexception",level:3}],d={toc:c},h="wrapper";function m(e){var a=e.components,n=(0,r.Z)(e,s);return(0,l.kt)(h,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"primitive-types"},"Primitive Types"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),' can directly map most Kotlin "primitive" types to standard GraphQL scalar types or\nextended scalar types provided by ',(0,l.kt)("inlineCode",{parentName:"p"},"graphql-java"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kotlin Type"),(0,l.kt)("th",{parentName:"tr",align:null},"GraphQL Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kotlin.String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kotlin.Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kotlin.Int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Int"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kotlin.Double")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Float"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kotlin.Float")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Float"))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The GraphQL spec uses the term ",(0,l.kt)("inlineCode",{parentName:"p"},"Float")," for signed double\u2010precision fractional values. ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-java")," maps this to a ",(0,l.kt)("inlineCode",{parentName:"p"},"java.lang.Double")," for the execution. The generator will map both ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlin.Double")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlin.Float")," to GraphQL ",(0,l.kt)("inlineCode",{parentName:"p"},"Float")," but we recommend you use ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlin.Double"),".")),(0,l.kt)("h2",{id:"graphql-id"},"GraphQL ID"),(0,l.kt)("p",null,"GraphQL supports the scalar type ",(0,l.kt)("inlineCode",{parentName:"p"},"ID"),", a unique identifier that is not intended to be human-readable. IDs are\nserialized as a ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),". To expose a GraphQL ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," field, you must use the ",(0,l.kt)("inlineCode",{parentName:"p"},"com.expediagroup.graphql.generator.scalars.ID"),"\nclass, which is an ",(0,l.kt)("em",{parentName:"p"},"inline value class")," that wraps the underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"graphql-java")," supports additional types (",(0,l.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Int"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Long"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"UUID"),") but ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/317"},"due to serialization issues")," we can only directly support Strings.")),(0,l.kt)("p",null,"Since ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," is a value class, it may be represented at runtime as a wrapper or directly as underlying type. Due to the generic\nnature of the query processing logic we ",(0,l.kt)("em",{parentName:"p"},"always")," end up with up a wrapper type when resolving the field value. As a result,\nin order to ensure that underlying scalar value is correctly serialized, we need to explicitly unwrap it by registering\n",(0,l.kt)("inlineCode",{parentName:"p"},"IDValueUnboxer")," with your GraphQL instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// registering custom value unboxer\nval graphQL = GraphQL.newGraphQL(graphQLSchema)\n    .valueUnboxer(IDValueUnboxer())\n    .build()\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"IDValueUnboxer")," bean is automatically configured by ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class Person(\n    val id: ID,\n    val name: String\n)\n\nfun findPersonById(id: ID) = Person(id, "John Smith")\n\nfun generateRandomId(): ID = ID(UUID.randomUUID().toString())\n')),(0,l.kt)("p",null,"This would produce the following schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n    query: Query\n}\n\ntype Query {\n    findPersonById(id: ID!): Person!\n    generateRandomId: ID!\n}\n\ntype Person {\n    id: ID!\n    name: String!\n}\n")),(0,l.kt)("h2",{id:"custom-scalars"},"Custom Scalars"),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," uses Kotlin reflections to generate all schema objects. If you want to\napply custom behavior to the objects, you can also define your own custom scalars. Custom scalars have to be explicitly\nadded to the schema through ",(0,l.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks.willGenerateGraphQLType"),".\nSee the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/generator-config"},"Generator Configuration")," documentation for more information."),(0,l.kt)("p",null,"Example usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'class CustomSchemaGeneratorHooks : SchemaGeneratorHooks {\n\n  override fun willGenerateGraphQLType(type: KType): GraphQLType? = when (type.classifier as? KClass<*>) {\n    UUID::class -> graphqlUUIDType\n    else -> null\n  }\n}\n\nval graphqlUUIDType = GraphQLScalarType.newScalar()\n    .name("UUID")\n    .description("A type representing a formatted java.util.UUID")\n    .coercing(UUIDCoercing)\n    .build()\n\nobject UUIDCoercing : Coercing<UUID, String> {\n    override fun parseValue(input: Any, graphQLContext: GraphQLContext, locale: Locale): UUID = runCatching {\n        UUID.fromString(serialize(input, graphQLContext, locale))\n    }.getOrElse {\n        throw CoercingParseValueException("Expected valid UUID but was $input")\n    }\n\n    override fun parseLiteral(input: Value<*>, variables: CoercedVariables, graphQLContext: GraphQLContext, locale: Locale): UUID {\n        val uuidString = (input as? StringValue)?.value\n        return runCatching {\n            UUID.fromString(uuidString)\n        }.getOrElse {\n            throw CoercingParseLiteralException("Expected valid UUID literal but was $uuidString")\n        }\n    }\n\n    override fun serialize(dataFetcherResult: Any, graphQLContext: GraphQLContext, locale: Locale): String = runCatching {\n        dataFetcherResult.toString()\n    }.getOrElse {\n        throw CoercingSerializeException("Data fetcher result $dataFetcherResult cannot be serialized to a String")\n    }\n}\n')),(0,l.kt)("p",null,"Once the scalars are registered you can use them anywhere in the schema as regular objects."),(0,l.kt)("h3",{id:"inline-value-classes"},"Inline Value Classes"),(0,l.kt)("p",null,"It is often beneficial to create a wrapper around the underlying primitive type to better represent its meaning. Inline value classes can be used\nto optimize such use cases - Kotlin compiler will attempt to use underlying type directly whenever possible and only keep the wrapper classes\nwhenever it is necessary."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Nullable value class types may result in a runtime ",(0,l.kt)("inlineCode",{parentName:"p"},"IllegalArgumentException")," due to ",(0,l.kt)("a",{parentName:"p",href:"https://youtrack.jetbrains.com/issue/KT-31141"},"https://youtrack.jetbrains.com/issue/KT-31141"),". This should be resolved in Kotlin 1.7.0+.")),(0,l.kt)("h4",{id:"representing-unwrapped-value-classes-in-the-schema-as-the-underlying-type"},"Representing Unwrapped Value Classes in the Schema as the Underlying Type"),(0,l.kt)("p",null,"In order to represent unwrapped inline value classes in your schema as the underlying type, you need to register it using hooks and also provide value unboxer that will be used by\n",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-java")," when dealing with its wrapper object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@JvmInline\nvalue class MyValueClass(\n    val value: String\n)\n\nclass MyQuery : Query {\n    fun inlineValueClassQuery(value: MyValueClass? = null): MyValueClass = value ?: MyValueClass("default")\n}\n\nclass MySchemaGeneratorHooks : SchemaGeneratorHooks {\n    override fun willGenerateGraphQLType(type: KType): GraphQLType? = when (type.classifier) {\n        MyValueClass::class -> Scalars.GraphQLString\n        else -> null\n    }\n}\n\nclass MyValueUnboxer : IDValueUnboxer() {\n    override fun unbox(value: Any?): Any? = when (value) {\n        is MyValueClass -> `object`.value\n        else -> super.unbox(`object`)\n    }\n}\n\nval config = SchemaGeneratorConfig(\n    supportedPackages = listOf("com.example"),\n    hooks = MySchemaGeneratorHooks()\n)\nval schema = toSchema(\n    config = config,\n    queries = listOf(TopLevelObject(MyQuery()))\n)\nval graphQL = GraphQL.newGraphQL(graphQLSchema)\n    .valueUnboxer(MyValueUnboxer())\n    .build()\n')),(0,l.kt)("p",null,"This will generate a schema that exposes value classes as the corresponding wrapped type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  inlineValueClassQuery(value: String): String!\n}\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"GraphQL ID scalar type is represented using inline value class. When registering additional inline value classes you should extend the ",(0,l.kt)("inlineCode",{parentName:"p"},"IDValueUnboxer")," to ensure IDs will be correctly processed. Alternatively, extend ",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultValueUnboxer")," and handle the ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," value class as above."),(0,l.kt)("p",{parentName:"admonition"},"If you are using ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," you should create an instance of your bean as"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun idValueUnboxer(): IDValueUnboxer = MyValueUnboxer()\n"))),(0,l.kt)("h4",{id:"representing-unwrapped-value-classes-in-the-schema-as-a-custom-scalar-type"},"Representing Unwrapped Value Classes in the Schema as a Custom Scalar Type"),(0,l.kt)("p",null,"In many cases, it may be useful to represent value classes in the schema as a custom scalar type, as the additional type information is often useful for clients. In this form, the value class is unwrapped, but uses a custom scalar type to preserve the extra type information."),(0,l.kt)("p",null,"To do this, define a coercer for the value class that transforms it to and from the underlying type, and register it with the custom schema hooks:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val graphqlMyValueClassType: GraphQLScalarType = GraphQLScalarType.newScalar()\n  .name("MyValueClass")\n  .description(\n    """\n    |Represents my value class as a String value.\n    |""".trimMargin()\n  )\n  .coercing(MyValueClassCoercing)\n  .build()\n\nobject MyValueClassCoercing : Coercing<MyValueClass, String> {\n  override fun parseValue(input: Any, graphQLContext: GraphQLContext, locale: Locale): MyValueClass = ...\n  override fun parseLiteral(input: Value<*>, variables: CoercedVariables, graphQLContext: GraphQLContext, locale: Locale): MyValueClass = ...\n  override fun serialize(dataFetcherResult: Any, graphQLContext: GraphQLContext, locale: Locale): String = ...\n}\n\nclass CustomSchemaGeneratorHooks : SchemaGeneratorHooks {\n  override fun willGenerateGraphQLType(type: KType): GraphQLType? = when (type.classifier as? KClass<*>) {\n    MyValueClass::class -> graphqlMyValueClassType\n    else -> null\n  }\n}\n')),(0,l.kt)("p",null,"This will generate the schema that exposes value classes as a scalar type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar MyValueClass\n\ntype Query {\n  inlineValueClassQuery(value: MyValueClass): MyValueClass!\n}\n")),(0,l.kt)("h4",{id:"representing-value-classes-in-the-schema-as-objects"},"Representing Value Classes in the Schema as Objects"),(0,l.kt)("p",null,"To do this, simply use the value class directly without defining any coercers or unboxers as in the previous sections."),(0,l.kt)("p",null,"This will generate the schema that exposes value classes as a wrapped type, similar to a regular class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input MyValueClassInput {\n    value: String!\n}\n\ntype MyValueClass {\n    value: String!\n}\n\ntype Query {\n  inlineValueClassQuery(value: MyValueClassInput): MyValueClass!\n}\n")),(0,l.kt)("h2",{id:"common-issues"},"Common Issues"),(0,l.kt)("h3",{id:"extended-scalars"},"Extended Scalars"),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," only supports the primitive scalar types listed above. If you are looking to use common java types as scalars, you need to include the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java-extended-scalars"},"graphql-java-extended-scalars")," library and set up the hooks (see above), or write the logic yourself for how to resolve these custom scalars."),(0,l.kt)("p",null,"The most popular types that require extra configuration are: ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalDate"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Instant"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ZonedDateTime"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"URL"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"UUID")),(0,l.kt)("h3",{id:"typenotsupportedexception"},(0,l.kt)("inlineCode",{parentName:"h3"},"TypeNotSupportedException")),(0,l.kt)("p",null,"If you see the following message ",(0,l.kt)("inlineCode",{parentName:"p"},"Cannot convert ** since it is not a valid GraphQL type or outside the supported packages ***"),". This means that you need to update the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/generator-config"},"generator configuration")," to include the package of your type or you did not properly set up the hooks to register the new type."))}m.isMDXComponent=!0}}]);