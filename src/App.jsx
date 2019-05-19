import React from 'react'
import MonsterListContainer from './containers/MonsterListContainer/MonsterListContainer'

function App() {
  return (
    <React.Fragment>
      <header>
        <h1 className="title">Monster Manager</h1>
      </header>
      <MonsterListContainer />
    </React.Fragment>
  )
}

export default App
