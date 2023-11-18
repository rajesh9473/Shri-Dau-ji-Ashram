import React from 'react'

const Home = () => {     
  return (
    <div>
      <div className='h-screen w-full flex flex-col'>
        <div className='flex-grow  flex flex-col  items-center decoration-4 justify-center' style={{ background: 'linear-gradient(to right , rgba(0,0,0,0.4) , rgba(0,0,0,0.4)),url(/assets/pic2.jpeg)' }}>
          <h1 className='text-4xl text-white  pt-20'>  GURUJI SHRI SHRI RAJ-RAJESHWAR MAHRAJ</h1>
          <div className='h-24 border border-dashed border-white'>

          </div>
          <button className='bg-transparent border border-white rounded-3xl text-white px-10 mt-2 hover:bg-white hover:text-black py-3'> explore </button>
        </div>
      </div>
      <div className='flex justify-evenly border border-purple'>
        {/*secend page*/}
        <div className=' text-center p-3'>
          pooja
          <div className=' flex justify-center text-center'>
          
            <img className='rounded-full w-28 h-28' src='assets/image2.webp' alt='...' />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe recusandae expedita exercitationem dolorem laudantium harum nam quo similique asperiores, numquam delectus fugiat optio pariatur, nihil assumenda quia possimus odio sapiente.</p>
        </div>
        <div className=' text-center p-3'>
          temple
          <div className='flex justify-center'>
            
            <img className='rounded-full w-28 h-28' src='assets/pic8.jpeg' alt='...' />
          </div>
          <div>
            <p>Loremf ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem voluptatum suscipit pariatur alias voluptates impedit soluta ab, eius necessitatibus voluptate, perferendis sint qui enim! Praesentium illo omnis dolorem rem.</p>
          </div>
        </div>
        <div className='p-3 text-center'>
          shankalp
          <div className='flex justify-center'>
            <img className=' rounded-full w-28 h-28' src='assets/hindu-03.webp ' alt='...' />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nam, harum iste beatae reiciendis aliquam ab. Illum pariatur cum alias voluptatum earum fugit, itaque, magnam rem hic, id perspiciatis quis.</p>
        </div>
        <div className='p-3 text-center'>
          use of shankalp
          <div className="flex justify-center">
            <img className='rounded-full w-28 h-28' src='assets/cow.jpg' alt='...' />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe mollitia illum laboriosam, sed similique necessitatibus voluptatibus. Incidunt dolore illum consequatur, quae et quasi amet officia vero excepturi optio recusandae!</p>
        </div>
      </div>
      <div className=' p-10 border border-black flex'>
        <div className='w-full'>
          <img src='assets/pic3.jpeg' />
        </div>
        <div className='w-full text-center p-5 justify-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, praesentium nesciunt laudantium quidem, unde aperiam mollitia quae eligendi ducimus cupiditate nostrum doloribus aliquam hic repudiandae molestiae harum tempora! Pariatur, culpa.
        </div>
      </div>
      <div className='flex justify-evenly p-2'>
        <div className='w-full px-2'>
          <img src='assets/pic4.jpeg' />

       <div className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet voluptatem non quas delectus natus dolore. Autem velit, aperiam perferendis facilis, facere dolores molestiae reiciendis dolor dolorem culpa et impedit. </div>
        </div>
        <div className='w-full px-3 text-center '>
          <div>
            <img src='assets/pic5.jpeg' />

          </div>
           <div className='py-2'>
          photo 2
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut minima delectus illum, magni deserunt tenetur, iusto, ullam quas quo impedit aliquid exercitationem corporis sequi? Quo esse ducimus id est perferendis?

           </div>
        </div>
        <div className='w-full px-3 text-center'>
          <img src='assets/pic3.jpeg'    className=  'h-[264px] w-full' />

          <div className='p-2'>
            
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam expedita magnam nisi porro aspernatur dolores animi saepe quaerat perferendis corrupti! Fugiat magnam repellat quas culpa repudiandae optio architecto quibusdam quaerat!
            
            </div>
        </div>
      </div>
      <div className=' text-center    align-middle'>
        <button className='bg-colour bg-orange-200 rounded-full py-2 px-5'>
          Shankalp for our Ashram
        </button>
        <div className='flex justify-evenly p-10'>
          <img src="assets/pic3.jpeg" alt="" />
          <div> text </div>
        </div>
        <div className='flex  justify-evenly p-5'>
        <img src="assets/pic3.jpeg" alt="" />

          <div>
            text
          </div>
        </div>
        <div className='flex justify-evenly'>
        <img src="assets/pic3.jpeg" alt="" />
        <div>
            text
          </div>
        </div>
      </div>
      <div className=' flex justify-center'>
        <img src='assets/pic1.png' alt='...' />
      </div>
      <div>
        <div>
          image
          <div>
            text
            </div>
        </div>
      </div>
    </div>

  )
}

export default Home