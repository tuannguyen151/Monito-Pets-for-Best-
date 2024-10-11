import React from 'react'

const ArrowUp = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        d='M5 16L12 9L19 16'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
})

ArrowUp.displayName = 'ArrowUp'

export default ArrowUp
