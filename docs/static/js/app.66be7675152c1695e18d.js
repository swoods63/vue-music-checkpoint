webpackJsonp([0],[,function(t,s,e){e(19);var n=e(0)(e(9),e(24),"data-v-7187c616",null);t.exports=n.exports},function(t,s,e){e(16);var n=e(0)(e(10),e(21),"data-v-3992b3ca",null);t.exports=n.exports},function(t,s,e){e(17);var n=e(0)(e(8),e(22),null,null);t.exports=n.exports},,function(t,s,e){"use strict";function n(){localStorage.setItem("myTunes",o()(i))}var a=e(13),o=e.n(a),r=e(4),i={songs:[]};!function(){i=JSON.parse(localStorage.getItem("myTunes"))||{songs:[]}}(),s.a={getTracks:function(){return i.songs.sort(function(t,s){return s.votes-t.votes})},addTrack:function(t){t.votes=0,i.songs.push(t),r.a.set(i,t.id,t),n()},removeTrack:function(t){var s=i.songs.indexOf(t);i.songs.splice(s,1),n()},promoteTrack:function(t){var s=i.songs.indexOf(t);return i.songs[s].votes+=1,n(),this.getTracks()},demoteTrack:function(t){var s=i.songs.indexOf(t);i.songs[s].votes-=1,this.getTracks(),n()}}},function(t,s,e){e(18);var n=e(0)(e(7),e(23),null,null);t.exports=n.exports},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(3),a=e.n(n),o=e(1),r=e.n(o),i=e(2),c=e.n(i);s.default={name:"app",components:{Home:a.a,Itunes:r.a,Mytunes:c.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(1),a=e.n(n),o=e(2),r=e.n(o);s.default={name:"home",data:function(){return{}},components:{Mytunes:r.a,Itunes:a.a}},$(function(){$("audio").on("play",function(){$("audio").not(this).each(function(t,s){s.pause()})})})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(12),a=e(5);s.default={name:"itunes",data:function(){return{songs:[],artist:""}},computed:{},methods:{search:function(){var t=this;n.a.getMusicByArtist(this.artist).then(function(s){var e=JSON.parse(s);t.songs=e.results})},addSong:function(t){a.a.addTrack(t)}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(5);s.default={name:"mytunes",data:function(){return{songs:n.a.getTracks()}},methods:{removeTrack:function(t){n.a.removeTrack(t)},promoteTrack:function(t){this.songs=n.a.promoteTrack(t),console.log("promote")},demoteTrack:function(t){n.a.demoteTrack(t),this.songs=n.a.getTracks(),console.log("demote")},addSong:function(t){var s=JSON.parse(t.dataTransfer.getData("text/javascript"));myTunesService.addTrack(s)}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(4),a=e(6),o=e.n(a),r=e(3),i=(e.n(r),e(1)),c=(e.n(i),e(2));e.n(c);new n.a({el:"#app",template:"<App/>",components:{App:o.a}})},function(t,s,e){"use strict";var n=e(20),a=e.n(n);s.a={getMusicByArtist:function(t){var s="https://itunes.apple.com/search?term="+t,e="//bcw-getter.herokuapp.com/?url="+encodeURIComponent(s);return a.a.get(e)}}},,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"component"},[e("div",{staticClass:"container"},t._l(t.songs,function(s){return e("div",{key:s.trackId,staticClass:"row"},[e("div",{staticClass:"row"},[e("div",{staticClass:" delete col-xs-1"},[e("img",{attrs:{src:s.artworkUrl60}}),t._v(" "),e("button",{on:{click:function(e){t.removeTrack(s)}}},[t._v("X")])]),t._v(" "),e("div",{staticClass:"col-xs-1"},[e("p",[t._v(t._s(s.artistName))]),t._v(" "),e("p",[t._v(t._s(s.primaryGenreName))])]),t._v(" "),e("div",{staticClass:"col-xs-2"},[e("p",[t._v(t._s(s.trackName))]),t._v(" "),e("button",{staticClass:"btn btn-default btn-sm",on:{click:function(e){t.promoteTrack(s)}}},[e("span",{staticClass:"glyphicon glyphicon-arrow-up"})]),t._v(" "),e("button",{staticClass:"btn btn-default btn-sm",on:{click:function(e){t.demoteTrack(s)}}},[e("span",{staticClass:"glyphicon glyphicon-arrow-down"})])]),t._v(" "),e("div",{staticClass:"col-xs-2"})]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-4"}),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("audio",{attrs:{controls:""}},[e("source",{attrs:{src:s.previewUrl,type:"audio/ogg"}})])])])])}))])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home container"},[e("div",{staticClass:"row"},[e("h1",[t._v("Itunes Music")]),t._v(" "),e("Itunes",{staticClass:"itunes col-xs-8 iTunes"}),t._v(" "),e("h1",{staticClass:"myMusicTitle"},[t._v("Mytunes Music")]),t._v(" "),e("Mytunes",{staticClass:"mytunes col-xs-4 my-Tunes"})],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("home")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"itunes"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("form",{staticClass:"form-inline",on:{submit:function(s){s.preventDefault(),t.search(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Artist Name"},domProps:{value:t.artist},on:{input:function(s){s.target.composing||(t.artist=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"get-music-button"}},[t._v("Get Music")])])])])]),t._v(" "),e("hr"),t._v(" "),t._l(t.songs,function(s){return e("div",{key:s.trackId},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2"},[e("img",{attrs:{src:s.artworkUrl60}})]),t._v(" "),e("div",{staticClass:"col-xs-2"},[e("p",[t._v(t._s(s.artistName))]),t._v(" "),e("p",[t._v(t._s(s.primaryGenreName))])]),t._v(" "),e("div",{staticClass:"col-xs-4"},[e("p",[t._v(t._s(s.trackName))]),t._v(" "),e("p",[t._v(t._s(s.collectionName))])]),t._v(" "),e("div",{staticClass:"col-xs-2"},[e("button",{staticClass:"btn btn-primary btn-large",on:{click:function(e){t.addSong(s)}}},[e("i",{staticClass:"glyphicon glyphicon-plus"})])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-4"}),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("audio",{attrs:{controls:""}},[e("source",{attrs:{src:s.previewUrl,type:"audio/ogg"}})])])])])})],2)},staticRenderFns:[]}}],[11]);
//# sourceMappingURL=app.66be7675152c1695e18d.js.map