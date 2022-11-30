import { useState } from 'react'
import { useFloating } from '@floating-ui/react-dom-interactions'

export default function Header() {
  const [open, setOpen] = useState(true)
  const { x, y, reference, floating, strategy } = useFloating({
    open,
    onOpenChange: setOpen
  })
  return <div className='bg-[linear-gradient(-180deg,#f53d2d,#f63)] pb-5 pt-2 text-white'>Header</div>
}
