"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3084],{12962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=(n(95657),["components"]),s={id:"lists",title:"Lists"},l=void 0,p={unversionedId:"schema-generator/writing-schemas/lists",id:"version-5.x.x/schema-generator/writing-schemas/lists",title:"Lists",description:"Both kotlin.Array and kotlin.collections.List are automatically mapped to the GraphQL List type (for unsupported",source:"@site/versioned_docs/version-5.x.x/schema-generator/writing-schemas/lists.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/lists",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/lists",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/schema-generator/writing-schemas/lists.md",tags:[],version:"5.x.x",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"lists",title:"Lists"},sidebar:"version-5.x.x/docs",previous:{title:"Enums",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/enums"},next:{title:"Interfaces",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/interfaces"}},d={},m=[{value:"Primitive Arrays",id:"primitive-arrays",level:2},{value:"Unsupported Collection Types",id:"unsupported-collection-types",level:2}],h={toc:m},c="wrapper";function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(c,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.Array")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.collections.List")," are automatically mapped to the GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," type (for unsupported\nuse cases see below). Type arguments provided to Kotlin collections are used as the type arguments in the GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),"\ntype. Kotlin specialized classes (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"IntArray"),") representing arrays of Java primitive types without boxing overhead\nare also supported."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SimpleQuery {\n    fun generateList(): List<Int> {\n        // some logic here that generates list\n    }\n\n    fun doSomethingWithIntArray(ints: IntArray): String {\n        // some logic here that processes array\n    }\n\n    fun doSomethingWithIntList(ints: List<Int>): String {\n        // some logic here that processes list\n    }\n}\n")),(0,i.kt)("p",null,"The above Kotlin class would produce the following GraphQL schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    generateList: [Int!]!\n    doSomethingWithIntArray(ints: [Int!]!): String!\n    doSomethingWithIntList(ints: [Int!]!): String!\n}\n")),(0,i.kt)("h2",{id:"primitive-arrays"},"Primitive Arrays"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," supports the following primitive array types without autoboxing overhead. Similarly to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.Array")," of objects the underlying type is automatically mapped to GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," type."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kotlin Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.IntArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.LongArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.ShortArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.FloatArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.DoubleArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.CharArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.BooleanArray"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The underlying GraphQL types of primitive arrays will be corresponding to the built-in scalar types or extended scalar types provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java"),".")),(0,i.kt)("h2",{id:"unsupported-collection-types"},"Unsupported Collection Types"),(0,i.kt)("p",null,"Currently, the GraphQL spec only supports ",(0,i.kt)("inlineCode",{parentName:"p"},"Lists"),". Therefore, even though Java and Kotlin support number of other collection\ntypes, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," only explicitly supports ",(0,i.kt)("inlineCode",{parentName:"p"},"Lists")," and primitive arrays. Other collection types\nsuch as ",(0,i.kt)("inlineCode",{parentName:"p"},"Sets")," (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/201"},"#201"),") and arbitrary ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," data\nstructures are not supported out of the box. While we do not reccomend using ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Set")," in the schema,\nthey are supported with the use of the schema hooks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun willResolveMonad(type: KType): KType = when (type.classifier) {\n    Set::class -> List::class.createType(type.arguments)\n    else -> type\n}\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/discussions/1110"},"Discussion #1110")," for more details."))}u.isMDXComponent=!0}}]);