import React, { CSSProperties } from 'react'

import styles from './StretchShrinkHamburgerIcon.module.css'

type Props = {
  lines?: 2 | 3 | undefined
  closed?: boolean | undefined
  options?: {
    strokeWidth?: number | undefined
    transitionDuration?: string | number | undefined
    transitionDelay?: string | number | undefined
    horizontalLengthRatio?: number | undefined
    crossLengthRatio?: number | undefined
  }
  className?: string | undefined
}

const SIZE = 256
const STROKE_WIDTH = 16

export const StretchShrinkHamburgerIcon = ({
  lines = 3,
  closed = false,
  options,
  className,
}: Props) => {
  const hLength = SIZE * (options?.horizontalLengthRatio ?? 0.7)
  const xLength = SIZE * (options?.crossLengthRatio ?? 0.9)

  return (
    <svg
      className={[
        styles['root'],
        closed ? styles['isClosed'] : '',
        className,
      ].join(' ')}
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={
        {
          ...(typeof options?.transitionDuration === 'string'
            ? { '--transition-duration': options?.transitionDuration }
            : typeof options?.transitionDuration === 'number'
            ? { '--transition-duration': `${options?.transitionDuration}s` }
            : {}),
          ...(typeof options?.transitionDelay === 'string'
            ? { '--transition-delay': options?.transitionDelay }
            : typeof options?.transitionDelay === 'number'
            ? { '--transition-delay': `${options?.transitionDelay}s` }
            : {}),
        } as CSSProperties
      }
    >
      {/* horizontal lines */}
      {[...Array(lines)].map((_, i) => (
        <g
          key={i}
          className={styles['horizontal']}
          transform={`translate(${SIZE * 0.5},${
            (SIZE / (lines + 1)) * (i + 1)
          })`}
          style={{ opacity: closed ? 0 : 1 }}
        >
          <line
            x1={0}
            y1={0}
            x2={hLength * 0.5 * -1}
            y2={0}
            strokeWidth={options?.strokeWidth ?? STROKE_WIDTH}
            strokeDasharray={hLength * 0.5}
            strokeDashoffset={closed ? hLength * 0.5 : 0}
          />
          <line
            x1={0}
            y1={0}
            x2={hLength * 0.5}
            y2={0}
            strokeWidth={options?.strokeWidth ?? STROKE_WIDTH}
            strokeDasharray={hLength * 0.5}
            strokeDashoffset={closed ? hLength * 0.5 : 0}
          />
        </g>
      ))}

      {/* cross lines */}
      <g
        className={styles['cross']}
        transform={`translate(${SIZE * 0.5},${SIZE * 0.5})`}
        style={{ opacity: closed ? 1 : 0 }}
      >
        <line
          x1={0}
          y1={0}
          x2={Math.cos(Math.PI * (7 / 4)) * xLength * 0.5}
          y2={Math.sin(Math.PI * (7 / 4)) * xLength * 0.5}
          strokeWidth={options?.strokeWidth ?? STROKE_WIDTH}
          strokeDasharray={xLength * 0.5}
          strokeDashoffset={closed ? 0 : xLength * 0.5}
        />
        <line
          x1={0}
          y1={0}
          x2={Math.cos(Math.PI * (1 / 4)) * xLength * 0.5}
          y2={Math.sin(Math.PI * (1 / 4)) * xLength * 0.5}
          strokeWidth={options?.strokeWidth ?? STROKE_WIDTH}
          strokeDasharray={xLength * 0.5}
          strokeDashoffset={closed ? 0 : xLength * 0.5}
        />
        <line
          x1={0}
          y1={0}
          x2={Math.cos(Math.PI * (3 / 4)) * xLength * 0.5}
          y2={Math.sin(Math.PI * (3 / 4)) * xLength * 0.5}
          strokeWidth={options?.strokeWidth ?? STROKE_WIDTH}
          strokeDasharray={xLength * 0.5}
          strokeDashoffset={closed ? 0 : xLength * 0.5}
        />
        <line
          x1={0}
          y1={0}
          x2={Math.cos(Math.PI * (5 / 4)) * xLength * 0.5}
          y2={Math.sin(Math.PI * (5 / 4)) * xLength * 0.5}
          strokeWidth={options?.strokeWidth ?? STROKE_WIDTH}
          strokeDasharray={xLength * 0.5}
          strokeDashoffset={closed ? 0 : xLength * 0.5}
        />
      </g>
    </svg>
  )
}
