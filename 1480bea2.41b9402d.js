(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(147)),c={id:"advanced-topics-custom-block-render-map",title:"Custom Block Rendering"},l={id:"advanced-topics-custom-block-render-map",title:"Custom Block Rendering",description:"This article discusses how to customize Draft default block rendering.",source:"@site/../docs/Advanced-Topics-Custom-Block-Render.md",permalink:"/docs/advanced-topics-custom-block-render-map",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Custom-Block-Render.md",lastUpdatedBy:"Rounak Agarwal",lastUpdatedAt:1595905045,sidebar:"docs",previous:{title:"Block Styling",permalink:"/docs/advanced-topics-block-styling"},next:{title:"Custom Block Components",permalink:"/docs/advanced-topics-block-components"}},b=[{value:"Draft default block render map",id:"draft-default-block-render-map",children:[]},{value:"Configuring block render map",id:"configuring-block-render-map",children:[]},{value:"Custom block wrappers",id:"custom-block-wrappers",children:[]}],p={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article discusses how to customize Draft default block rendering.\nThe block rendering is used to define supported block types and their respective\nrenderers, as well as converting pasted content to known Draft block types."),Object(o.b)("p",null,"When pasting content, or when calling\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-reference-data-conversion#convertfromhtml"}),"convertFromHTML"),",\nDraft will convert pasted content to the respective block rendering type\nby matching the Draft block render map with the matched tag."),Object(o.b)("h2",{id:"draft-default-block-render-map"},"Draft default block render map"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"HTML element"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Draft block type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h1/>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"header-one")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h2/>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"header-two")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h3/>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"header-three")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h4/>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"header-four")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h5/>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"header-five")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h6/>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"header-six")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<blockquote/>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"blockquote")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<pre/>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"code-block")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<figure/>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"atomic")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<li/>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"unordered-list-item,ordered-list-item","*","*")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<div/>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"unstyled","*","*","*")))),Object(o.b)("p",null,"*","*"," - Block type will be based on the parent ",Object(o.b)("inlineCode",{parentName:"p"},"<ul/>")," or ",Object(o.b)("inlineCode",{parentName:"p"},"<ol/>")),Object(o.b)("p",null,"*","*","*"," - Any block that is not recognized by the block rendering mapping will be treated as unstyled"),Object(o.b)("h2",{id:"configuring-block-render-map"},"Configuring block render map"),Object(o.b)("p",null,"Draft's default block render map can be overwritten by passing an\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://web.archive.org/web/20150623131347/http://facebook.github.io:80/immutable-js/docs/#/Map"}),"Immutable Map")," to\nthe editor blockRender props."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"example of overwriting default block render map:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// The example below deliberately only allows\n// 'heading-two' as the only valid block type and\n// updates the unstyled element to also become a h2.\nconst blockRenderMap = Immutable.Map({\n  'header-two': {\n    element: 'h2'\n  },\n  'unstyled': {\n    element: 'h2'\n  }\n});\n\nclass RichEditor extends React.Component {\n  render() {\n    return (\n      <Editor\n        ...\n        blockRenderMap={blockRenderMap}\n      />\n    );\n  }\n}\n")),Object(o.b)("p",null,"There are cases where instead of overwriting the defaults, we only want to add new block types.\nThis can be done by using the DefaultDraftBlockRenderMap reference to create a new blockRenderMap"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"example of extending default block render map:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const blockRenderMap = Immutable.Map({\n  'section': {\n    element: 'section'\n  }\n});\n\n// Include 'paragraph' as a valid block and updated the unstyled element but\n// keep support for other draft default block types\nconst extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);\n\nclass RichEditor extends React.Component {\n  render() {\n    return (\n      <Editor\n        ...\n        blockRenderMap={extendedBlockRenderMap}\n      />\n    );\n  }\n}\n")),Object(o.b)("p",null,"When Draft parses pasted HTML, it maps from HTML elements back into\nDraft block types. If you want to specify other HTML elements that map to a\nparticular block type, you can add the array ",Object(o.b)("inlineCode",{parentName:"p"},"aliasedElements")," to the block config."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"example of unstyled block type alias usage:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"'unstyled': {\n  element: 'div',\n  aliasedElements: ['p'],\n}\n")),Object(o.b)("h2",{id:"custom-block-wrappers"},"Custom block wrappers"),Object(o.b)("p",null,"By default, the html element is used to wrap block types. However, a react component\ncan also be provided to the ",Object(o.b)("em",{parentName:"p"},"blockRenderMap")," to wrap the EditorBlock."),Object(o.b)("p",null,"During pasting, or when calling\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-reference-data-conversion#convertfromhtml"}),"convertFromHTML"),",\nthe html will be scanned for matching tag elements. A wrapper will be used when there is a definition for\nit on the ",Object(o.b)("em",{parentName:"p"},"blockRenderMap")," to wrap that particular block type. For example:"),Object(o.b)("p",null,"Draft uses wrappers to wrap ",Object(o.b)("inlineCode",{parentName:"p"},"<li/>")," inside either ",Object(o.b)("inlineCode",{parentName:"p"},"<ol/>")," or ",Object(o.b)("inlineCode",{parentName:"p"},"<ul/>"),", but wrappers can also be used\nto wrap any other custom block type."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"example of extending default block render map to use a react component for a custom block:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class MyCustomBlock extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <div className='MyCustomBlock'>\n        {/* here, this.props.children contains a <section> container, as that was the matching element */}\n        {this.props.children}\n      </div>\n    );\n  }\n}\n\nconst blockRenderMap = Immutable.Map({\n  'MyCustomBlock': {\n    // element is used during paste or html conversion to auto match your component;\n    // it is also retained as part of this.props.children and not stripped out\n    element: 'section',\n    wrapper: <MyCustomBlock />,\n  }\n});\n\n// keep support for other draft default block types and add our myCustomBlock type\nconst extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);\n\nclass RichEditor extends React.Component {\n  ...\n  render() {\n    return (\n      <Editor\n        ...\n        blockRenderMap={extendedBlockRenderMap}\n      />\n    );\n  }\n}\n")))}d.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),i=d(n),m=a,u=i["".concat(c,".").concat(m)]||i[m]||s[m]||o;return n?r.a.createElement(u,l(l({ref:t},p),{},{components:n})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);