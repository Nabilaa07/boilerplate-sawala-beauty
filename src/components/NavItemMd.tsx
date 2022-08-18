import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

export default function NavItemMd(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
}) {
  return (
    <li className="text-base hover:bg-[#B48166] px-3.5 hover:text-white hover:rounded-xl font-medium hover:font-semibold">
      {props.children}
    </li>
  )
}
