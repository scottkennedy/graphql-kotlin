"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7906],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),s=["components"],o={id:"interfaces",title:"Interfaces"},l=void 0,c={unversionedId:"schema-generator/writing-schemas/interfaces",id:"version-4.x.x/schema-generator/writing-schemas/interfaces",title:"Interfaces",description:"Any Kotlin interfaces will be mapped to a GraphQL interface. Due to the GraphQL distinction between interface and a union type, Kotlin interfaces need to specify at least",source:"@site/versioned_docs/version-4.x.x/schema-generator/writing-schemas/interfaces.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/interfaces",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/interfaces",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/writing-schemas/interfaces.md",tags:[],version:"4.x.x",lastUpdatedBy:"Adrian Witaszak",lastUpdatedAt:1696885167,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"interfaces",title:"Interfaces"},sidebar:"version-4.x.x/docs",previous:{title:"Lists",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/lists"},next:{title:"Unions",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/unions"}},p={},m=[{value:"Abstract and Sealed Classes",id:"abstract-and-sealed-classes",level:2}],d={toc:m},u="wrapper";function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Any Kotlin interfaces will be mapped to a GraphQL interface. Due to the GraphQL distinction between interface and a ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/unions"},"union type"),", Kotlin interfaces need to specify at least\none common field (property or a function)."),(0,i.kt)("p",null,"Abstract and sealed classes will also be converted to a GraphQL interface."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"http://spec.graphql.org/June2018/#sec-Interfaces"},"The GraphQL spec")," does not allow interfaces to be used as input.\nThis means that while it is valid Kotlin code to have an interface as an argument, upon schema generation, an exception will be thrown.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'interface Animal {\n    val type: AnimalType\n    fun sound(): String\n}\n\nenum class AnimalType {\n    CAT,\n    DOG\n}\n\nclass Dog : Animal {\n    override val type = AnimalType.DOG\n\n    override fun sound() = "bark"\n\n    fun barkAtEveryone(): String = "bark at everyone"\n}\n\nclass Cat : Animal {\n    override val type = AnimalType.CAT\n\n    override fun sound() = "meow"\n\n    fun ignoreEveryone(): String = "ignore everyone"\n}\n\nclass PolymorphicQuery {\n\n    fun animal(type: AnimalType): Animal? = when (type) {\n        AnimalType.CAT -> Cat()\n        AnimalType.DOG -> Dog()\n        else -> null\n    }\n}\n')),(0,i.kt)("p",null,"The above code will produce the following GraphQL schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Animal {\n  type: AnimalType!\n  sound: String!\n}\n\nenum AnimalType {\n  CAT\n  DOG\n}\n\ntype Cat implements Animal {\n  type: AnimalType!\n  ignoreEveryone: String!\n  sound: String!\n}\n\ntype Dog implements Animal {\n  type: AnimalType!\n  barkAtEveryone: String!\n  sound: String!\n}\n\ntype TopLevelQuery {\n  animal(type: AnimalType!): Animal\n}\n")),(0,i.kt)("h2",{id:"abstract-and-sealed-classes"},"Abstract and Sealed Classes"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/classes.html#abstract-classes"},"Abstract")," and ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/sealed-classes.html"},"sealed")," classes can also be used for GraphQL interface types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"abstract class Shape(val area: Double)\nclass Circle(radius: Double) : Shape(PI * radius * radius)\nclass Square(sideLength: Double) : Shape(sideLength * sideLength)\n\nsealed class Pet(val name: String) {\n    class Dog(name: String, val goodBoysReceived: Int) : Pet(name)\n    class Cat(name: String, val livesRemaining: Int) : Pet(name)\n}\n")))}f.isMDXComponent=!0}}]);