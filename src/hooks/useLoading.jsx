import { useState } from "react"

export const useLoading = (initialLoading = true) => {
    const [loading, setLoading] = useState(initialLoading)

    const changeLoading = (value) => {
        setLoading(value)
    }

    return [loading, changeLoading]
}