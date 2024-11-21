import React from 'react'

function OutlineButton({children,color,borderColor,className}) {
  return (
    <button className={`border-2 border-${borderColor} px-6 py-2 roboto-medium text-${color} rounded-lg hover:bg-amber-900 hover:text-white ` + className}>
        {children}
    </button>
  )
}

export default OutlineButton