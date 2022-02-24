(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(147)),c={id:"advanced-topics-decorators",title:"Decorators"},i={id:"advanced-topics-decorators",title:"Decorators",description:"Inline and block styles aren't the only kind of rich styling that we might",source:"@site/../docs/Advanced-Topics-Decorators.md",permalink:"/docs/advanced-topics-decorators",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Decorators.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1576462158,sidebar:"docs",previous:{title:"v0.10 API Migration",permalink:"/docs/v0-10-api-migration"},next:{title:"Key Bindings",permalink:"/docs/advanced-topics-key-bindings"}},s=[{value:"CompositeDecorator",id:"compositedecorator",children:[]},{value:"Decorator Components",id:"decorator-components",children:[{value:"Beyond CompositeDecorator",id:"beyond-compositedecorator",children:[]}]},{value:"Setting new decorators",id:"setting-new-decorators",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Inline and block styles aren't the only kind of rich styling that we might\nwant to add to our editor. The Facebook comment input, for example, provides\nblue background highlights for mentions and hashtags."),Object(r.b)("p",null,'To support flexibility for custom rich text, Draft provides a "decorator"\nsystem. The ',Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/tweet"}),"tweet example"),"\noffers a live example of decorators in action."),Object(r.b)("h2",{id:"compositedecorator"},"CompositeDecorator"),Object(r.b)("p",null,"The decorator concept is based on scanning the contents of a given\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api-reference-content-block"}),"ContentBlock"),"\nfor ranges of text that match a defined strategy, then rendering them\nwith a specified React component."),Object(r.b)("p",null,"You can use the ",Object(r.b)("inlineCode",{parentName:"p"},"CompositeDecorator")," class to define your desired\ndecorator behavior. This class allows you to supply multiple ",Object(r.b)("inlineCode",{parentName:"p"},"DraftDecorator"),"\nobjects, and will search through a block of text with each strategy in turn."),Object(r.b)("p",null,"Decorators are stored within the ",Object(r.b)("inlineCode",{parentName:"p"},"EditorState")," record. When creating a new\n",Object(r.b)("inlineCode",{parentName:"p"},"EditorState")," object, e.g. via ",Object(r.b)("inlineCode",{parentName:"p"},"EditorState.createEmpty()"),", a decorator may\noptionally be provided."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Under the hood"),Object(r.b)("p",{parentName:"blockquote"},"When contents change in a Draft editor, the resulting ",Object(r.b)("inlineCode",{parentName:"p"},"EditorState")," object\nwill evaluate the new ",Object(r.b)("inlineCode",{parentName:"p"},"ContentState")," with its decorator, and identify ranges\nto be decorated. A complete tree of blocks, decorators, and inline styles is\nformed at this time, and serves as the basis for our rendered output."),Object(r.b)("p",{parentName:"blockquote"},"In this way, we always ensure that as contents change, rendered decorations\nare in sync with our ",Object(r.b)("inlineCode",{parentName:"p"},"EditorState"),".")),Object(r.b)("p",null,'In the "Tweet" editor example, for instance, we use a ',Object(r.b)("inlineCode",{parentName:"p"},"CompositeDecorator")," that\nsearches for @-handle strings as well as hashtag strings:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const compositeDecorator = new CompositeDecorator([\n  {\n    strategy: handleStrategy,\n    component: HandleSpan,\n  },\n  {\n    strategy: hashtagStrategy,\n    component: HashtagSpan,\n  },\n]);\n")),Object(r.b)("p",null,"This composite decorator will first scan a given block of text for @-handle\nmatches, then for hashtag matches."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// Note: these aren't very good regexes, don't use them!\nconst HANDLE_REGEX = /\\@[\\w]+/g;\nconst HASHTAG_REGEX = /\\#[\\w\\u0590-\\u05ff]+/g;\n\nfunction handleStrategy(contentBlock, callback, contentState) {\n  findWithRegex(HANDLE_REGEX, contentBlock, callback);\n}\n\nfunction hashtagStrategy(contentBlock, callback, contentState) {\n  findWithRegex(HASHTAG_REGEX, contentBlock, callback);\n}\n\nfunction findWithRegex(regex, contentBlock, callback) {\n  const text = contentBlock.getText();\n  let matchArr, start;\n  while ((matchArr = regex.exec(text)) !== null) {\n    start = matchArr.index;\n    callback(start, start + matchArr[0].length);\n  }\n}\n")),Object(r.b)("p",null,"The strategy functions execute the provided callback with the ",Object(r.b)("inlineCode",{parentName:"p"},"start")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"end")," values of the matching range of text."),Object(r.b)("h2",{id:"decorator-components"},"Decorator Components"),Object(r.b)("p",null,"For your decorated ranges of text, you must define a React component to use\nto render them. These tend to be plain ",Object(r.b)("inlineCode",{parentName:"p"},"span")," elements with CSS classes or\nstyles applied to them."),Object(r.b)("p",null,"In our current example, the ",Object(r.b)("inlineCode",{parentName:"p"},"CompositeDecorator")," object names ",Object(r.b)("inlineCode",{parentName:"p"},"HandleSpan")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"HashtagSpan")," as the components to use for decoration. These are basic\nstateless components:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const HandleSpan = props => {\n  return (\n    <span {...props} style={styles.handle}>\n      {props.children}\n    </span>\n  );\n};\n\nconst HashtagSpan = props => {\n  return (\n    <span {...props} style={styles.hashtag}>\n      {props.children}\n    </span>\n  );\n};\n")),Object(r.b)("p",null,"The Decorator Component will receive various pieces of metadata in ",Object(r.b)("inlineCode",{parentName:"p"},"props"),",\nincluding a copy of the ",Object(r.b)("inlineCode",{parentName:"p"},"contentState"),", the ",Object(r.b)("inlineCode",{parentName:"p"},"entityKey")," if there is one, and the\n",Object(r.b)("inlineCode",{parentName:"p"},"blockKey"),". For a full list of props supplied to a Decorator Component see the\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecorator.js"}),"DraftDecoratorComponentProps type"),"."),Object(r.b)("p",null,"Note that ",Object(r.b)("inlineCode",{parentName:"p"},"props.children")," is passed through to the rendered output. This is\ndone to ensure that the text is rendered within the decorated ",Object(r.b)("inlineCode",{parentName:"p"},"span"),"."),Object(r.b)("p",null,"You can use the same approach for links, as demonstrated in our\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/link"}),"link example"),"."),Object(r.b)("h3",{id:"beyond-compositedecorator"},"Beyond CompositeDecorator"),Object(r.b)("p",null,"The decorator object supplied to an ",Object(r.b)("inlineCode",{parentName:"p"},"EditorState")," need only match the expectations\nof the\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js"}),"DraftDecoratorType"),"\nFlow type definition, which means that you can create any decorator classes\nyou wish, as long as they match the expected type -- you are not bound by\n",Object(r.b)("inlineCode",{parentName:"p"},"CompositeDecorator"),"."),Object(r.b)("h2",{id:"setting-new-decorators"},"Setting new decorators"),Object(r.b)("p",null,"Further, it is acceptable to set a new ",Object(r.b)("inlineCode",{parentName:"p"},"decorator")," value on the ",Object(r.b)("inlineCode",{parentName:"p"},"EditorState"),"\non the fly, during normal state propagation, through immutable means."),Object(r.b)("p",null,"This means that during your app workflow, if your decorator becomes invalid or\nrequires a modification, you can create a new decorator object (or use\n",Object(r.b)("inlineCode",{parentName:"p"},"null")," to remove all decorations) and ",Object(r.b)("inlineCode",{parentName:"p"},"EditorState.set()")," to make use of the new\ndecorator setting."),Object(r.b)("p",null,"For example, if for some reason we wished to disable the creation of @-handle\ndecorations while the user interacts with the editor, it would be fine to do the\nfollowing:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"function turnOffHandleDecorations(editorState) {\n  const onlyHashtags = new CompositeDecorator([\n    {\n      strategy: hashtagStrategy,\n      component: HashtagSpan,\n    },\n  ]);\n  return EditorState.set(editorState, {decorator: onlyHashtags});\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ContentState")," for this ",Object(r.b)("inlineCode",{parentName:"p"},"editorState")," will be re-evaluated with the new\ndecorator, and @-handle decorations will no longer be present in the next\nrender pass."),Object(r.b)("p",null,"Again, this remains memory-efficient due to data persistence across immutable\nobjects."))}p.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,u=d["".concat(c,".").concat(h)]||d[h]||b[h]||r;return n?a.a.createElement(u,i(i({ref:t},l),{},{components:n})):a.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);