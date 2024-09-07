import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const createElem = React.createElement(
  'a',
  {
    href: "https://google.com",
    target:"_blank",
  },
  'Click Brother'
)

const anotherElem = (
  <h1>Ek aur Tarika</h1>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // createElem
  // anotherElem
  <App />
)
