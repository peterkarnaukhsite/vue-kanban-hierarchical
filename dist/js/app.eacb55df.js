(function(t){function e(e){for(var n,a,c=e[0],i=e[1],u=e[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,c=1;c<o.length;c++){var i=o[c];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0168":function(t,e,o){},"028c":function(t,e,o){},1646:function(t,e,o){"use strict";o("a424")},"1fd7":function(t,e,o){},"236d":function(t,e,o){},"2fc4":function(t,e,o){},"399b":function(t,e,o){"use strict";o("028c")},"3b1c":function(t,e,o){"use strict";o("236d")},4759:function(t,e,o){"use strict";o("1fd7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={class:"app"},s=Object(n["g"])("div",{class:"app__header"},[Object(n["g"])("h1",{class:"app__title"},"Kanban Board"),Object(n["g"])("p",{class:"app__subtitle"},"vuejs based")],-1);function a(t,e,o,a,c,i){var u=Object(n["x"])("router-view");return Object(n["r"])(),Object(n["f"])("div",r,[s,Object(n["i"])(u)])}var c=o("5530"),i=o("5502"),u={computed:Object(c["a"])({},Object(i["c"])({boards:function(t){return t.boards}})),beforeCreate:function(){this.$store.commit("initialiseStore")}};o("4759");u.render=a;var l=u,p=o("6c02"),d={class:"board-single"},b=Object(n["h"])("Back to boards list"),f=Object(n["g"])("br",null,null,-1),m={class:"columns"},O={class:"item__title"},j=Object(n["g"])("span",null,"Column title",-1);function h(t,e,o,r,s,a){var c=Object(n["x"])("router-link"),i=Object(n["x"])("column"),u=Object(n["x"])("popup");return Object(n["r"])(),Object(n["f"])("div",d,[Object(n["i"])(c,{class:"link board-single__link",to:"/"},{default:Object(n["D"])((function(){return[b]})),_:1}),f,Object(n["g"])("button",{class:"btn btn_primary",onClick:e[0]||(e[0]=function(){return a.showModal&&a.showModal.apply(a,arguments)})},"Add column"),Object(n["g"])("ul",m,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.properBoardColumns,(function(t,e){return Object(n["r"])(),Object(n["f"])("li",{class:"columns__item item",key:t.id},[Object(n["g"])("div",null,[Object(n["g"])("h2",O,Object(n["z"])(a.properBoardColumns[e].title),1)]),Object(n["i"])(i,{properBoard:o.properBoard,properColumn:e},null,8,["properBoard","properColumn"])])})),128))]),s.isPopupVisible?(Object(n["r"])(),Object(n["d"])(u,{key:0,btnName:"Add Column",modalTitle:"Add new column",onClosePopup:a.closePopup,onConfirmEdit:a.addColumnTo},{default:Object(n["D"])((function(){return[j,Object(n["E"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.newColumn.columnTitle=t})},null,512),[[n["B"],s.newColumn.columnTitle]])]})),_:1},8,["onClosePopup","onConfirmEdit"])):Object(n["e"])("",!0)])}o("7db0");var k={class:"column"},g={class:"column__btns"},v={class:"column__tasks tasks"},T=Object(n["h"])(" Title "),_=Object(n["h"])(" Description "),C=Object(n["h"])(" Details ");function w(t,e,o,r,s,a){var c=this,i=Object(n["x"])("task"),u=Object(n["x"])("draggable"),l=Object(n["x"])("popup");return Object(n["r"])(),Object(n["f"])("div",k,[Object(n["g"])("div",g,[Object(n["g"])("button",{class:"btn btn_alert",onClick:e[0]||(e[0]=function(){return a.removeColumn&&a.removeColumn.apply(a,arguments)})},"Remove column"),Object(n["g"])("button",{class:"btn btn_primary",onClick:e[1]||(e[1]=function(){return a.showPopup&&a.showPopup.apply(a,arguments)})},"Add Task")]),Object(n["g"])("ul",v,[Object(n["i"])(u,{modelValue:a.draggables,"onUpdate:modelValue":e[2]||(e[2]=function(t){return a.draggables=t}),group:"tasks"},{default:Object(n["D"])((function(){return[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.properColumnTasks,(function(t,e){return Object(n["r"])(),Object(n["f"])("li",{key:t.id},[Object(n["i"])(i,{taskIndex:e,properColumn:c.properColumn,properBoard:c.properBoard},null,8,["taskIndex","properColumn","properBoard"])])})),128))]})),_:1},8,["modelValue"])]),s.isPopupVisible?(Object(n["r"])(),Object(n["d"])(l,{key:0,btnName:"Add Task",onClosePopup:a.closePopup,onConfirmEdit:a.addTaskTo},{default:Object(n["D"])((function(){return[Object(n["g"])("label",null,[T,Object(n["E"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=function(t){return s.taskData.title=t})},null,512),[[n["B"],s.taskData.title]])]),Object(n["g"])("label",null,[_,Object(n["E"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=function(t){return s.taskData.descr=t})},null,512),[[n["B"],s.taskData.descr]])]),Object(n["g"])("label",null,[C,Object(n["E"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=function(t){return s.taskData.fullDescr=t})},null,512),[[n["B"],s.taskData.fullDescr]])])]})),_:1},8,["onClosePopup","onConfirmEdit"])):Object(n["e"])("",!0)])}o("a9e3");var y={class:"task"},P={class:"task__title"},B={class:"task__descr"},D={class:"task__full"},x={class:"task__btns"},V=Object(n["h"])("View "),U=Object(n["g"])("span",null,"Edit task title",-1),E=Object(n["g"])("span",null,"Edit task description",-1),S=Object(n["g"])("span",null,"Edit task details",-1);function $(t,e,o,r,s,a){var c=Object(n["x"])("router-link"),i=Object(n["x"])("popup");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",y,[Object(n["g"])("h3",P,Object(n["z"])(a.properTask.title),1),Object(n["g"])("p",B,Object(n["z"])(a.properTask.descr),1),Object(n["g"])("p",D,Object(n["z"])(a.properTask.fullDescr),1),Object(n["g"])("div",x,[Object(n["g"])("button",{class:"btn btn_alert",onClick:e[0]||(e[0]=function(){return a.removeTask&&a.removeTask.apply(a,arguments)})},"Remove Task"),Object(n["g"])("button",{class:"btn btn_primary",onClick:e[1]||(e[1]=function(){return a.showPopup&&a.showPopup.apply(a,arguments)})},"Edit"),Object(n["i"])(c,{class:"btn btn_primary",to:{name:"details",params:{id:a.properTask.id,col:o.properColumn,idx:o.taskIndex}}},{default:Object(n["D"])((function(){return[V]})),_:1},8,["to"])])]),s.isPopupVisible?(Object(n["r"])(),Object(n["d"])(i,{key:0,btnName:"Edit Task",onClosePopup:a.closePopup,onConfirmEdit:a.updateTask},{default:Object(n["D"])((function(){return[Object(n["g"])("label",null,[U,Object(n["E"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return s.taskToUpdate.newTitle=t})},null,512),[[n["B"],s.taskToUpdate.newTitle]])]),Object(n["g"])("label",null,[E,Object(n["E"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=function(t){return s.taskToUpdate.newDescr=t})},null,512),[[n["B"],s.taskToUpdate.newDescr]])]),Object(n["g"])("label",null,[S,Object(n["E"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=function(t){return s.taskToUpdate.newFullDescr=t})},null,512),[[n["B"],s.taskToUpdate.newFullDescr]])])]})),_:1},8,["onClosePopup","onConfirmEdit"])):Object(n["e"])("",!0)],64)}var I={class:"v-popup"},N={class:"v-popup__body"},F={class:"v-popup__header"},M={class:"v-popup__content"},z={class:"v-popup__footer"};function A(t,e,o,r,s,a){return Object(n["r"])(),Object(n["f"])("div",I,[Object(n["g"])("div",N,[Object(n["g"])("div",F,Object(n["z"])(o.modalTitle),1),Object(n["g"])("div",M,[Object(n["w"])(t.$slots,"default")]),Object(n["g"])("div",z,[Object(n["g"])("button",{onClick:e[0]||(e[0]=function(){return a.closePopup&&a.closePopup.apply(a,arguments)}),class:"v-popup__btn v-popup__btn_cancel"}," Cancel "),Object(n["g"])("button",{onClick:e[1]||(e[1]=function(){return a.confirmEdit&&a.confirmEdit.apply(a,arguments)}),class:"v-popup__btn v-popup__btn_add"},Object(n["z"])(o.btnName),1)])])])}var J={props:{btnName:String,modalTitle:String},emits:["closePopup","confirmEdit"],methods:{closePopup:function(){this.$emit("closePopup")},confirmEdit:function(){this.$emit("confirmEdit")}},computed:{}};o("c694");J.render=A;var R=J,K={props:{taskIndex:Number,properColumn:Number,properBoard:String},components:{Popup:R},data:function(){return{isPopupVisible:!1,taskToUpdate:{newTitle:"",newDescr:"",newFullDescr:"",taskIndex:this.taskIndex,properColumn:this.properColumn,properBoard:this.properBoard}}},methods:{showPopup:function(){this.isPopupVisible=!0,this.taskToUpdate.newTitle=this.properTask.title,this.taskToUpdate.newDescr=this.properTask.descr,this.taskToUpdate.newFullDescr=this.properTask.fullDescr},closePopup:function(){this.isPopupVisible=!1,this.taskToUpdate.newTitle="",this.taskToUpdate.newDescr="",this.taskToUpdate.newFullDescr=""},resetFields:function(){this.taskToUpdate.newTitle="",this.taskToUpdate.newDescr="",this.taskToUpdate.newFullDescr=""},updateTask:function(){this.$store.dispatch("updateTask",this.taskToUpdate),this.closePopup(),this.resetFields()},removeTask:function(){this.$store.commit({type:"removeTask",properties:{id:this.taskIndex,c:this.properColumn,b:this.properBoard}})}},computed:Object(c["a"])(Object(c["a"])({},Object(i["c"])({columns:function(t){return t.boards.columns}})),{},{properTask:function(){var t=this.properBoard,e=this.properColumn,o=this.taskIndex;return this.$store.state.boards[t].columns[e].tasks[o]}})};o("b5ae");K.render=$;var q=K,G=o("7d42"),H={props:{properColumn:Number,properBoard:String},data:function(){return{isPopupVisible:!1,taskData:{title:"",descr:"",fullDescr:""}}},components:{Task:q,Popup:R,draggable:G["a"]},methods:Object(c["a"])({showPopup:function(){this.isPopupVisible=!0},resetFields:function(){this.taskData.title="",this.taskData.descr="",this.taskData.fullDescr=""},addTaskTo:function(){this.$store.dispatch({type:"addTask",properties:{b:this.properBoard,c:this.properColumn,taskData:this.taskData}}),this.resetFields(),this.isPopupVisible=!1},closePopup:function(){this.resetFields(),this.isPopupVisible=!1},removeColumn:function(){this.$store.commit("removeColumn",{c:this.properColumn,b:this.properBoard})}},Object(i["b"])(["addTask"])),computed:Object(c["a"])(Object(c["a"])({},Object(i["c"])({columns:function(t){return t.boards.columns}})),{},{properColumnTasks:function(){var t=this.properBoard,e=this.properColumn;return this.$store.state.boards[t].columns[e].tasks},draggables:{get:function(){return this.properColumnTasks},set:function(t){this.$store.commit("reorderTasks",{properColumnTasks:t,board:this.properBoard,col:this.properColumn})}}})};o("3b1c");H.render=w;var L=H,Q={data:function(){return{isPopupVisible:!1,newColumn:{columnTitle:"",columnBoard:this.properBoard}}},props:{properBoard:String,slug:String},components:{Column:L,Popup:R},methods:Object(c["a"])({showModal:function(){this.isPopupVisible=!0},addColumnTo:function(){this.$store.dispatch("addColumn",this.newColumn),this.closePopup()},closePopup:function(){this.newColumn.columnTitle="",this.isPopupVisible=!1}},Object(i["b"])(["addColumn"])),computed:Object(c["a"])(Object(c["a"])({},Object(i["c"])({columns:function(t){return t.boards.columns}})),{},{properBoardColumns:function(){var t=this;return this.$store.state.boards.find((function(e){return e.slug===t.$route.params.slug})).columns}})};o("1646");Q.render=h;var W=Q,X={class:"boards-list"},Y={class:"boards-list__title"},Z=Object(n["g"])("span",null,"Board slug",-1);function tt(t,e,o,r,s,a){var c=Object(n["x"])("router-link"),i=Object(n["x"])("popup");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["g"])("button",{class:"btn btn_primary",onClick:e[0]||(e[0]=function(){return a.showModal&&a.showModal.apply(a,arguments)})},"Add Board"),Object(n["g"])("ul",X,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(t.boards,(function(t,e){return Object(n["r"])(),Object(n["f"])("li",{class:"boards-list__item",key:t},[Object(n["g"])("h2",Y,[Object(n["i"])(c,{to:{name:"board",params:{slug:t.slug,properBoard:e}}},{default:Object(n["D"])((function(){return[Object(n["h"])(Object(n["z"])(t.slug),1)]})),_:2},1032,["to"])])])})),128))]),s.isPopupVisible?(Object(n["r"])(),Object(n["d"])(i,{key:0,btnName:"Add Board",modalTitle:"Add your board",onClosePopup:a.closePopup,onConfirmEdit:a.addBoard},{default:Object(n["D"])((function(){return[Object(n["g"])("label",null,[Z,Object(n["E"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.newBoard.boardSlug=t})},null,512),[[n["B"],s.newBoard.boardSlug]])])]})),_:1},8,["onClosePopup","onConfirmEdit"])):Object(n["e"])("",!0)])}var et={props:{},components:{Popup:R},data:function(){return{isPopupVisible:!1,newBoard:{boardSlug:""}}},methods:Object(c["a"])({showModal:function(){this.isPopupVisible=!0},closePopup:function(){this.newBoard.boarSlug="",this.isPopupVisible=!1},addBoard:function(){this.$store.dispatch("addNewBoard",this.newBoard),this.closePopup()}},Object(i["b"])(["addNewBoard"])),computed:Object(c["a"])({},Object(i["c"])({boards:function(t){return t.boards}}))};o("795f");et.render=tt;var ot=et,nt={class:"details"},rt=Object(n["g"])("h2",{class:"details__title"},"Task details",-1),st={class:"details__btns"},at=Object(n["h"])("Back"),ct={key:0,class:"details__body"},it={class:"details__title"},ut={class:"details__paragraph"},lt={class:"details__paragraph"},pt={key:1},dt=Object(n["g"])("p",null,"No tasks here...",-1),bt=[dt];function ft(t,e,o,r,s,a){var c=Object(n["x"])("router-link");return Object(n["r"])(),Object(n["f"])("div",nt,[rt,Object(n["g"])("div",st,[Object(n["i"])(c,{class:"btn btn_primary",to:"/"},{default:Object(n["D"])((function(){return[at]})),_:1})]),a.task?(Object(n["r"])(),Object(n["f"])("div",ct,[Object(n["g"])("h3",it,Object(n["z"])(a.task.title),1),Object(n["g"])("p",ut,Object(n["z"])(a.task.descr),1),Object(n["g"])("p",lt,Object(n["z"])(a.task.fullDescr),1),Object(n["g"])("button",{class:"btn btn_primary",onClick:e[0]||(e[0]=function(){return a.removeTask&&a.removeTask.apply(a,arguments)})},"Remove Task")])):(Object(n["r"])(),Object(n["f"])("div",pt,bt))])}o("4de4"),o("5db7"),o("73d9");var mt={methods:{removeTask:function(){this.$store.commit({type:"removeTask",properties:{id:this.$route.params.idx,c:this.$route.params.col,b:this.$route.params.properBoard}})}},computed:Object(c["a"])(Object(c["a"])({},Object(i["c"])({boards:function(t){return t.boards}})),{},{task:function(){var t=this,e=this.boards.flatMap((function(t){return t.columns})).flatMap((function(t){return t.tasks})).filter((function(e){return e.id===t.$route.params.id}));return e[0]}})};o("399b");mt.render=ft;var Ot=mt,jt=[{path:"/",component:ot},{path:"/board/:slug-:properBoard",component:W,name:"board",props:!0},{path:"/board/:slug-:properBoard/task-:col-:idx-:id",name:"details",component:Ot,props:!0}],ht=Object(p["a"])({history:Object(p["b"])("/"),routes:jt}),kt=ht,gt=o("d4ec"),vt=(o("a434"),o("cc98")),Tt=o.n(vt),_t=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.columns,n=void 0===o?[]:o,r=e.slug,s=void 0===r?"":r;Object(gt["a"])(this,t),this.id=Tt()(),this.columns=n,this.slug=s},Ct=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.tasks,n=void 0===o?[]:o,r=e.title,s=void 0===r?"":r;Object(gt["a"])(this,t),this.id=Tt()(),this.tasks=n,this.title=s},wt=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.title,n=void 0===o?"":o,r=e.descr,s=void 0===r?"":r,a=e.fullDescr,c=void 0===a?"":a;Object(gt["a"])(this,t),this.id=Tt()(),this.title=n,this.descr=s,this.fullDescr=c},yt=Object(i["a"])({state:{nextBoadrId:0,nextColId:0,nextTaskId:0,boards:[]},mutations:{addBoard:function(t,e){t.boards.push(new _t({id:this.state.nextBoadrId+=1,slug:e.boardSlug}))},addColumn:function(t,e){t.boards[e.columnBoard].columns.push(new Ct({id:this.state.nextColId+=1,title:e.columnTitle}))},addTask:function(t,e){var o=e.properties,n=o.b,r=o.c,s=e.properties.taskData,a=s.title,c=s.descr,i=s.fullDescr;t.boards[n].columns[r].tasks.push(new wt({id:this.state.nextTaskId+=1,title:a,descr:c,fullDescr:i}))},removeTask:function(t,e){if(confirm("Are U sure")){var o=e.properties,n=o.id,r=o.c,s=o.b;t.boards[s].columns[r].tasks.splice(n,1)}},updateTask:function(t,e){var o=e.newTitle,n=e.newDescr,r=e.newFullDescr,s=e.taskIndex,a=e.properColumn,c=e.properBoard;t.boards[c].columns[a].tasks.splice([s],1,new wt({id:this.state.nextTaskId+=1,title:o,descr:n,fullDescr:r}))},reorderTasks:function(t,e){var o=e.properColumnTasks,n=e.board,r=e.col;t.boards[n].columns[r].tasks=o},removeColumn:function(t,e){if(confirm("Are U sure")){var o=e.c,n=e.b;t.boards[n].columns.splice(o,1)}},initialiseStore:function(t){localStorage.getItem("store")&&this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("store"))))}},actions:{addNewBoard:function(t,e){t.commit("addBoard",e)},addColumn:function(t,e){t.commit("addColumn",e)},addTask:function(t,e){t.commit("addTask",e)},updateTask:function(t,e){t.commit("updateTask",e)}},modules:{}});yt.subscribe((function(t,e){localStorage.setItem("store",JSON.stringify(e))}));var Pt=yt;o("2fc4");Object(n["c"])(l).use(Pt).use(kt).mount("#app")},"75ac":function(t,e,o){},"795f":function(t,e,o){"use strict";o("8c67")},"8c67":function(t,e,o){},a424:function(t,e,o){},b5ae:function(t,e,o){"use strict";o("0168")},c694:function(t,e,o){"use strict";o("75ac")}});
//# sourceMappingURL=app.eacb55df.js.map