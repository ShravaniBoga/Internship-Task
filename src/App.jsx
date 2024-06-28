import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="font-sans text-center App">
      <div className="relative text-center text-white visual-arts-section">
        <img src='assets/deerpaint.jpg' alt="Visual Arts" className="w-full h-auto max-w-md mx-auto" />
        <h1 className="text-black text-left text-3xl font-extrabold w-[85%] md:w-[340px] pl-4 absolute top-[calc(50%+30px)]  left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[rgba(219,142,223,0.5)] p-2 md:top-[66%] md:left-[40%]">
          Visual Arts
        </h1>
        <p className="leading-[30px] mx-6 md:mx-[100px] py-[40px] text-lg text-[#333]">
          Visual arts, a symphony of colors and forms, offer a window into the soul of humanity, transcending words to convey profound emotions and narratives.
          From the strokes of a brush to the shaping of clay, artists craft a world where imagination flourishes and perspectives intertwine.
        </p>
      </div>

      {/* ###Paint */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-[50px] section-2">
        <div className="painting-section w-full md:max-w-[60%]">
          <h1 className='text-start ml-6 md:ml-12 mb-6 font-bold text-3xl text-[#1e0342]'>Painting</h1>
          <div className='paint-para text-left leading-[30px] mx-6 md:mx-[50px] text-lg text-[#333]'>
            <p>
              Painting is a timeless form of artistic expression that uses color, texture, and composition to convey emotions, ideas, and stories. Through the strokes of a brush, artists can capture the essence of a moment, depict the beauty of the natural world, or explore abstract concepts.
            </p>
            <p>
              Paintings can inspire, provoke thought, and connect people across cultures and generations, making it a profound and enduring art form.
            </p>
          </div>

          <div className="pt-10 gallery-link">
            <a href="#gallery" className="font-bold text-black no-underline">Gallery</a>
            <i className="fas fa-long-arrow-alt-right text-[#333] ml-2"></i>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 md:items-end md:mt-0">
          <img src='./assets/krish.jpg' alt="Painting 1" className="rounded-full my-4 w-[80%] md:w-[400px] h-[auto]" />
          <img src='./assets/flower.JPG' alt="Painting 2" className="rounded-full my-4 w-[50%] md:w-[200px] md:h-[200px] h-[auto] md:absolute md:top-[800px] md:right-[286px]" />
        </div>
      </div>

      {/* ###Sculpture */}
      <div className="mt-[140px] flex flex-col md:flex-row items-center justify-between px-6 md:px-[50px] section-3">

        <div className="flex flex-col items-center mt-6 md:items-start md:mt-0">
          <img src='./assets/budha-2.jpg' alt="Sculpture 1" className="object-cover my-4 rounded-full w-68 h-68 md:w-96 md:h-96" />
          <img src='./assets/nandi.jpg' alt="Sculpture 2" className="my-4 w-[50%] h-[60%] md:w-[220px] md:h-[160px] border border-red-800 rounded-[50%] md:absolute md:top-[1400px] md:left-[244px]" />
        </div>


        <div className="sculpture-section w-full md:max-w-[60%]">
          <h1 className='text-start ml-6 md:ml-12 mb-6 font-bold text-3xl text-[#1e0342]'>Sculpture</h1>
          <div className='sculpture-para text-left leading-[30px] mx-6 md:mx-[50px] text-lg text-[#333]'>
            <p>
              Sculpture is a three-dimensional art form that shapes materials like stone, metal, clay, and wood into expressive and dynamic works. It captures movement, emotion, and form in a tangible way, allowing viewers to experience art from multiple angles.
            </p>
            <p>
              Sculptures can range from realistic representations to abstract creations, each telling a unique story. This art form adds depth to our understanding of aesthetics and culture, enriching public spaces and private collections alike.
            </p>
          </div>
          <div className="pt-10 gallery-link">
            <a href="#gallery" className="font-bold text-black no-underline">Gallery</a>
            <i className="fas fa-long-arrow-alt-right text-[#333] ml-2"></i>
          </div>
        </div>
      </div>





      {/* ##Photography */}
      <div className="mt-[100px] flex flex-col md:flex-row items-center justify-between px-6 md:px-[50px] section-photography">
        <div className="photography-section w-full md:max-w-[60%]">
          <h1 className="text-start ml-6 md:ml-12 mb-6 font-bold text-3xl text-[#1e0342]">Photography</h1>
          <div className="photography-para text-left leading-[30px] mx-6 md:mx-[50px] text-lg text-[#333]">
            <p>
              Photography is the art of capturing moments through the lens of a camera, freezing time to tell stories, evoke emotions, and document reality. It blends technical skill with creative vision, allowing photographers to explore diverse subjects, from landscapes and portraits to abstract and street scenes.
            </p>
            <p>
              Photography not only preserves memories but also provides powerful insights into different cultures, perspectives, and experiences, making it an influential and accessible art form.
            </p>
          </div>
          <div className="pt-10 gallery-link">
            <a href="#gallery" className="font-bold text-black no-underline">Gallery</a>
            <i className="fas fa-long-arrow-alt-right text-[#333] ml-2"></i>
          </div>
        </div>
        <div className="flex flex-col items-center pt-16 md:items-end md:mt-0">
          <img src="./assets/p-2.jpg" alt="Photographer" className="rounded-[20%] my-4 w-[80%] md:w-[400px] h-auto" />
          <h1 className="section border-gray-500 border text-black text-left w-[35%] md:w-[150px] h-[80px] absolute md:top-[284%] left-[69%] transform translate-x-[-50%] translate-y-[-50%] text-2xl bg-[rgba(219,142,223,0.5)] p-2"></h1>

          <div className='md:top-[2077px]'>
            <img src="./assets/p-1.jpg" alt="Landscape" className="rounded-[20%] my-4 w-[50%] md:w-[180px] h-auto md:absolute md:top-[2077px] md:right-[1066px]" />
            <h1 className="section-small border-gray-500 border text-black text-left w-[35%] md:w-[150px] h-[80px] absolute md:top-[287%] md:left-[18%] transform translate-x-[-50%] translate-y-[-50%] text-2xl bg-[rgba(219,142,223,0.5)] p-2"></h1>


          </div>
        </div>
      </div>

      {/* ##Architecture */}
      <div className="mt-[150px] md:mt-[330px] mb-[160px] flex flex-col md:flex-row items-center justify-between px-6 md:px-[50px] architecture">
        <div className="flex flex-col items-center mt-6 md:items-start md:mt-0">
          <img src='./assets/taj-Mahal.jpg' alt="Architecture 1" className="my-4 w-[80%] md:w-[430px] h-auto" />
          <img src='./assets/tomb.png' alt="Architecture 2" className="w-[70%] md:w-[300px] h-auto md:absolute md:top-[362%] md:left-[280px]" />
        </div>
        <div className="architecture-section pt-10 w-full md:max-w-[60%]">
          <h1 className='text-start ml-6 md:ml-12 mb-6 font-bold text-3xl text-[#1e0342]'>Architecture</h1>
          <div className='architecture-para text-left leading-[30px] mx-6 md:mx-[50px] text-lg text-[#333]'>
            <p>
              Architecture
              is the art and science of designing and constructing buildings and spaces that shape our environment. It combines functionality with aesthetics, creating structures that are both practical and visually appealing.
            </p>
            <p>
              Architects consider factors like sustainability, culture, and human needs, resulting in diverse styles and innovative solutions. Architecture influences how we live, work, and interact, making it a fundamental aspect of society and a reflection of our collective identity.
            </p>
          </div>
          <div className="pt-10 gallery-link">
            <a href="#gallery" className="font-bold text-black no-underline">Gallery</a>
            <i className="fas fa-long-arrow-alt-right text-[#333] ml-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

