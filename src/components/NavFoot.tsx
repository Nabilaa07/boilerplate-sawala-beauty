import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

export default function NavFoot(props: {
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
    <div className="mb-6">
      <a
        href="#"
        className="bg-[#B48166] py-2 px-12 rounded-full text-white font-normal hover:bg-opacity-50 hover:text-pink-900 ">
        {props.children}
      </a>
    </div>
  )
}
