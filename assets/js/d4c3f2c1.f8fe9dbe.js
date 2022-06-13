"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1061],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var o=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=o.createContext({}),c=function(e){var r=o.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=t,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(v,i(i({ref:r},u),{},{components:n})):o.createElement(v,i({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:(e,r,n)=>{n.d(r,{Z:()=>t});var o=n(7294);function t(e){var r=e.children,n=e.hidden,t=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:t},r)}},9877:(e,r,n)=>{n.d(r,{Z:()=>u});var o=n(7462),t=n(7294),a=n(2389),i=n(3725),l=n(6010);const s="tabItem_LplD";function c(e){var r,n,a,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,h=t.Children.map(e.children,(function(e){if((0,t.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),k=(0,i.lx)(f,(function(e,r){return e.value===r.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(r=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?r:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),b=y.tabGroupChoices,N=y.setTabGroupChoices,x=(0,t.useState)(g),w=x[0],C=x[1],S=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=b[m];null!=O&&O!==w&&f.some((function(e){return e.value===O}))&&C(O)}var T=function(e){var r=e.currentTarget,n=S.indexOf(r),o=f[n].value;o!==w&&(P(r),C(o),null!=m&&N(m,o))},E=function(e){var r,n=null;switch(e.key){case"ArrowRight":var o=S.indexOf(e.currentTarget)+1;n=S[o]||S[0];break;case"ArrowLeft":var t=S.indexOf(e.currentTarget)-1;n=S[t]||S[S.length-1]}null==(r=n)||r.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},v)},f.map((function(e){var r=e.value,n=e.label,a=e.attributes;return t.createElement("li",(0,o.Z)({role:"tab",tabIndex:w===r?0:-1,"aria-selected":w===r,key:r,ref:function(e){return S.push(e)},onKeyDown:E,onFocus:T,onClick:T},a,{className:(0,l.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":w===r})}),null!=n?n:r)}))),c?(0,t.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},h.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==w})}))))}function u(e){var r=(0,a.Z)();return t.createElement(c,(0,o.Z)({key:String(r)},e))}},4468:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var o=n(7462),t=n(3366),a=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],c={id:"hooks-provider",title:"Schema Generator Hooks Provider"},u=void 0,p={unversionedId:"plugins/hooks-provider",id:"version-4.x.x/plugins/hooks-provider",title:"Schema Generator Hooks Provider",description:"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan",source:"@site/versioned_docs/version-4.x.x/plugins/hooks-provider.mdx",sourceDirName:"plugins",slug:"/plugins/hooks-provider",permalink:"/graphql-kotlin/docs/4.x.x/plugins/hooks-provider",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/plugins/hooks-provider.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1655161182,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"hooks-provider",title:"Schema Generator Hooks Provider"},sidebar:"version-4.x.x/docs",previous:{title:"Usage",permalink:"/graphql-kotlin/docs/4.x.x/plugins/maven-plugin-usage"}},d={},m=[{value:"Creating Custom Hooks Service Provider",id:"creating-custom-hooks-service-provider",level:2},{value:"Add dependency on graphql-kotlin-hooks-provider",id:"add-dependency-on-graphql-kotlin-hooks-provider",level:3},{value:"Create new SchemaGeneratorHooksProvider implementation",id:"create-new-schemageneratorhooksprovider-implementation",level:3},{value:"Create provider configuration file",id:"create-provider-configuration-file",level:3},{value:"Limitations",id:"limitations",level:2}],v={toc:m};function h(e){var r=e.components,n=(0,t.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan\nyour classpath for classes implementing ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",(0,a.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscription")," interfaces\nand then generate corresponding GraphQL schema using ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),". By default, plugins will generate\nthe schema using ",(0,a.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". If your project uses custom hooks or needs to generate the federated GraphQL\nschema, you will need to provide an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," that will be used to create an instance of\nyour custom hooks."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," is a service provider interface that exposes a single ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks")," method to generate an instance\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks")," that will be used to generate your schema. By utilizing Java ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nwe can dynamically load your custom provider from the classpath. Service provider can be provided as part of your project\nsources, included inside of one of your project dependencies or through explicitly provided artifact. Since we need to be\nable to deterministically choose a single hooks provider, generation of schema will fail if there are multiple providers\non the classpath."),(0,a.kt)("h2",{id:"creating-custom-hooks-service-provider"},"Creating Custom Hooks Service Provider"),(0,a.kt)("h3",{id:"add-dependency-on-graphql-kotlin-hooks-provider"},"Add dependency on graphql-kotlin-hooks-provider"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-hooks-provider")," module."),(0,a.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimplementation("com.expediagroup", "graphql-kotlin-hooks-provider", latestVersion)\n'))),(0,a.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-hooks-provider</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,a.kt)("h3",{id:"create-new-schemageneratorhooksprovider-implementation"},"Create new SchemaGeneratorHooksProvider implementation"),(0,a.kt)("p",null,"Service provider implementation has to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface that provides a way to instantiate\nschema generator hooks that will be used to generate the GraphQL schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nclass MyCustomSchemaGeneratorHooksProvider : SchemaGeneratorHooksProvider {\n    override fun hooks(): SchemaGeneratorHooks = MyCustomHooks()\n}\n")),(0,a.kt)("h3",{id:"create-provider-configuration-file"},"Create provider configuration file"),(0,a.kt)("p",null,"Service loader provider configuration file should be created under JAR ",(0,a.kt)("inlineCode",{parentName:"p"},"/META-INF/services")," directory (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources/META-INF/services"),"\nin default project structure). Name of the provider configuration should be fully qualified service provider interface name, i.e.\n",(0,a.kt)("inlineCode",{parentName:"p"},"com.expediagroup.graphql.plugin.schema.hooks.SchemaGeneratorHooksProvider")," and contain single entry - a fully qualified\nname of the service provider implementation."),(0,a.kt)("p",null,"Using the example service provider implementation from the above, our project structure should look like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"my-project\n|- src\n  |- main\n    |- kotlin\n      |- com\n        |- example\n          |- MyCustomSchemaGeneratorHooksProvider.kt\n    |- resources\n      |- META-INF\n        |- services\n          |- com.expediagroup.graphql.plugin.schema.hooks.SchemaGeneratorHooksProvider\n\n")),(0,a.kt)("p",null,"Our service provider configuration file should have following content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"com.example.MyCustomSchemaGeneratorHooksProvider\n")),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"We don't support Java 9 module mechanism for declaring ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," implementations. As a workaround, you have to define\nyour service providers in the provider configuration file under ",(0,a.kt)("inlineCode",{parentName:"p"},"META-INF/services"),"."))}h.isMDXComponent=!0}}]);