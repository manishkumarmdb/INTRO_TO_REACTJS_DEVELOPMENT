import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import PremiumProducts from './components/PremiumProducts'
import './App.css'

function App() {
  const [showReactApp, setShowReactApp] = useState(false)
  const [selectedApp, setSelectedApp] = useState('tic_tac_toe')

  const handleAppSelect = (appName: string) => {
    setSelectedApp(appName)
  }

  const renderAppContent = () => {
    switch (selectedApp) {
      case 'tic_tac_toe':
        return (
          <div className="app-content">
            <h2>Tic-Tac-Toe Game</h2>
            <p>Play the classic Tic-Tac-Toe game!</p>
            <div className="game-board">
              {/* Tic-Tac-Toe board will go here */}
              <p>Game board coming soon...</p>
            </div>
          </div>
        )
      case 'todo':
        return (
          <div className="app-content">
            <h2>To-Do List</h2>
            <p>Manage your tasks efficiently!</p>
            <div className="todo-app">
              {/* To-Do app will go here */}
              <p>To-Do list coming soon...</p>
            </div>
          </div>
        )
      case 'series_finder':
        return (
          <div className="app-content">
            <h2>Series Finder</h2>
            <p>Discover your next favorite TV series!</p>
            <div className="series-finder">
              {/* Series finder app will go here */}
              <p>Series finder coming soon...</p>
            </div>
          </div>
        )
      case 'premium_products':
        return <PremiumProducts />
      default:
        return (
          <div className="app-content">
            <h2>Welcome</h2>
            <p>Select an app from the sidebar to get started!</p>
          </div>
        )
    }
  }

  if (!showReactApp) {
    return (
      <>
        <div className='sidebar-toggle'>
          <h2>Welcome to My Vite + React App!</h2>
          <p>This is a simple application to demonstrate Vite with React.</p>
          <button onClick={() => setShowReactApp(!showReactApp)}>
            {showReactApp ? 'Hide' : 'Show'} React Apps
          </button>
        </div>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }

  return (
    <div className="split-screen">
      <div className="left-container">
        <Sidebar onAppSelect={handleAppSelect} selectedApp={selectedApp} />
      </div>
      <div className="right-container">
        <div className='sidebar-toggle'>
          <h2>Welcome to My Vite + React App!</h2>
          <p>This is a simple application to demonstrate Vite with React.</p>
          <button onClick={() => setShowReactApp(!showReactApp)}>
            {showReactApp ? 'Hide' : 'Show'} React Apps
          </button>
        </div>
        {renderAppContent()}
      </div>
    </div>
  )
}

export default App
