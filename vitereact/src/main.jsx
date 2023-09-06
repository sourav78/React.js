import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ReactElement = React.createElement(
  'a',
  {href: "https://www.linkedin.com/in/sourav-ranjan-sahoo-583066246/", target: "_blank"},
  "Linkedin"
)

const element3 = (
    <a href='https://linkedin.com' target='_blank'>Visit Linkedin</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    element3
)
