function Hero() {
  return (
    <div className='dark:bg-black dark:text-white py-14'>
      <div className='container place-items-center gap-3 grid grid-cols-1 sm:grid-cols-2'>
        {/* image */}
        <div>
          <img
            src='person.png'
            alt='hero image'
            className='bg-cover bg-center '
          />
        </div>

        {/* content */}
        <div className='space-y-3'>
          <p className='text-primary'>Hello I'm Angela</p>
          <h1 className='text-5xl font-bold'>Visual Designer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            veritatis explicabo quibusdam quae reprehenderit ab autem ducimus
            incidunt blanditiis similique? Eum magnam minima suscipit eius
            architecto odio aperiam, nostrum ipsum.
          </p>
          <a
            href='.'
            className='inline-block uppercase tracking-wider text-white bg-primary px-3 py-2'
          >
            About Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
