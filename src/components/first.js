import React from 'react'
import Select from 'react-select'
import genreMap from './genremap.json'


const jikanBaseUrl = 'https://api.jikan.moe/v3/'

class First extends React.Component {
    constructor() {
        super()
        this.state = {
            toggleView: 'on',
            loadingToggle: 'on',
            toggleMoreInfo: 'on',
            jikanUrl: '',
            searchNameInput: '',
            yourName: '',
            nameTitles: [],
            searchGenreInput: '',
            yourGenre: '',
            genreTitles: [],
            genrePage: 1,
        }

        this.searchName = this.searchName.bind(this)
        this.onSubmitName = this.onSubmitName.bind(this)
        this.searchGenre = this.searchGenre.bind(this)
        this.onSubmitGenre = this.onSubmitGenre.bind(this)
        this.makeNameCall = this.makeNameCall.bind(this)
        this.makeGenreCall = this.makeGenreCall.bind(this)
        this.onMoreInfo = this.onMoreInfo.bind(this)
        this.onMoreInfoContinue = this.onMoreInfoContinue.bind(this)
    }

    searchName(event) {
        this.setState({
            searchNameInput: event.target.value,
            yourName: event.target.value,
        }, () => {
            console.log(this.state.yourName)
        })
    }

    searchGenre(event) {
        this.setState({
            searchGenreInput: event,
            yourGenre: event.value,
        }, () => {
            console.log(this.state.yourGenre)
        })
    }

    onSubmitName() {
        if(this.state.yourName !== '') {
            this.setState({
                toggleView: 'off',
                loadingToggle: 'off',
                jikanUrl: jikanBaseUrl + 'search/anime?q=' + this.state.yourName,
            }, () => {
                console.log(this.state.jikanUrl)
                this.makeNameCall()
            })
        }
    }

    onSubmitGenre(page) {
        page = this.state.genrePage
        if(this.state.yourGenre !== '') {
            this.setState({
                loadingToggle: 'off',
                toggleView: 'off',
                jikanUrl: jikanBaseUrl + 'genre/anime/' + this.state.yourGenre + '/' + page,
            }, () => {
                console.log(this.state.jikanUrl)
                this.setState({
                    genrePage: this.state.genrePage + 1
                })
                this.makeGenreCall()
            })
        }
    }

    onMoreInfo(event) {
        console.log(event.target.value)
        this.setState({
            moreInfoMalId: event.target.value,
            toggleView: 'on',
            toggleMoreInfo: 'off'
        }, () => {
            this.onMoreInfoContinue()
        })
    }


    onMoreInfoContinue() {
        this.setState({
            jikanUrl: jikanBaseUrl + 'anime/' + this.state.moreInfoMalId
        }, () => {
            console.log(this.state.jikanUrl)
            fetch(this.state.jikanUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    animeTitle: [data['title']],
                    animeTitleEnglish: [data['title_english']],
                    animeTitleJapanese: [data['title_japanese']],
                    animeTitlesOthers: [data['title_synonyms']],
                    animeImage: [data['image_url']],
                    animeSynopsis: [data['synopsis']],
                    animeTrailer: [data['trailer_url']],
                    animeType: [data['type']],
                    animeSource: [data['source']],
                    animeEpisodeCount: [data['episodes']],
                    animeStatus: [data['status']],
                    animeAired: [data['aired']['string']],
                }, () => {
                    this.setState({
                        loadingToggle: 'on',
                        toggleMoreInfo: 'off'
                    })
                })
            })
        })
    }

    makeNameCall() {    
        fetch(this.state.jikanUrl)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            for(var j = 0; j < data['results'].length / 2; j++) {
                var animeName = [data['results'][j]['title']]
                var animeCode = [data['results'][j]['mal_id']]
                var animeImage = [data['results'][j]['image_url']]
                var animeSynopsis = [data['results'][j]['synopsis']]
                var animeEpisodeCount = [data['results'][j]['episodes']]
                this.setState({
                    nameTitles: [...this.state.nameTitles,[
                        <br/>,
                        animeName,
                        <p>Episode Count: {animeEpisodeCount}</p>,
                        <p><img src={animeImage} alt="anime_image"></img></p>,
                        <p>{animeSynopsis}</p>,
                        <button value={animeCode} onClick={this.onMoreInfo}>More Info</button>,
                        <br/>]],
                    
                }, () => {
                    this.setState({
                        loadingToggle: 'on',
                    })
                })
            }
        })
    }

    makeGenreCall() {    
        fetch(this.state.jikanUrl)
        .then(response => response.json())
        .then(data => {
            for(var i = 0; i < data['anime'].length; i++) {
                var titleLoop = [data['anime'][i]['title']]
                var imageLoop = [data['anime'][i]['image_url']]
                var titleCode = [data['anime'][i]['mal_id']]
                this.setState({
                    genreTitles: [...this.state.genreTitles,
                    <br/>,
                    <li style={{flexDirection: 'column'}}>{titleLoop}<br/><img src={imageLoop} alt="anime_photo"></img><br/><button value={titleCode} onClick={this.onMoreInfo}>More Info</button></li>],
                    loadMoreTitles: <button onClick={this.onSubmitGenre}>More?</button>
                }, () => {
                    this.setState({
                        loadingToggle: 'on',
                    })
                })
            }
        })
    }

    render() {
        let displaySearch = {
            display: 'none'
        }
        let loading = {
            display: 'none'
        }
        let displayMoreInfo = {
            display: 'none'
        }
        if(this.state.toggleView === 'off') {
            displaySearch = {
                display: ''
            }
        }
        if(this.state.loadingToggle === 'off') {
            loading = {
                display: ''
            }
        }
        if(this.state.toggleMoreInfo === 'off') {
            displayMoreInfo = {
                display: ''
            }
        }

        return(
            <div>
                <div className="header">
                    <h1>Anime search</h1>
                    <p><i>myanimelist.net</i></p>
                    <p><i>Jikan API</i></p>
                <br/>
                <hr/>
                </div>
                <br/>
                <div className="searchname">
                    <label htmlFor="name">Search by name</label>
                    <br/>
                    <textarea className="name" name="name" value={this.state.searchNameInput} onChange={this.searchName} cols="50" rows="1"  placeholder="search by name" />
                </div>
                <br/>
                <div className="submitnamediv">
                    <button className="submitnamebutton" onClick={this.onSubmitName}>Submit</button>
                </div>
                <br/>
                <div className="searchgenre">
                    <label htmlFor="genre">Search by genre</label>
                    <br/>
                    <br/>
                    <Select className="genreselect" name="genre" value={this.state.searchGenreInput} onChange={this.searchGenre} options={genreMap} placeholder="search by genre" />
                </div>
                <br/>
                <div className="submitgenrediv">
                    <button className="submitgenrebutton" onClick={this.onSubmitGenre}>Submit</button>
                </div>
                <br/>
                <div className="loadingdiv" style={loading}>
                <p>Searching...</p>
                </div>
                <div className="genreresponse" style={displaySearch}>
                    <ul className="genretitles">{this.state.genreTitles}</ul>
                    <p>{this.state.loadMoreTitles}</p>
                </div>
                <br/>
                <div className="nameresponse" style={displaySearch}>
                    {this.state.nameTitles}
                </div>
                <br/>
                <div className="moreinfo" style={displayMoreInfo}>
                    <p><b>{this.state.animeTitle}</b></p>
                    <p>English Title: {this.state.animeTitleEnglish}</p>
                    <p>Japanese Title: {this.state.animeTitleJapanese}</p>
                    <p>Other Titles: {this.state.animeTitlesOthers}</p>
                    <p>Type: {this.state.animeType}</p>
                    <p>Source: {this.state.animeSource}</p>
                    <p>Episode Count: {this.state.animeEpisodeCount}</p>
                    <p>Status: {this.state.animeStatus}</p>
                    <p>Aired: {this.state.animeAired}</p>
                    <p><img src={this.state.animeImage} alt="cover art"></img></p>
                    <p>{this.state.animeSynopsis}</p>
                    <p><iframe className="trailerframe" src={this.state.animeTrailer} title="Trailer"></iframe></p>
                </div>
            </div>
        )
    }
}

export default First;