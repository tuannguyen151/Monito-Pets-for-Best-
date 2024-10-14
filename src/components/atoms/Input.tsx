import * as React from 'react'

import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const baseClass =
  'pl-7 pr-7 py-3.5 border border-neutral-40 rounded-lg placeholder:text-neutral-40 focus:outline-2 focus:outline-state-blue disabled:cursor-not-allowed disabled:opacity-50 text-neutral-60'
const defaultVariantClass = ''

const variants = {
  variant: {
    default: defaultVariantClass,
  },
  isLeftIcon: {
    true: 'pl-12',
  },
  isRightIcon: {
    true: 'pr-12',
  },
}

const inputVariants = cva(baseClass, {
  variants,
  defaultVariants: {
    variant: 'default',
    isLeftIcon: false,
    isRightIcon: false,
  },
})

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className='relative w-fit text-neutral-60 focus-within:text-state-blue'>
        {leftIcon && (
          <div className='absolute left-4 top-1/2 -translate-y-1/2'>
            {leftIcon}
          </div>
        )}

        <input
          className={cn(
            inputVariants({
              variant,
              className,
              isLeftIcon: !!leftIcon,
              isRightIcon: !!rightIcon,
            }),
          )}
          ref={ref}
          {...props}
        />

        {rightIcon && (
          <div className='absolute right-4 top-1/2 -translate-y-1/2'>
            {rightIcon}
          </div>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input, inputVariants, variants }
