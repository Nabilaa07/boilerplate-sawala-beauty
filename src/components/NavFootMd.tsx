import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

export default function NavFootMd(props: {
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
    <a href="#" className="hover:bg-[#B48166] p-2 hover:text-white hover:font-semibold hover:rounded-xl">
      {props.children}
    </a>
  )
}
