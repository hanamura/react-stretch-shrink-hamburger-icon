import { useState } from 'react'

import { StretchShrinkHamburgerIcon } from '../../src/StretchShrinkHamburgerIcon'

export const App = () => {
  const [closed, setClosed] = useState(false)

  return (
    <button
      onClick={() => setClosed((closed) => !closed)}
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
      <StretchShrinkHamburgerIcon closed={closed} />
    </button>
  )
}
