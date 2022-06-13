"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3141],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(7462),r=t(7294),l=t(2389),i=t(3725),o=t(6010);const p="tabItem_LplD";function s(e){var n,t,l,s=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,i.lx)(f,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(n=null!=c?c:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=h[0])?void 0:l.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),y=b.tabGroupChoices,x=b.setTabGroupChoices,N=(0,r.useState)(k),w=N[0],q=N[1],C=[],Q=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var G=y[m];null!=G&&G!==w&&f.some((function(e){return e.value===G}))&&q(G)}var O=function(e){var n=e.currentTarget,t=C.indexOf(n),a=f[t].value;a!==w&&(Q(n),q(a),null!=m&&x(m,a))},L=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;t=C[r]||C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},g)},f.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return C.push(e)},onKeyDown:L,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function u(e){var n=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=t(9877),o=t(8215),p=["components"],s={id:"client-overview",title:"Client Overview"},u=void 0,c={unversionedId:"client/client-overview",id:"version-5.x.x/client/client-overview",title:"Client Overview",description:"GraphQL Kotlin provides a set of lightweight type-safe GraphQL HTTP clients. The library provides Ktor HTTP client",source:"@site/versioned_docs/version-5.x.x/client/client-overview.mdx",sourceDirName:"client",slug:"/client/client-overview",permalink:"/graphql-kotlin/docs/5.x.x/client/client-overview",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/client/client-overview.mdx",tags:[],version:"5.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1655161182,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"client-overview",title:"Client Overview"},sidebar:"version-5.x.x/docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/5.x.x/server/spring-server/spring-subscriptions"},next:{title:"Client Features",permalink:"/graphql-kotlin/docs/5.x.x/client/client-features"}},d={},m=[{value:"Project Configuration",id:"project-configuration",level:2},{value:"Build Configuration",id:"build-configuration",level:3},{value:"Generating GraphQL Operations",id:"generating-graphql-operations",level:3},{value:"Executing Operations",id:"executing-operations",level:3}],g={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin provides a set of lightweight type-safe GraphQL HTTP clients. The library provides ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/index.html"},"Ktor HTTP client"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-webclient"},"Spring WebClient"),"\nbased reference implementations as well as allows for custom implementations using other engines, see ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/client/client-customization"},"client customization"),"\ndocumentation for additional details. Type-safe data models are generated at build time by the GraphQL Kotlin ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/plugins/gradle-plugin-tasks"},"Gradle"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/plugins/maven-plugin-goals"},"Maven")," plugins."),(0,l.kt)("p",null,"Client Features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Supports query and mutation operations"),(0,l.kt)("li",{parentName:"ul"},"Supports batch operations"),(0,l.kt)("li",{parentName:"ul"},"Automatic generation of type-safe Kotlin models supporting ",(0,l.kt)("inlineCode",{parentName:"li"},"kotlinx.serialization")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Jackson")," formats"),(0,l.kt)("li",{parentName:"ul"},"Custom scalar support - defaults to String but can be configured to deserialize to specific types"),(0,l.kt)("li",{parentName:"ul"},"Supports default enum values to gracefully handle new/unknown server values"),(0,l.kt)("li",{parentName:"ul"},"Native support for coroutines"),(0,l.kt)("li",{parentName:"ul"},"Easily configurable Ktor and Spring WebClient based HTTP Clients"),(0,l.kt)("li",{parentName:"ul"},"Documentation generated from the underlying GraphQL schema")),(0,l.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,l.kt)("p",null,"GraphQL Kotlin provides both Gradle and Maven plugins to automatically generate your client code at build time. In order\nto auto-generate the client code, plugins require target GraphQL schema and a list of query files to process."),(0,l.kt)("p",null,"GraphQL schema can be provided as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"result of introspection query (default)"),(0,l.kt)("li",{parentName:"ul"},"downloaded from an SDL endpoint"),(0,l.kt)("li",{parentName:"ul"},"local file")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://expediagroup.github.io/graphql-kotlin/docs/plugins/gradle-plugin"},"Gradle")," and ",(0,l.kt)("a",{parentName:"p",href:"https://expediagroup.github.io/graphql-kotlin/docs/plugins/maven-plugin"},"Maven"),"\nplugin documentation for additional details."),(0,l.kt)("p",null,"GraphQL Kotlin plugins generated classes are simple POJOs that implement ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClientRequest")," and optionally accept variables\n(only if underlying operation uses variables) as a constructor parameter. Generated classes can then be passed directly\nto a GraphQL client to execute either a single or a batch request."),(0,l.kt)("p",null,"Example below configures the project to use introspection query to obtain the schema and uses Spring WebClient based HTTP client."),(0,l.kt)("h3",{id:"build-configuration"},"Build Configuration"),(0,l.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("p",null,"Basic ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," Gradle configuration that executes introspection query against specified endpoint to obtain target\nschema and then generate the clients under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated")," package name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    id("com.expediagroup.graphql") version $latestGraphQLKotlinVersion\n}\n\ndependencies {\n  implementation("com.expediagroup:graphql-kotlin-spring-client:$latestGraphQLKotlinVersion")\n}\n\ngraphql {\n    client {\n        endpoint = "http://localhost:8080/graphql"\n        packageName = "com.example.generated"\n    }\n}\n'))),(0,l.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("p",null,"Basic Maven ",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml")," configuration that executes introspection query against specified endpoint to obtain target\nschema and then generate the clients under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated")," package name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>graphql-kotlin-maven-client-example</artifactId>\n    <version>1.0.0-SNAPSHOT</version>\n\n    <properties>\n        <graphql-kotlin.version>$latestGraphQLKotlinVersion</graphql-kotlin.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <id>generate-graphql-client</id>\n                        <goals>\n                            <goal>introspectSchema</goal>\n                            <goal>generateClient</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <schemaFile>${project.build.directory}/schema.graphql</schemaFile>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/client"},"graphql-kotlin-client-example")," project for complete\nworking examples of Gradle and Maven based projects."),(0,l.kt)("h3",{id:"generating-graphql-operations"},"Generating GraphQL Operations"),(0,l.kt)("p",null,"By default, GraphQL Kotlin build plugins will attempt to generate GraphQL operations from all ",(0,l.kt)("inlineCode",{parentName:"p"},"*.graphql")," files located under\n",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/resources"),". Operations are validated against the target GraphQL schema, which can be manually provided, retrieved by\nthe plugins through introspection (as configured in examples above) or downloaded directly from a custom SDL endpoint.\nSee our documentation for more details on supported ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/plugins/gradle-plugin-tasks"},"Gradle tasks"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/plugins/maven-plugin-goals"},"Maven Mojos"),"."),(0,l.kt)("p",null,"When creating your GraphQL operations make sure to always specify an operation name and name the files accordingly. Each\none of your GraphQL operation files will generate a corresponding Kotlin file with a class matching your operation\nname. Input objects, enums and custom scalars definitions will be shared across different operations. All other objects\nwill be generated operation specific package name. For example, given ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.graphql")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery")," as\nthe operation name, GraphQL Kotlin plugins will generate a corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.kt")," file with a ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery"),"\nclass under the configured package."),(0,l.kt)("p",null,"For example, given a simple schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  helloWorld: String\n}\n")),(0,l.kt)("p",null,"And a corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.graphql")," query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query HelloWorldQuery {\n  helloWorld\n}\n")),(0,l.kt)("p",null,"Plugins will generate following client code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'package com.example.generated\n\nimport com.expediagroup.graphql.client.Generated\nimport com.expediagroup.graphql.client.types.GraphQLClientRequest\nimport kotlin.String\nimport kotlin.reflect.KClass\n\nconst val HELLO_WORLD_QUERY: String = "query HelloWorldQuery {\\n    helloWorld\\n}"\n\n@Generated\nclass HelloWorldQuery: GraphQLClientRequest<HelloWorldQuery.Result> {\n    override val query: String = HELLO_WORLD_QUERY\n\n    override val operationName: String = "HelloWorldQuery"\n\n    override fun responseType(): KClass<HelloWorldQuery.Result> = HelloWorldQuery.Result::class\n\n    @Generated\n    data class Result(\n        val helloWorld: String\n    }\n}\n')),(0,l.kt)("p",null,"Generated classes are simple POJOs that implement ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClientRequest")," interface and represent a GraphQL request."),(0,l.kt)("h3",{id:"executing-operations"},"Executing Operations"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," uses the Spring WebClient to execute the underlying operations and allows you to customize it by providing\nan instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"WebClient.Builder"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," requires target URL to be specified and defaults to use ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson"),"\nbased GraphQL serializer. Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-client"},"Spring documentation"),"\nfor additional details."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'package com.example.client\n\nimport com.expediagroup.graphql.client.spring.GraphQLWebClient\nimport com.expediagroup.graphql.generated.HelloWorldQuery\nimport kotlinx.coroutines.runBlocking\n\nfun main() {\n    val client = GraphQLWebClient(url = "http://localhost:8080/graphql")\n    runBlocking {\n        val helloWorldQuery = HelloWorldQuery()\n        val result = client.execute(helloWorldQuery)\n        println("hello world query result: ${result.data?.helloWorld}")\n    }\n}\n')))}h.isMDXComponent=!0}}]);