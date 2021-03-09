import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home(props) {
    return (
        <div className='home d-flex flex-column cover-container mx-auto my-auto p-3'>
            <main role='main' className='inner cover'>
                <h1 className="cover-heading">Welcome to Context-API-App.</h1>
                <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptates 
                odit sunt quae, sit nulla quia non dolores voluptatibus, sint veritatis reprehenderit eos 
                mollitia! Aut nostrum explicabo fuga natus sunt!</p>
                {
                    props.flag?
                        <p className="lead">
                            <Link to='/show_product' className='btn btn-lg btn-secondary'>Your Cart!!</Link>
                        </p>
                        :<p className="lead">
                            <Link to='/log_in' className='btn btn-lg btn-secondary'>Log In</Link>
                        </p>
                }
            </main>
        </div>
    )
}
