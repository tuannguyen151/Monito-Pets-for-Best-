import * as React from 'react'

import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const baseClass =
  'pl-7 pr-7 py-3.5 border border-neutral-40 rounded-lg placeholder:text-neutral-40 focus-visible:ring-1 focus-visible:ring-neutral-60 disabled:cursor-not-allowed disabled:opacity-50 text-neutral-80'
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
  label?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  subLabel?: string
  assistive?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      label,
      leftIcon,
      rightIcon,
      subLabel,
      assistive,
      ...props
    },
    ref,
  ) => {
    return (
      <div className='flex flex-col gap-y-2.5 text-sm font-medium'>
        {label && <label className='text-neutral-80'>{label}</label>}

        <div className='relative w-fit text-neutral-60'>
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

        {subLabel && (
          <p className='text-xs font-normal text-neutral-60'>{subLabel}</p>
        )}
        {assistive && <div className='text-xs font-normal'>{assistive}</div>}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input, inputVariants, variants }
