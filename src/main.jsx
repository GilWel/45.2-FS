import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Feedback from './components/Feedback/Feedback.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  
    {/* <Feedback />   */}
  </StrictMode>,
)
