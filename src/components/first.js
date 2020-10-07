import React from 'react'


const jikanBaseUrl = 'https://api.jikan.moe/v3/'

class First extends React.Component {
    constructor() {
        super()
        this.state = {
            jikanUrl: '',
            searchNameInput: '',
            yourName: '',
        }

        this.searchName = this.searchName.bind(this)
        this.makeCall = this.makeCall.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    searchName(event) {
        this.setState({
            searchNameInput: event.target.value,
            yourName: event.target.value,
        }, () => {
            console.log(this.state.yourName)
        })
    }

    onSubmit() {
        if(this.state.yourName !== '') {
            this.setState({
                jikanUrl: jikanBaseUrl + 'search/anime?q=' + this.state.yourName,
            }, () => {
                console.log(this.state.jikanUrl)
                this.makeCall()
            })
        }
    }

    makeCall() {    
        fetch(this.state.jikanUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
                this.setState({
                    animeName: [data['results'][0]['title']],
                }, () => {
                    console.log(this.state.animeName)
                })
        })
    }

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Anime API</h1>
                </div>
                <div className="searchname">
                    <label htmlFor="name">Search by name</label>
                    <br/>
                    <textarea name="name" value={this.state.searchNameInput} onChange={this.searchName} cols="50" rows="1"  placeholder="search by name" />
                </div>
                <div className="submitdiv">
                    <button className="submitbutton" onClick={this.onSubmit}>Submit</button>
                </div>
                <div className="response">
                    <p>{this.state.animeName}</p>
                </div>
            </div>
        )
    }
}

export default First;