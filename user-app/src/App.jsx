// import React from 'react'

import {Outlet} from "react-router-dom"
import Navegator from "./components/Navegator"
import Footer from "./components/Footer"
function App() {

  return (
    <>
    <Navegator />
    <div>APP</div>
    <Outlet />
    <Footer />
    </>
  )
}

export default App
