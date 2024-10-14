import * as React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@/lib/utils'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    className?: string
  }
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  Omit<
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
      className?: string
      label?: React.ReactNode
    },
    'id'
  >
>(({ className, label, ...props }, ref) => {
  const id = React.useId()

  return (
    <div className='flex items-center gap-x-3'>
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          'peer flex aspect-square size-5 cursor-pointer items-center justify-center rounded-full border border-neutral-60 bg-neutral text-primary ring-offset-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-neutral-20 disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary',
          className,
        )}
        id={id}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className='flex size-2 items-center justify-center rounded-full bg-neutral' />
      </RadioGroupPrimitive.Item>

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
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
