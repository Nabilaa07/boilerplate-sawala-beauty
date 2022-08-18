import Image from 'next/image'
import Slider from './Slider'
import NavItem from './NavItem'
import NavItemMd from './NavItemMd'

export default function Hero() {
  return (
    <section>
      <nav className="flex items-center justify-between mx-4 md:mx-16">
        <button className="nav-toggle w-5 h-3.5 md:mt-9 block hover:bg-gray-200 group mt-8">
          <Image src="/assets/Icon-mn.svg" alt="" width={20} height={14} />
          <div className="absolute w-8/12 pb-10 transition-all duration-300 bg-white bg-opacity-75 border opacity-0 rounded-xl -right-full md:hidden group-focus:right-0 group-focus:opacity-100 -left-2">
            <ul className="flex flex-col items-center w-full pt-10 text-base cursor-pointer">
              <NavItem>Shop</NavItem>
              <NavItem>Best Seller</NavItem>
              <NavItem>Skin care</NavItem>
              <NavItem>Bundle</NavItem>
              <NavItem>Body</NavItem>
              <NavItem>Shop</NavItem>
              <NavItem>Lips</NavItem>
            </ul>
          </div>
        </button>
        <div className="px-6 mx-auto mt-10 nav-brand">
          <Image src="/assets/ELEMENT BEAUTY.svg" alt="" width={304} height={32} />
        </div>
        <div className="mt-10 md:mt-9">
          <Image src="/assets/Icon-sc.svg" alt="" width={18} height={18} />
        </div>
      </nav>
      <div className="items-center mt-10 mb-10 text-base uppercase">
        <ul className="justify-center hidden text-center cursor-pointer md:flex">
          <NavItemMd>Shop</NavItemMd>
          <NavItemMd>Best Seller</NavItemMd>
          <NavItemMd>Skin care</NavItemMd>
          <NavItemMd>Bundle</NavItemMd>
          <NavItemMd>Body</NavItemMd>
          <NavItemMd>Lips</NavItemMd>
          <NavItemMd>Serum</NavItemMd>
        </ul>
      </div>
      <Slider />
    </section>
  )
}
