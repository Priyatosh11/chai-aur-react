import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
const secondUser = "Priyatosh"
const  reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target:'_blank' },
  'Google',
  secondUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
   
  reactElement
)
