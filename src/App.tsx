import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import PremiumProducts from './apps/premium_products/PremiumProducts'
import './App.css'
import TicTacToe from './apps/tic_tac_toe/TicTacToe'

function App() {
  const [showSplitView, setShowSplitView] = useState(false)
  const [selectedApp, setSelectedApp] = useState('tic_tac_toe')

  const handleAppSelect = (appName: string) => {
    setSelectedApp(appName)
  }

  const renderAppContent = () => {
    switch (selectedApp) {
      case 'tic_tac_toe':
        return <TicTacToe />
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

  if (!showSplitView) {
    return (
      <>
        <div className='sidebar-toggle'>
          <h2>Welcome to My Vite + React App!</h2>
          <p>This is a simple application to demonstrate Vite with React.</p>
          <button className='show-button' onClick={() => setShowSplitView(!showSplitView)}>
            {showSplitView ? 'Hide' : 'Show'} React Apps
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
        <div className='app-controls'>
          <button className="home-btn" onClick={() => setShowSplitView(false)}>
            🏠 Home
          </button>
        </div>
        {renderAppContent()}
      </div>
    </div>
  )
}

export default App
