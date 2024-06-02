;/*FB_PKG_DELIM*/

__d("Box.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={box:{alignItems:"x1qjc9v5",boxSizing:"x9f619",display:"x78zum5",flexBasis:"xdl72j9",flexDirection:"xdt5ytf",flexShrink:"x2lah0s",minHeight:"x2lwn1j",minWidth:"xeuugli",position:"x1n2onr6",zIndex:"x1ja2u2z",$$css:!0}};b=j.forwardRef(a);function a(a,b){a=babelHelpers["extends"]({},a);var d=a.as;d=d===void 0?"div":d;var e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["as","xstyle"]);return j.jsx(d,babelHelpers["extends"]({},a,{className:(h||(h=c("stylex")))(k.box,e),ref:b}))}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("CometRelativeTimestamp.react",["fbt","react","react-strict-dom","useServerTime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function k(a,b){if(b==="minimized")return h._("__JHASH__fwsgSNrW38G__JHASH__");else if(b==="shortened")return h._("__JHASH__R3_UwncmzVK__JHASH__");return h._("__JHASH__n-vdMzQYLNI__JHASH__")}function l(a,b){return b==="minimized"?h._("__JHASH__-b-qMPARzNx__JHASH__"):h._("__JHASH__7tk0E3psPN9__JHASH__")}function m(a,b){if(b==="minimized")return h._("__JHASH__-dvS8T7Zewj__JHASH__",[h._param("minutes",a,[0])]);else if(b==="shortened")return h._("__JHASH__pJYDYNmcCNm__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__Cf0HUgiMq4T__JHASH__",[h._plural(a,"number")])}function n(a,b){if(b==="minimized")return h._("__JHASH__aQr_BY-obs4__JHASH__",[h._param("minutes",a,[0])]);else if(b==="shortened")return h._("__JHASH__c6NQLZH4ANd__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__hSOa9acW7bb__JHASH__",[h._plural(a,"number")])}function o(a,b){if(b==="minimized")return h._("__JHASH__dJku-irc6Vq__JHASH__",[h._param("hours",a)]);else if(b==="shortened")return h._("__JHASH__fgynbiSDJGc__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__6moQMMAESbv__JHASH__",[h._plural(a,"number")])}function p(a,b){if(b==="minimized")return h._("__JHASH__my9Q52IIrzO__JHASH__",[h._param("hours",a)]);else if(b==="shortened")return h._("__JHASH__aKe8M_AKzI3__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__KshjW5ZSXeJ__JHASH__",[h._plural(a,"number")])}function q(a,b){if(b==="minimized")return h._("__JHASH__7vrBSek8hqf__JHASH__",[h._param("days",a)]);else if(b==="shortened")return h._("__JHASH__U_-41liQBf___JHASH__",[h._plural(a,"number")]);return h._("__JHASH__eOrU59mir58__JHASH__",[h._plural(a,"number")])}function r(a,b){if(b==="minimized")return h._("__JHASH__nR1BpT4JZ-1__JHASH__",[h._param("days",a)]);else if(b==="shortened")return h._("__JHASH__XM9woDyI0RI__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__e25sv98iazf__JHASH__",[h._plural(a,"number")])}function s(a,b){if(b==="minimized")return h._("__JHASH__89wyXCUcNcD__JHASH__",[h._param("weeks",a)]);else if(b==="shortened")return h._("__JHASH__LzV87OP-cnH__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__8Tz4WwYqyWe__JHASH__",[h._plural(a,"number")])}function t(a,b){if(b==="minimized")return h._("__JHASH__6jpt3ZiMeNm__JHASH__",[h._param("weeks",a)]);else if(b==="shortened")return h._("__JHASH__FZjvF7iUhS2__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__KYxoF9she7V__JHASH__",[h._plural(a,"number")])}function u(a,b){if(b==="minimized")return h._("__JHASH__pydgq6srngO__JHASH__",[h._param("years",a)]);else if(b==="shortened")return h._("__JHASH__qHsnROIs1Rn__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__4VLiJAQbl5i__JHASH__",[h._plural(a,"number")])}function v(a,b){if(b==="minimized")return h._("__JHASH__PO71EECf0Ar__JHASH__",[h._param("years",a)]);else if(b==="shortened")return h._("__JHASH__HQno8zOlCSY__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__lP1YxrqVkce__JHASH__",[h._plural(a,"number")])}var w=60,x=60,y=24,z=7,A=365;function B(a,b,c){c===void 0&&(c="normal");a=(a.valueOf()-b.valueOf())/1e3;if(a<w)return k(a,c);b=a/w;a=Math.floor(b);if(a<x)return m(a,c);a=b/x;b=Math.floor(a);if(b<y)return o(b,c);b=a/y;a=Math.floor(b);if(a<z)return q(a,c);else if(b<A){a=Math.floor(b/z);return s(a,c)}a=Math.floor(b/A);return u(a,c)}function a(a,b,c){c===void 0&&(c="normal");b=(b.valueOf()-a.valueOf())/1e3;if(b<w)return l(b,c);a=b/w;b=Math.floor(a);if(b<x)return n(b,c);b=a/x;a=Math.floor(a/x);if(a<y)return p(a,c);a=b/y;b=Math.floor(a);if(b<z)return r(b,c);else if(a<A){b=Math.floor(a/z);return t(b,c)}b=Math.floor(a/A);return v(b,c)}function b(a){var b=a.date;a=a.format;var e=c("useServerTime")();e=B(e,b,a);return j.jsx(d("react-strict-dom").html.span,{suppressHydrationWarning:!0,children:e})}b.displayName=b.name+" [from "+f.id+"]";b.getRelativeTimestamp=B;b.getRelativeTimestampInFuture=a;g["default"]=b}),226);
__d("MWChatSearchResultType",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({GROUP:"group",MESSAGE:"message",PAGE:"page",USER:"user",AI_BOT:"ai_bot"});c=a;f["default"]=c}),66);
__d("IGDAWContactSearchConversionUtils",["MWChatSearchResultType"],(function(a,b,c,d,e,f,g){"use strict";function h(a){var b=a.rawData;return{chatSearchTypeaheadDataEntry:l(a),id:b.id,igid:(a=b.igid)!=null?a:"",imageUrl:b.imageUrl,isDisappearingModeSettingOn:b.isDisappearingModeSettingOn,isE2EE:b.isE2EE,isInstamadilloCutover:b.isInstamadilloCutover,isTTLCClipEnabled:b.isTTLCClipEnabled,isTTLCGenericXMAShareEnabled:b.isTTLCGenericXMAShareEnabled,isTTLCMediaShareEnabled:b.isTTLCMediaShareEnabled,isTTLCStoryShareEnabled:b.isTTLCStoryShareEnabled,secondaryImageUrl:b.secondaryImageUrl,subtext:b.subtext,threadName:b.displayName,ttlcMessageType:b.ttlcMessageType}}function i(a){var b=a.rawData;return{chatSearchTypeaheadDataEntry:l(a),id:b.id,igid:(a=b.igid)!=null?a:"",imageUrl:b.imageUrl,isDisappearingModeSettingOn:b.isDisappearingModeSettingOn,isE2EE:b.isE2EE,isInstamadilloCutover:b.isInstamadilloCutover,isTTLCClipEnabled:b.isTTLCClipEnabled,isTTLCGenericXMAShareEnabled:b.isTTLCGenericXMAShareEnabled,isTTLCMediaShareEnabled:b.isTTLCMediaShareEnabled,isTTLCStoryShareEnabled:b.isTTLCStoryShareEnabled,isVerified:b.verificationStatus==="BLUE_VERIFIED",otherUserId:b.otherUserId,subtext:b.subtext,threadName:b.displayName,ttlcMessageType:b.ttlcMessageType}}function j(a,b){b.set(a.id,{candidate:a,type:"user"})}function k(a,b){b.set(a.id,{candidate:a,type:"thread"})}function a(a){var b=new Map();for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;var g=f.rawData;switch(g.resultType){case c("MWChatSearchResultType").MESSAGE:case c("MWChatSearchResultType").PAGE:break;case c("MWChatSearchResultType").GROUP:k(h(f),b);break;case c("MWChatSearchResultType").USER:j(i(f),b);break;case c("MWChatSearchResultType").AI_BOT:break}}return b}function b(a){a=Array.from(a.values()).filter(function(a){return a.type==="user"}).map(function(a){a=a.candidate;return a.isE2EE&&a.otherUserId!=null?a.otherUserId:a.id});return a}function l(a){var b=a.rawData;a=babelHelpers.objectWithoutPropertiesLoose(a,["rawData"]);b.ttlcMessageType;b=babelHelpers.objectWithoutPropertiesLoose(b,["ttlcMessageType"]);return babelHelpers["extends"]({},a,{rawData:b})}g.convertSearchResultRawDataToIGDThread=h;g.convertSearchResultRawDataToIGDUser=i;g.covertMWContactSearchResultsToIGDCandidates=a;g.getIGDUserCandidateContactIds=b}),98);
__d("IGDCheckboxBadge.react",["IGDSCheckPanoFilledIcon.react","PolarisGenericStrings","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={XL:{borderTopWidth:"xmn4e3e",borderEndWidth:"x10qsr78",borderBottomWidth:"x2x41l1",borderStartWidth:"x19jh3bc",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"xx3o462",width:"x1a00udw",$$css:!0},XXL:{borderTopWidth:"xmn4e3e",borderEndWidth:"x10qsr78",borderBottomWidth:"x2x41l1",borderStartWidth:"x19jh3bc",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"xmix8c7",width:"x1xp8n7a",$$css:!0},badge:{alignItems:"x6s0dn4",backgroundColor:"x1tu34mt",borderTopColor:"xbe7ycp",borderEndColor:"x14f23fw",borderBottomColor:"x5p4dl0",borderStartColor:"x117hm6y",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",display:"x78zum5",justifyContent:"xl56j7k",position:"x10l6tqk",$$css:!0},large:{borderTopWidth:"xmn4e3e",borderEndWidth:"x10qsr78",borderBottomWidth:"x2x41l1",borderStartWidth:"x19jh3bc",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"x1kpxq89",width:"xsmyaan",$$css:!0},medium:{borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"xegnrdp",width:"x1wc42o8",$$css:!0},micro:{borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"xols6we",width:"x1v4s8kt",$$css:!0},small:{borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"xols6we",width:"x1v4s8kt",$$css:!0},tiny:{borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",bottom:"x1ey2m1c",height:"xols6we",start:"x17qophe",left:null,right:null,width:"x1v4s8kt",$$css:!0}};function a(a){var b=j(5);a=a.size;a=l[a];var e;b[0]!==a?(e=(h||(h=c("stylex")))(l.badge,l.large,a),b[0]=a,b[1]=e):e=b[1];b[2]===Symbol["for"]("react.memo_cache_sentinel")?(a=k.jsx(c("IGDSCheckPanoFilledIcon.react"),{alt:d("PolarisGenericStrings").CHECKMARK_FILLED_ICON_ALT,color:"web-always-white",size:8}),b[2]=a):a=b[2];b[3]!==e?(a=k.jsx("div",{className:e,children:a}),b[3]=e,b[4]=a):a=b[4];return a}g["default"]=a}),98);
__d("IGDListCellSelectedContext.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));c=h;e=c.createContext;var j=c.useContext,k=c.c,l=e(!1);function a(a){var b=k(3),c=a.children;a=a.selected;var d;b[0]!==a||b[1]!==c?(d=i.jsx(l.Provider,{value:a,children:c}),b[0]=a,b[1]=c,b[2]=d):d=b[2];return d}function b(){return j(l)}g.IGDListCellSelectedContextProvider=a;g.useIsListCellSelected=b}),98);
__d("IGDPresenceBadge.react",["fbt","CometScreenReaderText.react","IGDListCellSelectedContext.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=(j||(j=d("react"))).c,l=j,m={XL:{borderTopWidth:"xmn4e3e",borderEndWidth:"x10qsr78",borderBottomWidth:"x2x41l1",borderStartWidth:"x19jh3bc",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"xx3o462",width:"x1a00udw",$$css:!0},XXL:{borderTopWidth:"xmn4e3e",borderEndWidth:"x10qsr78",borderBottomWidth:"x2x41l1",borderStartWidth:"x19jh3bc",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"xmix8c7",width:"x1xp8n7a",$$css:!0},badge:{backgroundColor:"x1wyv8x2",borderTopColor:"x1yhmmig",borderEndColor:"xeqyd3i",borderBottomColor:"xyb01ml",borderStartColor:"xdn568n",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",position:"x10l6tqk",$$css:!0},large:{borderTopWidth:"xmn4e3e",borderEndWidth:"x10qsr78",borderBottomWidth:"x2x41l1",borderStartWidth:"x19jh3bc",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"x1kpxq89",width:"xsmyaan",$$css:!0},medium:{borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"xegnrdp",width:"x1wc42o8",$$css:!0},micro:{borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"xols6we",width:"x1v4s8kt",$$css:!0},selected:{borderTopColor:"xbhhrqq",borderEndColor:"x1l5zy3o",borderBottomColor:"x1szfnsn",borderStartColor:"xsp4bbj",$$css:!0},small:{borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,height:"xols6we",width:"x1v4s8kt",$$css:!0},tiny:{borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",bottom:"x1ey2m1c",height:"xols6we",start:"x17qophe",left:null,right:null,width:"x1v4s8kt",$$css:!0}};function a(a){var b=k(7);a=a.size;var e;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._("__JHASH__gUynsz3x2DO__JHASH__"),b[0]=e):e=b[0];e=e;var f=d("IGDListCellSelectedContext.react").useIsListCellSelected();a=m[a];f=f&&m.selected;var g;b[1]!==a||b[2]!==f?(g=(i||(i=c("stylex")))(m.badge,m.large,a,f),b[1]=a,b[2]=f,b[3]=g):g=b[3];b[4]===Symbol["for"]("react.memo_cache_sentinel")?(a=l.jsx(c("CometScreenReaderText.react"),{text:e}),b[4]=a):a=b[4];b[5]!==g?(f=l.jsx("div",{className:g,children:a}),b[5]=g,b[6]=f):f=b[6];return f}g["default"]=a}),226);
__d("IGDSAvatar.react",["CometImage.react","CometPressable.react","IGDSConstants","isStringNullOrEmpty","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={button:{appearance:"xjyslct",backgroundColor:"xjbqb8w",borderTopStyle:"x1ejq31n",borderEndStyle:"xd10rxx",borderBottomStyle:"x1sy0etr",borderStartStyle:"x17r0tee",cursor:"x1ypdohk",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",$$css:!0},container:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x1lliihq",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6","::after_borderTopColor":"xzfakq","::after_borderEndColor":"x7imw91","::after_borderBottomColor":"x1j8hi7x","::after_borderStartColor":"x5aw536","::after_borderTopStartRadius":"x194ut8o","::after_borderTopEndRadius":"x1vzenxt","::after_borderBottomEndRadius":"xd7ygy7","::after_borderBottomStartRadius":"xt298gk","::after_borderTopStyle":"xynf4tj","::after_borderEndStyle":"xdspwft","::after_borderBottomStyle":"x1r9ni5o","::after_borderStartStyle":"x1d52zm6","::after_borderTopWidth":"xoiy6we","::after_borderEndWidth":"x15xhmf9","::after_borderBottomWidth":"x1qj619r","::after_borderStartWidth":"x15tem40","::after_bottom":"x1xrz1ek","::after_content":"x1s928wv","::after_end":"x1n449xj","::after_left":null,"::after_right":null,"::after_pointerEvents":"x2q1x1w","::after_position":"x1j6awrg","::after_start":"x162n7g1","::after_top":"x1m1drc7",$$css:!0},root:{height:"x5yr21d",objectFit:"xl1xv1r",width:"xh8yej3",$$css:!0}};function m(a){var b=j(15),d=a.children,e=a.href,f=a.onClick,g=a.role,h=a.size,i=a.target;a=a.xstyle;var m;b[0]!==e||b[1]!==i?(m=e!=null?{target:i,url:e}:void 0,b[0]=e,b[1]=i,b[2]=m):m=b[2];e=c("IGDSConstants").AVATAR_SIZES[h];i=c("IGDSConstants").AVATAR_SIZES[h];b[3]!==e||b[4]!==i?(h={height:e,width:i},b[3]=e,b[4]=i,b[5]=h):h=b[5];b[6]!==a?(e=[l.button,l.container,a],b[6]=a,b[7]=e):e=b[7];b[8]!==m||b[9]!==f||b[10]!==g||b[11]!==h||b[12]!==e||b[13]!==d?(i=k.jsx(c("CometPressable.react"),{linkProps:m,onPress:f,overlayDisabled:!0,role:g,style:h,xstyle:e,children:d}),b[8]=m,b[9]=f,b[10]=g,b[11]=h,b[12]=e,b[13]=d,b[14]=i):i=b[14];return i}function a(a){var b=j(27),d=a.alt,e=a.href,f=a.onClick,g=a.role,i=a.size,n=a.src,o=a.target;a=a.xstyle;i=i===void 0?"medium":i;var p=!c("isStringNullOrEmpty")(n);if(e!=null||f){var q;b[0]!==p||b[1]!==i||b[2]!==d||b[3]!==n?(q=p?k.jsx(c("CometImage.react"),{alt:d,height:c("IGDSConstants").AVATAR_SIZES[i],src:n,width:c("IGDSConstants").AVATAR_SIZES[i],xstyle:l.root}):null,b[0]=p,b[1]=i,b[2]=d,b[3]=n,b[4]=q):q=b[4];var r;b[5]!==e||b[6]!==f||b[7]!==g||b[8]!==i||b[9]!==o||b[10]!==a||b[11]!==q?(r=k.jsx(m,{href:e,onClick:f,role:g,size:i,target:o,xstyle:a,children:q}),b[5]=e,b[6]=f,b[7]=g,b[8]=i,b[9]=o,b[10]=a,b[11]=q,b[12]=r):r=b[12];return r}b[13]!==a?(e=(h||(h=c("stylex")))(l.container,a),b[13]=a,b[14]=e):e=b[14];f=c("IGDSConstants").AVATAR_SIZES[i];g=c("IGDSConstants").AVATAR_SIZES[i];b[15]!==f||b[16]!==g?(o={height:f,width:g},b[15]=f,b[16]=g,b[17]=o):o=b[17];b[18]!==p||b[19]!==i||b[20]!==d||b[21]!==n?(q=p?k.jsx(c("CometImage.react"),{alt:d,height:c("IGDSConstants").AVATAR_SIZES[i],src:n,width:c("IGDSConstants").AVATAR_SIZES[i],xstyle:l.root}):null,b[18]=p,b[19]=i,b[20]=d,b[21]=n,b[22]=q):q=b[22];b[23]!==e||b[24]!==o||b[25]!==q?(r=k.jsx("span",{className:e,style:o,children:q}),b[23]=e,b[24]=o,b[25]=q,b[26]=r):r=b[26];return r}g["default"]=a}),98);
__d("IGDFacepile.react",["IGDCheckboxBadge.react","IGDPresenceBadge.react","IGDSAvatar.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={"default":{paddingTop:"x1nn3v0j",paddingEnd:"xg83lxy",paddingBottom:"x1120s5i",paddingStart:"x1h0ha7o",$$css:!0},frontAvatar:{backgroundColor:"xvbhtw8",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",bottom:"x1ey2m1c",end:"xds687c",position:"x10l6tqk",$$css:!0},small:{paddingTop:"x4p5aij",paddingEnd:"x19um543",paddingBottom:"x1j85h84",paddingStart:"x1m6msm",$$css:!0}};function m(a,b){if(b==="XL")return["large","74px"];else if(b==="medium"||b==="tiny")if(a)return["extraSmall","32px"];else return["small","44px"];else if(b==="XXL"&&!a)return["XLFacepile","96px"];else return["facepile","56px"]}function n(a,b){if(b==="medium"||b==="tiny")if(a)return"small";else return"medium";else if(b==="XXL")return"XXL";else if(b==="XL")return"XL";else return"large"}function a(a){var b=j(33),d=a.firstParticipantURI,e=a.isActive,f=a.isMobile,g=a.isSelected,i=a.secondParticipantURI;a=a.size;e=e===void 0?!1:e;f=f===void 0?!1:f;g=g===void 0?!1:g;var o;b[0]!==f||b[1]!==a?(o=m(f,a),b[0]=f,b[1]=a,b[2]=o):o=b[2];o=o;var p=o[0];o=o[1];var q;b[3]!==f||b[4]!==a?(q=n(f,a),b[3]=f,b[4]=a,b[5]=q):q=b[5];f=q;b[6]===Symbol["for"]("react.memo_cache_sentinel")?(q="x1n2onr6",b[6]=q):q=b[6];var r;b[7]!==o?(r={height:o,width:o},b[7]=o,b[8]=r):r=b[8];b[9]!==p||b[10]!==d?(o=k.jsx(c("IGDSAvatar.react"),{alt:"",size:p,src:d}),b[9]=p,b[10]=d,b[11]=o):o=b[11];d=a==="medium"?l.small:l["default"];b[12]!==d?(a=(h||(h=c("stylex")))(l.frontAvatar,d),b[12]=d,b[13]=a):a=b[13];b[14]!==p||b[15]!==i?(d=k.jsx(c("IGDSAvatar.react"),{alt:"",size:p,src:i}),b[14]=p,b[15]=i,b[16]=d):d=b[16];b[17]!==a||b[18]!==d?(p=k.jsx("div",{className:a,children:d}),b[17]=a,b[18]=d,b[19]=p):p=b[19];b[20]!==e||b[21]!==g||b[22]!==f?(i=e&&!g?k.jsx(c("IGDPresenceBadge.react"),{size:f}):null,b[20]=e,b[21]=g,b[22]=f,b[23]=i):i=b[23];b[24]!==g||b[25]!==f?(a=g?k.jsx(c("IGDCheckboxBadge.react"),{size:f}):null,b[24]=g,b[25]=f,b[26]=a):a=b[26];b[27]!==r||b[28]!==o||b[29]!==p||b[30]!==i||b[31]!==a?(d=k.jsxs("div",{className:q,style:r,children:[o,p,i,a]}),b[27]=r,b[28]=o,b[29]=p,b[30]=i,b[31]=a,b[32]=d):d=b[32];return d}g["default"]=a}),98);
__d("IGDMobileNavigationButton.react",["fbt","IGDSArrowLeftPanoOutlineIcon.react","IGDSIconButton.react","Locale","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=(j||(j=d("react"))).c,l=j,m=h._("__JHASH__rrOQmK5jiwk__JHASH__"),n={root:{marginEnd:"xq8finb",marginLeft:null,marginRight:null,$$css:!0},rtl:{transform:"x19jd1h0",$$css:!0}};function a(a){var b=k(4);a=a.onClick;a=a;var d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=(i||(i=c("stylex")))(c("Locale").isRTL()?n.rtl:null),b[0]=d):d=b[0];b[1]===Symbol["for"]("react.memo_cache_sentinel")?(d=l.jsx("span",{className:d,children:l.jsx(c("IGDSArrowLeftPanoOutlineIcon.react"),{alt:m,color:"ig-primary-text",size:24})}),b[1]=d):d=b[1];b[2]!==a?(d=l.jsx(c("IGDSIconButton.react"),{onClick:a,padding:0,xstyle:n.root,children:d}),b[2]=a,b[3]=d):d=b[3];return d}g["default"]=a}),226);
__d("IGDSectionHeader.react",["IGDSectionHeaderLayout.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(11),c=a.children,e=a.endAdornment,f=a.isMobile,g=a.noBottomBorder,h=a.startAdornment;a=a.xstyle;g=g===void 0?!1:g;var k;b[0]!==h?(k=h!=null?j.jsx(d("IGDSectionHeaderLayout.react").StartAdornment,{children:h}):null,b[0]=h,b[1]=k):k=b[1];h=k;b[2]!==e?(k=e!=null?j.jsx(d("IGDSectionHeaderLayout.react").EndAdornment,{children:e}):null,b[2]=e,b[3]=k):k=b[3];e=k;b[4]!==f||b[5]!==g||b[6]!==a||b[7]!==h||b[8]!==c||b[9]!==e?(k=j.jsxs(d("IGDSectionHeaderLayout.react").Container,{isMobile:f,noBottomBorder:g,xstyle:a,children:[h,c,e]}),b[4]=f,b[5]=g,b[6]=a,b[7]=h,b[8]=c,b[9]=e,b[10]=k):k=b[10];return k}g["default"]=a}),98);
__d("IGDSingleAvatar.react",["fbt","IGDCheckboxBadge.react","IGDPresenceBadge.react","IGDSAvatar.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i,l={disabled:{opacity:"xbyyjgo",$$css:!0}};function m(a,b){if(a)switch(b){case"micro":return["micro","14px"];case"tiny":return["tiny","24px"];case"medium":return["small","32px"];case"XL":return["XL","74px"];case"XXL":return["large","56px"];default:return["large","56px"]}else switch(b){case"micro":return["micro","14px"];case"medium":return["medium","44px"];case"XL":return["XL","74px"];case"XXL":return["XXL","96px"];default:return["large","56px"]}}function a(a){var b=j(25),d=a.alt,e=a.isActive,f=a.isDisabled,g=a.isMobile,i=a.isSelected,n=a.size;a=a.src;d=d===void 0?null:d;e=e===void 0?!1:e;f=f===void 0?!1:f;g=g===void 0?!1:g;i=i===void 0?!1:i;var o;b[0]!==g||b[1]!==n?(o=m(g,n),b[0]=g,b[1]=n,b[2]=o):o=b[2];g=o;n=g[0];o=g[1];b[3]===Symbol["for"]("react.memo_cache_sentinel")?(g="x1n2onr6",b[3]=g):g=b[3];var p;b[4]!==o?(p={height:o,width:o},b[4]=o,b[5]=p):p=b[5];if(b[6]!==d){o=(o=d)!=null?o:h._("__JHASH__AaftAxxA2c6__JHASH__");b[6]=d;b[7]=o}else o=b[7];d=f?l.disabled:void 0;b[8]!==o||b[9]!==n||b[10]!==a||b[11]!==d?(f=k.jsx(c("IGDSAvatar.react"),{alt:o,size:n,src:a,xstyle:d}),b[8]=o,b[9]=n,b[10]=a,b[11]=d,b[12]=f):f=b[12];b[13]!==e||b[14]!==i||b[15]!==n?(o=e&&!i?k.jsx(c("IGDPresenceBadge.react"),{size:n}):null,b[13]=e,b[14]=i,b[15]=n,b[16]=o):o=b[16];b[17]!==i||b[18]!==n?(a=i?k.jsx(c("IGDCheckboxBadge.react"),{size:n}):null,b[17]=i,b[18]=n,b[19]=a):a=b[19];b[20]!==p||b[21]!==f||b[22]!==o||b[23]!==a?(d=k.jsxs("div",{className:g,style:p,children:[f,o,a]}),b[20]=p,b[21]=f,b[22]=o,b[23]=a,b[24]=d):d=b[24];return d}g["default"]=a}),226);
__d("IGDThreadListNewMessageDialogEntrypointProvider.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));c=h;e=c.createContext;var j=c.useContext;c.useMemo;var k=c.c,l=e({});function a(a){var b=k(5),c=a.children;a=a.entrypoint;var d;b[0]!==a?(d={entrypoint:a},b[0]=a,b[1]=d):d=b[1];a=d;d=a;b[2]!==d||b[3]!==c?(a=i.jsx(l.Provider,{value:d,children:c}),b[2]=d,b[3]=c,b[4]=a):a=b[4];return a}function b(){var a=j(l);return a.entrypoint}g.IGDThreadListNewMessageDialogEntrypointProvider=a;g.useIGDThreadListNewMessageDialogEntrypoint=b}),98);
__d("LSWhatsAppConnectStatus",[],(function(a,b,c,d,e,f){a=Object.freeze({WHATSAPP_NOT_ADDRESSABLE:0,WHATSAPP_ADDRESSABLE:1,WHATSAPP_DUAL_SEND_ELIGIBLE:2,WHATSAPP_DUAL_SEND_WEB_ELIGIBLE:3,WHATSAPP_DUAL_SEND_XAPP_ELIGIBLE:4,WHATSAPP_DST_ELIGIBLE:5,WHATSAPP_GDST_ELIGIBLE:9,WHATSAPP_DST_GDST_ELIGIBLE:13,WHATSAPP_DSI_ELIGIBLE:17,WHATSAPP_DST_DSI_ELIGIBLE:21,WHATSAPP_GDST_DSI_ELIGIBLE:25,WHATSAPP_DST_GDST_DSI_ELIGIBLE:29,WHATSAPP_DST_REAL_TEXT_SHADOW_ELIGIBLE:33});f["default"]=a}),66);
__d("getLSMediaThreadPictureUrl",["LSMediaUrlUtils","rewriteFallbackUrl"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.threadPictureUrl,e=a.threadPictureUrlExpirationTimestampMs;a=a.threadPictureUrlFallback;e=e;return e!=null&&d("LSMediaUrlUtils").isTimestampExpired(e)?c("rewriteFallbackUrl")(a):b}g["default"]=a}),98);
__d("getWarningCardStorageKey",[],(function(a,b,c,d,e,f){"use strict";function a(a){return"__BlockOrRestrictUserInterstitial."+a+"__"}f["default"]=a}),66);