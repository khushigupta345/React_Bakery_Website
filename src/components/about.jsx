
import { useNavigate } from 'react-router-dom';
import one from '../assets/1.jpg.jpeg';
import one1 from '../assets/2.jpg.jpeg';
import one3 from '../assets/3.jpg.jpeg';
import one4 from '../assets/8.jpg.jpeg';
export function About() {
  const navigate=useNavigate()
function con(){
navigate['/contact']
}

  return (
    <div >
    <div className="flex  w-full flex-col md:flex-row ">
      <div className="  h-full/2 w-full  px-2  grid grid-cols-2   columns-2 flex-row m-0 object-cover gap-0 ">
        <img src={one} alt="About" className='md:h-64 h-48 w-full '/>
              <img src={one1} alt="About" className='md:h-64 h-48 w-full ' />
                    <img src={one3} alt="About" className='md:h-64 h-48 w-full ' />
                          <img src={one4} alt="About" className='md:h-64 h-48 w-full '  />
      </div>
      <div className='p-4 md:pl-8 flex flex-col justify-center w-full pr-2 mt-0 pt-0 md:-mt-4'>
        <h1 className='text-pink-700 font-bold '>About Us</h1>
        <h1 className='text-black text-4xl font-bold'>welcome to sweet</h1>
        <h1 className=' text-base text-black md:text-5xl font-bold underline underline-offset-7 decoration-pink-600 decoration-7'>  delight's bakery.</h1>
      

<p className='text-base font-bold mt-6  md:text-2xl '>where passion and creativity blend seamlessly to bring you the finest baked goods.</p>
    <p className='text-base font-serif md:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nemo aperiam quisquam repellat aliquam asperiores debitis quo ex laborum. Eius maiores, rem quos totam repudiandae sequi at quia sed laudantium? Temporibus, asperiores. Minus debitis nemo quo. Ducimus eaque rerum nobis!</p>  
     <button className='mt-8 bg-pink-700 rounded p-3 w-30 ' onClick={con}>Contact Us</button>
      </div>
    </div>
    </div>
  );
}