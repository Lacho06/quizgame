import { useEffect, useState } from 'react';
import { readLocalSettings, saveLocalSettings } from '../services/question';

export function useSettings () {
    const [settings, setSettings] = useState()

    useEffect(() => {
        const defaultSettings = {
            difficulty: 'random',
            numQuestions: 10,
        }
        const newSettings = readLocalSettings() || defaultSettings
        setSettings(newSettings)
    }, [])

    const putNewSettings = (newSettings) => {
        saveLocalSettings(newSettings)
        setSettings(newSettings)
    }


    return [settings, putNewSettings]
}