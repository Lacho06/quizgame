import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../pages/App'
import GamePage from '../pages/GamePage'
import SettingsPage from '../pages/SettingsPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path='/' element={<App />} />
            <Route exact path='/game' element={<GamePage />} />
            <Route exact path='/settings' element={<SettingsPage />} />
        </Routes>
    )
}

export default AppRouter
