import { useState } from 'react'

import { StretchShrinkHamburgerIcon } from '../../src/StretchShrinkHamburgerIcon'

export const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen((open) => !open)}
        style={{
          appearance: 'none',
          background: 'none',
          border: 'none',
          color: 'inherit',
          cursor: 'pointer',
          font: 'inherit',
          margin: '0',
          padding: '0',
        }}
      >
        <StretchShrinkHamburgerIcon open={open} />
      </button>

      <div>state: {open ? 'open' : 'closed'}</div>
    </>
  )
}
