"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2578],{37460:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var o=n(87462),t=n(63366),i=(n(67294),n(3905)),r=(n(95657),["components"]),s={id:"maven-plugin-usage-sdl",title:"Maven Plugin SDL Usage",sidebar_label:"Generating SDL"},l=void 0,p={unversionedId:"plugins/maven-plugin-usage-sdl",id:"plugins/maven-plugin-usage-sdl",title:"Maven Plugin SDL Usage",description:"GraphQL Kotlin follows a code-first approach where schema is auto generated from your source code at runtime. GraphQL Kotlin",source:"@site/docs/plugins/maven-plugin-usage-sdl.md",sourceDirName:"plugins",slug:"/plugins/maven-plugin-usage-sdl",permalink:"/graphql-kotlin/docs/7.x.x/plugins/maven-plugin-usage-sdl",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/plugins/maven-plugin-usage-sdl.md",tags:[],version:"current",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"maven-plugin-usage-sdl",title:"Maven Plugin SDL Usage",sidebar_label:"Generating SDL"},sidebar:"docs",previous:{title:"Generating Client",permalink:"/graphql-kotlin/docs/7.x.x/plugins/maven-plugin-usage-client"},next:{title:"GraalVM Native Image",permalink:"/graphql-kotlin/docs/7.x.x/plugins/maven-plugin-usage-graalvm"}},d={},c=[{value:"Generating SDL",id:"generating-sdl",level:2},{value:"Using Custom Hooks Provider",id:"using-custom-hooks-provider",level:2}],u={toc:c},g="wrapper";function m(e){var a=e.components,n=(0,t.Z)(e,r);return(0,i.kt)(g,(0,o.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"GraphQL Kotlin follows a code-first approach where schema is auto generated from your source code at runtime. GraphQL Kotlin\nplugins can be used to generate schema as a build time artifact. This allows you to seamlessly integrate with various\nGraphQL tools that may require a schema artifact as an input (e.g. to perform backwards compatibility checks, etc)."),(0,i.kt)("h2",{id:"generating-sdl"},"Generating SDL"),(0,i.kt)("p",null,"GraphQL schema can be generated directly from your source code using reflections. ",(0,i.kt)("inlineCode",{parentName:"p"},"generate-sdl")," mojo will scan your\nclasspath looking for classes implementing ",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription")," marker interfaces and then generates the\ncorresponding GraphQL schema using ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and default ",(0,i.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". In order to\nlimit the amount of packages to scan, this mojo requires users to provide a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"packages")," that can contain GraphQL\ntypes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-sdl</goal>\n            </goals>\n            <configuration>\n                <packages>\n                    <package>com.example</package>\n                </packages>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,i.kt)("h2",{id:"using-custom-hooks-provider"},"Using Custom Hooks Provider"),(0,i.kt)("p",null,"Plugin will default to use ",(0,i.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks")," to generate target GraphQL schema. If your project uses custom hooks\nor needs to generate the federated GraphQL schema, you will need to provide an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider"),"\nservice provider that will be used to create an instance of your custom hooks."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"generate-sdl")," mojo utilizes ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism to dynamically load available ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/plugins/hooks-provider"},"Schema Generator Hooks Provider")," for additional details on how to create custom hooks service provider.\nConfiguration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact to generate federated\nGraphQL schema."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-sdl</goal>\n            </goals>\n            <configuration>\n                <packages>\n                    <package>com.example</package>\n                </packages>\n            </configuration>\n        </execution>\n    </executions>\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-federated-hooks-provider</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n</plugin>\n")))}m.isMDXComponent=!0}}]);