import React from 'react'


const App = () => {
  return (
    <div>
      <header className='bg-gray-800 flex justify-between p-8 px-12 items-center'>
        <h1 className='text-white text-3xl font-bold tracking-wider cursor-pointer hover:scale-105 hover:text-orange-300'>Logo</h1>
        <nav className='flex items-center gap-10'>
          <a className='text-white text-lg border-b-2 border-transparent hover:border-white hover:transition duration-700 ease-in-out' href="#">Home</a>
          <a className='text-white text-lg border-b-2 border-transparent hover:border-white hover:transition duration-700 ease-in-out' href="#">About</a>
          <a className='text-white text-lg border-b-2 border-transparent hover:border-white hover:transition duration-700 ease-in-out' href="#">Contact</a>
        </nav>
        <button className='text-white px-5 py-3 tracking-widest border border-white duration-300 font-bold rounded-md hover:text-gray-800 hover:bg-white '>Login</button>
      </header>


      <div className="bg-top bg-[url('https://wallpapers.com/images/hd/4k-mountain-1obt47t74ynfn450.jpg')] w-full flex flex-col gap-5 justify-center items-center h-[700px] border border-black">
        <h1 className="text-white text-8xl font-extrabold tracking-widest">
          Hero Title
        </h1>
        <p className="text-center	 max-w-[1200px] text-white text-lg font-extrabold tracking-widest">
          Hero SubTitle Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Dolores vel itaque impedit consectetur
          odio sequi quisquam. Libero cum aperiam sapiente!
        </p>
      </div>

      <section className='cardBox bg-gray-800 p-10'>
        <div className="container mx-auto px-4 flex justify-center gap-10 items-center flex-wrap ">
          <div className="miniCard  border rounded-xl p-5 flex flex-col gap-2 ">
            <img className='w-full h-40 object-cover rounded-xl' src="https://wallpapers.com/images/hd/4k-mountain-l3f04sogeaabr5h0.jpg" alt="" />
            <h2 className='text-white'>Mountain 1</h2>
            <p className='text-white text-lg-20 overflow-hidden max-w-60'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button className='text-white  rounded-xl py-2 tracking-widest border border-white duration-300 font-bold hover:text-gray-800 hover:bg-white '>Read more</button>
          </div>

          <div className="miniCard  border rounded-xl p-5 flex flex-col gap-2 ">
            <img className='w-full h-40 object-cover rounded-xl' src="https://wallpapers.com/images/hd/4k-mountain-0hb4gnwalnj51zsh.jpg" alt="" />
            <h2 className='text-white'>Mountain 1</h2>
            <p className='text-white text-lg-20 overflow-hidden max-w-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='text-white  rounded-xl py-2 tracking-widest border border-white duration-300 font-bold hover:text-gray-800 hover:bg-white '>Read more</button>
          </div>

          <div className="miniCard  border rounded-xl p-5 flex flex-col gap-2 ">
            <img className='w-full h-40 object-cover rounded-xl' src="https://i.pinimg.com/736x/ce/20/39/ce2039a577b8c5f76a8cdba7cbb8b5d4.jpg" alt="" />
            <h2 className='text-white'>Mountain 1</h2>
            <p className='text-white text-ellipsis max-w-60'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button className='text-white  rounded-xl py-2 tracking-widest border border-white duration-300 font-bold hover:text-gray-800 hover:bg-white '>Read more</button>
          </div>

          <div className="miniCard  border rounded-xl p-5 flex flex-col gap-2 ">
            <img className='w-full h-40 object-cover rounded-xl' src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stephan-seeber-1054218.jpg&fm=jpg" alt="" />
            <h2 className='text-white'>Mountain 1</h2>
            <p className='text-white text-ellipsis max-w-60'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button className='text-white  rounded-xl py-2 tracking-widest border border-white duration-300 font-bold hover:text-gray-800 hover:bg-white '>Read more</button>
          </div>

          

        </div>
      </section>


      <section className='bigBox'>
        <div className="container mx-auto px-4 flex justify-center gap-10 items-center flex-wrap">

        </div>

      </section>

      <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Logo</h2>
          </div>
        <div>
        <h3 className="text-white font-semibold mb-2">Navigation</h3>
        <div className="text-gray-400">
          <a href="#" className="block hover:text-white mb-2">Home</a>
          <a href="#" className="block hover:text-white mb-2">About</a>
          <a href="#" className="block hover:text-white mb-2">Our Mission</a>
        </div>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-2">Location</h3>
        <div className="text-gray-400">
          <a href="#" className="block hover:text-white mb-2">Address: Baku</a>
          <a href="#" className="block hover:text-white mb-2">Address: Seki</a>
        </div>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-2">Contact</h3>
        <div className="text-gray-400">
          <a href="#" className="block hover:text-white mb-2">About</a>
          <a href="#" className="block hover:text-white mb-2">Our Mission</a>
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">Contact</h3>
        <div className="text-gray-400">
          <a href="#" className="block hover:text-white mb-2">About</a>
          <a href="#" className="block hover:text-white mb-2">Our Mission</a>
        </div>
      </div>
    </div>
  </div>
      </footer>


    </div>
  )
}

export default App