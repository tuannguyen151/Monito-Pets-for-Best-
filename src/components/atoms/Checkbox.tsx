import * as React from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import Check from '@/components/atoms/icons/Check'

import { cn } from '@/lib/utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
      className?: string
      label?: React.ReactNode
    },
    'id'
  >
>(({ className, label, ...props }, ref) => {
  const id = React.useId()

  return (
    <div className='flex items-center gap-x-3'>
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          'peer size-5 shrink-0 rounded-md border border-neutral-60 ring-offset-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary',
          className,
        )}
        id={id}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-white')}
        >
          <Check className='size-5' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label && (
        <label
          htmlFor={id}
          className='cursor-pointer text-sm font-normal leading-none text-neutral-80 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {label}
        </label>
      )}
    </div>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
