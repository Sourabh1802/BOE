import React from 'react'
import logo from '../assets/logo.png'

export default function Logo({ className = '' }) { return <img src={logo} alt="Blue Orchid Logo" className={`object-contain ${className}`} /> }
