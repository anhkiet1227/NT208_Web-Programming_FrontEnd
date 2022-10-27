import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-container">
          this is the footer <i className="fab fa-typo3" />
        </Link>
      </div>
    </nav>
    </>
  )
}

export default Footer