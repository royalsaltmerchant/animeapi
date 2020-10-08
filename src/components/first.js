import React from 'react'
import Select from 'react-select'
import genreMap from './genremap.json'


const jikanBaseUrl = 'https://api.jikan.moe/v3/'

class First extends React.Component {
    constructor() {
        super()
        this.state = {
            toggleView: 'on',
            jikanUrl: '',
            searchNameInput: '',
            yourName: '',
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

    makeNameCall() {    
        fetch(this.state.jikanUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
                this.setState({
                    animeName: [data['results'][0]['title']],
                    animeImage: [data['results'][0]['image_url']],
                    animeSynopsis: [data['results'][0]['synopsis']],
                    animeEpisodeCount: [data['results'][0]['episodes']],
                    animeStartDate: [data['results'][0]['start_date']],
                    animeEndDate: [data['results'][0]['end_date']],
                }, () => {
                    console.log(this.state.animeImage)
                })
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
                })
            }
        })
    }

    render() {
        let displayAnimeInfo = {
            display: 'none'
        }
        if(this.state.toggleView === 'off') {
            displayAnimeInfo = {
                display: 'block'
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
                    <textarea name="name" value={this.state.searchNameInput} onChange={this.searchName} cols="50" rows="1"  placeholder="search by name" />
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
                <div className="genreresponse">
                    <ul className="genretitles">{this.state.genreTitles}</ul>
                    <p>{this.state.loadMoreTitles}</p>
                </div>
                <br/>
                <div className="nameresponse" style={displayAnimeInfo}>
                    <p>{this.state.animeName}</p>
                    <p>Episode Count: {this.state.animeEpisodeCount}</p>
                    <p>Start Date: {this.state.animeStartDate}</p>
                    <p>End Date: {this.state.animeEndDate}</p>
                    <p><img src={this.state.animeImage} alt="anime_image"></img></p>
                    <p>{this.state.animeSynopsis}</p>
                </div>
            </div>
        )
    }
}

export default First;