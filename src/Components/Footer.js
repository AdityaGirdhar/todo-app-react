import React from 'react'

export default function Footer() {
  return (
    <footer className="py-3 fixed-bottom bg-body">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
        </ul>
        <p className="text-center text-muted">© 2023 Aditya Girdhar</p>
    </footer>
  )
}
