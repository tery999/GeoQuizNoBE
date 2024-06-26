import { createContext, useContext, useEffect, useRef, useState } from 'react'
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
import FlagsPlus from './Components/Flags Plus/FlagsPlus'
import EuropeFlagsPlus from './Components/Flags Plus/EuropeFlagsPlus/EuropeFlagsPlus'
import AsiaFlagsPlus from './Components/Flags Plus/AsiaFlagsPlus/AsiaFlagsPlus'
import AmericaFlagsPlus from './Components/Flags Plus/AmericaFlagsPlus/AmericaFlagsPlus'
import AfricaFlagsPlus from './Components/Flags Plus/AfricaFlagsPlus/AfricaFlagsPlus'
import OutlinesPlus from './Components/OutlinesPlus/OutlinesPlus'
import EuropeOutlinesPlus from './Components/OutlinesPlus/EuropeOutlinesPlus/EuropeOutlinesPlus'
import AsiaOutlinesPlus from './Components/OutlinesPlus/AsiaOutlinesPlus/AsiaOutlinesPlus'
import AmericasOutlinesPlus from './Components/OutlinesPlus/AmericasOutlinesPlus/AmericasOutlinesPlus'
import AfricaOutlinesPlus from './Components/OutlinesPlus/AfricaOutlinesPlus/AfricaOutlinesPlus'
import Scores from './Components/Scores/Scores'

export const ScoreContext = createContext();
function App() {
  const [score, setScore] = useState({
    EuroFlags: 0, AsiaFlags: 0, AfricaFlags: 0, AmericasFlags: 0,
    EuroFlagsPlus: 0, AsiaFlagsPlus: 0, AfricaFlagsPlus: 0, AmericasFlagsPlus: 0,
    EuroCapitals: 0, AsiaCapitals: 0, AfricaCapitals: 0, AmericasCapitals: 0,
    EuroCapitalsPlus: 0, AsiaCapitalsPlus: 0, AfricaCapitalsPlus: 0, AmericasCapitalsPlus: 0,
    EuroOutlines:0 , AsiaOutlines:0, AfricaOutlines:0, AmericasOutlines:0,
    EuroOutlinesPlus:0, AsiaOutlinesPlus:0, AfricaOutlinesPlus:0, AmericasOutlinesPlus:0
  })
  console.log("SCORE IS", score)

  const changeScoreFunc = (addedScore) => {
    debugger;
    setScore((prev) => ({ ...prev, ...addedScore }))
  }

  const values = {
    score,
    changeScoreFunc
  }
  return (
    <>
      <ScoreContext.Provider value={values}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Flags" >
            <Route index element={<Flags />} />
            <Route path="Europe" element={<EuropeFlags />} />
            <Route path="Asia" element={<AsiaFlags />} />
            <Route path="Americas" element={<AmericaFlags />} />
            <Route path="Africa" element={<AfricaFlags />} />
            <Route path='Plus'>
              <Route index element={<FlagsPlus />} />
              <Route path="Europe" element={<EuropeFlagsPlus />} />
              <Route path="Asia" element={<AsiaFlagsPlus />} />
              <Route path="Americas" element={<AmericaFlagsPlus />} />
              <Route path="Africa" element={<AfricaFlagsPlus />} />
            </Route>
          </Route>
          <Route path="Outlines" >
            <Route index element={<Outlines />} />
            <Route path="Europe" element={<EuropeOutlines />} />
            <Route path="Asia" element={<AsiaOutlines />} />
            <Route path="Americas" element={<AmericasOutlines />} />
            <Route path="Africa" element={<AfricaOutlines />} />
            <Route path='Plus'>
              <Route index element={<OutlinesPlus />} />
              <Route path="Europe" element={<EuropeOutlinesPlus />} />
              <Route path="Asia" element={<AsiaOutlinesPlus />} />
              <Route path="Americas" element={<AmericasOutlinesPlus />} />
              <Route path="Africa" element={<AfricaOutlinesPlus />} />
            </Route>
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
          <Route path="Scores" element={<Scores />} />
        </Routes>
      </ScoreContext.Provider>
    </>
  )
}

export default App
