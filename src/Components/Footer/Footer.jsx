import React from 'react'
import './Footer.css'

export default function Footer(props) {
    return (
        <div className="container footer-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light footer-nav">
                <div className="container-fluid">
                    <a className="navbar-brand footer" href=".">{props.footerText}</a>
                </div>
            </nav>
        </div>
    )
}
