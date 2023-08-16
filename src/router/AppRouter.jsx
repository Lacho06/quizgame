import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../pages/App'
import Game from '../pages/Game'

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path='/' element={<App />} />
            <Route exact path='/game' element={<Game />} />
        </Routes>
    )
}

export default AppRouter
