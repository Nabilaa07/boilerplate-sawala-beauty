import Image from 'next/image'
import Rating from './Rating'
import People from './People'

export default function Mua() {
  return (
    <section>
      <div className="items-center mt-20 mb-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 uppercase md:text-3xl md:pb-6">Selected by mua</h2>
        <h3 className="pb-10 text-sm font-normal uppercase text-amber-700 md:text-xl">
          get selected products used by artists
        </h3>
      </div>
      <div className="items-center md:mx-16">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="mx-auto md:mx-0 md:w-1/2 xl:w-1/4">
            <div className="items-center mx-auto mb-10 overflow-hidden bg-white hover:shadow-lg md:w-64">
              <Image src="/assets/b1.png" alt="" className="w-full mb-5" width={315} height={290} />
              <h2 className="px-6 pt-5 pb-5 font-medium text-center uppercase">Consectetur Ut Donec</h2>
              <p className="font-bold text-center md:pb-2">Rp. 120.000</p>
              <Rating children={undefined} />
            </div>
          </div>

          <div className="mx-auto lg:-ml-8 md:w-1/2 xl:w-1/4 md:mx-0">
            <div className="items-center mx-auto mb-10 overflow-hidden bg-white hover:shadow-lg md:w-64">
              <Image src="/assets/b2.png" alt="" className="w-full mb-5" width={315} height={290} />
              <h2 className="px-6 pt-5 pb-5 font-medium text-center uppercase">Orci ante nibh nisi blandit</h2>
              <p className="font-bold text-center md:pb-2">Rp. 232.000</p>
              <Rating children={undefined} />
            </div>
          </div>

          <div className="mx-auto lg:-ml-16 md:w-1/2 xl:w-1/4 md:mx-0">
            <div className="items-center mx-auto mb-10 overflow-hidden bg-white hover:shadow-lg md:w-64">
              <Image src="/assets/b3.png" alt="" className="w-full mb-5" width={315} height={290} />
              <h2 className="px-6 pt-5 pb-5 font-medium text-center uppercase">aliquet ultrices Series a</h2>
              <p className="font-bold text-center md:pb-2">Rp. 170.000</p>
              <Rating children={undefined} />
            </div>
          </div>

          <div className="w-full px-6 mx-auto md:-ml-20 md:mx-0">
            <People />
          </div>
        </div>
      </div>
    </section>
  )
}
