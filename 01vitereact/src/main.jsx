import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  const userName = "Piyush"
  return (
    <div>
      <h1>Custom App {userName}</h1>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyApp /> 
  </React.StrictMode>,
)
