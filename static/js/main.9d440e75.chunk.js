(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],{14:function(e,a,t){e.exports=t(21)},21:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),i=t.n(r),s=t(5),o=t(7),m=t(8),c=t(1),u=t(13),h=t(12),g=t(11),b=t(9),E="https://api.jikan.moe/v3/",v=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={toggleView:"on",loadingToggle:"on",toggleMoreInfo:"on",jikanUrl:"",searchNameInput:"",yourName:"",nameTitles:[],searchGenreInput:"",yourGenre:"",genreTitles:[],genrePage:1},e.searchName=e.searchName.bind(Object(c.a)(e)),e.onSubmitName=e.onSubmitName.bind(Object(c.a)(e)),e.searchGenre=e.searchGenre.bind(Object(c.a)(e)),e.onSubmitGenre=e.onSubmitGenre.bind(Object(c.a)(e)),e.makeNameCall=e.makeNameCall.bind(Object(c.a)(e)),e.makeGenreCall=e.makeGenreCall.bind(Object(c.a)(e)),e.onMoreInfo=e.onMoreInfo.bind(Object(c.a)(e)),e.onMoreInfoContinue=e.onMoreInfoContinue.bind(Object(c.a)(e)),e}return Object(m.a)(t,[{key:"searchName",value:function(e){var a=this;this.setState({searchNameInput:e.target.value,yourName:e.target.value},(function(){console.log(a.state.yourName)}))}},{key:"searchGenre",value:function(e){var a=this;this.setState({searchGenreInput:e,yourGenre:e.value,genrePage:1},(function(){console.log(a.state.yourGenre)}))}},{key:"onSubmitName",value:function(){var e=this;""!==this.state.yourName&&this.setState({toggleView:"off",loadingToggle:"off",jikanUrl:E+"search/anime?q="+this.state.yourName},(function(){console.log(e.state.jikanUrl),e.makeNameCall()}))}},{key:"onSubmitGenre",value:function(e){var a=this;e=this.state.genrePage,""!==this.state.yourGenre&&this.setState({loadingToggle:"off",toggleView:"off",jikanUrl:E+"genre/anime/"+this.state.yourGenre+"/"+e},(function(){console.log(a.state.jikanUrl),a.setState({genrePage:a.state.genrePage+1}),a.makeGenreCall()}))}},{key:"onMoreInfo",value:function(e){var a=this;console.log(e.target.value),this.setState({moreInfoMalId:e.target.value,toggleView:"on",toggleMoreInfo:"off"},(function(){a.onMoreInfoContinue()}))}},{key:"onMoreInfoContinue",value:function(){var e=this;this.setState({jikanUrl:E+"anime/"+this.state.moreInfoMalId},(function(){console.log(e.state.jikanUrl),fetch(e.state.jikanUrl).then((function(e){return e.json()})).then((function(a){console.log(a),e.setState({animeTitle:[a.title],animeTitleEnglish:[a.title_english],animeTitleJapanese:[a.title_japanese],animeImage:[a.image_url],animeSynopsis:[a.synopsis],animeTrailer:[a.trailer_url],animeType:[a.type],animeSource:[a.source],animeEpisodeCount:[a.episodes],animeStatus:[a.status],animeAired:[a.aired.string],animeDuration:[a.duration],animeStudioName:[a.studios[0].name]},(function(){window.scrollTo(0,600),e.setState({loadingToggle:"on",toggleMoreInfo:"off"})}))}))}))}},{key:"makeNameCall",value:function(){var e=this;this.setState({nameTitles:[],genreTitles:[],loadMoreTitles:"",toggleMoreInfo:"on"}),fetch(this.state.jikanUrl).then((function(e){return e.json()})).then((function(a){for(var t=0;t<a.results.length/2;t++){var l=[a.results[t].title],r=[a.results[t].mal_id],i=[a.results[t].image_url],o=[a.results[t].synopsis],m=[a.results[t].episodes];e.setState({nameTitles:[].concat(Object(s.a)(e.state.nameTitles),[[n.a.createElement("br",null),l,n.a.createElement("p",null,"Episode Count: ",m),n.a.createElement("p",null,n.a.createElement("img",{src:i,alt:"anime_image"})),n.a.createElement("p",null,o),n.a.createElement("button",{value:r,onClick:e.onMoreInfo},"More Info"),n.a.createElement("br",null)]])},(function(){window.scrollTo(0,600),e.setState({loadingToggle:"on"})}))}}))}},{key:"makeGenreCall",value:function(){var e=this;this.setState({genreTitles:[],nameTitles:[],toggleMoreInfo:"on"}),fetch(this.state.jikanUrl).then((function(e){return e.json()})).then((function(a){for(var t=0;t<a.anime.length;t++){var l=[a.anime[t].title],r=[a.anime[t].image_url],i=[a.anime[t].mal_id];e.setState({genreTitles:[].concat(Object(s.a)(e.state.genreTitles),[n.a.createElement("br",null),n.a.createElement("li",{style:{flexDirection:"column"}},l,n.a.createElement("br",null),n.a.createElement("img",{src:r,alt:"anime_photo"}),n.a.createElement("br",null),n.a.createElement("button",{value:i,onClick:e.onMoreInfo},"More Info"))]),loadMoreTitles:n.a.createElement("button",{onClick:e.onSubmitGenre},"More?")},(function(){window.scrollTo(0,540),e.setState({loadingToggle:"on"})}))}}))}},{key:"render",value:function(){var e={display:"none"},a={display:"none"},t={display:"none"};return"off"===this.state.toggleView&&(e={display:""}),"off"===this.state.loadingToggle&&(a={display:""}),"off"===this.state.toggleMoreInfo&&(t={display:""}),n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Anime"),n.a.createElement("p",null,n.a.createElement("i",null,"myanimelist.net")),n.a.createElement("p",null,n.a.createElement("i",null,"Jikan API")),n.a.createElement("br",null),n.a.createElement("hr",null)),n.a.createElement("br",null),n.a.createElement("div",{className:"searchname"},n.a.createElement("label",{htmlFor:"name"},n.a.createElement("b",null,"Search by Name")),n.a.createElement("br",null),n.a.createElement("textarea",{className:"name",name:"name",value:this.state.searchNameInput,onChange:this.searchName,cols:"50",rows:"1",placeholder:"search by name"})),n.a.createElement("br",null),n.a.createElement("div",{className:"submitnamediv"},n.a.createElement("button",{className:"submitnamebutton",onClick:this.onSubmitName},"Search")),n.a.createElement("br",null),n.a.createElement("div",{className:"searchgenre"},n.a.createElement("label",{htmlFor:"genre"},n.a.createElement("b",null,"Search by Genre")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(g.a,{className:"genreselect",name:"genre",value:this.state.searchGenreInput,onChange:this.searchGenre,options:b,placeholder:"search by genre"})),n.a.createElement("br",null),n.a.createElement("div",{className:"submitgenrediv"},n.a.createElement("button",{className:"submitgenrebutton",onClick:this.onSubmitGenre},"Search")),n.a.createElement("br",null),n.a.createElement("div",{className:"loadingdiv",style:a}),n.a.createElement("div",{className:"genreresponse",style:e},n.a.createElement("ul",{className:"genretitles"},this.state.genreTitles),n.a.createElement("p",null,this.state.loadMoreTitles)),n.a.createElement("div",{className:"nameresponse",style:e},this.state.nameTitles),n.a.createElement("br",null),n.a.createElement("h2",{style:t},n.a.createElement("b",null,this.state.animeTitle)),n.a.createElement("div",{className:"moreinfo",style:t},n.a.createElement("div",{className:"moreinfo-upper-text"},n.a.createElement("p",null,"English Title: ",this.state.animeTitleEnglish),n.a.createElement("p",null,"Japanese Title: ",this.state.animeTitleJapanese),n.a.createElement("p",null,"Studio: ",this.state.animeStudioName),n.a.createElement("p",null,"Type: ",this.state.animeType),n.a.createElement("p",null,"Source: ",this.state.animeSource),n.a.createElement("p",null,"Episode Count: ",this.state.animeEpisodeCount),n.a.createElement("p",null,"Duration: ",this.state.animeDuration),n.a.createElement("p",null,"Status: ",this.state.animeStatus),n.a.createElement("p",null,"Aired: ",this.state.animeAired)),n.a.createElement("p",null,n.a.createElement("img",{className:"cover-art",src:this.state.animeImage,alt:"cover art"})),n.a.createElement("div",{className:"moreinfo-lower-text"},n.a.createElement("p",null,n.a.createElement("b",null,"Synopsis:")),n.a.createElement("p",null,this.state.animeSynopsis),n.a.createElement("p",null,n.a.createElement("b",null,"Trailer:")),n.a.createElement("iframe",{className:"trailerframe",src:this.state.animeTrailer,title:"Trailer"}))))}}]),t}(n.a.Component),f=function(){return n.a.createElement("div",null,n.a.createElement(v,null))};i.a.render(n.a.createElement(f,null),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"label":"Action","value":"1"},{"label":"Adventure","value":"2"},{"label":"Comedy","value":"4"},{"label":"Mystery","value":"7"},{"label":"Drama","value":"8"},{"label":"Ecchi","value":"9"},{"label":"Fantasy","value":"10"},{"label":"Game","value":"11"},{"label":"Historical","value":"13"},{"label":"Horror","value":"14"},{"label":"Martial Arts","value":"17"},{"label":"Mecha","value":"18"},{"label":"Music","value":"19"},{"label":"Mecha","value":"18"},{"label":"Samurai","value":"21"},{"label":"Romance","value":"22"},{"label":"School","value":"23"},{"label":"Sci-Fi","value":"24"},{"label":"Shoujo","value":"25"},{"label":"Shounen","value":"27"},{"label":"Sports","value":"30"},{"label":"Harem","value":"35"},{"label":"Slice Of Life","value":"36"},{"label":"Supernatural","value":"37"},{"label":"Military","value":"38"},{"label":"Psychological","value":"39"},{"label":"Seinen","value":"42"},{"label":"Josei","value":"43"}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.9d440e75.chunk.js.map