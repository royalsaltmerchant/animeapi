(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],{14:function(e,a,t){e.exports=t(21)},21:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),s=t.n(r),i=t(11),c=t(6),o=t(7),m=t(1),u=t(13),h=t(12),b=t(10),v=t(8),g=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={toggleView:"on",loadingtoggle:"on",jikanUrl:"",searchNameInput:"",yourName:"",searchGenreInput:"",yourGenre:"",genreTitles:[],genrePage:1},e.searchName=e.searchName.bind(Object(m.a)(e)),e.onSubmitName=e.onSubmitName.bind(Object(m.a)(e)),e.searchGenre=e.searchGenre.bind(Object(m.a)(e)),e.onSubmitGenre=e.onSubmitGenre.bind(Object(m.a)(e)),e.makeNameCall=e.makeNameCall.bind(Object(m.a)(e)),e.makeGenreCall=e.makeGenreCall.bind(Object(m.a)(e)),e}return Object(o.a)(t,[{key:"searchName",value:function(e){var a=this;this.setState({searchNameInput:e.target.value,yourName:e.target.value},(function(){console.log(a.state.yourName)}))}},{key:"searchGenre",value:function(e){var a=this;this.setState({searchGenreInput:e,yourGenre:e.value},(function(){console.log(a.state.yourGenre)}))}},{key:"onSubmitName",value:function(){var e=this;""!==this.state.yourName&&this.setState({toggleView:"off",jikanUrl:"https://api.jikan.moe/v3/search/anime?q="+this.state.yourName},(function(){console.log(e.state.jikanUrl),e.makeNameCall()}))}},{key:"onSubmitGenre",value:function(e){var a=this;e=this.state.genrePage,""!==this.state.yourGenre&&this.setState({loadingtoggle:"off",jikanUrl:"https://api.jikan.moe/v3/genre/anime/"+this.state.yourGenre+"/"+e},(function(){console.log(a.state.jikanUrl),a.setState({genrePage:a.state.genrePage+1}),a.makeGenreCall()}))}},{key:"makeNameCall",value:function(){var e=this;fetch(this.state.jikanUrl).then((function(e){return e.json()})).then((function(a){console.log(a),e.setState({animeName:[a.results[0].title],animeImage:[a.results[0].image_url],animeSynopsis:[a.results[0].synopsis],animeEpisodeCount:[a.results[0].episodes]},(function(){console.log(e.state.animeImage),e.setState({loadingtoggle:"on"})}))}))}},{key:"makeGenreCall",value:function(){var e=this;fetch(this.state.jikanUrl).then((function(e){return e.json()})).then((function(a){for(var t=0;t<a.anime.length;t++){var l=[a.anime[t].title],r=[a.anime[t].image_url];e.setState({genreTitles:[].concat(Object(i.a)(e.state.genreTitles),[n.a.createElement("br",null),n.a.createElement("li",null,l,n.a.createElement("br",null),n.a.createElement("img",{src:r,alt:"anime_photo"}))]),loadMoreTitles:n.a.createElement("button",{onClick:e.onSubmitGenre},"More Titles?")},(function(){e.setState({loadingtoggle:"on"})}))}}))}},{key:"render",value:function(){var e={display:"none"},a={display:"none"};return"off"===this.state.toggleView&&(e={display:""}),"off"===this.state.loadingtoggle&&(a={display:""}),n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Anime search")),n.a.createElement("div",{className:"searchname"},n.a.createElement("label",{htmlFor:"name"},"Search by name"),n.a.createElement("br",null),n.a.createElement("textarea",{className:"name",name:"name",value:this.state.searchNameInput,onChange:this.searchName,cols:"50",rows:"1",placeholder:"search by name"})),n.a.createElement("br",null),n.a.createElement("div",{className:"submitnamediv"},n.a.createElement("button",{className:"submitnamebutton",onClick:this.onSubmitName},"Submit")),n.a.createElement("br",null),n.a.createElement("div",{className:"searchgenre"},n.a.createElement("label",{htmlFor:"genre"},"Search by genre"),n.a.createElement("br",null),n.a.createElement(b.a,{className:"genreselect",name:"genre",value:this.state.searchGenreInput,onChange:this.searchGenre,options:v,placeholder:"search by genre"})),n.a.createElement("br",null),n.a.createElement("div",{className:"submitgenrediv"},n.a.createElement("button",{className:"submitgenrebutton",onClick:this.onSubmitGenre},"Submit")),n.a.createElement("br",null),n.a.createElement("div",{className:"loadingdiv",style:a},n.a.createElement("p",null,"Searching...")),n.a.createElement("div",{className:"genreresponse"},n.a.createElement("ul",{className:"genretitles"},this.state.genreTitles),n.a.createElement("p",null,this.state.loadMoreTitles)),n.a.createElement("br",null),n.a.createElement("div",{className:"nameresponse",style:e},n.a.createElement("p",null,this.state.animeName),n.a.createElement("p",null,"Episode Count: ",this.state.animeEpisodeCount),n.a.createElement("p",null,n.a.createElement("img",{src:this.state.animeImage,alt:"anime_image"})),n.a.createElement("p",null,this.state.animeSynopsis)))}}]),t}(n.a.Component),p=function(){return n.a.createElement("div",null,n.a.createElement(g,null))};s.a.render(n.a.createElement(p,null),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"label":"Action","value":"1"},{"label":"Adventure","value":"2"},{"label":"Comedy","value":"4"},{"label":"Mystery","value":"7"},{"label":"Drama","value":"8"},{"label":"Ecchi","value":"9"},{"label":"Fantasy","value":"10"},{"label":"Game","value":"11"},{"label":"Historical","value":"13"},{"label":"Horror","value":"14"},{"label":"Martial Arts","value":"17"},{"label":"Mecha","value":"18"},{"label":"Music","value":"19"},{"label":"Mecha","value":"18"},{"label":"Samurai","value":"21"},{"label":"Romance","value":"22"},{"label":"School","value":"23"},{"label":"Sci-Fi","value":"24"},{"label":"Shoujo","value":"25"},{"label":"Shounen","value":"27"},{"label":"Sports","value":"30"},{"label":"Harem","value":"35"},{"label":"Slice Of Life","value":"36"},{"label":"Supernatural","value":"37"},{"label":"Military","value":"38"},{"label":"Psychological","value":"39"},{"label":"Seinen","value":"42"},{"label":"Josei","value":"43"}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.16516bd5.chunk.js.map