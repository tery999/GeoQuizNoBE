import { useEffect, useRef, useState } from 'react'
import * as styles from "./App.module.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Flags from './Components/Flags/Flags'
import EuropeFlags from './Components/Flags/EuropeFlags/EuropeFlags'
import AsiaFlags from './Components/Flags/AsiaFlags/AsiaFlags'
import Navigation from './Components/Navigation/Navigation'


function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Flags" >
      <Route index element={<Flags />} />
        <Route path="Europe" element={<EuropeFlags />} />
        <Route path="Asia" element={<AsiaFlags />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
