"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3925],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},42188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"maven-plugin-goals",title:"Maven Plugin Goals",sidebar_label:"Goals Overview"},p=void 0,s={unversionedId:"plugins/maven-plugin-goals",id:"plugins/maven-plugin-goals",title:"Maven Plugin Goals",description:"GraphQL Kotlin Maven Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL",source:"@site/docs/plugins/maven-plugin-goals.md",sourceDirName:"plugins",slug:"/plugins/maven-plugin-goals",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-goals",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/plugins/maven-plugin-goals.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1695080947,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{id:"maven-plugin-goals",title:"Maven Plugin Goals",sidebar_label:"Goals Overview"},sidebar:"docs",previous:{title:"GraalVM Native Image",permalink:"/graphql-kotlin/docs/plugins/gradle-plugin-usage-graalvm"},next:{title:"Generating Client",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-usage-client"}},d={},m=[{value:"Goals",id:"goals",level:2},{value:"download-sdl",id:"download-sdl",level:3},{value:"generate-client",id:"generate-client",level:3},{value:"generate-graalvm-metadata",id:"generate-graalvm-metadata",level:3},{value:"generate-sdl",id:"generate-sdl",level:3},{value:"generate-test-client",id:"generate-test-client",level:3},{value:"introspect-schema",id:"introspect-schema",level:3}],u={toc:m},c="wrapper";function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin Maven Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL\nschema directly from your source code."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This plugin is dependent on Kotlin compiler plugin as it generates Kotlin source code that needs to be compiled.")),(0,l.kt)("h2",{id:"goals"},"Goals"),(0,l.kt)("p",null,"You can find detailed information about ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-maven-plugin")," and all its goals by running ",(0,l.kt)("inlineCode",{parentName:"p"},"mvn help:describe -Dplugin=com.expediagroup:graphql-kotlin-maven-plugin -Ddetail"),"."),(0,l.kt)("h3",{id:"download-sdl"},"download-sdl"),(0,l.kt)("p",null,"GraphQL endpoints are often public and as such many servers might disable introspection queries in production environment.\nSince GraphQL schema is needed to generate type safe clients, as alternative GraphQL servers might expose private\nendpoints (e.g. accessible only from within network, etc) that could be used to download schema in Schema Definition\nLanguage (SDL) directly. This Mojo attempts to download schema from the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql.endpoint"),", validates the\nresult whether it is a valid schema and saves it locally in a specified target file (defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under\nbuild directory). In general, this goal provides limited functionality by itself and instead should be used to generate\ninput for the subsequent ",(0,l.kt)("inlineCode",{parentName:"p"},"generate-client")," goal."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"generate-sources"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL server SDL endpoint that will be used to download schema.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.endpoint"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},"Map<String, Any>"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on a SDL request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default values are:"),(0,l.kt)("br",null),"connect timeout = 5000",(0,l.kt)("br",null),"read timeout = 15000.",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target schema file.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameter Details")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<timeoutConfiguration>\n  \x3c!-- timeout values in milliseconds --\x3e\n  <connect>1000</connect>\n  <read>30000</read>\n</timeoutConfiguration>\n")),(0,l.kt)("h3",{id:"generate-client"},"generate-client"),(0,l.kt)("p",null,"Generate GraphQL client code based on the provided GraphQL schema and target queries."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"generate-sources")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Requires Maven Project")),(0,l.kt)("li",{parentName:"ul"},"Generated classes are automatically added to the list of compiled sources.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.allowDeprecatedFields"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"customScalars")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<CustomScalar>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"outputDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/generated-sources/graphql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packageName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.packageName"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"parserOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQLParserOptions"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Configures the settings used when parsing GraphQL queries and schema definition language documents.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"src/main/resources"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<File>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serializer")),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQLSerializer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"useOptionalInputWrapper")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean opt-in flag to wrap nullable arguments in ",(0,l.kt)("inlineCode",{parentName:"td"},"OptionalInput")," that distinguish between ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," and undefined/omitted value.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.useOptionalInputWrapper"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameter Details")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"customScalars")," - List of custom GraphQL scalars. Objects contain target GraphQL scalar name, corresponding Java type\nand converter that should be used to serialize/deserialize values."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<customScalars>\n    <customScalar>\n        \x3c!-- custom scalar UUID type --\x3e\n        <scalar>UUID</scalar>\n        \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n        <type>java.util.UUID</type>\n        \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n          used to convert to/from raw JSON and scalar type --\x3e\n        <converter>com.example.UUIDScalarConverter</converter>\n    </customScalar>\n</customScalars>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"parserOptions")," - Configure options for parsing GraphQL queries and schema definition language documents. Settings here override the defaults set by GraphQL Java."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"  <parserOptions>\n      \x3c!-- Modify the maximum number of tokens read to prevent processing extremely large queries --\x3e\n      <maxTokens>15000</maxTokens>\n      \x3c!-- Modify the maximum number of whitespace tokens read to prevent processing extremely large queries --\x3e\n      <maxWhitespaceTokens>200000</maxWhitespaceTokens>\n      \x3c!-- Memory usage is significantly reduced by not capturing ignored characters, especially in SDL parsing --\x3e\n      <captureIgnoredChars>false</captureIgnoredChars>\n      \x3c!-- Single-line comments do not have any semantic meaning in GraphQL source documents and can be ignored --\x3e\n      <captureLineComments>true</captureLineComments>\n      \x3c!-- Memory usage is reduced by not setting SourceLocations on AST nodes, especially in SDL parsing. --\x3e\n      <captureSourceLocation>true</captureSourceLocation>\n  </parserOptions>\n")))),(0,l.kt)("h3",{id:"generate-graalvm-metadata"},"generate-graalvm-metadata"),(0,l.kt)("p",null,"Generates ",(0,l.kt)("a",{parentName:"p",href:"https://www.graalvm.org/latest/reference-manual/native-image/metadata/"},"GraalVM Reachability Metadata")," for\n",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," servers. Based on the GraphQL schema it will generate ",(0,l.kt)("inlineCode",{parentName:"p"},"native-image.properties"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"reflect-config.json"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"resource-config.json")," metadata files under ",(0,l.kt)("inlineCode",{parentName:"p"},"target/classes/META-INF/native-image/<groupId>/<projectName>/graphql")),(0,l.kt)("p",null,"This task should be used in tandem with ",(0,l.kt)("a",{parentName:"p",href:"https://graalvm.github.io/native-build-tools/latest/maven-plugin.html"},"GraalVM Native Plugin"),"\nto simplify generation of GraalVM native ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," servers."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"process-classes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Requires Maven Project"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packages")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"List of supported packages that can be can contain GraphQL schema.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mainClassName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Application main class name.")))),(0,l.kt)("h3",{id:"generate-sdl"},"generate-sdl"),(0,l.kt)("p",null,"Generates GraphQL schema in SDL format from your source code using reflections. Utilizes ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"\nto generate the schema from classes implementing ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",(0,l.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Subscription")," interfaces.\nIn order to limit the amount of packages to scan, this mojo requires users to provide a list of ",(0,l.kt)("inlineCode",{parentName:"p"},"packages")," that can contain\nGraphQL types."),(0,l.kt)("p",null,"This MOJO utilizes ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism to dynamically load available ",(0,l.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/hooks-provider"},"Schema Generator Hooks Provider")," for additional details on how to create custom hooks service\nprovider. Configuration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"process-classes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Requires Maven Project"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packages")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"List of supported packages that can be scanned to generate SDL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))))),(0,l.kt)("h3",{id:"generate-test-client"},"generate-test-client"),(0,l.kt)("p",null,"Generate GraphQL test client code based on the provided GraphQL schema and target queries."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"generate-test-sources")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Requires Maven Project")),(0,l.kt)("li",{parentName:"ul"},"Generated classes are automatically added to the list of test compiled sources.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.allowDeprecatedFields"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"customScalars")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<CustomScalar>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"outputDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/generated-test-sources/graphql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packageName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.packageName"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"src/test/resources"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<File>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serializer")),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQLSerializer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"useOptionalInputWrapper")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean opt-in flag to wrap nullable arguments in ",(0,l.kt)("inlineCode",{parentName:"td"},"OptionalInput")," that distinguish between ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," and undefined/omitted value.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.useOptionalInputWrapper"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameter Details")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"customScalars")," - List of custom GraphQL scalars. Objects contain target GraphQL scalar name, corresponding Java type\nand converter that should be used to serialize/deserialize values.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\n<customScalars>\n  <customScalar>\n      \x3c!-- custom scalar UUID type --\x3e\n      <scalar>UUID</scalar>\n      \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n      <type>java.util.UUID</type>\n      \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n        used to convert to/from raw JSON and scalar type --\x3e\n      <converter>com.example.UUIDScalarConverter</converter>\n  </customScalar>\n</customScalars>\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"parserOptions")," - Configure options for parsing GraphQL queries and schema definition language documents. Settings here override the defaults set by GraphQL Java."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"  <parserOptions>\n      \x3c!-- Modify the maximum number of tokens read to prevent processing extremely large queries --\x3e\n      <maxTokens>15000</maxTokens>\n      \x3c!-- Modify the maximum number of whitespace tokens read to prevent processing extremely large queries --\x3e\n      <maxWhitespaceTokens>200000</maxWhitespaceTokens>\n      \x3c!-- Memory usage is significantly reduced by not capturing ignored characters, especially in SDL parsing --\x3e\n      <captureIgnoredChars>false</captureIgnoredChars>\n      \x3c!-- Single-line comments do not have any semantic meaning in GraphQL source documents and can be ignored --\x3e\n      <captureLineComments>true</captureLineComments>\n      \x3c!-- Memory usage is reduced by not setting SourceLocations on AST nodes, especially in SDL parsing. --\x3e\n      <captureSourceLocation>true</captureSourceLocation>\n  </parserOptions>\n")))),(0,l.kt)("h3",{id:"introspect-schema"},"introspect-schema"),(0,l.kt)("p",null,"Executes GraphQL introspection query against specified ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql.endpoint")," and saves the result locally to a target file\n(defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory). In general, this goal provides limited functionality by itself and\ninstead should be used to generate input for the subsequent ",(0,l.kt)("inlineCode",{parentName:"p"},"generate-client")," goal."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"generate-sources"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL server endpoint that will be used to execute introspection queries.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.endpoint"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},"Map<String, Any>"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on an introspection query.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default values are:"),(0,l.kt)("br",null),"connect timeout = 5000",(0,l.kt)("br",null),"read timeout = 15000.",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target schema file.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"streamResponse")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean property to indicate whether to use streamed (chunked) responses.",(0,l.kt)("br",null),"Default value is**: true.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameter Details")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<timeoutConfiguration>\n  \x3c!-- timeout values in milliseconds --\x3e\n  <connect>1000</connect>\n  <read>30000</read>\n</timeoutConfiguration>\n")))}k.isMDXComponent=!0}}]);