(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],{14:function(e,a,t){e.exports=t(21)},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),i=t.n(r),s=t(5),o=t(7),c=t(8),m=t(1),u=t(13),h=t(12),b=t(11),g=t(9),v="https://api.jikan.moe/v3/",E=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={toggleView:"on",loadingToggle:"on",toggleMoreInfo:"on",jikanUrl:"",searchNameInput:"",yourName:"",nameTitles:[],searchGenreInput:"",yourGenre:"",genreTitles:[],genrePage:1},e.searchName=e.searchName.bind(Object(m.a)(e)),e.onSubmitName=e.onSubmitName.bind(Object(m.a)(e)),e.searchGenre=e.searchGenre.bind(Object(m.a)(e)),e.onSubmitGenre=e.onSubmitGenre.bind(Object(m.a)(e)),e.makeNameCall=e.makeNameCall.bind(Object(m.a)(e)),e.makeGenreCall=e.makeGenreCall.bind(Object(m.a)(e)),e.onMoreInfo=e.onMoreInfo.bind(Object(m.a)(e)),e.onMoreInfoContinue=e.onMoreInfoContinue.bind(Object(m.a)(e)),e}return Object(c.a)(t,[{key:"searchName",value:function(e){var a=this;this.setState({searchNameInput:e.target.value,yourName:e.target.value},(function(){console.log(a.state.yourName)}))}},{key:"searchGenre",value:function(e){var a=this;this.setState({searchGenreInput:e,yourGenre:e.value},(function(){console.log(a.state.yourGenre)}))}},{key:"onSubmitName",value:function(){var e=this;""!==this.state.yourName&&this.setState({toggleView:"off",loadingToggle:"off",jikanUrl:v+"search/anime?q="+this.state.yourName},(function(){console.log(e.state.jikanUrl),e.makeNameCall()}))}},{key:"onSubmitGenre",value:function(e){var a=this;e=this.state.genrePage,""!==this.state.yourGenre&&this.setState({loadingToggle:"off",toggleView:"off",jikanUrl:v+"genre/anime/"+this.state.yourGenre+"/"+e},(function(){console.log(a.state.jikanUrl),a.setState({genrePage:a.state.genrePage+1}),a.makeGenreCall()}))}},{key:"onMoreInfo",value:function(e){var a=this;console.log(e.target.value),this.setState({moreInfoMalId:e.target.value,toggleView:"on",toggleMoreInfo:"off"},(function(){a.onMoreInfoContinue()}))}},{key:"onMoreInfoContinue",value:function(){var e=this;this.setState({jikanUrl:v+"anime/"+this.state.moreInfoMalId},(function(){console.log(e.state.jikanUrl),fetch(e.state.jikanUrl).then((function(e){return e.json()})).then((function(a){console.log(a),e.setState({animeTitle:[a.title],animeTitleEnglish:[a.title_english],animeTitleJapanese:[a.title_japanese],animeTitlesOthers:[a.title_synonyms],animeImage:[a.image_url],animeSynopsis:[a.synopsis],animeTrailer:[a.trailer_url],animeType:[a.type],animeSource:[a.source],animeEpisodeCount:[a.episodes],animeStatus:[a.status],animeAired:[a.aired.string]},(function(){e.setState({loadingToggle:"on",toggleMoreInfo:"off"})}))}))}))}},{key:"makeNameCall",value:function(){var e=this;fetch(this.state.jikanUrl).then((function(e){return e.json()})).then((function(a){for(var t=0;t<a.results.length/2;t++){var n=[a.results[t].title],r=[a.results[t].mal_id],i=[a.results[t].image_url],o=[a.results[t].synopsis],c=[a.results[t].episodes];e.setState({nameTitles:[].concat(Object(s.a)(e.state.nameTitles),[[l.a.createElement("br",null),n,l.a.createElement("p",null,"Episode Count: ",c),l.a.createElement("p",null,l.a.createElement("img",{src:i,alt:"anime_image"})),l.a.createElement("p",null,o),l.a.createElement("button",{value:r,onClick:e.onMoreInfo},"More Info"),l.a.createElement("br",null)]])},(function(){e.setState({loadingToggle:"on"})}))}}))}},{key:"makeGenreCall",value:function(){var e=this;fetch(this.state.jikanUrl).then((function(e){return e.json()})).then((function(a){for(var t=0;t<a.anime.length;t++){var n=[a.anime[t].title],r=[a.anime[t].image_url],i=[a.anime[t].mal_id];e.setState({genreTitles:[].concat(Object(s.a)(e.state.genreTitles),[l.a.createElement("br",null),l.a.createElement("li",{style:{flexDirection:"column"}},n,l.a.createElement("br",null),l.a.createElement("img",{src:r,alt:"anime_photo"}),l.a.createElement("br",null),l.a.createElement("button",{value:i,onClick:e.onMoreInfo},"More Info"))]),loadMoreTitles:l.a.createElement("button",{onClick:e.onSubmitGenre},"More?")},(function(){e.setState({loadingToggle:"on"})}))}}))}},{key:"render",value:function(){var e={display:"none"},a={display:"none"},t={display:"none"};return"off"===this.state.toggleView&&(e={display:""}),"off"===this.state.loadingToggle&&(a={display:""}),"off"===this.state.toggleMoreInfo&&(t={display:""}),l.a.createElement("div",null,l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Anime search"),l.a.createElement("p",null,l.a.createElement("i",null,"myanimelist.net")),l.a.createElement("p",null,l.a.createElement("i",null,"Jikan API")),l.a.createElement("br",null),l.a.createElement("hr",null)),l.a.createElement("br",null),l.a.createElement("div",{className:"searchname"},l.a.createElement("label",{htmlFor:"name"},"Search by name"),l.a.createElement("br",null),l.a.createElement("textarea",{className:"name",name:"name",value:this.state.searchNameInput,onChange:this.searchName,cols:"50",rows:"1",placeholder:"search by name"})),l.a.createElement("br",null),l.a.createElement("div",{className:"submitnamediv"},l.a.createElement("button",{className:"submitnamebutton",onClick:this.onSubmitName},"Submit")),l.a.createElement("br",null),l.a.createElement("div",{className:"searchgenre"},l.a.createElement("label",{htmlFor:"genre"},"Search by genre"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{className:"genreselect",name:"genre",value:this.state.searchGenreInput,onChange:this.searchGenre,options:g,placeholder:"search by genre"})),l.a.createElement("br",null),l.a.createElement("div",{className:"submitgenrediv"},l.a.createElement("button",{className:"submitgenrebutton",onClick:this.onSubmitGenre},"Submit")),l.a.createElement("br",null),l.a.createElement("div",{className:"loadingdiv",style:a},l.a.createElement("p",null,"Searching...")),l.a.createElement("div",{className:"genreresponse",style:e},l.a.createElement("ul",{className:"genretitles"},this.state.genreTitles),l.a.createElement("p",null,this.state.loadMoreTitles)),l.a.createElement("br",null),l.a.createElement("div",{className:"nameresponse",style:e},this.state.nameTitles),l.a.createElement("br",null),l.a.createElement("div",{className:"moreinfo",style:t},l.a.createElement("p",null,l.a.createElement("b",null,this.state.animeTitle)),l.a.createElement("p",null,"English Title: ",this.state.animeTitleEnglish),l.a.createElement("p",null,"Japanese Title: ",this.state.animeTitleJapanese),l.a.createElement("p",null,"Other Titles: ",this.state.animeTitlesOthers),l.a.createElement("p",null,"Type: ",this.state.animeType),l.a.createElement("p",null,"Source: ",this.state.animeSource),l.a.createElement("p",null,"Episode Count: ",this.state.animeEpisodeCount),l.a.createElement("p",null,"Status: ",this.state.animeStatus),l.a.createElement("p",null,"Aired: ",this.state.animeAired),l.a.createElement("p",null,l.a.createElement("img",{src:this.state.animeImage,alt:"cover art"})),l.a.createElement("p",null,this.state.animeSynopsis),l.a.createElement("p",null,l.a.createElement("iframe",{className:"trailerframe",src:this.state.animeTrailer,title:"Trailer"}))))}}]),t}(l.a.Component),f=function(){return l.a.createElement("div",null,l.a.createElement(E,null))};i.a.render(l.a.createElement(f,null),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"label":"Action","value":"1"},{"label":"Adventure","value":"2"},{"label":"Comedy","value":"4"},{"label":"Mystery","value":"7"},{"label":"Drama","value":"8"},{"label":"Ecchi","value":"9"},{"label":"Fantasy","value":"10"},{"label":"Game","value":"11"},{"label":"Historical","value":"13"},{"label":"Horror","value":"14"},{"label":"Martial Arts","value":"17"},{"label":"Mecha","value":"18"},{"label":"Music","value":"19"},{"label":"Mecha","value":"18"},{"label":"Samurai","value":"21"},{"label":"Romance","value":"22"},{"label":"School","value":"23"},{"label":"Sci-Fi","value":"24"},{"label":"Shoujo","value":"25"},{"label":"Shounen","value":"27"},{"label":"Sports","value":"30"},{"label":"Harem","value":"35"},{"label":"Slice Of Life","value":"36"},{"label":"Supernatural","value":"37"},{"label":"Military","value":"38"},{"label":"Psychological","value":"39"},{"label":"Seinen","value":"42"},{"label":"Josei","value":"43"}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.7d912868.chunk.js.map