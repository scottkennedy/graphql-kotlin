"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"arguments",title:"Arguments"},s=void 0,u={unversionedId:"schema-generator/writing-schemas/arguments",id:"version-6.x.x/schema-generator/writing-schemas/arguments",title:"Arguments",description:"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields.",source:"@site/versioned_docs/version-6.x.x/schema-generator/writing-schemas/arguments.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/arguments",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/writing-schemas/arguments",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/writing-schemas/arguments.md",tags:[],version:"6.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1695080947,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{id:"arguments",title:"Arguments"},sidebar:"docs",previous:{title:"Nullability",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/writing-schemas/nullability"},next:{title:"Scalars",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/writing-schemas/scalars"}},p={},c=[{value:"Input Types",id:"input-types",level:2},{value:"Optional fields",id:"optional-fields",level:2},{value:"Default values",id:"default-values",level:2}],m={toc:c},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Query {\n    fun doSomething(value: Int): Boolean = true\n}\n")),(0,i.kt)("p",null,"The above Kotlin code will generate following GraphQL schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  doSomething(value: Int!): Boolean!\n}\n")),(0,i.kt)("p",null,"This behavior is true for all arguments except for the special class ",(0,i.kt)("a",{parentName:"p",href:"../execution/data-fetching-environment"},"DataFetchingEnvironment")),(0,i.kt)("h2",{id:"input-types"},"Input Types"),(0,i.kt)("p",null,"Query, Mutation, and Subscription function arguments are automatically converted to GraphQL input fields. GraphQL makes a\ndistinction between input and output types and requires unique names for all the types. Since we can use the same\nobjects for input and output in our Kotlin functions, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," will automatically append\nan ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," suffix to the GraphQL name of input objects."),(0,i.kt)("p",null,"For example, the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class WidgetMutation {\n    fun processWidget(widget: Widget): Widget {\n        if (widget.value == null) {\n            widget.value = 42\n        }\n        return widget\n    }\n}\n\ndata class Widget(var value: Int? = null) {\n    fun multiplyValueBy(multiplier: Int): Int? = value?.times(multiplier)\n}\n")),(0,i.kt)("p",null,"Will generate the following schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  processWidget(widget: WidgetInput!): Widget!\n}\n\ntype Widget {\n  value: Int\n  multiplyValueBy(multiplier: Int!): Int\n}\n\ninput WidgetInput {\n  value: Int\n}\n")),(0,i.kt)("p",null,"Note that only fields are exposed in the input objects. Functions will only be available on the GraphQL output types."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"All input object fields have to be exposed through a public primary constructor. This primary constructor is used to instantiate\nthe input objects at runtime when resolving the queries.")),(0,i.kt)("p",null,"If you know a type will only be used for input types you can call your class something like ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomTypeInput"),". The library will not\nappend ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," if the class name already ends with ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," but that means you can not use this type as output because\nthe schema would have two types with the same name and that would be invalid."),(0,i.kt)("p",null,"If you would like to restrict an Kotlin class to only being used as input or output, see how to use ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/restricting-input-output"},"GraphQLValidObjectLocations")),(0,i.kt)("h2",{id:"optional-fields"},"Optional fields"),(0,i.kt)("p",null,"Kotlin requires variables/values to be initialized upon their declaration either from the user input OR by providing\ndefaults (even if they are marked as nullable)."),(0,i.kt)("p",null,"Therefore, in order for a GraphQL input field to be optional, ",(0,i.kt)("strong",{parentName:"p"},"it needs to be nullable and must have a default value"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun doSomethingWithOptionalInput(requiredValue: Int, optionalValue: Int? = null): String {\n    return "requiredValue=$requiredValue, optionalValue=$optionalValue"\n}\n')),(0,i.kt)("h2",{id:"default-values"},"Default values"),(0,i.kt)("p",null,"Default Kotlin values are supported, however the default value information is not available to the schema due to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/53"},"reflection limitations of Kotlin"),".\nThe parameters must also be defined as optional (nullable) in the schema, as the only way a default value will be used is when the client does not specify any value in the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun print(message: String? = "hello"): String? = message\n')),(0,i.kt)("p",null,"The following operations will return the message in the comments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'query PrintMessages {\n    first: print(message = "foo") # foo\n    second: print(message = null) # null\n    third: print # hello\n}\n')),(0,i.kt)("p",null,"If you need logic to determine when a client passed in a value vs when the default value was used (aka the argument was missing in the request), see ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/schema-generator/execution/optional-undefined-arguments"},"optional undefined arguments"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Default values with custom scalars are not supported, regardless if the type is nullable or non-nullable, as they use kotlin value classes,\n",(0,i.kt)("inlineCode",{parentName:"p"},"callBy")," does not support invoking constructors that have value classes as arguments."),(0,i.kt)("p",{parentName:"admonition"},"See: ",(0,i.kt)("a",{parentName:"p",href:"https://youtrack.jetbrains.com/issue/KT-27598"},"https://youtrack.jetbrains.com/issue/KT-27598")),(0,i.kt)("p",{parentName:"admonition"},"which was partially fixed in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JetBrains/kotlin/pull/4746"},"https://github.com/JetBrains/kotlin/pull/4746")),(0,i.kt)("p",{parentName:"admonition"},"This will be fixed once ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," updates to kotlin 1.7")))}h.isMDXComponent=!0}}]);