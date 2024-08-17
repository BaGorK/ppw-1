function Experience() {
  return (
    <>
      <span id='experience'></span>
      <div className='dark:bg-black dark:text-white text-white/70 py-14'>
        <div className='container'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
            <div className='bg-black/50 p-4  grid place-items-center'>
              <div className='text-center space-y-3 '>
                <h2 className='text-5xl font-bold'>12</h2>
                <p className='text-xl font-semibold'>Years of Experience</p>
              </div>
            </div>
            <div className='grid grid-rows-2 gap-6'>
              <div className='text-center p-6 bg-dark'>
                <h2 className='text-3xl font-bold'>120+</h2>
                <p className=''>Projects Completed</p>
              </div>
              <div className='text-center p-6 bg-dark'>
                <h2 className='text-3xl font-bold'>60+</h2>
                <p className=''>Happy Clients</p>
              </div>
            </div>
            <div className='grid grid-rows-2 gap-6'>
              <div className='text-center p-6 bg-dark'>
                <h2 className='text-3xl font-bold'>100%</h2>
                <p className=''>Satisfaction Rate</p>
              </div>
              <div className='text-center p-6 bg-dark'>
                <h2 className='text-3xl font-bold'>24/7</h2>
                <p className=''>Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
