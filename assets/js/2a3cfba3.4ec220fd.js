"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6284],{85162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(87462),r=t(67294),o=t(86010),i=t(12466),l=t(76775),s=t(91980),d=t(67392),u=t(50012);function c(e){return function(e){var a,t;return null!=(a=null==(t=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(a=e.props)&&"object"==typeof a&&"value"in a)return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function p(e){var a=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=a?a:c(t);return function(e){var a=(0,d.l)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function m(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function h(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId,o=(0,l.k6)(),i=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var a=new URLSearchParams(o.location.search);a.set(i,e),o.replace(Object.assign({},o.location,{search:a.toString()}))}}),[i,o])]}function f(e){var a,t,n,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,d=e.groupId,c=p(e),f=(0,r.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:c})})),g=f[0],v=f[1],k=h({queryString:s,groupId:d}),b=k[0],I=k[1],y=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(a),n=t[0],o=t[1],[n,(0,r.useCallback)((function(e){a&&o.set(e)}),[a,o])]),N=y[0],E=y[1],F=function(){var e=null!=b?b:N;return m({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){F&&v(F)}),[F]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),I(e),E(e)}),[I,E,c]),tabValues:c}}var g=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var a=e.className,t=e.block,l=e.selectedValue,s=e.selectValue,d=e.tabValues,u=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var a=e.currentTarget,t=u.indexOf(a),n=d[t].value;n!==l&&(c(a),s(n))},m=function(e){var a,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;t=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;t=null!=(o=u[i])?o:u[u.length-1]}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a)},d.map((function(e){var a=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:function(e){return u.push(e)},onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===a})}),null!=t?t:a)})))}function b(e){var a=e.lazy,t=e.children,n=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){var i=o.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})})))}function I(e){var a=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(k,(0,n.Z)({},e,a)),r.createElement(b,(0,n.Z)({},e,a)))}function y(e){var a=(0,g.Z)();return r.createElement(I,(0,n.Z)({key:String(a)},e))}},83824:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),i=(t(95657),t(74866)),l=t(85162),s=["components"],d={id:"apollo-federation",title:"Apollo Federation"},u=void 0,c={unversionedId:"schema-generator/federation/apollo-federation",id:"version-6.x.x/schema-generator/federation/apollo-federation",title:"Apollo Federation",description:"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value",source:"@site/versioned_docs/version-6.x.x/schema-generator/federation/apollo-federation.mdx",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/apollo-federation",permalink:"/graphql-kotlin/docs/schema-generator/federation/apollo-federation",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/federation/apollo-federation.mdx",tags:[],version:"6.x.x",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"apollo-federation",title:"Apollo Federation"},sidebar:"docs",previous:{title:"Introspection",permalink:"/graphql-kotlin/docs/schema-generator/execution/introspection"},next:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-schemas"}},p={},m=[{value:"Federation v1 vs Federation v2",id:"federation-v1-vs-federation-v2",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>toFederatedSchema</code>",id:"tofederatedschema",level:3},{value:"Example",id:"example",level:3},{value:"Limitations",id:"limitations",level:2}],h={toc:m},f="wrapper";function g(e){var a=e.components,t=(0,r.Z)(e,s);return(0,o.kt)(f,(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value\nto their clients. As the underlying graph scales, managing single monolithic GraphQL server might become less and less\nfeasible making it much harder to manage and leading to unnecessary bottlenecks. Migrating towards federated model with\nan API gateway and a number of smaller GraphQL services behind it alleviates some of those problems and allows teams to\nscale their graphs more easily."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/federation/"},"Apollo Federation")," is an architecture for composing multiple GraphQL\nservices into a single graph. Federated schemas rely on a number of custom directives to instrument the behavior of the\nunderlying graph and convey the relationships between different schema types. Each individual GraphQL server generates a\nvalid GraphQL schema and can be run independently. This is in contrast with a traditional schema stitching approach where\nrelationships between individual services, i.e. linking configuration, is configured at the GraphQL gateway level."),(0,o.kt)("h2",{id:"federation-v1-vs-federation-v2"},"Federation v1 vs Federation v2"),(0,o.kt)("p",null,"Federation v2 is an evolution of the Federation spec to make it more powerful, flexible and easier to adapt. While v1 and\nv2 schemas are similar in many ways, Federation v2 relaxes some of the constraints and adds additional capabilities. See\n",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/federation/federation-2/new-in-federation-2/"},"Apollo documentation")," for details."),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," library will generate Federation v1 compatible schema. In order to generate v2\ncompatible schema you have to explicitly opt-in by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"optInFederationV2 = true")," on your instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedSchemaGeneratorHooks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val myHooks = FederatedSchemaGeneratorHooks(resolvers = myFederatedResolvers, optInFederationV2 = true)\nval myConfig = FederatedSchemaGeneratorConfig(\n  supportedPackages = "com.example",\n  hooks = myHooks\n)\n\ntoFederatedSchema(\n  config = myConfig,\n  queries = listOf(TopLevelObject(MyQuery()))\n)\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Federation v2 compatible schemas, can be generated using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," by configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql.federation.optInV2 = true")," property.")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Using a JVM dependency manager, link ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," to your project."),(0,o.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"gradle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-federation", latestVersion)\n'))),(0,o.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-federation</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," is build on top of ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and adds a few extra methods and class to use to generate federation compliant schemas."),(0,o.kt)("h3",{id:"tofederatedschema"},(0,o.kt)("inlineCode",{parentName:"h3"},"toFederatedSchema")),(0,o.kt)("p",null,"Just like the basic ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/schema-generator-getting-started"},"toSchema"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," accepts five parameters: ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaObject"),".\nThe difference is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," class is of type ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/FederatedSchemaGeneratorConfig.kt"},"FederatedSchemaGeneratorConfig"),".\nThis class extends the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},"base configuration class")," and adds some default logic. You can override the logic if needed, but do so with caution as you may no longer generate a spec compliant schema."),(0,o.kt)("p",null,"You can see the definition for ",(0,o.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/toFederatedSchema.kt"},"in the\nsource"),"."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(fields = FieldSet("id"))\ndata class User(\n  val id: ID,\n  val name: String\n)\n\nclass Query {\n  fun getUsers(): List<User> = getUsersFromDB()\n}\n\nval config = FederatedSchemaGeneratorConfig(\n  supportedPackages = "com.example",\n  hooks = FederatedSchemaGeneratorHooks(emptyList(), optInFederationV2 = true)\n)\n\ntoFederatedSchema(\n  config = config,\n  queries = listOf(TopLevelObject(Query()))\n)\n')),(0,o.kt)("p",null,"will generate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'schema @link(import : ["@composeDirective", "@extends", "@external", "@inaccessible", "@interfaceObject", "@key", "@override", "@provides", "@requires", "@shareable", "@tag", "FieldSet"], url : "https://specs.apollo.dev/federation/v2.3"){\n  query: Query\n}\n\ndirective @composeDirective(name: String!) repeatable on SCHEMA\ndirective @extends on OBJECT | INTERFACE\ndirective @external on FIELD_DEFINITION\ndirective @inaccessible on SCALAR | OBJECT | FIELD_DEFINITION | ARGUMENT_DEFINITION | INTERFACE | UNION | ENUM | ENUM_VALUE | INPUT_OBJECT | INPUT_FIELD_DEFINITION\ndirective @interfaceObject on OBJECT\ndirective @key(fields: FieldSet!, resolvable: Boolean = true) repeatable on OBJECT | INTERFACE\ndirective @link(import: [String], url: String!) repeatable on SCHEMA\ndirective @override(from: String!) on FIELD_DEFINITION\ndirective @provides(fields: FieldSet!) on FIELD_DEFINITION\ndirective @requires(fields: FieldSet!) on FIELD_DEFINITION\ndirective @shareable on OBJECT | FIELD_DEFINITION\ndirective @tag(name: String!) repeatable on SCALAR | OBJECT | FIELD_DEFINITION | ARGUMENT_DEFINITION | INTERFACE | UNION | ENUM | ENUM_VALUE | INPUT_OBJECT | INPUT_FIELD_DEFINITION\n\ntype Query {\n   getUsers: [User!]!\n\n   _entities(representations: [_Any!]!): [_Entity]!\n   _service: _Service!\n}\n\ntype User @key(fields : "id", resolvable : true) {\n   id: ID!\n   name: String!\n}\n\nunion _Entity = User\n\ntype _Service {\n   sdl: String!\n}\n\nscalar FieldSet\nscalar _Any\n')),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"Apollo Federation currently does not support subscriptions. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/blog/backend/federation/using-subscriptions-with-your-federated-data-graph/"},"Apollo blog"),"\nfor a workaround."))}g.isMDXComponent=!0}}]);