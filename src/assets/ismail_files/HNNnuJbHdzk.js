;/*FB_PKG_DELIM*/

__d("PolarisAPIOneTapGetNonce",["PolarisInstapi"],(function(a,b,c,d,e,f,g){"use strict";function a(){return d("PolarisInstapi").apiPost("/api/v1/web/accounts/request_one_tap_login_nonce/",{}).then(function(a){return a.data})}g.oneTapGetNonce=a}),98);
__d("PolarisGenericOnboardingUnit.react",["IGDSBox.react","PolarisIGCoreButton.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(22),d=a.bodyText,e=a.buttonDisabled,f=a.buttonText,g=a.footer,h=a.headerText,k=a.hideAction,l=a.icon,m=a.isProcessing;a=a.onButtonClick;k=k===void 0?!1:k;var n;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(n="xyamay9 x1o0k56v x1l90r2v x4ge4z1 x2b8uid",b[0]=n):n=b[0];var o;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(o="x78zum5 xdt5ytf x199bjlz x10v00f9",b[1]=o):o=b[1];var p;b[2]!==l?(p=j.jsx(c("IGDSBox.react"),{alignItems:"center",alignSelf:"center",direction:"column",justifyContent:"center",position:"relative",children:l}),b[2]=l,b[3]=p):p=b[3];b[4]===Symbol["for"]("react.memo_cache_sentinel")?(l="x1qjc9v5 x9f619 x78zum5 xdt5ytf x2lah0s xln7xf2 xk390pu x1s688f xk9mzb7 x1n2onr6 x11njtxf",b[4]=l):l=b[4];b[5]!==h?(l=j.jsx("div",{className:l,children:h}),b[5]=h,b[6]=l):l=b[6];b[7]===Symbol["for"]("react.memo_cache_sentinel")?(h="x1qjc9v5 x9f619 x1roi4f4 x78zum5 xdt5ytf x2lah0s xln7xf2 xk390pu x1aawmmo x11i5rnm x1fqp7bg x1mh8g0r x1n2onr6 x11njtxf",b[7]=h):h=b[7];b[8]!==d?(h=j.jsx("div",{className:h,children:d}),b[8]=d,b[9]=h):h=b[9];b[10]!==k||b[11]!==e||b[12]!==m||b[13]!==a||b[14]!==f?(d=!k&&j.jsx(c("PolarisIGCoreButton.react"),{disabled:e,loading:m,onClick:a,children:f}),b[10]=k,b[11]=e,b[12]=m,b[13]=a,b[14]=f,b[15]=d):d=b[15];b[16]!==p||b[17]!==l||b[18]!==h||b[19]!==d||b[20]!==g?(k=j.jsx("section",{className:n,children:j.jsxs("div",{className:o,children:[p,l,h,d,g]})}),b[16]=p,b[17]=l,b[18]=h,b[19]=d,b[20]=g,b[21]=k):k=b[21];return k}g["default"]=a}),98);
__d("PolarisOneTapActions",["PolarisAPIOneTapGetNonce","PolarisLoginLogger","PolarisOneTapLogin","nullthrows","polarisUserSelectors"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return function(b,e){b({type:"ONE_TAP_GET_NONCE_ATTEMPTED"}),d("PolarisLoginLogger").logLoginEvent({event_name:"one_tap_get_nonce",login_type:"device_based_login"}),d("PolarisAPIOneTapGetNonce").oneTapGetNonce().then(function(b){if(b.login_nonce!=null&&b.login_nonce!==""){var f,g=e();g=(f=c("nullthrows"))(d("polarisUserSelectors").getViewer__DEPRECATED(g));d("PolarisOneTapLogin").addLoginNonce(g.id,String(f(b.login_nonce)),f(g.username),f(g.profilePictureUrl));d("PolarisLoginLogger").logLoginEvent({event_name:"one_tap_get_nonce_success",login_type:"device_based_login"});a()}},function(){b({type:"ONE_TAP_GET_NONCE_FAILED"}),d("PolarisLoginLogger").logLoginEvent({event_name:"one_tap_get_nonce_failed",login_type:"device_based_login"}),a()})}}function b(){return function(a,b){b=b();b=b.oneTap.editMode;d("PolarisLoginLogger").logLoginEvent({event_name:b?"one_tap_login_done_editing_click":"one_tap_login_manage_accounts_click",login_type:"device_based_login"});a({type:"ONE_TAP_MANAGE_ACCOUNTS_CLICK"})}}g.oneTapLoginGetNonce=a;g.manageAccountsClick=b}),98);