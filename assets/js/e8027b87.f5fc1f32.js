"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[239],{38652:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var t=a(87462),r=a(63366),s=(a(67294),a(3905)),i=(a(95657),["components"]),l={id:"interfaces",title:"Interfaces"},o=void 0,c={unversionedId:"schema-generator/writing-schemas/interfaces",id:"schema-generator/writing-schemas/interfaces",title:"Interfaces",description:"Kotlin interfaces, abstract and sealed classes will be mapped to a GraphQL interface. Due to the GraphQL distinction between interface",source:"@site/docs/schema-generator/writing-schemas/interfaces.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/interfaces",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/interfaces",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/interfaces.md",tags:[],version:"current",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"interfaces",title:"Interfaces"},sidebar:"docs",previous:{title:"Lists",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/lists"},next:{title:"Unions",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/unions"}},p={},m=[{value:"Abstract and Sealed Classes",id:"abstract-and-sealed-classes",level:2},{value:"Nested Interfaces",id:"nested-interfaces",level:2}],d={toc:m},g="wrapper";function h(e){var n=e.components,a=(0,r.Z)(e,i);return(0,s.kt)(g,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Kotlin interfaces, abstract and sealed classes will be mapped to a GraphQL interface. Due to the GraphQL distinction between interface\nand a ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/unions"},"union type"),", Kotlin interfaces need to specify at least one common field (property or a function). Superclasses and\ninterfaces can be excluded from the schema by marking them with ",(0,s.kt)("inlineCode",{parentName:"p"},"@GraphQLIgnore")," annotation or by providing custom filtering logic in a\ncustom schema generator hook."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("a",{parentName:"p",href:"http://spec.graphql.org/June2018/#sec-Interfaces"},"The GraphQL spec")," does not allow interfaces to be used as input.\nThis means that while it is valid Kotlin code to have an interface as an argument, upon schema generation, an exception will be thrown.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'interface Animal {\n    val type: AnimalType\n    fun sound(): String\n}\n\nenum class AnimalType {\n    CAT,\n    DOG\n}\n\nclass Dog : Animal {\n    override val type = AnimalType.DOG\n\n    override fun sound() = "bark"\n\n    fun barkAtEveryone(): String = "bark at everyone"\n}\n\nclass Cat : Animal {\n    override val type = AnimalType.CAT\n\n    override fun sound() = "meow"\n\n    fun ignoreEveryone(): String = "ignore everyone"\n}\n\nclass PolymorphicQuery {\n\n    fun animal(type: AnimalType): Animal? = when (type) {\n        AnimalType.CAT -> Cat()\n        AnimalType.DOG -> Dog()\n        else -> null\n    }\n}\n')),(0,s.kt)("p",null,"The above code will produce the following GraphQL schema:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Animal {\n  type: AnimalType!\n  sound: String!\n}\n\nenum AnimalType {\n  CAT\n  DOG\n}\n\ntype Cat implements Animal {\n  type: AnimalType!\n  ignoreEveryone: String!\n  sound: String!\n}\n\ntype Dog implements Animal {\n  type: AnimalType!\n  barkAtEveryone: String!\n  sound: String!\n}\n\ntype TopLevelQuery {\n  animal(type: AnimalType!): Animal\n}\n")),(0,s.kt)("h2",{id:"abstract-and-sealed-classes"},"Abstract and Sealed Classes"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/classes.html#abstract-classes"},"Abstract")," and ",(0,s.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/sealed-classes.html"},"sealed")," classes can also be used for GraphQL interface types."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"abstract class Shape(val area: Double)\nclass Circle(radius: Double) : Shape(PI * radius * radius)\nclass Square(sideLength: Double) : Shape(sideLength * sideLength)\n\nsealed class Pet(val name: String) {\n    class Dog(name: String, val goodBoysReceived: Int) : Pet(name)\n    class Cat(name: String, val livesRemaining: Int) : Pet(name)\n}\n")),(0,s.kt)("h2",{id:"nested-interfaces"},"Nested Interfaces"),(0,s.kt)("p",null,"Interfaces can implement other interfaces."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface Foo {\n    val foo: String\n}\n\ninterface Bar : Foo {\n    val bar: String\n}\n\nclass Baz(override val foo: String, override val bar: String) : Bar\n")),(0,s.kt)("p",null,"Code above generates following schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Foo {\n  foo: String!\n}\n\ninterface Bar implements Foo {\n  bar: String!\n  foo: String!\n}\n\ntype Baz implements Bar & Foo {\n  bar: String!\n  foo: String!\n}\n")))}h.isMDXComponent=!0}}]);