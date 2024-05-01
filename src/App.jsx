import { useEffect, useRef, useState } from 'react'
import * as styles from "./App.module.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Flags from './Components/Flags/Flags'
import EuropeFlags from './Components/Flags/EuropeFlags/EuropeFlags'
import AsiaFlags from './Components/Flags/AsiaFlags/AsiaFlags'
import Navigation from './Components/Navigation/Navigation'
import AmericaFlags from './Components/Flags/AmericaFlags/AmericaFlags'
import AfricaFlags from './Components/Flags/AfricaFlags/AfricaFlags'
import Outlines from './Components/Outlines/Outlines'
import EuropeOutlines from './Components/Outlines/EuropeOutlines/EuropeOutlines'
import AsiaOutlines from './Components/Outlines/AsiaOutlines/AsiaOutlines'
import AmericasOutlines from './Components/Outlines/AmericasOutlines/AmericasOutlines'


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
        <Route path="Americas" element={<AmericaFlags />} />
        <Route path="Africa" element={<AfricaFlags />} />
      </Route>
      <Route path="Outlines" >
        <Route index element={<Outlines/>} />
        <Route path="Europe" element={<EuropeOutlines />} />
        <Route path="Asia" element={<AsiaOutlines />} />
        <Route path="Americas" element={<AmericasOutlines />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
