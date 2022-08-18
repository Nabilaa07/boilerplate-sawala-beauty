import Link from 'next/link'

export default function Most() {
  const data = [
    {
      title: 'make your nails look more charming',
      subtitle: 'MOST POPULAR',
      background: 'bg-2',
      link: '/'
    },
    {
      title: 'Fresh come and ready to use',
      subtitle: 'MOST POPULAR',
      background: 'bg-3',
      link: '/'
    },
    {
      title: 'your nail looks beautiful',
      subtitle: 'MOST POPULAR',
      background: 'bg-4',
      link: '/'
    },
    {
      title: 'make your skin shine and moist',
      subtitle: 'MOST POPULAR',
      background: 'bg-5',
      link: '/'
    }
  ]
  return (
    <section>
      <div className="flex flex-wrap justify-center w-4/5 pb-10 mx-auto mt-16 xl:mx-auto xl:w-11/12">
        {/* <div className="pb-4 md:w-1/2">
          <div
            className="w-full max-w-full overflow-hidden bg-center bg-no-repeat bg-2 rounded-4xl"
          >
            <div className="text-center text-white uppercase">
              <p className="pt-20 text-xl font-semibold px-9">most popular</p>
              <p className="p-4 pt-7 md:px-20 md:font-bold md:text-5xl">
                make your nails look more charming
              </p>
            </div>
            <div className="justify-center pb-24 md:pt-7">
              <button className="block h-12 mx-auto mt-10 text-base font-semibold text-white border-2 border-white backdrop-blur-2 w-36 md:mt-2 hover:bg-gray-50 hover:bg-opacity-50 hover:text-zinc-500 hover:border-zinc-500">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <div className="pb-4 md:w-1/2">
          <div
            className="w-full max-w-full overflow-hidden bg-center bg-no-repeat bg-3 rounded-4xl "
            width={636}
            height={424}
            // style="background-image: url('./assets/pic3.png');"
          >
            <div className="text-center text-white uppercase">
              <p className="pt-20 text-xl font-semibold px-9">most popular</p>
              <p className="p-4 pt-7 md:px-20 md:font-bold md:text-5xl">
                Fresh come and ready to use for look
              </p>
            </div>
            <div className="justify-center pb-24 md:pt-7">
              <button className="block h-12 mx-auto mt-10 text-base font-semibold text-white border-2 border-white backdrop-blur-2 w-36 md:mt-2 hover:bg-gray-50 hover:bg-opacity-50 hover:text-zinc-500 hover:border-zinc-500">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <div className="pb-4 md:w-1/2">
          <div
            className="w-full max-w-full overflow-hidden bg-center bg-no-repeat bg-4 rounded-4xl"
            width={636}
            height={424}
            // style="background-image: url('./assets/pic4.png');"
          >
            <div className="text-center text-white uppercase">
              <p className="pt-20 text-xl font-semibold px-9">most popular</p>
              <p className="p-12 md:p-4 pt-7 md:font-bold md:text-5xl">
                your nail looks beautiful
              </p>
            </div>
            <div className="justify-center pb-24 md:pt-7">
              <button className="block h-12 mx-auto mt-10 text-base font-semibold text-white border-2 border-white backdrop-blur-2 w-36 md:mt-2 hover:bg-gray-50 hover:bg-opacity-50 hover:text-zinc-500 hover:border-zinc-500">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <div className="pb-4 md:w-1/2">
          <div
            className="w-full max-w-full overflow-hidden bg-center bg-no-repeat bg-5 rounded-4xl"
            width={636}
            height={424}
            // style="background-image: url('./assets/pic5.png');"
          >
            <div className="text-center text-white uppercase">
              <p className="pt-20 text-xl font-semibold px-9">most popular</p>
              <p className="p-4 pt-7 md:px-20 md:font-bold md:text-5xl">
                make your skin shine and moist
              </p>
            </div>
            <div className="justify-center pb-24 md:pt-7">
              <button className="block h-12 mx-auto mt-10 text-base font-semibold text-white border-2 border-white backdrop-blur-2 w-36 md:mt-2 hover:bg-gray-50 hover:bg-opacity-50 hover:text-zinc-500 hover:border-zinc-500">
                SHOP NOW
              </button>
            </div>
          </div>
        </div> */}
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {data?.map((item, i) => (
            <div className={`w-full flex justify-center items-center bg-center h-[424px] ${item.background}`} key={i}>
              <div className="flex flex-col items-center justify-center text-center uppercase">
                <p className="text-2xl font-bold text-white md:font-semibold md:text-xl">{item.subtitle}</p>
                <h2 className="p-5 font-semibold text-white text-md md:font-bold md:text-5xl py-7">{item.title}</h2>
                <Link href={item.link} passHref>
                  <button className="uppercase px-2 py-1.5 block h-12 mx-auto mt-10 text-base font-semibold text-white border-2 border-white backdrop-blur-2 w-36 md:mt-2 hover:bg-gray-50 hover:bg-opacity-50 hover:text-zinc-500 hover:border-zinc-500">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
