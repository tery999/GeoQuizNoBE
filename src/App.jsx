import { useEffect, useRef, useState } from 'react'
import * as styles from "./App.module.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Flags from './Components/Flags/Flags'
import EuropeFlags from './Components/Flags/EuropeFlags/EuropeFlags'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Flags" >
      <Route index element={<Flags />} />
        <Route path="Europe" element={<EuropeFlags />} />
      </Route>
    </Routes>
  )
}

export default App
