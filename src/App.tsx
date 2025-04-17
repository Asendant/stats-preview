import Statistic from "./components/statistic/statistic";
import DesktopImage from "./images/image-header-desktop.jpg";

function App() {
  return (
    <>
      <div className='bg-very-dark-blue min-w-screen h-screen relative flex justify-center'>
        <div className="bg-dark-desaturated-blue flex flex-col-reverse justify-end m-auto w-[87.2%] min-h-[81.589%] rounded-lg overflow-hidden">
          {/* Insights */}
          <div className="px-[1.97rem] py-6 flex flex-col">
            {/* Text */}
            <div className="mb-4">
              <h1 className="text-[1.3rem] xs:text-[1.5rem] sm:text-[2rem] font-bold text-center mb-2">Get <em className="not-italic text-soft-violet">insights</em> that help your business grow.</h1>
              <p className="text-slightly-transparent-white text-[0.8rem] xs:text-[0.875rem] sm:text-[0.94rem] font-light text-center">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            </div>
            {/* Numbers */}
            <div className="mt-10">
              <Statistic number="10k+" category="COMPANIES" />
              <Statistic number="314" category="TEMPLATES" />
              <Statistic number="12M+" category="QUERIES" />
            </div>
          </div>
          {/* Picture */}
          <div className="relative aspect-[1.2/1] sm:aspect-[1.5/1]">
              <img src={DesktopImage} alt="Woman on computer typing as another woman laughs looking at something out of the frame." className="relative object-cover w-full h-full rounded-tl-lg rounded-tr-lg"/>
              <div className="absolute inset-0 bg-soft-violet pointer-events-none mix-blend-multiply" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
