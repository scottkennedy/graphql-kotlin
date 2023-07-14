"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1011],{85162:(e,r,t)=>{t.d(r,{Z:()=>l});var a=t(67294),n=t(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){var r=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,l),hidden:t},r)}},74866:(e,r,t)=>{t.d(r,{Z:()=>w});var a=t(87462),n=t(67294),i=t(86010),l=t(12466),o=t(76775),s=t(91980),u=t(67392),p=t(50012);function c(e){return function(e){var r,t;return null!=(r=null==(t=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(r=e.props)&&"object"==typeof r&&"value"in r)return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function d(e){var r=e.values,t=e.children;return(0,n.useMemo)((function(){var e=null!=r?r:c(t);return function(e){var r=(0,u.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function v(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function g(e){var r=e.queryString,t=void 0!==r&&r,a=e.groupId,i=(0,o.k6)(),l=function(e){var r=e.queryString,t=void 0!==r&&r,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((function(e){if(l){var r=new URLSearchParams(i.location.search);r.set(l,e),i.replace(Object.assign({},i.location,{search:r.toString()}))}}),[l,i])]}function m(e){var r,t,a,i,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,c=d(e),m=(0,n.useState)((function(){return function(e){var r,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var n=null!=(r=a.find((function(e){return e.default})))?r:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:c})})),f=m[0],h=m[1],b=g({queryString:s,groupId:u}),k=b[0],y=b[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,p.Nk)(r),a=t[0],i=t[1],[a,(0,n.useCallback)((function(e){r&&i.set(e)}),[r,i])]),x=w[0],N=w[1],q=function(){var e=null!=k?k:x;return v({value:e,tabValues:c})?e:null}();return(0,n.useLayoutEffect)((function(){q&&h(q)}),[q]),{selectedValue:f,selectValue:(0,n.useCallback)((function(e){if(!v({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),N(e)}),[y,N,c]),tabValues:c}}var f=t(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var r=e.className,t=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var r=e.currentTarget,t=p.indexOf(r),a=u[t].value;a!==o&&(c(r),s(a))},v=function(e){var r,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,n=p.indexOf(e.currentTarget)+1;t=null!=(a=p[n])?a:p[0];break;case"ArrowLeft":var i,l=p.indexOf(e.currentTarget)-1;t=null!=(i=p[l])?i:p[p.length-1]}null==(r=t)||r.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},r)},u.map((function(e){var r=e.value,t=e.label,l=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===r?0:-1,"aria-selected":o===r,key:r,ref:function(e){return p.push(e)},onKeyDown:v,onClick:d},l,{className:(0,i.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===r})}),null!=t?t:r)})))}function k(e){var r=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var l=i.find((function(e){return e.props.value===a}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})})))}function y(e){var r=m(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},n.createElement(b,(0,a.Z)({},e,r)),n.createElement(k,(0,a.Z)({},e,r)))}function w(e){var r=(0,f.Z)();return n.createElement(y,(0,a.Z)({key:String(r)},e))}},22133:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>v});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),l=(t(95657),t(74866)),o=t(85162),s=["components"],u={id:"spring-overview",title:"Spring Server Overview"},p=void 0,c={unversionedId:"server/spring-server/spring-overview",id:"version-4.x.x/server/spring-server/spring-overview",title:"Spring Server Overview",description:"graphql-kotlin-spring-server",source:"@site/versioned_docs/version-4.x.x/server/spring-server/spring-overview.mdx",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-overview",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-overview",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/spring-server/spring-overview.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1689355319,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"spring-overview",title:"Spring Server Overview"},sidebar:"version-4.x.x/docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/4.x.x/server/server-subscriptions"},next:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-schema"}},d={},v=[{value:"WebFlux vs WebMVC",id:"webflux-vs-webmvc",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Default Routes",id:"default-routes",level:2}],g={toc:v},m="wrapper";function f(e){var r=e.components,u=(0,n.Z)(e,s);return(0,i.kt)(m,(0,a.Z)({},g,u,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/graphql-kotlin-spring-server"},"graphql-kotlin-spring-server"),"\nis a Spring Boot auto-configuration library that automatically configures beans required to start up a reactive GraphQL\nweb server."),(0,i.kt)("h2",{id:"webflux-vs-webmvc"},"WebFlux vs WebMVC"),(0,i.kt)("p",null,"This library is built on a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Spring WebFlux (reactive)")," stack which is a non-blocking alternative to a traditional ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html"},"Spring Web MVC (servlet)")," based stack.\nSince the frameworks utilize different threading models they cannot and should not be intermixed.\nWhen building a GraphQL server using ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," all your queries and mutations should follow one of the supported ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/async-models"},"asynchronous execution models"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The simplest way to create a new Kotlin Spring Boot app is by generating one using ",(0,i.kt)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring Initializr.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image of https://start.spring.io/",src:t(84086).Z,width:"1689",height:"726"})),(0,i.kt)("p",null,"Once you get the sample application setup locally, you will need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," dependency:"),(0,i.kt)(l.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n'))),(0,i.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-spring-server</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"At a minimum, in order for ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," to automatically configure your GraphQL web server you need to\nspecify a list of supported packages that can be scanned for exposing your schema objects through reflections."),(0,i.kt)("p",null,"You can do this through the spring application config or by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorConfig")," bean. See customization below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'graphql:\n  packages:\n    - "com.your.package"\n')),(0,i.kt)("h2",{id:"default-routes"},"Default Routes"),(0,i.kt)("p",null,"Your newly created GraphQL server starts up with following preconfigured default routes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/graphql")," - GraphQL server endpoint used for processing queries and mutations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/subscriptions")," - GraphQL server endpoint used for processing subscriptions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/sdl")," - Convenience endpoint that returns current schema in Schema Definition Language format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/playground")," - Prisma Labs ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/prisma-labs/graphql-playground"},"GraphQL Playground IDE")," endpoint")))}f.isMDXComponent=!0},84086:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/spring-initializer-a906245aeee5602ea82b7bb98a9a50bb.png"}}]);