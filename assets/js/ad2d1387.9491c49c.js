"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2725],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,a,n,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,d=p(e),h=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),g=h[0],v=h[1],b=f({queryString:s,groupId:u}),k=b[0],y=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],x=w[1],S=function(){var e=null!=k?k:N;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){S&&v(S)}),[S]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),x(e)}),[y,x,d]),tabValues:d}}var g=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(d(t),s(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;a=null!=(o=c[i])?o:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function k(e){var t=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},39601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(74866),l=a(85162),s=["components"],u={id:"apollo-federation",title:"Apollo Federation"},c=void 0,d={unversionedId:"schema-generator/federation/apollo-federation",id:"schema-generator/federation/apollo-federation",title:"Apollo Federation",description:"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value",source:"@site/docs/schema-generator/federation/apollo-federation.mdx",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/apollo-federation",permalink:"/graphql-kotlin/docs/schema-generator/federation/apollo-federation",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/federation/apollo-federation.mdx",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1695080947,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{id:"apollo-federation",title:"Apollo Federation"},sidebar:"docs",previous:{title:"Introspection",permalink:"/graphql-kotlin/docs/schema-generator/execution/introspection"},next:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-schemas"}},p={},m=[{value:"Federation v1 vs Federation v2",id:"federation-v1-vs-federation-v2",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>toFederatedSchema</code>",id:"tofederatedschema",level:3},{value:"Example",id:"example",level:3}],f={toc:m},h="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(h,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value\nto their clients. As the underlying graph scales, managing single monolithic GraphQL server might become less and less\nfeasible making it much harder to manage and leading to unnecessary bottlenecks. Migrating towards federated model with\nan API gateway and a number of smaller GraphQL services behind it alleviates some of those problems and allows teams to\nscale their graphs more easily."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/federation/"},"Apollo Federation")," is an architecture for composing multiple GraphQL\nservices into a single graph. Federated schemas rely on a number of custom directives to instrument the behavior of the\nunderlying graph and convey the relationships between different schema types. Each individual GraphQL server generates a\nvalid GraphQL schema and can be run independently. This is in contrast with a traditional schema stitching approach where\nrelationships between individual services, i.e. linking configuration, is configured at the GraphQL gateway level."),(0,o.kt)("h2",{id:"federation-v1-vs-federation-v2"},"Federation v1 vs Federation v2"),(0,o.kt)("p",null,"Federation v2 is an evolution of the Federation spec to make it more powerful, flexible and easier to adapt. While v1 and\nv2 schemas are similar in many ways, Federation v2 relaxes some of the constraints and adds additional capabilities. See\n",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/federation/federation-2/new-in-federation-2/"},"Apollo documentation")," for details."),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," library will generate Federation v2 compatible schema. In order to generate v1\ncompatible schema you have to explicitly opt-out by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"optInFederationV2 = false")," on your instance of\n",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedSchemaGeneratorHooks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val myHooks = FederatedSchemaGeneratorHooks(resolvers = myFederatedResolvers)\nval myConfig = FederatedSchemaGeneratorConfig(\n  supportedPackages = "com.example",\n  hooks = myHooks\n)\n\ntoFederatedSchema(\n  config = myConfig,\n  queries = listOf(TopLevelObject(MyQuery()))\n)\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When generating federated schemas, ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," defaults to Federation v2. If you want to generate Federation\nv1 schema, you have to explicitly opt-out by configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql.federation.optInV2 = false")," property.")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Using a JVM dependency manager, link ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," to your project."),(0,o.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"gradle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-federation", latestVersion)\n'))),(0,o.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-federation</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," is build on top of ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and adds a few extra methods and class to use to generate federation compliant schemas."),(0,o.kt)("h3",{id:"tofederatedschema"},(0,o.kt)("inlineCode",{parentName:"h3"},"toFederatedSchema")),(0,o.kt)("p",null,"Just like the basic ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/schema-generator-getting-started"},"toSchema"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," accepts five parameters: ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaObject"),".\nThe difference is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," class is of type ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/FederatedSchemaGeneratorConfig.kt"},"FederatedSchemaGeneratorConfig"),".\nThis class extends the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},"base configuration class")," and adds some default logic. You can override the logic if needed, but do so with caution as you may no longer generate a spec compliant schema."),(0,o.kt)("p",null,"You can see the definition for ",(0,o.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/toFederatedSchema.kt"},"in the\nsource"),"."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(fields = FieldSet("id"))\ndata class User(\n  val id: ID,\n  val name: String\n)\n\nclass Query {\n  fun getUsers(): List<User> = getUsersFromDB()\n}\n\nval config = FederatedSchemaGeneratorConfig(\n  supportedPackages = "com.example",\n  hooks = FederatedSchemaGeneratorHooks(emptyList())\n)\n\ntoFederatedSchema(\n  config = config,\n  queries = listOf(TopLevelObject(Query()))\n)\n')),(0,o.kt)("p",null,"will generate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'schema @link(import : ["@key", "FieldSet"], url : "https://specs.apollo.dev/federation/v2.5"){\n  query: Query\n}\n\ndirective @key(fields: FieldSet!, resolvable: Boolean = true) repeatable on OBJECT | INTERFACE\ndirective @link(import: [String], url: String!) repeatable on SCHEMA\n\ntype Query {\n   getUsers: [User!]!\n\n   _entities(representations: [_Any!]!): [_Entity]!\n   _service: _Service!\n}\n\ntype User @key(fields : "id", resolvable : true) {\n   id: ID!\n   name: String!\n}\n\nunion _Entity = User\n\ntype _Service {\n   sdl: String!\n}\n\nscalar FieldSet\nscalar _Any\n')))}g.isMDXComponent=!0}}]);