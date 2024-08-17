import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { NavLinks } from './Navbar';

function Footer() {
  return (
    <div className='dark:bg-black dark:text-white'>
      <div className='container  py-14'>
        <nav className='hidden sm:block'>
          <ul className='flex items-center justify-center gap-3'>
            {NavLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.link}
                  className='inline-block uppercase text-xl tracking-wider hover:text-primary duration-300'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='container bg-dark py-6'>
        <div className='flex flex-wrap items-center justify-between gap-6'>
          <h1 className='text-3xl font-bold text-white/80'>PortFolio</h1>
          <div className='flex items-center justify-center gap-3'>
            <FaFacebook className='text-4xl text-white/90 hover:text-primary cursor-pointer duration-300' />
            <FaInstagram className='text-4xl text-white/90 hover:text-primary cursor-pointer duration-300' />
            <FaYoutube className='text-4xl text-white/90 hover:text-primary cursor-pointer duration-300' />
          </div>
          {/* copy rights */}
          <p className='text-white/80 tracking-wider hidden sm:block'>
            © 2024 PortFolio. All rights reserved 😎
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
