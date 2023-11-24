import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Main>
            <Routes>
                <Route Path='/' element={<Home/>} />
                <Route Path='/today' element={<Today/>} />
                <Route Path='/developer' element={<Developer/>} />
                <Route Path='/webd' element={<Webd/>} />
                <Route Path='/website' element={<Website/>} />
                <Route Path='/gsap' element={<Gsap/>} />
                <Route Path='/port' element={<Port/>} />
                <Route Path='/youtube' element={<Youtube/>} />
                <Route Path='/channel/:channelID' element={<Channel/>} />
                <Route Path='/video/:video' element={<Video/>} />
                <Route Path='/search/:searchID' element={<Search/>} />
                <Route Path='/*' element={<Not/>} />
            </Routes>
            </Main>
        <Footer />
    </BrowserRouter>
  )
}

export default App