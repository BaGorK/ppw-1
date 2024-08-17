const ProjectsData = [
  {
    id: 1,
    name: 'Online Book Store',
    image: 'book-store.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '#',
  },
  {
    id: 2,
    name: 'Restaurant Web Page',
    image: 'book-store-web.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

    link: '#',
  },
  {
    id: 3,
    name: 'Web Development company',
    image: 'cozweb.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

    link: '#',
  },
  {
    id: 4,
    name: 'Portfolio',
    image: 'portfolio.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

    link: '#',
  },
  {
    id: 5,
    name: 'Web Development company',
    image: 'restaurant.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

    link: '#',
  },
];

function Projects() {
  return (
    <div className='dark:bg-black dark:text-white  py-14'>
      <div className='container'>
        <header className='flex flex-wrap items-center justify-between gap-6 py-6'>
          <div>
            <h2 className='text-5xl font-bold'>Featured Projects</h2>
            <p>Lorem ipsum dolor sit consectetur.</p>
          </div>
          <a
            href='.'
            className='inline-block  sm:ml-auto tracking-wider text-white bg-primary text-nowrap px-3 py-2'
          >
            View All
          </a>
        </header>

        {/* card section */}
        <section>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {ProjectsData.map((project, i) => (
              <div
                key={i}
                className='rounded-xl flex flex-col shadow-lg my-2 hover:shadow-2xl duration-300  dark:bg-dark/80 overflow-hidden'
              >
                <div className='h-fit w-full bg-white '>
                  <img
                    src={project.image}
                    alt={project.name + 'image'}
                    className='object-center object-cover max-h-[300px]'
                  />
                </div>
                <div className='space-y-3 p-4 flex-1 flex flex-col justify-between'>
                  <div className='space-y-2'>
                    <h1 className='text-3xl font-bold'>{project.name}</h1>
                    <p className='text-sm'>{project.description}</p>
                  </div>
                  <div>
                    <a
                      href={project.link}
                      className='text-primary uppercase my-2'
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
