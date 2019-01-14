import React from "react"
import {Link} from "gatsby"

export default () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-top border-secondary mt-4">
        <a className="navbar-brand" href="index.html">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projects/">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resume.html">Resume</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://mariaVela790.github.io/reactGame">React Game</a>
                </li>
            </ul>
        </div>
    </nav>
)