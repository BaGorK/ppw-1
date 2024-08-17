import DarkMode from './DarkMode';

/* eslint-disable react-refresh/only-export-components */
export const NavLinks = [
  {
    id: 1,
    name: 'HOME',
    link: '#',
  },
  {
    id: 4,
    name: 'SKILLS',
    link: '#skills',
  },
  {
    id: 2,
    name: 'PROJECTS',
    link: '#project',
  },
  {
    id: 5,
    name: 'EXPERIENCE',
    link: '#experience',
  },
  {
    id: 6,
    name: 'CONTACT',
    link: '#contact',
  },
];

function Navbar() {
  return (
    <div className='shadow-md  w-full dark:bg-black dark:text-white'>
      <div className='container py-2 sm:py-0'>
        <div className='flex justify-between items-center'>
          <div>
            <span className='text-3xl font-bold'>PortFolio</span>
          </div>

          {/* links */}
          <nav className='hidden sm:block'>
            <ul className='flex items-center gap-6'>
              {NavLinks.map((navLink) => (
                <li key={navLink.id}>
                  <a
                    href={navLink.link}
                    className='inline-block font-[400] hover:text-primary py-3 duration-500'
                  >
                    {navLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* dark mode */}
          <DarkMode />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
