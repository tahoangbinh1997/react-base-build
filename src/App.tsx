import React from 'react'
import logo from 'logo.svg'
import 'App.css'
import useBearStore from 'store/bearStore'

const App = () => {
  const { bears, increasePopulation } = useBearStore()

  return (
    <div className="App">
      <header className="App-header">
        <p>{ bears }</p>
        <button onClick={increasePopulation}>
          Click me
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
