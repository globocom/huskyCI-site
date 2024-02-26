"use strict";(self.webpackChunkhusky_site=self.webpackChunkhusky_site||[]).push([[814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,g=p["".concat(l,".").concat(y)]||p[y]||d[y]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=y;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"accessing-internal-repositories",title:"Accessing interal repositories"},s=void 0,a={unversionedId:"guides/accessing-internal-repositories",id:"guides/accessing-internal-repositories",title:"Accessing interal repositories",description:"If you're trying to run HuskyCI inside your internal remote and has been facing some dificulties along the way, this section will guide you on how to overcome it.",source:"@site/docs/guides/accessing-internal-repositories.md",sourceDirName:"guides",slug:"/guides/accessing-internal-repositories",permalink:"/docs/guides/accessing-internal-repositories",draft:!1,tags:[],version:"current",frontMatter:{id:"accessing-internal-repositories",title:"Accessing interal repositories"},sidebar:"docs",previous:{title:"Handling false positives",permalink:"/docs/guides/handling-false-positives"},next:{title:"API",permalink:"/docs/category/api"}},l={},c=[{value:"GoSec",id:"gosec",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you're trying to run HuskyCI inside your internal remote and has been facing some dificulties along the way, this section will guide you on how to overcome it."),(0,o.kt)("h2",{id:"gosec"},"GoSec"),(0,o.kt)("p",null,"If the project you're trying to analyze has internal dependencies, is written in GoLang and does not have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Vendor")," folder, you might face an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error Cloning")," error."),(0,o.kt)("p",null,"This error is caused due to the way GoSec fetches it's dependencies through the ",(0,o.kt)("inlineCode",{parentName:"p"},"go get")," command, which, by default, uses HTTPS for cloning."),(0,o.kt)("p",null,'In order to overcome this issue, HuskyCI has 2 environment variables to "force" ',(0,o.kt)("inlineCode",{parentName:"p"},"go get")," to do it's cloning through SSH with the user's key. It's important to notice that no extra key is needed, only the one provided to HuskyCI's API (the key must have access to the desired repository and should already have been set)."),(0,o.kt)("p",null,"An example on how the environment variables should be set is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"HUSKYCI_API_GIT_SSH_URL=gitlab@gitlab.example.com\nHUSKYCI_API_GIT_URL_TO_SUBSTITUTE=https://gitlab.example.com/\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": If one of the environment variables is filled but the other is not, being left empty or not set, both will be set by HuskyCI as being empty."),(0,o.kt)("p",null,"Now, you should be able to run HuskyCI with the internal remote you desire."))}d.isMDXComponent=!0}}]);