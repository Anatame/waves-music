(this["webpackJsonpwaves-music"]=this["webpackJsonpwaves-music"]||[]).push([[0],{18:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(12),o=c.n(r),i=c(4),s=c.n(i),p=c(6),l=c(3),u=c(8),d=(c(18),c(7)),h=c(5),b=c(0);function j(e){var t=e.setSongs,c=e.setCurrentSong,n=e.songs,r=e.currentSong,o=e.isPlaying,i=e.setIsPlaying,u=e.audioRef,j=e.setSongInfo,m=e.songInfo;Object(a.useEffect)((function(){var e=n.map((function(e){return e.id===r.id?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})}));t(e)}),[r]);var f=function(){var e=Object(p.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.findIndex((function(e){return e.id===r.id})),"skip-forward"!==t){e.next=6;break}return e.next=4,c(n[(a+1)%n.length]);case 4:e.next=11;break;case 6:if((a-1)%n.length!==-1){e.next=9;break}return c(n[n.length-1]),e.abrupt("return");case 9:o&&u.current.play(),c(n[(a-1)%n.length]);case 11:o&&u.current.play();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)};return Object(b.jsxs)("div",{className:"player",children:[Object(b.jsxs)("div",{className:"time-control",children:[Object(b.jsx)("p",{children:v(m.currentTime)}),Object(b.jsx)("input",{min:0,max:m.duration||0,value:m.currentTime,onChange:function(e){u.current.currentTime=e.target.value,j(Object(l.a)(Object(l.a)({},m),{},{currentTime:e.target.value}))},type:"range"}),Object(b.jsx)("p",{children:m.duration?v(m.duration):"0:00"})]}),Object(b.jsxs)("div",{className:"play-control",children:[Object(b.jsx)(d.a,{size:"2x",onClick:function(){return f("skip-back")},className:"skip-back",icon:h.a}),Object(b.jsx)(d.a,{size:"2x",onClick:function(){o?(u.current.pause(),i(!o)):(u.current.play(),i(!o))},className:"play",icon:o?h.d:h.e}),Object(b.jsx)(d.a,{size:"2x",onClick:function(){return f("skip-forward")},className:"skip-forward",icon:h.b})]})]})}function m(e){var t=e.currentSong;return Object(b.jsxs)("div",{className:"song-container",children:[Object(b.jsx)("img",{alt:"Song cover",src:t.cover}),Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("h3",{children:t.artist})]})}function f(e){var t=e.song,c=e.songs,a=e.setCurrentSong,n=e.id,r=e.audioRef,o=e.isPlaying,i=e.setSongs,u=function(){var e=Object(p.a)(s.a.mark((function e(){var p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:p=c.map((function(e){return e.id===n?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),i(p),o&&r.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{onClick:u,className:"library-song ".concat(t.active?"selected":"    "),children:[Object(b.jsx)("img",{alt:t.name,src:t.cover}),Object(b.jsxs)("div",{className:"song-description",children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsx)("h4",{children:t.artist})]})]})}function v(e){var t=e.libraryStatus,c=e.isPlaying,a=e.audioRef,n=e.songs,r=e.setCurrentSong,o=e.setSongs;return Object(b.jsxs)("div",{className:"library ".concat(t?"active-library":""),children:[Object(b.jsx)("h2",{children:"Library"}),Object(b.jsx)("div",{className:"library-songs",children:n.map((function(e){return Object(b.jsx)(f,{setSongs:o,isPlaying:c,audioRef:a,id:e.id,songs:n,setCurrentSong:r,song:e},e.id)}))})]})}function g(e){var t=e.libraryStatus,c=e.setLibraryStatus;return Object(b.jsxs)("nav",{children:[Object(b.jsx)("h1",{children:"Waves"}),Object(b.jsxs)("button",{onClick:function(){return c(!t)},children:["Library",Object(b.jsx)(d.a,{icon:h.c})]})]})}var O=c(27);var x=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"Cabin in the Woods",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",artist:"Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=10315",color:["#ED632D","#B3786E"],id:Object(O.a)(),active:!0},{name:"Sleepover",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano, JK the Sage",audio:"https://mp3.chillhop.com/serve.php/?mp3=10130",color:["#F4A49E","#5B518B"],id:Object(O.a)(),active:!1},{name:"Sodium",cover:"https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",artist:"Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=9149",color:["#C7F1ED","#353C5C"],id:Object(O.a)(),active:!1},{name:"Bliss",cover:"https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",artist:"Misha, Jussi Halme",audio:"https://mp3.chillhop.com/serve.php/?mp3=9248",color:["#AC8CB1","#2A416D"],id:Object(O.a)(),active:!1},{name:"Brazil",cover:"https://chillhop.com/wp-content/uploads/2020/07/87506c6ad4c74ecfef7f61b52a4b3e0ab0564390-1024x1024.jpg",artist:"Monma, Misha, Jussi Halme",audio:"https://mp3.chillhop.com/serve.php/?mp3=8279",color:["#7469C6","#663F90"],id:Object(O.a)(),active:!1},{name:"Canary Forest",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#185361","#7D4338"],id:Object(O.a)(),active:!1},{name:"Silience",cover:"https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",artist:"Toonorth",audio:"https://mp3.chillhop.com/serve.php/?mp3=8425",color:["#A46B46","#BCCC44"],id:Object(O.a)(),active:!1},{name:"Never Ending",cover:"https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",artist:"Sitting Duck, squeeda",audio:"https://mp3.chillhop.com/serve.php/?mp3=9652",color:["#6CCABC","#7B6247"],id:Object(O.a)(),active:!1},{name:"Paraglider",cover:"https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",artist:"Kendall Miles, H E R B",audio:"https://mp3.chillhop.com/serve.php/?mp3=9318",color:["#DC714B","#000000"],id:Object(O.a)(),active:!1}]};var S=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(x()),c=Object(u.a)(t,2),n=c[0],r=c[1],o=Object(a.useState)(n[0]),i=Object(u.a)(o,2),d=i[0],h=i[1],f=Object(a.useState)(!1),O=Object(u.a)(f,2),S=O[0],y=O[1],C=Object(a.useState)({currentTime:0,duration:0}),w=Object(u.a)(C,2),k=w[0],A=w[1],N=Object(a.useState)(!1),B=Object(u.a)(N,2),E=B[0],D=B[1],M=function(e){var t=e.target.currentTime,c=e.target.duration;A(Object(l.a)(Object(l.a)({},k),{},{currentTime:t,duration:c}))},P=function(){var t=Object(p.a)(s.a.mark((function t(){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.findIndex((function(e){return e.id===d.id})),t.next=3,h(n[(c+1)%n.length]);case 3:S&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App ".concat(E?"library-active":""),children:[Object(b.jsx)(g,{libraryStatus:E,setLibraryStatus:D}),Object(b.jsx)(m,{currentSong:d}),Object(b.jsx)(j,{setSongs:r,setCurrentSong:h,songs:n,songInfo:k,setSongInfo:A,audioRef:e,currentSong:d,isPlaying:S,setIsPlaying:y}),Object(b.jsx)(v,{libraryStatus:E,setSongs:r,isPlaying:S,audioRef:e,songs:n,setCurrentSong:h}),Object(b.jsx)("audio",{onLoadedMetadata:M,onTimeUpdate:function(e){return M(e)},ref:e,onEnded:P,src:d.audio})]})};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.963028d7.chunk.js.map