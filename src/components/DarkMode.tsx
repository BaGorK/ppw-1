import { useEffect, useState } from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

type Theme = 'dark' | 'light';

function DarkMode() {
  const [theme, setTheme] = useState<Theme>(() => {
    const localTheme = localStorage.getItem('ppw1Theme') as Theme;
    return localTheme || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      // localStorage.setItem('ppw1Theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      // localStorage.setItem('ppw1Theme', 'light');
    }
  }, [theme]);

  return (
    <div className='text-2xl hover:cursor-pointer'>
      {theme === 'dark' ? (
        <BiSolidSun onClick={() => setTheme('light')} />
      ) : (
        <BiSolidMoon onClick={() => setTheme('dark')} />
      )}
    </div>
  );
}

export default DarkMode;
