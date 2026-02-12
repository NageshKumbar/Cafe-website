import './App.css'
import Navbar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
