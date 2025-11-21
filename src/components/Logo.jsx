import React from "react";
import logo from "../assets/BOE_logo-removebg-preview.png";

export default function Logo({ className = "" }) {
  return (
    <img
      src={logo}
      alt="Blue Orchid Entertainment Logo"
      className={`object-cover bg-white rounded-full p-1 shadow-md ${className}`}
    />
  );
}