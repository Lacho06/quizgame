import { useState } from "react"

const useError = () => {
    const [error, setError] = useState(null)
    
    const setErrorMessage = (errorMessage) => {
        setError(errorMessage)
    }

    return [error, setErrorMessage]
}

export default useError
