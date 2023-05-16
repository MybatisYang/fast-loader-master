(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{4184:function(t,e,i){"use strict";var a=i("f96c"),s=i.n(a);s.a},7159:function(t,e,i){t.exports=i.p+"static/img/img.3267c070.jpg"},"7ed4":function(t,e,i){"use strict";var a=i("2b0e"),s=new a["default"];e["a"]=s},b367:function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=window.devicePixelRatio||1,a=10*i,s=a/2;return function(){function n(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.canvas=function(t){var e=document.getElementById(t),a=e.parentNode.clientWidth,s=e.parentNode.clientHeight;return e.style.width=a+"px",e.style.height=s+"px",e.width=a*i,e.height=s*i,e}(t),this.ctx=this.canvas.getContext("2d"),this.type="bar",this.showValue=!0,this.showGrid=!0,this.topPadding=60*i,this.leftPadding=50*i,this.rightPadding=10*i,this.bottomPadding=50*i,this.yEqual=5,this.yLength=0,this.xLength=0,this.ySpace=0,this.xRorate=0,this.yRorate=0,this.bgColor="#fff",this.axisColor="#666",this.gridColor="#eee",this.title={text:"",color:"#666",position:"top",font:"bold "+18*i+"px Arial",top:a,bottom:s},this.legend={display:!0,position:"top",color:"#666",font:14*i+"px Arial",top:45*i,bottom:15*i,textWidth:0},this.radius=100*i,this.innerRadius=60*i,this.colorList=["#4A90E2","#F5A623","#ff5858","#5e64ff","#2AC766","#743ee2","#b554ff","#199475"],this.init(e)}return function(e,i,a){i&&t(e.prototype,i),a&&t(e,a)}(n,[{key:"init",value:function(t){if(t.title=Object.assign({},this.title,t.title),t.legend=Object.assign({},this.legend,t.legend),Object.assign(this,t),!t.labels||!t.labels.length)throw new Error("缺少主要参数labels");if(!t.datasets||!t.datasets.length)throw new Error("缺少主要参数datasets");this.drawBackground(),"bar"===this.type||"line"===this.type?this.renderBarChart():this.renderPieChart(),this.drawLegend()}},{key:"renderBarChart",value:function(){this.yLength=Math.floor((this.canvas.height-this.topPadding-this.bottomPadding-a)/this.yEqual),this.xLength=Math.floor((this.canvas.width-this.leftPadding-this.rightPadding-a)/this.labels.length),this.ySpace=function(t,i){var a=t.map((function(t){return t.data.reduce((function(t,e){return e<t?t:e}))})),s=Math.ceil(Math.max.apply(Math,e(a))/i),n=s.toString().length-1;return n=2<n?2:n,Math.ceil(s/Math.pow(10,n))*Math.pow(10,n)}(this.datasets,this.yEqual),this.drawXAxis(),this.drawYAxis(),this.drawBarContent()}},{key:"drawBarContent",value:function(){var t=this.ctx,e=this.datasets.length;t.beginPath();for(var n=0;n<e;n++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.datasets[n].label).width),t.fillStyle=t.strokeStyle=this.datasets[n].fillColor||this.colorList[n];for(var o=this.datasets[n].data,l=0;l<o.length;l++)if(!(l>this.labels.length-1)){var r=this.xLength/(e+1),h=this.yLength/this.ySpace,c=this.leftPadding+this.xLength*l+r*(n+.5),d=c+r,g=this.canvas.height-this.bottomPadding,u=g-o[l]*h;if("bar"===this.type)t.fillRect(c,u,d-c,g-u),this.drawValue(o[l],c+r/2,u-s);else if("line"===this.type){var f=this.leftPadding+this.xLength*(l+.5);t.beginPath(),t.arc(f,u,3*i,0,2*Math.PI,!0),t.fill(),0!==l&&(t.beginPath(),t.strokeStyle=this.datasets[n].fillColor||this.colorList[n],t.lineWidth=2*i,t.moveTo(f-this.xLength,g-o[l-1]*h),t.lineTo(f,u),t.stroke(),t.lineWidth=1*i),this.drawValue(o[l],f,u-a)}}}t.stroke()}},{key:"renderPieChart",value:function(){for(var t=this.ctx,e=this.labels.length,i=this.datasets[0],a=i.data,s=a.reduce((function(t,e){return t+e})),n=-Math.PI/2,o=this.canvas.width/2,l=this.canvas.height/2,r=0;r<e;r++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.labels[r]).width),t.beginPath(),t.strokeStyle=t.fillStyle=i.colorList&&i.colorList[r]||this.colorList[r],t.moveTo(o,l);var h=n,c=n+=a[r]/s*2*Math.PI;t.arc(o,l,this.radius,h,c),t.closePath(),t.fill();var d=(h+c)/2;this.drawPieValue(a[r],d)}"ring"===this.type&&(t.beginPath(),t.fillStyle=this.bgColor,t.arc(o,l,this.innerRadius,0,2*Math.PI),t.closePath(),t.fill())}},{key:"drawValue",value:function(t,e,a){var s=this.ctx;this.showValue&&(s.textBaseline="middle",s.font=12*i+"px Arial",s.textAlign="center",s.fillText(t,e,a))}},{key:"drawPieValue",value:function(t,e){var i=this.ctx;if(this.showValue){var s=this.canvas.width/2,n=this.canvas.height/2,o=Math.ceil(Math.abs(this.radius*Math.cos(e))),l=Math.floor(Math.abs(this.radius*Math.sin(e)));i.textBaseline="middle",this.showValue&&(e<=0?(i.textAlign="left",i.moveTo(s+o,n-l),i.lineTo(s+o+a,n-l-a),i.moveTo(s+o+a,n-l-a),i.lineTo(s+o+3*a,n-l-a),i.stroke(),i.fillText(t,s+o+3.5*a,n-l-a)):0<e&&e<=Math.PI/2?(i.textAlign="left",i.moveTo(s+o,n+l),i.lineTo(s+o+a,n+l+a),i.moveTo(s+o+a,n+l+a),i.lineTo(s+o+3*a,n+l+a),i.stroke(),i.fillText(t,s+o+3.5*a,n+l+a)):e>Math.PI/2&&e<Math.PI?(i.textAlign="right",i.moveTo(s-o,n+l),i.lineTo(s-o-a,n+l+a),i.moveTo(s-o-a,n+l+a),i.lineTo(s-o-3*a,n+l+a),i.stroke(),i.fillText(t,s-o-3.5*a,n+l+a)):(i.textAlign="right",i.moveTo(s-o,n-l),i.lineTo(s-o-a,n-l-a),i.moveTo(s-o-a,n-l-a),i.lineTo(s-o-3*a,n-l-a),i.stroke(),i.fillText(t,s-o-3.5*a,n-l-a)))}}},{key:"drawBackground",value:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawTitle()}},{key:"drawTitle",value:function(){var t=this.title;if(t.text){var e=this.ctx;e.beginPath(),e.font=t.font,e.textAlign="center",e.fillStyle=t.color,"top"===t.position?(e.textBaseline="top",e.fillText(t.text,this.canvas.width/2,t.top)):(e.textBaseline="bottom",e.fillText(t.text,this.canvas.width/2,this.canvas.height-t.bottom))}}},{key:"drawXAxis",value:function(){var t=this.ctx,e=this.canvas.height-this.bottomPadding+.5;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding,e),t.lineTo(this.canvas.width-this.rightPadding,e),t.stroke(),this.drawXPoint()}},{key:"drawXPoint",value:function(){var t=this.ctx;t.beginPath(),t.font=12*i+"px Microsoft YaHei",t.textAlign=this.xRorate?"right":"center",t.textBaseline="top",t.fillStyle=this.axisColor;for(var e=0;e<this.labels.length;e++){var n=this.labels[e],o=this.leftPadding+this.xLength*(e+1)+.5,l=this.canvas.height-this.bottomPadding;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(o,l),t.lineTo(o,this.topPadding+a)):(t.moveTo(o,l),t.lineTo(o,l-s)),t.stroke(),t.save(),t.translate(o-this.xLength/2,l+s),t.rotate(-this.xRorate*Math.PI/180),t.fillText(n,0,0),t.restore()}}},{key:"drawYAxis",value:function(){var t=this.ctx;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding-.5,this.canvas.height-this.bottomPadding+.5),t.lineTo(this.leftPadding-.5,this.topPadding+.5),t.stroke(),this.drawYPoint()}},{key:"drawYPoint",value:function(){var t=this.ctx;t.font=12*i+"px Microsoft YaHei",t.textAlign="right",t.textBaseline="middle",t.beginPath();for(var e=0;e<this.yEqual;e++){var n=this.leftPadding,o=this.canvas.height-this.bottomPadding-this.yLength*(e+1)+.5;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(n,o),t.lineTo(this.canvas.width-this.rightPadding-a,o)):(t.strokeStyle=this.axisColor,t.moveTo(n-s,o),t.lineTo(n,o)),t.stroke(),t.save(),t.fillStyle=this.axisColor,t.translate(n-a,o),t.rotate(-this.yRorate*Math.PI/180),t.fillText(this.ySpace*(e+1),0,0),t.restore()}}},{key:"drawLegend",value:function(){var t=this.legend;if(t.display){var e=this.ctx,i="pie"===this.type||"ring"===this.type;e.beginPath(),e.font=t.font,e.textAlign="left",e.textBaseline="middle";for(var n=i?this.labels.length:this.datasets.length,o=(this.canvas.width-(this.legend.textWidth+(5*n-2)*a))/2,l=0,r=0;r<n;r++){var h=i?this.datasets[0]:this.datasets[r],c=(i?this.labels[r]:h.label)||"";e.fillStyle=h.colorList&&h.colorList[r]||h.fillColor||this.colorList[r],"top"===t.position?(this.drawLegendIcon(o+5*a*r+l,t.top-s,2*a,a),e.fillStyle=t.color,e.fillText(c,o+(5*r+3)*a+l,t.top)):"bottom"===t.position?(this.drawLegendIcon(o+5*a*r+l,this.canvas.height-t.bottom-s,2*a,a),e.fillStyle=t.color,e.fillText(c,o+(5*r+3)*a+l,this.canvas.height-t.bottom)):(e.fillRect(a,t.top+2*a*r,2*a,a),e.fillStyle=t.color,e.fillText(c,4*a,t.top+2*a*r+.5*a)),l+=Math.ceil(e.measureText(c).width)}}}},{key:"drawLegendIcon",value:function(t,e,n,o){var l=this.ctx;"line"===this.type?(l.beginPath(),l.strokeStyle=l.fillStyle,l.lineWidth=2*i,l.moveTo(t,e+s),l.lineTo(t+2*a,e+s),l.stroke(),l.lineWidth=1*i,l.arc(t+a,e+s,3*i,0,2*Math.PI,!0),l.fill()):l.fillRect(t,e,n,o)}}]),n}()}))},e2ad:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"mgb20",staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"user-info"},[a("img",{staticClass:"user-avator",attrs:{src:i("7159"),alt:""}}),a("div",{staticClass:"user-info-cont"},[a("div",{staticClass:"user-info-name"},[t._v(t._s(t.name))]),a("div",[t._v(t._s(t.role))])])]),a("div",{staticClass:"user-info-list"},[a("span",{staticStyle:{margin:"0px"}},[t._v("作者简介：Java架构师、区块链研发工程师（可见作者码云Java区块链开源项目）")])]),a("div",{staticClass:"user-info-list"},[a("span",{staticStyle:{margin:"0px"}},[t._v("区块链技术QQ沟通群：532650517")])])]),a("el-card",{staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("语言详情")])]),t._v(" Vue "),a("el-progress",{attrs:{percentage:21.3,color:"#42b983"}}),t._v(" HTML+JavaScript+CSS "),a("el-progress",{attrs:{percentage:23.7}}),t._v(" Java "),a("el-progress",{attrs:{percentage:55,color:"#f56c6c"}})],1)],1),a("el-col",{attrs:{span:16}},[a("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-1"},[a("i",{staticClass:"el-icon-lx-people grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("2456")]),a("div",[t._v("下载量")])])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-2"},[a("i",{staticClass:"el-icon-lx-notice grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("8")]),a("div",[t._v("反馈信息")])])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-3"},[a("i",{staticClass:"el-icon-lx-goods grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("6")]),a("div",[t._v("后续计划")])])])])],1)],1),a("el-card",{staticStyle:{height:"403px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("后续计划清单")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("添加")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!1,data:t.todoList}},[a("el-table-column",{attrs:{width:"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-checkbox",{model:{value:e.row.status,callback:function(i){t.$set(e.row,"status",i)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"todo-item",class:{"todo-item-del":e.row.status}},[t._v(t._s(e.row.title))])]}}])}),a("el-table-column",{attrs:{width:"60"}},[[a("i",{staticClass:"el-icon-edit"}),a("i",{staticClass:"el-icon-delete"})]],2)],1)],1)],1)],1)],1)},s=[],n=(i("ac6a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("canvas",{attrs:{id:t.canvasId}})])}),o=[];i("8e6e"),i("456d");function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r=i("b367"),h=i.n(r);function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var g={props:{canvasId:{type:String,default:"",required:!0},options:{type:Object,required:!0}},mounted:function(){this.renderChart()},methods:{renderChart:function(){if(this.checkOptions()){var t=d({},this.options);new h.a(this.canvasId,t)}},checkOptions:function(){var t=this.options;return!(!t.datasets||!t.datasets.length)&&!(!t.labels||!t.labels.length)}},watch:{options:{handler:function(t,e){this.renderChart()},deep:!0}}},u=g,f=i("2877"),v=Object(f["a"])(u,n,o,!1,null,null,null),p=v.exports,b=(i("7ed4"),{name:"dashboard",data:function(){return{name:localStorage.getItem("ms_username"),todoList:[{title:"列表的分页实现",status:!0},{title:"文件列表添加缩略图模式显示",status:!1},{title:"一次性多个文件同时上传",status:!1},{title:"文件、文件夹的拖拽上传",status:!1},{title:"实现流式下载的暂停、继续下载",status:!1},{title:"升级前端Vue、ElementUI、Router的版本",status:!1}],data:[{name:"2018/09/04",value:1083},{name:"2018/09/05",value:941},{name:"2018/09/06",value:1139},{name:"2018/09/07",value:816},{name:"2018/09/08",value:327},{name:"2018/09/09",value:228},{name:"2018/09/10",value:1065}]}},components:{Schart:p},computed:{role:function(){return"作者：洋葱骑士"}},methods:{changeDate:function(){var t=(new Date).getTime();this.data.forEach((function(e,i){var a=new Date(t-864e5*(6-i));e.name="".concat(a.getFullYear(),"/").concat(a.getMonth()+1,"/").concat(a.getDate())}))}}}),x=b,y=(i("4184"),Object(f["a"])(x,a,s,!1,null,"d93f0a3c",null));e["default"]=y.exports},f96c:function(t,e,i){}}]);