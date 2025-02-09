/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react"

export const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {children({ isOpen, setIsOpen })}
    </div>
  )
}

export const DropdownMenuTrigger = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>
}

export const DropdownMenuContent = ({ children, isOpen }) => {
  if (!isOpen) return null

  return (
    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {children}
      </div>
    </div>
  )
}

export const DropdownMenuItem = ({ children, onClick }) => {
  return (
    <div
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      role="menuitem"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

