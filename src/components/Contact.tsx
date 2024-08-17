function Contact() {
  return (
    <>
      <span id='contact'></span>
      <div className='dark:bg-black dark:text-white py-14'>
        <div className='container grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 place-items-center bg-dark/80'>
          <div className='space-y-3 col-span-2'>
            <h2 className='text-5xl font-bold text-white/90'>
              Lets work together on your next project
            </h2>
            <p className='text-white/70'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem necessitatibus quasi et vel,
            </p>
          </div>
          <div className='grid place-items-center'>
            <a
              href='.'
              className='inline-block uppercase tracking-wider text-white bg-primary px-3 py-2'
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
