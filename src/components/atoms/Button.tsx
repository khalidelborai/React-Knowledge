import React, { forwardRef } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const buttonClasses = tv({
  base: "inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
  variants: {
    color: {
      primary:
        "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
      secondary:
        "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500",
      danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
    },
    size: {
      small: "px-3 py-2 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
})

type ButtonProps = {
  loading?: boolean
  children: React.ReactNode
  loader?: React.ReactNode
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonClasses>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = "primary",
      size = "medium",
      loading,
      children,
      loader = <p>Loading...</p>,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={buttonClasses({ color, size, className })}
        {...props}
        disabled={props.disabled || loading}
      >
        {loading ? loader : children}
      </button>
    )
  }
)

export default Button
