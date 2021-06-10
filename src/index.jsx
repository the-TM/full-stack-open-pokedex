import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
console.log(String(process.env.SOURCE_VERSION || 'local'))
ReactDOM.render(<App />, document.getElementById('app'))
