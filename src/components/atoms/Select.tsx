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
}

const Select = ({
  defaultValue = null as unknown as string,
  options,
  placeholder: { label: placeholderLabel, ...placeholderProps },
  ...props
}: SelectProps) => {
  return (
    <SelectRoot {...props} defaultValue={defaultValue}>
      <SelectTrigger className='min-w-48'>
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
  )
}

export default Select
