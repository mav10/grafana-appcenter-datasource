define(["react","@grafana/ui","@grafana/data","@grafana/runtime"],(function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=51)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){var r=n(18),o=n(12),a=n(35),i=n(36),u=Object.prototype,c=u.hasOwnProperty,s=r((function(e,t){e=Object(e);var n=-1,r=t.length,s=r>2?t[2]:void 0;for(s&&a(t[0],t[1],s)&&(r=1);++n<r;)for(var l=t[n],f=i(l),p=-1,h=f.length;++p<h;){var d=f[p],v=e[d];(void 0===v||o(v,u[d])&&!c.call(e,d))&&(e[d]=l[d])}return e}));e.exports=s},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r=n(10),o=n(28),a=n(29),i="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?u:i:c&&c in Object(e)?o(e):a(e)}},function(e,t,n){var r=n(11),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(5),o=n(4),a="[object AsyncFunction]",i="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";e.exports=function(e){if(!o(e))return!1;var t=r(e);return t==i||t==u||t==a||t==c}},function(e,t,n){var r=n(6).Symbol;e.exports=r},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(27))},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(9),o=n(14);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},function(e,t){var n=9007199254740991;e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var o=typeof e;return!!(t=null==t?n:t)&&("number"==o||"symbol"!=o&&r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports=r},function(e,t,n){var r=n(8),o=n(19),a=n(21);e.exports=function(e,t){return a(o(e,t,r),e+"")}},function(e,t,n){var r=n(20),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var a=arguments,i=-1,u=o(a.length-t,0),c=Array(u);++i<u;)c[i]=a[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=a[i];return s[t]=n(c),r(e,this,s)}}},function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},function(e,t,n){var r=n(22),o=n(34)(r);e.exports=o},function(e,t,n){var r=n(23),o=n(24),a=n(8),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:a;e.exports=i},function(e,t){e.exports=function(e){return function(){return e}}},function(e,t,n){var r=n(25),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t,n){var r=n(26),o=n(33);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},function(e,t,n){var r=n(9),o=n(30),a=n(4),i=n(32),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,l=c.toString,f=s.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?p:u).test(i(e))}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(10),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[u]=n:delete e[u]),o}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var r,o=n(31),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},function(e,t,n){var r=n(6)["__core-js_shared__"];e.exports=r},function(e,t){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t){var n=800,r=16,o=Date.now;e.exports=function(e){var t=0,a=0;return function(){var i=o(),u=r-(i-a);if(a=i,u>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},function(e,t,n){var r=n(12),o=n(13),a=n(15),i=n(4);e.exports=function(e,t,n){if(!i(n))return!1;var u=typeof t;return!!("number"==u?o(n)&&a(t,n.length):"string"==u&&t in n)&&r(n[t],e)}},function(e,t,n){var r=n(37),o=n(48),a=n(13);e.exports=function(e){return a(e)?r(e,!0):o(e)}},function(e,t,n){var r=n(38),o=n(39),a=n(41),i=n(42),u=n(15),c=n(44),s=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=a(e),l=!n&&o(e),f=!n&&!l&&i(e),p=!n&&!l&&!f&&c(e),h=n||l||f||p,d=h?r(e.length,String):[],v=d.length;for(var b in e)!t&&!s.call(e,b)||h&&("length"==b||f&&("offset"==b||"parent"==b)||p&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||u(b,v))||d.push(b);return d}},function(e,t){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},function(e,t,n){var r=n(40),o=n(7),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!u.call(e,"callee")};e.exports=c},function(e,t,n){var r=n(5),o=n(7),a="[object Arguments]";e.exports=function(e){return o(e)&&r(e)==a}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){(function(e){var r=n(6),o=n(43),a=t&&!t.nodeType&&t,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,u=i&&i.exports===a?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;e.exports=c}).call(this,n(16)(e))},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(45),o=n(46),a=n(47),i=a&&a.isTypedArray,u=i?o(i):r;e.exports=u},function(e,t,n){var r=n(5),o=n(14),a=n(7),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t,n){(function(e){var r=n(11),o=t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,u=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=u}).call(this,n(16)(e))},function(e,t,n){var r=n(4),o=n(49),a=n(50),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return a(e);var t=o(e),n=[];for(var u in e)("constructor"!=u||!t&&i.call(e,u))&&n.push(u);return n}},function(e,t){var n=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function a(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(i,u)}c((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var s=n(3),l=n.n(s),f=n(17),p={metric:"build",filedValue:"status",branch:"master"},h=[{value:"id",label:"ID"},{value:"status",label:"Status"},{value:"version",label:"Version"},{value:"date",label:"Last Time"},{value:"name",label:"Application Name"}],d=[{value:"id",label:"ID"},{value:"date",label:"Execution time"},{value:"status",label:"Status"},{value:"image",label:"Screenshot"}],v=100,b=50,y=25,g=0,m=function(e){function t(t){var n=e.call(this,t)||this;if(!t.url)throw new Error("There is no server address! Please (re)configure datasource!");return n.BackendService=Object(f.getBackendSrv)(),n.Url=t.url,n.ApiKey=t.jsonData.key,n}return a(t,e),t.prototype.query=function(e){return u(this,void 0,void 0,(function(){var t,n=this;return c(this,(function(o){switch(o.label){case 0:return t=e.targets.map((function(e){return u(n,void 0,void 0,(function(){var t,n,o,a,i,u;return c(this,(function(c){switch(c.label){case 0:return e.application?"build"!==e.metric?[3,2]:(n=l()(e,p),[4,this.getLatestBuilds(e.application,e.owner,e.branch)]):(console.warn("Application is not chosen! Will not fetch data"),[2]);case 1:return t=c.sent(),a=n.filedValue,t?[2,new r.MutableDataFrame({refId:n.refId,length:1,name:e.application+a,fields:[{name:e.application+a,values:[t[a]],type:r.FieldType.string}]})]:[2];case 2:return"testRun"!==e.metric?[3,6]:(n=l()(e,p),[4,this.getLatestTestRunByPlatform(e.application,e.owner,e.testSeriesName,e.platform)]);case 3:return o=c.sent(),a=n.filedValue,i="","image"===a&&o?[4,this.getTestRunScreenShots(e.application,e.owner,o.id)]:[3,5];case 4:i=c.sent(),c.label=5;case 5:return o?(u={id:o.id,status:"passed"===o.status?100:0,date:o.date,image:i},[2,new r.MutableDataFrame({refId:n.refId,length:1,name:e.application+a,fields:[{name:e.application+a,values:[u[a]],type:r.FieldType.string}]})]):[2];case 6:return[2]}}))}))})),[4,Promise.all(t)];case 1:return[2,{data:o.sent()}]}}))}))},t.prototype.testDatasource=function(){return u(this,void 0,void 0,(function(){return c(this,(function(e){return[2,{status:"success",message:"Success"}]}))}))},t.prototype.getLatestBuilds=function(e,t,n){return u(this,void 0,void 0,(function(){var r,o,a,i,u;return c(this,(function(c){switch(c.label){case 0:return r=this.Url+"/v0.1/apps/"+t+"/"+e+"/branches",[4,this.doRequest(r)];case 1:return o=c.sent(),a=o.map((function(e){return{branch:e.branch.name,buildInfo:e.lastBuild}})),(i=a.find((function(e){return e.branch===n})))&&i.buildInfo?[2,{id:(u=i.buildInfo).id,version:u.buildNumber,status:this.mapStatusToBuildStates(u.status,u.result),date:u.finishTime}]:[2,void 0]}}))}))},t.prototype.getLatestTestRunByPlatform=function(e,t,n,r){return u(this,void 0,void 0,(function(){var o,a,i,u;return c(this,(function(c){switch(c.label){case 0:if(!(e&&t&&n&&r))throw Error("Not all params  were passed! try to re-set all field and repeat oe more time");return o=this.Url+"/v0.1/apps/"+t+"/"+e+"/test_series/"+n+"/test_runs",[4,this.doRequest(o)];case 1:return a=c.sent(),i=a.map((function(e){return e})),[2,(u=i.filter((function(e){return e.platform.toLowerCase()===r})).sort((function(e,t){return e.date.localeCompare(t.date)}))).length>0?u[u.length-1]:void 0]}}))}))},t.prototype.getTestRunScreenShots=function(e,t,n){return u(this,void 0,void 0,(function(){var r,o,a,i,u,s,l;return c(this,(function(c){switch(c.label){case 0:if(!(e&&t&&n))throw Error("Could not get testId");return r=this.Url+"/v0.1/apps/"+t+"/"+e+"/test_runs/"+n+"/report",[4,this.doRequest(r)];case 1:o=c.sent(),a=[],i=o.features.findIndex((function(e){return"Tests"===e.name})),o.features[i].tests.forEach((function(e){return e.runs.forEach((function(e){return e.steps.forEach((function(e){a.push(e.step_report_url)}))}))})),u=[],s=0,c.label=2;case 2:return s<a.length?[4,this.doRequest(a[s])]:[3,5];case 3:(l=c.sent())&&l.deviceScreenshots.length>0&&u.push(l.deviceScreenshots[0].screenshot.urls.large),c.label=4;case 4:return s++,[3,2];case 5:return[2,u[0]]}}))}))},t.prototype.getAppList=function(){return u(this,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return e=this.Url+"/v0.1/apps",[4,this.doRequest(e)];case 1:return[2,t.sent().map((function(e){return{id:e.id,internalName:e.name,displayName:e.display_name,owner:e.owner.name}}))]}}))}))},t.prototype.doRequest=function(e){return u(this,void 0,void 0,(function(){var t;return c(this,(function(n){switch(n.label){case 0:return t={url:e,method:"GET",headers:{"X-API-Token":this.ApiKey}},[4,this.BackendService.datasourceRequest(t)];case 1:return[2,n.sent().data]}}))}))},t.prototype.mapStatusToBuildStates=function(e,t){return"completed"!==e?"inProgress"===e?b:y:null!==t&&"succeeded"===t?v:g},t}(r.DataSourceApi),j=n(0),x=n.n(j),w=n(1),S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onPathChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{url:e.target.value}))},t.onAPIKeyChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{jsonData:{key:e.target.value},secureJsonData:{apiKey:e.target.value}}))},t.onResetAPIKey=function(){var e=t.props,n=e.onOptionsChange,r=e.options;n(i(i({},r),{jsonData:{key:""},secureJsonFields:i(i({},r.secureJsonFields),{apiKey:!1}),secureJsonData:i(i({},r.secureJsonData),{apiKey:""})}))},t}return a(t,e),t.prototype.render=function(){var e=this.props.options,t=e.secureJsonFields,n=e.url,r=e.secureJsonData||{};return x.a.createElement("div",{className:"gf-form-group"},x.a.createElement("div",{className:"gf-form"},x.a.createElement(w.FormField,{label:"Url",labelWidth:6,inputWidth:20,onChange:this.onPathChange,value:n||"",placeholder:"addres of server"})),x.a.createElement("div",{className:"gf-form-inline"},x.a.createElement("div",{className:"gf-form"},x.a.createElement(w.SecretFormField,{isConfigured:t&&t.apiKey,value:r.apiKey||"",label:"API Key (token)",placeholder:"secure json field (backend only)",labelWidth:6,inputWidth:20,onReset:this.onResetAPIKey,onChange:this.onAPIKeyChange}))))},t}(j.PureComponent),O=function(e){function t(t){var n=e.call(this,t)||this;return n.onAppChange=function(e){var t=n.props,r=t.onChange,o=t.query,a=e.value;if(!a)throw new Error("Application is not chosen! Please select target app from the first column of query.");var u=a.internalName.toLowerCase().includes("ios")?"ios":"android";r(i(i({},o),{application:a.internalName,owner:a.owner,platform:u}))},n.onMetricChange=function(e){var t=n.props,r=t.onChange,o=t.query;r(i(i({},o),{metric:e.value||"build"}))},n.onBranchChange=function(e){var t=n.props,r=t.onChange,o=t.query;r(i(i({},o),{branch:e.target.value}))},n.onTestSeriesChange=function(e){var t=n.props,r=t.onChange,o=t.query;r(i(i({},o),{testSeriesName:e.target.value}))},n.onFieldChange=function(e){var t=n.props,r=t.onChange,o=t.query,a=t.onRunQuery;r(i(i({},o),{filedValue:e.value||"status"})),a()},n.state={apps:[]},n}return a(t,e),t.prototype.componentDidMount=function(){return u(this,void 0,void 0,(function(){var e,t;return c(this,(function(n){switch(n.label){case 0:return[4,this.props.datasource.getAppList()];case 1:return e=n.sent(),t=e.map((function(e){return{value:i({},e),label:e.displayName}})),this.setState({apps:t}),[2]}}))}))},t.prototype.render=function(){var e=l()(this.props.query,p),t=e.metric,n=e.branch,r=e.application,o=e.owner,a=e.filedValue,i=e.testSeriesName,u=this.state.apps,c=u.length>0?u:[{value:void 0,label:"Select App"}],s="build"===t?h:d,f=[{value:"build",label:"Builds"},{value:"testRun",label:"Test Runs"}];return x.a.createElement("div",{className:"gf-form"},x.a.createElement(w.Select,{width:16,value:{value:{displayName:r,internalName:r,owner:o},label:r},options:c,onChange:this.onAppChange}),x.a.createElement(w.Select,{value:{value:t,label:f.find((function(e){return e.value===t})).label},options:f,onChange:this.onMetricChange}),"build"===t&&x.a.createElement(w.FormField,{label:"Target Branch",type:"text",onChange:this.onBranchChange,value:n||"master",labelWidth:10,tooltip:"Enter target branch"}),"testRun"===t&&x.a.createElement(w.FormField,{label:"Target Test series",type:"text",onChange:this.onTestSeriesChange,value:i||"launch-tests",labelWidth:10,tooltip:"Enter target test series"}),x.a.createElement(w.Select,{width:16,value:{value:a,label:a},options:s,onChange:this.onFieldChange}))},t}(j.PureComponent);n.d(t,"plugin",(function(){return P}));var P=new r.DataSourcePlugin(m).setConfigEditor(S).setQueryEditor(O)}])}));