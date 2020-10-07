import React from 'react'

class First extends React.Component {
    constructor() {
        super()
        this.state = {
            something: 'sentence'
        }

        this.myFunction = this.myFunction.bind(this)
    }

    myFunction() {
        console.log('yes')
    }

    render() {
        this.myFunction()
        return(
            <div>
                <div className="header">
                    <h1>Anime API</h1>
                </div>
                <div>
                    <label>
                        
                    </label>
                    <textarea>

                    </textarea>
                </div>
            </div>
        )
    }
}

export default First;