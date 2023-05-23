"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7670],{85162:(e,n,a)=>{a.d(n,{Z:()=>r});var i=a(67294),t=a(86010);const l={tabItem:"tabItem_Ymn6"};function r(e){var n=e.children,a=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",className:(0,t.Z)(l.tabItem,r),hidden:a},n)}},74866:(e,n,a)=>{a.d(n,{Z:()=>I});var i=a(87462),t=a(67294),l=a(86010),r=a(12466),o=a(76775),p=a(91980),s=a(67392),c=a(50012);function u(e){return function(e){var n,a;return null!=(n=null==(a=t.Children.map(e,(function(e){if(!e||(0,t.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:u(a);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,a=void 0!==n&&n,i=e.groupId,l=(0,o.k6)(),r=function(e){var n=e.queryString,a=void 0!==n&&n,i=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:a,groupId:i});return[(0,p._X)(r),(0,t.useCallback)((function(e){if(r){var n=new URLSearchParams(l.location.search);n.set(r,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[r,l])]}function h(e){var n,a,i,l,r=e.defaultValue,o=e.queryString,p=void 0!==o&&o,s=e.groupId,u=d(e),h=(0,t.useState)((function(){return function(e){var n,a=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var t=null!=(n=i.find((function(e){return e.default})))?n:i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:u})})),k=h[0],v=h[1],f=m({queryString:p,groupId:s}),x=f[0],b=f[1],I=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,c.Nk)(n),i=a[0],l=a[1],[i,(0,t.useCallback)((function(e){n&&l.set(e)}),[n,l])]),y=I[0],q=I[1],z=function(){var e=null!=x?x:y;return g({value:e,tabValues:u})?e:null}();return(0,t.useLayoutEffect)((function(){z&&v(z)}),[z]),{selectedValue:k,selectValue:(0,t.useCallback)((function(e){if(!g({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);v(e),b(e),q(e)}),[b,q,u]),tabValues:u}}var k=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){var n=e.className,a=e.block,o=e.selectedValue,p=e.selectValue,s=e.tabValues,c=[],u=(0,r.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,a=c.indexOf(n),i=s[a].value;i!==o&&(u(n),p(i))},g=function(e){var n,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var i,t=c.indexOf(e.currentTarget)+1;a=null!=(i=c[t])?i:c[0];break;case"ArrowLeft":var l,r=c.indexOf(e.currentTarget)-1;a=null!=(l=c[r])?l:c[c.length-1]}null==(n=a)||n.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},n)},s.map((function(e){var n=e.value,a=e.label,r=e.attributes;return t.createElement("li",(0,i.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:function(e){return c.push(e)},onKeyDown:g,onClick:d},r,{className:(0,l.Z)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":o===n})}),null!=a?a:n)})))}function x(e){var n=e.lazy,a=e.children,i=e.selectedValue,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var r=l.find((function(e){return e.props.value===i}));return r?(0,t.cloneElement)(r,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},l.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})})))}function b(e){var n=h(e);return t.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},t.createElement(f,(0,i.Z)({},e,n)),t.createElement(x,(0,i.Z)({},e,n)))}function I(e){var n=(0,k.Z)();return t.createElement(b,(0,i.Z)({key:String(n)},e))}},98472:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>g});var i=a(87462),t=a(63366),l=(a(67294),a(3905)),r=(a(95657),a(74866)),o=a(85162),p=["components"],s={id:"client-serialization",title:"Client Serialization"},c=void 0,u={unversionedId:"client/client-serialization",id:"version-5.x.x/client/client-serialization",title:"Client Serialization",description:"GraphQL Kotlin build plugins can generate GraphQL client data classes that are compatible with Jackson",source:"@site/versioned_docs/version-5.x.x/client/client-serialization.mdx",sourceDirName:"client",slug:"/client/client-serialization",permalink:"/graphql-kotlin/docs/5.x.x/client/client-serialization",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/client/client-serialization.mdx",tags:[],version:"5.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1684875677,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{id:"client-serialization",title:"Client Serialization"},sidebar:"version-5.x.x/docs",previous:{title:"Client Customization",permalink:"/graphql-kotlin/docs/5.x.x/client/client-customization"},next:{title:"Tasks",permalink:"/graphql-kotlin/docs/5.x.x/plugins/gradle-plugin-tasks"}},d={},g=[{value:"GraphQL Kotlin Spring Client",id:"graphql-kotlin-spring-client",level:2},{value:"Using Jackson",id:"using-jackson",level:3},{value:"Using Kotlinx Serialization",id:"using-kotlinx-serialization",level:3},{value:"GraphQL Kotlin Ktor Client",id:"graphql-kotlin-ktor-client",level:2},{value:"Using Kotlinx Serialization",id:"using-kotlinx-serialization-1",level:3},{value:"Using Jackson",id:"using-jackson-1",level:3}],m={toc:g},h="wrapper";function k(e){var n=e.components,a=(0,t.Z)(e,p);return(0,l.kt)(h,(0,i.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin build plugins can generate GraphQL client data classes that are compatible with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},(0,l.kt)("inlineCode",{parentName:"a"},"Jackson")),"\n(default) or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},(0,l.kt)("inlineCode",{parentName:"a"},"kotlinx.serialization"))," data models. By default, GraphQL\nclients will attempt to pick up the appropriate serializer from a classpath - ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-client")," defines implicit\ndependency on ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," based serializer and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-client")," define a dependency on a ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClientSerializer")," is a service provider interface that expose generic serialize/deserialize methods that are used\nby the GraphQL clients to serialize requests to String and deserialize responses from String. By utilizing Java ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism we can dynamically load appropriate serializer from the classpath. If there are multiple providers on the classpath,\nwe default to select the first one available one on the classpath."),(0,l.kt)("h2",{id:"graphql-kotlin-spring-client"},"GraphQL Kotlin Spring Client"),(0,l.kt)("h3",{id:"using-jackson"},"Using Jackson"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," is the default serializer used by the build plugins and by GraphQL Kotlin Spring Client."),(0,l.kt)(r.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-spring-client", $graphQLKotlinVersion) {\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLWebClient(\n  url = "http://localhost:8080/graphql"\n  serializer = GraphQLClientJacksonSerializer()\n)\n')),(0,l.kt)("h3",{id:"using-kotlinx-serialization"},"Using Kotlinx Serialization"),(0,l.kt)("p",null,"In order to use ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," we need to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"add dependency on ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-client-serialization")),(0,l.kt)("li",{parentName:"ul"},"configure GraphQL plugin to generate ",(0,l.kt)("inlineCode",{parentName:"li"},"kotlinx.serialization")," compatible data models"),(0,l.kt)("li",{parentName:"ul"},"configure corresponding compiler plugin"),(0,l.kt)("li",{parentName:"ul"},"explicitly specify the target serializer during client construction OR exclude ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-client-jackson")," dependency")),(0,l.kt)(r.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-spring-client", $graphQLKotlinVersion) {\n        exclude("com.expediagroup", "graphql-kotlin-client-jackson")\n    }\n    implementation("com.expediagroup", "graphql-kotlin-client-serialization", $graphQLKotlinVersion)\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n    serializer = GraphQLSerializer.KOTLINX\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.expediagroup</groupId>\n                    <artifactId>graphql-kotlin-client-jackson</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-client-serialization</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath. We can\nalso explicitly specify serializer during client construction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLWebClient(\n  url = "http://localhost:8080/graphql"\n  serializer = GraphQLClientKotlinxSerializer()\n)\n')),(0,l.kt)("h2",{id:"graphql-kotlin-ktor-client"},"GraphQL Kotlin Ktor Client"),(0,l.kt)("h3",{id:"using-kotlinx-serialization-1"},"Using Kotlinx Serialization"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," is the default serializer used by the GraphQL Kotlin Ktor Client. Build plugins default to use\n",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," so we have to explicitly configure the tasks/mojos to use appropriate serializer."),(0,l.kt)(r.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-ktor-client", $graphQLKotlinVersion) {\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n    serializer = GraphQLSerializer.KOTLINX\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLKtorClient(\n  url = URL("http://localhost:8080/graphql")\n  serializer = GraphQLClientKotlinxSerializer()\n)\n')),(0,l.kt)("h3",{id:"using-jackson-1"},"Using Jackson"),(0,l.kt)("p",null,"In order to use ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," we need to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"add dependency on ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-client-jackson")),(0,l.kt)("li",{parentName:"ul"},"explicitly specify the target serializer during client construction OR exclude ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-client-serialization")," dependency")),(0,l.kt)(r.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-ktor-client", $graphQLKotlinVersion) {\n        exclude("com.expediagroup", "graphql-kotlin-client-serialization")\n    }\n    implementation("com.expediagroup", "graphql-kotlin-client-jackson", $graphQLKotlinVersion)\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.expediagroup</groupId>\n                    <artifactId>graphql-kotlin-client-serialization</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-client-jackson</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath. We can\nalso explicitly specify serializer during client construction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLKtorClient(\n  url = URL("http://localhost:8080/graphql")\n  serializer = GraphQLClientJacksonSerializer()\n)\n')))}k.isMDXComponent=!0}}]);