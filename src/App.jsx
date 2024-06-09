import { LinearGradient } from 'react-text-gradients'
import { Link } from 'react-router-dom'
import MainOperation from './components/MainOperation'

function App() {
  return (
    <div className='relative flex flex-col items-center jusitify-start w-full font-inter min-h-screen bg-[#101010] text-white'>
      <h1 className='font-bold text-[35px] lg:text-[45px] mt-[40px] lg:mt-[50px]'>
        <LinearGradient gradient={['to right', '#17acff, #ff68f0']}>
          MP3
        </LinearGradient>
        Convertor
      </h1>
      
      <div className='flex flex-col items-center justify-center text-center max-w-[90%] mt-2 text-[14px] lg:text-[16px]'>
        This project is to convert and download the youtube videos into MP3
      </div>

      <MainOperation />

      <div className='absolute bottom-2 w-[90%] lg:w-[50%]'>
        <div className='flex items-center justify-between px-5'>
            <div className='flex flex-col items-start justify-center'>
              <p className='font-medium text-[12px] lg:text-[16px] mt-[40px] lg:mt-[50px]'>
                <LinearGradient gradient={['to right', '#17acff, #ff68f0']}>
                  MP3
                </LinearGradient>
                Convertor
              </p>
              <p className='text-[12px] lg:text-[15px] text-[#d1d1d1]'>
                By Jeet
              </p>
            </div>

          <div className='flex items-center text-[13px] lg:text-[16px] pt-[45px] lg:pt-[50px] justify-center gap-3'>
            <Link to='https://instagram.com/jeet._004' target='_blank'><i className="fa-brands fa-instagram hover:opacity-80"></i></Link>
            <Link to='https://github.com/NightHunt04' target='_blank'><i className="fa-brands fa-github hover:opacity-80"></i></Link>
            <Link to='https://www.linkedin.com/in/jeet-bherwani-61aa37251/' target='_blank'><i className="fa-brands fa-linkedin hover:opacity-80"></i></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
