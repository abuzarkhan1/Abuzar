;/*FB_PKG_DELIM*/

__d("IGDSXPanoOutline24.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({"data-name":"Layer 1",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("path",{d:"m13.414 12 7.293-7.293a1 1 0 1 0-1.414-1.414L12 10.586 4.707 3.293a1 1 0 1 0-1.414 1.414L10.586 12l-7.293 7.293a1 1 0 1 0 1.414 1.414L12 13.414l7.293 7.293a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12z"})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("PolarisAYMLFollowChainingListLoggedOutQuery.graphql",["PolarisAYMLFollowChainingListLoggedOutQuery_instagramRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"owner_id"}],c=[{kind:"Variable",name:"owner_id",variableName:"owner_id"}],d={alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"profile_pic_url",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"PolarisAYMLFollowChainingListLoggedOutQuery",selections:[{alias:null,args:c,concreteType:"XDTChainingResponse",kind:"LinkedField",name:"xdt_ayml_logged_out",plural:!1,selections:[{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"users",plural:!0,selections:[d,e,{kind:"RequiredField",field:f,action:"THROW",path:"xdt_ayml_logged_out.users.pk"},g,h,{args:null,kind:"FragmentSpread",name:"PolarisFollowChainingList_suggested_users"}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"PolarisAYMLFollowChainingListLoggedOutQuery",selections:[{alias:null,args:c,concreteType:"XDTChainingResponse",kind:"LinkedField",name:"xdt_ayml_logged_out",plural:!1,selections:[{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"users",plural:!0,selections:[d,e,f,g,h,{alias:null,args:null,kind:"ScalarField",name:"is_private",storageKey:null},{alias:null,args:null,concreteType:"XDTRelationshipInfoDict",kind:"LinkedField",name:"friendship_status",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"blocking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_feed_favorite",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"following",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"outgoing_request",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followed_by",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"incoming_request",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_restricted",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_bestie",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTSupervisionInfo",kind:"LinkedField",name:"supervision_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_guardian_of_viewer",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_supervised_by_viewer",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("PolarisAYMLFollowChainingListLoggedOutQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisAYMLFollowChainingListLoggedOutQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("PolarisFollowCard_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisFollowCard_media",selections:[{args:null,kind:"FragmentSpread",name:"PolarisSuggestedUserFollowButton_media"}],type:"XDTUserDict",abstractKey:null};e.exports=a}),null);
__d("PolarisFollowChainingListItem.next.react",["BaseButton.react","IGDSBox.react","IGDSDivider.react","IGDSXPanoOutline24.svg.react","InstagramODS","PolarisGenericStrings","PolarisLogger","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={dismissButton:{":active_opacity":"x1d5wrs8",$$css:!0}},l={loggedInCTA:{padding:3},loggedOutCTA:{marginBottom:3,marginEnd:8,marginStart:8}};function a(a){var b=i(41),e=a.analyticsContext,f=a.clickPoint,g=a.icon,h=a.isLoggedOutAYML,m=a.onClick,n=a.onDismissed,o=a.position,p=a.primaryCta,q=a.primaryText,r=a.renderItemFooter;a=a.secondaryText;h=h===void 0?!1:h;var s;b[0]!==e||b[1]!==f?(s=function(a){e&&(d("PolarisLogger").logAction("chainingClick",{source:e,source_of_action:f,target:a}),c("InstagramODS").incr("web.chaining.click"))},b[0]=e,b[1]=f,b[2]=s):s=b[2];var t=s;b[3]!==t||b[4]!==n?(s=function(a){t("dismiss"),n&&n(),a.stopPropagation()},b[3]=t,b[4]=n,b[5]=s):s=b[5];s=s;var u;b[6]!==t||b[7]!==m?(u=function(){t("other"),m&&m()},b[6]=t,b[7]=m,b[8]=u):u=b[8];u=u;var v;b[9]===Symbol["for"]("react.memo_cache_sentinel")?(v="xvbhtw8 x1yvgwvq x1dqoszc x1ixjvfu xhk4uv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x9f619 x78zum5 xdt5ytf",b[9]=v):v=b[9];var w;b[10]!==n||b[11]!==s?(w=n&&j.jsx("div",{className:"xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x1ypdohk xds687c xsag5q8 x1iji9kk x1ye3gou x889kno x10l6tqk x13vifvy x1vjfegm",children:j.jsx(c("BaseButton.react"),{"aria-label":d("PolarisGenericStrings").DISMISS_TEXT,onClick:s,xstyle:k.dismissButton,children:j.jsx(c("IGDSXPanoOutline24.svg.react"),{color:"#9a9a9a"})})}),b[10]=n,b[11]=s,b[12]=w):w=b[12];b[13]===Symbol["for"]("react.memo_cache_sentinel")?(s="x6s0dn4 x78zum5 xdt5ytf xl56j7k xz9dl7a xn6708d xwib8y2 x1ye3gou",b[13]=s):s=b[13];var x;b[14]!==g?(x=j.jsx(c("IGDSBox.react"),{marginBottom:1,marginTop:3,children:g}),b[14]=g,b[15]=x):x=b[15];b[16]!==q?(g=j.jsx(c("IGDSBox.react"),{alignItems:"center",direction:"row",display:"flex",height:16,justifyContent:"center",marginBottom:2,marginTop:1,width:"100%",children:q}),b[16]=q,b[17]=g):g=b[17];b[18]!==a?(q=j.jsx(c("IGDSBox.react"),{alignItems:"start",direction:"row",display:"flex",height:36,justifyContent:"start",marginBottom:1,children:a}),b[18]=a,b[19]=q):q=b[19];b[20]!==r||b[21]!==o?(a=r==null?void 0:r(o),b[20]=r,b[21]=o,b[22]=a):a=b[22];b[23]!==x||b[24]!==g||b[25]!==q||b[26]!==a?(r=j.jsxs("div",{className:s,children:[x,g,q,a]}),b[23]=x,b[24]=g,b[25]=q,b[26]=a,b[27]=r):r=b[27];b[28]!==u||b[29]!==w||b[30]!==r?(o=j.jsxs(c("BaseButton.react"),{onClick:u,children:[w,r]}),b[28]=u,b[29]=w,b[30]=r,b[31]=o):o=b[31];b[32]!==h?(s=h?null:j.jsx(c("IGDSDivider.react"),{}),b[32]=h,b[33]=s):s=b[33];x=h?l.loggedOutCTA:l.loggedInCTA;b[34]!==x||b[35]!==p?(g=j.jsx(c("IGDSBox.react"),babelHelpers["extends"]({},x,{children:p})),b[34]=x,b[35]=p,b[36]=g):g=b[36];b[37]!==o||b[38]!==s||b[39]!==g?(q=j.jsxs("div",{className:v,"data-testid":void 0,children:[o,s,g]}),b[37]=o,b[38]=s,b[39]=g,b[40]=q):q=b[40];return q}g["default"]=a}),98);
__d("PolarisSuggestedUserFollowButton_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisSuggestedUserFollowButton_media",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"pk"},{args:null,kind:"FragmentSpread",name:"PolarisUnfollowDialog_user"},{args:null,kind:"FragmentSpread",name:"usePolarisGetRelationshipFragment_user"}],type:"XDTUserDict",abstractKey:null};e.exports=a}),null);
__d("PolarisSuggestedUserFollowButton.next.react",["CometRelay","IGDSButton.react","PolarisConnectionsLogger","PolarisErrorBoundary.react","PolarisPostStrings","PolarisStoriesLoggingUtils","PolarisSuggestedUserFollowButton_media.graphql","PolarisUnfollowDialog.next.react","react","usePolarisGetRelationshipFragment"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useState,l=e.c;function a(a){var e=l(21),f=a.analyticsContext,g=a.clickPoint,i=a.index,m=a.isFollowedByViewer,n=a.isLoggedOutAYML,o=a.logFollowButtonClick,p=a.onFollowUser,q=a.onUnfollowUser;a=a.users;n=n===void 0?!1:n;var r=k(!1),s=r[0],t=r[1],u=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisSuggestedUserFollowButton_media.graphql"),a),v=c("usePolarisGetRelationshipFragment")(u);e[0]!==o||e[1]!==v||e[2]!==g||e[3]!==f||e[4]!==u.pk||e[5]!==m||e[6]!==p?(r=function(){o();var a=d("PolarisStoriesLoggingUtils").getLoggingFollowStatus(v);d("PolarisConnectionsLogger").logConnectionAction({clickPoint:g,containerModule:f,eventName:"follow_button_tapped",followStatus:a,targetId:u.pk});m?t(!0):p(u.pk)},e[0]=o,e[1]=v,e[2]=g,e[3]=f,e[4]=u.pk,e[5]=m,e[6]=p,e[7]=r):r=e[7];a=r;r=u.pk+"-"+i;i=m?d("PolarisPostStrings").FOLLOWING_TEXT:d("PolarisPostStrings").FOLLOW_TEXT;n=n?"primary":"primary_link";var w;e[8]!==i||e[9]!==a||e[10]!==n?(w=j.jsx(c("IGDSButton.react"),{display:"block",label:i,onClick:a,variant:n}),e[8]=i,e[9]=a,e[10]=n,e[11]=w):w=e[11];e[12]!==s||e[13]!==f||e[14]!==q||e[15]!==u?(i=s&&j.jsx(c("PolarisUnfollowDialog.next.react"),{analyticsContext:f,onClose:function(){t(!1)},onUnfollowUser:q,user:u}),e[12]=s,e[13]=f,e[14]=q,e[15]=u,e[16]=i):i=e[16];e[17]!==r||e[18]!==w||e[19]!==i?(a=j.jsxs(c("PolarisErrorBoundary.react"),{children:[w,i]},r),e[17]=r,e[18]=w,e[19]=i,e[20]=a):a=e[20];return a}g["default"]=a}),98);
__d("PolarisFollowCard.next.react",["invariant","CometRelay","IGDSBox.react","IGDSText.react","IGDSVerifiedBadge.react","InstagramODS","PolarisConnectionsLogger","PolarisFollowCard_media.graphql","PolarisFollowChainingListItem.next.react","PolarisLinkBuilder","PolarisLogger","PolarisSuggestedUserFollowButton.next.react","PolarisUserAvatar.react","PolarisUserLink.react","isStringNullOrEmpty","react","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=(j||(j=d("react"))).c,l=j,m=77,n=74;function o(a,b,e){d("PolarisLogger").logAction("chainingClick",{source:b,source_of_action:e,target:a}),c("InstagramODS").incr("web.chaining.click")}function p(a){var b=k(8),d=a.analyticsContext,e=a.clickPoint,f=a.isSmallScreen,g=a.profilePictureUrl;a=a.username;var h;b[0]!==d||b[1]!==e?(h=function(a){o("avatar",d,e),a.stopPropagation()},b[0]=d,b[1]=e,b[2]=h):h=b[2];h=h;f=f?m:n;var i;b[3]!==h||b[4]!==g||b[5]!==f||b[6]!==a?(i=l.jsx(c("PolarisUserAvatar.react"),{canTabFocus:!1,isLink:!0,onClick:h,profilePictureUrl:g,size:f,username:a}),b[3]=h,b[4]=g,b[5]=f,b[6]=a,b[7]=i):i=b[7];return i}function q(a){var b=k(10),d=a.analyticsContext,e=a.clickPoint,f=a.isFollowedByViewer,g=a.isLoggedOutAYML,h=a.logFollowButtonClick,i=a.onFollowUser,j=a.onUnfollowerUser,m=a.position;a=a.users;g=g===void 0?!1:g;var n;b[0]!==d||b[1]!==e||b[2]!==m||b[3]!==f||b[4]!==g||b[5]!==h||b[6]!==i||b[7]!==j||b[8]!==a?(n=l.jsx(c("PolarisSuggestedUserFollowButton.next.react"),{analyticsContext:d,clickPoint:e,index:m,isFollowedByViewer:f,isLoggedOutAYML:g,logFollowButtonClick:h,onFollowUser:i,onUnfollowUser:j,users:a}),b[0]=d,b[1]=e,b[2]=m,b[3]=f,b[4]=g,b[5]=h,b[6]=i,b[7]=j,b[8]=a,b[9]=n):n=b[9];return n}function r(a){var b=k(11),d=a.fullName,e=a.handleUsernameClick,f=a.isVerified,g=a.showDescription,i=a.suggestionDescription;a=a.username;c("isStringNullOrEmpty")(a)&&h(0,51399);f!=null||h(0,51398);g=g&&i!=null;i=g&&d!=null&&d!==""&&d.length>0?d:a;b[0]!==i?(g=l.jsx(c("IGDSText.react").BodyEmphasized,{maxLines:1,children:i}),b[0]=i,b[1]=g):g=b[1];b[2]!==e||b[3]!==a||b[4]!==g?(d=l.jsx(c("IGDSBox.react"),{display:"flex",flex:"grow",maxWidth:"fit-content",children:l.jsx(c("PolarisUserLink.react"),{"data-testid":void 0,onClick:e,username:a,children:g})}),b[2]=e,b[3]=a,b[4]=g,b[5]=d):d=b[5];b[6]!==f?(i=f&&l.jsx(c("IGDSBox.react"),{"data-testid":void 0,marginStart:1,children:l.jsx(c("IGDSVerifiedBadge.react"),{size:"small"})}),b[6]=f,b[7]=i):i=b[7];b[8]!==d||b[9]!==i?(e=l.jsxs(c("IGDSBox.react"),{direction:"row",display:"flex",justifyContent:"center",width:"100%",children:[d,i]}),b[8]=d,b[9]=i,b[10]=e):e=b[10];return e}function s(a){var b=k(2),d=a.fullName,e=a.showDescription;a=a.suggestionDescription;e=e&&a!=null?a:d;b[0]!==e?(a=l.jsx(c("IGDSText.react"),{color:"secondaryText",maxLines:2,textAlign:"center",children:e}),b[0]=e,b[1]=a):a=b[1];return a}function a(a){var e=k(62),f=a.analyticsContext,g=a.clickPoint,j=a.impressionModule,m=a.isLoggedOutAYML,n=a.isSmallScreen,t=a.onDismissed,u=a.onFollowUser,v=a.onUnfollowerUser,w=a.position,x=a.renderItemFooter,y=a.showDescription,z=a.user;a=a.users;m=m===void 0?!1:m;a=d("CometRelay").useFragment(i!==void 0?i:i=b("PolarisFollowCard_media.graphql"),a);var A=z.fullName,B=z.id,C=z.isFollowedByViewer,D=z.isVerified,E=z.profilePictureUrl,F=z.suggestionDescription,G=z.username;e[0]!==f||e[1]!==w||e[2]!==B||e[3]!==j?(z=function(a){d("PolarisConnectionsLogger").logConnectionAction({containerModule:f,eventName:a,position:w,targetId:B,viewModule:j})},e[0]=f,e[1]=w,e[2]=B,e[3]=j,e[4]=z):z=e[4];var H=z,I=j===d("PolarisConnectionsLogger").VIEW_MODULES.web_profile_chaining,J=c("useCometRouterDispatcher")();e[5]!==f||e[6]!==g||e[7]!==H||e[8]!==I?(z=function(a){o("username",f,g),H(I?"similar_username_tapped":"recommended_username_tapped"),a.stopPropagation()},e[5]=f,e[6]=g,e[7]=H,e[8]=I,e[9]=z):z=e[9];z=z;var K;e[10]!==f||e[11]!==g||e[12]!==H||e[13]!==I?(K=function(){o("follow",f,g),H(I?"similar_user_follow_button_tapped":"recommended_follow_button_tapped")},e[10]=f,e[11]=g,e[12]=H,e[13]=I,e[14]=K):K=e[14];K=K;var L;e[15]!==H||e[16]!==I||e[17]!==t||e[18]!==B?(L=function(){H(I?"similar_user_dismiss_tapped":"recommended_user_dismissed"),t&&t(B)},e[15]=H,e[16]=I,e[17]=t,e[18]=B,e[19]=L):L=e[19];L=L;var M;e[20]!==G||e[21]!==J?(M=function(){c("isStringNullOrEmpty")(G)&&h(0,51399);var a=d("PolarisLinkBuilder").buildUserLink(G);J==null?void 0:J.go(a,{})},e[20]=G,e[21]=J,e[22]=M):M=e[22];M=M;var N;e[23]!==f||e[24]!==g||e[25]!==n||e[26]!==E||e[27]!==G?(N=l.jsx(p,{analyticsContext:f,clickPoint:g,isSmallScreen:n,profilePictureUrl:E,username:G}),e[23]=f,e[24]=g,e[25]=n,e[26]=E,e[27]=G,e[28]=N):N=e[28];n=t?L:null;e[29]!==f||e[30]!==g||e[31]!==C||e[32]!==m||e[33]!==K||e[34]!==u||e[35]!==v||e[36]!==w||e[37]!==a?(E=l.jsx(q,{analyticsContext:f,clickPoint:g,isFollowedByViewer:C,isLoggedOutAYML:m,logFollowButtonClick:K,onFollowUser:u,onUnfollowerUser:v,position:w,users:a}),e[29]=f,e[30]=g,e[31]=C,e[32]=m,e[33]=K,e[34]=u,e[35]=v,e[36]=w,e[37]=a,e[38]=E):E=e[38];e[39]!==A||e[40]!==z||e[41]!==D||e[42]!==y||e[43]!==F||e[44]!==G?(L=l.jsx(r,{fullName:A,handleUsernameClick:z,isVerified:D,showDescription:y,suggestionDescription:F,username:G}),e[39]=A,e[40]=z,e[41]=D,e[42]=y,e[43]=F,e[44]=G,e[45]=L):L=e[45];e[46]!==A||e[47]!==y||e[48]!==F?(C=l.jsx(s,{fullName:A,showDescription:y,suggestionDescription:F}),e[46]=A,e[47]=y,e[48]=F,e[49]=C):C=e[49];e[50]!==f||e[51]!==g||e[52]!==N||e[53]!==m||e[54]!==M||e[55]!==n||e[56]!==w||e[57]!==E||e[58]!==L||e[59]!==x||e[60]!==C?(K=l.jsx(c("PolarisFollowChainingListItem.next.react"),{analyticsContext:f,clickPoint:g,icon:N,isLoggedOutAYML:m,onClick:M,onDismissed:n,position:w,primaryCta:E,primaryText:L,renderItemFooter:x,secondaryText:C}),e[50]=f,e[51]=g,e[52]=N,e[53]=m,e[54]=M,e[55]=n,e[56]=w,e[57]=E,e[58]=L,e[59]=x,e[60]=C,e[61]=K):K=e[61];return K}g["default"]=a}),98);
__d("PolarisFollowChainingList_suggested_users.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"PolarisFollowChainingList_suggested_users",selections:[{args:null,kind:"FragmentSpread",name:"PolarisFollowCard_media"}],type:"XDTUserDict",abstractKey:null};e.exports=a}),null);
__d("PolarisFollowChainingList.next.react",["fbt","CometRelay","IGDSBox.react","IGDSText.react","PolarisConnectionsLogger","PolarisFollowCard.next.react","PolarisFollowChainingList_suggested_users.graphql","PolarisLogger","PolarisScrollWatchedComponent.react","PolarisSeeAllLink.react","PolarisVirtualHSnapScrollCollapsibleList.react","isStringNullOrEmpty","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));e=j;var l=e.useRef,m=e.useState,n=10,o=h._("__JHASH__2k--O48PVwS__JHASH__"),p={cardWidth:156,gapWidth:5,gutterWidth:20},q={cardWidth:170,gapWidth:12,gutterWidth:0},r=208,s=250;function a(a){var e=a.analyticsContext,f=a.chainingSuggestions,g=a.clickPoint,h=a.impressionModule,j=a.isLoggedOutAYML,t=j===void 0?!1:j,u=a.isSmallScreen,v=a.onFollowUser;j=a.onSeeAllClick;var w=a.onSuggestionDismissed,x=a.onUnfollowUser,y=a.overscan,z=a.renderItemFooter,A=a.seeAllHref,B=a.showDescription,C=B===void 0?!1:B;B=a.title;a=a.users;var D=d("CometRelay").useFragment(i!==void 0?i:i=b("PolarisFollowChainingList_suggested_users.graphql"),a),E=l(!1);a=m(null);var F=a[0],G=a[1];a=m(null);var H=a[0],I=a[1];a=m({});var J=a[0],K=a[1];a=function(){E.current=!0,O()};var L=function(){E.current=!1},M=function(){h===d("PolarisConnectionsLogger").VIEW_MODULES.post_related_profile&&d("PolarisLogger").logAction("relatedProfileModule",{source:e,target:"seeAll",viewModule:h})},N=function(a){var b=a.endPct;a=a.startPct;G(Math.max(0,Math.floor(a)));I(Math.max(0,Math.floor(b)));O()},O=function(){if(!E.current||F==null||H==null||f==null)return;for(var a=F;a<=H;++a){var b=f[a];if(b==null)continue;if(!J[b.id]){var c={containerModule:e,position:a,targetId:b.id,viewModule:h};h===d("PolarisConnectionsLogger").VIEW_MODULES.web_profile_chaining?d("PolarisConnectionsLogger").logConnectionAction(babelHelpers["extends"]({eventName:"similar_user_impression"},c)):h===d("PolarisConnectionsLogger").VIEW_MODULES.hscroll_feed||h===d("PolarisConnectionsLogger").VIEW_MODULES.end_of_feed?d("PolarisConnectionsLogger").logConnectionAction(babelHelpers["extends"]({eventName:"recommended_user_impression"},c)):h===d("PolarisConnectionsLogger").VIEW_MODULES.post_related_profile&&d("PolarisLogger").logAction("relatedProfileModuleScroll",{position:a,source:e,targetId:b.id,viewModule:h});K(babelHelpers["extends"]({},J,(c={},c[b.id]=!0,c)))}}},P=u?p:q,Q=C?s:r,R=f&&f.map(function(a,b){return k.jsx(c("PolarisFollowCard.next.react"),{analyticsContext:e,clickPoint:g,impressionModule:h,isLoggedOutAYML:t,isSmallScreen:u,onDismissed:w,onFollowUser:v,onUnfollowerUser:x,position:b,renderItemFooter:z,showDescription:C,user:a,users:D[b]},a.id)});if(R==null||R.length===0)return null;R=R.map(function(a,b){return k.jsx(c("IGDSBox.react"),{width:P.cardWidth,children:a},f==null?void 0:f[b].id)});return k.jsxs(c("PolarisScrollWatchedComponent.react"),{onScrollEnter:a,onScrollLeave:L,children:[!f&&k.jsx(c("IGDSBox.react"),{alignItems:"center",padding:5,children:k.jsx(c("IGDSText.react").LabelEmphasized,{color:"secondaryText",children:o})}),f&&k.jsxs(c("IGDSBox.react"),{direction:"row",marginBottom:u?3:4,marginTop:u?4:0,paddingX:u?4:0,children:[k.jsx(c("IGDSBox.react"),{flex:"grow",children:u?k.jsx(c("IGDSText.react").BodyEmphasized,{children:B}):k.jsx(c("IGDSText.react").Section,{children:B})}),!c("isStringNullOrEmpty")(A)&&k.jsx(c("PolarisSeeAllLink.react"),{href:A,onClick:(a=j)!=null?a:M})]}),f&&R!=null&&k.jsx(c("IGDSBox.react"),{height:Q,children:k.jsx(c("PolarisVirtualHSnapScrollCollapsibleList.react"),{gutterWidth:Math.max(0,P.gutterWidth-P.gapWidth/2),initialVisibleItemsGuess:n,itemWidth:P.cardWidth+P.gapWidth,onVisibilityChange:N,overscan:y,children:R})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("PolarisAYMLFollowChainingListLoggedOut.next.react",["CometRelay","PolarisAYMLFollowChainingListLoggedOutQuery.graphql","PolarisConnectionsLogger","PolarisFollowChainingList.next.react","PolarisPostChainingConstants","XPolarisProfileControllerRouteBuilder","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i;function a(a){var e=j(8),f=a.isSmallScreen,g=a.polarisAYMLFollowChainingListLoggedOutQuery;a=a.username;g=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("PolarisAYMLFollowChainingListLoggedOutQuery.graphql"),g);g=g.xdt_ayml_logged_out.users;var i;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(i=function(a){return{fullName:a.full_name,id:a.pk,isFollowedByViewer:!1,isVerified:a.is_verified,profilePictureUrl:a.profile_pic_url,username:(a=a.username)!=null?a:""}},e[0]=i):i=e[0];i=g.map(i);var l;e[1]!==a?(l=a!=null?c("XPolarisProfileControllerRouteBuilder").buildURL({username:a}):void 0,e[1]=a,e[2]=l):l=e[2];e[3]!==i||e[4]!==f||e[5]!==l||e[6]!==g?(a=k.jsx(c("PolarisFollowChainingList.next.react"),{analyticsContext:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.post,chainingSuggestions:i,clickPoint:"related_profiles_unit",impressionModule:d("PolarisConnectionsLogger").VIEW_MODULES.post_related_profile,isLoggedOutAYML:!0,isSmallScreen:f,onFollowUser:c("emptyFunction"),onSuggestionDismissed:c("emptyFunction"),onUnfollowUser:c("emptyFunction"),seeAllHref:l,showDescription:!0,title:d("PolarisPostChainingConstants").ACCOUNTS_YOU_MAY_LIKE_HEADER,users:g}),e[3]=i,e[4]=f,e[5]=l,e[6]=g,e[7]=a):a=e[7];return a}g["default"]=a}),98);