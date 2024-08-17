import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';

const skillsData = [
  {
    name: 'UI Design',
    icon: (
      <FaCameraRetro className='text-5xl text-primary group-hover:text-white duration-300' />
    ),
    link: '#',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    name: 'Product Design',
    icon: (
      <GiNotebook className='text-5xl text-primary group-hover:text-white duration-300' />
    ),
    link: '#',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    name: 'Branding',
    icon: (
      <SlNote className='text-5xl text-primary group-hover:text-white duration-300' />
    ),
    link: '#',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
];
function Skills() {
  return (
    <div className='dark:bg-black dark:text-white  py-14'>
      <div className='container grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {[...skillsData, ...skillsData].map((skill, index) => (
          <div
            key={index}
            className='group hover:cursor-pointer bg-dark hover:bg-primary text-white gap-3 space-y-3 p-6 border dark:border-gray-700 duration-300 mx-auto max-w-[400px] flex flex-col justify-between h-full'
          >
            <div className='flex-grow space-y-3'>
              {skill.icon}
              <h1 className='text-2xl font-bold'>{skill.name}</h1>
              <p className=''>{skill.description}</p>
            </div>
            <a
              href={skill.link}
              className='text-primary text-lg font-bold inline-block group-hover:text-white duration-300'
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
