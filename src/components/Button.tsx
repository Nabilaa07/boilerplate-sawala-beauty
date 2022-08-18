import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

export default function Button(props: {
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
    <button className="block h-12 mx-auto mt-10 text-base font-semibold text-white border-2 border-white backdrop-blur-2 w-36 md:mt-24 hover:border-[#B48166] hover:text-white hover:bg-[#B48166]">
      {props.children}
    </button>
  )
}
