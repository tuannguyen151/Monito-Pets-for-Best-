import React from 'react'

const Check = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      ref={ref}
      {...props}
    >
      <path
        d='M6 12L10.2426 16.2426L18.7275 7.75732'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
})

Check.displayName = 'Check'

export default Check
