import React, { useLayoutEffect, useRef } from 'react'
import { Document, Page, Thumbnail } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { cn } from '@/lib/utils'

import Loading from './icons/Loading'

// The aspect ratio of a PDF page
const RATIO = Math.sqrt(2)

type PdfProps = Omit<
  React.ComponentPropsWithoutRef<typeof Document>,
  'inputRef' | 'loading'
> & {
  file: File | string
  height?: number
  isThumbnail?: boolean
  className?: string
  pageNumber?: number
}

const Pdf = React.forwardRef<React.ElementRef<typeof Document>, PdfProps>(
  ({ file, height, isThumbnail, className, pageNumber = 1, ...props }, ref) => {
    const width = height ? Math.round(height / RATIO) : undefined

    const inputRef = useRef<HTMLDivElement>(null)

    // Set the height and width of the container
    useLayoutEffect(() => {
      const currentRef = inputRef.current

      if (currentRef) {
        currentRef.style.height = `${height}px`
        currentRef.style.width = `${width}px`
      }

      return () => {
        if (currentRef) {
          currentRef.style.height = ''
          currentRef.style.width = ''
        }
      }
    }, [height, width])

    return (
      <Document
        file={file}
        className={cn(
          'flex size-full items-center justify-center bg-white',
          className,
        )}
        ref={ref}
        {...props}
        inputRef={inputRef}
        loading={<Loading className='size-10' />}
      >
        {isThumbnail ? (
          <Thumbnail
            pageNumber={pageNumber}
            height={height}
            width={width}
            loading={<Loading className='size-10' />}
          />
        ) : (
          <Page
            pageNumber={pageNumber}
            height={height}
            width={width}
            loading={<Loading className='size-10' />}
          />
        )}
      </Document>
    )
  },
)

Pdf.displayName = 'Pdf'

export default Pdf
