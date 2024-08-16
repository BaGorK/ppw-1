/* eslint-disable react-refresh/only-export-components */
export const NavLinks = [
  {
    id: 1,
    name: 'HOME',
    link: '/#',
  },
  {
    id: 2,
    name: 'PROJECTS',
    link: '/#project',
  },
  {
    id: 1,
    name: 'ABOUT',
    link: '/#about',
  },
  {
    id: 1,
    name: 'CONTACT',
    link: '/#contact',
  },
];

function Navbar() {
  return (
    <div className='shadow-md w-full'>
      <div className='container '>
        <div className='flex justify-between'>
          <div>
            <span className='text-3xl font-bold'>Portfolio</span>
          </div>
          <div>
            <ul>
              {NavLinks.map((navLink) => (
                <li key={navLink.id} className='inline-block mx-4'>
                  <a
                    href={navLink.link}
                    className='text-gray-500 hover:text-gray-900'
                  >
                    {navLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
