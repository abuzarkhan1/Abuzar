;/*FB_PKG_DELIM*/

__d("PolarisStoriesHighlightsRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisStoriesHighlightsRoot.react").__setRef("PolarisStoriesHighlightsRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisStoriesHighlightsRoot.react",["PolarisConfig","PolarisLinkBuilder","PolarisReactRedux.react","PolarisStoriesComponent.react","PolarisStoryActions","promiseDone","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useState,l=b.c;function a(a){var b=l(13);a=a.props;a=a.routeProps;var e=a.highlight_id,f=a.latest_reel_updated,g=a.show_qr_modal,h=a.user,m=d("PolarisReactRedux.react").useDispatch();a=k(!1);var n=a[0],o=a[1];a=k(!1);var p=a[0],q=a[1];b[0]===Symbol["for"]("react.memo_cache_sentinel")?(a=d("PolarisConfig").isLoggedIn(),b[0]=a):a=b[0];a=a;if(!a&&e!=null){var r=d("PolarisLinkBuilder").buildHighlightStoryLink(e);m(d("PolarisStoryActions").initStoryAuth(r))}var s;b[1]!==n||b[2]!==p||b[3]!==m||b[4]!==e||b[5]!==f||b[6]!==h?(r=function(){!n&&!p&&(q(!0),c("promiseDone")(m(d("PolarisStoryActions").initStoryPage({highlightReelId:e,latestReelUpdatedTime:f,owner:h})).then(function(){o(!0),q(!1)})))},s=[m,e,n,f,p,h],b[1]=n,b[2]=p,b[3]=m,b[4]=e,b[5]=f,b[6]=h,b[7]=r,b[8]=s):(r=b[7],s=b[8]);j(r,s);r=n===!1;b[9]!==r||b[10]!==g||b[11]!==h.username?(s=i.jsx(c("PolarisStoriesComponent.react"),{entrypoint:"highlight",initializing:r,showQRModal:g,username:h.username,viewerIsLoggedIn:a}),b[9]=r,b[10]=g,b[11]=h.username,b[12]=s):s=b[12];return s}g["default"]=a}),98);
__d("useVideoPlayerAvailableCaptionsLocalesFromRelay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useVideoPlayerAvailableCaptionsLocalesFromRelay_video",selections:[{alias:null,args:null,concreteType:"VideoCaptionLocale",kind:"LinkedField",name:"video_available_captions_locales",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"localized_creation_method",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"captions_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"locale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"localized_language",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"localized_country",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("useVideoPlayerAvailableCaptionsLocalesFromRelay",["CometRelay","react","useVideoPlayerAvailableCaptionsLocalesFromRelay_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).useMemo;function a(a){var c=d("CometRelay").useFragment(h!==void 0?h:h=b("useVideoPlayerAvailableCaptionsLocalesFromRelay_video.graphql"),a);a=j(function(){var a;return c==null?void 0:(a=c.video_available_captions_locales)==null?void 0:a.map(function(a){return{captionsUrl:a.captions_url,locale:a.locale,localizedCountry:a.localized_country,localizedCreationMethod:a.localized_creation_method,localizedLanguage:a.localized_language}})},[c==null?void 0:c.video_available_captions_locales]);return a}g["default"]=a}),98);