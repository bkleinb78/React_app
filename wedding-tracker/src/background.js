import frontpg from '../src/frontpg.jpeg'
import './App.css';
const Background = () => {
    return (

<div
  class="
    w-full
    h-screen
    bg-gradient-to-r
    from-blue-500
    via-red-500
    to-yellow-500
    background-animate
  "
>

<div className="flex w-full justify-center items-center">
      <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-start flex-col md:mr-10'>
            <div className='flex flex-col justify-center items-center'>
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">The Kleinbergs Wedding!
          </h1>
          <img 
          src={frontpg} alt="frontpg" className=" rounded-full w-48 cursor-pointer py-4 "
          />
          <form className='flex flex-col justify-center items-center my-8'>
            <label className='my-4 text-2xl text-white'>
                Name :
                <input className="text-black" type='text' name='text' placeholder='Name...' />
            </label>
            <label className=' my-4 text-2xl text-white'>
                Email :
                <input className=" text-black"  type="email" placeholder="Email..."  name='text' onSubmit={() => {}}/>
            </label>
            <label className='text-2xl my-4 text-white'>
                Letter :
                <input className="text-black py-12" placeholder="Letter to us?!" type='text' name='text' onSubmit={() => {}}/>
            </label>
            
          </form>
          <button className='bg-[#2952e3] my-2 py-2 px-7 text-white mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                RSVP NOW!
          </button>
          </div>
        </div>
      </div>
        
    </div>


</div>
    )
}

export default Background;