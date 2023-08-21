import { createContext } from "react";
import { useSettings } from "../hooks/useSettings";


export const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
    const [settings, putNewSettings] = useSettings()

    return (
        <SettingsContext.Provider value={ { settings, putNewSettings } }>
            { children }
        </SettingsContext.Provider>
    )
}