import Image from 'next/image'
import { SLiderHome } from './People'
import Rating from './Rating'

export default function Mua() {
  return (
    <>
      <section>
        <div className="items-center mt-20 mb-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase md:text-3xl md:pb-6">Selected by mua</h2>
          <h3 className="pb-10 text-sm font-normal uppercase text-amber-700 md:text-xl">
            get selected products used by artists
          </h3>
        </div>
        <div className="md:flex mx-10">
          <div className="md:flex grid grid-cols-1 items-start justify-center md:w-4/5 md:mx-0">
            <div className="items-center mb-10 overflow-hidden bg-white hover:shadow-lg md:w-60">
              <Image src="/assets/b1.png" alt="" className="mb-5ww-full" width={360} height={335} />
              <h2 className="px-6 pt-5 pb-5 font-medium text-center uppercase">Consectetur Ut Donec</h2>
              <p className="font-bold text-center md:pb-2">Rp. 120.000</p>
              <Rating children={undefined} />
            </div>

            <div className="md:mx-5 items-center mb-10 overflow-hidden bg-white hover:shadow-lg md:w-60">
              <Image src="/assets/b2.png" alt="" className="mb-5 w-full" width={360} height={335} />
              <h2 className="px-6 pt-5 pb-5 font-medium text-center uppercase">Orci ante nibh nisi blandit</h2>
              <p className="font-bold text-center md:pb-2">Rp. 232.000</p>
              <Rating children={undefined} />
            </div>

            <div className="items-center mb-10 overflow-hidden bg-white hover:shadow-lg md:w-60">
              <Image src="/assets/b3.png" alt="" className="mb-5 w-full" width={360} height={335} />
              <h2 className="px-6 pt-5 pb-5 font-medium text-center uppercase">aliquet ultrices Series a</h2>
              <p className="font-bold text-center md:pb-2">Rp. 170.000</p>
              <Rating children={undefined} />
            </div>
          </div>

          <div className="md:w-1/3 items-center">
            <SLiderHome />
          </div>
        </div>
      </section>
    </>
  )
}
