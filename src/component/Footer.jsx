import logoimg from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-white px-4 py-8">
      <div className=" mt-10 flex flex-col md:flex-row md:items-center md:justify-between h- gap-6 md:gap-0 max-w-7xl mx-auto">
        {/* Logo and Store Name */}
        <div className="flex items-center gap-2 mb-4 md:mb-0 md:mr-8">
           <button className="flex items-center gap-2 px-4 py-2 border border-neutral-400 rounded bg-black text-white text-lg">
            <img src={logoimg} alt="Deploy" className="w-4 h-4" />
          </button>
          <span className="font-semibold text-base uppercase tracking-wider">Nextcart</span>
        </div>
        {/* Navigation */}
        <nav className="w-full md:w-auto flex justify-center">
          <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-8">
            <li>
              <a href="/" className="block p-2 text-base underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 text-black dark:text-neutral-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-base underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 text-black dark:text-neutral-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-base underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 text-black dark:text-neutral-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <Link to="/shipping-return-policy" className="block p-2 text-base underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 text-black dark:text-neutral-300">
                Shipping & Return Policy
              </Link>
            </li>
            <li>
              <a href="#" className="block p-2 text-base underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 text-black dark:text-neutral-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-base underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 text-black dark:text-neutral-300">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        {/* Deploy Button Example */}
        <div className="flex justify-center md:justify-end md:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 border border-neutral-400 rounded bg-black text-white text-xs">
            <img src={logoimg} alt="Deploy" className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-8 border-t border-neutral-700 pt-7 text-center text-xs text-neutral-400 space-y-1 md:flex md:justify-between md:items-center md:space-y-0 md:text-left">
        <div>
          © 2023-2025 Nextcart, Inc. All rights reserved.
          <span className="hidden md:inline mx-2">|</span>
          <a href="https://github.com/Nitishkum03/Ecommers" className="underline hover:text-white ml-0 md:ml-2">View the source</a>
        </div>
        <div>
          Created by <span className="font-semibold ">Nitish</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer