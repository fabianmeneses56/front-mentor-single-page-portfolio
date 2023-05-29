import Contact from './components/Contact'
import Header from './components/Header'
import OptionsGrid from './components/OptionsGrid'
import Presentation from './components/Presentation'
import Slider from './components/Slider'

function App() {
  return (
    <div className=' flex flex-col  items-center '>
      <div className='mt-6 w-[90%] sm:w-4/5  '>
        <Header />

        <div className='flex  flex-col items-center text-center '>
          <h1 className='mb-7 mt-12 text-5xl font-bold text-black '>
            Design solutions made easy
          </h1>
          <p className=' max-w-lg  text-center text-2xl text-black sm:text-lg'>
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </p>
        </div>

        <OptionsGrid />

        <Presentation />
      </div>
      <Slider />
      <div className='w-[90%] sm:w-4/5'>
        <Contact />
        <div className='mb-7 mt-7 '>
          <Header />
        </div>
      </div>
    </div>
  )
}

export default App
