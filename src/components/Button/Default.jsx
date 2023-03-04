import React from 'react'

const Default = ({ children, type='button', className }) => {
  return (
    <button
        className={`px-4 py-2 font-medium inline-flex items-center justify-center border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out ${className}`}
        type='type'
    >
        {children}
    </button>
  )
}

export default Default