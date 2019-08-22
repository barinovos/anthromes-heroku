import React, { useState } from 'react'
import { BtnContainer, Bar, BtnMenu } from './Styled'

const MenuButton = ({ children }) => {
  const [open, toggleOpen] = useState(false)

  return (
    <BtnContainer onClick={() => toggleOpen(!open)}>
      <Bar open={open} bar1 />
      <Bar open={open} bar2 />
      <Bar open={open} bar3 />
      {open && <BtnMenu>{children}</BtnMenu>}
    </BtnContainer>
  )
}

export default MenuButton
