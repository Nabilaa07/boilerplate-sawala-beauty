import Image from 'next/image'

export default function Marry() {
  return (
    <section>
      <div className="bg-gray-100 md-w-1/2">
        <div className="max-w-md px-6 pt-6 mx-auto md:py-16 sm:max-w-xl md:flex md:max-w-full md:px-0 md:ml-16 md:mt-16">
          <div className="hidden md:flex w-[586px] h-[400px] relative">
            <Image src="/assets/img.png" alt="" layout="fill" />
          </div>
          <div className="md:py-10 md:pl-24 md:flex-1">
            <h2 className="uppercase text-[#B48166] sm:text-xl md:text-xl md:font-normal md:pb-6 pt-3 md:pt-0">
              EXCLUSIVELY By Marry jane
            </h2>
            <h3 className="mb-6 text-2xl uppercase md:text-4xl md:font-semibold md:pr-16">
              beautiful without using a filter
            </h3>
            <div className="relative object-cover object-center w-full h-64 mt-6 shadow-xl md:mt-4 rounded-xl md:hidden">
              <Image src="/assets/img.png" alt="" layout="fill" className="object-cover" />
            </div>
            <p className="mt-2 text-slate-600 sm:mt-4 sm:text-md md:text-base md:pr-14">
              More Eus faucibus congue eu et turpis vel tortor ridiculus venenatis. Sodales eget sed molestie massa nisi, ut
              volutpat morbi lectus. Aliquam mi sed suspendisse metus purus in quis.
            </p>
            <div className="pt-6 pb-3 mx-auto md:pb-0">
              <button className="px-6 py-3 mb-5 border-2 border-black hover:bg-[#B48166] hover:text-white hover:border-[#B48166]">
                DISCOVER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
