import Image from 'next/image'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

export default function Rating(props: {
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
    <div className="flex pb-5 place-content-center md:pb-0">
      {props.children}
      <Image src="/assets/icn/Vector.svg" alt="" width={16} height={15} />
      <Image src="/assets/icn/Vector-1.svg" alt="" width={16} height={15} />
      <Image src="/assets/icn/Vector-2.svg" alt="" width={16} height={15} />
      <Image src="/assets/icn/Vector-3.svg" alt="" width={16} height={15} />
      <Image src="/assets/icn/Vector-4.svg" alt="" width={16} height={15} />
      <p className="p-3 text-[#B48166]">256</p>
    </div>
  )
}
