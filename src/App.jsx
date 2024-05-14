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
import AfricaOutlines from './Components/Outlines/AfricaOutlines/AfricaOutlines'
import Capitals from './Components/Capitals/Capitals'
import EuropeCapitals from './Components/Capitals/EuropeCapitals/EuropeCapitals'
import AfricaCapitals from './Components/Capitals/Africa Capitals/AfricaCapitals'
import AsiaCapitals from './Components/Capitals/Asia Capitals/AsiaCapitals'
import AmericaCapitals from './Components/Capitals/America Capitals/AmericaCapitals'
import CapitalsPlus from './Components/CapitalsPlus/CapitalsPlus'
import AfricaCapitalsPlus from './Components/CapitalsPlus/Africa Capitals Plus/AfricaCapitalsPlus'
import EuropeCapitalsPlus from './Components/CapitalsPlus/EuropeCapitals/EuropeCapitalsPlus'
import AsiaCapitalsPlus from './Components/CapitalsPlus/Asia Capitals Plus/AsiaCapitalsPlus'
import AmericaCapitalsPlus from './Components/CapitalsPlus/America Capitals Plus/AmericaCapitalsPlus'


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
          <Route index element={<Outlines />} />
          <Route path="Europe" element={<EuropeOutlines />} />
          <Route path="Asia" element={<AsiaOutlines />} />
          <Route path="Americas" element={<AmericasOutlines />} />
          <Route path="Africa" element={<AfricaOutlines />} />
        </Route>
        <Route path="Capitals" >
          <Route index element={<Capitals />} />
          <Route path="Europe" element={<EuropeCapitals />} />
          <Route path="Asia" element={<AsiaCapitals />} />
          <Route path="Americas" element={<AmericaCapitals />} />
          <Route path="Africa" element={<AfricaCapitals />} />
          <Route path='Plus'>
            <Route index element={<CapitalsPlus />} />
            <Route path="Europe" element={<EuropeCapitalsPlus />} />
            <Route path="Asia" element={<AsiaCapitalsPlus />} />
            <Route path="Americas" element={<AmericaCapitalsPlus />} />
            <Route path="Africa" element={<AfricaCapitalsPlus />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
