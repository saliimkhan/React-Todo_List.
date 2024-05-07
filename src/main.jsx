import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './Context/Context.jsx'
// import Context1 from './Context1/Context1';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   

    <Context>
    <App />
    </Context>

  </React.StrictMode>,
)
