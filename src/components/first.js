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

    onMoreInfo() {
        this.setState({
            loadingToggle: 'off',
        })
    }

    makeNameCall() {    
        fetch(this.state.jikanUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for(var j = 0; j < data.['results'].length; j++) {
                var animeName = [data['results'][j]['title']]
                var animeImage = [data['results'][j]['image_url']]
                var animeSynopsis = [data['results'][j]['synopsis']]
                var animeEpisodeCount = [data['results'][j]['episodes']]
                this.setState({
                    nameTitles: [...this.state.nameTitles,
                        <p>{animeName}</p>,
                        <p>Episode Count: {animeEpisodeCount}</p>,
                        <p><img src={animeImage} alt="anime_image"></img></p>,
                        <p>{animeSynopsis}</p>,
                        <button>More Info</button>,
                        <br/>],
                    
                }, () => {
                    console.log(this.state.animeImage)
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
                this.setState({
                    genreTitles: [...this.state.genreTitles,<br/>,<li>{titleLoop}<br/><img src={imageLoop} alt="anime_photo"></img></li>],
                    loadMoreTitles: <button onClick={this.onSubmitGenre}>More Titles?</button>
                }, () => {
                    this.setState({
                        loadingToggle: 'on',
                    })
                })
            }
        })
    }

    render() {
        let displayAnimeInfo = {
            display: 'none'
        }
        let loading = {
            display: 'none'
        }
        if(this.state.toggleView === 'off') {
            displayAnimeInfo = {
                display: ''
            }
        }
        if(this.state.loadingToggle === 'off') {
            loading = {
                display: ''
            }
        }

        return(
            <div>
                <div className="header">
                    <h1>Anime search</h1>
                </div>
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
                <div className="genreresponse">
                    <ul className="genretitles">{this.state.genreTitles}</ul>
                    <p>{this.state.loadMoreTitles}</p>
                </div>
                <br/>
                <div className="nameresponse" style={displayAnimeInfo}>
                    {this.state.nameTitles}
                </div>
            </div>
        )
    }
}

export default First;