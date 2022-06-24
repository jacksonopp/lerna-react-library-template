import React, { HTMLAttributes, ReactNode } from 'react'
import './Button.css'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default Button