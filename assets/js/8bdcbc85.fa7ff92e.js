"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5581],{62194:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=(a(95657),["components"]),o={id:"maven-plugin-goals",title:"Maven Plugin Goals",sidebar_label:"Goals"},p=void 0,d={unversionedId:"plugins/maven-plugin-goals",id:"version-5.x.x/plugins/maven-plugin-goals",title:"Maven Plugin Goals",description:"GraphQL Kotlin Maven Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL",source:"@site/versioned_docs/version-5.x.x/plugins/maven-plugin-goals.md",sourceDirName:"plugins",slug:"/plugins/maven-plugin-goals",permalink:"/graphql-kotlin/docs/5.x.x/plugins/maven-plugin-goals",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/plugins/maven-plugin-goals.md",tags:[],version:"5.x.x",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"maven-plugin-goals",title:"Maven Plugin Goals",sidebar_label:"Goals"},sidebar:"version-5.x.x/docs",previous:{title:"Usage",permalink:"/graphql-kotlin/docs/5.x.x/plugins/gradle-plugin-usage"},next:{title:"Usage",permalink:"/graphql-kotlin/docs/5.x.x/plugins/maven-plugin-usage"}},s={},u=[{value:"Goals",id:"goals",level:2},{value:"download-sdl",id:"download-sdl",level:3},{value:"generate-client",id:"generate-client",level:3},{value:"generate-sdl",id:"generate-sdl",level:3},{value:"generate-test-client",id:"generate-test-client",level:3},{value:"introspect-schema",id:"introspect-schema",level:3}],m={toc:u},k="wrapper";function c(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GraphQL Kotlin Maven Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL\nschema directly from your source code."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This plugin is dependent on Kotlin compiler plugin as it generates Kotlin source code that needs to be compiled.")),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("p",null,"You can find detailed information about ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-maven-plugin")," and all its goals by running ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn help:describe -Dplugin=com.expediagroup:graphql-kotlin-maven-plugin -Ddetail"),"."),(0,r.kt)("h3",{id:"download-sdl"},"download-sdl"),(0,r.kt)("p",null,"GraphQL endpoints are often public and as such many servers might disable introspection queries in production environment.\nSince GraphQL schema is needed to generate type safe clients, as alternative GraphQL servers might expose private\nendpoints (e.g. accessible only from within network, etc) that could be used to download schema in Schema Definition\nLanguage (SDL) directly. This Mojo attempts to download schema from the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.endpoint"),", validates the\nresult whether it is a valid schema and saves it locally in a specified target file (defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under\nbuild directory). In general, this goal provides limited functionality by itself and instead should be used to generate\ninput for the subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"generate-client")," goal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"generate-sources"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Target GraphQL server SDL endpoint that will be used to download schema.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.endpoint"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"headers")),(0,r.kt)("td",{parentName:"tr",align:null},"Map<String, Any>"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on a SDL request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeoutConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default values are:"),(0,r.kt)("br",null),"connect timeout = 5000",(0,r.kt)("br",null),"read timeout = 15000.",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Target schema file.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameter Details")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<timeoutConfiguration>\n  \x3c!-- timeout values in milliseconds --\x3e\n  <connect>1000</connect>\n  <read>30000</read>\n</timeoutConfiguration>\n")),(0,r.kt)("h3",{id:"generate-client"},"generate-client"),(0,r.kt)("p",null,"Generate GraphQL client code based on the provided GraphQL schema and target queries."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"generate-sources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Requires Maven Project")),(0,r.kt)("li",{parentName:"ul"},"Generated classes are automatically added to the list of compiled sources.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.allowDeprecatedFields"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customScalars")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List<CustomScalar>")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"outputDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/generated-sources/graphql"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packageName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.packageName"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,r.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"src/main/resources"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List<File>")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify ",(0,r.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serializer")),(0,r.kt)("td",{parentName:"tr",align:null},"GraphQLSerializer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useOptionalInputWrapper")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean opt-in flag to wrap nullable arguments in ",(0,r.kt)("inlineCode",{parentName:"td"},"OptionalInput")," that distinguish between ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," and undefined/omitted value.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.useOptionalInputWrapper"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameter Details")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"customScalars")," - List of custom GraphQL scalars. Objects contain target GraphQL scalar name, corresponding Java type\nand converter that should be used to serialize/deserialize values."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<customScalars>\n    <customScalar>\n        \x3c!-- custom scalar UUID type --\x3e\n        <scalar>UUID</scalar>\n        \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n        <type>java.util.UUID</type>\n        \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n          used to convert to/from raw JSON and scalar type --\x3e\n        <converter>com.example.UUIDScalarConverter</converter>\n    </customScalar>\n</customScalars>\n")))),(0,r.kt)("h3",{id:"generate-sdl"},"generate-sdl"),(0,r.kt)("p",null,"Generates GraphQL schema in SDL format from your source code using reflections. Utilizes ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"\nto generate the schema from classes implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",(0,r.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription")," interfaces.\nIn order to limit the amount of packages to scan, this mojo requires users to provide a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," that can contain\nGraphQL types."),(0,r.kt)("p",null,"This MOJO utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism to dynamically load available ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/plugins/hooks-provider"},"Schema Generator Hooks Provider")," for additional details on how to create custom hooks service\nprovider. Configuration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"process-classes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Requires Maven Project"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packages")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"List of supported packages that can be scanned to generate SDL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))))),(0,r.kt)("h3",{id:"generate-test-client"},"generate-test-client"),(0,r.kt)("p",null,"Generate GraphQL test client code based on the provided GraphQL schema and target queries."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"generate-test-sources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Requires Maven Project")),(0,r.kt)("li",{parentName:"ul"},"Generated classes are automatically added to the list of test compiled sources.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.allowDeprecatedFields"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customScalars")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List<CustomScalar>")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"outputDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/generated-test-sources/graphql"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packageName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.packageName"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,r.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"src/test/resources"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List<File>")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify ",(0,r.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serializer")),(0,r.kt)("td",{parentName:"tr",align:null},"GraphQLSerializer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useOptionalInputWrapper")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean opt-in flag to wrap nullable arguments in ",(0,r.kt)("inlineCode",{parentName:"td"},"OptionalInput")," that distinguish between ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," and undefined/omitted value.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.useOptionalInputWrapper"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameter Details")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"customScalars")," - List of custom GraphQL scalars. Objects contain target GraphQL scalar name, corresponding Java type\nand converter that should be used to serialize/deserialize values.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n<customScalars>\n  <customScalar>\n      \x3c!-- custom scalar UUID type --\x3e\n      <scalar>UUID</scalar>\n      \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n      <type>java.util.UUID</type>\n      \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n        used to convert to/from raw JSON and scalar type --\x3e\n      <converter>com.example.UUIDScalarConverter</converter>\n  </customScalar>\n</customScalars>\n\n")),(0,r.kt)("h3",{id:"introspect-schema"},"introspect-schema"),(0,r.kt)("p",null,"Executes GraphQL introspection query against specified ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.endpoint")," and saves the result locally to a target file\n(defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory). In general, this goal provides limited functionality by itself and\ninstead should be used to generate input for the subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"generate-client")," goal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"generate-sources"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Target GraphQL server endpoint that will be used to execute introspection queries.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.endpoint"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"headers")),(0,r.kt)("td",{parentName:"tr",align:null},"Map<String, Any>"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on an introspection query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeoutConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default values are:"),(0,r.kt)("br",null),"connect timeout = 5000",(0,r.kt)("br",null),"read timeout = 15000.",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Target schema file.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameter Details")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<timeoutConfiguration>\n  \x3c!-- timeout values in milliseconds --\x3e\n  <connect>1000</connect>\n  <read>30000</read>\n</timeoutConfiguration>\n")))}c.isMDXComponent=!0}}]);