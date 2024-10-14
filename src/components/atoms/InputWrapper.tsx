import * as React from 'react'

type InputWrapperProps = {
  children: React.ReactNode
  label?: React.ReactNode
  subLabel?: string
  assistive?: React.ReactNode
}

const InputWrapper = ({
  label,
  subLabel,
  assistive,
  children,
}: InputWrapperProps) => {
  return (
    <div className='flex flex-col gap-y-2.5 text-sm font-medium'>
      {label && <label className='text-neutral-80'>{label}</label>}

      {children}

      {subLabel && (
        <p className='text-xs font-normal text-neutral-60'>{subLabel}</p>
      )}

      {assistive && <div className='text-xs font-normal'>{assistive}</div>}
    </div>
  )
}

export default InputWrapper
