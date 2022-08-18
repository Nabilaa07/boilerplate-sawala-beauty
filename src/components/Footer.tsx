import Image from 'next/image'
import NavFoot from './NavFoot'
import NavFootMd from './NavFootMd'

export default function Footer() {
  return (
    <section>
      <div className="mx-auto">
        <div className="pb-16 mt-20">
          <h1 className="font-semibold text-center uppercase md:text-2xl">let’s keep in touch!</h1>
          <p className="text-center text-[#666666] md:text-base md:font-normal text-sm mx-3">
            Neque suscipit nibh tristique consequat mauris. Vitae augue sit.
          </p>
        </div>
        <form action="" className="w-11/12 mx-auto">
          <div className="flex w-full space-x-2 md:mb-16 md:w-2/3 md:mx-auto">
            <div className="w-9/12 mb-4">
              <input
                type="text"
                id="email"
                placeholder="Email adress"
                className="w-full border-[1px] p-3 focus:outline-none focus:ring-[#B48166] focus:ring-1 focus:border-[#B48166] md:mx-auto"
              />
            </div>
            <div className="w-3/12">
              <button className="md:font-semibold md:text-base text-sm font-medium py-3 md:px-4 w-full hover:opacity-80 hover:shadow-md transition duration-500 bg-[#B48166] text-[#E5E7EB] md:mx-auto">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full pb-32 md:pb-16">
        <div className="flex items-center justify-center">
          <div className="pr-5">
            <a href="#" className="w-9 h-9 rounded-full flex justify-center items-center text-[#B48166]">
              <Image src="/assets/icon-sc- wa.png" alt="" className="fill-current " width={25} height={25}>
                {/* <title>WhatsApp</title> */}
              </Image>
            </a>
          </div>
          <div className="pr-5">
            <a href="#" className="w-9 h-9 rounded-full flex justify-center items-center text-[#B48166]">
              <Image src="/assets/Icon-sc-fb.png" alt="" className="fill-current " width={25} height={25}>
                {/* <title>Facebook</title> */}
              </Image>
            </a>
          </div>
          <div className="pr-5">
            <a href="#" className="w-9 h-9 rounded-full flex justify-center items-center text-[#B48166]">
              <Image src="/assets/icon-sc-ig.png" alt="" className="fill-current " width={26} height={26}>
                {/* <title>Instagram</title> */}
              </Image>
            </a>
          </div>
          <div>
            <a href="#" className="w-9 h-9 rounded-full flex justify-center items-center text-[#B48166]">
              <Image src="/assets/Icon-sc-twitter.png" alt="" className="fill-current " width={25} height={25}>
                {/* <title>Twitter</title> */}
              </Image>
            </a>
          </div>
        </div>
      </div>
      <div className="justify-center hidden mb-3 -mt-10 text-sm text-center uppercase pt-9 md:flex navbar">
        <NavFootMd>Shop</NavFootMd>
        <NavFootMd>Best Seller</NavFootMd>
        <NavFootMd>Skin Care</NavFootMd>
        <NavFootMd>Bundle</NavFootMd>
        <NavFootMd>Body</NavFootMd>
        <NavFootMd>Lips</NavFootMd>
        <NavFootMd>Serum</NavFootMd>
      </div>
      <div className="justify-center grid-flow-col gap-4 mb-6 -mt-10 text-sm text-center uppercase md:hidden navbar">
        <NavFoot>Shop</NavFoot>
        <NavFoot>Best Seller</NavFoot>
        <NavFoot>Skin Care</NavFoot>
        <NavFoot>Bundle</NavFoot>
        <NavFoot>Body</NavFoot>
        <NavFoot>Lips</NavFoot>
        <NavFoot>Serum</NavFoot>
      </div>

      <div className="w-full py-6 border-t border-gray-200 text-center text-base  font-normal text-[#666666]">
        <div>&copy; 2022 Element Beauty, Inc. All rights reserved.</div>
      </div>
    </section>
  )
}
