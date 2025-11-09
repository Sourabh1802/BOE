import React from 'react'
import logo from '../assets/BOE_logo-removebg-preview.png'

export default function Logo({ className = '' }) { return <img src={logo} alt="Blue Orchid Logo" className={`object-contain ${className} drop-shadow-[0_0_10px_#00ffff]` } /> }
