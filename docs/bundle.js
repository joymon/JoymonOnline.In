webpackJsonp([1],[function(t,e,n){n(1),n(36),n(23),n(25),n(29),n(21),n(22),n(27),n(35),n(30),n(24),n(33),n(26),n(28),n(34),n(32),n(20),n(17),n(18),n(19)},function(t,e,n){"use strict";var o=n(7);n(6),n(5);var i,r=n(31);!function(t){var e=function(){function t(){this.app=o.module("JoymonOnline",["ngSanitize","ngRoute"]),t.currentCountryModule=this,this.registerRoutes()}return t.getInstance=function(){return t.currentCountryModule},t.prototype.registerService=function(t,e){console.log("Registered service "+t),this.app.service(t,e)},t.prototype.registerController=function(t,e){this.app.controller(t,function(){return e})},t.prototype.registerControllerWithFactory=function(t,e){this.app.controller(t,e)},t.prototype.registerDirective=function(t,e){console.log("Registered directive "+t),this.app.directive(t,e)},t.prototype.registerFilter=function(t,e){this.app.filter(t,e)},t.prototype.registerComponent=function(t,e){this.app.component(t,e),console.log("Registered component "+t)},t.prototype.registerRoutes=function(){this.app.config(["$routeProvider","$locationProvider",function(t,e){e.hashPrefix(""),t.when("/home",new r.HomeRoute).when("/Resume",new r.ResumeRoute).when("/ViewResume",new r.ViewResumeRoute).when("/Blogs",new r.BlogsRoute).when("/Links",new r.LinksRoute).when("/Projects",new r.ProjectsRoute).when("/Changelog",new r.ChangelogRoute).otherwise(new r.HomeRoute)}]),this.app.config(["$sceDelegateProvider",function(t){t.resourceUrlWhitelist(["self","https://*.blogspot.**"])}])},t}();t.AppModule=e,new e}(i=e.JoymonOnline||(e.JoymonOnline={}))},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=f[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(l(o.parts[r],e))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(l(o.parts[r],e));f[o.id]={id:o.id,refs:1,parts:a}}}}function i(t){for(var e=[],n={},o=0;o<t.length;o++){var i=t[o],r=i[0],a=i[1],s=i[2],c=i[3],l={css:a,media:s,sourceMap:c};n[r]?n[r].parts.push(l):e.push(n[r]={id:r,parts:[l]})}return e}function r(t,e){var n=m(),o=x[x.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function l(t,e){var n,o,i;if(e.singleton){var r=b++;n=v||(v=s(e)),o=p.bind(null,n,r,!1),i=p.bind(null,n,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=h.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=u.bind(null,n),i=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}function p(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function u(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function h(t,e){var n=e.css,o=e.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var f={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},g=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,b=0,x=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=g()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return o(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var s=n[a],c=f[s.id];c.refs--,r.push(c)}if(t){var l=i(t);o(l,e)}for(var a=0;a<r.length;a++){var c=r[a];if(0===c.refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete f[c.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){t.exports=n.p+"App_Themes/Black/images/footer.gif"},,,,function(t,e,n){t.exports=n.p+"App_Themes/Black/images/header.gif"},,,,function(t,e,n){e=t.exports=n(2)(),e.push([t.id,"@media screen and (max-width:480px){#coollinks{display:none}#whatsnew,.header{width:auto}.header{background-image:url("+n(4)+")!important;background-repeat:no-repeat;background-size:cover;position:relative;height:auto!important;margin:0 auto 5px;padding-bottom:10px;overflow:hidden}h1{top:12px;text-transform:uppercase;font-size:18px}.logo,h1{position:static;left:0}.menua{position:static;right:auto;float:left}.nav{display:none}#changeLog h4,#links h4,#resume #photo,#resume h4{position:static}.menua i{font-size:2em;display:block;margin-left:.7em;margin-right:.7em;color:#ccc}dd{margin-left:80px;margin-bottom:10px}}",""])},function(t,e,n){e=t.exports=n(2)(),e.push([t.id,"@media screen and (max-width:700px){.header{position:relative;height:76px;margin:0 auto 5px}#changeLog,#home,#links,#resume,.header{width:auto}#content{margin-left:0}#content,#sidebar{width:auto;float:none}.footer{background-image:url("+n(4)+");background-repeat:no-repeat;margin-left:auto;margin-right:auto;padding-bottom:20px;width:auto;height:50px;text-align:center;font-size:10px;color:#fff}#coollinks{display:none}#changeLog h4,#links h4,#resume #photo,#resume h4{position:static}dd{margin-left:80px;margin-bottom:10px}#links dt{position:static}#links dd{margin-left:0;margin-bottom:10px}}",""])},function(t,e,n){e=t.exports=n(2)(),e.push([t.id,"@media screen and (max-width:980px){.header{background-image:url("+n(8)+");background-repeat:no-repeat;position:relative;max-width:789px;height:76px;margin:0 auto 5px}}",""])},function(t,e,n){e=t.exports=n(2)(),e.push([t.id,"table{font-size:1em}h1,h2,h3,h4{margin:0;font-family:Arial,Tahoma,Helvetica,sans-serif}p{line-height:1.4em;text-align:justify}hr{border:0;border-top:1px solid #505050;height:1px}a{text-decoration:none;color:#dbb94f}a:visited{color:#c19b28}a:hover{text-decoration:underline;color:#e6cd84}a:active{color:#c19b28}body{background-color:#656565;background-image:url("+n(16)+");background-repeat:repeat;margin:0;padding:0;text-align:center;font-family:Verdana,Arial,Helvetica,sans-serif;font-size:.7em;color:#ccc}img{border-width:0}.header{background-image:url("+n(8)+");background-repeat:no-repeat;position:relative;width:789px;height:76px;margin:0 auto 5px}h1{top:12px;text-transform:uppercase;font-size:18px}h1,h2{position:absolute;left:37px}h2{top:45px;font-size:11px}.table{display:table}.row{display:table-row}.cell{display:table-cell}.logo{left:37px;top:45px;font-size:11px;letter-spacing:3px;margin-bottom:5px}.logo,.menua{position:absolute}.menua{right:5px;top:13px}.menub{margin:8px auto 2px;float:left;position:relative}.menub a:visited{color:#dbb94f}.nav{position:absolute;right:15px;top:51px;text-transform:uppercase;font-size:1em}.nav i{font-size:1.4em;margin-left:1em}.menua a:visited,.nav a:visited{color:#dbb94f}.shim{display:none}.page{background-repeat:repeat-y;margin-left:auto;margin-right:auto;text-align:left}h3{font-size:1.5em;font-weight:700}h3,h4{margin-top:1em;margin-bottom:1.12em}h4{font-size:13px}#admin-albums,#admin-details,#admin-photos,#albums,#changeLog,#details,#home,#links,#photos,#resume{position:relative;width:686px;padding:0 37px;padding-top:1px;padding-bottom:40px}#sidebar{float:left;width:214px;height:100%}#content{margin-left:256px}#whatsnew{width:250px;height:100%}#changeLog h4,#links h4,#resume h4{margin-top:0;border-top:1px solid #505050;padding-top:1em;position:absolute;left:37px;width:214px}#resume #photo{position:absolute;left:37px;top:20px;width:214px}#resume .first{margin-top:0;border-top:1px solid #505050;padding-top:1.5em}.dot{color:#ccc;line-height:0;background-repeat:repeat-x}dl{margin-top:0;margin-bottom:0;border-top:1px solid #505050;padding-top:1.5em;padding-bottom:1.5em;position:relative}dt{position:absolute;left:0}dd{margin-left:150px;margin-bottom:10px}.emptydata td{padding:50px;color:#aeaeae}.view{width:686px;text-align:center}.view,.view .photo-frame{margin-left:auto;margin-right:auto}.item{padding:20px 50px;color:#b2b2b2}.item h4{margin-bottom:.4em}.nullpanel{padding:150px;width:auto;text-align:center}.buttonbar,.buttonbar-top{width:686px;height:36px;background-repeat:no-repeat;margin-bottom:5px;text-align:center}.footerbg{width:auto;height:50px;text-align:center}.footer{background-image:url("+n(4)+");background-repeat:no-repeat;margin-left:auto;margin-right:auto;padding-bottom:20px;width:770px;text-align:center;font-size:10px;color:#fff}.photo_198{border:4px solid #fff}.blogItems{border-top:1px solid #505050;width:100%}.blogItem{width:100%;margin-top:9px}.blogGrid,.blogItem{border-collapse:separate}.menua i,.menub i{font-size:2em;display:none}.menuItem{position:relative;float:left;padding-left:.15em;padding-right:.15em;text-transform:uppercase;font-size:10px}.blogItem .postedDate{width:25%;text-align:right;vertical-align:top}",""])},function(t,e,n){t.exports=n.p+"App_Themes/Black/images/background.gif"},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.id,o,""]]),n(3)(o,{}),o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(13);"string"==typeof o&&(o=[[t.id,o,""]]),n(3)(o,{}),o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(14);"string"==typeof o&&(o=[[t.id,o,""]]),n(3)(o,{}),o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(15);"string"==typeof o&&(o=[[t.id,o,""]]),n(3)(o,{}),o.locals&&(t.exports=o.locals)},function(t,e,n){var o;!function(t){"use strict";var e=function(){function t(){}return t.filter=function(){return function(t){return t?String(t).replace(/<[^>]+>/gm,""):""}},t}();t.HTMLTagRemover=e,n(1).JoymonOnline.AppModule.getInstance().registerFilter("removeTags",e.filter);var o=function(){function t(){}return t.filter=function(){return function(t){return new Date(t)}},t}();t.ToDateFilter=o,n(1).JoymonOnline.AppModule.getInstance().registerFilter("toDate",o.filter)}(o||(o={}))},function(t,e,n){"use strict";var o,i=n(1);!function(t){var e=function(){function t(t){this.content="Dummy content",this.contentService=t}return t.prototype.$onInit=function(){var t=this;this.contentService.Get(this.source).then(function(e){console.log(e.data.feed),t.content=e.data}).catch(function(e){t.content="Error",console.log("Error"+e)})},t}();e.$inject=["ContentService"],t.ContentController=e;var n=function(){function t(){this.templateUrl="JS/app/content.component.html",this.controller=e,this.bindings={source:"@"}}return t}();t.ContentDirective=n,i.JoymonOnline.AppModule.getInstance().registerComponent("content",new n)}(o=e.JoymonOnline||(e.JoymonOnline={}))},function(t,e,n){"use strict";var o=n(1),i=function(){function t(t,e){this.sourceToUrlMap={WhatsNew:"https://joymon.github.io/Data/Home/WhatsNew.html",WhoAmI:"https://joymon.github.io/Data/Home/WhoAmI.html"},this.http=t,this.q=e}return t.prototype.GetUrl=function(t){return this.sourceToUrlMap[t]},t.prototype.Get=function(t){var e=this.GetUrl(t),n=this.q.defer();return this.http.get(e,{cache:!0}).then(function(t){n.resolve({data:t.data})}).catch(function(t){console.log(t),n.reject(t)}),n.promise},t.prototype.GetWhatsNew=function(){return"Test data"},t.prototype.GetWhoAmI=function(){return"Test data wh"},t}();i.$inject=["$http","$q"],o.JoymonOnline.AppModule.getInstance().registerService("ContentService",i),t.exports=i},function(t,e,n){"use strict";n(1);var o=function(){function t(t){console.log("BlogFeedController created"),this.dataServie=t}return t.prototype.$onInit=function(){var t=this;this.dataServie.GetPosts(this.rss).then(function(e){console.log(e.data.feed),t.Feed=e.data.feed}).catch(function(t){console.log("Error"+t)})},t.prototype.getUrl=function(){return this.Url},t}();o.$inject=["DataService"],e.BlogFeedController=o;var i=function(){function t(){this.templateUrl="JS/app/feed.component.html",this.controller=o,this.controllerAs="ctrl",this.bindToController=!0,this.bindings={rss:"@"}}return t}();e.BlogFeedComponent=i,n(1).JoymonOnline.AppModule.getInstance().registerComponent("blogFeed",new i)},function(t,e,n){"use strict";var o=function(){function t(t,e){this.http=t,this.q=e}return t.prototype.GetPosts=function(t){var e="//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=3&q="+encodeURIComponent(t);e="https://joymonscode.blogspot.com/feeds/posts/default?orderby=published&max-results=3&alt=json";var n=this.q.defer();return this.http.jsonp(e).then(function(t){n.resolve({data:t.data.responseData})}).catch(function(t){console.log("Error - "+t),n.reject(t)}),n.promise},t}();o.$inject=["$http","$q"],e.BlogDataService=o;var i=function(){function t(t,e){this.http=t,this.q=e}return t.prototype.GetPosts=function(t){var e=this.q.defer(),n="https://{blog}.blogspot.com/feeds/posts/default?orderby=published&max-results=3&alt=json",o=n.replace("{blog}",t);return this.http.jsonp(o).then(function(t){var n={};n=t;var o={feed:t.data.feed};o.feed.link=t.data.feed.link[2].href,o.feed.title=t.data.feed.title.$t,o.feed.entries=t.data.feed.entry.map(function(t){var e={title:t.title.$t,content:t.content.$t,link:t.link[4].href,publishedDate:t.published.$t};return e}),n.data=o,e.resolve(n)}).catch(function(t){console.log("Error - "+t),e.reject(t)}),e.promise},t}();i.$inject=["$http","$q"],e.FeedService=i,n(1).JoymonOnline.AppModule.getInstance().registerService("DataService",i)},function(t,e,n){var o;!function(t){var e=function(){function t(){this.templateUrl="JS/app/links.component.html"}return t}();t.LinksComponent=e,n(1).JoymonOnline.AppModule.getInstance().registerComponent("links",new e)}(o||(o={}))},function(t,e,n){var o;!function(t){var e=function(){function t(){this.items=this.getMenuItems()}return t.prototype.getMenuItems=function(){return[{page:"Default",faIcon:"home",title:"Home"},{page:"Resume",faIcon:"file-text-o",title:"Resume"},{page:"Blogs",faIcon:"rss",title:"Blogs"},{page:"Links",faIcon:"link",title:"Links"},{page:"Projects",faIcon:"windows",title:"Projects"},{page:"Changelog",faIcon:"list-alt",title:"Changelog"}]},t}(),o=function(){function t(){this.templateUrl="JS/app/menu.component.html",this.controller=e}return t}();t.MenuComponent=o,n(1).JoymonOnline.AppModule.getInstance().registerComponent("menu",new o)}(o||(o={}))},function(t,e,n){"use strict";var o=function(){function t(){this.restrict="E",this.templateUrl="JS/app/projects.component.html",this.controller=i,this.controllerAs="ctrl",this.bindToController=!0,this.scope={rss:"@"}}return t}();n(1).JoymonOnline.AppModule.getInstance().registerDirective("projects",function(){return console.log("Called reg fn"),new o});var i=function(){function t(t){var e=this;console.log("ProjectsController created"),this.Url="joymons world wpf",this.Projects=[],t.GetAllProjects("joymon").then(function(t){console.log(t.data),e.Projects=t.data}).catch(function(t){console.log("Error"+t)})}return t.prototype.getUrl=function(){return this.Url},t}();i.$inject=["ProjectsService"]},function(t,e,n){"use strict";var o=function(){function t(t,e){this.repoUrl="https://api.github.com/repos/",this.prjs=["joyful-visualstudio","Orchestration","Karel","PrayerBook"],this.http=t,this.q=e}return t.prototype.getProjectUrl=function(t,e){return this.repoUrl+t+"/"+e},t.prototype.logAPIQuota=function(t){t.length>0&&console.log(t[0].headers())},t.prototype.GetAllProjects=function(t){var e=this,n=this.q.defer();return this.q.all(this.prjs.map(function(n,o,i){return e.http.get(e.getProjectUrl(t,n),{cache:!0})})).then(function(t){e.logAPIQuota(t),n.resolve({data:t})},function(t){n.reject(t)}),n.promise},t}();o.$inject=["$http","$q"],n(1).JoymonOnline.AppModule.getInstance().registerService("ProjectsService",o),t.exports=o},function(t,e,n){var o;!function(t){var e=function(){function t(){this.templateUrl="JS/app/resume.component.html"}return t}();t.ResumeComponent=e,n(1).JoymonOnline.AppModule.getInstance().registerComponent("resume",new e)}(o||(o={}))},function(t,e){"use strict";var n=function(){function t(){this.template="<home></home>",this.caseInsensitiveMatch=!0}return t}();e.HomeRoute=n;var o=function(){function t(){this.template="<resume></resume>",this.caseInsensitiveMatch=!0}return t}();e.ResumeRoute=o;var i=function(){function t(){this.template="<view-resume></view-resume>",this.caseInsensitiveMatch=!1}return t}();e.ViewResumeRoute=i;var r=function(){function t(){this.template="<blogs-view></blogs-view>",this.caseInsensitiveMatch=!0}return t}();e.BlogsRoute=r;var a=function(){function t(){this.template="<links></links>",this.caseInsensitiveMatch=!0}return t}();e.LinksRoute=a;var s=function(){function t(){this.template="<projects></projects>",this.caseInsensitiveMatch=!0}return t}();e.ProjectsRoute=s;var c=function(){function t(){this.template="<changelog></changelog>",this.caseInsensitiveMatch=!0}return t}();e.ChangelogRoute=c},function(t,e,n){"use strict";var o;!function(t){var e=function(){function t(){this.templateUrl="JS/app/viewResume.component.html"}return t}();t.ViewResumeComponent=e,n(1).JoymonOnline.AppModule.getInstance().registerComponent("viewResume",new e)}(o=e.JoymonOnline||(e.JoymonOnline={}))},function(t,e,n){var o;!function(t){var e=function(){function t(){this.templateUrl="JS/blogsView.component.html"}return t}();t.BlogsViewDirective=e,n(1).JoymonOnline.AppModule.getInstance().registerComponent("blogsView",new e)}(o||(o={}))},function(t,e,n){"use strict";var o=n(1),i=function(){function t(){this.templateUrl="JS/changelog.component.html"}return t}();e.ChangelogDirective=i,o.JoymonOnline.AppModule.getInstance().registerComponent("changelog",new i)},function(t,e,n){var o;!function(t){var e=function(){function t(){this.templateUrl="JS/home.component.html"}return t}();t.HomeComponent=e,n(1).JoymonOnline.AppModule.getInstance().registerComponent("home",new e)}(o||(o={}))},function(t,e){!function(t,e,n,o,i,r,a){t.GoogleAnalyticsObject=i,t[i]=t[i]||function(){(t[i].q=t[i].q||[]).push(arguments)},t[i].l=1*new Date,r=e.createElement(n),a=e.getElementsByTagName(n)[0],r.async=1,r.src=o,a.parentNode.insertBefore(r,a)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-67192109-1","auto"),ga("send","pageview"),console.log("GA Executed")}]);