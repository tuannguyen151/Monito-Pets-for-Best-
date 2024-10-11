import * as React from 'react'

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/ui/Select'

type SelectProps = React.ComponentPropsWithoutRef<typeof SelectRoot> & {
  options: {
    value: string
    label: React.ReactNode
  }[]
  placeholder: Omit<
    React.ComponentPropsWithoutRef<typeof SelectItem> & {
      label: React.ReactNode
    },
    'value'
  >
  defaultValue?: string
  label?: React.ReactNode
  subLabel?: string
  assistive?: React.ReactNode
}

const Select = ({
  defaultValue = null as unknown as string,
  options,
  placeholder: { label: placeholderLabel, ...placeholderProps },
  label,
  subLabel,
  assistive,
  ...props
}: SelectProps) => {
  return (
    <div className='flex flex-col gap-y-2.5 text-sm font-medium'>
      {label && <label className='text-neutral-80'>{label}</label>}

      <SelectRoot {...props} defaultValue={defaultValue}>
        <SelectTrigger className='w-[280px]'>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem {...placeholderProps} value={null as unknown as string}>
            {placeholderLabel}
          </SelectItem>

          {options.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      {subLabel && (
        <p className='text-xs font-normal text-neutral-60'>{subLabel}</p>
      )}

      {assistive && <div className='text-xs font-normal'>{assistive}</div>}
    </div>
  )
}

export default Select
