import React from 'react'
import './NotFound.css'
import notFound from '../img/NotFoundJsxImg/notfound.png'

export default function NotFound() {
    return (
        <img src={notFound} className='notFound' alt='404 NOT FOUND'/>
    )
}

