import Image from 'next/image'
import Rating from './Rating'

export default function Popular() {
  const data = [
    {
      image: '/assets/b1.png',
      title: 'CONSECTETUR UT DONEC',
      subtitle: 'Dictumst vulputate phasellus est at volutpat, volutpat phasellus',
      price: 'Rp. 120.000'
    },
    {
      image: '/assets/b2.png',
      title: 'ORCI ANTE NIBH NISI BLANDIT',
      subtitle: 'Consectetur ipsum lacus, faucibus facilisis quis sit morbi pharetra',
      price: 'Rp. 232.000'
    },
    {
      image: '/assets/b3.png',
      title: 'ALIQUET ULTRICES A',
      subtitle: 'Sem laoreet semper non sit nunc sem. Nisi malesuada amet enim',
      price: 'Rp. 170.000'
    },
    {
      image: '/assets/b4.png',
      title: 'NUNC NISI EU VIVERRA SAPIEN',
      subtitle: 'Id sit sit mattis a ullamcorper. Sed arcu mi, in curabitur sed vestibulum.',
      price: 'Rp. 180.000'
    },
    {
      image: '/assets/b5.png',
      title: 'TRISTIQUE IN INTEGER EGESTAS',
      subtitle: 'Habitant lacus neque magna ornare cras elementum cursus mattis',
      price: 'Rp. 420.000'
    },
    {
      image: '/assets/b6.png',
      title: 'ALIQUET ARCU PURUS',
      subtitle: 'Bibendum at vitae semper a, hendrerit id eu dui massa',
      price: 'Rp. 230.000'
    }
  ]
  return (
    <section>
      <div className="mt-20 mb-16 text-center">
        <h2 className="mx-3 text-3xl font-semibold text-gray-900 md:mb-6 md:text-4xl">POPULAR ON BEAUTY</h2>
        <h3 className="px-5 text-sm font-normal uppercase text-amber-700 md:text-xl">
          Get 30% OFF For the First Buy Our Product
        </h3>
      </div>
      <div className="flex flex-wrap mx-5 md:mx-11">
        {data?.map((item, i) => (
          <div className="w-full md:px-4 md:w-1/2 xl:w-1/3">
            <div
              className={`items-center hover:outline hover:outline-offset-0 hover:outline-[#B48166] mb-10 shadow-lg hover:mb-10 hover:pb-0 hover:shadow-none md:hover:shadow-lg md:shadow-none ${item.image}`}
              key={i}>
              <Image src={`${item.image}`} alt="" width={417} height={417} className="w-full mx-auto mb-5"></Image>
              <h2 className="px-2 pt-8 text-xl font-bold text-center uppercase md:font-medium md:px-0">{item.title}</h2>
              <p className="px-2 mx-2 mb-6 text-base font-normal text-center md:pt-6 md:px-0">{item.subtitle}</p>
              <p className="mb-3 text-xl font-bold text-center">{item.price}</p>
              <Rating children={undefined} />
            </div>
          </div>
        ))}
        <div className="pb-12 mx-auto md:pb-0">
          <button className="px-6 py-3 mb-2 border-2 border-black hover:bg-[#B48166] hover:text-white hover:border-[#B48166]">
            CHECK OTHER PRODUCTS
          </button>
        </div>
      </div>
    </section>
  )
}
