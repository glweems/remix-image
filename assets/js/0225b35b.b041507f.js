"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[363],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1530:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:3},c="Use Component",s={unversionedId:"tutorial-basics/use-component",id:"tutorial-basics/use-component",title:"Use Component",description:"Import the Image component and specify the url to the resource route used by the imageLoader function.",source:"@site/docs/tutorial-basics/use-component.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/use-component",permalink:"/docs/tutorial-basics/use-component",editUrl:"https://github.com/Josh-McFarlin/remix-image/tree/master/docs/templates/shared/docs/tutorial-basics/use-component.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create Loader",permalink:"/docs/tutorial-basics/create-loader"},next:{title:"Congratulations!",permalink:"/docs/tutorial-basics/congratulations"}},l=[{value:"PropTypes",id:"proptypes",children:[],level:2}],m={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-component"},"Use Component"),(0,o.kt)("p",null,"Import the ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," component and specify the url to the resource route used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"imageLoader")," function.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"loaderUrl")," prop is optional if the resource route has been created at the path ",(0,o.kt)("inlineCode",{parentName:"p"},'"/api/image"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'import Image from "remix-image";\n\n<Image\n  loaderUrl="/api/image"\n  src="..."\n  responsive={[\n    {\n      size: {\n        width: 100,\n        height: 100,\n      },\n      maxWidth: 200,\n    },\n  ]}\n/>\n')),(0,o.kt)("h2",{id:"proptypes"},"PropTypes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"loaderUrl"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},'"/api/image"'),(0,o.kt)("td",{parentName:"tr",align:"center"},"The path of the image loader resource route. The ",(0,o.kt)("inlineCode",{parentName:"td"},"loaderUrl")," prop is optional if the resource route has been created at the path ",(0,o.kt)("inlineCode",{parentName:"td"},'"/api/image"'),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"responsive"),(0,o.kt)("td",{parentName:"tr",align:"center"},"{ size: { width: number; height: number; }; maxWidth?: number; }[]"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"[]"),(0,o.kt)("td",{parentName:"tr",align:"center"},"An array of responsive sizes. The resource route is not called if this prop is not provided.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"options"),(0,o.kt)("td",{parentName:"tr",align:"center"},"TransformOptions"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"TransformOptions that can be used to override the defaults provided to the loader.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": The ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," component extends the native ",(0,o.kt)("inlineCode",{parentName:"p"},"img")," element, so any props used with ",(0,o.kt)("inlineCode",{parentName:"p"},"img")," can be provided to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," component."))}u.isMDXComponent=!0}}]);