"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3609],{77565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=(a(95657),["components"]),s={id:"nullability",title:"Nullability",original_id:"nullability"},o=void 0,u={unversionedId:"schema-generator/writing-schemas/nullability",id:"version-3.x.x/schema-generator/writing-schemas/nullability",title:"Nullability",description:"Both GraphQL and Kotlin have a concept of nullable as a marked typed. As a result we can automatically generate null",source:"@site/versioned_docs/version-3.x.x/schema-generator/writing-schemas/nullability.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/nullability",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/nullability",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/writing-schemas/nullability.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1684875677,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{id:"nullability",title:"Nullability",original_id:"nullability"},sidebar:"version-3.x.x/docs",previous:{title:"Getting Started with the Schema Generator",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/schema-generator-getting-started"},next:{title:"Arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/arguments"}},c={},m=[],d={toc:m},p="wrapper";function g(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Both GraphQL and Kotlin have a concept of ",(0,r.kt)("inlineCode",{parentName:"p"},"nullable")," as a marked typed. As a result we can automatically generate null\nsafe schemas from Kotlin code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass SimpleQuery {\n\n    fun generateNullableNumber(): Int? {\n        val num = Random().nextInt(100)\n        return if (num < 50) num else null\n    }\n\n    fun generateNumber(): Int = Random().nextInt(100)\n}\n\n")),(0,r.kt)("p",null,"The above Kotlin code would produce the following GraphQL schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  generateNullableNumber: Int\n\n  generateNumber: Int!\n}\n\n")))}g.isMDXComponent=!0}}]);