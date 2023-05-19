"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6304],{72638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var i=t(87462),a=t(63366),s=(t(67294),t(3905)),o=(t(95657),["components"]),r={id:"excluding-fields",title:"Excluding Fields"},l=void 0,c={unversionedId:"schema-generator/customizing-schemas/excluding-fields",id:"version-6.x.x/schema-generator/customizing-schemas/excluding-fields",title:"Excluding Fields",description:"There are two ways to ensure the GraphQL schema generation omits fields when using Kotlin reflection:",source:"@site/versioned_docs/version-6.x.x/schema-generator/customizing-schemas/excluding-fields.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/excluding-fields",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/excluding-fields",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/customizing-schemas/excluding-fields.md",tags:[],version:"6.x.x",lastUpdatedBy:"Maxim Ignatiev",lastUpdatedAt:1684514798,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"excluding-fields",title:"Excluding Fields"},sidebar:"docs",previous:{title:"Documenting Schema",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/documenting-schema"},next:{title:"Renaming Fields",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/renaming-fields"}},d={},m=[],u={toc:m},h="wrapper";function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)(h,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"There are two ways to ensure the GraphQL schema generation omits fields when using Kotlin reflection:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The first is by marking the field as non-",(0,s.kt)("inlineCode",{parentName:"li"},"public")," scope (",(0,s.kt)("inlineCode",{parentName:"li"},"private"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"protected"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"internal"),")"),(0,s.kt)("li",{parentName:"ul"},"The second method is by annotating the field with ",(0,s.kt)("inlineCode",{parentName:"li"},"@GraphQLIgnore"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SimpleQuery {\n  @GraphQLIgnore\n  fun notPartOfSchema() = "ignore me!"\n\n  private fun privateFunctionsAreNotVisible() = "ignored private function"\n\n  fun doSomething(value: Int): Boolean = true\n}\n')),(0,s.kt)("p",null,"The above query would produce the following GraphQL schema:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  doSomething(value: Int!): Boolean!\n}\n")),(0,s.kt)("p",null,"Note that the public method ",(0,s.kt)("inlineCode",{parentName:"p"},"notPartOfSchema")," is not included in the schema."))}p.isMDXComponent=!0}}]);