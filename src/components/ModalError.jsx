import React from 'react'
import { Link } from 'react-router-dom'

const ModalError = ({ error }) => {
    return (
        <section>
            <p>{ error }</p>
            <Link to='/game'>Reload</Link>
        </section>
    )
}

export default ModalError
