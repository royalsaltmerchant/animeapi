import React from 'react'
import ReactDOM from 'react-dom'
import First from './components/first.js'

const App = () => {
  return (
  <div>
    <First/>
  </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));