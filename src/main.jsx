import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CreateStore from './Components/ContexApi/CreateStore.jsx'

let Name="asghar ali"
let age =20
let email="www.asghar.com"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <CreateStore.Provider value={{Name,age,email}} >

    <App />
  </CreateStore.Provider>
  // </StrictMode>,
)
