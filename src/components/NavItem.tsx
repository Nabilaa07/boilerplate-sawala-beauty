import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

export default function NavItem(props: {
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
  return <li className="hover:text-[#B48166] py-4 px-6 w-full uppercase">{props.children}</li>
}
