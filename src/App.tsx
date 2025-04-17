import Statistic from "./components/statistic/statistic";
import DesktopImage from "./images/image-header-desktop.jpg";

function App() {
  return (
    <>
      <div className='bg-very-dark-blue min-h-screen w-screen relative flex flex-col items-center justify-center md:flex-row'>
        <div className="flex flex-col-reverse w-4/5 bg-dark-desaturated-blue rounded-lg mt-10 mb-10 md:flex-row">
          {/* Insights */}
          <div className="p-10 md:w-1/2 md:p-16 md:flex md:flex-col md:justify-center">
            {/* Text */}
            <div className="mb-10 md:mb-24">
              <h1 className="font-bold text-white text-2xl text-center mb-6 md:text-5xl md:text-start md:mb-10">Get <em className="not-italic text-soft-violet">insights</em> that help your business grow.</h1>
              <p className="text-very-transparent-white text-center md:text-xl md:text-start">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            </div>
            {/* Numbers */}
            <div className="lg:flex lg:flex-row">
              <Statistic number="10k+" category="COMPANIES" />
              <Statistic number="314" category="TEMPLATES" />
              <Statistic number="12M+" category="QUERIES" />
            </div>
          </div>
          {/* Picture */}
          <div className="relative md:w-1/2">
              <img src={DesktopImage} alt="Woman on computer typing as another woman laughs looking at something out of the frame." className="rounded-tl-lg rounded-tr-lg object-cover md:rounded-none md:w-full md:h-full"/>
              <div className="absolute inset-0 bg-soft-violet pointer-events-none mix-blend-multiply" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
