(this.webpackJsonpyoutubeApi=this.webpackJsonpyoutubeApi||[]).push([[0],{19:function(e,t,a){e.exports=a(46)},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(17),r=a.n(c),s=a(7),o=a.n(s),l=a(2),m=a(3),u=a(5),d=a(4),v=a(6),p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onInputChange=function(e){a.setState({term:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.onTermSubmit(a.state.term)},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:" link dim black ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),t}(i.a.Component),h=a(18),b=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),f=(a(43),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:" video-item item link dim black "},i.a.createElement("img",{className:" ui image ",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(f,{key:e.id.videoId,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},g=function(e){var t=e.selectedVideo;return t?i.a.createElement("div",null,i.a.createElement("div",{className:"ui  embed"},i.a.createElement("iframe",{title:"video",src:"https://www.youtube.com/embed/".concat(t.id.videoId)})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,"  ",t.snippet.description," "))):i.a.createElement("div",null,"Loading...")},S="AIzaSyBFtcWhvF3nQdU4xu-QejGxzjBTvJ0kABg",y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:""},a.onTermSubmit=function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(b.get("/search",{params:{part:"snippet",maxResults:5,key:S,q:e}}));case 2:t=n.sent,a.setState({videos:t.data.items,selectedVideo:t.data.items[0]}),console.log(a.state.videos);case 5:case"end":return n.stop()}}))},a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("buildings")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container shadow-4"},i.a.createElement(p,{onTermSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(g,{selectedVideo:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(E,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(i.a.Component);a(44),a(45);r.a.render(i.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.3cba1b38.chunk.js.map